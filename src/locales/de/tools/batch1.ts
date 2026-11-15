import type { ToolLocaleOverride } from '../../types';

/**
 * German overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are unique, lowercase, hyphenated, and do not collide with
 * English slugs or reserved paths.
 */
export const DE_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'woerter-zaehler',
    name: 'Wörterzähler',
    shortDescription:
      'Zählen Sie Wörter, Zeichen, Sätze, Absätze, Lesezeit und die häufigsten Schlüsselwörter sofort.',
    keywords: [
      'wörterzähler',
      'wörter online zählen',
      'wortanzahl im text zählen',
      'lesezeit rechner',
      'satz zähler',
      'absatz zähler',
      'wortzähler kostenlos',
      'sprechzeit rechner',
      'zeichen und wörter zählen',
    ],
    seo: {
      title: 'Wörterzähler: Wörter & Lesezeit zählen | UtilityFlow',
      description:
        'Zählen Sie Wörter, Zeichen, Sätze und Absätze sofort und sehen Sie Lese- und Sprechzeit-Schätzungen – alles direkt im Browser, ohne Upload – kostenlos, privat.',
      primaryKeyword: 'wörterzähler',
      secondaryKeywords: ['wörterzähler online', 'wortzähl tool', 'lesezeit schätzer', 'absatz zähler'],
      longTailKeywords: ['wörter und zeichen online kostenlos zählen', 'lese- und sprechzeit aus text schätzen', 'wörterzähler im browser ohne upload', 'wortanzahl für aufsatz online prüfen'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Messen Sie exakte Wortzahlen, Zeichenanzahl, Satzdichte sowie geschätzte Lese- und Sprechdauer in Echtzeit, ohne Ihren Entwurf auf einen Server hochzuladen.',
  },
  'character-counter': {
    slug: 'zeichen-zaehler',
    name: 'Zeichenzähler',
    shortDescription:
      'Messen Sie die exakte Zeichenlänge mit und ohne Leerzeichen, in UTF-8-Bytes, und prüfen Sie Zeichenlimits für Social Media und SEO.',
    keywords: [
      'zeichenzähler',
      'buchstaben zähler',
      'meta beschreibung länge prüfen',
      'utf-8 byte zähler',
      'zeichenlimit tool',
      'zeichen online zählen',
      'textlänge prüfen',
      'seo titel länge prüfen',
      'sms zeichenzähler',
    ],
    seo: {
      title: 'Zeichenzähler: Limits & Byte-Größe prüfen | UtilityFlow',
      description:
        'Zählen Sie Zeichen mit und ohne Leerzeichen, Buchstaben und UTF-8-Bytes und verfolgen Sie Ihren Fortschritt bei SEO- und Social-Media-Limits im Browser.',
      primaryKeyword: 'zeichenzähler',
      secondaryKeywords: ['zeichen online zählen', 'string länge rechner', 'meta titel länge', 'textlänge prüfen'],
      longTailKeywords: ['zeichen ohne leerzeichen online zählen', 'seo meta beschreibung zeichenlimit prüfen', 'utf-8 byte länge von text berechnen', 'twitter zeichenlimit online prüfen'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Verfolgen Sie exakte Zeichen-, Buchstaben-, Ziffern-, Leerzeichen- und UTF-8-Byte-Zahlen und beobachten Sie Live-Fortschrittsbalken für SEO-Snippets, SMS-Abschnitte und Social-Media-Feeds.',
  },
  'case-converter': {
    slug: 'gross-kleinschreibung-konverter',
    name: 'Groß-/Kleinschreibung-Konverter',
    shortDescription:
      'Wandeln Sie Text zwischen GROSSBUCHSTABEN, Kleinbuchstaben, Titel-Schreibweise, Satzschreibweise, camelCase, snake_case und kebab-case um.',
    keywords: [
      'gross kleinschreibung konverter',
      'titel schreibweise konverter',
      'grossbuchstaben in kleinbuchstaben',
      'camelcase konverter',
      'snake case generator',
      'grossbuchstaben konverter',
      'kleinbuchstaben konverter',
      'satzschreibweise konverter',
      'pascalcase konverter',
    ],
    seo: {
      title: 'Groß-/Kleinschreibung: Text umwandeln | UtilityFlow',
      description:
        'Wandeln Sie Text zwischen Großbuchstaben, Kleinbuchstaben, Titel-Schreibweise, Satzschreibweise, camelCase, snake_case und kebab-case um – mit einem Klick.',
      primaryKeyword: 'groß kleinschreibung umwandeln',
      secondaryKeywords: ['titel schreibweise konverter', 'satzschreibweise tool', 'text schreibweise ändern', 'grossbuchstaben in kleinbuchstaben'],
      longTailKeywords: ['text in grossbuchstaben in satzschreibweise umwandeln', 'zeichenkette in camelcase und snake_case umwandeln', 'titel grossschreibung tool online', 'grossbuchstaben in kleinbuchstaben online kostenlos ändern'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Korrigieren Sie Text, der versehentlich mit aktivierter Feststelltaste getippt wurde, standardisieren Sie Artikeltitel in Titel-Schreibweise oder formatieren Sie Variablennamen in camelCase, PascalCase, snake_case oder kebab-case mit einem einzigen Klick.',
  },
  'remove-duplicate-lines': {
    slug: 'doppelte-zeilen-entfernen',
    name: 'Doppelte Zeilen entfernen',
    shortDescription:
      'Entfernen Sie doppelte Einträge aus Listen und Protokollen – mit Optionen für Groß-/Kleinschreibung, Leerzeichen-Trimmen und alphabetisches Sortieren.',
    keywords: [
      'doppelte zeilen entfernen',
      'liste online deduplizieren',
      'eindeutige zeilen filter',
      'wiederholte zeilen entfernen',
      'duplikate aus liste entfernen',
      'e-mail liste deduplizieren',
      'eindeutige zeilen online',
      'wiederholte einträge entfernen',
      'doppelte einträge bereinigen',
    ],
    seo: {
      title: 'Doppelte Zeilen entfernen & deduplizieren | UtilityFlow',
      description:
        'Entfernen Sie wiederholte Zeilen aus Listen, E-Mails, URLs oder Protokollen sofort – mit optionalem Leerzeichen-Trimmen und Sortieren, ohne Anmeldung.',
      primaryKeyword: 'doppelte zeilen entfernen',
      secondaryKeywords: ['doppelte zeilen löschen', 'textliste deduplizieren', 'eindeutige zeilen tool', 'doppelte einträge entfernen'],
      longTailKeywords: ['doppelte zeilen entfernen und originalreihenfolge behalten', 'e-mail liste ohne gross kleinschreibung deduplizieren', 'wiederholte zeilen in text online bereinigen', 'duplikate aus e-mail liste online kostenlos entfernen'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Bereinigen Sie ungeordnete Listen, exportierte Schlüsselwörter, E-Mail-Adressen oder Serverprotokolle, indem Sie doppelte Einträge entfernen und dabei Leerzeichen-Trimmen, Groß-/Kleinschreibung und Ausgabereihenfolge steuern.',
  },
  'text-diff-checker': {
    slug: 'text-vergleich',
    name: 'Textvergleich',
    shortDescription:
      'Vergleichen Sie zwei Textblöcke Zeile für Zeile und erkennen Sie Hinzufügungen, Löschungen und unveränderte Zeilen.',
    keywords: [
      'textvergleich',
      'zwei texte vergleichen',
      'diff tool online',
      'textvergleich tool',
      'zwei textdateien vergleichen',
      'unterschied tool online',
      'unterschiede zwischen zwei texten finden',
      'text vergleich tool',
      'zeilenweiser diff',
    ],
    seo: {
      title: 'Textvergleich: Zwei Texte vergleichen | UtilityFlow',
      description:
        'Vergleichen Sie zwei Versionen von Text, Code oder Konfiguration nebeneinander – mit klaren Markierungen für hinzugefügte und gelöschte Zeilen im Browser.',
      primaryKeyword: 'textvergleich',
      secondaryKeywords: ['text online vergleichen', 'diff prüfer', 'textunterschied tool', 'diff tool online'],
      longTailKeywords: ['zwei textdateien zeile für zeile online vergleichen', 'diff vergleich ohne leerzeichen und grossschreibung', 'textvergleich tool clientseitig', 'zwei versionen eines dokuments online kostenlos vergleichen'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Erkennen Sie jede Einfügung, Löschung und Änderung zwischen zwei Versionen eines Artikels, einer Vertragsklausel oder eines Konfigurationsausschnitts mit einem zeilenweisen Diff auf Basis der längsten gemeinsamen Teilfolge.',
  },
  'whitespace-remover': {
    slug: 'leerzeichen-entferner',
    name: 'Leerzeichen- & Zeilenumbruch-Entferner',
    shortDescription:
      'Entfernen Sie überflüssige Leerzeichen, Tabs, Leerzeilen und unerwünschte Zeilenumbrüche aus Text, der aus einem PDF oder dem Web kopiert wurde.',
    keywords: [
      'leerzeichen entferner',
      'überflüssige leerzeichen entfernen',
      'zeilenumbruch entferner',
      'leerzeilen entfernen',
      'pdf text bereinigen',
      'nachgestellte leerzeichen entfernen',
      'pdf zeilenumbrüche korrigieren',
      'mehrere leerzeichen zusammenfassen',
      'text online bereinigen',
    ],
    seo: {
      title: 'Leerzeichen entfernen: Text bereinigen | UtilityFlow',
      description:
        'Entfernen Sie überflüssige Leerzeichen, Tabs, Leerzeilen und defekte PDF-Zeilenumbrüche in Ihrem Browser – schnell, kostenlos und privat, ohne Anmeldung.',
      primaryKeyword: 'leerzeichen entfernen',
      secondaryKeywords: ['überflüssige leerzeichen entfernen', 'zeilenumbrüche entfernen', 'text leerzeichen bereinigen', 'leerzeilen entfernen'],
      longTailKeywords: ['überflüssige leerzeichen und leerzeilen online entfernen', 'zeilenumbrüche beim kopieren aus pdf korrigieren', 'tabs und mehrere leerzeichen in ein leerzeichen umwandeln', 'nachgestellte leerzeichen aus kopiertem text entfernen'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Bereinigen Sie unordentlichen Text, der aus PDFs, E-Mails, Tabellen oder Webseiten kopiert wurde, indem Sie wiederholte Leerzeichen zusammenfassen, Tabs umwandeln, Zeilenränder trimmen und Zeilenumbrüche normalisieren.',
  },
  'sort-lines': {
    slug: 'zeilen-sortieren',
    name: 'Zeilen alphabetisch sortieren',
    shortDescription:
      'Sortieren Sie Listen von A bis Z, von Z bis A, natürlich (1, 2, 10), nach Zeichenlänge, umgekehrt oder zufällig gemischt.',
    keywords: [
      'zeilen alphabetisch sortieren',
      'liste alphabetisch ordnen online',
      'natürlich sortieren tool',
      'text nach länge sortieren',
      'liste a bis z sortieren',
      'alphabetische reihenfolge tool',
      'zeilen mischen online',
      'zeilen z bis a sortieren',
      'zeilenreihenfolge umkehren',
    ],
    seo: {
      title: 'Zeilen sortieren: A–Z & natürlich sortieren | UtilityFlow',
      description:
        'Sortieren Sie Zeilen von A bis Z, von Z bis A, in natürlicher Zahlenreihenfolge, nach Länge, umgekehrt oder gemischt – mit optionaler Deduplizierung im Browser.',
      primaryKeyword: 'zeilen sortieren',
      secondaryKeywords: ['liste alphabetisch ordnen', 'textzeilen sortierer', 'natürlich sortieren online', 'zeilen a bis z sortieren'],
      longTailKeywords: ['liste alphabetisch sortieren mit zahlen in natürlicher reihenfolge', 'zeilen nach länge von kurz nach lang sortieren', 'alphabetisch ordnen und doppelte zeilen entfernen', 'zeilenreihenfolge online umkehren'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Ordnen Sie Listen, Bibliografien, Inventar-SKUs oder Code-Imports alphabetisch, numerisch mit natürlicher Sortierung, nach Zeichenlänge oder in umgekehrter Reihenfolge.',
  },
  'find-and-replace': {
    slug: 'suchen-und-ersetzen',
    name: 'Suchen und Ersetzen von Text',
    shortDescription:
      'Suchen und ersetzen Sie Zeichenketten in Text mit Groß-/Kleinschreibung, Ganzwort-Abgleich und Unterstützung für reguläre Ausdrücke.',
    keywords: [
      'suchen und ersetzen text',
      'text ersetzen massenhaft',
      'regex suchen und ersetzen',
      'suchen und ersetzen online',
      'text online ersetzen',
      'wörter suchen ersetzen',
      'regex ersetzen online',
      'alle vorkommen ersetzen',
      'text ersetzen tool',
    ],
    seo: {
      title: 'Suchen und Ersetzen: Text & Regex ersetzen | UtilityFlow',
      description:
        'Suchen und ersetzen Sie Text in Ihrem Browser mit Live-Trefferzähler, Groß-/Kleinschreibung, Ganzwort-Abgleich und JavaScript-RegExp – ohne Anmeldung.',
      primaryKeyword: 'suchen und ersetzen text',
      secondaryKeywords: ['suchen und ersetzen online', 'regex ersetzen tool', 'text massenhaft ersetzen', 'text online ersetzen'],
      longTailKeywords: ['nur ganze wörter suchen und ersetzen online', 'regex suchen und ersetzen mit capture gruppen', 'textzeichenketten massenhaft im browser ersetzen', 'alle vorkommen in text online ersetzen'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Führen Sie schnelle Massen-Suchen-und-Ersetzen-Bearbeitungen in Fließtext, CSV-Ausschnitten oder Codeblöcken durch – mit exakter Textübereinstimmung, Ganzwort-Grenzen oder Capture-Gruppen regulärer Ausdrücke.',
  },
  'text-reverser': {
    slug: 'text-umkehren',
    name: 'Text-Umkehrer',
    shortDescription:
      'Kehren Sie ganze Textzeichenketten um, drehen Sie die Wortreihenfolge um, spiegeln Sie Buchstaben pro Wort oder invertieren Sie Zeilenfolgen.',
    keywords: [
      'text umkehrer',
      'zeichenkette online umkehren',
      'wörter umkehren',
      'zeilen umkehren',
      'textzeichen umkehren',
      'text spiegeln online',
      'spiegeltext generator',
      'satzreihenfolge umkehren',
      'rückwärts text generator',
    ],
    seo: {
      title: 'Text umkehren: Wörter & Zeilen spiegeln | UtilityFlow',
      description:
        'Zeichen umkehren, Wortreihenfolge drehen, jedes Wort spiegeln oder Zeilenreihenfolge invertieren – sofort, Unicode-sicher, kostenlos und privat im Browser.',
      primaryKeyword: 'text umkehren',
      secondaryKeywords: ['text online umkehren', 'wortreihenfolge umkehren', 'zeilen invertieren', 'text spiegeln online'],
      longTailKeywords: ['jedes wort in einem satz online umkehren', 'reihenfolge der zeilen in textdatei umkehren', 'unicode sicherer string umkehrer', 'textzeichen online umkehren'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Drehen Sie Zeichensequenzen um, kehren Sie die Wortreihenfolge pro Zeile um, spiegeln Sie Buchstaben innerhalb einzelner Wörter oder invertieren Sie mehrzeilige Listen von unten nach oben – mit Unicode-sicherer Verarbeitung.',
  },
  'lorem-ipsum-generator': {
    slug: 'platzhaltertext-generator',
    name: 'Lorem-Ipsum-Generator',
    shortDescription:
      'Erstellen Sie benutzerdefinierte Platzhalter-Absätze, -Sätze oder -Wortzahlen mit optionalen HTML-<p>-Tags.',
    keywords: [
      'lorem ipsum generator',
      'platzhaltertext generator',
      'blindtext',
      'html lorem ipsum',
      'lorem ipsum text',
      'blindtext generator',
      'platzhalter absätze',
      'lorem ipsum wörter',
      'fülltext generator',
    ],
    seo: {
      title: 'Lorem-Ipsum-Generator: Platzhaltertext | UtilityFlow',
      description:
        'Erstellen Sie Lorem-Ipsum-Platzhaltertext nach Absätzen, Sätzen oder exakter Wortzahl, mit optionalen HTML-Absatz-Tags für Mockups und Layouts – ohne Anmeldung.',
      primaryKeyword: 'lorem ipsum generator',
      secondaryKeywords: ['platzhaltertext', 'blindtext generator', 'lorem ipsum absätze', 'lorem ipsum blindtext'],
      longTailKeywords: ['lorem ipsum nach wortzahl erstellen', 'lorem ipsum generator mit html p tags', 'sauberer platzhaltertext für ui mockups', 'lorem ipsum generator für website mockup'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Erstellen Sie sauberen Platzhaltertext, der exakt auf Absatz-, Satz- oder Wortzahlen zugeschnitten ist, für Wireframes, Typografie-Tests und Layout-Prototypen – mit optionalen HTML-Absatz-Tags.',
  },
  'readability-checker': {
    slug: 'lesbarkeit-pruefen',
    name: 'Lesbarkeitsprüfung',
    shortDescription:
      'Berechnen Sie Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog und SMOG-Lesbarkeitswerte.',
    keywords: [
      'lesbarkeit prüfen',
      'flesch reading ease',
      'flesch kincaid grade level',
      'gunning fog rechner',
      'smog lesbarkeitsindex',
      'leseniveau prüfen',
      'lesbarkeitswert prüfen',
      'grade level lesbarkeit',
      'text lesbarkeit online prüfen',
    ],
    seo: {
      title: 'Lesbarkeitsprüfung: Flesch-Kincaid-Score | UtilityFlow',
      description:
        'Prüfen Sie Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog und SMOG mit unserem Lesbarkeits-Tool – kostenlos, privat, in Ihrem Browser online.',
      primaryKeyword: 'lesbarkeitsprüfung',
      secondaryKeywords: ['flesch reading ease rechner', 'grade level prüfer', 'leseniveau tool', 'gunning fog index rechner'],
      longTailKeywords: ['flesch kincaid grade level online prüfen', 'gunning fog und smog lesbarkeitsindex berechnen', 'artikel lesbarkeit im browser verbessern', 'was ist ein guter flesch reading ease wert'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Bewerten Sie, wie leicht Ihr Text zu verstehen ist, mit vier etablierten Lesbarkeitsformeln – Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog und SMOG – sowie der Erkennung komplexer Wörter.',
  },
  'word-frequency-counter': {
    slug: 'worthaeufigkeit-zaehler',
    name: 'Worthäufigkeits- & Keyword-Dichte-Zähler',
    shortDescription:
      'Analysieren Sie die Häufigkeit von 1-Wort-, 2-Wort- und 3-Wort-Phrasen und Dichteprozente mit CSV-Export.',
    keywords: [
      'worthäufigkeit zähler',
      'keyword dichte prüfer',
      'ngram zähler',
      'wortwiederholung analysator',
      'phrasen häufigkeit analysator',
      'keyword dichte rechner',
      'wiederholte wörter online zählen',
      'wortvorkommen zähler',
      'text häufigkeitsanalyse',
    ],
    seo: {
      title: 'Worthäufigkeit: Keyword-Dichte prüfen | UtilityFlow',
      description:
        'Analysieren Sie Worthäufigkeit und Keyword-Dichte für 1-, 2- und 3-Wort-Phrasen mit Prozenten, Stoppwort-Filter und CSV-Export – kostenlos und privat.',
      primaryKeyword: 'worthäufigkeit prüfen',
      secondaryKeywords: ['keyword dichte prüfer', 'phrasen häufigkeit analysator', 'wortvorkommen tool', 'ngram häufigkeit zähler'],
      longTailKeywords: ['worthäufigkeit und dichte prozent online zählen', '2 wort und 3 wort phrasen in text analysieren', 'worthäufigkeit tabelle als csv exportieren', 'keyword stuffing in artikelentwurf prüfen'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Prüfen Sie Inhaltsentwürfe auf Keyword-Balance, überstrapazierte Formulierungen und Mehrwort-N-Gramm-Muster mit sofortigen Häufigkeitstabellen, Stoppwort-Filterung und herunterladbaren CSV-Berichten.',
  },
  'text-to-slug': {
    slug: 'text-zu-slug',
    name: 'Text-zu-Slug-Konverter',
    shortDescription:
      'Wandeln Sie Titel und Überschriften in saubere, SEO-freundliche URL-Slugs um – mit Umlaut-Transliteration und Stapelmodus.',
    keywords: [
      'text zu slug',
      'url slug generator',
      'slugify online',
      'seo url formatter',
      'slug konverter',
      'url slug erstellen',
      'titel zu slug konverter',
      'sauberer url slug maker',
      'stapel slug generator',
    ],
    seo: {
      title: 'Text-zu-Slug: SEO-freundliche URLs erstellen | UtilityFlow',
      description:
        'Wandeln Sie Titel und Überschriften in SEO-freundliche URL-Slugs um – mit Umlaut-Transliteration, Bindestrich- oder Unterstrich-Trennzeichen und Stapelmodus.',
      primaryKeyword: 'text zu slug',
      secondaryKeywords: ['url slug generator', 'slugify string', 'sauberer url generator', 'titel zu slug tool'],
      longTailKeywords: ['artikeltitel in seo freundlichen url slug umwandeln', 'mehrere überschriften stapelweise in slugs umwandeln', 'slugify umlaute in ascii online', 'bindestrich oder unterstrich slug trennzeichen'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Verwandeln Sie Blogtitel, Produktnamen und mehrzeilige Inhaltskalender in saubere, URL-sichere ASCII-Slugs mit automatischer Umlaut-Transliteration, Trennzeichen-Steuerung und optionaler Stoppwort-Entfernung.',
  },
  'markdown-previewer': {
    slug: 'markdown-vorschau',
    name: 'Markdown-Vorschau & HTML-Export',
    shortDescription:
      'Schreiben Sie Markdown in einem Live-Split-Editor, prüfen Sie die gerenderte Formatierung sicher und kopieren oder exportieren Sie sauberes HTML.',
    keywords: [
      'markdown vorschau',
      'markdown zu html',
      'online markdown editor',
      'live markdown viewer',
      'markdown editor online',
      'markdown online rendern',
      'markdown zu html konverter',
      'readme markdown vorschau',
      'markdown html exporter',
    ],
    seo: {
      title: 'Markdown-Vorschau: Live rendern & HTML | UtilityFlow',
      description:
        'Schreiben Sie Markdown und sehen Sie es live rendern, prüfen Sie den kompilierten HTML-Quellcode und kopieren oder laden Sie ein HTML-Dokument herunter.',
      primaryKeyword: 'markdown vorschau',
      secondaryKeywords: ['markdown zu html konverter', 'online markdown editor', 'markdown viewer', 'live markdown editor'],
      longTailKeywords: ['live markdown vorschau mit html export', 'markdown readme zu html online umwandeln', 'browser markdown editor ohne upload', 'github readme vor commit in vorschau ansehen'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Verfassen Sie README-Dateien, Dokumentation und formatierte Notizen in einem responsiven Markdown-Editor mit Live-Vorschau, sicherem HTML-Escaping, Roh-HTML-Ansicht und HTML-Export per Klick.',
  },
  'line-prefix-suffix': {
    slug: 'zeilen-praefix-suffix',
    name: 'Zeilennummern & Präfix/Suffix hinzufügen',
    shortDescription:
      'Fügen Sie jeder Zeile Zeilennummern, eigene Präfixe und Suffixe hinzu – für Listen, SQL-Klauseln und Code.',
    keywords: [
      'präfix und suffix zu zeilen hinzufügen',
      'zeilennummern zu text hinzufügen',
      'zeilen in anführungszeichen setzen',
      'stapel zeilen formatierer',
      'text vor jede zeile setzen',
      'text an zeilen anhängen',
      'zeilennummer generator',
      'sql in klausel formatierer',
      'komma an jede zeile anhängen',
    ],
    seo: {
      title: 'Zeilennummern & Präfix/Suffix hinzufügen | UtilityFlow',
      description:
        'Fügen Sie jeder Textzeile Zeilennummern, eigene Präfixe und Suffixe hinzu – für Listen, SQL-Abfragen und Code-Arrays, kostenlos und privat im Browser.',
      primaryKeyword: 'präfix suffix hinzufügen',
      secondaryKeywords: ['zeilennummern online hinzufügen', 'zeilen präfix suffix tool', 'zeilen in anführungszeichen setzen', 'stapel zeilen formatierer'],
      longTailKeywords: ['jede zeile in einfache anführungszeichen und komma für sql setzen', 'nummerierte liste präfix zu textzeilen hinzufügen', 'präfix und suffix stapelweise an jede zeile anhängen', 'zeilennummern ab null hinzufügen'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Stellen Sie fortlaufende Zeilennummern, Aufzählungszeichen oder öffnende Anführungszeichen voran und hängen Sie Kommas, Semikolons oder schließende Tags an jede Zeile einer Liste an – in Sekundenschnelle.',
  },
};
