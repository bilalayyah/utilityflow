import { ChevronDown, ChevronUp, Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';
import {
  DEFAULT_RESULT_LIMIT,
  MAX_INPUT_LETTERS,
  loadDictionary,
  searchWords,
  validateWordInput,
} from './wordGenerator';
import type { SearchFilters, SortMode, WordMode } from './wordGenerator';

const STRINGS_EN = {
  modeAll: 'All Words',
  modeAnagrams: 'Anagrams',
  modeShort: 'Short Words',
  modeLong: 'Long Words',
  modePattern: 'Pattern Finder',
  hintAll: 'Every word you can build from these letters.',
  hintAnagrams: 'Only words that use all of your letters, each exactly once.',
  hintShort: 'Short words first — 2 to 5 letters by default, or set your own range below.',
  hintLong: 'The longest words first, with shorter alternatives underneath.',
  hintPattern:
    'Find words that fit a pattern. Use ? for any unknown letter — for example, P?A?ET finds 5-letter words with P first, A third, E fourth and T last.',
  lettersLabel: 'Your letters',
  lettersPlaceholder: 'Enter letters (e.g. LISTEN)',
  lettersHint: 'Up to {max} letters. Spaces are ignored and repeated letters count separately.',
  patternLabel: 'Word pattern',
  patternPlaceholder: 'e.g. P?A?ET',
  generateLabel: 'Generate Words',
  clearLabel: 'Clear',
  clearResults: 'Clear results',
  copyAll: 'Copy All',
  copy: 'Copy',
  download: 'Download TXT',
  examplesLabel: 'Try an example:',
  loadingDictionary: 'Loading dictionary…',
  dictionaryNote: 'Dictionary: ENABLE word list (public domain). Every result is a real dictionary word — no made-up words.',
  advancedFilters: 'Advanced filters',
  minLengthLabel: 'Minimum word length',
  maxLengthLabel: 'Maximum word length',
  startsWithLabel: 'Starts with',
  endsWithLabel: 'Ends with',
  includeLabel: 'Must include',
  excludeLabel: 'Must not include',
  sortLabel: 'Sort results',
  sortAlphabetical: 'Alphabetical',
  sortLongestFirst: 'Longest first',
  sortShortestFirst: 'Shortest first',
  limitLabel: 'Result limit',
  resetFilters: 'Reset filters',
  resultsTitle: 'Words found',
  wordsFound: 'words found',
  wordFound: 'word found',
  lettersWord: 'letters',
  showingFirst:
    'Showing the first {limit} results — there may be more. Use Show more to load more.',
  showMore: 'Show more',
  noResults: 'No words found — try different letters or loosen the filters.',
  historyTitle: 'Recent searches',
  historyEmpty: 'Your recent searches will appear here.',
  clearHistory: 'Clear history',
  errorInvalidInput: 'Enter some letters to generate words from.',
  errorPatternRequired: 'Enter a word pattern first — use ? for any unknown letter, for example P?A?ET.',
  errorSearchFailed: 'Something went wrong while searching. Try again.',
  errorDictionaryLoad:
    'The dictionary could not be loaded. Check your connection and reload the page to try again.',
};

interface FiltersState {
  minLength: string;
  maxLength: string;
  startsWith: string;
  endsWith: string;
  include: string;
  exclude: string;
  pattern: string;
  sort: SortMode;
  limit: string;
}

interface DictionaryData {
  words: string[];
  anagramIndex: Map<string, string[]>;
}

interface HistoryItem {
  id: number;
  letters: string;
  mode: WordMode;
  resultCount: number;
}

interface PendingSearch {
  input: string;
  mode: WordMode;
  filters: FiltersState;
}

const HISTORY_LIMIT = 8;
const LIMIT_MAX = 1000;

const INPUT_CLASS =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const BUTTON_CLASS =
  'inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const PRIMARY_BUTTON_CLASS =
  'inline-flex items-center justify-center rounded-lg bg-[#0E8A66] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0B7A59] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const EXAMPLE_BUTTON_CLASS =
  'rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-sm text-slate-700 hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const HISTORY_BUTTON_CLASS =
  'w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-start hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';

function defaultFilters(): FiltersState {
  return {
    minLength: '',
    maxLength: '',
    startsWith: '',
    endsWith: '',
    include: '',
    exclude: '',
    pattern: '',
    sort: 'alphabetical',
    limit: String(DEFAULT_RESULT_LIMIT),
  };
}

function modeDefaultSort(mode: WordMode): SortMode {
  if (mode === 'long') return 'longest-first';
  if (mode === 'short') return 'shortest-first';
  return 'alphabetical';
}

function parseLimit(value: string): number {
  const n = Number(value);
  if (!Number.isFinite(n)) return DEFAULT_RESULT_LIMIT;
  return Math.min(LIMIT_MAX, Math.max(1, Math.floor(n)));
}

function parseLength(value: string): number | undefined {
  const raw = value.trim();
  if (raw === '') return undefined;
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 1) return undefined;
  return Math.min(MAX_INPUT_LETTERS, n);
}

