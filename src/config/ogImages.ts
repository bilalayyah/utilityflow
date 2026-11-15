// Per-page OG images (Audit Fix #16).
//
// Map of page key -> /og/<slug>.jpg. Empty for now: every page uses the
// default /og-image.jpg (the same behaviour SeoHead has today).
// Fix #16 populates this with the top 10 tools + 7 categories and wires
// the `ogImage` prop through SeoHead; scripts/prerender-meta.ts already
// reads this module, so the prerendered heads pick the images up
// automatically once the map is filled.

import { SITE_CONFIG } from './site';

export const DEFAULT_OG_IMAGE = `${SITE_CONFIG.defaultOrigin}/og-image.jpg`;

// Fix #16: per-page OG images (1200x630, pastel, generated with headless
// Chromium — see /tmp/og-gen/gen.py). Keys are '<kind>:<id>' and values are
// site-relative paths; getOgImageForPage() returns an ABSOLUTE URL because
// og:image / twitter:image must be absolute.
const OG_IMAGE_MAP: Record<string, string> = {
  // Top 10 tools
  'tool:word-counter': '/og/word-counter.jpg',
  'tool:merge-pdf': '/og/merge-pdf.jpg',
  'tool:image-compressor': '/og/image-compressor.jpg',
  'tool:ai-writing-assistant': '/og/ai-writing-assistant.jpg',
  'tool:percentage-calculator': '/og/percentage-calculator.jpg',
  'tool:json-formatter': '/og/json-formatter.jpg',
  'tool:qr-code-generator': '/og/qr-code-generator.jpg',
  'tool:password-generator': '/og/password-generator.jpg',
  'tool:age-calculator': '/og/age-calculator.jpg',
  'tool:case-converter': '/og/case-converter.jpg',
  // All 7 categories
  'category:text-writing': '/og/text-writing.jpg',
  'category:developer': '/og/developer.jpg',
  'category:calculators': '/og/calculators.jpg',
  'category:social-media': '/og/social-media.jpg',
  'category:pdf': '/og/pdf.jpg',
  'category:seo': '/og/seo.jpg',
  'category:image-file': '/og/image-file.jpg',
  // L-9: tools directory page (/tools/ + its 11 locale versions).
  'static:tools': '/og/tools.jpg',
};

// L-10: localised OG images — BOUNDED to DE + ES, top 3 tools only.
// Keys are '<kind>:<id>' -> locale -> site-relative path. Any other
// locale (or a tool without a localised image) falls back to the
// English image in OG_IMAGE_MAP above.
const LOCALISED_OG_IMAGES: Record<string, Record<string, string>> = {
  'tool:word-counter': {
    de: '/og/de/word-counter.jpg',
    es: '/og/es/word-counter.jpg',
  },
  'tool:merge-pdf': {
    de: '/og/de/merge-pdf.jpg',
    es: '/og/es/merge-pdf.jpg',
  },
  'tool:image-compressor': {
    de: '/og/de/image-compressor.jpg',
    es: '/og/es/image-compressor.jpg',
  },
};

export function getOgImageForPage(
  kind: 'tool' | 'category' | 'static',
  id: string,
  locale?: string
): string {
  const key = `${kind}:${id}`;
  // L-10: prefer a localised image when one exists for this locale.
  if (locale) {
    const localised = LOCALISED_OG_IMAGES[key]?.[locale];
    if (localised) return `${SITE_CONFIG.defaultOrigin}${localised}`;
  }
  const path = OG_IMAGE_MAP[key];
  return path ? `${SITE_CONFIG.defaultOrigin}${path}` : DEFAULT_OG_IMAGE;
}
