import { ArrowDown, ArrowUp, FilePlus2, Layers, Trash2 } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import { useState } from 'react';
import { formatBytes, formatFriendlyPdfError, readValidatedPdfBytes, triggerPdfDownload } from './pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errRead: 'Unable to read selected PDF files.',
    errMin2: 'Add at least two PDF files to merge.',
    mergedSuccess: (n: number, pages: number, size: string) =>
      `Merged ${n} PDFs (${pages} pages, ${size}) cleanly.`,
    dropValidating: 'Validating PDF files...',
    dropTitle: 'Select or Drop Multiple PDF Files',
    dropSub: '100% browser-side merging via pdf-lib · Unencrypted PDFs only · Never uploaded',
    filesQueued: 'files queued',
    totalPagesLabel: 'total pages',
    combinedSize: 'combined input size',
    clearQueue: 'Clear queue',
    pageSingular: 'page',
    pagePlural: 'pages',
    moveUp: (name: string) => `Move ${name} up`,
    moveDown: (name: string) => `Move ${name} down`,
    removeFile: (name: string) => `Remove ${name}`,
    outName: 'Output Filename',
    merging: 'Merging PDFs...',
    mergeBtn: (n: number) => `Merge ${n} PDFs & Download`,
  },
  es: {
    errRead: 'No se pudieron leer los archivos PDF seleccionados.',
    errMin2: 'Agregue al menos dos archivos PDF para combinar.',
    mergedSuccess: (n: number, pages: number, size: string) =>
      `Se combinaron ${n} PDF (${pages} páginas, ${size}) correctamente.`,
    dropValidating: 'Validando archivos PDF...',
    dropTitle: 'Seleccione o suelte varios archivos PDF',
    dropSub: 'Combinación 100% en el navegador con pdf-lib · Solo PDF sin cifrar · Nunca se suben',
    filesQueued: 'archivos en cola',
    totalPagesLabel: 'páginas en total',
    combinedSize: 'tamaño de entrada combinado',
    clearQueue: 'Limpiar cola',
    pageSingular: 'página',
    pagePlural: 'páginas',
    moveUp: (name: string) => `Mover ${name} hacia arriba`,
    moveDown: (name: string) => `Mover ${name} hacia abajo`,
    removeFile: (name: string) => `Eliminar ${name}`,
    outName: 'Nombre del archivo de salida',
    merging: 'Combinando PDF...',
    mergeBtn: (n: number) => `Combinar ${n} PDF y descargar`,
  },
  pt: {
    errRead: 'Não foi possível ler os arquivos PDF selecionados.',
    errMin2: 'Adicione pelo menos dois arquivos PDF para mesclar.',
    mergedSuccess: (n: number, pages: number, size: string) =>
      `${n} PDFs mesclados (${pages} páginas, ${size}) com sucesso.`,
    dropValidating: 'Validando arquivos PDF...',
    dropTitle: 'Selecione ou solte vários arquivos PDF',
    dropSub: 'Mesclagem 100% no navegador via pdf-lib · Somente PDFs sem criptografia · Nunca enviados',
    filesQueued: 'arquivos na fila',
    totalPagesLabel: 'páginas no total',
    combinedSize: 'tamanho de entrada combinado',
    clearQueue: 'Limpar fila',
    pageSingular: 'página',
    pagePlural: 'páginas',
    moveUp: (name: string) => `Mover ${name} para cima`,
    moveDown: (name: string) => `Mover ${name} para baixo`,
    removeFile: (name: string) => `Remover ${name}`,
    outName: 'Nome do arquivo de saída',
    merging: 'Mesclando PDFs...',
    mergeBtn: (n: number) => `Mesclar ${n} PDFs e baixar`,
  },
  fr: {
    errRead: 'Impossible de lire les fichiers PDF sélectionnés.',
    errMin2: 'Ajoutez au moins deux fichiers PDF à fusionner.',
    mergedSuccess: (n: number, pages: number, size: string) =>
      `${n} PDF fusionnés (${pages} pages, ${size}) avec succès.`,
    dropValidating: 'Validation des fichiers PDF...',
    dropTitle: 'Sélectionnez ou déposez plusieurs fichiers PDF',
    dropSub: 'Fusion 100 % dans le navigateur via pdf-lib · PDF non chiffrés uniquement · Jamais téléversés',
    filesQueued: 'fichiers en file d’attente',
    totalPagesLabel: 'pages au total',
    combinedSize: 'taille d’entrée combinée',
    clearQueue: 'Vider la file',
    pageSingular: 'page',
    pagePlural: 'pages',
    moveUp: (name: string) => `Déplacer ${name} vers le haut`,
    moveDown: (name: string) => `Déplacer ${name} vers le bas`,
    removeFile: (name: string) => `Supprimer ${name}`,
    outName: 'Nom du fichier de sortie',
    merging: 'Fusion des PDF...',
    mergeBtn: (n: number) => `Fusionner ${n} PDF et télécharger`,
  },
  de: {
    errRead: 'Die ausgewählten PDF-Dateien konnten nicht gelesen werden.',
    errMin2: 'Fügen Sie zum Zusammenführen mindestens zwei PDF-Dateien hinzu.',
    mergedSuccess: (n: number, pages: number, size: string) =>
      `${n} PDFs zusammengeführt (${pages} Seiten, ${size}).`,
    dropValidating: 'PDF-Dateien werden geprüft...',
    dropTitle: 'Mehrere PDF-Dateien auswählen oder ablegen',
    dropSub: '100 % browserbasiertes Zusammenführen mit pdf-lib · Nur unverschlüsselte PDFs · Kein Upload',
    filesQueued: 'Dateien in der Warteschlange',
    totalPagesLabel: 'Seiten gesamt',
    combinedSize: 'Gesamtgröße der Eingaben',
    clearQueue: 'Warteschlange leeren',
    pageSingular: 'Seite',
    pagePlural: 'Seiten',
    moveUp: (name: string) => `${name} nach oben verschieben`,
    moveDown: (name: string) => `${name} nach unten verschieben`,
    removeFile: (name: string) => `${name} entfernen`,
    outName: 'Dateiname der Ausgabe',
    merging: 'PDFs werden zusammengeführt...',
    mergeBtn: (n: number) => `${n} PDFs zusammenführen & herunterladen`,
  },
  it: {
    errRead: 'Impossibile leggere i file PDF selezionati.',
    errMin2: 'Aggiungi almeno due file PDF da unire.',
    mergedSuccess: (n: number, pages: number, size: string) =>
      `${n} PDF uniti (${pages} pagine, ${size}).`,
    dropValidating: 'Verifica dei file PDF...',
    dropTitle: 'Seleziona o trascina più file PDF',
    dropSub: 'Unione 100% nel browser con pdf-lib · Solo PDF non crittografati · Nessun caricamento',
    filesQueued: 'file in coda',
    totalPagesLabel: 'pagine totali',
    combinedSize: 'dimensione totale di input',
    clearQueue: 'Svuota coda',
    pageSingular: 'pagina',
    pagePlural: 'pagine',
    moveUp: (name: string) => `Sposta ${name} in alto`,
    moveDown: (name: string) => `Sposta ${name} in basso`,
    removeFile: (name: string) => `Rimuovi ${name}`,
    outName: 'Nome file di output',
    merging: 'Unione dei PDF...',
    mergeBtn: (n: number) => `Unisci ${n} PDF e scarica`,
  },
};

