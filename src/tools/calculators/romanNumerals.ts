/**
 * Roman Numeral Converter — pure conversion engine.
 *
 * Pure TypeScript: no React, no imports. Covers the classic Roman numeral
 * range 1..3999 (the largest value expressible with the standard symbols
 * I, V, X, L, C, D, M without overline notation), plus Roman calendar dates.
 *
 * Validation is strict: only canonical Roman numerals are accepted.
 * A parsed value is converted back with `integerToRoman` and must match the
 * normalized input exactly (canonical round-trip check), so non-canonical
 * forms such as "IIII", "IC" or "VX" are rejected even if a naive parser
 * could assign them a value.
 */

/** Approved subtractive pairs and their values. */
const SUBTRACTIVE_PAIRS: Readonly<Record<string, number>> = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

/** Single-symbol values. */
const SYMBOL_VALUES: Readonly<Record<string, number>> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/** Value/symbol table in descending order, used by integerToRoman. */
const VALUE_TABLE: ReadonlyArray<readonly [number, string]> = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

/** Symbols that may never be repeated: V, L, D. */
const NON_REPEATABLE = new Set(['V', 'L', 'D']);

/**
 * Converts an integer in the range 1..3999 to its canonical Roman numeral.
 *
 * @throws Error if `num` is not an integer in 1..3999.
 */
export function integerToRoman(num: number): string {
  if (!Number.isInteger(num)) {
    throw new Error('Enter a whole number between 1 and 3999');
  }
  if (num < 1 || num > 3999) {
    throw new Error('Enter a whole number between 1 and 3999');
  }

  let remaining = num;
  let result = '';
  for (const [value, symbol] of VALUE_TABLE) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }
  return result;
}

/**
 * Internal strict parser. Returns the numeric value, or throws an Error
 * describing the problem. Used by both `romanToInteger` (throwing) and
 * `validateRoman` (non-throwing wrapper).
 */
function parseRomanStrict(roman: string): number {
  if (typeof roman !== 'string') {
    throw new Error('Enter a Roman numeral using only the letters I, V, X, L, C, D and M');
  }

  const normalized = roman.trim().toUpperCase();

  if (normalized.length === 0) {
    throw new Error('Enter a Roman numeral');
  }

  // Only the seven Roman symbols are allowed.
  if (!/^[IVXLCDM]+$/.test(normalized)) {
    throw new Error('Enter a Roman numeral using only the letters I, V, X, L, C, D and M');
  }

  // Repetition rules: V, L and D may never repeat; I, X, C and M at most
  // three times in a row.
  let runLength = 1;
  for (let i = 1; i < normalized.length; i++) {
    if (normalized[i] === normalized[i - 1]) {
      runLength++;
      const ch = normalized[i];
      if (NON_REPEATABLE.has(ch)) {
        throw new Error(`The symbol ${ch} cannot be repeated`);
      }
      if (runLength > 3) {
        throw new Error(`The symbol ${ch} cannot appear more than three times in a row`);
      }
    } else {
      runLength = 1;
    }
  }

  // Parse left to right. A smaller numeral before a larger one is valid
  // ONLY as one of the approved subtractive pairs (IV, IX, XL, XC, CD, CM).
  // A subtractive pair may not itself be repeated (e.g. "IVIV" is caught by
  // the final round-trip check) and a symbol used subtractively may not also
  // be repeated (e.g. "IIV" is caught by the round-trip check).
  let total = 0;
  let i = 0;
  while (i < normalized.length) {
    const current = normalized[i];
    const currentValue = SYMBOL_VALUES[current];
    const next = normalized[i + 1];

    if (next !== undefined) {
      const nextValue = SYMBOL_VALUES[next];
      if (currentValue < nextValue) {
        const pair = current + next;
        if (!(pair in SUBTRACTIVE_PAIRS)) {
          throw new Error(
            `${pair} is not a valid Roman numeral combination — only IV, IX, XL, XC, CD and CM may subtract`,
          );
        }
        total += SUBTRACTIVE_PAIRS[pair];
        i += 2;
        continue;
      }
    }

    total += currentValue;
    i += 1;
  }

  if (total < 1 || total > 3999) {
    throw new Error('Enter a Roman numeral between I and MMMCMXCIX (1 and 3999)');
  }

  // Canonical round-trip check: the value must re-encode to exactly the
  // normalized input. This rejects non-canonical forms such as "IIII",
  // "VIIII", "IIV", "IVIV", "IXX" and "MCMC".
  if (integerToRoman(total) !== normalized) {
    throw new Error(`"${normalized}" is not a valid Roman numeral — use the standard form ${integerToRoman(total)}`);
  }

  return total;
}

/**
 * Converts a Roman numeral to its integer value (1..3999).
 *
 * Accepts lowercase input (normalized to uppercase) and trims surrounding
 * whitespace. Strict validation — see the module header.
 *
 * @throws Error if the input is not a valid canonical Roman numeral.
 */
export function romanToInteger(roman: string): number {
  return parseRomanStrict(roman);
}

/**
 * Validates a Roman numeral without throwing.
 * Returns `{ valid: true, error: null, value }` for valid input, or
 * `{ valid: false, error: <human-readable message>, value: null }` for any
 * invalid input, including empty input.
 */
