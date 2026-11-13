import { FileUp, Stamp } from 'lucide-react';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { useState } from 'react';
import { formatBytes, formatFriendlyPdfError, readValidatedPdfBytes, triggerPdfDownload } from './pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    colorLabels: {
      slate: 'Neutral Gray',
      indigo: 'Brand Indigo',
      red: 'Stamp Red',
    },
    defaultWatermark: 'CONFIDENTIAL',
    errEmpty: 'Enter watermark text before generating the PDF.',
    appliedSuccess: (text: string, n: number, size: string) =>
      `Applied "${text}" watermark to ${n} page(s) (${size}).`,
    dropTitleEmpty: 'Choose a PDF File to Watermark',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
    dropSub: 'Embeds crisp vector text stamps locally via pdf-lib',
    labelText: 'Watermark Text',
    phText: 'CONFIDENTIAL / DRAFT / INTERNAL USE',
    labelColor: 'Stamp Color',
    firstPageOnly: 'First page only',
    labelSize: 'Font Size:',
    ptSuffix: (n: number) => `${n} pt`,
    labelOpacity: 'Opacity:',
    labelAngle: 'Rotation:',
    applying: 'Watermarking PDF...',
    applyBtn: 'Apply Watermark & Download',
  },
  es: {
    colorLabels: {
      slate: 'Gris neutro',
      indigo: 'Índigo de marca',
      red: 'Rojo de sello',
    },
    defaultWatermark: 'CONFIDENCIAL',
    errEmpty: 'Ingrese el texto de la marca de agua antes de generar el PDF.',
    appliedSuccess: (text: string, n: number, size: string) =>
      `Se aplicó la marca de agua «${text}» a ${n} página(s) (${size}).`,
    dropTitleEmpty: 'Elija un archivo PDF para ponerle marca de agua',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
    dropSub: 'Incrusta sellos de texto vectoriales nítidos localmente con pdf-lib',
    labelText: 'Texto de la marca de agua',
    phText: 'CONFIDENCIAL / BORRADOR / USO INTERNO',
    labelColor: 'Color del sello',
    firstPageOnly: 'Solo la primera página',
    labelSize: 'Tamaño de fuente:',
    ptSuffix: (n: number) => `${n} pt`,
    labelOpacity: 'Opacidad:',
    labelAngle: 'Rotación:',
    applying: 'Aplicando marca de agua al PDF...',
    applyBtn: 'Aplicar marca de agua y descargar',
  },
  pt: {
    colorLabels: {
      slate: 'Cinza neutro',
      indigo: 'Índigo da marca',
      red: 'Vermelho de carimbo',
    },
    defaultWatermark: 'CONFIDENCIAL',
    errEmpty: 'Insira o texto da marca d’água antes de gerar o PDF.',
    appliedSuccess: (text: string, n: number, size: string) =>
      `Marca d’água "${text}" aplicada a ${n} página(s) (${size}).`,
    dropTitleEmpty: 'Escolha um arquivo PDF para colocar marca d’água',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
    dropSub: 'Incorpora carimbos de texto vetoriais nítidos localmente via pdf-lib',
    labelText: 'Texto da marca d’água',
    phText: 'CONFIDENCIAL / RASCUNHO / USO INTERNO',
    labelColor: 'Cor do carimbo',
    firstPageOnly: 'Somente a primeira página',
    labelSize: 'Tamanho da fonte:',
    ptSuffix: (n: number) => `${n} pt`,
    labelOpacity: 'Opacidade:',
    labelAngle: 'Rotação:',
    applying: 'Aplicando marca d’água ao PDF...',
    applyBtn: 'Aplicar marca d’água e baixar',
  },
  fr: {
    colorLabels: {
      slate: 'Gris neutre',
      indigo: 'Indigo de marque',
      red: 'Rouge tampon',
    },
    defaultWatermark: 'CONFIDENTIEL',
    errEmpty: 'Saisissez le texte du filigrane avant de générer le PDF.',
    appliedSuccess: (text: string, n: number, size: string) =>
      `Filigrane « ${text} » appliqué à ${n} page(s) (${size}).`,
    dropTitleEmpty: 'Choisissez un fichier PDF à filigraner',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
    dropSub: 'Intègre des tampons de texte vectoriels nets localement via pdf-lib',
    labelText: 'Texte du filigrane',
    phText: 'CONFIDENTIEL / BROUILLON / USAGE INTERNE',
    labelColor: 'Couleur du tampon',
    firstPageOnly: 'Première page uniquement',
    labelSize: 'Taille de police :',
    ptSuffix: (n: number) => `${n} pt`,
    labelOpacity: 'Opacité :',
    labelAngle: 'Rotation :',
    applying: 'Application du filigrane au PDF...',
    applyBtn: 'Appliquer le filigrane et télécharger',
  },
  de: {
    colorLabels: {
      slate: 'Neutrales Grau',
      indigo: 'Marken-Indigo',
      red: 'Stempelrot',
    },
    defaultWatermark: 'CONFIDENTIAL',
    errEmpty: 'Geben Sie zuerst einen Wasserzeichen-Text ein, bevor Sie das PDF erstellen.',
    appliedSuccess: (text: string, n: number, size: string) =>
      `Wasserzeichen "${text}" auf ${n} Seite(n) angewendet (${size}).`,
    dropTitleEmpty: 'PDF-Datei zum Hinzufügen eines Wasserzeichens auswählen',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} Seiten)`,
    dropSub: 'Bettet gestochen scharfe Vektor-Textstempel lokal mit pdf-lib ein',
    labelText: 'Wasserzeichen-Text',
    phText: 'VERTRAULICH / ENTWURF / NUR INTERN',
    labelColor: 'Stempelfarbe',
    firstPageOnly: 'Nur erste Seite',
    labelSize: 'Schriftgröße:',
    ptSuffix: (n: number) => `${n} pt`,
    labelOpacity: 'Deckkraft:',
    labelAngle: 'Drehung:',
    applying: 'Wasserzeichen wird hinzugefügt...',
    applyBtn: 'Wasserzeichen anwenden & herunterladen',
  },
  it: {
    colorLabels: {
      slate: 'Grigio neutro',
      indigo: 'Indaco del marchio',
      red: 'Rosso timbro',
    },
    defaultWatermark: 'CONFIDENTIAL',
    errEmpty: 'Inserisci il testo della filigrana prima di generare il PDF.',
    appliedSuccess: (text: string, n: number, size: string) =>
      `Filigrana "${text}" applicata a ${n} pagina/e (${size}).`,
    dropTitleEmpty: 'Scegli un file PDF per aggiungere una filigrana',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} pagine)`,
    dropSub: 'Incorpora timbri di testo vettoriali nitidi in locale con pdf-lib',
    labelText: 'Testo filigrana',
    phText: 'RISERVATO / BOZZA / USO INTERNO',
    labelColor: 'Colore timbro',
    firstPageOnly: 'Solo prima pagina',
    labelSize: 'Dimensione carattere:',
    ptSuffix: (n: number) => `${n} pt`,
    labelOpacity: 'Opacità:',
    labelAngle: 'Rotazione:',
    applying: 'Applicazione della filigrana...',
    applyBtn: 'Applica filigrana e scarica',
  },
  id: {
    colorLabels: {
      slate: 'Abu-abu Netral',
      indigo: 'Indigo Merek',
      red: 'Merah Cap',
    },
    defaultWatermark: 'RAHASIA',
    errEmpty: 'Masukkan teks watermark sebelum membuat PDF.',
    appliedSuccess: (text: string, n: number, size: string) =>
      `Watermark "${text}" diterapkan ke ${n} halaman (${size}).`,
    dropTitleEmpty: 'Pilih File PDF untuk Diberi Watermark',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} halaman)`,
    dropSub: 'Menyematkan cap teks vektor yang tajam secara lokal via pdf-lib',
    labelText: 'Teks Watermark',
    phText: 'RAHASIA / DRAF / PENGGUNAAN INTERNAL',
    labelColor: 'Warna Cap',
    firstPageOnly: 'Hanya halaman pertama',
    labelSize: 'Ukuran Font:',
    ptSuffix: (n: number) => `${n} pt`,
    labelOpacity: 'Opasitas:',
    labelAngle: 'Rotasi:',
    applying: 'Memberi Watermark pada PDF...',
    applyBtn: 'Terapkan Watermark & Unduh',
  },
  ru: {
    colorLabels: {
      slate: 'Нейтральный серый',
      indigo: 'Фирменный индиго',
      red: 'Красный штамп',
    },
    defaultWatermark: 'КОНФИДЕНЦИАЛЬНО',
    errEmpty: 'Введите текст водяного знака перед созданием PDF.',
    appliedSuccess: (text: string, n: number, size: string) =>
      `Водяной знак «${text}» применён к ${n} стр. (${size}).`,
    dropTitleEmpty: 'Выберите PDF-файл для нанесения водяного знака',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} стр.)`,
    dropSub: 'Встраивает чёткие векторные текстовые штампы локально через pdf-lib',
    labelText: 'Текст водяного знака',
    phText: 'КОНФИДЕНЦИАЛЬНО / ЧЕРНОВИК / ТОЛЬКО ДЛЯ ВНУТРЕННЕГО ИСПОЛЬЗОВАНИЯ',
    labelColor: 'Цвет штампа',
    firstPageOnly: 'Только первая страница',
    labelSize: 'Размер шрифта:',
    ptSuffix: (n: number) => `${n} пт`,
    labelOpacity: 'Непрозрачность:',
    labelAngle: 'Поворот:',
    applying: 'Нанесение водяного знака на PDF...',
    applyBtn: 'Применить водяной знак и скачать',
  },
};

