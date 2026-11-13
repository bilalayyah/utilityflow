import type { ToolInventoryCandidate } from '../../worker/src/types';
import { getCategoryById } from './categories';
import { TOOLS_REGISTRY } from './toolsRegistry';
import type { CategoryId, ToolDefinition } from '../types/tool';

export interface StructuredToolEntry extends ToolInventoryCandidate {
  url: string;
  categoryId: CategoryId;
  requiresExternalApi: boolean;
  popular: boolean;
}

const STOP_WORDS = new Set([
  'a',
  'an',
  'and',
  'are',
  'can',
  'do',
  'for',
  'from',
  'get',
  'how',
  'i',
  'in',
  'into',
  'is',
  'it',
  'me',
  'my',
  'need',
  'of',
  'on',
  'or',
  'please',
  'some',
  'that',
  'the',
  'this',
  'to',
  'tool',
  'use',
  'want',
  'with',
]);

const SYNONYM_MAP: Record<string, string[]> = {
  compress: ['shrink', 'reduce', 'smaller', 'kb', 'size', 'optimize'],
  resize: ['dimension', 'dimensions', 'width', 'height', 'scale', 'crop'],
  convert: ['converter', 'change', 'transform', 'export'],
  image: ['photo', 'picture', 'png', 'jpg', 'jpeg', 'webp'],
  pdf: ['document', 'pages', 'ebook'],
  word: ['words', 'essay', 'count'],
  qr: ['qrcode', 'barcode', 'scan'],
  grammar: ['spelling', 'typo', 'rewrite', 'paraphrase', 'email', 'tone', 'proofread'],
  summarize: ['summary', 'tldr', 'condense', 'shorten', 'bullets', 'takeaways'],
  password: ['passphrase', 'random', 'secret'],
  json: ['payload', 'pretty', 'lint'],
  age: ['birthday', 'born', 'years'],
  loan: ['emi', 'mortgage', 'interest', 'repayment'],
  seo: ['meta', 'opengraph', 'serp', 'robots', 'sitemap', 'schema', 'canonical'],
};

function inferIoFormats(tool: ToolDefinition): string | undefined {
  const haystack = `${tool.slug} ${tool.name} ${tool.keywords.join(' ')}`.toLowerCase();
  if (tool.slug === 'pdf-to-images') return 'Input: PDF · Output: PNG, JPG';
  if (tool.slug === 'images-to-pdf') return 'Input: PNG, JPG, WebP · Output: PDF';
  if (tool.slug === 'pdf-text-extractor') return 'Input: PDF · Output: Plain Text (.txt)';
  if (tool.categoryId === 'pdf') return 'Input: PDF · Output: PDF';
  if (haystack.includes('png') || haystack.includes('webp') || tool.slug.startsWith('image-')) {
    return 'PNG, JPG, WebP';
  }
  if (tool.slug === 'json-csv-converter') return 'JSON <-> CSV';
  if (tool.slug.includes('json')) return 'JSON';
  if (tool.slug.includes('markdown')) return 'Markdown -> HTML Preview';
  if (tool.slug.includes('base64')) return 'Text / Bytes <-> Base64';
  if (tool.slug === 'qr-code-generator') return 'Text / URL -> PNG, SVG QR';
  if (tool.slug === 'qr-code-scanner') return 'QR Image / Camera -> Text, URL';
  if (tool.slug.includes('color') || tool.slug === 'image-color-picker') {
    return 'HEX, RGB, HSL, CMYK';
  }
  if (tool.slug === 'ai-writing-assistant') return 'Text -> Edited Text / TXT';
  if (tool.slug === 'ai-text-summarizer') return 'Long Text -> Summary / TXT';
  return undefined;
}

/**
 * Dynamically builds the verified tool inventory from TOOLS_REGISTRY.
 * Excludes 'ai-tool-finder' itself so search results recommend actionable utility tools
 * across all 85 browser utilities + 2 AI writing/summarization tools (87 tools).
 */
export function buildStructuredToolInventory(): StructuredToolEntry[] {
  return TOOLS_REGISTRY.filter((tool) => tool.slug !== 'ai-tool-finder').map((tool) => {
    const category = getCategoryById(tool.categoryId);
    return {
      id: tool.id,
      slug: tool.slug,
      name: tool.name,
      shortDescription: tool.shortDescription,
      categoryName: category ? category.name : 'Utility',
      categoryId: tool.categoryId,
      url: `/${tool.slug}/`,
      keywords: Array.from(new Set([tool.seo.primaryKeyword, ...tool.keywords])),
      ioFormats: inferIoFormats(tool),
      requiresExternalApi: tool.requiresExternalApi,
      popular: Boolean(tool.popular),
    };
  });
}

function editDistanceWithinOneOrTwo(a: string, b: string): number {
  const maxDist = a.length >= 6 && b.length >= 6 ? 2 : 1;
  if (Math.abs(a.length - b.length) > maxDist) return 99;
  const dp: number[] = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    let prev = i - 1;
    dp[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const temp = dp[j];
      if (a[i - 1] === b[j - 1]) {
        dp[j] = prev;
      } else {
        dp[j] = 1 + Math.min(prev, dp[j], dp[j - 1]);
      }
      prev = temp;
    }
  }
  return dp[b.length];
}

