import { ExternalLink, Info } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { PASTEL_PALETTES, pastelForKey } from '../../components/tool/pastel';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    ruleSummaries: {
      x: '4–15 chars · letters, numbers, underscores',
      instagram: '1–30 chars · letters, numbers, periods, underscores',
      tiktok: '2–24 chars · letters, numbers, underscores, periods',
      youtube: '3–30 chars · letters, numbers, _, -, .',
      threads: '1–30 chars · shared Instagram namespace',
      github: '1–39 chars · alphanumeric and single hyphens',
    },
    infoTitle: 'Rule Validator & Direct Check Links:',
    infoBodyBefore:
      "Validates handle syntax and character limits offline without guessing availability. Click any platform's",
    infoEm: 'Open Profile URL',
    infoBodyAfter: 'link to verify live claim status directly.',
    labelBrand: 'Brand, Project, or Creator Name',
    phBrand: 'e.g. Utility Hub',
    labelActive: 'Active Handle to Validate',
    copyAt: 'Copy @',
    variationsTitle: 'Consistent Handle Variations:',
    thPlatform: 'Platform',
    thRules: 'Format Rules',
    thStatus: 'Syntax Status',
    thCheck: 'Manual Check',
    valid: 'Valid format',
    invalid: 'Invalid syntax/length',
    checkUrl: 'Check URL',
  };

type PlatformId = keyof typeof STRINGS_EN.ruleSummaries;

interface PlatformRule {
  id: PlatformId;
  platform: string;
  min: number;
  max: number;
  pattern: RegExp;
  buildUrl: (handle: string) => string;
}

const PLATFORM_RULES: PlatformRule[] = [
  {
    id: 'x',
    platform: 'X (Twitter)',
    min: 4,
    max: 15,
    pattern: /^[a-z0-9_]+$/,
    buildUrl: (h) => `https://x.com/${h}`,
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    min: 1,
    max: 30,
    pattern: /^(?!.*\.\.)(?!.*\.$)[a-z0-9._]+$/,
    buildUrl: (h) => `https://www.instagram.com/${h}/`,
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    min: 2,
    max: 24,
    pattern: /^(?!.*\.$)[a-z0-9._]+$/,
    buildUrl: (h) => `https://www.tiktok.com/@${h}`,
  },
  {
    id: 'youtube',
    platform: 'YouTube @handle',
    min: 3,
    max: 30,
    pattern: /^[a-z0-9._-]+$/,
    buildUrl: (h) => `https://www.youtube.com/@${h}`,
  },
  {
    id: 'threads',
    platform: 'Threads',
    min: 1,
    max: 30,
    pattern: /^(?!.*\.\.)(?!.*\.$)[a-z0-9._]+$/,
    buildUrl: (h) => `https://www.threads.net/@${h}`,
  },
  {
    id: 'github',
    platform: 'GitHub',
    min: 1,
    max: 39,
    pattern: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    buildUrl: (h) => `https://github.com/${h}`,
  },
];

export default function SocialHandleFormatterTool() {
  const { t } = useLocale();
  const s = useComponentStrings('social-handle-formatter', STRINGS_EN);
  const palette = pastelForKey('social-handle-formatter');
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
          <strong>{s.infoTitle}</strong> {s.infoBodyBefore} <em>{s.infoEm}</em> {s.infoBodyAfter}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="shf-brand" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelBrand}
          </label>
          <input
            id="shf-brand"
            type="text"
            value={brandInput}
            onChange={(e) => {
              setBrandInput(e.target.value);
              setSelectedVariant('');
            }}
            placeholder={s.phBrand}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          />
        </div>

        <div>
          <label htmlFor="shf-active" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelActive}
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
            <CopyButton text={activeHandle ? `@${activeHandle}` : ''} label={s.copyAt} copiedLabel={t.common.copied} />
          </div>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div>
          <div className="text-xs font-semibold text-slate-600 mb-2">{s.variationsTitle}</div>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((variant, index) => (
              <button
                key={variant}
                type="button"
                onClick={() => setSelectedVariant(variant)}
                className={`rounded-lg border px-3 py-1.5 font-mono text-xs cursor-pointer ${
                  activeHandle === variant
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-800 font-semibold'
                    : `border-slate-200 ${PASTEL_PALETTES[index % PASTEL_PALETTES.length].card} text-slate-700 hover:border-indigo-300`
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
          <thead className={`${palette.soft} text-slate-500 border-b border-slate-200`}>
            <tr>
              <th className="py-2.5 px-4 font-semibold">{s.thPlatform}</th>
              <th className="py-2.5 px-4 font-semibold">{s.thRules}</th>
              <th className="py-2.5 px-4 font-semibold">{s.thStatus}</th>
              <th className="py-2.5 px-4 font-semibold text-right">{s.thCheck}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {validations.map((v) => (
              <tr key={v.platform}>
                <td className="py-2.5 px-4 font-semibold text-slate-900">{v.platform}</td>
                <td className="py-2.5 px-4 text-slate-600">{s.ruleSummaries[v.id]}</td>
                <td className="py-2.5 px-4">
                  <span
                    className={`font-semibold ${
                      v.valid ? 'text-emerald-700' : 'text-red-700'
                    }`}
                  >
                    {v.valid ? s.valid : s.invalid}
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
                      {s.checkUrl}
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