interface QueuedPdf {
  id: number;
  name: string;
  sizeBytes: number;
  pageCount: number;
  bytes: Uint8Array;
}

export default function MergePdfTool() {
  const { locale } = useLocale();
  const s = STRINGS[locale];
  const [files, setFiles] = useState<QueuedPdf[]>([]);
  const [outputName, setOutputName] = useState('merged-document.pdf');
  const [isLoading, setIsLoading] = useState(false);
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleFilesSelected = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    setError('');
    setStatusMessage('');
    setIsLoading(true);

    try {
      const additions: QueuedPdf[] = [];
      let nextId = files.reduce((max, f) => Math.max(max, f.id), 0) + 1;

      for (const file of Array.from(fileList)) {
        try {
          const bytes = await readValidatedPdfBytes(file, locale);
          const doc = await PDFDocument.load(bytes);
          additions.push({
            id: nextId++,
            name: file.name,
            sizeBytes: file.size,
            pageCount: doc.getPageCount(),
            bytes,
          });
        } catch (err) {
          throw new Error(formatFriendlyPdfError(err, file.name, locale));
        }
      }

      setFiles((prev) => [...prev, ...additions]);
    } catch (err) {
      setError(err instanceof Error ? err.message : s.errRead);
    } finally {
      setIsLoading(false);
    }
  };

  const moveItem = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= files.length) return;
    const copy = [...files];
    const [item] = copy.splice(index, 1);
    copy.splice(target, 0, item);
    setFiles(copy);
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError(s.errMin2);
      return;
    }
    setError('');
    setStatusMessage('');
    setIsMerging(true);

    try {
      const merged = await PDFDocument.create();
      for (const item of files) {
        const srcDoc = await PDFDocument.load(item.bytes);
        const copiedPages = await merged.copyPages(srcDoc, srcDoc.getPageIndices());
        copiedPages.forEach((p) => merged.addPage(p));
      }
      const mergedBytes = await merged.save();
      triggerPdfDownload(mergedBytes, outputName.trim() || 'merged-document.pdf');
      setStatusMessage(
        s.mergedSuccess(files.length, merged.getPageCount(), formatBytes(mergedBytes.byteLength, locale))
      );
    } catch (err) {
      setError(formatFriendlyPdfError(err, undefined, locale));
    } finally {
      setIsMerging(false);
    }
  };

  const totalPages = files.reduce((sum, f) => sum + f.pageCount, 0);
  const totalSize = files.reduce((sum, f) => sum + f.sizeBytes, 0);

  return (
    <div className="space-y-6">
      <label
        htmlFor="merge-pdf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <FilePlus2 className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {isLoading ? s.dropValidating : s.dropTitle}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.dropSub}
        </span>
        <input
          id="merge-pdf-input"
          type="file"
          accept="application/pdf,.pdf"
          multiple
          onChange={(e) => {
            void handleFilesSelected(e.target.files);
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

      {files.length > 0 && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 tabular-nums">
            <div>
              <strong>{files.length}</strong> {s.filesQueued} · <strong>{totalPages}</strong> {s.totalPagesLabel} ·{' '}
              <strong>{formatBytes(totalSize, locale)}</strong> {s.combinedSize}
            </div>
            <button
              type="button"
              onClick={() => {
                setFiles([]);
                setStatusMessage('');
              }}
              className="text-red-700 hover:text-red-900 font-medium cursor-pointer"
            >
              {s.clearQueue}
            </button>
          </div>

          <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {files.map((item, idx) => (
              <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900 truncate">
                    {idx + 1}. {item.name}
                  </div>
                  <div className="text-xs text-slate-500 font-mono tabular-nums">
                    {item.pageCount} {item.pageCount === 1 ? s.pageSingular : s.pagePlural} · {formatBytes(item.sizeBytes, locale)}
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    disabled={idx === 0}
                    onClick={() => moveItem(idx, -1)}
                    aria-label={s.moveUp(item.name)}
                    className="rounded-md border border-slate-300 bg-white p-1.5 text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    disabled={idx === files.length - 1}
                    onClick={() => moveItem(idx, 1)}
                    aria-label={s.moveDown(item.name)}
                    className="rounded-md border border-slate-300 bg-white p-1.5 text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setFiles(files.filter((f) => f.id !== item.id))}
                    aria-label={s.removeFile(item.name)}
                    className="rounded-md border border-slate-300 bg-white p-1.5 text-red-600 hover:bg-red-50 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-end justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex-1 max-w-sm">
              <label htmlFor="merge-outname" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.outName}
              </label>
              <input
                id="merge-outname"
                type="text"
                value={outputName}
                onChange={(e) => setOutputName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
              />
            </div>

            <button
              type="button"
              disabled={isMerging || files.length < 2}
              onClick={() => void handleMerge()}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              {isMerging ? s.merging : s.mergeBtn(files.length)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
