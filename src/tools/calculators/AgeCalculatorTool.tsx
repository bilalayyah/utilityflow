import { useMemo, useState } from 'react';

function toIsoDateInput(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function parseLocalDate(iso: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  const year = Number(m[1]);
  const month = Number(m[2]) - 1;
  const day = Number(m[3]);
  const d = new Date(year, month, day);
  if (d.getFullYear() !== year || d.getMonth() !== month || d.getDate() !== day) return null;
  return d;
}

function daysInMonth(year: number, monthIndex: number): number {
  return new Date(year, monthIndex + 1, 0).getDate();
}

export default function AgeCalculatorTool() {
  const [birthDate, setBirthDate] = useState('1995-06-15');
  const [targetDate, setTargetDate] = useState(() => toIsoDateInput(new Date()));

  const result = useMemo(() => {
    const dob = parseLocalDate(birthDate);
    const target = parseLocalDate(targetDate);

    if (!dob || !target) {
      return { error: 'Please enter valid calendar dates.', data: null };
    }
    if (dob > target) {
      return { error: 'Date of birth cannot be after the target date.', data: null };
    }

    let years = target.getFullYear() - dob.getFullYear();
    let months = target.getMonth() - dob.getMonth();
    let days = target.getDate() - dob.getDate();

    if (days < 0) {
      const prevMonthIndex = (target.getMonth() - 1 + 12) % 12;
      const prevMonthYear =
        target.getMonth() === 0 ? target.getFullYear() - 1 : target.getFullYear();
      days += daysInMonth(prevMonthYear, prevMonthIndex);
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    const utcDob = Date.UTC(dob.getFullYear(), dob.getMonth(), dob.getDate());
    const utcTarget = Date.UTC(target.getFullYear(), target.getMonth(), target.getDate());
    const totalDays = Math.round((utcTarget - utcDob) / 86400000);
    const totalWeeks = Math.floor(totalDays / 7);
    const remainderDays = totalDays % 7;
    const totalMonths = years * 12 + months;
    const totalHours = totalDays * 24;

    // Next birthday relative to target date
    let nextBdayYear = target.getFullYear();
    const bMonth = dob.getMonth();
    const bDay = dob.getDate();

    const makeBdayUtc = (yr: number) => {
      const maxD = daysInMonth(yr, bMonth);
      return Date.UTC(yr, bMonth, Math.min(bDay, maxD));
    };

    let nextBdayUtc = makeBdayUtc(nextBdayYear);
    if (nextBdayUtc <= utcTarget) {
      nextBdayYear += 1;
      nextBdayUtc = makeBdayUtc(nextBdayYear);
    }
    const daysToNextBirthday = Math.round((nextBdayUtc - utcTarget) / 86400000);

    return {
      error: '',
      data: {
        years,
        months,
        days,
        totalMonths,
        totalWeeks,
        remainderDays,
        totalDays,
        totalHours,
        daysToNextBirthday,
        turningAge: years + 1,
      },
    };
  }, [birthDate, targetDate]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="age-dob" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Date of Birth
          </label>
          <input
            id="age-dob"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-mono text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <label htmlFor="age-target" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Age at Date
          </label>
          <input
            id="age-target"
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-mono text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>
      </div>

      {result.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {result.error}
        </div>
      )}

      {result.data && (
        <>
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-5">
            <div className="text-xs font-semibold text-indigo-700 mb-1">Exact Chronological Age</div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
              {result.data.years} years, {result.data.months} months, {result.data.days} days
            </div>
            <p className="mt-1.5 text-sm text-slate-600 tabular-nums">
              Next birthday (turning {result.data.turningAge}): in{' '}
              <strong className="text-slate-900">{result.data.daysToNextBirthday} days</strong>
            </p>
          </div>

          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">Total Months</dt>
              <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                {result.data.totalMonths.toLocaleString()} mo
              </dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">Total Weeks</dt>
              <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                {result.data.totalWeeks.toLocaleString()} wk {result.data.remainderDays}d
              </dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">Total Days</dt>
              <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                {result.data.totalDays.toLocaleString()} days
              </dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">Total Hours (approx.)</dt>
              <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                {result.data.totalHours.toLocaleString()} hr
              </dd>
            </div>
          </dl>
        </>
      )}
    </div>
  );
}
