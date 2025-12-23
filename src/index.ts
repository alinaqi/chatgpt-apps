#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';
import { resolve } from 'path';
import type { OpenAPIV3 } from 'openapi-types';
import { parseOpenApiSpec, validateSpec } from './utils/index.js';
import { Orchestrator } from './agents/orchestrator.js';
import { TesterAgent } from './agents/tester.js';
import { loadConfig, setConfigValue, getConfigValue } from './config.js';

/**
 * Filter OpenAPI spec to include only specified paths
 */
function filterOpenApiSpec(
  spec: OpenAPIV3.Document,
  options: { includePaths?: string; maxTools?: number }
): OpenAPIV3.Document {
  let filteredPaths = { ...spec.paths };

  // Filter by path patterns
  if (options.includePaths) {
    const patterns = options.includePaths.split(',').map((p) => p.trim());
    filteredPaths = {};

    for (const [path, pathItem] of Object.entries(spec.paths || {})) {
      const matches = patterns.some((pattern) => {
        // Support simple wildcard matching
        if (pattern.endsWith('*')) {
          return path.startsWith(pattern.slice(0, -1));
        }
        return path === pattern || path.startsWith(pattern + '/') || path.startsWith(pattern + '{');
      });

      if (matches && pathItem) {
        filteredPaths[path] = pathItem;
      }
    }
  }

  // Limit number of tools (count methods across all paths)
  if (options.maxTools && options.maxTools > 0) {
    let toolCount = 0;
    const limitedPaths: OpenAPIV3.PathsObject = {};

    for (const [path, pathItem] of Object.entries(filteredPaths)) {
      if (!pathItem) continue;

      const methods = ['get', 'post', 'put', 'patch', 'delete'] as const;
      const limitedPathItem: OpenAPIV3.PathItemObject = {};

      for (const method of methods) {
        if (pathItem[method] && toolCount < options.maxTools) {
          limitedPathItem[method] = pathItem[method];
          toolCount++;
        }
      }

      if (Object.keys(limitedPathItem).length > 0) {
        limitedPaths[path] = limitedPathItem;
      }

      if (toolCount >= options.maxTools) break;
    }

    filteredPaths = limitedPaths;
  }

  return {
    ...spec,
    paths: filteredPaths,
  };
}

const program = new Command();

program
  .name('chatgpt-apps')
  .description('Generate ChatGPT Apps from OpenAPI specs using agentic AI workflows')
  .version('0.2.0');

