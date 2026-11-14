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
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';
import { PASTEL_PALETTES, pastelForKey } from '../../components/tool/pastel';
import { getLocalizedCategories } from '../../locales/tools';
import {
  buildAiCandidateSlice,
  buildStructuredToolInventory,
  rankToolsLocally,
  type StructuredToolEntry,
} from '../../registry/toolInventory';
import type { CategoryId } from '../../types/tool';

const MAX_QUERY_CHARS = 500;

const palette = pastelForKey('ai-tool-finder');

const STRINGS_EN = {
    quickTasks: [
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
    ],
    title: 'AI Smart Tool Finder',
    searchesLine: 'Searches {count} real UtilityFlow tools (85 browser + 2 AI)',
    aiSearchesToday: 'AI searches today:',
    leftUnlimited: 'left · Instant local search unlimited',
    quotaFallback: 'Up to 10 free AI searches / day · Unlimited local search',
    backendBefore: 'AI semantic ranking requires ',
    backendAfter:
      ' on the server, while instant local keyword search across all {count} tools works right away.',
    queryLabel: 'Describe what you want to do (plain language or keywords)',
    queryPlaceholder:
      'e.g. "I want to reduce my image size to 100KB" or "convert PDF into PNG"',
    categoryLabel: 'Optional Task Category',
    allCategories: 'All Categories ({count} tools)',
    characters: 'characters',
    findButton: 'Find Matching Tool',
    findingButton: 'Finding Best Tool...',
    tryTask: 'Try a Real Task or Select a Common Question',
    loadingLine: "Matching your request against UtilityFlow's {count} verified tools...",
    errorTitle: 'AI Semantic Ranking Unavailable',
    retryAi: 'Retry AI',
    describeError: 'Please describe the task or problem you want to solve (at least 2 characters).',
    queryTooLongBefore: 'Query exceeds ',
    queryTooLongAfter: ' characters. Please keep your description concise.',
    unexpectedFormat:
      'AI returned an unexpected format. Fast keyword matches from our real inventory are shown below.',
    contactError:
      'Temporary issue contacting AI ranking. Keyword search results remain active below.',
    bestTool: 'Best Recommended Tool',
    noExact: 'No Exact Matching Tool Currently Available',
    noMatchFallback:
      'UtilityFlow does not currently include a dedicated tool that directly performs "{query}". We never invent fake tools or links.',
    relevantAlt: 'Relevant Alternatives',
    relatedTools: 'Related Existing Tools (Partial Workflows Only)',
    supportedPrefix: 'Supported: ',
    openName: 'Open {name}',
    matchedWith: 'Matched across verified UtilityFlow inventory using free-tier Groq model',
    fallbackNote: ' (automatic fallback)',
    instantMatches: 'Instant Keyword Matches ({count})',
    matchedLocally: 'Matched locally from {count} tools',
    matchedPrefix: 'Matched: ',
    suggestionsTitle: 'Smart Suggestions',
    suggestionsAll: 'Across Popular Tasks',
    suggestionsCategory: 'in Selected Category',
    clickOpen: 'Click any tool to open directly',
    openToolArrow: 'Open tool →',
    recommendationsAria: 'AI tool recommendations',
    instantAria: 'Instant keyword matches',
    suggestionsAria: 'Smart suggested tools on page load',
  };

