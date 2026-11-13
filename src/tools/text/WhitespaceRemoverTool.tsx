import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

const SAMPLE_TEXT = `   First   line with   extra   spaces.   

   Second line   with   tabs	and   gaps.


Third   line here.   `;

type LineBreakMode = 'keep' | 'collapse-blank' | 'remove-all' | 'to-spaces';

export default function WhitespaceRemoverTool() {
  const [input, setInput] = useState('');
  const [collapseSpaces, setCollapseSpaces] = useState(true);
  const [trimEdges, setTrimEdges] = useState(true);
  const [tabsToSpaces, setTabsToSpaces] = useState(true);
  const [lineBreakMode, setLineBreakMode] = useState<LineBreakMode>('collapse-blank');

  const output = useMemo(() => {
    if (!input) return '';
    let result = input.replace(/\r\n/g, '\n');

    if (tabsToSpaces) {
      result = result.replace(/\t+/g, ' ');
    }

    if (lineBreakMode === 'remove-all') {
      result = result.replace(/\n+/g, '');
    } else if (lineBreakMode === 'to-spaces') {
      result = result.replace(/\n+/g, ' ');
    } else if (lineBreakMode === 'collapse-blank') {
      result = result
        .split('\n')
        .map((line) => (trimEdges ? line.trim() : line))
        .filter((line) => line.length > 0)
        .join('\n');
    }

    if (trimEdges && lineBreakMode !== 'collapse-blank') {
      result = result
        .split('\n')
        .map((line) => line.trim())
        .join('\n');
    }

    if (collapseSpaces) {
      result = result
        .split('\n')
        .map((line) => line.replace(/ {2,}/g, ' '))
        .join('\n');
    }

    return trimEdges ? result.trim() : result;
  }, [input, collapseSpaces, trimEdges, tabsToSpaces, lineBreakMode]);

  const savedChars = Math.max(0, input.length - output.length);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={collapseSpaces}
              onChange={(e) => setCollapseSpaces(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>Collapse multiple spaces</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={trimEdges}
              onChange={(e) => setTrimEdges(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>Trim line edges</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={tabsToSpaces}
              onChange={(e) => setTabsToSpaces(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>Convert tabs to spaces</span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setInput(SAMPLE_TEXT)}
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

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-600 mr-1">Line breaks:</span>
        {(
          [
            { id: 'keep', label: 'Keep line breaks' },
            { id: 'collapse-blank', label: 'Remove blank lines' },
            { id: 'to-spaces', label: 'Replace with spaces' },
            { id: 'remove-all', label: 'Remove all breaks' },
          ] as const
        ).map((mode) => (
          <button
            key={mode.id}
            type="button"
            onClick={() => setLineBreakMode(mode.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              lineBreakMode === mode.id
                ? 'bg-indigo-600 text-white'
                : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="ws-input" className="text-sm font-semibold text-slate-900">
              Input Text
            </label>
            <span className="text-xs font-mono text-slate-500 tabular-nums">
              {input.length.toLocaleString()} chars
            </span>
          </div>
          <textarea
            id="ws-input"
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste messy text with extra spaces, tabs, or blank lines..."
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="ws-output" className="text-sm font-semibold text-slate-900">
              Cleaned Text
            </label>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500 tabular-nums">
                {output.length.toLocaleString()} chars ({savedChars} removed)
              </span>
              <CopyButton text={output} label="Copy" />
            </div>
          </div>
          <textarea
            id="ws-output"
            rows={10}
            readOnly
            value={output}
            placeholder="Cleaned output appears automatically..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
