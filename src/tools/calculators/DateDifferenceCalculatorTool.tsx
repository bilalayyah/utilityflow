import { ArrowLeftRight } from 'lucide-react';
import { useMemo, useState } from 'react';

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

function formatReadableUtc(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function DateDifferenceCalculatorTool() {
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
    const s = parseIsoDate(startDate);
    const e = parseIsoDate(endDate);
    if (!s || !e) {
      return { error: 'Please select valid start and end calendar dates.', data: null };
    }

    const inverted = s > e;
    const from = inverted ? e : s;
    const toBase = inverted ? s : e;
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
  }, [startDate, endDate, inclusiveEnd]);

  const offsetResult = useMemo(() => {
    const base = parseIsoDate(baseDate);
    if (!base) {
      return { error: 'Please enter a valid starting calendar date.', data: null };
    }

    const y = Number(deltaYears) || 0;
    const m = Number(deltaMonths) || 0;
    const d = Number(deltaDays) || 0;

    if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d) || y < 0 || m < 0 || d < 0) {
      return { error: 'Enter non-negative whole numbers for years, months, and days.', data: null };
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
        readable: formatReadableUtc(finalDate),
      },
    };
  }, [baseDate, operation, deltaYears, deltaMonths, deltaDays]);

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-lg bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setMode('difference')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'difference' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          Difference Between Dates
        </button>
        <button
          type="button"
          onClick={() => setMode('add-subtract')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'add-subtract' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          Add / Subtract Time
        </button>
      </div>

      {mode === 'difference' ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-end">
            <div>
              <label htmlFor="dd-start" className="block text-sm font-semibold text-slate-900 mb-1.5">
                Start Date
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
              title="Swap dates"
              aria-label="Swap start and end dates"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <ArrowLeftRight className="w-4 h-4" />
            </button>

            <div>
              <label htmlFor="dd-end" className="block text-sm font-semibold text-slate-900 mb-1.5">
                End Date
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
            Include end date in count (+1 calendar day)
          </label>

          {diffResult.error && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {diffResult.error}
            </div>
          )}

          {diffResult.data && (
            <>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-5">
                <div className="text-xs font-semibold text-indigo-700 mb-1">
                  Calendar Duration {diffResult.data.inverted ? '(Reversed range)' : ''}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                  {diffResult.data.years} years, {diffResult.data.months} months, {diffResult.data.days} days
                </div>
                <p className="mt-1 text-sm text-slate-600 tabular-nums">
                  Total span: <strong className="text-slate-900">{diffResult.data.totalDays.toLocaleString()} calendar days</strong>
                </p>
              </div>

              <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <dt className="text-xs text-slate-500">Weeks & Days</dt>
                  <dd className="mt-1 text-lg font-bold font-mono text-slate-900 tabular-nums">
                    {diffResult.data.weeks.toLocaleString()} wk {diffResult.data.remainderDays}d
                  </dd>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <dt className="text-xs text-slate-500">Weekdays (Mon–Fri)</dt>
                  <dd className="mt-1 text-lg font-bold font-mono text-slate-900 tabular-nums">
                    {diffResult.data.weekdays.toLocaleString()} days
                  </dd>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <dt className="text-xs text-slate-500">Weekend Days (Sat–Sun)</dt>
                  <dd className="mt-1 text-lg font-bold font-mono text-slate-900 tabular-nums">
                    {diffResult.data.weekends.toLocaleString()} days
                  </dd>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <dt className="text-xs text-slate-500">Total Hours</dt>
                  <dd className="mt-1 text-lg font-bold font-mono text-slate-900 tabular-nums">
                    {diffResult.data.totalHours.toLocaleString()} hr
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
                Reference Date
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
                Operation
              </label>
              <select
                id="dd-op"
                value={operation}
                onChange={(e) => setOperation(e.target.value as 'add' | 'subtract')}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
              >
                <option value="add">Add (+)</option>
                <option value="subtract">Subtract (-)</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-2 lg:col-span-2">
              <div>
                <label htmlFor="dd-y" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Years
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
                  Months
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
                  Days
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
            <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-5">
              <div className="text-xs font-semibold text-indigo-700 mb-1">Resulting Calendar Date</div>
              <div className="text-2xl font-bold text-slate-900">{offsetResult.data.readable}</div>
              <div className="mt-1 text-sm font-mono text-slate-600">ISO 8601: {offsetResult.data.iso}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
