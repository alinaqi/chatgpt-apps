import Anthropic from '@anthropic-ai/sdk';
import type { OpenAPIV3 } from 'openapi-types';
import {
  AppProposal,
  AppProposalSchema,
  ToolProposal,
  WidgetProposal,
  ResourceGroup,
} from '../schemas/index.js';
import { getAnthropicApiKey } from '../config.js';
import {
  extractEndpoints,
  groupEndpointsByTag,
  generateToolName,
  extractAuthType,
  type EndpointInfo,
} from '../utils/index.js';

export interface AnalyzerOptions {
  client?: Anthropic;
  model?: string;
}

/**
 * Agent that analyzes OpenAPI specs and proposes ChatGPT app structure
 */
export class AnalyzerAgent {
  private client: Anthropic | null;
  private model: string;
  private currentSpec: OpenAPIV3.Document | null = null;

  constructor(options: AnalyzerOptions = {}) {
    this.model = options.model || 'claude-sonnet-4-20250514';

    // Client can be injected for testing, or we try to create one
    if (options.client) {
      this.client = options.client;
    } else {
      try {
        this.client = new Anthropic({
          apiKey: getAnthropicApiKey(),
        });
      } catch {
        // No API key available - will use local analysis only
        this.client = null;
      }
    }
  }

  /**
   * Analyze an OpenAPI spec and return a proposed app structure.
   * Uses Claude AI for intelligent analysis, falls back to local analysis if unavailable.
   */
  async analyze(openApiSpec: OpenAPIV3.Document): Promise<AppProposal> {
    // First, do local extraction
    const localProposal = this.localAnalysis(openApiSpec);

    // If we have a client, enhance with AI analysis
    if (this.client) {
      try {
        return await this.aiEnhancedAnalysis(openApiSpec, localProposal);
      } catch (error) {
        console.warn('AI analysis failed, using local analysis:', error);
        return localProposal;
      }
    }

    return localProposal;
  }

  /**
   * Perform local analysis without AI - extracts structure directly from spec
   */
  localAnalysis(spec: OpenAPIV3.Document): AppProposal {
    // Store spec for $ref resolution
    this.currentSpec = spec;

    const endpoints = extractEndpoints(spec);
    const groupedEndpoints = groupEndpointsByTag(endpoints);
    const authType = extractAuthType(spec);

    // Build resource groups
    const resources: ResourceGroup[] = [];
    for (const [tag, tagEndpoints] of groupedEndpoints) {
      const tools: ToolProposal[] = tagEndpoints.map((ep) =>
        this.endpointToTool(ep)
      );

      resources.push({
        name: tag,
        description: `Operations related to ${tag}`,
        tools,
      });
    }

    // Generate widgets for common patterns
    const widgets = this.suggestWidgets(endpoints);

    return AppProposalSchema.parse({
      name: this.sanitizeName(spec.info.title),
      description: spec.info.description || `ChatGPT app for ${spec.info.title}`,
      version: spec.info.version,
      resources,
      widgets,
      authType,
      excludedEndpoints: [],
    });
  }

