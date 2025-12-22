import Anthropic from '@anthropic-ai/sdk';
import { AppProposal, AppProposalSchema } from '../schemas/index.js';
import { getAnthropicApiKey } from '../config.js';

export class AnalyzerAgent {
  private client: Anthropic;

  constructor() {
    this.client = new Anthropic({
      apiKey: getAnthropicApiKey(),
    });
  }

  async analyze(openApiSpec: object): Promise<AppProposal> {
    const response = await this.client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: `Analyze this OpenAPI specification and propose a ChatGPT app structure.

OpenAPI Spec:
${JSON.stringify(openApiSpec, null, 2)}

Return a JSON object with:
- name: App name (derived from API title)
- description: App description
- resources: Array of resource groups, each with tools mapped from endpoints
- widgets: Suggested UI widgets for key tools
- authType: Authentication type needed
- excludedEndpoints: Any endpoints that shouldn't be exposed, with reasons

Focus on creating a user-friendly app structure that groups related operations logically.`,
        },
      ],
    });

    // Extract JSON from response
    const content = response.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type');
    }

    const jsonMatch = content.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }

    const proposal = JSON.parse(jsonMatch[0]);
    return AppProposalSchema.parse(proposal);
  }
}
