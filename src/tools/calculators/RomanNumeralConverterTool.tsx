import { ArrowLeftRight } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';
import {
  convertDateToRoman,
  convertRomanToDate,
  formatRomanDate,
  formatStandardDate,
  integerToRoman,
  romanToInteger,
  validateCalendarDate,
  validateRoman,
} from './romanNumerals';
import type { RomanDateFormat, RomanDateParts } from './romanNumerals';

const STRINGS_EN = {
  modeNumberToRoman: 'Number to Roman',
  modeRomanToNumber: 'Roman to Number',
  modeDate: 'Roman Date Converter',
  numberLabel: 'Number',
  numberPlaceholder: 'Enter a number (1–3999)',
  numberHint: 'Enter a whole number from 1 to 3999 and its Roman numeral appears instantly.',
  numberResultTitle: 'Your Roman Numeral',
  romanLabel: 'Roman numerals',
  romanPlaceholder: 'Enter Roman numerals',
  romanHint: 'Enter Roman numerals (for example XIV or MMXXVI) and the number appears instantly.',
  romanResultTitle: 'Your Number',
  normalizedLabel: 'Normalized Roman numerals',
  errorNotANumber: 'Enter a valid number.',
  errorNotInteger: 'Enter a whole number — Roman numerals have no fractions or decimals.',
  errorOutOfRange: 'Enter a whole number from 1 to 3999. Roman numerals only cover this range.',
  errorInvalidRoman: 'That is not a valid Roman numeral. Use only the letters I, V, X, L, C, D and M.',
  errorEnterFullDate: 'Enter a complete date — day, month and year.',
  errorInvalidDate: 'That is not a real calendar date. Check the day, month and year (for example, February has 29 days only in a leap year).',
  errorInvalidRomanDate: 'That is not a valid Roman date. Enter a date like XXVII/XI/MMXXVI, with a day, a month and a year separated by / or -.',
  dateToRomanHeading: 'Date to Roman numerals',
  romanToDateHeading: 'Roman date to standard date',
  dateLabel: 'Date',
  dayLabel: 'Day',
  monthLabel: 'Month',
  yearLabel: 'Year',
  formatLabel: 'Date format',
  romanDateLabel: 'Roman date',
  romanDatePlaceholder: 'e.g. XXVII/XI/MMXXVI',
  dayResult: 'Day',
  monthResult: 'Month',
  yearResult: 'Year',
  fullDateResult: 'Full Roman date',
  dateNote:
    'Each date component is converted separately — the day, month and year each become a Roman numeral. There is no single universally standardized Roman date format.',
  standardResultTitle: 'Standard date',
  examplesLabel: 'Try an example:',
  clearLabel: 'Clear',
  clearHistory: 'Clear history',
  swapToRomanAria: 'Switch to Roman to Number',
  swapToRomanTitle: 'Switch to Roman to Number',
  swapToNumberAria: 'Switch to Number to Roman',
  swapToNumberTitle: 'Switch to Number to Roman',
  copy: 'Copy',
  copyResult: 'Copy Result',
  copyFullDate: 'Copy full date',
  historyTitle: 'Recent conversions',
  historyEmpty: 'Your recent conversions will appear here.',
  dateDirectionToRoman: 'Date to Roman',
  dateDirectionToStandard: 'Roman date to standard',
};

type Mode = 'number-to-roman' | 'roman-to-number' | 'date';
type DateDirection = 'to-roman' | 'to-standard';
type ConversionStatus = 'empty' | 'error' | 'ok';

interface SimpleResult {
  status: ConversionStatus;
  value: string | null;
  error: string;
}

interface RomanResult extends SimpleResult {
  normalized: string | null;
}

interface DateToRomanResult {
  status: ConversionStatus;
  parts: RomanDateParts | null;
  formatted: string | null;
  error: string;
}

interface HistoryItem {
  id: number;
  mode: Mode;
  direction: DateDirection | null;
  input: string;
  output: string;
  format: RomanDateFormat;
  day: string;
  month: string;
  year: string;
  isoDate: string;
}

