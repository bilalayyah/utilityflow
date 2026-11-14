import { isOriginAllowed, resolveConfig } from './config';
import { handleCommentsRequest } from './comments';
import { buildFindToolPrompt, buildSummarizePrompt, buildWritingPrompt } from './prompts';
import {
  generateWithFreeProviders,
  normalizeApiKey,
  ProviderUnavailableError,
  type GroqRunner,
} from './providers';
import {
  CloudflareKvQuotaStore,
  MemoryQuotaStore,
  checkAndPrepareQuota,
  inspectQuotaStatus,
  type QuotaStore,
} from './rateLimit';
import type {
  AiEndpoint,
  AiErrorResponse,
  AiSuccessResponse,
  WorkerEnv,
  WorkerExecutionContextLike,
} from './types';
import {
  RequestValidationError,
  validateFindToolRequest,
  validateSummarizeRequest,
  validateWritingRequest,
} from './validation';

const fallbackMemoryStore = new MemoryQuotaStore();

function securityHeaders(allowOriginHeader: string | null): HeadersInit {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-store',
  };
  if (allowOriginHeader) {
    headers['Access-Control-Allow-Origin'] = allowOriginHeader;
    headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
    headers['Access-Control-Allow-Headers'] = 'Content-Type';
    headers['Access-Control-Max-Age'] = '86400';
    headers['Vary'] = 'Origin';
  }
  return headers;
}

function jsonResponse(
  body: unknown,
  status: number,
  allowOrigin: string | null,
  extraHeaders?: Record<string, string>
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...securityHeaders(allowOrigin),
      ...(extraHeaders || {}),
    },
  });
}

function resolveQuotaStore(env: WorkerEnv): QuotaStore {
  return env.AI_QUOTA_KV ? new CloudflareKvQuotaStore(env.AI_QUOTA_KV) : fallbackMemoryStore;
}

function getClientIp(request: Request): string {
  const cfIp = request.headers.get('CF-Connecting-IP');
  if (cfIp) return cfIp.trim();
  const forwarded = request.headers.get('X-Forwarded-For');
  if (forwarded) return forwarded.split(',')[0].trim();
  return 'anonymous';
}