type ColorChoice = 'slate' | 'indigo' | 'red';

const COLOR_MAP: Record<ColorChoice, { r: number; g: number; b: number }> = {
  slate: { r: 0.35, g: 0.38, b: 0.44 },
  indigo: { r: 0.25, g: 0.28, b: 0.78 },
  red: { r: 0.78, g: 0.14, b: 0.14 },
};

export default function PdfWatermarkTool() {
  const { locale } = useLocale();
  const s = STRINGS[locale];
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [fileName, setFileName] = useState('');
  const [pageCount, setPageCount] = useState(0);

  const [watermarkText, setWatermarkText] = useState(s.defaultWatermark);
  const [fontSize, setFontSize] = useState(54);
  const [opacity, setOpacity] = useState(0.22);
  const [angle, setAngle] = useState(40);
  const [colorKey, setColorKey] = useState<ColorChoice>('slate');
  const [firstPageOnly, setFirstPageOnly] = useState(false);

  const [isApplying, setIsApplying] = useState(false);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setError('');
    setStatusMessage('');

    try {
      const bytes = await readValidatedPdfBytes(file, locale);
      const doc = await PDFDocument.load(bytes);
      setPdfBytes(bytes);
      setFileName(file.name);
      setPageCount(doc.getPageCount());
    } catch (err) {
      setPdfBytes(null);
      setError(formatFriendlyPdfError(err, file.name, locale));
    }
  };

  const handleApplyWatermark = async () => {
    if (!pdfBytes) return;
    const text = watermarkText.trim();
    if (!text) {
      setError(s.errEmpty);
      return;
    }

    setError('');
    setStatusMessage('');
    setIsApplying(true);

    try {
      const doc = await PDFDocument.load(pdfBytes);
      const font = await doc.embedFont(StandardFonts.HelveticaBold);
      const pages = doc.getPages();
      const targetPages = firstPageOnly ? pages.slice(0, 1) : pages;
      const c = COLOR_MAP[colorKey];

      for (const page of targetPages) {
        const { width, height } = page.getSize();
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        const rad = (angle * Math.PI) / 180;
        const x = width / 2 - (textWidth / 2) * Math.cos(rad);
        const y = height / 2 - (textWidth / 2) * Math.sin(rad) - fontSize * 0.25;

        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(c.r, c.g, c.b),
          opacity,
          rotate: degrees(angle),
        });
      }

      const outBytes = await doc.save();
      const baseName = fileName.replace(/\.pdf$/i, '') || 'document';
      triggerPdfDownload(outBytes, `${baseName}-watermarked.pdf`);
      setStatusMessage(
        s.appliedSuccess(text, targetPages.length, formatBytes(outBytes.byteLength, locale))
      );
    } catch (err) {
      setError(formatFriendlyPdfError(err, fileName, locale));
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <div className="space-y-6">
      <label
        htmlFor="wm-pdf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <FileUp className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {fileName ? s.dropTitleFile(fileName, pageCount) : s.dropTitleEmpty}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.dropSub}
        </span>
        <input
          id="wm-pdf-input"
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

      {pdfBytes && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="wm-text" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelText}
              </label>
              <input
                id="wm-text"
                type="text"
                value={watermarkText}
                onChange={(e) => setWatermarkText(e.target.value)}
                placeholder={s.phText}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="wm-color" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelColor}
              </label>
              <select
                id="wm-color"
                value={colorKey}
                onChange={(e) => setColorKey(e.target.value as ColorChoice)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                {(Object.keys(COLOR_MAP) as ColorChoice[]).map((k) => (
                  <option key={k} value={k}>
                    {s.colorLabels[k]}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end pb-2">
              <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={firstPageOnly}
                  onChange={(e) => setFirstPageOnly(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600"
                />
                {s.firstPageOnly}
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="wm-size" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.labelSize} <span className="font-mono">{s.ptSuffix(fontSize)}</span>
              </label>
              <input
                id="wm-size"
                type="range"
                min={20}
                max={96}
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="wm-opacity" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.labelOpacity} <span className="font-mono">{Math.round(opacity * 100)}%</span>
              </label>
              <input
                id="wm-opacity"
                type="range"
                min={0.08}
                max={0.65}
                step={0.02}
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="wm-angle" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.labelAngle} <span className="font-mono">{angle}°</span>
              </label>
              <input
                id="wm-angle"
                type="range"
                min={-60}
                max={60}
                step={5}
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>
          </div>

          <button
            type="button"
            disabled={isApplying}
            onClick={() => void handleApplyWatermark()}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
          >
            <Stamp className="w-4 h-4" />
            {isApplying ? s.applying : s.applyBtn}
          </button>
        </div>
      )}
    </div>
  );
}
