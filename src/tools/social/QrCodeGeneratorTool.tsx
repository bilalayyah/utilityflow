import { Download } from 'lucide-react';
import QRCode from 'qrcode';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    tabUrl: 'Website URL',
    tabText: 'Plain Text',
    tabWifi: 'Wi-Fi Network',
    tabEmail: 'Email Link',
    tabPhone: 'Phone Number',
    labelUrl: 'Destination URL',
    labelText: 'Text Content',
    labelSsid: 'Network Name (SSID)',
    labelSecurity: 'Security Type',
    optWpa: 'WPA / WPA2 / WPA3',
    optWep: 'WEP',
    optOpen: 'Open (No Password)',
    labelWifiPass: 'Wi-Fi Password',
    hiddenSsid: 'Hidden SSID network',
    labelEmailTo: 'Recipient Email',
    labelEmailSubject: 'Subject (Optional)',
    labelPhone: 'Phone Number (E.164 format recommended)',
    sizeLabel: (size: number) => `Size (${size}px)`,
    labelEc: 'Error Correction',
    labelFg: 'Foreground',
    labelBg: 'Background',
    quietZone: 'Quiet Zone Margin:',
    modulesLabel: (margin: number) => `${margin} modules`,
    encodedPayload: 'Encoded Payload String',
    copyPayload: 'Copy Payload',
    emptyError: 'Enter content above to generate a scannable QR code.',
    encodeError: 'Unable to encode QR payload.',
    qrAlt: 'Generated scannable QR code',
    downloadPng: 'Download PNG',
    downloadSvg: 'Download SVG',
    copySvg: 'Copy SVG',
    sampleText: 'Welcome to UtilityFlow!',
  },
  es: {
    tabUrl: 'URL del sitio web',
    tabText: 'Texto simple',
    tabWifi: 'Red Wi-Fi',
    tabEmail: 'Enlace de correo',
    tabPhone: 'Número de teléfono',
    labelUrl: 'URL de destino',
    labelText: 'Contenido de texto',
    labelSsid: 'Nombre de la red (SSID)',
    labelSecurity: 'Tipo de seguridad',
    optWpa: 'WPA / WPA2 / WPA3',
    optWep: 'WEP',
    optOpen: 'Abierta (sin contraseña)',
    labelWifiPass: 'Contraseña de Wi-Fi',
    hiddenSsid: 'Red con SSID oculto',
    labelEmailTo: 'Correo del destinatario',
    labelEmailSubject: 'Asunto (opcional)',
    labelPhone: 'Número de teléfono (se recomienda el formato E.164)',
    sizeLabel: (size: number) => `Tamaño (${size}px)`,
    labelEc: 'Corrección de errores',
    labelFg: 'Primer plano',
    labelBg: 'Fondo',
    quietZone: 'Margen de zona silenciosa:',
    modulesLabel: (margin: number) => `${margin} módulos`,
    encodedPayload: 'Cadena de datos codificada',
    copyPayload: 'Copiar datos',
    emptyError: 'Ingrese contenido arriba para generar un código QR escaneable.',
    encodeError: 'No se pudo codificar el contenido del QR.',
    qrAlt: 'Código QR escaneable generado',
    downloadPng: 'Descargar PNG',
    downloadSvg: 'Descargar SVG',
    copySvg: 'Copiar SVG',
    sampleText: '¡Bienvenido a UtilityFlow!',
  },
};

type PayloadType = 'url' | 'text' | 'wifi' | 'email' | 'phone';
type ErrorCorrection = 'L' | 'M' | 'Q' | 'H';

