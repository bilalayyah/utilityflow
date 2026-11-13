import { Download, ImagePlus, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    sizeLabels: {
      browserTab: '16×16 Browser Tab',
      taskbar: '32×32 Taskbar / HiDPI',
      desktopShortcut: '48×48 Desktop Shortcut',
      appleTouch: '180×180 Apple Touch',
      androidChrome: '192×192 Android Chrome',
      pwaSplash: '512×512 PWA Splash',
    },
    monogramMode: 'Monogram Badge Builder',
    imageMode: 'Upload Logo Image',
    lettersLabel: 'Text / Initials (1–3 chars)',
    cornerShapeLabel: 'Corner Shape',
    roundedSquare: 'Rounded Square',
    circle: 'Circle',
    sharpSquare: 'Sharp Square',
    square: 'Square',
    bgColorLabel: 'Background Color',
    textColorLabel: 'Text Color',
    chooseLogo: 'Choose a PNG, JPG, WebP, or SVG logo',
    loadedReplace: 'Loaded: {name} (Click to replace)',
    cropMaskLabel: 'Crop Mask',
    unableToRead: 'Unable to read "{name}".',
    canvasUnavailable: 'Canvas 2D context unavailable.',
    failedEncode: 'Failed to encode favicon PNG.',
    unableToGenerate: 'Unable to generate favicons.',
    icoBundleTitle: 'Multi-Size favicon.ico Bundle (16px + 32px + 48px)',
    icoBundleBody: 'Standards-compliant binary .ico file ready for your website root /public/ folder',
    downloadIco: 'Download favicon.ico',
    faviconPreviewAlt: 'Favicon 32x32 preview',
    iconAlt: 'Icon of {size}x{size}',
    htmlTagsLabel: 'HTML <head> Link Tags',
    copyHtml: 'Copy HTML',
  },
  es: {
    sizeLabels: {
      browserTab: '16×16 Pestaña del navegador',
      taskbar: '32×32 Barra de tareas / HiDPI',
      desktopShortcut: '48×48 Acceso directo de escritorio',
      appleTouch: '180×180 Apple Touch',
      androidChrome: '192×192 Android Chrome',
      pwaSplash: '512×512 Pantalla de inicio de PWA',
    },
    monogramMode: 'Creador de insignias con monograma',
    imageMode: 'Subir imagen del logotipo',
    lettersLabel: 'Texto / iniciales (1–3 caracteres)',
    cornerShapeLabel: 'Forma de las esquinas',
    roundedSquare: 'Cuadrado redondeado',
    circle: 'Círculo',
    sharpSquare: 'Cuadrado con esquinas rectas',
    square: 'Cuadrado',
    bgColorLabel: 'Color de fondo',
    textColorLabel: 'Color del texto',
    chooseLogo: 'Elige un logotipo PNG, JPG, WebP o SVG',
    loadedReplace: 'Cargado: {name} (haz clic para reemplazar)',
    cropMaskLabel: 'Máscara de recorte',
    unableToRead: 'No se pudo leer "{name}".',
    canvasUnavailable: 'Contexto 2D de Canvas no disponible.',
    failedEncode: 'No se pudo codificar el PNG del favicon.',
    unableToGenerate: 'No se pudieron generar los favicons.',
    icoBundleTitle: 'Paquete favicon.ico de varios tamaños (16 px + 32 px + 48 px)',
    icoBundleBody: 'Archivo .ico binario conforme a los estándares, listo para la carpeta raíz /public/ de tu sitio web',
    downloadIco: 'Descargar favicon.ico',
    faviconPreviewAlt: 'Vista previa del favicon 32x32',
    iconAlt: 'Icono de {size}x{size}',
    htmlTagsLabel: 'Etiquetas de enlace HTML <head>',
    copyHtml: 'Copiar HTML',
  },
  pt: {
    sizeLabels: {
      browserTab: '16×16 Aba do navegador',
      taskbar: '32×32 Barra de tarefas / HiDPI',
      desktopShortcut: '48×48 Atalho da área de trabalho',
      appleTouch: '180×180 Apple Touch',
      androidChrome: '192×192 Android Chrome',
      pwaSplash: '512×512 Tela inicial de PWA',
    },
    monogramMode: 'Criador de emblema com monograma',
    imageMode: 'Enviar imagem do logotipo',
    lettersLabel: 'Texto / iniciais (1–3 caracteres)',
    cornerShapeLabel: 'Formato dos cantos',
    roundedSquare: 'Quadrado arredondado',
    circle: 'Círculo',
    sharpSquare: 'Quadrado de cantos retos',
    square: 'Quadrado',
    bgColorLabel: 'Cor de fundo',
    textColorLabel: 'Cor do texto',
    chooseLogo: 'Escolha um logotipo PNG, JPG, WebP ou SVG',
    loadedReplace: 'Carregado: {name} (clique para substituir)',
    cropMaskLabel: 'Máscara de corte',
    unableToRead: 'Não foi possível ler "{name}".',
    canvasUnavailable: 'Contexto 2D do Canvas indisponível.',
    failedEncode: 'Falha ao codificar o PNG do favicon.',
    unableToGenerate: 'Não foi possível gerar os favicons.',
    icoBundleTitle: 'Pacote favicon.ico de vários tamanhos (16 px + 32 px + 48 px)',
    icoBundleBody: 'Arquivo .ico binário em conformidade com os padrões, pronto para a pasta /public/ na raiz do seu site',
    downloadIco: 'Baixar favicon.ico',
    faviconPreviewAlt: 'Pré-visualização do favicon 32x32',
    iconAlt: 'Ícone de {size}x{size}',
    htmlTagsLabel: 'Tags de link HTML <head>',
    copyHtml: 'Copiar HTML',
  },
  fr: {
    sizeLabels: {
      browserTab: '16×16 Onglet du navigateur',
      taskbar: '32×32 Barre des tâches / HiDPI',
      desktopShortcut: '48×48 Raccourci du bureau',
      appleTouch: '180×180 Apple Touch',
      androidChrome: '192×192 Android Chrome',
      pwaSplash: '512×512 Écran de démarrage PWA',
    },
    monogramMode: 'Créateur de badge monogramme',
    imageMode: 'Envoyer l\'image du logo',
    lettersLabel: 'Texte / initiales (1–3 caractères)',
    cornerShapeLabel: 'Forme des coins',
    roundedSquare: 'Carré arrondi',
    circle: 'Cercle',
    sharpSquare: 'Carré aux coins droits',
    square: 'Carré',
    bgColorLabel: 'Couleur d\'arrière-plan',
    textColorLabel: 'Couleur du texte',
    chooseLogo: 'Choisissez un logo PNG, JPG, WebP ou SVG',
    loadedReplace: 'Chargé : {name} (cliquez pour remplacer)',
    cropMaskLabel: 'Masque de recadrage',
    unableToRead: 'Impossible de lire « {name} ».',
    canvasUnavailable: 'Contexte 2D du canvas indisponible.',
    failedEncode: 'Échec de l\'encodage du PNG du favicon.',
    unableToGenerate: 'Impossible de générer les favicons.',
    icoBundleTitle: 'Pack favicon.ico multi-tailles (16 px + 32 px + 48 px)',
    icoBundleBody: 'Fichier .ico binaire conforme aux normes, prêt pour le dossier /public/ à la racine de votre site web',
    downloadIco: 'Télécharger favicon.ico',
    faviconPreviewAlt: 'Aperçu du favicon 32x32',
    iconAlt: 'Icône de {size}x{size}',
    htmlTagsLabel: 'Balises de lien HTML <head>',
    copyHtml: 'Copier le HTML',
  },
  de: {
    sizeLabels: {
      browserTab: '16×16 Browser-Tab',
      taskbar: '32×32 Taskleiste / HiDPI',
      desktopShortcut: '48×48 Desktop-Verknüpfung',
      appleTouch: '180×180 Apple Touch',
      androidChrome: '192×192 Android Chrome',
      pwaSplash: '512×512 PWA-Splash',
    },
    monogramMode: 'Monogramm-Badge-Builder',
    imageMode: 'Logo-Bild hochladen',
    lettersLabel: 'Text / Initialen (1–3 Zeichen)',
    cornerShapeLabel: 'Eckenform',
    roundedSquare: 'Abgerundetes Quadrat',
    circle: 'Kreis',
    sharpSquare: 'Scharfes Quadrat',
    square: 'Quadrat',
    bgColorLabel: 'Hintergrundfarbe',
    textColorLabel: 'Textfarbe',
    chooseLogo: 'PNG-, JPG-, WebP- oder SVG-Logo auswählen',
    loadedReplace: 'Geladen: {name} (zum Ersetzen klicken)',
    cropMaskLabel: 'Zuschnittmaske',
    unableToRead: '"{name}" konnte nicht gelesen werden.',
    canvasUnavailable: 'Canvas-2D-Kontext nicht verfügbar.',
    failedEncode: 'Favicon-PNG konnte nicht codiert werden.',
    unableToGenerate: 'Favicons konnten nicht erstellt werden.',
    icoBundleTitle: 'Multi-Size-favicon.ico-Paket (16 px + 32 px + 48 px)',
    icoBundleBody: 'Standardkonforme binäre .ico-Datei, bereit für den Stammordner /public/ Ihrer Website',
    downloadIco: 'favicon.ico herunterladen',
    faviconPreviewAlt: 'Favicon-Vorschau 32×32',
    iconAlt: 'Symbol {size}×{size}',
    htmlTagsLabel: 'HTML-<head>-Link-Tags',
    copyHtml: 'HTML kopieren',
  },
  it: {
    sizeLabels: {
      browserTab: '16×16 scheda browser',
      taskbar: '32×32 barra delle applicazioni / HiDPI',
      desktopShortcut: '48×48 collegamento desktop',
      appleTouch: '180×180 Apple Touch',
      androidChrome: '192×192 Android Chrome',
      pwaSplash: '512×512 schermata PWA',
    },
    monogramMode: 'Creatore di badge con monogramma',
    imageMode: 'Carica immagine logo',
    lettersLabel: 'Testo / iniziali (1–3 caratteri)',
    cornerShapeLabel: 'Forma degli angoli',
    roundedSquare: 'Quadrato arrotondato',
    circle: 'Cerchio',
    sharpSquare: 'Quadrato netto',
    square: 'Quadrato',
    bgColorLabel: 'Colore di sfondo',
    textColorLabel: 'Colore testo',
    chooseLogo: 'Scegli un logo PNG, JPG, WebP o SVG',
    loadedReplace: 'Caricato: {name} (fai clic per sostituire)',
    cropMaskLabel: 'Maschera di ritaglio',
    unableToRead: 'Impossibile leggere "{name}".',
    canvasUnavailable: 'Contesto Canvas 2D non disponibile.',
    failedEncode: 'Codifica del PNG favicon non riuscita.',
    unableToGenerate: 'Impossibile generare le favicon.',
    icoBundleTitle: 'Pacchetto favicon.ico multi-dimensione (16 px + 32 px + 48 px)',
    icoBundleBody: 'File .ico binario conforme agli standard, pronto per la cartella radice /public/ del sito',
    downloadIco: 'Scarica favicon.ico',
    faviconPreviewAlt: 'Anteprima favicon 32×32',
    iconAlt: 'Icona {size}×{size}',
    htmlTagsLabel: 'Tag link <head> HTML',
    copyHtml: 'Copia HTML',
  },
  id: {
    sizeLabels: {
      browserTab: '16×16 Tab Browser',
      taskbar: '32×32 Taskbar / HiDPI',
      desktopShortcut: '48×48 Pintasan Desktop',
      appleTouch: '180×180 Apple Touch',
      androidChrome: '192×192 Android Chrome',
      pwaSplash: '512×512 PWA Splash',
    },
    monogramMode: 'Pembuat Lencana Monogram',
    imageMode: 'Unggah Gambar Logo',
    lettersLabel: 'Teks / Inisial (1–3 karakter)',
    cornerShapeLabel: 'Bentuk Sudut',
    roundedSquare: 'Kotak Membulat',
    circle: 'Lingkaran',
    sharpSquare: 'Kotak Tajam',
    square: 'Kotak',
    bgColorLabel: 'Warna Latar',
    textColorLabel: 'Warna Teks',
    chooseLogo: 'Pilih logo PNG, JPG, WebP, atau SVG',
    loadedReplace: 'Dimuat: {name} (Klik untuk mengganti)',
    cropMaskLabel: 'Masker Potong',
    unableToRead: 'Tidak dapat membaca "{name}".',
    canvasUnavailable: 'Konteks Canvas 2D tidak tersedia.',
    failedEncode: 'Gagal meng-encode PNG favicon.',
    unableToGenerate: 'Tidak dapat membuat favicon.',
    icoBundleTitle: 'Bundel favicon.ico Multi-Ukuran (16px + 32px + 48px)',
    icoBundleBody: 'File .ico biner yang sesuai standar, siap untuk folder root /public/ situs web Anda',
    downloadIco: 'Unduh favicon.ico',
    faviconPreviewAlt: 'Pratinjau Favicon 32x32',
    iconAlt: 'Ikon {size}x{size}',
    htmlTagsLabel: 'Tag Tautan HTML <head>',
    copyHtml: 'Salin HTML',
  },
  ru: {
    sizeLabels: {
      browserTab: '16×16 вкладка браузера',
      taskbar: '32×32 панель задач / HiDPI',
      desktopShortcut: '48×48 ярлык рабочего стола',
      appleTouch: '180×180 Apple Touch',
      androidChrome: '192×192 Android Chrome',
      pwaSplash: '512×512 заставка PWA',
    },
    monogramMode: 'Конструктор значка-монограммы',
    imageMode: 'Загрузить изображение логотипа',
    lettersLabel: 'Текст / инициалы (1–3 символа)',
    cornerShapeLabel: 'Форма углов',
    roundedSquare: 'Скруглённый квадрат',
    circle: 'Круг',
    sharpSquare: 'Острый квадрат',
    square: 'Квадрат',
    bgColorLabel: 'Цвет фона',
    textColorLabel: 'Цвет текста',
    chooseLogo: 'Выберите логотип PNG, JPG, WebP или SVG',
    loadedReplace: 'Загружено: {name} (нажмите, чтобы заменить)',
    cropMaskLabel: 'Маска обрезки',
    unableToRead: 'Не удаётся прочитать «{name}».',
    canvasUnavailable: 'Контекст Canvas 2D недоступен.',
    failedEncode: 'Не удалось закодировать PNG-фавикон.',
    unableToGenerate: 'Не удаётся сгенерировать фавиконы.',
    icoBundleTitle: 'Мультиразмерный набор favicon.ico (16px + 32px + 48px)',
    icoBundleBody: 'Стандартный бинарный файл .ico, готовый для корневой папки /public/ вашего сайта',
    downloadIco: 'Скачать favicon.ico',
    faviconPreviewAlt: 'Предпросмотр фавикона 32x32',
    iconAlt: 'Значок {size}x{size}',
    htmlTagsLabel: 'HTML-теги ссылок в <head>',
    copyHtml: 'Копировать HTML',
  },
};

