import jsQR from 'jsqr';
import { Camera, Download, QrCode, ScanLine, StopCircle, Upload } from 'lucide-react';
import QRCode from 'qrcode';
import { useEffect, useRef, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    payloadKinds: {
      websiteUrl: 'Website URL',
      text: 'Text',
      wifi: 'Wi-Fi Configuration',
      vcard: 'vCard Contact',
      email: 'Email Address',
      phone: 'Phone Number',
      plainText: 'Plain Text',
    },
    liveCameraCapture: 'Live Camera Capture',
    scanMode: 'Scan / Decode QR Image',
    vcardMode: 'vCard Contact QR Builder',
    uploadQr: 'Upload QR Code Image',
    uploadQrNote: 'PNG, JPG, WebP, or SVG screenshot · 100% client-side',
    liveCameraTitle: 'Live Device Camera Scan',
    liveCameraNote: 'Uses local camera feed only when permission is granted',
    startCamera: 'Start Camera Scanner',
    stopCamera: 'Stop Camera',
    cameraHint: 'Point your camera at a QR code—capture stops automatically as soon as decoded.',
    uploadImageError: 'Please upload a PNG, JPG, WebP, or SVG image containing a QR code.',
    unableToLoad: 'Unable to load "{name}".',
    noQrDetected:
      'No QR code could be detected in this image. Ensure sharp focus, clear quiet-zone margins, and high contrast.',
    unableToScan: 'Unable to scan image.',
    cameraUnsupported: 'Camera scanning is not supported in this browser environment.',
    cameraDenied:
      'Camera permission was denied or no camera device is available. Upload a QR code image instead.',
    decodedPayload: 'Decoded Payload · {kind}',
    sourceLabel: 'Source: ',
    copyPayload: 'Copy Payload',
    decodedAria: 'Decoded QR text',
    detectedLink: 'Detected web link: ',
    uploadedPreviewAlt: 'Uploaded QR code preview',
    firstNameLabel: 'First Name',
    lastNameLabel: 'Last Name',
    orgLabel: 'Organization',
    jobTitleLabel: 'Job Title',
    defaultJobTitle: 'Product Designer',
    phoneLabel: 'Phone Number',
    emailLabel: 'Email Address',
    websiteLabel: 'Website URL',
    rawVcardLabel: 'Raw vCard 3.0 Payload',
    copyVcard: 'Copy vCard',
    vcardQrAlt: 'Generated vCard QR Code',
    downloadPng: 'Download PNG',
    downloadSvg: 'Download SVG',
  },
  es: {
    payloadKinds: {
      websiteUrl: 'URL de sitio web',
      text: 'Texto',
      wifi: 'Configuración de Wi-Fi',
      vcard: 'Contacto vCard',
      email: 'Correo electrónico',
      phone: 'Número de teléfono',
      plainText: 'Texto sin formato',
    },
    liveCameraCapture: 'Captura con cámara en vivo',
    scanMode: 'Escanear / decodificar imagen QR',
    vcardMode: 'Generador de QR de contacto vCard',
    uploadQr: 'Subir imagen de código QR',
    uploadQrNote: 'Captura PNG, JPG, WebP o SVG · 100 % en el cliente',
    liveCameraTitle: 'Escaneo con la cámara del dispositivo',
    liveCameraNote: 'Usa la cámara local solo cuando se concede el permiso',
    startCamera: 'Iniciar escáner de cámara',
    stopCamera: 'Detener cámara',
    cameraHint: 'Apunta la cámara a un código QR: la captura se detiene automáticamente al decodificarlo.',
    uploadImageError: 'Sube una imagen PNG, JPG, WebP o SVG que contenga un código QR.',
    unableToLoad: 'No se pudo cargar "{name}".',
    noQrDetected:
      'No se pudo detectar ningún código QR en esta imagen. Asegúrate de que esté bien enfocada, con márgenes de zona tranquila despejados y alto contraste.',
    unableToScan: 'No se pudo escanear la imagen.',
    cameraUnsupported: 'El escaneo con cámara no es compatible con este navegador.',
    cameraDenied:
      'El permiso de cámara fue denegado o no hay ningún dispositivo de cámara disponible. Sube una imagen de código QR.',
    decodedPayload: 'Contenido decodificado · {kind}',
    sourceLabel: 'Fuente: ',
    copyPayload: 'Copiar contenido',
    decodedAria: 'Texto QR decodificado',
    detectedLink: 'Enlace web detectado: ',
    uploadedPreviewAlt: 'Vista previa del código QR subido',
    firstNameLabel: 'Nombre',
    lastNameLabel: 'Apellido',
    orgLabel: 'Organización',
    jobTitleLabel: 'Cargo',
    defaultJobTitle: 'Diseñador de producto',
    phoneLabel: 'Número de teléfono',
    emailLabel: 'Correo electrónico',
    websiteLabel: 'URL del sitio web',
    rawVcardLabel: 'Contenido vCard 3.0 sin procesar',
    copyVcard: 'Copiar vCard',
    vcardQrAlt: 'Código QR vCard generado',
    downloadPng: 'Descargar PNG',
    downloadSvg: 'Descargar SVG',
  },
};

