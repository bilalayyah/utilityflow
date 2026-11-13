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
  pt: {
    tabUrl: 'URL do site',
    tabText: 'Texto simples',
    tabWifi: 'Rede Wi-Fi',
    tabEmail: 'Link de e-mail',
    tabPhone: 'Número de telefone',
    labelUrl: 'URL de destino',
    labelText: 'Conteúdo de texto',
    labelSsid: 'Nome da rede (SSID)',
    labelSecurity: 'Tipo de segurança',
    optWpa: 'WPA / WPA2 / WPA3',
    optWep: 'WEP',
    optOpen: 'Aberta (sem senha)',
    labelWifiPass: 'Senha do Wi-Fi',
    hiddenSsid: 'Rede com SSID oculto',
    labelEmailTo: 'E-mail do destinatário',
    labelEmailSubject: 'Assunto (opcional)',
    labelPhone: 'Número de telefone (formato E.164 recomendado)',
    sizeLabel: (size: number) => `Tamanho (${size}px)`,
    labelEc: 'Correção de erros',
    labelFg: 'Primeiro plano',
    labelBg: 'Fundo',
    quietZone: 'Margem da zona de silêncio:',
    modulesLabel: (margin: number) => `${margin} módulos`,
    encodedPayload: 'String de dados codificada',
    copyPayload: 'Copiar dados',
    emptyError: 'Insira conteúdo acima para gerar um código QR escaneável.',
    encodeError: 'Não foi possível codificar o conteúdo do QR.',
    qrAlt: 'Código QR escaneável gerado',
    downloadPng: 'Baixar PNG',
    downloadSvg: 'Baixar SVG',
    copySvg: 'Copiar SVG',
    sampleText: 'Bem-vindo ao UtilityFlow!',
  },
  fr: {
    tabUrl: 'URL du site web',
    tabText: 'Texte brut',
    tabWifi: 'Réseau Wi-Fi',
    tabEmail: 'Lien e-mail',
    tabPhone: 'Numéro de téléphone',
    labelUrl: 'URL de destination',
    labelText: 'Contenu du texte',
    labelSsid: 'Nom du réseau (SSID)',
    labelSecurity: 'Type de sécurité',
    optWpa: 'WPA / WPA2 / WPA3',
    optWep: 'WEP',
    optOpen: 'Ouvert (sans mot de passe)',
    labelWifiPass: 'Mot de passe Wi-Fi',
    hiddenSsid: 'Réseau à SSID masqué',
    labelEmailTo: 'E-mail du destinataire',
    labelEmailSubject: 'Objet (facultatif)',
    labelPhone: 'Numéro de téléphone (format E.164 recommandé)',
    sizeLabel: (size: number) => `Taille (${size}px)`,
    labelEc: 'Correction d’erreurs',
    labelFg: 'Premier plan',
    labelBg: 'Arrière-plan',
    quietZone: 'Marge de zone de silence :',
    modulesLabel: (margin: number) => `${margin} modules`,
    encodedPayload: 'Chaîne de données encodée',
    copyPayload: 'Copier les données',
    emptyError: 'Saisissez du contenu ci-dessus pour générer un QR code scannable.',
    encodeError: 'Impossible d’encoder le contenu du QR code.',
    qrAlt: 'QR code scannable généré',
    downloadPng: 'Télécharger le PNG',
    downloadSvg: 'Télécharger le SVG',
    copySvg: 'Copier le SVG',
    sampleText: 'Bienvenue sur UtilityFlow !',
  },
  de: {
    tabUrl: 'Website-URL',
    tabText: 'Reiner Text',
    tabWifi: 'WLAN-Netzwerk',
    tabEmail: 'E-Mail-Link',
    tabPhone: 'Telefonnummer',
    labelUrl: 'Ziel-URL',
    labelText: 'Textinhalt',
    labelSsid: 'Netzwerkname (SSID)',
    labelSecurity: 'Sicherheitstyp',
    optWpa: 'WPA / WPA2 / WPA3',
    optWep: 'WEP',
    optOpen: 'Offen (kein Passwort)',
    labelWifiPass: 'WLAN-Passwort',
    hiddenSsid: 'Verstecktes SSID-Netzwerk',
    labelEmailTo: 'Empfänger-E-Mail',
    labelEmailSubject: 'Betreff (optional)',
    labelPhone: 'Telefonnummer (Format E.164 empfohlen)',
    sizeLabel: (size: number) => `Größe (${size}px)`,
    labelEc: 'Fehlerkorrektur',
    labelFg: 'Vordergrund',
    labelBg: 'Hintergrund',
    quietZone: 'Rand der Ruhezone:',
    modulesLabel: (margin: number) => `${margin} Module`,
    encodedPayload: 'Kodierte Payload-Zeichenkette',
    copyPayload: 'Payload kopieren',
    emptyError: 'Geben Sie oben Inhalte ein, um einen scannbaren QR-Code zu erzeugen.',
    encodeError: 'QR-Payload konnte nicht kodiert werden.',
    qrAlt: 'Generierter scannbarer QR-Code',
    downloadPng: 'PNG herunterladen',
    downloadSvg: 'SVG herunterladen',
    copySvg: 'SVG kopieren',
    sampleText: 'Willkommen bei UtilityFlow!',
  },
  it: {
    tabUrl: 'URL sito web',
    tabText: 'Testo semplice',
    tabWifi: 'Rete Wi-Fi',
    tabEmail: 'Link email',
    tabPhone: 'Numero di telefono',
    labelUrl: 'URL di destinazione',
    labelText: 'Contenuto testuale',
    labelSsid: 'Nome rete (SSID)',
    labelSecurity: 'Tipo di sicurezza',
    optWpa: 'WPA / WPA2 / WPA3',
    optWep: 'WEP',
    optOpen: 'Aperta (senza password)',
    labelWifiPass: 'Password Wi-Fi',
    hiddenSsid: 'Rete SSID nascosta',
    labelEmailTo: 'Email destinatario',
    labelEmailSubject: 'Oggetto (facoltativo)',
    labelPhone: 'Numero di telefono (formato E.164 consigliato)',
    sizeLabel: (size: number) => `Dimensioni (${size}px)`,
    labelEc: 'Correzione errori',
    labelFg: 'Primo piano',
    labelBg: 'Sfondo',
    quietZone: 'Margine zona di quiete:',
    modulesLabel: (margin: number) => `${margin} moduli`,
    encodedPayload: 'Stringa payload codificata',
    copyPayload: 'Copia payload',
    emptyError: 'Inserisci il contenuto qui sopra per generare un codice QR scansionabile.',
    encodeError: 'Impossibile codificare il payload QR.',
    qrAlt: 'Codice QR scansionabile generato',
    downloadPng: 'Scarica PNG',
    downloadSvg: 'Scarica SVG',
    copySvg: 'Copia SVG',
    sampleText: 'Benvenuto su UtilityFlow!',
  },
  id: {
    tabUrl: 'URL Situs Web',
    tabText: 'Teks Biasa',
    tabWifi: 'Jaringan Wi-Fi',
    tabEmail: 'Tautan Email',
    tabPhone: 'Nomor Telepon',
    labelUrl: 'URL Tujuan',
    labelText: 'Konten Teks',
    labelSsid: 'Nama Jaringan (SSID)',
    labelSecurity: 'Tipe Keamanan',
    optWpa: 'WPA / WPA2 / WPA3',
    optWep: 'WEP',
    optOpen: 'Terbuka (Tanpa Kata Sandi)',
    labelWifiPass: 'Kata Sandi Wi-Fi',
    hiddenSsid: 'Jaringan SSID tersembunyi',
    labelEmailTo: 'Email Penerima',
    labelEmailSubject: 'Subjek (Opsional)',
    labelPhone: 'Nomor Telepon (disarankan format E.164)',
    sizeLabel: (size: number) => `Ukuran (${size}px)`,
    labelEc: 'Koreksi Kesalahan',
    labelFg: 'Foreground',
    labelBg: 'Latar',
    quietZone: 'Margin Zona Tenang:',
    modulesLabel: (margin: number) => `${margin} modul`,
    encodedPayload: 'String Payload yang Di-encode',
    copyPayload: 'Salin Payload',
    emptyError: 'Masukkan konten di atas untuk membuat kode QR yang dapat dipindai.',
    encodeError: 'Tidak dapat meng-encode payload QR.',
    qrAlt: 'Kode QR yang dapat dipindai yang dihasilkan',
    downloadPng: 'Unduh PNG',
    downloadSvg: 'Unduh SVG',
    copySvg: 'Salin SVG',
    sampleText: 'Selamat datang di UtilityFlow!',
  },
  ru: {
    tabUrl: 'URL сайта',
    tabText: 'Обычный текст',
    tabWifi: 'Сеть Wi-Fi',
    tabEmail: 'Ссылка на email',
    tabPhone: 'Номер телефона',
    labelUrl: 'Целевой URL',
    labelText: 'Текстовое содержимое',
    labelSsid: 'Имя сети (SSID)',
    labelSecurity: 'Тип безопасности',
    optWpa: 'WPA / WPA2 / WPA3',
    optWep: 'WEP',
    optOpen: 'Открытая (без пароля)',
    labelWifiPass: 'Пароль Wi-Fi',
    hiddenSsid: 'Скрытая сеть SSID',
    labelEmailTo: 'Email получателя',
    labelEmailSubject: 'Тема (необязательно)',
    labelPhone: 'Номер телефона (рекомендуется формат E.164)',
    sizeLabel: (size: number) => `Размер (${size}px)`,
    labelEc: 'Коррекция ошибок',
    labelFg: 'Передний план',
    labelBg: 'Фон',
    quietZone: 'Поля тихой зоны:',
    modulesLabel: (margin: number) => `${margin} модулей`,
    encodedPayload: 'Закодированная строка полезной нагрузки',
    copyPayload: 'Копировать полезную нагрузку',
    emptyError: 'Введите содержимое выше, чтобы создать сканируемый QR-код.',
    encodeError: 'Не удаётся закодировать QR-полезную нагрузку.',
    qrAlt: 'Сгенерированный сканируемый QR-код',
    downloadPng: 'Скачать PNG',
    downloadSvg: 'Скачать SVG',
    copySvg: 'Копировать SVG',
    sampleText: 'Добро пожаловать в UtilityFlow!',
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
