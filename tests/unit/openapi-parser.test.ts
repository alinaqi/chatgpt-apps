import { describe, it, expect } from 'vitest';
import { join } from 'path';
import {
  parseOpenApiSpec,
  extractEndpoints,
  groupEndpointsByTag,
  generateToolName,
  extractAuthType,
  validateSpec,
} from '../../src/utils/index.js';

const FIXTURES_DIR = join(__dirname, '..', 'fixtures');

describe('OpenAPI Parser', () => {
  describe('parseOpenApiSpec', () => {
    it('should parse a valid YAML spec', () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      expect(spec.openapi).toBe('3.0.3');
      expect(spec.info.title).toBe('Pet Store API');
      expect(spec.paths).toBeDefined();
    });

    it('should parse a valid JSON spec', () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'ecommerce.json'));
      expect(spec.openapi).toBe('3.0.3');
      expect(spec.info.title).toBe('E-Commerce API');
    });

    it('should reject OpenAPI 2.x (Swagger) specs', () => {
      expect(() => {
        parseOpenApiSpec(join(FIXTURES_DIR, 'invalid-v2.yaml'));
      }).toThrow('Only OpenAPI 3.x specifications are supported');
    });

    it('should parse minimal valid spec', () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'minimal.yaml'));
      expect(spec.info.title).toBe('Minimal API');
      expect(Object.keys(spec.paths)).toHaveLength(1);
    });
  });

  describe('extractEndpoints', () => {
    it('should extract all endpoints from petstore spec', () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const endpoints = extractEndpoints(spec);

      expect(endpoints.length).toBe(5);

      const methods = endpoints.map(e => e.method);
      expect(methods).toContain('GET');
      expect(methods).toContain('POST');
      expect(methods).toContain('PUT');
      expect(methods).toContain('DELETE');
    });

    it('should extract endpoints with correct properties', () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const endpoints = extractEndpoints(spec);

      const listPets = endpoints.find(e => e.operationId === 'listPets');
      expect(listPets).toBeDefined();
      expect(listPets?.method).toBe('GET');
      expect(listPets?.path).toBe('/pets');
      expect(listPets?.tags).toContain('pets');
      expect(listPets?.parameters).toBeDefined();
    });

    it('should handle endpoints with request bodies', () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const endpoints = extractEndpoints(spec);

      const createPet = endpoints.find(e => e.operationId === 'createPet');
      expect(createPet).toBeDefined();
      expect(createPet?.requestBody).toBeDefined();
    });

    it('should extract many endpoints from complex spec', () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'ecommerce.json'));
      const endpoints = extractEndpoints(spec);

      expect(endpoints.length).toBeGreaterThan(10);
    });
  });

  describe('groupEndpointsByTag', () => {
    it('should group endpoints by their tags', () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'ecommerce.json'));
      const endpoints = extractEndpoints(spec);
      const groups = groupEndpointsByTag(endpoints);

      expect(groups.has('products')).toBe(true);
      expect(groups.has('cart')).toBe(true);
      expect(groups.has('orders')).toBe(true);
      expect(groups.has('users')).toBe(true);
    });

    it('should put untagged endpoints in default group', () => {
      const endpoints = [
        { path: '/test', method: 'GET' },
        { path: '/test2', method: 'POST' },
      ];
      const groups = groupEndpointsByTag(endpoints);

      expect(groups.has('default')).toBe(true);
      expect(groups.get('default')?.length).toBe(2);
    });

    it('should handle endpoints with multiple tags', () => {
      const endpoints = [
        { path: '/test', method: 'GET', tags: ['tag1', 'tag2'] },
      ];
      const groups = groupEndpointsByTag(endpoints);

      expect(groups.has('tag1')).toBe(true);
      expect(groups.has('tag2')).toBe(true);
      expect(groups.get('tag1')?.[0]).toBe(groups.get('tag2')?.[0]);
    });
  });

  describe('generateToolName', () => {
    it('should use operationId when available', () => {
      const name = generateToolName('/users', 'GET', 'listUsers');
      expect(name).toBe('listUsers');
    });

    it('should generate name from path and method when no operationId', () => {
      const name = generateToolName('/users', 'GET');
      expect(name).toBe('getUsers');
    });

    it('should handle path parameters', () => {
      const name = generateToolName('/users/{userId}', 'GET');
      expect(name).toBe('getUsersUserId');
    });

    it('should handle nested paths', () => {
      const name = generateToolName('/users/{userId}/orders', 'GET');
      expect(name).toBe('getUsersUserIdOrders');
    });

    it('should handle different HTTP methods', () => {
      expect(generateToolName('/items', 'POST')).toBe('postItems');
      expect(generateToolName('/items', 'PUT')).toBe('putItems');
      expect(generateToolName('/items', 'DELETE')).toBe('deleteItems');
      expect(generateToolName('/items', 'PATCH')).toBe('patchItems');
    });
  });

  describe('extractAuthType', () => {
    it('should detect apiKey auth', () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const authType = extractAuthType(spec);
      expect(authType).toBe('apiKey');
    });

    it('should detect bearer auth', () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'ecommerce.json'));
      const authType = extractAuthType(spec);
      expect(authType).toBe('bearer');
    });

    it('should return none when no security schemes', () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'minimal.yaml'));
      const authType = extractAuthType(spec);
      expect(authType).toBe('none');
    });
  });

  describe('validateSpec', () => {
    it('should validate a correct spec', () => {
      const spec = {
        openapi: '3.0.0',
        info: { title: 'Test', version: '1.0.0' },
        paths: { '/test': {} },
      };
      const result = validateSpec(spec);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject non-object specs', () => {
      const result = validateSpec(null);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Spec must be an object');
    });

    it('should reject missing openapi field', () => {
      const spec = {
        info: { title: 'Test', version: '1.0.0' },
        paths: { '/test': {} },
      };
      const result = validateSpec(spec);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Missing or invalid "openapi" field');
    });

    it('should reject OpenAPI 2.x', () => {
      const spec = {
        openapi: '2.0',
        info: { title: 'Test', version: '1.0.0' },
        paths: { '/test': {} },
      };
      const result = validateSpec(spec);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Only OpenAPI 3.x is supported');
    });

    it('should reject missing info', () => {
      const spec = {
        openapi: '3.0.0',
        paths: { '/test': {} },
      };
      const result = validateSpec(spec);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Missing "info" object');
    });

    it('should reject empty paths', () => {
      const spec = {
        openapi: '3.0.0',
        info: { title: 'Test', version: '1.0.0' },
        paths: {},
      };
      const result = validateSpec(spec);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Paths object is empty');
    });

    it('should collect multiple errors', () => {
      const spec = {
        openapi: '2.0',
        paths: {},
      };
      const result = validateSpec(spec);
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(1);
    });
  });
});
