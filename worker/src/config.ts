import type { AiEndpoint, WorkerEnv } from './types';

export interface ResolvedAiConfig {
  groqPrimaryModel: string;
  groqFallbackModel: string;
  timeoutMs: number;
  maxBodyBytes: number;
  maxChars: Record<AiEndpoint, number>;
  dailyLimits: Record<AiEndpoint, number>;
  globalDailyCap: number;
  rateLimitPerMinute: number;
  allowedOrigins: string[];
}

/**
 * Currently active Groq free-tier text generation models.
 * Primary: 'openai/gpt-oss-20b' (active Groq production open-weight model on free tier).
 * Secondary fallback: 'llama-3.1-8b-instant' (plus runtime model discovery if needed).
 * No paid plan or billing escalation is configured.
 */
export const DEFAULT_GROQ_PRIMARY_MODEL = 'openai/gpt-oss-20b';
export const DEFAULT_GROQ_FALLBACK_MODEL = 'llama-3.1-8b-instant';

export const DEFAULT_TIMEOUT_MS = 20_000;
export const DEFAULT_MAX_BODY_BYTES = 48 * 1024; // 48 KB max JSON envelope

export const DEFAULT_MAX_CHARS: Record<AiEndpoint, number> = {
  writing: 12_000,
  summarize: 25_000,
  'find-tool': 500,
};

export const DEFAULT_DAILY_LIMITS: Record<AiEndpoint, number> = {
  writing: 5,
  summarize: 5,
  'find-tool': 10,
};

export const DEFAULT_GLOBAL_DAILY_CAP = 400;
export const DEFAULT_RATE_LIMIT_PER_MIN = 8;

function parsePositiveInt(raw: string | undefined, fallback: number): number {
  if (!raw) return fallback;
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function resolveConfig(env: WorkerEnv): ResolvedAiConfig {
  const allowedOrigins = (env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim().replace(/\/+$/, ''))
    .filter(Boolean);

  return {
    groqPrimaryModel: (env.GROQ_MODEL || DEFAULT_GROQ_PRIMARY_MODEL).trim(),
    groqFallbackModel: (env.GROQ_FALLBACK_MODEL || DEFAULT_GROQ_FALLBACK_MODEL).trim(),
    timeoutMs: DEFAULT_TIMEOUT_MS,
    maxBodyBytes: DEFAULT_MAX_BODY_BYTES,
    maxChars: DEFAULT_MAX_CHARS,
    dailyLimits: {
      writing: parsePositiveInt(env.WRITING_DAILY_LIMIT, DEFAULT_DAILY_LIMITS.writing),
      summarize: parsePositiveInt(env.SUMMARIZE_DAILY_LIMIT, DEFAULT_DAILY_LIMITS.summarize),
      'find-tool': parsePositiveInt(env.FINDER_DAILY_LIMIT, DEFAULT_DAILY_LIMITS['find-tool']),
    },
    globalDailyCap: parsePositiveInt(env.GLOBAL_DAILY_CAP, DEFAULT_GLOBAL_DAILY_CAP),
    rateLimitPerMinute: parsePositiveInt(env.RATE_LIMIT_PER_MIN, DEFAULT_RATE_LIMIT_PER_MIN),
    allowedOrigins,
  };
}

export function isOriginAllowed(origin: string | null, allowedOrigins: string[]): boolean {
  if (!origin) return true; // Same-origin or non-browser CLI request
  if (allowedOrigins.length === 0) return true; // Optional: allow same-origin & preview hosts when unset
  const normalized = origin.replace(/\/+$/, '');
  return allowedOrigins.some((pattern) => {
    if (pattern === '*') return true;
    if (pattern.startsWith('*.')) {
      const suffix = pattern.slice(1);
      try {
        const host = new URL(normalized).hostname;
        return host.endsWith(suffix) || host === suffix.slice(1);
      } catch {
        return false;
      }
    }
    return normalized === pattern;
  });
}
