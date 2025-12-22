import { readFileSync } from 'fs';
import YAML from 'yaml';
import type { OpenAPIV3 } from 'openapi-types';

export function parseOpenApiSpec(filePath: string): OpenAPIV3.Document {
  const content = readFileSync(filePath, 'utf-8');

  let spec: OpenAPIV3.Document;

  if (filePath.endsWith('.yaml') || filePath.endsWith('.yml')) {
    spec = YAML.parse(content);
  } else {
    spec = JSON.parse(content);
  }

  // Basic validation
  if (!spec.openapi || !spec.openapi.startsWith('3.')) {
    throw new Error('Only OpenAPI 3.x specifications are supported');
  }

  if (!spec.paths || Object.keys(spec.paths).length === 0) {
    throw new Error('OpenAPI spec must contain at least one path');
  }

  return spec;
}

export function extractEndpoints(spec: OpenAPIV3.Document): Array<{
  path: string;
  method: string;
  operationId?: string;
  summary?: string;
  description?: string;
  parameters?: OpenAPIV3.ParameterObject[];
  requestBody?: OpenAPIV3.RequestBodyObject;
  responses?: OpenAPIV3.ResponsesObject;
  tags?: string[];
}> {
  const endpoints: Array<{
    path: string;
    method: string;
    operationId?: string;
    summary?: string;
    description?: string;
    parameters?: OpenAPIV3.ParameterObject[];
    requestBody?: OpenAPIV3.RequestBodyObject;
    responses?: OpenAPIV3.ResponsesObject;
    tags?: string[];
  }> = [];

  const methods = ['get', 'post', 'put', 'patch', 'delete'] as const;

  for (const [path, pathItem] of Object.entries(spec.paths)) {
    if (!pathItem) continue;

    for (const method of methods) {
      const operation = pathItem[method] as OpenAPIV3.OperationObject | undefined;
      if (!operation) continue;

      endpoints.push({
        path,
        method: method.toUpperCase(),
        operationId: operation.operationId,
        summary: operation.summary,
        description: operation.description,
        parameters: operation.parameters as OpenAPIV3.ParameterObject[],
        requestBody: operation.requestBody as OpenAPIV3.RequestBodyObject,
        responses: operation.responses,
        tags: operation.tags,
      });
    }
  }

  return endpoints;
}

export interface EndpointInfo {
  path: string;
  method: string;
  operationId?: string;
  summary?: string;
  description?: string;
  parameters?: OpenAPIV3.ParameterObject[];
  requestBody?: OpenAPIV3.RequestBodyObject;
  responses?: OpenAPIV3.ResponsesObject;
  tags?: string[];
}

/**
 * Group endpoints by their tags
 */
export function groupEndpointsByTag(endpoints: EndpointInfo[]): Map<string, EndpointInfo[]> {
  const groups = new Map<string, EndpointInfo[]>();

  for (const endpoint of endpoints) {
    const tags = endpoint.tags?.length ? endpoint.tags : ['default'];
    for (const tag of tags) {
      if (!groups.has(tag)) {
        groups.set(tag, []);
      }
      groups.get(tag)!.push(endpoint);
    }
  }

  return groups;
}

/**
 * Generate a tool name from path and method
 */
export function generateToolName(path: string, method: string, operationId?: string): string {
  if (operationId) {
    return operationId;
  }

  // Convert path to camelCase name
  // e.g., /users/{userId}/orders -> getUsersUserIdOrders (for GET)
  const pathParts = path
    .split('/')
    .filter(Boolean)
    .map((part, index) => {
      // Remove path parameters braces
      const cleanPart = part.replace(/[{}]/g, '');
      // Capitalize first letter of each part except for first word in method prefix
      return index === 0 ? cleanPart : cleanPart.charAt(0).toUpperCase() + cleanPart.slice(1);
    });

  const methodPrefix = method.toLowerCase();
  return methodPrefix + pathParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}

/**
 * Extract security scheme type from spec
 */
export function extractAuthType(spec: OpenAPIV3.Document): 'none' | 'apiKey' | 'bearer' | 'oauth2' {
  const securitySchemes = spec.components?.securitySchemes;

  if (!securitySchemes || Object.keys(securitySchemes).length === 0) {
    return 'none';
  }

  // Check security schemes
  for (const scheme of Object.values(securitySchemes)) {
    const schemeObj = scheme as OpenAPIV3.SecuritySchemeObject;
    if (schemeObj.type === 'apiKey') {
      return 'apiKey';
    }
    if (schemeObj.type === 'http' && schemeObj.scheme === 'bearer') {
      return 'bearer';
    }
    if (schemeObj.type === 'oauth2') {
      return 'oauth2';
    }
  }

  return 'none';
}

/**
 * Validate that a spec has the minimum required structure
 */
export function validateSpec(spec: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!spec || typeof spec !== 'object') {
    errors.push('Spec must be an object');
    return { valid: false, errors };
  }

  const s = spec as Record<string, unknown>;

  if (!s.openapi || typeof s.openapi !== 'string') {
    errors.push('Missing or invalid "openapi" field');
  } else if (!s.openapi.startsWith('3.')) {
    errors.push('Only OpenAPI 3.x is supported');
  }

  if (!s.info || typeof s.info !== 'object') {
    errors.push('Missing "info" object');
  } else {
    const info = s.info as Record<string, unknown>;
    if (!info.title) errors.push('Missing info.title');
    if (!info.version) errors.push('Missing info.version');
  }

  if (!s.paths || typeof s.paths !== 'object') {
    errors.push('Missing "paths" object');
  } else if (Object.keys(s.paths).length === 0) {
    errors.push('Paths object is empty');
  }

  return { valid: errors.length === 0, errors };
}