program
  .command('create')
  .description('Create a new ChatGPT app from an OpenAPI spec (full workflow)')
  .requiredOption('-s, --spec <path>', 'Path to OpenAPI spec (JSON or YAML)')
  .option('-o, --output <path>', 'Output directory', './chatgpt-app')
  .option('--skip-confirm', 'Skip confirmation prompts')
  .option('--skip-tests', 'Skip running tests after generation')
  .option('-v, --verbose', 'Show detailed output')
  .option('--chatgpt-app', 'Generate ChatGPT Apps SDK compatible output (HTTP server + widgets)')
  .option('--include-paths <patterns>', 'Comma-separated path patterns to include (e.g., "/users,/surveys")')
  .option('--max-tools <number>', 'Maximum number of tools to generate', parseInt)
  .action(async (options) => {
    const spinner = ora('Parsing OpenAPI spec...').start();

    try {
      const specPath = resolve(options.spec);
      const outputDir = resolve(options.output);

      let spec = parseOpenApiSpec(specPath);
      spinner.succeed('OpenAPI spec parsed successfully');

      // Apply path filtering if specified
      if (options.includePaths || options.maxTools) {
        const originalPathCount = Object.keys(spec.paths || {}).length;
        spec = filterOpenApiSpec(spec, {
          includePaths: options.includePaths,
          maxTools: options.maxTools,
        });
        const filteredPathCount = Object.keys(spec.paths || {}).length;
        console.log(
          chalk.gray(`  Filtered: ${filteredPathCount} paths (from ${originalPathCount})`)
        );
      }

      const orchestrator = new Orchestrator();

      const result = await orchestrator.runFullWorkflow(
        spec,
        outputDir,
        {
          skipTests: options.skipTests,
          verbose: options.verbose,
          chatgptApp: options.chatgptApp,
        },
        options.skipConfirm
          ? undefined
          : async (proposal) => {
              console.log('\n' + chalk.cyan('Proposed App Structure:'));
              console.log(chalk.gray('─'.repeat(50)));
              console.log(`  ${chalk.bold('Name:')} ${proposal.name}`);
              console.log(`  ${chalk.bold('Description:')} ${proposal.description}`);
              console.log(`  ${chalk.bold('Auth Type:')} ${proposal.authType}`);
              console.log(`  ${chalk.bold('Resources:')} ${proposal.resources.length}`);
              for (const resource of proposal.resources) {
                console.log(`    - ${resource.name}: ${resource.tools.length} tools`);
              }
              console.log(`  ${chalk.bold('Widgets:')} ${proposal.widgets.length}`);
              console.log(chalk.gray('─'.repeat(50)));

              const { confirm } = await inquirer.prompt([
                {
                  type: 'confirm',
                  name: 'confirm',
                  message: 'Proceed with this structure?',
                  default: true,
                },
              ]);
              return confirm;
            }
      );

      console.log('\n' + chalk.green('✓ ChatGPT app created successfully!'));
      console.log(`  Output: ${result.outputDir}`);
      console.log(`  Files: ${result.generatedFiles.length}`);

      if (result.testResults.length > 0) {
        const summary = TesterAgent.summarize(result.testResults);
        console.log(
          `  Tests: ${summary.passed}/${summary.total} passed ` +
            (summary.failed > 0 ? chalk.red(`(${summary.failed} failed)`) : chalk.green('✓'))
        );
      }

      // Display comprehensive next steps
      console.log('\n' + chalk.cyan.bold('━━━ Next Steps ━━━'));

      console.log('\n' + chalk.yellow('1. Setup & Build:'));
      console.log(`   cd ${options.output}`);
      console.log('   npm install');
      console.log('   npm run build');

      console.log('\n' + chalk.yellow('2. Configure Environment:'));
      console.log('   Create a .env file with your API credentials:');
      console.log(chalk.gray('   ┌─────────────────────────────────────────'));
      console.log(chalk.gray('   │') + ` API_BASE_URL=${chalk.cyan('https://your-api-base-url.com')}`);
      console.log(chalk.gray('   │') + ` API_KEY=${chalk.cyan('your-api-key-or-bearer-token')}`);
      console.log(chalk.gray('   └─────────────────────────────────────────'));

      if (options.chatgptApp) {
        // ChatGPT Apps SDK specific instructions
        console.log('\n' + chalk.yellow('3. Run the HTTP Server:'));
        console.log('   npm start');
        console.log(`   Server will run at: ${chalk.cyan('http://localhost:3000/mcp')}`);

        console.log('\n' + chalk.yellow('4. Expose to Internet (for testing):'));
        console.log('   Use ngrok or similar to create a public URL:');
        console.log(chalk.gray('   ┌─────────────────────────────────────────'));
        console.log(chalk.gray('   │') + ' ngrok http 3000');
        console.log(chalk.gray('   │') + ' # This gives you: https://<id>.ngrok.app/mcp');
        console.log(chalk.gray('   └─────────────────────────────────────────'));

        console.log('\n' + chalk.yellow('5. Connect to ChatGPT:'));
        console.log('   a. Enable Developer Mode:');
        console.log('      Settings → Apps & Connectors → Advanced settings');
        console.log('');
        console.log('   b. Create a Connector:');
        console.log('      Settings → Connectors → Create');
        console.log(`      - Name: ${chalk.cyan(result.proposal.name)}`);
        console.log(`      - URL: ${chalk.cyan('https://<your-ngrok-url>/mcp')}`);
        console.log('');
        console.log('   c. Use in Chat:');
        console.log('      Click + → More → Select your connector');
        console.log('      Ask ChatGPT to use your tools!');

        console.log('\n' + chalk.yellow('6. Deploy for Production:'));
        console.log('   - Deploy to: Fly.io, Render, Railway, or Cloud Run');
        console.log('   - Ensure HTTPS is enabled');
        console.log('   - Set environment variables on your platform');
        console.log('   - Update connector URL in ChatGPT settings');

        console.log('\n' + chalk.yellow('7. Submit to ChatGPT Apps Directory:'));
        console.log('   - Verify your organization at platform.openai.com');
        console.log('   - Go to: platform.openai.com/apps-manage');
        console.log('   - Submit your app for review');
        console.log('   - See: https://developers.openai.com/apps-sdk/');
      } else {
        // Claude Desktop (stdio MCP) instructions
        console.log('\n' + chalk.yellow('3. Test Locally with Claude Desktop:'));
        console.log('   Add to your Claude Desktop config (~/.claude/claude_desktop_config.json):');
        console.log(chalk.gray('   ┌─────────────────────────────────────────'));
        console.log(chalk.gray('   │') + ' {');
        console.log(chalk.gray('   │') + '   "mcpServers": {');
        console.log(chalk.gray('   │') + `     "${result.proposal.name}": {`);
        console.log(chalk.gray('   │') + `       "command": "node",`);
        console.log(chalk.gray('   │') + `       "args": ["${resolve(outputDir, 'dist', 'index.js')}"],`);
        console.log(chalk.gray('   │') + '       "env": {');
        console.log(chalk.gray('   │') + '         "API_BASE_URL": "https://your-api-url.com",');
        console.log(chalk.gray('   │') + '         "API_KEY": "your-api-key"');
        console.log(chalk.gray('   │') + '       }');
        console.log(chalk.gray('   │') + '     }');
        console.log(chalk.gray('   │') + '   }');
        console.log(chalk.gray('   │') + ' }');
        console.log(chalk.gray('   └─────────────────────────────────────────'));

        console.log('\n' + chalk.yellow('4. Deploy for Public Access:'));
        console.log('   Option A: ' + chalk.bold('Serverless (Recommended)'));
        console.log('     - Deploy to Cloudflare Workers, Vercel, or AWS Lambda');
        console.log('     - Use MCP-over-HTTP transport for remote access');
        console.log('');
        console.log('   Option B: ' + chalk.bold('Self-hosted'));
        console.log('     - Run on your server with: npm start');
        console.log('     - Use a reverse proxy (nginx) with HTTPS');
        console.log('     - Expose via public URL or tunnel (ngrok, cloudflared)');
        console.log('');
        console.log('   Option C: ' + chalk.bold('Publish to npm'));
        console.log('     - Update package.json with your details');
        console.log('     - Run: npm publish');
        console.log('     - Users can install with: npx ' + result.proposal.name);

        console.log('\n' + chalk.yellow('5. Use with ChatGPT (Apps SDK):'));
        console.log('   Run with --chatgpt-app flag to generate ChatGPT-compatible output:');
        console.log(`   chatgpt-apps create -s ${options.spec} -o ${options.output} --chatgpt-app`);
      }

      console.log('\n' + chalk.gray('─'.repeat(50)));
      console.log(chalk.cyan('Documentation: ') + 'https://github.com/alinaqi/chatgpt-apps#readme');
      console.log(chalk.gray('─'.repeat(50)));
    } catch (error) {
      spinner.fail('Failed to create ChatGPT app');
      console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'));
      process.exit(1);
    }
  });

