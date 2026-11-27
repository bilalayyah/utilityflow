/**
 * Online Hourly Calculator — pure calculation engine.
 *
 * Pure TypeScript: no React, no imports. Covers five modes:
 *  1. Hours between two times (with optional explicit dates, overnight)
 *  2. Work hours with timed break periods
 *  3. Add / subtract time (durations and clock-time arithmetic)
 *  4. Decimal hours (two-way, selectable precision)
 *  5. Hourly pay (rate x hours, overtime, currency display only)
 *
 * All times are minutes since midnight (0..1439) unless a date is given,
 * in which case absolute minutes since the Unix epoch (UTC) are used.
 * Money is display-only: no exchange rates, no tax, no statutory rules.
 * The overtime multiplier is user-controlled.
 */

/** Minutes in a day. */
export const MINUTES_PER_DAY = 1440;

/** A clock time as minutes since midnight, 0..1439. */
export type MinutesOfDay = number;

/** 12-hour / 24-hour display format. */
export type TimeFormat = '12h' | '24h';

/** Supported display-only currencies (no conversion, no live rates). */
export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'AED' | 'PKR' | 'INR' | 'CAD' | 'AUD';

export const CURRENCIES: ReadonlyArray<CurrencyCode> = [
  'USD',
  'EUR',
  'GBP',
  'AED',
  'PKR',
  'INR',
  'CAD',
  'AUD',
];

/** Display symbol for each currency. CAD and AUD also use "$". */
export const CURRENCY_SYMBOLS: Readonly<Record<CurrencyCode, string>> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  AED: 'د.إ',
  PKR: '₨',
  INR: '₹',
  CAD: '$',
  AUD: '$',
};

/** Zero-pads a number to two digits (e.g. 5 -> '05'). */
function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

/**
 * Parses a 24-hour "HH:MM" string (native <input type="time"> value) into
 * minutes since midnight.
 *
 * @throws Error if the string is not a valid 24-hour time.
 */
export function parseTime24(value: string): MinutesOfDay {
  const raw = value.trim();
  const m = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(raw);
  if (!m) {
    throw new Error('Enter a valid time, for example 09:00 or 17:30.');
  }
  const hours = Number(m[1]);
  const minutes = Number(m[2]);
  const seconds = m[3] ? Number(m[3]) : 0;
  if (hours > 23 || minutes > 59 || seconds > 59) {
    throw new Error('Enter a valid time: hours 0–23 and minutes 0–59.');
  }
  return hours * 60 + minutes;
}

/**
 * Builds minutes since midnight from 12-hour fields.
 *
 * @param hour 1..12, minutes 0..59, period 'AM' | 'PM'.
 * @throws Error if any field is out of range.
 */
export function buildTime12(hour: number, minutes: number, period: 'AM' | 'PM'): MinutesOfDay {
  if (!Number.isInteger(hour) || hour < 1 || hour > 12) {
    throw new Error('Enter an hour from 1 to 12.');
  }
  if (!Number.isInteger(minutes) || minutes < 0 || minutes > 59) {
    throw new Error('Enter minutes from 0 to 59.');
  }
  if (period !== 'AM' && period !== 'PM') {
    throw new Error('Choose AM or PM.');
  }
  let hour24 = hour % 12;
  if (period === 'PM') hour24 += 12;
  return hour24 * 60 + minutes;
}

/**
 * Splits minutes since midnight into 12-hour fields.
 */