function singleLetter(value: string): string | undefined {
  const match = /[a-z]/i.exec(value);
  return match ? match[0].toLowerCase() : undefined;
}

function lettersOnly(value: string): string | undefined {
  const cleaned = value.toLowerCase().replace(/[^a-z]/g, '');
  return cleaned === '' ? undefined : cleaned;
}

function buildSearchFilters(mode: WordMode, f: FiltersState): SearchFilters {
  const filters: SearchFilters = { sort: f.sort, limit: parseLimit(f.limit) };
  const min = parseLength(f.minLength) ?? (mode === 'short' ? 2 : undefined);
  const max = parseLength(f.maxLength) ?? (mode === 'short' ? 5 : undefined);
  if (min !== undefined) filters.minLength = min;
  if (max !== undefined) filters.maxLength = max;
  const startsWith = singleLetter(f.startsWith);
  if (startsWith) filters.startsWith = startsWith;
  const endsWith = singleLetter(f.endsWith);
  if (endsWith) filters.endsWith = endsWith;
  const include = lettersOnly(f.include);
  if (include) filters.include = include;
  const exclude = lettersOnly(f.exclude);
  if (exclude) filters.exclude = exclude;
  if (mode === 'pattern') {
    const pattern = f.pattern.trim().toUpperCase();
    if (pattern !== '') filters.pattern = pattern;
  }
  return filters;
}

const EXAMPLE_LETTERS = ['LISTEN', 'APPLE', 'EARTH'];