function escapeWifiField(val: string): string {
  return val.replace(/([\\;,:"])/g, '\\$1');
}

export default function QrCodeGeneratorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [payloadType, setPayloadType] = useState<PayloadType>('url');
  const [urlValue, setUrlValue] = useState('https://utilityflow.online/');
  const [textValue, setTextValue] = useState(s.sampleText);
  const [wifiSsid, setWifiSsid] = useState('GuestWiFi');
  const [wifiPassword, setWifiPassword] = useState('');
  const [wifiEncryption, setWifiEncryption] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');
  const [wifiHidden, setWifiHidden] = useState(false);
  const [emailTo, setEmailTo] = useState('hello@example.com');
  const [emailSubject, setEmailSubject] = useState('');
  const [phoneValue, setPhoneValue] = useState('+15551234567');

  const [size, setSize] = useState(280);
  const [margin, setMargin] = useState(2);
  const [ecLevel, setEcLevel] = useState<ErrorCorrection>('M');
  const [fgColor, setFgColor] = useState('#0f172a');
  const [bgColor, setBgColor] = useState('#ffffff');

  const [svgMarkup, setSvgMarkup] = useState('');
  const [pngDataUrl, setPngDataUrl] = useState('');
  const [qrError, setQrError] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const encodedPayload = useMemo(() => {
    switch (payloadType) {
      case 'url':
        return urlValue.trim();
      case 'text':
        return textValue;
      case 'wifi': {
        const ssid = escapeWifiField(wifiSsid.trim());
        if (!ssid) return '';
        const pass = wifiEncryption === 'nopass' ? '' : escapeWifiField(wifiPassword);
        return `WIFI:T:${wifiEncryption};S:${ssid};P:${pass};H:${wifiHidden ? 'true' : 'false'};;`;
      }
      case 'email': {
        const to = emailTo.trim();
        if (!to) return '';
        const subj = emailSubject.trim();
        return subj ? `mailto:${to}?subject=${encodeURIComponent(subj)}` : `mailto:${to}`;
      }
      case 'phone': {
        const p = phoneValue.trim();
        return p ? `tel:${p}` : '';
      }
    }
  }, [
    payloadType,
    urlValue,
    textValue,
    wifiSsid,
    wifiPassword,
    wifiEncryption,
    wifiHidden,
    emailTo,
    emailSubject,
    phoneValue,
  ]);

  useEffect(() => {
    let active = true;
    if (!encodedPayload) {
      setSvgMarkup('');
      setPngDataUrl('');
      setQrError(s.emptyError);
      return;
    }

    const options = {
      errorCorrectionLevel: ecLevel,
      margin,
      width: size,
      color: {
        dark: fgColor,
        light: bgColor,
      },
    };

    Promise.all([
      QRCode.toString(encodedPayload, { ...options, type: 'svg' }),
      QRCode.toDataURL(encodedPayload, options),
    ])
      .then(([svg, dataUrl]) => {
        if (!active) return;
        setSvgMarkup(svg);
        setPngDataUrl(dataUrl);
        setQrError('');
      })
      .catch((err: unknown) => {
        if (!active) return;
        setSvgMarkup('');
        setPngDataUrl('');
        setQrError(err instanceof Error ? err.message : s.encodeError);
      });

    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, encodedPayload, options).catch(() => undefined);
    }

    return () => {
      active = false;
    };
  }, [encodedPayload, ecLevel, margin, size, fgColor, bgColor, s]);

  const downloadSvg = () => {
    if (!svgMarkup) return;
    const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `qr-code-${payloadType}.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-1.5 rounded-lg bg-slate-100 p-1.5">
        {(
          [
            ['url', s.tabUrl],
            ['text', s.tabText],
            ['wifi', s.tabWifi],
            ['email', s.tabEmail],
            ['phone', s.tabPhone],
          ] as [PayloadType, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setPayloadType(id)}
            className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              payloadType === id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 space-y-5">
          {payloadType === 'url' && (
            <div>
              <label htmlFor="qr-url" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.labelUrl}
              </label>
              <input
                id="qr-url"
                type="url"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
                placeholder="https://example.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-mono"
              />
            </div>
          )}

          {payloadType === 'text' && (
            <div>
              <label htmlFor="qr-text" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.labelText}
              </label>
              <textarea
                id="qr-text"
                rows={4}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
              />
            </div>
          )}

          {payloadType === 'wifi' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="qr-ssid" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.labelSsid}
                </label>
                <input
                  id="qr-ssid"
                  type="text"
                  value={wifiSsid}
                  onChange={(e) => setWifiSsid(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
                />
              </div>
              <div>
                <label htmlFor="qr-enc" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.labelSecurity}
                </label>
                <select
                  id="qr-enc"
                  value={wifiEncryption}
                  onChange={(e) => setWifiEncryption(e.target.value as 'WPA' | 'WEP' | 'nopass')}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
                >
                  <option value="WPA">{s.optWpa}</option>
                  <option value="WEP">{s.optWep}</option>
                  <option value="nopass">{s.optOpen}</option>
                </select>
              </div>
              {wifiEncryption !== 'nopass' && (
                <div>
                  <label htmlFor="qr-pass" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    {s.labelWifiPass}
                  </label>
                  <input
                    id="qr-pass"
                    type="text"
                    value={wifiPassword}
                    onChange={(e) => setWifiPassword(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
                  />
                </div>
              )}
              <div className="flex items-end pb-2">
                <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wifiHidden}
                    onChange={(e) => setWifiHidden(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600"
                  />
                  {s.hiddenSsid}
                </label>
              </div>
            </div>
          )}

          {payloadType === 'email' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="qr-email" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.labelEmailTo}
                </label>
                <input
                  id="qr-email"
                  type="email"
                  value={emailTo}
                  onChange={(e) => setEmailTo(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
                />
              </div>
              <div>
                <label htmlFor="qr-subj" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.labelEmailSubject}
                </label>
                <input
                  id="qr-subj"
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
                />
              </div>
            </div>
          )}

          {payloadType === 'phone' && (
            <div>
              <label htmlFor="qr-phone" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.labelPhone}
              </label>
              <input
                id="qr-phone"
                type="tel"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
              />
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-200">
            <div>
              <label htmlFor="qr-size" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.sizeLabel(size)}
              </label>
              <input
                id="qr-size"
                type="range"
                min={160}
                max={512}
                step={20}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="qr-ec" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.labelEc}
              </label>
              <select
                id="qr-ec"
                value={ecLevel}
                onChange={(e) => setEcLevel(e.target.value as ErrorCorrection)}
                className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs"
              >
                <option value="L">L (7%)</option>
                <option value="M">M (15%)</option>
                <option value="Q">Q (25%)</option>
                <option value="H">H (30%)</option>
              </select>
            </div>

            <div>
              <label htmlFor="qr-fg" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.labelFg}
              </label>
              <input
                id="qr-fg"
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="h-9 w-full rounded-lg border border-slate-300 bg-white p-1 cursor-pointer"
              />
            </div>

            <div>
              <label htmlFor="qr-bg" className="block text-xs font-semibold text-slate-700 mb-1">
                {s.labelBg}
              </label>
              <input
                id="qr-bg"
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="h-9 w-full rounded-lg border border-slate-300 bg-white p-1 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="qr-margin" className="text-xs font-semibold text-slate-700">
              {s.quietZone} <span className="font-mono">{s.modulesLabel(margin)}</span>
            </label>
            <input
              id="qr-margin"
              type="range"
              min={0}
              max={6}
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-36 accent-indigo-600"
            />
          </div>

          {encodedPayload && (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold text-slate-500">{s.encodedPayload}</span>
                <CopyButton text={encodedPayload} label={s.copyPayload} copiedLabel={t.common.copied} />
              </div>
              <code className="block text-xs font-mono text-slate-800 break-all">{encodedPayload}</code>
            </div>
          )}
        </div>

        <div className="lg:col-span-5 flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-6">
          {qrError ? (
            <div className="text-sm text-slate-600 py-12 text-center">{qrError}</div>
          ) : (
            <>
              <div className="qr-light-surface rounded-xl border border-slate-200 bg-white p-3 shadow-xs max-w-full overflow-hidden">
                {pngDataUrl && (
                  <img
                    src={pngDataUrl}
                    alt={s.qrAlt}
                    width={size}
                    height={size}
                    className="max-w-full h-auto block"
                  />
                )}
                <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                {pngDataUrl && (
                  <a
                    href={pngDataUrl}
                    download={`qr-code-${payloadType}.png`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    <Download className="w-4 h-4" />
                    {s.downloadPng}
                  </a>
                )}
                <button
                  type="button"
                  onClick={downloadSvg}
                  disabled={!svgMarkup}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  {s.downloadSvg}
                </button>
                <CopyButton text={svgMarkup} label={s.copySvg} copiedLabel={t.common.copied} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
