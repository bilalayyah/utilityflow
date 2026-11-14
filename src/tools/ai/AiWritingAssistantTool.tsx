import {
  AlertCircle,
  ArrowLeftRight,
  CheckCircle2,
  Columns2,
  Download,
  FileText,
  Loader2,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Square,
  Wand2,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { PASTEL_PALETTES, pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';
import {
  fetchAiHealth,
  postAiJson,
  type AiErrorResponse,
  type QuotaStatus,
  type WritingRequestPayload,
  type WritingTask,
  type WritingTone,
} from '../../config/ai';

const MAX_CHARS = 12_000;

const palette = pastelForKey('ai-writing-assistant');
const paletteAlt = PASTEL_PALETTES[(PASTEL_PALETTES.indexOf(palette) + 1) % PASTEL_PALETTES.length];

const STRINGS_EN = {
    tasks: {
      'fix-grammar': { label: 'Fix Grammar', hint: 'Correct grammar & punctuation' },
      'rewrite-text': { label: 'Rewrite Text', hint: 'Smooth flow & natural phrasing' },
      'improve-writing': { label: 'Improve Writing', hint: 'Polish clarity & word choice' },
      'make-professional': { label: 'Make Professional', hint: 'Workplace & executive clarity' },
      'make-casual': { label: 'Make Casual', hint: 'Relaxed everyday voice' },
      'simplify-text': { label: 'Simplify Text', hint: 'Clear, easy-to-read sentences' },
      'expand-text': { label: 'Expand Text', hint: 'Add helpful detail grounded in input' },
      paraphrase: { label: 'Paraphrase', hint: 'Fresh wording, same meaning' },
      'fix-spelling': { label: 'Fix Spelling', hint: 'Fix typos & capitalization only' },
      'write-email': { label: 'Write an Email', hint: 'Structured email with subject line' },
    },
    tones: {
      professional: 'Professional',
      friendly: 'Friendly',
      formal: 'Formal',
      casual: 'Casual',
      academic: 'Academic',
      persuasive: 'Persuasive',
      simple: 'Simple',
    },
    languageLabels: {
      'English (US)': 'English (US)',
      'English (UK)': 'English (UK)',
      Spanish: 'Spanish',
      French: 'French',
      German: 'German',
      Portuguese: 'Portuguese',
      Italian: 'Italian',
      Dutch: 'Dutch',
      Arabic: 'Arabic',
      Hindi: 'Hindi',
      Urdu: 'Urdu',
      Turkish: 'Turkish',
      Japanese: 'Japanese',
      Korean: 'Korean',
      'Chinese (Simplified)': 'Chinese (Simplified)',
      'Same as original language': 'Same as original language',
    },
    samples: {
      default:
        'Hi team, i wanted to folow up on yesterday meeting and share the update timeline for our Q4 product launch. Their are still two items we need review before friday, so please let me know if any blockers comes up.',
      'write-email':
        'need to update client Daniel about the mobile app launch. testing finished today, 2 minor UI bugs left to fix tomorrow morning, ready for App Store submission on Friday afternoon. ask if Monday 10am works for handoff call.',
      'fix-spelling':
        'We are delited to anounce that the quarterly maintenence window went smothly with zero unplaned downtime across all servrs.',
      'expand-text':
        'Remote async standups save engineering time and let global teammates focus deeply without constant calendar interruptions.',
    },
    title: 'Free AI Writing Assistant',
    noLogin: 'No login or card required',
    allowanceBefore: 'Daily free allowance:',
    allowanceAfter: 'left today',
    allowanceFallback: 'Up to 5 free requests / day',
    backendTitle: 'AI backend key is not active yet in this environment.',
    backendSet: 'Set',
    backendRest: 'on the server or Worker to enable live AI writing generation.',
    stepTask: '1. Choose Writing Task (10 Modes)',
    stepTone: '2. Tone',
    stepLanguage: '3. Output Language',
    stepText: '4. Your Original Text',
    taskSelectorAria: 'Writing task selector',
    placeholder:
      'Type or paste your paragraph, message, notes, or email draft here (up to 12,000 characters)...',
    word: 'word',
    words: 'words',
    characters: 'characters',
    chars: 'chars',
    tip: 'Tip: Press Ctrl + Enter to generate',
    stop: 'Stop',
    generating: 'Generating...',
    applying: 'Applying',
    tonePhrase: '{tone} tone',
    applyingIn: 'in',
    errorDailyLimit: 'Daily Free Limit Reached',
    errorRateLimited: 'Please Slow Down Slightly',
    errorGlobal: 'Platform Daily Capacity Reached',
    errorGeneric: 'Unable to Complete Writing Request',
    retry: 'Retry',
    emptyError: 'Please enter or paste some text before clicking Generate.',
    overLimitBefore: 'Input exceeds the ',
    overLimitMiddle: ' character limit. Shorten your draft by ',
    overLimitAfter: ' characters and try again.',
    connectionError: 'Temporary connection issue while generating. Please try again.',
    resultTitle: 'Improved Output',
    copyResult: 'Copy result',
    downloadTxt: 'Download TXT',
    editOutput: 'Edit output further',
    tabCompare: 'Original vs. Improved',
    tabDiff: 'Highlight Changes',
    tabResult: 'Result Only',
    resultAria: 'Improved writing result and comparison',
    originalText: 'Original Text',
    improvedText: 'Improved Text',
    removed: 'Removed',
    added: 'Added / Updated',
    processedWith: 'Processed with free-tier Groq model',
    fallbackNote: ' (automatic model fallback)',
    reviewNote: '. Always review final copy before sending.',
  };

const WRITING_TASK_VALUES: WritingTask[] = [
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
];

const WRITING_TONE_VALUES: WritingTone[] = [
  'professional',
  'friendly',
  'formal',
  'casual',
  'academic',
  'persuasive',
  'simple',
];

const LANGUAGES: string[] = [
  'English (US)',
  'English (UK)',
  'Spanish',
  'French',
  'German',
  'Portuguese',
  'Italian',
  'Dutch',
  'Arabic',
  'Hindi',
  'Urdu',
  'Turkish',
  'Japanese',
  'Korean',
  'Chinese (Simplified)',
  'Same as original language',
];

function countWords(value: string): number {
  const trimmed = value.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

interface DiffSegment {
  type: 'equal' | 'added' | 'removed';
  text: string;
}

/**
 * Lightweight word-level diff preserving whitespace for readable inline change comparison.
 */
function computeWordDiff(original: string, improved: string): DiffSegment[] {
  const origTokens = original.split(/(\s+)/).filter(Boolean);
  const impTokens = improved.split(/(\s+)/).filter(Boolean);

  // Guard huge inputs against O(N*M) DP table blowup; fallback cleanly to side-by-side summary
  if (origTokens.length * impTokens.length > 90_000) {
    return [
      { type: 'removed', text: original },
      { type: 'added', text: improved },
    ];
  }

  const m = origTokens.length;
  const n = impTokens.length;
  const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));

  for (let i = m - 1; i >= 0; i -= 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
      if (origTokens[i] === impTokens[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = dp[i + 1][j] >= dp[i][j + 1] ? dp[i + 1][j] : dp[i][j + 1];
      }
    }
  }

  const raw: DiffSegment[] = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (origTokens[i] === impTokens[j]) {
      raw.push({ type: 'equal', text: origTokens[i] });
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      raw.push({ type: 'removed', text: origTokens[i] });
      i += 1;
    } else {
      raw.push({ type: 'added', text: impTokens[j] });
      j += 1;
    }
  }
  while (i < m) {
    raw.push({ type: 'removed', text: origTokens[i] });
    i += 1;
  }
  while (j < n) {
    raw.push({ type: 'added', text: impTokens[j] });
    j += 1;
  }

  const merged: DiffSegment[] = [];
  for (const seg of raw) {
    const prev = merged[merged.length - 1];
    if (prev && prev.type === seg.type) {
      prev.text += seg.text;
    } else {
      merged.push({ ...seg });
    }
  }
  return merged;
}

