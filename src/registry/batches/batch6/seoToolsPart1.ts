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
      'open graph meta tags',
      'seo meta tags generator',
      'meta description generator',
      'html meta tags creator',
      'social media meta tags',
      'og tags generator',
    ],
    seo: {
      title: 'Meta Tag Generator – Open Graph & Twitter Tags | UtilityFlow',
      description:
        'Build clean title, description, canonical, Open Graph and Twitter Card tags with live length checks and social card previews — free, right in your browser.',
      primaryKeyword: 'meta tag generator',
      secondaryKeywords: [
        'open graph tag generator',
        'social share meta generator',
        'html head seo builder',
        'twitter card meta generator',
      ],
      longTailKeywords: [
        'generate open graph and twitter card html meta tags free',
        'check meta title and description length with social card preview',
        'download ready to paste seo meta head tags html',
        'create meta tags for website with open graph preview free',
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
        title: 'Set the canonical URL and indexing directives',
        description:
          'Enter the full canonical URL for the page and choose whether crawlers should index it and follow its links.',
      },
      {
        title: 'Add Open Graph tags',
        description:
          'Fill in the Open Graph title, description, type, and image URL (1200×630 pixels recommended) so links look right when shared.',
      },
      {
        title: 'Configure the Twitter/X Card',
        description:
          'Pick summary or summary_large_image and confirm the card title, description, and image that X will show.',
      },
      {
        title: 'Review the live social card preview',
        description:
          'Check the preview panel to see exactly how the link will appear in a social feed, and fix any truncation or missing image before you publish.',
      },
      {
        title: 'Copy or download the HTML snippet',
        description:
          'Copy the escaped HTML into your page <head>, or download meta-tags.html and reuse the block across your templates.',
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
      {
        question: 'Is the Meta Tag Generator free to use?',
        answer:
          'Yes. It is completely free and runs entirely in your browser, so your titles, descriptions, and URLs are never uploaded to a server.',
      },
      {
        question: 'Do I need to install anything to use the Meta Tag Generator?',
        answer:
          'No. It works in any modern browser with nothing to install, and you can generate tags on desktop or mobile.',
      },
      {
        question: 'What is the ideal length for a meta title?',
        answer:
          'Aim for 30–60 characters so the full title fits in search results and social cards without being cut off with an ellipsis.',
      },
      {
        question: 'What is the ideal length for a meta description?',
        answer:
          'Keep it between 120–160 characters so the whole summary stays visible in search results on desktop and mobile.',
      },
      {
        question: 'How does the Meta Tag Generator handle special characters in titles?',
        answer:
          'It automatically HTML-escapes &, ", <, and > inside attribute values so quotes and ampersands never break your page markup.',
      },
      {
        question: 'What is a canonical URL and why does the generator include one?',
        answer:
          'A canonical URL tells search engines which version of a page is the original when similar pages exist, preventing duplicate-content confusion.',
      },
      {
        question: 'What is the difference between Open Graph and Twitter Card tags?',
        answer:
          'Open Graph tags control link previews on Facebook, LinkedIn, and messaging apps, while Twitter Card tags control how the same link appears on X.',
      },
      {
        question: 'Which Twitter card type should I choose in the Meta Tag Generator?',
        answer:
          'Use summary_large_image for image-led pages such as articles and product pages, and summary for plain text pages where a small thumbnail is enough.',
      },
      {
        question: 'Can I preview how my link will look when shared?',
        answer:
          'Yes. The live social card preview shows the title, description, and image exactly as they will appear in a social feed before you publish.',
      },
      {
        question: 'Does the Meta Tag Generator upload my page content anywhere?',
        answer:
          'No. Everything runs locally in your browser and nothing you type leaves your device.',
      },
      {
        question: 'How do I add the generated meta tags to my website?',
        answer:
          'Copy the snippet and paste it inside the <head> section of your page template, or download meta-tags.html and reuse the block across pages.',
      },
      {
        question: 'When should I use a robots noindex directive with the Meta Tag Generator?',
        answer:
          'Use noindex only for pages you never want in search results, such as thank-you pages, internal search results, or staging copies of a live page.',
      },
      {
        question: 'Can I use the Meta Tag Generator for a blog post or product page?',
        answer:
          'Yes. Set og:type to article for blog posts or product for store pages so each platform displays the right preview format.',
      },
      {
        question: 'What happens if my og:image URL is wrong or the image is missing?',
        answer:
          'Social platforms will show no image or a broken preview, so always use a direct HTTPS image URL and check the preview before publishing.',
      },
      {
        question: 'Does the Meta Tag Generator support multilingual pages?',
        answer:
          'It generates tags for one page at a time, so set og:locale for the page language and generate a separate tag set for each translated version.',
      },
      {
        question: 'Can I download the generated meta tags as a file?',
        answer:
          'Yes. The download button saves a standalone meta-tags.html file containing the complete escaped snippet.',
      },
      {
        question: 'Will the Meta Tag Generator improve my Google ranking by itself?',
        answer:
          'No tool guarantees rankings, but accurate titles, descriptions, and social tags improve click-through rates and how your pages are presented.',
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
      'google serp preview',
      'search result preview tool',
      'seo snippet checker',
      'google title checker',
      'meta description length checker',
      'search snippet simulator',
    ],
    seo: {
      title: 'SERP Snippet Preview – Pixel Width Checker | UtilityFlow',
      description:
        'Preview your Google search snippet on desktop and mobile with real pixel-width title checks, bold keyword matching, and truncation warnings before you publish.',
      primaryKeyword: 'serp snippet preview',
      secondaryKeywords: [
        'google serp simulator',
        'seo title pixel width checker',
        'mobile search result preview',
        'desktop serp preview tool',
      ],
      longTailKeywords: [
        'check google seo title 580px pixel width online',
        'preview desktop vs mobile search snippet truncation',
        'test bold keyword matching in meta description',
        'preview google search result snippet before publishing page',
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
        title: 'Check the desktop preview',
        description:
          'Review the desktop search card to see the full title, breadcrumb URL, and description exactly as desktop users would see them.',
      },
      {
        title: 'Switch to the mobile preview',
        description:
          'Toggle to Mobile view to check the shorter truncation point and make sure the key message still appears on small screens.',
      },
      {
        title: 'Test bold keyword matching',
        description:
          'Enter your target search query in the Bold Keyword field to see which words Google would highlight inside your snippet.',
      },
      {
        title: 'Copy the finished tags',
        description:
          'When the preview looks right, copy the ready-to-paste <title> and <meta name="description"> tags into your page.',
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
      {
        question: 'Is the SERP Snippet Preview free to use?',
        answer:
          'Yes. It is completely free and runs entirely in your browser, so nothing you type is uploaded anywhere.',
      },
      {
        question: 'What is the ideal title length for Google search results?',
        answer:
          'Aim for under roughly 580 pixels on desktop, which usually means 50–60 characters depending on how wide the letters are.',
      },
      {
        question: 'How does the SERP Snippet Preview measure pixel width?',
        answer:
          'It uses the browser Canvas measureText() API to calculate the real rendered width of your title in the same font style search results use.',
      },
      {
        question: 'Why does my title get cut off even though it is under 60 characters?',
        answer:
          'Search engines truncate by pixel width, not character count, so wide letters such as W and M take up far more space than narrow letters such as i and l.',
      },
      {
        question: 'What is the ideal meta description length for desktop and mobile?',
        answer:
          'Desktop shows about 155–160 characters while mobile folds at roughly 120, so put the most important words and keywords first.',
      },
      {
        question: 'Can I preview both desktop and mobile search results?',
        answer:
          'Yes. Toggle between the Desktop and Mobile views to see how the same title and description render on each screen size.',
      },
      {
        question: 'What does the bold keyword feature in the SERP Snippet Preview do?',
        answer:
          'Enter a target search query and the preview bolds matching words inside your title and description, just as Google highlights query terms in real results.',
      },
      {
        question: 'Does the SERP Snippet Preview show my real Google ranking?',
        answer:
          'No. It is an offline visual simulator that shows how a snippet could look, not live ranking data from Google.',
      },
      {
        question: 'Does the SERP Snippet Preview upload my title or URL anywhere?',
        answer:
          'No. All previewing and measuring happens locally in your browser.',
      },
      {
        question: 'How do I copy the title and meta description after previewing?',
        answer:
          'Use the one-click copy button to grab ready-to-paste <title> and <meta name="description"> tags for your page.',
      },
      {
        question: 'Why does Google sometimes rewrite my title in live results?',
        answer:
          'Google may swap in your H1 or other page text when it thinks that matches a search query better, though concise accurate titles reduce rewrites.',
      },
      {
        question: 'Should I include my brand or site name in the title?',
        answer:
          'Often yes. Put it at the end after a separator so the main keyword stays first and the brand still shows in results.',
      },
      {
        question: 'What is the difference between a title tag and an H1 heading?',
        answer:
          'The title tag appears in search results and browser tabs, while the H1 is the visible headline on the page itself.',
      },
      {
        question: 'Can I test multiple titles quickly in the SERP Snippet Preview?',
        answer:
          'Yes. Edit the title field and the preview, pixel width, and truncation warning update live as you type.',
      },
      {
        question: 'Does the SERP Snippet Preview account for publication dates?',
        answer:
          'Yes. Adding a date shows how it shortens the visible description, which matters for news and blog posts.',
      },
      {
        question: 'What should I do if my description is truncated on mobile?',
        answer:
          'Move the key message and target keyword to the very front of the description so the folded mobile view still makes sense.',
      },
      {
        question: 'Is the pixel-width check in the SERP Snippet Preview accurate for all languages?',
        answer:
          'It approximates real search rendering from your browser fonts, so results are most accurate for Latin scripts and may vary for other writing systems.',
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
      'sitemap generator free',
      'xml sitemap creator online',
      'generate sitemap.xml',
      'sitemap builder tool',
      'website sitemap generator',
      'create sitemap for website',
    ],
    seo: {
      title: 'XML Sitemap Generator – Sitemap.xml Builder | UtilityFlow',
      description:
        'Turn a list of canonical URLs into a valid sitemap.xml with deduplication, lastmod dates, changefreq hints, and XML escaping — free, right in your browser.',
      primaryKeyword: 'xml sitemap generator',
      secondaryKeywords: [
        'sitemap xml builder',
        'create sitemap.xml free',
        'canonical url sitemap tool',
        'sitemap.xml file generator',
      ],
      longTailKeywords: [
        'generate valid xml sitemap from list of urls offline',
        'build sitemap.xml with lastmod and changefreq tags',
        'escape special characters in xml sitemap urls',
        'create xml sitemap for small website free online',
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
        title: 'Review flagged invalid lines',
        description:
          'Check the highlighted lines for typos or missing https:// prefixes and fix them before generating, since invalid URLs are excluded from the XML.',
      },
      {
        title: 'Configure optional tags',
        description:
          'Set an optional <lastmod> date, <changefreq> hint, and <priority> (or omit optional tags for cleaner files).',
      },
      {
        title: 'Check deduplication',
        description:
          'Confirm the duplicate count shown by the tool so the finished sitemap lists each canonical URL exactly once.',
      },
      {
        title: 'Preview the generated XML',
        description:
          'Inspect the XML output to confirm the urlset, <loc> entries, and optional <lastmod> values look correct.',
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
      {
        question: 'Is the XML Sitemap Generator free to use?',
        answer:
          'Yes. It is completely free and runs entirely in your browser, so your URL list is never uploaded to a server.',
      },
      {
        question: 'How many URLs can I include in one sitemap?',
        answer:
          'The Sitemaps protocol allows up to 50,000 URLs or 50 MB uncompressed per file, so larger sites should split into several sitemaps or use a sitemap index.',
      },
      {
        question: 'What is the difference between a sitemap and robots.txt?',
        answer:
          'A sitemap lists the URLs you want search engines to discover, while robots.txt gives crawlers rules about which paths they may or may not visit.',
      },
      {
        question: 'Where do I upload the sitemap.xml file?',
        answer:
          'Place it in your site root, for example https://example.com/sitemap.xml, so crawlers can find it at the standard location.',
      },
      {
        question: 'Do I need to submit my sitemap to Google?',
        answer:
          'It is recommended. Submit it in Google Search Console and also reference it with a Sitemap: line in robots.txt for other crawlers.',
      },
      {
        question: 'What URL formats does the XML Sitemap Generator accept?',
        answer:
          'Enter one full https:// or http:// URL per line, including the domain, and the tool flags any line that is not a valid URL.',
      },
      {
        question: 'What happens to duplicate URLs in my sitemap?',
        answer:
          'Duplicates are removed automatically so the finished sitemap contains each canonical URL exactly once.',
      },
      {
        question: 'What happens to invalid or malformed URLs in the XML Sitemap Generator?',
        answer:
          'Invalid lines are flagged clearly and excluded from the XML, so a typo in one line never breaks the whole file.',
      },
      {
        question: 'How does the XML Sitemap Generator handle special characters in URLs?',
        answer:
          'It XML-escapes & and other special characters inside <loc> elements so query strings and encoded paths stay valid.',
      },
      {
        question: 'Should I include image or video URLs in a regular sitemap?',
        answer:
          'A standard sitemap lists page URLs only. Image and video URLs need their own sitemap extensions if you want them indexed separately.',
      },
      {
        question: 'Should I list paginated or filtered URLs in my sitemap?',
        answer:
          'No. List only canonical, indexable pages and leave out pagination, sort parameters, and internal search result pages.',
      },
      {
        question: 'What is <lastmod> and should I set it in my sitemap?',
        answer:
          'It records the date a page last changed. Set it only when the date is accurate, because Google uses it to judge how fresh a page is.',
      },
      {
        question: 'Does the XML Sitemap Generator work offline?',
        answer:
          'Yes. It runs entirely in your browser with no upload, so you can build sitemaps without an internet connection once the page is loaded.',
      },
      {
        question: 'Can I regenerate my sitemap after adding new pages?',
        answer:
          'Yes. Paste the updated URL list and download a fresh sitemap.xml, then re-upload it to your site root.',
      },
      {
        question: 'What is a sitemap index file?',
        answer:
          'It is a file that lists multiple sitemap files, used by large sites to organize thousands of URLs across sections or languages.',
      },
      {
        question: 'Does having a sitemap guarantee Google will index my pages?',
        answer:
          'No. A sitemap helps search engines discover URLs, but indexing still depends on page quality, links, and crawl budget.',
      },
      {
        question: 'Can I use the XML Sitemap Generator for a WordPress or Shopify site?',
        answer:
          'Yes. Export or copy your canonical URL list from any platform, paste it here, and the tool builds a standard sitemap.xml.',
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
      'robots txt creator online',
      'robots.txt file generator',
      'block search crawlers',
      'allow disallow robots txt',
      'robots.txt checker builder',
      'create robots.txt file free',
    ],
    seo: {
      title: 'Robots.txt Generator – Crawler Directives Tool | UtilityFlow',
      description:
        'Create a valid robots.txt with User-agent groups, Allow and Disallow rules, crawl-delay, and sitemap links using starter presets — free, in your browser.',
      primaryKeyword: 'robots.txt generator',
      secondaryKeywords: [
        'robots txt creator',
        'disallow crawler paths',
        'wordpress and spa robots.txt',
        'robots.txt file creator',
      ],
      longTailKeywords: [
        'generate clean robots.txt for react vite and cloudflare pages',
        'add multiple sitemap directives to robots.txt file',
        'block staging environment from search crawlers robots.txt',
        'create robots.txt to block ai crawlers from website',
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
        title: 'Set Crawl-delay where needed',
        description:
          'Add a Crawl-delay value for crawlers that respect it, such as Bingbot, to slow requests on a small or shared server.',
      },
      {
        title: 'Attach Sitemap URLs',
        description:
          'Enter your full XML sitemap URL so crawlers can discover it from robots.txt, adding more than one line if you use several sitemaps.',
      },
      {
        title: 'Review the grouped output',
        description:
          'Check that each User-agent block is grouped correctly and that no Disallow rule accidentally blocks CSS, JavaScript, or public pages.',
      },
      {
        title: 'Copy, download, and test',
        description:
          'Copy or download robots.txt, place it at your domain root, and verify it with the robots.txt tester in Google Search Console.',
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
      {
        question: 'Is the Robots.txt Generator free to use?',
        answer:
          'Yes. It is completely free and runs entirely in your browser, so your site rules are never uploaded anywhere.',
      },
      {
        question: 'What is the difference between robots.txt and a meta robots noindex tag?',
        answer:
          'Robots.txt tells crawlers not to visit a path, while a noindex tag tells search engines not to show a crawled page in results. They solve different problems.',
      },
      {
        question: 'Can robots.txt block AI crawlers like GPTBot?',
        answer:
          'Yes. Add a User-agent: GPTBot group with Disallow: / to keep that crawler out, and repeat the pattern for other AI bots you want to block.',
      },
      {
        question: 'What does "User-agent: *" mean in robots.txt?',
        answer:
          'It means the rules in that group apply to every crawler that visits your site, unless a more specific User-agent group overrides them.',
      },
      {
        question: 'What is the difference between Allow and Disallow in robots.txt?',
        answer:
          'Allow permits crawling a path and Disallow blocks it. When rules overlap, the most specific matching rule wins.',
      },
      {
        question: 'Can I block a single page or folder with the Robots.txt Generator?',
        answer:
          'Yes. Add Disallow: /page/ for one page or Disallow: /folder/ to block a whole directory and everything inside it.',
      },
      {
        question: 'Should I block my CSS and JavaScript files in robots.txt?',
        answer:
          'No. Search engines need your CSS and JavaScript to render pages properly, and blocking them can hurt rankings.',
      },
      {
        question: 'What starter presets does the Robots.txt Generator include?',
        answer:
          'It includes Allow All, Standard Web App / SaaS, WordPress Clean, and Staging (Block All), so you can start from a proven template instead of a blank file.',
      },
      {
        question: 'How do I add my sitemap to robots.txt?',
        answer:
          'Add a line such as Sitemap: https://example.com/sitemap.xml at the end of the file so crawlers can find your sitemap from the root.',
      },
      {
        question: 'Can I have multiple Sitemap lines in one robots.txt file?',
        answer:
          'Yes. You can list several sitemap URLs, which is useful for sitemap indexes or separate sitemaps per language or section.',
      },
      {
        question: 'Does the Robots.txt Generator upload my rules anywhere?',
        answer:
          'No. Everything runs locally in your browser and the file is generated on your device.',
      },
      {
        question: 'How do I test my robots.txt after publishing it?',
        answer:
          'Upload it to your domain root, then check it with the robots.txt tester in Google Search Console or by fetching it as Googlebot.',
      },
      {
        question: 'What happens if I accidentally block my whole site in robots.txt?',
        answer:
          'Search engines will stop crawling your pages. Remove the Disallow: / line, re-upload the file, and request a re-crawl in Search Console.',
      },
      {
        question: 'Does robots.txt hide my admin pages from hackers?',
        answer:
          'No. Robots.txt is publicly readable, so anyone can see which paths you blocked. Protect sensitive pages with passwords or authentication.',
      },
      {
        question: 'What is Crawl-delay and should I use it in robots.txt?',
        answer:
          'Crawl-delay asks crawlers to wait a number of seconds between requests. Googlebot ignores it, but Bing and some other crawlers respect it.',
      },
      {
        question: 'Can I write different robots.txt rules for Googlebot and Bingbot?',
        answer:
          'Yes. Create a separate User-agent group for each crawler with its own Allow and Disallow lines.',
      },
      {
        question: 'Where do I upload robots.txt on Cloudflare Pages or a static site?',
        answer:
          'Place the file in the public/ folder or the root of your build output so it is served at https://yourdomain.com/robots.txt.',
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
      'structured data generator',
      'schema.org json-ld tool',
      'rich snippet schema generator',
      'faqpage schema generator',
      'product schema markup',
      'breadcrumb schema generator',
    ],
    seo: {
      title: 'Schema Markup Generator – JSON-LD for SEO | UtilityFlow',
      description:
        'Build valid Schema.org JSON-LD for Article, FAQPage, Product, Organization, and BreadcrumbList with safe HTML escaping, script copy, and .jsonld export.',
      primaryKeyword: 'schema markup generator',
      secondaryKeywords: [
        'json-ld generator online',
        'faqpage structured data tool',
        'product schema builder',
        'structured data markup tool',
      ],
      longTailKeywords: [
        'generate valid schema.org json-ld script tag free',
        'create dynamic faqpage and breadcrumb structured data',
        'escape json-ld safely for html script tags',
        'create json-ld schema markup for article and product pages',
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
        title: 'Add extra rows for lists',
        description:
          'Add extra Q&A pairs for FAQPage or extra trail items for BreadcrumbList, and remove any rows you do not need.',
      },
      {
        title: 'Review the generated JSON-LD',
        description:
          'Check the live JSON output for correct field names and values, and confirm empty optional properties are omitted automatically.',
      },
      {
        title: 'Copy <script> tag or export .jsonld',
        description:
          'Copy the complete <script type="application/ld+json"> block into your page <head> or download the .jsonld file.',
      },
      {
        title: 'Validate before publishing',
        description:
          'Paste the output into the Rich Results Test or Schema validator to catch syntax errors, since invalid JSON-LD is ignored by search engines.',
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
      {
        question: 'Is the Schema Markup Generator free to use?',
        answer:
          'Yes. It is completely free and runs entirely in your browser, so your content is never uploaded to a server.',
      },
      {
        question: 'What Schema.org types does the Schema Markup Generator support?',
        answer:
          'It supports Article, FAQPage, Product, Organization, and BreadcrumbList, which cover the most common rich-result use cases.',
      },
      {
        question: 'What is the difference between JSON-LD and Microdata?',
        answer:
          'JSON-LD is a separate <script> block you paste into your page, while Microdata adds attributes directly to your visible HTML elements.',
      },
      {
        question: 'How do I add the generated JSON-LD to my website?',
        answer:
          'Copy the complete <script type="application/ld+json"> block and paste it into the <head> of the matching page.',
      },
      {
        question: 'How do I test my schema markup after generating it?',
        answer:
          'Paste the page URL or code into the Rich Results Test or the Schema.org validator to check for errors and eligible enhancements.',
      },
      {
        question: 'Can I combine multiple schema types on one page?',
        answer:
          'Yes. A single page can carry Article, BreadcrumbList, and FAQPage markup together as separate JSON-LD blocks.',
      },
      {
        question: 'What is FAQPage schema and when should I use it?',
        answer:
          'Use it on pages that show a visible list of questions and answers, such as help pages, so search engines can display them as expandable results.',
      },
      {
        question: 'What Product schema fields does the generator support?',
        answer:
          'It covers product name, price, currency, and availability, which are the core fields search engines use for shopping results.',
      },
      {
        question: 'What is BreadcrumbList schema used for?',
        answer:
          'It describes the navigation hierarchy of a page, such as Home > Guides > Topic, so search engines can show breadcrumb trails in results.',
      },
      {
        question: 'What is Organization schema used for?',
        answer:
          'It declares your brand identity, including name, logo, and official website, so search engines can show a consistent knowledge panel.',
      },
      {
        question: 'Does the Schema Markup Generator upload my content anywhere?',
        answer:
          'No. All markup is generated locally in your browser and nothing you enter leaves your device.',
      },
      {
        question: 'Can I export the schema as a .jsonld file?',
        answer:
          'Yes. The export button downloads a standalone .jsonld file you can store, version, or hand to a developer.',
      },
      {
        question: 'What happens if my JSON-LD has a syntax error?',
        answer:
          'The whole block may be ignored by search engines, so always validate the output with the Rich Results Test before publishing.',
      },
      {
        question: 'Can I use the Schema Markup Generator for a recipe or event page?',
        answer:
          'The generator covers five types only, so Recipe and Event pages need hand-written JSON-LD, which you can validate with the same tools.',
      },
      {
        question: 'Should FAQ answers in schema match the visible page text?',
        answer:
          'Yes. Google requires the structured data to match content users can actually see on the page, or the markup may be ignored.',
      },
      {
        question: 'Can I edit the generated JSON-LD by hand?',
        answer:
          'Yes. It is standard JSON, so you can add or change fields in any editor and re-validate the result before publishing.',
      },
      {
        question: 'Does the Schema Markup Generator work offline?',
        answer:
          'Yes. It runs entirely in your browser with no upload, so you can build schema markup without an internet connection once the page is loaded.',
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
