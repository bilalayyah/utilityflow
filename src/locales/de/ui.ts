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
    about: 'Über uns',
    contact: 'Kontakt',
    blog: 'Blog',
    allTools: 'Alle Tools',
    searchPlaceholder: '83 Tools durchsuchen …',
    searchTools: 'Tools suchen',
    closeSearch: 'Suche schließen',
    openMenu: 'Navigationsmenü öffnen',
    closeMenu: 'Navigationsmenü schließen',
    skipToContent: 'Zum Inhalt springen',
    language: 'Sprache',
    chooseLanguage: 'Sprache wählen',
  },
  footer: {
    tagline:
      'Eine schnelle, browserbasierte Sammlung alltäglicher Utilities für Schreibende, Entwickler, Marketingteams und Analysten. Für den lokalen Betrieb mit minimalem Aufwand gebaut.',
    categories: 'Kategorien',
    platformAi: 'Entdecken',
    trustLegal: 'Vertrauen & Rechtliches',
    home: 'Startseite',
    allToolsDirectory: 'Alle-Tools-Verzeichnis',
    blog: 'Blog',
    aboutUs: 'Über uns',
    contact: 'Kontakt',
    privacyPolicy: 'Datenschutzerklärung',
    termsOfService: 'Nutzungsbedingungen',
    xmlSitemap: 'XML-Sitemap',
    rightsReserved: 'Alle Rechte vorbehalten.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  },
  consent: {
    message: 'Wir verwenden Cookies und Analysen, um zu verstehen, wie die Website genutzt wird, und sie zu verbessern. Sie können zustimmen oder ablehnen.',
    accept: 'Zustimmen',
    decline: 'Ablehnen',
    cookieSettings: 'Cookie-Einstellungen',
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
      'UtilityFlow bündelt 83 browserbasierte Utilities für Text, Entwicklung, Rechner, Social Media, PDF, SEO und Bild-Workflows.',
    exploreCategories: 'Kategorien entdecken',
    openDirectory: 'Vollständiges Verzeichnis öffnen',
    metrics: {
      toolCategories: 'Tool-Kategorien',
      browserUtilities: 'Browser-Utilities',
      liveTools: 'Live-Tools',
      accountRequired: 'Konto erforderlich',
      none: 'Keines',
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
    howItWorks: {
      title: 'How It Works',
      description: 'Three simple steps — no account, no install, no waiting.',
      steps: [
        {
          title: 'Find your tool',
          description: 'Search or browse the directory to find the tool you need.',
        },
        {
          title: 'Use it right in your browser',
          description: 'Open the tool and start working instantly — nothing to install.',
        },
        {
          title: 'Copy or download the result',
          description: 'Copy your output or download it as a file, ready to use.',
        },
      ],
    },
    faq: {
      title: 'Häufige Fragen',
      description:
        'Die wichtigsten Details zur Arbeitsweise von UtilityFlow und was Sie von neuen Tools erwarten können.',
    },
    faqs: [
      {
        question: 'Sind die Tools von UtilityFlow kostenlos und ohne Konto nutzbar?',
        answer:
          'Ja. Alle 83 Browser-Utilities auf UtilityFlow sind kostenlos verfügbar – ohne Registrierung, Anmeldewand, Guthaben oder Abonnement.',
      },
      {
        question: 'Lädt UtilityFlow meine Texte, meinen Code oder meine Dateien auf einen Server hoch?',
        answer:
          'Alle 83 zentralen Browser-Utilities laufen lokal in Ihrem Webbrowser, ohne Eingaben hochzuladen.',
      },
      {
        question: 'Wie sind die 83 Tools auf der Plattform organisiert?',
        answer:
          'UtilityFlow umfasst sieben Hauptkategorien (Text & Schreiben, Entwickler, Rechner, Social Media, PDFs, SEO sowie Bild- & Datei-Tools) mit insgesamt 83 Browser-Tools, die in die Plattform integriert sind.',
      },
      {
        question: 'Kann ich ein Lesezeichen setzen oder einen direkten Link zu einem bestimmten Tool teilen?',
        answer:
          'Ja. Jedes Tool und jede Kategorie erhält eine eigene permanente, saubere URL (wie /word-counter/ oder /category/developer-tools/), die direkt lädt und auch nach dem Neuladen des Browsers funktioniert.',
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
      'Durchsuchen Sie alle {count} Live-Utilities auf UtilityFlow oder erkunden Sie die sieben Kategorie-Hubs.',
    searchPlaceholder: 'Nach Toolname, Stichwort oder Kategorie suchen …',
    showing: '{tools} Live-Tools in {categories} Kategorien werden angezeigt',
    all: 'Alle',
    availableTools: 'Verfügbare Tools',
    categorySuites: 'Kategorie-Suites',
    visitHub: '{name}-Hub besuchen',
    plannedToolsInclude: 'Tools dieser Kategorie: {names}',
    noMatch: 'Keine Kategorie und kein Tool passt zu Ihrem Filter.',
    clearFilters: 'Filter löschen',
  },
  category: {
    plannedCount: '{count} Tools',
    toolsCount: '{count} Tools',
    toolsLive: '{count} Tools live',
    ofToolsLive: '{count} von {total} Tools live',
    availableTools: 'Verfügbare {name}',
    exploreOther: 'Andere Kategorien entdecken',
    scheduledTitle: 'Weitere Tools folgen in Kürze',
    scheduledDescription:
      'Dieser Kategorie-Hub ist aktiv und in der {name}-Architektur indexiert. Eigene Tool-Seiten mit browserbasierter Funktionalität werden hier in Kürze ergänzt.',
    plannedToolsTitle: 'Tools in dieser Kategorie:',
  },
  toolPage: {
    howToUse: 'So verwenden Sie {name}',
    practicalExamples: 'Praktische Beispiele',
    faqs: 'Häufige Fragen',
    keyBenefits: 'Wichtigste Vorteile',
    commonUseCases: 'Typische Anwendungsfälle',
    runsLocally: 'Läuft lokal in Ihrem Browser',
    externalApi: 'Integration externer API',
    loadingWorkspace: '{name}-Arbeitsbereich wird geladen …',
    input: 'Eingabe',
    output: 'Ausgabe',
    relatedTitle: 'Verwandte Tools',
    relatedDescription: 'Setzen Sie Ihren Workflow mit ergänzenden Utilities fort.',
    browseAll: 'Alle {name} durchsuchen',
    moreToolsIn: 'Weitere Tools in',
    willAppear: 'erscheinen hier in Kürze.',
    bylineAuthor: 'Von Bilal',
    lastUpdated: 'Zuletzt aktualisiert: November 2026',
  },
  blog: {
    seoTitle: 'Anleitungen, Tutorials & Ressourcen | UtilityFlow Blog',
    seoDescription:
      'Praxisnahe Anleitungen, Schritt-für-Schritt-Tutorials und Ressourcen für jedes UtilityFlow-Tool – Text, Entwicklung, Rechner, PDF, SEO, Social Media und Bilder.',
    title: 'Anleitungen, Tutorials & Ressourcen',
    description:
      'Praxisnahe Anleitungen und Schritt-für-Schritt-Tutorials für jedes UtilityFlow-Tool. Erfahren Sie, was jedes Tool kann, wie Sie es optimal nutzen und das beste Ergebnis erzielen.',
    searchPlaceholder: 'Artikel suchen...',
    searchArticles: 'Artikel suchen',
    noResults: 'Keine Artikel gefunden.',
    featured: 'Empfohlene Artikel',
    latest: 'Neueste Artikel',
    browseByCategory: 'Nach Kategorie stöbern',
    relatedArticles: 'Verwandte Artikel',
    relatedTools: 'Verwandte Tools',
    readingTime: '{minutes} Min. Lesezeit',
    publishedOn: 'Veröffentlicht am {date}',
    updatedOn: 'Aktualisiert am {date}',
    byEditorial: 'Vom UtilityFlow-Redaktionsteam',
    tableOfContents: 'Inhaltsverzeichnis',
    prevArticle: 'Vorheriger Artikel',
    nextArticle: 'Nächster Artikel',
    share: 'Teilen',
    tryTool: 'Tool ausprobieren',
    guidesInCategory: 'Anleitungen in dieser Kategorie',
    categoryGuidesWord: 'Anleitungen',
    noArticlesYet: 'Noch keine Artikel',
    noArticlesYetDescription: 'Anleitungen für diesen Bereich sind in Arbeit. Schauen Sie bald wieder vorbei.',
    backToBlog: 'Zurück zum Blog',
    allArticles: 'Alle Artikel',
    notAvailableInLanguage: 'Dieser Artikel ist in dieser Sprache noch nicht verfügbar.',
    minRead: 'Min. Lesezeit',
  },
  comments: {
    title: 'Kommentare',
    note: 'Teilen Sie Ihre Meinung – kein Konto nötig. Schreiben Sie einfach Ihren Namen und posten Sie.',
    namePlaceholder: 'Ihr Name',
    commentPlaceholder: 'Kommentar schreiben…',
    postButton: 'Kommentar posten',
    posting: 'Wird gepostet…',
    empty: 'Noch keine Kommentare – teilen Sie als Erste/r Ihre Meinung.',
    loadError: 'Kommentare konnten gerade nicht geladen werden, Sie können unten trotzdem einen posten.',
    postError: 'Ihr Kommentar konnte nicht gepostet werden. Bitte versuchen Sie es gleich erneut.',
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
      'UtilityFlow ist eine unabhängige Webplattform, die 83 fokussierte, zuverlässige Utilities für die alltägliche digitale Arbeit entwickelt.',
    whyTitle: 'Warum wir UtilityFlow gebaut haben',
    whyP1:
      'Routinemäßige Online-Aufgaben – Wörter zählen, JSON validieren, Zeichenlimits prüfen, Kreditraten berechnen oder ein Bild komprimieren – zwingen Nutzer oft auf langsame Seiten voller aufdringlicher Overlays, verwirrender Downloads oder Pflichtregistrierungen.',
    whyP2:
      'Unser Ziel ist einfach: Jedes Utility bekommt eine eigene, saubere Seite, die schnell lädt, klar erklärt, wie das Tool funktioniert, und direkt in Ihrem Browser ausgeführt wird, wann immer es die Webstandards zulassen.',
    orgTitle: 'Wer hinter UtilityFlow steht',
    orgP1:
      'UtilityFlow ist ein unabhängiges Projekt, das von Bilal erstellt und gepflegt wird – einem Maker, der in seiner Freizeit kostenlose Web-Tools baut. Hinter der Website steht kein Unternehmen, keine Investorenfinanzierung und kein Team von Mitarbeitern: Jedes Tool, jede Anleitung und jede Hilfeseite wird von einer einzigen Person entworfen, gebaut und getestet. Alle 83 Tools sind kostenlos nutzbar – ohne Konten und ohne Abonnements. Die Fußzeile nennt Shaheen, dessen Ermutigung das Projekt inspiriert hat und dessen Name auf jeder Seite als Erinnerung daran steht, wo die Idee begann.',
    orgP2:
      'Weil das Projekt klein und unabhängig ist, bleiben Entscheidungen einfach: Wenn ein Tool langsam, verwirrend oder falsch ist, wird es repariert. Feedback über die Kontaktseite geht direkt an die Person, die den Code ändern kann, und Vorschläge von Besuchern haben bereits neue Tools und Verbesserungen auf der Website geprägt.',
    howTitle: 'Wie unsere Tools gebaut und getestet werden',
    howP1:
      'Jedes Utility beginnt mit einer einzigen klaren Aufgabe – Wörter zählen, PDFs zusammenführen, JSON formatieren – und wird als fokussierte Seite gebaut, die genau diese Aufgabe gut erledigt. Wo es die Webstandards zulassen, geschieht die Arbeit vollständig in Ihrem Browser, sodass Ihre Texte und Dateien Ihr Gerät nie verlassen müssen. Jede Tool-Seite erklärt ihre Schritte in einer kurzen Anleitung, zeigt ausgearbeitete Beispiele und beantwortet die Fragen, die am häufigsten gestellt werden, damit Sie das Ergebnis selbst beurteilen können, statt einer Blackbox zu vertrauen.',
    howP2:
      'Bevor ein Tool live geht, wird es in einem Desktop- und einem mobilen Browser mit echten Eingaben getestet, einschließlich Grenzfälle wie leere Eingaben, sehr lange Texte und ungewöhnliche Dateitypen. Wenn etwas kaputtgeht oder eine Berechnung falsch aussieht, wird die Korrektur als Website-Update ausgeliefert und die Seite erneut geprüft. Jedes Tool läuft vollständig in Ihrem Browser – nichts, was Sie eingeben, wird jemals an einen Server gesendet.',
    whoTitle: 'Für wen UtilityFlow gedacht ist',
    whoP1:
      'UtilityFlow ist für alle gedacht, die eine schnelle Antwort von einem Tool brauchen, ohne Software zu installieren oder ein Konto zu erstellen: Studierende, die die Wortzahl eines Aufsatzes prüfen, Autoren, die einen Entwurf formatieren, Entwickler, die JSON validieren oder eine URL kodieren, Marketer, die Zeichenlimits prüfen, und kleine Unternehmen, die einen Kredit oder einen Rabatt berechnen. Wenn eine Aufgabe weniger als eine Minute dauert, sollte auch das Tool dafür weniger als eine Minute brauchen – das ist der Standard, an dem jede Seite dieser Website gemessen wird.',
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
          'Tools werden nach Kategorie ausgeliefert und geprüft, sodass jedes Utility gründliche Funktionstests und Dokumentation erhält.',
      },
    ],
    categoriesTitle: 'Sieben Tool-Kategorien',
    feedbackTitle: 'Feedback oder einen Wunsch?',
    feedbackBefore:
      'Wenn Ihnen ein Grenzfall bei einer Berechnung, ein Barrierefreiheitsproblem auffällt oder Sie ein neues Utility vorschlagen möchten, wenden Sie sich über unsere',
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
    aboutTitle: 'Worüber Sie schreiben können',
    aboutP1:
      'Nutzen Sie dieses Formular für alles, was die Website betrifft. Melden Sie einen Fehler und teilen Sie uns mit, welches Tool Sie verwendet haben, was Sie eingegeben haben und was Sie erwartet haben – je mehr Details Sie angeben, desto schneller lässt sich das Problem nachstellen und beheben. Schlagen Sie ein neues Tool vor und beschreiben Sie die Aufgabe, die es erledigen soll; Ideen, nach denen viele Besucher fragen, rücken nach oben auf der Liste. Sie können auch auf eine falsche Berechnung, eine verwirrende Anleitung oder einen Übersetzungsfehler auf einer beliebigen Seite hinweisen.',
    aboutP2:
      'Auch Datenschutz- und Rechtsfragen sind willkommen. Wenn ein von Ihnen geposteter Kommentar entfernt werden soll, geben Sie die Tool-Seite und den verwendeten Namen an, und er wird gelöscht. Für alles andere – eine Partnerschaftsidee, eine Presseanfrage oder eine allgemeine Anmerkung zur Website – funktioniert dasselbe Formular, oder Sie schreiben direkt an die E-Mail-Adresse auf dieser Seite.',
    responseTitle: 'Was nach Ihrer Nachricht passiert',
    responseP1:
      'Jede Nachricht wird von der Person gelesen, die UtilityFlow baut und pflegt – es gibt keine Support-Abteilung und keine automatisierte Antwortwarteschlange. Fehlerberichte und falsche Ergebnisse werden zuerst geprüft, weil ein kaputtes Tool alle betrifft, die es nutzen. Tool-Vorschläge werden gesammelt und danach bewertet, wie viele Menschen sie nutzen würden und wie gut sie zum browserbasierten Ansatz der Website passen.',
    responseP2:
      'Sie brauchen kein Konto, um uns zu kontaktieren, und wir verwenden Ihre E-Mail-Adresse nur, um auf Ihre Nachricht zu antworten. Wenn Sie das Formular lieber nicht nutzen möchten, erreicht die direkte E-Mail-Adresse auf dieser Seite denselben Posteingang.',
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
      'Lesen Sie die Datenschutzerklärung von UtilityFlow zur browserbasierten Tool-Ausführung, Cookies, Serverprotokollen und Analysen.',
    title: 'Datenschutzerklärung',
    lastUpdated: 'Letzte Aktualisierung: November 2026',
    sections: [
      {
        title: '1. Überblick',
        paragraphs: [
          'UtilityFlow ist auf clientseitige Verarbeitung im Browser ausgelegt. Diese Datenschutzerklärung erklärt, welche Informationen bei Ihrem Besuch unserer Website verarbeitet werden, wie unsere Utilities Eingaben behandeln und wie Cookies und Analysen auf der Website funktionieren.',
        ],
      },
      {
        title: '2. Tool-Eingaben & Browser-Verarbeitung',
        paragraphs: [
          'Texte, Zahlen, Code-Snippets und Dateien, die Sie in unsere 83 browserbasierten Tools eingeben, werden lokal in Ihrer Browsersitzung verarbeitet, ohne Ihr Gerät zu verlassen.',
          'Kommentare unter unseren Tools fragen nur nach einem Namen und dem Kommentartext. Der Name und der Text, die Sie übermitteln, werden auf unserer Hosting-Plattform gespeichert und zusammen mit dem Datum öffentlich auf der jeweiligen Tool-Seite angezeigt. Wir fragen weder nach einer E-Mail-Adresse noch nach einem Konto, um zu kommentieren, und wir verwenden Kommentardaten nicht für Werbung. Wenn Sie einen Kommentar entfernen lassen möchten, kontaktieren Sie uns mit der Seite und dem verwendeten Namen, und wir löschen ihn.',
        ],
      },
      {
        title: '3. Hosting-Protokolle & technische Telemetrie',
        paragraphs: [
          'UtilityFlow wird auf Cloudflare Pages gehostet. Wie bei Standard-Webhosting-Anbietern kann unser Edge-Netzwerk automatisch Standard-HTTP-Anfragemetadaten (wie IP-Adresse, Browser-User-Agent, angefragte URL und Zeitstempel) verarbeiten, um Seiten zuverlässig auszuliefern, Missbrauch einzudämmen und die Sicherheit zu gewährleisten.',
          'Wir führen Hosting-Protokolle nicht mit anderen Daten zusammen, um einzelne Besucher zu identifizieren, und wir verkaufen oder teilen Protokolldaten nicht mit Werbetreibenden. Protokolle existieren nur, um den Dienst zu betreiben und zu sichern.',
        ],
      },
      {
        title: '4. Cookies & Analysen',
        paragraphs: [
          'UtilityFlow zeigt derzeit keine Werbung von Drittanbietern.',
          'Wir verwenden außerdem Google Analytics 4, um aggregiert zu verstehen, wie die Website genutzt wird; es läuft nur, wenn Sie Cookies im Banner akzeptieren.',
        ],
      },
      {
        title: '5. Externe Links',
        paragraphs: [
          'Unsere Dokumentation oder Tool-Seiten können Links zu externen Websites enthalten. Wir sind nicht verantwortlich für die Datenschutzpraktiken oder Inhalte von Websites Dritter.',
          'Externe Links öffnen sich nach Möglichkeit in einem neuen Tab. Bitte prüfen Sie die Datenschutzerklärung der verlinkten Website, bevor Sie dort persönliche Daten eingeben.',
        ],
      },
      {
        title: '6. Datenspeicherung',
        paragraphs: [
          'Informationen, die in Ihrem Browser verarbeitet werden, werden nie an uns gesendet, sodass es nichts zu speichern gibt. Kommentare werden aufbewahrt, bis sie gelöscht werden – von uns oder auf Ihren Wunsch. Hosting- und Sicherheitsprotokolle werden nur für den begrenzten Zeitraum aufbewahrt, den unser Hosting-Anbieter für den Betrieb und den Schutz des Dienstes benötigt.',
        ],
      },
      {
        title: '7. Ihre Rechte und Wahlmöglichkeiten',
        paragraphs: [
          'Sie können Cookies jederzeit in Ihren Browsereinstellungen blockieren oder löschen. Wenn Sie einen Kommentar gepostet haben, können Sie dessen Entfernung verlangen, indem Sie uns kontaktieren. Da unsere Tools in Ihrem Browser laufen und wir keine Konten oder Profile führen, gibt es keine persönliche Datendatei zum Herunterladen oder Korrigieren – aber jede Frage zu Ihren Daten wird beantwortet, wenn Sie uns schreiben.',
        ],
      },
      {
        title: '8. Datenschutz von Kindern',
        paragraphs: [
          'UtilityFlow ist eine Website für allgemeine Zwecke und richtet sich nicht an Kinder unter 13 Jahren. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie als Elternteil oder Erziehungsberechtigter glauben, dass ein Kind einen Kommentar auf der Website gepostet hat, kontaktieren Sie uns, und wir entfernen ihn.',
        ],
      },
      {
        title: '9. Änderungen dieser Richtlinie',
        paragraphs: [
          'Wir können diese Datenschutzerklärung aktualisieren, wenn wir Tools hinzufügen, Anbieter wechseln oder die Funktionsweise der Website anpassen. Das Datum „Letzte Aktualisierung“ oben auf dieser Seite zeigt, wann sie zuletzt überarbeitet wurde. Die weitere Nutzung der Website nach einer Änderung bedeutet, dass Sie die aktualisierte Richtlinie akzeptieren.',
        ],
      },
    ],
    contactTitle: '10. Kontakt',
    contactBefore:
      'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns über unsere',
    contactLink: 'Kontaktseite',
    contactMiddle: 'oder per E-Mail',
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
          'Sie dürfen auf unsere Tools verlinken und deren Ergebnisse teilen. Sie dürfen unsere Tools nicht als Ihre eigenen ausgeben, das Design oder die Inhalte der Website kopieren und als konkurrierenden Dienst erneut veröffentlichen oder die Website so nutzen, dass andere über die Herkunft eines Ergebnisses getäuscht werden.',
        ],
      },
      {
        title: '3. Genauigkeit & Haftungsausschluss',
        paragraphs: [
          'Obwohl wir jedes Utility sorgfältig testen, werden alle Tools, Berechnungen, Umrechnungen und SEO-Prüfungen „wie besehen“ und „wie verfügbar“ bereitgestellt. Ergebnisse sollten unabhängig geprüft werden, bevor Sie finanzielle, rechtliche, medizinische oder produktionsrelevante Entscheidungen treffen.',
          'Berechnungen wie Kreditraten, Steuerschätzungen und Währungsumrechnungen sind Planungshilfen, keine professionelle Beratung. Zahlen können sich durch Kurse, Regeln und Rundungen ändern – bestätigen Sie wichtige Zahlen daher bei einem qualifizierten Fachmann oder einer offiziellen Quelle, bevor Sie danach handeln.',
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
      {
        title: '6. Nutzerinhalte und Kommentare',
        paragraphs: [
          'Sie behalten das volle Eigentum an allem, was Sie in unsere Tools eingeben oder als Kommentar posten. Indem Sie einen Kommentar posten, geben Sie uns die Erlaubnis, ihn öffentlich auf der betreffenden Tool-Seite anzuzeigen. Posten Sie nichts Rechtswidriges, Irreführendes oder für andere Schädliches, und posten Sie keine persönlichen Daten anderer Personen. Wir können Kommentare, die gegen diese Regeln verstoßen oder uns gemeldet werden, ohne Ankündigung entfernen.',
        ],
      },
      {
        title: '7. Dienste Dritter',
        paragraphs: [
          'Einige Funktionen beruhen auf unabhängigen Diensten Dritter: Das Kontaktformular wird von FormSubmit zugestellt und die Website wird auf Cloudflare gehostet. Jeder dieser Dienste hat eigene Bedingungen und eine eigene Datenschutzerklärung, und Ihre Nutzung dieser Dienste unterliegt diesen Dokumenten. UtilityFlow ist nicht verantwortlich für die Verfügbarkeit oder die Praktiken von Diensten Dritter.',
        ],
      },
      {
        title: '8. Verfügbarkeit des Dienstes',
        paragraphs: [
          'UtilityFlow ist ein kostenloser Dienst, und wir garantieren nicht, dass jedes Tool immer verfügbar ist. Tools können geändert, verbessert oder entfernt werden, und die Website kann für Wartungsarbeiten vorübergehend nicht erreichbar sein. Wir bemühen uns, den Dienst reibungslos am Laufen zu halten, haften aber nicht für Unterbrechungen oder Verluste durch Ausfallzeiten.',
        ],
      },
    ],
    acceptanceTitle: '1. Annahme der Bedingungen',
    acceptanceBefore:
      'Durch den Zugriff auf UtilityFlow oder dessen Nutzung stimmen Sie diesen Nutzungsbedingungen und unserer',
    acceptanceLink: 'Datenschutzerklärung',
    acceptanceAfter:
      '. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, nutzen Sie die Website bitte nicht weiter.',
    changesTitle: '9. Änderungen & Kontakt',
    changesBefore:
      'Wir können diese Nutzungsbedingungen aktualisieren, sobald neue Tools veröffentlicht werden. Fragen richten Sie bitte an unsere',
    changesLink: 'Kontaktseite',
    changesAfter: '.',
  },
};
