import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    sampleText: `Clear technical writing respects the reader's time. Use concrete nouns and active verbs whenever possible so complex instructions stay easy to follow.

Long sentences packed with nested clauses force readers to re-read paragraphs. Breaking dense explanations into shorter steps makes documentation faster to scan and simpler to apply.`,
    level: 'Level:',
    textToCheck: 'Text to check readability',
    placeholder:
      'Paste your article, essay, or landing page copy to compute Flesch Reading Ease and grade-level scores...',
    fleschEase: 'Flesch Reading Ease',
    fleschKincaid: 'Flesch-Kincaid Grade',
    usGrade: 'US school grade level',
    gunningFog: 'Gunning Fog Index',
    yearsEducation: 'Years of education',
    smog: 'SMOG Index',
    polysyllable: 'Polysyllable complexity',
    structuralBreakdown: 'Structural Breakdown',
    wordsSentences: 'Words / Sentences',
    avgSentenceLength: 'Avg. sentence length',
    words: 'words',
    avgSyllablesPerWord: 'Avg. syllables per word',
    complexWords: 'Complex words (3+ syllables)',
    longWordsDetected: 'Long Words Detected (3+ Syllables)',
    noLongWords: 'No 3+ syllable words found in this passage.',
    emptyState:
      'Enter at least one sentence above to view readability formulas and structural ratios.',
    levels: [
      { level: 'Very Easy', audience: '5th grade (10–11 yrs)' },
      { level: 'Easy', audience: '6th grade (11–12 yrs)' },
      { level: 'Fairly Easy', audience: '7th grade (12–13 yrs)' },
      { level: 'Standard', audience: '8th–9th grade (13–15 yrs)' },
      { level: 'Fairly Difficult', audience: '10th–12th grade' },
      { level: 'Difficult', audience: 'College level' },
      { level: 'Very Difficult', audience: 'College graduate / specialist' },
    ],
  },
  es: {
    sampleText: `La redacción técnica clara respeta el tiempo del lector. Usa sustantivos concretos y verbos activos siempre que sea posible para que las instrucciones complejas sigan siendo fáciles de seguir.

Las oraciones largas llenas de cláusulas anidadas obligan a los lectores a releer los párrafos. Dividir las explicaciones densas en pasos más cortos hace que la documentación sea más rápida de leer y más sencilla de aplicar.`,
    level: 'Nivel:',
    textToCheck: 'Texto para comprobar la legibilidad',
    placeholder:
      'Pega tu artículo, ensayo o texto de página de destino para calcular la facilidad de lectura Flesch y las puntuaciones de nivel escolar...',
    fleschEase: 'Facilidad de lectura Flesch',
    fleschKincaid: 'Grado Flesch-Kincaid',
    usGrade: 'Nivel escolar de EE. UU.',
    gunningFog: 'Índice Gunning Fog',
    yearsEducation: 'Años de educación',
    smog: 'Índice SMOG',
    polysyllable: 'Complejidad polisilábica',
    structuralBreakdown: 'Desglose estructural',
    wordsSentences: 'Palabras / Oraciones',
    avgSentenceLength: 'Longitud promedio de oración',
    words: 'palabras',
    avgSyllablesPerWord: 'Promedio de sílabas por palabra',
    complexWords: 'Palabras complejas (3+ sílabas)',
    longWordsDetected: 'Palabras largas detectadas (3+ sílabas)',
    noLongWords: 'No se encontraron palabras de 3+ sílabas en este pasaje.',
    emptyState:
      'Escribe al menos una oración arriba para ver las fórmulas de legibilidad y las proporciones estructurales.',
    levels: [
      { level: 'Muy fácil', audience: '5.º grado (10–11 años)' },
      { level: 'Fácil', audience: '6.º grado (11–12 años)' },
      { level: 'Bastante fácil', audience: '7.º grado (12–13 años)' },
      { level: 'Estándar', audience: '8.º–9.º grado (13–15 años)' },
      { level: 'Bastante difícil', audience: '10.º–12.º grado' },
      { level: 'Difícil', audience: 'Nivel universitario' },
      { level: 'Muy difícil', audience: 'Posgrado / especialista' },
    ],
  },
  pt: {
    sampleText: `A escrita técnica clara respeita o tempo do leitor. Use substantivos concretos e verbos ativos sempre que possível para que instruções complexas continuem fáceis de seguir.

Frases longas cheias de orações aninhadas obrigam os leitores a reler parágrafos. Dividir explicações densas em passos mais curtos torna a documentação mais rápida de ler e mais simples de aplicar.`,
    level: 'Nível:',
    textToCheck: 'Texto para verificar a legibilidade',
    placeholder:
      'Cole seu artigo, ensaio ou texto de landing page para calcular a facilidade de leitura Flesch e as pontuações de nível escolar...',
    fleschEase: 'Facilidade de leitura Flesch',
    fleschKincaid: 'Nível Flesch-Kincaid',
    usGrade: 'Nível escolar dos EUA',
    gunningFog: 'Índice Gunning Fog',
    yearsEducation: 'Anos de escolaridade',
    smog: 'Índice SMOG',
    polysyllable: 'Complexidade polissilábica',
    structuralBreakdown: 'Detalhamento estrutural',
    wordsSentences: 'Palavras / Frases',
    avgSentenceLength: 'Comprimento médio da frase',
    words: 'palavras',
    avgSyllablesPerWord: 'Média de sílabas por palavra',
    complexWords: 'Palavras complexas (3+ sílabas)',
    longWordsDetected: 'Palavras longas detectadas (3+ sílabas)',
    noLongWords: 'Nenhuma palavra com 3+ sílabas encontrada nesta passagem.',
    emptyState:
      'Digite pelo menos uma frase acima para ver as fórmulas de legibilidade e as proporções estruturais.',
    levels: [
      { level: 'Muito fácil', audience: '5.º ano (10–11 anos)' },
      { level: 'Fácil', audience: '6.º ano (11–12 anos)' },
      { level: 'Bastante fácil', audience: '7.º ano (12–13 anos)' },
      { level: 'Padrão', audience: '8.º–9.º ano (13–15 anos)' },
      { level: 'Bastante difícil', audience: '10.º–12.º ano' },
      { level: 'Difícil', audience: 'Nível universitário' },
      { level: 'Muito difícil', audience: 'Pós-graduação / especialista' },
    ],
  },
  fr: {
    sampleText: `Une rédaction technique claire respecte le temps du lecteur. Utilisez des noms concrets et des verbes actifs chaque fois que possible pour que les instructions complexes restent faciles à suivre.

Les phrases longues remplies de propositions imbriquées obligent les lecteurs à relire les paragraphes. Diviser les explications denses en étapes plus courtes rend la documentation plus rapide à parcourir et plus simple à appliquer.`,
    level: 'Niveau :',
    textToCheck: 'Texte à vérifier (lisibilité)',
    placeholder:
      'Collez votre article, votre essai ou le texte de votre page d\'accueil pour calculer la facilité de lecture Flesch et les scores de niveau scolaire...',
    fleschEase: 'Facilité de lecture Flesch',
    fleschKincaid: 'Niveau Flesch-Kincaid',
    usGrade: 'Niveau scolaire américain',
    gunningFog: 'Indice Gunning Fog',
    yearsEducation: 'Années d\'études',
    smog: 'Indice SMOG',
    polysyllable: 'Complexité polysyllabique',
    structuralBreakdown: 'Répartition structurelle',
    wordsSentences: 'Mots / Phrases',
    avgSentenceLength: 'Longueur moyenne des phrases',
    words: 'mots',
    avgSyllablesPerWord: 'Moyenne de syllabes par mot',
    complexWords: 'Mots complexes (3+ syllabes)',
    longWordsDetected: 'Mots longs détectés (3+ syllabes)',
    noLongWords: 'Aucun mot de 3+ syllabes trouvé dans ce passage.',
    emptyState:
      'Saisissez au moins une phrase ci-dessus pour voir les formules de lisibilité et les ratios structurels.',
    levels: [
      { level: 'Très facile', audience: '5e année (10–11 ans)' },
      { level: 'Facile', audience: '6e année (11–12 ans)' },
      { level: 'Assez facile', audience: '7e année (12–13 ans)' },
      { level: 'Standard', audience: '8e–9e année (13–15 ans)' },
      { level: 'Assez difficile', audience: '10e–12e année' },
      { level: 'Difficile', audience: 'Niveau universitaire' },
      { level: 'Très difficile', audience: 'Diplômé universitaire / spécialiste' },
    ],
  },
};

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

