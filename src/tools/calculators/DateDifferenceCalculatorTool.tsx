import { ArrowLeftRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PASTEL_PALETTES, pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';
import { localeTag, type LocaleCode } from '../../locales/config';

const STRINGS_EN = {
    errorInvalidDates: 'Please select valid start and end calendar dates.',
    errorInvalidBase: 'Please enter a valid starting calendar date.',
    errorNonNegative: 'Enter non-negative whole numbers for years, months, and days.',
    differenceTab: 'Difference Between Dates',
    addSubtractTab: 'Add / Subtract Time',
    startLabel: 'Start Date',
    endLabel: 'End Date',
    swapTitle: 'Swap dates',
    swapAria: 'Swap start and end dates',
    includeEnd: 'Include end date in count (+1 calendar day)',
    calendarDuration: 'Calendar Duration',
    reversedRange: '(Reversed range)',
    totalSpan: 'Total span:',
    calendarDays: 'calendar days',
    weeksDays: 'Weeks & Days',
    weekdays: 'Weekdays (Mon–Fri)',
    weekendDays: 'Weekend Days (Sat–Sun)',
    totalHours: 'Total Hours',
    yearsWord: 'years',
    monthsWord: 'months',
    daysWord: 'days',
    weeksAbbr: 'wk',
    daysAbbr: 'd',
    hoursAbbr: 'hr',
    referenceLabel: 'Reference Date',
    operationLabel: 'Operation',
    addOption: 'Add (+)',
    subtractOption: 'Subtract (-)',
    yearsLabel: 'Years',
    monthsLabel: 'Months',
    daysLabel: 'Days',
    resultingDate: 'Resulting Calendar Date',
    isoPrefix: 'ISO 8601:',
  };

type Mode = 'difference' | 'add-subtract';

function parseIsoDate(iso: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  const year = Number(m[1]);
  const month = Number(m[2]) - 1;
  const day = Number(m[3]);
  const d = new Date(Date.UTC(year, month, day));
  if (d.getUTCFullYear() !== year || d.getUTCMonth() !== month || d.getUTCDate() !== day) {
    return null;
  }
  return d;
}

function daysInUtcMonth(year: number, monthIndex: number): number {
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}

function countWeekdaysBetween(startUtc: Date, endUtc: Date, inclusive: boolean): { weekdays: number; weekends: number } {
  const startDayNum = Math.floor(startUtc.getTime() / 86400000);
  const endDayNum = Math.floor(endUtc.getTime() / 86400000) + (inclusive ? 1 : 0);
  const totalDays = Math.max(0, endDayNum - startDayNum);
  const fullWeeks = Math.floor(totalDays / 7);
  const remainder = totalDays % 7;

  let weekdays = fullWeeks * 5;
  let weekends = fullWeeks * 2;
  const startDow = startUtc.getUTCDay(); // 0=Sun..6=Sat

  for (let i = 0; i < remainder; i += 1) {
    const dow = (startDow + i) % 7;
    if (dow === 0 || dow === 6) {
      weekends += 1;
    } else {
      weekdays += 1;
    }
  }

  return { weekdays, weekends };
}

function formatReadableUtc(date: Date, locale: LocaleCode): string {
  return date.toLocaleDateString(localeTag(locale), {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function DateDifferenceCalculatorTool() {
  const { locale, t } = useLocale();
  const s = useComponentStrings('date-difference-calculator', STRINGS_EN);
  const palette = pastelForKey('date-difference-calculator');
  const [mode, setMode] = useState<Mode>('difference');
  const [startDate, setStartDate] = useState('2025-01-15');
  const [endDate, setEndDate] = useState('2025-11-12');
  const [inclusiveEnd, setInclusiveEnd] = useState(false);

  // Add / subtract state
  const [baseDate, setBaseDate] = useState('2025-06-01');
  const [operation, setOperation] = useState<'add' | 'subtract'>('add');
  const [deltaYears, setDeltaYears] = useState('0');
  const [deltaMonths, setDeltaMonths] = useState('3');
  const [deltaDays, setDeltaDays] = useState('14');

  const diffResult = useMemo(() => {
    const sDate = parseIsoDate(startDate);
    const e = parseIsoDate(endDate);
    if (!sDate || !e) {
      return { error: s.errorInvalidDates, data: null };
    }

    const inverted = sDate > e;
    const from = inverted ? e : sDate;
    const toBase = inverted ? sDate : e;
    const toForCalendar = inclusiveEnd
      ? new Date(toBase.getTime() + 86400000)
      : toBase;

    let years = toForCalendar.getUTCFullYear() - from.getUTCFullYear();
    let months = toForCalendar.getUTCMonth() - from.getUTCMonth();
    let days = toForCalendar.getUTCDate() - from.getUTCDate();

    if (days < 0) {
      const prevMonth = (toForCalendar.getUTCMonth() - 1 + 12) % 12;
      const prevYear =
        toForCalendar.getUTCMonth() === 0
          ? toForCalendar.getUTCFullYear() - 1
          : toForCalendar.getUTCFullYear();
      days += daysInUtcMonth(prevYear, prevMonth);
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    const rawDays = Math.round((toBase.getTime() - from.getTime()) / 86400000);
    const totalDays = rawDays + (inclusiveEnd ? 1 : 0);
    const weeks = Math.floor(totalDays / 7);
    const remainderDays = totalDays % 7;
    const { weekdays, weekends } = countWeekdaysBetween(from, toBase, inclusiveEnd);

    return {
      error: '',
      data: {
        inverted,
        years,
        months,
        days,
        totalDays,
        weeks,
        remainderDays,
        weekdays,
        weekends,
        totalHours: totalDays * 24,
      },
    };
  }, [startDate, endDate, inclusiveEnd, s]);

  const offsetResult = useMemo(() => {
    const base = parseIsoDate(baseDate);
    if (!base) {
      return { error: s.errorInvalidBase, data: null };
    }

    const y = Number(deltaYears) || 0;
    const m = Number(deltaMonths) || 0;
    const d = Number(deltaDays) || 0;

    if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d) || y < 0 || m < 0 || d < 0) {
      return { error: s.errorNonNegative, data: null };
    }

    const sign = operation === 'add' ? 1 : -1;
    const targetMonthDate = new Date(
      Date.UTC(base.getUTCFullYear() + sign * y, base.getUTCMonth() + sign * m, 1)
    );
    const clampedDay = Math.min(
      base.getUTCDate(),
      daysInUtcMonth(targetMonthDate.getUTCFullYear(), targetMonthDate.getUTCMonth())
    );
    const afterYearsMonths = new Date(
      Date.UTC(targetMonthDate.getUTCFullYear(), targetMonthDate.getUTCMonth(), clampedDay)
    );
    const finalDate = new Date(afterYearsMonths.getTime() + sign * d * 86400000);

    const pad = (n: number) => String(n).padStart(2, '0');
    const iso = `${finalDate.getUTCFullYear()}-${pad(finalDate.getUTCMonth() + 1)}-${pad(finalDate.getUTCDate())}`;

    return {
      error: '',
      data: {
        iso,
        readable: formatReadableUtc(finalDate, locale),
      },
    };
  }, [baseDate, operation, deltaYears, deltaMonths, deltaDays, s, locale]);

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-lg bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setMode('difference')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'difference' ? `${palette.soft} shadow-xs` : 'text-slate-600'
          }`}
        >
          {s.differenceTab}
        </button>
        <button
          type="button"
          onClick={() => setMode('add-subtract')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'add-subtract' ? `${palette.soft} shadow-xs` : 'text-slate-600'
          }`}
        >
          {s.addSubtractTab}
        </button>
      </div>

      {mode === 'difference' ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-end">
            <div>
              <label htmlFor="dd-start" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.startLabel}
              </label>
              <input
                id="dd-start"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setStartDate(endDate);
                setEndDate(startDate);
              }}
              title={s.swapTitle}
              aria-label={s.swapAria}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <ArrowLeftRight className="w-4 h-4" />
            </button>

            <div>
              <label htmlFor="dd-end" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.endLabel}
              </label>
              <input
                id="dd-end"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
              />
            </div>
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={inclusiveEnd}
              onChange={(e) => setInclusiveEnd(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600"
            />
            {s.includeEnd}
          </label>

          {diffResult.error && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {diffResult.error}
            </div>
          )}

          {diffResult.data && (
            <>
              <div className={`rounded-xl border border-indigo-200 ${palette.card} p-5`}>
                <div className={`text-xs font-semibold ${palette.link} mb-1`}>
                  {s.calendarDuration} {diffResult.data.inverted ? s.reversedRange : ''}
                </div>
                <div className={`text-2xl sm:text-3xl font-bold ${palette.link} tabular-nums`}>
                  {diffResult.data.years} {s.yearsWord}, {diffResult.data.months} {s.monthsWord},{' '}
                  {diffResult.data.days} {s.daysWord}
                </div>
                <p className="mt-1 text-sm text-slate-600 tabular-nums">
                  {s.totalSpan}{' '}
                  <strong className="text-slate-900">
                    {diffResult.data.totalDays.toLocaleString(localeTag(locale))} {s.calendarDays}
                  </strong>
                </p>
              </div>

              <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[0].card} p-4`}>
                  <dt className="text-xs text-slate-500">{s.weeksDays}</dt>
                  <dd className={`mt-1 text-lg font-bold font-mono ${PASTEL_PALETTES[0].link} tabular-nums`}>
                    {diffResult.data.weeks.toLocaleString(localeTag(locale))} {s.weeksAbbr}{' '}
                    {diffResult.data.remainderDays}
                    {s.daysAbbr}
                  </dd>
                </div>
                <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[1].card} p-4`}>
                  <dt className="text-xs text-slate-500">{s.weekdays}</dt>
                  <dd className={`mt-1 text-lg font-bold font-mono ${PASTEL_PALETTES[1].link} tabular-nums`}>
                    {diffResult.data.weekdays.toLocaleString(localeTag(locale))} {s.daysWord}
                  </dd>
                </div>
                <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[2].card} p-4`}>
                  <dt className="text-xs text-slate-500">{s.weekendDays}</dt>
                  <dd className={`mt-1 text-lg font-bold font-mono ${PASTEL_PALETTES[2].link} tabular-nums`}>
                    {diffResult.data.weekends.toLocaleString(localeTag(locale))} {s.daysWord}
                  </dd>
                </div>
                <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[3].card} p-4`}>
                  <dt className="text-xs text-slate-500">{s.totalHours}</dt>
                  <dd className={`mt-1 text-lg font-bold font-mono ${PASTEL_PALETTES[3].link} tabular-nums`}>
                    {diffResult.data.totalHours.toLocaleString(localeTag(locale))} {s.hoursAbbr}
                  </dd>
                </div>
              </dl>
            </>
          )}
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <label htmlFor="dd-base" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.referenceLabel}
              </label>
              <input
                id="dd-base"
                type="date"
                value={baseDate}
                onChange={(e) => setBaseDate(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
              />
            </div>

            <div>
              <label htmlFor="dd-op" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.operationLabel}
              </label>
              <select
                id="dd-op"
                value={operation}
                onChange={(e) => setOperation(e.target.value as 'add' | 'subtract')}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
              >
                <option value="add">{s.addOption}</option>
                <option value="subtract">{s.subtractOption}</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-2 lg:col-span-2">
              <div>
                <label htmlFor="dd-y" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.yearsLabel}
                </label>
                <input
                  id="dd-y"
                  type="number"
                  min={0}
                  value={deltaYears}
                  onChange={(e) => setDeltaYears(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-mono text-sm tabular-nums"
                />
              </div>
              <div>
                <label htmlFor="dd-m" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.monthsLabel}
                </label>
                <input
                  id="dd-m"
                  type="number"
                  min={0}
                  value={deltaMonths}
                  onChange={(e) => setDeltaMonths(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-mono text-sm tabular-nums"
                />
              </div>
              <div>
                <label htmlFor="dd-d" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.daysLabel}
                </label>
                <input
                  id="dd-d"
                  type="number"
                  min={0}
                  value={deltaDays}
                  onChange={(e) => setDeltaDays(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-mono text-sm tabular-nums"
                />
              </div>
            </div>
          </div>

          {offsetResult.error && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {offsetResult.error}
            </div>
          )}

          {offsetResult.data && (
            <div className={`rounded-xl border border-indigo-200 ${palette.card} p-5`}>
              <div className={`text-xs font-semibold ${palette.link} mb-1`}>{s.resultingDate}</div>
              <div className={`text-2xl font-bold ${palette.link}`}>{offsetResult.data.readable}</div>
              <div className="mt-1 text-sm font-mono text-slate-600">
                {s.isoPrefix} {offsetResult.data.iso}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
