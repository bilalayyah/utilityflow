import { AlertTriangle } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    styleNames: {
      'sans-bold': 'Bold (Sans-Serif)',
      'sans-italic': 'Italic (Sans-Serif)',
      'sans-bold-italic': 'Bold Italic (Sans-Serif)',
      'serif-bold': 'Bold (Serif)',
      monospace: 'Monospace',
      'double-struck': 'Double-Struck (Blackboard)',
      'script-bold': 'Script Bold',
      'fraktur-bold': 'Fraktur Bold',
      'small-caps': 'Small Caps',
      fullwidth: 'Fullwidth Aesthetic',
    },
    styleNotes: {
      'sans-bold': 'High legibility for bio headers & post hooks',
      'sans-italic': 'Subtle emphasis inside captions',
      'sans-bold-italic': 'Strong callouts & section dividers',
      'serif-bold': 'Editorial style emphasis',
      monospace: 'Code handles, dates & technical tags',
      'double-struck': 'Display accents',
      'script-bold': 'Decorative bio signatures',
      'fraktur-bold': 'Gothic display lettering',
      'small-caps': 'Clean uppercase-look profile labels',
      fullwidth: 'Wide-spaced retro social headers',
    },
    sampleText: 'New Creator Toolkit 2025',
    accessibilityTitle: 'Accessibility Note:',
    accessibilityBody:
      'Stylized Unicode characters belong to mathematical symbol blocks, so screen readers may read them letter-by-letter or skip them, and some search indexes ignore them. Use sparingly for short highlights rather than full paragraphs.',
    labelInput: 'Text to Stylize',
    placeholder: 'Type a short headline, bio line, or CTA...',
    previewEmpty: 'Preview',
  },
  es: {
    styleNames: {
      'sans-bold': 'Negrita (sans serif)',
      'sans-italic': 'Cursiva (sans serif)',
      'sans-bold-italic': 'Negrita cursiva (sans serif)',
      'serif-bold': 'Negrita (serif)',
      monospace: 'Monoespaciada',
      'double-struck': 'Doble trazo (pizarra)',
      'script-bold': 'Cursiva decorativa en negrita',
      'fraktur-bold': 'Fraktur en negrita',
      'small-caps': 'Versalitas',
      fullwidth: 'Estética de ancho completo',
    },
    styleNotes: {
      'sans-bold': 'Alta legibilidad para encabezados de biografía y ganchos de publicaciones',
      'sans-italic': 'Énfasis sutil dentro de las descripciones',
      'sans-bold-italic': 'Llamados fuertes y divisores de sección',
      'serif-bold': 'Énfasis de estilo editorial',
      monospace: 'Nombres de usuario de código, fechas y etiquetas técnicas',
      'double-struck': 'Acentos de exhibición',
      'script-bold': 'Firmas decorativas para biografías',
      'fraktur-bold': 'Letras góticas de exhibición',
      'small-caps': 'Etiquetas de perfil limpias con aspecto de mayúsculas',
      fullwidth: 'Encabezados sociales retro con espaciado amplio',
    },
    sampleText: 'Nuevo kit de herramientas para creadores 2025',
    accessibilityTitle: 'Nota de accesibilidad:',
    accessibilityBody:
      'Los caracteres Unicode estilizados pertenecen a bloques de símbolos matemáticos, por lo que los lectores de pantalla pueden leerlos letra por letra u omitirlos, y algunos índices de búsqueda los ignoran. Úselos con moderación para resaltar textos cortos, no para párrafos completos.',
    labelInput: 'Texto para estilizar',
    placeholder: 'Escriba un titular corto, una línea de biografía o un llamado a la acción...',
    previewEmpty: 'Vista previa',
  },
  pt: {
    styleNames: {
      'sans-bold': 'Negrito (sans-serif)',
      'sans-italic': 'Itálico (sans-serif)',
      'sans-bold-italic': 'Negrito itálico (sans-serif)',
      'serif-bold': 'Negrito (serif)',
      monospace: 'Monospace',
      'double-struck': 'Duplo traço (quadro-negro)',
      'script-bold': 'Script em negrito',
      'fraktur-bold': 'Fraktur em negrito',
      'small-caps': 'Versalete',
      fullwidth: 'Estética fullwidth',
    },
    styleNotes: {
      'sans-bold': 'Alta legibilidade para cabeçalhos de bio e ganchos de publicações',
      'sans-italic': 'Ênfase sutil dentro de legendas',
      'sans-bold-italic': 'Chamadas fortes e divisores de seção',
      'serif-bold': 'Ênfase de estilo editorial',
      monospace: 'Handles de código, datas e tags técnicas',
      'double-struck': 'Acentos de exibição',
      'script-bold': 'Assinaturas decorativas de bio',
      'fraktur-bold': 'Letras góticas de exibição',
      'small-caps': 'Rótulos de perfil limpos com aparência de maiúsculas',
      fullwidth: 'Cabeçalhos sociais retrô com espaçamento amplo',
    },
    sampleText: 'Novo kit de ferramentas para criadores 2025',
    accessibilityTitle: 'Nota de acessibilidade:',
    accessibilityBody:
      'Caracteres Unicode estilizados pertencem a blocos de símbolos matemáticos, então os leitores de tela podem lê-los letra por letra ou ignorá-los, e alguns índices de busca os ignoram. Use com moderação para destaques curtos, não para parágrafos inteiros.',
    labelInput: 'Texto para estilizar',
    placeholder: 'Digite um título curto, uma linha de bio ou um CTA...',
    previewEmpty: 'Pré-visualização',
  },
  fr: {
    styleNames: {
      'sans-bold': 'Gras (sans-serif)',
      'sans-italic': 'Italique (sans-serif)',
      'sans-bold-italic': 'Gras italique (sans-serif)',
      'serif-bold': 'Gras (serif)',
      monospace: 'Monospace',
      'double-struck': 'Double barré (tableau noir)',
      'script-bold': 'Script gras',
      'fraktur-bold': 'Fraktur gras',
      'small-caps': 'Petites capitales',
      fullwidth: 'Esthétique pleine largeur',
    },
    styleNotes: {
      'sans-bold': 'Haute lisibilité pour les en-têtes de bio et les accroches de publications',
      'sans-italic': 'Emphase subtile dans les légendes',
      'sans-bold-italic': 'Appels forts et séparateurs de section',
      'serif-bold': 'Emphase de style éditorial',
      monospace: 'Pseudos de code, dates et balises techniques',
      'double-struck': 'Accents d’affichage',
      'script-bold': 'Signatures décoratives de bio',
      'fraktur-bold': 'Lettrage gothique d’affichage',
      'small-caps': 'Libellés de profil épurés avec aspect majuscules',
      fullwidth: 'En-têtes sociaux rétro à large espacement',
    },
    sampleText: 'Nouvelle boîte à outils pour créateurs 2025',
    accessibilityTitle: 'Note d’accessibilité :',
    accessibilityBody:
      'Les caractères Unicode stylisés appartiennent à des blocs de symboles mathématiques, donc les lecteurs d’écran peuvent les lire lettre par lettre ou les ignorer, et certains index de recherche les ignorent. Utilisez-les avec parcimonie pour de courtes mises en avant plutôt que pour des paragraphes entiers.',
    labelInput: 'Texte à styliser',
    placeholder: 'Saisissez un titre court, une ligne de bio ou un CTA...',
    previewEmpty: 'Aperçu',
  },
};