const DATE_FORMATS: RomanDateFormat[] = ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'];
const EXAMPLE_NUMBERS = [4, 14, 99, 1984, 2026, 3999];
const EXAMPLE_ROMAN = ['IV', 'XIV', 'XCIX', 'MCMLXXXIV', 'MMXXVI', 'MMMCMXCIX'];
const HISTORY_LIMIT = 8;

const INPUT_CLASS =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const BUTTON_CLASS =
  'inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const EXAMPLE_BUTTON_CLASS =
  'rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-sm text-slate-700 hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const HISTORY_BUTTON_CLASS =
  'w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-start hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';

const EMPTY_HISTORY_FIELDS = {
  format: 'DD/MM/YYYY' as RomanDateFormat,
  day: '',
  month: '',
  year: '',
  isoDate: '',
};

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function buildIsoDate(day: string, month: string, year: string): string {
  const d = Number(day);
  const m = Number(month);
  const y = Number(year);
  if (day.trim() === '' || month.trim() === '' || year.trim() === '') return '';
  if (!Number.isInteger(d) || !Number.isInteger(m) || !Number.isInteger(y)) return '';
  if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1 || y > 3999) return '';
  return `${String(y).padStart(4, '0')}-${pad2(m)}-${pad2(d)}`;
}

function FormatSelect({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: RomanDateFormat;
  onChange: (next: RomanDateFormat) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-900 mb-1.5">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as RomanDateFormat)}
        className={`${INPUT_CLASS} font-mono tabular-nums`}
      >
        {DATE_FORMATS.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function RomanNumeralConverterTool() {
  const { t } = useLocale();
  const s = useComponentStrings('roman-numeral-converter', STRINGS_EN);
  const palette = pastelForKey('roman-numeral-converter');

  const [mode, setMode] = useState<Mode>('number-to-roman');
  const [numberInput, setNumberInput] = useState('2026');
  const [romanInput, setRomanInput] = useState('MMXXVI');
  const [isoDate, setIsoDate] = useState('2026-11-27');
  const [dayStr, setDayStr] = useState('27');
  const [monthStr, setMonthStr] = useState('11');
  const [yearStr, setYearStr] = useState('2026');
  const [dateToRomanFormat, setDateToRomanFormat] = useState<RomanDateFormat>('DD/MM/YYYY');
  const [romanDateInput, setRomanDateInput] = useState('XXVII/XI/MMXXVI');
  const [romanToDateFormat, setRomanToDateFormat] = useState<RomanDateFormat>('DD/MM/YYYY');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const historyIdRef = useRef(0);

  const MODES: { id: Mode; label: string }[] = [
    { id: 'number-to-roman', label: s.modeNumberToRoman },
    { id: 'roman-to-number', label: s.modeRomanToNumber },
    { id: 'date', label: s.modeDate },
  ];

  const numberResult: SimpleResult = useMemo(() => {
    const raw = numberInput.trim();
    if (raw === '') return { status: 'empty', value: null, error: '' };
    if (!/^-?\d*\.?\d+$/.test(raw)) {
      return { status: 'error', value: null, error: s.errorNotANumber };
    }
    const n = Number(raw);
    if (!Number.isInteger(n)) {
      return { status: 'error', value: null, error: s.errorNotInteger };
    }
    if (n < 1 || n > 3999) {
      return { status: 'error', value: null, error: s.errorOutOfRange };
    }
    try {
      return { status: 'ok', value: integerToRoman(n), error: '' };
    } catch {
      return { status: 'error', value: null, error: s.errorOutOfRange };
    }
  }, [numberInput, s]);

  const romanResult: RomanResult = useMemo(() => {
    const raw = romanInput.trim();
    if (raw === '') return { status: 'empty', value: null, error: '', normalized: null };
    const check = validateRoman(raw);
    if (!check.valid) {
      return { status: 'error', value: null, error: check.error ?? s.errorInvalidRoman, normalized: null };
    }
    try {
      const n = romanToInteger(raw);
      return { status: 'ok', value: String(n), error: '', normalized: raw.toUpperCase() };
    } catch {
      return { status: 'error', value: null, error: s.errorInvalidRoman, normalized: null };
    }
  }, [romanInput, s]);

  const dateToRomanResult: DateToRomanResult = useMemo(() => {
    if (dayStr === '' && monthStr === '' && yearStr === '' && isoDate === '') {
      return { status: 'empty', parts: null, formatted: null, error: '' };
    }
    const day = Number(dayStr);
    const month = Number(monthStr);
    const year = Number(yearStr);
    if (
      dayStr.trim() === '' ||
      monthStr.trim() === '' ||
      yearStr.trim() === '' ||
      !Number.isInteger(day) ||
      !Number.isInteger(month) ||
      !Number.isInteger(year)
    ) {
      return { status: 'error', parts: null, formatted: null, error: s.errorEnterFullDate };
    }
    if (!validateCalendarDate(day, month, year)) {
      return { status: 'error', parts: null, formatted: null, error: s.errorInvalidDate };
    }
    try {
      const parts = convertDateToRoman(day, month, year);
      return { status: 'ok', parts, formatted: formatRomanDate(parts, dateToRomanFormat), error: '' };
    } catch {
      return { status: 'error', parts: null, formatted: null, error: s.errorInvalidDate };
    }
  }, [dayStr, monthStr, yearStr, isoDate, dateToRomanFormat, s]);

  const romanToDateResult: SimpleResult = useMemo(() => {
    const raw = romanDateInput.trim();
    if (raw === '') return { status: 'empty', value: null, error: '' };
    try {
      const { day, month, year } = convertRomanToDate(raw);
      return { status: 'ok', value: formatStandardDate(day, month, year, romanToDateFormat), error: '' };
    } catch {
      return { status: 'error', value: null, error: s.errorInvalidRomanDate };
    }
  }, [romanDateInput, romanToDateFormat, s]);

  const addToHistory = (entry: Omit<HistoryItem, 'id'>) => {
    setHistory((prev) => {
      const top = prev[0];
      if (
        top &&
        top.mode === entry.mode &&
        top.direction === entry.direction &&
        top.input === entry.input &&
        top.output === entry.output
      ) {
        return prev;
      }
      historyIdRef.current += 1;
      return [{ ...entry, id: historyIdRef.current }, ...prev].slice(0, HISTORY_LIMIT);
    });
  };

  const commitNumber = () => {
    if (numberResult.status === 'ok' && numberResult.value) {
      addToHistory({
        ...EMPTY_HISTORY_FIELDS,
        mode: 'number-to-roman',
        direction: null,
        input: numberInput.trim(),
        output: numberResult.value,
      });
    }
  };

  const commitRoman = () => {
    if (romanResult.status === 'ok' && romanResult.value && romanResult.normalized) {
      addToHistory({
        ...EMPTY_HISTORY_FIELDS,
        mode: 'roman-to-number',
        direction: null,
        input: romanResult.normalized,
        output: romanResult.value,
      });
    }
  };

  const commitDateToRoman = () => {
    if (dateToRomanResult.status === 'ok' && dateToRomanResult.formatted) {
      const day = Number(dayStr);
      const month = Number(monthStr);
      const year = Number(yearStr);
      addToHistory({
        mode: 'date',
        direction: 'to-roman',
        input: formatStandardDate(day, month, year, dateToRomanFormat),
        output: dateToRomanResult.formatted,
        format: dateToRomanFormat,
        day: dayStr,
        month: monthStr,
        year: yearStr,
        isoDate,
      });
    }
  };

  const commitRomanToDate = () => {
    if (romanToDateResult.status === 'ok' && romanToDateResult.value) {
      addToHistory({
        ...EMPTY_HISTORY_FIELDS,
        mode: 'date',
        direction: 'to-standard',
        input: romanDateInput.trim().toUpperCase(),
        output: romanToDateResult.value,
        format: romanToDateFormat,
      });
    }
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>, commit: () => void) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commit();
    }
  };

  const handleIsoChange = (value: string) => {
    setIsoDate(value);
    if (value === '') {
      setDayStr('');
      setMonthStr('');
      setYearStr('');
      return;
    }
    const parts = value.split('-');
    if (parts.length === 3) {
      setYearStr(String(Number(parts[0])));
      setMonthStr(String(Number(parts[1])));
      setDayStr(String(Number(parts[2])));
    }
  };

  const handleDayChange = (value: string) => {
    setDayStr(value);
    setIsoDate(buildIsoDate(value, monthStr, yearStr));
  };

  const handleMonthChange = (value: string) => {
    setMonthStr(value);
    setIsoDate(buildIsoDate(dayStr, value, yearStr));
  };

  const handleYearChange = (value: string) => {
    setYearStr(value);
    setIsoDate(buildIsoDate(dayStr, monthStr, value));
  };

  const reuseHistory = (item: HistoryItem) => {
    setMode(item.mode);
    if (item.mode === 'number-to-roman') {
      setNumberInput(item.input);
    } else if (item.mode === 'roman-to-number') {
      setRomanInput(item.input);
    } else if (item.direction === 'to-roman') {
      setDayStr(item.day);
      setMonthStr(item.month);
      setYearStr(item.year);
      setIsoDate(item.isoDate);
      setDateToRomanFormat(item.format);
    } else {
      setRomanDateInput(item.input);
      setRomanToDateFormat(item.format);
    }
  };

  const historyModeLabel = (item: HistoryItem): string => {
    if (item.mode === 'number-to-roman') return s.modeNumberToRoman;
    if (item.mode === 'roman-to-number') return s.modeRomanToNumber;
    return item.direction === 'to-roman' ? s.dateDirectionToRoman : s.dateDirectionToStandard;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-1.5 rounded-lg bg-slate-100 p-1.5">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] ${
              mode === m.id ? `${palette.soft} shadow-xs` : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === 'number-to-roman' && (
        <div className="space-y-4">
          <div>
            <label htmlFor="rn-number" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.numberLabel}
            </label>
            <input
              id="rn-number"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              placeholder={s.numberPlaceholder}
              value={numberInput}
              onChange={(e) => setNumberInput(e.target.value)}
              onKeyDown={(e) => handleEnter(e, commitNumber)}
              onBlur={commitNumber}
              className={`${INPUT_CLASS} font-mono text-lg tabular-nums`}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setNumberInput('')} className={BUTTON_CLASS}>
              {s.clearLabel}
            </button>
            <button
              type="button"
              onClick={() => {
                if (numberResult.status === 'ok' && numberResult.value) {
                  setRomanInput(numberResult.value);
                }
                setMode('roman-to-number');
              }}
              aria-label={s.swapToRomanAria}
              title={s.swapToRomanTitle}
              className={BUTTON_CLASS}
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span className="ml-2">{s.modeRomanToNumber}</span>
            </button>
          </div>

          {numberResult.status === 'empty' && (
            <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              {s.numberHint}
            </p>
          )}
          {numberResult.status === 'error' && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {numberResult.error}
            </div>
          )}
          {numberResult.status === 'ok' && numberResult.value && (
            <div className={`rounded-xl ${palette.card} p-5 flex flex-wrap items-center justify-between gap-4`}>
              <div>
                <div className="text-xs font-semibold text-slate-500 mb-1">{s.numberResultTitle}</div>
                <div className={`text-2xl sm:text-3xl font-bold font-mono ${palette.link} tabular-nums break-all`}>
                  {numberResult.value}
                </div>
              </div>
              <CopyButton text={numberResult.value} label={s.copyResult} copiedLabel={t.common.copied} />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-600">{s.examplesLabel}</span>
            {EXAMPLE_NUMBERS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setNumberInput(String(n))}
                className={EXAMPLE_BUTTON_CLASS}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      )}

      {mode === 'roman-to-number' && (
        <div className="space-y-4">
          <div>
            <label htmlFor="rn-roman" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.romanLabel}
            </label>
            <input
              id="rn-roman"
              type="text"
              autoCapitalize="characters"
              autoComplete="off"
              spellCheck={false}
              placeholder={s.romanPlaceholder}
              value={romanInput}
              onChange={(e) => setRomanInput(e.target.value)}
              onKeyDown={(e) => handleEnter(e, commitRoman)}
              onBlur={commitRoman}
              className={`${INPUT_CLASS} font-mono text-lg uppercase tabular-nums`}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setRomanInput('')} className={BUTTON_CLASS}>
              {s.clearLabel}
            </button>
            <button
              type="button"
              onClick={() => {
                if (romanResult.status === 'ok' && romanResult.value) {
                  setNumberInput(romanResult.value);
                }
                setMode('number-to-roman');
              }}
              aria-label={s.swapToNumberAria}
              title={s.swapToNumberTitle}
              className={BUTTON_CLASS}
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span className="ml-2">{s.modeNumberToRoman}</span>
            </button>
          </div>

          {romanResult.status === 'empty' && (
            <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              {s.romanHint}
            </p>
          )}
          {romanResult.status === 'error' && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {romanResult.error}
            </div>
          )}
          {romanResult.status === 'ok' && romanResult.value && (
            <div className={`rounded-xl ${palette.card} p-5 flex flex-wrap items-center justify-between gap-4`}>
              <div>
                <div className="text-xs font-semibold text-slate-500 mb-1">{s.romanResultTitle}</div>
                <div className={`text-2xl sm:text-3xl font-bold font-mono ${palette.link} tabular-nums`}>
                  {romanResult.value}
                </div>
                {romanResult.normalized && (
                  <div className="mt-1 text-sm text-slate-600">
                    {s.normalizedLabel}:{' '}
                    <span className="font-mono tabular-nums">{romanResult.normalized}</span>
                  </div>
                )}
              </div>
              <CopyButton text={romanResult.value} label={s.copyResult} copiedLabel={t.common.copied} />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-600">{s.examplesLabel}</span>
            {EXAMPLE_ROMAN.map((r) => (
              <button key={r} type="button" onClick={() => setRomanInput(r)} className={EXAMPLE_BUTTON_CLASS}>
                {r}
              </button>
            ))}
          </div>
        </div>
      )}

      {mode === 'date' && (
        <div className="space-y-6">
          <section className={`rounded-xl ${palette.card} p-5 space-y-4`}>
            <h2 className="text-base font-bold text-slate-900">{s.dateToRomanHeading}</h2>

            <div>
              <label htmlFor="rn-date" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.dateLabel}
              </label>
              <input
                id="rn-date"
                type="date"
                min="0001-01-01"
                max="3999-12-31"
                value={isoDate}
                onChange={(e) => handleIsoChange(e.target.value)}
                onKeyDown={(e) => handleEnter(e, commitDateToRoman)}
                onBlur={commitDateToRoman}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              />
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div>
                <label htmlFor="rn-day" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.dayLabel}
                </label>
                <input
                  id="rn-day"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={31}
                  value={dayStr}
                  onChange={(e) => handleDayChange(e.target.value)}
                  onKeyDown={(e) => handleEnter(e, commitDateToRoman)}
                  onBlur={commitDateToRoman}
                  className={`${INPUT_CLASS} font-mono tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="rn-month" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.monthLabel}
                </label>
                <input
                  id="rn-month"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={12}
                  value={monthStr}
                  onChange={(e) => handleMonthChange(e.target.value)}
                  onKeyDown={(e) => handleEnter(e, commitDateToRoman)}
                  onBlur={commitDateToRoman}
                  className={`${INPUT_CLASS} font-mono tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="rn-year" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.yearLabel}
                </label>
                <input
                  id="rn-year"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={3999}
                  value={yearStr}
                  onChange={(e) => handleYearChange(e.target.value)}
                  onKeyDown={(e) => handleEnter(e, commitDateToRoman)}
                  onBlur={commitDateToRoman}
                  className={`${INPUT_CLASS} font-mono tabular-nums`}
                />
              </div>
            </div>

            <FormatSelect
              id="rn-date-format"
              label={s.formatLabel}
              value={dateToRomanFormat}
              onChange={setDateToRomanFormat}
            />

            <div>
              <button
                type="button"
                onClick={() => {
                  setIsoDate('');
                  setDayStr('');
                  setMonthStr('');
                  setYearStr('');
                }}
                className={BUTTON_CLASS}
              >
                {s.clearLabel}
              </button>
            </div>

            {dateToRomanResult.status === 'error' && (
              <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {dateToRomanResult.error}
              </div>
            )}
            {dateToRomanResult.status === 'ok' && dateToRomanResult.parts && dateToRomanResult.formatted && (
              <>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-slate-900">{s.dayResult}</span>
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-lg tabular-nums">{dateToRomanResult.parts.day}</span>
                      <CopyButton text={dateToRomanResult.parts.day} label={s.copy} copiedLabel={t.common.copied} />
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3">
                    <span className="text-sm font-semibold text-slate-900">{s.monthResult}</span>
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-lg tabular-nums">{dateToRomanResult.parts.month}</span>
                      <CopyButton text={dateToRomanResult.parts.month} label={s.copy} copiedLabel={t.common.copied} />
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3">
                    <span className="text-sm font-semibold text-slate-900">{s.yearResult}</span>
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-lg tabular-nums">{dateToRomanResult.parts.year}</span>
                      <CopyButton text={dateToRomanResult.parts.year} label={s.copy} copiedLabel={t.common.copied} />
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3">
                    <span className="text-sm font-semibold text-slate-900">{s.fullDateResult}</span>
                    <span className="flex items-center gap-2">
                      <span className={`font-mono text-lg font-bold ${palette.link} tabular-nums break-all`}>
                        {dateToRomanResult.formatted}
                      </span>
                      <CopyButton
                        text={dateToRomanResult.formatted}
                        label={s.copyFullDate}
                        copiedLabel={t.common.copied}
                      />
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500">{s.dateNote}</p>
              </>
            )}
          </section>

          <section className={`rounded-xl ${palette.card} p-5 space-y-4`}>
            <h2 className="text-base font-bold text-slate-900">{s.romanToDateHeading}</h2>

            <div>
              <label htmlFor="rn-roman-date" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.romanDateLabel}
              </label>
              <input
                id="rn-roman-date"
                type="text"
                autoCapitalize="characters"
                autoComplete="off"
                spellCheck={false}
                placeholder={s.romanDatePlaceholder}
                value={romanDateInput}
                onChange={(e) => setRomanDateInput(e.target.value)}
                onKeyDown={(e) => handleEnter(e, commitRomanToDate)}
                onBlur={commitRomanToDate}
                className={`${INPUT_CLASS} font-mono uppercase tabular-nums`}
              />
            </div>

            <FormatSelect
              id="rn-roman-date-format"
              label={s.formatLabel}
              value={romanToDateFormat}
              onChange={setRomanToDateFormat}
            />

            <div>
              <button type="button" onClick={() => setRomanDateInput('')} className={BUTTON_CLASS}>
                {s.clearLabel}
              </button>
            </div>

            {romanToDateResult.status === 'error' && (
              <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {romanToDateResult.error}
              </div>
            )}
            {romanToDateResult.status === 'ok' && romanToDateResult.value && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">{s.standardResultTitle}</div>
                  <div className={`text-2xl sm:text-3xl font-bold font-mono ${palette.link} tabular-nums break-all`}>
                    {romanToDateResult.value}
                  </div>
                </div>
                <CopyButton text={romanToDateResult.value} label={s.copyResult} copiedLabel={t.common.copied} />
              </div>
            )}
          </section>
        </div>
      )}

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
                    {item.input} → {item.output}
                  </span>
                  <span className="block text-xs text-slate-500">{historyModeLabel(item)}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
