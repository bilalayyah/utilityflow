import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    surfaces: {
      standardPost: 'Standard Post',
      profileBio: 'Profile Bio',
      caption: 'Caption',
      feedPost: 'Feed Post',
      videoCaption: 'Video Caption',
      post: 'Post',
      videoTitle: 'Video Title',
      description: 'Description',
    },
    sampleText:
      'Shipping faster starts with small daily improvements.\n\nTry our browser-based creator utilities at https://utilityflow.online/tools/ — no sign-up required.\n\n#CreatorTools #Workflow',
    labelInput: 'Social Post / Bio Draft',
    copyDraft: 'Copy Draft',
    placeholder: 'Write or paste your social caption, post, bio, or YouTube title...',
    charsLabel: 'Characters:',
    wordsLabel: 'Words:',
    hashtagsLabel: 'Hashtags:',
    mentionsLabel: 'Mentions:',
    urlsLabel: 'URLs detected:',
    urlsWeighted: '(weighted 23 chars on X)',
    overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)} over limit`,
    left: (n: number, loc: string) => `${n.toLocaleString(loc)} left`,
    foldLabel: (n: number) => `Fold ~${n} ch`,
    foldTitle: 'Feed Truncation / “See More” Fold Preview',
    foldDesc: (limit: number, platform: string, surface: string) =>
      `Preview what readers see before tapping “See more” (${limit} characters for ${platform} ${surface}).`,
    selectAria: 'Choose truncation preview platform',
    previewEmpty: 'Preview appears here...',
  },
  es: {
    surfaces: {
      standardPost: 'Publicación estándar',
      profileBio: 'Biografía del perfil',
      caption: 'Descripción',
      feedPost: 'Publicación del feed',
      videoCaption: 'Descripción del video',
      post: 'Publicación',
      videoTitle: 'Título del video',
      description: 'Descripción',
    },
    sampleText:
      'Enviar más rápido empieza con pequeñas mejoras diarias.\n\nPruebe nuestras utilidades para creadores en el navegador en https://utilityflow.online/tools/ — no necesita registrarse.\n\n#CreatorTools #Workflow',
    labelInput: 'Borrador de publicación o biografía',
    copyDraft: 'Copiar borrador',
    placeholder: 'Escriba o pegue su descripción, publicación, biografía o título de YouTube...',
    charsLabel: 'Caracteres:',
    wordsLabel: 'Palabras:',
    hashtagsLabel: 'Hashtags:',
    mentionsLabel: 'Menciones:',
    urlsLabel: 'URL detectadas:',
    urlsWeighted: '(ponderadas en 23 caracteres en X)',
    overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)} sobre el límite`,
    left: (n: number, loc: string) => `quedan ${n.toLocaleString(loc)}`,
    foldLabel: (n: number) => `Pliegue ~${n} car.`,
    foldTitle: 'Vista previa de truncamiento / pliegue de «Ver más»',
    foldDesc: (limit: number, platform: string, surface: string) =>
      `Vista previa de lo que ven los lectores antes de tocar «Ver más» (${limit} caracteres para ${platform} ${surface}).`,
    selectAria: 'Elija la plataforma para la vista previa de truncamiento',
    previewEmpty: 'La vista previa aparece aquí...',
  },
  pt: {
    surfaces: {
      standardPost: 'Publicação padrão',
      profileBio: 'Bio do perfil',
      caption: 'Legenda',
      feedPost: 'Publicação do feed',
      videoCaption: 'Legenda do vídeo',
      post: 'Publicação',
      videoTitle: 'Título do vídeo',
      description: 'Descrição',
    },
    sampleText:
      'Enviar mais rápido começa com pequenas melhorias diárias.\n\nExperimente nossas utilidades para criadores no navegador em https://utilityflow.online/tools/ — sem necessidade de cadastro.\n\n#CreatorTools #Workflow',
    labelInput: 'Rascunho de publicação ou bio',
    copyDraft: 'Copiar rascunho',
    placeholder: 'Escreva ou cole sua legenda, publicação, bio ou título do YouTube...',
    charsLabel: 'Caracteres:',
    wordsLabel: 'Palavras:',
    hashtagsLabel: 'Hashtags:',
    mentionsLabel: 'Menções:',
    urlsLabel: 'URLs detectadas:',
    urlsWeighted: '(ponderadas em 23 caracteres no X)',
    overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)} acima do limite`,
    left: (n: number, loc: string) => `${n.toLocaleString(loc)} restantes`,
    foldLabel: (n: number) => `Dobra ~${n} car.`,
    foldTitle: 'Pré-visualização de truncamento / dobra "Ver mais"',
    foldDesc: (limit: number, platform: string, surface: string) =>
      `Pré-visualização do que os leitores veem antes de tocar em "Ver mais" (${limit} caracteres para ${platform} ${surface}).`,
    selectAria: 'Escolha a plataforma para a pré-visualização de truncamento',
    previewEmpty: 'A pré-visualização aparece aqui...',
  },
  fr: {
    surfaces: {
      standardPost: 'Publication standard',
      profileBio: 'Bio du profil',
      caption: 'Légende',
      feedPost: 'Publication du fil',
      videoCaption: 'Légende de la vidéo',
      post: 'Publication',
      videoTitle: 'Titre de la vidéo',
      description: 'Description',
    },
    sampleText:
      'Expédier plus vite commence par de petites améliorations quotidiennes.\n\nEssayez nos utilitaires pour créateurs dans le navigateur sur https://utilityflow.online/tools/ — sans inscription.\n\n#CreatorTools #Workflow',
    labelInput: 'Brouillon de publication ou de bio',
    copyDraft: 'Copier le brouillon',
    placeholder: 'Rédigez ou collez votre légende, publication, bio ou titre YouTube...',
    charsLabel: 'Caractères :',
    wordsLabel: 'Mots :',
    hashtagsLabel: 'Hashtags :',
    mentionsLabel: 'Mentions :',
    urlsLabel: 'URL détectées :',
    urlsWeighted: '(pondérées à 23 caractères sur X)',
    overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)} au-dessus de la limite`,
    left: (n: number, loc: string) => `${n.toLocaleString(loc)} restants`,
    foldLabel: (n: number) => `Repli ~${n} car.`,
    foldTitle: 'Aperçu du tronquage / repli « Voir plus »',
    foldDesc: (limit: number, platform: string, surface: string) =>
      `Aperçu de ce que les lecteurs voient avant d’appuyer sur « Voir plus » (${limit} caractères pour ${platform} ${surface}).`,
    selectAria: 'Choisissez la plateforme pour l’aperçu du tronquage',
    previewEmpty: 'L’aperçu apparaît ici...',
  },
};

