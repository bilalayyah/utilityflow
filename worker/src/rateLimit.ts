import type { ResolvedAiConfig } from './config';
import type { AiEndpoint, KVNamespaceLike, QuotaStatus } from './types';

interface CounterEntry {
  count: number;
  expiresAtMs: number;
}

export interface QuotaStore {
  getCount(key: string): Promise<number>;
  increment(key: string, ttlSeconds: number): Promise<number>;
}

/**
 * Ephemeral in-memory fallback store used during local dev or single-isolate Workers
 * when no KV namespace binding is configured.
 */
export class MemoryQuotaStore implements QuotaStore {
  private readonly store = new Map<string, CounterEntry>();

  private pruneExpired() {
    if (this.store.size < 2000) return;
    const now = Date.now();
    for (const [k, v] of this.store.entries()) {
      if (v.expiresAtMs <= now) this.store.delete(k);
    }
  }

  async getCount(key: string): Promise<number> {
    const entry = this.store.get(key);
    if (!entry) return 0;
    if (entry.expiresAtMs <= Date.now()) {
      this.store.delete(key);
      return 0;
    }
    return entry.count;
  }

  async increment(key: string, ttlSeconds: number): Promise<number> {
    this.pruneExpired();
    const now = Date.now();
    const existing = this.store.get(key);
    if (existing && existing.expiresAtMs > now) {
      existing.count += 1;
      return existing.count;
    }
    const next = { count: 1, expiresAtMs: now + ttlSeconds * 1000 };
    this.store.set(key, next);
    return 1;
  }
}

/**
 * Distributed Cloudflare KV store adapter for persistent daily quota enforcement.
 */
export class CloudflareKvQuotaStore implements QuotaStore {
  constructor(private readonly kv: KVNamespaceLike) {}

  async getCount(key: string): Promise<number> {
    const raw = await this.kv.get(key);
    const parsed = raw ? Number.parseInt(raw, 10) : 0;
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  }

  async increment(key: string, ttlSeconds: number): Promise<number> {
    const current = await this.getCount(key);
    const next = current + 1;
    await this.kv.put(key, String(next), { expirationTtl: Math.max(60, ttlSeconds) });
    return next;
  }
}

export function getUtcDayKeyAndReset(): { dayKey: string; resetAtIso: string; ttlSeconds: number } {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const nextMidnight = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0);
  const ttlSeconds = Math.max(60, Math.ceil((nextMidnight - now.getTime()) / 1000));
  return {
    dayKey: `${year}-${month}-${day}`,
    resetAtIso: new Date(nextMidnight).toISOString(),
    ttlSeconds,
  };
}

/**
 * Hashes client IP with the current UTC date using SHA-256 so raw visitor IPs
 * are never stored in memory or KV.
 */
export async function hashVisitorKey(clientIp: string, dayKey: string): Promise<string> {
  const input = new TextEncoder().encode(`uh-visitor:${dayKey}:${clientIp || 'anonymous'}`);
  const digest = await crypto.subtle.digest('SHA-256', input);
  const bytes = new Uint8Array(digest);
  let hex = '';
  for (let i = 0; i < 16; i += 1) {
    hex += bytes[i].toString(16).padStart(2, '0');
  }
  return hex;
}

export type QuotaCheckOutcome =
  | { allowed: true; status: QuotaStatus; commit: () => Promise<QuotaStatus> }
  | {
      allowed: false;
      reason: 'RATE_LIMITED' | 'DAILY_LIMIT_REACHED' | 'GLOBAL_QUOTA_EXHAUSTED';
      message: string;
      retryAfterSeconds: number;
      status: QuotaStatus;
    };

