import { ArrowUpDown, Plus, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    sampleChapters: [
      { id: 1, time: '00:00', title: 'Introduction & Overview' },
      { id: 2, time: '01:15', title: 'Core Architecture Setup' },
      { id: 3, time: '04:40', title: 'Live Demo & Common Pitfalls' },
      { id: 4, time: '08:20', title: 'Summary & Next Steps' },
    ],
    newChapter: (n: number) => `Chapter ${n}`,
    defaultChapterTitle: 'Chapter',
    warnInvalid: 'One or more timestamps use invalid format (use MM:SS or HH:MM:SS).',
    warnMin3: 'YouTube requires at least 3 timestamps in ascending order to enable Video Chapters.',
    warnFirst: 'The first chapter must start at 00:00 for YouTube to recognize chapters.',
    warnOrder: 'Chapters are out of chronological order (click Sort Chronologically).',
    warnShort: (title: string) =>
      `Chapter "${title}" is under 10 seconds after the previous chapter (YouTube minimum is 10s).`,
    labelUrl: 'YouTube Video URL or Video ID (for direct `?t=` deep links)',
    heading: 'Video Chapters',
    sortBtn: 'Sort Chronologically',
    addBtn: 'Add Chapter',
    tsAria: (n: number) => `Chapter ${n} timestamp`,
    titleAria: (n: number) => `Chapter ${n} title`,
    phTitle: 'Chapter title',
    removeAria: (n: number) => `Remove chapter ${n}`,
    specTitle: 'YouTube Chapter Spec Check:',
    descBlock: 'Description Chapter Block',
    copyChapters: 'Copy Chapters',
    emptyChapters: 'Add chapters above to generate your description block.',
    shareTitle: 'Timestamped Share Links',
    videoIdLabel: (id: string) => `(Video ID: ${id})`,
    noVideoId: '(Enter valid YouTube URL above)',
    noVideoHint: 'Paste a valid youtube.com or youtu.be URL to build clickable `?t=` jump links for each chapter.',
  };

interface ChapterRow {
  id: number;
  time: string;
  title: string;
}

function parseTimestampSeconds(raw: string): number | null {
  const cleaned = raw.trim();
  const parts = cleaned.split(':');
  if (parts.length < 2 || parts.length > 3) return null;
  if (parts.some((p) => !/^\d+$/.test(p))) return null;

  if (parts.length === 2) {
    const mins = Number(parts[0]);
    const secs = Number(parts[1]);
    if (secs >= 60) return null;
    return mins * 60 + secs;
  }

  const hrs = Number(parts[0]);
  const mins = Number(parts[1]);
  const secs = Number(parts[2]);
  if (mins >= 60 || secs >= 60) return null;
  return hrs * 3600 + mins * 60 + secs;
}