interface QuickTaskPrompt {
  label: string;
  query: string;
  categoryId: CategoryId | 'all';
}

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
  const { locale, t } = useLocale();
  const s = useComponentStrings('ai-tool-finder', STRINGS_EN);
  const inventory = useMemo(() => buildStructuredToolInventory(locale), [locale]);
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
        message: s.describeError,
      });
      return;
    }
    if (trimmed.length > MAX_QUERY_CHARS) {
      setAiError({
        code: 'PAYLOAD_TOO_LARGE',
        message: `${s.queryTooLongBefore}${MAX_QUERY_CHARS}${s.queryTooLongAfter}`,
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
            message: s.unexpectedFormat,
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
        message: s.contactError,
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
      <div className={`flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 ${palette.card} px-4 py-3 text-xs sm:text-sm`}>
        <div className="flex flex-wrap items-center gap-2 text-slate-700">
          <Compass className="w-4 h-4 text-indigo-600 shrink-0" aria-hidden="true" />
          <span className="font-medium">{s.title}</span>
          <span className="text-slate-400" aria-hidden="true">
            ·
          </span>
          <span className="text-slate-600">
            {s.searchesLine.replace('{count}', String(inventory.length))}
          </span>
        </div>

        <div className="text-xs text-slate-600 tabular-nums">
          {quota ? (
            <span>
              {s.aiSearchesToday}{' '}
              <strong className="font-semibold text-slate-900">
                {quota.remaining} / {quota.limit}
              </strong>{' '}
              {s.leftUnlimited}
            </span>
          ) : (
            <span>{s.quotaFallback}</span>
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
            {s.backendBefore} <code className="font-mono text-xs">GROQ_API_KEY</code>{' '}
            {s.backendAfter.replace('{count}', String(inventory.length))}
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
              {s.queryLabel}
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
                placeholder={s.queryPlaceholder}
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <label
              htmlFor="ai-finder-category"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
            >
              {s.categoryLabel}
            </label>
            <select
              id="ai-finder-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as CategoryId | 'all')}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            >
              <option value="all">{s.allCategories.replace('{count}', String(inventory.length))}</option>
              {getLocalizedCategories(locale).map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500 tabular-nums">
            {query.length} / {MAX_QUERY_CHARS} {s.characters}
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {(query || submittedQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.common.reset}</span>
              </button>
            )}

            <button
              type="submit"
              disabled={loadingAi || query.trim().length < 2}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:from-indigo-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer min-h-[42px]"
            >
              {loadingAi ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  <span>{s.findingButton}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span>{s.findButton}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Task Prompt Selector */}
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          {s.tryTask}
        </div>
        <div className="flex flex-wrap gap-2">
          {s.quickTasks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() =>
                handlePickQuickTask({
                  label: item.label,
                  query: item.query,
                  categoryId: item.categoryId as CategoryId | 'all',
                })
              }
              className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[s.quickTasks.indexOf(item) % PASTEL_PALETTES.length].card} px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer`}
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
          className={`rounded-xl border border-indigo-200 ${palette.card} p-5 space-y-3`}
        >
          <div className="flex items-center gap-2 text-sm font-medium text-indigo-700">
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>{s.loadingLine.replace('{count}', String(inventory.length))}</span>
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
              <p className="font-semibold">{s.errorTitle}</p>
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
                <span>{s.retryAi}</span>
              </button>
            )}
        </div>
      )}

      {/* Verified AI Recommendations */}
      {verifiedAiRecommendation && !loadingAi && (
        <section aria-label={s.recommendationsAria} className="space-y-4">
          {verifiedAiRecommendation.primaryEntry ? (
            <div className={`rounded-xl border-2 border-indigo-200 ${palette.card} p-5 space-y-3`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>{s.bestTool}</span>
                </div>
                <span className="text-xs text-slate-500">
                  {verifiedAiRecommendation.primaryEntry.categoryName} ·{' '}
                  {verifiedAiRecommendation.primaryEntry.requiresExternalApi
                    ? t.common.freeAiTool
                    : t.common.browserSide}
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
                      {s.supportedPrefix}{verifiedAiRecommendation.primaryEntry.ioFormats}
                    </p>
                  )}
                </div>

                <Link
                  to={verifiedAiRecommendation.primaryEntry.url}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:from-indigo-700 hover:to-violet-700 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>{t.common.openTool}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-900">
                <Info className="w-4 h-4 text-amber-700 shrink-0" aria-hidden="true" />
                <span>{s.noExact}</span>
              </div>
              <p className="text-sm text-amber-900 leading-relaxed">
                {verifiedAiRecommendation.noMatchMessage ||
                  s.noMatchFallback.replace('{query}', submittedQuery)}
              </p>
            </div>
          )}

          {verifiedAiRecommendation.alternatives.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                {verifiedAiRecommendation.primaryEntry
                  ? s.relevantAlt
                  : s.relatedTools}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {verifiedAiRecommendation.alternatives.map(({ entry, reason }) => (
                  <div
                    key={entry.slug}
                    className={`flex flex-col justify-between rounded-xl border border-slate-200 ${PASTEL_PALETTES[verifiedAiRecommendation.alternatives.findIndex((a) => a.entry.slug === entry.slug) % PASTEL_PALETTES.length].card} p-4 gap-3`}
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
                      <span>{s.openName.replace('{name}', entry.name)}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {aiMeta && (
            <p className="text-xs text-slate-500">
              {s.matchedWith}{' '}
              <code className="font-mono text-slate-700">{aiMeta.model}</code>
              {aiMeta.fallbackUsed ? s.fallbackNote : ''}.
            </p>
          )}
        </section>
      )}

      {/* Fast Local Ranked Matches (while typing or after submit) */}
      {(query.trim().length >= 2 || hasSubmittedSearch) && localMatches.length > 0 && (
        <section aria-label={s.instantAria} className="space-y-3 pt-2 border-t border-slate-200">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-slate-900">
              {s.instantMatches.replace('{count}', String(localMatches.length))}
            </h3>
            <span className="text-xs text-slate-500">{s.matchedLocally.replace('{count}', String(inventory.length))}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {localMatches.map(({ entry, matchedTerms }) => (
              <Link
                key={entry.slug}
                to={entry.url}
                className={`group flex flex-col justify-between rounded-xl border border-slate-200 ${PASTEL_PALETTES[localMatches.findIndex((m) => m.entry.slug === entry.slug) % PASTEL_PALETTES.length].card} p-4 hover:border-indigo-300 hover:shadow-xs transition-all`}
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
                    {s.matchedPrefix}{matchedTerms.join(', ')}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Smart Initial Suggestions on Page Load */}
      {!hasSubmittedSearch && query.trim().length < 2 && (
        <section aria-label={s.suggestionsAria} className="space-y-3 pt-2 border-t border-slate-200">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-bold text-slate-900">
              {s.suggestionsTitle}{' '}
              {selectedCategory === 'all' ? s.suggestionsAll : s.suggestionsCategory}
            </h2>
            <span className="text-xs text-slate-500">{s.clickOpen}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {initialSuggestions.map((entry) => (
              <Link
                key={entry.slug}
                to={entry.url}
                className={`group flex flex-col justify-between rounded-xl border border-slate-200 ${PASTEL_PALETTES[initialSuggestions.indexOf(entry) % PASTEL_PALETTES.length].card} p-4 hover:border-indigo-300 hover:shadow-xs transition-all`}
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
                  {s.openToolArrow}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
