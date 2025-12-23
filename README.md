# chatgpt-apps

CLI tool to generate ChatGPT Apps from OpenAPI specs using agentic AI workflows.

## Overview

`chatgpt-apps` is a developer tool that transforms your existing REST APIs (via OpenAPI specs) into fully functional ChatGPT Apps. It uses Claude AI in an agentic workflow to:

1. **Analyze** your OpenAPI spec and propose an optimal app structure
2. **Generate** MCP (Model Context Protocol) server code
3. **Test** the generated app for correctness
4. **Refine** the UX through natural language feedback

## Installation

```bash
npm install -g openapi-chatgpt-apps
```

## Quick Start

```bash
# Create a ChatGPT app from your OpenAPI spec
chatgpt-apps create -s ./api-spec.yaml -o ./my-chatgpt-app

# Or run steps individually:
chatgpt-apps analyze -s ./api-spec.yaml
chatgpt-apps generate ./my-chatgpt-app
chatgpt-apps test ./my-chatgpt-app
```

## Commands

| Command | Description |
|---------|-------------|
| `create` | Full workflow: analyze, generate, test |
| `analyze` | Analyze OpenAPI spec and propose app structure |
| `generate` | Generate MCP server from approved proposal |
| `test` | Test a generated ChatGPT app |
| `ux` | Refine app UX with AI-powered feedback |
| `serve` | Start development server for testing |
| `config` | Manage CLI configuration |

## Configuration

Set your Anthropic API key:

```bash
chatgpt-apps config --set ANTHROPIC_API_KEY=your-key-here
```

Or use environment variable:

```bash
export ANTHROPIC_API_KEY=your-key-here
```

## How It Works

### Architecture

The CLI uses an agentic architecture with four specialized AI agents:

1. **Analyzer Agent** - Parses OpenAPI specs and proposes optimal ChatGPT app structure
2. **Generator Agent** - Produces TypeScript MCP server code
3. **Tester Agent** - Validates generated code and tests tool functionality
4. **UX Agent** - Iteratively improves widgets and user experience

### OpenAPI to MCP Mapping

| OpenAPI | MCP |
|---------|-----|
| Path + Method | Tool |
| Parameters | Tool input schema |
| Request body | Tool input properties |
| Response | Tool output |
| Tags | Resource groups |

## Requirements

- Node.js >= 18
- Anthropic API key (Claude 4.5)
- OpenAPI 3.x spec

## Development

```bash
# Clone the repo
git clone https://github.com/alinaqi/chatgpt-apps.git
cd chatgpt-apps

# Install dependencies
npm install

# Run in development mode
npm run dev -- create -s ./example.yaml

# Run tests
npm test
```

## License

MIT
