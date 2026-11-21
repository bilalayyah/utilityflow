/**
 * Central language configuration for UtilityFlow.
 *
 * Designed for 11 languages from the start: English (default) + es + pt + de +
 * fr + ja + id + it + ru + ko + zh. Hindi (hi) added 2026-11-21 (12 locales); Arabic (ar) added 2026-11-22 (13 locales). Phase 1 shipped en + es; Phase 2 adds
 * pt + fr; Phase 3 adds de + it; Phase 4 adds id + ru; Phase 5 adds ja + ko. Later phases add a LocaleInfo entry, a locales/<code>.ts
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

export type LocaleCode = 'en' | 'es' | 'pt' | 'fr' | 'de' | 'it' | 'id' | 'ru' | 'ja' | 'ko' | 'zh' | 'hi' | 'ar';

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
  /** Text direction for <html dir>. Only 'ar' is RTL. */
  dir: 'ltr' | 'rtl';
}

export const SUPPORTED_LOCALES: LocaleInfo[] = [
  { code: 'en', nativeName: 'English', pathPrefix: '', htmlLang: 'en', dir: 'ltr' },
  { code: 'es', nativeName: 'Español', pathPrefix: '/es', htmlLang: 'es', dir: 'ltr' },
  { code: 'pt', nativeName: 'Português', pathPrefix: '/pt', htmlLang: 'pt-BR', dir: 'ltr' },
  { code: 'fr', nativeName: 'Français', pathPrefix: '/fr', htmlLang: 'fr', dir: 'ltr' },
  { code: 'de', nativeName: 'Deutsch', pathPrefix: '/de', htmlLang: 'de', dir: 'ltr' },
  { code: 'it', nativeName: 'Italiano', pathPrefix: '/it', htmlLang: 'it', dir: 'ltr' },
  { code: 'id', nativeName: 'Bahasa Indonesia', pathPrefix: '/id', htmlLang: 'id', dir: 'ltr' },
  { code: 'ru', nativeName: 'Русский', pathPrefix: '/ru', htmlLang: 'ru', dir: 'ltr' },
  { code: 'ja', nativeName: '日本語', pathPrefix: '/ja', htmlLang: 'ja', dir: 'ltr' },
  { code: 'ko', nativeName: '한국어', pathPrefix: '/ko', htmlLang: 'ko', dir: 'ltr' },
  { code: 'zh', nativeName: '中文', pathPrefix: '/zh', htmlLang: 'zh-CN', dir: 'ltr' },
  { code: 'hi', nativeName: 'हिन्दी', pathPrefix: '/hi', htmlLang: 'hi', dir: 'ltr' },
  { code: 'ar', nativeName: 'العربية', pathPrefix: '/ar', htmlLang: 'ar', dir: 'rtl' },
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
    case 'ja':
      return 'ja';
    case 'ko':
      return 'ko';
    case 'zh':
      return 'zh-CN';
    case 'hi':
      return 'hi';
    case 'ar':
      return 'ar';
  }
}

/**
 * L-13: og:locale tag (Open Graph locale, underscore + region).
 * Unlike localeTag (BCP 47, bare for most locales), og:locale is always
 * normalised to language_REGION form (de_DE, es_ES, ...) so it matches
 * the hreflang region codes and is consistent across all 11 locales.
 */
