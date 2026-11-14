import { lazy } from 'react';
import type { ToolDefinition } from '../types/tool';

const AiWritingAssistantTool = lazy(
  () => import('../tools/ai/AiWritingAssistantTool')
);

const AiTextSummarizerTool = lazy(
  () => import('../tools/ai/AiTextSummarizerTool')
);

const AiToolFinderTool = lazy(
  () => import('../tools/ai/AiToolFinderTool')
);

export const AI_WRITING_ASSISTANT_TOOL: ToolDefinition = {
  id: 'ai-writing-assistant',
  slug: 'ai-writing-assistant',
  name: 'AI Writing Assistant',
  shortDescription:
    'Fix grammar, rewrite sentences, adjust tone, paraphrase, expand ideas, and draft clear emails free with zero sign-up.',
  categoryId: 'text-writing',
  batch: 1,
  processingMode: 'api',
  requiresExternalApi: true,
  apiNotice:
    '100% free with no login, subscription, or credits. Free allowance: up to 5 writing requests per day per visitor (12,000 characters max), powered by Groq free-tier inference without storing your text.',
  popular: true,
  featured: true,
  keywords: [
    'ai writing assistant',
    'free grammar checker',
    'sentence rewriter',
    'text paraphraser',
    'tone converter',
    'email writing assistant',
    'spelling correction',
    'sentence simplifier',
  ],
  seo: {
    title: 'AI Writing Assistant – Grammar & Rewriter | UtilityFlow',
    description:
      'Fix grammar, rewrite sentences, adjust tone, simplify or expand paragraphs, paraphrase text, and write clear emails free — no sign-up or account required.',
    primaryKeyword: 'ai writing assistant',
    secondaryKeywords: [
      'free grammar checker ai',
      'ai sentence rewriter',
      'ai text paraphraser',
      'ai email writing assistant',
    ],
    longTailKeywords: [
      'free ai writing assistant without login',
      'make text more professional ai tool',
      'rewrite paragraph preserve meaning free',
      'fix grammar and spelling online free',
    ],
    schemaApplicationCategory: 'UtilitiesApplication',
  },
  intro:
    'Refine drafts cleanly in seconds without creating an account. Choose from 10 writing tasks—including grammar correction, paraphrasing, tone shifting, sentence simplification, and email drafting—while strictly preserving your original meaning and facts.',
  instructions: [
    {
      title: 'Paste or write your text',
      description:
        'Enter up to 12,000 characters into the editor. Use the live word and character counters to verify draft length before generating.',
    },
    {
      title: 'Pick a writing task, tone, and language',
      description:
        'Select one of 10 writing tasks (such as Fix Grammar, Make Professional, Paraphrase, or Write an Email), match a tone from Professional to Simple, and pick your target output language.',
    },
    {
      title: 'Click Generate to process your request',
      description:
        'Press Generate and wait a few seconds while the request is sent to Groq for inference. A progress indicator shows while your improved text is being produced.',
    },
    {
      title: 'Review and compare original vs. improved text',
      description:
        'Inspect the side-by-side view or word-level change highlights to see exactly what changed, and confirm names, numbers, and dates stayed intact.',
    },
    {
      title: 'Copy or download the result',
      description:
        'Use the Copy button to move the improved text to your clipboard, or download it as a TXT file for use in your document or email client.',
    },
    {
      title: 'Try another task or tone if needed',
      description:
        'If the result is not quite right, switch the task or tone and generate again — for example, try Make Simple after Make Professional — keeping in mind the daily free request limit.',
    },
  ],
  examples: [
    {
      title: 'Grammar & Spelling Cleanup',
      input:
        'Hi team, i wanted to folow up on yesterday meeting and share the update timeline for Q4 launch.',
      output:
        'Hi team, I wanted to follow up on yesterday’s meeting and share the updated timeline for the Q4 launch.',
      explanation:
        'Task: Fix Grammar · Tone: Professional. Fixes capitalization, verb agreement, and spelling while keeping your exact voice.',
    },
    {
      title: 'Rough Notes into Ready Email',
      input:
        'ask client sarah if thursday 2pm works for design review call, mention mockup v2 ready and link attached',
      output:
        'Subject: Design Review Call & Mockup v2\n\nHi Sarah,\n\nI wanted to let you know that Mockup v2 is ready and attached for your review. Would Thursday at 2:00 PM work for a quick design review call?\n\nBest regards,',
      explanation:
        'Task: Write an Email · Tone: Friendly. Structures bulleted notes into a polite, factual email without inventing details.',
    },
  ],
  benefits: [
    '100% free access with zero sign-up, login, or subscription paywalls',
    '10 specialized writing modes plus 7 tone presets and multi-language output',
    'Preserves names, numbers, dates, and meaning without fabricating facts',
    'Side-by-side comparison and highlighted word-level change tracking',
    'One-click Copy and TXT file export in both Light and Dark Mode',
  ],
  useCases: [
    'Polishing client emails, proposals, and status updates before sending',
    'Fixing grammar, punctuation, and spelling mistakes in essays or reports',
    'Simplifying dense technical paragraphs for broader audiences',
    'Converting casual chat drafts into formal workplace communication',
  ],
  faqs: [
    {
      question: 'Is the AI Writing Assistant completely free without signing up?',
      answer:
        'Yes. You do not need to create an account, enter an email address, or add a payment card. Visitors receive up to 5 free writing requests per UTC day.',
    },
    {
      question: 'Does the AI invent new facts when rewriting or expanding text?',
      answer:
        'No. Our system prompt instructs the model to preserve all original facts, names, dates, and numbers strictly and avoid fabricating statistics or claims.',
    },
    {
      question: 'Is my writing stored or logged by UtilityFlow?',
      answer:
        'UtilityFlow does not store, log, or sell your text. Requests are sent securely through our backend to Groq for inference, and visitor quota tracking uses only a daily salted SHA-256 hash.',
    },
    {
      question: 'What happens if I hit the daily free request limit?',
      answer:
        'Daily limits reset automatically at UTC midnight. In the meantime, all 85+ local browser utilities—including Word Counter, Readability Checker, and Text Diff Checker—work with no limits.',
    },
    {
      question: 'What writing tasks can the AI Writing Assistant handle?',
      answer:
        'It offers 10 tasks, including Fix Grammar, Make Professional, Paraphrase, Simplify, Expand, Summarize, Write an Email, Improve Clarity, Change Tone, and Correct Spelling.',
    },
    {
      question: 'How long can my text be in the AI Writing Assistant?',
      answer:
        'Each request accepts up to 12,000 characters. For longer documents, split the text into sections and process them one at a time.',
    },
    {
      question: 'Which tones can I choose for my rewritten text?',
      answer:
        'You can pick from 7 tone presets, including Professional, Friendly, Formal, Casual, Simple, Confident, and Concise, depending on your audience.',
    },
    {
      question: 'Does the AI Writing Assistant send my text to an external service?',
      answer:
        'Yes. Your text is sent securely to Groq for AI inference through our backend worker, because the writing tasks need a language model. It is not stored or logged by UtilityFlow.',
    },
    {
      question: 'Can the AI Writing Assistant write a full email from rough notes?',
      answer:
        'Yes. Choose the Write an Email task, paste your bullet points or rough notes, and it will structure them into a polite email with a subject line and greeting.',
    },
    {
      question: 'Will the AI Writing Assistant change the meaning of my text?',
      answer:
        'It is instructed to preserve your original meaning, facts, names, dates, and numbers. Always review the side-by-side comparison before using the result.',
    },
    {
      question: 'Can I use the AI Writing Assistant for academic essays?',
      answer:
        'Yes, it can fix grammar and improve clarity in essays and reports. Check your institution rules first, since some schools restrict AI-assisted writing.',
    },
    {
      question: 'Does the AI Writing Assistant work in languages other than English?',
      answer:
        'Yes. You can choose a target output language, and the tool will produce the improved text in that language while keeping your facts unchanged.',
    },
    {
      question: 'How do I see exactly what the AI changed in my text?',
      answer:
        'The result view highlights word-level changes and shows your original and improved text side by side, so you can accept or reject each edit mentally before copying.',
    },
    {
      question: 'Can the AI Writing Assistant paraphrase text to avoid repetition?',
      answer:
        'Yes. The Paraphrase task rewrites sentences with different wording while keeping the same meaning, which is useful for varied drafts and summaries.',
    },
    {
      question: 'What should I do if the generated text has an error?',
      answer:
        'Edit the result directly, or run the text again with a different task or tone. AI output can contain mistakes, so proofread important text before sending it.',
    },
    {
      question: 'Is there a word limit per request in the AI Writing Assistant?',
      answer:
        'The limit is 12,000 characters per request, which covers roughly 1,800 to 2,000 English words. Shorter texts usually produce faster and more accurate results.',
    },
    {
      question: 'How is the AI Writing Assistant different from the Word Counter?',
      answer:
        'Word Counter only measures words, characters, and reading time locally, while the AI Writing Assistant rewrites and improves your text using the Groq language model.',
    },
    {
      question: 'Can the AI Writing Assistant make my text shorter or longer?',
      answer:
        'Yes. Use the Simplify task to shorten dense paragraphs, or the Expand task to add detail and explanation while keeping your original facts intact.',
    },
    {
      question: 'Can I download my improved text as a file?',
      answer:
        'Yes. After generating, click the download option to save the improved text as a TXT file on your device.',
    },
    {
      question: 'What happens if my request fails or times out?',
      answer:
        'Check your internet connection and try again. If the daily free limit is reached, the tool will tell you, and the limit resets at UTC midnight.',
    },
  ],
  relatedToolSlugs: [
    'ai-text-summarizer',
    'word-counter',
    'readability-checker',
    'text-diff-checker',
  ],
  component: AiWritingAssistantTool,
};

