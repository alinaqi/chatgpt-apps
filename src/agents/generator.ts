import { AppProposal, ToolProposal, WidgetProposal } from '../schemas/index.js';

export interface GeneratedFile {
  path: string;
  content: string;
}

/**
 * Agent that generates MCP server code from an app proposal
 */
export class GeneratorAgent {
  /**
   * Generate all files for the ChatGPT app
   */
  async generate(proposal: AppProposal): Promise<GeneratedFile[]> {
    const files: GeneratedFile[] = [];

    // Generate package.json
    files.push(this.generatePackageJson(proposal));

    // Generate tsconfig.json
    files.push(this.generateTsConfig());

    // Generate main server entry point
    files.push(this.generateServerEntry(proposal));

    // Generate tools file
    files.push(this.generateTools(proposal));

    // Generate types file
    files.push(this.generateTypes(proposal));

    // Generate API client
    files.push(this.generateApiClient(proposal));

    // Generate widgets if any
    if (proposal.widgets.length > 0) {
      files.push(this.generateWidgets(proposal));
    }

    return files;
  }

  /**
   * Generate package.json for the MCP server
   */
  private generatePackageJson(proposal: AppProposal): GeneratedFile {
    const packageJson = {
      name: proposal.name,
      version: proposal.version,
      description: proposal.description,
      main: 'dist/index.js',
      type: 'module',
      scripts: {
        build: 'tsc',
        start: 'node dist/index.js',
        dev: 'tsx src/index.ts',
      },
      dependencies: {
        '@modelcontextprotocol/sdk': '^1.0.0',
        zod: '^3.23.0',
      },
      devDependencies: {
        '@types/node': '^20.12.0',
        typescript: '^5.4.0',
        tsx: '^4.7.0',
      },
    };

    return {
      path: 'package.json',
      content: JSON.stringify(packageJson, null, 2),
    };
  }

  /**
   * Generate tsconfig.json
   */
  private generateTsConfig(): GeneratedFile {
    const tsConfig = {
      compilerOptions: {
        target: 'ES2022',
        module: 'NodeNext',
        moduleResolution: 'NodeNext',
        lib: ['ES2022'],
        outDir: './dist',
        rootDir: './src',
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true,
        declaration: true,
      },
      include: ['src/**/*'],
      exclude: ['node_modules', 'dist'],
    };

    return {
      path: 'tsconfig.json',
      content: JSON.stringify(tsConfig, null, 2),
    };
  }

  /**
   * Generate main MCP server entry point
   */
  private generateServerEntry(proposal: AppProposal): GeneratedFile {
    const toolImports = proposal.resources
      .flatMap((r) => r.tools)
      .map((t) => t.name);

    const content = `#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { tools, handleToolCall } from './tools.js';

const server = new Server(
  {
    name: '${proposal.name}',
    version: '${proposal.version}',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  return handleToolCall(name, args || {});
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('${proposal.name} MCP server running on stdio');
}

main().catch(console.error);
`;

    return {
      path: 'src/index.ts',
      content,
    };
  }

  /**
   * Generate tools definitions and handlers
   */
  private generateTools(proposal: AppProposal): GeneratedFile {
    // Deduplicate tools by name
    const allToolsRaw = proposal.resources.flatMap((r) => r.tools);
    const seenNames = new Set<string>();
    const allTools = allToolsRaw.filter((tool) => {
      if (seenNames.has(tool.name)) {
        return false;
      }
      seenNames.add(tool.name);
      return true;
    });

    const toolDefinitions = allTools.map((tool) => this.generateToolDefinition(tool));
    const toolHandlers = allTools.map((tool) => this.generateToolHandler(tool));

    const content = `import { z } from 'zod';
import { apiClient } from './api-client.js';

// Tool type definition
interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties: Record<string, unknown>;
    required: string[];
  };
}

// Tool definitions for MCP
export const tools: ToolDefinition[] = [
${toolDefinitions.join(',\n')}
];

// Tool call handlers
${toolHandlers.join('\n\n')}

// Main handler dispatcher
export async function handleToolCall(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: string; text: string }> }> {
  try {
    let result: unknown;

    switch (name) {
${allTools.map((t) => `      case '${t.name}':
        result = await handle_${t.name}(args);
        break;`).join('\n')}
      default:
        throw new Error(\`Unknown tool: \${name}\`);
    }

    return {
      content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return {
      content: [{ type: 'text', text: \`Error: \${message}\` }],
    };
  }
}
`;

    return {
      path: 'src/tools.ts',
      content,
    };
  }

  /**
   * Generate a single tool definition
   */
  private generateToolDefinition(tool: ToolProposal): string {
    const inputSchema: Record<string, unknown> = {
      type: 'object',
      properties: {} as Record<string, unknown>,
      required: [] as string[],
    };

    for (const param of tool.parameters) {
      (inputSchema.properties as Record<string, unknown>)[param.name] = {
        type: this.mapParamType(param.type),
        description: param.description || `${param.name} parameter`,
      };
      if (param.required) {
        (inputSchema.required as string[]).push(param.name);
      }
    }

    return `  {
    name: '${tool.name}',
    description: '${this.escapeString(tool.description)}',
    inputSchema: ${JSON.stringify(inputSchema, null, 4).split('\n').join('\n    ')}
  }`;
  }

