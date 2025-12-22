import { describe, it, expect } from 'vitest';
import { join } from 'path';
import { GeneratorAgent } from '../../src/agents/generator.js';
import { AnalyzerAgent } from '../../src/agents/analyzer.js';
import { parseOpenApiSpec } from '../../src/utils/index.js';

const FIXTURES_DIR = join(__dirname, '..', 'fixtures');

describe('GeneratorAgent', () => {
  describe('generate', () => {
    it('should generate all required files', async () => {
      const analyzer = new AnalyzerAgent();
      const generator = new GeneratorAgent();

      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = analyzer.localAnalysis(spec);
      const files = await generator.generate(proposal);

      const filePaths = files.map((f) => f.path);
      expect(filePaths).toContain('package.json');
      expect(filePaths).toContain('tsconfig.json');
      expect(filePaths).toContain('src/index.ts');
      expect(filePaths).toContain('src/tools.ts');
      expect(filePaths).toContain('src/types.ts');
      expect(filePaths).toContain('src/api-client.ts');
    });

    it('should generate widgets file when widgets exist', async () => {
      const analyzer = new AnalyzerAgent();
      const generator = new GeneratorAgent();

      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = analyzer.localAnalysis(spec);
      const files = await generator.generate(proposal);

      const filePaths = files.map((f) => f.path);
      expect(filePaths).toContain('src/widgets.ts');
    });

    it('should generate valid package.json', async () => {
      const analyzer = new AnalyzerAgent();
      const generator = new GeneratorAgent();

      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = analyzer.localAnalysis(spec);
      const files = await generator.generate(proposal);

      const packageJsonFile = files.find((f) => f.path === 'package.json');
      expect(packageJsonFile).toBeDefined();

      const packageJson = JSON.parse(packageJsonFile!.content);
      expect(packageJson.name).toBe('pet-store-api');
      expect(packageJson.dependencies['@modelcontextprotocol/sdk']).toBeDefined();
      expect(packageJson.dependencies['zod']).toBeDefined();
    });

    it('should generate MCP server entry point', async () => {
      const analyzer = new AnalyzerAgent();
      const generator = new GeneratorAgent();

      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = analyzer.localAnalysis(spec);
      const files = await generator.generate(proposal);

      const indexFile = files.find((f) => f.path === 'src/index.ts');
      expect(indexFile).toBeDefined();
      expect(indexFile!.content).toContain("import { Server } from '@modelcontextprotocol/sdk");
      expect(indexFile!.content).toContain('ListToolsRequestSchema');
      expect(indexFile!.content).toContain('CallToolRequestSchema');
    });

    it('should generate tool definitions for each endpoint', async () => {
      const analyzer = new AnalyzerAgent();
      const generator = new GeneratorAgent();

      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = analyzer.localAnalysis(spec);
      const files = await generator.generate(proposal);

      const toolsFile = files.find((f) => f.path === 'src/tools.ts');
      expect(toolsFile).toBeDefined();
      expect(toolsFile!.content).toContain("name: 'listPets'");
      expect(toolsFile!.content).toContain("name: 'createPet'");
      expect(toolsFile!.content).toContain("name: 'getPet'");
      expect(toolsFile!.content).toContain("name: 'updatePet'");
      expect(toolsFile!.content).toContain("name: 'deletePet'");
    });

    it('should generate tool handlers', async () => {
      const analyzer = new AnalyzerAgent();
      const generator = new GeneratorAgent();

      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = analyzer.localAnalysis(spec);
      const files = await generator.generate(proposal);

      const toolsFile = files.find((f) => f.path === 'src/tools.ts');
      expect(toolsFile).toBeDefined();
      expect(toolsFile!.content).toContain('async function handle_listPets');
      expect(toolsFile!.content).toContain('async function handle_createPet');
      expect(toolsFile!.content).toContain('handleToolCall');
    });

    it('should generate API client with correct auth header', async () => {
      const analyzer = new AnalyzerAgent();
      const generator = new GeneratorAgent();

      // Test apiKey auth
      const petstoreSpec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const petstoreProposal = analyzer.localAnalysis(petstoreSpec);
      const petstoreFiles = await generator.generate(petstoreProposal);

      const petstoreApiClient = petstoreFiles.find((f) => f.path === 'src/api-client.ts');
      expect(petstoreApiClient!.content).toContain("'X-API-Key': API_KEY");

      // Test bearer auth
      const ecommerceSpec = parseOpenApiSpec(join(FIXTURES_DIR, 'ecommerce.json'));
      const ecommerceProposal = analyzer.localAnalysis(ecommerceSpec);
      const ecommerceFiles = await generator.generate(ecommerceProposal);

      const ecommerceApiClient = ecommerceFiles.find((f) => f.path === 'src/api-client.ts');
      expect(ecommerceApiClient!.content).toContain("'Authorization': `Bearer ${API_KEY}`");
    });

    it('should generate types file', async () => {
      const analyzer = new AnalyzerAgent();
      const generator = new GeneratorAgent();

      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = analyzer.localAnalysis(spec);
      const files = await generator.generate(proposal);

      const typesFile = files.find((f) => f.path === 'src/types.ts');
      expect(typesFile).toBeDefined();
      expect(typesFile!.content).toContain('interface');
      expect(typesFile!.content).toContain('ApiResponse');
    });

    it('should generate widget components', async () => {
      const analyzer = new AnalyzerAgent();
      const generator = new GeneratorAgent();

      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const proposal = analyzer.localAnalysis(spec);
      const files = await generator.generate(proposal);

      const widgetsFile = files.find((f) => f.path === 'src/widgets.ts');
      expect(widgetsFile).toBeDefined();
      expect(widgetsFile!.content).toContain('listPetsWidget');
      expect(widgetsFile!.content).toContain('createPetForm');
      expect(widgetsFile!.content).toContain("type: 'table'");
      expect(widgetsFile!.content).toContain("type: 'form'");
    });

    it('should handle complex e-commerce spec', async () => {
      const analyzer = new AnalyzerAgent();
      const generator = new GeneratorAgent();

      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'ecommerce.json'));
      const proposal = analyzer.localAnalysis(spec);
      const files = await generator.generate(proposal);

      const toolsFile = files.find((f) => f.path === 'src/tools.ts');
      expect(toolsFile).toBeDefined();
      expect(toolsFile!.content).toContain("name: 'listProducts'");
      expect(toolsFile!.content).toContain("name: 'getCart'");
      expect(toolsFile!.content).toContain("name: 'createOrder'");
    });

    it('should escape special characters in descriptions', async () => {
      const generator = new GeneratorAgent();

      const proposal = {
        name: 'test-app',
        description: "Test app with 'quotes' and `backticks`",
        version: '1.0.0',
        resources: [
          {
            name: 'test',
            description: 'Test resource',
            tools: [
              {
                name: 'testTool',
                description: "Tool with 'single quotes' and $variables",
                httpMethod: 'GET' as const,
                path: '/test',
                parameters: [],
                responseType: 'object',
              },
            ],
          },
        ],
        widgets: [],
        authType: 'none' as const,
        excludedEndpoints: [],
      };

      const files = await generator.generate(proposal);
      const toolsFile = files.find((f) => f.path === 'src/tools.ts');
      expect(toolsFile).toBeDefined();
      // Single quotes should be escaped in description
      expect(toolsFile!.content).toContain("\\'single quotes\\'");
      // Dollar sign should be escaped
      expect(toolsFile!.content).toContain('\\$variables');
    });
  });
});
