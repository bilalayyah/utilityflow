import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    sampleText:
      'Building fast browser tools for makers & teams.   \n\nNew weekly workflow drops every Tuesday.\n\nTry free utilities at the link below!',
    modeBraille: 'Invisible Spacer (⠀ U+2800)',
    modeDot: 'Minimal Dot Spacer (.)',
    modeClean: 'Clean Trailing Spaces Only',
    collapse: 'Collapse accidental double spaces',
    labelRaw: 'Draft Caption or Bio',
    phRaw: 'Write your caption with blank lines where you want paragraph breaks...',
    tip: 'Tip: Social apps often collapse blank paragraphs when trailing spaces sit at the end of the line above.',
    labelOut: 'Ready-to-Paste Output',
    copyFormatted: 'Copy Formatted Caption',
    charsLabel: 'Characters:',
    linesLabel: 'Lines:',
    blankLabel: 'Blank breaks preserved:',
    fitsBio: 'Fits Instagram 150-char bio',
    captionLength: 'Caption length (>150 bio limit)',
  },
  es: {
    sampleText:
      'Creando herramientas rápidas en el navegador para creadores y equipos.   \n\nNuevos consejos de flujo de trabajo cada martes.\n\n¡Pruebe las utilidades gratuitas en el enlace de abajo!',
    modeBraille: 'Espaciador invisible (⠀ U+2800)',
    modeDot: 'Espaciador de punto mínimo (.)',
    modeClean: 'Solo limpiar espacios finales',
    collapse: 'Colapsar espacios dobles accidentales',
    labelRaw: 'Borrador de descripción o biografía',
    phRaw: 'Escriba su descripción con líneas en blanco donde quiera saltos de párrafo...',
    tip: 'Consejo: las aplicaciones sociales suelen colapsar los párrafos en blanco cuando hay espacios finales al final de la línea anterior.',
    labelOut: 'Resultado listo para pegar',
    copyFormatted: 'Copiar descripción formateada',
    charsLabel: 'Caracteres:',
    linesLabel: 'Líneas:',
    blankLabel: 'Saltos en blanco conservados:',
    fitsBio: 'Cabe en la biografía de Instagram de 150 caracteres',
    captionLength: 'Longitud de descripción (supera el límite de 150 de la biografía)',
  },
  pt: {
    sampleText:
      'Criando ferramentas rápidas no navegador para criadores e equipes.   \n\nNovas dicas de fluxo de trabalho toda terça-feira.\n\nExperimente as utilidades gratuitas no link abaixo!',
    modeBraille: 'Espaçador invisível (⠀ U+2800)',
    modeDot: 'Espaçador de ponto mínimo (.)',
    modeClean: 'Apenas limpar espaços finais',
    collapse: 'Recolher espaços duplos acidentais',
    labelRaw: 'Rascunho de legenda ou bio',
    phRaw: 'Escreva sua legenda com linhas em branco onde quiser quebras de parágrafo...',
    tip: 'Dica: os apps de redes sociais costumam recolher parágrafos em branco quando há espaços finais no fim da linha acima.',
    labelOut: 'Resultado pronto para colar',
    copyFormatted: 'Copiar legenda formatada',
    charsLabel: 'Caracteres:',
    linesLabel: 'Linhas:',
    blankLabel: 'Quebras em branco preservadas:',
    fitsBio: 'Cabe na bio do Instagram de 150 caracteres',
    captionLength: 'Tamanho da legenda (acima do limite de 150 da bio)',
  },
  fr: {
    sampleText:
      'Créer des outils de navigateur rapides pour les créateurs et les équipes.   \n\nNouveaux conseils de flux de travail chaque mardi.\n\nEssayez les utilitaires gratuits via le lien ci-dessous !',
    modeBraille: 'Espaceur invisible (⠀ U+2800)',
    modeDot: 'Espaceur point minimal (.)',
    modeClean: 'Nettoyer uniquement les espaces finaux',
    collapse: 'Réduire les doubles espaces accidentels',
    labelRaw: 'Brouillon de légende ou de bio',
    phRaw: 'Rédigez votre légende avec des lignes vides là où vous voulez des sauts de paragraphe...',
    tip: 'Astuce : les applications sociales réduisent souvent les paragraphes vides lorsque des espaces traînent à la fin de la ligne précédente.',
    labelOut: 'Résultat prêt à coller',
    copyFormatted: 'Copier la légende formatée',
    charsLabel: 'Caractères :',
    linesLabel: 'Lignes :',
    blankLabel: 'Sauts vides préservés :',
    fitsBio: 'Convient à la bio Instagram de 150 caractères',
    captionLength: 'Longueur de la légende (au-delà de la limite de 150 de la bio)',
  },
};

