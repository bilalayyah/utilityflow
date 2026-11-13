import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const SEO_TOOLS_PART_2: ToolDefinition[] = [
  {
    id: 'url-slug-generator',
    slug: 'url-slug-generator',
    name: 'URL Slug & SEO Path Optimizer',
    shortDescription:
      'Convert article headlines into clean, accented-transliterated SEO URL slugs in batch with stop-word filtering.',
    categoryId: 'seo',
    batch: 6,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'url slug generator',
      'seo slug maker',
      'clean permalink generator',
      'batch slug converter',
    ],
    seo: {
      title: 'URL Slug Generator – Batch SEO Permalink Optimizer | UtilityFlow',
      description:
        'Convert one or dozens of article headlines into clean lowercase SEO URL slugs with Unicode accent transliteration, stop-word stripping, and word-boundary truncation.',
      primaryKeyword: 'url slug generator',
      secondaryKeywords: [
        'seo friendly url generator',
        'batch headline to slug',
        'stop word slug cleaner',
      ],
      longTailKeywords: [
        'convert blog titles to clean seo url slugs in bulk',
        'transliterate accented characters into ascii url slugs',
        'truncate long url slugs on clean word boundaries',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Standardize readable, hyphenated permalinks across single posts or bulk content calendars. Transliterates diacritics cleanly (`Café` → `cafe`), optionally trims filler stop words, enforces a clean max length without mid-word cuts, and previews full URLs.',
    instructions: [
      {
        title: 'Enter headlines or page names',
        description:
          'Paste one or multiple titles (one per line) into the Page Headlines textarea.',
      },
      {
        title: 'Configure slug formatting rules',
        description:
          'Enter your Base Domain, pick hyphen (-) or underscore (_), set Max Slug Length, and toggle stop-word or trailing-slash options.',
      },
      {
        title: 'Copy individual slugs or bulk lists',
        description:
          'Copy individual slugs from the table or export all slugs or full URLs in one click.',
      },
    ],
    examples: [
      {
        title: 'Trimming stop words and diacritics from a headline',
        input: '10 Best Café & Productivity Tools in 2026',
        output: '10-best-cafe-and-productivity-tools-2026',
        explanation: 'Transliterates é → e, expands & → and, strips "in", and joins lowercase tokens with hyphens.',
      },
    ],
    benefits: [
      'Batch processes dozens of editorial calendar titles simultaneously',
      'Truncates over-long slugs at hyphen/word boundaries rather than mid-word',
      'Preserves core meaning by keeping short slugs intact even with stop-word removal enabled',
      'Follows Google URL structure recommendations (UTF-8 ASCII hyphens over underscores)',
    ],
    useCases: [
      'Planning clean URL structures before launching blog categories or CMS collections',
      'Cleaning accented international product titles into ASCII-safe slugs',
      'Auditing excessively long CMS permalinks down to crisp 4–6 word paths',
      'Preparing canonical target lists to feed into XML Sitemap Generator',
    ],
    faqs: [
      {
        question: 'Should SEO URL slugs use hyphens (-) or underscores (_)?',
        answer:
          'Google recommends hyphens (-) as word separators in URLs because search parsers treat hyphens as spaces, whereas underscores join adjacent words together.',
      },
      {
        question: 'Does removing stop words hurt readability?',
        answer:
          'Removing short filler words like "a", "the", or "of" makes very long blog slugs punchier. Keep stop words if removing them alters the core meaning (e.g., "how to").',
      },
      {
        question: 'Should I change slugs on already-indexed live URLs?',
        answer:
          'Only if you deploy permanent 301 redirects from the old slug to the new slug (using our Canonical & 301 Redirect Generator) so backlinks and rankings transfer cleanly.',
      },
    ],
    relatedToolSlugs: [
      'text-to-slug',
      'canonical-hreflang-generator',
      'xml-sitemap-generator',
      'serp-snippet-preview',
    ],
    component: lazy(() => import('../../../tools/seo/UrlSlugGeneratorTool')),
  },
  {
    id: 'keyword-density-checker',
    slug: 'keyword-density-checker',
    name: 'Keyword Density & Content Analyzer',
    shortDescription:
      'Audit word counts, target keyword density, reading time, and top 1-, 2-, and 3-word phrase frequency locally.',
    categoryId: 'seo',
    batch: 6,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'keyword density checker',
      'seo content analyzer',
      'n-gram frequency analyzer',
      'phrase repetition audit',
    ],
    seo: {
      title: 'Keyword Density Checker – Term & N-Gram Content Audit | UtilityFlow',
      description:
        'Analyze article drafts or pasted HTML for total words, vocabulary diversity, reading time, target keyword density, and top 1-, 2-, and 3-word phrases locally.',
      primaryKeyword: 'keyword density checker',
      secondaryKeywords: [
        'seo copy frequency analyzer',
        '2 word 3 word ngram counter',
        'check keyword repetition online',
      ],
      longTailKeywords: [
        'analyze pasted html content for keyword density without upload',
        'find overused 2 word and 3 word phrases in blog draft',
        'check target keyword frequency cleanly in browser',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Inspect content drafts or pasted HTML copy for vocabulary depth, reading time, exact target-phrase hits, and top 1-word, 2-word, and 3-word n-gram frequencies—designed to spot accidental over-repetition rather than chase outdated keyword quotas.',
    instructions: [
      {
        title: 'Paste article draft or HTML',
        description:
          'Insert plain text or raw HTML (keep Strip HTML tags enabled to ignore markup tags and script/style blocks).',
      },
      {
        title: 'Enter target phrase and n-gram size',
        description:
          'Specify an optional Target Keyword/Phrase and toggle between 1-Word, 2-Word, and 3-Word phrase analysis.',
      },
      {
        title: 'Review frequency table',
        description:
          'Scan top terms and shares (%) to confirm topical focus and trim unnatural phrase repetition.',
      },
    ],
    examples: [
      {
        title: 'Spotting unintentional phrase repetition in a 500-word draft',
        input: 'Draft article + Target: "technical seo" + 2-Word Phrases',
        output: 'Ranks top bigrams ("technical seo", "meta descriptions", "canonical tags") with share %.',
        explanation: 'Highlights both primary topic alignment and repetitive phrasing you can vary naturally.',
      },
    ],
    benefits: [
      'Analyzes multi-word phrases (bigrams and trigrams), not just single words',
      'Safely strips <script>, <style>, and HTML tags before counting copy',
      'Includes honest guidance advising against mechanical keyword stuffing',
      'Keeps unpublished drafts and client briefs strictly inside browser memory',
    ],
    useCases: [
      'Editing long-form guides to ensure primary topics appear clearly without awkward stuffing',
      'Auditing competitor-free drafts for topical vocabulary balance',
      'Reviewing landing page copy stripped cleanly from exported HTML',
      'Checking average reading time alongside Word Counter and Readability Checker',
    ],
    faqs: [
      {
        question: 'Is there an ideal keyword density percentage for Google?',
        answer:
          'No. Google explicitly states there is no fixed keyword density threshold. Write naturally for readers and use density audits merely to check topic coverage and avoid unnatural repetition.',
      },
      {
        question: 'How does Strip HTML tags handle <script> and <style> elements?',
        answer:
          'It removes entire <script> and <style> blocks prior to stripping remaining HTML tags so JavaScript or CSS tokens never pollute word statistics.',
      },
      {
        question: 'Can I analyze a live competitor URL by typing a domain here?',
        answer:
          'No. Paste the text or HTML source directly—browser apps cannot scrape third-party websites across origins without server proxies.',
      },
    ],
    relatedToolSlugs: [
      'word-frequency-counter',
      'readability-checker',
      'on-page-seo-checker',
      'word-counter',
    ],
    component: lazy(() => import('../../../tools/seo/KeywordDensityCheckerTool')),
  },
  {
    id: 'canonical-hreflang-generator',
    slug: 'canonical-hreflang-generator',
    name: 'Canonical, Hreflang & 301 Redirect Builder',
    shortDescription:
      'Generate HTML/XML hreflang & canonical tags or compile 301 redirects for Cloudflare Pages _redirects, Apache, and Nginx.',
    categoryId: 'seo',
    batch: 6,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'hreflang generator',
      'canonical tag builder',
      '301 redirect generator',
      'cloudflare _redirects builder',
    ],
    seo: {
      title: 'Canonical, Hreflang & 301 Redirect Generator | UtilityFlow',
      description:
        'Generate multilingual hreflang HTML link tags, XML xhtml:link sitemap blocks, and 301 redirect rules for Cloudflare Pages _redirects, Apache .htaccess, and Nginx.',
      primaryKeyword: 'hreflang generator',
      secondaryKeywords: [
        'canonical link tag generator',
        '301 redirect config builder',
        'cloudflare pages redirects generator',
      ],
      longTailKeywords: [
        'generate hreflang html tags and xml sitemap xhtml links',
        'convert old url list into cloudflare pages _redirects 301 rules',
        'build apache htaccess and nginx 301 redirects online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Handle two essential technical SEO migrations in one place: generate multi-region `hreflang` + `canonical` annotations (for both HTML `<head>` and XML sitemaps), or convert URL mapping lists into ready-to-deploy 301 redirect configs for Cloudflare Pages, Apache, and Nginx.',
    instructions: [
      {
        title: 'Choose Hreflang or 301 Redirects',
        description:
          'Select Canonical & Hreflang Tags for international SEO or 301 Redirect Rule Generator for URL migrations.',
      },
      {
        title: 'Enter locales or URL migration pairs',
        description:
          'Add ISO language-region codes (`en-US`, `en-GB`, `x-default`) and URLs, or paste old-to-new path pairs.',
      },
      {
        title: 'Copy platform-ready config',
        description:
          'Copy the HTML `<link>` tags, `<xhtml:link>` XML lines, or `_redirects` / `.htaccess` / `nginx` rules directly.',
      },
    ],
    examples: [
      {
        title: 'Cloudflare Pages 301 migration rule',
        input: '/old-blog-post, /blog/new-post/',
        output: '/old-blog-post /blog/new-post/ 301',
        explanation: 'Outputs exact Cloudflare Pages _redirects syntax with explicit 301 permanent status.',
      },
    ],
    benefits: [
      'Outputs both HTML <link rel="alternate"> and XML <xhtml:link> formats consistently',
      'Supports Cloudflare Pages _redirects, Apache .htaccess, and Nginx server syntax',
      'Encourages self-referencing canonicals and x-default fallback locales',
      'Normalizes leading slashes on source redirect paths automatically',
    ],
    useCases: [
      'Launching localized English/Spanish/French regional pages cleanly without duplicate penalties',
      'Preserving backlink equity when renaming slugs during a redesign',
      'Generating Cloudflare Pages /public/_redirects deployment files in seconds',
      'Verifying reciprocal hreflang sets before submitting international sitemaps',
    ],
    faqs: [
      {
        question: 'Must hreflang tags be bidirectional / reciprocal?',
        answer:
          'Yes. If Page A links to Page B with hreflang="es", Page B must link back to Page A with hreflang="en" (and itself), otherwise search engines ignore the annotation.',
      },
      {
        question: 'When should I use x-default in hreflang?',
        answer:
          'Use hreflang="x-default" to designate your fallback international page for visitors whose browser language/region does not match any specific alternate.',
      },
      {
        question: 'Should canonical URLs point across languages (for example es → en)?',
        answer:
          'No. Each translated language version should declare a self-referencing canonical pointing to itself, while hreflang connects the localized equivalents.',
      },
    ],
    relatedToolSlugs: [
      'xml-sitemap-generator',
      'url-slug-generator',
      'robots-txt-generator',
      'meta-tag-generator',
    ],
    component: lazy(() => import('../../../tools/seo/CanonicalHreflangGeneratorTool')),
  },
  {
    id: 'on-page-seo-checker',
    slug: 'on-page-seo-checker',
    name: 'HTML On-Page SEO Audit Checker',
    shortDescription:
      'Audit pasted HTML source locally with DOMParser for title length, meta description, H1–H4 hierarchy, alt text, and JSON-LD.',
    categoryId: 'seo',
    batch: 6,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'on page seo checker',
      'html seo analyzer',
      'heading hierarchy checker',
      'image alt audit tool',
    ],
    seo: {
      title: 'HTML On-Page SEO Audit Checker – DOM Tag Analyzer | UtilityFlow',
      description:
        'Audit pasted HTML page source locally via browser DOMParser for title length, meta description, H1 count, heading structure, canonical tag, image alt attributes, and JSON-LD.',
      primaryKeyword: 'on page seo checker',
      secondaryKeywords: [
        'html source seo audit',
        'h1 h2 heading structure checker',
        'check missing image alt attributes',
      ],
      longTailKeywords: [
        'audit pasted html source for on page seo tags offline',
        'check heading outline h1 to h4 and canonical link in html',
        'client side seo dom inspector without external crawling',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Run an instant DOM-level technical & on-page SEO inspection on any pasted HTML source (`View Page Source`) right inside your browser—checking `<title>`, meta description, canonicals, `H1`–`H4` heading hierarchy, missing image `alt` text, internal/external links, Open Graph, and JSON-LD.',
    instructions: [
      {
        title: 'Copy HTML source from your page',
        description:
          'Open View Page Source (or inspect built dist/index.html) and paste the HTML into the source textarea.',
      },
      {
        title: 'Review DOM Audit Score & checklists',
        description:
          'Inspect pass/warning indicators for title, meta description, single H1, canonical link, alt text, and structured data.',
      },
      {
        title: 'Verify heading outline & links',
        description:
          'Scroll through the extracted H1–H4 tree and internal/external link tally to fix skipped levels or missing tags.',
      },
    ],
    examples: [
      {
        title: 'Auditing a rendered static HTML export',
        input: 'Complete <html> document with <title>, <meta description>, H1/H2, and JSON-LD',
        output: '6/6 checks passed · H1–H4 outline + internal/external link breakdown',
        explanation: 'Uses native browser DOMParser cleanly without executing untrusted scripts.',
      },
    ],
    benefits: [
      'Uses native DOMParser (never executes pasted <script> tags or external payloads)',
      'Honest about browser CORS boundaries—never pretends to scrape blocked remote URLs',
      'Extracts the complete H1–H4 document outline cleanly',
      'Verifies Open Graph and JSON-LD presence alongside classic SEO tags',
    ],
    useCases: [
      'Pre-deployment QA on staging builds and static HTML exports',
      'Checking CMS blog templates for accidental duplicate <h1> tags or empty alt attributes',
      'Verifying that server-rendered pages emit canonical and meta tags cleanly',
      'Inspecting email-gated or localhost HTML pages inaccessible to cloud crawlers',
    ],
    faqs: [
      {
        question: 'Why does this tool ask me to paste HTML source instead of typing a website URL?',
        answer:
          'Browsers enforce Cross-Origin Resource Sharing (CORS) policies that block client-side JavaScript from reading arbitrary external websites, and localhost/private staging URLs are unreachable from public servers. Pasting View Page Source makes local auditing 100% reliable and private.',
      },
      {
        question: 'Can JavaScript-rendered SPAs audit correctly using raw View Page Source?',
        answer:
          'For client-rendered SPAs where React injects meta tags at runtime, copy the live outerHTML from Chrome/Firefox DevTools Elements panel instead of raw View Source.',
      },
      {
        question: 'Does DOMParser execute scripts inside pasted HTML?',
        answer:
          'No. DOMParser.parseFromString(..., "text/html") builds an inert DOM tree strictly for inspection without running JavaScript or loading external images.',
      },
    ],
    relatedToolSlugs: [
      'meta-tag-generator',
      'schema-markup-generator',
      'keyword-density-checker',
      'serp-snippet-preview',
    ],
    component: lazy(() => import('../../../tools/seo/OnPageSeoCheckerTool')),
  },
  {
    id: 'robots-meta-tag-generator',
    slug: 'robots-meta-tag-generator',
    name: 'Robots Meta Tag & X-Robots-Tag Builder',
    shortDescription:
      'Generate fine-grained noindex, nofollow, noarchive, max-snippet, max-image-preview, and Cloudflare _headers rules.',
    categoryId: 'seo',
    batch: 6,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'robots meta tag generator',
      'x-robots-tag builder',
      'noindex nofollow meta tag',
      'max-image-preview large tag',
    ],
    seo: {
      title: 'Robots Meta Tag & X-Robots-Tag Builder | UtilityFlow',
      description:
        'Generate HTML <meta name="robots"> tags and HTTP X-Robots-Tag response headers with noindex, nofollow, max-snippet, max-image-preview, and Cloudflare _headers output.',
      primaryKeyword: 'robots meta tag generator',
      secondaryKeywords: [
        'x-robots-tag header generator',
        'noindex meta tag maker',
        'google max-image-preview large',
      ],
      longTailKeywords: [
        'generate x-robots-tag noindex header for pdf files on cloudflare pages',
        'create meta robots tag with max-snippet and max-image-preview large',
        'difference between robots.txt and meta robots noindex',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Generate precise page-level crawler directives—including `index`/`noindex`, `follow`/`nofollow`, `noarchive`, `nosnippet`, `max-snippet`, and `max-image-preview:large`—simultaneously as HTML `<meta name="robots">` tags, HTTP `X-Robots-Tag` headers, and Cloudflare Pages `_headers` blocks.',
    instructions: [
      {
        title: 'Choose indexing & link directives',
        description:
          'Set index/noindex, follow/nofollow, and optional restrictions like noarchive, nosnippet, or noimageindex.',
      },
      {
        title: 'Tune snippet & preview caps',
        description:
          'Configure max-snippet (-1 for unlimited), max-image-preview (large for Google Discover), and max-video-preview.',
      },
      {
        title: 'Copy HTML tag or HTTP header',
        description:
          'Use the HTML meta tag inside <head>, or deploy the X-Robots-Tag header block for PDFs and non-HTML downloads.',
      },
    ],
    examples: [
      {
        title: 'Excluding private PDF downloads via Cloudflare Pages _headers',
        input: 'noindex, nofollow · Path: /private/*',
        output: '/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1',
        explanation: 'HTTP X-Robots-Tag works for PDFs, images, and non-HTML files that lack a <head> element.',
      },
    ],
    benefits: [
      'Outputs HTML <meta>, generic HTTP X-Robots-Tag, and Cloudflare Pages _headers simultaneously',
      'Includes Google Discover-recommended max-image-preview:large defaults',
      'Prevents conflicting combinations automatically (disables snippet/image sliders when nosnippet/noimageindex are active)',
      'Makes non-HTML PDF/asset de-indexing straightforward via HTTP headers',
    ],
    useCases: [
      'Preventing thank-you pages, internal search results, or member portals from entering Google index',
      'De-indexing hosted PDF brochures or whitepaper assets via X-Robots-Tag headers',
      'Enabling max-image-preview:large for editorial articles targeting Google Discover',
      'Adding strict noarchive or snippet-length caps on paywalled or sensitive documentation',
    ],
    faqs: [
      {
        question: 'When should I use X-Robots-Tag instead of <meta name="robots">?',
        answer:
          'Use X-Robots-Tag HTTP headers for non-HTML files (such as PDFs, spreadsheets, or images) or when applying indexing rules across an entire folder path via CDN rules.',
      },
      {
        question: 'Should I combine robots.txt Disallow with <meta name="robots" content="noindex">?',
        answer:
          'No! If a URL is blocked in robots.txt, search bots cannot crawl the page to read the HTML <meta name="robots" content="noindex"> tag inside it. Allow crawling if you rely on meta noindex.',
      },
      {
        question: 'What does max-snippet:-1 mean?',
        answer:
          'A value of -1 lets search engines choose any snippet length they deem helpful, whereas 0 prevents text snippets and positive integers (like 160) cap snippet character length.',
      },
    ],
    relatedToolSlugs: [
      'robots-txt-generator',
      'meta-tag-generator',
      'on-page-seo-checker',
      'canonical-hreflang-generator',
    ],
    component: lazy(() => import('../../../tools/seo/RobotsMetaTagGeneratorTool')),
  },
];
