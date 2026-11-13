import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';

const SAMPLE_TEXT = `Clear technical writing respects the reader's time. Use concrete nouns and active verbs whenever possible so complex instructions stay easy to follow.

Long sentences packed with nested clauses force readers to re-read paragraphs. Breaking dense explanations into shorter steps makes documentation faster to scan and simpler to apply.`;

function countSyllables(word: string): number {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!cleaned) return 0;
  if (cleaned.length <= 3) return 1;

  const trimmed = cleaned
    .replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
    .replace(/^y/, '');
  const vowelGroups = trimmed.match(/[aeiouy]{1,2}/g);
  return vowelGroups ? Math.max(1, vowelGroups.length) : 1;
}

function interpretFleschEase(score: number): { level: string; audience: string } {
  if (score >= 90) return { level: 'Very Easy', audience: '5th grade (10–11 yrs)' };
  if (score >= 80) return { level: 'Easy', audience: '6th grade (11–12 yrs)' };
  if (score >= 70) return { level: 'Fairly Easy', audience: '7th grade (12–13 yrs)' };
  if (score >= 60) return { level: 'Standard', audience: '8th–9th grade (13–15 yrs)' };
  if (score >= 50) return { level: 'Fairly Difficult', audience: '10th–12th grade' };
  if (score >= 30) return { level: 'Difficult', audience: 'College level' };
  return { level: 'Very Difficult', audience: 'College graduate / specialist' };
}

export default function ReadabilityCheckerTool() {
  const [text, setText] = useState('');

  const analysis = useMemo(() => {
    const trimmed = text.trim();
    if (!trimmed) {
      return null;
    }

    const words = trimmed.match(/[a-zA-Z0-9''-]+/g) || [];
    const wordCount = words.length;
    if (wordCount === 0) return null;

    const sentences = trimmed
      .split(/[.!?]+(?:\s|$)/)
      .filter((s) => s.trim().length > 0);
    const sentenceCount = Math.max(1, sentences.length);

    let totalSyllables = 0;
    let complexWords = 0;
    const complexWordSamples: string[] = [];

    for (const rawWord of words) {
      const syl = countSyllables(rawWord);
      totalSyllables += syl;
      if (syl >= 3) {
        complexWords += 1;
        const normalized = rawWord.toLowerCase();
        if (!complexWordSamples.includes(normalized) && complexWordSamples.length < 12) {
          complexWordSamples.push(normalized);
        }
      }
    }

    const avgWordsPerSentence = wordCount / sentenceCount;
    const avgSyllablesPerWord = totalSyllables / wordCount;

    const fleschEase = Math.max(
      0,
      Math.min(100, 206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord)
    );
    const fleschKincaidGrade = Math.max(
      0,
      0.39 * avgWordsPerSentence + 11.8 * avgSyllablesPerWord - 15.59
    );
    const gunningFog = Math.max(
      0,
      0.4 * (avgWordsPerSentence + 100 * (complexWords / wordCount))
    );
    const smog =
      sentenceCount >= 3
        ? 1.043 * Math.sqrt(complexWords * (30 / sentenceCount)) + 3.1291
        : 1.043 * Math.sqrt(complexWords * 10) + 3.1291;

    const band = interpretFleschEase(fleschEase);

    return {
      wordCount,
      sentenceCount,
      totalSyllables,
      complexWords,
      avgWordsPerSentence,
      avgSyllablesPerWord,
      fleschEase,
      fleschKincaidGrade,
      gunningFog,
      smog,
      band,
      complexWordSamples,
    };
  }, [text]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
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
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Clear</span>
          </button>
        </div>

        {analysis && (
          <span className="text-xs sm:text-sm font-medium text-slate-600">
            Level: <strong className="text-slate-900">{analysis.band.level}</strong> ({analysis.band.audience})
          </span>
        )}
      </div>

      <div>
        <label htmlFor="readability-input" className="sr-only">
          Text to check readability
        </label>
        <textarea
          id="readability-input"
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your article, essay, or landing page copy to compute Flesch Reading Ease and grade-level scores..."
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        />
      </div>

      {analysis ? (
        <>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">Flesch Reading Ease</dt>
              <dd className="mt-1 text-2xl font-bold text-indigo-600 tabular-nums">
                {analysis.fleschEase.toFixed(1)}
              </dd>
              <dd className="mt-0.5 text-xs text-slate-600">{analysis.band.level}</dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">Flesch-Kincaid Grade</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
                {analysis.fleschKincaidGrade.toFixed(1)}
              </dd>
              <dd className="mt-0.5 text-xs text-slate-600">US school grade level</dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">Gunning Fog Index</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
                {analysis.gunningFog.toFixed(1)}
              </dd>
              <dd className="mt-0.5 text-xs text-slate-600">Years of education</dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">SMOG Index</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
                {analysis.smog.toFixed(1)}
              </dd>
              <dd className="mt-0.5 text-xs text-slate-600">Polysyllable complexity</dd>
            </div>
          </dl>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">Structural Breakdown</h3>
              <dl className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-600">Words / Sentences</dt>
                  <dd className="font-mono text-slate-900 tabular-nums">
                    {analysis.wordCount} / {analysis.sentenceCount}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600">Avg. sentence length</dt>
                  <dd className="font-mono text-slate-900 tabular-nums">
                    {analysis.avgWordsPerSentence.toFixed(1)} words
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600">Avg. syllables per word</dt>
                  <dd className="font-mono text-slate-900 tabular-nums">
                    {analysis.avgSyllablesPerWord.toFixed(2)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600">Complex words (3+ syllables)</dt>
                  <dd className="font-mono text-slate-900 tabular-nums">
                    {analysis.complexWords} (
                    {((analysis.complexWords / analysis.wordCount) * 100).toFixed(1)}%)
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Long Words Detected (3+ Syllables)
              </h3>
              {analysis.complexWordSamples.length > 0 ? (
                <p className="text-sm font-mono text-slate-700 leading-relaxed">
                  {analysis.complexWordSamples.join(' · ')}
                </p>
              ) : (
                <p className="text-sm text-slate-500">
                  No 3+ syllable words found in this passage.
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
          Enter at least one sentence above to view readability formulas and structural ratios.
        </div>
      )}
    </div>
  );
}
