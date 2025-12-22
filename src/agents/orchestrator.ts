import { AnalyzerAgent } from './analyzer.js';
import { GeneratorAgent } from './generator.js';
import { TesterAgent } from './tester.js';
import { UXAgent } from './ux.js';
import { AppProposal, TestResult } from '../schemas/index.js';

export interface WorkflowResult {
  proposal: AppProposal;
  generatedFiles: string[];
  testResults: TestResult[];
  outputDir: string;
}

export class Orchestrator {
  private analyzer: AnalyzerAgent;
  private generator: GeneratorAgent;
  private tester: TesterAgent;
  private ux: UXAgent;

  constructor() {
    this.analyzer = new AnalyzerAgent();
    this.generator = new GeneratorAgent();
    this.tester = new TesterAgent();
    this.ux = new UXAgent();
  }

  async runFullWorkflow(
    openApiSpec: object,
    outputDir: string,
    onProposal?: (proposal: AppProposal) => Promise<boolean>
  ): Promise<WorkflowResult> {
    // Step 1: Analyze OpenAPI spec
    console.log('Step 1: Analyzing OpenAPI spec...');
    const proposal = await this.analyzer.analyze(openApiSpec);

    // Step 2: Get user confirmation if callback provided
    if (onProposal) {
      const confirmed = await onProposal(proposal);
      if (!confirmed) {
        throw new Error('User rejected the proposal');
      }
    }

    // Step 3: Generate code
    console.log('Step 2: Generating MCP server code...');
    const files = await this.generator.generate(proposal);

    // TODO: Write files to outputDir

    // Step 4: Test generated code
    console.log('Step 3: Testing generated app...');
    const testResults = await this.tester.test(outputDir);

    return {
      proposal,
      generatedFiles: files.map((f) => f.path),
      testResults,
      outputDir,
    };
  }
}
