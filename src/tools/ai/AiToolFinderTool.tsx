import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Compass,
  Info,
  Loader2,
  RefreshCw,
  RotateCcw,
  Search,
  Sparkles,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import type { FindToolAiResult, FindToolRequest } from '../../../worker/src/types';
import { fetchAiHealth, postAiJson, type AiErrorResponse, type QuotaStatus } from '../../config/ai';
import { CATEGORIES } from '../../registry/categories';
import {
  buildAiCandidateSlice,
  buildStructuredToolInventory,
  rankToolsLocally,
  type StructuredToolEntry,
} from '../../registry/toolInventory';
import type { CategoryId } from '../../types/tool';

const MAX_QUERY_CHARS = 500;

interface QuickTaskPrompt {
  label: string;
  query: string;
  categoryId: CategoryId | 'all';
}

const QUICK_TASKS: QuickTaskPrompt[] = [
  {
    label: 'Reduce image under 100KB',
    query: 'I want to reduce my image size to 100KB.',
    categoryId: 'image-file',
  },
  {
    label: 'Convert PDF into images',
    query: 'I need to convert a PDF into images.',
    categoryId: 'pdf',
  },
  {
    label: 'Count essay words',
    query: 'I want to count words in my essay.',
    categoryId: 'text-writing',
  },
  {
    label: 'Generate a QR code',
    query: 'I need to generate a QR code.',
    categoryId: 'social-media',
  },
  {
    label: 'Change image dimensions',
    query: "I want to change an image's dimensions.",
    categoryId: 'image-file',
  },
  {
    label: 'Fix grammar & rewrite email',
    query: 'I want AI to fix grammar mistakes and rewrite an email professionally.',
    categoryId: 'text-writing',
  },
  {
    label: 'Summarize a long article',
    query: 'I need to summarize a long article into key bullet points.',
    categoryId: 'text-writing',
  },
  {
    label: 'PDF to Word check',
    query: 'I need to convert a PDF to Word.',
    categoryId: 'all',
  },
];

const INITIAL_SUGGESTION_SLUGS = [
  'ai-writing-assistant',
  'ai-text-summarizer',
  'image-compressor',
  'pdf-to-images',
  'word-counter',
  'qr-code-generator',
  'json-formatter',
  'merge-pdf',
];

function parseAiFindResult(raw: string): FindToolAiResult | null {
  if (!raw || typeof raw !== 'string') return null;
  let cleaned = raw.trim();
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  }
  try {
    const parsed = JSON.parse(cleaned) as Partial<FindToolAiResult>;
    if (!parsed || typeof parsed !== 'object') return null;
    return {
      primarySlug: typeof parsed.primarySlug === 'string' ? parsed.primarySlug.trim() : null,
      primaryReason: typeof parsed.primaryReason === 'string' ? parsed.primaryReason.trim() : '',
      alternatives: Array.isArray(parsed.alternatives)
        ? parsed.alternatives
            .filter(
              (a): a is { slug: string; name: string; reason: string } =>
                Boolean(a && typeof a === 'object' && typeof a.slug === 'string')
            )
            .slice(0, 3)
        : [],
      noMatchMessage:
        typeof parsed.noMatchMessage === 'string' ? parsed.noMatchMessage.trim() : undefined,
    };
  } catch {
    return null;
  }
}

