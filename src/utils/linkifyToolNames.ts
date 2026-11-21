/**
 * M-5: contextual internal links in guide content.
 *
 * ONE shared linkifier used by both render paths:
 * - React: src/components/tool/ToolPageLayout.tsx (guide prose + FAQ answers)
 * - Static prerender: scripts/prerender-body.ts (same links in dist HTML,
 *   so non-JS crawlers see them too)
 *
 * Rules (do not change without updating both call sites + the harness):
 * - Match ONLY against the known tool-name map (built from the registry via
 *   buildToolNameEntries — localized display name -> localized tool URL).
 * - Longest-match-first, so "Word Frequency Counter" wins over
 *   "Word Counter" when both start at the same position.
 * - Case-sensitive on the exact display name.
 * - At most once per tool per string (and a display name links at most
 *   once per string) — no link-stuffing.
 * - Never link a tool to itself (excludeToolId = the current page's tool).
 * - The input is plain text: the full text is HTML-escaped FIRST and only
 *   the generated <a> tags are inserted. Never pass raw HTML through.
 * - Word boundaries: a name edge needs a boundary only when the edge char
 *   is an ASCII letter/digit (spaced scripts). That stops "Word Counter"
 *   linking inside "Word Counters" or a German genitive ("Zeichenzählers"),
 *   while CJK names — whose text has no spaces — still match as substrings.
 *
 * JSON-LD MUST stay plain text: the FAQPage/HowTo schema builders keep
 * using the raw strings — never feed them linkified output.
 *
 * This module is deliberately dependency-light (toolHref only) so it stays
 * out of the detail payload: it must NOT import detail modules or locale
 * data. Callers build the entry map from already-loaded data
 * (getLocalizedTools) and pass it in.
 */

import { toolHref } from '../locales/config';
import type { LocaleCode } from '../locales/config';
import type { ToolDefinition } from '../types/tool';

/**
 * Inline-link style for guide-prose links. Matches the class the privacy
 * page, RelatedTools and the prerenderer's LINK constant already use for
 * links inside prose — no new visual style is invented here.
 */
export const GUIDE_LINK_CLASS = 'font-semibold text-[#0B7A59] hover:underline dark:text-[#34D399]';

export interface ToolNameEntry {
  toolId: string;
  name: string;
  href: string;
}

/**
 * Build the tool-name -> path map for one locale from the (already
 * localized) tool records. Duplicate display names keep the first record
 * (registry order); empty names are skipped.
 */
export function buildToolNameEntries(
  tools: Array<Pick<ToolDefinition, 'id' | 'name' | 'slug'>>,
  locale: LocaleCode
): ToolNameEntry[] {
  const seen = new Set<string>();
  const entries: ToolNameEntry[] = [];
  for (const tool of tools) {
    const name = tool.name.trim();
    if (!name || seen.has(name)) continue;
    seen.add(name);
    entries.push({ toolId: tool.id, name, href: toolHref(tool.slug, locale) });
  }
  return entries;
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(value: string): string {
  return escapeHtml(value).replace(/"/g, '&quot;');
}

function isWordChar(ch: string | undefined): boolean {
  return ch !== undefined && /[\p{L}\p{N}_]/u.test(ch);
}

/** True when the name-edge char is written in a spaced script (ASCII letter/digit). */
function needsBoundary(ch: string): boolean {
  return /[A-Za-z0-9]/.test(ch);
}

export interface LinkifyOptions {
  /** Tool id of the current page — its own name is never linked. */
  excludeToolId?: string;
  /** Link class; defaults to GUIDE_LINK_CLASS. */
  linkClass?: string;
}

/**
 * Wrap known tool names in a plain-text string with <a> tags and return
 * HTML. Everything else is HTML-escaped; the only unescaped markup in the
 * output is the generated <a> elements themselves.
 */
export function linkifyToolNames(
  text: string,
  entries: ToolNameEntry[],
  options: LinkifyOptions = {}
): string {
  if (!text) return '';
  const linkClass = options.linkClass ?? GUIDE_LINK_CLASS;
  // Longest first (stable) so the longest name wins at any position.
  const sorted = [...entries].sort((a, b) => b.name.length - a.name.length);
  // First-char buckets keep the scan cheap: at each position only the
  // entries that could start there are tried (still longest-first).
  const byFirstChar = new Map<string, ToolNameEntry[]>();
  for (const entry of sorted) {
    if (options.excludeToolId && entry.toolId === options.excludeToolId) continue;
    const bucket = byFirstChar.get(entry.name[0]);
    if (bucket) bucket.push(entry);
    else byFirstChar.set(entry.name[0], [entry]);
  }
  const usedToolIds = new Set<string>();
  const usedNames = new Set<string>();
  const out: string[] = [];
  let pending = '';
  const flush = () => {
    if (pending) {
      out.push(escapeHtml(pending));
      pending = '';
    }
  };
  let i = 0;
  while (i < text.length) {
    const candidates = byFirstChar.get(text[i]);
    let match: ToolNameEntry | undefined;
    if (candidates) {
      for (const entry of candidates) {
        if (usedToolIds.has(entry.toolId) || usedNames.has(entry.name)) continue;
        const name = entry.name;
        if (!text.startsWith(name, i)) continue;
        const end = i + name.length;
        if (needsBoundary(name[0]) && isWordChar(text[i - 1])) continue;
        if (needsBoundary(name[name.length - 1]) && isWordChar(text[end])) continue;
        match = entry;
        break;
      }
    }
    if (match) {
      flush();
      out.push(
        `<a href="${escapeAttr(match.href)}" class="${escapeAttr(linkClass)}">${escapeHtml(match.name)}</a>`
      );
      usedToolIds.add(match.toolId);
      usedNames.add(match.name);
      i += match.name.length;
    } else {
      pending += text[i];
      i += 1;
    }
  }
  flush();
  return out.join('');
}
