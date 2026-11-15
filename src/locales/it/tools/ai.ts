import type { ToolLocaleOverride } from '../../types';

/**
 * Italian overrides — AI tools (3 tools: ai-writing-assistant,
 * ai-text-summarizer, ai-tool-finder). Same shape as the batch files;
 * include apiNotice where the English tool carries one.
 * Source: src/registry/aiTools.ts and src/locales/fr/tools/ai.ts.
 * Note: the AI workbench components send text to Groq; do not claim the AI
 * tools run locally in the browser.
 */
export const IT_AI_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'ai-writing-assistant': {
    slug: 'assistente-di-scrittura-ia',
    name: 'Assistente di Scrittura IA',
    shortDescription:
      'Correggi grammatica, riscrivi frasi, regola il tono, parafrasa, espandi idee e redigi email chiare gratis, senza registrazione.',
    keywords: [
      'assistente scrittura ia',
      'correttore grammatica gratis',
      'riscrittore di frasi',
      'parafrasatore di testo',
      'convertitore di tono',
      'assistente scrittura email',
      'correzione ortografia',
      'semplificatore di frasi',
      'correttore testo ia',
    ],
    seo: {
      title: 'Assistente di Scrittura IA – Grammatica e Tono | UtilityFlow',
      description:
        'Correggi grammatica, riscrivi frasi, regola il tono, semplifica o espandi paragrafi, parafrasa testi e scrivi email chiare gratis, senza registrazione.',
      primaryKeyword: 'assistente scrittura ia',
      secondaryKeywords: [
        'correttore grammatica gratis ia',
        'riscrittore frasi ia',
        'parafrasatore testo ia',
        'assistente scrittura email ia',
      ],
      longTailKeywords: [
        'assistente scrittura ia gratis senza registrazione',
        'rendi testo più professionale con strumento ia',
        'riscrivi paragrafo mantenendo significato gratis',
        'correggi grammatica e ortografia online gratis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% gratis, senza login, abbonamento o crediti. Piano gratuito: fino a 5 richieste di scrittura al giorno per visitatore (massimo 12.000 caratteri), alimentato dall’inferenza gratuita di Groq senza memorizzare il tuo testo.',
    intro:
      'Rifinisci le tue bozze in modo pulito in pochi secondi senza creare un account. Scegli tra 10 attività di scrittura — tra cui correzione grammaticale, parafrasi, cambio di tono, semplificazione di frasi e redazione di email — preservando rigorosamente il tuo significato e i tuoi dati originali.',
  },
  'ai-text-summarizer': {
    slug: 'riassuntore-di-testo-ia',
    name: 'Riassuntore di Testo IA',
    shortDescription:
      'Condensa articoli, report e appunti in riassunti brevi, medi o lunghi con punti elenco e punti chiave, gratis.',
    keywords: [
      'riassuntore testo ia',
      'riassuntore articoli gratis',
      'riassunto con punti elenco',
      'estrattore punti chiave',
      'riassuntore di paragrafi',
      'riassunto in linguaggio semplice',
      'calcolatore tempo di lettura',
      'riassumi testo lungo online',
      'generatore riassunti ia gratis',
    ],
    seo: {
      title: 'Riassuntore di Testo IA – Riassunti Brevi | UtilityFlow',
      description:
        'Riassumi lunghi articoli, appunti di ricerca e report in paragrafi brevi, punti elenco o punti chiave, gratis, velocemente e online, senza registrazione.',
      primaryKeyword: 'riassuntore testo ia',
      secondaryKeywords: [
        'riassuntore articoli gratis',
        'riassuntore testo con punti elenco',
        'estrai punti chiave con ia',
        'generatore riassunti di paragrafi',
      ],
      longTailKeywords: [
        'riassuntore testo ia gratis senza registrazione',
        'riassumi articolo lungo mantenendo numeri e dati',
        'riassuntore testo breve medio e lungo online',
        'riassumi documento ricerca in punti elenco',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% gratis, senza login, abbonamento o crediti. Piano gratuito: fino a 5 riassunti al giorno per visitatore (fino a 25.000 caratteri per richiesta), alimentato dall’inferenza gratuita di Groq senza memorizzare il tuo testo.',
    intro:
      'Distilla lunghi articoli, report, saggi e trascrizioni di riunioni in riassunti netti senza creare un account. Scegli lunghezze Breve (10–20%), Media (30–40%) o Lunga (50–60%) in formati paragrafo, punti elenco, punti chiave e linguaggio semplice, preservando nomi, numeri e date.',
  },
  'ai-tool-finder': {
    slug: 'cercatore-di-strumenti-ia',
    name: 'Cercatore di Strumenti Intelligente IA',
    shortDescription:
      'Descrivi la tua attività in linguaggio semplice, con refusi o formulazioni naturali, per trovare subito il miglior strumento UtilityFlow corrispondente.',
    keywords: [
      'cercatore strumenti ia',
      'ricerca intelligente strumenti',
      'trova strumento utility',
      'raccomanda strumento online',
      'ricerca strumenti linguaggio naturale',
      'trova strumento gratis online',
      'raccomandatore strumenti utility',
      'cerca strumenti per attività',
      'cercatore utility online',
    ],
    seo: {
      title: 'Cercatore di Strumenti IA – Trova lo Strumento | UtilityFlow',
      description:
        'Descrivi ciò di cui hai bisogno in linguaggio semplice per scoprire lo strumento adatto tra gli 88 di UtilityFlow, rapidamente, gratis e senza link inventati.',
      primaryKeyword: 'cercatore strumenti ia',
      secondaryKeywords: [
        'cercatore strumenti online',
        'trova strumento utility giusto',
        'raccomandatore strumenti ia',
        'ricerca strumenti utilityflow',
      ],
      longTailKeywords: [
        'trova strumento online gratis per la mia attività',
        'cerca strumenti utility per problema in linguaggio semplice',
        'scoperta strumenti ia senza registrazione',
        'quale strumento online mi serve per pdf',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% gratis, senza login, abbonamento o crediti. Ricerca nel nostro inventario verificato di 85 strumenti browser + 2 strumenti IA (fino a 10 ricerche IA al giorno + corrispondenza istantanea per parole chiave illimitata).',
    intro:
      'Non sai quale strumento gestisce la tua attività? Descrivi il tuo obiettivo in linguaggio semplice, anche con errori di ortografia o formulazioni informali, e il nostro comparatore ibrido parole chiave + IA Groq raccomanda strumenti verificati dal catalogo live di UtilityFlow con giustificazioni chiare.',
  },
};
