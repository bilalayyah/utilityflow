import { useEffect } from 'react';
import { SITE_CONFIG, buildCanonicalUrl } from '../../config/site';
import {
  SUPPORTED_LOCALES,
  getLocaleFromPath,
  localeTag,
} from '../../locales/config';

export interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
  /** hreflang alternates (absolute URLs). Rendered as <link rel="alternate">. */
  alternates?: Array<{ hreflang: string; href: string }>;
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(href: string): void {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function upsertAlternates(alternates?: Array<{ hreflang: string; href: string }>): void {
  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((node) => node.remove());
  if (!alternates) return;
  for (const alt of alternates) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', alt.hreflang);
    link.setAttribute('href', alt.href);
    document.head.appendChild(link);
  }
}

/**
 * og:locale:alternate needs one <meta> per locale (unlike og:locale, which
 * is a single tag), so it gets its own upsert: wipe the old set, append the
 * new one. Values use underscores (og:locale format: pt_BR, zh_CN).
 */
function upsertOgLocaleAlternates(locales: string[]): void {
  document.head
    .querySelectorAll('meta[property="og:locale:alternate"]')
    .forEach((node) => node.remove());
  for (const locale of locales) {
    const element = document.createElement('meta');
    element.setAttribute('property', 'og:locale:alternate');
    element.setAttribute('content', locale);
    document.head.appendChild(element);
  }
}

export function SeoHead({
  title,
  description,
  canonicalPath,
  keywords,
  ogType = 'website',
  noIndex = false,
  structuredData,
  alternates,
}: SeoHeadProps) {
  const canonicalUrl = buildCanonicalUrl(canonicalPath);
  const serializedSchema = structuredData ? JSON.stringify(structuredData) : '';
  const serializedKeywords = keywords?.join(', ') || '';
  const serializedAlternates = alternates ? JSON.stringify(alternates) : '';
  // The page locale is read from its own localized canonical path (every
  // SeoHead caller passes a locale-aware path), so no caller changes are
  // needed to keep og:locale in sync. og:locale uses underscores
  // (pt_BR, zh_CN) while html lang / hreflang use hyphens.
  const { locale } = getLocaleFromPath(canonicalPath);
  const ogLocale = localeTag(locale).replace('-', '_');
  const ogLocaleAlternates = SUPPORTED_LOCALES.filter((l) => l.code !== locale).map(
    (l) => localeTag(l.code).replace('-', '_')
  );
  const serializedOgLocaleAlternates = ogLocaleAlternates.join(',');
  const ogImageUrl = `${SITE_CONFIG.defaultOrigin}/og-image.png`;

  useEffect(() => {
    document.title = title;

    upsertMeta('name', 'description', description);
    if (serializedKeywords) {
      upsertMeta('name', 'keywords', serializedKeywords);
    }
    upsertMeta('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow');

    upsertCanonical(canonicalUrl);
    upsertAlternates(alternates);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:site_name', SITE_CONFIG.name);
    upsertMeta('property', 'og:locale', ogLocale);
    upsertOgLocaleAlternates(ogLocaleAlternates);
    upsertMeta('property', 'og:image', ogImageUrl);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImageUrl);

    const existingScripts = document.head.querySelectorAll('script[data-seo-jsonld="true"]');
    existingScripts.forEach((node) => node.remove());

    if (serializedSchema) {
      const items = Array.isArray(structuredData) ? structuredData : [structuredData];
      items.forEach((item) => {
        if (!item) return;
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-jsonld', 'true');
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }

    return () => {
      const cleanupScripts = document.head.querySelectorAll('script[data-seo-jsonld="true"]');
      cleanupScripts.forEach((node) => node.remove());
    };
  }, [title, description, canonicalUrl, serializedKeywords, ogType, noIndex, serializedSchema, serializedAlternates, structuredData, alternates, ogLocale, serializedOgLocaleAlternates, ogImageUrl]);

  return null;
}
