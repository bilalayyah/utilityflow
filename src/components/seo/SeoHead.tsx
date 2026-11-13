import { useEffect } from 'react';
import { SITE_CONFIG, buildCanonicalUrl } from '../../config/site';

export interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
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

export function SeoHead({
  title,
  description,
  canonicalPath,
  keywords,
  ogType = 'website',
  noIndex = false,
  structuredData,
}: SeoHeadProps) {
  const canonicalUrl = buildCanonicalUrl(canonicalPath);
  const serializedSchema = structuredData ? JSON.stringify(structuredData) : '';
  const serializedKeywords = keywords?.join(', ') || '';

  useEffect(() => {
    document.title = title;

    upsertMeta('name', 'description', description);
    if (serializedKeywords) {
      upsertMeta('name', 'keywords', serializedKeywords);
    }
    upsertMeta('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow');

    upsertCanonical(canonicalUrl);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:site_name', SITE_CONFIG.name);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);

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
  }, [title, description, canonicalUrl, serializedKeywords, ogType, noIndex, serializedSchema, structuredData]);

  return null;
}