type SpacerMode = 'braille' | 'dot' | 'clean-only';

export default function BioLineBreakFormatterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [rawText, setRawText] = useState(s.sampleText);
  const [spacerMode, setSpacerMode] = useState<SpacerMode>('braille');
  const [stripEmojisExtraSpaces, setStripEmojisExtraSpaces] = useState(true);

  const formatted = useMemo(() => {
    const normalized = rawText.replace(/\r\n?/g, '\n');
    const lines = normalized.split('\n').map((line) => {
      let cleaned = line.replace(/[ \t]+$/g, '');
      if (stripEmojisExtraSpaces) {
        cleaned = cleaned.replace(/[ \t]{2,}/g, ' ');
      }
      return cleaned;
    });

    const spacerChar = spacerMode === 'braille' ? '⠀' : spacerMode === 'dot' ? '.' : '';

    return lines
      .map((line) => {
        if (line === '' && spacerChar) {
          return spacerChar;
        }
        return line;
      })
      .join('\n')
      .trim();
  }, [rawText, spacerMode, stripEmojisExtraSpaces]);

  const stats = useMemo(() => {
    const lineCount = formatted ? formatted.split('\n').length : 0;
    const charCount = Array.from(formatted).length;
    const blankLinesPreserved = (rawText.replace(/\r\n?/g, '\n').match(/\n\s*\n/g) || []).length;
    return { lineCount, charCount, blankLinesPreserved };
  }, [formatted, rawText]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex flex-wrap rounded-lg bg-slate-100 p-1">
          {(
            [
              ['braille', s.modeBraille],
              ['dot', s.modeDot],
              ['clean-only', s.modeClean],
            ] as [SpacerMode, string][]
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setSpacerMode(id)}
              className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                spacerMode === id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={stripEmojisExtraSpaces}
            onChange={(e) => setStripEmojisExtraSpaces(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600"
          />
          {s.collapse}
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="bio-raw" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelRaw}
          </label>
          <textarea
            id="bio-raw"
            rows={8}
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder={s.phRaw}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm leading-relaxed"
          />
          <p className="mt-1.5 text-xs text-slate-500">
            {s.tip}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <label htmlFor="bio-out" className="text-sm font-semibold text-slate-900">
              {s.labelOut}
            </label>
            <CopyButton text={formatted} label={s.copyFormatted} copiedLabel={t.common.copied} />
          </div>
          <textarea
            id="bio-out"
            rows={8}
            readOnly
            value={formatted}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm leading-relaxed text-slate-900"
          />
          <div className="mt-1.5 flex flex-wrap gap-4 text-xs text-slate-600 tabular-nums">
            <span>{s.charsLabel} {stats.charCount}</span>
            <span>{s.linesLabel} {stats.lineCount}</span>
            <span>{s.blankLabel} {stats.blankLinesPreserved}</span>
            <span className={stats.charCount <= 150 ? 'text-emerald-700 font-medium' : 'text-slate-600'}>
              {stats.charCount <= 150 ? s.fitsBio : s.captionLength}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