type SourceMode = 'monogram' | 'image';
type BadgeShape = 'rounded' | 'circle' | 'square';

interface GeneratedIcon {
  size: number;
  label: string;
  fileName: string;
  url: string;
}

const TARGET_SIZES: { size: number; labelKey: keyof typeof STRINGS.en.sizeLabels; fileName: string }[] = [
  { size: 16, labelKey: 'browserTab', fileName: 'favicon-16x16.png' },
  { size: 32, labelKey: 'taskbar', fileName: 'favicon-32x32.png' },
  { size: 48, labelKey: 'desktopShortcut', fileName: 'favicon-48x48.png' },
  { size: 180, labelKey: 'appleTouch', fileName: 'apple-touch-icon.png' },
  { size: 192, labelKey: 'androidChrome', fileName: 'android-chrome-192x192.png' },
  { size: 512, labelKey: 'pwaSplash', fileName: 'android-chrome-512x512.png' },
];

/**
 * Encodes an array of PNG image payloads (e.g. 16x16, 32x32, 48x48) into a single
 * standards-compliant multi-image Windows/Browser .ico file using PNG-encoded ICO frames.
 */
export function buildMultiSizeIco(entries: { size: number; pngBytes: Uint8Array }[]): Uint8Array {
  const count = entries.length;
  const headerSize = 6 + count * 16;
  const totalBytes =
    headerSize + entries.reduce((sum, entry) => sum + entry.pngBytes.length, 0);

  const out = new Uint8Array(totalBytes);
  const view = new DataView(out.buffer);

  // ICONDIR header
  view.setUint16(0, 0, true); // Reserved (must be 0)
  view.setUint16(2, 1, true); // Image type: 1 = ICO
  view.setUint16(4, count, true); // Number of images

  let offset = headerSize;
  entries.forEach((entry, index) => {
    const dirPos = 6 + index * 16;
    const dimByte = entry.size >= 256 ? 0 : entry.size;
    view.setUint8(dirPos + 0, dimByte); // Width
    view.setUint8(dirPos + 1, dimByte); // Height
    view.setUint8(dirPos + 2, 0); // Color palette
    view.setUint8(dirPos + 3, 0); // Reserved
    view.setUint16(dirPos + 4, 1, true); // Color planes
    view.setUint16(dirPos + 6, 32, true); // Bits per pixel
    view.setUint32(dirPos + 8, entry.pngBytes.length, true); // Image size in bytes
    view.setUint32(dirPos + 12, offset, true); // Offset from start of file

    out.set(entry.pngBytes, offset);
    offset += entry.pngBytes.length;
  });

  return out;
}

