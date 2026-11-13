import type { CategoryLocaleOverride } from '../types';

/**
 * Italian overrides for the 7 categories, keyed by category id.
 * Every category: slug (matches CATEGORY_LOCALE_SLUGS.it in
 * src/locales/config.ts), name, shortName, description, longDescription,
 * seo, sampleToolNames (5).
 */
export const IT_CATEGORY_OVERRIDES: Record<string, CategoryLocaleOverride> = {
  'text-writing': {
    slug: 'strumenti-di-testo-e-scrittura',
    name: 'Strumenti di testo e scrittura',
    shortName: 'Testo e scrittura',
    description:
      'Analizza il numero di parole, formatta il testo, pulisci gli spazi, converti maiuscole e minuscole e controlla la leggibilità direttamente nel tuo browser.',
    longDescription:
      'Utilità precise di scrittura e manipolazione delle stringhe, pensate per scrittori, editor, team di contenuti e studenti. Ogni operazione di testo viene eseguita istantaneamente sul tuo dispositivo, senza caricare le bozze su server remoti.',
    seo: {
      title: 'Strumenti di testo e scrittura online | UtilityFlow',
      description:
        'Strumenti di testo e scrittura nel browser: contatori di parole e caratteri, convertitori di maiuscole e minuscole e strumenti di pulizia del testo, gratis.',
      keywords: [
        'strumenti di testo',
        'utilità di scrittura',
        'contatore di parole',
        'contatore di caratteri',
        'convertitore di maiuscole',
      ],
    },
    sampleToolNames: [
      'Contatore di Parole',
      'Contatore di Caratteri',
      'Convertitore di Maiuscole',
      'Rimuovi le Righe Duplicate',
      'Confronto Testo',
    ],
  },
  developer: {
    slug: 'strumenti-per-sviluppatori',
    name: 'Strumenti per sviluppatori',
    shortName: 'Sviluppatori',
    description:
      'Formatta JSON, codifica Base64, testa espressioni regolari, decodifica JWT e genera hash senza alcun passaggio dal server.',
    longDescription:
      'Utilità quotidiane di ingegneria, pensate per il debug rapido e la trasformazione pulita dei dati. Incolla i payload, ispeziona i formati strutturati e convalida la sintassi in locale, così token sensibili e frammenti di configurazione non lasciano mai la tua macchina.',
    seo: {
      title: 'Strumenti per sviluppatori: JSON, regex, Base64, JWT',
      description:
        'Utilità per sviluppatori nel browser: formattazione JSON, test di espressioni regolari, codifica Base64 e URL, ispezione JWT e generazione sicura di UUID.',
      keywords: [
        'strumenti per sviluppatori',
        'formattatore JSON',
        'codificatore Base64',
        'tester di regex',
        'decodificatore JWT',
      ],
    },
    sampleToolNames: [
      'Formattatore e Validatore JSON',
      'Codificatore / Decodificatore Base64',
      'Codificatore / Decodificatore URL',
      'Generatore di UUID (v4 e v7)',
      'Tester Regex',
    ],
  },
  calculators: {
    slug: 'calcolatrici',
    name: 'Calcolatrici',
    shortName: 'Calcolatrici',
    description:
      'Calcola età, percentuali, piani di rimborso dei prestiti, BMI, conversioni di unità e margini aziendali con precisione deterministica.',
    longDescription:
      'Calcolatrici accurate per finanza, date, salute e matematica, progettate per la chiarezza. Consulta suddivisioni passo passo, output tabellari puliti e ricalcoli istantanei mentre regoli i dati inseriti.',
    seo: {
      title: 'Calcolatrici online: finanza, date, matematica e unità',
      description:
        'Calcolatrici online veloci e trasparenti per età, percentuali, rate di prestiti, margini e conversioni di unità, con risultati immediati e senza registrazione.',
      keywords: [
        'calcolatrici online',
        'calcolatrice di età',
        'calcolatrice di percentuali',
        'calcolatrice di prestiti',
        'convertitore di unità',
      ],
    },
    sampleToolNames: [
      'Calcolatrice di Età',
      'Calcolatrice di Percentuale',
      'Calcolatrice di Prestito e Rata EMI',
      'Calcolatrice di Sconto e Margine',
      'Calcolatrice di Differenza tra Date',
    ],
  },
  'social-media': {
    slug: 'strumenti-per-social-media',
    name: 'Strumenti per social media',
    shortName: 'Social media',
    description:
      'Crea link di tracciamento UTM, visualizza l’anteprima della lunghezza dei post, genera codici QR e formatta didascalie per i canali social moderni.',
    longDescription:
      'Utilità pratiche di marketing e pubblicazione per creator, team di crescita e community manager. Standardizza i parametri di tracciamento delle campagne, verifica i limiti di caratteri delle piattaforme e genera codici QR scansionabili quando ne hai bisogno.',
    seo: {
      title: 'Strumenti per social media: codici QR, UTM e hashtag',
      description:
        'Crea link UTM, genera codici QR, verifica i limiti di caratteri dei social media e formatta hashtag e biografie con utilità pulite e gratuite nel browser.',
      keywords: [
        'strumenti per social media',
        'generatore di codici QR',
        'creatore di UTM',
        'formattatore di hashtag',
        'contatore di didascalie',
      ],
    },
    sampleToolNames: [
      'Generatore di Codice QR',
      'Creatore di Link UTM',
      'Verificatore di Limite di Caratteri per Social',
      'Formattatore di Testo Unicode Elegante',
      'Formattatore di Interruzioni di Riga per Bio Instagram',
    ],
  },
  pdf: {
    slug: 'strumenti-pdf',
    name: 'Strumenti PDF',
    shortName: 'Strumenti PDF',
    description:
      'Unisci, dividi, riordina, aggiungi filigrane e converti documenti PDF nel tuo browser, senza caricare file privati.',
    longDescription:
      'Flussi di lavoro documentali progettati per la riservatezza. Elabora contratti, fatture e pacchetti di studio direttamente nella memoria del client con WebAssembly e le API canvas del browser, anziché su server di file remoti.',
    seo: {
      title: 'Strumenti PDF: unire, dividere e convertire | UtilityFlow',
      description:
        'Unisci, dividi, ruota e converti i file PDF in locale nel tuo browser, senza caricare documenti sensibili su server di terze parti e senza registrazione.',
      keywords: [
        'strumenti PDF',
        'unire PDF',
        'dividere PDF',
        'immagini in PDF',
        'editor PDF nel browser',
      ],
    },
    sampleToolNames: [
      'Unisci PDF',
      'Dividi ed Estrai Pagine PDF',
      'Convertitore di Immagini in PDF',
      'Rotazione di Pagine PDF',
      'Ispettore ed Editor di Metadati PDF',
    ],
  },
  seo: {
    slug: 'strumenti-seo',
    name: 'Strumenti SEO',
    shortName: 'Strumenti SEO',
    description:
      'Visualizza l’anteprima degli snippet SERP, genera tag OpenGraph, crea file robots.txt e sitemap XML e controlla la densità delle parole chiave.',
    longDescription:
      'Utilità tecniche e di ottimizzazione on-page per editori, fondatori indipendenti e specialisti SEO. Convalida la lunghezza dei titoli, componi metadati strutturati e crea slug URL puliti in pochi secondi.',
    seo: {
      title: 'Strumenti SEO: anteprime SERP e meta tag | UtilityFlow',
      description:
        'Ottimizza le tue pagine con utilità SEO gratuite: anteprime di snippet SERP, generatori di meta tag e robots.txt e controlli di densità delle parole chiave.',
      keywords: [
        'strumenti SEO',
        'generatore di meta tag',
        'anteprima SERP',
        'generatore di robots.txt',
        'generatore di slug',
      ],
    },
    sampleToolNames: [
      'Generatore di Meta Tag e Open Graph',
      'Anteprima Snippet SERP',
      'Generatore di Slug URL e Ottimizzatore di Percorsi SEO',
      'Generatore di Robots.txt',
      'Generatore di Dati Strutturati (JSON-LD)',
    ],
  },
  'image-file': {
    slug: 'strumenti-per-immagini-e-file',
    name: 'Strumenti per immagini e file',
    shortName: 'Immagini e file',
    description:
      'Comprimi immagini, ridimensiona le dimensioni, converti PNG/JPG/WebP, testa il contrasto WCAG, scansiona codici QR, calcola hash di file e crea favicon in locale.',
    longDescription:
      'Utilità veloci per media, crittografia e file, basate su HTML5 Canvas, Web Crypto API e API di file lato client. Ottimizza le risorse web per i Core Web Vitals, verifica i checksum SHA-256 dei file, estrai le palette delle immagini e genera favicon senza caricare file.',
    seo: {
      title: 'Strumenti per immagini e file: comprimere e convertire',
      description:
        'Comprimi, ridimensiona, ruota e converti immagini tra PNG, JPG e WebP in locale, verifica i checksum dei file, scansiona codici QR e crea favicon gratis.',
      keywords: [
        'strumenti per immagini',
        'compressore di immagini',
        'ridimensionatore di immagini',
        'convertitore WebP',
        'verificatore di contrasto',
      ],
    },
    sampleToolNames: [
      'Compressore di Immagini',
      'Ridimensionatore e Ritagliatore di Immagini',
      'Convertitore di Formato Immagine (PNG / JPG / WebP)',
      'Verificatore di Contrasto Colori ed Estrattore di Palette',
      'Generatore di Password Crittografiche e Passphrase',
    ],
  },
};
