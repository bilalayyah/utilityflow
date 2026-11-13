import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const SEO_TOOLS_PART_1: ToolDefinition[] = [
  {
    id: 'meta-tag-generator',
    slug: 'meta-tag-generator',
    name: 'Meta Tag & OpenGraph Generator',
    shortDescription:
      'Generate HTML title, meta description, canonical, robots, Open Graph, and Twitter/X Card tags with live card preview.',
    categoryId: 'seo',
    batch: 6,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'meta tag generator',
      'opengraph generator',
      'twitter card generator',
      'html seo head tags',
    ],
    seo: {
      title: 'Meta Tag & OpenGraph Generator – Social & SEO Head Tags | UtilityFlow',
      description:
        'Generate clean HTML title, meta description, canonical link, Open Graph (og:*), and Twitter/X Card metadata with live character counters and card previews.',
      primaryKeyword: 'meta tag generator',
      secondaryKeywords: [
        'open graph tag generator',
        'social share meta generator',
        'html head seo builder',
      ],
      longTailKeywords: [
        'generate open graph and twitter card html meta tags free',
        'check meta title and description length with social card preview',
        'download ready to paste seo meta head tags html',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compose standards-compliant HTML `<head>` metadata—covering `<title>`, `<meta name="description">`, canonical URLs, indexing directives, Open Graph tags (`og:*`), and Twitter/X Card markup—with attribute escaping and a live social card preview.',
    instructions: [
      {
        title: 'Enter page title and meta description',
        description:
          'Fill Page Title (aiming for 30–60 chars) and Meta Description (120–160 chars) while watching live length indicators.',
      },
      {
        title: 'Configure canonical and social images',
        description:
          'Provide your full Canonical URL, Open Graph image URL (1200×630 recommended), og:type, and Twitter card format.',
      },
      {
        title: 'Copy or download HTML',
        description:
          'Inspect the live Social Share Card preview, then copy the escaped HTML snippet or download meta-tags.html.',
      },
    ],
    examples: [
      {
        title: 'Standard website Open Graph & canonical block',
        input: 'Title: UtilityFlow · Type: website · Card: summary_large_image',
        output: '<title>...</title>, <meta name="description" ...>, <link rel="canonical" ...>, og:* & twitter:*',
        explanation: 'Properly escapes double quotes and ampersands inside attribute values.',
      },
    ],
    benefits: [
      'Automatically HTML-escapes &, ", <, and > characters in tag attributes',
      'Combines SEO head tags, Open Graph tags, and Twitter/X Cards in one consistent snippet',
      'Previews how shared links appear on social feeds before deploying',
      'Supports downloading a standalone meta-tags.html snippet',
    ],
    useCases: [
      'Shipping launch landing pages, marketing microsites, and SaaS product hubs',
      'Standardizing Open Graph image dimensions and card types across articles',
      'Verifying index/noindex and canonical URLs prior to production release',
      'Handing clean <head> templates from marketing teams to frontend engineers',
    ],
    faqs: [
      {
        question: 'Do I need separate tags for both Open Graph and Twitter/X?',
        answer:
          'X falls back to Open Graph for title and description when needed, but explicitly declaring twitter:card (summary_large_image) alongside og:* guarantees predictable wide image previews everywhere.',
      },
      {
        question: 'What size should my og:image be?',
        answer:
          'Use a 1200×630 pixel image (1.91:1 aspect ratio) hosted on an HTTPS URL without robots.txt blocking.',
      },
      {
        question: 'Does adding <meta name="keywords"> still help Google rankings?',
        answer:
          'Major search engines ignore meta keywords due to historical spam, so this generator keeps your <head> clean with impactful title, description, canonical, and social tags.',
      },
    ],
    relatedToolSlugs: [
      'serp-snippet-preview',
      'schema-markup-generator',
      'on-page-seo-checker',
      'robots-meta-tag-generator',
    ],
    component: lazy(() => import('../../../tools/seo/MetaTagGeneratorTool')),
  },
  {
    id: 'serp-snippet-preview',
    slug: 'serp-snippet-preview',
    name: 'SERP Snippet Previewer',
    shortDescription:
      'Simulate Google Desktop and Mobile search results with real Canvas pixel-width title checks and bold keyword matching.',
    categoryId: 'seo',
    batch: 6,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'serp preview tool',
      'google snippet simulator',
      'seo title pixel width checker',
      'meta description preview',
    ],
    seo: {
      title: 'SERP Snippet Previewer – Title Pixel Width & Mobile Check | UtilityFlow',
      description:
        'Preview how your page title, breadcrumb URL, and meta description appear on Desktop and Mobile search results with Canvas pixel-width measurement.',
      primaryKeyword: 'serp snippet preview',
      secondaryKeywords: [
        'google serp simulator',
        'seo title pixel width checker',
        'mobile search result preview',
      ],
      longTailKeywords: [
        'check google seo title 580px pixel width online',
        'preview desktop vs mobile search snippet truncation',
        'test bold keyword matching in meta description',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Measure whether your SEO title fits inside Google’s ~580 px display budget using live HTML5 Canvas font-metric calculation rather than character guesses alone, and preview Desktop vs. Mobile search cards with bold keyword matching.',
    instructions: [
      {
        title: 'Enter title, description, and URL',
        description:
          'Type your candidate SEO Title, Meta Description, Page URL, and optional Site Name or publication date.',
      },
      {
        title: 'Measure pixel width',
        description:
          'Check the live px readout next to SEO Title—wide letters like W and M consume more horizontal pixels than l and i.',
      },
      {
        title: 'Switch Desktop vs Mobile preview',
        description:
          'Toggle between Desktop and Mobile views and enter a target query in Bold Keyword to inspect visual scannability.',
      },
    ],
    examples: [
      {
        title: 'Catching wide-character title truncation',
        input: '60-character title filled with uppercase W/M letters',
        output: 'Flags >580 px overflow even under 60 characters so you trim before ellipsis cutoff.',
        explanation: 'Canvas text metrics approximate real search result serif/sans rendering widths.',
      },
    ],
    benefits: [
      'Uses Canvas measureText() pixel widths in addition to character counts',
      'Formats domain + pathname segments into clean breadcrumb trails automatically',
      'Simulates bold query terms inside meta descriptions for click-through review',
      'Copies ready-to-paste <title> and <meta name="description"> tags in one click',
    ],
    useCases: [
      'Refining blog headlines and product page titles to avoid mid-word "..." truncation',
      'Writing higher-CTR meta descriptions within mobile ~120-character folds',
      'Checking how publication dates impact visible description length',
      'Reviewing landing page snippets during editorial QA',
    ],
    faqs: [
      {
        question: 'Why does pixel width matter more than strict character count?',
        answer:
          'Search engines truncate titles by container pixel width (~580–600 px on desktop), not fixed character length. Uppercase letters and wide characters like W or M take nearly twice the width of i or l.',
      },
      {
        question: 'Can Google still rewrite my title or meta description in live SERPs?',
        answer:
          'Yes. Google sometimes dynamically rewrites snippets to match specific search queries or H1 headings, though concise, accurate titles reduce unwanted rewrites.',
      },
      {
        question: 'Does this fetch live rankings from Google?',
        answer:
          'No. It is an offline visual SERP snippet simulator running purely in your browser.',
      },
    ],
    relatedToolSlugs: [
      'meta-tag-generator',
      'url-slug-generator',
      'on-page-seo-checker',
      'keyword-density-checker',
    ],
    component: lazy(() => import('../../../tools/seo/SerpSnippetPreviewTool')),
  },
  {
    id: 'xml-sitemap-generator',
    slug: 'xml-sitemap-generator',
    name: 'XML Sitemap Generator',
    shortDescription:
      'Generate valid Sitemaps.org XML files from URL lists with deduplication, <lastmod>, <changefreq>, and .xml download.',
    categoryId: 'seo',
    batch: 6,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'xml sitemap generator',
      'sitemap.xml builder',
      'create xml sitemap online',
      'seo sitemap creator',
    ],
    seo: {
      title: 'XML Sitemap Generator – Build Valid sitemap.xml Files | UtilityFlow',
      description:
        'Convert canonical URL lists into valid Sitemaps.org XML files with deduplication, XML entity escaping, optional lastmod dates, and instant .xml download.',
      primaryKeyword: 'xml sitemap generator',
      secondaryKeywords: [
        'sitemap xml builder',
        'create sitemap.xml free',
        'canonical url sitemap tool',
      ],
      longTailKeywords: [
        'generate valid xml sitemap from list of urls offline',
        'build sitemap.xml with lastmod and changefreq tags',
        'escape special characters in xml sitemap urls',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Turn any list of canonical `https://` URLs into a valid `sitemap.xml` adhering to the Sitemaps 0.9 schema—complete with invalid URL filtering, automatic deduplication, XML character escaping, and `.xml` export.',
    instructions: [
      {
        title: 'Paste canonical URLs',
        description:
          'Enter one full https:// (or http://) URL per line into the editor; malformed lines are flagged clearly.',
      },
      {
        title: 'Configure optional tags',
        description:
          'Set an optional <lastmod> date, <changefreq> hint, and <priority> (or omit optional tags for cleaner files).',
      },
      {
        title: 'Copy or download sitemap.xml',
        description:
          'Click Copy XML or Download .xml to place directly in your site root /public/ folder.',
      },
    ],
    examples: [
      {
        title: 'Generating a static site sitemap for Cloudflare Pages',
        input: '5 canonical URLs · lastmod: 2026-11-12 · Deduplicate: On',
        output: 'Valid <?xml version="1.0"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">...</urlset>',
        explanation: 'Escapes XML entities (&, <, >, quotes) cleanly inside every <loc> element.',
      },
    ],
    benefits: [
      'Validates every line with native browser URL parsing before emitting XML',
      'Automatically escapes & and special query characters inside <loc> URLs',
      'Deduplicates identical URLs to prevent bloated sitemaps',
      'Allows omitting <priority> and <changefreq> cleanly when desired (Google ignores both)',
    ],
    useCases: [
      'Building initial sitemaps for static landing pages or documentation microsites',
      'Preparing clean URL submission files after site migrations',
      'Generating supplemental image/news-free sitemaps for small business sites',
      'Exporting formatted XML directly to deploy alongside robots.txt',
    ],
    faqs: [
      {
        question: 'Should I include non-canonical, redirected, or noindex URLs in a sitemap?',
        answer:
          'No. Sitemaps should list only canonical URLs returning HTTP 200 that you want search engines to index.',
      },
      {
        question: 'Does Google still use <priority> and <changefreq>?',
        answer:
          'Google Search ignores <priority> and <changefreq> tags and focuses primarily on <loc> and accurate <lastmod> dates when meaningfully updated.',
      },
      {
        question: 'Does this generator automatically crawl my live website?',
        answer:
          'No. Client-side pages cannot crawl arbitrary websites across origins due to browser CORS security; paste your exported route list here to compile valid XML instantly.',
      },
    ],
    relatedToolSlugs: [
      'robots-txt-generator',
      'canonical-hreflang-generator',
      'url-slug-generator',
      'meta-tag-generator',
    ],
    component: lazy(() => import('../../../tools/seo/XmlSitemapGeneratorTool')),
  },
  {
    id: 'robots-txt-generator',
    slug: 'robots-txt-generator',
    name: 'Robots.txt Generator',
    shortDescription:
      'Build valid robots.txt crawler rules grouped by User-agent with Allow/Disallow paths, Crawl-delay, and Sitemap directives.',
    categoryId: 'seo',
    batch: 6,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'robots.txt generator',
      'create robots txt',
      'crawler allow disallow builder',
      'sitemap directive generator',
    ],
    seo: {
      title: 'Robots.txt Generator – Crawler Directives & Sitemaps | UtilityFlow',
      description:
        'Create standards-compliant robots.txt files with User-agent groups, Allow/Disallow paths, starter presets, Crawl-delay, and Sitemap directives in your browser.',
      primaryKeyword: 'robots.txt generator',
      secondaryKeywords: [
        'robots txt creator',
        'disallow crawler paths',
        'wordpress and spa robots.txt',
      ],
      longTailKeywords: [
        'generate clean robots.txt for react vite and cloudflare pages',
        'add multiple sitemap directives to robots.txt file',
        'block staging environment from search crawlers robots.txt',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Create clean, grouped `robots.txt` directives using starter presets for open sites, SaaS web apps, WordPress, or staging lockdown—supporting custom `User-agent` rows, `Allow`/`Disallow`, `Crawl-delay`, and `Sitemap:` declarations.',
    instructions: [
      {
        title: 'Pick a starter preset or edit rules',
        description:
          'Click Allow All, Standard Web App / SaaS, WordPress Clean, or Staging (Block All) to populate common rules.',
      },
      {
        title: 'Customize User-agents and paths',
        description:
          'Add Allow or Disallow paths for * or specific crawlers like Googlebot, Bingbot, or GPTBot.',
      },
      {
        title: 'Attach Sitemap URLs and export',
        description:
          'Enter your full XML sitemap URL(s), then copy or download robots.txt for your domain root.',
      },
    ],
    examples: [
      {
        title: 'SaaS web app blocking /api/ and /admin/',
        input: 'User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/',
        output: 'Grouped robots.txt file ending with Sitemap: https://example.com/sitemap.xml',
        explanation: 'Groups matching User-agents cleanly under single blocks.',
      },
    ],
    benefits: [
      'Automatically groups rules by matching User-agent blocks per RFC 9309 best practices',
      'Includes verified starter templates to avoid accidentally blocking CSS/JS assets',
      'Supports multiple Sitemap: declarations for sitemap indexes or localized files',
      'One-click download produces a ready-to-deploy robots.txt file',
    ],
    useCases: [
      'Preventing crawlers from wasting budget on /api/, /admin/, or internal search query URLs',
      'Advertising XML sitemap locations in the domain root',
      'Adding specific rules for specialized bots like AdsBot or AI scrapers',
      'Configuring staging environments prior to DNS launch',
    ],
    faqs: [
      {
        question: 'Does Disallow: /admin/ in robots.txt keep a page out of Google Search or protect secrets?',
        answer:
          'Important distinction: robots.txt stops crawling, not necessarily indexing if other sites link directly to the URL, and robots.txt is publicly readable. Use authentication for sensitive routes and <meta name="robots" content="noindex"> to prevent indexing.',
      },
      {
        question: 'Where must robots.txt be hosted?',
        answer:
          'It must be served at the exact root path of your host (https://yourdomain.com/robots.txt), returning HTTP 200.',
      },
      {
        question: 'Does Google honor Crawl-delay?',
        answer:
          'Googlebot ignores Crawl-delay (use Search Console settings if needed), while Bing and other crawlers still respect numeric Crawl-delay intervals.',
      },
    ],
    relatedToolSlugs: [
      'robots-meta-tag-generator',
      'xml-sitemap-generator',
      'canonical-hreflang-generator',
      'meta-tag-generator',
    ],
    component: lazy(() => import('../../../tools/seo/RobotsTxtGeneratorTool')),
  },
  {
    id: 'schema-markup-generator',
    slug: 'schema-markup-generator',
    name: 'Schema Markup (JSON-LD) Generator',
    shortDescription:
      'Generate valid Schema.org JSON-LD scripts for Article, FAQPage, Product, Organization, and BreadcrumbList markup.',
    categoryId: 'seo',
    batch: 6,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'schema markup generator',
      'json ld generator',
      'faq schema generator',
      'structured data builder',
    ],
    seo: {
      title: 'Schema Markup (JSON-LD) Generator – Article, FAQ & Product | UtilityFlow',
      description:
        'Build valid Schema.org JSON-LD structured data scripts for Article, FAQPage, Product, Organization, and BreadcrumbList with instant <script> copy and .jsonld export.',
      primaryKeyword: 'schema markup generator',
      secondaryKeywords: [
        'json-ld generator online',
        'faqpage structured data tool',
        'product schema builder',
      ],
      longTailKeywords: [
        'generate valid schema.org json-ld script tag free',
        'create dynamic faqpage and breadcrumb structured data',
        'escape json-ld safely for html script tags',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Build clean Schema.org JSON-LD structured data blocks for `Article`, `FAQPage`, `Product`, `Organization`, and `BreadcrumbList`—complete with dynamic row builders, HTML-safe `<` escaping inside script tags, and `.jsonld` export.',
    instructions: [
      {
        title: 'Choose a Schema.org type',
        description:
          'Select Article, FAQPage, Product, Organization, or BreadcrumbList from the top switcher.',
      },
      {
        title: 'Fill entity properties',
        description:
          'Enter headlines, Q&A pairs, pricing offers, organization details, or breadcrumb trails.',
      },
      {
        title: 'Copy <script> tag or export .jsonld',
        description:
          'Copy the complete <script type="application/ld+json"> block into your page <head> or download the .jsonld file.',
      },
    ],
    examples: [
      {
        title: 'Building dynamic FAQPage structured data',
        input: '2 Question/Answer pairs under FAQPage schema',
        output: 'Valid @context https://schema.org FAQPage JSON-LD script block',
        explanation: 'Uses safe JSON serialization with \\u003c escaping to prevent premature </script> termination.',
      },
    ],
    benefits: [
      'Supports 5 of the highest-impact Schema.org structured data types',
      'Escapes "<" characters cleanly inside JSON-LD to avoid HTML script-injection breaks',
      'Omits empty optional properties automatically for clean syntax',
      'Pairs naturally with JSON Formatter & Validator for custom extensions',
    ],
    useCases: [
      'Adding Article author and publish metadata to editorial blog templates',
      'Structuring product price, currency, and Stock availability for merchant feeds',
      'Declaring site-wide Organization brand identity and logo URLs',
      'Embedding BreadcrumbList hierarchy trails on category and tool pages',
    ],
    faqs: [
      {
        question: 'Where should I place JSON-LD structured data on a web page?',
        answer:
          'You can place <script type="application/ld+json"> either inside <head> or inside <body>; placing it cleanly in <head> is standard practice.',
      },
      {
        question: 'Why does the generator escape "<" as "\\u003c" in JSON output?',
        answer:
          'If a user’s FAQ answer ever contains "</script>", browsers terminate the HTML script block early unless "<" is escaped as "\\u003c", which remains 100% valid JSON.',
      },
      {
        question: 'Does adding Schema markup guarantee rich snippets in Google?',
        answer:
          'No. Valid structured data makes pages eligible for enhanced search features, while search engines decide display eligibility based on overall page quality and guidelines.',
      },
    ],
    relatedToolSlugs: [
      'meta-tag-generator',
      'json-formatter',
      'on-page-seo-checker',
      'serp-snippet-preview',
    ],
    component: lazy(() => import('../../../tools/seo/SchemaMarkupGeneratorTool')),
  },
];