export default function AiToolFinderTool() {
  const inventory = useMemo(() => buildStructuredToolInventory(), []);
  const inventoryBySlug = useMemo(() => {
    const map = new Map<string, StructuredToolEntry>();
    for (const item of inventory) {
      map.set(item.slug.toLowerCase(), item);
    }
    return map;
  }, [inventory]);

  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const [loadingAi, setLoadingAi] = useState(false);
  const [aiError, setAiError] = useState<AiErrorResponse['error'] | null>(null);
  const [aiResult, setAiResult] = useState<FindToolAiResult | null>(null);
  const [aiMeta, setAiMeta] = useState<{ model: string; fallbackUsed: boolean } | null>(null);

  const [quota, setQuota] = useState<QuotaStatus | null>(null);
  const [backendConfigured, setBackendConfigured] = useState<boolean | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchAiHealth(controller.signal).then((health) => {
      if (!health) return;
      setBackendConfigured(health.configuredProviders.groq);
      const finderQuota = health.quota.limits['find-tool'];
      setQuota({
        limit: finderQuota.limit,
        remaining: finderQuota.remaining,
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

  // Fast initial suggestions shown immediately on page load (filtered if category changes)
  const initialSuggestions = useMemo(() => {
    if (selectedCategory === 'all') {
      const picks = INITIAL_SUGGESTION_SLUGS.map((slug) => inventoryBySlug.get(slug)).filter(
        (item): item is StructuredToolEntry => Boolean(item)
      );
      return picks;
    }
    return inventory.filter((item) => item.categoryId === selectedCategory).slice(0, 8);
  }, [inventory, inventoryBySlug, selectedCategory]);

  // Live instant local matches as the user types or submits
  const activeQueryForLocal = submittedQuery || query;
  const localMatches = useMemo(() => {
    if (!activeQueryForLocal.trim()) return [];
    return rankToolsLocally(activeQueryForLocal, inventory, selectedCategory).slice(0, 6);
  }, [activeQueryForLocal, inventory, selectedCategory]);

  // Strictly verify AI-recommended slugs against the real inventory map
  const verifiedAiRecommendation = useMemo(() => {
    if (!aiResult) return null;
    const primaryEntry = aiResult.primarySlug
      ? inventoryBySlug.get(aiResult.primarySlug.toLowerCase()) || null
      : null;

    const seen = new Set<string>(primaryEntry ? [primaryEntry.slug] : []);
    const alternatives: Array<{ entry: StructuredToolEntry; reason: string }> = [];

    for (const alt of aiResult.alternatives) {
      const entry = inventoryBySlug.get(alt.slug.toLowerCase());
      if (entry && !seen.has(entry.slug)) {
        seen.add(entry.slug);
        alternatives.push({
          entry,
          reason: alt.reason || entry.shortDescription,
        });
      }
      if (alternatives.length >= 3) break;
    }

    return {
      primaryEntry,
      primaryReason: aiResult.primaryReason,
      alternatives,
      noMatchMessage: aiResult.noMatchMessage,
    };
  }, [aiResult, inventoryBySlug]);

  const runSmartFind = async (targetQuery: string, catFilter: CategoryId | 'all' = selectedCategory) => {
    const trimmed = targetQuery.trim();
    if (trimmed.length < 2) {
      setAiError({
        code: 'BAD_REQUEST',
        message: 'Please describe the task or problem you want to solve (at least 2 characters).',
      });
      return;
    }
    if (trimmed.length > MAX_QUERY_CHARS) {
      setAiError({
        code: 'PAYLOAD_TOO_LARGE',
        message: `Query exceeds ${MAX_QUERY_CHARS} characters. Please keep your description concise.`,
      });
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setSubmittedQuery(trimmed);
    setLoadingAi(true);
    setAiError(null);
    setAiResult(null);
    setAiMeta(null);

    try {
      const candidates = buildAiCandidateSlice(trimmed, inventory, catFilter);
      const payload: FindToolRequest = {
        query: trimmed,
        candidates,
      };
      const response = await postAiJson<FindToolRequest, string>('find-tool', payload, controller.signal);

      if (response.ok) {
        const parsed = parseAiFindResult(response.data);
        if (parsed) {
          setAiResult(parsed);
          setAiMeta({
            model: response.model,
            fallbackUsed: response.fallbackUsed,
          });
        } else {
          setAiError({
            code: 'SERVICE_UNAVAILABLE',
            message:
              'AI returned an unexpected format. Fast keyword matches from our real inventory are shown below.',
          });
        }
        setQuota(response.quota);
        setBackendConfigured(true);
      } else {
        setAiError(response.error);
        if (response.error.quota) {
          setQuota(response.error.quota);
        }
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return;
      setAiError({
        code: 'SERVICE_UNAVAILABLE',
        message: 'Temporary issue contacting AI ranking. Keyword search results remain active below.',
      });
    } finally {
      setLoadingAi(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    void runSmartFind(query, selectedCategory);
  };

  const handlePickQuickTask = (prompt: QuickTaskPrompt) => {
    setQuery(prompt.query);
    setSelectedCategory(prompt.categoryId);
    void runSmartFind(prompt.query, prompt.categoryId);
  };

  const handleReset = () => {
    abortRef.current?.abort();
    setLoadingAi(false);
    setQuery('');
    setSubmittedQuery('');
    setSelectedCategory('all');
    setAiResult(null);
    setAiMeta(null);
    setAiError(null);
  };

  const hasSubmittedSearch = Boolean(submittedQuery);

  return (
    <div className="space-y-6">
      {/* Top Status & Free Allowance Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-2 text-slate-700">
          <Compass className="w-4 h-4 text-indigo-600 shrink-0" aria-hidden="true" />
          <span className="font-medium">AI Smart Tool Finder</span>
          <span className="text-slate-400" aria-hidden="true">
            ·
          </span>
          <span className="text-slate-600">
            Searches {inventory.length} real UtilityFlow tools (85 browser + 2 AI)
          </span>
        </div>

        <div className="text-xs text-slate-600 tabular-nums">
          {quota ? (
            <span>
              AI searches today:{' '}
              <strong className="font-semibold text-slate-900">
                {quota.remaining} / {quota.limit}
              </strong>{' '}
              left · Instant local search unlimited
            </span>
          ) : (
            <span>Up to 10 free AI searches / day · Unlimited local search</span>
          )}
        </div>
      </div>

      {backendConfigured === false && (
        <div
          role="status"
          className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs sm:text-sm text-amber-900"
        >
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            AI semantic ranking requires <code className="font-mono text-xs">GROQ_API_KEY</code> on
            the server, while instant local keyword search across all {inventory.length} tools works
            right away.
          </p>
        </div>
      )}

      {/* Conversational Search Form + Task Category Filter */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-8">
            <label
              htmlFor="ai-finder-query"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
            >
              Describe what you want to do (plain language or keywords)
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                aria-hidden="true"
              />
              <input
                id="ai-finder-query"
                type="text"
                maxLength={MAX_QUERY_CHARS}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (aiError?.code === 'BAD_REQUEST' || aiError?.code === 'PAYLOAD_TOO_LARGE') {
                    setAiError(null);
                  }
                }}
                placeholder='e.g. "I want to reduce my image size to 100KB" or "convert PDF into PNG"'
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <label
              htmlFor="ai-finder-category"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
            >
              Optional Task Category
            </label>
            <select
              id="ai-finder-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as CategoryId | 'all')}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            >
              <option value="all">All Categories ({inventory.length} tools)</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500 tabular-nums">
            {query.length} / {MAX_QUERY_CHARS} characters
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {(query || submittedQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Reset</span>
              </button>
            )}

            <button
              type="submit"
              disabled={loadingAi || query.trim().length < 2}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer min-h-[42px]"
            >
              {loadingAi ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  <span>Finding Best Tool...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span>Find Matching Tool</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Task Prompt Selector */}
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          Try a Real Task or Select a Common Question
        </div>
        <div className="flex flex-wrap gap-2">
          {QUICK_TASKS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handlePickQuickTask(item)}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loading Indicator for AI Search */}
      {loadingAi && (
        <div
          aria-live="polite"
          className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-5 space-y-3"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-indigo-700">
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>Matching your request against UtilityFlow&apos;s {inventory.length} verified tools...</span>
          </div>
          <div className="space-y-2 animate-pulse">
            <div className="h-4 rounded bg-slate-200 dark:bg-slate-700 w-2/3" />
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-11/12" />
          </div>
        </div>
      )}

      {/* AI Error Banner (still allows local search results below!) */}
      {aiError && !loadingAi && (
        <div
          role="alert"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3.5 text-sm text-amber-900"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold">AI Semantic Ranking Unavailable</p>
              <p className="mt-0.5 text-xs sm:text-sm">{aiError.message}</p>
            </div>
          </div>

          {(aiError.code === 'SERVICE_UNAVAILABLE' || aiError.code === 'RATE_LIMITED') &&
            submittedQuery && (
              <button
                type="button"
                onClick={() => void runSmartFind(submittedQuery, selectedCategory)}
                className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-50 cursor-pointer shrink-0"
              >
                <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Retry AI</span>
              </button>
            )}
        </div>
      )}

      {/* Verified AI Recommendations */}
      {verifiedAiRecommendation && !loadingAi && (
        <section aria-label="AI tool recommendations" className="space-y-4">
          {verifiedAiRecommendation.primaryEntry ? (
            <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50/40 p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>Best Recommended Tool</span>
                </div>
                <span className="text-xs text-slate-500">
                  {verifiedAiRecommendation.primaryEntry.categoryName} ·{' '}
                  {verifiedAiRecommendation.primaryEntry.requiresExternalApi
                    ? 'Free AI Tool'
                    : 'Browser-side'}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <h2 className="text-xl font-bold text-slate-900">
                    {verifiedAiRecommendation.primaryEntry.name}
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {verifiedAiRecommendation.primaryReason ||
                      verifiedAiRecommendation.primaryEntry.shortDescription}
                  </p>
                  {verifiedAiRecommendation.primaryEntry.ioFormats && (
                    <p className="text-xs text-slate-500 font-mono">
                      Supported: {verifiedAiRecommendation.primaryEntry.ioFormats}
                    </p>
                  )}
                </div>

                <Link
                  to={verifiedAiRecommendation.primaryEntry.url}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Open Tool</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-900">
                <Info className="w-4 h-4 text-amber-700 shrink-0" aria-hidden="true" />
                <span>No Exact Matching Tool Currently Available</span>
              </div>
              <p className="text-sm text-amber-900 leading-relaxed">
                {verifiedAiRecommendation.noMatchMessage ||
                  `UtilityFlow does not currently include a dedicated tool that directly performs "${submittedQuery}". We never invent fake tools or links.`}
              </p>
            </div>
          )}

          {verifiedAiRecommendation.alternatives.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                {verifiedAiRecommendation.primaryEntry
                  ? 'Relevant Alternatives'
                  : 'Related Existing Tools (Partial Workflows Only)'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {verifiedAiRecommendation.alternatives.map(({ entry, reason }) => (
                  <div
                    key={entry.slug}
                    className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 gap-3"
                  >
                    <div className="space-y-1.5">
                      <div className="text-xs text-slate-500">{entry.categoryName}</div>
                      <h4 className="text-base font-bold text-slate-900">{entry.name}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{reason}</p>
                      {entry.ioFormats && (
                        <p className="text-[11px] font-mono text-slate-500">{entry.ioFormats}</p>
                      )}
                    </div>
                    <Link
                      to={entry.url}
                      className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                    >
                      <span>Open {entry.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {aiMeta && (
            <p className="text-xs text-slate-500">
              Matched across verified UtilityFlow inventory using free-tier Groq model{' '}
              <code className="font-mono text-slate-700">{aiMeta.model}</code>
              {aiMeta.fallbackUsed ? ' (automatic fallback)' : ''}.
            </p>
          )}
        </section>
      )}

      {/* Fast Local Ranked Matches (while typing or after submit) */}
      {(query.trim().length >= 2 || hasSubmittedSearch) && localMatches.length > 0 && (
        <section aria-label="Instant keyword matches" className="space-y-3 pt-2 border-t border-slate-200">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-slate-900">
              Instant Keyword Matches ({localMatches.length})
            </h3>
            <span className="text-xs text-slate-500">Matched locally from {inventory.length} tools</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {localMatches.map(({ entry, matchedTerms }) => (
              <Link
                key={entry.slug}
                to={entry.url}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 hover:border-indigo-300 hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-1.5">
                    <span>{entry.categoryName}</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-700">
                    {entry.name}
                  </div>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">{entry.shortDescription}</p>
                </div>
                {matchedTerms.length > 0 && (
                  <p className="mt-2.5 pt-2 border-t border-slate-100 text-[11px] text-slate-500 truncate">
                    Matched: {matchedTerms.join(', ')}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Smart Initial Suggestions on Page Load */}
      {!hasSubmittedSearch && query.trim().length < 2 && (
        <section aria-label="Smart suggested tools on page load" className="space-y-3 pt-2 border-t border-slate-200">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-bold text-slate-900">
              Smart Suggestions {selectedCategory === 'all' ? 'Across Popular Tasks' : 'in Selected Category'}
            </h2>
            <span className="text-xs text-slate-500">Click any tool to open directly</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {initialSuggestions.map((entry) => (
              <Link
                key={entry.slug}
                to={entry.url}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 hover:border-indigo-300 hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-1.5">
                    <span className="truncate">{entry.categoryName}</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-700">
                    {entry.name}
                  </div>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">{entry.shortDescription}</p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-100 text-[11px] font-medium text-indigo-600">
                  Open tool →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
