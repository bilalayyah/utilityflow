import { ExternalLink, Info } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    ruleSummaries: {
      x: '4–15 chars · letters, numbers, underscores',
      instagram: '1–30 chars · letters, numbers, periods, underscores',
      tiktok: '2–24 chars · letters, numbers, underscores, periods',
      youtube: '3–30 chars · letters, numbers, _, -, .',
      threads: '1–30 chars · shared Instagram namespace',
      github: '1–39 chars · alphanumeric and single hyphens',
    },
    infoTitle: 'Rule Validator & Direct Check Links:',
    infoBodyBefore:
      "Validates handle syntax and character limits offline without guessing availability. Click any platform's",
    infoEm: 'Open Profile URL',
    infoBodyAfter: 'link to verify live claim status directly.',
    labelBrand: 'Brand, Project, or Creator Name',
    phBrand: 'e.g. Utility Hub',
    labelActive: 'Active Handle to Validate',
    copyAt: 'Copy @',
    variationsTitle: 'Consistent Handle Variations:',
    thPlatform: 'Platform',
    thRules: 'Format Rules',
    thStatus: 'Syntax Status',
    thCheck: 'Manual Check',
    valid: 'Valid format',
    invalid: 'Invalid syntax/length',
    checkUrl: 'Check URL',
  },
  es: {
    ruleSummaries: {
      x: '4–15 caracteres · letras, números, guiones bajos',
      instagram: '1–30 caracteres · letras, números, puntos, guiones bajos',
      tiktok: '2–24 caracteres · letras, números, guiones bajos, puntos',
      youtube: '3–30 caracteres · letras, números, _, -, .',
      threads: '1–30 caracteres · espacio de nombres compartido de Instagram',
      github: '1–39 caracteres · alfanuméricos y guiones simples',
    },
    infoTitle: 'Validador de reglas y enlaces de verificación directa:',
    infoBodyBefore:
      'Valida la sintaxis del nombre de usuario y los límites de caracteres sin conexión, sin adivinar la disponibilidad. Haga clic en el enlace',
    infoEm: 'Abrir URL del perfil',
    infoBodyAfter: 'de cualquier plataforma para verificar en vivo si el nombre ya está en uso.',
    labelBrand: 'Nombre de marca, proyecto o creador',
    phBrand: 'p. ej., Utility Hub',
    labelActive: 'Nombre de usuario activo para validar',
    copyAt: 'Copiar @',
    variationsTitle: 'Variaciones consistentes del nombre de usuario:',
    thPlatform: 'Plataforma',
    thRules: 'Reglas de formato',
    thStatus: 'Estado de sintaxis',
    thCheck: 'Verificación manual',
    valid: 'Formato válido',
    invalid: 'Sintaxis o longitud no válidas',
    checkUrl: 'Verificar URL',
  },
  pt: {
    ruleSummaries: {
      x: '4–15 caracteres · letras, números, sublinhados',
      instagram: '1–30 caracteres · letras, números, pontos, sublinhados',
      tiktok: '2–24 caracteres · letras, números, sublinhados, pontos',
      youtube: '3–30 caracteres · letras, números, _, -, .',
      threads: '1–30 caracteres · namespace compartilhado do Instagram',
      github: '1–39 caracteres · alfanuméricos e hifens simples',
    },
    infoTitle: 'Validador de regras e links de verificação direta:',
    infoBodyBefore:
      'Valida a sintaxe do nome de usuário e os limites de caracteres offline, sem adivinhar a disponibilidade. Clique no link',
    infoEm: 'Abrir URL do perfil',
    infoBodyAfter: 'de qualquer plataforma para verificar ao vivo se o nome já está em uso.',
    labelBrand: 'Nome da marca, projeto ou criador',
    phBrand: 'ex.: Utility Hub',
    labelActive: 'Nome de usuário ativo para validar',
    copyAt: 'Copiar @',
    variationsTitle: 'Variações consistentes de nome de usuário:',
    thPlatform: 'Plataforma',
    thRules: 'Regras de formato',
    thStatus: 'Status de sintaxe',
    thCheck: 'Verificação manual',
    valid: 'Formato válido',
    invalid: 'Sintaxe ou tamanho inválidos',
    checkUrl: 'Verificar URL',
  },
  fr: {
    ruleSummaries: {
      x: '4–15 car. · lettres, chiffres, tirets bas',
      instagram: '1–30 car. · lettres, chiffres, points, tirets bas',
      tiktok: '2–24 car. · lettres, chiffres, tirets bas, points',
      youtube: '3–30 car. · lettres, chiffres, _, -, .',
      threads: '1–30 car. · espace de noms Instagram partagé',
      github: '1–39 car. · alphanumériques et traits d’union simples',
    },
    infoTitle: 'Validateur de règles et liens de vérification directe :',
    infoBodyBefore:
      'Valide la syntaxe du pseudo et les limites de caractères hors ligne, sans deviner la disponibilité. Cliquez sur le lien',
    infoEm: 'Ouvrir l’URL du profil',
    infoBodyAfter: 'de n’importe quelle plateforme pour vérifier en direct si le pseudo est déjà pris.',
    labelBrand: 'Nom de marque, de projet ou de créateur',
    phBrand: 'p. ex. Utility Hub',
    labelActive: 'Pseudo actif à valider',
    copyAt: 'Copier @',
    variationsTitle: 'Variations cohérentes du pseudo :',
    thPlatform: 'Plateforme',
    thRules: 'Règles de format',
    thStatus: 'Statut de syntaxe',
    thCheck: 'Vérification manuelle',
    valid: 'Format valide',
    invalid: 'Syntaxe ou longueur non valides',
    checkUrl: 'Vérifier l’URL',
  },
  de: {
    ruleSummaries: {
      x: '4–15 Zeichen · Buchstaben, Zahlen, Unterstriche',
      instagram: '1–30 Zeichen · Buchstaben, Zahlen, Punkte, Unterstriche',
      tiktok: '2–24 Zeichen · Buchstaben, Zahlen, Unterstriche, Punkte',
      youtube: '3–30 Zeichen · Buchstaben, Zahlen, _, -, .',
      threads: '1–30 Zeichen · gemeinsamer Instagram-Namensraum',
      github: '1–39 Zeichen · alphanumerisch und einzelne Bindestriche',
    },
    infoTitle: 'Regelprüfer & direkte Prüflinks:',
    infoBodyBefore:
      'Prüft Handle-Syntax und Zeichenlimits offline, ohne die Verfügbarkeit zu raten. Klicken Sie auf den',
    infoEm: 'Profil-URL öffnen',
    infoBodyAfter: '-Link einer Plattform, um den Live-Status direkt zu prüfen.',
    labelBrand: 'Marken-, Projekt- oder Creator-Name',
    phBrand: 'z. B. Utility Hub',
    labelActive: 'Aktiver Handle zur Prüfung',
    copyAt: '@ kopieren',
    variationsTitle: 'Einheitliche Handle-Varianten:',
    thPlatform: 'Plattform',
    thRules: 'Formatregeln',
    thStatus: 'Syntax-Status',
    thCheck: 'Manuelle Prüfung',
    valid: 'Gültiges Format',
    invalid: 'Ungültige Syntax/Länge',
    checkUrl: 'URL prüfen',
  },
  it: {
    ruleSummaries: {
      x: '4–15 caratteri · lettere, numeri, trattini bassi',
      instagram: '1–30 caratteri · lettere, numeri, punti, trattini bassi',
      tiktok: '2–24 caratteri · lettere, numeri, trattini bassi, punti',
      youtube: '3–30 caratteri · lettere, numeri, _, -, .',
      threads: '1–30 caratteri · namespace Instagram condiviso',
      github: '1–39 caratteri · alfanumerici e trattini singoli',
    },
    infoTitle: 'Validatore di regole e link di verifica diretta:',
    infoBodyBefore:
      'Convalida sintassi e limiti di caratteri degli handle offline senza indovinare la disponibilità. Fai clic sul link',
    infoEm: 'Apri URL profilo',
    infoBodyAfter: 'di una piattaforma per verificare direttamente lo stato live.',
    labelBrand: 'Nome di brand, progetto o creator',
    phBrand: 'es. Utility Hub',
    labelActive: 'Handle attivo da convalidare',
    copyAt: 'Copia @',
    variationsTitle: 'Varianti di handle coerenti:',
    thPlatform: 'Piattaforma',
    thRules: 'Regole di formato',
    thStatus: 'Stato sintassi',
    thCheck: 'Verifica manuale',
    valid: 'Formato valido',
    invalid: 'Sintassi/lunghezza non valida',
    checkUrl: 'Verifica URL',
  },
  id: {
    ruleSummaries: {
      x: '4–15 karakter · huruf, angka, garis bawah',
      instagram: '1–30 karakter · huruf, angka, titik, garis bawah',
      tiktok: '2–24 karakter · huruf, angka, garis bawah, titik',
      youtube: '3–30 karakter · huruf, angka, _, -, .',
      threads: '1–30 karakter · namespace Instagram bersama',
      github: '1–39 karakter · alfanumerik dan tanda hubung tunggal',
    },
    infoTitle: 'Validator Aturan & Tautan Pemeriksaan Langsung:',
    infoBodyBefore:
      "Memvalidasi sintaks handle dan batas karakter secara offline tanpa menebak ketersediaan. Klik tautan ",
    infoEm: 'Buka URL Profil',
    infoBodyAfter: ' untuk memverifikasi status klaim langsung.',
    labelBrand: 'Nama Merek, Proyek, atau Kreator',
    phBrand: 'cth. Utility Hub',
    labelActive: 'Handle Aktif untuk Divalidasi',
    copyAt: 'Salin @',
    variationsTitle: 'Variasi Handle yang Konsisten:',
    thPlatform: 'Platform',
    thRules: 'Aturan Format',
    thStatus: 'Status Sintaks',
    thCheck: 'Pemeriksaan Manual',
    valid: 'Format valid',
    invalid: 'Sintaks/panjang tidak valid',
    checkUrl: 'Periksa URL',
  },
  ru: {
    ruleSummaries: {
      x: '4–15 симв. · буквы, цифры, подчёркивания',
      instagram: '1–30 симв. · буквы, цифры, точки, подчёркивания',
      tiktok: '2–24 симв. · буквы, цифры, подчёркивания, точки',
      youtube: '3–30 симв. · буквы, цифры, _, -, .',
      threads: '1–30 симв. · общее пространство имён Instagram',
      github: '1–39 симв. · буквы, цифры и одиночные дефисы',
    },
    infoTitle: 'Проверка правил и прямые ссылки для проверки:',
    infoBodyBefore:
      "Проверяет синтаксис и ограничения длины хендла офлайн, не угадывая доступность. Нажмите на ссылку ",
    infoEm: 'Открыть URL профиля',
    infoBodyAfter: ', чтобы проверить статус занятости напрямую.',
    labelBrand: 'Имя бренда, проекта или автора',
    phBrand: 'напр. Utility Hub',
    labelActive: 'Активный хендл для проверки',
    copyAt: 'Копировать @',
    variationsTitle: 'Согласованные варианты хендлов:',
    thPlatform: 'Платформа',
    thRules: 'Правила формата',
    thStatus: 'Статус синтаксиса',
    thCheck: 'Ручная проверка',
    valid: 'Допустимый формат',
    invalid: 'Недопустимый синтаксис/длина',
    checkUrl: 'Проверить URL',
  },
};

