import { Download, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

const SAMPLE_JSON = `[
  { "id": 101, "name": "Alice Chen", "role": "Engineer", "active": true },
  { "id": 102, "name": "Marcus, Jr.", "role": "Designer", "active": false },
  { "id": 103, "name": "Priya Nair", "role": "Product", "active": true }
]`;

const SAMPLE_CSV = `id,name,role,active
101,Alice Chen,Engineer,true
102,"Marcus, Jr.",Designer,false
103,Priya Nair,Product,true`;

function flattenRecord(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, val] of Object.entries(obj)) {
    const nextKey = prefix ? `${prefix}.${key}` : key;
    if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      Object.assign(out, flattenRecord(val as Record<string, unknown>, nextKey));
    } else if (Array.isArray(val)) {
      out[nextKey] = JSON.stringify(val);
    } else if (val === null || val === undefined) {
      out[nextKey] = '';
    } else {
      out[nextKey] = String(val);
    }
  }
  return out;
}

function escapeCsvCell(value: string, delimiter: string): string {
  if (
    value.includes(delimiter) ||
    value.includes('"') ||
    value.includes('\n') ||
    value.includes('\r')
  ) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function jsonToCsv(jsonStr: string, delimiter: string): string {
  const parsed = JSON.parse(jsonStr);
  const rows: unknown[] = Array.isArray(parsed) ? parsed : [parsed];
  if (rows.length === 0) return '';

  const flattened = rows.map((row) =>
    row !== null && typeof row === 'object' && !Array.isArray(row)
      ? flattenRecord(row as Record<string, unknown>)
      : { value: String(row) }
  );

  const headers: string[] = [];
  for (const row of flattened) {
    for (const key of Object.keys(row)) {
      if (!headers.includes(key)) headers.push(key);
    }
  }

  const lines = [
    headers.map((h) => escapeCsvCell(h, delimiter)).join(delimiter),
    ...flattened.map((row) =>
      headers.map((h) => escapeCsvCell(row[h] ?? '', delimiter)).join(delimiter)
    ),
  ];

  return lines.join('\n');
}

function parseCsvRows(csvStr: string, delimiter: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < csvStr.length; i += 1) {
    const ch = csvStr[i];
    const next = csvStr[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === delimiter) {
      row.push(cell);
      cell = '';
    } else if (ch === '\r' && next === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
      i += 1;
    } else if (ch === '\n' || ch === '\r') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else {
      cell += ch;
    }
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  return rows.filter((r) => !(r.length === 1 && r[0] === ''));
}

function csvToJson(csvStr: string, delimiter: string): string {
  const rows = parseCsvRows(csvStr.trim(), delimiter);
  if (rows.length === 0) return '[]';
  const headers = rows[0].map((h, i) => h.trim() || `column_${i + 1}`);
  const data = rows.slice(1).map((cells) => {
    const obj: Record<string, string> = {};
    headers.forEach((header, idx) => {
      obj[header] = cells[idx] ?? '';
    });
    return obj;
  });
  return JSON.stringify(data, null, 2);
}

export default function JsonCsvConverterTool() {
  const [direction, setDirection] = useState<'json-to-csv' | 'csv-to-json'>('json-to-csv');
  const [delimiter, setDelimiter] = useState<',' | ';' | '\t'>(',');
  const [input, setInput] = useState('');

  const result = useMemo(() => {
    if (!input.trim()) return { output: '', error: '' };
    try {
      const output =
        direction === 'json-to-csv'
          ? jsonToCsv(input, delimiter)
          : csvToJson(input, delimiter);
      return { output, error: '' };
    } catch (err) {
      return {
        output: '',
        error: err instanceof Error ? err.message : 'Unable to parse input format.',
      };
    }
  }, [input, direction, delimiter]);

  const handleDownload = () => {
    if (!result.output) return;
    const isCsv = direction === 'json-to-csv';
    const blob = new Blob([result.output], {
      type: isCsv ? 'text/csv;charset=utf-8' : 'application/json;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = isCsv ? 'converted.csv' : 'converted.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setDirection('json-to-csv')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                direction === 'json-to-csv' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              JSON → CSV
            </button>
            <button
              type="button"
              onClick={() => setDirection('csv-to-json')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                direction === 'csv-to-json' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              CSV → JSON
            </button>
          </div>

          <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700">
            <span>Delimiter:</span>
            <select
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value as ',' | ';' | '\t')}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs sm:text-sm text-slate-900"
            >
              <option value=",">Comma (,)</option>
              <option value=";">Semicolon (;)</option>
              <option value={'\t'}>Tab (TSV)</option>
            </select>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setInput(direction === 'json-to-csv' ? SAMPLE_JSON : SAMPLE_CSV)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>Load sample</span>
          </button>
          <button
            type="button"
            onClick={() => setInput('')}
            disabled={!input}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {result.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs sm:text-sm text-red-800 font-mono">
          Conversion error: {result.error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="jcsv-in" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {direction === 'json-to-csv' ? 'JSON Input' : 'CSV Input'}
          </label>
          <textarea
            id="jcsv-in"
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              direction === 'json-to-csv'
                ? '[{"id": 1, "name": "Example"}]'
                : 'id,name\n1,Example'
            }
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="jcsv-out" className="text-sm font-semibold text-slate-900">
              {direction === 'json-to-csv' ? 'CSV Output' : 'JSON Output'}
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDownload}
                disabled={!result.output}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{direction === 'json-to-csv' ? '.csv' : '.json'}</span>
              </button>
              <CopyButton text={result.output} label="Copy" />
            </div>
          </div>
          <textarea
            id="jcsv-out"
            rows={10}
            readOnly
            value={result.output}
            placeholder="Converted data appears here..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