function formatTimestamp(totalSeconds: number, forceHours = false): string {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  if (hrs > 0 || forceHours) {
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function extractYoutubeVideoId(rawUrl: string): string | null {
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed;
  try {
    const u = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
    if (u.hostname.includes('youtu.be')) {
      const id = u.pathname.replace(/^\/+/, '').split('/')[0];
      return id ? id : null;
    }
    const v = u.searchParams.get('v');
    if (v) return v;
    const shortsMatch = /\/(?:shorts|live|embed)\/([A-Za-z0-9_-]+)/.exec(u.pathname);
    return shortsMatch ? shortsMatch[1] : null;
  } catch {
    return null;
  }
}

export default function YoutubeTimestampGeneratorTool() {
  const { t } = useLocale();
  const s = useComponentStrings('youtube-timestamp-generator', STRINGS_EN);
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  const [chapters, setChapters] = useState<ChapterRow[]>(s.sampleChapters.map((c) => ({ ...c })));

  const videoId = useMemo(() => extractYoutubeVideoId(videoUrl), [videoUrl]);

  const analysis = useMemo(() => {
    const parsed = chapters.map((ch) => ({
      ...ch,
      seconds: parseTimestampSeconds(ch.time),
    }));

    const validParsed = parsed.filter((c) => c.seconds !== null) as (ChapterRow & { seconds: number })[];
    const maxSec = validParsed.reduce((m, c) => Math.max(m, c.seconds), 0);
    const useHours = maxSec >= 3600;

    const warnings: string[] = [];
    if (parsed.some((c) => c.seconds === null)) {
      warnings.push(s.warnInvalid);
    }
    if (validParsed.length < 3) {
      warnings.push(s.warnMin3);
    }
    if (validParsed.length > 0 && validParsed[0].seconds !== 0) {
      warnings.push(s.warnFirst);
    }

    for (let i = 1; i < validParsed.length; i += 1) {
      const diff = validParsed[i].seconds - validParsed[i - 1].seconds;
      if (diff < 0) {
        warnings.push(s.warnOrder);
        break;
      }
      if (diff < 10) {
        warnings.push(s.warnShort(validParsed[i].title || String(i + 1)));
        break;
      }
    }

    const formattedText = parsed
      .filter((c) => c.seconds !== null && c.title.trim())
      .map((c) => `${formatTimestamp(c.seconds!, useHours)} ${c.title.trim()}`)
      .join('\n');

    const shareLinks = validParsed.map((c) => ({
      id: c.id,
      timeLabel: formatTimestamp(c.seconds, useHours),
      title: c.title.trim() || s.defaultChapterTitle,
      url: videoId ? `https://youtu.be/${videoId}?t=${c.seconds}` : '',
    }));

    return { warnings, formattedText, shareLinks };
  }, [chapters, videoId, s]);

  const sortChapters = () => {
    const sorted = [...chapters].sort((a, b) => {
      const sa = parseTimestampSeconds(a.time) ?? Number.MAX_SAFE_INTEGER;
      const sb = parseTimestampSeconds(b.time) ?? Number.MAX_SAFE_INTEGER;
      return sa - sb;
    });
    setChapters(sorted);
  };

  const addChapter = () => {
    const lastValid = [...chapters].reverse().find((c) => parseTimestampSeconds(c.time) !== null);
    const nextSec = (lastValid ? parseTimestampSeconds(lastValid.time) ?? 0 : 0) + 60;
    const nextId = chapters.reduce((m, c) => Math.max(m, c.id), 0) + 1;
    setChapters([...chapters, { id: nextId, time: formatTimestamp(nextSec), title: s.newChapter(nextId) }]);
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="yt-url" className="block text-sm font-semibold text-slate-900 mb-1.5">
          {s.labelUrl}
        </label>
        <input
          id="yt-url"
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
        />
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-slate-900">{s.heading}</h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={sortChapters}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              {s.sortBtn}
            </button>
            <button
              type="button"
              onClick={addChapter}
              className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              {s.addBtn}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {chapters.map((ch, idx) => (
            <div key={ch.id} className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-4 sm:col-span-3">
                <input
                  type="text"
                  aria-label={s.tsAria(idx + 1)}
                  value={ch.time}
                  onChange={(e) =>
                    setChapters(chapters.map((row) => (row.id === ch.id ? { ...row, time: e.target.value } : row)))
                  }
                  placeholder="MM:SS"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
                />
              </div>
              <div className="col-span-6 sm:col-span-8">
                <input
                  type="text"
                  aria-label={s.titleAria(idx + 1)}
                  value={ch.title}
                  onChange={(e) =>
                    setChapters(chapters.map((row) => (row.id === ch.id ? { ...row, title: e.target.value } : row)))
                  }
                  placeholder={s.phTitle}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex justify-end">
                <button
                  type="button"
                  disabled={chapters.length <= 1}
                  onClick={() => setChapters(chapters.filter((row) => row.id !== ch.id))}
                  aria-label={s.removeAria(idx + 1)}
                  className="rounded-lg border border-slate-300 bg-white p-2 text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {analysis.warnings.length > 0 && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs sm:text-sm text-amber-900 space-y-1">
          <div className="font-semibold">{s.specTitle}</div>
          <ul className="list-disc pl-5 space-y-0.5">
            {analysis.warnings.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-slate-700">{s.descBlock}</span>
            <CopyButton text={analysis.formattedText} label={s.copyChapters} copiedLabel={t.common.copied} />
          </div>
          <pre className="rounded-lg border border-slate-200 bg-white p-3 font-mono text-xs sm:text-sm text-slate-900 whitespace-pre-wrap">
            {analysis.formattedText || s.emptyChapters}
          </pre>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5">
          <div className="text-xs font-semibold text-slate-700">
            {s.shareTitle} {videoId ? s.videoIdLabel(videoId) : s.noVideoId}
          </div>
          {videoId ? (
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {analysis.shareLinks.map((link) => (
                <div
                  key={link.id}
                  className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 truncate">
                      {link.timeLabel} — {link.title}
                    </div>
                    <div className="font-mono text-slate-500 truncate">{link.url}</div>
                  </div>
                  <CopyButton text={link.url} label={t.common.copy} copiedLabel={t.common.copied} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500">
              {s.noVideoHint}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
