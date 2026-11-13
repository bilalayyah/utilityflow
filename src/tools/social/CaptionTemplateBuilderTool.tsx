import { Info } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    frameworkNames: {
      pas: 'Problem → Agitate → Solution (PAS)',
      tutorial: '3-Step Actionable Breakdown',
      bab: 'Before → After → Bridge',
      checklist: 'Launch / Audit Checklist',
      myth: 'Common Myth vs. Practical Reality',
    },
    frameworkDescriptions: {
      pas: 'Highlights a concrete pain point before delivering your workflow fix.',
      tutorial: 'Numbered how-to structure suited for LinkedIn carousels and saves.',
      bab: 'Contrasts old friction with the streamlined outcome.',
      checklist: 'High-clarity verification list creators can bookmark.',
      myth: 'Challenges outdated advice with direct, concise alternatives.',
    },
    frameworkLabels: {
      fixesHeading: 'What actually fixes it:',
      beforeLabel: 'Before: ',
      afterLabel: 'After: ',
      bridgeHeading: 'The bridge:',
      mythLabel: 'Common myth: ',
      worksHeading: 'What works in practice:',
    },
    sampleHook: 'Stop losing hours formatting campaign links by hand.',
    sampleContext: 'Inconsistent UTM parameters and broken bio spacing silently distort analytics reports.',
    samplePoints:
      'Standardize lowercase utm_source and utm_medium tags\nValidate character folds before publishing\nKeep clean paragraph breaks without trailing spaces',
    sampleCta: 'Bookmark this checklist for your next product launch.',
    infoTitle: 'Deterministic Template Assembly:',
    infoBody:
      'This tool uses structured copywriting frameworks directly in your browser—no AI model or external API is used or implied.',
    labelHook: 'Opening Hook (First 1–2 lines)',
    labelContext: 'Context / Problem Statement',
    labelPoints: 'Key Takeaways (One point per line)',
    labelCta: 'Call-to-Action (CTA)',
    labelTags: 'Hashtags',
    previewTitle: 'Formatted Caption Preview',
    copyCaption: 'Copy Caption',
    charsLabel: 'Characters:',
    wordsLabel: 'Words:',
    fits: 'Fits',
    threadNeeded: 'Thread needed',
    tooLong: 'Too long',
  },
  es: {
    frameworkNames: {
      pas: 'Problema → Agitación → Solución (PAS)',
      tutorial: 'Desglose práctico en 3 pasos',
      bab: 'Antes → Después → Puente',
      checklist: 'Lista de verificación de lanzamiento / auditoría',
      myth: 'Mito común frente a realidad práctica',
    },
    frameworkDescriptions: {
      pas: 'Destaca un problema concreto antes de ofrecer la solución de flujo de trabajo.',
      tutorial: 'Estructura numerada de instrucciones, ideal para carruseles y guardados de LinkedIn.',
      bab: 'Contrasta la fricción anterior con el resultado optimizado.',
      checklist: 'Lista de verificación clara que los creadores pueden guardar.',
      myth: 'Cuestiona consejos desactualizados con alternativas directas y concisas.',
    },
    frameworkLabels: {
      fixesHeading: 'Lo que realmente lo soluciona:',
      beforeLabel: 'Antes: ',
      afterLabel: 'Después: ',
      bridgeHeading: 'El puente:',
      mythLabel: 'Mito común: ',
      worksHeading: 'Lo que funciona en la práctica:',
    },
    sampleHook: 'Deje de perder horas formateando enlaces de campaña a mano.',
    sampleContext: 'Los parámetros UTM inconsistentes y el espaciado roto de la biografía distorsionan silenciosamente los informes de análisis.',
    samplePoints:
      'Estandarice las etiquetas utm_source y utm_medium en minúsculas\nValide los pliegues de caracteres antes de publicar\nMantenga saltos de párrafo limpios sin espacios finales',
    sampleCta: 'Guarde esta lista de verificación para su próximo lanzamiento de producto.',
    infoTitle: 'Ensamblaje determinista de plantillas:',
    infoBody:
      'Esta herramienta usa marcos estructurados de redacción directamente en su navegador; no se usa ni se sugiere ningún modelo de IA ni API externa.',
    labelHook: 'Gancho inicial (primeras 1–2 líneas)',
    labelContext: 'Contexto / planteamiento del problema',
    labelPoints: 'Puntos clave (un punto por línea)',
    labelCta: 'Llamado a la acción (CTA)',
    labelTags: 'Hashtags',
    previewTitle: 'Vista previa de la descripción formateada',
    copyCaption: 'Copiar descripción',
    charsLabel: 'Caracteres:',
    wordsLabel: 'Palabras:',
    fits: 'Cabe',
    threadNeeded: 'Se necesita un hilo',
    tooLong: 'Demasiado largo',
  },
  pt: {
    frameworkNames: {
      pas: 'Problema → Agitação → Solução (PAS)',
      tutorial: 'Detalhamento prático em 3 passos',
      bab: 'Antes → Depois → Ponte',
      checklist: 'Checklist de lançamento / auditoria',
      myth: 'Mito comum vs. realidade prática',
    },
    frameworkDescriptions: {
      pas: 'Destaca um problema concreto antes de apresentar a solução de fluxo de trabalho.',
      tutorial: 'Estrutura numerada de passo a passo, ideal para carrosséis e salvamentos no LinkedIn.',
      bab: 'Contrasta o atrito anterior com o resultado otimizado.',
      checklist: 'Lista de verificação clara que os criadores podem salvar.',
      myth: 'Questiona conselhos desatualizados com alternativas diretas e concisas.',
    },
    frameworkLabels: {
      fixesHeading: 'O que realmente resolve:',
      beforeLabel: 'Antes: ',
      afterLabel: 'Depois: ',
      bridgeHeading: 'A ponte:',
      mythLabel: 'Mito comum: ',
      worksHeading: 'O que funciona na prática:',
    },
    sampleHook: 'Pare de perder horas formatando links de campanha manualmente.',
    sampleContext: 'Parâmetros UTM inconsistentes e espaçamento quebrado na bio distorcem silenciosamente os relatórios de análise.',
    samplePoints:
      'Padronize as tags utm_source e utm_medium em minúsculas\nValide as quebras de caracteres antes de publicar\nMantenha quebras de parágrafo limpas sem espaços finais',
    sampleCta: 'Salve este checklist para o seu próximo lançamento de produto.',
    infoTitle: 'Montagem determinística de modelos:',
    infoBody:
      'Esta ferramenta usa estruturas de copywriting diretamente no seu navegador — nenhum modelo de IA ou API externa é usado ou sugerido.',
    labelHook: 'Gancho inicial (primeiras 1–2 linhas)',
    labelContext: 'Contexto / descrição do problema',
    labelPoints: 'Pontos principais (um ponto por linha)',
    labelCta: 'Chamada para ação (CTA)',
    labelTags: 'Hashtags',
    previewTitle: 'Pré-visualização da legenda formatada',
    copyCaption: 'Copiar legenda',
    charsLabel: 'Caracteres:',
    wordsLabel: 'Palavras:',
    fits: 'Cabe',
    threadNeeded: 'Precisa de thread',
    tooLong: 'Muito longo',
  },
  fr: {
    frameworkNames: {
      pas: 'Problème → Agitation → Solution (PAS)',
      tutorial: 'Décomposition pratique en 3 étapes',
      bab: 'Avant → Après → Pont',
      checklist: 'Liste de vérification de lancement / audit',
      myth: 'Mythe courant vs réalité pratique',
    },
    frameworkDescriptions: {
      pas: 'Met en avant un problème concret avant de proposer la solution de flux de travail.',
      tutorial: 'Structure numérotée de type tutoriel, idéale pour les carrousels et les enregistrements LinkedIn.',
      bab: 'Oppose les frictions d’avant au résultat optimisé.',
      checklist: 'Liste de vérification claire que les créateurs peuvent enregistrer.',
      myth: 'Remet en question les conseils dépassés avec des alternatives directes et concises.',
    },
    frameworkLabels: {
      fixesHeading: 'Ce qui règle vraiment le problème :',
      beforeLabel: 'Avant : ',
      afterLabel: 'Après : ',
      bridgeHeading: 'Le pont :',
      mythLabel: 'Mythe courant : ',
      worksHeading: 'Ce qui fonctionne en pratique :',
    },
    sampleHook: 'Arrêtez de perdre des heures à formater vos liens de campagne à la main.',
    sampleContext: 'Des paramètres UTM incohérents et un espacement de bio cassé faussent silencieusement les rapports d’analyse.',
    samplePoints:
      'Standardisez les balises utm_source et utm_medium en minuscules\nValidez les coupures de caractères avant de publier\nGardez des sauts de paragraphe propres sans espaces finaux',
    sampleCta: 'Enregistrez cette liste de vérification pour votre prochain lancement de produit.',
    infoTitle: 'Assemblage déterministe des modèles :',
    infoBody:
      'Cet outil utilise des cadres de rédaction structurés directement dans votre navigateur — aucun modèle d’IA ni API externe n’est utilisé ou suggéré.',
    labelHook: 'Accroche d’ouverture (1–2 premières lignes)',
    labelContext: 'Contexte / énoncé du problème',
    labelPoints: 'Points clés (un point par ligne)',
    labelCta: 'Appel à l’action (CTA)',
    labelTags: 'Hashtags',
    previewTitle: 'Aperçu de la légende formatée',
    copyCaption: 'Copier la légende',
    charsLabel: 'Caractères :',
    wordsLabel: 'Mots :',
    fits: 'Convient',
    threadNeeded: 'Fil nécessaire',
    tooLong: 'Trop long',
  },
  de: {
    frameworkNames: {
      pas: 'Problem → Agitieren → Lösung (PAS)',
      tutorial: 'Umsetzbare Aufschlüsselung in 3 Schritten',
      bab: 'Vorher → Nachher → Brücke',
      checklist: 'Launch-/Audit-Checkliste',
      myth: 'Gängiger Mythos vs. praktische Realität',
    },
    frameworkDescriptions: {
      pas: 'Hebt einen konkreten Schmerzpunkt hervor, bevor der Workflow-Fix kommt.',
      tutorial: 'Nummerierte How-to-Struktur, ideal für LinkedIn-Carousels und gespeicherte Beiträge.',
      bab: 'Stellt alte Reibungspunkte dem optimierten Ergebnis gegenüber.',
      checklist: 'Klare Prüfliste, die Creator sich merken können.',
      myth: 'Hinterfragt veraltete Ratschläge mit direkten, prägnanten Alternativen.',
    },
    frameworkLabels: {
      fixesHeading: 'Was wirklich hilft:',
      beforeLabel: 'Vorher: ',
      afterLabel: 'Nachher: ',
      bridgeHeading: 'Die Brücke:',
      mythLabel: 'Gängiger Mythos: ',
      worksHeading: 'Was in der Praxis funktioniert:',
    },
    sampleHook: 'Hören Sie auf, Stunden mit dem manuellen Formatieren von Kampagnen-Links zu verlieren.',
    sampleContext: 'Inkonsistente UTM-Parameter und fehlerhafte Bio-Abstände verfälschen leise Ihre Analytics-Berichte.',
    samplePoints:
      'UTM-Tags utm_source und utm_medium in Kleinbuchstaben standardisieren\nZeilenumbrüche vor dem Veröffentlichen prüfen\nSaubere Absatzumbrüche ohne Leerzeichen am Zeilenende verwenden',
    sampleCta: 'Speichern Sie diese Checkliste für Ihren nächsten Produktlaunch.',
    infoTitle: 'Deterministische Template-Erstellung:',
    infoBody:
      'Dieses Tool nutzt strukturierte Copywriting-Frameworks direkt in Ihrem Browser – es wird kein KI-Modell und keine externe API verwendet oder suggeriert.',
    labelHook: 'Eröffnungshook (erste 1–2 Zeilen)',
    labelContext: 'Kontext / Problemstellung',
    labelPoints: 'Wichtigste Erkenntnisse (ein Punkt pro Zeile)',
    labelCta: 'Handlungsaufforderung (CTA)',
    labelTags: 'Hashtags',
    previewTitle: 'Formatierte Caption-Vorschau',
    copyCaption: 'Caption kopieren',
    charsLabel: 'Zeichen:',
    wordsLabel: 'Wörter:',
    fits: 'Passt',
    threadNeeded: 'Thread nötig',
    tooLong: 'Zu lang',
  },
  it: {
    frameworkNames: {
      pas: 'Problema → Agitazione → Soluzione (PAS)',
      tutorial: 'Scomposizione pratica in 3 passaggi',
      bab: 'Prima → Dopo → Ponte',
      checklist: 'Checklist di lancio / revisione',
      myth: 'Mito comune vs. realtà pratica',
    },
    frameworkDescriptions: {
      pas: 'Evidenzia un problema concreto prima di offrire la soluzione di flusso di lavoro.',
      tutorial: 'Struttura numerata in stile guida, adatta a caroselli LinkedIn e salvataggi.',
      bab: 'Confronta le vecchie difficoltà con il risultato ottimizzato.',
      checklist: 'Elenco di verifica chiaro che i creator possono salvare.',
      myth: 'Mette in discussione i consigli superati con alternative dirette e concise.',
    },
    frameworkLabels: {
      fixesHeading: 'Cosa risolve davvero il problema:',
      beforeLabel: 'Prima: ',
      afterLabel: 'Dopo: ',
      bridgeHeading: 'Il ponte:',
      mythLabel: 'Mito comune: ',
      worksHeading: 'Cosa funziona in pratica:',
    },
    sampleHook: 'Smetti di perdere ore a formattare manualmente i link delle campagne.',
    sampleContext: 'Parametri UTM incoerenti e spaziature della bio sbagliate distorcono silenziosamente i report di analytics.',
    samplePoints:
      'Standardizza i tag utm_source e utm_medium in minuscolo\nVerifica le interruzioni di riga prima di pubblicare\nMantieni interruzioni di paragrafo pulite senza spazi finali',
    sampleCta: 'Salva questa checklist per il tuo prossimo lancio di prodotto.',
    infoTitle: 'Assemblaggio deterministico dei modelli:',
    infoBody:
      'Questo strumento usa framework di copywriting strutturati direttamente nel browser: nessun modello di IA né API esterna viene usato o suggerito.',
    labelHook: 'Gancio di apertura (prime 1–2 righe)',
    labelContext: 'Contesto / descrizione del problema',
    labelPoints: 'Punti chiave (uno per riga)',
    labelCta: 'Call-to-action (CTA)',
    labelTags: 'Hashtag',
    previewTitle: 'Anteprima didascalia formattata',
    copyCaption: 'Copia didascalia',
    charsLabel: 'Caratteri:',
    wordsLabel: 'Parole:',
    fits: 'Entra',
    threadNeeded: 'Serve un thread',
    tooLong: 'Troppo lunga',
  },
};