type SurfaceKey = keyof typeof STRINGS.en.surfaces;

interface PlatformSpec {
  id: string;
  platform: string;
  surfaceKey: SurfaceKey;
  maxChars: number;
  foldChars?: number;
  urlWeight?: number;
}

const PLATFORMS: PlatformSpec[] = [
  { id: 'x-post', platform: 'X (Twitter)', surfaceKey: 'standardPost', maxChars: 280, urlWeight: 23 },
  { id: 'x-bio', platform: 'X (Twitter)', surfaceKey: 'profileBio', maxChars: 160 },
  { id: 'ig-cap', platform: 'Instagram', surfaceKey: 'caption', maxChars: 2200, foldChars: 125 },
  { id: 'ig-bio', platform: 'Instagram', surfaceKey: 'profileBio', maxChars: 150 },
  { id: 'li-post', platform: 'LinkedIn', surfaceKey: 'feedPost', maxChars: 3000, foldChars: 210 },
  { id: 'tiktok-cap', platform: 'TikTok', surfaceKey: 'videoCaption', maxChars: 2200, foldChars: 100 },
  { id: 'threads', platform: 'Threads', surfaceKey: 'post', maxChars: 500 },
  { id: 'bluesky', platform: 'Bluesky', surfaceKey: 'post', maxChars: 300 },
  { id: 'yt-title', platform: 'YouTube', surfaceKey: 'videoTitle', maxChars: 100, foldChars: 70 },
  { id: 'yt-desc', platform: 'YouTube', surfaceKey: 'description', maxChars: 5000, foldChars: 157 },
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
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [text, setText] = useState(s.sampleText);
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
            {s.labelInput}
          </label>
          <div className="flex items-center gap-2">
            <CopyButton text={text} label={s.copyDraft} copiedLabel={t.common.copied} />
            <button
              type="button"
              onClick={() => setText('')}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              {t.common.clear}
            </button>
          </div>
        </div>
        <textarea
          id="scl-input"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={s.placeholder}
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm leading-relaxed"
        />
        <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-600 tabular-nums">
          <span>
            {s.charsLabel} <strong className="text-slate-900">{stats.rawChars}</strong>
          </span>
          <span>
            {s.wordsLabel} <strong className="text-slate-900">{stats.words}</strong>
          </span>
          <span>
            {s.hashtagsLabel} <strong className="text-slate-900">{stats.hashtags}</strong>
          </span>
          <span>
            {s.mentionsLabel} <strong className="text-slate-900">{stats.mentions}</strong>
          </span>
          <span>
            {s.urlsLabel} <strong className="text-slate-900">{stats.urls}</strong> {s.urlsWeighted}
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
                <div className="text-xs text-slate-500">{s.surfaces[spec.surfaceKey]}</div>
              </div>
              <span
                className={`font-mono text-xs font-semibold tabular-nums ${
                  over ? 'text-red-700' : 'text-slate-700'
                }`}
              >
                {used.toLocaleString(locale)} / {spec.maxChars.toLocaleString(locale)}
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
                  ? s.overLimit(Math.abs(remaining), locale)
                  : s.left(remaining, locale)}
              </span>
              {spec.foldChars && (
                <span className="text-slate-500">{s.foldLabel(spec.foldChars)}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">{s.foldTitle}</h3>
            <p className="text-xs text-slate-500">
              {s.foldDesc(stats.foldLimit, stats.activeSpec.platform, s.surfaces[stats.activeSpec.surfaceKey])}
            </p>
          </div>
          <select
            aria-label={s.selectAria}
            value={previewId}
            onChange={(e) => setPreviewId(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium"
          >
            {PLATFORMS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.platform} — {s.surfaces[p.surfaceKey]}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-3.5 text-sm text-slate-800 whitespace-pre-wrap break-words">
          {stats.truncatedPreview || <span className="text-slate-400">{s.previewEmpty}</span>}
        </div>
      </div>
    </div>
  );
}
