import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

type SpacerMode = 'braille' | 'dot' | 'clean-only';

export default function BioLineBreakFormatterTool() {
  const [rawText, setRawText] = useState(
    'Building fast browser tools for makers & teams.   \n\nNew weekly workflow drops every Tuesday.\n\nTry free utilities at the link below!'
  );
  const [spacerMode, setSpacerMode] = useState<SpacerMode>('braille');
  const [stripEmojisExtraSpaces, setStripEmojisExtraSpaces] = useState(true);

  const formatted = useMemo(() => {
    const normalized = rawText.replace(/\r\n?/g, '\n');
    const lines = normalized.split('\n').map((line) => {
      let cleaned = line.replace(/[ \t]+$/g, '');
      if (stripEmojisExtraSpaces) {
        cleaned = cleaned.replace(/[ \t]{2,}/g, ' ');
      }
      return cleaned;
    });

    const spacerChar = spacerMode === 'braille' ? '⠀' : spacerMode === 'dot' ? '.' : '';

    return lines
      .map((line) => {
        if (line === '' && spacerChar) {
          return spacerChar;
        }
        return line;
      })
      .join('\n')
      .trim();
  }, [rawText, spacerMode, stripEmojisExtraSpaces]);

  const stats = useMemo(() => {
    const lineCount = formatted ? formatted.split('\n').length : 0;
    const charCount = Array.from(formatted).length;
    const blankLinesPreserved = (rawText.replace(/\r\n?/g, '\n').match(/\n\s*\n/g) || []).length;
    return { lineCount, charCount, blankLinesPreserved };
  }, [formatted, rawText]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex flex-wrap rounded-lg bg-slate-100 p-1">
          {(
            [
              ['braille', 'Invisible Spacer (⠀ U+2800)'],
              ['dot', 'Minimal Dot Spacer (.)'],
              ['clean-only', 'Clean Trailing Spaces Only'],
            ] as [SpacerMode, string][]
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setSpacerMode(id)}
              className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                spacerMode === id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={stripEmojisExtraSpaces}
            onChange={(e) => setStripEmojisExtraSpaces(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600"
          />
          Collapse accidental double spaces
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="bio-raw" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Draft Caption or Bio
          </label>
          <textarea
            id="bio-raw"
            rows={8}
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder="Write your caption with blank lines where you want paragraph breaks..."
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm leading-relaxed"
          />
          <p className="mt-1.5 text-xs text-slate-500">
            Tip: Social apps often collapse blank paragraphs when trailing spaces sit at the end of the line above.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <label htmlFor="bio-out" className="text-sm font-semibold text-slate-900">
              Ready-to-Paste Output
            </label>
            <CopyButton text={formatted} label="Copy Formatted Caption" />
          </div>
          <textarea
            id="bio-out"
            rows={8}
            readOnly
            value={formatted}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm leading-relaxed text-slate-900"
          />
          <div className="mt-1.5 flex flex-wrap gap-4 text-xs text-slate-600 tabular-nums">
            <span>Characters: {stats.charCount}</span>
            <span>Lines: {stats.lineCount}</span>
            <span>Blank breaks preserved: {stats.blankLinesPreserved}</span>
            <span className={stats.charCount <= 150 ? 'text-emerald-700 font-medium' : 'text-slate-600'}>
              {stats.charCount <= 150 ? 'Fits Instagram 150-char bio' : 'Caption length (>150 bio limit)'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