type FrameworkId = keyof typeof STRINGS.en.frameworkNames;
type FrameworkLabels = typeof STRINGS.en.frameworkLabels;

interface FrameworkDef {
  id: FrameworkId;
  build: (
    f: {
      hook: string;
      context: string;
      points: string[];
      cta: string;
      tags: string;
    },
    labels: FrameworkLabels
  ) => string;
}

const FRAMEWORKS: FrameworkDef[] = [
  {
    id: 'pas',
    build: ({ hook, context, points, cta, tags }, labels) =>
      [
        hook,
        context ? `\n${context}` : '',
        points.length > 0 ? `\n${labels.fixesHeading}\n${points.map((p) => `• ${p}`).join('\n')}` : '',
        cta ? `\n${cta}` : '',
        tags ? `\n${tags}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
  {
    id: 'tutorial',
    build: ({ hook, context, points, cta, tags }) =>
      [
        hook,
        context ? `\n${context}` : '',
        points.length > 0
          ? `\n${points.map((p, i) => `${i + 1}. ${p}`).join('\n')}`
          : '',
        cta ? `\n${cta}` : '',
        tags ? `\n${tags}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
  {
    id: 'bab',
    build: ({ hook, context, points, cta, tags }, labels) =>
      [
        hook,
        context ? `\n${labels.beforeLabel}${context}` : '',
        points[0] ? `\n${labels.afterLabel}${points[0]}` : '',
        points.length > 1
          ? `\n${labels.bridgeHeading}\n${points
              .slice(1)
              .map((p) => `→ ${p}`)
              .join('\n')}`
          : '',
        cta ? `\n${cta}` : '',
        tags ? `\n${tags}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
  {
    id: 'checklist',
    build: ({ hook, context, points, cta, tags }) =>
      [
        hook,
        context ? `\n${context}` : '',
        points.length > 0 ? `\n${points.map((p) => `[ ] ${p}`).join('\n')}` : '',
        cta ? `\n${cta}` : '',
        tags ? `\n${tags}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
  {
    id: 'myth',
    build: ({ hook, context, points, cta, tags }, labels) =>
      [
        hook,
        context ? `\n${labels.mythLabel}${context}` : '',
        points.length > 0
          ? `\n${labels.worksHeading}\n${points.map((p) => `— ${p}`).join('\n')}`
          : '',
        cta ? `\n${cta}` : '',
        tags ? `\n${tags}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
];

export default function CaptionTemplateBuilderTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [frameworkId, setFrameworkId] = useState<FrameworkId>('tutorial');
  const [hook, setHook] = useState(s.sampleHook);
  const [context, setContext] = useState(s.sampleContext);
  const [pointsText, setPointsText] = useState(s.samplePoints);
  const [cta, setCta] = useState(s.sampleCta);
  const [hashtags, setHashtags] = useState('#CreatorWorkflow #MarketingOps #Productivity');

  const activeFramework = FRAMEWORKS.find((f) => f.id === frameworkId) ?? FRAMEWORKS[0];

  const compiled = useMemo(() => {
    const points = pointsText
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    const output = activeFramework.build(
      {
        hook: hook.trim(),
        context: context.trim(),
        points,
        cta: cta.trim(),
        tags: hashtags.trim(),
      },
      s.frameworkLabels
    );

    return {
      output,
      chars: Array.from(output).length,
      words: output.trim() ? output.trim().split(/\s+/).length : 0,
    };
  }, [activeFramework, hook, context, pointsText, cta, hashtags, s]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
        <Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" />
        <p>
          <strong>{s.infoTitle}</strong> {s.infoBody}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 rounded-lg bg-slate-100 p-1.5">
        {FRAMEWORKS.map((fw) => (
          <button
            key={fw.id}
            type="button"
            onClick={() => setFrameworkId(fw.id)}
            className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              frameworkId === fw.id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            {s.frameworkNames[fw.id]}
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-600">{s.frameworkDescriptions[frameworkId]}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-3.5">
          <div>
            <label htmlFor="ctb-hook" className="block text-xs font-semibold text-slate-800 mb-1">
              {s.labelHook}
            </label>
            <input
              id="ctb-hook"
              type="text"
              value={hook}
              onChange={(e) => setHook(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="ctb-ctx" className="block text-xs font-semibold text-slate-800 mb-1">
              {s.labelContext}
            </label>
            <textarea
              id="ctb-ctx"
              rows={2}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="ctb-pts" className="block text-xs font-semibold text-slate-800 mb-1">
              {s.labelPoints}
            </label>
            <textarea
              id="ctb-pts"
              rows={4}
              value={pointsText}
              onChange={(e) => setPointsText(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="ctb-cta" className="block text-xs font-semibold text-slate-800 mb-1">
              {s.labelCta}
            </label>
            <input
              id="ctb-cta"
              type="text"
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="ctb-tags" className="block text-xs font-semibold text-slate-800 mb-1">
              {s.labelTags}
            </label>
            <input
              id="ctb-tags"
              type="text"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
            />
          </div>
        </div>

        <div className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-4 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-indigo-800">{s.previewTitle}</span>
            <CopyButton text={compiled.output} label={s.copyCaption} copiedLabel={t.common.copied} />
          </div>
          <pre className="rounded-lg border border-slate-200 bg-white p-4 font-sans text-sm leading-relaxed text-slate-900 whitespace-pre-wrap break-words min-h-64">
            {compiled.output}
          </pre>
          <div className="flex flex-wrap gap-4 text-xs text-slate-600 tabular-nums">
            <span>{s.charsLabel} <strong>{compiled.chars}</strong></span>
            <span>{s.wordsLabel} <strong>{compiled.words}</strong></span>
            <span>X (280): {compiled.chars <= 280 ? s.fits : s.threadNeeded}</span>
            <span>LinkedIn / IG: {compiled.chars <= 2200 ? s.fits : s.tooLong}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