  /**
   * Reserved words that cannot be used as variable names
   */
  private static readonly RESERVED_WORDS = new Set([
    'arguments', 'break', 'case', 'catch', 'class', 'const', 'continue',
    'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export',
    'extends', 'false', 'finally', 'for', 'function', 'if', 'import',
    'in', 'instanceof', 'new', 'null', 'return', 'super', 'switch',
    'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield',
  ]);

  /**
   * Sanitize parameter name to avoid reserved words
   */
  private sanitizeParamName(name: string): string {
    if (GeneratorAgent.RESERVED_WORDS.has(name)) {
      return `_${name}`;
    }
    return name;
  }

  /**
   * Generate a tool handler function
   */
  private generateToolHandler(tool: ToolProposal): string {
    // Deduplicate params and sanitize names
    const seenParams = new Set<string>();
    const uniqueParams = tool.parameters.filter((p) => {
      if (seenParams.has(p.name)) return false;
      seenParams.add(p.name);
      return true;
    });

    const paramDestructure = uniqueParams.length > 0
      ? `const { ${uniqueParams.map((p) => {
          const safeName = this.sanitizeParamName(p.name);
          return safeName !== p.name ? `${p.name}: ${safeName}` : p.name;
        }).join(', ')} } = args as {
    ${uniqueParams.map((p) => `${p.name}${p.required ? '' : '?'}: ${this.mapToTsType(p.type)};`).join('\n    ')}
  };`
      : '';

    const pathParams = tool.path.match(/\{([^}]+)\}/g) || [];
    let path = tool.path;
    for (const param of pathParams) {
      const paramName = param.slice(1, -1);
      const safeName = this.sanitizeParamName(paramName);
      path = path.replace(param, `\${${safeName}}`);
    }

    const bodyParams = uniqueParams.filter(
      (p) => !tool.path.includes(`{${p.name}}`) && p.name !== 'limit' && p.name !== 'page'
    );

    const hasBody = ['POST', 'PUT', 'PATCH'].includes(tool.httpMethod) && bodyParams.length > 0;
    const bodyArg = hasBody
      ? `, { ${bodyParams.map((p) => this.sanitizeParamName(p.name)).join(', ')} }`
      : '';

