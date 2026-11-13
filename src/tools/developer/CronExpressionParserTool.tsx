import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

const PRESETS = [
  { label: 'Every 5 minutes', expr: '*/5 * * * *' },
  { label: 'Every hour', expr: '0 * * * *' },
  { label: 'Daily at midnight', expr: '0 0 * * *' },
  { label: 'Weekdays at 9:00 AM', expr: '0 9 * * 1-5' },
  { label: '1st of month at 08:30', expr: '30 8 1 * *' },
];

const MONTH_NAMES: Record<string, number> = {
  JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6,
  JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12,
};

const DOW_NAMES: Record<string, number> = {
  SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6,
};

const DOW_LABELS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH_LABELS = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function parseFieldToken(
  token: string,
  min: number,
  max: number,
  nameMap?: Record<string, number>
): number[] {
  const replaceNames = (raw: string) => {
    const upper = raw.toUpperCase();
    if (nameMap && upper in nameMap) return String(nameMap[upper]);
    return upper;
  };

  const values = new Set<number>();
  const parts = token.split(',');

  for (const part of parts) {
    if (!part) throw new Error(`Empty segment in "${token}"`);
    const [rangePart, stepPart] = part.split('/');
    const step = stepPart !== undefined ? Number(stepPart) : 1;
    if (!Number.isInteger(step) || step < 1) {
      throw new Error(`Invalid step "${stepPart}" in "${token}"`);
    }

    let start = min;
    let end = max;

    if (rangePart === '*') {
      start = min;
      end = max;
    } else if (rangePart.includes('-')) {
      const [sRaw, eRaw] = rangePart.split('-');
      start = Number(replaceNames(sRaw));
      end = Number(replaceNames(eRaw));
    } else {
      const single = Number(replaceNames(rangePart));
      start = single;
      end = stepPart !== undefined ? max : single;
    }

    if (
      !Number.isInteger(start) ||
      !Number.isInteger(end) ||
      start < min ||
      end > max ||
      start > end
    ) {
      throw new Error(`Value out of range (${min}–${max}) in "${token}"`);
    }

    for (let v = start; v <= end; v += step) {
      values.add(v);
    }
  }

  return Array.from(values).sort((a, b) => a - b);
}

function describeField(
  raw: string,
  unit: string,
  formatter?: (n: number) => string
): string {
  if (raw === '*') return `every ${unit}`;
  if (raw.startsWith('*/')) return `every ${raw.slice(2)} ${unit}s`;
  if (formatter) {
    return raw
      .split(',')
      .map((chunk) => {
        if (/^\d+$/.test(chunk)) return formatter(Number(chunk));
        return chunk;
      })
      .join(', ');
  }
  return `${unit} ${raw}`;
}

