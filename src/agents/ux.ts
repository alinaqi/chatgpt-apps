import Anthropic from '@anthropic-ai/sdk';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { UXFeedback, UXFeedbackSchema } from '../schemas/index.js';
import { getAnthropicApiKey } from '../config.js';

export interface UXAgentOptions {
  client?: Anthropic;
  model?: string;
}

interface UXChange {
  component: string;
  currentBehavior: string;
  suggestedBehavior: string;
  priority: 'low' | 'medium' | 'high';
}

/**
 * Agent that refines UX based on natural language feedback
 */
export class UXAgent {
  private client: Anthropic | null;
  private model: string;

  constructor(options: UXAgentOptions = {}) {
    this.model = options.model || 'claude-sonnet-4-20250514';

    if (options.client) {
      this.client = options.client;
    } else {
      try {
        this.client = new Anthropic({
          apiKey: getAnthropicApiKey(),
        });
      } catch {
        this.client = null;
      }
    }
  }

  /**
   * Process UX feedback and suggest/apply changes
   */
  async refine(
    appDir: string,
    feedback: string,
    toolName?: string
  ): Promise<UXFeedback> {
    // Read current widget definitions
    const widgetsPath = join(appDir, 'src', 'widgets.ts');
    const toolsPath = join(appDir, 'src', 'tools.ts');

    const widgetsContent = existsSync(widgetsPath)
      ? readFileSync(widgetsPath, 'utf-8')
      : '';
    const toolsContent = existsSync(toolsPath)
      ? readFileSync(toolsPath, 'utf-8')
      : '';

    // Analyze feedback and suggest changes
    const suggestedChanges = await this.analyzeFeedback(
      feedback,
      widgetsContent,
      toolsContent,
      toolName
    );

    return UXFeedbackSchema.parse({
      toolName: toolName || 'all',
      feedback,
      suggestedChanges,
    });
  }

  /**
   * Analyze feedback and generate suggested changes
   */
  private async analyzeFeedback(
    feedback: string,
    widgetsContent: string,
    toolsContent: string,
    toolName?: string
  ): Promise<UXChange[]> {
    if (!this.client) {
      // Local heuristic-based analysis
      return this.localAnalysis(feedback, widgetsContent, toolName);
    }

    try {
      const response = await this.client.messages.create({
        model: this.model,
        max_tokens: 2048,
        system: `You are a UX expert analyzing feedback for a ChatGPT app.
Analyze the user's feedback and suggest specific improvements.
Return a JSON array of changes with this structure:
[{
  "component": "string - the widget or tool name to change",
  "currentBehavior": "string - what it currently does",
  "suggestedBehavior": "string - what it should do instead",
  "priority": "low" | "medium" | "high"
}]
Only return the JSON array, no other text.`,
        messages: [
          {
            role: 'user',
            content: `User feedback: "${feedback}"

${toolName ? `Specific tool: ${toolName}` : 'General feedback for the app'}

Current widgets code:
\`\`\`typescript
${widgetsContent || 'No widgets defined'}
\`\`\`

Current tools code (tool definitions only):
\`\`\`typescript
${this.extractToolDefinitions(toolsContent)}
\`\`\`

Analyze this feedback and suggest UX improvements.`,
          },
        ],
      });

      const content = response.content[0];
      if (content.type !== 'text') {
        return this.localAnalysis(feedback, widgetsContent, toolName);
      }

      try {
        const jsonMatch = content.text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]) as UXChange[];
        }
      } catch {
        // Fall back to local analysis
      }

      return this.localAnalysis(feedback, widgetsContent, toolName);
    } catch (error) {
      console.warn('AI analysis failed, using local analysis:', error);
      return this.localAnalysis(feedback, widgetsContent, toolName);
    }
  }

  /**
   * Local heuristic-based UX analysis
   */
  private localAnalysis(
    feedback: string,
    widgetsContent: string,
    toolName?: string
  ): UXChange[] {
    const changes: UXChange[] = [];
    const lowerFeedback = feedback.toLowerCase();

    // Common UX patterns to detect
    if (lowerFeedback.includes('loading') || lowerFeedback.includes('slow')) {
      changes.push({
        component: toolName || 'all widgets',
        currentBehavior: 'No loading state shown',
        suggestedBehavior: 'Add loading spinner while data is being fetched',
        priority: 'medium',
      });
    }

    if (lowerFeedback.includes('error') || lowerFeedback.includes('fail')) {
      changes.push({
        component: toolName || 'all tools',
        currentBehavior: 'Generic error messages',
        suggestedBehavior: 'Show user-friendly error messages with suggestions for resolution',
        priority: 'high',
      });
    }

    if (lowerFeedback.includes('confus') || lowerFeedback.includes('unclear')) {
      changes.push({
        component: toolName || 'tool descriptions',
        currentBehavior: 'Technical descriptions',
        suggestedBehavior: 'Use clearer, more user-friendly descriptions',
        priority: 'medium',
      });
    }

    if (lowerFeedback.includes('button') || lowerFeedback.includes('click')) {
      changes.push({
        component: toolName ? `${toolName}Form` : 'form widgets',
        currentBehavior: 'Standard submit button',
        suggestedBehavior: 'Use more descriptive button labels that indicate the action',
        priority: 'low',
      });
    }

    if (lowerFeedback.includes('table') || lowerFeedback.includes('list')) {
      changes.push({
        component: toolName ? `${toolName}Widget` : 'table widgets',
        currentBehavior: 'Basic table display',
        suggestedBehavior: 'Add sorting, filtering, or pagination for better data navigation',
        priority: 'medium',
      });
    }

    if (lowerFeedback.includes('form') || lowerFeedback.includes('input')) {
      changes.push({
        component: toolName ? `${toolName}Form` : 'form widgets',
        currentBehavior: 'Basic form fields',
        suggestedBehavior: 'Add input validation, placeholders, and helper text',
        priority: 'medium',
      });
    }

    if (lowerFeedback.includes('mobile') || lowerFeedback.includes('responsive')) {
      changes.push({
        component: 'all widgets',
        currentBehavior: 'Fixed-width layouts',
        suggestedBehavior: 'Use responsive design for better mobile experience',
        priority: 'high',
      });
    }

    // If no specific patterns matched, provide a general suggestion
    if (changes.length === 0) {
      changes.push({
        component: toolName || 'general',
        currentBehavior: 'Current implementation',
        suggestedBehavior: `Address feedback: "${feedback}"`,
        priority: 'medium',
      });
    }

    return changes;
  }

  /**
   * Extract just the tool definitions from tools.ts content
   */
  private extractToolDefinitions(content: string): string {
    const match = content.match(/export const tools = \[([\s\S]*?)\];/);
    if (match) {
      return `export const tools = [${match[1]}];`;
    }
    return 'No tools found';
  }

  /**
   * Apply suggested changes to the app
   */
  async applyChanges(
    appDir: string,
    changes: UXChange[]
  ): Promise<{ applied: number; skipped: number }> {
    // For now, just log the changes that would be applied
    // In a full implementation, this would modify the actual files
    let applied = 0;
    let skipped = 0;

    for (const change of changes) {
      console.log(`Would apply change to ${change.component}:`);
      console.log(`  Current: ${change.currentBehavior}`);
      console.log(`  Suggested: ${change.suggestedBehavior}`);
      console.log(`  Priority: ${change.priority}`);
      console.log('');
      skipped++; // For now, all are skipped since we don't auto-apply
    }

    return { applied, skipped };
  }
}
