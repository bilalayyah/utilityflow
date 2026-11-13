/**
 * Central language configuration for UtilityFlow.
 *
 * Designed for 11 languages from the start: English (default) + es + pt + de +
 * fr + ja + id + it + ru + ko + zh. Phase 1 shipped en + es; Phase 2 adds
 * pt + fr; Phase 3 adds de + it; Phase 4 adds id + ru. Later phases add a LocaleInfo entry, a locales/<code>.ts
 * dictionary, tool overrides and category overrides — no routing or component
 * rework required.
 *
 * Rules:
 * - English URLs never change. Every other locale lives under /<code>/.
 * - Slugs are natural, SEO-friendly, and unique per locale.
 * - No IP-based redirects. The user's explicit choice is remembered in
 *   localStorage and only applied when they land on the English homepage.
 */

import { getCategoryById } from '../registry/categories';
import type { CategoryId, ToolCategory } from '../types/tool';

export type LocaleCode = 'en' | 'es' | 'pt' | 'fr' | 'de' | 'it' | 'id' | 'ru';

/** Non-default locales (the ones that live under a /<code>/ prefix). */
export type NonDefaultLocale = Exclude<LocaleCode, 'en'>;

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
  { code: 'pt', nativeName: 'Português', pathPrefix: '/pt', htmlLang: 'pt-BR' },
  { code: 'fr', nativeName: 'Français', pathPrefix: '/fr', htmlLang: 'fr' },
  { code: 'de', nativeName: 'Deutsch', pathPrefix: '/de', htmlLang: 'de' },
  { code: 'it', nativeName: 'Italiano', pathPrefix: '/it', htmlLang: 'it' },
  { code: 'id', nativeName: 'Bahasa Indonesia', pathPrefix: '/id', htmlLang: 'id' },
  { code: 'ru', nativeName: 'Русский', pathPrefix: '/ru', htmlLang: 'ru' },
];

/** Literal 'en' type (not LocaleCode) so `locale === DEFAULT_LOCALE` narrows the type. */
export const DEFAULT_LOCALE: 'en' = 'en';

export const LOCALE_STORAGE_KEY = 'utilityflow-locale';

export function isLocaleCode(value: string): value is LocaleCode {
  return SUPPORTED_LOCALES.some((locale) => locale.code === value);
}

export function getLocaleInfo(code: LocaleCode): LocaleInfo {
  return SUPPORTED_LOCALES.find((locale) => locale.code === code) ?? SUPPORTED_LOCALES[0];
}

/**
 * BCP 47 tag for Intl APIs (toLocaleString, toLocaleDateString, ...).
 * pt-BR (Brazilian) rather than bare 'pt' so numbers/dates render the
 * Brazilian way; en-US so English dates render the US way.
 */
export function localeTag(locale: LocaleCode): string {
  switch (locale) {
    case 'en':
      return 'en-US';
    case 'es':
      return 'es';
    case 'pt':
      return 'pt-BR';
    case 'fr':
      return 'fr';
    case 'de':
      return 'de';
    case 'it':
      return 'it';
    case 'id':
      return 'id';
    case 'ru':
      return 'ru';
  }
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
  '/': { en: '/', es: '/es/', pt: '/pt/', fr: '/fr/', de: '/de/', it: '/it/', id: '/id/', ru: '/ru/' },
  '/tools/': {
    en: '/tools/',
    es: '/es/todas-las-herramientas/',
    pt: '/pt/todas-as-ferramentas/',
    fr: '/fr/tous-les-outils/',
    de: '/de/alle-tools/',
    it: '/it/tutti-gli-strumenti/',
    id: '/id/semua-alat/',
    ru: '/ru/vse-instrumenty/',
  },
  '/about/': { en: '/about/', es: '/es/acerca-de/', pt: '/pt/sobre/', fr: '/fr/a-propos/', de: '/de/ueber-uns/', it: '/it/chi-siamo/', id: '/id/tentang-kami/', ru: '/ru/o-nas/' },
  '/contact/': { en: '/contact/', es: '/es/contacto/', pt: '/pt/contato/', fr: '/fr/contact/', de: '/de/kontakt/', it: '/it/contatti/', id: '/id/kontak/', ru: '/ru/kontakty/' },
  '/privacy-policy/': {
    en: '/privacy-policy/',
    es: '/es/politica-de-privacidad/',
    pt: '/pt/politica-de-privacidade/',
    fr: '/fr/politique-de-confidentialite/',
    de: '/de/datenschutzerklaerung/',
    it: '/it/informativa-sulla-privacy/',
    id: '/id/kebijakan-privasi/',
    ru: '/ru/politika-konfidentsialnosti/',
  },
  '/terms-of-service/': {
    en: '/terms-of-service/',
    es: '/es/terminos-de-servicio/',
    pt: '/pt/termos-de-servico/',
    fr: '/fr/conditions-d-utilisation/',
    de: '/de/nutzungsbedingungen/',
    it: '/it/termini-di-servizio/',
    id: '/id/syarat-layanan/',
    ru: '/ru/usloviya-ispolzovaniya/',
  },
  '/ai-writing-assistant/': {
    en: '/ai-writing-assistant/',
    es: '/es/asistente-de-escritura-ia/',
    pt: '/pt/assistente-de-escrita-ia/',
    fr: '/fr/assistant-d-ecriture-ia/',
    de: '/de/ki-schreibassistent/',
    it: '/it/assistente-di-scrittura-ia/',
    id: '/id/asisten-penulisan-ai/',
    ru: '/ru/ai-assistent-pisma/',
  },
  '/ai-text-summarizer/': {
    en: '/ai-text-summarizer/',
    es: '/es/resumidor-de-texto-ia/',
    pt: '/pt/resumidor-de-texto-ia/',
    fr: '/fr/resumeur-de-texte-ia/',
    de: '/de/ki-text-zusammenfasser/',
    it: '/it/riassuntore-di-testo-ia/',
    id: '/id/peringkas-teks-ai/',
    ru: '/ru/ai-summarizator-teksta/',
  },
  '/ai-tool-finder/': {
    en: '/ai-tool-finder/',
    es: '/es/buscador-de-herramientas-ia/',
    pt: '/pt/buscador-de-ferramentas-ia/',
    fr: '/fr/chercheur-d-outils-ia/',
    de: '/de/ki-tool-finder/',
    it: '/it/cercatore-di-strumenti-ia/',
    id: '/id/pencari-alat-ai/',
    ru: '/ru/ai-poisk-instrumentov/',
  },
};

