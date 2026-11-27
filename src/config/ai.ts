/**
 * Client-side AI endpoint configuration & typed HTTP wrapper.
 * Zero secrets or AI SDK imports exist in client code — all AI requests are proxied
 * either same-origin (`/api/ai/*` via server.ts or Cloudflare domain route) or to a
 * configured Cloudflare Worker URL via `VITE_AI_API_URL`.
 */

export type AiEndpoint = 'writing' | 'summarize' | 'find-tool';
export type AiProviderId = 'groq';

export type WritingTask =
  | 'fix-grammar'
  | 'rewrite-text'
  | 'improve-writing'
  | 'make-professional'
  | 'make-casual'
  | 'simplify-text'
  | 'expand-text'
  | 'paraphrase'
  | 'fix-spelling'
  | 'write-email';

export type WritingTone =
  | 'professional'
  | 'friendly'
  | 'formal'
  | 'casual'
  | 'academic'
  | 'persuasive'
  | 'simple';

export type SummaryLength = 'short' | 'medium' | 'detailed';
export type SummaryFormat = 'paragraph' | 'bullets' | 'key-points' | 'simple';

export interface WritingRequestPayload {
  text: string;
  task: WritingTask;
  tone: WritingTone;
  language: string;
}

export interface SummarizeRequestPayload {
  text: string;
  length: SummaryLength;
  format: SummaryFormat;
  language?: string;
}

export interface QuotaStatus {
  limit: number;
  remaining: number;
  resetAtIso: string;
  globalRemaining: number;
}

export interface AiHealthResponse {
  ok: true;
  configuredProviders: {
    groq: boolean;
  };
  models: {
    groqPrimary: string;
    groqFallback: string;
  };
  quota: {
    globalUsed: number;
    globalRemaining: number;
    limits: Record<AiEndpoint, { limit: number; remaining: number }>;
    resetAtIso: string;
  };
}

export interface AiSuccessResponse<T = string> {
  ok: true;
  data: T;
  provider: AiProviderId;
  model: string;
  fallbackUsed: boolean;
  quota: QuotaStatus;
}

export interface AiErrorResponse {
  ok: false;
  error: {
    code:
      | 'BAD_REQUEST'
      | 'PAYLOAD_TOO_LARGE'
      | 'RATE_LIMITED'
      | 'DAILY_LIMIT_REACHED'
      | 'GLOBAL_QUOTA_EXHAUSTED'
      | 'CORS_FORBIDDEN'
      | 'SERVICE_UNAVAILABLE'
      | 'INTERNAL_ERROR';
    message: string;
    retryAfterSeconds?: number;
    quota?: QuotaStatus;
  };
}

export function getAiApiBaseUrl(): string {
  const configured = import.meta.env.VITE_AI_API_URL;
  if (!configured) return '';
  const trimmed = String(configured).trim().replace(/\/+$/, '');
  return trimmed === '/' ? '' : trimmed;
}

export function getAiEndpointUrl(path: `/api/ai/${string}`): string {
  const base = getAiApiBaseUrl();
  return `${base}${path}`;
}

export async function fetchAiHealth(signal?: AbortSignal): Promise<AiHealthResponse | null> {
  try {
    const res = await fetch(getAiEndpointUrl('/api/ai/health'), {
      method: 'GET',
      signal,
    });
    if (!res.ok) return null;
    const json = (await res.json()) as AiHealthResponse;
    return json?.ok ? json : null;
  } catch {
    return null;
  }
}

export async function postAiJson<TRequest, TResponseData = string>(
  endpoint: AiEndpoint,
  payload: TRequest,
  signal?: AbortSignal
): Promise<AiSuccessResponse<TResponseData> | AiErrorResponse> {
  try {
    const res = await fetch(getAiEndpointUrl(`/api/ai/${endpoint}`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal,
    });

    const data = (await res.json()) as AiSuccessResponse<TResponseData> | AiErrorResponse;
    if (data && typeof data === 'object' && 'ok' in data) {
      return data;
    }

    return {
      ok: false,
      error: {
        code: 'SERVICE_UNAVAILABLE',
        message: 'Unexpected response from the AI service. Please try again shortly.',
      },
    };
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw err;
    }
    return {
      ok: false,
      error: {
        code: 'SERVICE_UNAVAILABLE',
        message: 'Unable to reach the free AI backend right now. All 85+ browser tools still work offline.',
      },
    };
  }
}
