import { Info } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

type FrameworkId = 'pas' | 'bab' | 'tutorial' | 'checklist' | 'myth';

interface FrameworkDef {
  id: FrameworkId;
  name: string;
  description: string;
  build: (f: {
    hook: string;
    context: string;
    points: string[];
    cta: string;
    tags: string;
  }) => string;
}

const FRAMEWORKS: FrameworkDef[] = [
  {
    id: 'pas',
    name: 'Problem → Agitate → Solution (PAS)',
    description: 'Highlights a concrete pain point before delivering your workflow fix.',
    build: ({ hook, context, points, cta, tags }) =>
      [
        hook,
        context ? `\n${context}` : '',
        points.length > 0 ? `\nWhat actually fixes it:\n${points.map((p) => `• ${p}`).join('\n')}` : '',
        cta ? `\n${cta}` : '',
        tags ? `\n${tags}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
  {
    id: 'tutorial',
    name: '3-Step Actionable Breakdown',
    description: 'Numbered how-to structure suited for LinkedIn carousels and saves.',
    build: ({ hook, context, points, cta, tags }) =>
      [
        hook,
        context ? `\n${context}` : '',
        points.length > 0
          ? `\n${points.map((p, i) => `${i + 1}. ${p}`).join('\n')}`
          : '',
        cta ? `\n${cta}` : '',
        tags ? `\n${tags}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
  {
    id: 'bab',
    name: 'Before → After → Bridge',
    description: 'Contrasts old friction with the streamlined outcome.',
    build: ({ hook, context, points, cta, tags }) =>
      [
        hook,
        context ? `\nBefore: ${context}` : '',
        points[0] ? `\nAfter: ${points[0]}` : '',
        points.length > 1
          ? `\nThe bridge:\n${points
              .slice(1)
              .map((p) => `→ ${p}`)
              .join('\n')}`
          : '',
        cta ? `\n${cta}` : '',
        tags ? `\n${tags}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
  {
    id: 'checklist',
    name: 'Launch / Audit Checklist',
    description: 'High-clarity verification list creators can bookmark.',
    build: ({ hook, context, points, cta, tags }) =>
      [
        hook,
        context ? `\n${context}` : '',
        points.length > 0 ? `\n${points.map((p) => `[ ] ${p}`).join('\n')}` : '',
        cta ? `\n${cta}` : '',
        tags ? `\n${tags}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
  {
    id: 'myth',
    name: 'Common Myth vs. Practical Reality',
    description: 'Challenges outdated advice with direct, concise alternatives.',
    build: ({ hook, context, points, cta, tags }) =>
      [
        hook,
        context ? `\nCommon myth: ${context}` : '',
        points.length > 0
          ? `\nWhat works in practice:\n${points.map((p) => `— ${p}`).join('\n')}`
          : '',
        cta ? `\n${cta}` : '',
        tags ? `\n${tags}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
];

export default function CaptionTemplateBuilderTool() {
  const [frameworkId, setFrameworkId] = useState<FrameworkId>('tutorial');
  const [hook, setHook] = useState('Stop losing hours formatting campaign links by hand.');
  const [context, setContext] = useState(
    'Inconsistent UTM parameters and broken bio spacing silently distort analytics reports.'
  );
  const [pointsText, setPointsText] = useState(
    'Standardize lowercase utm_source and utm_medium tags\nValidate character folds before publishing\nKeep clean paragraph breaks without trailing spaces'
  );
  const [cta, setCta] = useState('Bookmark this checklist for your next product launch.');
  const [hashtags, setHashtags] = useState('#CreatorWorkflow #MarketingOps #Productivity');

  const activeFramework = FRAMEWORKS.find((f) => f.id === frameworkId) ?? FRAMEWORKS[0];

  const compiled = useMemo(() => {
    const points = pointsText
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    const output = activeFramework.build({
      hook: hook.trim(),
      context: context.trim(),
      points,
      cta: cta.trim(),
      tags: hashtags.trim(),
    });

    return {
      output,
      chars: Array.from(output).length,
      words: output.trim() ? output.trim().split(/\s+/).length : 0,
    };
  }, [activeFramework, hook, context, pointsText, cta, hashtags]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
        <Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" />
        <p>
          <strong>Deterministic Template Assembly:</strong> This tool uses structured copywriting frameworks directly in your browser—no AI model or external API is used or implied.
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 rounded-lg bg-slate-100 p-1.5">
        {FRAMEWORKS.map((fw) => (
          <button
            key={fw.id}
            type="button"
            onClick={() => setFrameworkId(fw.id)}
            className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              frameworkId === fw.id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            {fw.name}
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-600">{activeFramework.description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-3.5">
          <div>
            <label htmlFor="ctb-hook" className="block text-xs font-semibold text-slate-800 mb-1">
              Opening Hook (First 1–2 lines)
            </label>
            <input
              id="ctb-hook"
              type="text"
              value={hook}
              onChange={(e) => setHook(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="ctb-ctx" className="block text-xs font-semibold text-slate-800 mb-1">
              Context / Problem Statement
            </label>
            <textarea
              id="ctb-ctx"
              rows={2}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="ctb-pts" className="block text-xs font-semibold text-slate-800 mb-1">
              Key Takeaways (One point per line)
            </label>
            <textarea
              id="ctb-pts"
              rows={4}
              value={pointsText}
              onChange={(e) => setPointsText(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="ctb-cta" className="block text-xs font-semibold text-slate-800 mb-1">
              Call-to-Action (CTA)
            </label>
            <input
              id="ctb-cta"
              type="text"
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="ctb-tags" className="block text-xs font-semibold text-slate-800 mb-1">
              Hashtags
            </label>
            <input
              id="ctb-tags"
              type="text"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
            />
          </div>
        </div>

        <div className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-4 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-indigo-800">Formatted Caption Preview</span>
            <CopyButton text={compiled.output} label="Copy Caption" />
          </div>
          <pre className="rounded-lg border border-slate-200 bg-white p-4 font-sans text-sm leading-relaxed text-slate-900 whitespace-pre-wrap break-words min-h-64">
            {compiled.output}
          </pre>
          <div className="flex flex-wrap gap-4 text-xs text-slate-600 tabular-nums">
            <span>Characters: <strong>{compiled.chars}</strong></span>
            <span>Words: <strong>{compiled.words}</strong></span>
            <span>X (280): {compiled.chars <= 280 ? 'Fits' : 'Thread needed'}</span>
            <span>LinkedIn / IG: {compiled.chars <= 2200 ? 'Fits' : 'Too long'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
