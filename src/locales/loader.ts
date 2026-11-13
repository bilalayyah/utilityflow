import type { LocaleCode, NonDefaultLocale } from './config';
import { enStrings } from './en/ui';
import type { LocaleData } from './types';

/**
 * Async locale-data loader.
 *
 * English data is built in (no download). Every other locale is loaded on
 * demand through an EXPLICIT dynamic-import map — one entry per locale —
 * so Vite emits exactly one chunk per locale and nothing else is pulled in.
 * Do NOT replace the map with a template-literal import: that would defeat
 * per-locale code splitting.
 *
 * Loaded locales are cached, so switching back to a visited locale does
 * not re-download it.
 */

export const EN_LOCALE_DATA: LocaleData = {
  code: 'en',
  toolOverrides: {},
  categoryOverrides: {},
  uiStrings: enStrings,
  componentStrings: {},
};

const LOCALE_LOADERS: Record<
  NonDefaultLocale,
  () => Promise<{ default: LocaleData }>
> = {
  es: () => import('./es/index'),
  pt: () => import('./pt/index'),
  fr: () => import('./fr/index'),
  de: () => import('./de/index'),
  it: () => import('./it/index'),
  id: () => import('./id/index'),
  ru: () => import('./ru/index'),
};

const cache = new Map<LocaleCode, LocaleData>([['en', EN_LOCALE_DATA]]);

export async function loadLocaleData(locale: LocaleCode): Promise<LocaleData> {
  const cached = cache.get(locale);
  if (cached) return cached;
  if (locale === 'en') return EN_LOCALE_DATA; // unreachable (cached above), but narrows the type below
  const module = await LOCALE_LOADERS[locale]();
  const data = module.default;
  cache.set(locale, data);
  return data;
}
