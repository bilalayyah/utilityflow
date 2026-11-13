import { Download, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

const SAMPLE_JSON = `{
  "service": "utilityflow-api",
  "version": 2,
  "active": true,
  "regions": ["eu-west-2", "us-east-1"],
  "limits": {
    "ratePerMinute": 120,
    "timeoutMs": 5000
  }
}`;

function sortKeysDeep(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(sortKeysDeep);
  }
  if (value !== null && typeof value === 'object') {
    const sorted: Record<string, unknown> = {};
    for (const key of Object.keys(value as Record<string, unknown>).sort((a, b) =>
      a.localeCompare(b)
    )) {
      sorted[key] = sortKeysDeep((value as Record<string, unknown>)[key]);
    }
    return sorted;
  }
  return value;
}

function measureJsonStats(value: unknown, depth = 0): { keys: number; maxDepth: number } {
  if (Array.isArray(value)) {
    let keys = 0;
    let maxDepth = depth;
    for (const item of value) {
      const sub = measureJsonStats(item, depth + 1);
      keys += sub.keys;
      maxDepth = Math.max(maxDepth, sub.maxDepth);
    }
    return { keys, maxDepth };
  }
  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>);
    let keys = entries.length;
    let maxDepth = depth;
    for (const [, v] of entries) {
      const sub = measureJsonStats(v, depth + 1);
      keys += sub.keys;
      maxDepth = Math.max(maxDepth, sub.maxDepth);
    }
    return { keys, maxDepth };
  }
  return { keys: 0, maxDepth: depth };
}

function getLineColFromSyntaxError(input: string, err: unknown): string {
  const message = err instanceof Error ? err.message : 'Invalid JSON syntax';
  const posMatch = /position\s+(\d+)/i.exec(message);
  if (posMatch) {
    const pos = Number(posMatch[1]);
    const slice = input.slice(0, pos);
    const lines = slice.split('\n');
    const line = lines.length;
    const col = lines[lines.length - 1].length + 1;
    return `${message} (Line ${line}, Column ${col})`;
  }
  return message;
}

export default function JsonFormatterTool() {
  const [input, setInput] = useState('');
  const [indent, setIndent] = useState<'2' | '4' | 'tab' | 'minify'>('2');
  const [sortKeys, setSortKeys] = useState(false);

  const parsed = useMemo(() => {
    if (!input.trim()) {
      return { valid: null as boolean | null, output: '', error: '', keys: 0, maxDepth: 0 };
    }
    try {
      const rawObj = JSON.parse(input);
      const target = sortKeys ? sortKeysDeep(rawObj) : rawObj;
      const space =
        indent === 'minify' ? 0 : indent === 'tab' ? '\t' : indent === '4' ? 4 : 2;
      const output = JSON.stringify(target, null, space);
      const stats = measureJsonStats(rawObj);
      return {
        valid: true,
        output,
        error: '',
        keys: stats.keys,
        maxDepth: stats.maxDepth,
      };
    } catch (err) {
      return {
        valid: false,
        output: '',
        error: getLineColFromSyntaxError(input, err),
        keys: 0,
        maxDepth: 0,
      };
    }
  }, [input, indent, sortKeys]);

  const handleDownload = () => {
    if (!parsed.output) return;
    const blob = new Blob([parsed.output], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'formatted.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            {(
              [
                { id: '2', label: '2 Spaces' },
                { id: '4', label: '4 Spaces' },
                { id: 'tab', label: 'Tab' },
                { id: 'minify', label: 'Minify' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setIndent(opt.id)}
                className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer transition-colors ${
                  indent === opt.id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={sortKeys}
              onChange={(e) => setSortKeys(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>Sort keys A–Z</span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setInput(SAMPLE_JSON)}
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

      {parsed.valid === true && (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-xs sm:text-sm text-emerald-900">
          <span className="font-semibold">Valid JSON</span>
          <span className="font-mono tabular-nums">
            {parsed.keys} keys · depth {parsed.maxDepth} · {parsed.output.length.toLocaleString()} bytes
          </span>
        </div>
      )}

      {parsed.valid === false && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs sm:text-sm text-red-800 font-mono"
        >
          Invalid JSON: {parsed.error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="json-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Raw JSON Input
          </label>
          <textarea
            id="json-input"
            rows={12}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"hello": "world", "items": [1, 2, 3]}'
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="json-output" className="text-sm font-semibold text-slate-900">
              Formatted Output
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDownload}
                disabled={!parsed.output}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>.json</span>
              </button>
              <CopyButton text={parsed.output} label="Copy JSON" />
            </div>
          </div>
          <textarea
            id="json-output"
            rows={12}
            readOnly
            value={parsed.output}
            placeholder="Formatted and validated JSON appears here..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