export default function FaviconGeneratorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [sourceMode, setSourceMode] = useState<SourceMode>('monogram');

  // Monogram settings
  const [letters, setLetters] = useState('UH');
  const [bgColor, setBgColor] = useState('#4F46E5');
  const [fgColor, setFgColor] = useState('#FFFFFF');
  const [shape, setShape] = useState<BadgeShape>('rounded');

  // Uploaded image state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState('');

  // Outputs
  const [icons, setIcons] = useState<GeneratedIcon[]>([]);
  const [icoUrl, setIcoUrl] = useState('');

  useEffect(() => {
    return () => {
      icons.forEach((ic) => URL.revokeObjectURL(ic.url));
      if (icoUrl) URL.revokeObjectURL(icoUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let cancelled = false;
    let tempImgUrl = '';

    void (async () => {
      setError('');
      try {
        let loadedImg: HTMLImageElement | null = null;
        if (sourceMode === 'image') {
          if (!uploadedFile) {
            return;
          }
          tempImgUrl = URL.createObjectURL(uploadedFile);
          loadedImg = await new Promise<HTMLImageElement>((resolve, reject) => {
            const el = new Image();
            el.onload = () => resolve(el);
            el.onerror = () => reject(new Error(s.unableToRead.replace('{name}', uploadedFile.name)));
            el.src = tempImgUrl;
          });
        }

        const rendered: GeneratedIcon[] = [];
        const icoFrames: { size: number; pngBytes: Uint8Array }[] = [];

        for (const target of TARGET_SIZES) {
          const sz = target.size;
          const canvas = document.createElement('canvas');
          canvas.width = sz;
          canvas.height = sz;
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error(s.canvasUnavailable);

          // Shape clip mask
          ctx.save();
          if (shape === 'circle') {
            ctx.beginPath();
            ctx.arc(sz / 2, sz / 2, sz / 2, 0, Math.PI * 2);
            ctx.clip();
          } else if (shape === 'rounded') {
            const radius = Math.round(sz * 0.2);
            ctx.beginPath();
            ctx.roundRect(0, 0, sz, sz, radius);
            ctx.clip();
          }

          if (sourceMode === 'image' && loadedImg) {
            // Center square cover crop
            const side = Math.min(loadedImg.naturalWidth, loadedImg.naturalHeight);
            const sx = Math.floor((loadedImg.naturalWidth - side) / 2);
            const sy = Math.floor((loadedImg.naturalHeight - side) / 2);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(loadedImg, sx, sy, side, side, 0, 0, sz, sz);
          } else {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, sz, sz);
            const text = (letters.trim() || 'U').slice(0, 3).toUpperCase();
            const fontScale = text.length === 1 ? 0.56 : text.length === 2 ? 0.44 : 0.34;
            ctx.fillStyle = fgColor;
            ctx.font = `700 ${Math.round(sz * fontScale)}px Inter, system-ui, -apple-system, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, sz / 2, sz * 0.53);
          }
          ctx.restore();

          const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
          if (!blob) throw new Error(s.failedEncode);

          const url = URL.createObjectURL(blob);
          rendered.push({ size: target.size, label: s.sizeLabels[target.labelKey], fileName: target.fileName, url });

          if (sz === 16 || sz === 32 || sz === 48) {
            const ab = await blob.arrayBuffer();
            icoFrames.push({ size: sz, pngBytes: new Uint8Array(ab) });
          }
        }

        const icoBytes = buildMultiSizeIco(icoFrames);
        const icoCopy = new Uint8Array(icoBytes.byteLength);
        icoCopy.set(icoBytes);
        const icoBlob = new Blob([icoCopy.buffer], { type: 'image/x-icon' });
        const nextIcoUrl = URL.createObjectURL(icoBlob);

        if (cancelled) {
          rendered.forEach((r) => URL.revokeObjectURL(r.url));
          URL.revokeObjectURL(nextIcoUrl);
          return;
        }

        setIcons((prev) => {
          prev.forEach((p) => URL.revokeObjectURL(p.url));
          return rendered;
        });
        setIcoUrl((prev) => {
          if (prev) URL.revokeObjectURL(prev);
          return nextIcoUrl;
        });
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : s.unableToGenerate);
        }
      } finally {
        if (tempImgUrl) URL.revokeObjectURL(tempImgUrl);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [sourceMode, letters, bgColor, fgColor, shape, uploadedFile, locale]);

  const htmlSnippet = `<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />`;

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setSourceMode('monogram')}
          className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold cursor-pointer ${
            sourceMode === 'monogram'
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          {s.monogramMode}
        </button>
        <button
          type="button"
          onClick={() => setSourceMode('image')}
          className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold cursor-pointer ${
            sourceMode === 'image'
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ImagePlus className="w-4 h-4" />
          {s.imageMode}
        </button>
      </div>

      {sourceMode === 'monogram' ? (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div>
            <label htmlFor="fav-letters" className="block text-xs font-semibold text-slate-800 mb-1.5">
              {s.lettersLabel}
            </label>
            <input
              id="fav-letters"
              type="text"
              maxLength={3}
              value={letters}
              onChange={(e) => setLetters(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold uppercase"
            />
          </div>

          <div>
            <label htmlFor="fav-shape" className="block text-xs font-semibold text-slate-800 mb-1.5">
              {s.cornerShapeLabel}
            </label>
            <select
              id="fav-shape"
              value={shape}
              onChange={(e) => setShape(e.target.value as BadgeShape)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              <option value="rounded">{s.roundedSquare}</option>
              <option value="circle">{s.circle}</option>
              <option value="square">{s.sharpSquare}</option>
            </select>
          </div>

          <div>
            <label htmlFor="fav-bg" className="block text-xs font-semibold text-slate-800 mb-1.5">
              {s.bgColorLabel}
            </label>
            <div className="flex items-center gap-2">
              <input
                id="fav-bg"
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="h-9 w-12 rounded border border-slate-300 bg-white p-0.5 cursor-pointer"
              />
              <span className="font-mono text-xs text-slate-700 uppercase">{bgColor}</span>
            </div>
          </div>

          <div>
            <label htmlFor="fav-fg" className="block text-xs font-semibold text-slate-800 mb-1.5">
              {s.textColorLabel}
            </label>
            <div className="flex items-center gap-2">
              <input
                id="fav-fg"
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="h-9 w-12 rounded border border-slate-300 bg-white p-0.5 cursor-pointer"
              />
              <span className="font-mono text-xs text-slate-700 uppercase">{fgColor}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center rounded-xl border border-slate-200 bg-slate-50 p-4">
          <label
            htmlFor="fav-upload"
            className="sm:col-span-2 flex items-center justify-center gap-2.5 rounded-lg border-2 border-dashed border-slate-300 bg-white px-4 py-5 text-sm font-medium text-slate-700 hover:border-indigo-400 cursor-pointer"
          >
            <ImagePlus className="w-5 h-5 text-indigo-600" />
            <span>
              {uploadedFile
                ? s.loadedReplace.replace('{name}', uploadedFile.name)
                : s.chooseLogo}
            </span>
            <input
              id="fav-upload"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) setUploadedFile(f);
                e.target.value = '';
              }}
              className="sr-only"
            />
          </label>

          <div>
            <label htmlFor="fav-img-shape" className="block text-xs font-semibold text-slate-800 mb-1.5">
              {s.cropMaskLabel}
            </label>
            <select
              id="fav-img-shape"
              value={shape}
              onChange={(e) => setShape(e.target.value as BadgeShape)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              <option value="rounded">{s.roundedSquare}</option>
              <option value="circle">{s.circle}</option>
              <option value="square">{s.square}</option>
            </select>
          </div>
        </div>
      )}

      {error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {icons.length > 0 && (
        <div className="space-y-5">
          {icoUrl && (
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
              <div className="flex items-center gap-3">
                <img
                  src={icons[1]?.url || icons[0].url}
                  alt={s.faviconPreviewAlt}
                  className="w-9 h-9 rounded border border-slate-200 bg-white p-0.5"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {s.icoBundleTitle}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {s.icoBundleBody}
                  </p>
                </div>
              </div>
              <a
                href={icoUrl}
                download="favicon.ico"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Download className="w-4 h-4" />
                {s.downloadIco}
              </a>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {icons.map((ic) => (
              <div
                key={ic.size}
                className="rounded-xl border border-slate-200 bg-white p-3.5 flex flex-col items-center text-center justify-between gap-3"
              >
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={ic.url}
                    alt={s.iconAlt.replace('{size}', String(ic.size))}
                    style={{ width: Math.min(56, Math.max(20, ic.size)), height: Math.min(56, Math.max(20, ic.size)) }}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 tabular-nums">{ic.size}×{ic.size}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{ic.fileName}</p>
                </div>
                <a
                  href={ic.url}
                  download={ic.fileName}
                  className="w-full inline-flex items-center justify-center gap-1 rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  <Download className="w-3.5 h-3.5" />
                  PNG
                </a>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-800">
                {s.htmlTagsLabel}
              </span>
              <CopyButton text={htmlSnippet} label={s.copyHtml} copiedLabel={t.common.copied} />
            </div>
            <pre className="rounded-lg border border-slate-200 bg-white p-3 font-mono text-xs text-slate-800 overflow-x-auto">
              {htmlSnippet}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
