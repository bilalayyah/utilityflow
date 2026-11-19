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
    blog: 'Blog',
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
    trustLegal: 'Trust & Legal',
    home: 'Home',
    allToolsDirectory: 'All Tools Directory',
    blog: 'Blog',
    aboutUs: 'About Us',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    xmlSitemap: 'XML Sitemap',
    rightsReserved: 'All rights reserved.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  },
  consent: {
    message: 'We use cookies and analytics to understand how the site is used and to improve it. You can accept or decline.',
    accept: 'Accept',
    decline: 'Decline',
    cookieSettings: 'Cookie settings',
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
      'UtilityFlow organizes 84 browser-first utilities plus free AI writing, summarization, and smart tool discovery across text, developer, calculator, social media, PDF, SEO, and image workflows.',
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
        'Key details about how UtilityFlow operates and what to expect as new tools arrive.',
    },
    faqs: [
      {
        question: 'Are UtilityFlow tools free to use without creating an account?',
        answer:
          'Yes. All 84 browser utilities and 3 AI tools on UtilityFlow are available free of charge with no registration, sign-in wall, credits, or subscription required.',
      },
      {
        question: 'Does UtilityFlow upload my text, code, or files to a server?',
        answer:
          'All 84 core browser utilities run locally in your web browser without uploading inputs. Our 3 optional Free AI tools (AI Writing Assistant, AI Text Summarizer, and AI Smart Tool Finder) process prompts securely via server-side Groq inference without storing your text.',
      },
      {
        question: 'How are the 88 tools organized across the platform?',
        answer:
          'UtilityFlow covers seven core categories (Text & Writing, Developer, Calculators, Social Media, PDFs, SEO, and Image & File tools) totaling 84 browser tools alongside 3 Free AI tools integrated into the platform.',
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
    trustLine: 'All tools are free • No signup required • Works in your browser',
  },
  directory: {
    seoTitle: 'Browse All 88 Free Online Utility Tools | UtilityFlow',
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
    plannedToolsInclude: 'Tools in this category include: {names}',
    noMatch: 'No categories or tools matched your filter.',
    clearFilters: 'Clear filters',
  },
  category: {
    plannedCount: '{count} tools',
    toolsCount: '{count} tools',
    toolsLive: '{count} tools live',
    ofToolsLive: '{count} of {total} tools live',
    availableTools: 'Available {name}',
    exploreOther: 'Explore Other Categories',
    scheduledTitle: 'More tools coming soon',
    scheduledDescription:
      'This category hub is active and indexed in the {name} architecture. Dedicated individual tool pages with browser-side functionality will be added here soon.',
    plannedToolsTitle: 'Tools in this category:',
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
    willAppear: 'will appear here soon.',
    bylineAuthor: 'By Bilal',
    lastUpdated: 'Last updated: November 2026',
  },
  blog: {
    seoTitle: 'Guides, Tutorials & Resources | UtilityFlow Blog',
    seoDescription:
      'Practical guides, step-by-step tutorials and resources for every UtilityFlow tool — text, developer, calculator, PDF, SEO, social media and image tools.',
    title: 'Guides, Tutorials & Resources',
    description:
      'Practical guides and step-by-step tutorials for every UtilityFlow tool. Learn what each tool does, how to use it well, and how to get the best result.',
    searchPlaceholder: 'Search articles...',
    searchArticles: 'Search articles',
    noResults: 'No articles found.',
    featured: 'Featured articles',
    latest: 'Latest articles',
    browseByCategory: 'Browse by category',
    relatedArticles: 'Related articles',
    relatedTools: 'Related tools',
    readingTime: '{minutes} min read',
    publishedOn: 'Published on {date}',
    updatedOn: 'Updated on {date}',
    byEditorial: 'By the UtilityFlow editorial team',
    tableOfContents: 'Table of contents',
    prevArticle: 'Previous article',
    nextArticle: 'Next article',
    share: 'Share',
    tryTool: 'Try the tool',
    guidesInCategory: 'Guides in this category',
    categoryGuidesWord: 'Guides',
    noArticlesYet: 'No articles yet',
    noArticlesYetDescription: 'Guides for this section are on the way. Check back soon.',
    backToBlog: 'Back to blog',
    allArticles: 'All articles',
    notAvailableInLanguage: 'This article is not yet available in this language.',
    minRead: 'min read',
  },
  comments: {
    title: 'Comments',
    note: 'Share your thoughts — no account needed. Just write your name and post.',
    namePlaceholder: 'Your name',
    commentPlaceholder: 'Write a comment…',
    postButton: 'Post comment',
    posting: 'Posting…',
    empty: 'No comments yet — be the first to share your thoughts.',
    loadError: "Comments couldn't be loaded right now, but you can still post one below.",
    postError: "Your comment couldn't be posted. Please try again in a moment.",
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
      'UtilityFlow is an independent web platform building 88 focused, reliable utilities for everyday digital work.',
    whyTitle: 'Why We Built UtilityFlow',
    whyP1:
      'Routine online tasks—counting words, validating JSON, checking character limits, computing loan payments, or compressing an image—often force people onto slow sites packed with intrusive overlays, confusing downloads, or mandatory sign-ups.',
    whyP2:
      'Our goal is straightforward: give every utility a clean, dedicated page that loads quickly, explains clearly how the tool works, and executes directly inside your browser whenever web standards allow.',
    orgTitle: 'Who Runs UtilityFlow',
    orgP1:
      'UtilityFlow is an independent project created and maintained by Bilal, a maker who builds free web tools in his spare time. There is no company behind the site, no investor funding, and no team of employees — every tool, guide, and help page is designed, built, and tested by one person. All 88 tools are free to use without accounts or subscriptions. The footer credit names Shaheen, whose encouragement inspired the project and whose name appears on every page as a reminder of where the idea began.',
    orgP2:
      'Because the project is small and independent, decisions stay simple: if a tool is slow, confusing, or wrong, it gets fixed. Feedback sent through the contact page goes directly to the person who can change the code, and suggestions from visitors have already shaped new tools and improvements across the site.',
    howTitle: 'How Our Tools Are Built and Tested',
    howP1:
      'Each utility starts as a single clear job — count words, merge PDFs, format JSON — and is built as a focused page that does that job well. Wherever web standards allow, the work happens entirely inside your browser, so your text and files never need to leave your device. Every tool page explains its steps with a short guide, shows worked examples, and answers the questions people ask most often, so you can judge the result instead of trusting a black box.',
    howP2:
      'Before a tool goes live it is run through real inputs in a desktop and a mobile browser, including edge cases such as empty input, very large text, and unusual file types. When something breaks or a calculation looks wrong, the fix is shipped as a site update and the page is re-checked. The three optional AI tools are the only ones that send text to a server, and their pages say so plainly before you use them.',
    whoTitle: 'Who UtilityFlow Is For',
    whoP1:
      'UtilityFlow is built for anyone who needs a quick answer from a tool without installing software or creating an account: students checking an essay word count, writers formatting a draft, developers validating JSON or encoding a URL, marketers checking character limits, and small business owners calculating a loan or a discount. If a task takes less than a minute, the tool for it should take less than a minute too — that is the standard every page on this site is held to.',
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
          'Tools are shipped and verified by category so each utility receives thorough functional testing and documentation.',
      },
    ],
    categoriesTitle: 'Seven Tool Categories',
    feedbackTitle: 'Have Feedback or a Request?',
    feedbackBefore:
      'If you notice a calculation edge case, accessibility issue, or would like to suggest a new utility, reach out through our',
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
    aboutTitle: 'What You Can Write About',
    aboutP1:
      'Use this form for anything related to the site. Report a bug and tell us which tool you were using, what you entered, and what you expected to happen — the more detail you include, the faster the problem can be reproduced and fixed. Suggest a new tool and describe the job it should do; ideas that many visitors ask for move to the top of the list. You can also point out a wrong calculation, a confusing instruction, or a translation mistake on any page.',
    aboutP2:
      'Privacy and legal questions are welcome too. If a comment you posted needs to be removed, include the tool page and the name you used, and it will be taken down. For anything else — a partnership idea, a press question, or a general comment about the site — the same form works, or you can email directly using the address on this page.',
    responseTitle: 'What Happens After You Send a Message',
    responseP1:
      'Every message is read by the person who builds and maintains UtilityFlow — there is no support desk and no automated reply queue. Bug reports and wrong results are checked first, because a broken tool affects everyone who uses it. Tool suggestions are collected and weighed against how many people would use them and how well they fit the site’s browser-first approach.',
    responseP2:
      'You do not need an account to contact us, and we will only use your email address to reply to your message. If you would rather not use the form, the direct email address on this page reaches the same inbox.',
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
    successTitle: 'Message sent',
    successThanks:
      "Thank you, {name}. Your message has been sent and we'll get back to you soon.",
    successNote:
      'If you need to add anything, you can also reach us directly at',
    sending: 'Sending…',
    sendError: 'Could not send your message. Please try again.',
    sendAnother: 'Send another message',
    directEmail: 'Direct Email',
    directEmailText: 'Prefer to write directly? Email our team at:',
  },
  privacy: {
    seoTitle: 'Privacy Policy – How We Protect Your Data | UtilityFlow',
    seoDescription:
      'Read the UtilityFlow Privacy Policy covering browser-side tool execution, cookies, server logs, and analytics.',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: November 2026',
    sections: [
      {
        title: '1. Overview',
        paragraphs: [
          'UtilityFlow is designed around client-side browser processing. This Privacy Policy explains what information is processed when you visit our website, how our utilities handle inputs, and how cookies and analytics work on the site.',
        ],
      },
      {
        title: '2. Tool Inputs, Browser Processing & Free AI Tools',
        paragraphs: [
          'Text, numbers, code snippets, and files entered into our 84 browser-based tools are processed locally within your browser session without leaving your device.',
          'Our three optional Free AI tools (AI Writing Assistant, AI Text Summarizer, and AI Smart Tool Finder) send submitted text through our protected backend to Groq for real-time inference. We do not store or log your prompts, and free daily rate limits use only a UTC-dated SHA-256 hash so raw visitor IP addresses are never stored.',
          'Comments posted under our tools ask only for a name and the comment text. The name and text you submit are stored on our hosting platform and shown publicly on that tool’s page, together with the date. We do not ask for an email address or an account to comment, and we do not use comment data for advertising. If you would like a comment removed, contact us with the page and the name used and we will delete it.',
        ],
      },
      {
        title: '3. Hosting Logs & Technical Telemetry',
        paragraphs: [
          'UtilityFlow is hosted on Cloudflare Pages. Like standard web hosting providers, our edge network may automatically process standard HTTP request metadata (such as IP address, browser user-agent, requested URL, and timestamp) to deliver pages reliably, mitigate abuse, and maintain security.',
          'We do not combine hosting logs with any other data to identify individual visitors, and we do not sell or share log data with advertisers. Logs exist only to keep the service running and secure.',
        ],
      },
      {
        title: '4. Cookies & Analytics',
        paragraphs: [
          'UtilityFlow currently shows no third-party advertisements.',
          'We also use Google Analytics 4 to understand, in aggregate, how the site is used; it only runs after you accept cookies in the banner.',
        ],
      },
      {
        title: '5. External Links',
        paragraphs: [
          'Our documentation or tool pages may link to external websites. We are not responsible for the privacy practices or content of third-party websites.',
          'External links open in a new tab where possible. Before entering personal information on any linked site, please review that site’s own privacy policy.',
        ],
      },
      {
        title: '6. Data Retention',
        paragraphs: [
          'Information processed in your browser is never sent to us, so there is nothing to retain. Text sent to the optional AI tools is processed for the request and is not stored. Comments are kept until they are deleted, either by us or at your request. Hosting logs and security records are kept only for the limited period our hosting provider needs to operate and protect the service.',
        ],
      },
      {
        title: '7. Your Rights and Choices',
        paragraphs: [
          'You can block or delete cookies in your browser settings at any time. If you posted a comment, you can ask for it to be removed by contacting us. Because our tools run in your browser and we do not keep accounts or profiles, there is no personal data file to download or correct — but any question about your data will be answered if you write to us.',
        ],
      },
      {
        title: '8. Children’s Privacy',
        paragraphs: [
          'UtilityFlow is a general-purpose site and is not directed at children under 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe a child has posted a comment on the site, contact us and we will remove it.',
        ],
      },
      {
        title: '9. Changes to This Policy',
        paragraphs: [
          'We may update this Privacy Policy when we add tools, change providers, or adjust how the site works. The “Last updated” date at the top of this page shows when it was last revised. Continued use of the site after a change means you accept the updated policy.',
        ],
      },
    ],
    contactTitle: '10. Contact',
    contactBefore:
      'If you have questions about this Privacy Policy, please contact us via our',
    contactLink: 'Contact page',
    contactMiddle: 'or email',
  },
  terms: {
    seoTitle: 'Terms of Service – Using UtilityFlow Tools | UtilityFlow',
    seoDescription:
      'Review the Terms of Service governing use of UtilityFlow browser utilities, intellectual property, accuracy disclaimers, and liability limits.',
    title: 'Terms of Service',
    lastUpdated: 'Last updated: November 2026',
    sections: [
      {
        title: '2. Permitted Use',
        paragraphs: [
          'You may use UtilityFlow for personal, educational, and commercial productivity tasks. You agree not to automate abusive traffic, attempt to disrupt site delivery, reverse-engineer security protections, or use any utility for unlawful activities.',
          'You may link to our tools and share their results. You may not present our tools as your own, copy the site’s design or content and republish it as a competing service, or use the site in a way that misleads others about where a result came from.',
        ],
      },
      {
        title: '3. Accuracy & Informational Disclaimer',
        paragraphs: [
          'While we test every utility carefully, all tools, calculations, conversions, and SEO checks are provided on an “as is” and “as available” basis. Outputs should be independently verified before making financial, legal, medical, or production engineering decisions.',
          'Calculations such as loan payments, tax estimates, and currency conversions are planning aids, not professional advice. Figures can change with rates, rules, and rounding, so confirm important numbers with a qualified professional or an official source before acting on them.',
        ],
      },
      {
        title: '4. Intellectual Property',
        paragraphs: [
          'The UtilityFlow interface, brand assets, documentation, and source code are protected by applicable intellectual property laws. You retain full ownership of any text, code, documents, or images you process using our client-side utilities.',
          'UtilityFlow is an independent project and is not affiliated with, endorsed by, or connected to YouTube, Instagram, Google, or any other third-party brand named on this site.',
        ],
      },
      {
        title: '5. Limitation of Liability',
        paragraphs: [
          'To the maximum extent permitted by law, UtilityFlow and its contributors shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this platform.',
        ],
      },
      {
        title: '6. User Content and Comments',
        paragraphs: [
          'You keep full ownership of anything you type into our tools or post as a comment. By posting a comment, you give us permission to display it publicly on the relevant tool page. Do not post anything unlawful, misleading, or harmful to others, and do not post someone else’s personal information. We may remove comments that break these rules or that are reported to us, without notice.',
        ],
      },
      {
        title: '7. Third-Party Services',
        paragraphs: [
          'Some features rely on independent third-party services: the three AI tools send text to Groq for processing, the contact form is delivered by FormSubmit, the site is hosted on Cloudflare, and the Currency Calculator fetches live exchange rates from Frankfurter. Each of these services has its own terms and privacy policy, and your use of them is governed by those documents. UtilityFlow is not responsible for the availability or practices of third-party services.',
        ],
      },
      {
        title: '8. Service Availability',
        paragraphs: [
          'UtilityFlow is a free service and we do not guarantee that every tool will always be available. Tools may be changed, improved, or removed, and the site may be temporarily unavailable for maintenance. We aim to keep the service running smoothly, but we are not liable for interruptions or for any loss caused by downtime.',
        ],
      },
    ],
    acceptanceTitle: '1. Acceptance of Terms',
    acceptanceBefore:
      'By accessing or using UtilityFlow, you agree to be bound by these Terms of Service and our',
    acceptanceLink: 'Privacy Policy',
    acceptanceAfter:
      '. If you do not agree with any part of these terms, please discontinue using the website.',
    changesTitle: '9. Changes & Contact',
    changesBefore:
      'We may update these Terms of Service as new tools are released. Questions can be directed to our',
    changesLink: 'Contact page',
    changesAfter: '.',
  },
};