  /**
   * Resolve a $ref to the actual schema
   */
  private resolveRef(ref: string): OpenAPIV3.SchemaObject | null {
    if (!this.currentSpec || !ref.startsWith('#/')) {
      return null;
    }

    const parts = ref.slice(2).split('/');
    let current: unknown = this.currentSpec;

    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = (current as Record<string, unknown>)[part];
      } else {
        return null;
      }
    }

    return current as OpenAPIV3.SchemaObject;
  }

  /**
   * Get schema, resolving $ref if necessary
   */
  private getSchema(schemaOrRef: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject): OpenAPIV3.SchemaObject | null {
    if ('$ref' in schemaOrRef) {
      return this.resolveRef(schemaOrRef.$ref);
    }
    return schemaOrRef;
  }

  /**
   * Enhance local analysis with AI insights
   */
  private async aiEnhancedAnalysis(
    spec: OpenAPIV3.Document,
    localProposal: AppProposal
  ): Promise<AppProposal> {
    if (!this.client) {
      return localProposal;
    }

    const systemPrompt = `You are an expert at designing ChatGPT apps.
You analyze OpenAPI specs and suggest optimal app structures.
Return ONLY valid JSON matching the schema, no explanation.`;

    const userPrompt = `Analyze this OpenAPI spec and enhance the proposed app structure.

OpenAPI Spec Summary:
- Title: ${spec.info.title}
- Description: ${spec.info.description || 'N/A'}
- Version: ${spec.info.version}
- Endpoints: ${Object.keys(spec.paths).length}
- Security: ${extractAuthType(spec)}

Current Proposal:
${JSON.stringify(localProposal, null, 2)}

Enhance this proposal by:
1. Improving tool descriptions to be more user-friendly
2. Suggesting which endpoints should be excluded (e.g., admin-only, internal)
3. Adding better widget suggestions for common use cases
4. Grouping tools more logically if needed

Return the enhanced proposal as valid JSON matching the original schema.`;

    const response = await this.client.messages.create({
      model: this.model,
      max_tokens: 4096,
      messages: [
        { role: 'user', content: userPrompt },
      ],
      system: systemPrompt,
    });

    const content = response.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type');
    }

    // Extract JSON from response
    const jsonMatch = content.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.warn('No JSON found in AI response, using local analysis');
      return localProposal;
    }

    try {
      const enhanced = JSON.parse(jsonMatch[0]);
      return AppProposalSchema.parse(enhanced);
    } catch (parseError) {
      console.warn('Failed to parse AI response, using local analysis:', parseError);
      return localProposal;
    }
  }

  /**
   * Convert an endpoint to a tool proposal
   */
  private endpointToTool(endpoint: EndpointInfo): ToolProposal {
    const name = generateToolName(endpoint.path, endpoint.method, endpoint.operationId);

    const parameters = (endpoint.parameters || []).map((param) => ({
      name: param.name,
      type: (param.schema as OpenAPIV3.SchemaObject)?.type || 'string',
      required: param.required || false,
      description: param.description,
    }));

    // Add request body parameters if present
    if (endpoint.requestBody?.content) {
      const jsonContent = endpoint.requestBody.content['application/json'];
      if (jsonContent?.schema) {
        // Resolve $ref if present
        const schema = this.getSchema(jsonContent.schema as OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject);
        if (schema?.properties) {
          for (const [propName, propSchema] of Object.entries(schema.properties)) {
            const prop = this.getSchema(propSchema as OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject);
            parameters.push({
              name: propName,
              type: prop?.type || 'string',
              required: schema.required?.includes(propName) || false,
              description: prop?.description,
            });
          }
        }
      }
    }

    return {
      name,
      description: endpoint.summary || endpoint.description || `${endpoint.method} ${endpoint.path}`,
      httpMethod: endpoint.method as 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
      path: endpoint.path,
      parameters,
      responseType: this.inferResponseType(endpoint),
    };
  }

  /**
   * Infer response type from endpoint
   */
  private inferResponseType(endpoint: EndpointInfo): string {
    const response = endpoint.responses?.['200'] || endpoint.responses?.['201'];
    if (!response) return 'unknown';

    const responseObj = response as OpenAPIV3.ResponseObject;
    const content = responseObj.content?.['application/json'];
    if (!content?.schema) return 'object';

    const schemaOrRef = content.schema as OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject;
    if ('$ref' in schemaOrRef) {
      // Extract type name from $ref
      const refParts = schemaOrRef.$ref.split('/');
      return refParts[refParts.length - 1];
    }
    const schema = schemaOrRef as OpenAPIV3.SchemaObject;
    if (schema.type === 'array') return 'array';
    return schema.type || 'object';
  }

  /**
   * Suggest widgets based on endpoint patterns
   */
  private suggestWidgets(endpoints: EndpointInfo[]): WidgetProposal[] {
    const widgets: WidgetProposal[] = [];

    for (const endpoint of endpoints) {
      const toolName = generateToolName(endpoint.path, endpoint.method, endpoint.operationId);

      // List endpoints get table widgets
      if (endpoint.method === 'GET' && !endpoint.path.includes('{')) {
        widgets.push({
          name: `${toolName}Widget`,
          description: `Display results from ${toolName}`,
          toolName,
          componentType: 'table',
        });
      }

      // POST/PUT endpoints get form widgets
      if (['POST', 'PUT'].includes(endpoint.method) && endpoint.requestBody) {
        widgets.push({
          name: `${toolName}Form`,
          description: `Form for ${toolName}`,
          toolName,
          componentType: 'form',
          fields: this.extractFormFields(endpoint),
        });
      }

      // Single item GET endpoints get detail widgets
      if (endpoint.method === 'GET' && endpoint.path.includes('{')) {
        widgets.push({
          name: `${toolName}Detail`,
          description: `Detail view for ${toolName}`,
          toolName,
          componentType: 'detail',
        });
      }
    }

    return widgets;
  }

  /**
   * Extract form fields from request body
   */
  private extractFormFields(endpoint: EndpointInfo): Array<{
    name: string;
    label: string;
    inputType: string;
    validation?: string;
  }> {
    const fields: Array<{
      name: string;
      label: string;
      inputType: string;
      validation?: string;
    }> = [];

    const jsonContent = endpoint.requestBody?.content?.['application/json'];
    if (!jsonContent?.schema) return fields;

    // Resolve $ref if present
    const schema = this.getSchema(jsonContent.schema as OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject);
    if (!schema?.properties) return fields;

    for (const [propName, propSchema] of Object.entries(schema.properties)) {
      const prop = this.getSchema(propSchema as OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject);
      const isRequired = schema.required?.includes(propName);

      fields.push({
        name: propName,
        label: this.formatLabel(propName),
        inputType: this.schemaTypeToInputType(prop || {}),
        validation: isRequired ? 'required' : undefined,
      });
    }

    return fields;
  }

  /**
   * Convert schema type to HTML input type
   */
  private schemaTypeToInputType(schema: Partial<OpenAPIV3.SchemaObject>): string {
    if (schema.enum) return 'select';
    if (schema.format === 'email') return 'email';
    if (schema.format === 'date') return 'date';
    if (schema.format === 'date-time') return 'datetime-local';
    if (schema.type === 'integer' || schema.type === 'number') return 'number';
    if (schema.type === 'boolean') return 'checkbox';
    return 'text';
  }

  /**
   * Format property name as human-readable label
   */
  private formatLabel(name: string): string {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/[_-]/g, ' ')
      .replace(/^\w/, (c) => c.toUpperCase())
      .trim();
  }

  /**
   * Sanitize API name for use as app name
   */
  private sanitizeName(name: string): string {
    return name
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
  }
}
