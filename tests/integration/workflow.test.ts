import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { join } from 'path';
import { existsSync, rmSync, readFileSync } from 'fs';
import { Orchestrator } from '../../src/agents/orchestrator.js';
import { TesterAgent } from '../../src/agents/tester.js';
import { parseOpenApiSpec } from '../../src/utils/index.js';

const FIXTURES_DIR = join(__dirname, '..', 'fixtures');
const TEST_OUTPUT_DIR = join(__dirname, '..', '..', 'test-output');

describe('Integration: Full Workflow', () => {
  beforeEach(() => {
    // Clean up test output directory before each test
    if (existsSync(TEST_OUTPUT_DIR)) {
      rmSync(TEST_OUTPUT_DIR, { recursive: true });
    }
  });

  afterEach(() => {
    // Clean up after tests
    if (existsSync(TEST_OUTPUT_DIR)) {
      rmSync(TEST_OUTPUT_DIR, { recursive: true });
    }
  });

  describe('Orchestrator.runFullWorkflow', () => {
    it('should complete full workflow for petstore spec', async () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const outputDir = join(TEST_OUTPUT_DIR, 'petstore-app');

      const orchestrator = new Orchestrator();
      const result = await orchestrator.runFullWorkflow(spec, outputDir, {
        skipTests: false,
        verbose: false,
      });

      // Verify proposal
      expect(result.proposal.name).toBe('pet-store-api');
      expect(result.proposal.resources.length).toBeGreaterThan(0);

      // Verify files were generated
      expect(result.generatedFiles.length).toBeGreaterThan(0);
      expect(result.generatedFiles).toContain('package.json');
      expect(result.generatedFiles).toContain('src/index.ts');
      expect(result.generatedFiles).toContain('src/tools.ts');

      // Verify output directory
      expect(result.outputDir).toBe(outputDir);
      expect(existsSync(outputDir)).toBe(true);

      // Verify tests passed
      const summary = TesterAgent.summarize(result.testResults);
      expect(summary.failed).toBe(0);
    });

    it('should complete full workflow for e-commerce spec', async () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'ecommerce.json'));
      const outputDir = join(TEST_OUTPUT_DIR, 'ecommerce-app');

      const orchestrator = new Orchestrator();
      const result = await orchestrator.runFullWorkflow(spec, outputDir, {
        skipTests: false,
      });

      // Verify proposal has multiple resources
      expect(result.proposal.resources.length).toBeGreaterThan(1);
      const resourceNames = result.proposal.resources.map((r) => r.name);
      expect(resourceNames).toContain('products');
      expect(resourceNames).toContain('cart');
      expect(resourceNames).toContain('orders');

      // Verify bearer auth was detected
      expect(result.proposal.authType).toBe('bearer');

      // Verify tests passed
      const summary = TesterAgent.summarize(result.testResults);
      expect(summary.failed).toBe(0);
    });

    it('should skip tests when skipTests option is true', async () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'minimal.yaml'));
      const outputDir = join(TEST_OUTPUT_DIR, 'minimal-app');

      const orchestrator = new Orchestrator();
      const result = await orchestrator.runFullWorkflow(spec, outputDir, {
        skipTests: true,
      });

      expect(result.testResults).toHaveLength(0);
    });

    it('should call onProposal callback and stop if rejected', async () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'minimal.yaml'));
      const outputDir = join(TEST_OUTPUT_DIR, 'rejected-app');

      const orchestrator = new Orchestrator();

      await expect(
        orchestrator.runFullWorkflow(
          spec,
          outputDir,
          {},
          async () => false // Reject the proposal
        )
      ).rejects.toThrow('User rejected the proposal');

      // No files should be generated
      expect(existsSync(outputDir)).toBe(false);
    });

    it('should call onProposal callback and proceed if accepted', async () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'minimal.yaml'));
      const outputDir = join(TEST_OUTPUT_DIR, 'accepted-app');

      let proposalReceived = false;

      const orchestrator = new Orchestrator();
      const result = await orchestrator.runFullWorkflow(
        spec,
        outputDir,
        { skipTests: true },
        async (proposal) => {
          proposalReceived = true;
          expect(proposal.name).toBeDefined();
          return true;
        }
      );

      expect(proposalReceived).toBe(true);
      expect(existsSync(outputDir)).toBe(true);
    });
  });

  describe('Orchestrator.analyze', () => {
    it('should analyze spec and return proposal', async () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const orchestrator = new Orchestrator();

      const proposal = await orchestrator.analyze(spec);

      expect(proposal.name).toBe('pet-store-api');
      expect(proposal.description).toBeDefined();
      expect(proposal.resources.length).toBe(1);
      expect(proposal.resources[0].name).toBe('pets');
      expect(proposal.resources[0].tools.length).toBe(5);
    });
  });

  describe('Orchestrator.generate', () => {
    it('should generate files from proposal', async () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'minimal.yaml'));
      const outputDir = join(TEST_OUTPUT_DIR, 'generate-only');
      const orchestrator = new Orchestrator();

      // First analyze
      const proposal = await orchestrator.analyze(spec);

      // Save proposal
      await orchestrator.saveProposal(proposal, outputDir);

      // Generate
      const files = await orchestrator.generate(proposal, outputDir);

      expect(files.length).toBeGreaterThan(0);
      expect(existsSync(join(outputDir, 'package.json'))).toBe(true);
      expect(existsSync(join(outputDir, 'src', 'index.ts'))).toBe(true);
    });
  });

  describe('Orchestrator.test', () => {
    it('should test a valid generated app', async () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const outputDir = join(TEST_OUTPUT_DIR, 'test-valid');
      const orchestrator = new Orchestrator();

      // Generate the app first
      await orchestrator.runFullWorkflow(spec, outputDir, { skipTests: true });

      // Then test it
      const results = await orchestrator.test(outputDir);
      const summary = TesterAgent.summarize(results);

      expect(summary.total).toBeGreaterThan(0);
      expect(summary.failed).toBe(0);
    });

    it('should fail tests for non-existent directory', async () => {
      const orchestrator = new Orchestrator();
      const results = await orchestrator.test('/nonexistent/path');

      const summary = TesterAgent.summarize(results);
      expect(summary.failed).toBeGreaterThan(0);
    });
  });

  describe('Orchestrator.saveProposal and loadProposal', () => {
    it('should save and load proposal correctly', async () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const outputDir = join(TEST_OUTPUT_DIR, 'proposal-roundtrip');
      const orchestrator = new Orchestrator();

      // Analyze and save
      const proposal = await orchestrator.analyze(spec);
      const proposalPath = await orchestrator.saveProposal(proposal, outputDir);

      expect(existsSync(proposalPath)).toBe(true);

      // Load and compare
      const loadedProposal = await orchestrator.loadProposal(outputDir);
      expect(loadedProposal.name).toBe(proposal.name);
      expect(loadedProposal.description).toBe(proposal.description);
      expect(loadedProposal.resources.length).toBe(proposal.resources.length);
    });
  });

  describe('Generated Code Validation', () => {
    it('should generate valid TypeScript code', async () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const outputDir = join(TEST_OUTPUT_DIR, 'ts-validation');
      const orchestrator = new Orchestrator();

      await orchestrator.runFullWorkflow(spec, outputDir, { skipTests: true });

      // Read and verify key files
      const indexTs = readFileSync(join(outputDir, 'src', 'index.ts'), 'utf-8');
      const toolsTs = readFileSync(join(outputDir, 'src', 'tools.ts'), 'utf-8');

      // Verify MCP imports
      expect(indexTs).toContain("import { Server }");
      expect(indexTs).toContain('ListToolsRequestSchema');
      expect(indexTs).toContain('CallToolRequestSchema');

      // Verify tool exports
      expect(toolsTs).toContain('export const tools');
      expect(toolsTs).toContain('export async function handleToolCall');

      // Verify specific tools are generated
      expect(toolsTs).toContain("name: 'listPets'");
      expect(toolsTs).toContain("name: 'createPet'");
      expect(toolsTs).toContain("name: 'getPet'");
    });

    it('should generate valid package.json', async () => {
      const spec = parseOpenApiSpec(join(FIXTURES_DIR, 'petstore-simple.yaml'));
      const outputDir = join(TEST_OUTPUT_DIR, 'package-validation');
      const orchestrator = new Orchestrator();

      await orchestrator.runFullWorkflow(spec, outputDir, { skipTests: true });

      const packageJsonContent = readFileSync(
        join(outputDir, 'package.json'),
        'utf-8'
      );
      const packageJson = JSON.parse(packageJsonContent);

      expect(packageJson.name).toBe('pet-store-api');
      expect(packageJson.type).toBe('module');
      expect(packageJson.dependencies['@modelcontextprotocol/sdk']).toBeDefined();
      expect(packageJson.dependencies['zod']).toBeDefined();
      expect(packageJson.scripts.build).toBe('tsc');
    });
  });
});