program
  .command('analyze')
  .description('Analyze an OpenAPI spec and propose app structure')
  .requiredOption('-s, --spec <path>', 'Path to OpenAPI spec')
  .option('-o, --output <path>', 'Save proposal to directory')
  .option('--json', 'Output as JSON')
  .action(async (options) => {
    const spinner = ora('Analyzing OpenAPI spec...').start();

    try {
      const specPath = resolve(options.spec);
      const spec = parseOpenApiSpec(specPath);
      spinner.text = 'Running analysis...';

      const orchestrator = new Orchestrator();
      const proposal = await orchestrator.analyze(spec);

      spinner.succeed('Analysis complete');

      if (options.json) {
        console.log(JSON.stringify(proposal, null, 2));
      } else {
        console.log('\n' + chalk.cyan('Proposed App Structure:'));
        console.log(chalk.gray('─'.repeat(50)));
        console.log(`${chalk.bold('Name:')} ${proposal.name}`);
        console.log(`${chalk.bold('Description:')} ${proposal.description}`);
        console.log(`${chalk.bold('Version:')} ${proposal.version}`);
        console.log(`${chalk.bold('Auth Type:')} ${proposal.authType}`);
        console.log(`\n${chalk.bold('Resources:')}`);
        for (const resource of proposal.resources) {
          console.log(`  ${chalk.cyan(resource.name)}: ${resource.description}`);
          for (const tool of resource.tools) {
            console.log(`    - ${tool.name} (${tool.httpMethod} ${tool.path})`);
          }
        }
        console.log(`\n${chalk.bold('Widgets:')} ${proposal.widgets.length}`);
        for (const widget of proposal.widgets) {
          console.log(`  - ${widget.name} (${widget.componentType}) -> ${widget.toolName}`);
        }
        if (proposal.excludedEndpoints.length > 0) {
          console.log(`\n${chalk.bold('Excluded Endpoints:')}`);
          for (const ep of proposal.excludedEndpoints) {
            console.log(`  - ${ep.method} ${ep.path}: ${ep.reason}`);
          }
        }
        console.log(chalk.gray('─'.repeat(50)));
      }

      if (options.output) {
        const outputDir = resolve(options.output);
        const proposalPath = await orchestrator.saveProposal(proposal, outputDir);
        console.log(`\nProposal saved to: ${proposalPath}`);
      }
    } catch (error) {
      spinner.fail('Analysis failed');
      console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'));
      process.exit(1);
    }
  });

