/**
 * Central language configuration for UtilityFlow.
 *
 * Designed for 11 languages from the start: English (default) + es + pt + de +
 * fr + ja + id + it + ru + ko + zh. Phase 1 ships en + es only; later phases
 * add a LocaleInfo entry, a locales/<code>.ts dictionary, tool overrides and
 * category overrides — no routing or component rework required.
 *
 * Rules:
 * - English URLs never change. Every other locale lives under /<code>/.
 * - Slugs are natural, SEO-friendly, and unique per locale.
 * - No IP-based redirects. The user's explicit choice is remembered in
 *   localStorage and only applied when they land on the English homepage.
 */

import { getCategoryById } from '../registry/categories';
import type { CategoryId, ToolCategory } from '../types/tool';

export type LocaleCode = 'en' | 'es';

export interface LocaleInfo {
  code: LocaleCode;
  /** Native name shown in the language switcher. */
  nativeName: string;
  /** URL prefix. Empty for the default language. */
  pathPrefix: string;
  /** BCP 47 tag for <html lang>. */
  htmlLang: string;
}

export const SUPPORTED_LOCALES: LocaleInfo[] = [
  { code: 'en', nativeName: 'English', pathPrefix: '', htmlLang: 'en' },
  { code: 'es', nativeName: 'Español', pathPrefix: '/es', htmlLang: 'es' },
];

export const DEFAULT_LOCALE: LocaleCode = 'en';

export const LOCALE_STORAGE_KEY = 'utilityflow-locale';

export function isLocaleCode(value: string): value is LocaleCode {
  return SUPPORTED_LOCALES.some((locale) => locale.code === value);
}

export function getLocaleInfo(code: LocaleCode): LocaleInfo {
  return SUPPORTED_LOCALES.find((locale) => locale.code === code) ?? SUPPORTED_LOCALES[0];
}

/**
 * Split a pathname into its locale and the locale-neutral remainder.
 * '/es/contador-de-palabras/' -> { locale: 'es', restPath: '/contador-de-palabras/' }
 * '/word-counter/'            -> { locale: 'en', restPath: '/word-counter/' }
 */
export function getLocaleFromPath(pathname: string): { locale: LocaleCode; restPath: string } {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && isLocaleCode(first) && first !== DEFAULT_LOCALE) {
    const rest = `/${segments.slice(1).join('/')}`;
    return { locale: first as LocaleCode, restPath: rest === '/' ? '/' : `${rest}/` };
  }
  return { locale: DEFAULT_LOCALE, restPath: pathname };
}

/** Localized URL for a static page path (English path in, localized path out). */
export const STATIC_PATHS: Record<string, Partial<Record<LocaleCode, string>>> = {
  '/': { en: '/', es: '/es/' },
  '/tools/': { en: '/tools/', es: '/es/todas-las-herramientas/' },
  '/about/': { en: '/about/', es: '/es/acerca-de/' },
  '/contact/': { en: '/contact/', es: '/es/contacto/' },
  '/privacy-policy/': { en: '/privacy-policy/', es: '/es/politica-de-privacidad/' },
  '/terms-of-service/': { en: '/terms-of-service/', es: '/es/terminos-de-servicio/' },
  '/ai-writing-assistant/': { en: '/ai-writing-assistant/', es: '/es/asistente-de-escritura-ia/' },
  '/ai-text-summarizer/': { en: '/ai-text-summarizer/', es: '/es/resumidor-de-texto-ia/' },
  '/ai-tool-finder/': { en: '/ai-tool-finder/', es: '/es/buscador-de-herramientas-ia/' },
};

/** Spanish slugs for the 7 categories, keyed by category id. */
export const CATEGORY_ES_SLUGS: Record<string, string> = {
  'text-writing': 'herramientas-de-texto-y-escritura',
  developer: 'herramientas-para-desarrolladores',
  calculators: 'calculadoras',
  'social-media': 'herramientas-de-redes-sociales',
  pdf: 'herramientas-pdf',
  seo: 'herramientas-seo',
  'image-file': 'herramientas-de-imagenes-y-archivos',
};

/**
 * Map an English internal path to the equivalent path in another locale.
 * Handles static pages, anchors (/#categories -> /es/#categories) and the
 * category prefix. Tool slugs are resolved by id, not here — see
 * getLocalizedEquivalentPath in routes.ts.
 */
export function localizeStaticPath(path: string, locale: LocaleCode): string {
  if (locale === DEFAULT_LOCALE) return path;
  const [pathPart, hash] = path.split('#');
  const normalized = pathPart === '' ? '/' : pathPart;
  const mapped = STATIC_PATHS[normalized]?.[locale];
  const base = mapped ?? `${getLocaleInfo(locale).pathPrefix}${normalized === '/' ? '/' : normalized}`;
  return hash ? `${base}#${hash}` : base;
}

/** Localized category hub path for a category (object or id). */
export function categoryHref(
  category: ToolCategory | CategoryId,
  locale: LocaleCode
): string {
  const id = typeof category === 'string' ? category : category.id;
  const base = typeof category === 'string' ? getCategoryById(category) : category;
  if (!base) return locale === 'es' ? '/es/' : '/';
  if (locale === 'es') {
    const esSlug = CATEGORY_ES_SLUGS[id] ?? base.slug;
    return `/es/categoria/${esSlug}/`;
  }
  return `/category/${base.slug}/`;
}

/** Localized tool page path for a (possibly localized) tool slug. */
export function toolHref(slug: string, locale: LocaleCode): string {
  if (locale === 'es') return `/es/${slug}/`;
  return `/${slug}/`;
}
