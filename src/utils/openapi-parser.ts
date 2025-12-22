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
