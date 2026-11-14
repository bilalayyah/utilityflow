import { useMemo, useState } from 'react';
import { PASTEL_PALETTES, pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    errorInvalidDates: 'Please enter valid calendar dates.',
    errorDobAfterTarget: 'Date of birth cannot be after the target date.',
    dobLabel: 'Date of Birth',
    targetLabel: 'Age at Date',
    exactAge: 'Exact Chronological Age',
    yearsWord: 'years',
    monthsWord: 'months',
    daysWord: 'days',
    nextBirthday: 'Next birthday',
    turning: 'turning',
    inWord: 'in',
    totalMonths: 'Total Months',
    totalWeeks: 'Total Weeks',
    totalDays: 'Total Days',
    totalHours: 'Total Hours (approx.)',
    monthsAbbr: 'mo',
    weeksAbbr: 'wk',
    daysAbbr: 'd',
    hoursAbbr: 'hr',
  };

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
  const { locale, t } = useLocale();
  const s = useComponentStrings('age-calculator', STRINGS_EN);
  const palette = pastelForKey('age-calculator');
  const [birthDate, setBirthDate] = useState('1995-06-15');
  const [targetDate, setTargetDate] = useState(() => toIsoDateInput(new Date()));

  const result = useMemo(() => {
    const dob = parseLocalDate(birthDate);
    const target = parseLocalDate(targetDate);

    if (!dob || !target) {
      return { error: s.errorInvalidDates, data: null };
    }
    if (dob > target) {
      return { error: s.errorDobAfterTarget, data: null };
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
  }, [birthDate, targetDate, s]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="age-dob" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.dobLabel}
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
            {s.targetLabel}
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
          <div className={`rounded-xl border border-indigo-200 ${palette.card} p-5`}>
            <div className={`text-xs font-semibold ${palette.link} mb-1`}>{s.exactAge}</div>
            <div className={`text-2xl sm:text-3xl font-bold ${palette.link} tabular-nums`}>
              {result.data.years} {s.yearsWord}, {result.data.months} {s.monthsWord},{' '}
              {result.data.days} {s.daysWord}
            </div>
            <p className="mt-1.5 text-sm text-slate-600 tabular-nums">
              {s.nextBirthday} ({s.turning} {result.data.turningAge}): {s.inWord}{' '}
              <strong className="text-slate-900">
                {result.data.daysToNextBirthday} {s.daysWord}
              </strong>
            </p>
          </div>

          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[0].card} p-4`}>
              <dt className="text-xs text-slate-500">{s.totalMonths}</dt>
              <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[0].link} tabular-nums`}>
                {result.data.totalMonths.toLocaleString(locale)} {s.monthsAbbr}
              </dd>
            </div>
            <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[1].card} p-4`}>
              <dt className="text-xs text-slate-500">{s.totalWeeks}</dt>
              <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[1].link} tabular-nums`}>
                {result.data.totalWeeks.toLocaleString(locale)} {s.weeksAbbr}{' '}
                {result.data.remainderDays}
                {s.daysAbbr}
              </dd>
            </div>
            <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[2].card} p-4`}>
              <dt className="text-xs text-slate-500">{s.totalDays}</dt>
              <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[2].link} tabular-nums`}>
                {result.data.totalDays.toLocaleString(locale)} {s.daysWord}
              </dd>
            </div>
            <div className={`rounded-lg border border-slate-200 ${PASTEL_PALETTES[3].card} p-4`}>
              <dt className="text-xs text-slate-500">{s.totalHours}</dt>
              <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[3].link} tabular-nums`}>
                {result.data.totalHours.toLocaleString(locale)} {s.hoursAbbr}
              </dd>
            </div>
          </dl>
        </>
      )}
    </div>
  );
}
