import type { ToolLocaleOverride } from '../../types';

/**
 * German overrides — Batch 2: Developer tools (15 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are unique, lowercase, hyphenated, and do not collide with
 * English slugs or reserved paths.
 */
export const DE_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'json-formatter': {
    slug: 'json-formatierer',
    name: 'JSON-Formatierer & Validator',
    shortDescription:
      'Formatieren, minimieren, sortieren Sie Schlüssel und validieren Sie JSON-Syntax mit präziser Fehlerangabe nach Zeile und Spalte.',
    keywords: [
      'json formatierer',
      'json validator',
      'json beautifier',
      'json minifier',
      'json pretty print',
      'json drucker',
      'json online formatieren',
      'json syntax prüfer',
      'json lint',
    ],
    seo: {
      title: 'JSON-Formatierer & Validator: JSON drucken | UtilityFlow',
      description:
        'Formatieren, validieren, minimieren und sortieren Sie JSON-Schlüssel sofort in Ihrem Browser – mit Syntaxfehlern nach Zeile und Spalte zum schnellen Debuggen.',
      primaryKeyword: 'json formatierer',
      secondaryKeywords: ['json validator', 'json beautifier', 'json minifier', 'json pretty print'],
      longTailKeywords: ['json online kostenlos validieren und drucken', 'json schlüssel alphabetisch im browser sortieren', 'json payload ohne server upload minimieren', 'verschachteltes json mit einrückung online formatieren'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Validieren Sie fehlerhaftes JSON mit Rückmeldung nach Zeile und Spalte, formatieren Sie verschachtelte Strukturen mit 2-Leerzeichen-, 4-Leerzeichen- oder Tab-Einrückung, sortieren Sie Schlüssel alphabetisch oder minimieren Sie für den Produktionstransport.',
  },
  'base64-encoder-decoder': {
    slug: 'base64-kodierer-dekodierer',
    name: 'Base64-Kodierer / Dekodierer',
    shortDescription:
      'Kodieren Sie Text in Standard-Base64 oder URL-sicheres Base64 und dekodieren Sie Base64-Zeichenketten sicher als UTF-8 im Browser-Arbeitsspeicher.',
    keywords: [
      'base64 kodierer',
      'base64 dekodierer',
      'base64 utf-8',
      'base64 url sicher',
      'base64 online kodieren',
      'base64 online dekodieren',
      'text in base64 kodieren',
      'base64 in text dekodieren',
      'base64 konverter',
    ],
    seo: {
      title: 'Base64-Kodierer & Dekodierer: UTF-8 & URL | UtilityFlow',
      description:
        'Kodieren Sie UTF-8-Text in Base64 oder dekodieren Sie Base64 in lesbaren Text – mit URL-sicheren Optionen, lokal ohne Upload, kostenlos in Ihrem Browser.',
      primaryKeyword: 'base64 kodierer dekodierer',
      secondaryKeywords: ['base64 online dekodieren', 'base64 utf-8 kodieren', 'base64 url sicher', 'base64 zu text'],
      longTailKeywords: ['utf-8 emojis in base64 online kodieren', 'url sicheres base64 ohne padding dekodieren', 'base64 konverter clientseitig', 'base64 zeichenkette mit emojis online dekodieren'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Wandeln Sie UTF-8-Zeichenketten – einschließlich Umlauten und Emojis – nach RFC 4648 in Standard-Base64 oder URL-sicheres Base64 um oder dekodieren Sie Base64-Zeichenketten mit sofortiger Validierung in Klartext.',
  },
  'url-encoder-decoder': {
    slug: 'url-kodierer-dekodierer',
    name: 'URL-Kodierer / Dekodierer',
    shortDescription:
      'Kodieren Sie Abfragewerte oder vollständige URLs prozentkodiert und prüfen Sie Host, Pfad und analysierte Abfrageparameter.',
    keywords: [
      'url kodierer',
      'url dekodierer',
      'prozentkodierung',
      'url parser',
      'url online kodieren',
      'url online dekodieren',
      'url kodierung tool',
      'encodeuricomponent',
      'abfragezeichenkette kodierer',
    ],
    seo: {
      title: 'URL-Kodierer & Dekodierer: Prozentkodierung | UtilityFlow',
      description:
        'Kodieren oder dekodieren Sie URLs mit den Modi encodeURIComponent und encodeURI und prüfen Sie Protokoll, Host, Pfad und Abfrageparameter online kostenlos.',
      primaryKeyword: 'url kodierer dekodierer',
      secondaryKeywords: ['prozentkodierung online', 'url dekodieren tool', 'abfragezeichenkette parser', 'encodeuricomponent online'],
      longTailKeywords: ['unterschied zwischen encodeuri und encodeuricomponent', 'url abfrageparameter tabelle online dekodieren', 'sonderzeichen in urls prozentkodieren', 'url abfragewert ohne kaufmännisches und kodieren'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Kodieren Sie Abfrageparameterwerte oder vollständige URLs sicher, dekodieren Sie prozentkodierte Zeichenketten (%20, %3A, +) und prüfen Sie eine Live-Aufschlüsselung jedes Abfrageparameters in einer Tabelle.',
  },
  'uuid-generator': {
    slug: 'uuid-erstellen',
    name: 'UUID-Generator (v4 und v7)',
    shortDescription:
      'Erzeugen Sie kryptografisch zufällige UUID-v4- und zeitlich geordnete UUID-v7-IDs nach RFC 9562, im Stapel.',
    keywords: [
      'uuid generator',
      'guid generator',
      'uuid v4',
      'uuid v7 generator',
      'uuid v4 online generator',
      'uuid online erzeugen',
      'zufälliger uuid generator',
      'uuid stapel generator',
      'uuid generator kostenlos',
    ],
    seo: {
      title: 'UUID-Generator: v4 & v7 im Stapel erstellen | UtilityFlow',
      description:
        'Erzeugen Sie bis zu 100 zufällige UUID-v4- oder zeitlich geordnete UUID-v7-IDs (RFC 9562), mit optionalen Großbuchstaben und geschweiften Klammern, im Browser.',
      primaryKeyword: 'uuid generator',
      secondaryKeywords: ['guid generator online', 'uuid v4 generator', 'uuid v7 generator', 'uuid stapel generator'],
      longTailKeywords: ['uuid v4 und v7 stapelweise online erzeugen', 'uuid v7 zeitlich geordnet rfc 9562 generator', 'uuid ohne bindestriche grossbuchstaben generator', '100 uuid auf einmal online kostenlos erzeugen'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Erstellen Sie einzelne oder mehrere Stapel kryptografisch zufälliger UUID-v4- und zeitstempelbasierter, sortierbarer UUID-v7-IDs nach RFC 9562 direkt über die Web-Crypto-APIs, mit Formatierungs-Schaltern.',
  },
  'regex-tester': {
    slug: 'regex-testen',
    name: 'Regex-Tester',
    shortDescription:
      'Testen Sie JavaScript-reguläre Ausdrücke mit Live-Treffer-Hervorhebung, Capture-Gruppen, Flags und Ersetzungsausgabe.',
    keywords: [
      'regex tester',
      'regulärer ausdruck tester',
      'regex javascript',
      'regex treffer highlighter',
      'regex online tester',
      'regex online testen',
      'regex debugger',
      'regex treffer tester',
      'javascript regex tester',
    ],
    seo: {
      title: 'Regex-Tester: JS-Treffer live hervorheben | UtilityFlow',
      description:
        'Testen Sie reguläre Ausdrücke live mit den Flags g/i/m/s, Treffer-Hervorhebung, Capture-Gruppen und Ersetzungsvorschau – kostenlos, ohne Anmeldung, im Browser.',
      primaryKeyword: 'regex tester',
      secondaryKeywords: ['regulärer ausdruck tester', 'regex debugger js', 'regex capture gruppen', 'regex ersetzen tester'],
      longTailKeywords: ['regex javascript capture gruppen online testen', 'regulärer ausdruck treffer highlighter live', 'regex ersetzen vorschau mit capture gruppe $1', 'javascript regex mit live hervorhebung online debuggen'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Debuggen Sie JavaScript-reguläre Ausdrücke interaktiv mit live hervorgehobenen Treffern, Treffer-Indexpositionen, Prüfung nummerierter Capture-Gruppen, Flag-Schaltern und Ersetzungsvorschauen.',
  },
  'jwt-decoder': {
    slug: 'jwt-dekodierer',
    name: 'JWT-Dekodierer',
    shortDescription:
      'Dekodieren Sie JSON-Web-Token-Header, Payload-Claims und Ablauf-Zeitstempel sicher in Ihrem Browser.',
    keywords: [
      'jwt dekodierer',
      'json web token dekodieren',
      'jwt inspector',
      'jwt exp zeitstempel',
      'jwt token dekodierer',
      'jwt payload dekodieren',
      'jwt ablauf prüfer',
      'jwt claims viewer',
      'jwt ablauf prüfen',
    ],
    seo: {
      title: 'JWT-Dekodierer: Token & Ablauf prüfen | UtilityFlow',
      description:
        'Dekodieren Sie JWT-Header und Payload-Claims in Ihrem Browser und prüfen Sie iat-, nbf- und exp-Zeitstempel als klare UTC-Daten. Kostenlos und privat.',
      primaryKeyword: 'jwt dekodierer',
      secondaryKeywords: ['jwt online dekodieren', 'jwt payload viewer', 'json web token inspector', 'jwt ablauf prüfer'],
      longTailKeywords: ['jwt token lokal ohne server upload dekodieren', 'jwt exp ablauf zeitstempel online prüfen', 'base64url jwt header und claims prüfen', 'jwt payload claims im browser lesen'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Prüfen Sie JSON Web Tokens (JWT) sicher im lokalen Browser-Arbeitsspeicher – sehen Sie formatierte Header- und Payload-JSON-Objekte und prüfen Sie den menschenlesbaren Ablaufstatus von `iat`, `nbf` und `exp`.',
  },
  'hash-generator': {
    slug: 'hash-erstellen',
    name: 'Hash-Generator (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Berechnen Sie SHA-1-, SHA-256-, SHA-384- und SHA-512-Hashes für Text oder lokale Dateien über Web Crypto.',
    keywords: [
      'hash generator',
      'sha256 generator',
      'sha512 hash',
      'datei prüfsumme sha256',
      'sha1 hash generator',
      'sha384 hash online',
      'prüfsumme rechner',
      'datei prüfsumme verifizieren',
      'sicherer hash generator online',
    ],
    seo: {
      title: 'Hash-Generator: SHA-1, SHA-256 & SHA-512 | UtilityFlow',
      description:
        'Erzeugen Sie SHA-1-, SHA-256-, SHA-384- und SHA-512-Digests als Hex oder Base64 für Text und lokale Dateien direkt in Ihrem Browser. Kostenlos und privat.',
      primaryKeyword: 'hash generator',
      secondaryKeywords: ['sha256 hash online', 'datei prüfsumme verifizierer', 'sha512 generator', 'prüfsumme rechner'],
      longTailKeywords: ['sha256 prüfsumme lokaler datei im browser berechnen', 'sha256 hash als hex und base64 erzeugen', 'web crypto api hash generator online', 'heruntergeladene datei sha256 prüfsumme verifizieren'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Berechnen Sie SHA-1-, SHA-256-, SHA-384- und SHA-512-Digests gleichzeitig mit der nativen Web-Crypto-API (`crypto.subtle.digest`) des Browsers – für UTF-8-Text und lokale Datei-Prüfsummen.',
  },
  'html-entity-encoder': {
    slug: 'html-entities-kodierer',
    name: 'HTML-Entity-Kodierer & Dekodierer',
    shortDescription:
      'Escapen Sie reservierte HTML-Zeichen (<, >, &, Anführungszeichen) und Nicht-ASCII-Symbole oder dekodieren Sie HTML-Entities sauber.',
    keywords: [
      'html entity kodierer',
      'html dekodierer',
      'html online escapen',
      'html entities dekodieren',
      'html zeichen kodieren',
      'html escape tool',
      'in html entities umwandeln',
      'html entities online dekodieren',
      'html sonderzeichen escapen',
    ],
    seo: {
      title: 'HTML-Entities: Zeichen escapen & dekodieren | UtilityFlow',
      description:
        'Kodieren Sie reservierte HTML-Zeichen und Nicht-ASCII-Symbole als Entities oder dekodieren Sie benannte und numerische Entities zurück in Klartext – gratis.',
      primaryKeyword: 'html entities kodieren',
      secondaryKeywords: ['html escape tool', 'html entity dekodierer', 'html entities dekodieren', 'html zeichen kodieren'],
      longTailKeywords: ['html tags für code snippets online escapen', 'benannte und numerische html entities dekodieren', 'sonderzeichen in html entities umwandeln', 'html anführungszeichen und kaufmännisches und escapen'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Escapen Sie `<`, `>`, `&`, Anführungszeichen und internationale Unicode-Symbole sicher in HTML-Entities, um Code-Ausschnitte in Webseiten einzubetten, oder dekodieren Sie HTML-escapete Zeichenketten zurück in lesbaren Text.',
  },
  'json-csv-converter': {
    slug: 'json-csv-konverter',
    name: 'JSON-zu-CSV- / CSV-zu-JSON-Konverter',
    shortDescription:
      'Wandeln Sie JSON-Arrays in RFC-4180-CSV-Tabellen um und parsen Sie zitierte CSV-Dateien zurück in sauberes JSON.',
    keywords: [
      'json zu csv',
      'csv zu json',
      'json csv konverter',
      'json array zu csv umwandeln',
      'json zu csv exportieren',
      'json zu csv online kostenlos',
      'csv zu json konverter',
      'json zu tsv konverter',
      'csv zu json array umwandeln',
    ],
    seo: {
      title: 'JSON-zu-CSV-Konverter: JSON & CSV umwandeln | UtilityFlow',
      description:
        'Wandeln Sie JSON-Arrays in saubere CSV-Tabellen mit Abflachung verschachtelter Objekte um oder parsen Sie CSV- und TSV-Dateien zurück in strukturiertes JSON.',
      primaryKeyword: 'json zu csv konverter',
      secondaryKeywords: ['csv zu json konverter', 'json als csv exportieren', 'tsv zu json', 'json zu csv online kostenlos'],
      longTailKeywords: ['verschachtelte json objekte in csv spalten online umwandeln', 'zitierte csv mit kommas in json array parsen', 'json zu csv downloader clientseitig', 'json array in csv tabelle kostenlos umwandeln'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Verwandeln Sie API-JSON-Arrays in saubere CSV-Tabellen – mit automatischer Abflachung verschachtelter Objektschlüssel – oder parsen Sie CSV-/TSV-Dateien mit zitierten Kommas zurück in formatiertes JSON.',
  },
  'unix-timestamp-converter': {
    slug: 'unix-zeitstempel-konverter',
    name: 'Unix-Zeitstempel-Konverter',
    shortDescription:
      'Wandeln Sie Unix-Epochen-Sekunden oder -Millisekunden in ISO-8601-, UTC- und lokale Daten um – und umgekehrt.',
    keywords: [
      'unix zeitstempel konverter',
      'epoch konverter',
      'epoch zu datum',
      'zeitstempel zu iso 8601',
      'unix zeit konverter',
      'epoch in datum umwandeln',
      'datum zu unix zeitstempel',
      'aktuelle unix zeit',
      'epoch millisekunden konverter',
    ],
    seo: {
      title: 'Unix-Zeitstempel-Konverter: Epoch zu Datum | UtilityFlow',
      description:
        'Wandeln Sie Unix-Epochen-Zeitstempel in Sekunden oder Millisekunden in ISO 8601, UTC, RFC 2822 und Ortszeit um oder ein Datum zurück in Unix-Zeit. Kostenlos.',
      primaryKeyword: 'unix zeitstempel konverter',
      secondaryKeywords: ['epoch konverter', 'unix zeit zu datum', 'datum zu unix zeitstempel', 'epoch millisekunden konverter'],
      longTailKeywords: ['unix epoch millisekunden in iso 8601 datum umwandeln', 'live aktueller unix zeitstempel in sekunden', 'lokales datum und uhrzeit in unix epoch umwandeln', 'unix zeitstempel in utc datum online kostenlos'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Wandeln Sie Unix-Epochen-Ganzzahlen (Sekunden oder Millisekunden) in ISO-8601-, UTC- und Ortszeit-Zeichenketten mit relativen Abständen um oder verwandeln Sie ein beliebiges Kalenderdatum mit Uhrzeit zurück in einen Epochen-Zeitstempel.',
  },
  'sql-formatter': {
    slug: 'sql-formatierer',
    name: 'SQL-Formatierer',
    shortDescription:
      'Formatieren, einrücken und standardisieren Sie SQL-Abfragen mit Groß-/Kleinschreibung der Schlüsselwörter oder minimieren Sie Abfragen auf eine Zeile.',
    keywords: [
      'sql formatierer',
      'sql beautifier',
      'sql abfrage formatieren',
      'sql minifier',
      'sql online formatieren',
      'sql abfrage beautifier',
      'sql pretty print',
      'sql formatierer online',
      'sql abfrage einrücken',
    ],
    seo: {
      title: 'SQL-Formatierer: Abfragen formatieren | UtilityFlow',
      description:
        'Formatieren Sie SQL-Abfragen mit sauberen Klauselumbrüchen, Schlüsselwort-Großschreibung und 2/4-Leerzeichen-Einrückung oder minimieren Sie sie auf eine Zeile.',
      primaryKeyword: 'sql formatierer',
      secondaryKeywords: ['sql beautifier online', 'sql pretty print', 'sql minifier', 'sql abfrage online formatieren'],
      longTailKeywords: ['select join group by sql abfrage online formatieren', 'sql schlüsselwörter sauber in grossbuchstaben umwandeln', 'sql abfrage minimieren und string literale erhalten', 'sql abfrage mit 2 oder 4 leerzeichen online einrücken'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Verwandeln Sie dichte einzeilige SQL-Abfragen in lesbare, strukturierte Anweisungen mit klarer `SELECT`-, `FROM`-, `JOIN`-, `WHERE`-, `GROUP BY`- und `ORDER BY`-Ausrichtung und bewahren Sie dabei Zeichenketten in Anführungszeichen und Kommentare.',
  },
  'css-minifier': {
    slug: 'css-komprimieren',
    name: 'CSS-Minifier & Beautifier',
    shortDescription:
      'Minimieren Sie CSS-Stylesheets, um die Bundle-Größe zu reduzieren, oder verschönern Sie komprimierte CSS-Regeln mit sauberer Einrückung.',
    keywords: [
      'css minifier',
      'css beautifier',
      'css online komprimieren',
      'css formatieren',
      'css kompressor',
      'css online minifizieren',
      'css entminifizieren',
      'css formatierer',
      'css dateigröße reduzieren',
    ],
    seo: {
      title: 'CSS-Minifier & Beautifier: CSS komprimieren | UtilityFlow',
      description:
        'Minimieren Sie CSS, indem Sie Kommentare und überflüssige Leerzeichen entfernen, mit Byte-Ersparnis-Statistiken, oder verschönern Sie minimierte Stylesheets.',
      primaryKeyword: 'css minifier',
      secondaryKeywords: ['css beautifier', 'css komprimieren', 'css formatierer online', 'css online minifizieren'],
      longTailKeywords: ['css minimieren und zitierte strings und media queries erhalten', 'komprimiertes css stylesheet online entminifizieren', 'css komprimierung prozent im browser berechnen', 'css dateigröße vor deployment reduzieren'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Komprimieren Sie CSS-Stylesheets, indem Sie Kommentare, redundante Leerzeichen und nachgestellte Semikolons vor schließenden geschweiften Klammern entfernen – oder erweitern Sie einzeiliges minimiertes CSS zurück in lesbare, eingerückte Blöcke.',
  },
  'js-formatter': {
    slug: 'javascript-formatierer',
    name: 'JavaScript-Minifier & Formatierer',
    shortDescription:
      'Minimieren Sie JavaScript-Ausschnitte, indem Sie Kommentare und überflüssige Leerzeichen entfernen, oder verschönern Sie kompakte Codeblöcke.',
    keywords: [
      'javascript minifier',
      'js formatierer',
      'js beautifier',
      'javascript online komprimieren',
      'javascript formatierer',
      'js minifier online',
      'javascript verschönern',
      'typescript minifier',
      'js code formatierer',
    ],
    seo: {
      title: 'JS-Minifier & Formatierer: Code komprimieren | UtilityFlow',
      description:
        'Minimieren Sie JavaScript und TypeScript, indem Sie Kommentare und überflüssige Leerzeichen entfernen, oder verschönern Sie Code mit 2/4-Leerzeichen-Einrückung.',
      primaryKeyword: 'javascript minifier',
      secondaryKeywords: ['js beautifier', 'javascript online formatieren', 'js kompressor', 'javascript formatierer'],
      longTailKeywords: ['javascript snippet minimieren und strings und template literale erhalten', 'kompakten javascript code mit einrückung entminifizieren', 'clientseitiger js formatierer und minifier', 'javascript code mit 2 oder 4 leerzeichen verschönern'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Komprimieren Sie JavaScript-Ausschnitte für Bookmarklets und Inline-Skripte, indem Sie Kommentare und überflüssigen Abstand entfernen – und dabei String-Literale intakt lassen – oder rücken Sie komprimierten Code sauber neu ein.',
  },
  'cron-expression-parser': {
    slug: 'cron-ausdruck-parser',
    name: 'Cron-Ausdruck-Parser & Zeitplan-Vorschau',
    shortDescription:
      'Übersetzen Sie 5-Felder-Cron-Ausdrücke in klares Deutsch, erkunden Sie Voreinstellungen und sehen Sie die nächsten 8 Laufzeiten in der Vorschau.',
    keywords: [
      'cron ausdruck parser',
      'crontab generator',
      'cron zeitplan tester',
      'nächste cron laufzeiten',
      'crontab parser',
      'cron ausdruck tester',
      'cron zeitplan vorschau',
      'cron in klartext',
      'cron job planer',
    ],
    seo: {
      title: 'Cron-Ausdruck-Parser: Zeitplan im Klartext | UtilityFlow',
      description:
        'Parsen Sie 5-Felder-Cron-Ausdrücke in Klartext-Zeitpläne, prüfen Sie jedes Feld, probieren Sie gängige Voreinstellungen und sehen Sie die nächsten 8 Laufzeiten.',
      primaryKeyword: 'cron ausdruck parser',
      secondaryKeywords: ['crontab guru alternative', 'cron zeitplan vorschau', 'cron builder', 'cron ausdruck tester'],
      longTailKeywords: ['5 felder cron ausdruck in klartext übersetzen', 'nächste 8 cron ausführungszeiten berechnen', 'wochentag und schritt cron ausdrücke online testen', 'cron ausdruck jeden werktag um 9 uhr beispiel'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Dekodieren Sie 5-Felder-Unix-Crontab-Ausdrücke (`Minute Stunde Tag-im-Monat Monat Wochentag`) in klare, menschenlesbare Zusammenfassungen, verifizieren Sie Feldbereiche und prüfen Sie die nächsten 8 geplanten Laufzeitstempel.',
  },
  'color-converter': {
    slug: 'farb-konverter',
    name: 'Farb-Konverter (HEX / RGB / HSL & WCAG-Kontrast)',
    shortDescription:
      'Wandeln Sie Farben zwischen HEX, RGB und HSL um – mit Live-Farbauswahl und WCAG-2.1-AA/AAA-Kontrastprüfung.',
    keywords: [
      'farb konverter',
      'hex zu rgb',
      'rgb zu hsl',
      'wcag kontrast prüfer',
      'hex zu hsl',
      'rgb zu hex',
      'farbauswahl online',
      'hex farb konverter',
      'hsl zu rgb',
    ],
    seo: {
      title: 'Farb-Konverter: HEX, RGB, HSL & Kontrast | UtilityFlow',
      description:
        'Wandeln Sie Farben zwischen HEX, RGB und HSL um und testen Sie dann Vordergrund- und Hintergrund-Kontrastverhältnisse auf WCAG-2.1-AA- und AAA-Konformität.',
      primaryKeyword: 'farb konverter',
      secondaryKeywords: ['hex zu rgb konverter', 'hsl farbauswahl', 'wcag kontrast prüfer', 'rgb zu hex konverter'],
      longTailKeywords: ['hex farbe in rgb und hsl css werte umwandeln', 'wcag 2.1 aa und aaa textkontrast verhältnis prüfen', 'interaktives hex rgb hsl farb tool für entwickler', 'hex in hsl für css variablen umwandeln'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Übersetzen Sie Farben nahtlos zwischen HEX-, RGB- und HSL-CSS-Notationen mit einem Live-Farbmuster und eingebautem WCAG-2.1-Kontrastverhältnis-Prüfer für barrierefreies UI-Design.',
  },
};
