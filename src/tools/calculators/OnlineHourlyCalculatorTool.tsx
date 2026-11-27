import { Plus, Printer, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { PASTEL_PALETTES, pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';
import {
  CURRENCIES,
  buildTime12,
  calculatePay,
  clockTimeAfter,
  decimalHoursToMinutes,
  formatClockTime,
  formatDecimalHours,
  formatDuration,
  formatDurationHm,
  formatMoney,
  fromDecimalHours,
  minutesBetween,
  minutesBetweenDates,
  minutesToDecimalHours,
  netWorkMinutes,
  parseTime24,
  splitTime12,
  toDecimalHours,
  totalSignedDurations,
} from './hourlyCalculations';
import type { CurrencyCode, TimeFormat } from './hourlyCalculations';

const STRINGS_EN = {
  modeBetween: 'Hours Between Times',
  modeWork: 'Work Hours',
  modeAddSubtract: 'Add / Subtract Time',
  modeDecimal: 'Decimal Hours',
  modePay: 'Hourly Pay',
  formatLabel: 'Time format',
  format12: '12-hour (AM / PM)',
  format24: '24-hour',
  precisionLabel: 'Decimal precision',
  precisionHint: 'Decimal places for decimal-hour results.',
  printLabel: 'Print result',
  calculateLabel: 'Calculate',
  clearLabel: 'Clear',
  clearHistory: 'Clear history',
  copy: 'Copy',
  copyResult: 'Copy Result',
  historyTitle: 'Recent calculations',
  historyEmpty: 'Your recent calculations will appear here.',
  examplesLabel: 'Try an example:',

  startLabel: 'Start time',
  endLabel: 'End time',
  startDateLabel: 'Start date (optional)',
  endDateLabel: 'End date (optional)',
  datesHint:
    'Leave both dates blank to use times only. When dates are entered, the end date and time must come after the start — the end is never silently treated as the next day.',
  datesMissingError: 'Enter both a start date and an end date — or leave both blank to use times only.',
  overnightLabel: 'Treat an end time earlier than the start time as the next day (overnight)',
  overnightTag: '(Overnight)',
  totalHours: 'Total hours',
  totalMinutes: 'Total minutes',
  hmFormat: 'Hours : minutes',
  decimalHours: 'Decimal hours',
  hoursAbbr: 'hr',
  minutesAbbr: 'min',
  betweenHint: 'Enter a start and end time to see the total hours, minutes and decimal hours between them.',
  betweenExample1: '9:00 AM – 5:00 PM',
  betweenExample2: '10:30 PM – 6:30 AM',
  betweenExample3: '8:15 AM – 4:45 PM',

  breakHeading: 'Breaks',
  breakStartLabel: 'Break start',
  breakEndLabel: 'Break end',
  addBreakButton: 'Add break',
  removeBreak: 'Remove break',
  additionalBreakLabel: 'Additional unpaid break (minutes)',
  additionalBreakHint:
    'Only add minutes here for break time that is NOT already entered as a timed break above — otherwise the same break is deducted twice.',
  totalShift: 'Total shift',
  totalBreak: 'Total break',
  netWork: 'Net work time',
  workHint: 'Enter your shift and any breaks. Breaks must fall inside the shift and must not overlap each other.',
  workExample1: '9:00 AM – 5:30 PM, 30-min lunch',
  workExample2: 'Night shift 10:00 PM – 6:00 AM',

  durationsHeading: 'Add or subtract durations',
  durationHoursHeader: 'Hours',
  durationMinutesHeader: 'Minutes',
  addDurationRow: 'Add time value',
  removeDuration: 'Remove',
  totalDuration: 'Total duration',
  negativeNote: 'A negative total means the subtracted time is longer than the added time.',
  clockHeading: 'Add or subtract from a clock time',
  clockStartLabel: 'Starting time',
  durationLabel: 'Duration',
  operationLabel: 'Operation',
  operationAdd: 'Add duration',
  operationSubtract: 'Subtract duration',
  resultingTime: 'Resulting time',
  nextDay: 'next day',
  previousDay: 'previous day',
  sameDay: 'same day',
  addSubtractHint: 'Add or subtract several time values, or move a clock time forward or back by a duration.',

  decimalHmHeading: 'Hours & minutes to decimal',
  decimalToHmHeading: 'Decimal to hours & minutes',
  minutesToDecimalHeading: 'Total minutes to decimal',
  hoursLabel: 'Hours',
  minutesLabel: 'Minutes',
  decimalLabel: 'Decimal hours',
  totalMinutesLabel: 'Total minutes',
  decimalHint: 'Convert hours and minutes to decimal hours — or a decimal number back to hours and minutes.',
  decimalExample1: '1h 30m',
  decimalExample2: '2h 15m',
  decimalExample3: '3h 45m',

  rateLabel: 'Hourly rate',
  currencyLabel: 'Currency',
  currencyHint: 'Display only — no conversion or live exchange rates.',
  hoursWorkedLabel: 'Hours worked',
  minutesWorkedLabel: 'Minutes worked',
  unpaidBreakLabel: 'Unpaid break (minutes)',
  overtimeHoursLabel: 'Overtime hours',
  overtimeMinutesLabel: 'Overtime minutes',
  multiplierLabel: 'Overtime multiplier',
  multiplierHint: 'Your overtime rate as a multiple of the normal rate — for example 1.5 means time and a half. No tax or statutory overtime rules are applied.',
  regularHours: 'Regular hours',
  overtimeHoursResult: 'Overtime hours',
  totalHoursWorked: 'Total hours',
  regularPay: 'Regular pay',
  overtimePay: 'Overtime pay',
  totalPay: 'Total pay',
  averagePerHour: 'Average earnings / hour',
  payHint: 'Enter your rate and hours worked. Overtime hours are extra hours on top of the regular hours, paid at the multiplier you choose.',
  payExample1: '$20 × 8h',
  payExample2: '$20 × 8h + 2h overtime',
  payExample3: '$25 × 7h 30m',
};

type Mode = 'between' | 'work' | 'add-subtract' | 'decimal' | 'pay';

interface BreakRow {
  id: number;
  start: number;
  end: number;
}

interface DurationRow {
  id: number;
  hours: string;
  minutes: string;
  sign: 'add' | 'subtract';
}

interface Snapshot {
  startMin: number;
  endMin: number;
  startDate: string;
  endDate: string;
  overnight: boolean;
  workStart: number;
  workEnd: number;
  workOvernight: boolean;
  breaks: { start: number; end: number }[];
  additionalBreak: string;
  durRows: { hours: string; minutes: string; sign: 'add' | 'subtract' }[];
  clockStart: number;
  clockHours: string;
  clockMinutes: string;
  clockOp: 'add' | 'subtract';
  decHours: string;
  decMinutes: string;
  decValue: string;
  decTotalMinutes: string;
  rate: string;
  currency: CurrencyCode;
  payHours: string;
  payMinutes: string;
  payBreak: string;
  otHours: string;
  otMinutes: string;
  otMultiplier: string;
}

interface HistoryItem {
  id: number;
  mode: Mode;
  input: string;
  output: string;
  snapshot: Snapshot;
}

const HISTORY_LIMIT = 8;
const PRECISION_OPTIONS = [0, 1, 2, 3, 4];

const INPUT_CLASS =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const BUTTON_CLASS =
  'inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const EXAMPLE_BUTTON_CLASS =
  'rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-sm text-slate-700 hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';
const HISTORY_BUTTON_CLASS =
  'w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-start hover:bg-slate-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66]';

function parseNonNegative(value: string): number | null {
  const raw = value.trim();
  if (raw === '') return null;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}

/**
 * A clock-time field that follows the global 12h/24h format.
 * 24h uses the native <input type="time">; 12h uses hour/minute number
 * inputs plus an AM/PM select. The value is always minutes since midnight.
 */
function ClockInput({
  id,
  label,
  value,
  onChange,
  format,
  onCommit,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (next: number) => void;
  format: TimeFormat;
  onCommit: () => void;
}) {
  const parts = splitTime12(value);
  const [hourStr, setHourStr] = useState(String(parts.hour));
  const [minStr, setMinStr] = useState(String(parts.minutes).padStart(2, '0'));
  const [period, setPeriod] = useState<'AM' | 'PM'>(parts.period);

  // Keep the 12h fields in sync when the value changes from outside
  // (example buttons, history reuse, format toggle).
  useEffect(() => {
    const p = splitTime12(value);
    setHourStr(String(p.hour));
    setMinStr(String(p.minutes).padStart(2, '0'));
    setPeriod(p.period);
  }, [value]);

  const apply12 = (hourText: string, minText: string, nextPeriod: 'AM' | 'PM') => {
    const h = Number(hourText);
    const m = Number(minText);
    if (hourText.trim() === '' || minText.trim() === '') return;
    if (!Number.isInteger(h) || !Number.isInteger(m)) return;
    try {
      onChange(buildTime12(h, m, nextPeriod));
    } catch {
      // Out-of-range while typing — keep the text, do not commit.
    }
  };

  const resync12 = () => {
    const p = splitTime12(value);
    setHourStr(String(p.hour));
    setMinStr(String(p.minutes).padStart(2, '0'));
    setPeriod(p.period);
  };

  if (format === '24h') {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-semibold text-slate-900 mb-1.5">
          {label}
        </label>
        <input
          id={id}
          type="time"
          value={formatClockTime(value, '24h')}
          onChange={(e) => {
            if (e.target.value === '') return;
            try {
              onChange(parseTime24(e.target.value));
            } catch {
              // Invalid while typing — keep the previous value.
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onCommit();
            }
          }}
          onBlur={onCommit}
          className={`${INPUT_CLASS} font-mono tabular-nums`}
        />
      </div>
    );
  }

  return (
    <div>
      <span id={`${id}-label`} className="block text-sm font-semibold text-slate-900 mb-1.5">
        {label}
      </span>
      <div className="flex gap-2" role="group" aria-labelledby={`${id}-label`}>
        <input
          id={`${id}-hour`}
          type="number"
          inputMode="numeric"
          min={1}
          max={12}
          aria-label={`${label} hour`}
          value={hourStr}
          onChange={(e) => {
            setHourStr(e.target.value);
            apply12(e.target.value, minStr, period);
          }}
          onBlur={() => {
            resync12();
            onCommit();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onCommit();
            }
          }}
          className={`${INPUT_CLASS} font-mono tabular-nums`}
        />
        <span className="self-center font-mono text-slate-500" aria-hidden="true">
          :
        </span>
        <input
          id={`${id}-minute`}
          type="number"
          inputMode="numeric"
          min={0}
          max={59}
          aria-label={`${label} minutes`}
          value={minStr}
          onChange={(e) => {
            setMinStr(e.target.value);
            apply12(hourStr, e.target.value, period);
          }}
          onBlur={() => {
            resync12();
            onCommit();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onCommit();
            }
          }}
          className={`${INPUT_CLASS} font-mono tabular-nums`}
        />
        <select
          id={`${id}-period`}
          aria-label={`${label} AM or PM`}
          value={period}
          onChange={(e) => {
            const next = e.target.value as 'AM' | 'PM';
            setPeriod(next);
            apply12(hourStr, minStr, next);
          }}
          onBlur={onCommit}
          className={`${INPUT_CLASS} font-mono tabular-nums`}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
}

