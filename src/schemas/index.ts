import { z } from 'zod';

// Tool proposal schema
export const ToolProposalSchema = z.object({
  name: z.string().describe('Tool name in camelCase'),
  description: z.string().describe('Human-readable description of what the tool does'),
  httpMethod: z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']),
  path: z.string().describe('Original API path'),
  parameters: z.array(z.object({
    name: z.string(),
    type: z.string(),
    required: z.boolean(),
    description: z.string().optional(),
  })),
  requestBody: z.object({
    contentType: z.string(),
    schema: z.record(z.unknown()),
  }).optional(),
  responseType: z.string().describe('Expected response type'),
});

export type ToolProposal = z.infer<typeof ToolProposalSchema>;

// Widget proposal schema
export const WidgetProposalSchema = z.object({
  name: z.string(),
  description: z.string(),
  toolName: z.string().describe('Associated tool name'),
  componentType: z.enum(['form', 'list', 'detail', 'chart', 'table', 'card']),
  fields: z.array(z.object({
    name: z.string(),
    label: z.string(),
    inputType: z.string(),
    validation: z.string().optional(),
  })).optional(),
});

export type WidgetProposal = z.infer<typeof WidgetProposalSchema>;

// Resource group schema
export const ResourceGroupSchema = z.object({
  name: z.string(),
  description: z.string(),
  tools: z.array(ToolProposalSchema),
});

export type ResourceGroup = z.infer<typeof ResourceGroupSchema>;

// Full app proposal schema
export const AppProposalSchema = z.object({
  name: z.string().describe('App name'),
  description: z.string().describe('App description'),
  version: z.string().default('1.0.0'),
  resources: z.array(ResourceGroupSchema),
  widgets: z.array(WidgetProposalSchema),
  authType: z.enum(['none', 'apiKey', 'oauth2', 'bearer']).describe('Authentication type'),
  excludedEndpoints: z.array(z.object({
    path: z.string(),
    method: z.string(),
    reason: z.string(),
  })).describe('Endpoints excluded from the app with reasons'),
});

export type AppProposal = z.infer<typeof AppProposalSchema>;

// Test result schema
export const TestResultSchema = z.object({
  toolName: z.string(),
  passed: z.boolean(),
  duration: z.number(),
  error: z.string().optional(),
  assertions: z.array(z.object({
    name: z.string(),
    passed: z.boolean(),
    message: z.string().optional(),
  })),
});

export type TestResult = z.infer<typeof TestResultSchema>;

// UX feedback schema
export const UXFeedbackSchema = z.object({
  toolName: z.string(),
  feedback: z.string(),
  suggestedChanges: z.array(z.object({
    component: z.string(),
    currentBehavior: z.string(),
    suggestedBehavior: z.string(),
    priority: z.enum(['low', 'medium', 'high']),
  })),
});

export type UXFeedback = z.infer<typeof UXFeedbackSchema>;

// Config schema
export const ConfigSchema = z.object({
  anthropicApiKey: z.string().optional(),
  defaultOutputDir: z.string().default('./chatgpt-app'),
  modelId: z.string().default('claude-sonnet-4-20250514'),
});

export type Config = z.infer<typeof ConfigSchema>;