function expandQueryTokens(query: string): string[] {
  const rawTokens = query
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length >= 2 && !STOP_WORDS.has(t));

  const expanded = new Set<string>(rawTokens);
  for (const token of rawTokens) {
    for (const [root, syns] of Object.entries(SYNONYM_MAP)) {
      if (token === root || syns.includes(token)) {
        expanded.add(root);
        syns.forEach((s) => expanded.add(s));
      }
    }
  }
  return Array.from(expanded);
}

export interface LocalRankedTool {
  entry: StructuredToolEntry;
  score: number;
  matchedTerms: string[];
}

/**
 * Fast, deterministic, typo-tolerant keyword scorer over the verified tool inventory.
 */
export function rankToolsLocally(
  query: string,
  inventory: StructuredToolEntry[],
  categoryFilter: CategoryId | 'all' = 'all'
): LocalRankedTool[] {
  const trimmed = query.trim().toLowerCase();
  const pool =
    categoryFilter === 'all'
      ? inventory
      : inventory.filter((item) => item.categoryId === categoryFilter);

  if (!trimmed) {
    return pool.slice(0, 12).map((entry) => ({
      entry,
      score: entry.popular ? 10 : 1,
      matchedTerms: [],
    }));
  }

  const queryTokens = expandQueryTokens(trimmed);
  const rawWords = trimmed
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length >= 2 && !STOP_WORDS.has(t));

  const scored: LocalRankedTool[] = [];

  for (const entry of pool) {
    const nameLower = entry.name.toLowerCase();
    const descLower = entry.shortDescription.toLowerCase();
    const slugLower = entry.slug.toLowerCase();
    const keywordsLower = entry.keywords.map((k) => k.toLowerCase());
    const fullText = `${nameLower} ${slugLower.replace(/-/g, ' ')} ${descLower} ${keywordsLower.join(' ')} ${
      entry.ioFormats || ''
    }`.toLowerCase();
    const vocabWords = Array.from(new Set(fullText.split(/[^a-z0-9]+/).filter((w) => w.length >= 3)));

    let score = 0;
    const matched = new Set<string>();

    // Exact phrase matches in name / slug / keywords
    if (nameLower.includes(trimmed)) {
      score += 45;
      matched.add(entry.name);
    }
    if (slugLower.replace(/-/g, ' ').includes(trimmed)) {
      score += 35;
    }

    for (const token of queryTokens) {
      if (nameLower.includes(token)) {
        score += 14;
        matched.add(token);
      } else if (keywordsLower.some((k) => k.includes(token))) {
        score += 10;
        matched.add(token);
      } else if (descLower.includes(token) || (entry.ioFormats || '').toLowerCase().includes(token)) {
        score += 6;
        matched.add(token);
      }
    }

    // Typo tolerance against original user tokens (length >= 4)
    for (const raw of rawWords) {
      if (raw.length < 4 || fullText.includes(raw)) continue;
      for (const vocab of vocabWords) {
        if (Math.abs(vocab.length - raw.length) > 2) continue;
        const dist = editDistanceWithinOneOrTwo(raw, vocab);
        if (dist <= (raw.length >= 6 ? 2 : 1)) {
          score += 7;
          matched.add(vocab);
          break;
        }
      }
    }

    if (score > 0) {
      if (entry.popular) score += 1;
      scored.push({
        entry,
        score,
        matchedTerms: Array.from(matched).slice(0, 4),
      });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored;
}

/**
 * Selects up to 25 top candidate tools to send to /api/ai/find-tool (padded with diverse
 * popular tools if a narrow query yields fewer than 12 local hits so AI sees broad context).
 */
export function buildAiCandidateSlice(
  query: string,
  inventory: StructuredToolEntry[],
  categoryFilter: CategoryId | 'all' = 'all'
): ToolInventoryCandidate[] {
  const localHits = rankToolsLocally(query, inventory, categoryFilter);
  const picked = new Map<string, StructuredToolEntry>();

  for (const hit of localHits.slice(0, 18)) {
    picked.set(hit.entry.slug, hit.entry);
  }

  if (picked.size < 25) {
    const pool =
      categoryFilter === 'all'
        ? inventory
        : inventory.filter((item) => item.categoryId === categoryFilter);
    for (const item of pool) {
      if (picked.size >= 25) break;
      if (item.popular && !picked.has(item.slug)) {
        picked.set(item.slug, item);
      }
    }
    for (const item of pool) {
      if (picked.size >= 25) break;
      if (!picked.has(item.slug)) {
        picked.set(item.slug, item);
      }
    }
  }

  return Array.from(picked.values())
    .slice(0, 25)
    .map(({ id, slug, name, shortDescription, categoryName, keywords, ioFormats }) => ({
      id,
      slug,
      name,
      shortDescription,
      categoryName,
      keywords: keywords.slice(0, 8),
      ioFormats,
    }));
}