export function validateRoman(roman: string): { valid: boolean; error: string | null; value: number | null } {
  try {
    const value = parseRomanStrict(roman);
    return { valid: true, error: null, value };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Enter a valid Roman numeral';
    return { valid: false, error: message, value: null };
  }
}

export type RomanDateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';

export interface RomanDateParts {
  day: string;
  month: string;
  year: string;
}

/** Days in each month for a non-leap year (index 1..12). */
const DAYS_IN_MONTH: ReadonlyArray<number> = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

/**
 * Returns true only for a real calendar date: month 1..12, day valid for
 * that month/year, leap-year aware (29 February only in leap years),
 * year 1..3999.
 */
export function validateCalendarDate(day: number, month: number, year: number): boolean {
  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
    return false;
  }
  if (year < 1 || year > 3999) {
    return false;
  }
  if (month < 1 || month > 12) {
    return false;
  }
  let maxDay = DAYS_IN_MONTH[month];
  if (month === 2 && isLeapYear(year)) {
    maxDay = 29;
  }
  return day >= 1 && day <= maxDay;
}

/**
 * Converts a calendar date to its Roman-numeral components.
 *
 * @throws Error if the date is not a real calendar date.
 * @example convertDateToRoman(27, 11, 2026)
 *   // { day: 'XXVII', month: 'XI', year: 'MMXXVI' }
 */
export function convertDateToRoman(day: number, month: number, year: number): RomanDateParts {
  if (!validateCalendarDate(day, month, year)) {
    throw new Error('Enter a valid calendar date (day, month and year must form a real date)');
  }
  return {
    day: integerToRoman(day),
    month: integerToRoman(month),
    year: integerToRoman(year),
  };
}

/**
 * Joins Roman date parts with '/' in the requested order.
 * @example formatRomanDate({ day: 'XXVII', month: 'XI', year: 'MMXXVI' }, 'DD/MM/YYYY')
 *   // 'XXVII/XI/MMXXVI'
 */
export function formatRomanDate(parts: RomanDateParts, format: RomanDateFormat): string {
  switch (format) {
    case 'DD/MM/YYYY':
      return `${parts.day}/${parts.month}/${parts.year}`;
    case 'MM/DD/YYYY':
      return `${parts.month}/${parts.day}/${parts.year}`;
    case 'YYYY-MM-DD':
      return `${parts.year}-${parts.month}-${parts.day}`;
    default:
      throw new Error('Unknown date format');
  }
}

/**
 * Parses a slash-separated Roman date such as 'XXVII/XI/MMXXVI' back to a
 * numeric date. Also tolerates '-' as the separator and lowercase input,
 * and trims surrounding whitespace.
 *
 * Each component must be a valid Roman numeral on its own, and the
 * resulting date must be a real calendar date (leap-year aware).
 *
 * @throws Error if the input is not a valid Roman calendar date.
 */
export function convertRomanToDate(romanDate: string): { day: number; month: number; year: number } {
  if (typeof romanDate !== 'string' || romanDate.trim().length === 0) {
    throw new Error('Enter a Roman date such as XXVII/XI/MMXXVI');
  }

  const normalized = romanDate.trim().toUpperCase();
  // Accept '/' or '-' as the separator (but not a mix of both).
  const separator = normalized.includes('/') ? '/' : normalized.includes('-') ? '-' : null;
  if (separator === null) {
    throw new Error('Enter a Roman date with three parts separated by / or - (day, month, year)');
  }
  const otherSeparator = separator === '/' ? '-' : '/';
  if (normalized.includes(otherSeparator)) {
    throw new Error('Use one separator only — / or - — in the Roman date');
  }

  const parts = normalized.split(separator);
  if (parts.length !== 3) {
    throw new Error('Enter a Roman date with three parts: day, month and year');
  }

  const [dayPart, monthPart, yearPart] = parts;
  if (!dayPart || !monthPart || !yearPart) {
    throw new Error('Enter a Roman date with three parts: day, month and year');
  }

  let day: number;
  let month: number;
  let year: number;
  try {
    day = romanToInteger(dayPart);
    month = romanToInteger(monthPart);
    year = romanToInteger(yearPart);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Enter a valid Roman date';
    throw new Error(`Invalid Roman date: ${message}`);
  }

  if (!validateCalendarDate(day, month, year)) {
    throw new Error(`"${normalized}" is not a real calendar date`);
  }

  return { day, month, year };
}

/** Zero-pads a number to two digits (e.g. 5 -> '05'). */
function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

/**
 * Formats a numeric date as a zero-padded standard date in the requested
 * format. Does not validate the date — pass a real calendar date.
 * @example formatStandardDate(27, 11, 2026, 'DD/MM/YYYY') // '27/11/2026'
 */
export function formatStandardDate(day: number, month: number, year: number, format: RomanDateFormat): string {
  const dd = pad2(day);
  const mm = pad2(month);
  const yyyy = String(year).padStart(4, '0');
  switch (format) {
    case 'DD/MM/YYYY':
      return `${dd}/${mm}/${yyyy}`;
    case 'MM/DD/YYYY':
      return `${mm}/${dd}/${yyyy}`;
    case 'YYYY-MM-DD':
      return `${yyyy}-${mm}-${dd}`;
    default:
      throw new Error('Unknown date format');
  }
}
