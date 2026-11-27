/**
 * wordGenerator.ts — pure word-generation engine for the Alphabets to
 * Word Generator (UtilityFlow).
 *
 * Pure TypeScript: no React, no DOM. Every result comes from the ENABLE
 * dictionary (see ./dictionary/enableWords.ts) and satisfies the
 * letter-frequency rule — a word is returned only if each of its letters
 * is used no more times than it appears in the input.
 *
 * The single entry point the tool component calls is `searchWords`.
 * The dictionary itself is loaded lazily by `loadDictionary` via a
 * dynamic import(), so it ships as a separate chunk and never enters
 * the initial page bundle.
 */

/** Maximum letters a user may enter (and the longest dictionary word kept). */
export const MAX_INPUT_LETTERS = 15;

/** Default cap on the number of results returned by `searchWords`. */
export const DEFAULT_RESULT_LIMIT = 100;

export type SortMode = 'alphabetical' | 'longest-first' | 'shortest-first';

export type WordMode = 'all' | 'anagrams' | 'short' | 'long' | 'pattern';

export interface SearchFilters {
  minLength?: number;
  maxLength?: number;
  startsWith?: string;
  endsWith?: string;
  include?: string;
  exclude?: string;
  pattern?: string;
  sort: SortMode;
  limit: number;
}

/**
 * Lowercase the input and strip everything that is not a letter
 * (spaces, digits, punctuation). 'LISTEN' -> 'listen';
 * 'a p p l e' -> 'apple'.
 */
export function normalizeLetters(input: string): string {
  return input.toLowerCase().replace(/[^a-z]/g, '');
}

/**
 * Count how many times each letter a–z appears in `text`.
 * Returns a 26-length array where index 0 is 'a' and index 25 is 'z'.
 */
export function countLetterFrequency(text: string): number[] {
  const frequency = new Array<number>(26).fill(0);
  for (let i = 0; i < text.length; i += 1) {
    const code = text.charCodeAt(i) - 97; // 'a' === 97
    if (code >= 0 && code < 26) {
      frequency[code] += 1;
    }
  }
  return frequency;
}

/**
 * True when `word` can be built from the `available` letter counts —
 * i.e. the word uses no letter more times than it appears in the input.
 * 'apple' can be built from APPLE (two P's) but not from APLE (one P).
 */
