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
      'seo friendly url generator',
      'blog title to slug converter',
      'permalink slug maker',
      'stop word remover for urls',
      'accent to ascii slug converter',
      'bulk url slug creator',
    ],
    seo: {
      title: 'URL Slug Generator – SEO Permalink Maker | UtilityFlow',
      description:
        'Turn article headlines into lowercase SEO slugs in bulk — with accent transliteration, stop-word removal and word-boundary truncation, all in your browser.',
      primaryKeyword: 'url slug generator',
      secondaryKeywords: [
        'seo friendly url generator',
        'batch headline to slug',
        'stop word slug cleaner',
        'permalink slug maker',
        'accent to ascii slug converter',
      ],
      longTailKeywords: [
        'convert blog titles to clean seo url slugs in bulk',
        'transliterate accented characters into ascii url slugs',
        'truncate long url slugs on clean word boundaries',
        'batch convert blog titles to seo friendly url slugs',
        'generate clean permalinks with stop words removed online',
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
          'The slug is the readable last part of a URL, like "best-cafe-tools", while the permalink is the complete URL including the domain and any folders.',
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
      'check keyword density online',
      'content keyword frequency tool',
      'seo text analyzer free',
      'target keyword density calculator',
      'bigram trigram analyzer',
      'overused word checker',
    ],
    seo: {
      title: 'Keyword Density Checker – Content Audit | UtilityFlow',
      description:
        'Paste an article draft or HTML to check word count, reading time, target keyword density and top 1-, 2- and 3-word phrases — privately, right in your browser.',
      primaryKeyword: 'keyword density checker',
      secondaryKeywords: [
        'seo copy frequency analyzer',
        '2 word 3 word ngram counter',
        'check keyword repetition online',
        'target keyword density calculator',
        'content word frequency tool',
      ],
      longTailKeywords: [
        'analyze pasted html content for keyword density without upload',
        'find overused 2 word and 3 word phrases in blog draft',
        'check target keyword frequency cleanly in browser',
        'how to check keyword density of a blog draft online',
        'find overused words and phrases in article text free',
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
          'Keyword density is how often a word or phrase appears as a percentage of the total words in a text. A phrase used 5 times in 500 words has a density of 1%.',
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
      'canonical url generator',
      'hreflang tag generator',
      'multilingual seo tags',
      '301 redirect rules generator',
      'apache htaccess redirect builder',
      'nginx redirect generator',
    ],
    seo: {
      title: 'Canonical, Hreflang & 301 Redirect Generator | UtilityFlow',
      description:
        'Generate hreflang and canonical tags for multilingual pages, plus 301 redirect rules for Cloudflare Pages, Apache and Nginx — ready to copy and deploy.',
      primaryKeyword: 'hreflang generator',
      secondaryKeywords: [
        'canonical link tag generator',
        '301 redirect config builder',
        'cloudflare pages redirects generator',
        'canonical url generator',
        'apache htaccess redirect builder',
        'nginx redirect generator',
      ],
      longTailKeywords: [
        'generate hreflang html tags and xml sitemap xhtml links',
        'convert old url list into cloudflare pages _redirects 301 rules',
        'build apache htaccess and nginx 301 redirects online',
        'generate x-default hreflang tag for international pages',
        'create 301 redirect rules from old to new url list',
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
      'seo audit tool free',
      'meta description length checker',
      'title tag length checker',
      'html seo tag checker',
      'json-ld checker',
      'open graph checker',
    ],
    seo: {
      title: 'On-Page SEO Checker – HTML Audit Tool | UtilityFlow',
      description:
        'Paste any page HTML source to audit its title, meta description, headings, canonical, image alt text, links and JSON-LD — instantly, free, in your browser.',
      primaryKeyword: 'on page seo checker',
      secondaryKeywords: [
        'html source seo audit',
        'h1 h2 heading structure checker',
        'check missing image alt attributes',
        'meta description length checker',
        'title tag length checker',
        'json-ld checker',
      ],
      longTailKeywords: [
        'audit pasted html source for on page seo tags offline',
        'check heading outline h1 to h4 and canonical link in html',
        'client side seo dom inspector without external crawling',
        'paste html source to check title meta description headings',
        'free on page seo audit for static html export',
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
      'noindex tag generator',
      'meta robots tag maker',
      'robots header generator',
      'cloudflare _headers generator',
      'nosnippet meta tag',
      'max-snippet generator',
    ],
    seo: {
      title: 'Robots Meta Tag & X-Robots-Tag Builder | UtilityFlow',
      description:
        'Create HTML robots meta tags and X-Robots-Tag headers with noindex, nofollow, max-snippet and max-image-preview — plus Cloudflare _headers output for any path.',
      primaryKeyword: 'robots meta tag builder',
      secondaryKeywords: [
        'x-robots-tag header generator',
        'noindex meta tag maker',
        'google max-image-preview large',
        'noindex tag generator',
        'cloudflare _headers generator',
        'meta robots tag maker',
      ],
      longTailKeywords: [
        'generate x-robots-tag noindex header for pdf files on cloudflare pages',
        'create meta robots tag with max-snippet and max-image-preview large',
        'difference between robots.txt and meta robots noindex',
        'build robots meta tag with noindex nofollow and max-snippet',
        'generate x-robots-tag header for cloudflare pages headers file',
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
    relatedToolSlugs: [
      'robots-txt-generator',
      'meta-tag-generator',
      'on-page-seo-checker',
      'canonical-hreflang-generator',
    ],
    component: lazy(() => import('../../../tools/seo/RobotsMetaTagGeneratorTool')),
  },
];