export function splitTime12(totalMinutes: MinutesOfDay): { hour: number; minutes: number; period: 'AM' | 'PM' } {
  const safe = ((Math.round(totalMinutes) % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_PER_DAY;
  const hour24 = Math.floor(safe / 60);
  const minutes = safe % 60;
  const period: 'AM' | 'PM' = hour24 < 12 ? 'AM' : 'PM';
  const hour = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return { hour, minutes, period };
}

/**
 * Formats minutes since midnight as a clock time.
 * 12h -> "09:00 AM"; 24h -> "09:00".
 */
export function formatClockTime(totalMinutes: MinutesOfDay, format: TimeFormat): string {
  const safe = ((Math.round(totalMinutes) % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_PER_DAY;
  const hours = Math.floor(safe / 60);
  const minutes = safe % 60;
  if (format === '24h') {
    return `${pad2(hours)}:${pad2(minutes)}`;
  }
  const { hour, period } = splitTime12(safe);
  return `${pad2(hour)}:${pad2(minutes)} ${period}`;
}

/**
 * Formats a duration in minutes as "8h 30m" (or "45m" when under an hour,
 * or "0m" for zero). Negative durations keep a leading minus sign.
 */
export function formatDuration(totalMinutes: number): string {
  const negative = totalMinutes < 0;
  const abs = Math.abs(Math.round(totalMinutes));
  const hours = Math.floor(abs / 60);
  const minutes = abs % 60;
  const sign = negative ? '-' : '';
  if (hours === 0) return `${sign}${minutes}m`;
  if (minutes === 0) return `${sign}${hours}h`;
  return `${sign}${hours}h ${minutes}m`;
}

/**
 * Formats a duration in minutes as "H:MM" (e.g. 8h 30m -> "8:30").
 * Negative durations keep a leading minus sign.
 */
export function formatDurationHm(totalMinutes: number): string {
  const negative = totalMinutes < 0;
  const abs = Math.abs(Math.round(totalMinutes));
  const hours = Math.floor(abs / 60);
  const minutes = abs % 60;
  return `${negative ? '-' : ''}${hours}:${pad2(minutes)}`;
}

/**
 * Hours between two clock times on the same (unspecified) day.
 *
 * If the end time is earlier than the start time and `overnight` is true,
 * the end is treated as the next day and `overnightApplied` is true.
 * If `overnight` is false and the end is earlier, an Error is thrown —
 * the caller must explain that the shift spans midnight.
 */
export function minutesBetween(
  startMinutes: MinutesOfDay,
  endMinutes: MinutesOfDay,
  overnight: boolean,
): { minutes: number; overnightApplied: boolean } {
  let diff = endMinutes - startMinutes;
  if (diff < 0) {
    if (!overnight) {
      throw new Error(
        'The end time is earlier than the start time. Turn on the overnight option if the period spans midnight, or enter an end time after the start time.',
      );
    }
    diff += MINUTES_PER_DAY;
    return { minutes: diff, overnightApplied: true };
  }
  return { minutes: diff, overnightApplied: false };
}

/**
 * Absolute minutes since the Unix epoch (UTC) for a date + clock time.
 * The date is an ISO "YYYY-MM-DD" string, the time is minutes since
 * midnight. Throws on an invalid date.
 */
export function absoluteMinutes(dateIso: string, timeMinutes: MinutesOfDay): number {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateIso.trim());
  if (!m) {
    throw new Error('Enter a valid date.');
  }
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  const ms = Date.UTC(year, month - 1, day);
  const check = new Date(ms);
  if (
    check.getUTCFullYear() !== year ||
    check.getUTCMonth() !== month - 1 ||
    check.getUTCDate() !== day
  ) {
    throw new Error('Enter a valid calendar date.');
  }
  return Math.floor(ms / 60000) + timeMinutes;
}

/**
 * Minutes between two explicit datetimes. Strict: when dates are supplied,
 * an end that is earlier than the start is NEVER auto-treated as overnight
 * — an Error is thrown explaining the sequence is wrong.
 */
export function minutesBetweenDates(
  startDateIso: string,
  startMinutes: MinutesOfDay,
  endDateIso: string,
  endMinutes: MinutesOfDay,
): number {
  const startAbs = absoluteMinutes(startDateIso, startMinutes);
  const endAbs = absoluteMinutes(endDateIso, endMinutes);
  const diff = endAbs - startAbs;
  if (diff < 0) {
    throw new Error(
      'The end date and time are before the start date and time. With explicit dates the end must come after the start — check the dates and times and try again.',
    );
  }
  return diff;
}

/** A timed break period, as minutes since midnight within the shift. */
export interface BreakPeriod {
  start: MinutesOfDay;
  end: MinutesOfDay;
}

/**
 * Validates timed break periods against a shift and returns the total
 * break minutes.
 *
 * Rules enforced (each violation throws a specific Error):
 * - every break must start and end inside the shift (start >= shift start,
 *   end <= shift end, where the shift may itself span midnight);
 * - a break must end after it starts (a break that crosses midnight is
 *   not supported — split it into two periods);
 * - break periods must not overlap each other (overlapping breaks would
 *   double-count the same minutes);
 * - the total break must be shorter than the shift.
 *
 * The additional unpaid-break duration (plain minutes, separate from the
 * timed periods) is added once on top. It must not push the total break
 * to or beyond the shift length. It is the caller's job to only enter
 * minutes for break time that is NOT already covered by a timed period —
 * the UI states this next to the field.
 */
export function totalBreakMinutes(
  shiftMinutes: number,
  breaks: BreakPeriod[],
  additionalUnpaidMinutes: number,
): number {
  if (!Number.isFinite(additionalUnpaidMinutes) || additionalUnpaidMinutes < 0) {
    throw new Error('Enter an additional unpaid break of 0 minutes or more.');
  }
  if (additionalUnpaidMinutes >= shiftMinutes) {
    throw new Error('The additional unpaid break must be shorter than the shift itself.');
  }

  // Normalise each break into absolute minutes inside the shift window
  // (shift start = 0, shift end = shiftMinutes). A break that starts
  // before the shift start is only valid if the shift spans midnight and
  // the break belongs to the after-midnight part — that is handled by the
  // caller passing already-normalised breaks; here we validate ranges.
  const sorted = [...breaks].sort((a, b) => a.start - b.start);
  let timedTotal = 0;
  for (let i = 0; i < sorted.length; i++) {
    const b = sorted[i];
    if (b.end <= b.start) {
      throw new Error(
        'Each break must end after it starts. A break that crosses midnight is not supported — split it into two breaks.',
      );
    }
    if (b.start < 0 || b.end > shiftMinutes) {
      throw new Error('Every break must fall inside the shift — a break starts before the shift or ends after it.');
    }
    if (i > 0 && b.start < sorted[i - 1].end) {
      throw new Error('Break periods overlap. Overlapping breaks would count the same minutes twice — adjust them so they do not overlap.');
    }
    timedTotal += b.end - b.start;
  }

  const total = timedTotal + additionalUnpaidMinutes;
  if (total >= shiftMinutes) {
    throw new Error('The total break time must be shorter than the shift — otherwise there is no work time left.');
  }
  return total;
}

/**
 * Net work minutes for a shift: shift length minus validated break time.
 * @throws Error if any break rule is violated (see totalBreakMinutes).
 */
export function netWorkMinutes(
  shiftMinutes: number,
  breaks: BreakPeriod[],
  additionalUnpaidMinutes: number,
): { totalShift: number; totalBreak: number; net: number } {
  const totalBreak = totalBreakMinutes(shiftMinutes, breaks, additionalUnpaidMinutes);
  return { totalShift: shiftMinutes, totalBreak, net: shiftMinutes - totalBreak };
}

/** One duration row for Add / Subtract Time mode. */
export interface DurationRow {
  hours: number;
  minutes: number;
  /** 'add' adds the row, 'subtract' subtracts it. */
  sign: 'add' | 'subtract';
}

/**
 * Totals a list of signed duration rows. The result may be negative —
 * the caller displays it clearly (e.g. "-1h 30m") rather than clamping.
 */
export function totalSignedDurations(rows: DurationRow[]): number {
  let total = 0;
  for (const row of rows) {
    if (!Number.isFinite(row.hours) || !Number.isFinite(row.minutes) || row.hours < 0 || row.minutes < 0) {
      throw new Error('Enter non-negative hours and minutes for every time value.');
    }
    const minutes = row.hours * 60 + row.minutes;
    total += row.sign === 'add' ? minutes : -minutes;
  }
  return total;
}

/**
 * Adds or subtracts a duration from a starting clock time.
 * Returns the resulting clock time plus how many days it moved:
 * +1 = next day, -1 = previous day, 0 = same day.
 */
export function clockTimeAfter(
  startMinutes: MinutesOfDay,
  durationMinutes: number,
  operation: 'add' | 'subtract',
): { time: MinutesOfDay; daysOffset: number } {
  const delta = operation === 'add' ? durationMinutes : -durationMinutes;
  const total = startMinutes + delta;
  const daysOffset = Math.floor(total / MINUTES_PER_DAY);
  const time = ((total % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_PER_DAY;
  return { time, daysOffset };
}

/** Rounds a number to the given decimal places (no string involved). */
function roundTo(value: number, precision: number): number {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
}

/**
 * Converts hours + minutes to decimal hours, rounded once to the chosen
 * precision at the very end — no intermediate rounding.
 */
export function toDecimalHours(hours: number, minutes: number, precision: number): number {
  if (!Number.isFinite(hours) || !Number.isFinite(minutes) || hours < 0 || minutes < 0) {
    throw new Error('Enter non-negative hours and minutes.');
  }
  return roundTo(hours + minutes / 60, precision);
}

/** Converts a total number of minutes to decimal hours. */
export function minutesToDecimalHours(totalMinutes: number, precision: number): number {
  if (!Number.isFinite(totalMinutes) || totalMinutes < 0) {
    throw new Error('Enter a non-negative number of minutes.');
  }
  return roundTo(totalMinutes / 60, precision);
}

/**
 * Converts decimal hours back to hours and whole minutes.
 * @throws Error for negative or non-finite input.
 */
export function fromDecimalHours(decimal: number): { hours: number; minutes: number } {
  if (!Number.isFinite(decimal) || decimal < 0) {
    throw new Error('Enter a decimal number of 0 or more, for example 1.5.');
  }
  const totalMinutes = Math.round(decimal * 60);
  return { hours: Math.floor(totalMinutes / 60), minutes: totalMinutes % 60 };
}

/** Converts decimal hours to a total number of minutes. */
export function decimalHoursToMinutes(decimal: number): number {
  if (!Number.isFinite(decimal) || decimal < 0) {
    throw new Error('Enter a decimal number of 0 or more, for example 1.5.');
  }
  return Math.round(decimal * 60);
}

/** Formats a decimal-hours value with the chosen precision (0–4 dp). */
export function formatDecimalHours(value: number, precision: number): string {
  return value.toFixed(precision);
}

/** Formats a money amount with the currency symbol and 2 decimals. */
export function formatMoney(amount: number, currency: CurrencyCode): string {
  const symbol = CURRENCY_SYMBOLS[currency];
  const sign = amount < 0 ? '-' : '';
  return `${sign}${symbol}${Math.abs(amount).toFixed(2)}`;
}

export interface PayInput {
  /** Hourly rate in the chosen currency. */
  rate: number;
  /** Regular hours worked (before overtime). */
  hours: number;
  minutes: number;
  /** Unpaid break minutes deducted from the worked time. */
  breakMinutes: number;
  /** Extra hours paid at the overtime multiplier. */
  overtimeHours: number;
  overtimeMinutes: number;
  /** User-controlled multiplier, e.g. 1.5. No tax or statutory rules. */
  overtimeMultiplier: number;
}

export interface PayResult {
  /** Regular (non-overtime) hours after the break deduction. */
  regularHours: number;
  /** Overtime hours. */
  overtimeHours: number;
  /** Total hours (regular + overtime). */
  totalHours: number;
  regularPay: number;
  overtimePay: number;
  totalPay: number;
  /** Average earnings per hour worked. */
  averagePerHour: number;
}

/**
 * Computes pay from hours worked. Overtime hours are EXTRA hours on top
 * of the regular hours (8 regular hours + 2 overtime hours at 1.5x on a
 * $20 rate = $160 + $60 = $220). Unpaid breaks are deducted from the
 * regular hours only, never from overtime.
 *
 * @throws Error for a negative rate, negative hours, a break longer than
 * the worked time, or a multiplier below 1.
 */
export function calculatePay(input: PayInput): PayResult {
  const { rate, hours, minutes, breakMinutes, overtimeHours, overtimeMinutes, overtimeMultiplier } = input;
  if (!Number.isFinite(rate) || rate < 0) {
    throw new Error('Enter an hourly rate of 0 or more.');
  }
  if (!Number.isFinite(hours) || !Number.isFinite(minutes) || hours < 0 || minutes < 0) {
    throw new Error('Enter non-negative hours and minutes worked.');
  }
  if (!Number.isFinite(breakMinutes) || breakMinutes < 0) {
    throw new Error('Enter an unpaid break of 0 minutes or more.');
  }
  if (!Number.isFinite(overtimeHours) || !Number.isFinite(overtimeMinutes) || overtimeHours < 0 || overtimeMinutes < 0) {
    throw new Error('Enter non-negative overtime hours and minutes.');
  }
  if (!Number.isFinite(overtimeMultiplier) || overtimeMultiplier < 1) {
    throw new Error('Enter an overtime multiplier of 1 or more, for example 1.5.');
  }

  const workedMinutes = hours * 60 + minutes;
  if (breakMinutes >= workedMinutes && workedMinutes > 0) {
    throw new Error('The unpaid break must be shorter than the hours worked.');
  }
  if (workedMinutes === 0 && breakMinutes > 0) {
    throw new Error('The unpaid break must be shorter than the hours worked.');
  }

  const regularMinutes = workedMinutes - breakMinutes;
  const regularHours = regularMinutes / 60;
  const overtimeTotalHours = overtimeHours + overtimeMinutes / 60;
  const totalHours = regularHours + overtimeTotalHours;

  const regularPay = regularHours * rate;
  const overtimePay = overtimeTotalHours * rate * overtimeMultiplier;
  const totalPay = regularPay + overtimePay;
  const averagePerHour = totalHours > 0 ? totalPay / totalHours : 0;

  return {
    regularHours: roundTo(regularHours, 4),
    overtimeHours: roundTo(overtimeTotalHours, 4),
    totalHours: roundTo(totalHours, 4),
    regularPay: roundTo(regularPay, 2),
    overtimePay: roundTo(overtimePay, 2),
    totalPay: roundTo(totalPay, 2),
    averagePerHour: roundTo(averagePerHour, 2),
  };
}
