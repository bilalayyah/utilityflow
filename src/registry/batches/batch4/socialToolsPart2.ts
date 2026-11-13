import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const SOCIAL_TOOLS_PART_2: ToolDefinition[] = [
  {
    id: 'youtube-timestamp-generator',
    slug: 'youtube-timestamp-generator',
    name: 'YouTube Timestamp & Chapter Generator',
    shortDescription:
      'Build sorted YouTube video chapter descriptions validated against YouTube specs and generate clickable ?t= jump links.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'youtube timestamp generator',
      'youtube chapter maker',
      'youtube time link generator',
      'video chapters formatter',
    ],
    seo: {
      title: 'YouTube Timestamp & Chapter Generator – Jump Links | UtilityFlow',
      description:
        'Create sorted YouTube description chapters validated for 00:00 start, 3+ chapters, and 10-second spacing, plus instant clickable ?t= share links.',
      primaryKeyword: 'youtube timestamp generator',
      secondaryKeywords: [
        'youtube chapters formatter',
        'youtube timestamp url builder',
        'video chapter checklist',
      ],
      longTailKeywords: [
        'generate youtube video chapters description block online',
        'create clickable youtube timestamp jump links for chapters',
        'validate youtube chapter 10 second minimum rule',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Assemble clean, chronologically sorted YouTube chapter blocks for your video descriptions—checked automatically against YouTube’s official chapter rules—and generate clickable `?t=` jump links for comments, newsletters, or show notes.',
    instructions: [
      {
        title: 'Paste your YouTube URL (optional)',
        description:
          'Enter any youtube.com/watch, youtu.be, or Shorts link to auto-generate clickable deep links per chapter.',
      },
      {
        title: 'Add and label chapters',
        description:
          'Enter MM:SS or HH:MM:SS timestamps and chapter titles; click Sort Chronologically anytime if rows get out of order.',
      },
      {
        title: 'Verify chapter spec check and copy',
        description:
          'Confirm there are no YouTube specification warnings (00:00 start, 3+ chapters, 10s minimum spacing) and copy the description block.',
      },
    ],
    examples: [
      {
        title: 'Formatting a 4-chapter tutorial description',
        input: '00:00 Intro · 01:15 Setup · 04:40 Demo · 08:20 Summary',
        output: '00:00 Intro\n01:15 Setup\n04:40 Demo\n08:20 Summary (+ https://youtu.be/...?t=75)',
        explanation: 'Converts 01:15 directly into ?t=75s for one-click sharing.',
      },
    ],
    benefits: [
      'Automatically validates YouTube’s 00:00 start, 3-chapter minimum, and 10-second duration rules',
      'Switches seamlessly to HH:MM:SS padding when videos exceed 60 minutes',
      'Extracts video IDs from standard, shortened, live, embed, and Shorts URLs',
      'Generates ready-to-share ?t= deep links for show notes and pinned comments',
    ],
    useCases: [
      'Adding searchable chapter scrubbing bars to YouTube tutorials and podcasts',
      'Creating clickable podcast episode show-note timestamps',
      'Sharing exact tutorial steps in documentation, Slack, or Discord',
      'Auditing long-form livestream chapter lists for formatting typos',
    ],
    faqs: [
      {
        question: 'Why aren’t my YouTube video chapters showing up on the progress bar?',
        answer:
          'YouTube requires the first timestamp to be exactly 00:00, at least 3 timestamps listed in ascending chronological order, and each chapter to last at least 10 seconds.',
      },
      {
        question: 'Should timestamps exceed 60 minutes as MM:SS or HH:MM:SS?',
        answer:
          'Once any chapter reaches 60 minutes or longer, this tool automatically formats every timestamp consistently in HH:MM:SS notation.',
      },
      {
        question: 'Does this connect to the YouTube Data API?',
        answer:
          'No. Everything parses and formats locally in your browser without requiring Google account OAuth or API keys.',
      },
    ],
    relatedToolSlugs: [
      'social-thumbnail-previewer',
      'time-duration-calculator',
      'utm-link-builder',
      'social-character-limit-checker',
    ],
    component: lazy(() => import('../../../tools/social/YoutubeTimestampGeneratorTool')),
  },
  {
    id: 'social-thumbnail-previewer',
    slug: 'social-thumbnail-previewer',
    name: 'YouTube & Social Thumbnail Previewer',
    shortDescription:
      'Preview local thumbnail images alongside titles across desktop feed and sidebar layouts with 16:9 and 2 MB spec checks.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'youtube thumbnail previewer',
      'thumbnail tester',
      'video title truncation preview',
      '16:9 thumbnail checker',
    ],
    seo: {
      title: 'YouTube & Social Thumbnail Previewer – Feed & Spec Check | UtilityFlow',
      description:
        'Test how your local thumbnail image, title truncation, and timestamp badge overlap appear in Light and Dark desktop feeds without uploading files to any server.',
      primaryKeyword: 'youtube thumbnail previewer',
      secondaryKeywords: [
        'thumbnail feed preview',
        'youtube title length checker',
        'thumbnail safe zone tool',
      ],
      longTailKeywords: [
        'preview youtube thumbnail in dark mode feed before publishing',
        'check thumbnail bottom right timestamp badge overlap',
        'private client side thumbnail 1280x720 checker',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Test your unreleased video thumbnails and titles in realistic Light and Dark home-feed and compact sidebar layouts—checking 1280×720 HD dimensions, 16:9 aspect ratio, 2 MB file-size limits, and bottom-right timestamp overlap locally.',
    instructions: [
      {
        title: 'Load a local thumbnail image',
        description:
          'Pick a PNG, JPG, or WebP file from disk; it stays strictly in local browser memory via Object URLs.',
      },
      {
        title: 'Enter title, channel, and duration',
        description:
          'Type your candidate title and video length to check two-line feed truncation and corner badge coverage.',
      },
      {
        title: 'Toggle Dark Mode & Safe Zone',
        description:
          'Switch between Light and Dark feeds and toggle the amber timestamp corner zone overlay before exporting.',
      },
    ],
    examples: [
      {
        title: 'Checking bottom-right text placement',
        input: '1280×720 PNG · Duration: 12:48 · Safe Zone: Enabled',
        output: 'Highlights the bottom-right corner where the 12:48 duration badge covers artwork.',
        explanation: 'Prevents important thumbnail faces or numbers from sitting behind player time overlays.',
      },
    ],
    benefits: [
      'Reads real natural pixel dimensions, aspect ratio, and KB/MB file size immediately',
      'Previews both large desktop feed cards and small recommended sidebar thumbnails',
      'Includes Light/Dark feed toggle to test high-contrast legibility',
      'Zero server upload—ideal for unreleased sponsor or product launch graphics',
    ],
    useCases: [
      'Catching unreadable small text in compact sidebar thumbnails before publishing',
      'Ensuring important graphics stay clear of the bottom-right duration overlay',
      'Verifying thumbnails meet YouTube’s 1280×720, 16:9, and <2 MB requirements',
      'Comparing title phrasing so critical keywords appear before line-clamp truncation',
    ],
    faqs: [
      {
        question: 'Are my uploaded thumbnail images sent to a remote server?',
        answer:
          'Never. Images load exclusively inside your browser tab via URL.createObjectURL() and are revoked automatically when replaced or closed.',
      },
      {
        question: 'What dimensions and file size does YouTube recommend for thumbnails?',
        answer:
          'YouTube recommends 1280×720 pixels (minimum width 640px) in a 16:9 aspect ratio, saved as JPG, PNG, or WebP under 2 MB.',
      },
      {
        question: 'Why does sidebar preview matter so much?',
        answer:
          'Suggested watch-page thumbnails appear much smaller (~168px wide), so verifying readability at compact scale prevents cluttered designs.',
      },
    ],
    relatedToolSlugs: [
      'youtube-timestamp-generator',
      'social-character-limit-checker',
      'caption-template-builder',
      'qr-code-generator',
    ],
    component: lazy(() => import('../../../tools/social/SocialThumbnailPreviewerTool')),
  },
  {
    id: 'hashtag-formatter',
    slug: 'hashtag-formatter',
    name: 'Hashtag Formatter & Group Manager',
    shortDescription:
      'Clean messy keywords, deduplicate hashtags, format accessible #CamelCase tags, and check platform limits.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'hashtag formatter',
      'hashtag cleaner',
      'camelcase hashtag converter',
      'deduplicate hashtags',
    ],
    seo: {
      title: 'Hashtag Formatter – CamelCase, Deduplicate & Tag Counter | UtilityFlow',
      description:
        'Normalize keyword lists into clean #CamelCase or lowercase hashtags, remove duplicates, strip invalid punctuation, and verify Instagram’s 30-tag cap.',
      primaryKeyword: 'hashtag formatter',
      secondaryKeywords: [
        'camelcase hashtag generator',
        'duplicate hashtag remover',
        'instagram hashtag counter',
      ],
      longTailKeywords: [
        'convert keyword list into accessible camelcase hashtags',
        'remove duplicate hashtags and invalid punctuation online',
        'format hashtag groups with caption fold dot separators',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Turn comma-separated keywords or messy tag dumps into deduplicated, punctuation-clean hashtags formatted in screen-reader-friendly `#CamelCase` or lowercase, ready for single-line, vertical, or dot-separated caption blocks.',
    instructions: [
      {
        title: 'Paste keywords or rough hashtags',
        description:
          'Enter tags separated by commas, spaces, semicolons, or newlines—with or without leading # symbols.',
      },
      {
        title: 'Pick case and output layout',
        description:
          'Choose PascalCase (#CamelCase) for accessibility, lowercase, or Preserve Case, plus inline or line-separated output.',
      },
      {
        title: 'Check count and copy',
        description:
          'Verify duplicates removed and total tag count against Instagram’s 30-tag cap, then click Copy Hashtags.',
      },
    ],
    examples: [
      {
        title: 'Converting plain phrases into accessible CamelCase hashtags',
        input: 'content marketing, productivity hacks, Content Marketing',
        output: '#ContentMarketing #ProductivityHacks (1 duplicate removed)',
        explanation: 'Capitalizing each word boundary helps screen readers pronounce multi-word tags properly.',
      },
    ],
    benefits: [
      'Supports accessible #PascalCase formatting recommended by digital accessibility guides',
      'Deduplicates identical tags case-insensitively automatically',
      'Strips unsupported punctuation (hyphens, periods, commas) that break clickable tags',
      'Tracks exact tag count against platform caps',
    ],
    useCases: [
      'Cleaning campaign hashtag banks shared across marketing spreadsheets',
      'Converting multi-word SEO keywords into clickable social hashtags',
      'Updating legacy lowercase tag lists to accessible CamelCase formatting',
      'Generating tidy dot-separated hashtag footers for Instagram posts',
    ],
    faqs: [
      {
        question: 'Why is CamelCase / PascalCase recommended for hashtags?',
        answer:
          'Screen readers split capitalized word boundaries (e.g. #SocialMediaTools as "Social Media Tools") instead of attempting to pronounce a long lowercase string as one garbled word.',
      },
      {
        question: 'Why are hyphens and periods removed inside tags?',
        answer:
          'Most social platforms terminate a clickable hashtag at the first space, hyphen, or punctuation mark, so removing hyphens keeps the full tag intact.',
      },
      {
        question: 'Does this use AI or guess banned hashtags?',
        answer:
          'No. It deterministically cleans, formats, and deduplicates the exact tags you supply.',
      },
    ],
    relatedToolSlugs: [
      'bio-line-break-formatter',
      'social-character-limit-checker',
      'caption-template-builder',
      'remove-duplicate-lines',
    ],
    component: lazy(() => import('../../../tools/social/HashtagFormatterTool')),
  },
  {
    id: 'caption-template-builder',
    slug: 'caption-template-builder',
    name: 'Caption & Hook Template Builder',
    shortDescription:
      'Assemble structured social captions using deterministic PAS, Tutorial, Before-After-Bridge, and Checklist templates.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'caption template builder',
      'social media post templates',
      'hook framework builder',
      'linkedin post formatter',
    ],
    seo: {
      title: 'Caption & Hook Template Builder – Structured Post Formats | UtilityFlow',
      description:
        'Assemble clean social media captions using deterministic Problem-Agitate-Solution, 3-Step Tutorial, Before-After-Bridge, and Checklist frameworks in your browser.',
      primaryKeyword: 'caption template builder',
      secondaryKeywords: [
        'social media caption frameworks',
        'linkedin post structure builder',
        'pas copywriting template',
      ],
      longTailKeywords: [
        'build structured linkedin and instagram captions without ai',
        'problem agitate solution social post template builder',
        'check x and instagram character fit while drafting captions',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Compose consistent, scannable social posts faster using deterministic copywriting templates—Problem–Agitate–Solution (PAS), Actionable Breakdown, Before–After–Bridge, Audit Checklist, and Myth vs. Reality—strictly from your own inputs without fabricated AI copy.',
    instructions: [
      {
        title: 'Choose a post structure',
        description:
          'Pick from the five deterministic templates along the top bar to fit your goal.',
      },
      {
        title: 'Fill your own hook, points, and CTA',
        description:
          'Enter your authentic opening hook, problem context, bullet takeaways (one per line), call-to-action, and hashtags.',
      },
      {
        title: 'Copy and verify length',
        description:
          'Preview the live formatted post, confirm character/word fit for X or Instagram/LinkedIn, and click Copy Caption.',
      },
    ],
    examples: [
      {
        title: 'Assembling a 3-step actionable LinkedIn post',
        input: 'Hook + Context + 3 bullet points + CTA',
        output: 'Clean numbered post with crisp paragraph spacing and footer hashtags.',
        explanation: 'Deterministically structures your exact words without altering voice or inventing claims.',
      },
    ],
    benefits: [
      '100% transparent deterministic assembly—no generic AI buzzwords or hallucinated facts',
      'Enforces clean visual hierarchy between hook, takeaways, and call-to-action',
      'Live character & word counter flags X 280-char and IG/LinkedIn limits',
      'Lets creators test five classic frameworks on the same notes in one click',
    ],
    useCases: [
      'Drafting consistent product launch announcements for social channels',
      'Turning rough engineering or marketing bullet notes into readable posts',
      'Formatting educational carousels or weekly tip checklists',
      'Separating opening hooks cleanly from value lists before scheduling',
    ],
    faqs: [
      {
        question: 'Does this tool use an AI language model to rewrite my words?',
        answer:
          'No. It is a purely deterministic structured template builder running in your browser—every sentence in the preview comes strictly from your own inputs.',
      },
      {
        question: 'How do I add more steps or checklist items?',
        answer:
          'Simply press Enter to add new lines inside the Key Takeaways textarea; each non-empty line automatically formats into a numbered item, bullet, or checkbox.',
      },
      {
        question: 'Can I preserve blank lines when pasting into Instagram afterward?',
        answer:
          'Yes. If an app still collapses spacing on mobile, drop the copied caption into our Instagram & Bio Line Break Formatter for invisible spacers.',
      },
    ],
    relatedToolSlugs: [
      'social-character-limit-checker',
      'bio-line-break-formatter',
      'hashtag-formatter',
      'utm-link-builder',
    ],
    component: lazy(() => import('../../../tools/social/CaptionTemplateBuilderTool')),
  },
  {
    id: 'social-handle-formatter',
    slug: 'social-handle-formatter',
    name: 'Social Handle & Username Formatter',
    shortDescription:
      'Generate consistent brand handle variations, validate platform character/syntax rules, and open direct profile check URLs.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'social handle formatter',
      'username syntax validator',
      'brand handle generator',
      'social username rules',
    ],
    seo: {
      title: 'Social Handle Formatter – Cross-Platform Username Rules | UtilityFlow',
      description:
        'Generate clean handle variations from a brand name, validate X, Instagram, TikTok, YouTube, Threads, and GitHub username rules, and open direct check URLs.',
      primaryKeyword: 'social handle formatter',
      secondaryKeywords: [
        'social media username rules',
        'brand handle variation generator',
        'youtube handle character rules',
      ],
      longTailKeywords: [
        'check social media username character length and allowed symbols',
        'consistent brand handle suggestions across x instagram tiktok',
        'validate handle format for github youtube and threads',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Turn any brand, project, or creator name into clean cross-platform handle candidates, validate every candidate against official character limits and punctuation rules for six networks, and jump straight to live profile URLs to verify availability.',
    instructions: [
      {
        title: 'Enter brand or creator name',
        description:
          'Type your brand or display name (e.g. Utility Hub) to populate clean consistent handle candidates.',
      },
      {
        title: 'Test variations or edit directly',
        description:
          'Click any variation pill or customize Active Handle to test prefixes/suffixes like get, use, hq, or studio.',
      },
      {
        title: 'Review syntax compliance and open URLs',
        description:
          'Check Valid format status across X, Instagram, TikTok, YouTube, Threads, and GitHub, then click Check URL to inspect live claim status.',
      },
    ],
    examples: [
      {
        title: 'Comparing hyphenated vs underscored handles across platforms',
        input: 'Handle: utility-hub',
        output: 'Valid on GitHub & YouTube @handle · Invalid on X & Instagram (hyphens disallowed)',
        explanation: 'Prevents choosing a brand handle that cannot match identically on major social networks.',
      },
    ],
    benefits: [
      'Catches platform mismatches early (like hyphens failing on X/Instagram vs allowed on GitHub/YouTube)',
      'Enforces exact character bounds such as X’s strict 15-character maximum',
      'Never fakes live availability badges offline—provides direct clickable profile links instead',
      'Includes one-click @handle clipboard copying',
    ],
    useCases: [
      'Naming a new startup, podcast, newsletter, or open-source project consistently',
      'Finding backup prefixes/suffixes when an exact single-word handle is taken',
      'Checking whether a proposed 18-character handle exceeds X’s 15-character cap',
      'Preparing a launch checklist of all official social profile URLs',
    ],
    faqs: [
      {
        question: 'Why doesn’t this tool show live green "Available" badges automatically?',
        answer:
          'Major social networks block unauthenticated browser CORS checks and rate-limit automated availability scraping. Rather than displaying unreliable or fabricated guesses, this tool validates official platform syntax rules locally and gives direct URL links to check each platform accurately.',
      },
      {
        question: 'Which handle characters work across almost every major network?',
        answer:
          'Lowercase alphanumeric characters (a–z, 0–9) and underscores (_) within 4–15 characters work simultaneously across X, Instagram, TikTok, YouTube, and Threads.',
      },
      {
        question: 'Why does GitHub reject underscores in handles?',
        answer:
          'GitHub usernames only allow alphanumeric characters and single non-leading/non-trailing hyphens, whereas X and Instagram disallow hyphens.',
      },
    ],
    relatedToolSlugs: [
      'qr-code-generator',
      'utm-link-builder',
      'text-to-slug',
      'bio-line-break-formatter',
    ],
    component: lazy(() => import('../../../tools/social/SocialHandleFormatterTool')),
  },
];
