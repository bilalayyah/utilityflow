import type { UiStrings } from '../ui';

/**
 * German chrome dictionary — same UiStrings shape and key order as
 * src/locales/en/ui.ts. Natural Standard German (neutral, "Sie" forms);
 * brand names, URLs, email addresses and code values kept identical
 * to English.
 */
export const deStrings: UiStrings = {
  nav: {
    tools: 'Tools',
    categories: 'Kategorien',
    aiTools: 'KI-Tools',
    about: 'Über uns',
    contact: 'Kontakt',
    allTools: 'Alle Tools',
    freeAiTools: 'Kostenlose KI-Tools',
    viewAiSection: 'KI-Bereich auf der Startseite ansehen →',
    searchPlaceholder: '88 Tools durchsuchen …',
    searchTools: 'Tools suchen',
    closeSearch: 'Suche schließen',
    openMenu: 'Navigationsmenü öffnen',
    closeMenu: 'Navigationsmenü schließen',
    skipToContent: 'Zum Inhalt springen',
    language: 'Sprache',
    chooseLanguage: 'Sprache wählen',
    aiWriting: {
      label: 'KI-Schreibassistent',
      desc: 'Grammatik, Umschreiben, Ton & E-Mail-Entwürfe',
    },
    aiSummarizer: {
      label: 'KI-Textzusammenfasser',
      desc: 'Kurze, mittlere & stichpunktartige Zusammenfassungen',
    },
    aiFinder: {
      label: 'KI-Tool-Finder',
      desc: 'Das passende Tool in einfacher Sprache finden',
    },
  },
  footer: {
    tagline:
      'Eine schnelle, browserbasierte Sammlung alltäglicher Utilities für Schreibende, Entwickler, Marketingteams und Analysten. Für den lokalen Betrieb mit minimalem Aufwand gebaut.',
    categories: 'Kategorien',
    platformAi: 'Plattform & KI',
    legal: 'Rechtliches',
    home: 'Startseite',
    allToolsDirectory: 'Alle-Tools-Verzeichnis',
    aboutUs: 'Über uns',
    contact: 'Kontakt',
    privacyPolicy: 'Datenschutzerklärung',
    termsOfService: 'Nutzungsbedingungen',
    xmlSitemap: 'XML-Sitemap',
    rightsReserved: 'Alle Rechte vorbehalten.',
    deployedNote: 'Browserbasierte Utilities · Gehostet auf Cloudflare Pages',
  },
  common: {
    copy: 'Kopieren',
    copied: 'Kopiert',
    download: 'Herunterladen',
    clear: 'Leeren',
    loadSample: 'Beispiel laden',
    reset: 'Zurücksetzen',
    search: 'Suchen',
    close: 'Schließen',
    cancel: 'Abbrechen',
    save: 'Speichern',
    submit: 'Absenden',
    loading: 'Wird geladen …',
    processing: 'Wird verarbeitet …',
    upload: 'Hochladen',
    chooseFile: 'Datei wählen',
    dragDrop: 'Datei hierher ziehen und ablegen',
    tryAgain: 'Erneut versuchen',
    openTool: 'Tool öffnen',
    browserSide: 'Browserbasiert',
    freeAiTool: 'Kostenloses KI-Tool',
    externalApi: 'Externe API',
  },
  home: {
    seoTitle: 'UtilityFlow – Schnelle Online-Utility-Tools im Browser',
    seoDescription:
      'Kostenlose, schnelle und datenschutzfreundliche Online-Utility-Tools für Textanalyse, Entwickler-Formatierung, Rechner, PDFs, SEO-Prüfungen und Bild-Workflows.',
    seoKeywords: [
      'Online-Utility-Tools',
      'Browser-Tools',
      'Text-Tools',
      'Entwickler-Tools',
      'Online-Rechner',
      'PDF-Tools',
      'SEO-Tools',
    ],
    eyebrow: 'UtilityFlow-Plattform · 7 Hauptkategorien · {count} Live-Utilities',
    h1: 'Praktische Online-Utilities für Tempo und Datenschutz.',
    heroDescription:
      'UtilityFlow bündelt 85 browserbasierte Utilities plus kostenloses KI-Schreiben, Zusammenfassen und intelligentes Finden von Tools – für Text, Entwicklung, Rechner, Social Media, PDF, SEO und Bild-Workflows.',
    exploreCategories: 'Kategorien entdecken',
    openDirectory: 'Vollständiges Verzeichnis öffnen',
    aiWriting: 'KI-Schreiben',
    aiSummarizer: 'KI-Zusammenfassung',
    aiFinder: 'KI-Tool-Finder',
    metrics: {
      toolCategories: 'Tool-Kategorien',
      browserUtilities: 'Browser-Utilities',
      liveTools: 'Live-Tools',
      accountRequired: 'Konto erforderlich',
      none: 'Keines',
    },
    aiSpotlight: {
      badge: 'Kostenlose KI-Suite · Keine Anmeldung nötig',
      title: 'Kostenlose KI-Tools',
      description:
        'Verbessern Sie Entwürfe, fassen Sie lange Dokumente zusammen oder finden Sie in Sekunden das passende Tool – ganz ohne Registrierung.',
    },
    popular: {
      title: 'Beliebte Tools',
      description: 'Die meistgenutzten Alltags-Utilities für Schreiben, Entwicklung und Berechnungen.',
      viewDirectory: 'Tool-Verzeichnis ansehen',
    },
    categories: {
      title: 'Tool-Kategorien',
      description:
        'Sieben spezialisierte Suites für Schreiben, Programmieren, Mathematik, Veröffentlichen, Dokumente, Suchmaschinenoptimierung und Medien-Workflows.',
      includes: 'Enthält: {names}',
    },
    directory: {
      title: 'Alle-Tools-Verzeichnis',
      description:
        'Filtern Sie nach Kategorie oder Stichwort, um direkt zu einem Live-Utility oder Kategorie-Hub zu springen.',
      filterPlaceholder: 'Kategorien oder Tools filtern …',
      allCategories: 'Alle Kategorien',
      noMatch: 'Keine Kategorie und kein Tool passt zu „{query}“.',
      resetFilters: 'Filter zurücksetzen',
      upcomingUtilities: 'Kommende Utilities: {names}',
      scheduledInBatch: 'Geplant für Batch {batch}',
      toolsActive: '{count} Tools aktiv',
      openCategory: 'Kategorieseite öffnen',
    },
    why: {
      title: 'Warum UtilityFlow',
      description: 'Entwickelt als saubere, zuverlässige Alternative zu werbeüberladenen Utility-Seiten.',
      items: [
        {
          title: 'Datenschutz zuerst im Browser',
          description:
            'Zentrale Berechnungen, String-Transformationen und Formatierungen laufen direkt im Client-Speicher, sodass sensible Entwürfe und JSON-Payloads auf Ihrem Gerät bleiben.',
        },
        {
          title: 'Schnelle, leichte Auslieferung',
          description:
            'Code-gesplittete Tool-Module und minimale Laufzeitabhängigkeiten halten die anfänglichen Seitenladezeiten schlank und die Core Web Vitals auf jeder Verbindung reaktionsschnell.',
        },
        {
          title: 'Permanente, saubere URLs',
          description:
            'Jedes Utility lebt unter einem eigenen Pfad mit strukturierten Metadaten, Nutzungsbeispielen und direkten Deep-Links, die auch nach dem Neuladen des Browsers zuverlässig funktionieren.',
        },
        {
          title: 'Vorhersehbare, prüfbare Ergebnisse',
          description:
            'Die Tools setzen auf deterministische Ausgaben, transparente Anleitungen und barrierefreie Steuerelemente – ohne aufdringliche Pop-ups oder irreführende Anzeigen.',
        },
      ],
    },
    faq: {
      title: 'Häufige Fragen',
      description:
        'Die wichtigsten Details zur Arbeitsweise von UtilityFlow und zu den kommenden Batches.',
    },
    faqs: [
      {
        question: 'Sind die Tools von UtilityFlow kostenlos und ohne Konto nutzbar?',
        answer:
          'Ja. Alle 85 Browser-Utilities und 3 KI-Tools auf UtilityFlow sind kostenlos verfügbar – ohne Registrierung, Anmeldewand, Guthaben oder Abonnement.',
      },
      {
        question: 'Lädt UtilityFlow meine Texte, meinen Code oder meine Dateien auf einen Server hoch?',
        answer:
          'Alle 85 zentralen Browser-Utilities laufen lokal in Ihrem Webbrowser, ohne Eingaben hochzuladen. Unsere 3 optionalen kostenlosen KI-Tools (KI-Schreibassistent, KI-Textzusammenfasser und KI-Tool-Finder) verarbeiten Anfragen sicher über serverseitige Groq-Inferenz, ohne Ihre Texte zu speichern.',
      },
      {
        question: 'Wie sind die 88 Tools auf der Plattform organisiert?',
        answer:
          'UtilityFlow umfasst sieben Hauptkategorien (Text & Schreiben, Entwickler, Rechner, Social Media, PDFs, SEO sowie Bild- & Datei-Tools) mit insgesamt 85 Browser-Tools und 3 kostenlosen KI-Tools, die in die Plattform integriert sind.',
      },
      {
        question: 'Kann ich ein Lesezeichen setzen oder einen direkten Link zu einem bestimmten Tool teilen?',
        answer:
          'Ja. Jedes Tool und jede Kategorie erhält eine eigene permanente, saubere URL (wie /word-counter/, /ai-writing-assistant/ oder /category/developer-tools/), die direkt lädt und auch nach dem Neuladen des Browsers funktioniert.',
      },
      {
        question: 'Funktioniert UtilityFlow reibungslos auf Smartphones und Tablets?',
        answer:
          'Ja. Alle Layouts, Navigationssteuerelemente und interaktiven Arbeitsbereiche – einschließlich Hell- und Dunkelmodus – sind Mobile-First gestaltet, mit gut erreichbaren Touch-Zielen und responsiven Rastern.',
      },
    ],
    trustLine: 'Alle Tools sind kostenlos • Keine Registrierung erforderlich • Läuft direkt in deinem Browser',
  },
  directory: {
    seoTitle: 'Alle Online-Utility-Tools im Verzeichnis | UtilityFlow',
    seoDescription:
      'Durchsuchen Sie alle browserbasierten Utility-Tools und Kategorien auf UtilityFlow, organisiert für Texte, Entwicklung, Rechner, PDFs, SEO und Bilder.',
    seoKeywords: ['Utility-Tools-Verzeichnis', 'alle Online-Tools', 'kostenlose Browser-Tools'],
    title: 'Alle-Tools-Verzeichnis',
    description:
      'Durchsuchen Sie alle {count} Live-Utilities auf UtilityFlow oder erkunden Sie die sieben Kategorie-Hubs für Browser- und kostenlose KI-Workflows.',
    searchPlaceholder: 'Nach Toolname, Stichwort oder Kategorie suchen …',
    showing: '{tools} Live-Tools in {categories} Kategorien werden angezeigt',
    all: 'Alle',
    availableTools: 'Verfügbare Tools',
    categorySuites: 'Kategorie-Suites',
    visitHub: '{name}-Hub besuchen',
    plannedToolsInclude: 'Geplante Tools: {names}',
    noMatch: 'Keine Kategorie und kein Tool passt zu Ihrem Filter.',
    clearFilters: 'Filter löschen',
  },
  category: {
    batchLabel: 'Batch {batch}',
    plannedCount: '{count} geplante Tools',
    toolsCount: '{count} Tools',
    toolsLive: '{count} Tools live',
    ofToolsLive: '{count} von {total} Tools live',
    availableTools: 'Verfügbare {name}',
    exploreOther: 'Andere Kategorien entdecken',
    scheduledTitle: 'Geplant für die Umsetzung in Batch {batch}',
    scheduledDescription:
      'Dieser Kategorie-Hub ist aktiv und in der {name}-Architektur indexiert. Eigene Tool-Seiten mit browserbasierter Funktionalität werden hier in Batch {batch} ergänzt.',
    plannedToolsTitle: 'Geplante Tools in dieser Kategorie:',
  },
  toolPage: {
    howToUse: 'So verwenden Sie {name}',
    practicalExamples: 'Praktische Beispiele',
    faqs: 'Häufige Fragen',
    keyBenefits: 'Wichtigste Vorteile',
    commonUseCases: 'Typische Anwendungsfälle',
    runsLocally: 'Läuft lokal in Ihrem Browser',
    externalApi: 'Integration externer API',
    freeAiTool: 'Kostenloses KI-Tool · Keine Anmeldung',
    loadingWorkspace: '{name}-Arbeitsbereich wird geladen …',
    input: 'Eingabe',
    output: 'Ausgabe',
    relatedTitle: 'Verwandte Tools',
    relatedDescription: 'Setzen Sie Ihren Workflow mit ergänzenden Utilities fort.',
    browseAll: 'Alle {name} durchsuchen',
    moreToolsIn: 'Weitere Tools in',
    willAppear: 'erscheinen hier, sobald Batch {batch} veröffentlicht wird.',
  },
  search: {
    placeholder:
      'Tools oder Kategorien suchen (z. B. Wortzähler, JSON, PDF, Rechner) …',
    search: 'Suchen',
    tools: 'Tools',
    categories: 'Kategorien',
    noResults: 'Keine passenden Tools oder Kategorien für „{query}“ gefunden.',
    viewDirectory: 'Vollständiges Verzeichnis ansehen',
    clearSearch: 'Suche löschen',
    ariaLabel: 'Tools oder Kategorien suchen',
  },
  notFound: {
    seoTitle: 'Seite nicht gefunden (404) | Online-Tools UtilityFlow',
    seoDescription:
      'Das angefragte Tool oder die Seite wurde auf UtilityFlow nicht gefunden. Durchsuchen Sie unser Tool-Verzeichnis oder stöbern Sie in unseren Kategorien.',
    eyebrow: '404 · Nicht gefunden',
    title: 'Wir konnten diese Seite nicht finden.',
    description:
      'Die URL wurde möglicherweise verschoben oder dieses Utility ist noch nicht veröffentlicht. Suchen Sie unten oder stöbern Sie in unseren Kategorien, um zu finden, was Sie brauchen.',
    returnHome: 'Zur Startseite',
    browseDirectory: 'Verzeichnis durchsuchen',
    browseCategories: 'Kategorien durchsuchen',
  },
  about: {
    seoTitle: 'Über UtilityFlow – Browserbasierte Online-Tools-Plattform',
    seoDescription:
      'Erfahren Sie, wie UtilityFlow schnelle, datenschutzfreundliche Browser-Tools in sieben Kategorien entwickelt – ohne Konten, Werbung und unnötige Daten-Uploads.',
    title: 'Über UtilityFlow',
    intro:
      'UtilityFlow ist eine unabhängige Webplattform, die 85 fokussierte, zuverlässige Browser-Utilities für die alltägliche digitale Arbeit entwickelt.',
    whyTitle: 'Warum wir UtilityFlow gebaut haben',
    whyP1:
      'Routinemäßige Online-Aufgaben – Wörter zählen, JSON validieren, Zeichenlimits prüfen, Kreditraten berechnen oder ein Bild komprimieren – zwingen Nutzer oft auf langsame Seiten voller aufdringlicher Overlays, verwirrender Downloads oder Pflichtregistrierungen.',
    whyP2:
      'Unser Ziel ist einfach: Jedes Utility bekommt eine eigene, saubere Seite, die schnell lädt, klar erklärt, wie das Tool funktioniert, und direkt in Ihrem Browser ausgeführt wird, wann immer es die Webstandards zulassen.',
    principlesTitle: 'Zentrale Entwicklungsprinzipien',
    principles: [
      {
        title: 'Clientseitige Ausführung',
        description:
          'Text-, Code-, Mathematik- und lokale Datei-Utilities verarbeiten Eingaben im Browser-Speicher, sodass Ihre Arbeitsdaten nicht an Remote-Server gesendet werden.',
      },
      {
        title: 'Transparente API-Hinweise',
        description:
          'Wenn ein spezielles Utility eine externe Abfrage oder einen Serveraufruf benötigt, weisen wir vor der Ausführung explizit auf der Tool-Seite darauf hin.',
      },
      {
        title: 'Barrierefreie Oberflächen',
        description:
          'Tastaturnavigation, lesbarer Kontrast, klare Fehlermeldungen und responsive mobile Steuerelemente sind in jede Vorlage eingebaut.',
      },
      {
        title: 'Modulare Einführung',
        description:
          'Tools werden in sieben Kategorie-Batches ausgeliefert und geprüft, sodass jedes Utility gründliche Funktionstests und Dokumentation erhält.',
      },
    ],
    categoriesTitle: 'Sieben geplante Tool-Kategorien',
    feedbackTitle: 'Feedback oder einen Wunsch?',
    feedbackBefore:
      'Wenn Ihnen ein Grenzfall bei einer Berechnung, ein Barrierefreiheitsproblem auffällt oder Sie ein Utility für einen kommenden Batch vorschlagen möchten, wenden Sie sich über unsere',
    feedbackLink: 'Kontaktseite',
    feedbackAfter: '.',
  },
  contact: {
    seoTitle: 'UtilityFlow kontaktieren – Support, Fehler & Vorschläge',
    seoDescription:
      'Kontaktieren Sie das UtilityFlow-Team, um ein Problem zu melden, ein neues Utility-Tool vorzuschlagen oder Fragen zu Datenschutz und Bedingungen zu stellen.',
    title: 'Kontaktieren Sie uns',
    intro:
      'Senden Sie Fehlerberichte, Tool-Vorschläge oder allgemeine Anfragen. Wir lesen jede Einsendung und priorisieren Korrekturen, die die Genauigkeit der Tools und die Barrierefreiheit verbessern.',
    name: 'Name',
    email: 'E-Mail-Adresse',
    topic: 'Thema',
    message: 'Nachricht',
    submit: 'Nachricht senden',
    namePlaceholder: 'Alex Rivera',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Beschreiben Sie das Tool, den Fehler oder die Frage im Detail …',
    topics: [
      'Tool-Vorschlag',
      'Fehlerbericht',
      'SEO- oder Inhaltskorrektur',
      'Datenschutz- oder Rechtsanfrage',
      'Allgemeine Frage',
    ],
    errors: {
      name: 'Bitte geben Sie Ihren Namen ein.',
      emailEmpty: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
      emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      subject: 'Bitte wählen Sie ein Thema oder geben Sie eines ein.',
      message: 'Bitte geben Sie in Ihrer Nachricht mindestens 10 Zeichen ein.',
    },
    successTitle: 'Nachricht gesendet',
    successThanks:
      'Vielen Dank, {name}. Ihre Nachricht wurde gesendet und wir melden uns bald bei Ihnen.',
    sending: 'Wird gesendet …',
    sendError:
      'Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
    successNote:
      'Wenn Sie noch etwas ergänzen möchten, können Sie uns auch direkt erreichen unter',
    sendAnother: 'Weitere Nachricht senden',
    directEmail: 'Direkte E-Mail',
    directEmailText: 'Lieber direkt schreiben? E-Mail an unser Team:',
  },
  privacy: {
    seoTitle: 'Datenschutzerklärung und Cookie-Hinweise | UtilityFlow',
    seoDescription:
      'Lesen Sie die Datenschutzerklärung von UtilityFlow zur browserbasierten Tool-Ausführung, Cookies, Serverprotokollen und externer Werbung von Drittanbietern.',
    title: 'Datenschutzerklärung',
    lastUpdated: 'Letzte Aktualisierung: November 2026',
    sections: [
      {
        title: '1. Überblick',
        paragraphs: [
          'UtilityFlow ist auf clientseitige Verarbeitung im Browser ausgelegt. Diese Datenschutzerklärung erklärt, welche Informationen bei Ihrem Besuch unserer Website verarbeitet werden, wie unsere Utilities Eingaben behandeln und wie Cookies oder Werbetechnologien funktionieren können.',
        ],
      },
      {
        title: '2. Tool-Eingaben, Browser-Verarbeitung & kostenlose KI-Tools',
        paragraphs: [
          'Texte, Zahlen, Code-Snippets und Dateien, die Sie in unsere 85 browserbasierten Tools eingeben, werden lokal in Ihrer Browsersitzung verarbeitet, ohne Ihr Gerät zu verlassen.',
          'Unsere drei optionalen kostenlosen KI-Tools (KI-Schreibassistent, KI-Textzusammenfasser und KI-Tool-Finder) senden den übermittelten Text über unser geschütztes Backend an Groq zur Echtzeit-Inferenz. Wir speichern Ihre Anfragen nicht und protokollieren sie nicht; die kostenlosen täglichen Limits verwenden nur einen UTC-datierten SHA-256-Hash, sodass rohe Besucher-IP-Adressen nie gespeichert werden.',
        ],
      },
      {
        title: '3. Hosting-Protokolle & technische Telemetrie',
        paragraphs: [
          'UtilityFlow wird auf Cloudflare Pages gehostet. Wie bei Standard-Webhosting-Anbietern kann unser Edge-Netzwerk automatisch Standard-HTTP-Anfragemetadaten (wie IP-Adresse, Browser-User-Agent, angefragte URL und Zeitstempel) verarbeiten, um Seiten zuverlässig auszuliefern, Missbrauch einzudämmen und die Sicherheit zu gewährleisten.',
        ],
      },
      {
        title: '4. Cookies & Werbung von Drittanbietern',
        paragraphs: [
          'Wir zeigen möglicherweise Werbung von Werbenetzwerken Dritter (wie Google AdSense), um den kostenlosen Zugang zu unseren Tools zu finanzieren. Drittanbieter, einschließlich Google, können Cookies oder Web-Beacons verwenden, um Werbung basierend auf früheren Besuchen des Nutzers auf dieser oder anderen Websites auszuliefern.',
          'Sie können personalisierte Werbung deaktivieren, indem Sie die Google-Anzeigeneinstellungen besuchen oder die Cookie-Einstellungen direkt in Ihren Browsereinstellungen verwalten.',
        ],
      },
      {
        title: '5. Externe Links',
        paragraphs: [
          'Unsere Dokumentation oder Tool-Seiten können Links zu externen Websites enthalten. Wir sind nicht verantwortlich für die Datenschutzpraktiken oder Inhalte von Websites Dritter.',
        ],
      },
    ],
    contactTitle: '6. Kontakt',
    contactBefore:
      'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns über unsere',
    contactLink: 'Kontaktseite',
    contactMiddle: 'oder per E-Mail',
    optOutGoogleAds: 'Google Ads Settings',
    optOutAboutAds: 'AboutAds.info – Abmeldung',
  },
  terms: {
    seoTitle: 'Nutzungsbedingungen – Regeln für Online-Tools | UtilityFlow',
    seoDescription:
      'Lesen Sie die Nutzungsbedingungen für die Nutzung der Browser-Tools von UtilityFlow: geistiges Eigentum, Haftungsausschluss für Ergebnisse und Haftungsgrenzen.',
    title: 'Nutzungsbedingungen',
    lastUpdated: 'Letzte Aktualisierung: November 2026',
    sections: [
      {
        title: '2. Zulässige Nutzung',
        paragraphs: [
          'Sie dürfen UtilityFlow für persönliche, bildungsbezogene und kommerzielle Produktivitätsaufgaben nutzen. Sie verpflichten sich, keinen missbräuchlichen Traffic zu automatisieren, die Auslieferung der Website nicht zu stören, Sicherheitsschutzmechanismen nicht zu umgehen und kein Utility für rechtswidrige Aktivitäten zu verwenden.',
        ],
      },
      {
        title: '3. Genauigkeit & Haftungsausschluss',
        paragraphs: [
          'Obwohl wir jedes Utility sorgfältig testen, werden alle Tools, Berechnungen, Umrechnungen und SEO-Prüfungen „wie besehen“ und „wie verfügbar“ bereitgestellt. Ergebnisse sollten unabhängig geprüft werden, bevor Sie finanzielle, rechtliche, medizinische oder produktionsrelevante Entscheidungen treffen.',
        ],
      },
      {
        title: '4. Geistiges Eigentum',
        paragraphs: [
          'Die UtilityFlow-Oberfläche, Markenelemente, Dokumentation und der Quellcode sind durch geltende Gesetze zum geistigen Eigentum geschützt. Sie behalten das volle Eigentum an allen Texten, Code, Dokumenten oder Bildern, die Sie mit unseren clientseitigen Utilities verarbeiten. UtilityFlow ist ein unabhängiges Projekt und ist nicht mit YouTube, Instagram, Google oder einer anderen auf dieser Website genannten Marke Dritter verbunden, wird von diesen nicht unterstützt und steht in keiner Verbindung zu ihnen.',
        ],
      },
      {
        title: '5. Haftungsbeschränkung',
        paragraphs: [
          'Soweit gesetzlich zulässig, haften UtilityFlow und seine Mitwirkenden nicht für indirekte, zufällige, besondere oder Folgeschäden, die aus Ihrer Nutzung oder Ihrer Unfähigkeit zur Nutzung dieser Plattform entstehen.',
        ],
      },
    ],
    acceptanceTitle: '1. Annahme der Bedingungen',
    acceptanceBefore:
      'Durch den Zugriff auf UtilityFlow oder dessen Nutzung stimmen Sie diesen Nutzungsbedingungen und unserer',
    acceptanceLink: 'Datenschutzerklärung',
    acceptanceAfter:
      '. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, nutzen Sie die Website bitte nicht weiter.',
    changesTitle: '6. Änderungen & Kontakt',
    changesBefore:
      'Wir können diese Nutzungsbedingungen aktualisieren, sobald neue Tool-Batches veröffentlicht werden. Fragen richten Sie bitte an unsere',
    changesLink: 'Kontaktseite',
    changesAfter: '.',
  },
};
