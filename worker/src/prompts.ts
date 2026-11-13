import type {
  FindToolRequest,
  SummarizeRequest,
  WritingRequest,
  WritingTask,
} from './types';

export interface BuiltPrompt {
  systemInstruction: string;
  userPrompt: string;
  expectJson?: boolean;
}

const TASK_DIRECTIVES: Record<WritingTask, string> = {
  'fix-grammar':
    'Correct grammatical mistakes, punctuation errors, and awkward syntax while keeping the original wording as close as possible.',
  'rewrite-text':
    'Rewrite the text smoothly to improve flow, clarity, and natural phrasing while preserving every original fact.',
  'improve-writing':
    'Polish word choice, sentence rhythm, and overall clarity without altering factual claims or adding new information.',
  'make-professional':
    'Reframe the text for clear workplace or executive communication while keeping all core facts and requests intact.',
  'make-casual':
    'Adapt the text into a relaxed, natural everyday voice without losing clarity or changing facts.',
  'simplify-text':
    'Simplify complex phrasing and long sentences so the message is effortless to read for a general audience.',
  'expand-text':
    'Elaborate clearly on the existing points using smooth transitions and helpful phrasing strictly grounded in the input without inventing facts, statistics, or names.',
  paraphrase:
    'Express the exact same meaning using fresh phrasing and varied sentence structure.',
  'fix-spelling':
    'Fix only spelling, capitalization, and obvious typo mistakes while keeping structure and voice virtually untouched.',
  'write-email':
    'Structure and refine the text into a ready-to-send email (including a concise Subject line and clear closing) strictly reflecting the details provided.',
};

export function buildWritingPrompt(req: WritingRequest): BuiltPrompt {
  const languageDirective =
    req.language.toLowerCase() === 'same as original language'
      ? `Keep the same language as the original text and write in a ${req.tone} tone.`
      : `Write the output in ${req.language} using a ${req.tone} tone.`;

  return {
    systemInstruction: [
      'You are an accurate editorial writing assistant.',
      'Rules:',
      '- Strictly preserve the original meaning, names, numbers, dates, and facts.',
      '- Do NOT invent facts, statistics, URLs, or unsupported claims.',
      `- ${languageDirective}`,
      '- Return ONLY the improved text itself (no preamble, no "Here is your text", no markdown code fences unless the input is code).',
    ].join('\n'),
    userPrompt: `Task: ${TASK_DIRECTIVES[req.task]}\n\nOriginal text:\n${req.text}`,
  };
}

export function buildSummarizePrompt(req: SummarizeRequest): BuiltPrompt {
  const lengthGuide =
    req.length === 'short'
      ? 'Keep the summary very concise, approximately 10–20% of the original word count.'
      : req.length === 'medium'
      ? 'Make the summary balanced, approximately 30–40% of the original word count.'
      : 'Provide a thorough summary preserving supporting details, approximately 50–60% of the original word count.';

  const formatGuide =
    req.format === 'bullets'
      ? 'Format the output strictly as clean markdown bullet points (- item).'
      : req.format === 'key-points'
      ? 'Extract the key takeaways as a numbered list of crisp, factual points.'
      : req.format === 'simple'
      ? 'Write using plain, easy-to-understand everyday language avoiding unnecessary jargon.'
      : 'Write cohesive, well-structured prose paragraphs.';

  const languageGuide =
    !req.language || req.language.toLowerCase() === 'same as original language'
      ? 'Write the summary in the same language as the source text.'
      : `Write the summary in ${req.language}.`;

  return {
    systemInstruction: [
      'You are a faithful, high-precision summarization assistant.',
      'Rules:',
      '- Summarize strictly using information present in the source text.',
      '- Preserve important names, numbers, dates, and verifiable facts accurately.',
      '- Never extrapolate or fabricate external details.',
      `- ${lengthGuide}`,
      `- ${formatGuide}`,
      `- ${languageGuide}`,
      '- Output ONLY the summary with no introductory filler.',
    ].join('\n'),
    userPrompt: `Source text:\n${req.text}`,
  };
}

export function buildFindToolPrompt(req: FindToolRequest): BuiltPrompt {
  const catalogJson = JSON.stringify(req.candidates || []);
  return {
    systemInstruction: [
      'You are an intelligent, strictly honest tool-routing assistant for UtilityFlow.',
      'Rules:',
      '- You MUST recommend ONLY tools whose slug appears verbatim in the provided JSON candidate inventory.',
      '- NEVER invent tool names, slugs, URLs, or claim a tool supports features or file formats it does not actually support (for example, do not claim PDF Text Extractor converts PDF to Word DOCX, and do not claim a text tool is a resume builder).',
      '- If none of the candidate tools directly solves the core request, set "primarySlug": null, set "primaryReason": "", provide a clear "noMatchMessage" explaining what is missing, and optionally include up to 3 partial/related existing tools in "alternatives" while honestly stating their limitation in each reason.',
      '- Respond strictly with valid JSON matching this schema:',
      '{',
      '  "primarySlug": string | null,',
      '  "primaryReason": string,',
      '  "alternatives": [{ "slug": string, "name": string, "reason": string }],',
      '  "noMatchMessage": string | undefined',
      '}',
      'Keep each reason concise (1 sentence). List at most 3 alternatives.',
    ].join('\n'),
    userPrompt: `User query: ${req.query}\n\nCandidate inventory:\n${catalogJson}`,
    expectJson: true,
  };
}