export default function OnlineHourlyCalculatorTool() {
  const { t } = useLocale();
  const s = useComponentStrings('online-hourly-calculator', STRINGS_EN);
  const palette = pastelForKey('online-hourly-calculator');

  const [mode, setMode] = useState<Mode>('between');
  const [format, setFormat] = useState<TimeFormat>('12h');
  const [precision, setPrecision] = useState(2);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const historyIdRef = useRef(0);

  // --- Mode 1: Hours Between Two Times ---
  const [startMin, setStartMin] = useState(540); // 09:00
  const [endMin, setEndMin] = useState(1020); // 17:00
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [overnight, setOvernight] = useState(true);

  // --- Mode 2: Work Hours ---
  const [workStart, setWorkStart] = useState(540);
  const [workEnd, setWorkEnd] = useState(1050); // 17:30
  const [workOvernight, setWorkOvernight] = useState(true);
  const [breaks, setBreaks] = useState<BreakRow[]>([{ id: 1, start: 720, end: 750 }]); // 12:00–12:30
  const breakIdRef = useRef(1);
  const [additionalBreak, setAdditionalBreak] = useState('0');

  // --- Mode 3: Add / Subtract Time ---
  const [durRows, setDurRows] = useState<DurationRow[]>([
    { id: 1, hours: '2', minutes: '30', sign: 'add' },
    { id: 2, hours: '1', minutes: '45', sign: 'add' },
  ]);
  const durIdRef = useRef(2);
  const [clockStart, setClockStart] = useState(1410); // 11:30 PM
  const [clockHours, setClockHours] = useState('2');
  const [clockMinutes, setClockMinutes] = useState('0');
  const [clockOp, setClockOp] = useState<'add' | 'subtract'>('add');

  // --- Mode 4: Decimal Hours ---
  const [decHours, setDecHours] = useState('1');
  const [decMinutes, setDecMinutes] = useState('30');
  const [decValue, setDecValue] = useState('1.5');
  const [decTotalMinutes, setDecTotalMinutes] = useState('90');

  // --- Mode 5: Hourly Pay ---
  const [rate, setRate] = useState('20');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [payHours, setPayHours] = useState('8');
  const [payMinutes, setPayMinutes] = useState('0');
  const [payBreak, setPayBreak] = useState('0');
  const [otHours, setOtHours] = useState('0');
  const [otMinutes, setOtMinutes] = useState('0');
  const [otMultiplier, setOtMultiplier] = useState('1.5');

  const MODES: { id: Mode; label: string }[] = [
    { id: 'between', label: s.modeBetween },
    { id: 'work', label: s.modeWork },
    { id: 'add-subtract', label: s.modeAddSubtract },
    { id: 'decimal', label: s.modeDecimal },
    { id: 'pay', label: s.modePay },
  ];

  const datesSupplied = startDate !== '' || endDate !== '';

  const betweenResult = useMemo(() => {
    if (datesSupplied) {
      if (startDate === '' || endDate === '') {
        return { error: s.datesMissingError, data: null };
      }
      try {
        const minutes = minutesBetweenDates(startDate, startMin, endDate, endMin);
        return { error: '', data: { minutes, overnightApplied: false } };
      } catch (err) {
        return { error: err instanceof Error ? err.message : s.datesMissingError, data: null };
      }
    }
    try {
      const { minutes, overnightApplied } = minutesBetween(startMin, endMin, overnight);
      return { error: '', data: { minutes, overnightApplied } };
    } catch (err) {
      return { error: err instanceof Error ? err.message : '', data: null };
    }
  }, [startMin, endMin, startDate, endDate, overnight, datesSupplied, s]);

  const workResult = useMemo(() => {
    try {
      const { minutes: shiftMinutes, overnightApplied } = minutesBetween(workStart, workEnd, workOvernight);
      // Normalise break clock times into minutes inside the shift window
      // (shift start = 0). A break outside the window fails validation
      // in netWorkMinutes with a clear message.
      const relative = breaks.map((b) => ({
        start: (b.start - workStart + 1440) % 1440,
        end: (b.end - workStart + 1440) % 1440,
      }));
      const addMin = parseNonNegative(additionalBreak);
      if (addMin === null) {
        return { error: 'Enter an additional unpaid break of 0 minutes or more.', data: null };
      }
      const { totalShift, totalBreak, net } = netWorkMinutes(shiftMinutes, relative, addMin);
      return { error: '', data: { totalShift, totalBreak, net, overnightApplied } };
    } catch (err) {
      return { error: err instanceof Error ? err.message : '', data: null };
    }
  }, [workStart, workEnd, workOvernight, breaks, additionalBreak]);

  const addSubtractResult = useMemo(() => {
    try {
      const rows = durRows.map((r) => {
        const h = parseNonNegative(r.hours);
        const m = parseNonNegative(r.minutes);
        if (h === null || m === null) throw new Error('Enter non-negative hours and minutes for every time value.');
        return { hours: h, minutes: m, sign: r.sign };
      });
      const total = totalSignedDurations(rows);
      return { error: '', data: { total } };
    } catch (err) {
      return { error: err instanceof Error ? err.message : '', data: null };
    }
  }, [durRows]);

  const clockResult = useMemo(() => {
    const h = parseNonNegative(clockHours);
    const m = parseNonNegative(clockMinutes);
    if (h === null || m === null) {
      return { error: 'Enter a non-negative duration.', data: null };
    }
    const { time, daysOffset } = clockTimeAfter(clockStart, h * 60 + m, clockOp);
    return { error: '', data: { time, daysOffset } };
  }, [clockStart, clockHours, clockMinutes, clockOp]);

  const decimalHmResult = useMemo(() => {
    const h = parseNonNegative(decHours);
    const m = parseNonNegative(decMinutes);
    if (h === null || m === null) return { error: '', data: null };
    try {
      const decimal = toDecimalHours(h, m, precision);
      const totalMinutes = h * 60 + m;
      return { error: '', data: { decimal, totalMinutes } };
    } catch (err) {
      return { error: err instanceof Error ? err.message : '', data: null };
    }
  }, [decHours, decMinutes, precision]);

  const decimalToHmResult = useMemo(() => {
    const raw = decValue.trim();
    if (raw === '') return { error: '', data: null };
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 0) {
      return { error: 'Enter a decimal number of 0 or more, for example 1.5.', data: null };
    }
    const { hours, minutes } = fromDecimalHours(n);
    return { error: '', data: { hours, minutes, totalMinutes: decimalHoursToMinutes(n) } };
  }, [decValue]);

  const minutesToDecimalResult = useMemo(() => {
    const m = parseNonNegative(decTotalMinutes);
    if (m === null) return { error: '', data: null };
    return { error: '', data: { decimal: minutesToDecimalHours(m, precision) } };
  }, [decTotalMinutes, precision]);

  const payResult = useMemo(() => {
    const rawRate = rate.trim();
    if (rawRate === '') return { error: '', data: null };
    const r = Number(rawRate);
    const h = parseNonNegative(payHours);
    const m = parseNonNegative(payMinutes);
    const br = parseNonNegative(payBreak);
    const oh = parseNonNegative(otHours);
    const om = parseNonNegative(otMinutes);
    const multRaw = otMultiplier.trim();
    const mult = multRaw === '' ? NaN : Number(multRaw);
    if (!Number.isFinite(r) || h === null || m === null || br === null || oh === null || om === null || !Number.isFinite(mult)) {
      return { error: 'Enter valid numbers for the rate, hours, break and overtime fields.', data: null };
    }
    try {
      const data = calculatePay({
        rate: r,
        hours: h,
        minutes: m,
        breakMinutes: br,
        overtimeHours: oh,
        overtimeMinutes: om,
        overtimeMultiplier: mult,
      });
      return { error: '', data };
    } catch (err) {
      return { error: err instanceof Error ? err.message : '', data: null };
    }
  }, [rate, payHours, payMinutes, payBreak, otHours, otMinutes, otMultiplier]);

  const snapshot = (): Snapshot => ({
    startMin,
    endMin,
    startDate,
    endDate,
    overnight,
    workStart,
    workEnd,
    workOvernight,
    breaks: breaks.map((b) => ({ start: b.start, end: b.end })),
    additionalBreak,
    durRows: durRows.map((r) => ({ hours: r.hours, minutes: r.minutes, sign: r.sign })),
    clockStart,
    clockHours,
    clockMinutes,
    clockOp,
    decHours,
    decMinutes,
    decValue,
    decTotalMinutes,
    rate,
    currency,
    payHours,
    payMinutes,
    payBreak,
    otHours,
    otMinutes,
    otMultiplier,
  });

  const addToHistory = (entry: Omit<HistoryItem, 'id'>) => {
    setHistory((prev) => {
      const top = prev[0];
      if (top && top.mode === entry.mode && top.input === entry.input && top.output === entry.output) {
        return prev;
      }
      historyIdRef.current += 1;
      return [{ ...entry, id: historyIdRef.current }, ...prev].slice(0, HISTORY_LIMIT);
    });
  };

  const commitBetween = () => {
    if (betweenResult.data) {
      const label = datesSupplied
        ? `${startDate || '?'} ${formatClockTime(startMin, format)} → ${endDate || '?'} ${formatClockTime(endMin, format)}`
        : `${formatClockTime(startMin, format)} → ${formatClockTime(endMin, format)}`;
      addToHistory({
        mode: 'between',
        input: label,
        output: `${formatDuration(betweenResult.data.minutes)} (${formatDecimalHours(minutesToDecimalHours(betweenResult.data.minutes, precision), precision)} hr)`,
        snapshot: snapshot(),
      });
    }
  };

  const commitWork = () => {
    if (workResult.data) {
      addToHistory({
        mode: 'work',
        input: `${formatClockTime(workStart, format)} → ${formatClockTime(workEnd, format)}`,
        output: `Net ${formatDuration(workResult.data.net)}`,
        snapshot: snapshot(),
      });
    }
  };

  const commitAddSubtract = () => {
    if (addSubtractResult.data) {
      addToHistory({
        mode: 'add-subtract',
        input: durRows.map((r) => `${r.sign === 'add' ? '+' : '−'} ${r.hours || '0'}h ${r.minutes || '0'}m`).join(' '),
        output: formatDuration(addSubtractResult.data.total),
        snapshot: snapshot(),
      });
    }
  };

  const commitDecimal = () => {
    if (decimalHmResult.data) {
      addToHistory({
        mode: 'decimal',
        input: `${decHours || '0'}h ${decMinutes || '0'}m`,
        output: `${formatDecimalHours(decimalHmResult.data.decimal, precision)} hr`,
        snapshot: snapshot(),
      });
    }
  };

  const commitPay = () => {
    if (payResult.data) {
      addToHistory({
        mode: 'pay',
        input: `${formatMoney(Number(rate) || 0, currency)} × ${formatDecimalHours(payResult.data.totalHours, precision)} hr`,
        output: formatMoney(payResult.data.totalPay, currency),
        snapshot: snapshot(),
      });
    }
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement | HTMLSelectElement>, commit: () => void) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commit();
    }
  };

  const reuseHistory = (item: HistoryItem) => {
    const snap = item.snapshot;
    setMode(item.mode);
    setStartMin(snap.startMin);
    setEndMin(snap.endMin);
    setStartDate(snap.startDate);
    setEndDate(snap.endDate);
    setOvernight(snap.overnight);
    setWorkStart(snap.workStart);
    setWorkEnd(snap.workEnd);
    setWorkOvernight(snap.workOvernight);
    setBreaks(snap.breaks.map((b, i) => ({ id: i + 1, start: b.start, end: b.end })));
    breakIdRef.current = snap.breaks.length;
    setAdditionalBreak(snap.additionalBreak);
    setDurRows(snap.durRows.map((r, i) => ({ id: i + 1, hours: r.hours, minutes: r.minutes, sign: r.sign })));
    durIdRef.current = snap.durRows.length;
    setClockStart(snap.clockStart);
    setClockHours(snap.clockHours);
    setClockMinutes(snap.clockMinutes);
    setClockOp(snap.clockOp);
    setDecHours(snap.decHours);
    setDecMinutes(snap.decMinutes);
    setDecValue(snap.decValue);
    setDecTotalMinutes(snap.decTotalMinutes);
    setRate(snap.rate);
    setCurrency(snap.currency);
    setPayHours(snap.payHours);
    setPayMinutes(snap.payMinutes);
    setPayBreak(snap.payBreak);
    setOtHours(snap.otHours);
    setOtMinutes(snap.otMinutes);
    setOtMultiplier(snap.otMultiplier);
  };

  const historyModeLabel = (item: HistoryItem): string => {
    if (item.mode === 'between') return s.modeBetween;
    if (item.mode === 'work') return s.modeWork;
    if (item.mode === 'add-subtract') return s.modeAddSubtract;
    if (item.mode === 'decimal') return s.modeDecimal;
    return s.modePay;
  };

  const addBreak = () => {
    breakIdRef.current += 1;
    const id = breakIdRef.current;
    const last = breaks[breaks.length - 1];
    const start = last ? (last.end + 60) % 1440 : 720;
    const end = (start + 30) % 1440;
    setBreaks([...breaks, { id, start, end }]);
  };

  const removeBreak = (id: number) => {
    if (breaks.length <= 1) return;
    setBreaks(breaks.filter((b) => b.id !== id));
  };

  const addDurRow = () => {
    durIdRef.current += 1;
    setDurRows([...durRows, { id: durIdRef.current, hours: '1', minutes: '0', sign: 'add' }]);
  };

  const removeDurRow = (id: number) => {
    if (durRows.length <= 1) return;
    setDurRows(durRows.filter((r) => r.id !== id));
  };

  const clearMode = (m: Mode) => {
    if (m === 'between') {
      setStartMin(540);
      setEndMin(1020);
      setStartDate('');
      setEndDate('');
      setOvernight(true);
    } else if (m === 'work') {
      setWorkStart(540);
      setWorkEnd(1050);
      setWorkOvernight(true);
      setBreaks([{ id: 1, start: 720, end: 750 }]);
      breakIdRef.current = 1;
      setAdditionalBreak('0');
    } else if (m === 'add-subtract') {
      setDurRows([
        { id: 1, hours: '2', minutes: '30', sign: 'add' },
        { id: 2, hours: '1', minutes: '45', sign: 'add' },
      ]);
      durIdRef.current = 2;
      setClockStart(1410);
      setClockHours('2');
      setClockMinutes('0');
      setClockOp('add');
    } else if (m === 'decimal') {
      setDecHours('1');
      setDecMinutes('30');
      setDecValue('1.5');
      setDecTotalMinutes('90');
    } else {
      setRate('20');
      setCurrency('USD');
      setPayHours('8');
      setPayMinutes('0');
      setPayBreak('0');
      setOtHours('0');
      setOtMinutes('0');
      setOtMultiplier('1.5');
    }
  };

  const dayOffsetLabel = (daysOffset: number): string => {
    if (daysOffset > 0) return ` (${s.nextDay})`;
    if (daysOffset < 0) return ` (${s.previousDay})`;
    return ` (${s.sameDay})`;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label htmlFor="oh-format" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.formatLabel}
          </label>
          <select
            id="oh-format"
            value={format}
            onChange={(e) => setFormat(e.target.value as TimeFormat)}
            className={`${INPUT_CLASS} font-mono tabular-nums`}
          >
            <option value="12h">{s.format12}</option>
            <option value="24h">{s.format24}</option>
          </select>
        </div>
        <div>
          <label htmlFor="oh-precision" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.precisionLabel}
          </label>
          <select
            id="oh-precision"
            value={precision}
            onChange={(e) => setPrecision(Number(e.target.value))}
            className={`${INPUT_CLASS} font-mono tabular-nums`}
          >
            {PRECISION_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p} {p === 1 ? 'decimal' : 'decimals'}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={() => window.print()} className={BUTTON_CLASS}>
          <Printer className="w-4 h-4" />
          <span className="ml-2">{s.printLabel}</span>
        </button>
      </div>
      <p className="text-xs text-slate-500 -mt-3">{s.precisionHint}</p>

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

      {mode === 'between' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ClockInput
              id="oh-start"
              label={s.startLabel}
              value={startMin}
              onChange={setStartMin}
              format={format}
              onCommit={commitBetween}
            />
            <ClockInput
              id="oh-end"
              label={s.endLabel}
              value={endMin}
              onChange={setEndMin}
              format={format}
              onCommit={commitBetween}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="oh-start-date" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.startDateLabel}
              </label>
              <input
                id="oh-start-date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                onBlur={commitBetween}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              />
            </div>
            <div>
              <label htmlFor="oh-end-date" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.endDateLabel}
              </label>
              <input
                id="oh-end-date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                onBlur={commitBetween}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              />
            </div>
          </div>
          <p className="text-xs text-slate-500">{s.datesHint}</p>

          {!datesSupplied && (
            <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={overnight}
                onChange={(e) => setOvernight(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-[#0E8A66]"
              />
              {s.overnightLabel}
            </label>
          )}

          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={commitBetween} className={BUTTON_CLASS}>
              {s.calculateLabel}
            </button>
            <button type="button" onClick={() => clearMode('between')} className={BUTTON_CLASS}>
              {s.clearLabel}
            </button>
          </div>

          {betweenResult.error && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {betweenResult.error}
            </div>
          )}
          {betweenResult.data && (
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className={`rounded-xl border border-slate-200 ${palette.card} p-4`}>
                <dt className={`text-xs font-medium ${palette.link}`}>
                  {s.totalHours} {betweenResult.data.overnightApplied ? s.overnightTag : ''}
                </dt>
                <dd className={`mt-1 text-2xl font-bold font-mono ${palette.link} tabular-nums`}>
                  {formatDuration(betweenResult.data.minutes)}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatDuration(betweenResult.data.minutes)}
                    label={s.copyResult}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[1].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.decimalHours}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[1].link} tabular-nums`}>
                  {formatDecimalHours(minutesToDecimalHours(betweenResult.data.minutes, precision), precision)}{' '}
                  {s.hoursAbbr}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatDecimalHours(minutesToDecimalHours(betweenResult.data.minutes, precision), precision)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[2].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.totalMinutes}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[2].link} tabular-nums`}>
                  {betweenResult.data.minutes} {s.minutesAbbr}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={String(betweenResult.data.minutes)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[3].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.hmFormat}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[3].link} tabular-nums`}>
                  {formatDurationHm(betweenResult.data.minutes)}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatDurationHm(betweenResult.data.minutes)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
            </dl>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-600">{s.examplesLabel}</span>
            <button
              type="button"
              onClick={() => {
                setStartMin(540);
                setEndMin(1020);
                setStartDate('');
                setEndDate('');
              }}
              className={EXAMPLE_BUTTON_CLASS}
            >
              {s.betweenExample1}
            </button>
            <button
              type="button"
              onClick={() => {
                setStartMin(1350);
                setEndMin(390);
                setStartDate('');
                setEndDate('');
                setOvernight(true);
              }}
              className={EXAMPLE_BUTTON_CLASS}
            >
              {s.betweenExample2}
            </button>
            <button
              type="button"
              onClick={() => {
                setStartMin(495);
                setEndMin(1005);
                setStartDate('');
                setEndDate('');
              }}
              className={EXAMPLE_BUTTON_CLASS}
            >
              {s.betweenExample3}
            </button>
          </div>
        </div>
      )}

      {mode === 'work' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ClockInput
              id="oh-work-start"
              label={s.startLabel}
              value={workStart}
              onChange={setWorkStart}
              format={format}
              onCommit={commitWork}
            />
            <ClockInput
              id="oh-work-end"
              label={s.endLabel}
              value={workEnd}
              onChange={setWorkEnd}
              format={format}
              onCommit={commitWork}
            />
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={workOvernight}
              onChange={(e) => setWorkOvernight(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-[#0E8A66]"
            />
            {s.overnightLabel}
          </label>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900">{s.breakHeading}</h2>
            {breaks.map((b, index) => (
              <div
                key={b.id}
                className={`grid grid-cols-12 gap-2 items-end rounded-lg border border-slate-200 ${PASTEL_PALETTES[index % PASTEL_PALETTES.length].card} p-3`}
              >
                <div className="col-span-6 sm:col-span-4">
                  <ClockInput
                    id={`oh-break-start-${b.id}`}
                    label={s.breakStartLabel}
                    value={b.start}
                    onChange={(next) =>
                      setBreaks(breaks.map((row) => (row.id === b.id ? { ...row, start: next } : row)))
                    }
                    format={format}
                    onCommit={commitWork}
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <ClockInput
                    id={`oh-break-end-${b.id}`}
                    label={s.breakEndLabel}
                    value={b.end}
                    onChange={(next) =>
                      setBreaks(breaks.map((row) => (row.id === b.id ? { ...row, end: next } : row)))
                    }
                    format={format}
                    onCommit={commitWork}
                  />
                </div>
                <div className="col-span-12 sm:col-span-4 flex justify-end">
                  <button
                    type="button"
                    disabled={breaks.length <= 1}
                    onClick={() => removeBreak(b.id)}
                    aria-label={`${s.removeBreak} ${index + 1}`}
                    className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-2 text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    {s.removeBreak}
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addBreak}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              {s.addBreakButton}
            </button>
          </div>

          <div>
            <label htmlFor="oh-additional-break" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.additionalBreakLabel}
            </label>
            <input
              id="oh-additional-break"
              type="number"
              inputMode="numeric"
              min={0}
              value={additionalBreak}
              onChange={(e) => setAdditionalBreak(e.target.value)}
              onKeyDown={(e) => handleEnter(e, commitWork)}
              onBlur={commitWork}
              className={`${INPUT_CLASS} font-mono tabular-nums`}
            />
            <p className="mt-1.5 text-xs text-slate-500">{s.additionalBreakHint}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={commitWork} className={BUTTON_CLASS}>
              {s.calculateLabel}
            </button>
            <button type="button" onClick={() => clearMode('work')} className={BUTTON_CLASS}>
              {s.clearLabel}
            </button>
          </div>

          {workResult.error && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {workResult.error}
            </div>
          )}
          {workResult.data && (
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className={`rounded-xl border border-slate-200 ${palette.card} p-4`}>
                <dt className={`text-xs font-medium ${palette.link}`}>
                  {s.netWork} {workResult.data.overnightApplied ? s.overnightTag : ''}
                </dt>
                <dd className={`mt-1 text-2xl font-bold font-mono ${palette.link} tabular-nums`}>
                  {formatDuration(workResult.data.net)}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatDuration(workResult.data.net)}
                    label={s.copyResult}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[1].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.totalShift}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[1].link} tabular-nums`}>
                  {formatDuration(workResult.data.totalShift)}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatDuration(workResult.data.totalShift)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[2].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.totalBreak}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[2].link} tabular-nums`}>
                  {formatDuration(workResult.data.totalBreak)}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatDuration(workResult.data.totalBreak)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[3].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.decimalHours}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[3].link} tabular-nums`}>
                  {formatDecimalHours(minutesToDecimalHours(workResult.data.net, precision), precision)} {s.hoursAbbr}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatDecimalHours(minutesToDecimalHours(workResult.data.net, precision), precision)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[4].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.totalMinutes}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[4].link} tabular-nums`}>
                  {workResult.data.net} {s.minutesAbbr}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={String(workResult.data.net)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
            </dl>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-600">{s.examplesLabel}</span>
            <button
              type="button"
              onClick={() => {
                setWorkStart(540);
                setWorkEnd(1050);
                setBreaks([{ id: 1, start: 720, end: 750 }]);
                breakIdRef.current = 1;
                setAdditionalBreak('0');
              }}
              className={EXAMPLE_BUTTON_CLASS}
            >
              {s.workExample1}
            </button>
            <button
              type="button"
              onClick={() => {
                setWorkStart(1320);
                setWorkEnd(360);
                setWorkOvernight(true);
                setBreaks([{ id: 1, start: 60, end: 90 }]);
                breakIdRef.current = 1;
                setAdditionalBreak('0');
              }}
              className={EXAMPLE_BUTTON_CLASS}
            >
              {s.workExample2}
            </button>
          </div>
          <p className="text-xs text-slate-500">{s.workHint}</p>
        </div>
      )}

      {mode === 'add-subtract' && (
        <div className="space-y-6">
          <section className={`rounded-xl ${palette.card} p-5 space-y-4`}>
            <h2 className="text-base font-bold text-slate-900">{s.durationsHeading}</h2>
            <div className="space-y-3">
              {durRows.map((row, index) => (
                <div
                  key={row.id}
                  className={`grid grid-cols-12 gap-2 items-end rounded-lg border border-slate-200 ${PASTEL_PALETTES[index % PASTEL_PALETTES.length].card} p-3`}
                >
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-600 mb-1">{s.operationLabel}</label>
                    <select
                      aria-label={`${s.operationLabel} ${index + 1}`}
                      value={row.sign}
                      onChange={(e) =>
                        setDurRows(
                          durRows.map((r) =>
                            r.id === row.id ? { ...r, sign: e.target.value as 'add' | 'subtract' } : r,
                          ),
                        )
                      }
                      className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-2 text-sm font-mono"
                    >
                      <option value="add">+</option>
                      <option value="subtract">−</option>
                    </select>
                  </div>
                  <div className="col-span-4 sm:col-span-3">
                    <label className="block text-xs font-medium text-slate-600 mb-1">{s.durationHoursHeader}</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      aria-label={`${s.durationHoursHeader} ${index + 1}`}
                      value={row.hours}
                      onChange={(e) =>
                        setDurRows(durRows.map((r) => (r.id === row.id ? { ...r, hours: e.target.value } : r)))
                      }
                      onKeyDown={(e) => handleEnter(e, commitAddSubtract)}
                      onBlur={commitAddSubtract}
                      className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-2 font-mono text-sm tabular-nums"
                    />
                  </div>
                  <div className="col-span-4 sm:col-span-3">
                    <label className="block text-xs font-medium text-slate-600 mb-1">{s.durationMinutesHeader}</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      aria-label={`${s.durationMinutesHeader} ${index + 1}`}
                      value={row.minutes}
                      onChange={(e) =>
                        setDurRows(durRows.map((r) => (r.id === row.id ? { ...r, minutes: e.target.value } : r)))
                      }
                      onKeyDown={(e) => handleEnter(e, commitAddSubtract)}
                      onBlur={commitAddSubtract}
                      className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-2 font-mono text-sm tabular-nums"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-4 flex justify-end">
                    <button
                      type="button"
                      disabled={durRows.length <= 1}
                      onClick={() => removeDurRow(row.id)}
                      aria-label={`${s.removeDuration} ${index + 1}`}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-2 text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      {s.removeDuration}
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addDurRow}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                {s.addDurationRow}
              </button>
            </div>

            {addSubtractResult.error && (
              <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {addSubtractResult.error}
              </div>
            )}
            {addSubtractResult.data && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">{s.totalDuration}</div>
                  <div className={`text-2xl sm:text-3xl font-bold font-mono ${palette.link} tabular-nums`}>
                    {formatDuration(addSubtractResult.data.total)} ({formatDurationHm(addSubtractResult.data.total)})
                  </div>
                  {addSubtractResult.data.total < 0 && <p className="mt-1 text-xs text-slate-500">{s.negativeNote}</p>}
                </div>
                <CopyButton
                  text={formatDuration(addSubtractResult.data.total)}
                  label={s.copyResult}
                  copiedLabel={t.common.copied}
                />
              </div>
            )}
          </section>

          <section className={`rounded-xl ${palette.card} p-5 space-y-4`}>
            <h2 className="text-base font-bold text-slate-900">{s.clockHeading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ClockInput
                id="oh-clock-start"
                label={s.clockStartLabel}
                value={clockStart}
                onChange={setClockStart}
                format={format}
                onCommit={commitAddSubtract}
              />
              <div>
                <label htmlFor="oh-clock-op" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.operationLabel}
                </label>
                <select
                  id="oh-clock-op"
                  value={clockOp}
                  onChange={(e) => setClockOp(e.target.value as 'add' | 'subtract')}
                  className={`${INPUT_CLASS} font-mono tabular-nums`}
                >
                  <option value="add">{s.operationAdd}</option>
                  <option value="subtract">{s.operationSubtract}</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="oh-clock-hours" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.durationHoursHeader}
                </label>
                <input
                  id="oh-clock-hours"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  value={clockHours}
                  onChange={(e) => setClockHours(e.target.value)}
                  onKeyDown={(e) => handleEnter(e, commitAddSubtract)}
                  onBlur={commitAddSubtract}
                  className={`${INPUT_CLASS} font-mono tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="oh-clock-minutes" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.durationMinutesHeader}
                </label>
                <input
                  id="oh-clock-minutes"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  value={clockMinutes}
                  onChange={(e) => setClockMinutes(e.target.value)}
                  onKeyDown={(e) => handleEnter(e, commitAddSubtract)}
                  onBlur={commitAddSubtract}
                  className={`${INPUT_CLASS} font-mono tabular-nums`}
                />
              </div>
            </div>

            {clockResult.error && (
              <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {clockResult.error}
              </div>
            )}
            {clockResult.data && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">{s.resultingTime}</div>
                  <div className={`text-2xl sm:text-3xl font-bold font-mono ${palette.link} tabular-nums`}>
                    {formatClockTime(clockResult.data.time, format)}
                    {dayOffsetLabel(clockResult.data.daysOffset)}
                  </div>
                </div>
                <CopyButton
                  text={formatClockTime(clockResult.data.time, format)}
                  label={s.copyResult}
                  copiedLabel={t.common.copied}
                />
              </div>
            )}
          </section>

          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={commitAddSubtract} className={BUTTON_CLASS}>
              {s.calculateLabel}
            </button>
            <button type="button" onClick={() => clearMode('add-subtract')} className={BUTTON_CLASS}>
              {s.clearLabel}
            </button>
          </div>
          <p className="text-xs text-slate-500">{s.addSubtractHint}</p>
        </div>
      )}

      {mode === 'decimal' && (
        <div className="space-y-6">
          <section className={`rounded-xl ${palette.card} p-5 space-y-4`}>
            <h2 className="text-base font-bold text-slate-900">{s.decimalHmHeading}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="oh-dec-hours" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.hoursLabel}
                </label>
                <input
                  id="oh-dec-hours"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  value={decHours}
                  onChange={(e) => setDecHours(e.target.value)}
                  onKeyDown={(e) => handleEnter(e, commitDecimal)}
                  onBlur={commitDecimal}
                  className={`${INPUT_CLASS} font-mono tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="oh-dec-minutes" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.minutesLabel}
                </label>
                <input
                  id="oh-dec-minutes"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  value={decMinutes}
                  onChange={(e) => setDecMinutes(e.target.value)}
                  onKeyDown={(e) => handleEnter(e, commitDecimal)}
                  onBlur={commitDecimal}
                  className={`${INPUT_CLASS} font-mono tabular-nums`}
                />
              </div>
            </div>
            {decimalHmResult.data && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">{s.decimalHours}</div>
                  <div className={`text-2xl sm:text-3xl font-bold font-mono ${palette.link} tabular-nums`}>
                    {formatDecimalHours(decimalHmResult.data.decimal, precision)} {s.hoursAbbr}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    {s.totalMinutesLabel}: <span className="font-mono tabular-nums">{decimalHmResult.data.totalMinutes}</span>
                  </div>
                </div>
                <CopyButton
                  text={formatDecimalHours(decimalHmResult.data.decimal, precision)}
                  label={s.copyResult}
                  copiedLabel={t.common.copied}
                />
              </div>
            )}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-slate-600">{s.examplesLabel}</span>
              <button type="button" onClick={() => { setDecHours('1'); setDecMinutes('30'); }} className={EXAMPLE_BUTTON_CLASS}>
                {s.decimalExample1}
              </button>
              <button type="button" onClick={() => { setDecHours('2'); setDecMinutes('15'); }} className={EXAMPLE_BUTTON_CLASS}>
                {s.decimalExample2}
              </button>
              <button type="button" onClick={() => { setDecHours('3'); setDecMinutes('45'); }} className={EXAMPLE_BUTTON_CLASS}>
                {s.decimalExample3}
              </button>
            </div>
          </section>

          <section className={`rounded-xl ${palette.card} p-5 space-y-4`}>
            <h2 className="text-base font-bold text-slate-900">{s.decimalToHmHeading}</h2>
            <div>
              <label htmlFor="oh-dec-value" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.decimalLabel}
              </label>
              <input
                id="oh-dec-value"
                type="number"
                inputMode="decimal"
                min={0}
                step="0.01"
                value={decValue}
                onChange={(e) => setDecValue(e.target.value)}
                onKeyDown={(e) => handleEnter(e, commitDecimal)}
                onBlur={commitDecimal}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              />
            </div>
            {decimalToHmResult.error && (
              <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {decimalToHmResult.error}
              </div>
            )}
            {decimalToHmResult.data && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">{s.hmFormat}</div>
                  <div className={`text-2xl sm:text-3xl font-bold font-mono ${palette.link} tabular-nums`}>
                    {formatDuration(decimalToHmResult.data.totalMinutes)} (
                    {formatDurationHm(decimalToHmResult.data.totalMinutes)})
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    {s.totalMinutesLabel}: <span className="font-mono tabular-nums">{decimalToHmResult.data.totalMinutes}</span>
                  </div>
                </div>
                <CopyButton
                  text={formatDuration(decimalToHmResult.data.totalMinutes)}
                  label={s.copyResult}
                  copiedLabel={t.common.copied}
                />
              </div>
            )}
          </section>

          <section className={`rounded-xl ${palette.card} p-5 space-y-4`}>
            <h2 className="text-base font-bold text-slate-900">{s.minutesToDecimalHeading}</h2>
            <div>
              <label htmlFor="oh-dec-total-minutes" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.totalMinutesLabel}
              </label>
              <input
                id="oh-dec-total-minutes"
                type="number"
                inputMode="numeric"
                min={0}
                value={decTotalMinutes}
                onChange={(e) => setDecTotalMinutes(e.target.value)}
                onKeyDown={(e) => handleEnter(e, commitDecimal)}
                onBlur={commitDecimal}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              />
            </div>
            {minutesToDecimalResult.data && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">{s.decimalHours}</div>
                  <div className={`text-2xl sm:text-3xl font-bold font-mono ${palette.link} tabular-nums`}>
                    {formatDecimalHours(minutesToDecimalResult.data.decimal, precision)} {s.hoursAbbr}
                  </div>
                </div>
                <CopyButton
                  text={formatDecimalHours(minutesToDecimalResult.data.decimal, precision)}
                  label={s.copyResult}
                  copiedLabel={t.common.copied}
                />
              </div>
            )}
          </section>

          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={commitDecimal} className={BUTTON_CLASS}>
              {s.calculateLabel}
            </button>
            <button type="button" onClick={() => clearMode('decimal')} className={BUTTON_CLASS}>
              {s.clearLabel}
            </button>
          </div>
          <p className="text-xs text-slate-500">{s.decimalHint}</p>
        </div>
      )}

      {mode === 'pay' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="oh-rate" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.rateLabel}
              </label>
              <input
                id="oh-rate"
                type="number"
                inputMode="decimal"
                min={0}
                step="0.01"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                onKeyDown={(e) => handleEnter(e, commitPay)}
                onBlur={commitPay}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              />
            </div>
            <div>
              <label htmlFor="oh-currency" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.currencyLabel}
              </label>
              <select
                id="oh-currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                onBlur={commitPay}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              >
                {CURRENCIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <p className="mt-1.5 text-xs text-slate-500">{s.currencyHint}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="oh-pay-hours" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.hoursWorkedLabel}
              </label>
              <input
                id="oh-pay-hours"
                type="number"
                inputMode="numeric"
                min={0}
                value={payHours}
                onChange={(e) => setPayHours(e.target.value)}
                onKeyDown={(e) => handleEnter(e, commitPay)}
                onBlur={commitPay}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              />
            </div>
            <div>
              <label htmlFor="oh-pay-minutes" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.minutesWorkedLabel}
              </label>
              <input
                id="oh-pay-minutes"
                type="number"
                inputMode="numeric"
                min={0}
                value={payMinutes}
                onChange={(e) => setPayMinutes(e.target.value)}
                onKeyDown={(e) => handleEnter(e, commitPay)}
                onBlur={commitPay}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="oh-pay-break" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.unpaidBreakLabel}
            </label>
            <input
              id="oh-pay-break"
              type="number"
              inputMode="numeric"
              min={0}
              value={payBreak}
              onChange={(e) => setPayBreak(e.target.value)}
              onKeyDown={(e) => handleEnter(e, commitPay)}
              onBlur={commitPay}
              className={`${INPUT_CLASS} font-mono tabular-nums`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="oh-ot-hours" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.overtimeHoursLabel}
              </label>
              <input
                id="oh-ot-hours"
                type="number"
                inputMode="numeric"
                min={0}
                value={otHours}
                onChange={(e) => setOtHours(e.target.value)}
                onKeyDown={(e) => handleEnter(e, commitPay)}
                onBlur={commitPay}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              />
            </div>
            <div>
              <label htmlFor="oh-ot-minutes" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.overtimeMinutesLabel}
              </label>
              <input
                id="oh-ot-minutes"
                type="number"
                inputMode="numeric"
                min={0}
                value={otMinutes}
                onChange={(e) => setOtMinutes(e.target.value)}
                onKeyDown={(e) => handleEnter(e, commitPay)}
                onBlur={commitPay}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              />
            </div>
            <div>
              <label htmlFor="oh-ot-multiplier" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.multiplierLabel}
              </label>
              <input
                id="oh-ot-multiplier"
                type="number"
                inputMode="decimal"
                min={1}
                step="0.1"
                value={otMultiplier}
                onChange={(e) => setOtMultiplier(e.target.value)}
                onKeyDown={(e) => handleEnter(e, commitPay)}
                onBlur={commitPay}
                className={`${INPUT_CLASS} font-mono tabular-nums`}
              />
            </div>
          </div>
          <p className="text-xs text-slate-500">{s.multiplierHint}</p>

          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={commitPay} className={BUTTON_CLASS}>
              {s.calculateLabel}
            </button>
            <button type="button" onClick={() => clearMode('pay')} className={BUTTON_CLASS}>
              {s.clearLabel}
            </button>
          </div>

          {payResult.error && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {payResult.error}
            </div>
          )}
          {payResult.data && (
            <dl className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              <div className={`rounded-xl border border-slate-200 ${palette.card} p-4`}>
                <dt className={`text-xs font-medium ${palette.link}`}>{s.totalPay}</dt>
                <dd className={`mt-1 text-2xl font-bold font-mono ${palette.link} tabular-nums`}>
                  {formatMoney(payResult.data.totalPay, currency)}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatMoney(payResult.data.totalPay, currency)}
                    label={s.copyResult}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[1].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.regularPay}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[1].link} tabular-nums`}>
                  {formatMoney(payResult.data.regularPay, currency)}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatMoney(payResult.data.regularPay, currency)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[2].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.overtimePay}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[2].link} tabular-nums`}>
                  {formatMoney(payResult.data.overtimePay, currency)}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatMoney(payResult.data.overtimePay, currency)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[3].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.totalHoursWorked}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[3].link} tabular-nums`}>
                  {formatDecimalHours(payResult.data.totalHours, precision)} {s.hoursAbbr}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatDecimalHours(payResult.data.totalHours, precision)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[4].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.averagePerHour}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[4].link} tabular-nums`}>
                  {formatMoney(payResult.data.averagePerHour, currency)}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatMoney(payResult.data.averagePerHour, currency)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
              <div className={`rounded-xl border border-slate-200 ${PASTEL_PALETTES[5].card} p-4`}>
                <dt className="text-xs font-medium text-slate-500">{s.regularHours}</dt>
                <dd className={`mt-1 text-xl font-bold font-mono ${PASTEL_PALETTES[5].link} tabular-nums`}>
                  {formatDecimalHours(payResult.data.regularHours, precision)} {s.hoursAbbr}
                </dd>
                <dd className="mt-2">
                  <CopyButton
                    text={formatDecimalHours(payResult.data.regularHours, precision)}
                    label={s.copy}
                    copiedLabel={t.common.copied}
                  />
                </dd>
              </div>
            </dl>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-600">{s.examplesLabel}</span>
            <button
              type="button"
              onClick={() => {
                setRate('20');
                setPayHours('8');
                setPayMinutes('0');
                setPayBreak('0');
                setOtHours('0');
                setOtMinutes('0');
                setOtMultiplier('1.5');
              }}
              className={EXAMPLE_BUTTON_CLASS}
            >
              {s.payExample1}
            </button>
            <button
              type="button"
              onClick={() => {
                setRate('20');
                setPayHours('8');
                setPayMinutes('0');
                setPayBreak('0');
                setOtHours('2');
                setOtMinutes('0');
                setOtMultiplier('1.5');
              }}
              className={EXAMPLE_BUTTON_CLASS}
            >
              {s.payExample2}
            </button>
            <button
              type="button"
              onClick={() => {
                setRate('25');
                setPayHours('7');
                setPayMinutes('30');
                setPayBreak('0');
                setOtHours('0');
                setOtMinutes('0');
                setOtMultiplier('1.5');
              }}
              className={EXAMPLE_BUTTON_CLASS}
            >
              {s.payExample3}
            </button>
          </div>
          <p className="text-xs text-slate-500">{s.payHint}</p>
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
