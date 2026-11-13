import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    sampleText:
      'Building fast browser tools for makers & teams.   \n\nNew weekly workflow drops every Tuesday.\n\nTry free utilities at the link below!',
    modeBraille: 'Invisible Spacer (⠀ U+2800)',
    modeDot: 'Minimal Dot Spacer (.)',
    modeClean: 'Clean Trailing Spaces Only',
    collapse: 'Collapse accidental double spaces',
    labelRaw: 'Draft Caption or Bio',
    phRaw: 'Write your caption with blank lines where you want paragraph breaks...',
    tip: 'Tip: Social apps often collapse blank paragraphs when trailing spaces sit at the end of the line above.',
    labelOut: 'Ready-to-Paste Output',
    copyFormatted: 'Copy Formatted Caption',
    charsLabel: 'Characters:',
    linesLabel: 'Lines:',
    blankLabel: 'Blank breaks preserved:',
    fitsBio: 'Fits Instagram 150-char bio',
    captionLength: 'Caption length (>150 bio limit)',
  };

type SpacerMode = 'braille' | 'dot' | 'clean-only';

export default function BioLineBreakFormatterTool() {
  const { t } = useLocale();
  const s = useComponentStrings('bio-line-break-formatter', STRINGS_EN);
  const [rawText, setRawText] = useState(s.sampleText);
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
              ['braille', s.modeBraille],
              ['dot', s.modeDot],
              ['clean-only', s.modeClean],
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
          {s.collapse}
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="bio-raw" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelRaw}
          </label>
          <textarea
            id="bio-raw"
            rows={8}
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder={s.phRaw}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm leading-relaxed"
          />
          <p className="mt-1.5 text-xs text-slate-500">
            {s.tip}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <label htmlFor="bio-out" className="text-sm font-semibold text-slate-900">
              {s.labelOut}
            </label>
            <CopyButton text={formatted} label={s.copyFormatted} copiedLabel={t.common.copied} />
          </div>
          <textarea
            id="bio-out"
            rows={8}
            readOnly
            value={formatted}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm leading-relaxed text-slate-900"
          />
          <div className="mt-1.5 flex flex-wrap gap-4 text-xs text-slate-600 tabular-nums">
            <span>{s.charsLabel} {stats.charCount}</span>
            <span>{s.linesLabel} {stats.lineCount}</span>
            <span>{s.blankLabel} {stats.blankLinesPreserved}</span>
            <span className={stats.charCount <= 150 ? 'text-emerald-700 font-medium' : 'text-slate-600'}>
              {stats.charCount <= 150 ? s.fitsBio : s.captionLength}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
