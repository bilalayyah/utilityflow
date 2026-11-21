import type { LocaleCode } from './config';
import type { ToolDetail } from '../types/tool';

/**
 * Per-batch tool detail loader (H-3 page-weight split).
 *
 * The light record (ToolDefinition / ToolLocaleOverride without the
 * guide fields) ships in the entry + locale chunks on EVERY page. The
 * guide fields (instructions, examples, benefits, useCases, faqs) live
 * in one detail module per locale per batch and load only on the tool's
 * own page, after first paint (ToolPageLayout), or in bulk at prerender
 * time (scripts/prerender-meta.ts). Detail modules are explicit dynamic
 * imports — one Vite chunk each — never statically imported, so they
 * stay out of the initial bundle.
 */

export type DetailKey = 'batch1' | 'batch2' | 'batch3' | 'batch4' | 'batch5' | 'batch6' | 'batch7';

const BATCH_KEYS: DetailKey[] = ['batch1', 'batch2', 'batch3', 'batch4', 'batch5', 'batch6', 'batch7'];

/** Detail module for a tool: each tool's detail lives in its EN batch module. */
export function detailKeyForTool(toolId: string, batch: number): DetailKey {
  return `batch${batch}` as DetailKey;
}

type DetailModule = { TOOL_DETAILS: Record<string, ToolDetail> };
type DetailLoader = () => Promise<DetailModule>;

const DETAIL_LOADERS: Record<LocaleCode, Record<DetailKey, DetailLoader>> = {
  en: {
    batch1: () => import('../registry/details/batch1'),
    batch2: () => import('../registry/details/batch2'),
    batch3: () => import('../registry/details/batch3'),
    batch4: () => import('../registry/details/batch4'),
    batch5: () => import('../registry/details/batch5'),
    batch6: () => import('../registry/details/batch6'),
    batch7: () => import('../registry/details/batch7'),
  },
  es: {
    batch1: () => import('./es/details/batch1'),
    batch2: () => import('./es/details/batch2'),
    batch3: () => import('./es/details/batch3'),
    batch4: () => import('./es/details/batch4'),
    batch5: () => import('./es/details/batch5'),
    batch6: () => import('./es/details/batch6'),
    batch7: () => import('./es/details/batch7'),
  },
  pt: {
    batch1: () => import('./pt/details/batch1'),
    batch2: () => import('./pt/details/batch2'),
    batch3: () => import('./pt/details/batch3'),
    batch4: () => import('./pt/details/batch4'),
    batch5: () => import('./pt/details/batch5'),
    batch6: () => import('./pt/details/batch6'),
    batch7: () => import('./pt/details/batch7'),
  },
  fr: {
    batch1: () => import('./fr/details/batch1'),
    batch2: () => import('./fr/details/batch2'),
    batch3: () => import('./fr/details/batch3'),
    batch4: () => import('./fr/details/batch4'),
    batch5: () => import('./fr/details/batch5'),
    batch6: () => import('./fr/details/batch6'),
    batch7: () => import('./fr/details/batch7'),
  },
  de: {
    batch1: () => import('./de/details/batch1'),
    batch2: () => import('./de/details/batch2'),
    batch3: () => import('./de/details/batch3'),
    batch4: () => import('./de/details/batch4'),
    batch5: () => import('./de/details/batch5'),
    batch6: () => import('./de/details/batch6'),
    batch7: () => import('./de/details/batch7'),
  },
  it: {
    batch1: () => import('./it/details/batch1'),
    batch2: () => import('./it/details/batch2'),
    batch3: () => import('./it/details/batch3'),
    batch4: () => import('./it/details/batch4'),
    batch5: () => import('./it/details/batch5'),
    batch6: () => import('./it/details/batch6'),
    batch7: () => import('./it/details/batch7'),
  },
  id: {
    batch1: () => import('./id/details/batch1'),
    batch2: () => import('./id/details/batch2'),
    batch3: () => import('./id/details/batch3'),
    batch4: () => import('./id/details/batch4'),
    batch5: () => import('./id/details/batch5'),
    batch6: () => import('./id/details/batch6'),
    batch7: () => import('./id/details/batch7'),
  },
  ru: {
    batch1: () => import('./ru/details/batch1'),
    batch2: () => import('./ru/details/batch2'),
    batch3: () => import('./ru/details/batch3'),
    batch4: () => import('./ru/details/batch4'),
    batch5: () => import('./ru/details/batch5'),
    batch6: () => import('./ru/details/batch6'),
    batch7: () => import('./ru/details/batch7'),
  },
  ja: {
    batch1: () => import('./ja/details/batch1'),
    batch2: () => import('./ja/details/batch2'),
    batch3: () => import('./ja/details/batch3'),
    batch4: () => import('./ja/details/batch4'),
    batch5: () => import('./ja/details/batch5'),
    batch6: () => import('./ja/details/batch6'),
    batch7: () => import('./ja/details/batch7'),
  },
  ko: {
    batch1: () => import('./ko/details/batch1'),
    batch2: () => import('./ko/details/batch2'),
    batch3: () => import('./ko/details/batch3'),
    batch4: () => import('./ko/details/batch4'),
    batch5: () => import('./ko/details/batch5'),
    batch6: () => import('./ko/details/batch6'),
    batch7: () => import('./ko/details/batch7'),
  },
  zh: {
    batch1: () => import('./zh/details/batch1'),
    batch2: () => import('./zh/details/batch2'),
    batch3: () => import('./zh/details/batch3'),
    batch4: () => import('./zh/details/batch4'),
    batch5: () => import('./zh/details/batch5'),
    batch6: () => import('./zh/details/batch6'),
    batch7: () => import('./zh/details/batch7'),
  },
  hi: {
    batch1: () => import('./hi/details/batch1'),
    batch2: () => import('./hi/details/batch2'),
    batch3: () => import('./hi/details/batch3'),
    batch4: () => import('./hi/details/batch4'),
    batch5: () => import('./hi/details/batch5'),
    batch6: () => import('./hi/details/batch6'),
    batch7: () => import('./hi/details/batch7'),
  },
  tr: {
    batch1: () => import('./tr/details/batch1'),
    batch2: () => import('./tr/details/batch2'),
    batch3: () => import('./tr/details/batch3'),
    batch4: () => import('./tr/details/batch4'),
    batch5: () => import('./tr/details/batch5'),
    batch6: () => import('./tr/details/batch6'),
    batch7: () => import('./tr/details/batch7'),
  },
};

const moduleCache = new Map<string, Promise<Record<string, ToolDetail>>>();

function loadDetailModule(locale: LocaleCode, key: DetailKey): Promise<Record<string, ToolDetail>> {
  const cacheKey = `${locale}:${key}`;
  const cached = moduleCache.get(cacheKey);
  if (cached) return cached;
  const loaded = DETAIL_LOADERS[locale][key]().then((mod) => mod.TOOL_DETAILS);
  moduleCache.set(cacheKey, loaded);
  return loaded;
}

/** Detail for one tool (null when the locale has no detail for it). */
export async function loadToolDetail(
  locale: LocaleCode,
  toolId: string,
  batch: number
): Promise<ToolDetail | null> {
  const record = await loadDetailModule(locale, detailKeyForTool(toolId, batch));
  return record[toolId] ?? null;
}

/** All detail records for a locale (prerender: merges them into the light data). */
export async function loadLocaleDetails(locale: LocaleCode): Promise<Record<string, ToolDetail>> {
  const modules = await Promise.all(BATCH_KEYS.map((key) => loadDetailModule(locale, key)));
  return Object.assign({}, ...modules);
}