/**
 * Per-locale category slugs, keyed by category id.
 * es/pt use 'categoria' as the category path segment; fr uses 'categorie'
 * (see CATEGORY_PATH_SEGMENT).
 */
export const CATEGORY_LOCALE_SLUGS: Record<NonDefaultLocale, Record<string, string>> = {
  es: {
    'text-writing': 'herramientas-de-texto-y-escritura',
    developer: 'herramientas-para-desarrolladores',
    calculators: 'calculadoras',
    'social-media': 'herramientas-de-redes-sociales',
    pdf: 'herramientas-pdf',
    seo: 'herramientas-seo',
    'image-file': 'herramientas-de-imagenes-y-archivos',
  },
  pt: {
    'text-writing': 'ferramentas-de-texto-e-escrita',
    developer: 'ferramentas-para-desenvolvedores',
    calculators: 'calculadoras',
    'social-media': 'ferramentas-de-redes-sociais',
    pdf: 'ferramentas-pdf',
    seo: 'ferramentas-seo',
    'image-file': 'ferramentas-de-imagem-e-arquivos',
  },
  fr: {
    'text-writing': 'outils-de-texte-et-d-ecriture',
    developer: 'outils-pour-developpeurs',
    calculators: 'calculatrices',
    'social-media': 'outils-de-reseaux-sociaux',
    pdf: 'outils-pdf',
    seo: 'outils-seo',
    'image-file': 'outils-d-images-et-de-fichiers',
  },
  de: {
    'text-writing': 'text-und-schreibwerkzeuge',
    developer: 'entwicklerwerkzeuge',
    calculators: 'rechner',
    'social-media': 'social-media-werkzeuge',
    pdf: 'pdf-werkzeuge',
    seo: 'seo-werkzeuge',
    'image-file': 'bild-und-dateiwerkzeuge',
  },
  it: {
    'text-writing': 'strumenti-di-testo-e-scrittura',
    developer: 'strumenti-per-sviluppatori',
    calculators: 'calcolatrici',
    'social-media': 'strumenti-per-social-media',
    pdf: 'strumenti-pdf',
    seo: 'strumenti-seo',
    'image-file': 'strumenti-per-immagini-e-file',
  },
  id: {
    'text-writing': 'alat-teks-dan-penulisan',
    developer: 'alat-pengembang',
    calculators: 'kalkulator',
    'social-media': 'alat-media-sosial',
    pdf: 'alat-pdf',
    seo: 'alat-seo',
    'image-file': 'alat-gambar-dan-file',
  },
  ru: {
    'text-writing': 'instrumenty-dlya-teksta-i-pisma',
    developer: 'instrumenty-dlya-razrabotchikov',
    calculators: 'kalkulyatory',
    'social-media': 'instrumenty-dlya-sotsialnyh-setej',
    pdf: 'pdf-instrumenty',
    seo: 'seo-instrumenty',
    'image-file': 'instrumenty-dlya-izobrazhenij-i-fajlov',
  },
};

/** Spanish slugs for the 7 categories, keyed by category id. Kept for the Phase 1 validator. */
export const CATEGORY_ES_SLUGS: Record<string, string> = CATEGORY_LOCALE_SLUGS.es;

/** Category hub path segment per non-default locale ('categoria' / 'categorie' / 'kategorie' / 'kategori' / 'kategoriya'). */
export const CATEGORY_PATH_SEGMENT: Record<NonDefaultLocale, string> = {
  es: 'categoria',
  pt: 'categoria',
  fr: 'categorie',
  de: 'kategorie',
  it: 'categoria',
  id: 'kategori',
  ru: 'kategoriya',
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
  if (!base) return locale === DEFAULT_LOCALE ? '/' : `${getLocaleInfo(locale).pathPrefix}/`;
  if (locale === DEFAULT_LOCALE) return `/category/${base.slug}/`;
  const slug = CATEGORY_LOCALE_SLUGS[locale][id] ?? base.slug;
  return `${getLocaleInfo(locale).pathPrefix}/${CATEGORY_PATH_SEGMENT[locale]}/${slug}/`;
}

/** Localized tool page path for a (possibly localized) tool slug. */
export function toolHref(slug: string, locale: LocaleCode): string {
  if (locale === DEFAULT_LOCALE) return `/${slug}/`;
  return `${getLocaleInfo(locale).pathPrefix}/${slug}/`;
}
