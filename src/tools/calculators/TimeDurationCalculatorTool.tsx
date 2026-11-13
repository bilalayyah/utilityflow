import { Plus, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';

type Mode = 'between' | 'sum';

interface DurationRow {
  id: number;
  label: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function parseTimeToSeconds(timeStr: string): number | null {
  const m = /^(\d{2}):(\d{2})(?::(\d{2}))?$/.exec(timeStr.trim());
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  const sec = m[3] ? Number(m[3]) : 0;
  if (h > 23 || min > 59 || sec > 59) return null;
  return h * 3600 + min * 60 + sec;
}

function formatHms(totalSeconds: number): string {
  const safe = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(safe / 3600);
  const m = Math.floor((safe % 3600) / 60);
  const s = safe % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function TimeDurationCalculatorTool() {
  const [mode, setMode] = useState<Mode>('between');
  const [startTime, setStartTime] = useState('09:00:00');
  const [endTime, setEndTime] = useState('17:30:00');
  const [breakMinutes, setBreakMinutes] = useState('30');
  const [rollOverMidnight, setRollOverMidnight] = useState(true);

  const [rows, setRows] = useState<DurationRow[]>([
    { id: 1, label: 'Morning session', hours: '3', minutes: '45', seconds: '0' },
    { id: 2, label: 'Afternoon session', hours: '4', minutes: '20', seconds: '30' },
  ]);

  const betweenResult = useMemo(() => {
    const startSec = parseTimeToSeconds(startTime);
    const endSec = parseTimeToSeconds(endTime);
    const breakMin = Number(breakMinutes) || 0;

    if (startSec === null || endSec === null) {
      return { error: 'Enter valid start and end times.', data: null };
    }
    if (!Number.isFinite(breakMin) || breakMin < 0 || breakMin > 1440) {
      return { error: 'Enter a break deduction between 0 and 1,440 minutes.', data: null };
    }

    let rawDiff = endSec - startSec;
    let overnightApplied = false;
    if (rawDiff < 0) {
      if (rollOverMidnight) {
        rawDiff += 86400;
        overnightApplied = true;
      } else {
        return {
          error: 'End time is earlier than start time. Enable overnight rollover if spanning midnight.',
          data: null,
        };
      }
    }

    const breakSec = breakMin * 60;
    if (breakSec > rawDiff) {
      return { error: 'Break deduction exceeds total elapsed time.', data: null };
    }

    const netSec = rawDiff - breakSec;
    return {
      error: '',
      data: {
        hms: formatHms(netSec),
        rawHms: formatHms(rawDiff),
        decimalHours: netSec / 3600,
        totalMinutes: netSec / 60,
        totalSeconds: netSec,
        overnightApplied,
      },
    };
  }, [startTime, endTime, breakMinutes, rollOverMidnight]);

  const sumResult = useMemo(() => {
    let totalSec = 0;
    for (const row of rows) {
      const h = Number(row.hours) || 0;
      const m = Number(row.minutes) || 0;
      const s = Number(row.seconds) || 0;
      if (h < 0 || m < 0 || s < 0 || !Number.isFinite(h) || !Number.isFinite(m) || !Number.isFinite(s)) {
        return { error: 'All duration fields must be non-negative numbers.', data: null };
      }
      totalSec += h * 3600 + m * 60 + s;
    }

    return {
      error: '',
      data: {
        hms: formatHms(totalSec),
        decimalHours: totalSec / 3600,
        totalMinutes: totalSec / 60,
        totalSeconds: totalSec,
        daysEquivalent: totalSec / 86400,
      },
    };
  }, [rows]);

  const addRow = () => {
    const nextId = rows.reduce((max, r) => Math.max(max, r.id), 0) + 1;
    setRows([...rows, { id: nextId, label: `Segment ${nextId}`, hours: '1', minutes: '0', seconds: '0' }]);
  };

  const removeRow = (id: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-lg bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setMode('between')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'between' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          Elapsed Time Between Clocks
        </button>
        <button
          type="button"
          onClick={() => setMode('sum')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'sum' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          Add Timesheet Durations
        </button>
      </div>

      {mode === 'between' ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="td-start" className="block text-sm font-semibold text-slate-900 mb-1.5">
                Start Time
              </label>
              <input
                id="td-start"
                type="time"
                step="1"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
              />
            </div>

            <div>
              <label htmlFor="td-end" className="block text-sm font-semibold text-slate-900 mb-1.5">
                End Time
              </label>
              <input
                id="td-end"
                type="time"
                step="1"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
              />
            </div>

            <div>
              <label htmlFor="td-break" className="block text-sm font-semibold text-slate-900 mb-1.5">
                Unpaid Break (min)
              </label>
              <input
                id="td-break"
                type="number"
                min={0}
                max={1440}
                value={breakMinutes}
                onChange={(e) => setBreakMinutes(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
              />
            </div>
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={rollOverMidnight}
              onChange={(e) => setRollOverMidnight(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600"
            />
            Treat end time earlier than start time as next day (overnight shift)
          </label>

          {betweenResult.error && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {betweenResult.error}
            </div>
          )}

          {betweenResult.data && (
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
                <dt className="text-xs font-medium text-indigo-700">
                  Net Duration {betweenResult.data.overnightApplied ? '(Overnight)' : ''}
                </dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  {betweenResult.data.hms}
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">Decimal Hours</dt>
                <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                  {betweenResult.data.decimalHours.toFixed(2)} hr
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">Total Minutes</dt>
                <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                  {Number(betweenResult.data.totalMinutes.toFixed(2)).toLocaleString()} min
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">Total Seconds</dt>
                <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                  {betweenResult.data.totalSeconds.toLocaleString()} sec
                </dd>
              </div>
            </dl>
          )}
        </>
      ) : (
        <>
          <div className="space-y-3">
            {rows.map((row) => (
              <div key={row.id} className="grid grid-cols-12 gap-2 items-end rounded-lg border border-slate-200 bg-slate-50/70 p-3">
                <div className="col-span-12 sm:col-span-4">
                  <label className="block text-xs font-medium text-slate-600 mb-1">Label</label>
                  <input
                    type="text"
                    value={row.label}
                    onChange={(e) =>
                      setRows(rows.map((r) => (r.id === row.id ? { ...r, label: e.target.value } : r)))
                    }
                    className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-2 text-sm"
                  />
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-600 mb-1">Hours</label>
                  <input
                    type="number"
                    min={0}
                    value={row.hours}
                    onChange={(e) =>
                      setRows(rows.map((r) => (r.id === row.id ? { ...r, hours: e.target.value } : r)))
                    }
                    className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-2 font-mono text-sm tabular-nums"
                  />
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-600 mb-1">Minutes</label>
                  <input
                    type="number"
                    min={0}
                    value={row.minutes}
                    onChange={(e) =>
                      setRows(rows.map((r) => (r.id === row.id ? { ...r, minutes: e.target.value } : r)))
                    }
                    className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-2 font-mono text-sm tabular-nums"
                  />
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-600 mb-1">Seconds</label>
                  <input
                    type="number"
                    min={0}
                    value={row.seconds}
                    onChange={(e) =>
                      setRows(rows.map((r) => (r.id === row.id ? { ...r, seconds: e.target.value } : r)))
                    }
                    className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-2 font-mono text-sm tabular-nums"
                  />
                </div>
                <div className="col-span-12 sm:col-span-2 flex justify-end">
                  <button
                    type="button"
                    disabled={rows.length <= 1}
                    onClick={() => removeRow(row.id)}
                    aria-label={`Remove ${row.label}`}
                    className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-2 text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addRow}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Duration Row
            </button>
          </div>

          {sumResult.error && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {sumResult.error}
            </div>
          )}

          {sumResult.data && (
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
                <dt className="text-xs font-medium text-indigo-700">Combined Time (HH:MM:SS)</dt>
                <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                  {sumResult.data.hms}
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">Decimal Hours</dt>
                <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                  {sumResult.data.decimalHours.toFixed(2)} hr
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">Total Minutes</dt>
                <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                  {Number(sumResult.data.totalMinutes.toFixed(2)).toLocaleString()} min
                </dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-medium text-slate-500">24-Hour Days</dt>
                <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                  {sumResult.data.daysEquivalent.toFixed(3)} d
                </dd>
              </div>
            </dl>
          )}
        </>
      )}
    </div>
  );
}