export default function AiWritingAssistantTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('ai-writing-assistant', STRINGS_EN);
  const [text, setText] = useState('');
  const [task, setTask] = useState<WritingTask>('fix-grammar');
  const [tone, setTone] = useState<WritingTone>('professional');
  const [language, setLanguage] = useState('English (US)');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AiErrorResponse['error'] | null>(null);
  const [submittedOriginal, setSubmittedOriginal] = useState('');
  const [resultText, setResultText] = useState('');
  const [resultMeta, setResultMeta] = useState<{
    model: string;
    fallbackUsed: boolean;
  } | null>(null);
  const [viewMode, setViewMode] = useState<'compare' | 'diff' | 'result'>('compare');

  const [quota, setQuota] = useState<QuotaStatus | null>(null);
  const [backendConfigured, setBackendConfigured] = useState<boolean | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchAiHealth(controller.signal).then((health) => {
      if (!health) return;
      setBackendConfigured(health.configuredProviders.groq);
      const writingQuota = health.quota.limits.writing;
      setQuota({
        limit: writingQuota.limit,
        remaining: writingQuota.remaining,
        resetAtIso: health.quota.resetAtIso,
        globalRemaining: health.quota.globalRemaining,
      });
    });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const inputChars = text.length;
  const inputWords = useMemo(() => countWords(text), [text]);
  const outputChars = resultText.length;
  const outputWords = useMemo(() => countWords(resultText), [resultText]);
  const isOverLimit = inputChars > MAX_CHARS;
  const isEmpty = text.trim().length === 0;

  const diffSegments = useMemo(() => {
    if (!submittedOriginal || !resultText || viewMode !== 'diff') return [];
    return computeWordDiff(submittedOriginal, resultText);
  }, [submittedOriginal, resultText, viewMode]);

  const handleLoadSample = () => {
    setText(
      (s.samples as Partial<Record<WritingTask, string>>)[task] ?? s.samples.default
    );
    setError(null);
  };

  const handleClear = () => {
    abortRef.current?.abort();
    setLoading(false);
    setText('');
    setSubmittedOriginal('');
    setResultText('');
    setResultMeta(null);
    setError(null);
  };

  const handleCancel = () => {
    abortRef.current?.abort();
    setLoading(false);
  };

  const handleGenerate = async () => {
    if (loading) return;
    const trimmed = text.trim();
    if (!trimmed) {
      setError({
        code: 'BAD_REQUEST',
        message: s.emptyError,
      });
      return;
    }
    if (text.length > MAX_CHARS) {
      setError({
        code: 'PAYLOAD_TOO_LARGE',
        message: `${s.overLimitBefore}${MAX_CHARS.toLocaleString(locale)}${s.overLimitMiddle}${(
          text.length - MAX_CHARS
        ).toLocaleString(locale)}${s.overLimitAfter}`,
      });
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const payload: WritingRequestPayload = {
        text,
        task,
        tone,
        language,
      };
      const response = await postAiJson<WritingRequestPayload, string>(
        'writing',
        payload,
        controller.signal
      );

      if (response.ok) {
        setSubmittedOriginal(text);
        setResultText(response.data);
        setResultMeta({
          model: response.model,
          fallbackUsed: response.fallbackUsed,
        });
        setQuota(response.quota);
        setBackendConfigured(true);
      } else {
        setError(response.error);
        if (response.error.quota) {
          setQuota(response.error.quota);
        }
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        return;
      }
      setError({
        code: 'SERVICE_UNAVAILABLE',
        message: s.connectionError,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadTxt = () => {
    if (!resultText) return;
    const blob = new Blob([resultText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `utilityflow-${task}-result.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleUseOutputAsInput = () => {
    if (!resultText) return;
    setText(resultText);
    setError(null);
  };

  const activeTaskOption = { value: task, ...s.tasks[task] };
  const wordDelta = resultText ? outputWords - countWords(submittedOriginal) : 0;
  const languageLabel =
    (s.languageLabels as Record<string, string>)[language] ?? language;
  const tonePhrase = s.tonePhrase.replace('{tone}', s.tones[tone]);

  return (
    <div className="space-y-6">
      {/* Top Status & Free Allowance Bar */}
      <div className={`flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 ${palette.card} px-4 py-3 text-xs sm:text-sm`}>
        <div className="flex flex-wrap items-center gap-2 text-slate-700">
          <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" aria-hidden="true" />
          <span className="font-medium">{s.title}</span>
          <span className="text-slate-400" aria-hidden="true">
            ·
          </span>
          <span className="text-slate-600">{s.noLogin}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 tabular-nums">
          {quota ? (
            <span>
              {s.allowanceBefore}{' '}
              <strong className="font-semibold text-slate-900">
                {quota.remaining} / {quota.limit}
              </strong>{' '}
              {s.allowanceAfter}
            </span>
          ) : (
            <span>{s.allowanceFallback}</span>
          )}
        </div>
      </div>

      {backendConfigured === false && (
        <div
          role="status"
          className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs sm:text-sm text-amber-900"
        >
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold">{s.backendTitle}</p>
            <p className="mt-0.5">
              {s.backendSet} <code className="font-mono text-xs">GROQ_API_KEY</code>{' '}
              {s.backendRest}
            </p>
          </div>
        </div>
      )}

      {/* Quick Writing Task Selector (10 Tasks) */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <label
            htmlFor="ai-writing-task-select"
            className="text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            {s.stepTask}
          </label>
          <span className="text-xs text-slate-500 hidden sm:inline">{activeTaskOption.hint}</span>
        </div>

        {/* Accessible Select on small viewports + clean button grid on desktop/tablet */}
        <div className="sm:hidden">
          <select
            id="ai-writing-task-select"
            value={task}
            onChange={(e) => setTask(e.target.value as WritingTask)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          >
            {WRITING_TASK_VALUES.map((value) => (
              <option key={value} value={value}>
                {s.tasks[value].label} — {s.tasks[value].hint}
              </option>
            ))}
          </select>
        </div>

        <div
          className="hidden sm:grid grid-cols-2 md:grid-cols-5 gap-2"
          role="radiogroup"
          aria-label={s.taskSelectorAria}
        >
          {WRITING_TASK_VALUES.map((value) => {
            const opt = s.tasks[value];
            const selected = value === task;
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setTask(value)}
                className={`flex flex-col items-start rounded-lg border px-3 py-2 text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${
                  selected
                    ? `${palette.soft} border-indigo-600`
                    : 'border-slate-200 bg-white text-slate-800 hover:border-indigo-300 hover:bg-slate-50'
                }`}
              >
                <span className="text-xs font-semibold leading-snug">{opt.label}</span>
                <span className="text-[11px] text-slate-500 leading-tight mt-0.5 line-clamp-1">
                  {opt.hint}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tone & Language Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="ai-writing-tone"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
          >
            {s.stepTone}
          </label>
          <select
            id="ai-writing-tone"
            value={tone}
            onChange={(e) => setTone(e.target.value as WritingTone)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          >
            {WRITING_TONE_VALUES.map((value) => (
              <option key={value} value={value}>
                {s.tones[value]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="ai-writing-language"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
          >
            {s.stepLanguage}
          </label>
          <select
            id="ai-writing-language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {(s.languageLabels as Record<string, string>)[lang] ?? lang}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Editor Input Toolbar & Textarea */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <label
            htmlFor="ai-writing-input"
            className="text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            {s.stepText}
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleLoadSample}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
              <span>{t.common.loadSample}</span>
            </button>
            <button
              type="button"
              onClick={handleClear}
              disabled={!text && !resultText && !error}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.common.clear}</span>
            </button>
          </div>
        </div>

        <textarea
          id="ai-writing-input"
          rows={8}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error?.code === 'BAD_REQUEST' || error?.code === 'PAYLOAD_TOO_LARGE') {
              setError(null);
            }
          }}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
              e.preventDefault();
              void handleGenerate();
            }
          }}
          placeholder={s.placeholder}
          aria-describedby="ai-writing-counters"
          className={`w-full rounded-xl border bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
            isOverLimit
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
              : 'border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/20'
          }`}
        />

        {/* Character & Word Counter Row + Generate Button */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div
            id="ai-writing-counters"
            className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 tabular-nums"
          >
            <span>
              <strong className="font-semibold text-slate-900">{inputWords.toLocaleString(locale)}</strong>{' '}
              {inputWords === 1 ? s.word : s.words}
            </span>
            <span className="text-slate-300" aria-hidden="true">
              |
            </span>
            <span className={isOverLimit ? 'font-semibold text-red-600' : ''}>
              <strong className={isOverLimit ? 'text-red-600' : 'font-semibold text-slate-900'}>
                {inputChars.toLocaleString(locale)}
              </strong>{' '}
              / {MAX_CHARS.toLocaleString(locale)} {s.characters}
            </span>
            <span className="hidden md:inline text-xs text-slate-400">
              {s.tip}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {loading && (
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Square className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{s.stop}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => void handleGenerate()}
              disabled={loading || isEmpty || isOverLimit}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:from-indigo-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer min-h-[42px]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  <span>{s.generating}</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" aria-hidden="true" />
                  <span>{activeTaskOption.label}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Loading Animation Skeleton */}
      {loading && (
        <div
          aria-live="polite"
          className={`rounded-xl border border-indigo-200 ${palette.card} p-5 space-y-3`}
        >
          <div className="flex items-center gap-2 text-sm font-medium text-indigo-700">
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>
              {s.applying} <strong>{activeTaskOption.label}</strong> ({tonePhrase}){' '}
              {s.applyingIn} {languageLabel}...
            </span>
          </div>
          <div className="space-y-2 animate-pulse">
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-11/12" />
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-full" />
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-4/5" />
          </div>
        </div>
      )}

      {/* Clear Error Alert */}
      {error && !loading && (
        <div
          role="alert"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-800"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold">
                {error.code === 'DAILY_LIMIT_REACHED'
                  ? s.errorDailyLimit
                  : error.code === 'RATE_LIMITED'
                  ? s.errorRateLimited
                  : error.code === 'GLOBAL_QUOTA_EXHAUSTED'
                  ? s.errorGlobal
                  : s.errorGeneric}
              </p>
              <p className="mt-0.5 text-xs sm:text-sm">{error.message}</p>
            </div>
          </div>

          {(error.code === 'SERVICE_UNAVAILABLE' ||
            error.code === 'RATE_LIMITED' ||
            error.code === 'INTERNAL_ERROR') && (
            <button
              type="button"
              onClick={() => void handleGenerate()}
              className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-lg border border-red-300 bg-white px-3 py-1.5 text-xs font-semibold text-red-800 hover:bg-red-50 cursor-pointer shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.retry}</span>
            </button>
          )}
        </div>
      )}

      {/* Result & Original vs Improved Comparison */}
      {resultText && !loading && (
        <section
          aria-label={s.resultAria}
          className={`rounded-xl border border-slate-200 ${palette.card} p-4 sm:p-5 space-y-4`}
        >
          {/* Result Header + Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <h2 className="text-base font-bold text-slate-900">{s.resultTitle}</h2>
              <span className="text-xs text-slate-500 tabular-nums">
                ({outputWords.toLocaleString(locale)} {s.words} · {outputChars.toLocaleString(locale)} {s.chars}
                {wordDelta !== 0
                  ? ` · ${wordDelta > 0 ? `+${wordDelta}` : wordDelta} ${s.words}`
                  : ''}
                )
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <CopyButton text={resultText} label={s.copyResult} copiedLabel={t.common.copied} />

              <button
                type="button"
                onClick={handleDownloadTxt}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{s.downloadTxt}</span>
              </button>

              <button
                type="button"
                onClick={handleUseOutputAsInput}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{s.editOutput}</span>
              </button>
            </div>
          </div>

          {/* View Switcher Tabs: Side-by-Side | Word Changes | Result Only */}
          <div className="inline-flex flex-wrap rounded-lg border border-slate-200 bg-slate-100 p-1 gap-1">
            <button
              type="button"
              onClick={() => setViewMode('compare')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'compare'
                  ? `${palette.soft} shadow-xs`
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Columns2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.tabCompare}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('diff')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'diff'
                  ? `${palette.soft} shadow-xs`
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.tabDiff}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('result')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'result'
                  ? `${palette.soft} shadow-xs`
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.tabResult}</span>
            </button>
          </div>

          {/* Comparison Panels */}
          {viewMode === 'compare' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className={`rounded-xl border border-slate-200 ${paletteAlt.card} p-4`}>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  <span>{s.originalText}</span>
                  <span className="tabular-nums font-normal">
                    {countWords(submittedOriginal).toLocaleString(locale)} {s.words}
                  </span>
                </div>
                <div className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-600 max-h-96 overflow-y-auto">
                  {submittedOriginal}
                </div>
              </div>

              <div className={`rounded-xl border border-indigo-200 ${palette.card} p-4`}>
                <div className="flex items-center justify-between text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-2">
                  <span>{s.improvedText}</span>
                  <span className="tabular-nums font-normal text-slate-500">
                    {outputWords.toLocaleString(locale)} {s.words}
                  </span>
                </div>
                <div className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-900 max-h-96 overflow-y-auto">
                  {resultText}
                </div>
              </div>
            </div>
          )}

          {viewMode === 'diff' && (
            <div className={`rounded-xl border border-slate-200 ${palette.card} p-4 space-y-3`}>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-xs bg-red-50 border border-red-200" />
                  {s.removed}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-xs bg-emerald-50 border border-emerald-200" />
                  {s.added}
                </span>
              </div>
              <div className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-900 max-h-96 overflow-y-auto">
                {diffSegments.map((seg, idx) => {
                  if (seg.type === 'equal') {
                    return <span key={idx}>{seg.text}</span>;
                  }
                  if (seg.type === 'removed') {
                    return (
                      <del
                        key={idx}
                        className="rounded-xs bg-red-50 text-red-700 px-0.5 line-through decoration-red-400"
                      >
                        {seg.text}
                      </del>
                    );
                  }
                  return (
                    <ins
                      key={idx}
                      className="rounded-xs bg-emerald-50 text-emerald-800 px-0.5 no-underline font-medium"
                    >
                      {seg.text}
                    </ins>
                  );
                })}
              </div>
            </div>
          )}

          {viewMode === 'result' && (
            <div className={`rounded-xl border border-indigo-200 ${palette.card} p-4`}>
              <div className="whitespace-pre-wrap break-words text-sm sm:text-base leading-relaxed text-slate-900 max-h-[28rem] overflow-y-auto">
                {resultText}
              </div>
            </div>
          )}

          {resultMeta && (
            <p className="text-xs text-slate-500">
              {s.processedWith}{' '}
              <code className="font-mono text-slate-700">{resultMeta.model}</code>
              {resultMeta.fallbackUsed ? s.fallbackNote : ''}{s.reviewNote}
            </p>
          )}
        </section>
      )}
    </div>
  );
}
