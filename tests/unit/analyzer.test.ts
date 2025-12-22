import { describe, it, expect } from 'vitest';
import { join } from 'path';
import { AnalyzerAgent } from '../../src/agents/analyzer.js';
import { parseOpenApiSpec } from '../../src/utils/index.js';

const FIXTURES_DIR = join(__dirname, '..', 'fixtures');

describe('AnalyzerAgent', () => {
  describe('localAnalysis', () => {
    it('should analyze petstore spec and return valid proposal', () => {
      const agent = new AnalyzerAgent();
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = agent.localAnalysis(spec);

      expect(proposal.name).toBe('pet-store-api');
      expect(proposal.description).toBeDefined();
      expect(proposal.authType).toBe('apiKey');
      expect(proposal.resources.length).toBeGreaterThan(0);
    });

    it('should create resource groups from tags', () => {
      const agent = new AnalyzerAgent();
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'ecommerce.json'));
      const proposal = agent.localAnalysis(spec);

      const resourceNames = proposal.resources.map((r) => r.name);
      expect(resourceNames).toContain('products');
      expect(resourceNames).toContain('cart');
      expect(resourceNames).toContain('orders');
      expect(resourceNames).toContain('users');
    });

    it('should generate tools from endpoints', () => {
      const agent = new AnalyzerAgent();
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = agent.localAnalysis(spec);

      const petsResource = proposal.resources.find((r) => r.name === 'pets');
      expect(petsResource).toBeDefined();
      expect(petsResource!.tools.length).toBe(5);

      const toolNames = petsResource!.tools.map((t) => t.name);
      expect(toolNames).toContain('listPets');
      expect(toolNames).toContain('createPet');
      expect(toolNames).toContain('getPet');
    });

    it('should include HTTP method in tools', () => {
      const agent = new AnalyzerAgent();
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = agent.localAnalysis(spec);

      const petsResource = proposal.resources.find((r) => r.name === 'pets');
      const listPets = petsResource!.tools.find((t) => t.name === 'listPets');
      const createPet = petsResource!.tools.find((t) => t.name === 'createPet');
      const deletePet = petsResource!.tools.find((t) => t.name === 'deletePet');

      expect(listPets!.httpMethod).toBe('GET');
      expect(createPet!.httpMethod).toBe('POST');
      expect(deletePet!.httpMethod).toBe('DELETE');
    });

    it('should extract parameters from endpoints', () => {
      const agent = new AnalyzerAgent();
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = agent.localAnalysis(spec);

      const petsResource = proposal.resources.find((r) => r.name === 'pets');
      const listPets = petsResource!.tools.find((t) => t.name === 'listPets');

      expect(listPets!.parameters.length).toBeGreaterThan(0);
      const limitParam = listPets!.parameters.find((p) => p.name === 'limit');
      expect(limitParam).toBeDefined();
      expect(limitParam!.type).toBe('integer');
    });

    it('should extract request body parameters', () => {
      const agent = new AnalyzerAgent();
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = agent.localAnalysis(spec);

      const petsResource = proposal.resources.find((r) => r.name === 'pets');
      const createPet = petsResource!.tools.find((t) => t.name === 'createPet');

      const params = createPet!.parameters.map((p) => p.name);
      expect(params).toContain('name');
    });

    it('should detect auth type correctly', () => {
      const agent = new AnalyzerAgent();

      const petstoreSpec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const petstoreProposal = agent.localAnalysis(petstoreSpec);
      expect(petstoreProposal.authType).toBe('apiKey');

      const ecommerceSpec = parseOpenApiSpec(join(FIXTURES_DIR, 'ecommerce.json'));
      const ecommerceProposal = agent.localAnalysis(ecommerceSpec);
      expect(ecommerceProposal.authType).toBe('bearer');

      const minimalSpec = parseOpenApiSpec(join(FIXTURES_DIR, 'minimal.yaml'));
      const minimalProposal = agent.localAnalysis(minimalSpec);
      expect(minimalProposal.authType).toBe('none');
    });

    it('should generate widgets for common patterns', () => {
      const agent = new AnalyzerAgent();
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = agent.localAnalysis(spec);

      expect(proposal.widgets.length).toBeGreaterThan(0);

      // Should have table widget for list endpoint
      const tableWidget = proposal.widgets.find(
        (w) => w.componentType === 'table' && w.toolName === 'listPets'
      );
      expect(tableWidget).toBeDefined();

      // Should have form widget for create endpoint
      const formWidget = proposal.widgets.find(
        (w) => w.componentType === 'form' && w.toolName === 'createPet'
      );
      expect(formWidget).toBeDefined();

      // Should have detail widget for get by ID endpoint
      const detailWidget = proposal.widgets.find(
        (w) => w.componentType === 'detail' && w.toolName === 'getPet'
      );
      expect(detailWidget).toBeDefined();
    });

    it('should extract form fields from request body', () => {
      const agent = new AnalyzerAgent();
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = agent.localAnalysis(spec);

      const createPetForm = proposal.widgets.find(
        (w) => w.componentType === 'form' && w.toolName === 'createPet'
      );
      expect(createPetForm?.fields).toBeDefined();
      expect(createPetForm!.fields!.length).toBeGreaterThan(0);

      const nameField = createPetForm!.fields!.find((f) => f.name === 'name');
      expect(nameField).toBeDefined();
      expect(nameField!.validation).toBe('required');
    });

    it('should handle minimal spec', () => {
      const agent = new AnalyzerAgent();
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'minimal.yaml'));
      const proposal = agent.localAnalysis(spec);

      expect(proposal.name).toBe('minimal-api');
      expect(proposal.resources.length).toBe(1);
      expect(proposal.resources[0].name).toBe('default');
      expect(proposal.resources[0].tools.length).toBe(1);
      expect(proposal.resources[0].tools[0].name).toBe('healthCheck');
    });
  });

  describe('analyze', () => {
    it('should use local analysis when no API key is set', async () => {
      const agent = new AnalyzerAgent();
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));

      // This should fall back to local analysis
      const proposal = await agent.analyze(spec);

      expect(proposal.name).toBe('pet-store-api');
      expect(proposal.resources.length).toBeGreaterThan(0);
    });

    it('should return valid schema-compliant proposal', async () => {
      const agent = new AnalyzerAgent();
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'ecommerce.json'));

      const proposal = await agent.analyze(spec);

      // Verify all required fields are present
      expect(proposal.name).toBeDefined();
      expect(proposal.description).toBeDefined();
      expect(proposal.resources).toBeInstanceOf(Array);
      expect(proposal.widgets).toBeInstanceOf(Array);
      expect(proposal.authType).toBeDefined();
      expect(proposal.excludedEndpoints).toBeInstanceOf(Array);
    });
  });
});