type Mode = 'scan' | 'vcard';

function classifyPayload(
  text: string,
  kinds: typeof STRINGS.en.payloadKinds
): { kind: string; safeHref: string | null } {
  const trimmed = text.trim();
  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const u = new URL(trimmed);
      if (u.protocol === 'http:' || u.protocol === 'https:') {
        return { kind: kinds.websiteUrl, safeHref: u.toString() };
      }
    } catch {
      return { kind: kinds.text, safeHref: null };
    }
  }
  if (/^WIFI:/i.test(trimmed)) return { kind: kinds.wifi, safeHref: null };
  if (/^BEGIN:VCARD/i.test(trimmed)) return { kind: kinds.vcard, safeHref: null };
  if (/^mailto:/i.test(trimmed)) return { kind: kinds.email, safeHref: null };
  if (/^tel:/i.test(trimmed)) return { kind: kinds.phone, safeHref: null };
  return { kind: kinds.plainText, safeHref: null };
}

export default function QrCodeScannerTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [mode, setMode] = useState<Mode>('scan');

  // Scanner state
  const [decodedText, setDecodedText] = useState('');
  const [scanSourceName, setScanSourceName] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [scanError, setScanError] = useState('');
  const [cameraActive, setCameraActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);

  // vCard QR Generator state
  const [firstName, setFirstName] = useState('Jordan');
  const [lastName, setLastName] = useState('Taylor');
  const [org, setOrg] = useState('Northstar Studio');
  const [jobTitle, setJobTitle] = useState(s.defaultJobTitle);
  const [phone, setPhone] = useState('+1-555-0148');
  const [email, setEmail] = useState('jordan@example.com');
  const [website, setWebsite] = useState('https://example.com');
  const [vcardPngUrl, setVcardPngUrl] = useState('');
  const [vcardSvg, setVcardSvg] = useState('');

  const stopCamera = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (streamRef.current) {
      for (const track of streamRef.current.getTracks()) {
        track.stop();
      }
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  useEffect(() => {
    return () => {
      stopCamera();
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const decodeImageFile = async (file: File | undefined) => {
    if (!file) return;
    stopCamera();
    setScanError('');
    setDecodedText('');

    if (!file.type.startsWith('image/')) {
      setScanError(s.uploadImageError);
      return;
    }

    const objUrl = URL.createObjectURL(file);
    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.onerror = () => reject(new Error(s.unableToLoad.replace('{name}', file.name)));
        el.src = objUrl;
      });

      const tryDecodeAt = (width: number, height: number) => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        const imageData = ctx.getImageData(0, 0, width, height);
        return jsQR(imageData.data, width, height, { inversionAttempts: 'attemptBoth' });
      };

      let result = tryDecodeAt(img.naturalWidth, img.naturalHeight);
      if (!result && (img.naturalWidth > 900 || img.naturalHeight > 900)) {
        const scale = 900 / Math.max(img.naturalWidth, img.naturalHeight);
        result = tryDecodeAt(
          Math.max(1, Math.round(img.naturalWidth * scale)),
          Math.max(1, Math.round(img.naturalHeight * scale))
        );
      }
      if (!result && img.naturalWidth < 260) {
        const scale = 360 / Math.max(1, img.naturalWidth);
        result = tryDecodeAt(
          Math.round(img.naturalWidth * scale),
          Math.round(img.naturalHeight * scale)
        );
      }

      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return objUrl;
      });
      setScanSourceName(file.name);

      if (!result || !result.data) {
        setScanError(s.noQrDetected);
      } else {
        setDecodedText(result.data);
      }
    } catch (err) {
      URL.revokeObjectURL(objUrl);
      setScanError(err instanceof Error ? err.message : s.unableToScan);
    }
  };

  const startCameraScan = async () => {
    setScanError('');
    setDecodedText('');

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setScanError(s.cameraUnsupported);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      streamRef.current = stream;
      setCameraActive(true);

      const attachAndScan = () => {
        const video = videoRef.current;
        if (!video) return;
        video.srcObject = stream;
        void video.play();

        const canvas = document.createElement('canvas');
        const tick = () => {
          if (!streamRef.current || !videoRef.current) return;
          if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
            const w = videoRef.current.videoWidth;
            const h = videoRef.current.videoHeight;
            if (w > 0 && h > 0) {
              canvas.width = w;
              canvas.height = h;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.drawImage(videoRef.current, 0, 0, w, h);
                const imageData = ctx.getImageData(0, 0, w, h);
                const code = jsQR(imageData.data, w, h, { inversionAttempts: 'dontInvert' });
                if (code && code.data) {
                  setDecodedText(code.data);
                  setScanSourceName(s.liveCameraCapture);
                  stopCamera();
                  return;
                }
              }
            }
          }
          rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      };

      window.setTimeout(attachAndScan, 40);
    } catch {
      stopCamera();
      setScanError(s.cameraDenied);
    }
  };

  // Build vCard text and render QR
  const vcardPayload = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${lastName.trim()};${firstName.trim()};;;`,
    `FN:${[firstName.trim(), lastName.trim()].filter(Boolean).join(' ')}`,
    org.trim() ? `ORG:${org.trim()}` : '',
    jobTitle.trim() ? `TITLE:${jobTitle.trim()}` : '',
    phone.trim() ? `TEL;TYPE=CELL:${phone.trim()}` : '',
    email.trim() ? `EMAIL:${email.trim()}` : '',
    website.trim() ? `URL:${website.trim()}` : '',
    'END:VCARD',
  ]
    .filter(Boolean)
    .join('\n');

  useEffect(() => {
    if (mode !== 'vcard') return;
    let cancelled = false;
    void (async () => {
      try {
        const [png, svg] = await Promise.all([
          QRCode.toDataURL(vcardPayload, { width: 320, margin: 2 }),
          QRCode.toString(vcardPayload, { type: 'svg', margin: 2 }),
        ]);
        if (!cancelled) {
          setVcardPngUrl(png);
          setVcardSvg(svg);
        }
      } catch {
        // Ignore transient input updates
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [mode, vcardPayload]);

  const decodedMeta = classifyPayload(decodedText, s.payloadKinds);

  const downloadSvg = () => {
    if (!vcardSvg) return;
    const blob = new Blob([vcardSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact-vcard-qr.svg';
    a.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setMode('scan')}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold cursor-pointer ${
            mode === 'scan' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ScanLine className="w-4 h-4" />
          {s.scanMode}
        </button>
        <button
          type="button"
          onClick={() => {
            stopCamera();
            setMode('vcard');
          }}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold cursor-pointer ${
            mode === 'vcard' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <QrCode className="w-4 h-4" />
          {s.vcardMode}
        </button>
      </div>

      {mode === 'scan' ? (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label
              htmlFor="qr-scan-file"
              className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-7 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
            >
              <Upload className="w-7 h-7 text-indigo-600 mb-2" />
              <span className="text-sm font-semibold text-slate-900">
                {s.uploadQr}
              </span>
              <span className="mt-1 text-xs text-slate-500">
                {s.uploadQrNote}
              </span>
              <input
                id="qr-scan-file"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  void decodeImageFile(e.target.files?.[0]);
                  e.target.value = '';
                }}
                className="sr-only"
              />
            </label>

            <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-7 text-center">
              <Camera className="w-7 h-7 text-indigo-600 mb-2" />
              <span className="text-sm font-semibold text-slate-900">
                {s.liveCameraTitle}
              </span>
              <span className="mt-1 text-xs text-slate-500 mb-3">
                {s.liveCameraNote}
              </span>
              {!cameraActive ? (
                <button
                  type="button"
                  onClick={() => void startCameraScan()}
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 cursor-pointer"
                >
                  {s.startCamera}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopCamera}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-700 cursor-pointer"
                >
                  <StopCircle className="w-4 h-4" />
                  {s.stopCamera}
                </button>
              )}
            </div>
          </div>

          {cameraActive && (
            <div className="rounded-xl border border-indigo-200 bg-slate-900 p-3 text-center">
              <video
                ref={videoRef}
                muted
                playsInline
                className="mx-auto max-h-72 rounded-lg"
              />
              <p className="mt-2 text-xs text-slate-300">
                {s.cameraHint}
              </p>
            </div>
          )}

          {scanError && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {scanError}
            </div>
          )}

          {decodedText && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
              {previewUrl && scanSourceName !== s.liveCameraCapture && (
                <div className="md:col-span-4 rounded-lg border border-slate-200 bg-white p-2 flex items-center justify-center">
                  <img
                    src={previewUrl}
                    alt={s.uploadedPreviewAlt}
                    className="max-h-44 object-contain"
                  />
                </div>
              )}

              <div
                className={`${
                  previewUrl && scanSourceName !== s.liveCameraCapture
                    ? 'md:col-span-8'
                    : 'md:col-span-12'
                } space-y-3`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      {s.decodedPayload.replace('{kind}', decodedMeta.kind)}
                    </span>
                    {scanSourceName && (
                      <p className="text-xs text-slate-500">{s.sourceLabel}{scanSourceName}</p>
                    )}
                  </div>
                  <CopyButton text={decodedText} label={s.copyPayload} copiedLabel={t.common.copied} />
                </div>

                <textarea
                  readOnly
                  rows={4}
                  value={decodedText}
                  aria-label={s.decodedAria}
                  className="w-full rounded-lg border border-slate-300 bg-white p-3 font-mono text-xs sm:text-sm text-slate-900"
                />

                {decodedMeta.safeHref && (
                  <div className="text-xs text-slate-700">
                    {s.detectedLink}
                    <a
                      href={decodedMeta.safeHref}
                      rel="noopener noreferrer nofollow"
                      className="font-semibold text-indigo-700 underline break-all"
                    >
                      {decodedMeta.safeHref}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="vc-first" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.firstNameLabel}
              </label>
              <input
                id="vc-first"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="vc-last" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.lastNameLabel}
              </label>
              <input
                id="vc-last"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="vc-org" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.orgLabel}
              </label>
              <input
                id="vc-org"
                type="text"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="vc-title" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.jobTitleLabel}
              </label>
              <input
                id="vc-title"
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="vc-phone" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.phoneLabel}
              </label>
              <input
                id="vc-phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="vc-email" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.emailLabel}
              </label>
              <input
                id="vc-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="vc-web" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.websiteLabel}
              </label>
              <input
                id="vc-web"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-700">{s.rawVcardLabel}</span>
                <CopyButton text={vcardPayload} label={s.copyVcard} copiedLabel={t.common.copied} />
              </div>
              <pre className="rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-xs text-slate-700 overflow-x-auto">
                {vcardPayload}
              </pre>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col items-center space-y-4">
            {vcardPngUrl && (
              <div className="qr-light-surface rounded-lg border border-slate-200 bg-white p-3">
                <img src={vcardPngUrl} alt={s.vcardQrAlt} className="w-56 h-56" />
              </div>
            )}
            <div className="flex flex-wrap justify-center gap-2.5">
              {vcardPngUrl && (
                <a
                  href={vcardPngUrl}
                  download="contact-vcard-qr.png"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
                >
                  <Download className="w-4 h-4" />
                  {s.downloadPng}
                </a>
              )}
              <button
                type="button"
                onClick={downloadSvg}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                {s.downloadSvg}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
