import { loadLocaleData } from '../src/locales/loader';
import type { FullLocaleData, LocaleData } from '../src/locales/types';
import type { LocaleCode } from '../src/locales/config';
import { ES_ARTICLE_OVERRIDES } from '../src/locales/es/blog';
import { PT_ARTICLE_OVERRIDES } from '../src/locales/pt/blog';
import { FR_ARTICLE_OVERRIDES } from '../src/locales/fr/blog';
import { DE_ARTICLE_OVERRIDES } from '../src/locales/de/blog';
import { IT_ARTICLE_OVERRIDES } from '../src/locales/it/blog';
import { ID_ARTICLE_OVERRIDES } from '../src/locales/id/blog';
import { RU_ARTICLE_OVERRIDES } from '../src/locales/ru/blog';
import { JA_ARTICLE_OVERRIDES } from '../src/locales/ja/blog';
import { KO_ARTICLE_OVERRIDES } from '../src/locales/ko/blog';
import { ZH_ARTICLE_OVERRIDES } from '../src/locales/zh/blog';
import { HI_ARTICLE_OVERRIDES } from '../src/locales/hi/blog';
import { UR_ARTICLE_OVERRIDES } from '../src/locales/ur/blog';

/**
 * Node-only (prerender) locale-data loader with FULL article overrides.
 *
 * The browser's locale chunk carries only the SLIM article overrides
 * (audit #6), but the prerender scripts need the full bodies + FAQs for
 * static HTML + FAQ JSON-LD. This loader starts from loadLocaleData and
 * swaps in the full overrides from the locale's blog.ts source, so the
 * prerender scripts get a FullLocaleData while the browser bundle stays
 * slim. Never imported by browser code — scripts only.
 */
const FULL_ARTICLE_OVERRIDES = {
  es: ES_ARTICLE_OVERRIDES,
  pt: PT_ARTICLE_OVERRIDES,
  fr: FR_ARTICLE_OVERRIDES,
  de: DE_ARTICLE_OVERRIDES,
  it: IT_ARTICLE_OVERRIDES,
  id: ID_ARTICLE_OVERRIDES,
  ru: RU_ARTICLE_OVERRIDES,
  ja: JA_ARTICLE_OVERRIDES,
  ko: KO_ARTICLE_OVERRIDES,
  zh: ZH_ARTICLE_OVERRIDES,
  hi: HI_ARTICLE_OVERRIDES,
  ur: UR_ARTICLE_OVERRIDES,
} as const;

export async function loadFullLocaleData(locale: LocaleCode): Promise<FullLocaleData> {
  const data: LocaleData = await loadLocaleData(locale);
  if (locale === 'en') return { ...data, articleOverrides: {} };
  return { ...data, articleOverrides: FULL_ARTICLE_OVERRIDES[locale] };
}
