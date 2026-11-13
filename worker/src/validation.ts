import type { ResolvedAiConfig } from './config';
import type {
  FindToolRequest,
  SummarizeRequest,
  SummaryFormat,
  SummaryLength,
  ToolInventoryCandidate,
  WritingRequest,
  WritingTask,
  WritingTone,
} from './types';

export class RequestValidationError extends Error {
  status: 400 | 413;
  code: 'BAD_REQUEST' | 'PAYLOAD_TOO_LARGE';

  constructor(
    message: string,
    status: 400 | 413 = 400,
    code: 'BAD_REQUEST' | 'PAYLOAD_TOO_LARGE' = status === 413 ? 'PAYLOAD_TOO_LARGE' : 'BAD_REQUEST'
  ) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

const VALID_WRITING_TASKS = new Set<WritingTask>([
  'fix-grammar',
  'rewrite-text',
  'improve-writing',
  'make-professional',
  'make-casual',
  'simplify-text',
  'expand-text',
  'paraphrase',
  'fix-spelling',
  'write-email',
]);

const VALID_WRITING_TONES = new Set<WritingTone>([
  'professional',
  'friendly',
  'formal',
  'casual',
  'academic',
  'persuasive',
  'simple',
]);

const VALID_SUMMARY_LENGTHS = new Set<SummaryLength>(['short', 'medium', 'detailed']);
const VALID_SUMMARY_FORMATS = new Set<SummaryFormat>([
  'paragraph',
  'bullets',
  'key-points',
  'simple',
]);

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export function validateWritingRequest(
  raw: unknown,
  config: ResolvedAiConfig
): WritingRequest {
  if (!raw || typeof raw !== 'object') {
    throw new RequestValidationError('Request body must be a JSON object.');
  }
  const obj = raw as Record<string, unknown>;
  const text = typeof obj.text === 'string' ? obj.text.trim() : '';

  if (!text) {
    throw new RequestValidationError('Please enter text to process.');
  }
  if (text.length < 3) {
    throw new RequestValidationError('Please enter at least 3 characters.');
  }
  if (text.length > config.maxChars.writing) {
    throw new RequestValidationError(
      `Text exceeds the maximum limit of ${config.maxChars.writing.toLocaleString()} characters per request.`,
      413
    );
  }

  const task = typeof obj.task === 'string' ? (obj.task as WritingTask) : 'improve-writing';
  if (!VALID_WRITING_TASKS.has(task)) {
    throw new RequestValidationError('Unsupported writing task option.');
  }

  const tone = typeof obj.tone === 'string' ? (obj.tone as WritingTone) : 'professional';
  if (!VALID_WRITING_TONES.has(tone)) {
    throw new RequestValidationError('Unsupported tone option.');
  }

  const language =
    typeof obj.language === 'string' && obj.language.trim()
      ? obj.language.trim().slice(0, 40)
      : 'English';

  return { text, task, tone, language };
}

export function validateSummarizeRequest(
  raw: unknown,
  config: ResolvedAiConfig
): SummarizeRequest {
  if (!raw || typeof raw !== 'object') {
    throw new RequestValidationError('Request body must be a JSON object.');
  }
  const obj = raw as Record<string, unknown>;
  const text = typeof obj.text === 'string' ? obj.text.trim() : '';

  if (!text) {
    throw new RequestValidationError('Please enter text to summarize.');
  }
  if (countWords(text) < 25 || text.length < 120) {
    throw new RequestValidationError(
      'Input text is too short to summarize meaningfully. Please provide at least 25 words (120+ characters).'
    );
  }
  if (text.length > config.maxChars.summarize) {
    throw new RequestValidationError(
      `Text exceeds the maximum limit of ${config.maxChars.summarize.toLocaleString()} characters per request.`,
      413
    );
  }

  const rawLength = typeof obj.length === 'string' ? obj.length.trim().toLowerCase() : 'medium';
  const length = (rawLength === 'long' ? 'detailed' : rawLength) as SummaryLength;
  if (!VALID_SUMMARY_LENGTHS.has(length)) {
    throw new RequestValidationError('Unsupported summary length option.');
  }

  const format = typeof obj.format === 'string' ? (obj.format as SummaryFormat) : 'paragraph';
  if (!VALID_SUMMARY_FORMATS.has(format)) {
    throw new RequestValidationError('Unsupported summary format option.');
  }

  const language =
    typeof obj.language === 'string' && obj.language.trim()
      ? obj.language.trim().slice(0, 40)
      : 'Same as original language';

  return { text, length, format, language };
}

export function validateFindToolRequest(
  raw: unknown,
  config: ResolvedAiConfig
): FindToolRequest {
  if (!raw || typeof raw !== 'object') {
    throw new RequestValidationError('Request body must be a JSON object.');
  }
  const obj = raw as Record<string, unknown>;
  const query = typeof obj.query === 'string' ? obj.query.trim() : '';

  if (!query || query.length < 2) {
    throw new RequestValidationError('Please describe the task or problem you want to solve.');
  }
  if (query.length > config.maxChars['find-tool']) {
    throw new RequestValidationError(
      `Query exceeds the maximum limit of ${config.maxChars['find-tool']} characters.`,
      413
    );
  }

  let candidates: ToolInventoryCandidate[] | undefined;
  if (Array.isArray(obj.candidates)) {
    candidates = obj.candidates
      .slice(0, 25)
      .filter((item): item is Record<string, unknown> => Boolean(item && typeof item === 'object'))
      .map((item) => ({
        id: String(item.id || '').slice(0, 80),
        slug: String(item.slug || '').slice(0, 80),
        name: String(item.name || '').slice(0, 120),
        shortDescription: String(item.shortDescription || '').slice(0, 260),
        categoryName: String(item.categoryName || '').slice(0, 80),
        keywords: Array.isArray(item.keywords)
          ? item.keywords.slice(0, 8).map((k) => String(k).slice(0, 50))
          : [],
        ioFormats: typeof item.ioFormats === 'string' ? item.ioFormats.slice(0, 120) : undefined,
      }))
      .filter((c) => Boolean(c.slug && c.name));
  }

  return { query, candidates };
}
