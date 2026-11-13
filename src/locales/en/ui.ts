import type { UiStrings } from '../ui';

/**
 * English chrome dictionary — the source of truth for every UI string key.
 * Values are the exact strings the site ships today in English.
 */
export const enStrings: UiStrings = {
  nav: {
    tools: 'Tools',
    categories: 'Categories',
    aiTools: 'AI Tools',
    about: 'About',
    contact: 'Contact',
    allTools: 'All Tools',
    freeAiTools: 'Free AI Tools',
    viewAiSection: 'View AI section on Homepage →',
    searchPlaceholder: 'Search 88 tools...',
    searchTools: 'Search tools',
    closeSearch: 'Close search',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    skipToContent: 'Skip to content',
    language: 'Language',
    chooseLanguage: 'Choose language',
    aiWriting: {
      label: 'AI Writing Assistant',
      desc: 'Grammar, rewrite, tone & email drafting',
    },
    aiSummarizer: {
      label: 'AI Text Summarizer',
      desc: 'Short, medium & bulleted summaries',
    },
    aiFinder: {
      label: 'AI Smart Tool Finder',
      desc: 'Find the right tool in plain English',
    },
  },
  footer: {
    tagline:
      'A fast, browser-first collection of everyday utilities for writers, engineers, marketers, and analysts. Built to run locally with minimal overhead.',
    categories: 'Categories',
    platformAi: 'Platform & AI',
    legal: 'Legal',
    home: 'Home',
    allToolsDirectory: 'All Tools Directory',
    aboutUs: 'About Us',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    xmlSitemap: 'XML Sitemap',
    rightsReserved: 'All rights reserved.',
    deployedNote: 'Browser-side utilities · Deployed on Cloudflare Pages',
  },
  common: {
    copy: 'Copy',
    copied: 'Copied',
    download: 'Download',
    clear: 'Clear',
    loadSample: 'Load sample',
    reset: 'Reset',
    search: 'Search',
    close: 'Close',
    cancel: 'Cancel',
    save: 'Save',
    submit: 'Submit',
    loading: 'Loading...',
    processing: 'Processing...',
    upload: 'Upload',
    chooseFile: 'Choose file',
    dragDrop: 'Drag & drop your file here',
    tryAgain: 'Try again',
    openTool: 'Open tool',
    browserSide: 'Browser-side',
    freeAiTool: 'Free AI Tool',
    externalApi: 'External API',
  },
  home: {
    seoTitle: 'UtilityFlow – Fast Browser-Based Online Utility Tools',
    seoDescription:
      'Free, fast, privacy-first online utility tools for text analysis, developer formatting, calculators, PDFs, SEO checks, and image workflows.',
    seoKeywords: [
      'online utility tools',
      'browser tools',
      'text tools',
      'developer tools',
      'online calculators',
      'pdf tools',
      'seo tools',
    ],
    eyebrow: 'UtilityFlow Platform · 7 Core Categories · {count} Live Utilities',
    h1: 'Practical online utilities built for speed and privacy.',
    heroDescription:
      'UtilityFlow organizes 85 browser-first utilities plus free AI writing, summarization, and smart tool discovery across text, developer, calculator, social media, PDF, SEO, and image workflows.',
    exploreCategories: 'Explore Categories',
    openDirectory: 'Open Full Directory',
    aiWriting: 'AI Writing',
    aiSummarizer: 'AI Summarizer',
    aiFinder: 'AI Tool Finder',
    metrics: {
      toolCategories: 'Tool Categories',
      browserUtilities: 'Browser Utilities',
      liveTools: 'Live Tools',
      accountRequired: 'Account Required',
      none: 'None',
    },
    aiSpotlight: {
      badge: 'Free AI Suite · Zero Login Required',
      title: 'Free AI Tools',
      description:
        'Improve drafts, summarize long documents, or find the right tool in seconds with zero sign-up.',
    },
    popular: {
      title: 'Popular Tools',
      description: 'Most-used everyday utilities across writing, development, and calculations.',
      viewDirectory: 'View tools directory',
    },
    categories: {
      title: 'Tool Categories',
      description:
        'Seven specialized suites engineered to cover writing, coding, math, publishing, documents, search optimization, and media workflows.',
      includes: 'Includes: {names}',
    },
    directory: {
      title: 'All Tools Directory',
      description:
        'Filter by category or keyword to jump directly to any live utility or category hub.',
      filterPlaceholder: 'Filter categories or tools...',
      allCategories: 'All Categories',
      noMatch: 'No categories or tools matched "{query}".',
      resetFilters: 'Reset filters',
      upcomingUtilities: 'Upcoming utilities: {names}',
      scheduledInBatch: 'Scheduled in Batch {batch}',
      toolsActive: '{count} tools active',
      openCategory: 'Open category page',
    },
    why: {
      title: 'Why Choose UtilityFlow',
      description: 'Engineered as a clean, reliable alternative to ad-heavy utility sites.',
      items: [
        {
          title: 'Browser-first privacy',
          description:
            'Core calculations, string transforms, and formatting run directly in client memory so sensitive drafts and JSON payloads stay on your device.',
        },
        {
          title: 'Fast, lightweight delivery',
          description:
            'Code-split tool modules and minimal runtime dependencies keep initial page loads lean and Core Web Vitals responsive on any connection.',
        },
        {
          title: 'Permanent clean URLs',
          description:
            'Every utility lives at its own dedicated path with structured metadata, usage examples, and direct deep-link reliability across browser refreshes.',
        },
        {
          title: 'Predictable, verifiable results',
          description:
            'Tools focus on deterministic outputs, transparent instructions, and accessible controls without cluttered popups or misleading indicators.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      description:
        'Key details about how UtilityFlow operates and what to expect in upcoming batches.',
    },
    faqs: [
      {
        question: 'Are UtilityFlow tools free to use without creating an account?',
        answer:
          'Yes. All 85 browser utilities and 3 AI tools on UtilityFlow are available free of charge with no registration, sign-in wall, credits, or subscription required.',
      },
      {
        question: 'Does UtilityFlow upload my text, code, or files to a server?',
        answer:
          'All 85 core browser utilities run locally in your web browser without uploading inputs. Our 3 optional Free AI tools (AI Writing Assistant, AI Text Summarizer, and AI Smart Tool Finder) process prompts securely via server-side Groq inference without storing your text.',
      },
      {
        question: 'How are the 88 tools organized across the platform?',
        answer:
          'UtilityFlow covers seven core categories (Text & Writing, Developer, Calculators, Social Media, PDFs, SEO, and Image & File tools) totaling 85 browser tools alongside 3 Free AI tools integrated into the platform.',
      },
      {
        question: 'Can I bookmark or share a direct link to any specific tool?',
        answer:
          'Yes. Every tool and category receives its own permanent, clean URL (such as /word-counter/, /ai-writing-assistant/, or /category/developer-tools/) that loads directly and works across browser refreshes.',
      },
      {
        question: 'Does UtilityFlow work smoothly on mobile phones and tablets?',
        answer:
          'Yes. All layouts, navigation controls, and interactive workspaces—including Light Mode and Dark Mode—are designed mobile-first with accessible touch targets and responsive grids.',
      },
    ],
  },
  directory: {
    seoTitle: 'All Online Utility Tools Directory | UtilityFlow',
    seoDescription:
      'Browse and search all browser-based utilities and categories on UtilityFlow, organized for writing, development, calculators, PDFs, SEO, and images.',
    seoKeywords: ['utility tools directory', 'all online tools', 'free browser tools'],
    title: 'All Tools Directory',
    description:
      'Browse all {count} live utilities registered on UtilityFlow or explore the seven category hubs across browser and free AI workflows.',
    searchPlaceholder: 'Search by tool name, keyword, or category...',
    showing: 'Showing {tools} live tools across {categories} categories',
    all: 'All',
    availableTools: 'Available Tools',
    categorySuites: 'Category Suites',
    visitHub: 'Visit {name} hub',
    plannedToolsInclude: 'Planned tools include: {names}',
    noMatch: 'No categories or tools matched your filter.',
    clearFilters: 'Clear filters',
  },
  category: {
    batchLabel: 'Batch {batch}',
    plannedCount: '{count} planned tools',
    toolsCount: '{count} tools',
    toolsLive: '{count} tools live',
    ofToolsLive: '{count} of {total} tools live',
    availableTools: 'Available {name}',
    exploreOther: 'Explore Other Categories',
    scheduledTitle: 'Scheduled for Batch {batch} Implementation',
    scheduledDescription:
      'This category hub is active and indexed in the {name} architecture. Dedicated individual tool pages with browser-side functionality will be added here during Batch {batch}.',
    plannedToolsTitle: 'Planned tools in this category:',
  },
  toolPage: {
    howToUse: 'How to Use {name}',
    practicalExamples: 'Practical Examples',
    faqs: 'Frequently Asked Questions',
    keyBenefits: 'Key Benefits',
    commonUseCases: 'Common Use Cases',
    runsLocally: 'Runs locally in your browser',
    externalApi: 'External API integration',
    freeAiTool: 'Free AI Tool · Zero Login',
    loadingWorkspace: 'Loading {name} workspace...',
    input: 'Input',
    output: 'Output',
    relatedTitle: 'Related Tools',
    relatedDescription: 'Continue your workflow with complementary utilities.',
    browseAll: 'Browse all {name}',
    moreToolsIn: 'More tools in',
    willAppear: 'will appear here as Batch {batch} is released.',
  },
  search: {
    placeholder:
      'Search tools or categories (e.g., word counter, JSON, PDF, calculators)...',
    search: 'Search',
    tools: 'Tools',
    categories: 'Categories',
    noResults: 'No matching tools or categories found for "{query}".',
    viewDirectory: 'View full directory',
    clearSearch: 'Clear search',
    ariaLabel: 'Search tools or categories',
  },
  notFound: {
    seoTitle: 'Page Not Found (404) | UtilityFlow',
    seoDescription:
      'The requested tool or page could not be found on UtilityFlow. Search our utility directory or browse categories.',
    eyebrow: '404 · Not Found',
    title: 'We couldn’t find that page.',
    description:
      'The URL may have moved, or this utility has not been released yet. Search below or browse our categories to find what you need.',
    returnHome: 'Return Home',
    browseDirectory: 'Browse Directory',
    browseCategories: 'Browse Categories',
  },
  about: {
    seoTitle: 'About UtilityFlow – Browser-First Online Tools Platform',
    seoDescription:
      'Learn how UtilityFlow builds fast, privacy-first browser utilities across seven categories without accounts, clutter, or unnecessary data uploads.',
    title: 'About UtilityFlow',
    intro:
      'UtilityFlow is an independent web platform building 85 focused, reliable browser utilities for everyday digital work.',
    whyTitle: 'Why We Built UtilityFlow',
    whyP1:
      'Routine online tasks—counting words, validating JSON, checking character limits, computing loan payments, or compressing an image—often force people onto slow sites packed with intrusive overlays, confusing downloads, or mandatory sign-ups.',
    whyP2:
      'Our goal is straightforward: give every utility a clean, dedicated page that loads quickly, explains clearly how the tool works, and executes directly inside your browser whenever web standards allow.',
    principlesTitle: 'Core Engineering Principles',
    principles: [
      {
        title: 'Client-Side Execution',
        description:
          'Text, code, math, and local file utilities process inputs in browser memory so your working data is not sent to remote servers.',
      },
      {
        title: 'Transparent API Notices',
        description:
          'If a specialized utility requires an external lookup or server call, we disclose it explicitly on that tool’s page before you run anything.',
      },
      {
        title: 'Accessible Interfaces',
        description:
          'Keyboard navigation, readable contrast, clear error feedback, and responsive mobile controls are built into every template.',
      },
      {
        title: 'Modular Rollout',
        description:
          'Tools are shipped and verified in seven category batches so each utility receives thorough functional testing and documentation.',
      },
    ],
    categoriesTitle: 'Seven Planned Tool Categories',
    feedbackTitle: 'Have Feedback or a Request?',
    feedbackBefore:
      'If you notice a calculation edge case, accessibility issue, or would like to suggest a utility for an upcoming batch, reach out through our',
    feedbackLink: 'Contact page',
    feedbackAfter: '.',
  },
  contact: {
    seoTitle: 'Contact UtilityFlow – Support, Bug Reports & Suggestions',
    seoDescription:
      'Get in touch with the UtilityFlow team to report an issue, suggest a new utility tool, or ask questions about privacy and terms.',
    title: 'Contact Us',
    intro:
      'Send bug reports, tool suggestions, or general inquiries. We read every submission and prioritize fixes that improve tool accuracy and accessibility.',
    name: 'Name',
    email: 'Email address',
    topic: 'Topic',
    message: 'Message',
    submit: 'Submit Message',
    namePlaceholder: 'Alex Rivera',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Describe the tool, bug, or question in detail...',
    topics: [
      'Tool suggestion',
      'Bug report',
      'SEO or content correction',
      'Privacy or legal inquiry',
      'General question',
    ],
    errors: {
      name: 'Please enter your name.',
      emailEmpty: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address.',
      subject: 'Please choose or enter a topic.',
      message: 'Please include at least 10 characters in your message.',
    },
    successTitle: 'Message prepared',
    successThanks:
      'Thank you, {name}. Your message regarding {subject} has been validated.',
    successNote:
      'Because UtilityFlow runs as a static site without storing user submissions on a backend server, you can also send your message directly via your email client to',
    sendAnother: 'Send another message',
    directEmail: 'Direct Email',
    directEmailText: 'Prefer to write directly? Email our team at:',
  },
  privacy: {
    seoTitle: 'Privacy Policy | UtilityFlow',
    seoDescription:
      'Read the UtilityFlow Privacy Policy covering browser-side tool execution, cookies, server logs, and third-party advertising disclosures.',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: November 2026',
    sections: [
      {
        title: '1. Overview',
        paragraphs: [
          'UtilityFlow is designed around client-side browser processing. This Privacy Policy explains what information is processed when you visit our website, how our utilities handle inputs, and how cookies or advertising technologies may operate.',
        ],
      },
      {
        title: '2. Tool Inputs, Browser Processing & Free AI Tools',
        paragraphs: [
          'Text, numbers, code snippets, and files entered into our 85 browser-based tools are processed locally within your browser session without leaving your device.',
          'Our three optional Free AI tools (AI Writing Assistant, AI Text Summarizer, and AI Smart Tool Finder) send submitted text through our protected backend to Groq for real-time inference. We do not store or log your prompts, and free daily rate limits use only a UTC-dated SHA-256 hash so raw visitor IP addresses are never stored.',
        ],
      },
      {
        title: '3. Hosting Logs & Technical Telemetry',
        paragraphs: [
          'UtilityFlow is hosted on Cloudflare Pages. Like standard web hosting providers, our edge network may automatically process standard HTTP request metadata (such as IP address, browser user-agent, requested URL, and timestamp) to deliver pages reliably, mitigate abuse, and maintain security.',
        ],
      },
      {
        title: '4. Cookies & Third-Party Advertising',
        paragraphs: [
          'We may display advertisements from third-party advertising networks (such as Google AdSense) to support free access to our tools. Third-party vendors, including Google, may use cookies or web beacons to serve ads based on a user’s prior visits to this website or other websites.',
          'You may opt out of personalized advertising by visiting Google Ads Settings or managing cookie preferences directly in your browser settings.',
        ],
      },
      {
        title: '5. External Links',
        paragraphs: [
          'Our documentation or tool pages may link to external websites. We are not responsible for the privacy practices or content of third-party websites.',
        ],
      },
    ],
    contactTitle: '6. Contact',
    contactBefore:
      'If you have questions about this Privacy Policy, please contact us via our',
    contactLink: 'Contact page',
    contactMiddle: 'or email',
  },
  terms: {
    seoTitle: 'Terms of Service | UtilityFlow',
    seoDescription:
      'Review the Terms of Service governing use of UtilityFlow browser utilities, intellectual property, accuracy disclaimers, and liability limits.',
    title: 'Terms of Service',
    lastUpdated: 'Last updated: November 2026',
    sections: [
      {
        title: '2. Permitted Use',
        paragraphs: [
          'You may use UtilityFlow for personal, educational, and commercial productivity tasks. You agree not to automate abusive traffic, attempt to disrupt site delivery, reverse-engineer security protections, or use any utility for unlawful activities.',
        ],
      },
      {
        title: '3. Accuracy & Informational Disclaimer',
        paragraphs: [
          'While we test every utility carefully, all tools, calculations, conversions, and SEO checks are provided on an “as is” and “as available” basis. Outputs should be independently verified before making financial, legal, medical, or production engineering decisions.',
        ],
      },
      {
        title: '4. Intellectual Property',
        paragraphs: [
          'The UtilityFlow interface, brand assets, documentation, and source code are protected by applicable intellectual property laws. You retain full ownership of any text, code, documents, or images you process using our client-side utilities.',
        ],
      },
      {
        title: '5. Limitation of Liability',
        paragraphs: [
          'To the maximum extent permitted by law, UtilityFlow and its contributors shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this platform.',
        ],
      },
    ],
    acceptanceTitle: '1. Acceptance of Terms',
    acceptanceBefore:
      'By accessing or using UtilityFlow, you agree to be bound by these Terms of Service and our',
    acceptanceLink: 'Privacy Policy',
    acceptanceAfter:
      '. If you do not agree with any part of these terms, please discontinue using the website.',
    changesTitle: '6. Changes & Contact',
    changesBefore:
      'We may update these Terms of Service as new tool batches are released. Questions can be directed to our',
    changesLink: 'Contact page',
    changesAfter: '.',
  },
};