function interpretFleschEase(
  score: number,
  levels: readonly { level: string; audience: string }[]
): { level: string; audience: string } {
  if (score >= 90) return levels[0];
  if (score >= 80) return levels[1];
  if (score >= 70) return levels[2];
  if (score >= 60) return levels[3];
  if (score >= 50) return levels[4];
  if (score >= 30) return levels[5];
  return levels[6];
}

export default function ReadabilityCheckerTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
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

    const band = interpretFleschEase(fleschEase, s.levels);

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
  }, [text, s.levels]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setText(s.sampleText)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.common.loadSample}</span>
          </button>
          <button
            type="button"
            onClick={() => setText('')}
            disabled={!text}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>

        {analysis && (
          <span className="text-xs sm:text-sm font-medium text-slate-600">
            {s.level} <strong className="text-slate-900">{analysis.band.level}</strong> ({analysis.band.audience})
          </span>
        )}
      </div>

      <div>
        <label htmlFor="readability-input" className="sr-only">
          {s.textToCheck}
        </label>
        <textarea
          id="readability-input"
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={s.placeholder}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        />
      </div>

      {analysis ? (
        <>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">{s.fleschEase}</dt>
              <dd className="mt-1 text-2xl font-bold text-indigo-600 tabular-nums">
                {analysis.fleschEase.toFixed(1)}
              </dd>
              <dd className="mt-0.5 text-xs text-slate-600">{analysis.band.level}</dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">{s.fleschKincaid}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
                {analysis.fleschKincaidGrade.toFixed(1)}
              </dd>
              <dd className="mt-0.5 text-xs text-slate-600">{s.usGrade}</dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">{s.gunningFog}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
                {analysis.gunningFog.toFixed(1)}
              </dd>
              <dd className="mt-0.5 text-xs text-slate-600">{s.yearsEducation}</dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs text-slate-500">{s.smog}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
                {analysis.smog.toFixed(1)}
              </dd>
              <dd className="mt-0.5 text-xs text-slate-600">{s.polysyllable}</dd>
            </div>
          </dl>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{s.structuralBreakdown}</h3>
              <dl className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-600">{s.wordsSentences}</dt>
                  <dd className="font-mono text-slate-900 tabular-nums">
                    {analysis.wordCount} / {analysis.sentenceCount}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600">{s.avgSentenceLength}</dt>
                  <dd className="font-mono text-slate-900 tabular-nums">
                    {analysis.avgWordsPerSentence.toFixed(1)} {s.words}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600">{s.avgSyllablesPerWord}</dt>
                  <dd className="font-mono text-slate-900 tabular-nums">
                    {analysis.avgSyllablesPerWord.toFixed(2)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600">{s.complexWords}</dt>
                  <dd className="font-mono text-slate-900 tabular-nums">
                    {analysis.complexWords} (
                    {((analysis.complexWords / analysis.wordCount) * 100).toFixed(1)}%)
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                {s.longWordsDetected}
              </h3>
              {analysis.complexWordSamples.length > 0 ? (
                <p className="text-sm font-mono text-slate-700 leading-relaxed">
                  {analysis.complexWordSamples.join(' · ')}
                </p>
              ) : (
                <p className="text-sm text-slate-500">
                  {s.noLongWords}
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
          {s.emptyState}
        </div>
      )}
    </div>
  );
}