type PlatformId = keyof typeof STRINGS.en.ruleSummaries;

interface PlatformRule {
  id: PlatformId;
  platform: string;
  min: number;
  max: number;
  pattern: RegExp;
  buildUrl: (handle: string) => string;
}

const PLATFORM_RULES: PlatformRule[] = [
  {
    id: 'x',
    platform: 'X (Twitter)',
    min: 4,
    max: 15,
    pattern: /^[a-z0-9_]+$/,
    buildUrl: (h) => `https://x.com/${h}`,
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    min: 1,
    max: 30,
    pattern: /^(?!.*\.\.)(?!.*\.$)[a-z0-9._]+$/,
    buildUrl: (h) => `https://www.instagram.com/${h}/`,
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    min: 2,
    max: 24,
    pattern: /^(?!.*\.$)[a-z0-9._]+$/,
    buildUrl: (h) => `https://www.tiktok.com/@${h}`,
  },
  {
    id: 'youtube',
    platform: 'YouTube @handle',
    min: 3,
    max: 30,
    pattern: /^[a-z0-9._-]+$/,
    buildUrl: (h) => `https://www.youtube.com/@${h}`,
  },
  {
    id: 'threads',
    platform: 'Threads',
    min: 1,
    max: 30,
    pattern: /^(?!.*\.\.)(?!.*\.$)[a-z0-9._]+$/,
    buildUrl: (h) => `https://www.threads.net/@${h}`,
  },
  {
    id: 'github',
    platform: 'GitHub',
    min: 1,
    max: 39,
    pattern: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    buildUrl: (h) => `https://github.com/${h}`,
  },
];

