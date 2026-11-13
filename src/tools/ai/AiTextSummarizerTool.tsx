import {
  AlertCircle,
  CheckCircle2,
  ClipboardPaste,
  Clock,
  Columns2,
  Download,
  FileText,
  ListChecks,
  Loader2,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Square,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import {
  fetchAiHealth,
  postAiJson,
  type AiErrorResponse,
  type QuotaStatus,
  type SummarizeRequestPayload,
  type SummaryFormat,
  type SummaryLength,
} from '../../config/ai';

const MAX_CHARS = 25_000;
const MIN_WORDS = 25;
const MIN_CHARS = 120;

interface LengthOption {
  value: SummaryLength;
  label: string;
  ratio: string;
}

const LENGTH_OPTIONS: LengthOption[] = [
  { value: 'short', label: 'Short', ratio: '~10–20% length' },
  { value: 'medium', label: 'Medium', ratio: '~30–40% length' },
  { value: 'detailed', label: 'Long (Detailed)', ratio: '~50–60% length' },
];

interface FormatOption {
  value: SummaryFormat;
  label: string;
  hint: string;
}

const FORMAT_OPTIONS: FormatOption[] = [
  { value: 'paragraph', label: 'Paragraph Summary', hint: 'Smooth cohesive prose' },
  { value: 'bullets', label: 'Bullet Point Summary', hint: 'Clean scannable bullets' },
  { value: 'key-points', label: 'Key Points Extraction', hint: 'Numbered takeaways' },
  { value: 'simple', label: 'Simple Language', hint: 'Plain everyday wording' },
];

const LANGUAGES: string[] = [
  'Same as original language',
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
];

const SAMPLE_ARTICLE =
  'In 2026, distributed product engineering teams increasingly rely on asynchronous written updates rather than daily status meetings to protect deep-focus development time. Across a six-month internal study of 140 engineers working across London, Berlin, and Toronto, teams that replaced three weekly sync calls with structured Tuesday and Thursday written digests reported a 28% reduction in calendar fragmentation and delivered sprint milestones 14% faster. Crucially, the study found that written updates only succeeded when engineers followed three consistent rules: stating concrete blockers at the top, linking directly to pull requests or issue IDs, and recording exact target dates instead of vague phrases like "soon". Managers still kept one live 25-minute weekly session dedicated exclusively to open architectural trade-offs and team check-ins, preserving interpersonal rapport without interrupting coding blocks.';

function countWords(value: string): number {
  const trimmed = value.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

function estimateReadingSeconds(wordCount: number): number {
  if (wordCount <= 0) return 0;
  // Standard ~200 words per minute silent reading pace
  return Math.max(1, Math.round((wordCount / 200) * 60));
}

function formatDuration(totalSeconds: number): string {
  if (totalSeconds <= 0) return '0 sec';
  if (totalSeconds < 60) return `${totalSeconds} sec`;
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return secs > 0 ? `${mins} min ${secs} sec` : `${mins} min`;
}

export default function AiTextSummarizerTool() {
  const [text, setText] = useState('');
  const [length, setLength] = useState<SummaryLength>('medium');
  const [format, setFormat] = useState<SummaryFormat>('bullets');
  const [language, setLanguage] = useState('Same as original language');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AiErrorResponse['error'] | null>(null);
  const [pasteHint, setPasteHint] = useState<string | null>(null);

  const [submittedOriginal, setSubmittedOriginal] = useState('');
  const [summaryText, setSummaryText] = useState('');
  const [resultMeta, setResultMeta] = useState<{
    model: string;
    fallbackUsed: boolean;
  } | null>(null);
  const [viewMode, setViewMode] = useState<'compare' | 'summary'>('compare');

  const [quota, setQuota] = useState<QuotaStatus | null>(null);
  const [backendConfigured, setBackendConfigured] = useState<boolean | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchAiHealth(controller.signal).then((health) => {
      if (!health) return;
      setBackendConfigured(health.configuredProviders.groq);
      const sumQuota = health.quota.limits.summarize;
      setQuota({
        limit: sumQuota.limit,
        remaining: sumQuota.remaining,
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
  const inputReadingSec = useMemo(() => estimateReadingSeconds(inputWords), [inputWords]);

  const originalWords = useMemo(() => countWords(submittedOriginal), [submittedOriginal]);
  const summaryWords = useMemo(() => countWords(summaryText), [summaryText]);
  const summaryChars = summaryText.length;
  const summaryReadingSec = useMemo(() => estimateReadingSeconds(summaryWords), [summaryWords]);

  const originalReadingSec = useMemo(
    () => estimateReadingSeconds(originalWords),
    [originalWords]
  );
  const savedPercent =
    originalWords > 0 && summaryWords > 0
      ? Math.max(0, Math.round(((originalWords - summaryWords) / originalWords) * 100))
      : 0;
  const savedSeconds = Math.max(0, originalReadingSec - summaryReadingSec);

  const isEmpty = text.trim().length === 0;
  const isTooShort = !isEmpty && (inputWords < MIN_WORDS || text.trim().length < MIN_CHARS);
  const isOverLimit = inputChars > MAX_CHARS;

  const handleLoadSample = () => {
    setText(SAMPLE_ARTICLE);
    setError(null);
    setPasteHint(null);
  };

  const handlePaste = async () => {
    setPasteHint(null);
    if (!navigator.clipboard?.readText) {
      setPasteHint('Browser clipboard read is unavailable here—use Ctrl/Cmd + V inside the editor.');
      return;
    }
    try {
      const clip = await navigator.clipboard.readText();
      if (!clip.trim()) {
        setPasteHint('Your clipboard does not contain any text right now.');
        return;
      }
      setText(clip);
      setError(null);
    } catch {
      setPasteHint('Clipboard permission was blocked—paste directly using Ctrl/Cmd + V.');
    }
  };

  const handleClear = () => {
    abortRef.current?.abort();
    setLoading(false);
    setText('');
    setSubmittedOriginal('');
    setSummaryText('');
    setResultMeta(null);
    setError(null);
    setPasteHint(null);
  };

  const handleCancel = () => {
    abortRef.current?.abort();
    setLoading(false);
  };

  const handleSummarize = async () => {
    if (loading) return;
    const trimmed = text.trim();
    if (!trimmed) {
      setError({
        code: 'BAD_REQUEST',
        message: 'Please paste or type an article, report, or notes before summarizing.',
      });
      return;
    }
    if (countWords(trimmed) < MIN_WORDS || trimmed.length < MIN_CHARS) {
      setError({
        code: 'BAD_REQUEST',
        message: `Your text is too short to summarize meaningfully (${countWords(
          trimmed
        )} words). Please enter at least ${MIN_WORDS} words and ${MIN_CHARS} characters.`,
      });
      return;
    }
    if (text.length > MAX_CHARS) {
      setError({
        code: 'PAYLOAD_TOO_LARGE',
        message: `Input exceeds the ${MAX_CHARS.toLocaleString()} character limit. Shorten your text by ${(
          text.length - MAX_CHARS
        ).toLocaleString()} characters and try again.`,
      });
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);
    setPasteHint(null);

    try {
      const payload: SummarizeRequestPayload = {
        text,
        length,
        format,
        language,
      };
      const response = await postAiJson<SummarizeRequestPayload, string>(
        'summarize',
        payload,
        controller.signal
      );

      if (response.ok) {
        setSubmittedOriginal(text);
        setSummaryText(response.data);
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
        message: 'Temporary connection issue while summarizing. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadTxt = () => {
    if (!summaryText) return;
    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `utilityflow-${length}-${format}-summary.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Top Status & Free Allowance Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-2 text-slate-700">
          <ListChecks className="w-4 h-4 text-indigo-600 shrink-0" aria-hidden="true" />
          <span className="font-medium">Free AI Text Summarizer</span>
          <span className="text-slate-400" aria-hidden="true">
            ·
          </span>
          <span className="text-slate-600">No account, credits, or login required</span>
        </div>

        <div className="text-xs text-slate-600 tabular-nums">
          {quota ? (
            <span>
              Daily free allowance:{' '}
              <strong className="font-semibold text-slate-900">
                {quota.remaining} / {quota.limit}
              </strong>{' '}
              left today
            </span>
          ) : (
            <span>Up to 5 free summaries / day</span>
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
            <p className="font-semibold">AI backend key is not active yet in this environment.</p>
            <p className="mt-0.5">
              Ensure <code className="font-mono text-xs">GROQ_API_KEY</code> is configured to run
              live AI summarization.
            </p>
          </div>
        </div>
      )}

      {/* Summary Length, Format & Language Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5">
          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            1. Summary Length
          </span>
          <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Summary length">
            {LENGTH_OPTIONS.map((opt) => {
              const selected = opt.value === length;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setLength(opt.value)}
                  className={`flex flex-col items-start rounded-lg border px-3 py-2 text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${
                    selected
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-indigo-300 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xs font-semibold">{opt.label}</span>
                  <span className="text-[11px] text-slate-500 mt-0.5">{opt.ratio}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-4">
          <label
            htmlFor="ai-summary-format"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2"
          >
            2. Summary Format
          </label>
          <select
            id="ai-summary-format"
            value={format}
            onChange={(e) => setFormat(e.target.value as SummaryFormat)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          >
            {FORMAT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label} — {opt.hint}
              </option>
            ))}
          </select>
        </div>

        <div className="lg:col-span-3">
          <label
            htmlFor="ai-summary-language"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2"
          >
            3. Output Language
          </label>
          <select
            id="ai-summary-language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Text Input Toolbar & Textarea */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <label
            htmlFor="ai-summarizer-input"
            className="text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            4. Source Text to Summarize
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => void handlePaste()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <ClipboardPaste className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
              <span>Paste</span>
            </button>
            <button
              type="button"
              onClick={handleLoadSample}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
              <span>Load sample</span>
            </button>
            <button
              type="button"
              onClick={handleClear}
              disabled={!text && !summaryText && !error}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {pasteHint && (
          <p className="mb-2 text-xs text-amber-700" role="status">
            {pasteHint}
          </p>
        )}

        <textarea
          id="ai-summarizer-input"
          rows={9}
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
              void handleSummarize();
            }
          }}
          placeholder="Paste an article, research notes, meeting transcript, or essay here (minimum 25 words / 120 characters, up to 25,000 characters)..."
          aria-describedby="ai-summarizer-counters"
          className={`w-full rounded-xl border bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
            isOverLimit
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
              : 'border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/20'
          }`}
        />

        {/* Counters + Reading Time + Action Button */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div
            id="ai-summarizer-counters"
            className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 tabular-nums"
          >
            <span>
              <strong className="font-semibold text-slate-900">{inputWords.toLocaleString()}</strong>{' '}
              {inputWords === 1 ? 'word' : 'words'}
            </span>
            <span className="text-slate-300" aria-hidden="true">
              |
            </span>
            <span className={isOverLimit ? 'font-semibold text-red-600' : ''}>
              <strong className={isOverLimit ? 'text-red-600' : 'font-semibold text-slate-900'}>
                {inputChars.toLocaleString()}
              </strong>{' '}
              / {MAX_CHARS.toLocaleString()} chars
            </span>
            <span className="text-slate-300" aria-hidden="true">
              |
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <span>Est. read: {formatDuration(inputReadingSec)}</span>
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
                <span>Stop</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => void handleSummarize()}
              disabled={loading || isEmpty || isOverLimit}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer min-h-[42px]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  <span>Summarizing...</span>
                </>
              ) : (
                <>
                  <ListChecks className="w-4 h-4" aria-hidden="true" />
                  <span>Summarize Text</span>
                </>
              )}
            </button>
          </div>
        </div>

        {isTooShort && (
          <p className="mt-2 text-xs text-amber-700">
            Add at least {Math.max(0, MIN_WORDS - inputWords)} more words (minimum {MIN_WORDS} words
            and {MIN_CHARS} characters) so the AI can extract a meaningful summary.
          </p>
        )}
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div
          aria-live="polite"
          className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-5 space-y-3"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-indigo-700">
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>
              Generating {length === 'detailed' ? 'long' : length} summary ({format} format)...
            </span>
          </div>
          <div className="space-y-2 animate-pulse">
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-10/12" />
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-full" />
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-3/4" />
          </div>
        </div>
      )}

      {/* Error Alert */}
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
                  ? 'Daily Free Summary Limit Reached'
                  : error.code === 'RATE_LIMITED'
                  ? 'Please Slow Down Slightly'
                  : error.code === 'GLOBAL_QUOTA_EXHAUSTED'
                  ? 'Platform Daily Capacity Reached'
                  : 'Unable to Summarize Right Now'}
              </p>
              <p className="mt-0.5 text-xs sm:text-sm">{error.message}</p>
            </div>
          </div>

          {(error.code === 'SERVICE_UNAVAILABLE' ||
            error.code === 'RATE_LIMITED' ||
            error.code === 'INTERNAL_ERROR') && (
            <button
              type="button"
              onClick={() => void handleSummarize()}
              className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-lg border border-red-300 bg-white px-3 py-1.5 text-xs font-semibold text-red-800 hover:bg-red-50 cursor-pointer shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Retry</span>
            </button>
          )}
        </div>
      )}

      {/* Summary Result & Comparison */}
      {summaryText && !loading && (
        <section
          aria-label="Generated summary and comparison"
          className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <h2 className="text-base font-bold text-slate-900">Summary Result</h2>
              <span className="text-xs text-slate-500 tabular-nums">
                ({summaryWords.toLocaleString()} words · {summaryChars.toLocaleString()} chars ·{' '}
                {savedPercent}% shorter)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <CopyButton text={summaryText} label="Copy summary" copiedLabel="Copied!" />

              <button
                type="button"
                onClick={handleDownloadTxt}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Download TXT</span>
              </button>
            </div>
          </div>

          {/* Reading Time & Compression Stats */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-lg border border-slate-200 bg-white px-3.5 py-2.5">
              <dt className="text-[11px] uppercase tracking-wider text-slate-500">Original Read</dt>
              <dd className="mt-0.5 text-sm font-bold text-slate-900 tabular-nums">
                {originalWords.toLocaleString()} words · {formatDuration(originalReadingSec)}
              </dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-3.5 py-2.5">
              <dt className="text-[11px] uppercase tracking-wider text-slate-500">Summary Read</dt>
              <dd className="mt-0.5 text-sm font-bold text-indigo-600 tabular-nums">
                {summaryWords.toLocaleString()} words · {formatDuration(summaryReadingSec)}
              </dd>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-2.5">
              <dt className="text-[11px] uppercase tracking-wider text-emerald-700">
                Compression &amp; Time Saved
              </dt>
              <dd className="mt-0.5 text-sm font-bold text-emerald-800 tabular-nums">
                {savedPercent}% shorter · saves ~{formatDuration(savedSeconds)}
              </dd>
            </div>
          </dl>

          {/* View Mode Toggle */}
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1 gap-1">
            <button
              type="button"
              onClick={() => setViewMode('compare')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'compare'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Columns2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Original vs. Summary</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('summary')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'summary'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Summary Only</span>
            </button>
          </div>

          {viewMode === 'compare' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  <span>Original Text</span>
                  <span className="tabular-nums font-normal">
                    {originalWords.toLocaleString()} words
                  </span>
                </div>
                <div className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-600 max-h-96 overflow-y-auto">
                  {submittedOriginal}
                </div>
              </div>

              <div className="rounded-xl border border-indigo-200 bg-white p-4">
                <div className="flex items-center justify-between text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-2">
                  <span>Summary Output</span>
                  <span className="tabular-nums font-normal text-slate-500">
                    {summaryWords.toLocaleString()} words
                  </span>
                </div>
                <div className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-900 max-h-96 overflow-y-auto">
                  {summaryText}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-indigo-200 bg-white p-4">
              <div className="whitespace-pre-wrap break-words text-sm sm:text-base leading-relaxed text-slate-900 max-h-[28rem] overflow-y-auto">
                {summaryText}
              </div>
            </div>
          )}

          {resultMeta && (
            <p className="text-xs text-slate-500">
              Summarized with free-tier Groq model{' '}
              <code className="font-mono text-slate-700">{resultMeta.model}</code>
              {resultMeta.fallbackUsed ? ' (automatic model fallback)' : ''}. Key names, dates, and
              figures are preserved strictly from your input.
            </p>
          )}
        </section>
      )}
    </div>
  );
}