export default function CronExpressionParserTool() {
  const [expression, setExpression] = useState('0 9 * * 1-5');

  const analysis = useMemo(() => {
    const trimmed = expression.trim().replace(/\s+/g, ' ');
    const fields = trimmed.split(' ');
    if (fields.length !== 5) {
      return {
        error: `Standard cron expects 5 fields (minute hour day-of-month month day-of-week). Found ${fields.length}.`,
        summary: '',
        breakdown: [] as Array<{ label: string; raw: string; meaning: string }>,
        nextRuns: [] as Date[],
      };
    }

    try {
      const [minF, hourF, domF, monF, dowF] = fields;
      const mins = parseFieldToken(minF, 0, 59);
      const hours = parseFieldToken(hourF, 0, 23);
      const doms = parseFieldToken(domF, 1, 31);
      const months = parseFieldToken(monF, 1, 12, MONTH_NAMES);
      const dows = parseFieldToken(dowF.replace(/\b7\b/g, '0'), 0, 6, DOW_NAMES);

      const minSet = new Set(mins);
      const hourSet = new Set(hours);
      const domSet = new Set(doms);
      const monthSet = new Set(months);
      const dowSet = new Set(dows);

      const domWildcard = domF === '*';
      const dowWildcard = dowF === '*';

      const nextRuns: Date[] = [];
      const cursor = new Date();
      cursor.setSeconds(0, 0);
      cursor.setMinutes(cursor.getMinutes() + 1);

      // Search up to 366 days (527,040 minutes) efficiently by skipping days
      let checkedDays = 0;
      while (nextRuns.length < 8 && checkedDays < 366) {
        const month = cursor.getMonth() + 1;
        const dom = cursor.getDate();
        const dow = cursor.getDay();

        const dayMatches =
          domWildcard && dowWildcard
            ? true
            : domWildcard
            ? dowSet.has(dow)
            : dowWildcard
            ? domSet.has(dom)
            : domSet.has(dom) || dowSet.has(dow);

        if (monthSet.has(month) && dayMatches) {
          for (const h of hours) {
            if (h < cursor.getHours()) continue;
            for (const m of mins) {
              if (h === cursor.getHours() && m < cursor.getMinutes()) continue;
              const candidate = new Date(
                cursor.getFullYear(),
                cursor.getMonth(),
                cursor.getDate(),
                h,
                m,
                0,
                0
              );
              nextRuns.push(candidate);
              if (nextRuns.length >= 8) break;
            }
            if (nextRuns.length >= 8) break;
          }
        }

        cursor.setDate(cursor.getDate() + 1);
        cursor.setHours(0, 0, 0, 0);
        checkedDays += 1;
      }

      const timeSummary =
        minF.startsWith('*/') && hourF === '*'
          ? `Every ${minF.slice(2)} minutes`
          : minF === '0' && hourF === '*'
          ? 'At minute 0 of every hour'
          : minF !== '*' && hourF !== '*' && !minF.includes('/') && !hourF.includes('/')
          ? `At ${String(hours[0]).padStart(2, '0')}:${String(mins[0]).padStart(2, '0')}`
          : `At ${describeField(minF, 'minute')}, ${describeField(hourF, 'hour')}`;

      const daySummary =
        domF === '*' && dowF === '*'
          ? 'every day'
          : dowF === '1-5' && domF === '*'
          ? 'on weekdays (Monday–Friday)'
          : domF !== '*' && dowF === '*'
          ? `on day ${domF} of the month`
          : domF === '*' && dowF !== '*'
          ? `on ${describeField(dowF, 'weekday', (n) => DOW_LABELS[n] ?? String(n))}`
          : `on day ${domF} or ${describeField(dowF, 'weekday', (n) => DOW_LABELS[n] ?? String(n))}`;

      const monthSummary =
        monF === '*' ? '' : ` in ${describeField(monF, 'month', (n) => MONTH_LABELS[n] ?? String(n))}`;

      return {
        error: '',
        summary: `${timeSummary}, ${daySummary}${monthSummary}.`,
        breakdown: [
          { label: 'Minute (0–59)', raw: minF, meaning: describeField(minF, 'minute') },
          { label: 'Hour (0–23)', raw: hourF, meaning: describeField(hourF, 'hour') },
          { label: 'Day of Month (1–31)', raw: domF, meaning: describeField(domF, 'day') },
          {
            label: 'Month (1–12)',
            raw: monF,
            meaning: describeField(monF, 'month', (n) => MONTH_LABELS[n] ?? String(n)),
          },
          {
            label: 'Day of Week (0–6)',
            raw: dowF,
            meaning: describeField(dowF, 'weekday', (n) => DOW_LABELS[n] ?? String(n)),
          },
        ],
        nextRuns,
        // keep unused sets referenced cleanly
        _validCount: minSet.size + hourSet.size,
      };
    } catch (err) {
      return {
        error: err instanceof Error ? err.message : 'Invalid cron expression.',
        summary: '',
        breakdown: [],
        nextRuns: [],
      };
    }
  }, [expression]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex-1 min-w-[260px]">
          <label htmlFor="cron-expr" className="block text-sm font-semibold text-slate-900 mb-1.5">
            5-Field Cron Expression
          </label>
          <input
            id="cron-expr"
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="* * * * *"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-mono text-base text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>
        <CopyButton text={expression.trim()} label="Copy cron" />
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.expr}
            type="button"
            onClick={() => setExpression(preset.expr)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              expression.trim() === preset.expr
                ? 'bg-indigo-600 text-white'
                : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {analysis.error ? (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {analysis.error}
        </div>
      ) : (
        <>
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
            <div className="text-xs font-semibold text-indigo-700 mb-1">Human-Readable Schedule</div>
            <p className="text-base sm:text-lg font-semibold text-slate-900">{analysis.summary}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Field Breakdown</h3>
              <dl className="divide-y divide-slate-100 text-xs sm:text-sm">
                {analysis.breakdown.map((item) => (
                  <div key={item.label} className="py-2 flex items-center justify-between gap-3">
                    <dt className="text-slate-600">{item.label}</dt>
                    <dd className="text-right">
                      <span className="font-mono font-semibold text-slate-900 mr-2">{item.raw}</span>
                      <span className="text-slate-500">({item.meaning})</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Next {analysis.nextRuns.length} Scheduled Runs (Local Time)
              </h3>
              {analysis.nextRuns.length > 0 ? (
                <ol className="space-y-1.5 font-mono text-xs sm:text-sm text-slate-800 tabular-nums">
                  {analysis.nextRuns.map((dt, idx) => (
                    <li key={dt.toISOString()} className="flex items-center justify-between">
                      <span className="text-slate-400">#{idx + 1}</span>
                      <span>{dt.toLocaleString()}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-sm text-slate-500">
                  No matching run found within the next 366 days.
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