export default function SocialHandleFormatterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [brandInput, setBrandInput] = useState('Utility Hub');
  const [selectedVariant, setSelectedVariant] = useState('');

  const cleanBase = useMemo(() => {
    const words = brandInput
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    return words;
  }, [brandInput]);

  const suggestions = useMemo(() => {
    if (cleanBase.length === 0) return [];
    const joined = cleanBase.join('');
    const dotted = cleanBase.join('.');
    const underscored = cleanBase.join('_');
    const hyphenated = cleanBase.join('-');

    return Array.from(
      new Set([
        joined,
        underscored,
        dotted,
        hyphenated,
        `get${joined}`,
        `use${joined}`,
        `${joined}hq`,
        `${joined}app`,
        `the${joined}`,
        `${joined}studio`,
      ])
    );
  }, [cleanBase]);

  const activeHandle = (selectedVariant || suggestions[0] || '').toLowerCase().replace(/^@+/, '');

  const validations = useMemo(() => {
    return PLATFORM_RULES.map((rule) => {
      const lenOk = activeHandle.length >= rule.min && activeHandle.length <= rule.max;
      const charOk = activeHandle.length > 0 && rule.pattern.test(activeHandle);
      return {
        ...rule,
        valid: lenOk && charOk,
        url: activeHandle ? rule.buildUrl(activeHandle) : '',
      };
    });
  }, [activeHandle]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
        <Info className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
        <p>
          <strong>{s.infoTitle}</strong> {s.infoBodyBefore} <em>{s.infoEm}</em> {s.infoBodyAfter}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="shf-brand" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelBrand}
          </label>
          <input
            id="shf-brand"
            type="text"
            value={brandInput}
            onChange={(e) => {
              setBrandInput(e.target.value);
              setSelectedVariant('');
            }}
            placeholder={s.phBrand}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          />
        </div>

        <div>
          <label htmlFor="shf-active" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelActive}
          </label>
          <div className="flex gap-2">
            <input
              id="shf-active"
              type="text"
              value={activeHandle}
              onChange={(e) => setSelectedVariant(e.target.value)}
              placeholder="utilityflow"
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
            />
            <CopyButton text={activeHandle ? `@${activeHandle}` : ''} label={s.copyAt} copiedLabel={t.common.copied} />
          </div>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div>
          <div className="text-xs font-semibold text-slate-600 mb-2">{s.variationsTitle}</div>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((variant) => (
              <button
                key={variant}
                type="button"
                onClick={() => setSelectedVariant(variant)}
                className={`rounded-lg border px-3 py-1.5 font-mono text-xs cursor-pointer ${
                  activeHandle === variant
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-800 font-semibold'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-300'
                }`}
              >
                @{variant}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl border border-slate-200 overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
            <tr>
              <th className="py-2.5 px-4 font-semibold">{s.thPlatform}</th>
              <th className="py-2.5 px-4 font-semibold">{s.thRules}</th>
              <th className="py-2.5 px-4 font-semibold">{s.thStatus}</th>
              <th className="py-2.5 px-4 font-semibold text-right">{s.thCheck}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {validations.map((v) => (
              <tr key={v.platform}>
                <td className="py-2.5 px-4 font-semibold text-slate-900">{v.platform}</td>
                <td className="py-2.5 px-4 text-slate-600">{s.ruleSummaries[v.id]}</td>
                <td className="py-2.5 px-4">
                  <span
                    className={`font-semibold ${
                      v.valid ? 'text-emerald-700' : 'text-red-700'
                    }`}
                  >
                    {v.valid ? s.valid : s.invalid}
                  </span>
                </td>
                <td className="py-2.5 px-4 text-right">
                  {v.valid ? (
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      {s.checkUrl}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
