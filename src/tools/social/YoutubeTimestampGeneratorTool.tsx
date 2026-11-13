import { ArrowUpDown, Plus, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
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
  },
  es: {
    sampleChapters: [
      { id: 1, time: '00:00', title: 'Introducción y panorama general' },
      { id: 2, time: '01:15', title: 'Configuración de la arquitectura principal' },
      { id: 3, time: '04:40', title: 'Demostración en vivo y errores comunes' },
      { id: 4, time: '08:20', title: 'Resumen y próximos pasos' },
    ],
    newChapter: (n: number) => `Capítulo ${n}`,
    defaultChapterTitle: 'Capítulo',
    warnInvalid: 'Una o más marcas de tiempo usan un formato no válido (use MM:SS o HH:MM:SS).',
    warnMin3: 'YouTube requiere al menos 3 marcas de tiempo en orden ascendente para activar los capítulos de video.',
    warnFirst: 'El primer capítulo debe comenzar en 00:00 para que YouTube reconozca los capítulos.',
    warnOrder: 'Los capítulos están fuera de orden cronológico (haga clic en Ordenar cronológicamente).',
    warnShort: (title: string) =>
      `El capítulo «${title}» dura menos de 10 segundos después del capítulo anterior (el mínimo de YouTube es 10 s).`,
    labelUrl: 'URL del video de YouTube o ID del video (para enlaces directos con `?t=`)',
    heading: 'Capítulos del video',
    sortBtn: 'Ordenar cronológicamente',
    addBtn: 'Agregar capítulo',
    tsAria: (n: number) => `Marca de tiempo del capítulo ${n}`,
    titleAria: (n: number) => `Título del capítulo ${n}`,
    phTitle: 'Título del capítulo',
    removeAria: (n: number) => `Eliminar capítulo ${n}`,
    specTitle: 'Revisión de especificaciones de capítulos de YouTube:',
    descBlock: 'Bloque de capítulos para la descripción',
    copyChapters: 'Copiar capítulos',
    emptyChapters: 'Agregue capítulos arriba para generar el bloque de descripción.',
    shareTitle: 'Enlaces para compartir con marca de tiempo',
    videoIdLabel: (id: string) => `(ID del video: ${id})`,
    noVideoId: '(Ingrese una URL válida de YouTube arriba)',
    noVideoHint: 'Pegue una URL válida de youtube.com o youtu.be para crear enlaces de salto `?t=` en los que se pueda hacer clic para cada capítulo.',
  },
  pt: {
    sampleChapters: [
      { id: 1, time: '00:00', title: 'Introdução e visão geral' },
      { id: 2, time: '01:15', title: 'Configuração da arquitetura principal' },
      { id: 3, time: '04:40', title: 'Demonstração ao vivo e erros comuns' },
      { id: 4, time: '08:20', title: 'Resumo e próximos passos' },
    ],
    newChapter: (n: number) => `Capítulo ${n}`,
    defaultChapterTitle: 'Capítulo',
    warnInvalid: 'Um ou mais carimbos de data/hora usam formato inválido (use MM:SS ou HH:MM:SS).',
    warnMin3: 'O YouTube exige pelo menos 3 carimbos de data/hora em ordem crescente para ativar os capítulos de vídeo.',
    warnFirst: 'O primeiro capítulo deve começar em 00:00 para o YouTube reconhecer os capítulos.',
    warnOrder: 'Os capítulos estão fora de ordem cronológica (clique em Ordenar cronologicamente).',
    warnShort: (title: string) =>
      `O capítulo "${title}" tem menos de 10 segundos após o capítulo anterior (o mínimo do YouTube é 10 s).`,
    labelUrl: 'URL do vídeo do YouTube ou ID do vídeo (para links diretos com `?t=`)',
    heading: 'Capítulos do vídeo',
    sortBtn: 'Ordenar cronologicamente',
    addBtn: 'Adicionar capítulo',
    tsAria: (n: number) => `Carimbo de data/hora do capítulo ${n}`,
    titleAria: (n: number) => `Título do capítulo ${n}`,
    phTitle: 'Título do capítulo',
    removeAria: (n: number) => `Remover capítulo ${n}`,
    specTitle: 'Verificação de especificações de capítulos do YouTube:',
    descBlock: 'Bloco de capítulos da descrição',
    copyChapters: 'Copiar capítulos',
    emptyChapters: 'Adicione capítulos acima para gerar o bloco de descrição.',
    shareTitle: 'Links de compartilhamento com carimbo de data/hora',
    videoIdLabel: (id: string) => `(ID do vídeo: ${id})`,
    noVideoId: '(Insira uma URL válida do YouTube acima)',
    noVideoHint: 'Cole uma URL válida do youtube.com ou youtu.be para criar links de salto `?t=` clicáveis para cada capítulo.',
  },
  fr: {
    sampleChapters: [
      { id: 1, time: '00:00', title: 'Introduction et aperçu' },
      { id: 2, time: '01:15', title: 'Configuration de l’architecture principale' },
      { id: 3, time: '04:40', title: 'Démo en direct et pièges courants' },
      { id: 4, time: '08:20', title: 'Résumé et prochaines étapes' },
    ],
    newChapter: (n: number) => `Chapitre ${n}`,
    defaultChapterTitle: 'Chapitre',
    warnInvalid: 'Un ou plusieurs horodatages utilisent un format non valide (utilisez MM:SS ou HH:MM:SS).',
    warnMin3: 'YouTube exige au moins 3 horodatages par ordre croissant pour activer les chapitres vidéo.',
    warnFirst: 'Le premier chapitre doit commencer à 00:00 pour que YouTube reconnaisse les chapitres.',
    warnOrder: 'Les chapitres ne sont pas dans l’ordre chronologique (cliquez sur Trier chronologiquement).',
    warnShort: (title: string) =>
      `Le chapitre « ${title} » dure moins de 10 secondes après le chapitre précédent (le minimum YouTube est de 10 s).`,
    labelUrl: 'URL de la vidéo YouTube ou ID de la vidéo (pour les liens directs `?t=`)',
    heading: 'Chapitres de la vidéo',
    sortBtn: 'Trier chronologiquement',
    addBtn: 'Ajouter un chapitre',
    tsAria: (n: number) => `Horodatage du chapitre ${n}`,
    titleAria: (n: number) => `Titre du chapitre ${n}`,
    phTitle: 'Titre du chapitre',
    removeAria: (n: number) => `Supprimer le chapitre ${n}`,
    specTitle: 'Vérification des spécifications des chapitres YouTube :',
    descBlock: 'Bloc de chapitres de la description',
    copyChapters: 'Copier les chapitres',
    emptyChapters: 'Ajoutez des chapitres ci-dessus pour générer le bloc de description.',
    shareTitle: 'Liens de partage horodatés',
    videoIdLabel: (id: string) => `(ID de la vidéo : ${id})`,
    noVideoId: '(Saisissez une URL YouTube valide ci-dessus)',
    noVideoHint: 'Collez une URL youtube.com ou youtu.be valide pour créer des liens de saut `?t=` cliquables pour chaque chapitre.',
  },
  de: {
    sampleChapters: [
      { id: 1, time: '00:00', title: 'Einführung & Überblick' },
      { id: 2, time: '01:15', title: 'Kernarchitektur einrichten' },
      { id: 3, time: '04:40', title: 'Live-Demo & häufige Fallstricke' },
      { id: 4, time: '08:20', title: 'Zusammenfassung & nächste Schritte' },
    ],
    newChapter: (n: number) => `Kapitel ${n}`,
    defaultChapterTitle: 'Kapitel',
    warnInvalid: 'Ein oder mehrere Zeitstempel haben ein ungültiges Format (MM:SS oder HH:MM:SS verwenden).',
    warnMin3: 'YouTube benötigt mindestens 3 Zeitstempel in aufsteigender Reihenfolge, um Videokapitel zu aktivieren.',
    warnFirst: 'Das erste Kapitel muss bei 00:00 beginnen, damit YouTube Kapitel erkennt.',
    warnOrder: 'Die Kapitel sind nicht in chronologischer Reihenfolge (auf „Chronologisch sortieren“ klicken).',
    warnShort: (title: string) =>
      `Kapitel „${title}“ liegt unter 10 Sekunden nach dem vorherigen Kapitel (YouTube-Minimum sind 10 s).`,
    labelUrl: 'YouTube-Video-URL oder Video-ID (für direkte `?t=`-Deep-Links)',
    heading: 'Videokapitel',
    sortBtn: 'Chronologisch sortieren',
    addBtn: 'Kapitel hinzufügen',
    tsAria: (n: number) => `Zeitstempel von Kapitel ${n}`,
    titleAria: (n: number) => `Titel von Kapitel ${n}`,
    phTitle: 'Kapiteltitel',
    removeAria: (n: number) => `Kapitel ${n} entfernen`,
    specTitle: 'YouTube-Kapitel-Spezifikationsprüfung:',
    descBlock: 'Beschreibungs-Kapitelblock',
    copyChapters: 'Kapitel kopieren',
    emptyChapters: 'Fügen Sie oben Kapitel hinzu, um Ihren Beschreibungsblock zu erzeugen.',
    shareTitle: 'Share-Links mit Zeitstempel',
    videoIdLabel: (id: string) => `(Video-ID: ${id})`,
    noVideoId: '(Gültige YouTube-URL oben eingeben)',
    noVideoHint: 'Fügen Sie eine gültige youtube.com- oder youtu.be-URL ein, um klickbare `?t=`-Sprunglinks für jedes Kapitel zu erstellen.',
  },
  it: {
    sampleChapters: [
      { id: 1, time: '00:00', title: 'Introduzione e panoramica' },
      { id: 2, time: '01:15', title: 'Configurazione dell’architettura principale' },
      { id: 3, time: '04:40', title: 'Demo live e insidie comuni' },
      { id: 4, time: '08:20', title: 'Riepilogo e prossimi passi' },
    ],
    newChapter: (n: number) => `Capitolo ${n}`,
    defaultChapterTitle: 'Capitolo',
    warnInvalid: 'Uno o più timestamp usano un formato non valido (usa MM:SS o HH:MM:SS).',
    warnMin3: 'YouTube richiede almeno 3 timestamp in ordine crescente per attivare i capitoli video.',
    warnFirst: 'Il primo capitolo deve iniziare alle 00:00 affinché YouTube riconosca i capitoli.',
    warnOrder: 'I capitoli non sono in ordine cronologico (fai clic su Ordina cronologicamente).',
    warnShort: (title: string) =>
      `Il capitolo “${title}” dura meno di 10 secondi dopo il capitolo precedente (il minimo YouTube è 10 s).`,
    labelUrl: 'URL video YouTube o ID video (per deep link `?t=` diretti)',
    heading: 'Capitoli video',
    sortBtn: 'Ordina cronologicamente',
    addBtn: 'Aggiungi capitolo',
    tsAria: (n: number) => `Timestamp del capitolo ${n}`,
    titleAria: (n: number) => `Titolo del capitolo ${n}`,
    phTitle: 'Titolo del capitolo',
    removeAria: (n: number) => `Rimuovi capitolo ${n}`,
    specTitle: 'Verifica specifiche capitoli YouTube:',
    descBlock: 'Blocco capitoli della descrizione',
    copyChapters: 'Copia capitoli',
    emptyChapters: 'Aggiungi capitoli qui sopra per generare il blocco della descrizione.',
    shareTitle: 'Link di condivisione con timestamp',
    videoIdLabel: (id: string) => `(ID video: ${id})`,
    noVideoId: '(Inserisci un URL YouTube valido qui sopra)',
    noVideoHint: 'Incolla un URL youtube.com o youtu.be valido per creare link `?t=` cliccabili per ogni capitolo.',
  },
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
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
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