    return `async function handle_${tool.name}(args: Record<string, unknown>) {
  ${paramDestructure}

  return apiClient.${tool.httpMethod.toLowerCase()}(\`${path}\`${bodyArg});
}`;
  }

  /**
   * Generate types file
   */
  private generateTypes(proposal: AppProposal): GeneratedFile {
    // Deduplicate tools by name
    const allToolsRaw = proposal.resources.flatMap((r) => r.tools);
    const seenNames = new Set<string>();
    const allTools = allToolsRaw.filter((tool) => {
      if (seenNames.has(tool.name)) {
        return false;
      }
      seenNames.add(tool.name);
      return true;
    });

    const content = `// Generated types for ${proposal.name}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

// Tool parameter types
${allTools.map((tool) => {
  if (tool.parameters.length === 0) return '';
  // Deduplicate params by name within each tool
  const seenParams = new Set<string>();
  const uniqueParams = tool.parameters.filter((p) => {
    if (seenParams.has(p.name)) return false;
    seenParams.add(p.name);
    return true;
  });
  return `export interface ${this.pascalCase(tool.name)}Params {
  ${uniqueParams.map((p) => `${p.name}${p.required ? '' : '?'}: ${this.mapToTsType(p.type)};`).join('\n  ')}
}`;
}).filter(Boolean).join('\n\n')}
`;

    return {
      path: 'src/types.ts',
      content,
    };
  }

  /**
   * Generate API client
   */
  private generateApiClient(proposal: AppProposal): GeneratedFile {
    const authHeader = this.getAuthHeader(proposal.authType);

    const content = `// API Client for ${proposal.name}

const BASE_URL = process.env.API_BASE_URL || '';
const API_KEY = process.env.API_KEY || '';

interface RequestOptions {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

async function request<T>(path: string, options: RequestOptions): Promise<T> {
  const url = \`\${BASE_URL}\${path}\`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ${authHeader}
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(\`API error: \${response.status} \${response.statusText}\`);
  }

  return response.json() as Promise<T>;
}

export const apiClient = {
  get<T>(path: string): Promise<T> {
    return request<T>(path, { method: 'GET', headers: {} });
  },

  post<T>(path: string, body?: unknown): Promise<T> {
    return request<T>(path, {
      method: 'POST',
      headers: {},
      body: body ? JSON.stringify(body) : undefined,
    });
  },

  put<T>(path: string, body?: unknown): Promise<T> {
    return request<T>(path, {
      method: 'PUT',
      headers: {},
      body: body ? JSON.stringify(body) : undefined,
    });
  },

  patch<T>(path: string, body?: unknown): Promise<T> {
    return request<T>(path, {
      method: 'PATCH',
      headers: {},
      body: body ? JSON.stringify(body) : undefined,
    });
  },

  delete<T>(path: string): Promise<T> {
    return request<T>(path, { method: 'DELETE', headers: {} });
  },
};
`;

    return {
      path: 'src/api-client.ts',
      content,
    };
  }

  /**
   * Generate widgets file
   */
  private generateWidgets(proposal: AppProposal): GeneratedFile {
    const widgetComponents = proposal.widgets.map((widget) =>
      this.generateWidgetComponent(widget)
    );

    const content = `// Generated widgets for ${proposal.name}
// These can be used with ChatGPT's window.openai API

${widgetComponents.join('\n\n')}

// Widget registry
export const widgets = {
${proposal.widgets.map((w) => `  ${w.name}: ${w.name},`).join('\n')}
};
`;

    return {
      path: 'src/widgets.ts',
      content,
    };
  }

  /**
   * Generate a single widget component
   */
  private generateWidgetComponent(widget: WidgetProposal): string {
    switch (widget.componentType) {
      case 'form':
        return this.generateFormWidget(widget);
      case 'table':
        return this.generateTableWidget(widget);
      case 'detail':
        return this.generateDetailWidget(widget);
      default:
        return this.generateGenericWidget(widget);
    }
  }

  private generateFormWidget(widget: WidgetProposal): string {
    const fields = widget.fields || [];
    return `export const ${widget.name} = {
  name: '${widget.name}',
  description: '${this.escapeString(widget.description)}',
  tool: '${widget.toolName}',
  type: 'form',
  fields: [
${fields.map((f) => `    { name: '${f.name}', label: '${f.label}', type: '${f.inputType}'${f.validation ? `, validation: '${f.validation}'` : ''} },`).join('\n')}
  ],
  render: (data: Record<string, unknown>) => \`
    <form id="${widget.name}">
${fields.map((f) => `      <label>${f.label}: <input type="${f.inputType}" name="${f.name}" /></label>`).join('\n')}
      <button type="submit">Submit</button>
    </form>
  \`,
};`;
  }

  private generateTableWidget(widget: WidgetProposal): string {
    return `export const ${widget.name} = {
  name: '${widget.name}',
  description: '${this.escapeString(widget.description)}',
  tool: '${widget.toolName}',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return \`
      <table>
        <thead>
          <tr>\${headers.map(h => \`<th>\${h}</th>\`).join('')}</tr>
        </thead>
        <tbody>
          \${data.map((row: unknown) => \`<tr>\${headers.map(h => \`<td>\${(row as Record<string, unknown>)[h]}</td>\`).join('')}</tr>\`).join('')}
        </tbody>
      </table>
    \`;
  },
};`;
  }

  private generateDetailWidget(widget: WidgetProposal): string {
    return `export const ${widget.name} = {
  name: '${widget.name}',
  description: '${this.escapeString(widget.description)}',
  tool: '${widget.toolName}',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return \`
      <dl>
        \${entries.map(([key, value]) => \`<dt>\${key}</dt><dd>\${value}</dd>\`).join('')}
      </dl>
    \`;
  },
};`;
  }

  private generateGenericWidget(widget: WidgetProposal): string {
    return `export const ${widget.name} = {
  name: '${widget.name}',
  description: '${this.escapeString(widget.description)}',
  tool: '${widget.toolName}',
  type: '${widget.componentType}',
  render: (data: unknown) => JSON.stringify(data, null, 2),
};`;
  }

  /**
   * Get auth header based on auth type
   */
  private getAuthHeader(authType: string): string {
    switch (authType) {
      case 'apiKey':
        return "'X-API-Key': API_KEY,";
      case 'bearer':
        return "'Authorization': `Bearer ${API_KEY}`,";
      case 'oauth2':
        return "'Authorization': `Bearer ${API_KEY}`,";
      default:
        return '';
    }
  }

  /**
   * Map parameter type to JSON schema type
   */
  private mapParamType(type: string): string {
    const typeMap: Record<string, string> = {
      string: 'string',
      integer: 'integer',
      number: 'number',
      boolean: 'boolean',
      array: 'array',
      object: 'object',
    };
    return typeMap[type] || 'string';
  }

  /**
   * Map parameter type to TypeScript type
   */
  private mapToTsType(type: string): string {
    const typeMap: Record<string, string> = {
      string: 'string',
      integer: 'number',
      number: 'number',
      boolean: 'boolean',
      array: 'unknown[]',
      object: 'Record<string, unknown>',
    };
    return typeMap[type] || 'unknown';
  }

  /**
   * Convert to PascalCase
   */
  private pascalCase(str: string): string {
    return str
      .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
      .replace(/^\w/, (c) => c.toUpperCase());
  }

  /**
   * Escape string for use in template literals
   */
  private escapeString(str: string): string {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$');
  }
}