export default function AlphabetsToWordGeneratorTool() {
  const { t } = useLocale();
  const s = useComponentStrings('alphabets-to-word-generator', STRINGS_EN);
  const palette = pastelForKey('alphabets-to-word-generator');

  const [input, setInput] = useState('');
  const [mode, setMode] = useState<WordMode>('all');
  const [filters, setFilters] = useState<FiltersState>(defaultFilters);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [dict, setDict] = useState<DictionaryData | null>(null);
  const [dictLoading, setDictLoading] = useState(true);
  const [dictError, setDictError] = useState<string | null>(null);
  const [results, setResults] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchedLetters, setSearchedLetters] = useState<string | null>(null);
  const [pendingSearch, setPendingSearch] = useState<PendingSearch | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const historyIdRef = useRef(0);

  const MODES: { id: WordMode; label: string; hint: string }[] = [
    { id: 'all', label: s.modeAll, hint: s.hintAll },
    { id: 'anagrams', label: s.modeAnagrams, hint: s.hintAnagrams },
    { id: 'short', label: s.modeShort, hint: s.hintShort },
    { id: 'long', label: s.modeLong, hint: s.hintLong },
    { id: 'pattern', label: s.modePattern, hint: s.hintPattern },
  ];

  // Load the dictionary once, in the background, so it is ready by the
  // time the user hits Generate. It is a separate chunk, never part of
  // the initial page bundle.
  useEffect(() => {
    let cancelled = false;
    loadDictionary()
      .then((data) => {
        if (!cancelled) {
          setDict(data);
          setDictLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setDictLoading(false);
          setDictError(s.errorDictionaryLoad);
        }
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToHistory = (entry: Omit<HistoryItem, 'id'>) => {
    setHistory((prev) => {
      const top = prev[0];
      if (
        top &&
        top.letters === entry.letters &&
        top.mode === entry.mode &&
        top.resultCount === entry.resultCount
      ) {
        return prev;
      }
      historyIdRef.current += 1;
      return [{ ...entry, id: historyIdRef.current }, ...prev].slice(0, HISTORY_LIMIT);
    });
  };

  const executeSearch = (
    rawInput: string,
    modeVal: WordMode,
    filtersVal: FiltersState,
    dictVal: DictionaryData,
    commit: boolean,
  ) => {
    const check = validateWordInput(rawInput);
    if (!check.valid) {
      setError(check.error ?? s.errorInvalidInput);
      setResults(null);
      setSearchedLetters(null);
      return;
    }
    if (modeVal === 'pattern' && filtersVal.pattern.trim() === '') {
      setError(s.errorPatternRequired);
      setResults(null);
      setSearchedLetters(null);
      return;
    }
    let found: string[];
    try {
      found = searchWords(
        check.letters,
        modeVal,
        buildSearchFilters(modeVal, filtersVal),
        dictVal.words,
        dictVal.anagramIndex,
      );
    } catch {
      setError(s.errorSearchFailed);
      setResults(null);
      setSearchedLetters(null);
      return;
    }
    setError(null);
    setResults(found);
    setSearchedLetters(check.letters);
    if (commit) {
      addToHistory({ letters: check.letters, mode: modeVal, resultCount: found.length });
    }
  };

  // A Generate pressed while the dictionary is still loading runs as soon
  // as the dictionary arrives, instead of failing with an empty result.
  useEffect(() => {
    if (dict && pendingSearch) {
      executeSearch(pendingSearch.input, pendingSearch.mode, pendingSearch.filters, dict, true);
      setPendingSearch(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dict, pendingSearch]);

  const handleGenerate = () => {
    if (dictError) {
      setError(dictError);
      return;
    }
    if (!dict) {
      setPendingSearch({ input, mode, filters });
      return;
    }
    executeSearch(input, mode, filters, dict, true);
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleGenerate();
    }
  };

  const handleModeChange = (next: WordMode) => {
    const nextFilters = { ...filters, sort: modeDefaultSort(next) };
    setMode(next);
    setFilters(nextFilters);
    if (searchedLetters && dict) {
      executeSearch(searchedLetters, next, nextFilters, dict, false);
    }
  };

  // Filters re-run the current search in place — the letters never need
  // to be re-entered. These re-runs never touch history.
  const updateFilters = (patch: Partial<FiltersState>) => {
    const next = { ...filters, ...patch };
    setFilters(next);
    if (searchedLetters && dict) {
      executeSearch(searchedLetters, mode, next, dict, false);
    }
  };

  const resetFilters = () => {
    const next: FiltersState = { ...defaultFilters(), sort: modeDefaultSort(mode) };
    setFilters(next);
    if (searchedLetters && dict) {
      executeSearch(searchedLetters, mode, next, dict, false);
    }
  };

  const handleShowMore = () => {
    if (!searchedLetters || !dict) return;
    const nextLimit = parseLimit(filters.limit) + 100;
    const next = { ...filters, limit: String(nextLimit) };
    setFilters(next);
    executeSearch(searchedLetters, mode, next, dict, false);
  };

  const handleClear = () => {
    setInput('');
    setResults(null);
    setError(null);
    setSearchedLetters(null);
    setPendingSearch(null);
  };

  const handleClearResults = () => {
    setResults(null);
    setSearchedLetters(null);
  };

  const handleDownload = () => {
    if (!results || results.length === 0 || !searchedLetters) return;
    const blob = new Blob([results.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `words-from-${searchedLetters.toLowerCase()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const runExample = (letters: string) => {
    setInput(letters);
    if (dictError) {
      setError(dictError);
      return;
    }
    if (!dict) {
      setPendingSearch({ input: letters, mode, filters });
      return;
    }
    executeSearch(letters, mode, filters, dict, false);
  };

  const reuseHistory = (item: HistoryItem) => {
    const nextFilters = { ...filters, sort: modeDefaultSort(item.mode) };
    setInput(item.letters);
    setMode(item.mode);
    setFilters(nextFilters);
    if (dict) {
      executeSearch(item.letters, item.mode, nextFilters, dict, false);
    } else {
      setPendingSearch({ input: item.letters, mode: item.mode, filters: nextFilters });
    }
  };

  const modeLabel = (m: WordMode): string => {
    if (m === 'all') return s.modeAll;
    if (m === 'anagrams') return s.modeAnagrams;
    if (m === 'short') return s.modeShort;
    if (m === 'long') return s.modeLong;
    return s.modePattern;
  };

  const activeMode = MODES.find((m) => m.id === mode) ?? MODES[0];
  const currentLimit = parseLimit(filters.limit);
  const hitLimit = results !== null && results.length > 0 && results.length >= currentLimit;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-1.5 rounded-lg bg-slate-100 p-1.5">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => handleModeChange(m.id)}
            aria-pressed={mode === m.id}
            className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] ${
              mode === m.id ? `${palette.soft} shadow-xs` : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="aw-letters" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.lettersLabel}
          </label>
          <input
            id="aw-letters"
            type="text"
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
            placeholder={s.lettersPlaceholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEnter}
            className={`${INPUT_CLASS} font-mono text-lg uppercase tabular-nums`}
          />
          <p className="mt-1.5 text-xs text-slate-500">
            {s.lettersHint.replace('{max}', String(MAX_INPUT_LETTERS))}
          </p>
          <p className="mt-1 text-xs text-slate-500">{activeMode.hint}</p>
        </div>

        {mode === 'pattern' && (
          <div>
            <label htmlFor="aw-pattern" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.patternLabel}
            </label>
            <input
              id="aw-pattern"
              type="text"
              autoCapitalize="characters"
              autoComplete="off"
              spellCheck={false}
              placeholder={s.patternPlaceholder}
              value={filters.pattern}
              onChange={(e) => updateFilters({ pattern: e.target.value })}
              onKeyDown={handleEnter}
              className={`${INPUT_CLASS} font-mono text-lg uppercase tabular-nums`}
            />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={handleGenerate} className={PRIMARY_BUTTON_CLASS}>
            {s.generateLabel}
          </button>
          <button type="button" onClick={handleClear} className={BUTTON_CLASS}>
            {s.clearLabel}
          </button>
          {dictLoading && (
            <span role="status" className="text-xs text-slate-500">
              {s.loadingDictionary}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-600">{s.examplesLabel}</span>
          {EXAMPLE_LETTERS.map((letters) => (
            <button key={letters} type="button" onClick={() => runExample(letters)} className={EXAMPLE_BUTTON_CLASS}>
              {letters}
            </button>
          ))}
        </div>

        {dictError && (
          <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {dictError}
          </div>
        )}
        {error && (
          <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </div>
        )}
      </div>

      <div>
        <button
          type="button"
          onClick={() => setShowAdvanced((v) => !v)}
          aria-expanded={showAdvanced}
          aria-controls="aw-advanced-filters"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]"
        >
          {s.advancedFilters}
          {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showAdvanced && (
          <div
            id="aw-advanced-filters"
            className="mt-3 rounded-xl border border-slate-200 bg-white p-5 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="aw-min-length" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.minLengthLabel}
                </label>
                <input
                  id="aw-min-length"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={MAX_INPUT_LETTERS}
                  value={filters.minLength}
                  onChange={(e) => updateFilters({ minLength: e.target.value })}
                  className={`${INPUT_CLASS} font-mono tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="aw-max-length" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.maxLengthLabel}
                </label>
                <input
                  id="aw-max-length"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={MAX_INPUT_LETTERS}
                  value={filters.maxLength}
                  onChange={(e) => updateFilters({ maxLength: e.target.value })}
                  className={`${INPUT_CLASS} font-mono tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="aw-limit" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.limitLabel}
                </label>
                <input
                  id="aw-limit"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={LIMIT_MAX}
                  value={filters.limit}
                  onChange={(e) => updateFilters({ limit: e.target.value })}
                  className={`${INPUT_CLASS} font-mono tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="aw-starts-with" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.startsWithLabel}
                </label>
                <input
                  id="aw-starts-with"
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  maxLength={1}
                  value={filters.startsWith}
                  onChange={(e) => updateFilters({ startsWith: e.target.value })}
                  className={`${INPUT_CLASS} font-mono uppercase tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="aw-ends-with" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.endsWithLabel}
                </label>
                <input
                  id="aw-ends-with"
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  maxLength={1}
                  value={filters.endsWith}
                  onChange={(e) => updateFilters({ endsWith: e.target.value })}
                  className={`${INPUT_CLASS} font-mono uppercase tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="aw-sort" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.sortLabel}
                </label>
                <select
                  id="aw-sort"
                  value={filters.sort}
                  onChange={(e) => updateFilters({ sort: e.target.value as SortMode })}
                  className={`${INPUT_CLASS} tabular-nums`}
                >
                  <option value="alphabetical">{s.sortAlphabetical}</option>
                  <option value="longest-first">{s.sortLongestFirst}</option>
                  <option value="shortest-first">{s.sortShortestFirst}</option>
                </select>
              </div>
              <div>
                <label htmlFor="aw-include" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.includeLabel}
                </label>
                <input
                  id="aw-include"
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  value={filters.include}
                  onChange={(e) => updateFilters({ include: e.target.value })}
                  className={`${INPUT_CLASS} font-mono uppercase tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="aw-exclude" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.excludeLabel}
                </label>
                <input
                  id="aw-exclude"
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  value={filters.exclude}
                  onChange={(e) => updateFilters({ exclude: e.target.value })}
                  className={`${INPUT_CLASS} font-mono uppercase tabular-nums`}
                />
              </div>
            </div>
            <div>
              <button type="button" onClick={resetFilters} className={BUTTON_CLASS}>
                {s.resetFilters}
              </button>
            </div>
          </div>
        )}
      </div>

      {results !== null && (
        <section aria-label={s.resultsTitle} className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-base font-bold text-slate-900">
              {s.resultsTitle} ·{' '}
              <span className="font-mono tabular-nums">
                {results.length} {results.length === 1 ? s.wordFound : s.wordsFound}
              </span>
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <CopyButton
                text={results.join('\n')}
                label={s.copyAll}
                copiedLabel={t.common.copied}
                disabled={results.length === 0}
              />
              <button
                type="button"
                onClick={handleDownload}
                disabled={results.length === 0}
                className={`${BUTTON_CLASS} disabled:opacity-40 disabled:cursor-not-allowed`}
              >
                <Download className="w-4 h-4" />
                <span className="ml-2">{s.download}</span>
              </button>
              <button type="button" onClick={handleClearResults} className={BUTTON_CLASS}>
                {s.clearResults}
              </button>
            </div>
          </div>

          {hitLimit && (
            <p className="text-xs text-slate-500">
              {s.showingFirst.replace('{limit}', String(currentLimit))}
            </p>
          )}

          {results.length === 0 ? (
            <div
              role="status"
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-6 text-center text-sm text-slate-600"
            >
              {s.noResults}
            </div>
          ) : (
            <>
              <ul className={`divide-y divide-slate-100 rounded-xl border border-slate-200 ${palette.card} px-4`}>
                {results.map((word) => (
                  <li key={word} className="flex items-center justify-between gap-3 py-2.5">
                    <span className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-0.5">
                      <span className="font-mono text-lg sm:text-xl font-semibold text-slate-900 break-all">
                        {word}
                      </span>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 tabular-nums">
                        {word.length} {s.lettersWord}
                      </span>
                    </span>
                    <CopyButton text={word} label={s.copy} copiedLabel={t.common.copied} />
                  </li>
                ))}
              </ul>
              {hitLimit && (
                <div className="flex justify-center">
                  <button type="button" onClick={handleShowMore} className={BUTTON_CLASS}>
                    {s.showMore}
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      )}

      <p className="text-xs text-slate-500">{s.dictionaryNote}</p>

      <section aria-label={s.historyTitle} className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-base font-bold text-slate-900">{s.historyTitle}</h2>
          {history.length > 0 && (
            <button
              type="button"
              onClick={() => setHistory([])}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]"
            >
              {s.clearHistory}
            </button>
          )}
        </div>
        {history.length === 0 ? (
          <p className="text-sm text-slate-500">{s.historyEmpty}</p>
        ) : (
          <ul className="space-y-2">
            {history.map((item) => (
              <li key={item.id}>
                <button type="button" onClick={() => reuseHistory(item)} className={HISTORY_BUTTON_CLASS}>
                  <span className="block font-mono text-sm tabular-nums break-all">
                    {item.letters.toUpperCase()} → {item.resultCount}{' '}
                    {item.resultCount === 1 ? s.wordFound : s.wordsFound}
                  </span>
                  <span className="block text-xs text-slate-500">{modeLabel(item.mode)}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
