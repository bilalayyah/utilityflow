import {
  AlertCircle,
  CheckCircle2,
  ClipboardPaste,
  Clock,
  Columns2,
  Download,
  FileText,
  ListChecks,
  Loader2,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Square,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';
import {
  fetchAiHealth,
  postAiJson,
  type AiErrorResponse,
  type QuotaStatus,
  type SummarizeRequestPayload,
  type SummaryFormat,
  type SummaryLength,
} from '../../config/ai';

const MAX_CHARS = 25_000;
const MIN_WORDS = 25;
const MIN_CHARS = 120;

const STRINGS = {
  en: {
    lengthOptions: {
      short: { label: 'Short', ratio: '~10–20% length' },
      medium: { label: 'Medium', ratio: '~30–40% length' },
      detailed: { label: 'Long (Detailed)', ratio: '~50–60% length' },
    },
    loadingLengthLabels: {
      short: 'short',
      medium: 'medium',
      detailed: 'long',
    },
    formatOptions: {
      paragraph: { label: 'Paragraph Summary', hint: 'Smooth cohesive prose' },
      bullets: { label: 'Bullet Point Summary', hint: 'Clean scannable bullets' },
      'key-points': { label: 'Key Points Extraction', hint: 'Numbered takeaways' },
      simple: { label: 'Simple Language', hint: 'Plain everyday wording' },
    },
    loadingFormatLabels: {
      paragraph: 'paragraph',
      bullets: 'bullets',
      'key-points': 'key-points',
      simple: 'simple',
    },
    languageLabels: {
      'Same as original language': 'Same as original language',
      'English (US)': 'English (US)',
      'English (UK)': 'English (UK)',
      Spanish: 'Spanish',
      French: 'French',
      German: 'German',
      Portuguese: 'Portuguese',
      Italian: 'Italian',
      Dutch: 'Dutch',
      Arabic: 'Arabic',
      Hindi: 'Hindi',
      Urdu: 'Urdu',
      Turkish: 'Turkish',
      Japanese: 'Japanese',
      Korean: 'Korean',
      'Chinese (Simplified)': 'Chinese (Simplified)',
    },
    sampleArticle:
      'In 2026, distributed product engineering teams increasingly rely on asynchronous written updates rather than daily status meetings to protect deep-focus development time. Across a six-month internal study of 140 engineers working across London, Berlin, and Toronto, teams that replaced three weekly sync calls with structured Tuesday and Thursday written digests reported a 28% reduction in calendar fragmentation and delivered sprint milestones 14% faster. Crucially, the study found that written updates only succeeded when engineers followed three consistent rules: stating concrete blockers at the top, linking directly to pull requests or issue IDs, and recording exact target dates instead of vague phrases like "soon". Managers still kept one live 25-minute weekly session dedicated exclusively to open architectural trade-offs and team check-ins, preserving interpersonal rapport without interrupting coding blocks.',
    secUnit: 'sec',
    minUnit: 'min',
    title: 'Free AI Text Summarizer',
    noAccount: 'No account, credits, or login required',
    allowanceBefore: 'Daily free allowance:',
    allowanceAfter: 'left today',
    allowanceFallback: 'Up to 5 free summaries / day',
    backendTitle: 'AI backend key is not active yet in this environment.',
    backendEnsureBefore: 'Ensure',
    backendEnsureAfter: 'is configured to run live AI summarization.',
    stepLength: '1. Summary Length',
    stepFormat: '2. Summary Format',
    stepLanguage: '3. Output Language',
    stepText: '4. Source Text to Summarize',
    lengthAria: 'Summary length',
    paste: 'Paste',
    clipboardUnavailable:
      'Browser clipboard read is unavailable here—use Ctrl/Cmd + V inside the editor.',
    clipboardEmpty: 'Your clipboard does not contain any text right now.',
    clipboardBlocked: 'Clipboard permission was blocked—paste directly using Ctrl/Cmd + V.',
    placeholder:
      'Paste an article, research notes, meeting transcript, or essay here (minimum 25 words / 120 characters, up to 25,000 characters)...',
    word: 'word',
    words: 'words',
    chars: 'chars',
    estRead: 'Est. read: ',
    stop: 'Stop',
    summarizing: 'Summarizing...',
    summarizeButton: 'Summarize Text',
    addMoreBefore: 'Add at least ',
    addMoreMiddle: ' more words (minimum ',
    addMoreAnd: ' words and ',
    addMoreAfter: ' characters) so the AI can extract a meaningful summary.',
    generatingSummary: 'Generating {length} summary ({format} format)...',
    errorDailyLimit: 'Daily Free Summary Limit Reached',
    errorRateLimited: 'Please Slow Down Slightly',
    errorGlobal: 'Platform Daily Capacity Reached',
    errorGeneric: 'Unable to Summarize Right Now',
    retry: 'Retry',
    emptyError: 'Please paste or type an article, report, or notes before summarizing.',
    tooShortErrorBefore: 'Your text is too short to summarize meaningfully (',
    tooShortErrorMiddle: ' words). Please enter at least ',
    tooShortErrorAnd: ' words and ',
    tooShortErrorAfter: ' characters.',
    overLimitBefore: 'Input exceeds the ',
    overLimitMiddle: ' character limit. Shorten your text by ',
    overLimitAfter: ' characters and try again.',
    connectionError: 'Temporary connection issue while summarizing. Please try again.',
    resultTitle: 'Summary Result',
    shorterSuffix: '% shorter',
    copySummary: 'Copy summary',
    downloadTxt: 'Download TXT',
    originalRead: 'Original Read',
    summaryRead: 'Summary Read',
    compressionSaved: 'Compression & Time Saved',
    savesPrefix: 'saves ~',
    tabCompare: 'Original vs. Summary',
    tabSummary: 'Summary Only',
    resultAria: 'Generated summary and comparison',
    originalText: 'Original Text',
    summaryOutput: 'Summary Output',
    summarizedWith: 'Summarized with free-tier Groq model',
    fallbackNote: ' (automatic model fallback)',
    preservedNote: '. Key names, dates, and figures are preserved strictly from your input.',
  },
  es: {
    lengthOptions: {
      short: { label: 'Corto', ratio: '~10–20% de la longitud' },
      medium: { label: 'Medio', ratio: '~30–40% de la longitud' },
      detailed: { label: 'Largo (detallado)', ratio: '~50–60% de la longitud' },
    },
    loadingLengthLabels: {
      short: 'corto',
      medium: 'mediano',
      detailed: 'largo',
    },
    formatOptions: {
      paragraph: { label: 'Resumen en párrafo', hint: 'Prosa fluida y cohesiva' },
      bullets: { label: 'Resumen con viñetas', hint: 'Viñetas claras y fáciles de leer' },
      'key-points': { label: 'Extracción de puntos clave', hint: 'Conclusiones numeradas' },
      simple: { label: 'Lenguaje sencillo', hint: 'Palabras sencillas y cotidianas' },
    },
    loadingFormatLabels: {
      paragraph: 'de párrafo',
      bullets: 'con viñetas',
      'key-points': 'de puntos clave',
      simple: 'en lenguaje sencillo',
    },
    languageLabels: {
      'Same as original language': 'Igual que el idioma original',
      'English (US)': 'Inglés (EE. UU.)',
      'English (UK)': 'Inglés (Reino Unido)',
      Spanish: 'Español',
      French: 'Francés',
      German: 'Alemán',
      Portuguese: 'Portugués',
      Italian: 'Italiano',
      Dutch: 'Neerlandés',
      Arabic: 'Árabe',
      Hindi: 'Hindi',
      Urdu: 'Urdu',
      Turkish: 'Turco',
      Japanese: 'Japonés',
      Korean: 'Coreano',
      'Chinese (Simplified)': 'Chino (simplificado)',
    },
    sampleArticle:
      'En 2026, los equipos de ingeniería de producto distribuidos dependen cada vez más de las actualizaciones escritas asíncronas en lugar de las reuniones diarias de estado para proteger el tiempo de desarrollo con concentración profunda. En un estudio interno de seis meses con 140 ingenieros en Londres, Berlín y Toronto, los equipos que reemplazaron tres llamadas semanales de sincronización por resúmenes escritos estructurados los martes y jueves reportaron una reducción del 28 % en la fragmentación del calendario y entregaron los hitos de los sprints un 14 % más rápido. Lo más importante es que el estudio concluyó que las actualizaciones escritas solo funcionaban cuando los ingenieros seguían tres reglas constantes: indicar los obstáculos concretos al principio, enlazar directamente con las solicitudes de incorporación de cambios (pull requests) o los ID de incidencias, y registrar fechas objetivo exactas en lugar de frases vagas como "pronto". Los gerentes mantuvieron una única sesión semanal en vivo de 25 minutos dedicada exclusivamente a los dilemas de arquitectura abiertos y a las revisiones del equipo, preservando la relación interpersonal sin interrumpir los bloques de programación.',
    secUnit: 's',
    minUnit: 'min',
    title: 'Resumidor de texto con IA gratuito',
    noAccount: 'No requiere cuenta, créditos ni registro',
    allowanceBefore: 'Asignación gratuita diaria:',
    allowanceAfter: 'restantes hoy',
    allowanceFallback: 'Hasta 5 resúmenes gratuitos al día',
    backendTitle: 'La clave del backend de IA aún no está activa en este entorno.',
    backendEnsureBefore: 'Asegúrate de que',
    backendEnsureAfter: 'esté configurado para ejecutar resúmenes con IA en vivo.',
    stepLength: '1. Longitud del resumen',
    stepFormat: '2. Formato del resumen',
    stepLanguage: '3. Idioma de salida',
    stepText: '4. Texto fuente para resumir',
    lengthAria: 'Longitud del resumen',
    paste: 'Pegar',
    clipboardUnavailable:
      'La lectura del portapapeles no está disponible aquí; usa Ctrl/Cmd + V dentro del editor.',
    clipboardEmpty: 'Tu portapapeles no contiene ningún texto en este momento.',
    clipboardBlocked: 'El permiso del portapapeles fue bloqueado; pega directamente con Ctrl/Cmd + V.',
    placeholder:
      'Pega un artículo, notas de investigación, la transcripción de una reunión o un ensayo aquí (mínimo 25 palabras / 120 caracteres, hasta 25,000 caracteres)...',
    word: 'palabra',
    words: 'palabras',
    chars: 'caracteres',
    estRead: 'Lectura est.: ',
    stop: 'Detener',
    summarizing: 'Resumiendo...',
    summarizeButton: 'Resumir texto',
    addMoreBefore: 'Agrega al menos ',
    addMoreMiddle: ' palabras más (mínimo ',
    addMoreAnd: ' palabras y ',
    addMoreAfter: ' caracteres) para que la IA pueda extraer un resumen útil.',
    generatingSummary: 'Generando un resumen {length} (formato {format})...',
    errorDailyLimit: 'Límite diario gratuito de resúmenes alcanzado',
    errorRateLimited: 'Reduce un poco el ritmo',
    errorGlobal: 'Capacidad diaria de la plataforma alcanzada',
    errorGeneric: 'No se pudo resumir en este momento',
    retry: 'Reintentar',
    emptyError: 'Pega o escribe un artículo, informe o notas antes de resumir.',
    tooShortErrorBefore: 'Tu texto es demasiado corto para resumirlo de forma útil (',
    tooShortErrorMiddle: ' palabras). Ingresa al menos ',
    tooShortErrorAnd: ' palabras y ',
    tooShortErrorAfter: ' caracteres.',
    overLimitBefore: 'La entrada supera el límite de ',
    overLimitMiddle: ' caracteres. Acorta tu texto en ',
    overLimitAfter: ' caracteres e inténtalo de nuevo.',
    connectionError: 'Problema temporal de conexión al resumir. Inténtalo de nuevo.',
    resultTitle: 'Resultado del resumen',
    shorterSuffix: '% más corto',
    copySummary: 'Copiar resumen',
    downloadTxt: 'Descargar TXT',
    originalRead: 'Lectura original',
    summaryRead: 'Lectura del resumen',
    compressionSaved: 'Compresión y tiempo ahorrado',
    savesPrefix: 'ahorra ~',
    tabCompare: 'Original vs. resumen',
    tabSummary: 'Solo resumen',
    resultAria: 'Resumen generado y comparación',
    originalText: 'Texto original',
    summaryOutput: 'Resumen',
    summarizedWith: 'Resumido con el modelo Groq de nivel gratuito',
    fallbackNote: ' (cambio automático de modelo)',
    preservedNote: '. Los nombres, fechas y cifras clave se conservan tal como aparecen en tu texto.',
  },
  pt: {
    lengthOptions: {
      short: {
        label: 'Curto',
        ratio: '~10–20% do tamanho',
      },
      medium: {
        label: 'Médio',
        ratio: '~30–40% do tamanho',
      },
      detailed: {
        label: 'Longo (detalhado)',
        ratio: '~50–60% do tamanho',
      },
    },
    loadingLengthLabels: {
      short: 'curto',
      medium: 'médio',
      detailed: 'longo',
    },
    formatOptions: {
      paragraph: {
        label: 'Resumo em parágrafo',
        hint: 'Prosa fluida e coesa',
      },
      bullets: {
        label: 'Resumo com marcadores',
        hint: 'Marcadores claros e fáceis de ler',
      },
      'key-points': {
        label: 'Extração de pontos-chave',
        hint: 'Conclusões numeradas',
      },
      simple: {
        label: 'Linguagem simples',
        hint: 'Palavras simples e cotidianas',
      },
    },
    loadingFormatLabels: {
      paragraph: 'de parágrafo',
      bullets: 'com marcadores',
      'key-points': 'de pontos-chave',
      simple: 'em linguagem simples',
    },
    languageLabels: {
      'Same as original language': 'Igual ao idioma original',
      'English (US)': 'Inglês (EUA)',
      'English (UK)': 'Inglês (Reino Unido)',
      Spanish: 'Espanhol',
      French: 'Francês',
      German: 'Alemão',
      Portuguese: 'Português',
      Italian: 'Italiano',
      Dutch: 'Holandês',
      Arabic: 'Árabe',
      Hindi: 'Hindi',
      Urdu: 'Urdu',
      Turkish: 'Turco',
      Japanese: 'Japonês',
      Korean: 'Coreano',
      'Chinese (Simplified)': 'Chinês (simplificado)',
    },
    sampleArticle: 'Em 2026, as equipes distribuídas de engenharia de produto dependem cada vez mais de atualizações escritas assíncronas, em vez de reuniões diárias de status, para proteger o tempo de desenvolvimento com foco profundo. Em um estudo interno de seis meses com 140 engenheiros em Londres, Berlim e Toronto, as equipes que substituíram três chamadas semanais de sincronização por resumos escritos estruturados às terças e quintas-feiras relataram uma redução de 28% na fragmentação da agenda e entregaram os marcos das sprints 14% mais rápido. O mais importante é que o estudo concluiu que as atualizações escritas só funcionavam quando os engenheiros seguiam três regras consistentes: declarar os bloqueios concretos no início, vincular diretamente aos pull requests ou IDs de issues e registrar datas-alvo exatas em vez de frases vagas como "em breve". Os gerentes ainda mantiveram uma única sessão semanal ao vivo de 25 minutos dedicada exclusivamente a discussões abertas sobre trade-offs de arquitetura e check-ins da equipe, preservando o relacionamento interpessoal sem interromper os blocos de programação.',
    secUnit: 's',
    minUnit: 'min',
    title: 'Resumidor de texto com IA gratuito',
    noAccount: 'Sem conta, créditos ou login',
    allowanceBefore: 'Cota diária gratuita:',
    allowanceAfter: 'restantes hoje',
    allowanceFallback: 'Até 5 resumos grátis por dia',
    backendTitle: 'A chave do backend de IA ainda não está ativa neste ambiente.',
    backendEnsureBefore: 'Verifique se',
    backendEnsureAfter: 'está configurado para executar resumos com IA ao vivo.',
    stepLength: '1. Tamanho do resumo',
    stepFormat: '2. Formato do resumo',
    stepLanguage: '3. Idioma de saída',
    stepText: '4. Texto-fonte para resumir',
    lengthAria: 'Tamanho do resumo',
    paste: 'Colar',
    clipboardUnavailable: 'A leitura da área de transferência não está disponível aqui — use Ctrl/Cmd + V dentro do editor.',
    clipboardEmpty: 'Sua área de transferência não contém nenhum texto no momento.',
    clipboardBlocked: 'A permissão da área de transferência foi bloqueada — cole diretamente com Ctrl/Cmd + V.',
    placeholder: 'Cole um artigo, notas de pesquisa, transcrição de reunião ou redação aqui (mínimo de 25 palavras / 120 caracteres, até 25.000 caracteres)...',
    word: 'palavra',
    words: 'palavras',
    chars: 'caracteres',
    estRead: 'Leitura est.: ',
    stop: 'Parar',
    summarizing: 'Resumindo...',
    summarizeButton: 'Resumir texto',
    addMoreBefore: 'Adicione pelo menos ',
    addMoreMiddle: ' palavras a mais (mínimo de ',
    addMoreAnd: ' palavras e ',
    addMoreAfter: ' caracteres) para que a IA possa extrair um resumo útil.',
    generatingSummary: 'Gerando um resumo {length} (formato {format})...',
    errorDailyLimit: 'Limite diário gratuito de resumos atingido',
    errorRateLimited: 'Diminua um pouco o ritmo',
    errorGlobal: 'Capacidade diária da plataforma atingida',
    errorGeneric: 'Não foi possível resumir agora',
    retry: 'Tentar novamente',
    emptyError: 'Cole ou digite um artigo, relatório ou notas antes de resumir.',
    tooShortErrorBefore: 'Seu texto é muito curto para resumir de forma útil (',
    tooShortErrorMiddle: ' palavras). Digite pelo menos ',
    tooShortErrorAnd: ' palavras e ',
    tooShortErrorAfter: ' caracteres.',
    overLimitBefore: 'A entrada excede o limite de ',
    overLimitMiddle: ' caracteres. Encurte seu texto em ',
    overLimitAfter: ' caracteres e tente novamente.',
    connectionError: 'Problema temporário de conexão ao resumir. Tente novamente.',
    resultTitle: 'Resultado do resumo',
    shorterSuffix: '% mais curto',
    copySummary: 'Copiar resumo',
    downloadTxt: 'Baixar TXT',
    originalRead: 'Leitura original',
    summaryRead: 'Leitura do resumo',
    compressionSaved: 'Compressão e tempo economizado',
    savesPrefix: 'economiza ~',
    tabCompare: 'Original vs. resumo',
    tabSummary: 'Somente resumo',
    resultAria: 'Resumo gerado e comparação',
    originalText: 'Texto original',
    summaryOutput: 'Resumo',
    summarizedWith: 'Resumido com o modelo Groq de nível gratuito',
    fallbackNote: ' (alternativa automática de modelo)',
    preservedNote: '. Nomes, datas e números importantes são preservados exatamente como no seu texto.',
  },
  fr: {
    lengthOptions: {
      short: {
        label: 'Court',
        ratio: '~10–20 % de la longueur',
      },
      medium: {
        label: 'Moyen',
        ratio: '~30–40 % de la longueur',
      },
      detailed: {
        label: 'Long (détaillé)',
        ratio: '~50–60 % de la longueur',
      },
    },
    loadingLengthLabels: {
      short: 'court',
      medium: 'moyen',
      detailed: 'long',
    },
    formatOptions: {
      paragraph: {
        label: 'Résumé en paragraphe',
        hint: 'Prose fluide et cohérente',
      },
      bullets: {
        label: 'Résumé à puces',
        hint: 'Puces claires et faciles à lire',
      },
      'key-points': {
        label: 'Extraction des points clés',
        hint: 'Idées numérotées',
      },
      simple: {
        label: 'Langage simple',
        hint: 'Mots simples et quotidiens',
      },
    },
    loadingFormatLabels: {
      paragraph: 'de paragraphe',
      bullets: 'à puces',
      'key-points': 'de points clés',
      simple: 'en langage simple',
    },
    languageLabels: {
      'Same as original language': 'Identique à la langue d\'origine',
      'English (US)': 'Anglais (États-Unis)',
      'English (UK)': 'Anglais (Royaume-Uni)',
      Spanish: 'Espagnol',
      French: 'Français',
      German: 'Allemand',
      Portuguese: 'Portugais',
      Italian: 'Italien',
      Dutch: 'Néerlandais',
      Arabic: 'Arabe',
      Hindi: 'Hindi',
      Urdu: 'Ourdou',
      Turkish: 'Turc',
      Japanese: 'Japonais',
      Korean: 'Coréen',
      'Chinese (Simplified)': 'Chinois (simplifié)',
    },
    sampleArticle: 'En 2026, les équipes distribuées d\'ingénierie produit s\'appuient de plus en plus sur des mises à jour écrites asynchrones plutôt que sur des réunions quotidiennes de suivi pour protéger le temps de développement en concentration profonde. Dans une étude interne de six mois portant sur 140 ingénieurs à Londres, Berlin et Toronto, les équipes qui ont remplacé trois appels hebdomadaires de synchronisation par des synthèses écrites structurées les mardis et jeudis ont signalé une réduction de 28 % de la fragmentation de l\'agenda et ont livré les jalons des sprints 14 % plus vite. Surtout, l\'étude a conclu que les mises à jour écrites ne fonctionnaient que lorsque les ingénieurs suivaient trois règles constantes : indiquer les blocages concrets en haut, renvoyer directement vers les pull requests ou les identifiants de tickets, et noter des dates cibles exactes au lieu de formules vagues comme « bientôt ». Les managers ont tout de même conservé une seule session hebdomadaire en direct de 25 minutes consacrée exclusivement aux arbitrages architecturaux ouverts et aux points d\'équipe, préservant les relations interpersonnelles sans interrompre les blocs de code.',
    secUnit: 's',
    minUnit: 'min',
    title: 'Résumeur de texte par IA gratuit',
    noAccount: 'Aucun compte, crédit ou connexion requis',
    allowanceBefore: 'Quota gratuit quotidien :',
    allowanceAfter: 'restants aujourd\'hui',
    allowanceFallback: 'Jusqu\'à 5 résumés gratuits par jour',
    backendTitle: 'La clé du backend IA n\'est pas encore active dans cet environnement.',
    backendEnsureBefore: 'Assurez-vous que',
    backendEnsureAfter: 'est configuré pour exécuter le résumé par IA en direct.',
    stepLength: '1. Longueur du résumé',
    stepFormat: '2. Format du résumé',
    stepLanguage: '3. Langue de sortie',
    stepText: '4. Texte source à résumer',
    lengthAria: 'Longueur du résumé',
    paste: 'Coller',
    clipboardUnavailable: 'La lecture du presse-papiers n\'est pas disponible ici — utilisez Ctrl/Cmd + V dans l\'éditeur.',
    clipboardEmpty: 'Votre presse-papiers ne contient aucun texte pour le moment.',
    clipboardBlocked: 'L\'autorisation du presse-papiers a été bloquée — collez directement avec Ctrl/Cmd + V.',
    placeholder: 'Collez un article, des notes de recherche, la transcription d\'une réunion ou une dissertation ici (minimum 25 mots / 120 caractères, jusqu\'à 25 000 caractères)...',
    word: 'mot',
    words: 'mots',
    chars: 'caractères',
    estRead: 'Lecture est. : ',
    stop: 'Arrêter',
    summarizing: 'Résumé en cours...',
    summarizeButton: 'Résumer le texte',
    addMoreBefore: 'Ajoutez au moins ',
    addMoreMiddle: ' mots de plus (minimum ',
    addMoreAnd: ' mots et ',
    addMoreAfter: ' caractères) pour que l\'IA puisse extraire un résumé utile.',
    generatingSummary: 'Génération d\'un résumé {length} (format {format})...',
    errorDailyLimit: 'Limite quotidienne gratuite de résumés atteinte',
    errorRateLimited: 'Ralentissez légèrement',
    errorGlobal: 'Capacité quotidienne de la plateforme atteinte',
    errorGeneric: 'Impossible de résumer pour le moment',
    retry: 'Réessayer',
    emptyError: 'Veuillez coller ou saisir un article, un rapport ou des notes avant de résumer.',
    tooShortErrorBefore: 'Votre texte est trop court pour être résumé utilement (',
    tooShortErrorMiddle: ' mots). Veuillez saisir au moins ',
    tooShortErrorAnd: ' mots et ',
    tooShortErrorAfter: ' caractères.',
    overLimitBefore: 'La saisie dépasse la limite de ',
    overLimitMiddle: ' caractères. Raccourcissez votre texte de ',
    overLimitAfter: ' caractères et réessayez.',
    connectionError: 'Problème temporaire de connexion pendant le résumé. Veuillez réessayer.',
    resultTitle: 'Résultat du résumé',
    shorterSuffix: '% plus court',
    copySummary: 'Copier le résumé',
    downloadTxt: 'Télécharger le TXT',
    originalRead: 'Lecture d\'origine',
    summaryRead: 'Lecture du résumé',
    compressionSaved: 'Compression et temps gagné',
    savesPrefix: 'fait gagner ~',
    tabCompare: 'Original vs résumé',
    tabSummary: 'Résumé seul',
    resultAria: 'Résumé généré et comparaison',
    originalText: 'Texte d\'origine',
    summaryOutput: 'Résumé',
    summarizedWith: 'Résumé avec le modèle Groq gratuit',
    fallbackNote: ' (repli automatique de modèle)',
    preservedNote: '. Les noms, dates et chiffres clés sont préservés strictement à partir de votre saisie.',
  },
  de: {
    lengthOptions: {
      short: { label: 'Kurz', ratio: '~10–20% Länge' },
      medium: { label: 'Mittel', ratio: '~30–40% Länge' },
      detailed: { label: 'Lang (detailliert)', ratio: '~50–60% Länge' },
    },
    loadingLengthLabels: {
      short: 'Kurze',
      medium: 'Mittlere',
      detailed: 'Lange',
    },
    formatOptions: {
      paragraph: { label: 'Absatz-Zusammenfassung', hint: 'Flüssiger, zusammenhängender Text' },
      bullets: { label: 'Zusammenfassung in Stichpunkten', hint: 'Übersichtliche Stichpunkte' },
      'key-points': { label: 'Kernpunkte extrahieren', hint: 'Nummerierte Erkenntnisse' },
      simple: { label: 'Einfache Sprache', hint: 'Alltägliche, einfache Worte' },
    },
    loadingFormatLabels: {
      paragraph: 'Absatz',
      bullets: 'Stichpunkt',
      'key-points': 'Kernpunkte',
      simple: 'einfacher Sprache',
    },
    languageLabels: {
      'Same as original language': 'Wie in der Originalsprache',
      'English (US)': 'Englisch (USA)',
      'English (UK)': 'Englisch (UK)',
      Spanish: 'Spanisch',
      French: 'Französisch',
      German: 'Deutsch',
      Portuguese: 'Portugiesisch',
      Italian: 'Italienisch',
      Dutch: 'Niederländisch',
      Arabic: 'Arabisch',
      Hindi: 'Hindi',
      Urdu: 'Urdu',
      Turkish: 'Türkisch',
      Japanese: 'Japanisch',
      Korean: 'Koreanisch',
      'Chinese (Simplified)': 'Chinesisch (vereinfacht)',
    },
    sampleArticle:
      'Im Jahr 2026 setzen verteilte Produktentwicklungsteams zunehmend auf asynchrone schriftliche Updates statt auf tägliche Statusmeetings, um Zeit für konzentrierte Entwicklungsarbeit zu schützen. In einer sechsmonatigen internen Studie mit 140 Ingenieurinnen und Ingenieuren in London, Berlin und Toronto berichteten Teams, die drei wöchentliche Sync-Calls durch strukturierte schriftliche Zusammenfassungen am Dienstag und Donnerstag ersetzten, von einer 28%igen Reduzierung der Kalenderfragmentierung und lieferten Sprint-Meilensteine 14% schneller. Entscheidend war, dass schriftliche Updates nur dann funktionierten, wenn die Ingenieure drei konsistente Regeln befolgten: konkrete Blocker ganz oben nennen, direkt auf Pull Requests oder Issue-IDs verlinken und genaue Zieldaten statt vager Formulierungen wie „bald“ notieren. Die Manager behielten weiterhin eine einzige 25-minütige wöchentliche Live-Sitzung, die ausschließlich offenen Architektur-Abwägungen und Team-Check-ins gewidmet war, und bewahrten so den persönlichen Austausch, ohne die Coding-Blöcke zu unterbrechen.',
    secUnit: 'Sek.',
    minUnit: 'Min.',
    title: 'Kostenloser KI-Text-Zusammenfasser',
    noAccount: 'Kein Konto, keine Credits, keine Anmeldung nötig',
    allowanceBefore: 'Tägliches kostenloses Kontingent:',
    allowanceAfter: 'heute übrig',
    allowanceFallback: 'Bis zu 5 kostenlose Zusammenfassungen / Tag',
    backendTitle: 'Der KI-Backend-Schlüssel ist in dieser Umgebung noch nicht aktiv.',
    backendEnsureBefore: 'Stellen Sie sicher, dass',
    backendEnsureAfter: 'konfiguriert ist, um Live-KI-Zusammenfassungen auszuführen.',
    stepLength: '1. Länge der Zusammenfassung',
    stepFormat: '2. Format der Zusammenfassung',
    stepLanguage: '3. Ausgabesprache',
    stepText: '4. Quelltext zum Zusammenfassen',
    lengthAria: 'Länge der Zusammenfassung',
    paste: 'Einfügen',
    clipboardUnavailable:
      'Das Lesen der Browser-Zwischenablage ist hier nicht verfügbar – verwenden Sie Strg/Cmd + V im Editor.',
    clipboardEmpty: 'Ihre Zwischenablage enthält gerade keinen Text.',
    clipboardBlocked: 'Die Berechtigung für die Zwischenablage wurde blockiert – fügen Sie den Text direkt mit Strg/Cmd + V ein.',
    placeholder:
      'Fügen Sie hier einen Artikel, Forschungsnotizen, ein Meeting-Protokoll oder einen Aufsatz ein (mindestens 25 Wörter / 120 Zeichen, bis zu 25.000 Zeichen)...',
    word: 'Wort',
    words: 'Wörter',
    chars: 'Zeichen',
    estRead: 'Geschätzte Lesezeit: ',
    stop: 'Stopp',
    summarizing: 'Wird zusammengefasst...',
    summarizeButton: 'Text zusammenfassen',
    addMoreBefore: 'Fügen Sie mindestens ',
    addMoreMiddle: ' weitere Wörter hinzu (mindestens ',
    addMoreAnd: ' Wörter und ',
    addMoreAfter: ' Zeichen), damit die KI eine aussagekräftige Zusammenfassung erstellen kann.',
    generatingSummary: '{length} Zusammenfassung im {format}-Format wird erstellt...',
    errorDailyLimit: 'Tägliches kostenloses Zusammenfassungs-Limit erreicht',
    errorRateLimited: 'Bitte etwas langsamer',
    errorGlobal: 'Tägliche Plattformkapazität erreicht',
    errorGeneric: 'Zusammenfassung gerade nicht möglich',
    retry: 'Erneut versuchen',
    emptyError: 'Bitte fügen Sie vor dem Zusammenfassen einen Artikel, Bericht oder Notizen ein oder tippen Sie sie ein.',
    tooShortErrorBefore: 'Ihr Text ist zu kurz für eine aussagekräftige Zusammenfassung (',
    tooShortErrorMiddle: ' Wörter). Bitte geben Sie mindestens ',
    tooShortErrorAnd: ' Wörter und ',
    tooShortErrorAfter: ' Zeichen ein.',
    overLimitBefore: 'Die Eingabe überschreitet das Limit von ',
    overLimitMiddle: ' Zeichen. Kürzen Sie Ihren Text um ',
    overLimitAfter: ' Zeichen und versuchen Sie es erneut.',
    connectionError: 'Vorübergehendes Verbindungsproblem beim Zusammenfassen. Bitte versuchen Sie es erneut.',
    resultTitle: 'Zusammenfassungsergebnis',
    shorterSuffix: '% kürzer',
    copySummary: 'Zusammenfassung kopieren',
    downloadTxt: 'TXT herunterladen',
    originalRead: 'Lesezeit Original',
    summaryRead: 'Lesezeit Zusammenfassung',
    compressionSaved: 'Komprimierung & gesparte Zeit',
    savesPrefix: 'spart ca. ',
    tabCompare: 'Original vs. Zusammenfassung',
    tabSummary: 'Nur Zusammenfassung',
    resultAria: 'Generierte Zusammenfassung und Vergleich',
    originalText: 'Originaltext',
    summaryOutput: 'Zusammenfassungsausgabe',
    summarizedWith: 'Zusammengefasst mit kostenlosem Groq-Modell',
    fallbackNote: ' (automatischer Modell-Fallback)',
    preservedNote: '. Wichtige Namen, Daten und Zahlen werden strikt aus Ihrer Eingabe übernommen.',
  },
  it: {
    lengthOptions: {
      short: { label: 'Breve', ratio: '~10–20% della lunghezza' },
      medium: { label: 'Media', ratio: '~30–40% della lunghezza' },
      detailed: { label: 'Lunga (dettagliata)', ratio: '~50–60% della lunghezza' },
    },
    loadingLengthLabels: {
      short: 'breve',
      medium: 'medio',
      detailed: 'lungo',
    },
    formatOptions: {
      paragraph: { label: 'Riassunto in paragrafo', hint: 'Prosa fluida e coesa' },
      bullets: { label: 'Riassunto a punti', hint: 'Punti chiari e scansionabili' },
      'key-points': { label: 'Estrazione punti chiave', hint: 'Concetti numerati' },
      simple: { label: 'Linguaggio semplice', hint: 'Parole quotidiane e chiare' },
    },
    loadingFormatLabels: {
      paragraph: 'paragrafo',
      bullets: 'punti',
      'key-points': 'punti chiave',
      simple: 'linguaggio semplice',
    },
    languageLabels: {
      'Same as original language': 'Stessa lingua dell’originale',
      'English (US)': 'Inglese (USA)',
      'English (UK)': 'Inglese (Regno Unito)',
      Spanish: 'Spagnolo',
      French: 'Francese',
      German: 'Tedesco',
      Portuguese: 'Portoghese',
      Italian: 'Italiano',
      Dutch: 'Olandese',
      Arabic: 'Arabo',
      Hindi: 'Hindi',
      Urdu: 'Urdu',
      Turkish: 'Turco',
      Japanese: 'Giapponese',
      Korean: 'Coreano',
      'Chinese (Simplified)': 'Cinese (semplificato)',
    },
    sampleArticle:
      'Nel 2026, i team distribuiti di ingegneria di prodotto si affidano sempre più ad aggiornamenti scritti asincroni piuttosto che a riunioni quotidiane di stato per proteggere il tempo di sviluppo concentrato. In uno studio interno di sei mesi su 140 ingegneri a Londra, Berlino e Toronto, i team che hanno sostituito tre chiamate settimanali di sincronizzazione con riepiloghi scritti strutturati il martedì e il giovedì hanno riportato una riduzione del 28% della frammentazione del calendario e hanno consegnato le milestone degli sprint il 14% più velocemente. Fondamentalmente, lo studio ha rilevato che gli aggiornamenti scritti funzionavano solo quando gli ingegneri seguivano tre regole coerenti: indicare i blocchi concreti in alto, collegarsi direttamente alle pull request o agli ID delle issue e annotare date obiettivo esatte invece di frasi vaghe come «presto». I manager hanno comunque mantenuto una sola sessione settimanale live di 25 minuti dedicata esclusivamente ai compromessi architettonici aperti e ai check-in di team, preservando i rapporti interpersonali senza interrompere i blocchi di programmazione.',
    secUnit: 'sec',
    minUnit: 'min',
    title: 'Riassuntore di testi AI gratuito',
    noAccount: 'Nessun account, credito o accesso richiesto',
    allowanceBefore: 'Quota gratuita giornaliera:',
    allowanceAfter: 'rimasti oggi',
    allowanceFallback: 'Fino a 5 riassunti gratuiti / giorno',
    backendTitle: 'La chiave backend AI non è ancora attiva in questo ambiente.',
    backendEnsureBefore: 'Assicurati che',
    backendEnsureAfter: 'sia configurato per eseguire riassunti AI live.',
    stepLength: '1. Lunghezza del riassunto',
    stepFormat: '2. Formato del riassunto',
    stepLanguage: '3. Lingua di output',
    stepText: '4. Testo di origine da riassumere',
    lengthAria: 'Lunghezza del riassunto',
    paste: 'Incolla',
    clipboardUnavailable:
      'La lettura degli appunti del browser non è disponibile qui: usa Ctrl/Cmd + V nell’editor.',
    clipboardEmpty: 'I tuoi appunti non contengono testo al momento.',
    clipboardBlocked: 'L’autorizzazione agli appunti è stata bloccata: incolla direttamente con Ctrl/Cmd + V.',
    placeholder:
      'Incolla qui un articolo, appunti di ricerca, una trascrizione di riunione o un saggio (minimo 25 parole / 120 caratteri, fino a 25.000 caratteri)...',
    word: 'parola',
    words: 'parole',
    chars: 'caratteri',
    estRead: 'Lettura stimata: ',
    stop: 'Interrompi',
    summarizing: 'Riassunto in corso...',
    summarizeButton: 'Riassumi testo',
    addMoreBefore: 'Aggiungi almeno ',
    addMoreMiddle: ' parole in più (minimo ',
    addMoreAnd: ' parole e ',
    addMoreAfter: ' caratteri) così l’IA può estrarre un riassunto significativo.',
    generatingSummary: 'Generazione di un riassunto {length} (formato {format})...',
    errorDailyLimit: 'Limite giornaliero di riassunti gratuiti raggiunto',
    errorRateLimited: 'Rallenta leggermente',
    errorGlobal: 'Capacità giornaliera della piattaforma raggiunta',
    errorGeneric: 'Impossibile riassumere al momento',
    retry: 'Riprova',
    emptyError: 'Incolla o scrivi un articolo, un report o appunti prima di riassumere.',
    tooShortErrorBefore: 'Il tuo testo è troppo breve per un riassunto significativo (',
    tooShortErrorMiddle: ' parole). Inserisci almeno ',
    tooShortErrorAnd: ' parole e ',
    tooShortErrorAfter: ' caratteri.',
    overLimitBefore: 'L’input supera il limite di ',
    overLimitMiddle: ' caratteri. Accorcia il testo di ',
    overLimitAfter: ' caratteri e riprova.',
    connectionError: 'Problema temporaneo di connessione durante il riassunto. Riprova.',
    resultTitle: 'Risultato del riassunto',
    shorterSuffix: '% più breve',
    copySummary: 'Copia riassunto',
    downloadTxt: 'Scarica TXT',
    originalRead: 'Lettura originale',
    summaryRead: 'Lettura riassunto',
    compressionSaved: 'Compressione e tempo risparmiato',
    savesPrefix: 'risparmia ~',
    tabCompare: 'Originale vs. riassunto',
    tabSummary: 'Solo riassunto',
    resultAria: 'Riassunto generato e confronto',
    originalText: 'Testo originale',
    summaryOutput: 'Output del riassunto',
    summarizedWith: 'Riassunto con modello Groq gratuito',
    fallbackNote: ' (fallback automatico del modello)',
    preservedNote: '. Nomi, date e cifre chiave sono conservati fedelmente dal tuo input.',
  },
};

const LENGTH_VALUES: SummaryLength[] = ['short', 'medium', 'detailed'];
const FORMAT_VALUES: SummaryFormat[] = ['paragraph', 'bullets', 'key-points', 'simple'];

const LANGUAGES: string[] = [
  'Same as original language',
  'English (US)',
  'English (UK)',
  'Spanish',
  'French',
  'German',
  'Portuguese',
  'Italian',
  'Dutch',
  'Arabic',
  'Hindi',
  'Urdu',
  'Turkish',
  'Japanese',
  'Korean',
  'Chinese (Simplified)',
];

function countWords(value: string): number {
  const trimmed = value.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

function estimateReadingSeconds(wordCount: number): number {
  if (wordCount <= 0) return 0;
  // Standard ~200 words per minute silent reading pace
  return Math.max(1, Math.round((wordCount / 200) * 60));
}

function formatDuration(totalSeconds: number, secUnit: string, minUnit: string): string {
  if (totalSeconds <= 0) return `0 ${secUnit}`;
  if (totalSeconds < 60) return `${totalSeconds} ${secUnit}`;
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return secs > 0 ? `${mins} ${minUnit} ${secs} ${secUnit}` : `${mins} ${minUnit}`;
}

export default function AiTextSummarizerTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [text, setText] = useState('');
  const [length, setLength] = useState<SummaryLength>('medium');
  const [format, setFormat] = useState<SummaryFormat>('bullets');
  const [language, setLanguage] = useState('Same as original language');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AiErrorResponse['error'] | null>(null);
  const [pasteHint, setPasteHint] = useState<string | null>(null);

  const [submittedOriginal, setSubmittedOriginal] = useState('');
  const [summaryText, setSummaryText] = useState('');
  const [resultMeta, setResultMeta] = useState<{
    model: string;
    fallbackUsed: boolean;
  } | null>(null);
  const [viewMode, setViewMode] = useState<'compare' | 'summary'>('compare');

  const [quota, setQuota] = useState<QuotaStatus | null>(null);
  const [backendConfigured, setBackendConfigured] = useState<boolean | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchAiHealth(controller.signal).then((health) => {
      if (!health) return;
      setBackendConfigured(health.configuredProviders.groq);
      const sumQuota = health.quota.limits.summarize;
      setQuota({
        limit: sumQuota.limit,
        remaining: sumQuota.remaining,
        resetAtIso: health.quota.resetAtIso,
        globalRemaining: health.quota.globalRemaining,
      });
    });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const inputChars = text.length;
  const inputWords = useMemo(() => countWords(text), [text]);
  const inputReadingSec = useMemo(() => estimateReadingSeconds(inputWords), [inputWords]);

  const originalWords = useMemo(() => countWords(submittedOriginal), [submittedOriginal]);
  const summaryWords = useMemo(() => countWords(summaryText), [summaryText]);
  const summaryChars = summaryText.length;
  const summaryReadingSec = useMemo(() => estimateReadingSeconds(summaryWords), [summaryWords]);

  const originalReadingSec = useMemo(
    () => estimateReadingSeconds(originalWords),
    [originalWords]
  );
  const savedPercent =
    originalWords > 0 && summaryWords > 0
      ? Math.max(0, Math.round(((originalWords - summaryWords) / originalWords) * 100))
      : 0;
  const savedSeconds = Math.max(0, originalReadingSec - summaryReadingSec);

  const isEmpty = text.trim().length === 0;
  const isTooShort = !isEmpty && (inputWords < MIN_WORDS || text.trim().length < MIN_CHARS);
  const isOverLimit = inputChars > MAX_CHARS;

  const handleLoadSample = () => {
    setText(s.sampleArticle);
    setError(null);
    setPasteHint(null);
  };

  const handlePaste = async () => {
    setPasteHint(null);
    if (!navigator.clipboard?.readText) {
      setPasteHint(s.clipboardUnavailable);
      return;
    }
    try {
      const clip = await navigator.clipboard.readText();
      if (!clip.trim()) {
        setPasteHint(s.clipboardEmpty);
        return;
      }
      setText(clip);
      setError(null);
    } catch {
      setPasteHint(s.clipboardBlocked);
    }
  };

  const handleClear = () => {
    abortRef.current?.abort();
    setLoading(false);
    setText('');
    setSubmittedOriginal('');
    setSummaryText('');
    setResultMeta(null);
    setError(null);
    setPasteHint(null);
  };

  const handleCancel = () => {
    abortRef.current?.abort();
    setLoading(false);
  };

  const handleSummarize = async () => {
    if (loading) return;
    const trimmed = text.trim();
    if (!trimmed) {
      setError({
        code: 'BAD_REQUEST',
        message: s.emptyError,
      });
      return;
    }
    if (countWords(trimmed) < MIN_WORDS || trimmed.length < MIN_CHARS) {
      setError({
        code: 'BAD_REQUEST',
        message: `${s.tooShortErrorBefore}${countWords(trimmed)}${s.tooShortErrorMiddle}${MIN_WORDS}${s.tooShortErrorAnd}${MIN_CHARS}${s.tooShortErrorAfter}`,
      });
      return;
    }
    if (text.length > MAX_CHARS) {
      setError({
        code: 'PAYLOAD_TOO_LARGE',
        message: `${s.overLimitBefore}${MAX_CHARS.toLocaleString(locale)}${s.overLimitMiddle}${(
          text.length - MAX_CHARS
        ).toLocaleString(locale)}${s.overLimitAfter}`,
      });
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);
    setPasteHint(null);

    try {
      const payload: SummarizeRequestPayload = {
        text,
        length,
        format,
        language,
      };
      const response = await postAiJson<SummarizeRequestPayload, string>(
        'summarize',
        payload,
        controller.signal
      );

      if (response.ok) {
        setSubmittedOriginal(text);
        setSummaryText(response.data);
        setResultMeta({
          model: response.model,
          fallbackUsed: response.fallbackUsed,
        });
        setQuota(response.quota);
        setBackendConfigured(true);
      } else {
        setError(response.error);
        if (response.error.quota) {
          setQuota(response.error.quota);
        }
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        return;
      }
      setError({
        code: 'SERVICE_UNAVAILABLE',
        message: s.connectionError,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadTxt = () => {
    if (!summaryText) return;
    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `utilityflow-${length}-${format}-summary.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generatingLine = s.generatingSummary
    .replace('{length}', s.loadingLengthLabels[length])
    .replace('{format}', s.loadingFormatLabels[format]);

  return (
    <div className="space-y-6">
      {/* Top Status & Free Allowance Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-2 text-slate-700">
          <ListChecks className="w-4 h-4 text-indigo-600 shrink-0" aria-hidden="true" />
          <span className="font-medium">{s.title}</span>
          <span className="text-slate-400" aria-hidden="true">
            ·
          </span>
          <span className="text-slate-600">{s.noAccount}</span>
        </div>

        <div className="text-xs text-slate-600 tabular-nums">
          {quota ? (
            <span>
              {s.allowanceBefore}{' '}
              <strong className="font-semibold text-slate-900">
                {quota.remaining} / {quota.limit}
              </strong>{' '}
              {s.allowanceAfter}
            </span>
          ) : (
            <span>{s.allowanceFallback}</span>
          )}
        </div>
      </div>

      {backendConfigured === false && (
        <div
          role="status"
          className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs sm:text-sm text-amber-900"
        >
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold">{s.backendTitle}</p>
            <p className="mt-0.5">
              {s.backendEnsureBefore} <code className="font-mono text-xs">GROQ_API_KEY</code>{' '}
              {s.backendEnsureAfter}
            </p>
          </div>
        </div>
      )}

      {/* Summary Length, Format & Language Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5">
          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            {s.stepLength}
          </span>
          <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label={s.lengthAria}>
            {LENGTH_VALUES.map((value) => {
              const opt = s.lengthOptions[value];
              const selected = value === length;
              return (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setLength(value)}
                  className={`flex flex-col items-start rounded-lg border px-3 py-2 text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${
                    selected
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-indigo-300 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xs font-semibold">{opt.label}</span>
                  <span className="text-[11px] text-slate-500 mt-0.5">{opt.ratio}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-4">
          <label
            htmlFor="ai-summary-format"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2"
          >
            {s.stepFormat}
          </label>
          <select
            id="ai-summary-format"
            value={format}
            onChange={(e) => setFormat(e.target.value as SummaryFormat)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          >
            {FORMAT_VALUES.map((value) => (
              <option key={value} value={value}>
                {s.formatOptions[value].label} — {s.formatOptions[value].hint}
              </option>
            ))}
          </select>
        </div>

        <div className="lg:col-span-3">
          <label
            htmlFor="ai-summary-language"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2"
          >
            {s.stepLanguage}
          </label>
          <select
            id="ai-summary-language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {(s.languageLabels as Record<string, string>)[lang] ?? lang}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Text Input Toolbar & Textarea */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <label
            htmlFor="ai-summarizer-input"
            className="text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            {s.stepText}
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => void handlePaste()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <ClipboardPaste className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
              <span>{s.paste}</span>
            </button>
            <button
              type="button"
              onClick={handleLoadSample}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
              <span>{t.common.loadSample}</span>
            </button>
            <button
              type="button"
              onClick={handleClear}
              disabled={!text && !summaryText && !error}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.common.clear}</span>
            </button>
          </div>
        </div>

        {pasteHint && (
          <p className="mb-2 text-xs text-amber-700" role="status">
            {pasteHint}
          </p>
        )}

        <textarea
          id="ai-summarizer-input"
          rows={9}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error?.code === 'BAD_REQUEST' || error?.code === 'PAYLOAD_TOO_LARGE') {
              setError(null);
            }
          }}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
              e.preventDefault();
              void handleSummarize();
            }
          }}
          placeholder={s.placeholder}
          aria-describedby="ai-summarizer-counters"
          className={`w-full rounded-xl border bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
            isOverLimit
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
              : 'border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/20'
          }`}
        />

        {/* Counters + Reading Time + Action Button */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div
            id="ai-summarizer-counters"
            className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 tabular-nums"
          >
            <span>
              <strong className="font-semibold text-slate-900">{inputWords.toLocaleString(locale)}</strong>{' '}
              {inputWords === 1 ? s.word : s.words}
            </span>
            <span className="text-slate-300" aria-hidden="true">
              |
            </span>
            <span className={isOverLimit ? 'font-semibold text-red-600' : ''}>
              <strong className={isOverLimit ? 'text-red-600' : 'font-semibold text-slate-900'}>
                {inputChars.toLocaleString(locale)}
              </strong>{' '}
              / {MAX_CHARS.toLocaleString(locale)} {s.chars}
            </span>
            <span className="text-slate-300" aria-hidden="true">
              |
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <span>{s.estRead}{formatDuration(inputReadingSec, s.secUnit, s.minUnit)}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {loading && (
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Square className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{s.stop}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => void handleSummarize()}
              disabled={loading || isEmpty || isOverLimit}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer min-h-[42px]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  <span>{s.summarizing}</span>
                </>
              ) : (
                <>
                  <ListChecks className="w-4 h-4" aria-hidden="true" />
                  <span>{s.summarizeButton}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {isTooShort && (
          <p className="mt-2 text-xs text-amber-700">
            {s.addMoreBefore}{Math.max(0, MIN_WORDS - inputWords)}{s.addMoreMiddle}{MIN_WORDS}
            {s.addMoreAnd}{MIN_CHARS}{s.addMoreAfter}
          </p>
        )}
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div
          aria-live="polite"
          className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-5 space-y-3"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-indigo-700">
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>{generatingLine}</span>
          </div>
          <div className="space-y-2 animate-pulse">
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-10/12" />
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-full" />
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-3/4" />
          </div>
        </div>
      )}

      {/* Error Alert */}
      {error && !loading && (
        <div
          role="alert"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-800"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold">
                {error.code === 'DAILY_LIMIT_REACHED'
                  ? s.errorDailyLimit
                  : error.code === 'RATE_LIMITED'
                  ? s.errorRateLimited
                  : error.code === 'GLOBAL_QUOTA_EXHAUSTED'
                  ? s.errorGlobal
                  : s.errorGeneric}
              </p>
              <p className="mt-0.5 text-xs sm:text-sm">{error.message}</p>
            </div>
          </div>

          {(error.code === 'SERVICE_UNAVAILABLE' ||
            error.code === 'RATE_LIMITED' ||
            error.code === 'INTERNAL_ERROR') && (
            <button
              type="button"
              onClick={() => void handleSummarize()}
              className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-lg border border-red-300 bg-white px-3 py-1.5 text-xs font-semibold text-red-800 hover:bg-red-50 cursor-pointer shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.retry}</span>
            </button>
          )}
        </div>
      )}

      {/* Summary Result & Comparison */}
      {summaryText && !loading && (
        <section
          aria-label={s.resultAria}
          className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <h2 className="text-base font-bold text-slate-900">{s.resultTitle}</h2>
              <span className="text-xs text-slate-500 tabular-nums">
                ({summaryWords.toLocaleString(locale)} {s.words} · {summaryChars.toLocaleString(locale)} {s.chars} ·{' '}
                {savedPercent}{s.shorterSuffix})
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <CopyButton text={summaryText} label={s.copySummary} copiedLabel={t.common.copied} />

              <button
                type="button"
                onClick={handleDownloadTxt}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{s.downloadTxt}</span>
              </button>
            </div>
          </div>

          {/* Reading Time & Compression Stats */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-lg border border-slate-200 bg-white px-3.5 py-2.5">
              <dt className="text-[11px] uppercase tracking-wider text-slate-500">{s.originalRead}</dt>
              <dd className="mt-0.5 text-sm font-bold text-slate-900 tabular-nums">
                {originalWords.toLocaleString(locale)} {s.words} · {formatDuration(originalReadingSec, s.secUnit, s.minUnit)}
              </dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-3.5 py-2.5">
              <dt className="text-[11px] uppercase tracking-wider text-slate-500">{s.summaryRead}</dt>
              <dd className="mt-0.5 text-sm font-bold text-indigo-600 tabular-nums">
                {summaryWords.toLocaleString(locale)} {s.words} · {formatDuration(summaryReadingSec, s.secUnit, s.minUnit)}
              </dd>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-2.5">
              <dt className="text-[11px] uppercase tracking-wider text-emerald-700">
                {s.compressionSaved}
              </dt>
              <dd className="mt-0.5 text-sm font-bold text-emerald-800 tabular-nums">
                {savedPercent}{s.shorterSuffix} · {s.savesPrefix}{formatDuration(savedSeconds, s.secUnit, s.minUnit)}
              </dd>
            </div>
          </dl>

          {/* View Mode Toggle */}
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1 gap-1">
            <button
              type="button"
              onClick={() => setViewMode('compare')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'compare'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Columns2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.tabCompare}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('summary')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'summary'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.tabSummary}</span>
            </button>
          </div>

          {viewMode === 'compare' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  <span>{s.originalText}</span>
                  <span className="tabular-nums font-normal">
                    {originalWords.toLocaleString(locale)} {s.words}
                  </span>
                </div>
                <div className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-600 max-h-96 overflow-y-auto">
                  {submittedOriginal}
                </div>
              </div>

              <div className="rounded-xl border border-indigo-200 bg-white p-4">
                <div className="flex items-center justify-between text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-2">
                  <span>{s.summaryOutput}</span>
                  <span className="tabular-nums font-normal text-slate-500">
                    {summaryWords.toLocaleString(locale)} {s.words}
                  </span>
                </div>
                <div className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-900 max-h-96 overflow-y-auto">
                  {summaryText}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-indigo-200 bg-white p-4">
              <div className="whitespace-pre-wrap break-words text-sm sm:text-base leading-relaxed text-slate-900 max-h-[28rem] overflow-y-auto">
                {summaryText}
              </div>
            </div>
          )}

          {resultMeta && (
            <p className="text-xs text-slate-500">
              {s.summarizedWith}{' '}
              <code className="font-mono text-slate-700">{resultMeta.model}</code>
              {resultMeta.fallbackUsed ? s.fallbackNote : ''}{s.preservedNote}
            </p>
          )}
        </section>
      )}
    </div>
  );
}
