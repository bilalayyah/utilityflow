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

export interface WritingRequest {
  text: string;
  task: WritingTask;
  tone: WritingTone;
  language: string;
}

export interface SummarizeRequest {
  text: string;
  length: SummaryLength;
  format: SummaryFormat;
  language?: string;
}

export interface ToolInventoryCandidate {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  categoryName: string;
  keywords: string[];
  ioFormats?: string;
}

export interface FindToolRequest {
  query: string;
  candidates?: ToolInventoryCandidate[];
}

export interface ToolRecommendationItem {
  slug: string;
  name: string;
  reason: string;
}

export interface FindToolAiResult {
  primarySlug: string | null;
  primaryReason: string;
  alternatives: ToolRecommendationItem[];
  noMatchMessage?: string;
}

export interface QuotaStatus {
  limit: number;
  remaining: number;
  resetAtIso: string;
  globalRemaining: number;
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

export interface KVNamespaceLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

export interface WorkerExecutionContextLike {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

export interface WorkerEnv {
  GROQ_API_KEY?: string;
  GROQ_MODEL?: string;
  GROQ_FALLBACK_MODEL?: string;
  ALLOWED_ORIGINS?: string;
  AI_QUOTA_KV?: KVNamespaceLike;
  GLOBAL_DAILY_CAP?: string;
  WRITING_DAILY_LIMIT?: string;
  SUMMARIZE_DAILY_LIMIT?: string;
  FINDER_DAILY_LIMIT?: string;
  RATE_LIMIT_PER_MIN?: string;
}