program
  .command('generate')
  .description('Generate MCP server code from an approved proposal')
  .argument('<appDir>', 'App directory containing proposal.json')
  .option('--force', 'Overwrite existing files')
  .action(async (appDir, options) => {
    const spinner = ora('Loading proposal...').start();

    try {
      const dir = resolve(appDir);
      const orchestrator = new Orchestrator();

      const proposal = await orchestrator.loadProposal(dir);
      spinner.text = 'Generating code...';

      const files = await orchestrator.generate(proposal, dir);
      spinner.succeed('Code generated successfully');

      console.log('\n' + chalk.green(`Generated ${files.length} files:`));
      for (const file of files) {
        console.log(`  - ${file}`);
      }
    } catch (error) {
      spinner.fail('Generation failed');
      console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'));
      process.exit(1);
    }
  });

program
  .command('test')
  .description('Test a generated ChatGPT app')
  .argument('<appDir>', 'App directory to test')
  .option('-v, --verbose', 'Show detailed test output')
  .action(async (appDir, options) => {
    const spinner = ora('Running tests...').start();

    try {
      const dir = resolve(appDir);
      const orchestrator = new Orchestrator();

      const results = await orchestrator.test(dir);
      const summary = TesterAgent.summarize(results);

      if (summary.failed === 0) {
        spinner.succeed(`All tests passed (${summary.total}/${summary.total})`);
      } else {
        spinner.fail(`${summary.failed}/${summary.total} tests failed`);
      }

      if (options.verbose || summary.failed > 0) {
        console.log('\n' + chalk.cyan('Test Results:'));
        for (const result of results) {
          const icon = result.passed ? chalk.green('✓') : chalk.red('✗');
          console.log(`  ${icon} ${result.toolName} (${result.duration}ms)`);
          if (!result.passed && result.error) {
            console.log(chalk.red(`      ${result.error}`));
          }
          if (options.verbose) {
            for (const assertion of result.assertions) {
              const aIcon = assertion.passed ? chalk.green('✓') : chalk.red('✗');
              console.log(`    ${aIcon} ${assertion.name}`);
            }
          }
        }
      }

      if (summary.failed > 0) {
        process.exit(1);
      }
    } catch (error) {
      spinner.fail('Testing failed');
      console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'));
      process.exit(1);
    }
  });

