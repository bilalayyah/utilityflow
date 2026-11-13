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
      'youtube chapter timestamp maker',
      'youtube description chapters tool',
      'clickable youtube timestamp links',
      'youtube chapter validator',
      'video chapter timecode generator',
    ],
    seo: {
      title: 'YouTube Timestamp Generator – Chapter Links | UtilityFlow',
      description:
        'Create sorted YouTube chapters validated for a 00:00 start, 3+ chapters and 10-second spacing, plus clickable ?t= jump links for sharing anywhere online.',
      primaryKeyword: 'youtube timestamp generator',
      secondaryKeywords: [
        'youtube chapters formatter',
        'youtube timestamp url builder',
        'video chapter checklist',
        'youtube chapter timecode tool',
        'youtube description chapter maker',
      ],
      longTailKeywords: [
        'generate youtube video chapters description block online',
        'create clickable youtube timestamp jump links for chapters',
        'validate youtube chapter 10 second minimum rule',
        'format youtube chapters starting at 00:00 with three chapters',
        'build youtube timestamp links for video show notes',
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
        title: 'Sort and check the chapter rules',
        description:
          'Sort the list chronologically and review the spec check for the 00:00 start, at least 3 chapters, and 10-second minimum spacing.',
      },
      {
        title: 'Fix any warnings before copying',
        description:
          'If a warning appears, adjust the offending timestamp or title so every chapter passes YouTube’s rules before you export.',
      },
      {
        title: 'Copy the description block and links',
        description:
          'Copy the formatted chapter block for your video description, and copy individual ?t= links for comments, show notes, or newsletters.',
      },
      {
        title: 'Tip: test a link before publishing',
        description:
          'Open one generated ?t= link in a new tab to confirm it jumps to the right moment, especially after editing timestamps late.',
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
      {
        question: 'Is the YouTube Timestamp Generator free to use?',
        answer:
          'Yes, it is free to use in your browser with no sign-up, and nothing is uploaded to a server.',
      },
      {
        question: 'What is the minimum number of chapters YouTube requires?',
        answer:
          'YouTube needs at least 3 chapters in the description before it shows chapter markers on the progress bar.',
      },
      {
        question: 'Why must the first YouTube chapter start at 00:00?',
        answer:
          'YouTube uses the first timestamp to anchor the chapter system, so a description that starts later will not generate chapters at all.',
      },
      {
        question: 'What happens if two chapters are less than 10 seconds apart?',
        answer:
          'YouTube ignores chapters shorter than 10 seconds, so this tool flags the gap and you should move the later timestamp forward.',
      },
      {
        question: 'Can I use the YouTube Timestamp Generator for Shorts?',
        answer:
          'Yes, you can paste a Shorts link and the tool will still generate ?t= jump links, though chapters themselves are mainly useful for longer videos.',
      },
      {
        question: 'How do the ?t= jump links work?',
        answer:
          'Each link appends the chapter start time in seconds to the video URL, so clicking it opens the video at that exact moment.',
      },
      {
        question: 'What YouTube URL formats does the timestamp generator accept?',
        answer:
          'It accepts standard youtube.com/watch links, shortened youtu.be links, live links, embed links, and Shorts links.',
      },
      {
        question: 'Do chapters have to be in chronological order?',
        answer:
          'Yes, YouTube requires ascending order, and this tool can sort your rows chronologically with one click if they get mixed up.',
      },
      {
        question: 'Can I add chapters to a video I did not upload?',
        answer:
          'You can generate timestamp links for any public video to share exact moments, but chapters only appear when the video owner adds them to the description.',
      },
      {
        question: 'How many chapters can I add with this tool?',
        answer:
          'There is no fixed cap in the tool, but very long chapter lists become hard to read, so keep them focused on real sections of the video.',
      },
      {
        question: 'Do I need to include chapter titles, or are times enough?',
        answer:
          'YouTube needs a title after each timestamp, so add a short descriptive label for every chapter you list.',
      },
      {
        question: 'Can I use these timestamps in a podcast episode description?',
        answer:
          'Yes, the same 00:00 format works in podcast show notes and episode descriptions, and the ?t= links are handy for listeners.',
      },
      {
        question: 'Why does the tool switch all timestamps to HH:MM:SS for long videos?',
        answer:
          'Mixed MM:SS and HH:MM:SS formats confuse viewers and parsers, so the tool keeps every timestamp in one consistent format.',
      },
      {
        question: 'Is my video URL or chapter list uploaded anywhere?',
        answer:
          'No, all parsing and formatting happens locally in your browser, and your URLs and chapter titles never leave your device.',
      },
      {
        question: 'Can I edit a chapter after adding it?',
        answer:
          'Yes, you can change any timestamp or title, re-sort the list, and re-check the spec warnings before copying the updated block.',
      },
      {
        question: 'What should I do if a generated link opens at the wrong time?',
        answer:
          'Check that the timestamp was entered as minutes and seconds in the right order, then re-copy the link after correcting it.',
      },
      {
        question: 'Do YouTube chapters help viewers find content faster?',
        answer:
          'Yes, chapters let viewers jump straight to the section they need, which makes long tutorials, reviews, and podcasts easier to navigate.',
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
      'youtube thumbnail size checker',
      'thumbnail dark mode preview',
      'youtube feed thumbnail preview',
      'thumbnail safe zone checker',
      'video thumbnail mockup tool',
    ],
    seo: {
      title: 'YouTube Thumbnail Previewer – Feed Check | UtilityFlow',
      description:
        'Preview your thumbnail and title in Light and Dark YouTube feeds before publishing, with 16:9, 1280×720 and 2 MB spec checks — all locally, no upload ever.',
      primaryKeyword: 'youtube thumbnail previewer',
      secondaryKeywords: [
        'thumbnail feed preview',
        'youtube title length checker',
        'thumbnail safe zone tool',
        'youtube thumbnail size checker',
        'thumbnail dark mode preview',
      ],
      longTailKeywords: [
        'preview youtube thumbnail in dark mode feed before publishing',
        'check thumbnail bottom right timestamp badge overlap',
        'private client side thumbnail 1280x720 checker',
        'test youtube thumbnail readability in sidebar size',
        'check youtube thumbnail title truncation in feed',
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
      {
        title: 'Compare feed and sidebar sizes',
        description:
          'Check the large desktop feed card and the compact sidebar thumbnail side by side to catch text that is unreadable at small sizes.',
      },
      {
        title: 'Check the spec warnings',
        description:
          'Review the 1280×720 dimension, 16:9 aspect ratio, and 2 MB file-size checks, and fix any flagged issue in your image editor.',
      },
      {
        title: 'Tip: fix text hidden by the badge',
        description:
          'If the duration badge covers important text or a face, move that element away from the bottom-right corner and re-upload the image.',
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
      {
        question: 'Is the YouTube Thumbnail Previewer free to use?',
        answer:
          'Yes, it is free to use in your browser with no account, and your thumbnail images are never uploaded anywhere.',
      },
      {
        question: 'Which image formats can I preview with the thumbnail previewer?',
        answer:
          'You can load PNG, JPG, and WebP files, which are the same formats YouTube accepts for custom thumbnails.',
      },
      {
        question: 'How does the thumbnail previewer check the 16:9 aspect ratio?',
        answer:
          'It reads the real pixel dimensions of your image and flags it if the width-to-height ratio does not match 16:9.',
      },
      {
        question: 'What is the thumbnail safe zone in this previewer?',
        answer:
          'The safe zone overlay highlights the bottom-right corner where YouTube places the video duration badge, so you can keep faces and key text clear of it.',
      },
      {
        question: 'Why should I preview my thumbnail in Dark Mode?',
        answer:
          'Many viewers browse YouTube in Dark Mode, and bright or low-contrast designs can look very different against a dark feed background.',
      },
      {
        question: 'How does the previewer show title truncation?',
        answer:
          'It renders your title in a realistic feed card with the same two-line limit, so you can see exactly where YouTube cuts it off.',
      },
      {
        question: 'What happens if my thumbnail is larger than 2 MB?',
        answer:
          'The tool flags the file size, and you should re-export it at higher compression or a smaller resolution until it is under 2 MB.',
      },
      {
        question: 'Can I preview a thumbnail before my video is published?',
        answer:
          'Yes, that is the main use: test unreleased thumbnails locally so sponsor graphics and launch artwork stay private until release day.',
      },
      {
        question: 'Why does my thumbnail look blurry in the sidebar preview?',
        answer:
          'Small sidebar thumbnails shrink your image a lot, so thin text and fine detail blur; use large bold text and simple shapes instead.',
      },
      {
        question: 'Does the previewer change or compress my thumbnail image?',
        answer:
          'No, it only displays your file as-is and reports its dimensions and size; it never edits, resizes, or re-encodes the image.',
      },
      {
        question: 'What is the minimum thumbnail width YouTube accepts?',
        answer:
          'YouTube requires a minimum width of 640 pixels, though 1280 pixels wide is recommended for a sharp HD result.',
      },
      {
        question: 'Can I test different titles with the same thumbnail?',
        answer:
          'Yes, just edit the title field and the feed preview updates instantly, so you can compare phrasing without re-uploading the image.',
      },
      {
        question: 'Why is my thumbnail text cut off in the feed preview?',
        answer:
          'Feed cards clamp titles to two lines, so move your most important words to the start of the title where they stay visible.',
      },
      {
        question: 'Does the previewer work for thumbnails on other platforms?',
        answer:
          'It is built around YouTube feed layouts, but the size, contrast, and small-scale readability checks are useful for any video platform.',
      },
      {
        question: 'How do I remove a loaded thumbnail image?',
        answer:
          'Load a different image to replace it, or close the tab; the in-memory object URL is revoked and nothing is stored.',
      },
      {
        question: 'What should I do if the preview looks different from real YouTube?',
        answer:
          'YouTube tweaks its layout over time, so treat the preview as a close approximation and do a final check on a private or unlisted upload.',
      },
      {
        question: 'Can the thumbnail previewer check a live YouTube video thumbnail?',
        answer:
          'No, it previews local image files only; to check a published video, download its thumbnail image first and load that file here.',
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
      'hashtag generator from keywords',
      'instagram hashtag limit checker',
      'hashtag case converter',
      'clean hashtag list tool',
      'hashtag group formatter',
    ],
    seo: {
      title: 'Hashtag Formatter – CamelCase & Tag Counter | UtilityFlow',
      description:
        'Normalize keyword lists into clean #CamelCase or lowercase hashtags, remove duplicates and invalid punctuation, and check the Instagram 30-tag cap free.',
      primaryKeyword: 'hashtag formatter',
      secondaryKeywords: [
        'camelcase hashtag generator',
        'duplicate hashtag remover',
        'instagram hashtag counter',
        'hashtag case converter',
        'hashtag list cleaner',
      ],
      longTailKeywords: [
        'convert keyword list into accessible camelcase hashtags',
        'remove duplicate hashtags and invalid punctuation online',
        'format hashtag groups with caption fold dot separators',
        'check instagram 30 hashtag limit before posting',
        'turn keywords into clean lowercase hashtags online',
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
        title: 'Choose a caption separator style',
        description:
          'Pick a single-line block, vertical list, or dot-separated footer so the tags sit neatly below your caption text.',
      },
      {
        title: 'Run the formatter',
        description:
          'The tool strips invalid punctuation, removes duplicates case-insensitively, and rebuilds every tag in your chosen case.',
      },
      {
        title: 'Check count and copy',
        description:
          'Verify duplicates removed and total tag count against Instagram’s 30-tag cap, then click Copy Hashtags.',
      },
      {
        title: 'Tip: trim tags over the platform cap',
        description:
          'If the count exceeds 30, drop the least relevant tags first, since extra tags past the cap are ignored by Instagram.',
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
      {
        question: 'Is the Hashtag Formatter free to use?',
        answer:
          'Yes, it is free to use in your browser with no sign-up, and your tags are processed locally without being uploaded.',
      },
      {
        question: 'What is the Instagram hashtag limit?',
        answer:
          'Instagram allows up to 30 hashtags per post, and this tool counts your tags so you can stay within that cap.',
      },
      {
        question: 'How does the Hashtag Formatter remove duplicates?',
        answer:
          'It compares tags case-insensitively, so #ContentMarketing and #contentmarketing count as the same tag and only one is kept.',
      },
      {
        question: 'Can I paste hashtags with or without the # symbol?',
        answer:
          'Yes, both work: the tool adds a # to plain keywords and keeps the ones you already typed with a #.',
      },
      {
        question: 'What separators can I use between hashtags?',
        answer:
          'You can separate tags with commas, spaces, semicolons, or newlines, and the tool handles mixed separators in one paste.',
      },
      {
        question: 'What is the difference between CamelCase and lowercase hashtags?',
        answer:
          'CamelCase capitalizes each word (#SocialMedia) for screen-reader accessibility, while lowercase (#socialmedia) is a stylistic choice that reads as one word.',
      },
      {
        question: 'Does the Hashtag Formatter check if a hashtag is banned?',
        answer:
          'No, it does not check ban lists or live platform data; it only cleans and formats the tags you provide.',
      },
      {
        question: 'Can I use the formatted hashtags on TikTok and X too?',
        answer:
          'Yes, the cleaned tags work on any platform, though each platform has its own limits, such as the 30-tag cap on Instagram.',
      },
      {
        question: 'Why do some of my hashtags disappear after formatting?',
        answer:
          'Tags made only of punctuation or unsupported characters are removed, since they would not work as clickable hashtags anyway.',
      },
      {
        question: 'What are dot-separated hashtag footers for?',
        answer:
          'Dot separators push hashtags below the caption fold on Instagram, keeping the visible caption clean while the tags still work.',
      },
      {
        question: 'Can I format hashtags in a vertical list?',
        answer:
          'Yes, choose the line-separated layout to put one hashtag per line, which is handy for comments and caption footers.',
      },
      {
        question: 'Does the Hashtag Formatter work with non-English words?',
        answer:
          'Yes, it keeps letters from other alphabets in the tag, as long as the platform supports them in hashtags.',
      },
      {
        question: 'How many hashtags should I use per post?',
        answer:
          'There is no single right number; use tags that are genuinely relevant to the post, and let the counter keep you under the platform cap.',
      },
      {
        question: 'Can I save a hashtag group for reuse?',
        answer:
          'The tool does not store groups, so copy the formatted block into your own notes or spreadsheet to reuse it later.',
      },
      {
        question: 'Why does Preserve Case keep my original capitalization?',
        answer:
          'Preserve Case is for brand tags or acronyms you want exactly as typed, while the other modes standardize every tag the same way.',
      },
      {
        question: 'Are my hashtags uploaded to a server?',
        answer:
          'No, all formatting happens locally in your browser, so your keyword lists and campaign tags never leave your device.',
      },
      {
        question: 'What should I do if a formatted hashtag still does not work on a platform?',
        answer:
          'Check the platform’s own rules for that tag, since some platforms block certain words or limit tag length even when the format is clean.',
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
      'instagram caption templates',
      'pas copywriting template',
      'social media hook generator',
      'post structure templates',
      'caption writing framework tool',
    ],
    seo: {
      title: 'Caption Template Builder – Hook & Post Formats | UtilityFlow',
      description:
        'Assemble clean social media captions with PAS, Tutorial, Before-After-Bridge and Checklist templates — your own words, structured, with live character counts.',
      primaryKeyword: 'caption template builder',
      secondaryKeywords: [
        'social media caption frameworks',
        'linkedin post structure builder',
        'pas copywriting template',
        'instagram caption templates',
        'social media hook templates',
      ],
      longTailKeywords: [
        'build structured linkedin and instagram captions without ai',
        'problem agitate solution social post template builder',
        'check x and instagram character fit while drafting captions',
        'before after bridge caption template for social posts',
        'structured checklist caption template for linkedin posts',
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
        title: 'Review the live preview',
        description:
          'Read the formatted post as it will appear, checking paragraph spacing and the order of hook, takeaways, and call-to-action.',
      },
      {
        title: 'Check the character and word fit',
        description:
          'Watch the live counter against X’s 280-character limit and Instagram or LinkedIn limits, and trim lines that push you over.',
      },
      {
        title: 'Copy and verify length',
        description:
          'Preview the live formatted post, confirm character/word fit for X or Instagram/LinkedIn, and click Copy Caption.',
      },
      {
        title: 'Tip: try the same notes in another template',
        description:
          'Switch templates without retyping to compare how your hook and points read as PAS, a tutorial, or a checklist before you post.',
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
      {
        question: 'Is the Caption Template Builder free to use?',
        answer:
          'Yes, it is free to use in your browser with no sign-up, and your drafts are processed locally without being uploaded.',
      },
      {
        question: 'What is the PAS template in the Caption Template Builder?',
        answer:
          'PAS stands for Problem–Agitate–Solution: name the reader’s problem, sharpen why it hurts, then present your solution and call-to-action.',
      },
      {
        question: 'Which caption templates does this builder include?',
        answer:
          'It includes five templates: Problem–Agitate–Solution, Actionable Breakdown, Before–After–Bridge, Audit Checklist, and Myth vs. Reality.',
      },
      {
        question: 'Can I use the Caption Template Builder for LinkedIn posts?',
        answer:
          'Yes, the structured hook, takeaways, and call-to-action layout works well for LinkedIn, and the live counter helps you stay within its limits.',
      },
      {
        question: 'Can I use the Caption Template Builder for Instagram captions?',
        answer:
          'Yes, the templates format cleanly for Instagram captions, and you can add hashtags at the end of the built caption.',
      },
      {
        question: 'What is the Before–After–Bridge caption template?',
        answer:
          'It shows the reader’s current situation, paints the improved after-state, then bridges the gap with your product, method, or advice.',
      },
      {
        question: 'How does the character counter work in the caption builder?',
        answer:
          'It counts characters and words live as you type and flags when your draft passes limits like X’s 280 characters.',
      },
      {
        question: 'Can I switch templates without losing my text?',
        answer:
          'Yes, switching templates reuses your existing hook, points, and call-to-action, so you can compare structures without retyping.',
      },
      {
        question: 'Does the builder add hashtags automatically?',
        answer:
          'No, it only places the hashtags you enter yourself, so you control exactly which tags appear with each caption.',
      },
      {
        question: 'What makes a good hook for a social media caption?',
        answer:
          'A good hook states a clear benefit, surprising fact, or relatable problem in one short line that makes the reader stop scrolling.',
      },
      {
        question: 'Can I use the caption builder for X (Twitter) posts?',
        answer:
          'Yes, the counter warns you at 280 characters, so you can trim your hook and takeaways until the post fits a single tweet.',
      },
      {
        question: 'What is the Myth vs. Reality caption template for?',
        answer:
          'It pairs a common misconception with the correct fact, which works well for educational posts and debunking bad advice in your niche.',
      },
      {
        question: 'Can I edit the caption after copying it?',
        answer:
          'Yes, the copied text is plain text, so you can tweak wording, emojis, or line breaks in your scheduling app before publishing.',
      },
      {
        question: 'Does the builder save my captions?',
        answer:
          'No, drafts live only in your browser tab, so copy finished captions to your own notes or scheduler before closing the page.',
      },
      {
        question: 'What should I put in the call-to-action field?',
        answer:
          'Write one clear next step, such as commenting, saving the post, clicking your link, or following your account.',
      },
      {
        question: 'Can I use the caption builder for product launch announcements?',
        answer:
          'Yes, the PAS or Before–After–Bridge templates are a good fit for launches: state the problem, show the result, and end with where to get it.',
      },
      {
        question: 'Why does the builder not rewrite or improve my wording?',
        answer:
          'It is deliberately deterministic, so your voice and facts stay exactly as you wrote them instead of being replaced by generic generated copy.',
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
      'username availability checker',
      'cross platform handle checker',
      'instagram username rules',
      'x username character limit',
      'brand name to handle converter',
    ],
    seo: {
      title: 'Social Handle Formatter – Username Rules | UtilityFlow',
      description:
        'Generate clean handle variations from a brand name, validate X, Instagram, TikTok, YouTube, Threads and GitHub username rules, and open direct check URLs.',
      primaryKeyword: 'social handle formatter',
      secondaryKeywords: [
        'social media username rules',
        'brand handle variation generator',
        'youtube handle character rules',
        'username availability checker',
        'cross platform handle checker',
      ],
      longTailKeywords: [
        'check social media username character length and allowed symbols',
        'consistent brand handle suggestions across x instagram tiktok',
        'validate handle format for github youtube and threads',
        'find brand handle variations when exact name is taken',
        'check x 15 character username limit before choosing handle',
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
        title: 'Review syntax compliance per platform',
        description:
          'Check the Valid format status for each candidate across X, Instagram, TikTok, YouTube, Threads, and GitHub.',
      },
      {
        title: 'Fix invalid characters',
        description:
          'If a platform flags a handle, remove the disallowed character — for example, drop hyphens for X and Instagram, or underscores for GitHub.',
      },
      {
        title: 'Review syntax compliance and open URLs',
        description:
          'Check Valid format status across X, Instagram, TikTok, YouTube, Threads, and GitHub, then click Check URL to inspect live claim status.',
      },
      {
        title: 'Tip: copy your shortlist before claiming',
        description:
          'Copy the handles that pass on every platform you care about, then claim them one by one, starting with the network where your audience is largest.',
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
      {
        question: 'Is the Social Handle Formatter free to use?',
        answer:
          'Yes, it is free to use in your browser with no sign-up, and your brand names and handle ideas are processed locally without being uploaded.',
      },
      {
        question: 'What is the maximum handle length on X?',
        answer:
          'X usernames can be at most 15 characters long, so this tool flags any candidate longer than that for X.',
      },
      {
        question: 'How do I check if a social handle is actually available?',
        answer:
          'Click the Check URL link for each platform to open the live profile page; if the page shows a real profile, the handle is taken.',
      },
      {
        question: 'Why do hyphens work on GitHub but not on X or Instagram?',
        answer:
          'Each platform sets its own allowed characters: GitHub permits hyphens, while X and Instagram only allow letters, numbers, and underscores.',
      },
      {
        question: 'What handle prefixes should I try if my exact name is taken?',
        answer:
          'Common prefixes and suffixes include get, use, the, hq, studio, official, and app — the tool generates these variations for you to test.',
      },
      {
        question: 'Can the Social Handle Formatter check YouTube handles?',
        answer:
          'Yes, it validates candidates against YouTube’s @handle character rules and gives you a direct link to check the handle’s live status.',
      },
      {
        question: 'What is the minimum handle length on most platforms?',
        answer:
          'Most platforms require at least a few characters, and handles that work across X, Instagram, TikTok, YouTube, and Threads are usually 4–15 characters.',
      },
      {
        question: 'Should my handle match on every social platform?',
        answer:
          'Matching handles make your brand easier to find and harder to impersonate, so aim for one handle that passes the rules on every platform you use.',
      },
      {
        question: 'Can I use numbers in my social handle?',
        answer:
          'Yes, numbers are allowed on all six platforms this tool checks, though starting a handle with a number can look less clean.',
      },
      {
        question: 'Why does the tool say my handle is valid but the platform rejects it?',
        answer:
          'Syntax validity is only one check; the platform may also reject a handle because it is already taken, reserved, or blocked for policy reasons.',
      },
      {
        question: 'Does the Social Handle Formatter check Threads handles?',
        answer:
          'Yes, it validates candidates against Threads username rules alongside X, Instagram, TikTok, YouTube, and GitHub.',
      },
      {
        question: 'Can I use dots or periods in a social handle?',
        answer:
          'Instagram allows periods in usernames, but X, TikTok, and GitHub do not, so a handle with dots will not match everywhere.',
      },
      {
        question: 'How do I pick a handle for a new startup or podcast?',
        answer:
          'Enter your brand name, shortlist the variations that pass on every platform, then claim the same one everywhere before announcing it.',
      },
      {
        question: 'Can I test a handle with underscores on GitHub?',
        answer:
          'You can test it, but GitHub will reject underscores, so the tool flags it as invalid for GitHub even if it passes on X and Instagram.',
      },
      {
        question: 'Are my brand name ideas uploaded to a server?',
        answer:
          'No, all handle generation and validation happens locally in your browser, so your naming ideas never leave your device.',
      },
      {
        question: 'What should I do if my ideal handle is taken on one platform?',
        answer:
          'Try a consistent prefix or suffix across all platforms instead of a different name on one network, so your brand stays easy to find.',
      },
      {
        question: 'Can I copy a handle directly from the tool?',
        answer:
          'Yes, the tool includes one-click copying for the active handle, so you can paste it into sign-up forms without retyping.',
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
