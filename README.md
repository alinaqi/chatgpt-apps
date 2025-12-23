# chatgpt-apps

CLI tool to generate ChatGPT Apps from OpenAPI specs using agentic AI workflows.

## Overview

`chatgpt-apps` is a developer tool that transforms your existing REST APIs (via OpenAPI specs) into fully functional ChatGPT Apps. It uses Claude AI in an agentic workflow to:

1. **Analyze** your OpenAPI spec and propose an optimal app structure
2. **Generate** MCP (Model Context Protocol) server code
3. **Test** the generated app for correctness
4. **Refine** the UX through natural language feedback

### Output Modes

The CLI supports two output modes:

| Mode | Transport | Use Case |
|------|-----------|----------|
| **Claude Desktop** (default) | stdio | Local MCP server for Claude Desktop |
| **ChatGPT Apps SDK** | HTTP | Web-based MCP server with widgets for ChatGPT |

## Installation

```bash
npm install -g openapi-chatgpt-apps
```

## Quick Start

### For Claude Desktop (stdio MCP)

```bash
# Create an MCP server for Claude Desktop
chatgpt-apps create -s ./api-spec.yaml -o ./my-app
```

### For ChatGPT Apps SDK (HTTP MCP + Widgets)

```bash
# Create a ChatGPT App with HTTP server and web widgets
chatgpt-apps create -s ./api-spec.yaml -o ./my-chatgpt-app --chatgpt-app

# Build and run the server
cd my-chatgpt-app
npm install && npm run build
npm start  # Server runs at http://localhost:3000/mcp

# Expose via ngrok for ChatGPT
ngrok http 3000
```

### Individual Commands

```bash
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

The CLI uses an agentic architecture with specialized AI agents:

1. **Analyzer Agent** - Parses OpenAPI specs and proposes optimal ChatGPT app structure
2. **Generator Agent** - Produces TypeScript MCP server code (stdio transport)
3. **ChatGPT App Generator** - Produces HTTP MCP server with web widgets
4. **Tester Agent** - Validates generated code and tests tool functionality
5. **UX Agent** - Iteratively improves widgets and user experience

### ChatGPT Apps SDK Integration

When using `--chatgpt-app`, the generator creates:

- **HTTP Server** with `/mcp` endpoint using `StreamableHTTPServerTransport`
- **Web Widgets** (HTML/JS) for rendering tool outputs in ChatGPT iframes
- **OpenAI Metadata** on tools (`openai/outputTemplate`, `openai/widgetAccessible`)

To connect your app to ChatGPT:

1. Enable Developer Mode: Settings → Apps & Connectors → Advanced settings
2. Create a Connector: Settings → Connectors → Create
3. Enter your ngrok URL (e.g., `https://abc123.ngrok.app/mcp`)
4. Use in chat: Click + → More → Select your connector

See [OpenAI Apps SDK Documentation](https://developers.openai.com/apps-sdk/) for more details.

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