program
  .command('ux')
  .description('Refine app UX with AI-powered feedback loop')
  .argument('<appDir>', 'App directory to refine')
  .option('-t, --tool <name>', 'Specific tool to refine')
  .option('-f, --feedback <text>', 'Natural language feedback')
  .action(async (appDir, options) => {
    try {
      const dir = resolve(appDir);

      let feedback = options.feedback;
      if (!feedback) {
        const answer = await inquirer.prompt([
          {
            type: 'input',
            name: 'feedback',
            message: 'Enter your UX feedback:',
          },
        ]);
        feedback = answer.feedback;
      }

      const spinner = ora('Analyzing feedback...').start();

      const orchestrator = new Orchestrator();
      const result = await orchestrator.refineUX(dir, feedback, options.tool);

      spinner.succeed('Analysis complete');

      console.log('\n' + chalk.cyan('Suggested Changes:'));
      console.log(chalk.gray('─'.repeat(50)));

      for (const change of result.suggestedChanges) {
        const priorityColor =
          change.priority === 'high'
            ? chalk.red
            : change.priority === 'medium'
            ? chalk.yellow
            : chalk.gray;

        console.log(`\n${chalk.bold(change.component)} [${priorityColor(change.priority)}]`);
        console.log(`  Current: ${change.currentBehavior}`);
        console.log(`  Suggested: ${chalk.green(change.suggestedBehavior)}`);
      }
      console.log(chalk.gray('─'.repeat(50)));
    } catch (error) {
      console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'));
      process.exit(1);
    }
  });

program
  .command('serve')
  .description('Start development server for testing')
  .argument('<appDir>', 'App directory to serve')
  .option('-p, --port <number>', 'Port number', '3000')
  .option('--tunnel', 'Create public tunnel for testing')
  .action(async (appDir, options) => {
    console.log(chalk.cyan(`Starting dev server on port ${options.port}...`));
    console.log(chalk.yellow('Note: serve command is not yet fully implemented'));
    console.log(`\nTo test your MCP server manually:`);
    console.log(`  cd ${appDir}`);
    console.log(`  npm install`);
    console.log(`  npm run dev`);
  });

program
  .command('config')
  .description('Manage CLI configuration')
  .option('--set <key=value>', 'Set a config value')
  .option('--get <key>', 'Get a config value')
  .option('--list', 'List all config values')
  .action(async (options) => {
    try {
      if (options.list) {
        const config = loadConfig();
        console.log(chalk.cyan('Configuration:'));
        console.log(`  anthropicApiKey: ${config.anthropicApiKey ? '***' : chalk.gray('(not set)')}`);
        console.log(`  defaultOutputDir: ${config.defaultOutputDir}`);
        console.log(`  modelId: ${config.modelId}`);
      } else if (options.get) {
        const value = getConfigValue(options.get as 'anthropicApiKey' | 'defaultOutputDir' | 'modelId');
        if (options.get.toLowerCase().includes('key')) {
          console.log(value ? '***' : chalk.gray('(not set)'));
        } else {
          console.log(value || chalk.gray('(not set)'));
        }
      } else if (options.set) {
        const [key, ...valueParts] = options.set.split('=');
        const value = valueParts.join('=');
        if (!value) {
          console.error(chalk.red('Usage: config --set KEY=VALUE'));
          process.exit(1);
        }
        setConfigValue(key, value);
        console.log(chalk.green(`✓ Set ${key}`));
      } else {
        console.log('Use --list, --get, or --set');
      }
    } catch (error) {
      console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'));
      process.exit(1);
    }
  });

program.parse();
