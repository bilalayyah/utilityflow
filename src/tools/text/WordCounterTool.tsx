import { Download, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

const SAMPLE_TEXT = `UtilityFlow processes every text calculation right inside your browser. Whether you are drafting a blog article, tightening a product announcement, or checking an academic essay against a strict word limit, instant counts help you pace your message clearly.

Short sentences improve scanning. Varying sentence length keeps longer guides engaging for readers across desktop and mobile screens.`;

export default function WordCounterTool() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const wordsArray = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];
    const wordCount = wordsArray.length;
    const charsWithSpaces = text.length;
    const charsWithoutSpaces = text.replace(/\s/g, '').length;
    const sentences = trimmed
      ? trimmed.split(/[.!?]+(?:\s|$)/).filter((s) => s.trim().length > 0).length
      : 0;
    const paragraphs = trimmed
      ? text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length
      : 0;
    const lines = text ? text.split(/\r?\n/).length : 0;

    // 225 wpm reading, 130 wpm speaking
    const readingSeconds = wordCount === 0 ? 0 : Math.max(1, Math.round((wordCount / 225) * 60));
    const speakingSeconds = wordCount === 0 ? 0 : Math.max(1, Math.round((wordCount / 130) * 60));

    const freqMap = new Map<string, number>();
    for (const raw of wordsArray) {
      const cleaned = raw.toLowerCase().replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, '');
      if (cleaned.length >= 2) {
        freqMap.set(cleaned, (freqMap.get(cleaned) || 0) + 1);
      }
    }

    const topKeywords = Array.from(freqMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([word, count]) => ({
        word,
        count,
        pct: wordCount > 0 ? ((count / wordCount) * 100).toFixed(1) : '0.0',
      }));

    return {
      wordCount,
      charsWithSpaces,
      charsWithoutSpaces,
      sentences,
      paragraphs,
      lines,
      readingSeconds,
      speakingSeconds,
      topKeywords,
    };
  }, [text]);

  const formatDuration = (seconds: number) => {
    if (seconds === 0) return '0s';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins === 0) return `${secs}s`;
    return secs === 0 ? `${mins}m` : `${mins}m ${secs}s`;
  };

  const handleDownload = () => {
    if (!text) return;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'word-counter-text.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Live Metrics Grid */}
      <dl className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">Words</dt>
          <dd className="mt-1 text-2xl font-bold text-indigo-600 tabular-nums">
            {stats.wordCount.toLocaleString()}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">Characters</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {stats.charsWithSpaces.toLocaleString()}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">No Spaces</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {stats.charsWithoutSpaces.toLocaleString()}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">Sentences</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {stats.sentences.toLocaleString()}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">Paragraphs</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {stats.paragraphs.toLocaleString()}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">Reading Time</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {formatDuration(stats.readingSeconds)}
          </dd>
        </div>
      </dl>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setText(SAMPLE_TEXT)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>Load sample</span>
          </button>
          <button
            type="button"
            onClick={() => setText('')}
            disabled={!text}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Clear</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDownload}
            disabled={!text}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Download .txt</span>
          </button>
          <CopyButton text={text} label="Copy text" />
        </div>
      </div>

      {/* Textarea */}
      <div>
        <label htmlFor="word-counter-input" className="sr-only">
          Text to count
        </label>
        <textarea
          id="word-counter-input"
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here to count words, characters, sentences, and reading time..."
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        />
      </div>

      {/* Secondary Stats + Top Keywords */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-2">Delivery Timing &amp; Lines</h3>
          <dl className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600">Speaking time (130 wpm)</dt>
              <dd className="font-mono font-medium text-slate-900 tabular-nums">
                {formatDuration(stats.speakingSeconds)}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Total lines</dt>
              <dd className="font-mono font-medium text-slate-900 tabular-nums">
                {stats.lines.toLocaleString()}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Average word length</dt>
              <dd className="font-mono font-medium text-slate-900 tabular-nums">
                {stats.wordCount > 0
                  ? (stats.charsWithoutSpaces / stats.wordCount).toFixed(1)
                  : '0.0'}{' '}
                chars
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-2">Most Frequent Words</h3>
          {stats.topKeywords.length > 0 ? (
            <ul className="space-y-1.5 text-sm">
              {stats.topKeywords.map((item) => (
                <li key={item.word} className="flex items-center justify-between">
                  <span className="font-mono text-slate-800">{item.word}</span>
                  <span className="font-mono text-xs text-slate-600 tabular-nums">
                    {item.count} ({item.pct}%)
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">Enter text above to inspect top repeated words.</p>
          )}
        </div>
      </div>
    </div>
  );
}
