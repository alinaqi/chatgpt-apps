import { existsSync, readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { TestResult, TestResultSchema } from '../schemas/index.js';

interface TestAssertion {
  name: string;
  passed: boolean;
  message?: string;
}

/**
 * Agent that tests generated ChatGPT apps
 */
export class TesterAgent {
  /**
   * Run all tests on a generated app
   */
  async test(appDir: string): Promise<TestResult[]> {
    const results: TestResult[] = [];
    const startTime = Date.now();

    // Test 1: Check directory structure
    results.push(await this.testDirectoryStructure(appDir));

    // Test 2: Validate package.json
    results.push(await this.testPackageJson(appDir));

    // Test 3: Validate TypeScript config
    results.push(await this.testTsConfig(appDir));

    // Test 4: Check source files exist
    results.push(await this.testSourceFiles(appDir));

    // Test 5: Validate tools file
    results.push(await this.testToolsFile(appDir));

    // Test 6: Check for syntax errors in generated code
    results.push(await this.testCodeSyntax(appDir));

    return results;
  }

  /**
   * Test that required directories exist
   */
  private async testDirectoryStructure(appDir: string): Promise<TestResult> {
    const assertions: TestAssertion[] = [];
    const startTime = Date.now();

    // Check root directory
    assertions.push({
      name: 'App directory exists',
      passed: existsSync(appDir),
      message: existsSync(appDir) ? undefined : `Directory not found: ${appDir}`,
    });

    // Check src directory
    const srcDir = join(appDir, 'src');
    assertions.push({
      name: 'src directory exists',
      passed: existsSync(srcDir),
      message: existsSync(srcDir) ? undefined : 'src directory not found',
    });

    const passed = assertions.every((a) => a.passed);
    return TestResultSchema.parse({
      toolName: 'directoryStructure',
      passed,
      duration: Date.now() - startTime,
      error: passed ? undefined : 'Directory structure validation failed',
      assertions,
    });
  }

  /**
   * Validate package.json
   */
  private async testPackageJson(appDir: string): Promise<TestResult> {
    const assertions: TestAssertion[] = [];
    const startTime = Date.now();
    const packagePath = join(appDir, 'package.json');

    // Check file exists
    if (!existsSync(packagePath)) {
      return TestResultSchema.parse({
        toolName: 'packageJson',
        passed: false,
        duration: Date.now() - startTime,
        error: 'package.json not found',
        assertions: [{ name: 'package.json exists', passed: false }],
      });
    }

    try {
      const content = readFileSync(packagePath, 'utf-8');
      const pkg = JSON.parse(content);

      assertions.push({
        name: 'package.json is valid JSON',
        passed: true,
      });

      assertions.push({
        name: 'has name field',
        passed: !!pkg.name,
        message: pkg.name ? undefined : 'Missing name field',
      });

      assertions.push({
        name: 'has version field',
        passed: !!pkg.version,
        message: pkg.version ? undefined : 'Missing version field',
      });

      assertions.push({
        name: 'has MCP SDK dependency',
        passed: !!pkg.dependencies?.['@modelcontextprotocol/sdk'],
        message: pkg.dependencies?.['@modelcontextprotocol/sdk']
          ? undefined
          : 'Missing @modelcontextprotocol/sdk dependency',
      });

      assertions.push({
        name: 'has build script',
        passed: !!pkg.scripts?.build,
        message: pkg.scripts?.build ? undefined : 'Missing build script',
      });

      const passed = assertions.every((a) => a.passed);
      return TestResultSchema.parse({
        toolName: 'packageJson',
        passed,
        duration: Date.now() - startTime,
        assertions,
      });
    } catch (error) {
      return TestResultSchema.parse({
        toolName: 'packageJson',
        passed: false,
        duration: Date.now() - startTime,
        error: `Failed to parse package.json: ${error}`,
        assertions: [{ name: 'package.json is valid JSON', passed: false }],
      });
    }
  }

  /**
   * Validate tsconfig.json
   */
  private async testTsConfig(appDir: string): Promise<TestResult> {
    const assertions: TestAssertion[] = [];
    const startTime = Date.now();
    const tsconfigPath = join(appDir, 'tsconfig.json');

    if (!existsSync(tsconfigPath)) {
      return TestResultSchema.parse({
        toolName: 'tsConfig',
        passed: false,
        duration: Date.now() - startTime,
        error: 'tsconfig.json not found',
        assertions: [{ name: 'tsconfig.json exists', passed: false }],
      });
    }

    try {
      const content = readFileSync(tsconfigPath, 'utf-8');
      const tsconfig = JSON.parse(content);

      assertions.push({
        name: 'tsconfig.json is valid JSON',
        passed: true,
      });

      assertions.push({
        name: 'has compilerOptions',
        passed: !!tsconfig.compilerOptions,
      });

      assertions.push({
        name: 'targets ES2022+',
        passed: tsconfig.compilerOptions?.target?.includes('ES202'),
      });

      assertions.push({
        name: 'uses NodeNext module',
        passed: tsconfig.compilerOptions?.module === 'NodeNext',
      });

      const passed = assertions.every((a) => a.passed);
      return TestResultSchema.parse({
        toolName: 'tsConfig',
        passed,
        duration: Date.now() - startTime,
        assertions,
      });
    } catch (error) {
      return TestResultSchema.parse({
        toolName: 'tsConfig',
        passed: false,
        duration: Date.now() - startTime,
        error: `Failed to parse tsconfig.json: ${error}`,
        assertions: [{ name: 'tsconfig.json is valid JSON', passed: false }],
      });
    }
  }

  /**
   * Check that all required source files exist
   */
  private async testSourceFiles(appDir: string): Promise<TestResult> {
    const assertions: TestAssertion[] = [];
    const startTime = Date.now();
    const srcDir = join(appDir, 'src');

    const requiredFiles = ['index.ts', 'tools.ts', 'api-client.ts', 'types.ts'];

    for (const file of requiredFiles) {
      const filePath = join(srcDir, file);
      assertions.push({
        name: `${file} exists`,
        passed: existsSync(filePath),
        message: existsSync(filePath) ? undefined : `Missing file: ${file}`,
      });
    }

    const passed = assertions.every((a) => a.passed);
    return TestResultSchema.parse({
      toolName: 'sourceFiles',
      passed,
      duration: Date.now() - startTime,
      assertions,
    });
  }

  /**
   * Validate tools.ts file
   */
  private async testToolsFile(appDir: string): Promise<TestResult> {
    const assertions: TestAssertion[] = [];
    const startTime = Date.now();
    const toolsPath = join(appDir, 'src', 'tools.ts');

    if (!existsSync(toolsPath)) {
      return TestResultSchema.parse({
        toolName: 'toolsFile',
        passed: false,
        duration: Date.now() - startTime,
        error: 'tools.ts not found',
        assertions: [{ name: 'tools.ts exists', passed: false }],
      });
    }

    const content = readFileSync(toolsPath, 'utf-8');

    assertions.push({
      name: 'exports tools array',
      passed: content.includes('export const tools'),
    });

    assertions.push({
      name: 'exports handleToolCall function',
      passed: content.includes('export async function handleToolCall'),
    });

    assertions.push({
      name: 'imports apiClient',
      passed: content.includes("import { apiClient }"),
    });

    // Check for tool definitions
    const toolMatches = content.match(/name:\s*'[^']+'/g) || [];
    assertions.push({
      name: 'has at least one tool definition',
      passed: toolMatches.length > 0,
      message: toolMatches.length > 0 ? `Found ${toolMatches.length} tools` : 'No tools found',
    });

    const passed = assertions.every((a) => a.passed);
    return TestResultSchema.parse({
      toolName: 'toolsFile',
      passed,
      duration: Date.now() - startTime,
      assertions,
    });
  }

  /**
   * Check for basic syntax errors in generated code
   */
  private async testCodeSyntax(appDir: string): Promise<TestResult> {
    const assertions: TestAssertion[] = [];
    const startTime = Date.now();
    const srcDir = join(appDir, 'src');

    if (!existsSync(srcDir)) {
      return TestResultSchema.parse({
        toolName: 'codeSyntax',
        passed: false,
        duration: Date.now() - startTime,
        error: 'src directory not found',
        assertions: [],
      });
    }

    const files = readdirSync(srcDir).filter((f) => f.endsWith('.ts'));

    for (const file of files) {
      const filePath = join(srcDir, file);
      const content = readFileSync(filePath, 'utf-8');

      // Check for unmatched braces
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      assertions.push({
        name: `${file}: matched braces`,
        passed: openBraces === closeBraces,
        message: openBraces === closeBraces ? undefined : `Unmatched braces: ${openBraces} open, ${closeBraces} close`,
      });

      // Check for unmatched parentheses
      const openParens = (content.match(/\(/g) || []).length;
      const closeParens = (content.match(/\)/g) || []).length;
      assertions.push({
        name: `${file}: matched parentheses`,
        passed: openParens === closeParens,
        message: openParens === closeParens ? undefined : `Unmatched parentheses: ${openParens} open, ${closeParens} close`,
      });

      // Check that file has valid structure (not empty)
      assertions.push({
        name: `${file}: not empty`,
        passed: content.trim().length > 0,
      });
    }

    const passed = assertions.every((a) => a.passed);
    return TestResultSchema.parse({
      toolName: 'codeSyntax',
      passed,
      duration: Date.now() - startTime,
      assertions,
    });
  }

  /**
   * Get a summary of test results
   */
  static summarize(results: TestResult[]): {
    total: number;
    passed: number;
    failed: number;
    duration: number;
  } {
    return {
      total: results.length,
      passed: results.filter((r) => r.passed).length,
      failed: results.filter((r) => !r.passed).length,
      duration: results.reduce((sum, r) => sum + r.duration, 0),
    };
  }
}