export async function handleAiWorkerRequest(
  request: Request,
  env: WorkerEnv,
  _ctx?: WorkerExecutionContextLike,
  options?: { groqRunner?: GroqRunner }
): Promise<Response> {
  const config = resolveConfig(env);
  const origin = request.headers.get('Origin');
  const originOk = isOriginAllowed(origin, config.allowedOrigins);
  const allowOriginHeader = originOk ? origin || '*' : null;

  if (!originOk) {
    const errBody: AiErrorResponse = {
      ok: false,
      error: {
        code: 'CORS_FORBIDDEN',
        message: 'Origin is not permitted by this AI backend.',
      },
    };
    return jsonResponse(errBody, 403, null);
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: securityHeaders(allowOriginHeader) });
  }

  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, '');
  const store = resolveQuotaStore(env);
  const clientIp = getClientIp(request);

  // Anonymous comments (GET/POST /api/comments*) — same CORS rules as the AI endpoints.
  const commentsResponse = await handleCommentsRequest(
    request,
    env,
    store,
    clientIp,
    allowOriginHeader
  );
  if (commentsResponse) return commentsResponse;

  if (request.method === 'GET' && path === '/api/ai/health') {
    const quota = await inspectQuotaStatus(store, config, clientIp);
    return jsonResponse(
      {
        ok: true,
        configuredProviders: {
          groq: Boolean(normalizeApiKey(env.GROQ_API_KEY)),
        },
        models: {
          groqPrimary: config.groqPrimaryModel,
          groqFallback: config.groqFallbackModel,
        },
        quota,
      },
      200,
      allowOriginHeader
    );
  }

  let endpoint: AiEndpoint | null = null;
  if (path === '/api/ai/writing') endpoint = 'writing';
  else if (path === '/api/ai/summarize') endpoint = 'summarize';
  else if (path === '/api/ai/find-tool') endpoint = 'find-tool';

  if (!endpoint) {
    return jsonResponse(
      {
        ok: false,
        error: { code: 'BAD_REQUEST', message: 'Unknown AI endpoint.' },
      } satisfies AiErrorResponse,
      404,
      allowOriginHeader
    );
  }

  if (request.method !== 'POST') {
    return jsonResponse(
      {
        ok: false,
        error: { code: 'BAD_REQUEST', message: 'Use POST with a JSON payload.' },
      } satisfies AiErrorResponse,
      405,
      allowOriginHeader
    );
  }

  const contentLength = Number.parseInt(request.headers.get('Content-Length') || '0', 10);
  if (contentLength > config.maxBodyBytes) {
    return jsonResponse(
      {
        ok: false,
        error: {
          code: 'PAYLOAD_TOO_LARGE',
          message: 'Request body exceeds maximum allowed size.',
        },
      } satisfies AiErrorResponse,
      413,
      allowOriginHeader
    );
  }

  let rawText: string;
  try {
    rawText = await request.text();
  } catch {
    return jsonResponse(
      {
        ok: false,
        error: { code: 'BAD_REQUEST', message: 'Unable to read request body.' },
      } satisfies AiErrorResponse,
      400,
      allowOriginHeader
    );
  }

  if (new TextEncoder().encode(rawText).byteLength > config.maxBodyBytes) {
    return jsonResponse(
      {
        ok: false,
        error: {
          code: 'PAYLOAD_TOO_LARGE',
          message: 'Request body exceeds maximum allowed size.',
        },
      } satisfies AiErrorResponse,
      413,
      allowOriginHeader
    );
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(rawText);
  } catch {
    return jsonResponse(
      {
        ok: false,
        error: { code: 'BAD_REQUEST', message: 'Invalid JSON request body.' },
      } satisfies AiErrorResponse,
      400,
      allowOriginHeader
    );
  }

  try {
    const prompt =
      endpoint === 'writing'
        ? buildWritingPrompt(validateWritingRequest(parsedBody, config))
        : endpoint === 'summarize'
        ? buildSummarizePrompt(validateSummarizeRequest(parsedBody, config))
        : buildFindToolPrompt(validateFindToolRequest(parsedBody, config));

    const quotaCheck = await checkAndPrepareQuota(store, config, endpoint, clientIp);
    if (!quotaCheck.allowed) {
      return jsonResponse(
        {
          ok: false,
          error: {
            code: quotaCheck.reason,
            message: quotaCheck.message,
            retryAfterSeconds: quotaCheck.retryAfterSeconds,
            quota: quotaCheck.status,
          },
        } satisfies AiErrorResponse,
        429,
        allowOriginHeader,
        { 'Retry-After': String(quotaCheck.retryAfterSeconds) }
      );
    }

    const result = await generateWithFreeProviders({
      env,
      config,
      prompt,
      groqRunner: options?.groqRunner,
    });
    const updatedQuota = await quotaCheck.commit();

    const successBody: AiSuccessResponse = {
      ok: true,
      data: result.text,
      provider: result.provider,
      model: result.model,
      fallbackUsed: result.fallbackUsed,
      quota: updatedQuota,
    };
    return jsonResponse(successBody, 200, allowOriginHeader);
  } catch (err) {
    if (err instanceof RequestValidationError) {
      return jsonResponse(
        {
          ok: false,
          error: { code: err.code, message: err.message },
        } satisfies AiErrorResponse,
        err.status,
        allowOriginHeader
      );
    }
    if (err instanceof ProviderUnavailableError) {
      return jsonResponse(
        {
          ok: false,
          error: { code: 'SERVICE_UNAVAILABLE', message: err.message },
        } satisfies AiErrorResponse,
        503,
        allowOriginHeader
      );
    }
    return jsonResponse(
      {
        ok: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'An unexpected error occurred while handling the request.',
        },
      } satisfies AiErrorResponse,
      500,
      allowOriginHeader
    );
  }
}

export default {
  fetch: handleAiWorkerRequest,
};