export function canBuildWord(word: string, available: number[]): boolean {
  const needed = countLetterFrequency(word);
  for (let i = 0; i < 26; i += 1) {
    if (needed[i] > available[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Every dictionary word that can be built from `letters`
 * (letter-frequency rule). Returned in dictionary order, which is
 * alphabetical. Does not apply any length or text filters — use
 * `searchWords` for the filtered entry point.
 */
export function findPossibleWords(letters: string, words: string[]): string[] {
  const normalized = normalizeLetters(letters);
  if (normalized.length === 0) {
    return [];
  }
  const available = countLetterFrequency(normalized);
  const results: string[] = [];
  for (const word of words) {
    // A word longer than the input can never be built from it.
    if (word.length > normalized.length) {
      continue;
    }
    if (canBuildWord(word, available)) {
      results.push(word);
    }
  }
  return results;
}

/**
 * Build the exact-anagram index: key = the word's letters sorted
 * alphabetically ('listen' -> 'eilnst'). Two words share a key exactly
 * when their letter-frequency maps are equal, so a lookup is O(1).
 */
export function buildAnagramIndex(words: string[]): Map<string, string[]> {
  const index = new Map<string, string[]>();
  for (const word of words) {
    const key = [...word].sort().join('');
    const bucket = index.get(key);
    if (bucket) {
      bucket.push(word);
    } else {
      index.set(key, [word]);
    }
  }
  return index;
}

/**
 * Only the full anagrams of `letters` — words using every supplied
 * letter exactly once (repeated-letter counts respected). Uses the
 * sorted-signature index, which is equivalent to complete
 * frequency-map equality. Returns a copy, never the index's own array.
 */
export function findExactAnagrams(
  letters: string,
  anagramIndex: Map<string, string[]>,
): string[] {
  const normalized = normalizeLetters(letters);
  if (normalized.length === 0) {
    return [];
  }
  const key = [...normalized].sort().join('');
  const matches = anagramIndex.get(key);
  return matches ? [...matches] : [];
}

/** Words whose length is within [min, max] (inclusive). */
export function filterWordsByLength(words: string[], min: number, max: number): string[] {
  return words.filter((word) => word.length >= min && word.length <= max);
}

function compareAlphabetical(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * Sort a copy of `words` (the input array is never mutated).
 * 'longest-first' / 'shortest-first' break length ties alphabetically,
 * so the order is fully deterministic.
 */
export function sortWords(words: string[], sortMode: SortMode): string[] {
  const sorted = [...words];
  switch (sortMode) {
    case 'alphabetical':
      return sorted.sort(compareAlphabetical);
    case 'longest-first':
      return sorted.sort(
        (a, b) => b.length - a.length || compareAlphabetical(a, b),
      );
    case 'shortest-first':
      return sorted.sort(
        (a, b) => a.length - b.length || compareAlphabetical(a, b),
      );
    default:
      return sorted;
  }
}

/**
 * Validate raw user input.
 *
 *  - Empty input (nothing typed, or spaces only) -> error.
 *  - No letters at all (digits / symbols only) -> error.
 *  - More than MAX_INPUT_LETTERS letters (after normalizing) -> error.
 *
 * A one-letter input is valid — it simply matches no dictionary word
 * (the dictionary holds words of 2 letters and up), so the tool shows
 * the empty state rather than a validation error.
 *
 * On success `letters` is the normalized input; on failure it is ''.
 */
export function validateWordInput(input: string): {
  valid: boolean;
  error: string | null;
  letters: string;
} {
  if (input.trim().length === 0) {
    return { valid: false, error: 'Enter some letters to generate words.', letters: '' };
  }
  const letters = normalizeLetters(input);
  if (letters.length === 0) {
    return {
      valid: false,
      error: 'Enter letters only — numbers and symbols cannot form words.',
      letters: '',
    };
  }
  if (letters.length > MAX_INPUT_LETTERS) {
    return {
      valid: false,
      error: `Enter ${MAX_INPUT_LETTERS} letters or fewer.`,
      letters: '',
    };
  }
  return { valid: true, error: null, letters };
}

/**
 * True when `word` matches `pattern`: '?' matches any single letter,
 * any other character must match exactly. The pattern length must equal
 * the word length. Case-insensitive; spaces in the pattern are ignored.
 * matchesPattern('planet', 'p?a?et') === true.
 */
export function matchesPattern(word: string, pattern: string): boolean {
  const normalizedPattern = pattern.toLowerCase().replace(/\s+/g, '');
  const normalizedWord = word.toLowerCase();
  if (normalizedPattern.length !== normalizedWord.length) {
    return false;
  }
  for (let i = 0; i < normalizedPattern.length; i += 1) {
    const patternChar = normalizedPattern[i];
    if (patternChar !== '?' && patternChar !== normalizedWord[i]) {
      return false;
    }
  }
  return true;
}

function normalizeFilterText(value: string | undefined): string {
  return value === undefined ? '' : normalizeLetters(value);
}

/**
 * The single entry point the tool component calls.
 *
 * Mode behaviour:
 *  - 'all':      every buildable word (min length defaults to 2).
 *  - 'anagrams': ONLY full anagrams (frequency equality via the index).
 *  - 'short':    buildable words of length <= 5 by default; a custom
 *                min/max from `filters` overrides the default.
 *  - 'long':     buildable words sorted longest-first — ties included,
 *                shorter alternatives below; the mode forces
 *                longest-first sorting regardless of `filters.sort`.
 *  - 'pattern':  buildable words matching `filters.pattern` ('?' =
 *                any letter) plus starts/ends/include/exclude. With
 *                no pattern set, there is nothing to match -> [].
 *
 * startsWith / endsWith / include / exclude apply in every mode where
 * set. `include` means each listed letter must appear in the word;
 * `exclude` means none of the listed letters may appear.
 *
 * Sort + limit are applied last. No word that violates the
 * letter-frequency rule is ever returned.
 */
export function searchWords(
  letters: string,
  mode: WordMode,
  filters: SearchFilters,
  words: string[],
  anagramIndex: Map<string, string[]>,
): string[] {
  const normalized = normalizeLetters(letters);
  if (normalized.length === 0) {
    return [];
  }

  // Base set: exact anagrams only, or every buildable word.
  let results =
    mode === 'anagrams'
      ? findExactAnagrams(normalized, anagramIndex)
      : findPossibleWords(normalized, words);

  // Length window. 'short' defaults to a 5-letter ceiling; every other
  // mode defaults to 2..MAX_INPUT_LETTERS.
  const minLength = filters.minLength ?? 2;
  const maxLength =
    filters.maxLength ?? (mode === 'short' ? 5 : MAX_INPUT_LETTERS);
  results = filterWordsByLength(results, minLength, maxLength);

  // Pattern mode: a pattern is required, and '?' matches any letter.
  if (mode === 'pattern') {
    const pattern = (filters.pattern ?? '').trim();
    if (pattern.length === 0) {
      return [];
    }
    results = results.filter((word) => matchesPattern(word, pattern));
  }

  // Text filters, applied in every mode where they are set.
  const startsWith = normalizeFilterText(filters.startsWith);
  if (startsWith.length > 0) {
    results = results.filter((word) => word.startsWith(startsWith));
  }
  const endsWith = normalizeFilterText(filters.endsWith);
  if (endsWith.length > 0) {
    results = results.filter((word) => word.endsWith(endsWith));
  }
  const include = normalizeFilterText(filters.include);
  if (include.length > 0) {
    const required = [...new Set(include)];
    results = results.filter((word) => required.every((ch) => word.includes(ch)));
  }
  const exclude = normalizeFilterText(filters.exclude);
  if (exclude.length > 0) {
    const banned = new Set(exclude);
    results = results.filter((word) => ![...word].some((ch) => banned.has(ch)));
  }

  // Sort + limit last. 'long' mode always sorts longest-first.
  const sortMode: SortMode = mode === 'long' ? 'longest-first' : filters.sort;
  results = sortWords(results, sortMode);
  const limit =
    Number.isFinite(filters.limit) && filters.limit > 0
      ? Math.floor(filters.limit)
      : DEFAULT_RESULT_LIMIT;
  return results.slice(0, limit);
}

let cachedDictionary: {
  words: string[];
  anagramIndex: Map<string, string[]>;
} | null = null;

/**
 * Load the ENABLE dictionary on demand. The dynamic import() keeps the
 * ~1.8 MB word list out of the initial bundle — Vite splits it into a
 * separate chunk fetched only when the tool is used. The word list and
 * the anagram index are built once and cached in module state, so
 * repeat calls are free.
 */
export async function loadDictionary(): Promise<{
  words: string[];
  anagramIndex: Map<string, string[]>;
}> {
  if (cachedDictionary) {
    return cachedDictionary;
  }
  const { ENABLE_WORDS_TXT } = await import('./dictionary/enableWords');
  const words = ENABLE_WORDS_TXT.split('\n').filter((word) => word.length > 0);
  const anagramIndex = buildAnagramIndex(words);
  cachedDictionary = { words, anagramIndex };
  return cachedDictionary;
}
