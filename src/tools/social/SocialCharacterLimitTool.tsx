import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

interface PlatformSpec {
  id: string;
  platform: string;
  surface: string;
  maxChars: number;
  foldChars?: number;
  urlWeight?: number;
}

const PLATFORMS: PlatformSpec[] = [
  { id: 'x-post', platform: 'X (Twitter)', surface: 'Standard Post', maxChars: 280, urlWeight: 23 },
  { id: 'x-bio', platform: 'X (Twitter)', surface: 'Profile Bio', maxChars: 160 },
  { id: 'ig-cap', platform: 'Instagram', surface: 'Caption', maxChars: 2200, foldChars: 125 },
  { id: 'ig-bio', platform: 'Instagram', surface: 'Profile Bio', maxChars: 150 },
  { id: 'li-post', platform: 'LinkedIn', surface: 'Feed Post', maxChars: 3000, foldChars: 210 },
  { id: 'tiktok-cap', platform: 'TikTok', surface: 'Video Caption', maxChars: 2200, foldChars: 100 },
  { id: 'threads', platform: 'Threads', surface: 'Post', maxChars: 500 },
  { id: 'bluesky', platform: 'Bluesky', surface: 'Post', maxChars: 300 },
  { id: 'yt-title', platform: 'YouTube', surface: 'Video Title', maxChars: 100, foldChars: 70 },
  { id: 'yt-desc', platform: 'YouTube', surface: 'Description', maxChars: 5000, foldChars: 157 },
];

const URL_REGEX = /https?:\/\/[^\s]+/gi;

function measureForPlatform(text: string, spec: PlatformSpec): number {
  if (!spec.urlWeight) {
    return Array.from(text).length;
  }
  const adjusted = text.replace(URL_REGEX, 'x'.repeat(spec.urlWeight));
  return Array.from(adjusted).length;
}

export default function SocialCharacterLimitTool() {
  const [text, setText] = useState(
    'Shipping faster starts with small daily improvements.\n\nTry our browser-based creator utilities at https://utilityflow.online/tools/ — no sign-up required.\n\n#CreatorTools #Workflow'
  );
  const [previewId, setPreviewId] = useState('ig-cap');

  const stats = useMemo(() => {
    const rawChars = Array.from(text).length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const hashtags = (text.match(/#[A-Za-z0-9_]+/g) || []).length;
    const mentions = (text.match(/@[A-Za-z0-9_.]+/g) || []).length;
    const urls = (text.match(URL_REGEX) || []).length;

    const rows = PLATFORMS.map((spec) => {
      const used = measureForPlatform(text, spec);
      const remaining = spec.maxChars - used;
      const pct = Math.min(100, Math.round((used / spec.maxChars) * 100));
      return { spec, used, remaining, pct, over: remaining < 0 };
    });

    const activeSpec = PLATFORMS.find((p) => p.id === previewId) ?? PLATFORMS[2];
    const foldLimit = activeSpec.foldChars ?? activeSpec.maxChars;
    const chars = Array.from(text);
    const truncatedPreview =
      chars.length > foldLimit ? `${chars.slice(0, foldLimit).join('')}…` : text;

    return { rawChars, words, hashtags, mentions, urls, rows, activeSpec, truncatedPreview, foldLimit };
  }, [text, previewId]);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <label htmlFor="scl-input" className="text-sm font-semibold text-slate-900">
            Social Post / Bio Draft
          </label>
          <div className="flex items-center gap-2">
            <CopyButton text={text} label="Copy Draft" />
            <button
              type="button"
              onClick={() => setText('')}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
        <textarea
          id="scl-input"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write or paste your social caption, post, bio, or YouTube title..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm leading-relaxed"
        />
        <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-600 tabular-nums">
          <span>
            Characters: <strong className="text-slate-900">{stats.rawChars}</strong>
          </span>
          <span>
            Words: <strong className="text-slate-900">{stats.words}</strong>
          </span>
          <span>
            Hashtags: <strong className="text-slate-900">{stats.hashtags}</strong>
          </span>
          <span>
            Mentions: <strong className="text-slate-900">{stats.mentions}</strong>
          </span>
          <span>
            URLs detected: <strong className="text-slate-900">{stats.urls}</strong> (weighted 23 chars on X)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {stats.rows.map(({ spec, used, remaining, pct, over }) => (
          <div
            key={spec.id}
            className={`rounded-xl border p-4 ${
              over ? 'border-red-300 bg-red-50/50' : 'border-slate-200 bg-white'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="text-sm font-bold text-slate-900">{spec.platform}</div>
                <div className="text-xs text-slate-500">{spec.surface}</div>
              </div>
              <span
                className={`font-mono text-xs font-semibold tabular-nums ${
                  over ? 'text-red-700' : 'text-slate-700'
                }`}
              >
                {used.toLocaleString()} / {spec.maxChars.toLocaleString()}
              </span>
            </div>

            <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  over ? 'bg-red-600' : pct > 85 ? 'bg-amber-500' : 'bg-indigo-600'
                }`}
                style={{ width: `${pct}%` }}
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-xs tabular-nums">
              <span className={over ? 'text-red-700 font-semibold' : 'text-slate-600'}>
                {over
                  ? `${Math.abs(remaining).toLocaleString()} over limit`
                  : `${remaining.toLocaleString()} left`}
              </span>
              {spec.foldChars && (
                <span className="text-slate-500">Fold ~{spec.foldChars} ch</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Feed Truncation / &ldquo;See More&rdquo; Fold Preview</h3>
            <p className="text-xs text-slate-500">
              Preview what readers see before tapping &ldquo;See more&rdquo; ({stats.foldLimit} characters for{' '}
              {stats.activeSpec.platform} {stats.activeSpec.surface}).
            </p>
          </div>
          <select
            aria-label="Choose truncation preview platform"
            value={previewId}
            onChange={(e) => setPreviewId(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium"
          >
            {PLATFORMS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.platform} — {p.surface}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-3.5 text-sm text-slate-800 whitespace-pre-wrap break-words">
          {stats.truncatedPreview || <span className="text-slate-400">Preview appears here...</span>}
        </div>
      </div>
    </div>
  );
}