export function ogLocaleTag(locale: LocaleCode): string {
  switch (locale) {
    case 'en':
      return 'en_US';
    case 'es':
      return 'es_ES';
    case 'pt':
      return 'pt_BR';
    case 'fr':
      return 'fr_FR';
    case 'de':
      return 'de_DE';
    case 'it':
      return 'it_IT';
    case 'id':
      return 'id_ID';
    case 'ru':
      return 'ru_RU';
    case 'ja':
      return 'ja_JP';
    case 'ko':
      return 'ko_KR';
    case 'zh':
      return 'zh_CN';
    case 'hi':
      return 'hi_IN';
    case 'ar':
      return 'ar_SA';
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
  '/': { en: '/', es: '/es/', pt: '/pt/', fr: '/fr/', de: '/de/', it: '/it/', id: '/id/', ru: '/ru/', ja: '/ja/', ko: '/ko/', zh: '/zh/', hi: '/hi/', ar: '/ar/' },
  '/tools/': {
    en: '/tools/',
    es: '/es/todas-las-herramientas/',
    pt: '/pt/todas-as-ferramentas/',
    fr: '/fr/tous-les-outils/',
    de: '/de/alle-tools/',
    it: '/it/tutti-gli-strumenti/',
    id: '/id/semua-alat/',
    ru: '/ru/vse-instrumenty/',
    ja: '/ja/tools/',
    ko: '/ko/tools/',
    zh: '/zh/all-tools/',
    hi: '/hi/sabhi-tools/',
    ar: '/ar/jami-aladawat/',
  },
  '/about/': { en: '/about/', es: '/es/acerca-de/', pt: '/pt/sobre/', fr: '/fr/a-propos/', de: '/de/ueber-uns/', it: '/it/chi-siamo/', id: '/id/tentang-kami/', ru: '/ru/o-nas/', ja: '/ja/watashitachi/', ko: '/ko/sogae/', zh: '/zh/guanyu-women/', hi: '/hi/hamare-bare-mein/', ar: '/ar/man-nahnu/' },
  '/contact/': { en: '/contact/', es: '/es/contacto/', pt: '/pt/contato/', fr: '/fr/contact/', de: '/de/kontakt/', it: '/it/contatti/', id: '/id/kontak/', ru: '/ru/kontakty/', ja: '/ja/otoiawase/', ko: '/ko/mun-ui/', zh: '/zh/lianxi-women/', hi: '/hi/sampark/', ar: '/ar/ittasil-bina/' },
  '/privacy-policy/': {
    en: '/privacy-policy/',
    es: '/es/politica-de-privacidad/',
    pt: '/pt/politica-de-privacidade/',
    fr: '/fr/politique-de-confidentialite/',
    de: '/de/datenschutzerklaerung/',
    it: '/it/informativa-sulla-privacy/',
    id: '/id/kebijakan-privasi/',
    ru: '/ru/politika-konfidentsialnosti/',
    ja: '/ja/puraibashi-porishi/',
    ko: '/ko/peuraibeosi-jeongchaek/',
    zh: '/zh/yinsi-zhengce/',
    hi: '/hi/gopniyata-neeti/',
    ar: '/ar/siyasat-al-khususiyya/',
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
    ja: '/ja/riyo-kiyaku/',
    ko: '/ko/iyong-yagwan/',
    zh: '/zh/shiyong-tiaokuan/',
    hi: '/hi/sewa-ki-shartein/',
    ar: '/ar/shurut-al-khidma/',
  },
  /** Blog home — the segment is "blog" in every locale. */
  '/blog/': {
    en: '/blog/',
    es: '/es/blog/',
    pt: '/pt/blog/',
    fr: '/fr/blog/',
    de: '/de/blog/',
    it: '/it/blog/',
    id: '/id/blog/',
    ru: '/ru/blog/',
    ja: '/ja/blog/',
    ko: '/ko/blog/',
    zh: '/zh/blog/',
    hi: '/hi/blog/',
    ar: '/ar/blog/',
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
  ja: {
    'text-writing': 'tekisuto-tsuru',
    developer: 'kaihatsusha-tsuru',
    calculators: 'keisanki',
    'social-media': 'sosharu-media-tsuru',
    pdf: 'pdf-tsuru',
    seo: 'seo-tsuru',
    'image-file': 'gazo-fairu-tsuru',
  },
  ko: {
    'text-writing': 'tekseuteu-dogu',
    developer: 'gaebalja-dogu',
    calculators: 'gyesangi',
    'social-media': 'sosyeol-midieo-dogu',
    pdf: 'pdf-dogu',
    seo: 'seo-dogu',
    'image-file': 'imiji-pail-dogu',
  },
  zh: {
    'text-writing': 'wenben-gongju',
    developer: 'kaifazhe-gongju',
    calculators: 'jisuanqi',
    'social-media': 'shejiao-meiti-gongju',
    pdf: 'pdf-gongju',
    seo: 'seo-gongju',
    'image-file': 'tuxiang-wenjian-gongju',
  },
  hi: {
    'text-writing': 'text-aur-lekhan-tools',
    developer: 'developer-tools',
    calculators: 'calculator',
    'social-media': 'social-media-tools',
    pdf: 'pdf-tools',
    seo: 'seo-tools',
    'image-file': 'image-aur-file-tools',
  },
  ar: {
    'text-writing': 'adawat-al-nass-wal-kitaba',
    developer: 'adawat-al-mutawwirin',
    calculators: 'al-hasibat',
    'social-media': 'adawat-wasail-al-tawasul',
    pdf: 'adawat-pdf',
    seo: 'adawat-seo',
    'image-file': 'adawat-al-suwar-wal-malafat',
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
  ja: 'kategori',
  ko: 'kategori',
  zh: 'fenlei',
  hi: 'shreni',
  ar: 'tasnif',
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

/** Blog home path for a locale ("blog" in every locale). */
export function blogHref(locale: LocaleCode): string {
  if (locale === DEFAULT_LOCALE) return '/blog/';
  return `${getLocaleInfo(locale).pathPrefix}/blog/`;
}

/** Localized blog article path for a (possibly localized) article slug. */
export function articleHref(slug: string, locale: LocaleCode): string {
  if (locale === DEFAULT_LOCALE) return `/blog/${slug}/`;
  return `${getLocaleInfo(locale).pathPrefix}/blog/${slug}/`;
}

/**
 * Localized blog category path. EN: /blog/category/<en-slug>/.
 * Localized: /<locale>/blog/category/<localized-slug>/ — the segment word
 * "category" is English in every locale (like "blog"), while the category
 * slug itself is localized. This keeps blog categories distinct from tool
 * category routes (/<locale>/<segment>/<slug>/), which would otherwise
 * collide.
 */
export function blogCategoryHref(
  category: ToolCategory | CategoryId,
  locale: LocaleCode
): string {
  const id = typeof category === 'string' ? category : category.id;
  const base = typeof category === 'string' ? getCategoryById(category) : category;
  if (!base) return locale === DEFAULT_LOCALE ? '/blog/' : `${getLocaleInfo(locale).pathPrefix}/blog/`;
  if (locale === DEFAULT_LOCALE) return `/blog/category/${base.slug}/`;
  const slug = CATEGORY_LOCALE_SLUGS[locale][id] ?? base.slug;
  return `${getLocaleInfo(locale).pathPrefix}/blog/category/${slug}/`;
}
