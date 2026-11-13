import { ArrowDown, ArrowUp, CopyPlus, FileDown, FileUp, Trash2 } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import { useState } from 'react';
import { formatBytes, formatFriendlyPdfError, pdfjsLib, readValidatedPdfBytes, triggerPdfDownload } from './pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errMin1: 'A PDF must retain at least 1 page.',
    savedSuccess: (n: number, size: string) => `Saved updated PDF with ${n} pages (${size}).`,
    loading: 'Loading PDF pages & previews...',
    dropTitleFile: (name: string, n: number) => `${name} (${n} pages active)`,
    dropTitleEmpty: 'Choose a PDF File to Reorder or Delete Pages',
    dropSub: 'Move pages, duplicate sheets, or remove unwanted pages locally',
    outCount: 'Output page count:',
    saving: 'Saving PDF...',
    saveBtn: 'Save Reordered PDF',
    thumbAlt: (n: number) => `Original page ${n}`,
    thumbFallback: (n: number) => `Orig p.${n}`,
    posLabel: (n: number) => `Pos #${n}`,
    origLabel: (n: number) => `(Orig ${n})`,
    moveEarlierTitle: 'Move earlier',
    moveEarlierAria: (n: number) => `Move position ${n} earlier`,
    moveLaterTitle: 'Move later',
    moveLaterAria: (n: number) => `Move position ${n} later`,
    dupTitle: 'Duplicate page',
    dupAria: (n: number) => `Duplicate page at position ${n}`,
    delTitle: 'Delete page',
    delAria: (n: number) => `Delete page at position ${n}`,
  },
  es: {
    errMin1: 'Un PDF debe conservar al menos 1 página.',
    savedSuccess: (n: number, size: string) => `Se guardó el PDF actualizado con ${n} páginas (${size}).`,
    loading: 'Cargando páginas y vistas previas del PDF...',
    dropTitleFile: (name: string, n: number) => `${name} (${n} páginas activas)`,
    dropTitleEmpty: 'Elija un archivo PDF para reordenar o eliminar páginas',
    dropSub: 'Mueva páginas, duplique hojas o elimine páginas no deseadas localmente',
    outCount: 'Cantidad de páginas de salida:',
    saving: 'Guardando PDF...',
    saveBtn: 'Guardar PDF reordenado',
    thumbAlt: (n: number) => `Página original ${n}`,
    thumbFallback: (n: number) => `Pág. orig. ${n}`,
    posLabel: (n: number) => `Pos. n.º ${n}`,
    origLabel: (n: number) => `(Orig. ${n})`,
    moveEarlierTitle: 'Mover antes',
    moveEarlierAria: (n: number) => `Mover la posición ${n} antes`,
    moveLaterTitle: 'Mover después',
    moveLaterAria: (n: number) => `Mover la posición ${n} después`,
    dupTitle: 'Duplicar página',
    dupAria: (n: number) => `Duplicar la página en la posición ${n}`,
    delTitle: 'Eliminar página',
    delAria: (n: number) => `Eliminar la página en la posición ${n}`,
  },
  pt: {
    errMin1: 'Um PDF deve manter pelo menos 1 página.',
    savedSuccess: (n: number, size: string) => `PDF atualizado salvo com ${n} páginas (${size}).`,
    loading: 'Carregando páginas e pré-visualizações do PDF...',
    dropTitleFile: (name: string, n: number) => `${name} (${n} páginas ativas)`,
    dropTitleEmpty: 'Escolha um arquivo PDF para reordenar ou excluir páginas',
    dropSub: 'Mova páginas, duplique folhas ou remova páginas indesejadas localmente',
    outCount: 'Contagem de páginas de saída:',
    saving: 'Salvando PDF...',
    saveBtn: 'Salvar PDF reordenado',
    thumbAlt: (n: number) => `Página original ${n}`,
    thumbFallback: (n: number) => `Pág. orig. ${n}`,
    posLabel: (n: number) => `Pos. n.º ${n}`,
    origLabel: (n: number) => `(Orig. ${n})`,
    moveEarlierTitle: 'Mover para antes',
    moveEarlierAria: (n: number) => `Mover a posição ${n} para antes`,
    moveLaterTitle: 'Mover para depois',
    moveLaterAria: (n: number) => `Mover a posição ${n} para depois`,
    dupTitle: 'Duplicar página',
    dupAria: (n: number) => `Duplicar a página na posição ${n}`,
    delTitle: 'Excluir página',
    delAria: (n: number) => `Excluir a página na posição ${n}`,
  },
  fr: {
    errMin1: 'Un PDF doit conserver au moins 1 page.',
    savedSuccess: (n: number, size: string) => `PDF mis à jour enregistré avec ${n} pages (${size}).`,
    loading: 'Chargement des pages et des aperçus du PDF...',
    dropTitleFile: (name: string, n: number) => `${name} (${n} pages actives)`,
    dropTitleEmpty: 'Choisissez un fichier PDF pour réorganiser ou supprimer des pages',
    dropSub: 'Déplacez des pages, dupliquez des feuilles ou supprimez les pages indésirables localement',
    outCount: 'Nombre de pages de sortie :',
    saving: 'Enregistrement du PDF...',
    saveBtn: 'Enregistrer le PDF réorganisé',
    thumbAlt: (n: number) => `Page d’origine ${n}`,
    thumbFallback: (n: number) => `P. orig. ${n}`,
    posLabel: (n: number) => `Pos. n° ${n}`,
    origLabel: (n: number) => `(Orig. ${n})`,
    moveEarlierTitle: 'Déplacer plus tôt',
    moveEarlierAria: (n: number) => `Déplacer la position ${n} plus tôt`,
    moveLaterTitle: 'Déplacer plus tard',
    moveLaterAria: (n: number) => `Déplacer la position ${n} plus tard`,
    dupTitle: 'Dupliquer la page',
    dupAria: (n: number) => `Dupliquer la page à la position ${n}`,
    delTitle: 'Supprimer la page',
    delAria: (n: number) => `Supprimer la page à la position ${n}`,
  },
  de: {
    errMin1: 'Ein PDF muss mindestens 1 Seite behalten.',
    savedSuccess: (n: number, size: string) => `Aktualisiertes PDF mit ${n} Seiten gespeichert (${size}).`,
    loading: 'PDF-Seiten & Vorschauen werden geladen...',
    dropTitleFile: (name: string, n: number) => `${name} (${n} Seiten aktiv)`,
    dropTitleEmpty: 'PDF-Datei zum Neuordnen oder Löschen von Seiten auswählen',
    dropSub: 'Seiten lokal verschieben, duplizieren oder unerwünschte Seiten entfernen',
    outCount: 'Seitenzahl der Ausgabe:',
    saving: 'PDF wird gespeichert...',
    saveBtn: 'Neu geordnetes PDF speichern',
    thumbAlt: (n: number) => `Originalseite ${n}`,
    thumbFallback: (n: number) => `Orig. S. ${n}`,
    posLabel: (n: number) => `Pos. #${n}`,
    origLabel: (n: number) => `(Orig. ${n})`,
    moveEarlierTitle: 'Früher verschieben',
    moveEarlierAria: (n: number) => `Position ${n} früher verschieben`,
    moveLaterTitle: 'Später verschieben',
    moveLaterAria: (n: number) => `Position ${n} später verschieben`,
    dupTitle: 'Seite duplizieren',
    dupAria: (n: number) => `Seite an Position ${n} duplizieren`,
    delTitle: 'Seite löschen',
    delAria: (n: number) => `Seite an Position ${n} löschen`,
  },
  it: {
    errMin1: 'Un PDF deve conservare almeno 1 pagina.',
    savedSuccess: (n: number, size: string) => `PDF aggiornato con ${n} pagine salvato (${size}).`,
    loading: 'Caricamento delle pagine e delle anteprime del PDF...',
    dropTitleFile: (name: string, n: number) => `${name} (${n} pagine attive)`,
    dropTitleEmpty: 'Scegli un file PDF per riordinare o eliminare pagine',
    dropSub: 'Sposta, duplica o rimuovi pagine indesiderate in locale',
    outCount: 'Numero di pagine in output:',
    saving: 'Salvataggio del PDF...',
    saveBtn: 'Salva PDF riordinato',
    thumbAlt: (n: number) => `Pagina originale ${n}`,
    thumbFallback: (n: number) => `Orig. p. ${n}`,
    posLabel: (n: number) => `Pos. #${n}`,
    origLabel: (n: number) => `(Orig. ${n})`,
    moveEarlierTitle: 'Sposta prima',
    moveEarlierAria: (n: number) => `Sposta la posizione ${n} prima`,
    moveLaterTitle: 'Sposta dopo',
    moveLaterAria: (n: number) => `Sposta la posizione ${n} dopo`,
    dupTitle: 'Duplica pagina',
    dupAria: (n: number) => `Duplica la pagina alla posizione ${n}`,
    delTitle: 'Elimina pagina',
    delAria: (n: number) => `Elimina la pagina alla posizione ${n}`,
  },
};