export async function inspectQuotaStatus(
  store: QuotaStore,
  config: ResolvedAiConfig,
  clientIp: string
): Promise<{
  globalUsed: number;
  globalRemaining: number;
  limits: Record<AiEndpoint, { limit: number; remaining: number }>;
  resetAtIso: string;
}> {
  const { dayKey, resetAtIso } = getUtcDayKeyAndReset();
  const visitorHash = await hashVisitorKey(clientIp, dayKey);
  const [globalUsed, writingUsed, summarizeUsed, finderUsed] = await Promise.all([
    store.getCount(`global:${dayKey}`),
    store.getCount(`daily:${dayKey}:writing:${visitorHash}`),
    store.getCount(`daily:${dayKey}:summarize:${visitorHash}`),
    store.getCount(`daily:${dayKey}:find-tool:${visitorHash}`),
  ]);

  return {
    globalUsed,
    globalRemaining: Math.max(0, config.globalDailyCap - globalUsed),
    limits: {
      writing: {
        limit: config.dailyLimits.writing,
        remaining: Math.max(0, config.dailyLimits.writing - writingUsed),
      },
      summarize: {
        limit: config.dailyLimits.summarize,
        remaining: Math.max(0, config.dailyLimits.summarize - summarizeUsed),
      },
      'find-tool': {
        limit: config.dailyLimits['find-tool'],
        remaining: Math.max(0, config.dailyLimits['find-tool'] - finderUsed),
      },
    },
    resetAtIso,
  };
}

export async function checkAndPrepareQuota(
  store: QuotaStore,
  config: ResolvedAiConfig,
  endpoint: AiEndpoint,
  clientIp: string
): Promise<QuotaCheckOutcome> {
  const { dayKey, resetAtIso, ttlSeconds } = getUtcDayKeyAndReset();
  const visitorHash = await hashVisitorKey(clientIp, dayKey);
  const minuteBucket = Math.floor(Date.now() / 60_000);

  const globalKey = `global:${dayKey}`;
  const dailyKey = `daily:${dayKey}:${endpoint}:${visitorHash}`;
  const minuteKey = `rpm:${minuteBucket}:${visitorHash}`;

  const [globalCount, dailyCount, minuteCount] = await Promise.all([
    store.getCount(globalKey),
    store.getCount(dailyKey),
    store.getCount(minuteKey),
  ]);

  const dailyLimit = config.dailyLimits[endpoint];
  const baseStatus: QuotaStatus = {
    limit: dailyLimit,
    remaining: Math.max(0, dailyLimit - dailyCount),
    resetAtIso,
    globalRemaining: Math.max(0, config.globalDailyCap - globalCount),
  };

  if (globalCount >= config.globalDailyCap) {
    return {
      allowed: false,
      reason: 'GLOBAL_QUOTA_EXHAUSTED',
      message:
        'Free AI capacity for today has been reached across the platform. Please try again after UTC midnight—all 85+ browser utility tools remain available without limits.',
      retryAfterSeconds: ttlSeconds,
      status: baseStatus,
    };
  }

  if (minuteCount >= config.rateLimitPerMinute) {
    return {
      allowed: false,
      reason: 'RATE_LIMITED',
      message: 'Too many requests in a short window. Please wait a moment and try again.',
      retryAfterSeconds: 60,
      status: baseStatus,
    };
  }

  if (dailyCount >= dailyLimit) {
    return {
      allowed: false,
      reason: 'DAILY_LIMIT_REACHED',
      message: `You have reached today's free limit of ${dailyLimit} requests for this AI tool. Your allowance resets at UTC midnight.`,
      retryAfterSeconds: ttlSeconds,
      status: baseStatus,
    };
  }

  return {
    allowed: true,
    status: baseStatus,
    commit: async () => {
      const [nextGlobal, nextDaily] = await Promise.all([
        store.increment(globalKey, ttlSeconds),
        store.increment(dailyKey, ttlSeconds),
        store.increment(minuteKey, 120),
      ]);
      return {
        limit: dailyLimit,
        remaining: Math.max(0, dailyLimit - nextDaily),
        resetAtIso,
        globalRemaining: Math.max(0, config.globalDailyCap - nextGlobal),
      };
    },
  };
}
