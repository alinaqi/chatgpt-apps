import { AppProposal, ToolProposal } from '../schemas/index.js';

export interface GeneratedFile {
  path: string;
  content: string;
}

/**
 * Generator for ChatGPT Apps SDK compatible MCP servers
 * Creates HTTP-based MCP server with web widgets
 */
export class ChatGPTAppGenerator {
  /**
   * Generate all files for a ChatGPT App
   */
  async generate(proposal: AppProposal): Promise<GeneratedFile[]> {
    const files: GeneratedFile[] = [];

    // Generate package.json
    files.push(this.generatePackageJson(proposal));

    // Generate tsconfig.json
    files.push(this.generateTsConfig());

    // Generate HTTP MCP server
    files.push(this.generateServer(proposal));

    // Generate tools file
    files.push(this.generateTools(proposal));

    // Generate types
    files.push(this.generateTypes(proposal));

    // Generate API client
    files.push(this.generateApiClient(proposal));

    // Generate web widgets
    files.push(this.generateWidgetHtml(proposal));
    files.push(this.generateWidgetScript(proposal));

    // Generate widget types for window.openai
    files.push(this.generateWidgetTypes());

    return files;
  }

  private generatePackageJson(proposal: AppProposal): GeneratedFile {
    const packageJson = {
      name: proposal.name,
      version: proposal.version,
      description: proposal.description,
      main: 'dist/server.js',
      type: 'module',
      scripts: {
        build: 'tsc',
        start: 'node dist/server.js',
        dev: 'tsx src/server.ts',
      },
      dependencies: {
        '@modelcontextprotocol/sdk': '^1.20.0',
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
      exclude: ['node_modules', 'dist', 'public'],
    };

    return {
      path: 'tsconfig.json',
      content: JSON.stringify(tsConfig, null, 2),
    };
  }

  private generateServer(proposal: AppProposal): GeneratedFile {
    const allTools = this.deduplicateTools(proposal);

    const content = `import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { z } from 'zod';
import { handleToolCall } from './tools.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Load widget HTML
const widgetHtml = readFileSync(join(publicDir, 'widget.html'), 'utf8');

const port = Number(process.env.PORT ?? 3000);
const MCP_PATH = '/mcp';

/**
 * Create a new MCP server instance with all tools registered
 */
function createMcpServer(): McpServer {
  const server = new McpServer({
    name: '${proposal.name}',
    version: '${proposal.version}',
  });

  // Register the main widget resource
  server.registerResource(
    '${proposal.name}-widget',
    'ui://widget/${proposal.name}.html',
    {},
    async () => ({
      contents: [
        {
          uri: 'ui://widget/${proposal.name}.html',
          mimeType: 'text/html+skybridge',
          text: widgetHtml,
          _meta: {
            'openai/widgetPrefersBorder': true,
            'openai/widgetDescription': '${this.escapeString(proposal.description)}',
          },
        },
      ],
    })
  );

  // Register all tools
${allTools.map((tool) => this.generateToolRegistration(tool, proposal.name)).join('\n\n')}

  return server;
}

/**
 * HTTP request handler
 */
async function handleRequest(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const url = new URL(req.url ?? '/', \`http://\${req.headers.host ?? 'localhost'}\`);

  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
      'Access-Control-Allow-Headers': 'content-type, mcp-session-id, authorization',
      'Access-Control-Expose-Headers': 'Mcp-Session-Id',
    });
    res.end();
    return;
  }

  // Health check
  if (req.method === 'GET' && url.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('${proposal.name} MCP server is running');
    return;
  }

  // MCP endpoint
  const MCP_METHODS = new Set(['POST', 'GET', 'DELETE']);
  if (url.pathname === MCP_PATH && req.method && MCP_METHODS.has(req.method)) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'Mcp-Session-Id');

    const server = createMcpServer();
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined, // stateless mode
      enableJsonResponse: true,
    });

    res.on('close', () => {
      transport.close();
      server.close();
    });

    try {
      await server.connect(transport);
      await transport.handleRequest(req, res);
    } catch (error) {
      console.error('Error handling MCP request:', error);
      if (!res.headersSent) {
        res.writeHead(500).end('Internal server error');
      }
    }
    return;
  }

  // 404 for other routes
  res.writeHead(404).end('Not Found');
}

// Start server
const httpServer = createServer(handleRequest);

httpServer.listen(port, () => {
  console.log(\`${proposal.name} MCP server listening on http://localhost:\${port}\${MCP_PATH}\`);
  console.log(\`Health check: http://localhost:\${port}/\`);
});
`;

    return {
      path: 'src/server.ts',
      content,
    };
  }

  private generateToolRegistration(tool: ToolProposal, appName: string): string {
    const uniqueParams = this.deduplicateParams(tool.parameters);

    const inputSchemaObj: Record<string, string> = {};
    for (const param of uniqueParams) {
      inputSchemaObj[param.name] = `z.${this.zodType(param.type)}${param.required ? '' : '.optional()'}`;
    }

    const inputSchemaStr = uniqueParams.length > 0
      ? `{\n      ${Object.entries(inputSchemaObj).map(([k, v]) => `${k}: ${v}`).join(',\n      ')}\n    }`
      : '{}';

    return `  server.registerTool(
    '${tool.name}',
    {
      title: '${this.escapeString(tool.description)}',
      description: '${this.escapeString(tool.description)}',
      inputSchema: ${inputSchemaStr},
      _meta: {
        'openai/outputTemplate': 'ui://widget/${appName}.html',
        'openai/toolInvocation/invoking': 'Processing ${tool.name}...',
        'openai/toolInvocation/invoked': 'Completed ${tool.name}',
        'openai/widgetAccessible': true,
      },
    },
    async (args) => {
      const result = await handleToolCall('${tool.name}', args as Record<string, unknown>);
      return {
        content: result.content,
        structuredContent: result.structuredContent,
        _meta: result._meta ?? {},
      };
    }
  );`;
  }

  private generateTools(proposal: AppProposal): GeneratedFile {
    const allTools = this.deduplicateTools(proposal);

    const toolHandlers = allTools.map((tool) => this.generateToolHandler(tool));

    const content = `import { apiClient } from './api-client.js';

interface ToolResponse {
  content: Array<{ type: 'text'; text: string }>;
  structuredContent: Record<string, unknown>;
  _meta?: Record<string, unknown>;
}

// Tool handlers
${toolHandlers.join('\n\n')}

/**
 * Main tool dispatcher
 */
export async function handleToolCall(
  name: string,
  args: Record<string, unknown>
): Promise<ToolResponse> {
  try {
    let result: unknown;

    switch (name) {
${allTools.map((t) => `      case '${t.name}':
        result = await handle_${this.safeFunctionName(t.name)}(args);
        break;`).join('\n')}
      default:
        throw new Error(\`Unknown tool: \${name}\`);
    }

    return {
      content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
      structuredContent: result as Record<string, unknown>,
      _meta: { timestamp: new Date().toISOString() },
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return {
      content: [{ type: 'text', text: \`Error: \${message}\` }],
      structuredContent: { error: message },
      _meta: { error: true },
    };
  }
}
`;

    return {
      path: 'src/tools.ts',
      content,
    };
  }

  private generateToolHandler(tool: ToolProposal): string {
    const uniqueParams = this.deduplicateParams(tool.parameters);

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

    return `async function handle_${this.safeFunctionName(tool.name)}(args: Record<string, unknown>) {
  ${paramDestructure}

  return apiClient.${tool.httpMethod.toLowerCase()}(\`${path}\`${bodyArg});
}`;
  }

  private generateTypes(proposal: AppProposal): GeneratedFile {
    const allTools = this.deduplicateTools(proposal);

    const content = `// Generated types for ${proposal.name}

export interface ToolResponse {
  content: Array<{ type: 'text'; text: string }>;
  structuredContent: Record<string, unknown>;
  _meta?: Record<string, unknown>;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Tool parameter types
${allTools.map((tool) => {
  if (tool.parameters.length === 0) return '';
  const uniqueParams = this.deduplicateParams(tool.parameters);
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

  private generateWidgetHtml(proposal: AppProposal): GeneratedFile {
    const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${proposal.name}</title>
  <style>
    :root {
      --bg-primary: #ffffff;
      --bg-secondary: #f6f8fb;
      --text-primary: #0b0b0f;
      --text-secondary: #6c768a;
      --accent: #111bf5;
      --border: #cad3e0;
      --success: #10b981;
      --error: #ef4444;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg-primary: #1a1a2e;
        --bg-secondary: #16213e;
        --text-primary: #e5e5e5;
        --text-secondary: #9ca3af;
        --border: #374151;
      }
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      width: 100%;
      min-height: 100%;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: var(--bg-secondary);
      color: var(--text-primary);
    }

    body {
      padding: 16px;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background: var(--bg-primary);
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
    }

    h1 {
      font-size: 1.25rem;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .status {
      font-size: 0.75rem;
      padding: 4px 8px;
      border-radius: 9999px;
      background: var(--bg-secondary);
      color: var(--text-secondary);
    }

    .status.success {
      background: #d1fae5;
      color: #065f46;
    }

    .status.error {
      background: #fee2e2;
      color: #991b1b;
    }

    .result-container {
      margin-top: 16px;
    }

    .result-item {
      background: var(--bg-secondary);
      border-radius: 12px;
      padding: 14px;
      margin-bottom: 8px;
    }

    .result-item h3 {
      font-size: 0.95rem;
      margin-bottom: 8px;
    }

    .result-item p {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .result-item pre {
      font-size: 0.75rem;
      background: var(--bg-primary);
      padding: 12px;
      border-radius: 8px;
      overflow-x: auto;
      margin-top: 8px;
    }

    .loading {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-secondary);
    }

    .spinner {
      width: 16px;
      height: 16px;
      border: 2px solid var(--border);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .actions {
      margin-top: 16px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    button {
      padding: 10px 16px;
      border-radius: 10px;
      border: 1px solid var(--border);
      background: var(--bg-primary);
      color: var(--text-primary);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    button:hover {
      background: var(--bg-secondary);
    }

    button.primary {
      background: var(--accent);
      color: white;
      border-color: var(--accent);
    }

    button.primary:hover {
      opacity: 0.9;
    }

    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: var(--text-secondary);
    }

    .empty-state p {
      margin-top: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>
      ${proposal.name}
      <span class="status" id="status">Ready</span>
    </h1>

    <div id="content">
      <div class="empty-state">
        <p>Ask ChatGPT to interact with ${proposal.name}</p>
      </div>
    </div>

    <div class="actions" id="actions"></div>
  </div>

  <script type="module" src="./widget.js"></script>
</body>
</html>
`;

    return {
      path: 'public/widget.html',
      content,
    };
  }

  private generateWidgetScript(proposal: AppProposal): GeneratedFile {
    const content = `// Widget script for ${proposal.name}
// This runs inside the ChatGPT iframe and uses window.openai API

const contentEl = document.getElementById('content');
const statusEl = document.getElementById('status');
const actionsEl = document.getElementById('actions');

// Get data from tool output
const toolOutput = window.openai?.toolOutput ?? null;
const toolInput = window.openai?.toolInput ?? null;
const widgetState = window.openai?.widgetState ?? { view: 'default' };

/**
 * Update status indicator
 */
function setStatus(text, type = 'default') {
  statusEl.textContent = text;
  statusEl.className = 'status ' + type;
}

/**
 * Render content based on tool output
 */
function renderContent() {
  if (!toolOutput) {
    contentEl.innerHTML = \`
      <div class="empty-state">
        <p>No data loaded yet. Ask ChatGPT to perform an action.</p>
      </div>
    \`;
    return;
  }

  // Check for error
  if (toolOutput.error) {
    setStatus('Error', 'error');
    contentEl.innerHTML = \`
      <div class="result-item">
        <h3>Error</h3>
        <p>\${toolOutput.error}</p>
      </div>
    \`;
    return;
  }

  setStatus('Success', 'success');

  // Render based on data structure
  if (Array.isArray(toolOutput)) {
    renderList(toolOutput);
  } else if (typeof toolOutput === 'object') {
    renderObject(toolOutput);
  } else {
    contentEl.innerHTML = \`
      <div class="result-item">
        <pre>\${JSON.stringify(toolOutput, null, 2)}</pre>
      </div>
    \`;
  }
}

/**
 * Render array as list
 */
function renderList(items) {
  if (items.length === 0) {
    contentEl.innerHTML = \`
      <div class="empty-state">
        <p>No items found</p>
      </div>
    \`;
    return;
  }

  contentEl.innerHTML = items.slice(0, 10).map((item, index) => \`
    <div class="result-item" data-index="\${index}">
      <h3>\${item.name || item.title || item.id || 'Item ' + (index + 1)}</h3>
      <p>\${item.description || item.status || JSON.stringify(item).slice(0, 100)}...</p>
    </div>
  \`).join('');

  if (items.length > 10) {
    contentEl.innerHTML += \`
      <div class="result-item">
        <p>... and \${items.length - 10} more items</p>
      </div>
    \`;
  }
}

/**
 * Render object as key-value pairs
 */
function renderObject(obj) {
  // Check for common nested structures
  const dataKey = Object.keys(obj).find(k => Array.isArray(obj[k]));
  if (dataKey && Array.isArray(obj[dataKey])) {
    renderList(obj[dataKey]);
    return;
  }

  const entries = Object.entries(obj).slice(0, 10);
  contentEl.innerHTML = entries.map(([key, value]) => \`
    <div class="result-item">
      <h3>\${key}</h3>
      <p>\${typeof value === 'object' ? JSON.stringify(value, null, 2) : value}</p>
    </div>
  \`).join('');
}

/**
 * Call a tool from the widget
 */
async function callTool(toolName, args) {
  setStatus('Loading...', 'default');

  if (window.openai?.callTool) {
    try {
      const response = await window.openai.callTool(toolName, args);
      if (response?.structuredContent) {
        renderContentFromResponse(response.structuredContent);
      }
    } catch (error) {
      setStatus('Error', 'error');
      console.error('Tool call failed:', error);
    }
  } else {
    console.log('window.openai.callTool not available');
  }
}

/**
 * Send a follow-up message
 */
async function sendFollowUp(prompt) {
  if (window.openai?.sendFollowUpMessage) {
    await window.openai.sendFollowUpMessage({ prompt });
  }
}

/**
 * Save widget state
 */
function saveState(newState) {
  const merged = { ...widgetState, ...newState };
  window.openai?.setWidgetState?.(merged);
}

/**
 * Handle theme changes
 */
function applyTheme() {
  const theme = window.openai?.theme ?? 'light';
  document.documentElement.setAttribute('data-theme', theme);
}

/**
 * Listen for global updates from ChatGPT
 */
function setupEventListeners() {
  window.addEventListener('openai:set_globals', (event) => {
    const globals = event.detail?.globals;
    if (globals?.toolOutput) {
      renderContentFromResponse(globals.toolOutput);
    }
    if (globals?.theme) {
      applyTheme();
    }
  }, { passive: true });
}

/**
 * Render from response
 */
function renderContentFromResponse(data) {
  // Temporarily update toolOutput reference and re-render
  window.openai.toolOutput = data;
  renderContent();
}

// Initialize
applyTheme();
setupEventListeners();
renderContent();

// Notify host of intrinsic height for proper sizing
if (window.openai?.notifyIntrinsicHeight) {
  const observer = new ResizeObserver(() => {
    window.openai.notifyIntrinsicHeight(document.body.scrollHeight);
  });
  observer.observe(document.body);
}
`;

    return {
      path: 'public/widget.js',
      content,
    };
  }

  private generateWidgetTypes(): GeneratedFile {
    const content = `// Type definitions for window.openai widget runtime
// This file helps with TypeScript support in widget development

declare global {
  interface Window {
    openai: OpenAIWidgetRuntime;
  }
}

interface OpenAIWidgetRuntime {
  // State & data
  toolInput: Record<string, unknown> | null;
  toolOutput: Record<string, unknown> | null;
  toolResponseMetadata: Record<string, unknown> | null;
  widgetState: Record<string, unknown> | null;

  // State management
  setWidgetState(state: Record<string, unknown>): void;

  // Tool & messaging APIs
  callTool(name: string, args: Record<string, unknown>): Promise<{
    structuredContent?: Record<string, unknown>;
    content?: Array<{ type: string; text: string }>;
  }>;
  sendFollowUpMessage(options: { prompt: string }): Promise<void>;

  // File handling
  uploadFile(file: File): Promise<{ fileId: string }>;
  getFileDownloadUrl(options: { fileId: string }): Promise<{ downloadUrl: string }>;

  // Layout & host controls
  requestDisplayMode(options: { mode: 'inline' | 'pip' | 'fullscreen' }): Promise<void>;
  requestModal(options: { anchorEl?: HTMLElement }): Promise<void>;
  requestClose(): void;
  notifyIntrinsicHeight(height: number): void;
  openExternal(options: { href: string }): void;

  // Context signals
  theme: 'light' | 'dark';
  displayMode: 'inline' | 'pip' | 'fullscreen';
  maxHeight: number;
  safeArea: { top: number; right: number; bottom: number; left: number };
  view: string;
  userAgent: string;
  locale: string;
}

export {};
`;

    return {
      path: 'src/widget-types.d.ts',
      content,
    };
  }

  // Helper methods

  private deduplicateTools(proposal: AppProposal): ToolProposal[] {
    const allToolsRaw = proposal.resources.flatMap((r) => r.tools);
    const seenNames = new Set<string>();
    return allToolsRaw.filter((tool) => {
      if (seenNames.has(tool.name)) return false;
      seenNames.add(tool.name);
      return true;
    });
  }

  private deduplicateParams(params: ToolProposal['parameters']) {
    const seen = new Set<string>();
    return params.filter((p) => {
      if (seen.has(p.name)) return false;
      seen.add(p.name);
      return true;
    });
  }

  private static readonly RESERVED_WORDS = new Set([
    'arguments', 'break', 'case', 'catch', 'class', 'const', 'continue',
    'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export',
    'extends', 'false', 'finally', 'for', 'function', 'if', 'import',
    'in', 'instanceof', 'new', 'null', 'return', 'super', 'switch',
    'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield',
  ]);

  private sanitizeParamName(name: string): string {
    if (ChatGPTAppGenerator.RESERVED_WORDS.has(name)) {
      return `_${name}`;
    }
    return name;
  }

  private safeFunctionName(name: string): string {
    return name.replace(/[^a-zA-Z0-9_]/g, '_');
  }

  private zodType(type: string): string {
    // Returns full zod expression with parentheses
    const map: Record<string, string> = {
      string: 'string()',
      integer: 'number()',
      number: 'number()',
      boolean: 'boolean()',
      array: 'array(z.unknown())',
      object: 'record(z.string(), z.unknown())',
    };
    return map[type] || 'unknown()';
  }

  private mapToTsType(type: string): string {
    const map: Record<string, string> = {
      string: 'string',
      integer: 'number',
      number: 'number',
      boolean: 'boolean',
      array: 'unknown[]',
      object: 'Record<string, unknown>',
    };
    return map[type] || 'unknown';
  }

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

  private pascalCase(str: string): string {
    return str
      .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
      .replace(/^\w/, (c) => c.toUpperCase());
  }

  private escapeString(str: string): string {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$')
      .replace(/\n/g, ' ');
  }
}