type StyleId = keyof typeof STRINGS.en.styleNames;

interface StyleDef {
  id: StyleId;
  transform: (input: string) => string;
}

function mapCodePoints(
  input: string,
  upperStart: number,
  lowerStart: number,
  digitStart?: number,
  exceptions: Record<string, string> = {}
): string {
  return Array.from(input)
    .map((ch) => {
      if (exceptions[ch]) return exceptions[ch];
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(upperStart + (code - 65));
      }
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(lowerStart + (code - 97));
      }
      if (digitStart !== undefined && code >= 48 && code <= 57) {
        return String.fromCodePoint(digitStart + (code - 48));
      }
      return ch;
    })
    .join('');
}

const SMALL_CAPS_MAP: Record<string, string> = {
  a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ',
  j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ',
  s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ',
};

const STYLES: StyleDef[] = [
  {
    id: 'sans-bold',
    transform: (s) => mapCodePoints(s, 0x1d5d4, 0x1d5ee, 0x1d7ec),
  },
  {
    id: 'sans-italic',
    transform: (s) => mapCodePoints(s, 0x1d608, 0x1d622),
  },
  {
    id: 'sans-bold-italic',
    transform: (s) => mapCodePoints(s, 0x1d63c, 0x1d656),
  },
  {
    id: 'serif-bold',
    transform: (s) => mapCodePoints(s, 0x1d400, 0x1d41a, 0x1d7ce),
  },
  {
    id: 'monospace',
    transform: (s) => mapCodePoints(s, 0x1d670, 0x1d68a, 0x1d7f6),
  },
  {
    id: 'double-struck',
    transform: (s) =>
      mapCodePoints(s, 0x1d538, 0x1d552, 0x1d7d8, {
        C: 'ℂ',
        H: 'ℍ',
        N: 'ℕ',
        P: 'ℙ',
        Q: 'ℚ',
        R: 'ℝ',
        Z: 'ℤ',
      }),
  },
  {
    id: 'script-bold',
    transform: (s) => mapCodePoints(s, 0x1d4d0, 0x1d4ea),
  },
  {
    id: 'fraktur-bold',
    transform: (s) => mapCodePoints(s, 0x1d56c, 0x1d586),
  },
  {
    id: 'small-caps',
    transform: (s) =>
      Array.from(s)
        .map((c) => SMALL_CAPS_MAP[c.toLowerCase()] ?? c)
        .join(''),
  },
  {
    id: 'fullwidth',
    transform: (s) =>
      Array.from(s)
        .map((ch) => {
          if (ch === ' ') return '\u3000';
          const code = ch.charCodeAt(0);
          if (code >= 33 && code <= 126) return String.fromCodePoint(code + 0xfee0);
          return ch;
        })
        .join(''),
  },
];

export default function UnicodeTextFormatterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [input, setInput] = useState(s.sampleText);

  const outputs = useMemo(
    () =>
      STYLES.map((style) => ({
        ...style,
        value: style.transform(input),
      })),
    [input]
  );

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
        <p>
          <strong>{s.accessibilityTitle}</strong> {s.accessibilityBody}
        </p>
      </div>

      <div>
        <label htmlFor="utf-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
          {s.labelInput}
        </label>
        <input
          id="utf-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={s.placeholder}
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {outputs.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col justify-between gap-3"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold text-slate-900">{s.styleNames[item.id]}</span>
                <CopyButton text={item.value} label={t.common.copy} copiedLabel={t.common.copied} />
              </div>
              <p className="text-xs text-slate-500 mb-2">{s.styleNotes[item.id]}</p>
              <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2.5 text-base text-slate-900 break-words">
                {item.value || <span className="text-slate-400">{s.previewEmpty}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
