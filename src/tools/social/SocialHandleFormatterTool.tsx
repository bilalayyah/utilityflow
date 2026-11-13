import { ExternalLink, Info } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

interface PlatformRule {
  platform: string;
  min: number;
  max: number;
  pattern: RegExp;
  ruleSummary: string;
  buildUrl: (handle: string) => string;
}

const PLATFORM_RULES: PlatformRule[] = [
  {
    platform: 'X (Twitter)',
    min: 4,
    max: 15,
    pattern: /^[a-z0-9_]+$/,
    ruleSummary: '4–15 chars · letters, numbers, underscores',
    buildUrl: (h) => `https://x.com/${h}`,
  },
  {
    platform: 'Instagram',
    min: 1,
    max: 30,
    pattern: /^(?!.*\.\.)(?!.*\.$)[a-z0-9._]+$/,
    ruleSummary: '1–30 chars · letters, numbers, periods, underscores',
    buildUrl: (h) => `https://www.instagram.com/${h}/`,
  },
  {
    platform: 'TikTok',
    min: 2,
    max: 24,
    pattern: /^(?!.*\.$)[a-z0-9._]+$/,
    ruleSummary: '2–24 chars · letters, numbers, underscores, periods',
    buildUrl: (h) => `https://www.tiktok.com/@${h}`,
  },
  {
    platform: 'YouTube @handle',
    min: 3,
    max: 30,
    pattern: /^[a-z0-9._-]+$/,
    ruleSummary: '3–30 chars · letters, numbers, _, -, .',
    buildUrl: (h) => `https://www.youtube.com/@${h}`,
  },
  {
    platform: 'Threads',
    min: 1,
    max: 30,
    pattern: /^(?!.*\.\.)(?!.*\.$)[a-z0-9._]+$/,
    ruleSummary: '1–30 chars · shared Instagram namespace',
    buildUrl: (h) => `https://www.threads.net/@${h}`,
  },
  {
    platform: 'GitHub',
    min: 1,
    max: 39,
    pattern: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    ruleSummary: '1–39 chars · alphanumeric and single hyphens',
    buildUrl: (h) => `https://github.com/${h}`,
  },
];

export default function SocialHandleFormatterTool() {
  const [brandInput, setBrandInput] = useState('Utility Hub');
  const [selectedVariant, setSelectedVariant] = useState('');

  const cleanBase = useMemo(() => {
    const words = brandInput
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    return words;
  }, [brandInput]);

  const suggestions = useMemo(() => {
    if (cleanBase.length === 0) return [];
    const joined = cleanBase.join('');
    const dotted = cleanBase.join('.');
    const underscored = cleanBase.join('_');
    const hyphenated = cleanBase.join('-');

    return Array.from(
      new Set([
        joined,
        underscored,
        dotted,
        hyphenated,
        `get${joined}`,
        `use${joined}`,
        `${joined}hq`,
        `${joined}app`,
        `the${joined}`,
        `${joined}studio`,
      ])
    );
  }, [cleanBase]);

  const activeHandle = (selectedVariant || suggestions[0] || '').toLowerCase().replace(/^@+/, '');

  const validations = useMemo(() => {
    return PLATFORM_RULES.map((rule) => {
      const lenOk = activeHandle.length >= rule.min && activeHandle.length <= rule.max;
      const charOk = activeHandle.length > 0 && rule.pattern.test(activeHandle);
      return {
        ...rule,
        valid: lenOk && charOk,
        url: activeHandle ? rule.buildUrl(activeHandle) : '',
      };
    });
  }, [activeHandle]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
        <Info className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
        <p>
          <strong>Rule Validator &amp; Direct Check Links:</strong> Validates handle syntax and character limits offline without guessing availability. Click any platform&apos;s <em>Open Profile URL</em> link to verify live claim status directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="shf-brand" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Brand, Project, or Creator Name
          </label>
          <input
            id="shf-brand"
            type="text"
            value={brandInput}
            onChange={(e) => {
              setBrandInput(e.target.value);
              setSelectedVariant('');
            }}
            placeholder="e.g. Utility Hub"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          />
        </div>

        <div>
          <label htmlFor="shf-active" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Active Handle to Validate
          </label>
          <div className="flex gap-2">
            <input
              id="shf-active"
              type="text"
              value={activeHandle}
              onChange={(e) => setSelectedVariant(e.target.value)}
              placeholder="utilityflow"
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
            />
            <CopyButton text={activeHandle ? `@${activeHandle}` : ''} label="Copy @" />
          </div>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div>
          <div className="text-xs font-semibold text-slate-600 mb-2">Consistent Handle Variations:</div>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((variant) => (
              <button
                key={variant}
                type="button"
                onClick={() => setSelectedVariant(variant)}
                className={`rounded-lg border px-3 py-1.5 font-mono text-xs cursor-pointer ${
                  activeHandle === variant
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-800 font-semibold'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-300'
                }`}
              >
                @{variant}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl border border-slate-200 overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
            <tr>
              <th className="py-2.5 px-4 font-semibold">Platform</th>
              <th className="py-2.5 px-4 font-semibold">Format Rules</th>
              <th className="py-2.5 px-4 font-semibold">Syntax Status</th>
              <th className="py-2.5 px-4 font-semibold text-right">Manual Check</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {validations.map((v) => (
              <tr key={v.platform}>
                <td className="py-2.5 px-4 font-semibold text-slate-900">{v.platform}</td>
                <td className="py-2.5 px-4 text-slate-600">{v.ruleSummary}</td>
                <td className="py-2.5 px-4">
                  <span
                    className={`font-semibold ${
                      v.valid ? 'text-emerald-700' : 'text-red-700'
                    }`}
                  >
                    {v.valid ? 'Valid format' : 'Invalid syntax/length'}
                  </span>
                </td>
                <td className="py-2.5 px-4 text-right">
                  {v.valid ? (
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Check URL
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
