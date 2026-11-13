import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const SOCIAL_TOOLS_PART_1: ToolDefinition[] = [
  {
    id: 'qr-code-generator',
    slug: 'qr-code-generator',
    name: 'QR Code Generator',
    shortDescription:
      'Generate custom scannable QR codes for URLs, plain text, Wi-Fi logins, emails, or phone numbers with PNG and SVG export.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'qr code generator',
      'free qr code maker',
      'wifi qr code',
      'svg qr code generator',
    ],
    seo: {
      title: 'QR Code Generator – Download High-Res PNG & SVG | UtilityFlow',
      description:
        'Create static, scannable QR codes for URLs, Wi-Fi networks, plain text, emails, and phone numbers locally in your browser with PNG and vector SVG export.',
      primaryKeyword: 'qr code generator',
      secondaryKeywords: [
        'wifi qr code generator',
        'svg qr code maker',
        'custom color qr code',
      ],
      longTailKeywords: [
        'generate static qr code without expiration or tracking',
        'create scannable wifi qr code in browser',
        'download vector svg qr code free',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Encode website URLs, Wi-Fi credentials, plain text, email links, or phone numbers into crisp ISO-standard QR codes directly in your browser—with zero expiration limits, zero redirect tracking, and instant PNG or vector SVG downloads.',
    instructions: [
      {
        title: 'Choose payload format',
        description:
          'Select Website URL, Plain Text, Wi-Fi Network, Email Link, or Phone Number at the top.',
      },
      {
        title: 'Customize appearance and error correction',
        description:
          'Adjust pixel size, quiet-zone margin, foreground/background hex colors, and error correction level (L–H).',
      },
      {
        title: 'Download PNG or vector SVG',
        description:
          'Export a crisp PNG for social graphics or copy/download the scalable SVG file for print materials.',
      },
    ],
    examples: [
      {
        title: 'Guest Wi-Fi QR sticker payload',
        input: 'SSID: GuestWiFi · Security: WPA',
        output: 'WIFI:T:WPA;S:GuestWiFi;P:...;H:false;;',
        explanation: 'iOS and Android cameras automatically recognize standard WIFI QR payloads to join without typing.',
      },
    ],
    benefits: [
      'Static QR codes never expire and never route users through third-party tracking redirects',
      'Generates lossless vector SVG alongside high-resolution PNG images',
      'Supports WPA/WEP/open Wi-Fi QR formatting cleanly with special-character escaping',
      'Keeps private URLs and Wi-Fi passwords strictly in browser memory',
    ],
    useCases: [
      'Linking print flyers, posters, or business cards to UTM-tagged landing pages',
      'Creating scannable guest Wi-Fi QR signs for offices, studios, or events',
      'Adding instant contact or portfolio links to slide decks and packaging',
      'Exporting crisp SVG QR codes for high-DPI print design tools',
    ],
    faqs: [
      {
        question: 'Do QR codes created here expire after a trial period?',
        answer:
          'No. These are static QR codes whose data is encoded directly inside the black-and-white pattern, so they work permanently with no server dependency or scan limits.',
      },
      {
        question: 'Which error correction level should I choose?',
        answer:
          'Level M (15%) balances compact density with reliability for clean digital screens or flyers. Choose Q (25%) or H (30%) for outdoor stickers or rougher print surfaces.',
      },
      {
        question: 'Why should foreground contrast stay high?',
        answer:
          'Phone cameras rely on strong luminance contrast between dark modules and the light background; keep dark foreground colors on light backgrounds with at least a 2-module quiet margin.',
      },
    ],
    relatedToolSlugs: [
      'utm-link-builder',
      'url-encoder-decoder',
      'social-handle-formatter',
      'color-converter',
    ],
    component: lazy(() => import('../../../tools/social/QrCodeGeneratorTool')),
  },
  {
    id: 'utm-link-builder',
    slug: 'utm-link-builder',
    name: 'UTM Link Builder',
    shortDescription:
      'Build clean campaign tracking URLs with utm_source, utm_medium, utm_campaign, utm_term, and utm_content parameters.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'utm link builder',
      'campaign url builder',
      'utm generator',
      'google analytics utm',
    ],
    seo: {
      title: 'UTM Link Builder – Campaign Tracking URL Generator | UtilityFlow',
      description:
        'Create consistent Google Analytics UTM campaign URLs with channel presets, automatic lowercase normalization, and parameter breakdown without breaking existing hashes.',
      primaryKeyword: 'utm link builder',
      secondaryKeywords: [
        'campaign url builder',
        'utm tag generator',
        'social media tracking url',
      ],
      longTailKeywords: [
        'build consistent lowercase utm tracking links online',
        'utm generator preserving existing query strings and hashes',
        'instagram bio and newsletter utm link templates',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Generate clean, standardized campaign tracking URLs for social bios, creator sponsorships, paid ads, and newsletters while preserving existing query strings and URL fragments (`#section`).',
    instructions: [
      {
        title: 'Enter your destination URL',
        description:
          'Paste the target landing page URL or select a channel quick preset to pre-populate standard tags.',
      },
      {
        title: 'Fill UTM parameters',
        description:
          'Specify utm_source, utm_medium, utm_campaign, and optional utm_content or utm_term values.',
      },
      {
        title: 'Copy and verify breakdown',
        description:
          'Inspect the live parameter table below to avoid typos or mixed casing before copying the final link.',
      },
    ],
    examples: [
      {
        title: 'Instagram link-in-bio campaign link',
        input: 'URL: https://utilityflow.online/tools/ · Source: instagram · Medium: social · Campaign: spring_launch',
        output: 'https://utilityflow.online/tools/?utm_source=instagram&utm_medium=social&utm_campaign=spring_launch&utm_content=bio_button',
        explanation: 'Uses browser URL parsing so existing parameters or #anchors stay intact.',
      },
    ],
    benefits: [
      'One-click channel presets prevent inconsistent naming like IG vs instagram',
      'Optional lowercase and underscore normalization avoids split GA4 reports',
      'Preserves pre-existing query parameters and anchor #hashes properly',
      'Displays a decoded parameter review table before you publish',
    ],
    useCases: [
      'Tracking clicks from Instagram, LinkedIn, X, and TikTok profile bios',
      'Measuring individual CTA buttons inside weekly email newsletters',
      'Tagging sponsor links inside YouTube video descriptions',
      'Generating clean UTM links to feed directly into the QR Code Generator',
    ],
    faqs: [
      {
        question: 'Why does lowercase normalization matter for UTM parameters?',
        answer:
          'Analytics platforms such as Google Analytics 4 treat utm_source=Instagram and utm_source=instagram as separate rows, splitting campaign attribution.',
      },
      {
        question: 'Should I use UTM tags on internal website navigation links?',
        answer:
          'No. UTM parameters are designed exclusively for external inbound campaigns; using them on internal links overwrites original referral attribution mid-session.',
      },
      {
        question: 'Can I turn a generated UTM link into a QR code?',
        answer:
          'Yes. Copy your finished UTM URL and paste it straight into our QR Code Generator for measurable offline-to-online print campaigns.',
      },
    ],
    relatedToolSlugs: [
      'qr-code-generator',
      'url-encoder-decoder',
      'social-character-limit-checker',
      'caption-template-builder',
    ],
    component: lazy(() => import('../../../tools/social/UtmLinkBuilderTool')),
  },
  {
    id: 'social-character-limit-checker',
    slug: 'social-character-limit-checker',
    name: 'Social Character Limit Checker',
    shortDescription:
      'Measure copy length across X, Instagram, LinkedIn, TikTok, Threads, Bluesky, and YouTube with feed fold previews.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'social character limit checker',
      'twitter character counter',
      'instagram caption limit',
      'linkedin post length checker',
    ],
    seo: {
      title: 'Social Character Limit Checker – X, IG, LinkedIn & Fold Preview | UtilityFlow',
      description:
        'Check post character limits and "See More" feed truncation folds across X (Twitter), Instagram, LinkedIn, TikTok, Threads, Bluesky, and YouTube simultaneously.',
      primaryKeyword: 'social character limit checker',
      secondaryKeywords: [
        'x twitter post counter',
        'instagram caption length checker',
        'linkedin see more fold preview',
      ],
      longTailKeywords: [
        'check character limit and fold truncation across social platforms',
        'twitter 280 character counter with 23 char url weighting',
        'instagram bio 150 character and caption counter',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Write once and instantly verify hard character caps, X `t.co` 23-character link weighting, hashtag counts, and above-the-fold truncation previews across 10 major social surfaces.',
    instructions: [
      {
        title: 'Write or paste your social draft',
        description:
          'Type captions, bios, or video descriptions into the editor box.',
      },
      {
        title: 'Review platform meter cards',
        description:
          'See green/amber/red utilization bars for X, Instagram, LinkedIn, TikTok, Threads, Bluesky, and YouTube.',
      },
      {
        title: 'Check the "See More" fold preview',
        description:
          'Pick a target platform in the dropdown below to inspect where feed truncation cuts off your opening hook.',
      },
    ],
    examples: [
      {
        title: 'Testing a link post on X vs LinkedIn',
        input: '140-char hook + https://example.com/very-long-campaign-url',
        output: 'X counts the URL as 23 chars; Instagram & LinkedIn count full URL length.',
        explanation: 'Reflects X’s automatic t.co link wrapping behavior accurately.',
      },
    ],
    benefits: [
      'Accounts for multi-code-point emojis accurately using Array.from character counting',
      'Models X’s 23-character URL length normalization automatically',
      'Shows both hard maximum caps and feed truncation ("See more") thresholds',
      'Counts embedded hashtags, @mentions, and URLs in real time',
    ],
    useCases: [
      'Ensuring your first 125–210 characters hook readers before the feed fold',
      'Fitting creator announcements under X 280-character and Bluesky 300-character limits',
      'Editing LinkedIn and Instagram bios strictly within 150–160 character limits',
      'Checking YouTube 70-character mobile title visibility before publishing',
    ],
    faqs: [
      {
        question: 'Why does X (Twitter) count long URLs as 23 characters?',
        answer:
          'X wraps outbound links through its t.co shortener, so every http/https URL occupies 23 characters toward the 280-character post budget regardless of original URL length.',
      },
      {
        question: 'What is the "Fold" length shown on Instagram and LinkedIn cards?',
        answer:
          'Feed layouts collapse long captions after roughly 125 characters on Instagram and 210 characters on LinkedIn behind a "...more" button. Putting your core hook before the fold boosts read-through.',
      },
      {
        question: 'Does this count emojis as 1 character or 2?',
        answer:
          'Using Unicode code-point iteration, standard single emojis count as 1 character instead of inflated UTF-16 surrogate pairs.',
      },
    ],
    relatedToolSlugs: [
      'bio-line-break-formatter',
      'hashtag-formatter',
      'caption-template-builder',
      'character-counter',
    ],
    component: lazy(() => import('../../../tools/social/SocialCharacterLimitTool')),
  },
  {
    id: 'unicode-fancy-text-formatter',
    slug: 'unicode-fancy-text-formatter',
    name: 'Unicode Fancy Text Formatter',
    shortDescription:
      'Convert plain ASCII text into Unicode Bold, Italic, Monospace, Script, Small Caps, and Fullwidth styles for bios.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'fancy text generator',
      'unicode bold text',
      'instagram bio font formatter',
      'small caps generator',
    ],
    seo: {
      title: 'Unicode Fancy Text Formatter – Bold, Italic & Small Caps | UtilityFlow',
      description:
        'Convert headings or social bio snippets into Unicode Sans Bold, Italic, Monospace, Script, Fraktur, Small Caps, and Fullwidth text ready to copy and paste.',
      primaryKeyword: 'unicode fancy text formatter',
      secondaryKeywords: [
        'unicode bold text generator',
        'small caps text converter',
        'social media bio fonts',
      ],
      longTailKeywords: [
        'copy and paste unicode bold text for linkedin and instagram',
        'convert plain text to small caps and monospace unicode',
        'accessible guidance for unicode styled social text',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transform plain letters and numbers into standard Unicode Mathematical Alphanumeric Symbols, Small Caps, and Fullwidth glyphs that preserve bold or monospace styling inside plain-text social bios.',
    instructions: [
      {
        title: 'Enter short headline or bio label',
        description:
          'Type a short phrase, section header, or handle tagline into Text to Stylize.',
      },
      {
        title: 'Browse 10 Unicode styles',
        description:
          'Compare Sans-Serif Bold, Italic, Monospace, Script, Double-Struck, Small Caps, and Fullwidth previews.',
      },
      {
        title: 'Copy responsibly',
        description:
          'Click Copy on your preferred style and keep critical body copy in standard plain text for screen-reader accessibility.',
      },
    ],
    examples: [
      {
        title: 'Formatting a LinkedIn or X bio divider',
        input: 'New Toolkit 2025',
        output: '𝗡𝗲𝘄 𝗧𝗼𝗼𝗹𝗸𝗶𝘁 𝟮𝟬𝟮𝟱 (Sans-Serif Bold)',
        explanation: 'Uses official Unicode U+1D5D4–U+1D7EC mathematical bold code points.',
      },
    ],
    benefits: [
      'Renders real Unicode glyphs rather than images or platform-specific HTML',
      'Includes clear accessibility notice on screen-reader and search behavior',
      'Handles digits, punctuation, and special blackboard symbols like ℂ, ℕ, ℝ properly',
      'One-click copy for every style card',
    ],
    useCases: [
      'Highlighting section headers inside Instagram or TikTok profile bios',
      'Formatting technical handles or dates in Monospace Unicode',
      'Adding subtle Small Caps labels in plain-text newsletters or notes',
      'Styling short announcements where native Markdown bold is unsupported',
    ],
    faqs: [
      {
        question: 'Why does the tool include an accessibility warning?',
        answer:
          'Unicode mathematical symbols are intended for equations rather than prose, so assistive screen readers often read them aloud as "mathematical sans-serif bold capital A" and social search bars may not index them.',
      },
      {
        question: 'Are these actual font files?',
        answer:
          'No. They are standardized Unicode characters mapped across distinct symbol blocks, which is why they survive pasting into plain-text social fields.',
      },
      {
        question: 'Why do accented non-ASCII letters stay unchanged?',
        answer:
          'Unicode Mathematical Alphanumeric blocks only define unaccented Latin A–Z and digits 0–9, so accented characters remain untouched to preserve readability.',
      },
    ],
    relatedToolSlugs: [
      'bio-line-break-formatter',
      'social-character-limit-checker',
      'case-converter',
      'caption-template-builder',
    ],
    component: lazy(() => import('../../../tools/social/UnicodeTextFormatterTool')),
  },
  {
    id: 'bio-line-break-formatter',
    slug: 'bio-line-break-formatter',
    name: 'Instagram & Bio Line Break Formatter',
    shortDescription:
      'Preserve clean blank paragraphs in Instagram captions and bios by stripping trailing spaces and adding invisible spacers.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'instagram line break generator',
      'bio line break formatter',
      'caption spacer tool',
      'invisible line break social',
    ],
    seo: {
      title: 'Instagram & Bio Line Break Formatter – Clean Caption Breaks | UtilityFlow',
      description:
        'Keep clean paragraph spacing in Instagram, Threads, and TikTok captions or bios by cleaning trailing spaces and preserving blank lines automatically.',
      primaryKeyword: 'bio line break formatter',
      secondaryKeywords: [
        'instagram caption line breaks',
        'invisible spacer instagram bio',
        'preserve blank lines social media',
      ],
      longTailKeywords: [
        'keep paragraph spacing in instagram captions without periods',
        'fix trailing spaces breaking instagram bio line breaks',
        'copy clean formatted social caption to clipboard',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Prevent social apps from collapsing empty lines inside your captions and bios by stripping hidden trailing spaces and optionally inserting invisible Braille Blank (`⠀`) spacers across paragraph gaps.',
    instructions: [
      {
        title: 'Write or paste your caption',
        description:
          'Draft multi-paragraph copy or bio lines with empty lines wherever you want visual breathing room.',
      },
      {
        title: 'Select spacer strategy',
        description:
          'Choose Invisible Spacer (U+2800), Minimal Dot Spacer (.), or Clean Trailing Spaces Only.',
      },
      {
        title: 'Copy formatted text',
        description:
          'Click Copy Formatted Caption and verify whether your bio fits inside Instagram’s 150-character limit.',
      },
    ],
    examples: [
      {
        title: 'Cleaning trailing spaces before pasting into Instagram',
        input: 'Line 1   \\n\\nLine 2',
        output: 'Line 1\\n⠀\\nLine 2',
        explanation: 'Removes the trailing spaces after "Line 1" and inserts an invisible U+2800 spacer so the blank gap persists.',
      },
    ],
    benefits: [
      'Eliminates invisible trailing spaces that trigger social platform line-collapsing bugs',
      'Supports both invisible Unicode spacers and clean dot separators',
      'Collapses accidental double spaces inside sentences automatically',
      'Checks total length against the 150-character Instagram bio cap live',
    ],
    useCases: [
      'Formatting readable multi-paragraph Instagram and Facebook captions',
      'Structuring stacked bulleted Instagram or TikTok profile bios',
      'Cleaning copy pasted out of Notion, Google Docs, or Notes apps before publishing',
      'Separating main caption storytelling from footer calls-to-action',
    ],
    faqs: [
      {
        question: 'Why do blank lines disappear when I paste text directly into Instagram?',
        answer:
          'Mobile keyboards and text editors often leave trailing spaces at the end of sentences, which social parsers treat as formatting artifacts and collapse into a single newline.',
      },
      {
        question: 'What character is used for the Invisible Spacer mode?',
        answer:
          'It inserts U+2800 (Braille Pattern Blank) solely on otherwise empty lines so visual spacing holds without displaying awkward periods or dashes.',
      },
      {
        question: 'Does this modify text inside my sentences?',
        answer:
          'Only trailing whitespace at the end of lines is trimmed, plus optional repeated spaces inside lines when enabled.',
      },
    ],
    relatedToolSlugs: [
      'social-character-limit-checker',
      'hashtag-formatter',
      'unicode-fancy-text-formatter',
      'whitespace-remover',
    ],
    component: lazy(() => import('../../../tools/social/BioLineBreakFormatterTool')),
  },
];
