import type { ResolvedAiConfig } from './config';
import type { BuiltPrompt } from './prompts';
import type { AiProviderId, WorkerEnv } from './types';

export interface ProviderGenerationResult {
  text: string;
  provider: AiProviderId;
  model: string;
  fallbackUsed: boolean;
}

export class ProviderUnavailableError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class GroqHttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code?: string
  ) {
    super(message);
  }
}

export type GroqRunner = (args: {
  apiKey: string;
  model: string;
  prompt: BuiltPrompt;
  timeoutMs: number;
}) => Promise<string>;

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs: number
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Calls Groq Chat Completions API using the configured free-tier API key.
 * For open-weight reasoning models (openai/gpt-oss-*), sets low reasoning effort
 * and disables reasoning output in the payload so responses stay concise and fast.
 */
export const callGroqRest: GroqRunner = async ({ apiKey, model, prompt, timeoutMs }) => {
  const isGptOss = model.startsWith('openai/gpt-oss');

  const body: Record<string, unknown> = {
    model,
    messages: [
      { role: 'system', content: prompt.systemInstruction },
      { role: 'user', content: prompt.userPrompt },
    ],
    temperature: 0.3,
    max_completion_tokens: 2048,
    ...(isGptOss ? { reasoning_effort: 'low', include_reasoning: false } : {}),
    ...(prompt.expectJson ? { response_format: { type: 'json_object' } } : {}),
  };

  const response = await fetchWithTimeout(
    'https://api.groq.com/openai/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    },
    timeoutMs
  );

  if (!response.ok) {
    let errorCode: string | undefined;
    let errorDetail = `Groq HTTP ${response.status}`;
    try {
      const errJson = (await response.json()) as {
        error?: { code?: string; message?: string; type?: string };
      };
      errorCode = errJson.error?.code || errJson.error?.type;
      if (errJson.error?.message) {
        errorDetail = `${errorDetail}: ${errJson.error.message.slice(0, 140)}`;
      }
    } catch {
      // Ignore non-JSON error payloads
    }
    throw new GroqHttpError(errorDetail, response.status, errorCode);
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string | null } }>;
  };

  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) {
    throw new GroqHttpError('Groq returned an empty response', 502, 'empty_response');
  }
  return text;
};

const PREFERRED_CHAT_PREFIXES = [
  'openai/gpt-oss-20b',
  'openai/gpt-oss-120b',
  'llama-3.1-8b-instant',
  'meta-llama/llama-4-scout-17b-16e-instruct',
  'qwen/',
  'llama-',
];

function isNonChatModel(modelId: string): boolean {
  const lower = modelId.toLowerCase();
  return (
    lower.includes('whisper') ||
    lower.includes('tts') ||
    lower.includes('orpheus') ||
    lower.includes('guard') ||
    lower.includes('safeguard') ||
    lower.includes('compound')
  );
}

/**
 * Discovers live chat-completion models available on the configured Groq account
 * when primary/fallback IDs return a model-not-found or decommissioned error.
 */
