/**
 * Recent Results (Feature D) — optional, OFF by default, explicit opt-in.
 *
 * - Separate from the GA4 cookie consent (key `uf-consent`); its own key
 *   `uf-recent-results-opt-in` + data key `uf-recent-results`.
 * - Browser-local storage only. Text summaries only (≤500 chars each,
 *   max 20 items / ~100 KB total). No file bytes, no uploads, no secrets.
 * - Per-item delete + Clear all. Turning it off deletes everything.
 * - Copy in the UI must explain: browser storage can be cleared by the
 *   user/browser and is not a backup.
 *
 * Follows the guarded localStorage idiom in src/utils/consent.ts: every
 * read/write is try/catch-guarded so storage failures can never break
 * the page (private mode, blocked storage, quota exceeded).
 */
import { SITE_CONFIG } from '../../config/site';

export const RECENT_RESULTS_OPT_IN_KEY = 'uf-recent-results-opt-in';
export const RECENT_RESULTS_KEY = 'uf-recent-results';

export const MAX_RECENT_RESULTS = 20;
export const MAX_RECENT_SUMMARY_CHARS = 500;
/** Soft cap so the stored list stays small (~100 KB). */
export const MAX_RECENT_RESULTS_BYTES = 100 * 1024;

export interface RecentResultItem {
  id: string;
  toolId: string;
  toolSlug: string;
  toolName: string;
  /** Short text summary of the result (≤500 chars). Never file bytes. */
  summary: string;
  createdAt: number;
}

/** Reads the opt-in choice, or false if none / invalid / unreadable. */
export function readRecentResultsOptIn(): boolean {
  try {
    return window.localStorage.getItem(RECENT_RESULTS_OPT_IN_KEY) === 'granted';
  } catch {
    return false;
  }
}

/**
 * Sets the opt-in. Turning it OFF deletes every stored recent result —
 * the data only exists while the user explicitly wants it.
 */
export function setRecentResultsOptIn(enabled: boolean): void {
  try {
    window.localStorage.setItem(
      RECENT_RESULTS_OPT_IN_KEY,
      enabled ? 'granted' : 'denied'
    );
  } catch {
    // Storage unavailable — the in-memory state still reflects the choice
    // for this session; nothing is persisted.
  }
  if (!enabled) {
    clearRecentResults();
  }
}

/** Reads the stored list (newest first), or [] when empty/unreadable. */
export function readRecentResults(): RecentResultItem[] {
  try {
    const raw = window.localStorage.getItem(RECENT_RESULTS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is RecentResultItem =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as RecentResultItem).id === 'string' &&
        typeof (item as RecentResultItem).toolName === 'string' &&
        typeof (item as RecentResultItem).summary === 'string'
    );
  } catch {
    return [];
  }
}

function persistRecentResults(items: RecentResultItem[]): void {
  try {
    const json = JSON.stringify(items);
    if (new TextEncoder().encode(json).length > MAX_RECENT_RESULTS_BYTES) {
      // Drop oldest items until under the cap (list is newest-first).
      let trimmed = items;
      while (
        trimmed.length > 1 &&
        new TextEncoder().encode(JSON.stringify(trimmed)).length >
          MAX_RECENT_RESULTS_BYTES
      ) {
        trimmed = trimmed.slice(0, -1);
      }
      window.localStorage.setItem(RECENT_RESULTS_KEY, JSON.stringify(trimmed));
      return;
    }
    window.localStorage.setItem(RECENT_RESULTS_KEY, json);
  } catch {
    // Quota / unavailable storage: keep the page working, drop the write.
  }
}

/**
 * Adds a result summary — only when the user has opted in. Returns the
 * updated list. Summaries are truncated to 500 chars; the list keeps at
 * most 20 items (newest first).
 */
export function addRecentResult(
  item: Omit<RecentResultItem, 'id' | 'createdAt'>
): RecentResultItem[] {
  if (!readRecentResultsOptIn()) return readRecentResults();
  const entry: RecentResultItem = {
    ...item,
    summary: item.summary.slice(0, MAX_RECENT_SUMMARY_CHARS),
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: Date.now(),
  };
  const next = [entry, ...readRecentResults()].slice(0, MAX_RECENT_RESULTS);
  persistRecentResults(next);
  return next;
}

/** Deletes one item by id. Returns the updated list. */
export function deleteRecentResult(id: string): RecentResultItem[] {
  const next = readRecentResults().filter((item) => item.id !== id);
  persistRecentResults(next);
  return next;
}

/** Deletes every stored recent result. */
export function clearRecentResults(): void {
  try {
    window.localStorage.removeItem(RECENT_RESULTS_KEY);
  } catch {
    // Non-fatal.
  }
}

/** Canonical site origin for exported footers / share text. */
export function getSiteOrigin(): string {
  return SITE_CONFIG.defaultOrigin;
}
