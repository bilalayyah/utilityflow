// Detail content for EN tools — split out of the registry by
// scripts/h3-split-details.mjs (H-3 page weight). Loaded on demand, one
// batch at a time, only on the tool's own page (src/locales/details.ts).
// Do NOT edit by hand; re-run the splitter if the registry changes.
import type { ToolDetail } from '../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'meta-tag-generator': {
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
  },
  'serp-snippet-preview': {
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
          'No. All previewing and measuring happens locally in your browser, so your title, description, and URL never leave your device.',
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
  },
  'xml-sitemap-generator': {
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
  },
  'robots-txt-generator': {
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
  },
  'schema-markup-generator': {
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
  },
  'url-slug-generator': {
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
        title: 'Preview the generated slugs',
        description:
          'Scan the results table to check accent transliteration, stop-word removal, and where long slugs were cut at word boundaries.',
      },
      {
        title: 'Adjust length or stop-word settings',
        description:
          'If a slug loses its meaning or cuts awkwardly, raise the max slug length or switch stop-word removal off, then regenerate.',
      },
      {
        title: 'Copy individual slugs or bulk lists',
        description:
          'Copy individual slugs from the table or export all slugs or full URLs in one click.',
      },
      {
        title: 'Never rename a live slug without a redirect',
        description:
          'If you change a slug on an already indexed page, add a 301 redirect from the old URL so backlinks and rankings carry over to the new one.',
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
      {
        question: 'Is the URL Slug Generator free to use?',
        answer:
          'Yes. It is completely free, with no sign-up and no limits on how many headlines you convert in one session.',
      },
      {
        question: 'Can I generate slugs for many headlines at once?',
        answer:
          'Yes. Paste one headline per line and the tool converts the whole batch in a single table, so you can slug an entire editorial calendar at once.',
      },
      {
        question: 'How are accented characters handled in slugs?',
        answer:
          'Diacritics are transliterated to plain ASCII — é becomes e, ü becomes u, ñ becomes n — so URLs stay readable and safe across browsers and servers.',
      },
      {
        question: 'What happens to symbols like & and @ in a slug?',
        answer:
          'The ampersand (&) is expanded to "and" and most other punctuation is removed, because symbols in URLs can break links or look messy when shared.',
      },
      {
        question: 'What are stop words, and why would I remove them?',
        answer:
          'Stop words are short filler words like "a", "the", "of" and "in". Removing them shortens long blog slugs without changing the core meaning.',
      },
      {
        question: 'Can I keep stop words in my slugs?',
        answer:
          'Yes. Switch the stop-word removal toggle off and the generator keeps every word from your headline, including short filler words.',
      },
      {
        question: 'What is the ideal length for an SEO slug?',
        answer:
          'Aim for 3 to 6 meaningful words. Use the Max Slug Length setting to keep slugs short, and the tool cuts at word boundaries so words are never split mid-word.',
      },
      {
        question: 'Should URL slugs be lowercase?',
        answer:
          'Yes. Lowercase slugs avoid duplicate-content issues, because some servers treat /Blog-Post and /blog-post as different pages.',
      },
      {
        question: 'Can I use underscores instead of hyphens in slugs?',
        answer:
          'You can pick underscores in the settings, but hyphens are recommended because search engines treat hyphens as word separators and underscores as joiners.',
      },
      {
        question: 'Are my headlines uploaded anywhere?',
        answer:
          'No. The URL Slug Generator runs entirely in your browser, so your headlines never leave your device.',
      },
      {
        question: 'How do I preview the full URL with my domain?',
        answer:
          'Enter your domain in the Base Domain field and the results table shows each slug as a complete URL you can copy.',
      },
      {
        question: 'Should my slugs end with a trailing slash?',
        answer:
          'It is optional, but be consistent: use the trailing-slash toggle to match the URL style your site already uses, so you do not create duplicate versions.',
      },
      {
        question: 'Can I use this tool for product and category pages?',
        answer:
          'Yes. It works for any page name — product titles, category names, landing pages and documentation headings all convert the same way.',
      },
      {
        question: 'Why was my slug cut shorter than the max length I set?',
        answer:
          'The tool truncates at the nearest hyphen before the limit instead of cutting mid-word, so a slug can end up a few characters shorter than the maximum.',
      },
      {
        question: 'What happens to headlines written in non-Latin scripts?',
        answer:
          'Only Latin diacritics are transliterated; characters from other scripts are removed, so a headline written entirely in another script may produce a very short slug. Add a Latin version of the key words for the best result.',
      },
      {
        question: 'Can I export all my slugs at once?',
        answer:
          'Yes. Use the bulk copy buttons to copy every slug, or every full URL, in one click instead of copying them one by one.',
      },
      {
        question: 'What is the difference between a slug and a permalink?',
        answer:
          'The slug is the readable last part of a URL, like "best-cafe-tools", while the permalink is the complete URL including the domain and any folders. For quick developer text conversion with underscore separators, see Text to Slug Converter.',
      },
    ],
  },
  'keyword-density-checker': {
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
      {
        title: 'Check word count, reading time and vocabulary',
        description:
          'Use the total words, unique-word share and reading time to judge whether the draft is too thin, too long, or too repetitive.',
      },
      {
        title: 'Rewrite overused phrases naturally',
        description:
          'When the same 2- or 3-word phrase dominates the table, vary it with synonyms and pronouns instead of deleting your topic keyword entirely.',
      },
      {
        title: 'Fix odd counts before trusting the results',
        description:
          'If the numbers look wrong, make sure Strip HTML tags is enabled and that navigation menus, code blocks or footers were not pasted in with the copy.',
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
      {
        question: 'Is the Keyword Density Checker free to use?',
        answer:
          'Yes. It is completely free, with no sign-up, and you can analyze as many drafts as you like.',
      },
      {
        question: 'What exactly is keyword density?',
        answer:
          'Keyword density is how often a word or phrase appears as a percentage of the total words in a text. A phrase used 5 times in 500 words has a density of 1%. For full frequency tables with CSV export, see Word Frequency Counter.',
      },
      {
        question: 'What counts as keyword stuffing?',
        answer:
          'Keyword stuffing is repeating a phrase unnaturally often just to rank higher. It reads badly for visitors and can hurt rankings, so use this tool to spot repetition, not to hit a target number.',
      },
      {
        question: 'What are n-grams, and why check 2- and 3-word phrases?',
        answer:
          'N-grams are sequences of n words — bigrams are 2-word phrases and trigrams are 3-word phrases. Checking them reveals repeated phrases that single-word counts miss entirely.',
      },
      {
        question: 'How many words do I need for a meaningful density check?',
        answer:
          'Short texts produce noisy percentages, so aim for at least 300 words for stable results. Very short snippets can still show raw counts, but treat the percentages with caution.',
      },
      {
        question: 'Does the tool count words inside headings and lists?',
        answer:
          'Yes. All visible text you paste is counted, including headings, bullet lists and captions, because search engines see that content too.',
      },
      {
        question: 'Why does my target phrase show 0%?',
        answer:
          'Check the exact spelling and wording — plurals, hyphens and word order must match. Also make sure Strip HTML tags is enabled if you pasted HTML.',
      },
      {
        question: 'Can I check density for several keywords at once?',
        answer:
          'Each run tracks one target phrase. To check another keyword, change the target phrase and run the analysis again on the same text.',
      },
      {
        question: 'Does the checker count stop words like "the" and "and"?',
        answer:
          'Yes, they appear in the 1-word frequency table, but focus on topical words and phrases — stop words are naturally frequent in every text and tell you little about SEO.',
      },
      {
        question: 'Is my draft uploaded anywhere?',
        answer:
          'No. The Keyword Density Checker runs entirely in your browser, so unpublished drafts and client copy never leave your device.',
      },
      {
        question: 'What is a good reading time for a blog post?',
        answer:
          'It depends on the topic, but the tool shows reading time so you can judge whether a post matches reader expectations — a quick guide might be 3 minutes, an in-depth tutorial 10 or more.',
      },
      {
        question: 'Can I paste HTML copied from my CMS?',
        answer:
          'Yes. Paste the raw HTML and keep Strip HTML tags enabled so tags, scripts and styles are removed before the words are counted.',
      },
      {
        question: 'Does the checker work with non-English text?',
        answer:
          'Yes. Word counting works for any language that separates words with spaces, and the n-gram tables will list the most frequent phrases in that language.',
      },
      {
        question: 'How do I lower density without removing my topic?',
        answer:
          'Use synonyms, pronouns and varied phrasing instead of repeating the exact keyword. The topic stays clear while the text reads naturally.',
      },
      {
        question: 'What does vocabulary diversity mean?',
        answer:
          'It is the share of unique words compared with total words. A higher share usually means richer, more varied writing; a very low share can signal repetitive copy.',
      },
      {
        question: 'Can I analyze a PDF or Word document?',
        answer:
          'The tool accepts pasted text, so copy the text out of your PDF or Word file and paste it in — formatting is not needed for a density check.',
      },
      {
        question: 'Why do percentages change when I switch n-gram size?',
        answer:
          'Each n-gram size has its own total: a 500-word text has 500 single words but only 499 two-word phrases, so the same phrase count produces a slightly different percentage.',
      },
    ],
  },
  'canonical-hreflang-generator': {
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
        title: 'Review the generated tags or rules',
        description:
          'Scan every locale code, URL and redirect pair for typos before copying — one wrong code can break the whole hreflang set.',
      },
      {
        title: 'Add x-default and self-referencing canonicals',
        description:
          'Include an x-default fallback locale and make sure every page lists itself as its own canonical.',
      },
      {
        title: 'Copy platform-ready config',
        description:
          'Copy the HTML `<link>` tags, `<xhtml:link>` XML lines, or `_redirects` / `.htaccess` / `nginx` rules directly.',
      },
      {
        title: 'Validate after deploying',
        description:
          'Once live, view the page source or use an hreflang validator to confirm the tags are present, reciprocal, and pointing at the correct URLs.',
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
      {
        question: 'Is the Hreflang Generator free to use?',
        answer:
          'Yes. It is completely free, with no sign-up, and you can generate as many hreflang sets and redirect rules as you need.',
      },
      {
        question: 'What is hreflang and why does it matter?',
        answer:
          'Hreflang is an HTML or XML annotation that tells search engines which language and regional version of a page to show each visitor, so English users see the English page and Spanish users see the Spanish one.',
      },
      {
        question: 'What format should language-region codes use?',
        answer:
          'Use ISO language codes with an optional ISO region, like en, es, fr-CA or en-GB. The language comes first, then a hyphen, then the region in capitals.',
      },
      {
        question: 'Do I need hreflang if my site has only one language?',
        answer:
          'No. Hreflang is only useful when the same content exists in more than one language or regional version.',
      },
      {
        question: 'Can I put hreflang in my XML sitemap instead of HTML?',
        answer:
          'Yes. The tool outputs both formats: HTML link tags for your page head and xhtml:link blocks for your XML sitemap. Pick one place and keep it consistent.',
      },
      {
        question: 'What is a self-referencing canonical?',
        answer:
          'It is a canonical tag on a page that points to the page itself. Every version of a page should include one, including each translated version.',
      },
      {
        question: 'When should I use a 301 redirect instead of a canonical tag?',
        answer:
          'Use a 301 redirect when a page has permanently moved to a new URL. Use a canonical tag when two similar pages must both stay live and you want search engines to prefer one of them.',
      },
      {
        question: 'What is the difference between a 301 and a 302 redirect?',
        answer:
          'A 301 is permanent and passes most ranking signals to the new URL; a 302 is temporary and tells search engines the old URL may come back, so it is the wrong choice for a permanent move.',
      },
      {
        question: 'How do Cloudflare Pages _redirects work?',
        answer:
          'You place a _redirects file in your site public folder with one rule per line — old path, new path, and status code — and Cloudflare applies the redirects when the site deploys.',
      },
      {
        question: 'Can I redirect a whole folder with one rule?',
        answer:
          'The tool outputs one rule per URL pair. For a folder-wide move, use a wildcard or splat rule in Cloudflare Pages or Apache, or generate the full pair list here.',
      },
      {
        question: 'Do 301 redirects pass ranking signals to the new page?',
        answer:
          'Yes. A 301 redirect passes most of the old page ranking signals and link value to the new URL, which is why it is the standard choice for permanent moves.',
      },
      {
        question: 'Should the old URL stay in my sitemap after a 301 redirect?',
        answer:
          'No. Remove redirected URLs from your sitemap and list only the new destination URLs, so search engines crawl the current pages.',
      },
      {
        question: 'How long should I keep a 301 redirect live?',
        answer:
          'Keep it for at least a year, and ideally permanently. Removing it too early can break old backlinks and bookmarks that still point at the old URL.',
      },
      {
        question: 'Can hreflang fix duplicate content problems?',
        answer:
          'Not on its own. Hreflang tells search engines which version to show each audience, but truly duplicate pages in the same language still need canonical tags or consolidation.',
      },
      {
        question: 'What happens if I use a wrong locale code?',
        answer:
          'Search engines ignore invalid codes, so a typo like en-UK instead of en-GB silently breaks that language version. Double-check every code before deploying.',
      },
      {
        question: 'Is my URL list uploaded anywhere?',
        answer:
          'No. The Canonical, Hreflang & 301 Redirect Builder runs entirely in your browser, so your URLs and migration plans never leave your device.',
      },
      {
        question: 'Can I generate hreflang tags for more than two languages?',
        answer:
          'Yes. Add as many locale rows as your site supports — the tool builds a complete reciprocal set covering every language version you enter.',
      },
    ],
  },
  'on-page-seo-checker': {
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
      {
        title: 'Fix warnings in priority order',
        description:
          'Start with a missing or over-long title and meta description, then duplicate H1 tags, then missing image alt text.',
      },
      {
        title: 'Re-paste and re-audit after fixes',
        description:
          'Paste the updated HTML and run the audit again to confirm the score improved and no new warnings appeared.',
      },
      {
        title: 'Audit JavaScript-rendered pages the right way',
        description:
          'If meta tags are missing from raw View Source on a React or SPA page, copy the live outerHTML from your browser DevTools Elements panel instead.',
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
      {
        question: 'Is the On-Page SEO Checker free to use?',
        answer:
          'Yes. It is completely free, with no sign-up, and you can audit as many pages as you like.',
      },
      {
        question: 'What is the ideal title tag length?',
        answer:
          'Aim for 50 to 60 characters. Longer titles get cut off in search results, while very short titles waste the chance to describe the page clearly.',
      },
      {
        question: 'What is the ideal meta description length?',
        answer:
          'Aim for 150 to 160 characters. That length usually displays fully in search results without being truncated.',
      },
      {
        question: 'How many H1 tags should a page have?',
        answer:
          'One. A single H1 states the main topic of the page; subtopics belong in H2 and H3 headings underneath it.',
      },
      {
        question: 'Can I skip heading levels, for example H1 then H3?',
        answer:
          'Avoid it. Keep the hierarchy in order — H1, then H2, then H3 — so search engines and screen readers can follow the page structure.',
      },
      {
        question: 'What happens if my page has no canonical tag?',
        answer:
          'Search engines will choose a canonical URL themselves, which may not be the version you prefer. Adding one explicitly removes the guesswork.',
      },
      {
        question: 'Why does image alt text matter for SEO?',
        answer:
          'Alt text describes images to search engines and screen readers, helps images rank in image search, and keeps the page usable when an image fails to load.',
      },
      {
        question: 'What is JSON-LD and why should I check for it?',
        answer:
          'JSON-LD is a block of structured data that describes your page content to search engines, powering rich results like ratings, FAQs and breadcrumbs. The checker confirms it is present.',
      },
      {
        question: 'Does the checker audit Open Graph tags?',
        answer:
          'Yes. It reports whether Open Graph tags like og:title and og:image are present, so your page previews correctly when shared on social media.',
      },
      {
        question: 'Can I audit a page that needs a login?',
        answer:
          'Yes. Because you paste the HTML yourself, you can audit private, staging and localhost pages that public crawlers cannot reach.',
      },
      {
        question: 'Is my HTML uploaded anywhere?',
        answer:
          'No. The On-Page SEO Checker runs entirely in your browser, so your page source never leaves your device.',
      },
      {
        question: 'My audit score is low — what should I fix first?',
        answer:
          'Fix issues in this order: a missing or over-long title, a missing meta description, duplicate H1 tags, then missing image alt text.',
      },
      {
        question: 'Does the checker count internal and external links?',
        answer:
          'Yes. It tallies internal and external links separately, so you can see whether a page links out enough and whether internal navigation is present.',
      },
      {
        question: 'Can I audit my homepage and blog posts with the same tool?',
        answer:
          'Yes. Paste each page HTML source separately and audit them one at a time — every page gets its own score and checklist.',
      },
      {
        question: 'Why do some checks show warnings instead of failures?',
        answer:
          'Warnings flag best-practice issues that are worth fixing but are not critical errors, such as a title that is slightly long or a heading level that is skipped.',
      },
      {
        question: 'Does it work for WordPress pages?',
        answer:
          'Yes. Open View Page Source on any WordPress page, copy the HTML and paste it in — the checker works with any CMS output.',
      },
      {
        question: 'How often should I run an on-page SEO audit?',
        answer:
          'Run one whenever you change a template, publish a new page type, or after a redesign — and re-audit after fixes to confirm the score improved.',
      },
    ],
  },
  'robots-meta-tag-generator': {
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
      {
        title: 'Pick the right output format',
        description:
          'Use the HTML meta tag for normal pages, X-Robots-Tag for PDFs and other non-HTML files, and the _headers block for Cloudflare path rules.',
      },
      {
        title: 'Place the output in the right spot',
        description:
          'Put the meta tag inside your page <head>, or add the header rules to your server config or Cloudflare _headers file, then deploy.',
      },
      {
        title: 'Page still showing in search?',
        description:
          'Noindex only works after search engines recrawl the page, which can take days. Check that robots.txt is not blocking the crawl, then confirm in Search Console.',
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
      {
        question: 'Is the Robots Meta Tag Generator free to use?',
        answer:
          'Yes. It is completely free, with no sign-up, and you can generate as many tags and header rules as you need.',
      },
      {
        question: 'What does noindex do?',
        answer:
          'Noindex tells search engines not to include a page in search results. The page stays live and visitable, but it will not appear on Google or Bing.',
      },
      {
        question: 'What does nofollow do?',
        answer:
          'Nofollow tells search engines not to follow the links on a page or pass ranking signals through them. It is useful for pages with untrusted or paid links.',
      },
      {
        question: 'What is the difference between robots.txt and a robots meta tag?',
        answer:
          'Robots.txt blocks crawling of a URL, while a robots meta tag controls whether a crawled page is indexed. They solve different problems and must not be combined carelessly.',
      },
      {
        question: 'How long does noindex take to work?',
        answer:
          'It only takes effect after search engines recrawl the page, which can take days or weeks depending on how often the page is visited.',
      },
      {
        question: 'What is max-image-preview:large?',
        answer:
          'It allows search engines to show large image previews for your page, which Google recommends for pages targeting Google Discover.',
      },
      {
        question: 'What does nosnippet do?',
        answer:
          'Nosnippet prevents search engines from showing any text snippet for the page in search results, so only the title and URL appear.',
      },
      {
        question: 'What does noarchive do?',
        answer:
          'Noarchive stops search engines from offering a cached copy of your page, which is useful for time-sensitive or frequently changing content.',
      },
      {
        question: 'What does noimageindex do?',
        answer:
          'Noimageindex tells search engines not to index the images on a page, while the page itself can still appear in normal search results.',
      },
      {
        question: 'Can I noindex a PDF file?',
        answer:
          'Yes. PDFs have no HTML head, so use the X-Robots-Tag HTTP header instead — the tool generates the exact header block for you.',
      },
      {
        question: 'Should I noindex thank-you and checkout pages?',
        answer:
          'Yes. Thank-you pages, checkout steps, internal search results and member areas usually add no search value and are commonly set to noindex.',
      },
      {
        question: 'Can I combine noindex and nofollow on the same page?',
        answer:
          'Yes. They control different things — indexing and link following — and are often used together on private or utility pages.',
      },
      {
        question: 'What is a Cloudflare _headers file?',
        answer:
          'It is a file in your site public folder that maps URL paths to HTTP response headers. The tool outputs a ready-to-paste block for any path you choose.',
      },
      {
        question: 'Do robots meta tags work on Bing and other search engines?',
        answer:
          'Yes. Most major search engines respect standard robots directives, though a few support only a subset — stick to common directives for the widest coverage.',
      },
      {
        question: 'Is my configuration uploaded anywhere?',
        answer:
          'No. The Robots Meta Tag Generator runs entirely in your browser, so your settings never leave your device.',
      },
      {
        question: 'What happens if I pick conflicting directives?',
        answer:
          'The tool prevents conflicting combinations automatically — for example, it disables the snippet and image preview sliders when nosnippet or noimageindex is active.',
      },
      {
        question: 'Should I use noindex or just delete the page?',
        answer:
          'If a page should be gone for good, delete it and let it return a 404 or 410 status. Use noindex when the page must stay live but should not appear in search results.',
      },
    ],
  },
};