interface PageItem {
  id: number;
  originalIndex: number;
  widthPt: number;
  heightPt: number;
  thumbUrl?: string;
}

export default function ReorderDeletePdfPagesTool() {
  const { locale } = useLocale();
  const s = STRINGS[locale];
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [fileName, setFileName] = useState('');
  const [pages, setPages] = useState<PageItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setError('');
    setStatusMessage('');
    setIsLoading(true);

    try {
      const bytes = await readValidatedPdfBytes(file, locale);
      const libDoc = await PDFDocument.load(bytes);
      const rawPages = libDoc.getPages();

      // Render crisp small thumbnails via pdfjs-dist up to 30 pages
      const thumbMap = new Map<number, string>();
      try {
        const jsDoc = await pdfjsLib.getDocument({ data: bytes.slice() }).promise;
        const limit = Math.min(rawPages.length, 30);
        for (let i = 0; i < limit; i += 1) {
          const p = await jsDoc.getPage(i + 1);
          const vp = p.getViewport({ scale: 0.35 });
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.floor(vp.width));
          canvas.height = Math.max(1, Math.floor(vp.height));
          const ctx = canvas.getContext('2d');
          if (ctx) {
            await p.render({ canvasContext: ctx, viewport: vp, canvas }).promise;
            thumbMap.set(i, canvas.toDataURL('image/jpeg', 0.8));
          }
        }
      } catch {
        // Thumbnails are progressive enhancement; page cards still work if worker fails
      }

      setPdfBytes(bytes);
      setFileName(file.name);
      setPages(
        rawPages.map((p, idx) => {
          const { width, height } = p.getSize();
          return {
            id: idx + 1,
            originalIndex: idx,
            widthPt: Math.round(width),
            heightPt: Math.round(height),
            thumbUrl: thumbMap.get(idx),
          };
        })
      );
    } catch (err) {
      setPdfBytes(null);
      setPages([]);
      setError(formatFriendlyPdfError(err, file.name, locale));
    } finally {
      setIsLoading(false);
    }
  };

  const movePage = (index: number, delta: -1 | 1) => {
    const target = index + delta;
    if (target < 0 || target >= pages.length) return;
    const copy = [...pages];
    const [item] = copy.splice(index, 1);
    copy.splice(target, 0, item);
    setPages(copy);
  };

  const duplicatePage = (index: number) => {
    const nextId = pages.reduce((m, p) => Math.max(m, p.id), 0) + 1;
    const copy = [...pages];
    copy.splice(index + 1, 0, { ...copy[index], id: nextId });
    setPages(copy);
  };

  const deletePage = (id: number) => {
    if (pages.length <= 1) {
      setError(s.errMin1);
      return;
    }
    setError('');
    setPages(pages.filter((p) => p.id !== id));
  };

  const handleSave = async () => {
    if (!pdfBytes || pages.length === 0) return;
    setError('');
    setStatusMessage('');
    setIsSaving(true);

    try {
      const srcDoc = await PDFDocument.load(pdfBytes);
      const outDoc = await PDFDocument.create();
      const copied = await outDoc.copyPages(
        srcDoc,
        pages.map((p) => p.originalIndex)
      );
      copied.forEach((p) => outDoc.addPage(p));
      const outBytes = await outDoc.save();
      const baseName = fileName.replace(/\.pdf$/i, '') || 'document';
      triggerPdfDownload(outBytes, `${baseName}-reordered.pdf`);
      setStatusMessage(
        s.savedSuccess(pages.length, formatBytes(outBytes.byteLength, locale))
      );
    } catch (err) {
      setError(formatFriendlyPdfError(err, fileName, locale));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <label
        htmlFor="reorder-pdf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <FileUp className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {isLoading
            ? s.loading
            : fileName
            ? s.dropTitleFile(fileName, pages.length)
            : s.dropTitleEmpty}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.dropSub}
        </span>
        <input
          id="reorder-pdf-input"
          type="file"
          accept="application/pdf,.pdf"
          onChange={(e) => {
            void handleFile(e.target.files?.[0]);
            e.target.value = '';
          }}
          className="sr-only"
        />
      </label>

      {error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {statusMessage && (
        <div role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {statusMessage}
        </div>
      )}

      {pages.length > 0 && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-600 tabular-nums">
              {s.outCount} <strong className="text-slate-900">{pages.length}</strong>
            </div>
            <button
              type="button"
              disabled={isSaving}
              onClick={() => void handleSave()}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              {isSaving ? s.saving : s.saveBtn}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {pages.map((page, idx) => (
              <div
                key={page.id}
                className="rounded-xl border border-slate-200 bg-white p-2.5 flex flex-col justify-between gap-2"
              >
                <div className="aspect-[3/4] rounded-md border border-slate-100 bg-slate-50 overflow-hidden flex items-center justify-center">
                  {page.thumbUrl ? (
                    <img
                      src={page.thumbUrl}
                      alt={s.thumbAlt(page.originalIndex + 1)}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="font-mono text-xs text-slate-500">
                      {s.thumbFallback(page.originalIndex + 1)}
                    </span>
                  )}
                </div>

                <div className="text-xs">
                  <div className="font-semibold text-slate-900 tabular-nums">
                    {s.posLabel(idx + 1)}{' '}
                    <span className="font-normal text-slate-500">{s.origLabel(page.originalIndex + 1)}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono tabular-nums">
                    {page.widthPt}×{page.heightPt} pt
                  </div>
                </div>

                <div className="flex items-center justify-between gap-1 pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => movePage(idx, -1)}
                      title={s.moveEarlierTitle}
                      aria-label={s.moveEarlierAria(idx + 1)}
                      className="rounded border border-slate-200 p-1 text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      disabled={idx === pages.length - 1}
                      onClick={() => movePage(idx, 1)}
                      title={s.moveLaterTitle}
                      aria-label={s.moveLaterAria(idx + 1)}
                      className="rounded border border-slate-200 p-1 text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => duplicatePage(idx)}
                      title={s.dupTitle}
                      aria-label={s.dupAria(idx + 1)}
                      className="rounded border border-slate-200 p-1 text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      <CopyPlus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => deletePage(page.id)}
                    title={s.delTitle}
                    aria-label={s.delAria(idx + 1)}
                    className="rounded border border-slate-200 p-1 text-red-600 hover:bg-red-50 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