export const AI_TEXT_SUMMARIZER_TOOL: ToolDefinition = {
  id: 'ai-text-summarizer',
  slug: 'ai-text-summarizer',
  name: 'AI Text Summarizer',
  shortDescription:
    'Condense articles, reports, and notes into short, medium, or long summaries with bullet points and key takeaways free.',
  categoryId: 'text-writing',
  batch: 1,
  processingMode: 'api',
  requiresExternalApi: true,
  apiNotice:
    '100% free with no login, subscription, or credits. Free allowance: up to 5 summaries per day per visitor (up to 25,000 characters per request), powered by Groq free-tier inference without storing your text.',
  popular: true,
  featured: true,
  keywords: [
    'ai text summarizer',
    'free article summarizer',
    'bullet point summary',
    'key points extractor',
    'paragraph summarizer',
    'simple language summary',
    'reading time calculator',
    'summarize long text online',
    'ai summary generator free',
  ],
  seo: {
    title: 'AI Text Summarizer – Short & Long Summaries | UtilityFlow',
    description:
      'Summarize long articles, research notes, and reports into short paragraphs, bullet points, or key takeaways — free, fast, and with no sign-up required.',
    primaryKeyword: 'ai text summarizer',
    secondaryKeywords: [
      'free article summarizer',
      'bullet point text summarizer',
      'extract key points ai',
      'paragraph summary generator',
    ],
    longTailKeywords: [
      'free ai text summarizer without login',
      'summarize long article preserve numbers and facts',
      'short medium long text summarizer online',
      'summarize research paper into bullet points',
    ],
    schemaApplicationCategory: 'UtilitiesApplication',
  },
  intro:
    'Distill long articles, reports, essays, and meeting transcripts into crisp summaries without creating an account. Choose Short (10–20%), Medium (30–40%), or Long (50–60%) lengths across paragraph, bullet-point, key-points, and plain-language formats while preserving names, numbers, and dates.',
  instructions: [
    {
      title: 'Paste or type your source text',
      description:
        'Enter at least 25 words (120+ characters) up to 25,000 characters. Check the live word count and estimated reading time below the editor.',
    },
    {
      title: 'Pick summary length, format, and language',
      description:
        'Select Short, Medium, or Long (Detailed) compression, pick Paragraph, Bullet Points, Key Points, or Simple Language formatting, and choose an output language.',
    },
    {
      title: 'Click Summarize to generate the summary',
      description:
        'Press Summarize Text and wait a few seconds while your text is sent to Groq for AI inference. A progress indicator shows while the summary is being produced.',
    },
    {
      title: 'Compare reading time and check the result',
      description:
        'Review the reading time saved, compare the summary alongside the original text, and verify that key names, numbers, and dates are still correct.',
    },
    {
      title: 'Copy or download the summary',
      description:
        'Use the Copy button to move the summary to your clipboard, or download it as a TXT file for your notes, report, or study material.',
    },
    {
      title: 'Try a different length or format if needed',
      description:
        'If the summary is too short or too detailed, switch the length or format and summarize again — for example, try Bullet Points after a Paragraph summary.',
    },
  ],
  examples: [
    {
      title: 'Bullet Point Executive Digest',
      input:
        'A 160-word engineering study comparing twice-weekly written updates against daily meetings across 140 engineers.',
      output:
        '- Study of 140 engineers across London, Berlin, and Toronto over six months.\n- Replacing three weekly syncs with twice-weekly digests cut calendar fragmentation by 28% and boosted sprint delivery by 14%.\n- Success relied on upfront blockers, PR links, and exact dates.',
      explanation:
        'Length: Short · Format: Bullet Point Summary. Preserves sample size, locations, and exact percentages.',
    },
  ],
  benefits: [
    'Free anonymous access with zero accounts, subscriptions, or credits',
    'Short (10–20%), Medium (30–40%), and Long (50–60%) summary controls',
    'Paragraph, Bullet Point, Key Points Extraction, and Simple Language modes',
    'Preserves names, statistics, dates, and facts without hallucinating details',
    'Instant reading-time comparison, Copy button, and TXT file download',
  ],
  useCases: [
    'Turning long articles or research briefs into quick bulleted notes',
    'Summarizing meeting transcripts and extracting numbered action points',
    'Translating and condensing multi-paragraph documents into clear takeaways',
    'Estimating reading time savings before sharing executive digests',
  ],
  faqs: [
    {
      question: 'Why does the AI Text Summarizer require at least 25 words?',
      answer:
        'Texts under 25 words or 120 characters are too brief to compress meaningfully without losing essential context, so the tool prompts you to add more source text first.',
    },
    {
      question: 'Does the summarizer change names, numbers, or dates?',
      answer:
        'No. Our summarization instructions strictly require keeping original figures, dates, names, and factual relationships intact without adding external claims.',
    },
    {
      question: 'How is estimated reading time calculated?',
      answer:
        'Estimated reading time uses an average silent reading speed of 200 words per minute for both your original text and the generated summary so you can see time saved at a glance.',
    },
    {
      question: 'Is there any limit or charge for using the AI Text Summarizer?',
      answer:
        'The tool is completely free with no billing or sign-up. Visitors receive up to 5 free summaries per UTC day, and all 85 local browser tools remain unlimited.',
    },
    {
      question: 'What summary lengths does the AI Text Summarizer offer?',
      answer:
        'You can choose Short (10–20% of the original), Medium (30–40%), or Long (50–60%) summaries, depending on how much detail you want to keep.',
    },
    {
      question: 'What summary formats can I choose from?',
      answer:
        'The tool offers Paragraph, Bullet Points, Key Points Extraction, and Simple Language formats, so you can match the summary to notes, reports, or study material.',
    },
    {
      question: 'How long can the text I summarize be?',
      answer:
        'Each request accepts between 25 words and 25,000 characters. For longer documents, split them into sections and summarize each part separately.',
    },
    {
      question: 'Does the AI Text Summarizer send my text to an external service?',
      answer:
        'Yes. Your text is sent securely to Groq for AI inference through our backend worker, because summarization needs a language model. It is not stored or logged by UtilityFlow.',
    },
    {
      question: 'Can the AI Text Summarizer summarize meeting transcripts?',
      answer:
        'Yes. Paste the transcript and choose Key Points or Bullet Points format to extract decisions, action items, and main discussion points quickly.',
    },
    {
      question: 'Will the summary keep the original facts and figures?',
      answer:
        'The summarizer is instructed to preserve names, statistics, dates, and factual relationships. Still, review the summary against the original for important documents.',
    },
    {
      question: 'Can I summarize research papers with the AI Text Summarizer?',
      answer:
        'Yes. Paste the abstract or full text and use the Long format to keep methodology details and findings, or the Short format for a quick overview.',
    },
    {
      question: 'Does the AI Text Summarizer work in languages other than English?',
      answer:
        'Yes. You can select an output language, and the summary will be produced in that language while keeping the original facts unchanged.',
    },
    {
      question: 'How is reading time saved calculated in the AI Text Summarizer?',
      answer:
        'The tool compares the estimated reading time of your original text with the summary, using an average silent reading speed of 200 words per minute.',
    },
    {
      question: 'Can the AI Text Summarizer create a simple-language version of a text?',
      answer:
        'Yes. Choose the Simple Language format to get a plain, easy-to-read version of complex or technical writing, useful for students and non-experts.',
    },
    {
      question: 'What should I do if the summary misses an important point?',
      answer:
        'Try the Long format or Key Points format, which keep more detail. You can also split the text and summarize the missed section separately.',
    },
    {
      question: 'Is the AI Text Summarizer good for studying and exam revision?',
      answer:
        'Yes. Summarize chapters or lecture notes into bullet points and key takeaways, then review the short version before exams to refresh the main ideas.',
    },
    {
      question: 'How is the AI Text Summarizer different from the AI Writing Assistant?',
      answer:
        'The Summarizer condenses long text into shorter versions, while the Writing Assistant fixes grammar, rewrites sentences, and changes tone without shortening the text.',
    },
    {
      question: 'What happens when I reach the daily summary limit?',
      answer:
        'The limit resets automatically at UTC midnight. Until then, you can use the local browser tools, such as Word Counter and Keyword Density Checker, without limits.',
    },
    {
      question: 'Can the AI Text Summarizer handle PDFs or web pages directly?',
      answer:
        'No. Paste the text itself into the editor. For PDFs, use the PDF Text Extractor first to copy the text, then paste it into the summarizer.',
    },
    {
      question: 'Does the AI Text Summarizer add new information to my summary?',
      answer:
        'No. It is instructed to summarize only what is in your text and not to add external claims, but you should still check the result for accuracy.',
    },
  ],
  relatedToolSlugs: [
    'ai-writing-assistant',
    'word-counter',
    'readability-checker',
    'keyword-density-checker',
  ],
  component: AiTextSummarizerTool,
};

