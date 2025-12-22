import { describe, it, expect } from 'vitest';
import {
  ToolProposalSchema,
  AppProposalSchema,
  ConfigSchema,
} from '../../src/schemas/index.js';

describe('Schemas', () => {
  describe('ToolProposalSchema', () => {
    it('should validate a valid tool proposal', () => {
      const validTool = {
        name: 'getUser',
        description: 'Get a user by ID',
        httpMethod: 'GET',
        path: '/users/{id}',
        parameters: [
          {
            name: 'id',
            type: 'string',
            required: true,
            description: 'User ID',
          },
        ],
        responseType: 'User',
      };

      const result = ToolProposalSchema.safeParse(validTool);
      expect(result.success).toBe(true);
    });

    it('should reject invalid http methods', () => {
      const invalidTool = {
        name: 'getUser',
        description: 'Get a user',
        httpMethod: 'INVALID',
        path: '/users',
        parameters: [],
        responseType: 'User',
      };

      const result = ToolProposalSchema.safeParse(invalidTool);
      expect(result.success).toBe(false);
    });
  });

  describe('AppProposalSchema', () => {
    it('should validate a minimal app proposal', () => {
      const validApp = {
        name: 'MyApp',
        description: 'A test app',
        resources: [],
        widgets: [],
        authType: 'none',
        excludedEndpoints: [],
      };

      const result = AppProposalSchema.safeParse(validApp);
      expect(result.success).toBe(true);
    });

    it('should apply default version', () => {
      const app = {
        name: 'MyApp',
        description: 'A test app',
        resources: [],
        widgets: [],
        authType: 'none',
        excludedEndpoints: [],
      };

      const result = AppProposalSchema.parse(app);
      expect(result.version).toBe('1.0.0');
    });
  });

  describe('ConfigSchema', () => {
    it('should apply default values', () => {
      const result = ConfigSchema.parse({});
      expect(result.defaultOutputDir).toBe('./chatgpt-app');
      expect(result.modelId).toBe('claude-sonnet-4-20250514');
    });
  });
});
