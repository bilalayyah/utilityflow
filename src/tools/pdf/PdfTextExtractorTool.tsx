import { AlertCircle, Download, FileUp } from 'lucide-react';
import { useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { formatBytes, formatFriendlyPdfError, pdfjsLib, readValidatedPdfBytes } from './pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    pageMarker: (n: number) => `--- Page ${n} ---`,
    dropExtracting: 'Extracting PDF text layer...',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
    dropTitleEmpty: 'Choose a Text-Based PDF to Extract Text',
    dropSub: 'Extracts embedded Unicode text locally via PDF.js · Zero server upload',
    noTextTitle: 'No Selectable Text Layer Found:',
    noTextBody:
      'This PDF appears to contain scanned images or outlined vector paths rather than an embedded text layer. Client-side optical character recognition (OCR) is not performed offline.',
    markersLabelBefore: 'Include page header markers (',
    markersCode: '--- Page N ---',
    markersLabelAfter: ')',
    copyText: 'Copy Text',
    downloadTxt: 'Download .txt',
    outputAria: 'Extracted PDF text output',
    pagesScanned: 'Pages scanned:',
    wordsExtracted: 'Words extracted:',
    textSize: 'Text size:',
  },
  es: {
    pageMarker: (n: number) => `--- Página ${n} ---`,
    dropExtracting: 'Extrayendo la capa de texto del PDF...',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
    dropTitleEmpty: 'Elija un PDF basado en texto para extraer el texto',
    dropSub: 'Extrae el texto Unicode incrustado localmente con PDF.js · Sin subidas al servidor',
    noTextTitle: 'No se encontró una capa de texto seleccionable:',
    noTextBody:
      'Este PDF parece contener imágenes escaneadas o trazados vectoriales delineados en lugar de una capa de texto incrustada. El reconocimiento óptico de caracteres (OCR) del lado del cliente no se realiza sin conexión.',
    markersLabelBefore: 'Incluir marcadores de encabezado de página (',
    markersCode: '--- Página N ---',
    markersLabelAfter: ')',
    copyText: 'Copiar texto',
    downloadTxt: 'Descargar .txt',
    outputAria: 'Salida de texto extraído del PDF',
    pagesScanned: 'Páginas escaneadas:',
    wordsExtracted: 'Palabras extraídas:',
    textSize: 'Tamaño del texto:',
  },
  pt: {
    pageMarker: (n: number) => `--- Página ${n} ---`,
    dropExtracting: 'Extraindo a camada de texto do PDF...',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
    dropTitleEmpty: 'Escolha um PDF baseado em texto para extrair o texto',
    dropSub: 'Extrai o texto Unicode incorporado localmente via PDF.js · Zero envio ao servidor',
    noTextTitle: 'Nenhuma camada de texto selecionável encontrada:',
    noTextBody:
      'Este PDF parece conter imagens digitalizadas ou caminhos vetoriais contornados em vez de uma camada de texto incorporada. O reconhecimento óptico de caracteres (OCR) no lado do cliente não é realizado offline.',
    markersLabelBefore: 'Incluir marcadores de cabeçalho de página (',
    markersCode: '--- Página N ---',
    markersLabelAfter: ')',
    copyText: 'Copiar texto',
    downloadTxt: 'Baixar .txt',
    outputAria: 'Saída de texto extraído do PDF',
    pagesScanned: 'Páginas digitalizadas:',
    wordsExtracted: 'Palavras extraídas:',
    textSize: 'Tamanho do texto:',
  },
  fr: {
    pageMarker: (n: number) => `--- Page ${n} ---`,
    dropExtracting: 'Extraction de la couche de texte du PDF...',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
    dropTitleEmpty: 'Choisissez un PDF textuel pour extraire le texte',
    dropSub: 'Extrait le texte Unicode intégré localement via PDF.js · Aucun envoi au serveur',
    noTextTitle: 'Aucune couche de texte sélectionnable trouvée :',
    noTextBody:
      'Ce PDF semble contenir des images numérisées ou des tracés vectoriels détourés plutôt qu’une couche de texte intégrée. La reconnaissance optique de caractères (OCR) côté client n’est pas effectuée hors ligne.',
    markersLabelBefore: 'Inclure les marqueurs d’en-tête de page (',
    markersCode: '--- Page N ---',
    markersLabelAfter: ')',
    copyText: 'Copier le texte',
    downloadTxt: 'Télécharger le .txt',
    outputAria: 'Sortie de texte extrait du PDF',
    pagesScanned: 'Pages analysées :',
    wordsExtracted: 'Mots extraits :',
    textSize: 'Taille du texte :',
  },
  de: {
    pageMarker: (n: number) => `--- Seite ${n} ---`,
    dropExtracting: 'PDF-Textebene wird extrahiert...',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} Seiten)`,
    dropTitleEmpty: 'Textbasierte PDF-Datei zum Extrahieren von Text auswählen',
    dropSub: 'Extrahiert eingebetteten Unicode-Text lokal mit PDF.js · Kein Server-Upload',
    noTextTitle: 'Keine auswählbare Textebene gefunden:',
    noTextBody:
      'Diese PDF scheint gescannte Bilder oder umgewandelte Vektorpfade statt einer eingebetteten Textebene zu enthalten. Eine clientseitige optische Zeichenerkennung (OCR) wird offline nicht durchgeführt.',
    markersLabelBefore: 'Seitenkopf-Markierungen einfügen (',
    markersCode: '--- Seite N ---',
    markersLabelAfter: ')',
    copyText: 'Text kopieren',
    downloadTxt: '.txt herunterladen',
    outputAria: 'Extrahierter PDF-Text (Ausgabe)',
    pagesScanned: 'Gescannte Seiten:',
    wordsExtracted: 'Extrahierte Wörter:',
    textSize: 'Textgröße:',
  },
  it: {
    pageMarker: (n: number) => `--- Pagina ${n} ---`,
    dropExtracting: 'Estrazione del livello di testo del PDF...',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} pagine)`,
    dropTitleEmpty: 'Scegli un PDF con testo per estrarre il testo',
    dropSub: 'Estrae il testo Unicode incorporato in locale con PDF.js · Nessun caricamento sul server',
    noTextTitle: 'Nessun livello di testo selezionabile trovato:',
    noTextBody:
      'Questo PDF sembra contenere immagini acquisite o tracciati vettoriali convertiti in curve invece di un livello di testo incorporato. Il riconoscimento ottico dei caratteri (OCR) lato client non viene eseguito offline.',
    markersLabelBefore: 'Includi marcatori di intestazione pagina (',
    markersCode: '--- Pagina N ---',
    markersLabelAfter: ')',
    copyText: 'Copia testo',
    downloadTxt: 'Scarica .txt',
    outputAria: 'Output del testo PDF estratto',
    pagesScanned: 'Pagine analizzate:',
    wordsExtracted: 'Parole estratte:',
    textSize: 'Dimensione testo:',
  },
};

