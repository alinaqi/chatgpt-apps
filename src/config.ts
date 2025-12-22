import { homedir } from 'os';
import { join } from 'path';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { Config, ConfigSchema } from './schemas/index.js';

const CONFIG_DIR = join(homedir(), '.chatgpt-apps');
const CONFIG_FILE = join(CONFIG_DIR, 'config.json');

function ensureConfigDir(): void {
  if (!existsSync(CONFIG_DIR)) {
    mkdirSync(CONFIG_DIR, { recursive: true });
  }
}

export function loadConfig(): Config {
  ensureConfigDir();

  if (!existsSync(CONFIG_FILE)) {
    return ConfigSchema.parse({});
  }

  try {
    const raw = readFileSync(CONFIG_FILE, 'utf-8');
    return ConfigSchema.parse(JSON.parse(raw));
  } catch {
    return ConfigSchema.parse({});
  }
}

export function saveConfig(config: Partial<Config>): void {
  ensureConfigDir();

  const current = loadConfig();
  const updated = { ...current, ...config };

  writeFileSync(CONFIG_FILE, JSON.stringify(updated, null, 2));
}

export function getConfigValue(key: keyof Config): unknown {
  const config = loadConfig();
  return config[key];
}

export function setConfigValue(key: string, value: string): void {
  const config = loadConfig();

  // Handle common key mappings
  const keyMap: Record<string, keyof Config> = {
    'ANTHROPIC_API_KEY': 'anthropicApiKey',
    'anthropic_api_key': 'anthropicApiKey',
    'anthropicApiKey': 'anthropicApiKey',
    'DEFAULT_OUTPUT_DIR': 'defaultOutputDir',
    'defaultOutputDir': 'defaultOutputDir',
    'MODEL_ID': 'modelId',
    'modelId': 'modelId',
  };

  const mappedKey = keyMap[key];
  if (!mappedKey) {
    throw new Error(`Unknown config key: ${key}`);
  }

  saveConfig({ [mappedKey]: value });
}

export function getAnthropicApiKey(): string {
  // Check environment first
  const envKey = process.env.ANTHROPIC_API_KEY;
  if (envKey) return envKey;

  // Then check config
  const configKey = getConfigValue('anthropicApiKey') as string | undefined;
  if (configKey) return configKey;

  throw new Error(
    'Anthropic API key not found. Set it via:\n' +
    '  chatgpt-apps config --set ANTHROPIC_API_KEY=your-key\n' +
    '  or export ANTHROPIC_API_KEY=your-key'
  );
}
