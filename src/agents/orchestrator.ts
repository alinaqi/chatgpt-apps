import type { OpenAPIV3 } from 'openapi-types';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { AnalyzerAgent } from './analyzer.js';
import { GeneratorAgent, GeneratedFile } from './generator.js';
import { ChatGPTAppGenerator } from './chatgpt-app-generator.js';
import { TesterAgent } from './tester.js';
import { UXAgent } from './ux.js';
import { AppProposal, TestResult, UXFeedback } from '../schemas/index.js';

export interface WorkflowResult {
  proposal: AppProposal;
  generatedFiles: string[];
  testResults: TestResult[];
  outputDir: string;
}

export interface WorkflowOptions {
  skipConfirm?: boolean;
  skipTests?: boolean;
  verbose?: boolean;
  /** Generate ChatGPT App SDK compatible output with HTTP server and widgets */
  chatgptApp?: boolean;
}

/**
 * Orchestrates the full ChatGPT app generation workflow
 */
export class Orchestrator {
  private analyzer: AnalyzerAgent;
  private generator: GeneratorAgent;
  private chatgptGenerator: ChatGPTAppGenerator;
  private tester: TesterAgent;
  private ux: UXAgent;

  constructor() {
    this.analyzer = new AnalyzerAgent();
    this.generator = new GeneratorAgent();
    this.chatgptGenerator = new ChatGPTAppGenerator();
    this.tester = new TesterAgent();
    this.ux = new UXAgent();
  }

  /**
   * Run the full workflow: analyze -> confirm -> generate -> test
   */
  async runFullWorkflow(
    openApiSpec: OpenAPIV3.Document,
    outputDir: string,
    options: WorkflowOptions = {},
    onProposal?: (proposal: AppProposal) => Promise<boolean>
  ): Promise<WorkflowResult> {
    const { verbose = false, skipTests = false, chatgptApp = false } = options;

    // Step 1: Analyze OpenAPI spec
    if (verbose) console.log('Step 1: Analyzing OpenAPI spec...');
    const proposal = await this.analyzer.analyze(openApiSpec);
    if (verbose) console.log(`  Proposed app: ${proposal.name}`);
    if (verbose) console.log(`  Resources: ${proposal.resources.length}`);
    if (verbose) console.log(`  Widgets: ${proposal.widgets.length}`);

    // Step 2: Get user confirmation if callback provided
    if (onProposal) {
      const confirmed = await onProposal(proposal);
      if (!confirmed) {
        throw new Error('User rejected the proposal');
      }
    }

    // Step 3: Generate code (use ChatGPT App generator if flag is set)
    if (verbose) {
      const generatorType = chatgptApp ? 'ChatGPT Apps SDK' : 'MCP stdio';
      console.log(`\nStep 2: Generating ${generatorType} server code...`);
    }
    const files = chatgptApp
      ? await this.chatgptGenerator.generate(proposal)
      : await this.generator.generate(proposal);
    if (verbose) console.log(`  Generated ${files.length} files`);

    // Step 4: Write files to outputDir
    if (verbose) console.log('\nStep 3: Writing files...');
    await this.writeFiles(files, outputDir);
    if (verbose) console.log(`  Files written to ${outputDir}`);

    // Step 5: Test generated code
    let testResults: TestResult[] = [];
    if (!skipTests) {
      if (verbose) console.log('\nStep 4: Testing generated app...');
      testResults = await this.tester.test(outputDir);
      const summary = TesterAgent.summarize(testResults);
      if (verbose) {
        console.log(`  Tests: ${summary.passed}/${summary.total} passed`);
        if (summary.failed > 0) {
          console.log(`  Failed tests:`);
          for (const result of testResults.filter((r) => !r.passed)) {
            console.log(`    - ${result.toolName}: ${result.error}`);
          }
        }
      }
    }

    return {
      proposal,
      generatedFiles: files.map((f) => f.path),
      testResults,
      outputDir,
    };
  }

  /**
   * Analyze-only workflow
   */
  async analyze(openApiSpec: OpenAPIV3.Document): Promise<AppProposal> {
    return this.analyzer.analyze(openApiSpec);
  }

  /**
   * Generate-only workflow (from existing proposal)
   */
  async generate(proposal: AppProposal, outputDir: string): Promise<string[]> {
    const files = await this.generator.generate(proposal);
    await this.writeFiles(files, outputDir);
    return files.map((f) => f.path);
  }

  /**
   * Test-only workflow
   */
  async test(appDir: string): Promise<TestResult[]> {
    return this.tester.test(appDir);
  }

  /**
   * UX refinement workflow
   */
  async refineUX(
    appDir: string,
    feedback: string,
    toolName?: string
  ): Promise<UXFeedback> {
    return this.ux.refine(appDir, feedback, toolName);
  }

  /**
   * Write generated files to disk
   */
  private async writeFiles(files: GeneratedFile[], outputDir: string): Promise<void> {
    // Ensure output directory exists
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    for (const file of files) {
      const filePath = join(outputDir, file.path);
      const fileDir = dirname(filePath);

      // Ensure parent directory exists
      if (!existsSync(fileDir)) {
        mkdirSync(fileDir, { recursive: true });
      }

      writeFileSync(filePath, file.content);
    }
  }

  /**
   * Save proposal to file
   */
  async saveProposal(proposal: AppProposal, outputDir: string): Promise<string> {
    const proposalPath = join(outputDir, 'proposal.json');

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    writeFileSync(proposalPath, JSON.stringify(proposal, null, 2));
    return proposalPath;
  }

  /**
   * Load proposal from file
   */
  async loadProposal(appDir: string): Promise<AppProposal> {
    const proposalPath = join(appDir, 'proposal.json');

    if (!existsSync(proposalPath)) {
      throw new Error(`Proposal not found at ${proposalPath}`);
    }

    const content = await import('fs').then((fs) =>
      fs.readFileSync(proposalPath, 'utf-8')
    );

    return JSON.parse(content) as AppProposal;
  }
}
