import Anthropic from '@anthropic-ai/sdk';
import { AppProposal } from '../schemas/index.js';
import { getAnthropicApiKey } from '../config.js';

export interface GeneratedFile {
  path: string;
  content: string;
}

export class GeneratorAgent {
  private client: Anthropic;

  constructor() {
    this.client = new Anthropic({
      apiKey: getAnthropicApiKey(),
    });
  }

  async generate(proposal: AppProposal): Promise<GeneratedFile[]> {
    // TODO: Implement code generation using Claude
    // This will generate:
    // - MCP server entry point
    // - Tool implementations
    // - Type definitions
    // - package.json for the generated app

    const files: GeneratedFile[] = [];

    // Placeholder - will be implemented
    console.log('Generator agent: would generate files for', proposal.name);

    return files;
  }
}