export default function PdfTextExtractorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [fileName, setFileName] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [extractedText, setExtractedText] = useState('');
  const [includePageMarkers, setIncludePageMarkers] = useState(true);
  const [rawPages, setRawPages] = useState<string[]>([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const [error, setError] = useState('');

  const buildOutput = (pages: string[], withMarkers: boolean) =>
    pages
      .map((content, idx) =>
        withMarkers ? `${s.pageMarker(idx + 1)}\n${content}` : content
      )
      .join('\n\n')
      .trim();

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setError('');
    setExtractedText('');
    setRawPages([]);
    setIsExtracting(true);

    try {
      const bytes = await readValidatedPdfBytes(file, locale);
      const pdf = await pdfjsLib.getDocument({ data: bytes.slice() }).promise;
      const pages: string[] = [];

      for (let i = 1; i <= pdf.numPages; i += 1) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const lineChunks: string[] = [];
        for (const item of textContent.items) {
          if ('str' in item) {
            lineChunks.push(item.str);
            if ('hasEOL' in item && item.hasEOL) {
              lineChunks.push('\n');
            } else {
              lineChunks.push(' ');
            }
          }
        }
        const cleaned = lineChunks
          .join('')
          .replace(/[ \t]+\n/g, '\n')
          .replace(/[ \t]{2,}/g, ' ')
          .trim();
        pages.push(cleaned);
      }

      setFileName(file.name);
      setPageCount(pdf.numPages);
      setRawPages(pages);
      setExtractedText(buildOutput(pages, includePageMarkers));
    } catch (err) {
      setError(formatFriendlyPdfError(err, file.name, locale));
    } finally {
      setIsExtracting(false);
    }
  };

  const toggleMarkers = (checked: boolean) => {
    setIncludePageMarkers(checked);
    setExtractedText(buildOutput(rawPages, checked));
  };

  const downloadTxt = () => {
    if (!extractedText) return;
    const blob = new Blob([extractedText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName.replace(/\.pdf$/i, '') || 'extracted'}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const totalNonMarkerChars = rawPages.join('').trim().length;
  const wordCount = extractedText.trim() ? extractedText.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-6">
      <label
        htmlFor="extract-pdf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <FileUp className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {isExtracting
            ? s.dropExtracting
            : fileName
            ? s.dropTitleFile(fileName, pageCount)
            : s.dropTitleEmpty}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.dropSub}
        </span>
        <input
          id="extract-pdf-input"
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

      {fileName && totalNonMarkerChars === 0 && !isExtracting && !error && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
          <p>
            <strong>{s.noTextTitle}</strong> {s.noTextBody}
          </p>
        </div>
      )}

      {rawPages.length > 0 && totalNonMarkerChars > 0 && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={includePageMarkers}
                onChange={(e) => toggleMarkers(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-indigo-600"
              />
              {s.markersLabelBefore}<code className="font-mono">{s.markersCode}</code>{s.markersLabelAfter}
            </label>

            <div className="flex items-center gap-2">
              <CopyButton text={extractedText} label={s.copyText} copiedLabel={t.common.copied} />
              <button
                type="button"
                onClick={downloadTxt}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                {s.downloadTxt}
              </button>
            </div>
          </div>

          <textarea
            aria-label={s.outputAria}
            rows={12}
            readOnly
            value={extractedText}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 font-mono text-xs sm:text-sm leading-relaxed text-slate-900"
          />

          <div className="flex flex-wrap gap-4 text-xs text-slate-600 tabular-nums">
            <span>{s.pagesScanned} <strong>{pageCount}</strong></span>
            <span>{s.wordsExtracted} <strong>{wordCount.toLocaleString(locale)}</strong></span>
            <span>{s.textSize} <strong>{formatBytes(new Blob([extractedText]).size, locale)}</strong></span>
          </div>
        </div>
      )}
    </div>
  );
}