export const AI_TOOL_FINDER_TOOL: ToolDefinition = {
  id: 'ai-tool-finder',
  slug: 'ai-tool-finder',
  name: 'AI Smart Tool Finder',
  shortDescription:
    'Describe your task in plain English—with typos or natural phrasing—to find the best matching UtilityFlow tool instantly.',
  categoryId: 'text-writing',
  batch: 1,
  processingMode: 'api',
  requiresExternalApi: true,
  apiNotice:
    '100% free with no login, subscription, or credits. Searches our verified inventory of 85 browser tools + 3 AI tools (up to 10 AI searches/day + unlimited instant keyword matching).',
  popular: true,
  featured: true,
  keywords: [
    'ai tool finder',
    'smart tool search',
    'find utility tool',
    'recommend online tool',
    'natural language tool search',
    'find free tool online',
    'utility tool recommender',
    'search tools by task',
  ],
  seo: {
    title: 'AI Smart Tool Finder – Find the Right Tool | UtilityFlow',
    description:
      'Describe what you need in plain language to discover the right browser or AI utility across UtilityFlow’s 88 tools — fast, free, and without fabricated links.',
    primaryKeyword: 'ai smart tool finder',
    secondaryKeywords: [
      'online tool finder',
      'find right utility tool',
      'ai tool recommender',
      'utilityflow tool search',
    ],
    longTailKeywords: [
      'find free online tool for my task',
      'search utility tools by plain language problem',
      'ai tool discovery without login',
      'which online tool do i need for pdf',
    ],
    schemaApplicationCategory: 'UtilitiesApplication',
  },
  intro:
    'Not sure which tool handles your task? Describe your goal in plain English—even with spelling mistakes or informal wording—and our hybrid keyword + Groq AI matcher recommends verified tools from UtilityFlow’s live catalog with clear justifications.',
  instructions: [
    {
      title: 'Describe your task or select a quick prompt',
      description:
        'Type a plain-language request such as "I want to reduce my image size to 100KB" or "convert PDF into PNG", or click any quick task preset.',
    },
    {
      title: 'Filter by category if needed',
      description:
        'Narrow recommendations to Text & Writing, Developer, Calculators, Social Media, PDF, SEO, or Image & File tools—or search across all 88 tools at once.',
    },
    {
      title: 'Run the search and review matches',
      description:
        'Submit your request to get instant keyword matches, or use an AI-assisted search for semantic matching. Results are ranked by relevance to your task.',
    },
    {
      title: 'Inspect justifications and alternatives',
      description:
        'Read the one-sentence justification for each recommendation and check the alternatives list to compare similar tools before choosing one.',
    },
    {
      title: 'Open the verified tool',
      description:
        'Click Open Tool to launch the recommended tool immediately. Every link is verified against the live registry, so it always opens a real tool.',
    },
    {
      title: 'Try a different wording if there is no match',
      description:
        'If the finder reports no exact match, rephrase your task with simpler words or a different category filter, and check the honest no-match note for the closest option.',
    },
  ],
  examples: [
    {
      title: 'Compressing an Image to 100KB',
      input: 'I want to reduce my image size to 100KB.',
      output: 'Recommended: Image Compressor (/image-compressor/)',
      explanation:
        'Matches the client-side Image Compressor and suggests Image Resizer & Cropper or Image Format Converter as alternatives.',
    },
    {
      title: 'Honest No-Match Handling',
      input: 'I need to convert a PDF to Word.',
      output: 'No exact PDF-to-DOCX converter available; notes PDF Text Extractor for raw text.',
      explanation:
        'Never invents missing tools or pretends a tool supports formats it does not.',
    },
  ],
  benefits: [
    'Free natural-language search across all 85 browser tools and 2 AI tools',
    'Instant local typo-tolerant keyword matching plus Groq AI semantic ranking',
    'Strict inventory verification guarantees zero fabricated tools or broken links',
    'Shows clear one-sentence justification and up to 3 alternatives',
  ],
  useCases: [
    'Finding the right PDF, image, or text utility without browsing every category',
    'Matching plain-English goals to exact browser tools with supported formats',
    'Checking honestly whether UtilityFlow currently supports a specialized file format',
  ],
  faqs: [
    {
      question: 'Does the AI Smart Tool Finder ever recommend tools that do not exist?',
      answer:
        'No. Every recommendation returned by AI is strictly checked against our live tool registry before display. If no matching tool exists, the finder tells you honestly.',
    },
    {
      question: 'What happens if I make spelling mistakes in my search?',
      answer:
        'Our local keyword ranker includes edit-distance typo tolerance and task synonyms, and the Groq AI ranker interprets natural phrasing and misspellings automatically.',
    },
    {
      question: 'How many searches can I run for free?',
      answer:
        'Instant local keyword matching is unlimited, and visitors receive up to 10 free AI-assisted searches per UTC day with zero sign-up or payment required.',
    },
    {
      question: 'How does the AI Smart Tool Finder understand my request?',
      answer:
        'It combines instant local keyword matching with Groq AI semantic ranking, so it understands plain English goals, synonyms, and natural phrasing — not just exact tool names.',
    },
    {
      question: 'Which tools can the AI Smart Tool Finder recommend?',
      answer:
        'It searches the full UtilityFlow catalog of 88 tools: 85 browser tools across text, developer, calculator, social, PDF, SEO, and image categories, plus the AI Writing Assistant and AI Text Summarizer.',
    },
    {
      question: 'Does the AI Smart Tool Finder send my search to an external service?',
      answer:
        'AI-assisted searches send your request text to Groq for semantic matching through our backend worker. Instant keyword matching runs locally in your browser and sends nothing.',
    },
    {
      question: 'Can I search for a tool by file format, like PDF or PNG?',
      answer:
        'Yes. Mention the format in your request, for example "convert PDF into PNG", and the finder will recommend tools that support that format, such as PDF to Images.',
    },
    {
      question: 'What does the AI Smart Tool Finder do if no tool matches my task?',
      answer:
        'It tells you honestly that no exact match exists and suggests the closest available tool, instead of inventing a tool or a broken link.',
    },
    {
      question: 'Can I filter tool recommendations by category?',
      answer:
        'Yes. Use the category filter to limit results to Text & Writing, Developer, Calculators, Social Media, PDF, SEO, or Image & File tools before searching.',
    },
    {
      question: 'How do the quick task presets work in the AI Smart Tool Finder?',
      answer:
        'Quick presets are one-click example requests, such as reducing an image to 100KB, that show you how to phrase a task and instantly return the matching tool.',
    },
    {
      question: 'Why does each recommendation include a justification?',
      answer:
        'Each result shows a one-sentence explanation of why the tool matches your goal, including supported formats, so you can judge the fit before opening it.',
    },
    {
      question: 'Can the AI Smart Tool Finder recommend AI tools too?',
      answer:
        'Yes. It can recommend the AI Writing Assistant for grammar and rewriting, and the AI Text Summarizer for condensing long text, when your task fits those tools.',
    },
    {
      question: 'Is the AI Smart Tool Finder free to use?',
      answer:
        'Yes. Keyword matching is unlimited and free, and AI-assisted searches are free up to 10 per day per visitor, with no account, login, or payment required.',
    },
    {
      question: 'What should I do if the top recommendation is not quite right?',
      answer:
        'Check the alternatives list below the top result, or rephrase your request with more detail — for example, name the file format or the exact output you need.',
    },
    {
      question: 'Can I use the AI Smart Tool Finder to find a calculator?',
      answer:
        'Yes. Describe the calculation in plain words, such as "work out my monthly loan payment", and it will recommend the Loan EMI Calculator or a related calculator.',
    },
    {
      question: 'How is the AI Smart Tool Finder different from the Tools directory page?',
      answer:
        'The Tools directory lists all 88 tools by category for browsing, while the Tool Finder matches your plain-language task to the best tool and explains why it fits.',
    },
    {
      question: 'Can the AI Smart Tool Finder help with SEO tasks?',
      answer:
        'Yes. Ask for things like "check my meta description length" or "generate a sitemap", and it will point you to the Meta Tag Generator, XML Sitemap Generator, or On-Page SEO Checker.',
    },
    {
      question: 'What happens when I reach the daily AI search limit?',
      answer:
        'The AI search limit resets at UTC midnight. Until then, instant keyword matching keeps working without limits, so you can still find tools by keywords.',
    },
    {
      question: 'Can the AI Smart Tool Finder recommend tools for image editing?',
      answer:
        'Yes. Describe your image task, such as "compress this photo" or "resize an image", and it will recommend the Image Compressor, Image Resizer, or Image Format Converter.',
    },
    {
      question: 'Are the links from the AI Smart Tool Finder always working?',
      answer:
        'Yes. Every recommendation is checked against the live tool registry before display, so links always open a real, working UtilityFlow tool page.',
    },
  ],
  relatedToolSlugs: [
    'ai-writing-assistant',
    'ai-text-summarizer',
    'image-compressor',
    'pdf-to-images',
  ],
  component: AiToolFinderTool,
};

export const AI_TOOLS: ToolDefinition[] = [
  AI_WRITING_ASSISTANT_TOOL,
  AI_TEXT_SUMMARIZER_TOOL,
  AI_TOOL_FINDER_TOOL,
];
