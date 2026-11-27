// Per-page OG images (Audit Fix #16).
//
// Map of page key -> /og/<slug>.jpg. Empty for now: every page uses the
// default /og-image.jpg (the same behaviour SeoHead has today).
// Fix #16 populates this with all 86 tools + 7 categories and wires
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
  // All 86 tools (per-tool OG cards: scripts/generate-og-images.py)
  'tool:add-pdf-page-numbers': '/og/add-pdf-page-numbers.jpg',
  'tool:age-calculator': '/og/age-calculator.jpg',
  'tool:alphabets-to-word-generator': '/og/alphabets-to-word-generator.jpg',
  'tool:base64-encoder-decoder': '/og/base64-encoder-decoder.jpg',
  'tool:bio-line-break-formatter': '/og/bio-line-break-formatter.jpg',
  'tool:bmi-calculator': '/og/bmi-calculator.jpg',
  'tool:calorie-calculator': '/og/calorie-calculator.jpg',
  'tool:canonical-hreflang-generator': '/og/canonical-hreflang-generator.jpg',
  'tool:caption-template-builder': '/og/caption-template-builder.jpg',
  'tool:case-converter': '/og/case-converter.jpg',
  'tool:character-counter': '/og/character-counter.jpg',
  'tool:color-contrast-checker': '/og/color-contrast-checker.jpg',
  'tool:color-converter': '/og/color-converter.jpg',
  'tool:compound-interest-calculator': '/og/compound-interest-calculator.jpg',
  'tool:cron-expression-parser': '/og/cron-expression-parser.jpg',
  'tool:css-minifier': '/og/css-minifier.jpg',
  'tool:date-difference-calculator': '/og/date-difference-calculator.jpg',
  'tool:discount-margin-calculator': '/og/discount-margin-calculator.jpg',
  'tool:favicon-generator': '/og/favicon-generator.jpg',
  'tool:file-hash-verifier': '/og/file-hash-verifier.jpg',
  'tool:find-and-replace': '/og/find-and-replace.jpg',
  'tool:hash-generator': '/og/hash-generator.jpg',
  'tool:hashtag-formatter': '/og/hashtag-formatter.jpg',
  'tool:heat-index-calculator': '/og/heat-index-calculator.jpg',
  'tool:html-entity-encoder': '/og/html-entity-encoder.jpg',
  'tool:image-compressor': '/og/image-compressor.jpg',
  'tool:image-format-converter': '/og/image-format-converter.jpg',
  'tool:image-resizer': '/og/image-resizer.jpg',
  'tool:image-rotate-flip': '/og/image-rotate-flip.jpg',
  'tool:image-to-base64': '/og/image-to-base64.jpg',
  'tool:images-to-pdf': '/og/images-to-pdf.jpg',
  'tool:js-formatter': '/og/js-formatter.jpg',
  'tool:json-csv-converter': '/og/json-csv-converter.jpg',
  'tool:jwt-decoder': '/og/jwt-decoder.jpg',
  'tool:keyword-density-checker': '/og/keyword-density-checker.jpg',
  'tool:line-prefix-suffix': '/og/line-prefix-suffix.jpg',
  'tool:loan-emi-calculator': '/og/loan-emi-calculator.jpg',
  'tool:lorem-ipsum-generator': '/og/lorem-ipsum-generator.jpg',
  'tool:markdown-previewer': '/og/markdown-previewer.jpg',
  'tool:merge-pdf': '/og/merge-pdf.jpg',
  'tool:meta-tag-generator': '/og/meta-tag-generator.jpg',
  'tool:mortgage-calculator': '/og/mortgage-calculator.jpg',
  'tool:on-page-seo-checker': '/og/on-page-seo-checker.jpg',
  'tool:online-hourly-calculator': '/og/online-hourly-calculator.jpg',
  'tool:password-generator': '/og/password-generator.jpg',
  'tool:pdf-metadata-editor': '/og/pdf-metadata-editor.jpg',
  'tool:pdf-page-rotator': '/og/pdf-page-rotator.jpg',
  'tool:pdf-text-extractor': '/og/pdf-text-extractor.jpg',
  'tool:pdf-to-images': '/og/pdf-to-images.jpg',
  'tool:pdf-watermark': '/og/pdf-watermark.jpg',
  'tool:percentage-calculator': '/og/percentage-calculator.jpg',
  'tool:qr-code-generator': '/og/qr-code-generator.jpg',
  'tool:qr-code-scanner': '/og/qr-code-scanner.jpg',
  'tool:readability-checker': '/og/readability-checker.jpg',
  'tool:regex-tester': '/og/regex-tester.jpg',
  'tool:remove-duplicate-lines': '/og/remove-duplicate-lines.jpg',
  'tool:reorder-delete-pdf-pages': '/og/reorder-delete-pdf-pages.jpg',
  'tool:robots-meta-tag-generator': '/og/robots-meta-tag-generator.jpg',
  'tool:robots-txt-generator': '/og/robots-txt-generator.jpg',
  'tool:roman-numeral-converter': '/og/roman-numeral-converter.jpg',
  'tool:salary-calculator': '/og/salary-calculator.jpg',
  'tool:schema-markup-generator': '/og/schema-markup-generator.jpg',
  'tool:serp-snippet-preview': '/og/serp-snippet-preview.jpg',
  'tool:social-character-limit-checker': '/og/social-character-limit-checker.jpg',
  'tool:social-handle-formatter': '/og/social-handle-formatter.jpg',
  'tool:social-thumbnail-previewer': '/og/social-thumbnail-previewer.jpg',
  'tool:sort-lines': '/og/sort-lines.jpg',
  'tool:split-pdf': '/og/split-pdf.jpg',
  'tool:sql-formatter': '/og/sql-formatter.jpg',
  'tool:text-diff-checker': '/og/text-diff-checker.jpg',
  'tool:text-reverser': '/og/text-reverser.jpg',
  'tool:text-to-slug': '/og/text-to-slug.jpg',
  'tool:time-duration-calculator': '/og/time-duration-calculator.jpg',
  'tool:tip-calculator': '/og/tip-calculator.jpg',
  'tool:unicode-fancy-text-formatter': '/og/unicode-fancy-text-formatter.jpg',
  'tool:unit-converter': '/og/unit-converter.jpg',
  'tool:unix-timestamp-converter': '/og/unix-timestamp-converter.jpg',
  'tool:url-encoder-decoder': '/og/url-encoder-decoder.jpg',
  'tool:url-slug-generator': '/og/url-slug-generator.jpg',
  'tool:utm-link-builder': '/og/utm-link-builder.jpg',
  'tool:uuid-generator': '/og/uuid-generator.jpg',
  'tool:vat-tax-calculator': '/og/vat-tax-calculator.jpg',
  'tool:whitespace-remover': '/og/whitespace-remover.jpg',
  'tool:word-counter': '/og/word-counter.jpg',
  'tool:word-frequency-counter': '/og/word-frequency-counter.jpg',
  'tool:xml-sitemap-generator': '/og/xml-sitemap-generator.jpg',
  'tool:youtube-timestamp-generator': '/og/youtube-timestamp-generator.jpg',
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

// Per-article OG images (article-images batch): one branded card per
// published (article, locale) pair, generated with Pillow — see
// scripts/generate-blog-images.py. URL by convention (no registry field);
// the image file is public/blog-images/<id>-<lang>.png (1200x630).
// Callers pass this only when the article IS published in that locale;
// not-yet-translated articles keep DEFAULT_OG_IMAGE (SeoHead's default).
export function getBlogImageUrl(articleId: string, locale: string): string {
  return `${SITE_CONFIG.defaultOrigin}/blog-images/${articleId}-${locale}.png`;
}