async function discoverLiveGroqModels(apiKey: string, timeoutMs: number): Promise<string[]> {
  try {
    const res = await fetchWithTimeout(
      'https://api.groq.com/openai/v1/models',
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${apiKey}` },
      },
      Math.min(timeoutMs, 8000)
    );
    if (!res.ok) return [];

    const json = (await res.json()) as {
      data?: Array<{ id?: string; active?: boolean }>;
    };

    const candidates = (json.data || [])
      .filter((item) => item.id && item.active !== false && !isNonChatModel(item.id))
      .map((item) => item.id as string);

    candidates.sort((a, b) => {
      const rank = (id: string) => {
        const idx = PREFERRED_CHAT_PREFIXES.findIndex((prefix) => id.startsWith(prefix));
        return idx === -1 ? 999 : idx;
      };
      return rank(a) - rank(b);
    });

    return candidates;
  } catch {
    return [];
  }
}

function isModelUnavailableError(err: unknown): boolean {
  if (!(err instanceof GroqHttpError)) return false;
  if (err.status === 404) return true;
  const code = (err.code || '').toLowerCase();
  const msg = err.message.toLowerCase();
  return (
    code.includes('model_not_found') ||
    code.includes('model_decommissioned') ||
    msg.includes('decommissioned') ||
    msg.includes('does not exist') ||
    msg.includes('not found')
  );
}

export function normalizeApiKey(raw: string | undefined): string {
  if (!raw) return '';
  let trimmed = raw.trim();
  if (
    trimmed.length >= 2 &&
    ((trimmed.startsWith('"') && trimmed.endsWith('"')) ||
      (trimmed.startsWith("'") && trimmed.endsWith("'")))
  ) {
    trimmed = trimmed.slice(1, -1).trim();
  }
  if (trimmed.toLowerCase().startsWith('bearer ')) {
    trimmed = trimmed.slice(7).trim();
  }
  return trimmed;
}

/**
 * Executes text generation using Groq as the primary and only AI provider.
 * Tries the primary free-tier Groq model, falls back to the secondary Groq model,
 * and dynamically resolves live account models if a model ID is retired.
 */
export async function generateWithFreeProviders({
  env,
  config,
  prompt,
  groqRunner = callGroqRest,
}: {
  env: WorkerEnv;
  config: ResolvedAiConfig;
  prompt: BuiltPrompt;
  groqRunner?: GroqRunner;
}): Promise<ProviderGenerationResult> {
  const groqKey = normalizeApiKey(env.GROQ_API_KEY);

  if (!groqKey) {
    throw new ProviderUnavailableError(
      'GROQ_API_KEY is not configured yet on this server environment.'
    );
  }

  const candidateModels = Array.from(
    new Set(
      [
        config.groqPrimaryModel,
        config.groqFallbackModel,
        'openai/gpt-oss-120b',
        'llama-3.1-8b-instant',
      ].filter(Boolean)
    )
  );

  const tried = new Set<string>();
  const errors: string[] = [];
  let sawModelNotFound = false;

  for (let i = 0; i < candidateModels.length; i += 1) {
    const model = candidateModels[i];
    tried.add(model);
    try {
      const text = await groqRunner({
        apiKey: groqKey,
        model,
        prompt,
        timeoutMs: config.timeoutMs,
      });
      return {
        text,
        provider: 'groq',
        model,
        fallbackUsed: i > 0,
      };
    } catch (err) {
      if (err instanceof GroqHttpError && err.status === 401) {
        throw new ProviderUnavailableError(
          'Groq rejected the configured GROQ_API_KEY (HTTP 401 Invalid API Key). Verify the key in your environment variables is active and applied without extra quotes.'
        );
      }
      if (isModelUnavailableError(err)) {
        sawModelNotFound = true;
      }
      errors.push(err instanceof Error ? err.message : 'Groq request failed');
    }
  }

  // If using live Groq REST and configured IDs were retired/unavailable, query /openai/v1/models once
  if (sawModelNotFound && groqRunner === callGroqRest) {
    const discovered = await discoverLiveGroqModels(groqKey, config.timeoutMs);
    for (const model of discovered.slice(0, 2)) {
      if (tried.has(model)) continue;
      tried.add(model);
      try {
        const text = await groqRunner({
          apiKey: groqKey,
          model,
          prompt,
          timeoutMs: config.timeoutMs,
        });
        return {
          text,
          provider: 'groq',
          model,
          fallbackUsed: true,
        };
      } catch (err) {
        errors.push(err instanceof Error ? err.message : 'Groq fallback failed');
      }
    }
  }

  throw new ProviderUnavailableError(
    `AI service is temporarily busy or unavailable right now (${errors[0] || 'retry shortly'}). Please try again in a moment.`
  );
}
