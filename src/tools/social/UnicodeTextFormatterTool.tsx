import { AlertTriangle } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

interface StyleDef {
  id: string;
  name: string;
  note: string;
  transform: (input: string) => string;
}

function mapCodePoints(
  input: string,
  upperStart: number,
  lowerStart: number,
  digitStart?: number,
  exceptions: Record<string, string> = {}
): string {
  return Array.from(input)
    .map((ch) => {
      if (exceptions[ch]) return exceptions[ch];
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(upperStart + (code - 65));
      }
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(lowerStart + (code - 97));
      }
      if (digitStart !== undefined && code >= 48 && code <= 57) {
        return String.fromCodePoint(digitStart + (code - 48));
      }
      return ch;
    })
    .join('');
}

const SMALL_CAPS_MAP: Record<string, string> = {
  a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ',
  j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ',
  s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ',
};

const STYLES: StyleDef[] = [
  {
    id: 'sans-bold',
    name: 'Bold (Sans-Serif)',
    note: 'High legibility for bio headers & post hooks',
    transform: (s) => mapCodePoints(s, 0x1d5d4, 0x1d5ee, 0x1d7ec),
  },
  {
    id: 'sans-italic',
    name: 'Italic (Sans-Serif)',
    note: 'Subtle emphasis inside captions',
    transform: (s) => mapCodePoints(s, 0x1d608, 0x1d622),
  },
  {
    id: 'sans-bold-italic',
    name: 'Bold Italic (Sans-Serif)',
    note: 'Strong callouts & section dividers',
    transform: (s) => mapCodePoints(s, 0x1d63c, 0x1d656),
  },
  {
    id: 'serif-bold',
    name: 'Bold (Serif)',
    note: 'Editorial style emphasis',
    transform: (s) => mapCodePoints(s, 0x1d400, 0x1d41a, 0x1d7ce),
  },
  {
    id: 'monospace',
    name: 'Monospace',
    note: 'Code handles, dates & technical tags',
    transform: (s) => mapCodePoints(s, 0x1d670, 0x1d68a, 0x1d7f6),
  },
  {
    id: 'double-struck',
    name: 'Double-Struck (Blackboard)',
    note: 'Display accents',
    transform: (s) =>
      mapCodePoints(s, 0x1d538, 0x1d552, 0x1d7d8, {
        C: 'ℂ',
        H: 'ℍ',
        N: 'ℕ',
        P: 'ℙ',
        Q: 'ℚ',
        R: 'ℝ',
        Z: 'ℤ',
      }),
  },
  {
    id: 'script-bold',
    name: 'Script Bold',
    note: 'Decorative bio signatures',
    transform: (s) => mapCodePoints(s, 0x1d4d0, 0x1d4ea),
  },
  {
    id: 'fraktur-bold',
    name: 'Fraktur Bold',
    note: 'Gothic display lettering',
    transform: (s) => mapCodePoints(s, 0x1d56c, 0x1d586),
  },
  {
    id: 'small-caps',
    name: 'Small Caps',
    note: 'Clean uppercase-look profile labels',
    transform: (s) =>
      Array.from(s)
        .map((c) => SMALL_CAPS_MAP[c.toLowerCase()] ?? c)
        .join(''),
  },
  {
    id: 'fullwidth',
    name: 'Fullwidth Aesthetic',
    note: 'Wide-spaced retro social headers',
    transform: (s) =>
      Array.from(s)
        .map((ch) => {
          if (ch === ' ') return '\u3000';
          const code = ch.charCodeAt(0);
          if (code >= 33 && code <= 126) return String.fromCodePoint(code + 0xfee0);
          return ch;
        })
        .join(''),
  },
];

export default function UnicodeTextFormatterTool() {
  const [input, setInput] = useState('New Creator Toolkit 2025');

  const outputs = useMemo(
    () =>
      STYLES.map((style) => ({
        ...style,
        value: style.transform(input),
      })),
    [input]
  );

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
        <p>
          <strong>Accessibility Note:</strong> Stylized Unicode characters belong to mathematical symbol blocks, so screen readers may read them letter-by-letter or skip them, and some search indexes ignore them. Use sparingly for short highlights rather than full paragraphs.
        </p>
      </div>

      <div>
        <label htmlFor="utf-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
          Text to Stylize
        </label>
        <input
          id="utf-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a short headline, bio line, or CTA..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {outputs.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col justify-between gap-3"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold text-slate-900">{item.name}</span>
                <CopyButton text={item.value} label="Copy" />
              </div>
              <p className="text-xs text-slate-500 mb-2">{item.note}</p>
              <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2.5 text-base text-slate-900 break-words">
                {item.value || <span className="text-slate-400">Preview</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
