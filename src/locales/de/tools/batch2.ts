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
    instructions: [
      {
        title: 'Rohes JSON einfügen',
        description:
          'Fügen Sie ein beliebiges JSON-Objekt oder -Array in das Feld „Rohes JSON“ ein oder klicken Sie auf „Beispiel laden“, um eine Beispiel-Payload zu prüfen.',
      },
      {
        title: 'Formatierungsmodus wählen',
        description:
          'Wechseln Sie zwischen 2 Leerzeichen, 4 Leerzeichen, Tabulator oder Minimieren und aktivieren Sie optional „Schlüssel von A bis Z sortieren“.',
      },
      {
        title: 'Syntaxfehler mit Zeilen- und Spaltenangabe korrigieren',
        description:
          'Wenn der Validator einen Fehler meldet, lesen Sie die exakte angezeigte Zeile und Spalte, korrigieren Sie das fehlerhafte Komma, Anführungszeichen oder die Klammer in Ihrer Eingabe, und die Statusleiste aktualisiert sich sofort.',
      },
      {
        title: 'Formatierte Ausgabe und Statistiken prüfen',
        description:
          'Bestätigen Sie die Statusleiste „Gültiges JSON“ mit Gesamtzahl der Schlüssel, Verschachtelungstiefe und Bytezahl und durchsuchen Sie die formatierte Ausgabe, um zu prüfen, ob verschachtelte Strukturen korrekt aussehen.',
      },
      {
        title: 'Ergebnis kopieren oder herunterladen',
        description:
          'Klicken Sie auf „Kopieren“, um das formatierte JSON in Ihre Zwischenablage zu legen, oder auf „Herunterladen“, um es als .json-Datei für Ihr Projekt zu speichern.',
      },
      {
        title: 'Tipp: Größen vergleichen und Diffs bereinigen',
        description:
          'Fügen Sie dieselbe Payload nach dem Minimieren erneut ein, um Bytegrößen zu vergleichen, oder aktivieren Sie „Schlüssel von A bis Z sortieren“ vor einem Git-Diff, damit nur echte Änderungen erscheinen.',
      },
    ],
    examples: [
      {
        title: 'Minimierte API-Antwort formatieren',
        input: '{"service":"utilityflow","limits":{"rate":120}}',
        output: '{\n  "service": "utilityflow",\n  "limits": {\n    "rate": 120\n  }\n}',
        explanation:
          'Entfaltet kompakte einzeilige API-Payloads in lesbares, eingerücktes JSON.',
      },
      {
        title: 'Schlüssel vor einem Git-Diff sortieren',
        input: '{"zebra": 1, "apple": 2, "mango": 3}',
        output: '{\n  "apple": 2,\n  "mango": 3,\n  "zebra": 1\n}',
        explanation:
          'Sortiert Schlüssel alphabetisch, damit Git-Diffs nur echte Änderungen zeigen.',
      },
    ],
    benefits: [
      'Meldet Syntaxfehlerpositionen mit Zeilen- und Spaltenkontext',
      'Sortiert Schlüssel in verschachtelten Objekten rekursiv alphabetisch für saubere Diffs',
      'Berechnet Gesamtzahl der Schlüssel, maximale Verschachtelungstiefe und Ausgabegröße in Bytes',
      'Hält private API-Antworten und Token strikt im Browser-Arbeitsspeicher',
    ],
    useCases: [
      'REST- und GraphQL-API-Payloads während der Entwicklung debuggen',
      'package.json- oder Konfigurationsdateien vor einem Git-Diff normalisieren',
      'JSON-Fixtures und statische Datensätze minimieren',
      'Webhook-Bodies validieren, bevor Parser geschrieben werden',
    ],
    faqs: [
      {
        question: 'Verändert das Sortieren von Schlüsseln die Reihenfolge von Array-Elementen?',
        answer:
          'Nein. Das Sortieren von Schlüsseln von A bis Z ordnet nur Schlüssel innerhalb von JSON-Objekten neu, während die genaue Reihenfolge der Array-Elemente erhalten bleibt.',
      },
      {
        question: 'Warum zeigt JSON mit einem nachgestellten Komma einen Syntaxfehler?',
        answer:
          'Strenges JSON nach RFC 8259 erlaubt weder nachgestellte Kommas noch Schlüssel in einfachen Anführungszeichen. Der Validator meldet die exakte Zeile und Spalte, damit Sie sie vor dem Deployment korrigieren können.',
      },
      {
        question: 'Wird meine JSON-Payload irgendwo protokolliert?',
        answer:
          'Niemals. Das Parsen und Formatieren läuft vollständig über JavaScript in Ihrem Browser-Tab.',
      },
      {
        question: 'Ist der JSON-Formatierer kostenlos?',
        answer:
          'Ja, der JSON-Formatierer ist vollständig kostenlos, ohne Anmeldung, ohne Nutzungslimits und ohne Wasserzeichen in der Ausgabe.',
      },
      {
        question: 'Was ist der Unterschied zwischen JSON formatieren und minimieren?',
        answer:
          'Das Formatieren fügt Einrückung und Zeilenumbrüche hinzu, damit JSON leicht lesbar ist, während das Minimieren alle unnötigen Leerzeichen entfernt, damit die Payload für den Transport so klein wie möglich ist.',
      },
      {
        question: 'Kann der JSON-Formatierer große JSON-Dateien verarbeiten?',
        answer:
          'Ja. Da die gesamte Verarbeitung lokal in Ihrem Browser erfolgt, gibt es kein Server-Upload-Limit, auch wenn sehr große Payloads vom Arbeitsspeicher Ihres Browsers abhängen.',
      },
      {
        question: 'Welche Einrückungsoptionen bietet der JSON-Formatierer?',
        answer:
          'Sie können mit 2 Leerzeichen, 4 Leerzeichen oder einem Tabulatorzeichen formatieren, damit die Ausgabe zum Stil Ihrer Codebasis passt.',
      },
      {
        question: 'Unterstützt der JSON-Formatierer JSON-Arrays auf oberster Ebene?',
        answer:
          'Ja. Ein Array auf oberster Ebene ist gültiges JSON, daher können Sie Arrays wie Objekte einfügen und formatieren.',
      },
      {
        question: 'Wie korrigiere ich einen „Unexpected token“-Fehler in meinem JSON?',
        answer:
          'Schauen Sie sich die gemeldete Zeile und Spalte an. Die häufigsten Ursachen sind ein fehlendes Komma, eine nicht geschlossene Klammer oder ein einfaches Anführungszeichen, wo ein doppeltes erforderlich ist.',
      },
      {
        question: 'Kann ich JSON mit Kommentaren oder nachgestellten Kommas formatieren?',
        answer:
          'Nein. Kommentare und nachgestellte Kommas gehören nicht zum strengen JSON, daher entfernen Sie sie zuerst, und der Formatierer akzeptiert die bereinigte Eingabe.',
      },
      {
        question: 'Was bedeutet die Statistik zur Verschachtelungstiefe im JSON-Formatierer?',
        answer:
          'Die Verschachtelungstiefe zählt, wie viele Ebenen tief der am tiefsten verschachtelte Wert in Objekten und Arrays liegt, was hilft, die Komplexität einer Payload einzuschätzen.',
      },
      {
        question: 'Behält der JSON-Formatierer die Reihenfolge der Objektschlüssel?',
        answer:
          'Ja, es sei denn, Sie aktivieren „Schlüssel von A bis Z sortieren“. Standardmäßig behält der Formatierer Ihre ursprüngliche Schlüsselreihenfolge exakt wie eingefügt.',
      },
      {
        question: 'Kann ich Schlüssel auch in verschachtelten JSON-Objekten sortieren?',
        answer:
          'Ja. Die Sortierung erfolgt rekursiv, daher werden Schlüssel innerhalb jedes verschachtelten Objekts alphabetisch neu geordnet, während die Array-Reihenfolge intakt bleibt.',
      },
      {
        question: 'Welches Dateiformat erzeugt der Download des JSON-Formatierers?',
        answer:
          'Der Download speichert Ihr formatiertes oder minimiertes Ergebnis als standardmäßige .json-Textdatei, die Sie in jedem Editor öffnen können.',
      },
      {
        question: 'Funktioniert der JSON-Formatierer offline?',
        answer:
          'Ja. Sobald die Seite geladen ist, laufen Formatierung und Validierung vollständig in Ihrem Browser ohne Netzwerkanfragen.',
      },
      {
        question: 'Warum wird mein gültiges JavaScript-Objekt als JSON abgelehnt?',
        answer:
          'JSON ist strenger als JavaScript: Schlüssel müssen doppelte Anführungszeichen verwenden, Werte dürfen nicht undefined oder Funktionen sein, und nachgestellte Kommas sind nicht erlaubt.',
      },
      {
        question: 'Kann der JSON-Formatierer JSON aus einer API-Antwort validieren?',
        answer:
          'Ja. Fügen Sie den rohen Antwort-Body in die Eingabe ein, und der Validator bestätigt, ob es sich um gültiges JSON handelt, und findet jeden Syntaxfehler.',
      },
      {
        question: 'Wie groß darf das JSON sein, das ich in den JSON-Formatierer einfügen kann?',
        answer:
          'Es gibt kein festes Größenlimit, weil nichts an einen Server gesendet wird. Praktische Grenzen ergeben sich nur aus dem Arbeitsspeicher Ihres Browsers und der Textfeldgröße, die er mühelos verarbeiten kann.',
      },
      {
        question: 'Verändert das Minimieren von JSON seine Bedeutung?',
        answer:
          'Nein. Das Minimieren entfernt nur Leerzeichen, daher bleiben Daten, Schlüssel und Werte exakt gleich, während die Datei kleiner wird.',
      },
      {
        question: 'Wie kopiere ich formatiertes JSON ohne zusätzliche Leerzeichen?',
        answer:
          'Wechseln Sie zuerst in den Minimieren-Modus und klicken Sie dann auf „Kopieren“. Die Zwischenablage enthält dann das kompakte einzeilige JSON ohne zusätzliche Leerzeichen oder Zeilenumbrüche.',
      },
    ],
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
    instructions: [
      {
        title: 'Kodieren oder Dekodieren wählen',
        description:
          'Wählen Sie oben im Arbeitsbereich „In Base64 kodieren“ oder „Base64 dekodieren“.',
      },
      {
        title: 'Text oder Base64-Zeichenkette einfügen',
        description:
          'Geben Sie den UTF-8-Text ein, den Sie kodieren möchten, oder die Base64-Zeichenkette, die Sie dekodieren möchten, in das Eingabefeld.',
      },
      {
        title: 'Base64-Optionen festlegen',
        description:
          'Aktivieren Sie im Kodiermodus optional die URL-sichere Ausgabe (- und _) oder lassen Sie die abschließenden Padding-Zeichen = weg.',
      },
      {
        title: 'Ausgabe und Validierung prüfen',
        description:
          'Prüfen Sie das sofort umgewandelte Ergebnis. Wenn ein Dekodieren fehlschlägt, prüfen Sie fehlendes Padding oder Zeichen außerhalb des Base64-Alphabets.',
      },
      {
        title: 'Kopieren oder tauschen',
        description:
          'Kopieren Sie das Ergebnis in Ihre Zwischenablage oder klicken Sie auf „Tauschen“, um die Richtung umzukehren und Ihre aktuelle Ausgabe zu verwenden.',
      },
      {
        title: 'Tipp: URL-sichere Token behandeln',
        description:
          'Wenn Sie Token aus einer URL einfügen, nutzen Sie den URL-sicheren Modus, damit - und _ korrekt behandelt werden. Denken Sie daran, dass Base64 eine Kodierung und keine Verschlüsselung ist – behandeln Sie es niemals als sichere Speicherung.',
      },
    ],
    examples: [
      {
        title: 'UTF-8-Zeichenkette kodieren',
        input: 'UtilityFlow: UTF-8 ✓',
        output: 'VXRpbGl0eUZsb3c6IFVURi04IOKckw==',
        explanation:
          'Verwendet die UTF-8-Byte-Serialisierung von TextEncoder vor der Base64-Umwandlung.',
      },
      {
        title: 'Base64-Zeichenkette dekodieren',
        input: 'SGVsbG8gV2VsdA==',
        output: 'Hallo Welt',
        explanation:
          'Dekodiert eine Standard-Base64-Zeichenkette in lesbaren UTF-8-Text.',
      },
    ],
    benefits: [
      'UTF-8-sicheres Kodieren/Dekodieren vermeidet Unicode-Abstürze des veralteten btoa/atob',
      'Unterstützt das URL-sichere Alphabet nach RFC 4648 (- und _) und Dekodieren ohne Padding',
      '„Tauschen“ mit einem Klick verschiebt die Ausgabe in die Eingabe und kehrt den Modus um',
      'Lokale Ausführung, sicher für API-Schlüssel und Basic-Auth-Header',
    ],
    useCases: [
      'HTTP-Basic-Authentifizierungsdaten lokal kodieren',
      'In Base64 kodierte JSON-Payloads oder Data-URIs prüfen',
      'URL-sichere Base64-Token für Abfrageparameter vorbereiten',
      'Base64-kodierte E-Mail- oder Webhook-Body-Ausschnitte dekodieren',
    ],
    faqs: [
      {
        question: 'Warum schlägt das Standard-btoa() bei Unicode-Zeichen fehl?',
        answer:
          'Das native btoa() akzeptiert nur Ein-Byte-Latin-1-Codepunkte. Dieses Tool wandelt Text zuerst über TextEncoder in UTF-8-Bytes um, damit alle internationalen Schriften und Emojis sauber kodiert werden.',
      },
      {
        question: 'Kann der Dekodierer URL-sicheres Base64 ohne „=“-Padding verarbeiten?',
        answer:
          'Ja. Der Dekodierer normalisiert „-“ und „_“ automatisch zu „+“ und „/“ und stellt fehlendes „=“-Padding vor dem Dekodieren wieder her.',
      },
      {
        question: 'Ist Base64 eine Verschlüsselung?',
        answer:
          'Nein. Base64 ist ein Kodierungsformat, um Binär- oder Textdaten als ASCII darzustellen, keine kryptografische Verschlüsselung.',
      },
      {
        question: 'Ist der Base64-Kodierer kostenlos?',
        answer:
          'Ja, der Base64-Kodierer ist vollständig kostenlos, ohne Anmeldung und ohne Limit für die Anzahl der Zeichenketten, die Sie umwandeln.',
      },
      {
        question: 'Welche Zeichen sind in einer Base64-Zeichenkette erlaubt?',
        answer:
          'Standard-Base64 verwendet A–Z, a–z, 0–9 sowie + und /, wobei = für das Padding genutzt wird. Die URL-sichere Variante ersetzt + und / durch - und _.',
      },
      {
        question: 'Warum ist meine Base64-Ausgabe länger als meine Eingabe?',
        answer:
          'Base64 stellt jede Gruppe von 3 Eingabe-Bytes durch 4 ASCII-Zeichen dar, daher ist die kodierte Ausgabe etwa ein Drittel länger als der Originaltext.',
      },
      {
        question: 'Kann ich Emojis und nicht-englischen Text in Base64 kodieren?',
        answer:
          'Ja. Das Tool kodiert Text zuerst in UTF-8-Bytes, daher werden Emojis, Umlaute und nicht-lateinische Schriften korrekt kodiert und dekodiert.',
      },
      {
        question: 'Was ist URL-sicheres Base64 und wann nutze ich es?',
        answer:
          'URL-sicheres Base64 ersetzt + und / durch - und _, damit die kodierte Zeichenkette in einer URL oder einem Dateinamen stehen kann, ohne prozentkodiert zu werden. Nutzen Sie es für Token in Abfrageparametern.',
      },
      {
        question: 'Wie dekodiere ich eine Base64-Zeichenkette ohne Padding?',
        answer:
          'Fügen Sie sie direkt ein. Der Dekodierer erkennt fehlendes „=“-Padding und stellt es vor dem Dekodieren automatisch wieder her.',
      },
      {
        question: 'Kann der Base64-Kodierer Binärdateien verarbeiten?',
        answer:
          'Nein, dieses Tool kodiert nur Text. Um eine Datei zu kodieren, müssten zuerst ihre Bytes gelesen werden, was dieses Text-Tool nicht tut.',
      },
      {
        question: 'Was ist der Unterschied zwischen Base64 und Base64URL?',
        answer:
          'Base64URL ist die URL-sichere Variante von Base64: Sie tauscht + gegen - und / gegen _ und lässt in der Regel das Padding weg, sodass das Ergebnis in URLs und Dateinamen sicher ist.',
      },
      {
        question: 'Warum zeigt mein dekodierter Base64-Text seltsame Zeichen?',
        answer:
          'Der Originaltext wurde wahrscheinlich aus einer anderen Byte-Kodierung als UTF-8 kodiert oder die Base64-Zeichenkette ist beschädigt. Versuchen Sie, die Quelle erneut als UTF-8 zu kodieren und zu vergleichen.',
      },
      {
        question: 'Kann ich ein Passwort oder Geheimnis mit Base64 kodieren?',
        answer:
          'Sie können es, aber Sie sollten sich nicht auf die Sicherheit verlassen. Base64 ist trivial umkehrbar, daher kann jeder, der die kodierte Zeichenkette sieht, sie sofort dekodieren.',
      },
      {
        question: 'Wie kodiere ich Text für einen Basic-Auth-Header?',
        answer:
          'Kombinieren Sie Benutzername und Passwort als benutzername:passwort, kodieren Sie diese Zeichenkette in Base64 und nutzen Sie sie als Authorization: Basic <kodierter Wert> in Ihrer Anfrage.',
      },
      {
        question: 'Funktioniert der Base64-Kodierer offline?',
        answer:
          'Ja. Sobald die Seite geladen ist, laufen Kodieren und Dekodieren vollständig in Ihrem Browser ohne Netzwerkanfragen.',
      },
      {
        question: 'Was passiert, wenn ich eine ungültige Base64-Zeichenkette in den Dekodierer einfüge?',
        answer:
          'Der Dekodierer meldet einen Fehler, statt zu raten. Prüfen Sie Zeichen außerhalb des Base64-Alphabets, fehlendes Padding oder störende Leerzeichen und Zeilenumbrüche.',
      },
      {
        question: 'Kann ich eine Base64-Data-URI mit diesem Tool dekodieren?',
        answer:
          'Ja, wenn Sie nur den Base64-Teil nach dem Komma einfügen. Entfernen Sie zuerst das Präfix data:...;base64, da es nicht Teil der kodierten Daten ist.',
      },
      {
        question: 'Warum enden manche Base64-Zeichenketten mit „=“-Zeichen?',
        answer:
          'Die „=“-Zeichen sind Padding, das hinzugefügt wird, wenn die Eingabelänge kein Vielfaches von drei Bytes ist. Sie sagen dem Dekodierer genau, wie viele Bytes die letzte Gruppe darstellt.',
      },
      {
        question: 'Wird mein Text an einen Server gesendet, wenn ich ihn kodiere?',
        answer:
          'Nein. Kodieren und Dekodieren laufen lokal in Ihrem Browser, daher verlassen sensible Zeichenketten wie API-Schlüssel niemals Ihr Gerät.',
      },
      {
        question: 'Wie wandle ich Base64 zurück in den Originaltext um?',
        answer:
          'Wechseln Sie in den Dekodieren-Modus, fügen Sie die Base64-Zeichenkette ein, und das Tool gibt den ursprünglichen UTF-8-Text zurück, den Sie dann kopieren können.',
      },
    ],
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
    instructions: [
      {
        title: 'Kodieren oder Dekodieren wählen',
        description:
          'Wechseln Sie zwischen Kodieren und Dekodieren und wählen Sie dann encodeURIComponent (für einen einzelnen Parameterwert) oder encodeURI (um ://?& als Trennzeichen zu erhalten).',
      },
      {
        title: 'URL oder Parameterzeichenkette einfügen',
        description:
          'Geben Sie eine beliebige URL oder einen prozentkodierten Ausschnitt in das Feld „Eingabezeichenkette oder URL“ ein.',
      },
      {
        title: 'Kodiertes oder dekodiertes Ergebnis prüfen',
        description:
          'Prüfen Sie das Ausgabefeld, um zu bestätigen, dass Sonderzeichen wie Leerzeichen, & und = exakt wie erwartet kodiert oder dekodiert wurden.',
      },
      {
        title: 'Analysierte Parameter prüfen',
        description:
          'Wenn eine gültige vollständige URL erkannt wird, prüfen Sie die Tabelle „Analysierte URL-Aufschlüsselung“ darunter mit den dekodierten Schlüssel-Wert-Paaren der Abfrage.',
      },
      {
        title: 'Ergebnis kopieren',
        description:
          'Klicken Sie auf „Kopieren“, um die kodierte URL in Ihrem Code, Link oder Ihrer API-Anfrage zu verwenden, ohne sie erneut tippen zu müssen.',
      },
      {
        title: 'Fehlerbehebung: fehlerhafte %-Sequenzen',
        description:
          'Wenn Sie einen Fehler über eine fehlerhafte %-Sequenz sehen, suchen Sie nach einem einzelnen %, dem keine zwei Hexadezimalziffern folgen, wie %2, und korrigieren Sie ihn, bevor Sie erneut dekodieren.',
      },
    ],
    examples: [
      {
        title: 'Abfragewert kodieren',
        input: 'json formatierer & validator',
        output: 'json%20formatierer%20%26%20validator',
        explanation:
          'Die Verwendung von encodeURIComponent escapet „&“, damit es Ihre Abfragezeichenkette nicht teilt.',
      },
      {
        title: 'Kodierte URL dekodieren',
        input: 'https://beispiel.de/suche?q=caf%C3%A9+schwarz',
        output: 'https://beispiel.de/suche?q=café schwarz',
        explanation:
          'Dekodiert Prozentsequenzen und das + aus formular-kodierten Abfragezeichenketten.',
      },
    ],
    benefits: [
      'Klärte das Verhalten von encodeURIComponent gegenüber encodeURI nebeneinander',
      'Analysiert gültige URLs automatisch in Protokoll-, Host-, Pfad-, Hash- und Abfragezeilen',
      'Behandelt die „+“-Leerzeichenkodierung beim Dekodieren von Formular-Abfragezeichenketten sauber',
      'Meldet fehlerhafte %-Sequenzen klar',
    ],
    useCases: [
      'OAuth-Weiterleitungs-URIs und Callback-Parameter debuggen',
      'Suchanfragen oder JSON-Zeichenketten escapen, die als Abfrageparameter übergeben werden',
      'UTM-Kampagnenlinks mit mehreren Tracking-Parametern prüfen',
      'URLs aus Server-Zugriffsprotokollen für die menschliche Prüfung dekodieren',
    ],
    faqs: [
      {
        question: 'Wann nutze ich encodeURIComponent statt encodeURI?',
        answer:
          'Nutzen Sie encodeURIComponent, wenn Sie einen einzelnen Abfrageparameterwert kodieren (damit Zeichen wie & und = escapet werden). Nutzen Sie encodeURI, wenn Sie eine ganze URL kodieren und https://, /, ? und & intakt lassen möchten.',
      },
      {
        question: 'Warum hat eine dekodierte URL „+“ in ein Leerzeichen verwandelt?',
        answer:
          'In application/x-www-form-urlencoded-Abfragezeichenketten steht „+“ für ein Leerzeichen. Das Dekodieren von Komponenten normalisiert „+“ automatisch zu Leerzeichen.',
      },
      {
        question: 'Prüft der URL-Parser, ob eine Domain erreichbar ist?',
        answer:
          'Nein. Die Analyse nutzt die URL-API des Browsers lokal, ohne Netzwerkanfragen an den Zielhost zu senden.',
      },
      {
        question: 'Ist der URL-Kodierer kostenlos?',
        answer:
          'Ja, der URL-Kodierer ist vollständig kostenlos, ohne Anmeldung und ohne Limit für die Anzahl der URLs, die Sie kodieren oder dekodieren.',
      },
      {
        question: 'Welche Zeichen verändert die URL-Kodierung?',
        answer:
          'Die URL-Kodierung wandelt reservierte und gefährliche Zeichen wie Leerzeichen, &, =, ?, # und Nicht-ASCII-Buchstaben in % gefolgt von zwei Hexadezimalziffern um.',
      },
      {
        question: 'Was ist der Unterschied zwischen %20 und + für Leerzeichen in einer URL?',
        answer:
          'Beide können ein Leerzeichen in einer Abfragezeichenkette darstellen, aber %20 ist die Standard-Prozentkodierung, während + nur in formular-kodierten Abfragezeichenketten ein Leerzeichen bedeutet, nicht in Pfaden.',
      },
      {
        question: 'Kann der URL-Kodierer eine vollständige URL mit intaktem https:// kodieren?',
        answer:
          'Ja. Wählen Sie den encodeURI-Modus, und Schema, Schrägstriche und Trennzeichen bleiben intakt, während nur gefährliche Zeichen kodiert werden.',
      },
      {
        question: 'Wie kodiere ich ein Kaufmännisches Und in einem Abfragewert?',
        answer:
          'Nutzen Sie den encodeURIComponent-Modus nur für den Wert. Er wandelt & in %26 um, damit das Und als Daten behandelt wird, statt Ihre Abfragezeichenkette zu teilen.',
      },
      {
        question: 'Warum enthält meine dekodierte URL immer noch %-Zeichen?',
        answer:
          'Ein % gefolgt von zwei Hexadezimalziffern wird einmal dekodiert, daher wird ein doppelt kodierter Wert wie %2520 nach einem Dekodieren zu %20. Führen Sie das Dekodieren erneut aus, wenn Sie die vollständig dekodierte Form benötigen.',
      },
      {
        question: 'Kann ich eine URL mit mehreren Abfrageparametern dekodieren?',
        answer:
          'Ja. Der Dekodierer verarbeitet die gesamte Abfragezeichenkette, und die Tabelle der analysierten Aufschlüsselung listet jedes Schlüssel-Wert-Paar separat zur einfachen Prüfung.',
      },
      {
        question: 'Behandelt der URL-Kodierer Unicode-Zeichen?',
        answer:
          'Ja. Nicht-ASCII-Zeichen werden zuerst in UTF-8-Bytes umgewandelt und dann prozentkodiert, sodass Umlaute und andere Schriften korrekt kodiert werden.',
      },
      {
        question: 'Was ist Prozentkodierung in einer URL?',
        answer:
          'Die Prozentkodierung ersetzt ein Zeichen durch ein %-Zeichen gefolgt von seinem zweistelligen hexadezimalen Bytewert, was URLs gültig hält, wenn sie Leerzeichen oder Sonderzeichen enthalten.',
      },
      {
        question: 'Wie kodiere ich eine URL für die Verwendung in einer E-Mail oder einem Dokument?',
        answer:
          'Fügen Sie die URL ein, wählen Sie den encodeURI-Modus und kopieren Sie das Ergebnis. Der kodierte Link bleibt anklickbar und bricht bei Zeilenumbrüchen in Klartext nicht.',
      },
      {
        question: 'Validiert der URL-Dekodierer die URL?',
        answer:
          'Er prüft, ob die Eingabe eine wohlgeformte URL ist und jede %-Sequenz gültig ist, aber nicht, ob die Domain existiert oder die Seite lädt.',
      },
      {
        question: 'Kann ich Leerzeichen als %20 statt als + kodieren?',
        answer:
          'Ja. Der Kodierer verwendet für Leerzeichen immer %20. Die +-Form erscheint nur beim Dekodieren einer formular-kodierten Eingabe, in der + bereits ein Leerzeichen bedeutet.',
      },
      {
        question: 'Was passiert, wenn ich eine bereits kodierte URL kodiere?',
        answer:
          'Die %-Zeichen selbst werden als %25 kodiert, was eine Doppelkodierung wie %2520 erzeugt. Dekodieren Sie einmal, um zur einfach kodierten Form zurückzukehren.',
      },
      {
        question: 'Wird meine URL an einen Server gesendet, wenn ich sie kodiere?',
        answer:
          'Nein. Kodieren, Dekodieren und Analysieren laufen lokal in Ihrem Browser, daher verlassen private Links und Token niemals Ihr Gerät.',
      },
      {
        question: 'Wie kodiere ich ein Fragment oder einen Hash einer URL?',
        answer:
          'Kodieren Sie nur den Fragmentwert mit encodeURIComponent und hängen Sie ihn danach selbst an das #, damit das Hash-Trennzeichen nicht kodiert wird.',
      },
      {
        question: 'Warum wirken manche kodierte URLs viel länger?',
        answer:
          'Jedes Sonder- oder Nicht-ASCII-Zeichen wird zu drei Zeichen (% plus zwei Hexadezimalziffern), daher wachsen URLs mit vielen Leerzeichen oder Unicode-Zeichen spürbar.',
      },
      {
        question: 'Kann der URL-Kodierer sehr lange URLs verarbeiten?',
        answer:
          'Ja. Die Verarbeitung läuft lokal ohne Server-Upload-Limit, daher werden lange URLs in Ihrem Browser kodiert und dekodiert, solange Ihr Browser den Text aufnehmen kann.',
      },
    ],
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
    instructions: [
      {
        title: 'UUID v4 oder v7 wählen',
        description:
          'Wählen Sie v4 für zufällige Standard-IDs oder v7 für sortierbare Datenbank-Primärschlüssel mit Zeitstempel-Präfix.',
      },
      {
        title: 'Menge und Formatierung festlegen',
        description:
          'Geben Sie zwischen 1 und 100 IDs ein und aktivieren Sie Großbuchstaben, Bindestriche einschließen oder in {geschweifte Klammern} setzen.',
      },
      {
        title: 'Neuen Stapel erzeugen',
        description:
          'Klicken Sie auf „UUIDs erzeugen“, um einen neuen Stapel zu erstellen. Jeder Klick erzeugt einen vollständig neuen Satz zufälliger IDs.',
      },
      {
        title: 'Erzeugte IDs prüfen',
        description:
          'Durchsuchen Sie die Liste, um zu bestätigen, dass Version, Großschreibung und Bindestrich-Format zu Ihrer Datenbank oder Ihrem Code passen.',
      },
      {
        title: 'Liste kopieren oder herunterladen',
        description:
          'Klicken Sie auf „Alle kopieren“, um jede ID in Ihre Zwischenablage zu legen, oder laden Sie den Stapel als .txt-Datei herunter, um Datensätze oder Test-Fixtures zu befüllen.',
      },
      {
        title: 'Tipp: v7 für Datenbanken wählen',
        description:
          'Wenn Sie IDs als Primärschlüssel speichern, bevorzugen Sie v7, damit neue Zeilen chronologisch sortiert werden und Ihr Index effizient bleibt. Nutzen Sie v4, wenn die Reihenfolge keine Rolle spielt.',
      },
    ],
    examples: [
      {
        title: 'Standard-UUID v4 in Kleinbuchstaben',
        input: 'Version: v4 · Bindestriche: Aktiviert · Großbuchstaben: Deaktiviert',
        output: '550e8400-e29b-41d4-a716-446655440000',
        explanation:
          '128-Bit-ID nach RFC 4122, geeignet für verteilte Primärschlüssel.',
      },
      {
        title: 'Stapel von 5 UUID-v7-IDs ohne Bindestriche',
        input: 'Version: v7 · Menge: 5 · Bindestriche: Deaktiviert · Großbuchstaben: Deaktiviert',
        output: '0191a2b3c4d57f8a89b0c1d2e3f4a5b6',
        explanation:
          'Zeitlich geordnete IDs im kompakten 32-stelligen Hexadezimalformat, bereit für sortierbare Primärschlüssel.',
      },
    ],
    benefits: [
      'Nutzt crypto.randomUUID / crypto.getRandomValues des Browsers (CSPRNG)',
      'Unterstützt modernes UUID v7 nach RFC 9562 mit 48-Bit-Millisekunden-Zeitstempel-Präfix',
      'Erzeugt Stapel von bis zu 100 eindeutigen IDs auf einmal',
      'Formatiert in Großbuchstaben, kompaktem Hexadezimal ohne Bindestriche oder GUID-Zeichenketten in geschweiften Klammern',
    ],
    useCases: [
      'Datenbank-Fixtures und Testdatensätze für Migrationen befüllen',
      'Korrelations-IDs, API-Schlüssel und Webhook-Test-IDs erzeugen',
      'Indexfreundliches UUID v7 und zufälliges UUID v4 vergleichen',
      'GUID-Konstanten in geschweiften Klammern für Windows/C# erstellen',
    ],
    faqs: [
      {
        question: 'Was ist der Vorteil von UUID v7 gegenüber UUID v4?',
        answer:
          'UUID v7 kodiert einen Unix-Zeitstempel in Millisekunden in seinen höchstwertigen Bits, wodurch IDs chronologisch sortierbar werden und die B-Tree-Index-Fragmentierung in SQL-Datenbanken sinkt.',
      },
      {
        question: 'Werden diese UUIDs mit Math.random() erzeugt?',
        answer:
          'Nein. Jede UUID nutzt kryptografisch starken Zufall aus der Web-Crypto-API. Dadurch sind die erzeugten IDs für Session-Token, Datenbankschlüssel und andere sicherheitsrelevante Zwecke deutlich besser geeignet als einfache Zufallszahlen.',
      },
      {
        question: 'Wie erhalte ich eine 32-stellige Hexadezimal-ID ohne Bindestriche?',
        answer:
          'Deaktivieren Sie „Bindestriche einschließen“, um die Bindestriche sofort im gesamten erzeugten Stapel zu entfernen.',
      },
      {
        question: 'Ist der UUID-Generator kostenlos?',
        answer:
          'Ja, der UUID-Generator ist vollständig kostenlos, ohne Anmeldung, und Sie können so viele Stapel erzeugen, wie Sie benötigen.',
      },
      {
        question: 'Was ist eine UUID und wozu dient sie?',
        answer:
          'Eine UUID ist eine 128-Bit-ID, die in der Regel als 32 Hexadezimalziffern in fünf Gruppen geschrieben wird. Sie wird für Datenbank-Primärschlüssel, Korrelations-IDs, Sitzungs-Token und Dateinamen verwendet.',
      },
      {
        question: 'Können zwei erzeugte UUIDs identisch sein?',
        answer:
          'Praktisch nein. Mit 122 Zufallsbits in einer UUID v4 ist eine Kollision so unwahrscheinlich, dass Sie erzeugte IDs als eindeutig betrachten können.',
      },
      {
        question: 'Was ist der Unterschied zwischen UUID v4 und UUID v7?',
        answer:
          'UUID v4 ist vollständig zufällig, während UUID v7 mit einem Millisekunden-Zeitstempel beginnt, sodass neuere IDs nach älteren sortiert werden. Beide sind 128-Bit-IDs.',
      },
      {
        question: 'Wie viele UUIDs kann ich auf einmal erzeugen?',
        answer:
          'Sie können zwischen 1 und 100 UUIDs in einem einzigen Stapel erzeugen. Klicken Sie erneut auf „Erzeugen“, um einen weiteren frischen Stapel derselben Größe zu erhalten.',
      },
      {
        question: 'Was bedeutet „zeitlich geordnet“ bei UUID v7?',
        answer:
          'Zeitlich geordnet bedeutet, dass der erste Teil der UUID ein Unix-Zeitstempel in Millisekunden ist, daher sortiert das alphabetische Sortieren der IDs sie auch nach Erstellungszeit.',
      },
      {
        question: 'Kann ich UUIDs ohne Bindestriche erzeugen?',
        answer:
          'Ja. Deaktivieren Sie „Bindestriche einschließen“, und jede UUID im Stapel wird als kompakte 32-stellige Hexadezimalzeichenkette angezeigt.',
      },
      {
        question: 'Was sind GUIDs in geschweiften Klammern und wann brauche ich sie?',
        answer:
          'GUIDs in geschweiften Klammern umschließen die UUID mit geschweiften Klammern, wie {550e8400-...}. Manche Microsoft-Tools und C#-Code erwarten dieses Format für GUID-Konstanten.',
      },
      {
        question: 'Sind die hier erzeugten UUIDs sicher für den Produktionseinsatz?',
        answer:
          'Ja. Sie nutzen die Web-Crypto-API des Browsers, die kryptografisch starken Zufall liefert, der für Produktions-IDs geeignet ist.',
      },
      {
        question: 'Kann ich UUIDs in Großbuchstaben erzeugen?',
        answer:
          'Ja. Aktivieren Sie den Schalter „Großbuchstaben“, und der gesamte Stapel wird mit Hexadezimalbuchstaben A–F in Großbuchstaben angezeigt.',
      },
      {
        question: 'Brauche ich eine Internetverbindung, um UUIDs zu erzeugen?',
        answer:
          'Nur zum Laden der Seite. Nach dem Laden läuft die Erzeugung vollständig in Ihrem Browser ohne Netzwerkanfragen.',
      },
      {
        question: 'Wird meine Liste erzeugter UUIDs gespeichert oder irgendwohin gesendet?',
        answer:
          'Nein. Die Erzeugung erfolgt lokal in Ihrem Browser, daher werden Ihre IDs niemals an einen Server gesendet oder irgendwo gespeichert.',
      },
      {
        question: 'Kann ich eine UUID als API-Schlüssel nutzen?',
        answer:
          'Sie können sie als opakes Token nutzen, aber eine UUID ist eine ID, kein Geheimnis für die Authentifizierung. Für echte API-Schlüssel nutzen Sie ein richtiges Geheimnis-System mit Rotation.',
      },
      {
        question: 'Was ist der Unterschied zwischen einer UUID und einer GUID?',
        answer:
          'Sie haben dasselbe 128-Bit-Format. GUID ist der von Microsoft verwendete Name, während UUID der Name des offenen Standards ist, der überall sonst verwendet wird.',
      },
      {
        question: 'Warum UUID v7 als Datenbank-Primärschlüssel wählen?',
        answer:
          'Weil v7-IDs nach Erstellungszeit sortiert werden, landen neue Zeilen nahe beieinander in einem B-Tree-Index, was Einfügungen schnell hält und die Index-Fragmentierung im Vergleich zu zufälligen v4-IDs reduziert.',
      },
      {
        question: 'Kann ich zweimal dieselbe UUID erzeugen?',
        answer:
          'Nein. Jede Erzeugung nutzt neuen kryptografischen Zufall, daher erhalten Sie niemals zweimal dieselbe UUID. Speichern Sie jede ID, die Sie wiederverwenden müssen.',
      },
      {
        question: 'Wie kopiere ich alle erzeugten UUIDs auf einmal?',
        answer:
          'Klicken Sie auf „Alle kopieren“, um den gesamten Stapel in Ihre Zwischenablage zu legen, eine UUID pro Zeile, bereit zum Einfügen in Ihren Code, Ihre Tabelle oder Ihr SQL-Skript.',
      },
    ],
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
    instructions: [
      {
        title: 'Muster und Flags eingeben',
        description:
          'Geben Sie ein RegExp-Muster zwischen Schrägstrichen ein und aktivieren Sie die Flags g, i, m oder s.',
      },
      {
        title: 'Beispieltext bereitstellen',
        description:
          'Fügen Sie Testzeichenketten in „Testzeichenkette“ ein, um passende Teilzeichenketten rechts hervorgehoben zu sehen.',
      },
      {
        title: 'Hervorgehobene Treffer prüfen',
        description:
          'Prüfen Sie die hervorgehobenen Teilzeichenketten und die Trefferanzahl, um zu bestätigen, dass Ihr Muster genau das findet, was Sie erwarten – und nichts mehr.',
      },
      {
        title: 'Gruppen und Ersetzungen prüfen',
        description:
          'Prüfen Sie die exakten Trefferindizes und die Capture-Gruppen $1/$2 oder testen Sie unten ein Ersetzungsmuster.',
      },
      {
        title: 'Musterfehler korrigieren',
        description:
          'Wenn ein Syntaxfehler erscheint, lesen Sie die Meldung, prüfen Sie nicht geschlossene Klammern oder runde Klammern und passen Sie das Muster an, bis Treffer erscheinen.',
      },
      {
        title: 'Tipp: Grenzfälle vor dem Deployment testen',
        description:
          'Testen Sie leere Zeichenketten, ungewöhnliche Zeichen und mehrzeilige Eingaben, bevor Sie ein Muster in der Produktion nutzen, und aktivieren Sie das i-Flag, um die Groß-/Kleinschreibung zu prüfen.',
      },
    ],
    examples: [
      {
        title: 'Lokalen Teil und Domain einer E-Mail extrahieren',
        input: 'Muster: ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) · Text: support@utilityflow.online',
        output: 'Treffer Nr. 1 · $1="support" · $2="utilityflow.online"',
        explanation:
          'Gruppen in Klammern geben erfasste Teilzeichenketten einzeln aus.',
      },
      {
        title: 'Ersetzung mit Gruppenvertauschung',
        input: 'Muster: (\\w+) (\\w+) · Ersetzung: $2 $1 · Text: Max Mustermann',
        output: 'Mustermann Max',
        explanation:
          'Nummerierte Capture-Gruppen ermöglichen es, die Reihenfolge erfasster Wörter in der Ersetzung zu tauschen.',
      },
    ],
    benefits: [
      'Schützt automatisch vor Endlosschleifen bei Treffern mit Länge null',
      'Zeigt den exakten Zeichenindex und die erfassten Gruppenwerte pro Treffer',
      'Enthält eine Live-Ersetzungsmuster-Vorschau mit $1, $2 und $&',
      'Meldet RegExp-Syntaxfehler sauber, ohne abzustürzen',
    ],
    useCases: [
      'E-Mail-, Slug- oder Formulareingabe-Muster vor dem Deployment validieren',
      'Strukturierte Token aus Protokollzeilen oder HTML-Ausschnitten extrahieren',
      'Suchen-und-Ersetzen-Erfassungsmuster testen',
      'Mehrzeilen-Verhalten (^ / $) und groß-/kleinschreibungsunabhängige Flags prüfen',
    ],
    faqs: [
      {
        question: 'Welchen Regex-Motor verwendet dieser Tester?',
        answer:
          'Er nutzt den nativen ECMAScript-RegExp-Motor (JavaScript) Ihres Browsers, daher entspricht das Verhalten exakt dem clientseitigen JS- und Node.js-Code.',
      },
      {
        question: 'Warum ist der globale Modus („g“) wichtig?',
        answer:
          'Ohne das „g“-Flag stoppt RegExp nach dem ersten Treffer. Das Aktivieren von „g“ findet und hebt jeden Treffer in der gesamten Testzeichenkette hervor.',
      },
      {
        question: 'Wie finde ich Treffer über Zeilenumbrüche hinweg mit „.“?',
        answer:
          'Aktivieren Sie das „s“-Flag (dotAll), damit das Metazeichen „.“ auch Zeilenumbruchzeichen abgleicht.',
      },
      {
        question: 'Ist der Regex-Tester kostenlos?',
        answer:
          'Ja, der Regex-Tester ist vollständig kostenlos, ohne Anmeldung und ohne Limit für die Anzahl der Muster oder Testzeichenketten, die Sie ausprobieren.',
      },
      {
        question: 'Welchen Regex-Dialekt verwendet der Regex-Tester?',
        answer:
          'Er verwendet den JavaScript-Dialekt (ECMAScript), denselben Motor, der in Browsern und Node.js läuft, daher verhalten sich Muster in Ihrem Code gleich.',
      },
      {
        question: 'Wie teste ich eine Regex zur E-Mail-Validierung?',
        answer:
          'Fügen Sie ein Muster wie ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) ein und probieren Sie gültige und ungültige Adressen in der Testzeichenkette aus, um zu sehen, welche passen.',
      },
      {
        question: 'Was bewirken die Flags g, i, m und s im Regex-Tester?',
        answer:
          'Das g-Flag findet alle Treffer, i macht den Abgleich groß-/kleinschreibungsunabhängig, m lässt ^ und $ an Zeilengrenzen abgleichen, und s lässt . Zeilenumbrüche abgleichen.',
      },
      {
        question: 'Wie funktionieren Capture-Gruppen im Regex-Tester?',
        answer:
          'Text in Klammern bildet eine nummerierte Capture-Gruppe. Nach einem Treffer wird jede Gruppe als $1, $2 usw. mit der exakt erfassten Teilzeichenkette aufgelistet.',
      },
      {
        question: 'Was ist der Unterschied zwischen .* und .*? in Regex?',
        answer:
          'Der Quantor .* ist gierig und gleicht so viel wie möglich ab, während .*? träge ist und so wenig wie möglich abgleicht. Nutzen Sie die träge Form, wenn Sie den kürzesten Treffer möchten.',
      },
      {
        question: 'Wie finde ich einen wörtlichen Punkt oder eine Klammer in Regex?',
        answer:
          'Escapen Sie ihn mit einem Backslash, wie \\. für einen Punkt oder \\( für eine Klammer, damit das Zeichen als wörtlicher Text statt als Metazeichen behandelt wird.',
      },
      {
        question: 'Was bedeutet das m-Flag für ^ und $?',
        answer:
          'Mit dem m-Flag (mehrzeilig) gleichen ^ und $ am Anfang und Ende jeder Zeile ab, nicht nur am Anfang und Ende der gesamten Zeichenkette.',
      },
      {
        question: 'Kann ich mit dem Regex-Tester URLs oder Daten extrahieren?',
        answer:
          'Ja. Schreiben Sie ein Muster für die gewünschte Struktur und nutzen Sie Capture-Gruppen, um die einzelnen Teile wie Protokoll, Domain oder Datum zu extrahieren.',
      },
      {
        question: 'Warum findet mein Muster nichts, obwohl der Text passen sollte?',
        answer:
          'Prüfen Sie, ob Sonderzeichen escapet werden müssen, ob das i-Flag für die Großschreibung fehlt oder ob das Muster einen Anker wie ^ enthält, der nur am Textanfang passt.',
      },
      {
        question: 'Was ist $& in einem Ersetzungsmuster?',
        answer:
          '$& steht für den gesamten Treffer, sodass Sie ihn zum Beispiel mit einem Präfix oder Suffix umgeben können, ohne ihn erneut tippen zu müssen.',
      },
      {
        question: 'Kann ich den Regex-Tester für Passwortregeln nutzen?',
        answer:
          'Ja. Testen Sie Muster mit Lookaheads wie (?=.*[A-Z]), um zu prüfen, ob Passwörter Großbuchstaben, Ziffern oder Sonderzeichen enthalten.',
      },
      {
        question: 'Was sind Lookaheads und Lookbehinds in Regex?',
        answer:
          'Lookaheads (?=...) und Lookbehinds (?<=...) prüfen, ob ein Muster vor oder nach der aktuellen Position vorkommt, ohne es in den Treffer einzuschließen.',
      },
      {
        question: 'Warum ist mein gieriges Muster zu lang?',
        answer:
          'Weil .* so viel wie möglich abgleicht. Wechseln Sie zur trägen Form .*? oder schränken Sie die Zeichenklasse ein, zum Beispiel [^"]* statt .* für Text in Anführungszeichen.',
      },
      {
        question: 'Speichert oder sendet der Regex-Tester meine Muster?',
        answer:
          'Nein. Alles läuft lokal in Ihrem Browser, und Ihre Muster und Testtexte werden niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Kann ich Regex-Muster aus anderen Sprachen hier testen?',
        answer:
          'Nur eingeschränkt: Der Tester nutzt den JavaScript-Motor, daher verhalten sich manche Konstrukte aus Python oder PCRE anders oder werden nicht unterstützt.',
      },
      {
        question: 'Funktioniert der Regex-Tester auf dem Handy?',
        answer:
          'Ja. Er funktioniert in jedem modernen mobilen Browser mit denselben Live-Treffern und derselben Ersetzungsvorschau.',
      },
    ],
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
    instructions: [
      {
        title: 'JWT-Zeichenkette einfügen',
        description:
          'Fügen Sie Ihr Token in das Eingabefeld ein; ein gültiges JWT hat drei durch Punkte getrennte Base64URL-Segmente.',
      },
      {
        title: 'Header- und Payload-JSON prüfen',
        description:
          'Lesen Sie die formatierten Header- und Payload-Objekte, um Algorithmus, Typ und alle Claims zu sehen.',
      },
      {
        title: 'Zeitstempel-Claims prüfen',
        description:
          'Prüfen Sie die menschenlesbaren UTC-Daten für iat (ausgestellt am), nbf (gültig ab) und exp (Ablauf) sowie den Ablaufstatus.',
      },
      {
        title: 'Claims wie sub, Rollen und Scopes prüfen',
        description:
          'Suchen Sie in der Payload nach sub, Rollen, Scopes und Mandanten-Claims, um zu verstehen, was das Token gewährt.',
      },
      {
        title: 'Dekodiertes JSON oder einen einzelnen Claim kopieren',
        description:
          'Kopieren Sie das gesamte dekodierte JSON oder einen einzelnen Claim-Wert für Ihre Debugging-Notizen.',
      },
      {
        title: 'Wichtig: Dekodieren ist keine Verifizierung',
        description:
          'Das Dekodieren zeigt nur den Inhalt; es prüft die Signatur nicht. Nutzen Sie Ihren Signierschlüssel und eine Bibliothek, um die Echtheit zu verifizieren.',
      },
    ],
    examples: [
      {
        title: 'Token-Ablauf prüfen',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: 'Header: { "alg": "HS256", "typ": "JWT" } · exp: 2027-01-15 UTC',
        explanation:
          'Zeigt Header-Algorithmus und Ablaufdatum eines Tokens auf einen Blick.',
      },
      {
        title: 'Rollen-Claims prüfen',
        input: 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c3JfMiIsInJvbGVzIjpbImFkbWluIl19.sig',
        output: 'Payload: { "sub": "usr_2", "roles": ["admin"] }',
        explanation:
          'Macht sichtbar, welche Rollen ein Token seinem Inhaber gewährt.',
      },
    ],
    benefits: [
      'Keine Netzwerkübertragung – Token verlassen niemals Ihren Browser-Tab',
      'Übersetzt numerische iat-, nbf- und exp-Claims in lesbare UTC-Daten',
      'Hebt hervor, ob der Ablauf-Zeitstempel bereits überschritten ist',
      'Weist klar darauf hin, dass die kryptografische Signaturprüfung Ihren Signierschlüssel erfordert',
    ],
    useCases: [
      'OAuth2-/OIDC-Zugriffs- und ID-Token während der API-Integration debuggen',
      'Rollen-, Scope- und Mandanten-Claims von Auth-Anbietern verifizieren',
      'Prüfen, warum eine API einen abgelaufenen Bearer-Token abgelehnt hat',
      'JWT-Struktur in Integrationstests validieren',
    ],
    faqs: [
      {
        question: 'Verifiziert dieser JWT-Dekodierer, ob eine Token-Signatur echt ist?',
        answer:
          'Nein. Der Dekodierer zeigt nur den Inhalt von Header und Payload; die kryptografische Verifizierung der Signatur erfordert den Signierschlüssel und eine JWT-Bibliothek.',
      },
      {
        question: 'Ist es sicher, Authentifizierungs-Token hier einzufügen?',
        answer:
          'Ja, für das Debugging: Alles läuft lokal in Ihrem Browser, und das Token wird niemals gesendet oder gespeichert. Nutzen Sie dennoch keine Produktionstoken auf fremden oder öffentlichen Computern.',
      },
      {
        question: 'Warum schlägt mein Token fehl, wenn es 5 statt 3 Segmente hat?',
        answer:
          'Ein JWT hat genau drei Segmente (Header, Payload, Signatur). Fünf Segmente deuten auf ein JWE (verschlüsseltes JWT) oder ein verkettetes Token hin, das dieser Dekodierer nicht lesen kann.',
      },
      {
        question: 'Was ist ein JWT und was zeigt dieser Dekodierer?',
        answer:
          'Ein JWT (JSON Web Token) ist ein kompakter, URL-sicherer Token mit Header, Payload und Signatur. Der Dekodierer zeigt Header und Payload als lesbares JSON sowie die Zeitstempel-Claims.',
      },
      {
        question: 'Ist der JWT-Dekodierer kostenlos?',
        answer:
          'Ja. Der JWT-Dekodierer ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig viele Tokens dekodieren; die Prüfung der Signatur erfolgt lokal im Browser, ohne dass Ihr Token den Rechner verlässt.',
      },
      {
        question: 'Kann ich ein JWT ohne den Signierschlüssel dekodieren?',
        answer:
          'Ja. Das Dekodieren liest nur die Base64URL-kodierten Segmente; der Schlüssel wird nur zur Verifizierung der Signatur benötigt.',
      },
      {
        question: 'Was bedeuten die Header-Felder alg und typ in einem JWT?',
        answer:
          'alg gibt den Signaturalgorithmus an, zum Beispiel HS256 oder RS256, und typ gibt den Tokentyp an, in der Regel „JWT“.',
      },
      {
        question: 'Welche Claims stehen üblicherweise in einer JWT-Payload?',
        answer:
          'Typisch sind sub (Betreff), iss (Aussteller), aud (Zielgruppe), iat (ausgestellt am), nbf (gültig ab), exp (Ablauf) sowie anwendungsspezifische Claims wie Rollen und Scopes.',
      },
      {
        question: 'Wie erkenne ich, ob mein JWT abgelaufen ist?',
        answer:
          'Der Dekodierer wandelt den exp-Zeitstempel in ein lesbares UTC-Datum um und zeigt an, ob der Ablauf bereits überschritten ist.',
      },
      {
        question: 'Was ist der Unterschied zwischen iat, nbf und exp in einem JWT?',
        answer:
          'iat ist der Ausstellungszeitpunkt, nbf der Zeitpunkt, ab dem das Token gültig ist, und exp der Ablaufzeitpunkt, nach dem das Token nicht mehr akzeptiert werden darf.',
      },
      {
        question: 'Warum sieht meine dekodierte JWT-Payload anders aus als das Original-JSON?',
        answer:
          'Weil der Dekodierer das JSON neu formatiert und sortiert; die Claims und Werte bleiben identisch, nur die Darstellung ändert sich.',
      },
      {
        question: 'Kann ich ein JWT ohne Signatur dekodieren?',
        answer:
          'Ja. Ein Token mit dem Algorithmus „none“ hat ein leeres drittes Segment und lässt sich dekodieren; es ist aber unsicher und sollte in der Produktion niemals akzeptiert werden.',
      },
      {
        question: 'Was bedeutet es, wenn mein Token nur zwei Segmente hat?',
        answer:
          'Ein gültiges JWT braucht drei Segmente. Zwei Segmente bedeuten, dass die Signatur fehlt oder das Token abgeschnitten wurde – prüfen Sie, ob Sie das vollständige Token kopiert haben.',
      },
      {
        question: 'Speichert oder sendet der JWT-Dekodierer mein Token irgendwohin?',
        answer:
          'Nein. Das Dekodieren erfolgt lokal in Ihrem Browser, und Ihr Token wird niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Warum lässt sich mein JWT überhaupt nicht dekodieren?',
        answer:
          'Häufige Ursachen sind ein abgeschnittenes Token, Leerzeichen oder Zeilenumbrüche beim Kopieren oder ein JWE (verschlüsseltes Token), das nicht dekodiert werden kann.',
      },
      {
        question: 'Kann ich diesen JWT-Dekodierer für OAuth2-Zugriffstoken nutzen?',
        answer:
          'Ja, sofern das Zugriffstoken ein JWT ist. Manche Anbieter nutzen opake Token, die kein JWT-Format haben und sich nicht dekodieren lassen.',
      },
      {
        question: 'Was ist ein JWE und warum kann ich es hier nicht dekodieren?',
        answer:
          'Ein JWE (JSON Web Encryption) ist ein verschlüsseltes JWT mit fünf Segmenten. Sein Inhalt ist ohne den Entschlüsselungsschlüssel nicht lesbar, daher kann der Dekodierer ihn nicht anzeigen.',
      },
      {
        question: 'Wie prüfe ich JWT-Claims wie Rollen und Scopes?',
        answer:
          'Dekodieren Sie das Token und suchen Sie in der Payload nach den Feldern roles, scope oder ähnlichen Claims, die der Dekodierer als lesbares JSON anzeigt.',
      },
      {
        question: 'Beweist das Dekodieren eines JWT, dass das Token gültig ist?',
        answer:
          'Nein. Das Dekodieren beweist nur, dass das Format lesbar ist. Gültigkeit erfordert die Signaturprüfung mit dem richtigen Schlüssel sowie die Prüfung von Ablauf und Zielgruppe.',
      },
      {
        question: 'Kann ich ein JWT auf einem gemeinsamen oder öffentlichen Computer dekodieren?',
        answer:
          'Sie können es, aber Sie sollten es vermeiden: Jeder mit Zugriff auf den Browser könnte das Token sehen und kopieren. Nutzen Sie dafür möglichst Ihr eigenes Gerät.',
      },
    ],
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
    instructions: [
      {
        title: 'Texteingabe oder lokale Datei-Prüfsumme wählen',
        description:
          'Wählen Sie, ob Sie Text hashen oder die Prüfsumme einer lokalen Datei berechnen möchten.',
      },
      {
        title: 'Text eingeben oder lokale Datei wählen',
        description:
          'Tippen Sie Ihren Text ein oder wählen Sie eine Datei auf Ihrem Gerät; die Datei wird nur lokal gelesen und niemals hochgeladen.',
      },
      {
        title: 'Ausgabekodierung wählen',
        description:
          'Wählen Sie Hex (Groß-/Kleinbuchstaben) oder Base64 als Ausgabeformat für die Digests.',
      },
      {
        title: 'Alle vier Digests auf einmal prüfen',
        description:
          'Vergleichen Sie die SHA-1-, SHA-256-, SHA-384- und SHA-512-Werte, die gleichzeitig berechnet werden.',
      },
      {
        title: 'Beliebigen Digest kopieren',
        description:
          'Klicken Sie auf „Kopieren“ neben dem gewünschten Digest, um ihn in Ihre Zwischenablage zu legen.',
      },
      {
        title: 'Tipp: Datei-Prüfsumme verifizieren',
        description:
          'Vergleichen Sie den berechneten SHA-256-Wert mit der vom Anbieter angegebenen Prüfsumme; bei einer Abweichung laden Sie die Datei erneut herunter.',
      },
    ],
    examples: [
      {
        title: 'SHA-256 von „UtilityFlow“',
        input: 'UtilityFlow',
        output: 'Wird deterministisch als 64 Hex-Zeichen (256 Bit) berechnet',
        explanation:
          'Derselbe Text erzeugt immer denselben Hash – ideal für Integritätsprüfungen.',
      },
      {
        title: 'Datei-Prüfsumme verifizieren',
        input: 'Datei: installer.zip · Erwartet: a3f9…c21e (SHA-256)',
        output: 'Berechnet: a3f9…c21e – stimmt überein ✓',
        explanation:
          'Bestätigt, dass eine heruntergeladene Datei vollständig und unverändert ist.',
      },
    ],
    benefits: [
      'Nutzt die native, hardwarebeschleunigte Web-Crypto-SubtleCrypto-API',
      'Verifiziert lokale Datei-SHA-256-Prüfsummen ohne Datei-Upload',
      'Gibt sowohl Hex- (Groß-/Kleinbuchstaben) als auch Base64-Formate aus',
      'Berechnet alle vier SHA-Algorithmen gleichzeitig',
    ],
    useCases: [
      'SHA-256-Prüfsummen heruntergeladener Software-Installer oder Archive verifizieren',
      'Subresource-Integrity-(SRI-)Base64-Hashes für Skripte und Styles erzeugen',
      'Webhook-HMAC- oder Payload-Digest-Erwartungen testen',
      'Deterministische Inhalts-Fingerabdrücke erstellen',
    ],
    faqs: [
      {
        question: 'Kann ich einen SHA-256-Hash zurück in den Originaltext umkehren?',
        answer:
          'Nein. Hashfunktionen sind Einwegfunktionen; aus dem Digest lässt sich der Originaltext nicht rekonstruieren.',
      },
      {
        question: 'Warum werden SHA-256 und SHA-512 gegenüber SHA-1 bevorzugt?',
        answer:
          'SHA-1 gilt als kryptografisch gebrochen, weil Kollisionen praktisch demonstriert wurden. SHA-256 und SHA-512 bieten deutlich mehr Sicherheit und sind der aktuelle Standard.',
      },
      {
        question: 'Werden hochgeladene Dateien an einen Server übertragen?',
        answer:
          'Nein. Dateien werden nur lokal in Ihrem Browser gelesen und gehasht; sie verlassen Ihr Gerät niemals.',
      },
      {
        question: 'Wozu wird ein Hash-Generator verwendet?',
        answer:
          'Er erzeugt Prüfsummen zur Integritätsprüfung von Dateien und Daten, für Passwort-Hashing, digitale Signaturen und Inhalts-Fingerabdrücke.',
      },
      {
        question: 'Ist der Hash-Generator kostenlos?',
        answer:
          'Ja. Der Hash-Generator ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig viele Texte hashen und zwischen Algorithmen wie MD5, SHA-1 und SHA-256 wechseln, ohne jede Begrenzung.',
      },
      {
        question: 'Was ist der Unterschied zwischen SHA-1, SHA-256, SHA-384 und SHA-512?',
        answer:
          'Sie unterscheiden sich in der Digest-Länge: SHA-1 erzeugt 160 Bit, SHA-256 erzeugt 256 Bit, SHA-384 erzeugt 384 Bit und SHA-512 erzeugt 512 Bit. Längere Digests bieten mehr Kollisionsresistenz.',
      },
      {
        question: 'Wie verifiziere ich eine heruntergeladene Datei-Prüfsumme mit diesem Tool?',
        answer:
          'Wählen Sie die Datei im Modus „Lokale Datei“, vergleichen Sie den berechneten SHA-256-Wert mit der vom Anbieter veröffentlichten Prüfsumme; bei Übereinstimmung ist die Datei intakt.',
      },
      {
        question: 'Was soll ich tun, wenn meine Datei-Prüfsumme nicht übereinstimmt?',
        answer:
          'Laden Sie die Datei erneut herunter, möglichst von der offiziellen Quelle, und prüfen Sie erneut. Eine Abweichung deutet auf einen beschädigten Download oder eine manipulierte Datei hin.',
      },
      {
        question: 'Was ist der Unterschied zwischen Hex- und Base64-Hash-Ausgabe?',
        answer:
          'Hex stellt jedes Byte als zwei Hexadezimalzeichen dar, Base64 als kompaktere ASCII-Zeichenkette. Beide kodieren denselben Digest; Base64 wird zum Beispiel für SRI-Hashes verwendet.',
      },
      {
        question: 'Verändert ein einziges geändertes Zeichen wirklich den gesamten Hash?',
        answer:
          'Ja. Hashfunktionen haben einen Lawineneffekt: Schon ein geändertes Zeichen erzeugt einen völlig anderen Digest.',
      },
      {
        question: 'Können zwei verschiedene Dateien denselben SHA-256-Hash erzeugen?',
        answer:
          'Theoretisch ja, praktisch nein: Eine Kollision bei SHA-256 ist mit heutiger Technik nicht berechenbar, daher gelten unterschiedliche Dateien als unterschiedliche Hashes.',
      },
      {
        question: 'Kann ich eine Datei hashen, ohne sie hochzuladen?',
        answer:
          'Ja. Dieses Tool liest die Datei nur lokal in Ihrem Browser und berechnet den Hash auf Ihrem Gerät.',
      },
      {
        question: 'Was ist ein Subresource-Integrity-Hash und wie erstelle ich einen?',
        answer:
          'Ein SRI-Hash ist ein Base64-SHA-Hash, der in einem integrity-Attribut eines <script>- oder <link>-Tags steht und sicherstellt, dass die geladene Ressource unverändert ist. Wählen Sie die Base64-Ausgabe und kopieren Sie den Digest.',
      },
      {
        question: 'Warum erzeugt derselbe Text immer denselben Hash?',
        answer:
          'Weil Hashfunktionen deterministisch sind: Gleiche Eingabe ergibt immer gleiche Ausgabe, was Integritätsprüfungen erst möglich macht.',
      },
      {
        question: 'Ist SHA-1 noch sicher zu verwenden?',
        answer:
          'Nein, nicht für sicherheitskritische Zwecke. SHA-1 sollte nur noch für alte Kompatibilitätsprüfungen genutzt werden, nicht für Signaturen oder Passwörter.',
      },
      {
        question: 'Wie lang ist ein SHA-256-Hash in Hex-Zeichen?',
        answer:
          'Ein SHA-256-Hash hat 256 Bit und wird als 64 Hexadezimalzeichen dargestellt. Jedes Hex-Zeichen steht dabei für vier Bit, sodass der Hash immer exakt 64 Zeichen lang ist, egal wie lang der Eingabetext war.',
      },
      {
        question: 'Funktioniert der Hash-Generator offline?',
        answer:
          'Ja. Sobald die Seite geladen ist, läuft die Berechnung vollständig in Ihrem Browser ohne Netzwerkanfragen.',
      },
      {
        question: 'Kann ich Text mit Sonderzeichen oder Emojis hashen?',
        answer:
          'Ja. Der Text wird zuerst als UTF-8 kodiert, daher werden Umlaute, Emojis und Sonderzeichen korrekt gehasht.',
      },
      {
        question: 'Was ist der Unterschied zwischen einem Hash und Verschlüsselung?',
        answer:
          'Ein Hash ist eine Einwegfunktion ohne Schlüssel und nicht umkehrbar; Verschlüsselung ist mit dem richtigen Schlüssel umkehrbar und dient der Vertraulichkeit.',
      },
      {
        question: 'Kann ich den Hash-Generator nutzen, um ein Passwort zu prüfen?',
        answer:
          'Für einfache Vergleiche ja, aber für Passwörter in der Produktion sollten Sie spezielle Passwort-Hashing-Verfahren wie bcrypt oder Argon2 mit Salt verwenden, nicht reines SHA-256.',
      },
    ],
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
    instructions: [
      {
        title: 'Kodieren oder Dekodieren wählen',
        description:
          'Wählen Sie, ob Sie HTML escapen oder HTML-Entities zurück in Klartext dekodieren möchten.',
      },
      {
        title: 'HTML oder Text einfügen',
        description:
          'Fügen Sie Ihr HTML-Snippet oder Ihre escapete Zeichenkette in das Eingabefeld ein.',
      },
      {
        title: 'Nicht-ASCII-Kodierung umschalten',
        description:
          'Aktivieren Sie optional die Kodierung von Nicht-ASCII-Zeichen, um auch Umlaute und Symbole als numerische Entities auszugeben.',
      },
      {
        title: 'Umgewandelte Ausgabe prüfen',
        description:
          'Prüfen Sie die Ausgabe und achten Sie auf doppelt kodierte Entities wie &amp;amp;.',
      },
      {
        title: 'Kopieren oder tauschen',
        description:
          'Kopieren Sie das Ergebnis oder tauschen Sie Eingabe und Ausgabe, um die Richtung umzukehren.',
      },
      {
        title: 'Tipp: Fünf Zeichen immer escapen',
        description:
          'In HTML-Text und Attributen müssen immer & < > " und \' escapet werden, um Markup-Brüche und XSS zu vermeiden.',
      },
    ],
    examples: [
      {
        title: 'HTML-Snippet für Dokumentation escapen',
        input: '<div class="notice">5 < 10 & "café"</div>',
        output: '&lt;div class=&quot;notice&quot;&gt;5 &lt; 10 &amp; &quot;caf&#233;&quot;&lt;/div&gt;',
        explanation:
          'Reservierte Zeichen und Umlaute werden in benannte und numerische Entities umgewandelt.',
      },
      {
        title: 'Entities aus einer Webseite dekodieren',
        input: 'Tom &amp; Jerry &copy; 2026',
        output: 'Tom & Jerry © 2026',
        explanation:
          'Benannte Entities werden zurück in lesbare Zeichen dekodiert.',
      },
    ],
    benefits: [
      'Escapet alle fünf reservierten XML/HTML-Zeichen (&, <, >, ", \')',
      'Optionale numerische Entity-Kodierung für internationale Symbole und Satzzeichen',
      'Dekodiert sowohl benannte (&mdash;, &copy;) als auch numerische (&#8212;, &#x2014;) Entities',
      'Nutzt sichere DOMParser-Textextraktion beim Dekodieren',
    ],
    useCases: [
      'HTML-Codebeispiele für Blogartikel und Dokumentation vorbereiten',
      'HTML-kodierten Text aus RSS-Feeds oder XML-APIs bereinigen',
      'Attributwerte in statischen HTML-Vorlagen escapen',
      'Prüfen, wie Sonderzeichen in UTF-8- oder ASCII-Seiten sicher gerendert werden',
    ],
    faqs: [
      {
        question: 'Welche fünf Zeichen müssen in HTML-Text und Attributen immer escapet werden?',
        answer:
          'Die fünf Zeichen sind & (als &amp;), < (als &lt;), > (als &gt;), " (als &quot;) und \' (als &#39; oder &apos;).',
      },
      {
        question: 'Wann sollte ich die Nicht-ASCII-Kodierung deaktivieren?',
        answer:
          'Deaktivieren Sie sie, wenn Ihre Seite UTF-8 nutzt und Umlaute direkt lesbar bleiben sollen; aktivieren Sie sie für reine ASCII-Seiten oder alte Systeme.',
      },
      {
        question: 'Verarbeitet der Dekodierer hexadezimale Entities wie &#x27;?',
        answer:
          'Ja. Der Dekodierer verarbeitet benannte, dezimale (&#39;) und hexadezimale (&#x27;) Entities. Alle drei Schreibweisen werden zuverlässig zurück in das jeweilige Originalzeichen umgewandelt.',
      },
      {
        question: 'Was ist eine HTML-Entity?',
        answer:
          'Eine HTML-Entity ist eine Zeichenkette wie &amp; oder &#233;, die ein Zeichen darstellt, das in HTML sonst eine besondere Bedeutung hätte oder nicht direkt darstellbar ist.',
      },
      {
        question: 'Ist der HTML-Entity-Kodierer kostenlos?',
        answer:
          'Ja. Der HTML-Entity-Kodierer ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Kodieren und Dekodieren funktionieren unbegrenzt oft, komplett lokal in Ihrem Browser.',
      },
      {
        question: 'Warum muss ich HTML-Zeichen überhaupt escapen?',
        answer:
          'Weil Zeichen wie < und & vom Browser als Markup interpretiert werden; ohne Escaping bricht die Darstellung oder es entsteht eine XSS-Sicherheitslücke.',
      },
      {
        question: 'Was ist der Unterschied zwischen benannten und numerischen HTML-Entities?',
        answer:
          'Benannte Entities nutzen einen Namen wie &copy;, numerische nutzen den Unicode-Codepunkt wie &#169; oder &#xA9;; beide stellen dasselbe Zeichen dar.',
      },
      {
        question: 'Wann sollte ich Nicht-ASCII-Zeichen als Entities kodieren?',
        answer:
          'Wenn die Zielseite kein UTF-8 nutzt oder Sie sicherstellen möchten, dass Symbole auch in alten Systemen korrekt angezeigt werden.',
      },
      {
        question: 'Wie sieht doppelt kodiertes HTML aus?',
        answer:
          'Doppelt kodiert bedeutet, dass & selbst escapet wurde, zum Beispiel &amp;amp; statt &amp;; im Browser erscheint dann wörtlich „&amp;“ statt „&“.',
      },
      {
        question: 'Kann ich HTML-Entities aus gescrapten Webseiten dekodieren?',
        answer:
          'Ja. Fügen Sie den gescrapten Text ein, und der Dekodierer wandelt benannte und numerische Entities zurück in lesbare Zeichen um.',
      },
      {
        question: 'Verhindert das Kodieren von HTML-Entities XSS-Angriffe?',
        answer:
          'Es ist ein wichtiger Baustein: Das Escapen von Nutzerdaten verhindert, dass eingeschleuster Code als HTML ausgeführt wird, ersetzt aber keine serverseitige Validierung und Content-Security-Policy.',
      },
      {
        question: 'Was ist die HTML-Entity für ein geschütztes Leerzeichen?',
        answer:
          'Das geschützte Leerzeichen ist &nbsp; bzw. numerisch &#160;. Es verhindert einen Zeilenumbruch an dieser Stelle und hält zum Beispiel eine Zahl und ihre Einheit wie „10&nbsp;kg“ zusammen.',
      },
      {
        question: 'Wie escape ich Anführungszeichen innerhalb eines HTML-Attributs?',
        answer:
          'Nutzen Sie &quot; für doppelte Anführungszeichen in Attributen mit doppelten Anführungszeichen oder &#39; für einfache Anführungszeichen in Attributen mit einfachen Anführungszeichen.',
      },
      {
        question: 'Kann dieses Tool Emojis und andere Unicode-Symbole kodieren?',
        answer:
          'Ja. Mit aktivierter Nicht-ASCII-Kodierung werden Emojis und Symbole als numerische Entities wie &#128512; ausgegeben.',
      },
      {
        question: 'Was ist der Unterschied zwischen HTML-Escaping und URL-Kodierung?',
        answer:
          'HTML-Escaping macht Zeichen für HTML-Dokumente sicher (&lt; für <), während URL-Kodierung Zeichen für URLs sicher macht (%3C für <).',
      },
      {
        question: 'Verändert der Kodierer normale Buchstaben und Zahlen?',
        answer:
          'Nein. Normale Buchstaben, Ziffern und Leerzeichen bleiben unverändert; nur reservierte Zeichen und optional Nicht-ASCII-Zeichen werden kodiert.',
      },
      {
        question: 'Warum zeigt mein dekodierter Text seltsame Zeichen?',
        answer:
          'Wahrscheinlich wurde der Text doppelt kodiert oder mit einer anderen Zeichenkodierung als UTF-8 erzeugt; dekodieren Sie einmal mehr oder prüfen Sie die Quellkodierung.',
      },
      {
        question: 'Kann ich ein ganzes HTML-Dokument mit diesem Tool kodieren?',
        answer:
          'Ja, aber das ist selten sinnvoll: Ein komplett escapetes Dokument wird als Text angezeigt statt gerendert. Kodieren Sie in der Regel nur Ausschnitte.',
      },
      {
        question: 'Wird mein eingefügtes HTML an einen Server gesendet?',
        answer:
          'Nein. Kodieren und Dekodieren laufen lokal in Ihrem Browser, und Ihr HTML wird niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Was ist die HTML-Entity für das Kaufmännische Und?',
        answer:
          'Das Kaufmännische Und (&) ist &amp; bzw. numerisch &#38;. Im HTML-Quelltext müssen Sie es immer als Entity schreiben, weil ein rohes & sonst als Beginn einer anderen Entity interpretiert werden könnte.',
      },
    ],
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
    instructions: [
      {
        title: 'Umwandlungsrichtung wählen',
        description:
          'Wählen Sie „JSON zu CSV“ oder „CSV zu JSON“, je nachdem, welche Daten Sie vorliegen haben.',
      },
      {
        title: 'JSON- oder CSV-Daten einfügen',
        description:
          'Fügen Sie Ihr JSON-Array oder Ihre CSV-/TSV-Daten in das Eingabefeld ein.',
      },
      {
        title: 'Spaltenüberschriften prüfen',
        description:
          'Prüfen Sie die erkannten Spaltenüberschriften; bei JSON mit unterschiedlichen Schlüsseln werden alle Schlüssel zu Spalten.',
      },
      {
        title: 'Daten umwandeln',
        description:
          'Klicken Sie auf „Umwandeln“, um die Ausgabe zu erzeugen; der Parser behandelt zitierte Kommas und eingebettete Zeilenumbrüche korrekt.',
      },
      {
        title: 'Ergebnis kopieren oder herunterladen',
        description:
          'Kopieren Sie das Ergebnis oder laden Sie es als .csv- bzw. .json-Datei herunter.',
      },
      {
        title: 'Tipp: Semikolon-Trennzeichen für Excel',
        description:
          'Wenn Excel Ihre CSV in einer einzigen Spalte öffnet, wählen Sie das Semikolon als Trennzeichen – europäische Excel-Versionen erwarten es.',
      },
    ],
    examples: [
      {
        title: 'Kommas innerhalb von CSV-Werten behandeln',
        input: '[{"id": 102, "name": "Marcus, Jr.", "role": "Designer"}]',
        output: 'id,name,role\n102,"Marcus, Jr.",Designer',
        explanation:
          'Werte mit Kommas werden korrekt in Anführungszeichen gesetzt, damit die CSV-Struktur erhalten bleibt.',
      },
      {
        title: 'CSV zurück in JSON umwandeln',
        input: 'id,name\n1,Anna\n2,Ben',
        output: '[{"id": "1", "name": "Anna"}, {"id": "2", "name": "Ben"}]',
        explanation:
          'CSV-Zeilen werden mit der ersten Zeile als Schlüssel in ein JSON-Array umgewandelt.',
      },
    ],
    benefits: [
      'Bidirektionale JSON-↔-CSV-Umwandlung in einem Arbeitsbereich',
      'Flacht verschachtelte JSON-Objekte mit Punktnotation-Spaltenüberschriften ab',
      'Korrekter RFC-4180-Parser erhält zitierte Kommas und eingebettete Zeilenumbrüche',
      'Unterstützt Komma-, Semikolon- (europäisches Excel) und Tab-Trennzeichen',
    ],
    useCases: [
      'REST-API-JSON-Listen nach Excel oder Google Sheets exportieren',
      'Tabellendaten-Exporte in JSON-Seed-Dateien für Web-Apps umwandeln',
      'TSV-Datensätze für Data-Science- oder SQL-Imports vorbereiten',
      'Semikolon-getrennte CSV-Exporte sauber prüfen',
    ],
    faqs: [
      {
        question: 'Wie behandelt JSON zu CSV Objekte mit verschachtelten Eigenschaften?',
        answer:
          'Verschachtelte Objekte werden mit Punktnotation abgeflacht, zum Beispiel wird address.city zu einer Spalte „address.city“.',
      },
      {
        question: 'Was passiert, wenn verschiedene JSON-Objekte leicht unterschiedliche Schlüssel haben?',
        answer:
          'Alle vorkommenden Schlüssel werden zu Spalten; Objekte ohne einen bestimmten Schlüssel erhalten in dieser Spalte einen leeren Wert.',
      },
      {
        question: 'Bricht der CSV-Parser, wenn eine Zelle ein Komma in Anführungszeichen enthält?',
        answer:
          'Nein. Der RFC-4180-Parser behandelt zitierte Kommas korrekt und teilt die Zelle nicht.',
      },
      {
        question: 'Wozu wird der JSON-zu-CSV-Konverter verwendet?',
        answer:
          'Er wandelt API-JSON-Daten in Tabellen um, die sich in Excel öffnen lassen, und umgekehrt Tabellen in JSON für Web-Apps und Datenbanken.',
      },
      {
        question: 'Ist der JSON-zu-CSV-Konverter kostenlos?',
        answer:
          'Ja. Der JSON-zu-CSV-Konverter ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig große JSON-Daten umwandeln und die fertige CSV sofort herunterladen.',
      },
      {
        question: 'Kann ich ein einzelnes JSON-Objekt statt eines Arrays umwandeln?',
        answer:
          'Ja. Ein einzelnes Objekt wird als einzeilige Tabelle mit seinen Schlüsseln als Spaltenüberschriften behandelt.',
      },
      {
        question: 'Wie werden JSON-Arrays innerhalb von Objekten in CSV umgewandelt?',
        answer:
          'Arrays werden als JSON-Zeichenkette in einer einzigen Zelle dargestellt, damit keine Daten verloren gehen.',
      },
      {
        question: 'Welches Trennzeichen sollte ich für meine CSV-Datei wählen?',
        answer:
          'Komma ist der Standard; Semikolon passt zu europäischem Excel, und Tab eignet sich für TSV-Dateien oder Daten mit vielen Kommas.',
      },
      {
        question: 'Behält der Konverter Zahlen und boolesche Werte korrekt?',
        answer:
          'Ja. Zahlen und boolesche Werte werden als solche in JSON übernommen; in CSV stehen sie als unzitierte Werte, sofern sie keine Sonderzeichen enthalten.',
      },
      {
        question: 'Was passiert mit leeren oder null-Werten bei JSON zu CSV?',
        answer:
          'Leere oder null-Werte werden als leere Zellen in der CSV ausgegeben. So bleibt die Spaltenstruktur Ihrer Tabelle erhalten und die Datei lässt sich in Excel oder Google Tabellen problemlos weiterverarbeiten.',
      },
      {
        question: 'Kann ich CSV mit diesem Tool zurück in JSON umwandeln?',
        answer:
          'Ja. Wählen Sie die Richtung „CSV zu JSON“, und die erste Zeile wird als Schlüssel für die JSON-Objekte verwendet.',
      },
      {
        question: 'Warum öffnet sich meine CSV in Excel mit allen Daten in einer Spalte?',
        answer:
          'Excel erwartet je nach Gebietsschema ein anderes Trennzeichen. Wählen Sie Semikolon als Trennzeichen oder nutzen Sie den Datenimport-Assistenten von Excel.',
      },
      {
        question: 'Verarbeitet der JSON-zu-CSV-Konverter große Dateien?',
        answer:
          'Ja. Die Umwandlung läuft vollständig in Ihrem Browser, daher werden auch große Datensätze ohne Server-Upload verarbeitet.',
      },
      {
        question: 'Werden meine JSON- oder CSV-Daten an einen Server gesendet?',
        answer:
          'Nein. Die gesamte Umwandlung erfolgt lokal in Ihrem Browser, und Ihre Daten werden niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Was ist RFC 4180 und warum ist es für CSV wichtig?',
        answer:
          'RFC 4180 ist der Standard für das CSV-Format: Er legt fest, wie Kommas, Anführungszeichen und Zeilenumbrüche in Zellen zu behandeln sind, damit Dateien in allen Programmen gleich gelesen werden.',
      },
      {
        question: 'Kann ich TSV-Dateien in JSON umwandeln?',
        answer:
          'Ja. Wählen Sie Tab als Trennzeichen, und TSV-Dateien werden wie CSV mit Tab-Trennzeichen geparst.',
      },
      {
        question: 'Warum ist meine JSON-zu-CSV-Umwandlung fehlgeschlagen?',
        answer:
          'Häufige Ursachen sind ungültiges JSON, ein Objekt statt eines Arrays ohne erkennbare Struktur oder ein fehlendes schließendes Zeichen; prüfen Sie die Eingabe mit dem JSON-Formatierer.',
      },
      {
        question: 'Wie exportiere ich API-JSON-Daten nach Excel?',
        answer:
          'Fügen Sie das JSON-Array ein, wandeln Sie es in CSV um und laden Sie die .csv-Datei herunter; Excel öffnet sie direkt.',
      },
      {
        question: 'Behält der Konverter die ursprüngliche Reihenfolge meiner JSON-Schlüssel?',
        answer:
          'Ja. Die Spaltenreihenfolge folgt der Reihenfolge, in der die Schlüssel im ersten Objekt vorkommen.',
      },
      {
        question: 'Kann ich die umgewandelte Datei herunterladen, statt sie zu kopieren?',
        answer:
          'Ja. Nutzen Sie die Herunterladen-Schaltfläche, um das Ergebnis als .csv- oder .json-Datei zu speichern.',
      },
    ],
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
    instructions: [
      {
        title: 'Aktuelle Unix-Zeit ansehen oder kopieren',
        description:
          'Die Live-Uhr oben zeigt den aktuellen Unix-Zeitstempel in Sekunden; kopieren Sie ihn mit einem Klick.',
      },
      {
        title: 'Unix-Zeitstempel → menschenlesbares Datum umwandeln',
        description:
          'Geben Sie einen Zeitstempel ein und wählen Sie Sekunden, Millisekunden oder Auto-Erkennung.',
      },
      {
        title: 'ISO-, UTC- und lokale Formate prüfen',
        description:
          'Lesen Sie die Ergebnisse als ISO 8601, UTC, RFC 2822 und Ortszeit sowie den relativen Abstand („vor 2 Stunden“).',
      },
      {
        title: 'Lokales Datum & Uhrzeit → Unix-Zeitstempel umwandeln',
        description:
          'Wählen Sie ein Datum und eine Uhrzeit im Datumsauswahlfeld, um den entsprechenden Epochen-Zeitstempel zu erhalten.',
      },
      {
        title: 'Benötigten Zeitstempel kopieren',
        description:
          'Kopieren Sie den Zeitstempel in Sekunden oder Millisekunden, je nachdem, was Ihre Datenbank oder API erwartet.',
      },
      {
        title: 'Tipp: Sekunden vs. Millisekunden',
        description:
          'Ein Zeitstempel mit 10 Stellen sind Sekunden, mit 13 Stellen Millisekunden; die Auto-Erkennung unterscheidet sie anhand der Länge.',
      },
    ],
    examples: [
      {
        title: 'Sekunden vs. Millisekunden erkennen',
        input: '1794544800',
        output: '2026-11-13T04:40:00.000Z (Sekunden)',
        explanation:
          'Die Auto-Erkennung erkennt anhand der Stellenanzahl, dass es sich um Sekunden handelt.',
      },
      {
        title: 'Datum in Unix-Zeitstempel umwandeln',
        input: '2026-11-13 04:40:00 (Ortszeit)',
        output: '1794544800 (Sekunden) · 1794544800000 (Millisekunden)',
        explanation:
          'Ein Kalenderdatum wird in beide Epochen-Formate umgewandelt.',
      },
    ],
    benefits: [
      'Live tickende Unix-Uhr, synchronisiert mit Ihrer Systemzeit',
      'Automatische Sekunden-vs.-Millisekunden-Erkennung mit manueller Überschreibung',
      'Gibt ISO 8601, Ortszeit, RFC-2822-GMT und relative Zeit gemeinsam aus',
      'Enthält einen bidirektionalen Datumsauswahl-zu-Unix-Sekunden/ms-Konverter',
    ],
    useCases: [
      'JWT-iat-/exp-Claims und API-created_at-Zeitstempel prüfen',
      'Ganzzahl-Zeitstempel in PostgreSQL- oder SQLite-Datenbanken debuggen',
      'Zukünftige Epochen-Zeitstempel für Cache-TTLs oder Tests erzeugen',
      'Epochen-Markierungen in Protokolldateien in lokale lesbare Zeiten umwandeln',
    ],
    faqs: [
      {
        question: 'Wie unterscheidet der Auto-Modus Sekunden von Millisekunden?',
        answer:
          'Anhand der Stellenanzahl: Ein Zeitstempel mit etwa 10 Stellen sind Sekunden, mit etwa 13 Stellen Millisekunden. Sie können die Einheit auch manuell festlegen.',
      },
      {
        question: 'Ist die Unix-Zeit von Zeitzonen betroffen?',
        answer:
          'Nein. Die Unix-Zeit zählt Sekunden seit dem 1. Januar 1970 UTC und ist zeitzonenunabhängig; nur die Anzeige wird in Ihre Ortszeit umgerechnet.',
      },
      {
        question: 'Kann ich Zeitstempel vor 1970 umwandeln?',
        answer:
          'Ja. Negative Zeitstempel stehen für Daten vor dem 1. Januar 1970 und werden korrekt in ein Datum umgerechnet.',
      },
      {
        question: 'Was ist ein Unix-Zeitstempel?',
        answer:
          'Ein Unix-Zeitstempel ist die Anzahl der Sekunden (oder Millisekunden) seit dem 1. Januar 1970, 00:00:00 UTC – dem sogenannten Epochen-Start.',
      },
      {
        question: 'Ist der Unix-Zeitstempel-Konverter kostenlos?',
        answer:
          'Ja. Der Unix-Zeitstempel-Konverter ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig viele Zeitstempel in beide Richtungen umrechnen, ohne sich anzumelden.',
      },
      {
        question: 'Was ist der Unterschied zwischen Unix-Sekunden und Millisekunden?',
        answer:
          'Sekunden sind die klassische Unix-Zeit mit 10 Stellen, Millisekunden sind Sekunden mal 1.000 mit 13 Stellen und werden von JavaScript (Date.now()) und vielen APIs verwendet.',
      },
      {
        question: 'Was ist der aktuelle Unix-Zeitstempel gerade jetzt?',
        answer:
          'Die Live-Uhr oben auf der Seite zeigt den aktuellen Unix-Zeitstempel in Sekunden an und tickt jede Sekunde weiter.',
      },
      {
        question: 'Wie wandle ich einen Unix-Zeitstempel in ein lesbares Datum um?',
        answer:
          'Geben Sie den Zeitstempel ein, wählen Sie Sekunden oder Millisekunden, und das Tool zeigt ISO 8601, UTC und Ortszeit an.',
      },
      {
        question: 'Wie wandle ich ein Datum in einen Unix-Zeitstempel um?',
        answer:
          'Wählen Sie Datum und Uhrzeit im Datumsauswahlfeld, und das Tool berechnet den entsprechenden Epochen-Zeitstempel in Sekunden und Millisekunden.',
      },
      {
        question: 'Warum zeigt mein Zeitstempel ein Datum im Jahr 1970?',
        answer:
          'Wahrscheinlich haben Sie Millisekunden als Sekunden interpretiert: Teilen Sie den Wert durch 1.000 oder wählen Sie den Millisekunden-Modus.',
      },
      {
        question: 'Warum zeigt mein Zeitstempel ein Datum im Jahr 5000?',
        answer:
          'Wahrscheinlich haben Sie Sekunden als Millisekunden interpretiert: Multiplizieren Sie den Wert mit 1.000 oder wählen Sie den Sekunden-Modus.',
      },
      {
        question: 'Was ist das ISO-8601-Format für einen Unix-Zeitstempel?',
        answer:
          'ISO 8601 schreibt Daten als 2026-11-13T04:40:00.000Z, wobei das Z für UTC steht.',
      },
      {
        question: 'Enthalten Unix-Zeitstempel Schaltsekunden?',
        answer:
          'Nein. Die Unix-Zeit ignoriert Schaltsekunden; jeder Tag hat per Definition exakt 86.400 Sekunden.',
      },
      {
        question: 'Kann ich Unix-Zeitstempel für zukünftige Daten nutzen?',
        answer:
          'Ja. Geben Sie ein zukünftiges Datum im Datumsauswahlfeld ein, um den entsprechenden Zeitstempel zu erhalten, zum Beispiel für Cache-TTLs.',
      },
      {
        question: 'Was ist der maximale Unix-Zeitstempel?',
        answer:
          'Bei 32-Bit-Systemen endet die Sekunden-Zählung am 19. Januar 2038 (2.147.483.647); 64-Bit-Systeme und Millisekunden reichen weit darüber hinaus.',
      },
      {
        question: 'Wie prüfe ich einen JWT-Ablauf-Zeitstempel mit diesem Konverter?',
        answer:
          'Kopieren Sie den exp-Wert aus der JWT-Payload und fügen Sie ihn hier ein, um das Ablaufdatum als lesbares Datum zu sehen.',
      },
      {
        question: 'Funktioniert der Unix-Zeitstempel-Konverter offline?',
        answer:
          'Ja. Sobald die Seite geladen ist, läuft die Umwandlung vollständig in Ihrem Browser ohne Netzwerkanfragen.',
      },
      {
        question: 'Was ist der Unterschied zwischen UTC und Ortszeit in den Ergebnissen?',
        answer:
          'UTC ist die weltweite Referenzzeit ohne Zeitzonenverschiebung; die Ortszeit ist dieselbe Zeit, umgerechnet in die Zeitzone Ihres Geräts.',
      },
      {
        question: 'Kann ich einen Unix-Zeitstempel aus einer Datenbank oder Protokolldatei umwandeln?',
        answer:
          'Ja. Kopieren Sie den ganzzahligen Zeitstempel aus Ihrer Datenbank oder Protokolldatei und fügen Sie ihn hier ein.',
      },
      {
        question: 'Werden meine Zeitstempeldaten an einen Server gesendet?',
        answer:
          'Nein. Die gesamte Umwandlung erfolgt lokal in Ihrem Browser, und Ihre Daten werden niemals gesendet, gespeichert oder geteilt.',
      },
    ],
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
    instructions: [
      {
        title: 'SQL-Abfrage einfügen',
        description:
          'Fügen Sie Ihre SQL-Abfrage in das Eingabefeld ein, egal ob einzeilig oder bereits formatiert.',
      },
      {
        title: 'Verschönern- oder Minimieren-Modus wählen',
        description:
          'Wählen Sie „Verschönern“, um die Abfrage lesbar zu strukturieren, oder „Minimieren“, um sie auf eine einzige Zeile zu komprimieren.',
      },
      {
        title: 'Schlüsselwort-Großschreibung und Einrückung festlegen',
        description:
          'Wählen Sie, ob Schlüsselwörter groß oder klein geschrieben werden sollen, und ob mit 2 oder 4 Leerzeichen eingerückt wird.',
      },
      {
        title: 'Formatierte Ausgabe prüfen',
        description:
          'Prüfen Sie die Ausgabe und vergewissern Sie sich, dass Klauseln, Joins und Bedingungen korrekt getrennt sind.',
      },
      {
        title: 'Formatiertes SQL kopieren oder wiederverwenden',
        description:
          'Kopieren Sie das formatierte SQL mit einem Klick und fügen Sie es in Ihren Editor, Ihr Ticket oder Ihr Skript ein.',
      },
      {
        title: 'Tipp: Team-Stil standardisieren',
        description:
          'Einigen Sie sich im Team auf eine Schlüsselwort-Großschreibung und Einrückung und formatieren Sie alle Skripte vor Pull-Request-Reviews einheitlich.',
      },
    ],
    examples: [
      {
        title: 'Abfrage mit mehreren Joins formatieren',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation:
          'Teilt eine einzeilige Abfrage in lesbare Klauselzeilen mit Großschreibung der Schlüsselwörter auf.',
      },
      {
        title: 'Abfrage für ein Skript minimieren',
        input: 'SELECT id\nFROM users\nWHERE active = 1;',
        output: 'SELECT id FROM users WHERE active = 1;',
        explanation:
          'Komprimiert eine mehrzeilige Abfrage zu einer einzigen Zeile für CLI-Skripte oder Logs.',
      },
    ],
    benefits: [
      'Bewahrt String-Literale in einfachen Anführungszeichen und SQL-Kommentare unberührt',
      'Unterstützt mehrwortige Klauseln wie LEFT OUTER JOIN, GROUP BY und ORDER BY',
      'Wechselt mühelos zwischen Verschönern- und Minimieren-Modus',
      'Läuft lokal, sodass proprietäre Tabellen- und Schemanamen privat bleiben',
    ],
    useCases: [
      'ORM-generierte SQL-Logs für Performance-Debugging bereinigen',
      'SQL-Skripte vor Pull-Request-Reviews standardisieren',
      'Mehrzeilige Abfragen zu einzeiligen Zeichenketten für CLI-Skripte komprimieren',
      'Schlüsselwort-Großschreibung über Team-SQL-Styleguides hinweg angleichen',
    ],
    faqs: [
      {
        question: 'Verändert der SQL-Formatierer Tabellennamen oder Text in Anführungszeichen?',
        answer:
          'Nein. String-Literale in einfachen Anführungszeichen, Bezeichner und Kommentare werden unberührt gelassen; nur Schlüsselwörter und Leerzeichen werden angepasst.',
      },
      {
        question: 'Welche SQL-Dialekte werden unterstützt?',
        answer:
          'Der Formatierer arbeitet dialektübergreifend mit Standard-SQL und gängiger MySQL-, PostgreSQL- und SQL-Server-Syntax; dialektspezifische Eigenheiten werden als Text belassen.',
      },
      {
        question: 'Kann ich eine formatierte Abfrage wieder auf eine Zeile minimieren?',
        answer:
          'Ja. Wechseln Sie in den Minimieren-Modus, um jede formatierte Abfrage zu einer einzigen Zeile zu komprimieren.',
      },
      {
        question: 'Ist der SQL-Formatierer kostenlos?',
        answer:
          'Ja. Der SQL-Formatierer ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Auch lange Abfragen mit mehreren Klauseln lassen sich ohne jede Begrenzung formatieren.',
      },
      {
        question: 'Sendet der SQL-Formatierer meine Abfragen an einen Server?',
        answer:
          'Nein. Die gesamte Formatierung erfolgt lokal in Ihrem Browser, und Ihre Abfragen werden niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Kann ich SQL mit Unterabfragen und CTEs formatieren?',
        answer:
          'Ja. Unterabfragen und CTEs (WITH-Klauseln) werden eingerückt und strukturiert, wobei ihre innere Logik erhalten bleibt.',
      },
      {
        question: 'Verarbeitet der SQL-Formatierer INSERT-, UPDATE- und DELETE-Anweisungen?',
        answer:
          'Ja. Neben SELECT werden auch INSERT, UPDATE und DELETE sowie DDL-Anweisungen wie CREATE TABLE formatiert.',
      },
      {
        question: 'Kann ich DDL-Anweisungen wie CREATE TABLE formatieren?',
        answer:
          'Ja. CREATE-TABLE- und andere DDL-Anweisungen werden mit Klauselumbrüchen und Einrückung strukturiert. So bleiben auch komplexe Tabellendefinitionen mit vielen Spalten gut lesbar.',
      },
      {
        question: 'Welche Einrückungsoptionen bietet der SQL-Formatierer?',
        answer:
          'Sie können mit 2 oder 4 Leerzeichen einrücken, damit die Ausgabe zum Stil Ihrer Codebasis passt.',
      },
      {
        question: 'Verändert die Formatierung, was meine SQL-Abfrage bewirkt?',
        answer:
          'Nein. Die Formatierung ändert nur Leerzeichen und Großschreibung von Schlüsselwörtern; die Logik, Tabellen und Bedingungen bleiben exakt gleich.',
      },
      {
        question: 'Kann ich mehrere SQL-Abfragen auf einmal formatieren?',
        answer:
          'Ja. Fügen Sie mehrere durch Semikolon getrennte Anweisungen ein; sie werden nacheinander formatiert.',
      },
      {
        question: 'Funktioniert der SQL-Formatierer mit MySQL-, PostgreSQL- und SQL-Server-Syntax?',
        answer:
          'Ja. Die gängige Syntax dieser Dialekte wird unterstützt; sehr spezielle Dialektfunktionen werden als Text belassen und nicht verändert.',
      },
      {
        question: 'Bleiben Kommentare in meinem SQL beim Formatieren erhalten?',
        answer:
          'Ja. Zeilen- und Blockkommentare werden bewahrt und an ihrer Position in der formatierten Ausgabe belassen.',
      },
      {
        question: 'Was passiert, wenn mein SQL einen Syntaxfehler hat?',
        answer:
          'Der Formatierer arbeitet auf Textebene und formatiert auch fehlerhaftes SQL bestmöglich; er validiert die Syntax nicht und meldet keinen Fehler.',
      },
      {
        question: 'Kann ich SQL für die Verwendung in Anwendungscode oder Logs minimieren?',
        answer:
          'Ja. Der Minimieren-Modus erzeugt eine einzeilige Abfrage, die sich gut in Code-Zeichenketten oder Logs einbetten lässt.',
      },
      {
        question: 'Unterstützt der SQL-Formatierer Fensterfunktionen?',
        answer:
          'Ja. Fensterfunktionen wie ROW_NUMBER() OVER (...) werden formatiert, wobei ihre PARTITION-BY- und ORDER-BY-Klauseln erhalten bleiben.',
      },
      {
        question: 'Gibt es ein Größenlimit für das SQL, das ich formatieren kann?',
        answer:
          'Es gibt kein festes Limit. Die Formatierung läuft vollständig in Ihrem Browser, daher werden auch lange Skripte sofort verarbeitet.',
      },
      {
        question: 'Kann ich den SQL-Formatierer auf dem Handy nutzen?',
        answer:
          'Ja. Er funktioniert in jedem modernen mobilen Browser mit denselben Formatierungsoptionen. Die Oberfläche passt sich dem kleinen Bildschirm an, sodass Sie auch unterwegs Abfragen formatieren können.',
      },
      {
        question: 'Behält der SQL-Formatierer Zeilenumbrüche innerhalb von String-Literalen?',
        answer:
          'Ja. Zeilenumbrüche innerhalb von Zeichenketten in Anführungszeichen werden nicht verändert. Der Formatierer erkennt String-Literale und fasst ihren Inhalt nicht an, damit Ihre Abfrage weiterhin exakt denselben Text liefert.',
      },
      {
        question: 'Wie kann ich die Schlüsselwort-Großschreibung in meinem Team mit dem SQL-Formatierer standardisieren?',
        answer:
          'Einigen Sie sich auf Groß- oder Kleinschreibung und formatieren Sie alle Skripte vor dem Commit mit derselben Einstellung.',
      },
    ],
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
    instructions: [
      {
        title: 'Minimieren oder Verschönern wählen',
        description:
          'Wählen Sie „Minimieren“, um CSS zu komprimieren, oder „Verschönern“, um minimiertes CSS lesbar zu machen.',
      },
      {
        title: 'Stylesheet einfügen',
        description:
          'Fügen Sie Ihr CSS in das Eingabefeld ein, egal ob ein Stylesheet oder ein Inline-<style>-Ausschnitt.',
      },
      {
        title: 'Tool ausführen und Statistiken prüfen',
        description:
          'Prüfen Sie Eingabe-Bytes, Ausgabe-Bytes und den gesparten Prozentsatz nach der Umwandlung.',
      },
      {
        title: 'Ausgabe sorgfältig prüfen',
        description:
          'Kontrollieren Sie, ob Selektoren, Media-Queries und Zeichenketten wie content: "..." korrekt erhalten sind.',
      },
      {
        title: 'CSS kopieren oder herunterladen',
        description:
          'Kopieren Sie das Ergebnis oder laden Sie es als .css-Datei herunter.',
      },
      {
        title: 'Tipp: Vor dem Deployment prüfen',
        description:
          'Minimieren Sie vor jedem Deployment und vergleichen Sie die Byte-Ersparnis, um die Ladezeit Ihrer Seite zu verbessern.',
      },
    ],
    examples: [
      {
        title: 'Kartenregel komprimieren',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation:
          'Entfernt Leerzeichen und das letzte Semikolon vor der schließenden Klammer.',
      },
      {
        title: 'Minimiertes CSS verschönern',
        input: '.card{padding:16px;margin:0}',
        output: '.card {\n  padding: 16px;\n  margin: 0;\n}',
        explanation:
          'Erweitert einzeiliges CSS in lesbare, eingerückte Regeln zurück.',
      },
    ],
    benefits: [
      'Tokenizer bewahrt zitierte Zeichenketten (wie content: "..." oder url(...))',
      'Entfernt /* ... */-Kommentare und unnötige Leerzeichen sicher',
      'Zeigt exakte Eingabe-Bytes, Ausgabe-Bytes und gesparten Prozentsatz',
      'Enthält einen Verschönern-Modus, um minimiertes CSS Dritter zu prüfen',
    ],
    useCases: [
      'Inline-<style>-Ausschnitte für HTML-E-Mails und Landingpages komprimieren',
      'Produktions-CSS-Bundles beim visuellen Debugging entminifizieren',
      'Stylesheet-Gewichtseinsparungen vor dem Deployment prüfen',
      'Abstandsinkonsistenzen in alten Stylesheets bereinigen',
    ],
    faqs: [
      {
        question: 'Bricht die CSS-Minifizierung Leerzeichen innerhalb von content: "..."-Zeichenketten?',
        answer:
          'Nein. Der Tokenizer erkennt zitierte Zeichenketten und lässt Leerzeichen darin unberührt. Nur überflüssige Leerzeichen außerhalb von Zeichenketten werden entfernt, sodass Ihre content-Werte exakt so bleiben, wie Sie sie geschrieben haben.',
      },
      {
        question: 'Warum entfernt Minimieren das letzte Semikolon vor „}“?',
        answer:
          'Weil das letzte Semikolon vor einer schließenden Klammer in CSS optional ist; das Entfernen spart ein Byte, ohne die Regel zu verändern.',
      },
      {
        question: 'Unterstützt es verschachtelte @media-Blöcke im Verschönern-Modus?',
        answer:
          'Ja. Verschachtelte @media-Blöcke und andere At-Regeln werden mit korrekter Einrückung erweitert. So bleibt auch modernes, verschachteltes CSS nach dem Verschönern sauber strukturiert und leicht lesbar.',
      },
      {
        question: 'Ist der CSS-Minifier kostenlos?',
        answer:
          'Ja. Der CSS-Minifier ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig große Stylesheets minimieren oder verschönern, ohne dass eine Datei Ihren Browser verlässt.',
      },
      {
        question: 'Lädt der CSS-Minifier mein Stylesheet irgendwo hoch?',
        answer:
          'Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, und Ihr Stylesheet wird niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Wie viel kleiner wird mein CSS nach dem Minimieren?',
        answer:
          'Typisch sind 10 bis 30 Prozent, je nach Kommentar- und Leerzeichenanteil; das Tool zeigt die exakte Ersparnis in Bytes und Prozent an.',
      },
      {
        question: 'Entfernt die CSS-Minifizierung @media-Queries?',
        answer:
          'Nein. Media-Queries bleiben vollständig erhalten; nur Kommentare und überflüssige Leerzeichen werden entfernt.',
      },
      {
        question: 'Kann ich CSS mit benutzerdefinierten Eigenschaften (Variablen) minimieren?',
        answer:
          'Ja. CSS-Variablen wie --primary-color und var(--primary-color) werden korrekt behandelt und nicht verändert.',
      },
      {
        question: 'Behält der CSS-Minifier url(...) und content-Zeichenketten?',
        answer:
          'Ja. URLs und Zeichenketten in Anführungszeichen werden vom Tokenizer geschützt und bleiben exakt erhalten.',
      },
      {
        question: 'Funktioniert minimiertes CSS weiterhin in allen Browsern?',
        answer:
          'Ja. Das Minimieren entfernt nur Leerzeichen und Kommentare; die CSS-Regeln selbst bleiben unverändert und funktionieren in allen Browsern.',
      },
      {
        question: 'Kann ich CSS aus einem Produktions-Bundle verschönern?',
        answer:
          'Ja. Fügen Sie das minimierte CSS ein und wählen Sie „Verschönern“, um lesbare, eingerückte Regeln zu erhalten.',
      },
      {
        question: 'Verarbeitet der CSS-Minifier @keyframes und @font-face?',
        answer:
          'Ja. @keyframes- und @font-face-Blöcke werden korrekt minimiert und verschönert. Animationen und eingebettete Schriften bleiben dabei voll funktionsfähig, weil der Minifier ihre innere Struktur respektiert.',
      },
      {
        question: 'Was ist der Unterschied zwischen Minimieren und Verschönern im CSS-Minifier?',
        answer:
          'Minimieren komprimiert CSS auf eine Zeile für kleinere Dateien, Verschönern erweitert komprimiertes CSS in lesbare, eingerückte Regeln.',
      },
      {
        question: 'Kann ich mehrere Stylesheets auf einmal minimieren?',
        answer:
          'Nein, nur eines pro Durchgang; fügen Sie Stylesheets nacheinander ein oder kombinieren Sie sie vorher zu einer Datei.',
      },
      {
        question: 'Entfernt der CSS-Minifier ungenutzte CSS-Regeln?',
        answer:
          'Nein. Das Tool entfernt nur Kommentare und Leerzeichen; das Erkennen ungenutzter Regeln erfordert eine Analyse Ihrer HTML-Dateien.',
      },
      {
        question: 'Ist der angezeigte Byte-Ersparnis-Prozentsatz des CSS-Minifiers exakt?',
        answer:
          'Ja. Er wird aus den exakten Eingabe- und Ausgabe-Bytegrößen berechnet. Die Anzeige vergleicht die tatsächliche Bytezahl vor und nach der Minifizierung, nicht eine Schätzung.',
      },
      {
        question: 'Kann ich den CSS-Minifier für Inline-<style>-Ausschnitte nutzen?',
        answer:
          'Ja. Fügen Sie den Inhalt des <style>-Tags ohne die Tags selbst ein.',
      },
      {
        question: 'Unterstützt der CSS-Minifier modernes CSS wie Grid und Nesting?',
        answer:
          'Ja. Grid-Eigenschaften und verschachtelte Regeln werden unterstützt und korrekt verarbeitet. Auch Container-Queries und andere neue CSS-Funktionen überstehen die Minifizierung ohne Veränderung ihrer Bedeutung.',
      },
      {
        question: 'Was passiert, wenn mein CSS einen Syntaxfehler hat?',
        answer:
          'Der Minifier arbeitet auf Token-Ebene und verarbeitet auch fehlerhaftes CSS bestmöglich; er validiert die Syntax nicht.',
      },
      {
        question: 'Kann ich CSS auf dem Handy minimieren?',
        answer:
          'Ja. Der CSS-Minifier funktioniert in jedem modernen mobilen Browser. Die Oberfläche ist für kleine Bildschirme optimiert, sodass Sie Stylesheets auch unterwegs minimieren oder verschönern können.',
      },
    ],
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
    instructions: [
      {
        title: 'JS minimieren oder verschönern wählen',
        description:
          'Wählen Sie „JS minimieren“, um Code zu komprimieren, oder „JS verschönern“, um kompakten Code lesbar zu machen.',
      },
      {
        title: 'Code-Ausschnitt einfügen',
        description:
          'Fügen Sie Ihr JavaScript oder TypeScript in das Eingabefeld ein.',
      },
      {
        title: 'Einrückung für den Verschönern-Modus festlegen',
        description:
          'Wählen Sie 2 oder 4 Leerzeichen als Einrückung für die verschönerte Ausgabe.',
      },
      {
        title: 'Byte-Ersparnis und Ausgabe prüfen',
        description:
          'Prüfen Sie die Live-Byte-Reduktion in Prozent und kontrollieren Sie die Ausgabe auf erhaltene Zeichenketten und Template-Literale.',
      },
      {
        title: 'Verarbeiteten Code kopieren',
        description:
          'Kopieren Sie das Ergebnis mit einem Klick in Ihre Zwischenablage.',
      },
      {
        title: 'Tipp: Für Bookmarklets minimieren',
        description:
          'Minimierter Code eignet sich ideal für Bookmarklets und Inline-Skripte, bei denen jedes Byte zählt.',
      },
    ],
    examples: [
      {
        title: 'Kommentare und Leerzeichen entfernen',
        input: '// Helfer\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation:
          'Entfernt Kommentare und überflüssige Leerzeichen, ohne die Logik zu verändern.',
      },
      {
        title: 'Komprimierten Code verschönern',
        input: 'function add(a,b){return a + b}',
        output: 'function add(a, b) {\n  return a + b;\n}',
        explanation:
          'Rückt einzeiligen Code mit 2-Leerzeichen-Einrückung lesbar neu ein.',
      },
    ],
    benefits: [
      'Lexikalischer Tokenizer schützt einfache, doppelte und Backtick-Template-Zeichenketten',
      'Entfernt im Minimieren-Modus sowohl //-Einzeilen- als auch /* */-Blockkommentare',
      'Meldet die Live-Byte-Reduktion in Prozent',
      'Schnelle Ausführung nur im Browser, ohne dass Code extern gesendet wird',
    ],
    useCases: [
      'Kompakte Inline-Skripte oder Bookmarklets vorbereiten',
      'Komprimierte einzeilige Ausschnitte zur Lesbarkeit entpacken',
      'Entwicklerkommentare vor dem Teilen von Codebeispielen entfernen',
      'Eingefügte JS-Funktionen schnell neu einrücken',
    ],
    faqs: [
      {
        question: 'Benennt dieses Tool Variablen um (Mangling) wie Terser oder esbuild?',
        answer:
          'Nein. Das Tool entfernt nur Kommentare und Leerzeichen; Variablennamen bleiben unverändert. Für echtes Mangling nutzen Sie Terser oder esbuild.',
      },
      {
        question: 'Sind String-Literale mit „//“ (wie URLs) sicher?',
        answer:
          'Ja. Der Tokenizer erkennt Zeichenketten und behandelt // darin als Text, nicht als Kommentar.',
      },
      {
        question: 'Sollte ich beim Minimieren von mehrzeiligem JS Semikolons verwenden?',
        answer:
          'Ja, wenn Ihr Code auf automatisches Semikolon-Einfügen angewiesen ist: Fügen Sie Semikolons hinzu, damit Anweisungen nach dem Entfernen von Zeilenumbrüchen nicht zusammenlaufen.',
      },
      {
        question: 'Ist der JavaScript-Minifier kostenlos?',
        answer:
          'Ja. Der JavaScript-Minifier ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig viel Code minimieren oder formatieren, komplett lokal und ohne Upload.',
      },
      {
        question: 'Lädt der JavaScript-Minifier meinen Code auf einen Server hoch?',
        answer:
          'Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, und Ihr Code wird niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Funktioniert der JavaScript-Minifier mit TypeScript-Code?',
        answer:
          'Ja, für einfache Typannotationen und gängige TypeScript-Syntax; sehr spezielle Typkonstrukte werden als Text belassen.',
      },
      {
        question: 'Zerbricht das Minimieren mein JavaScript?',
        answer:
          'In der Regel nicht, da nur Kommentare und Leerzeichen entfernt werden. Achten Sie auf fehlende Semikolons und auf reguläre Ausdrücke, die // enthalten.',
      },
      {
        question: 'Entfernt der JavaScript-Minifier console.log-Anweisungen?',
        answer:
          'Nein. console.log-Anweisungen bleiben erhalten; das Tool entfernt nur Kommentare und Leerzeichen. Ihr Code verhält sich nach der Minifizierung also exakt so wie vorher, inklusive aller Debug-Ausgaben.',
      },
      {
        question: 'Kann ich minimierten Code aus einem Produktions-Bundle verschönern?',
        answer:
          'Ja, aber ohne Source-Maps bleiben Variablennamen gekürzt; die Struktur wird dennoch lesbar eingerückt.',
      },
      {
        question: 'Verarbeitet der JavaScript-Minifier Template-Literale mit ${}-Ausdrücken?',
        answer:
          'Ja. Template-Literale mit ${}-Ausdrücken werden vom Tokenizer geschützt und bleiben exakt erhalten.',
      },
      {
        question: 'Was ist der Unterschied zwischen Minimieren und Verschönern im JavaScript-Minifier?',
        answer:
          'Minimieren komprimiert Code auf wenige Zeilen für kleinere Dateien, Verschönern rückt kompakten Code lesbar mit Einrückung neu ein.',
      },
      {
        question: 'Kann ich ES6-Code mit Arrow-Funktionen und Klassen minimieren?',
        answer:
          'Ja. Moderne ES6-Syntax wie Arrow-Funktionen, Klassen und Destructuring wird unterstützt. Der Minifier versteht die aktuelle JavaScript-Syntax und verändert weder die Logik noch die Bedeutung Ihres Codes.',
      },
      {
        question: 'Unterstützt der JavaScript-Minifier JSX- oder React-Code?',
        answer:
          'Eingeschränkt: JSX-Tags werden als Text behandelt; für React-Code eignen sich Build-Tools wie esbuild besser.',
      },
      {
        question: 'Wie viel kleiner wird mein JavaScript nach dem Minimieren?',
        answer:
          'Typisch sind 10 bis 30 Prozent, je nach Kommentar- und Leerzeichenanteil; das Tool zeigt die exakte Ersparnis an.',
      },
      {
        question: 'Kann ich mehrere JavaScript-Dateien auf einmal minimieren?',
        answer:
          'Nein, nur eine pro Durchgang; fügen Sie Dateien nacheinander ein oder kombinieren Sie sie vorher.',
      },
      {
        question: 'Behält der JavaScript-Minifier reguläre Ausdrücke?',
        answer:
          'Ja. Reguläre Ausdrücke werden vom Tokenizer erkannt und bleiben unverändert. Das ist wichtig, weil schon ein verändertes Zeichen in einem Muster die Suche komplett verändern könnte.',
      },
      {
        question: 'Was passiert, wenn mein JavaScript einen Syntaxfehler hat?',
        answer:
          'Der Minifier arbeitet auf Token-Ebene und verarbeitet auch fehlerhaften Code bestmöglich; er validiert die Syntax nicht.',
      },
      {
        question: 'Kann ich den JavaScript-Minifier für Bookmarklets nutzen?',
        answer:
          'Ja. Minimierter Code ist ideal für Bookmarklets, die als javascript:-URL in einem Lesezeichen stehen.',
      },
      {
        question: 'Ist die minimierte Ausgabe sicher zum Einfügen in ein HTML-Script-Tag?',
        answer:
          'Ja, solange der Code kein </script> in Zeichenketten enthält; in diesem Fall escapen Sie den Schrägstrich als <\\/script>.',
      },
      {
        question: 'Kann ich JavaScript auf dem Handy formatieren?',
        answer:
          'Ja. Der JavaScript-Minifier funktioniert in jedem modernen mobilen Browser. Sie können Code unterwegs einfügen, minimieren oder formatieren, ohne einen Desktop-Rechner zu brauchen.',
      },
    ],
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
    instructions: [
      {
        title: '5-Felder-Cron-Ausdruck eingeben oder Voreinstellung wählen',
        description:
          'Geben Sie einen Cron-Ausdruck wie „0 9 * * 1-5“ ein oder wählen Sie eine Voreinstellung wie „Täglich um Mitternacht“.',
      },
      {
        title: 'Klartext-Zusammenfassung und Feldaufschlüsselung prüfen',
        description:
          'Lesen Sie die Zusammenfassung in Klartext und die Aufschlüsselung jedes Feldes mit seinen erlaubten Werten.',
      },
      {
        title: 'Nächste 8 Laufzeiten verifizieren',
        description:
          'Prüfen Sie die Liste der nächsten 8 konkreten Ausführungszeitstempel in Ihrer lokalen Zeitzone.',
      },
      {
        title: 'Felder mit Schritten, Bereichen und Listen anpassen',
        description:
          'Nutzen Sie */5 für Schritte, 1-5 für Bereiche und 1,15 für Listen, um den Zeitplan fein abzustimmen.',
      },
      {
        title: 'Ausdruck für Ihren Planer kopieren',
        description:
          'Kopieren Sie den verifizierten Ausdruck in Ihre Crontab, GitHub Actions oder Ihren Cloudflare Worker.',
      },
      {
        title: 'Tipp: Wochentag vs. Tag im Monat',
        description:
          'Wenn beide Felder gesetzt sind, läuft der Job an Tagen, die entweder Bedingung erfüllen (OR-Logik); lassen Sie eines auf *, wenn Sie nur eine Bedingung möchten.',
      },
    ],
    examples: [
      {
        title: 'Morgenjob zu Geschäftszeiten',
        input: '0 9 * * 1-5',
        output: 'Um 09:00 Uhr, an Wochentagen 1–5 (Montag–Freitag).',
        explanation:
          'Ein klassischer Werktags-Zeitplan für morgendliche Jobs.',
      },
      {
        title: 'Alle 5 Minuten ausführen',
        input: '*/5 * * * *',
        output: 'Alle 5 Minuten.',
        explanation:
          'Der Schritt */5 im Minutenfeld lässt den Job alle 5 Minuten laufen.',
      },
    ],
    benefits: [
      'Unterstützt Wildcards (*), Schritte (*/5), Bereiche (1-5), Listen (1,15) und Namen (MON-FRI)',
      'Berechnet die nächsten 8 konkreten Ausführungszeitstempel in Ihrer lokalen Zeitzone',
      'Meldet Werte außerhalb des Bereichs oder fehlende Felder sofort',
      'Enthält Voreinstellungen per Klick für gängige Intervalle',
    ],
    useCases: [
      'GitHub-Actions-`schedule.cron` und Cloudflare-Workers-Cron-Trigger verifizieren',
      'Linux-Crontab-Backup- oder Bereinigungszeitpläne debuggen',
      'Wochentag-(0–6-) vs. Tag-im-Monat-(1–31-)Logik doppelt prüfen',
      'Wiederkehrende Job-Zeitpläne für Operations-Runbooks dokumentieren',
    ],
    faqs: [
      {
        question: 'Unterstützt dieser Parser 6-Felder-Cron-Ausdrücke mit Sekunden?',
        answer:
          'Nein. Der Parser unterstützt nur klassische 5-Felder-Unix-Crontab-Ausdrücke; ein 6. Feld für Sekunden wird als Fehler gemeldet.',
      },
      {
        question: 'Was passiert, wenn Tag im Monat und Wochentag beide nicht Wildcard sind?',
        answer:
          'In klassischem Cron läuft der Job dann an Tagen, die entweder Bedingung erfüllen (OR-Logik), nicht nur an Tagen, die beide erfüllen.',
      },
      {
        question: 'Werden MON–FRI- und JAN–DEC-Namen unterstützt?',
        answer:
          'Ja. Wochentagsnamen wie MON–FRI und Monatsnamen wie JAN–DEC werden akzeptiert und in Zahlen umgewandelt.',
      },
      {
        question: 'Ist der Cron-Ausdruck-Parser kostenlos?',
        answer:
          'Ja. Der Cron-Ausdruck-Parser ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig viele Cron-Ausdrücke prüfen und sich die nächsten Ausführungszeiten anzeigen lassen.',
      },
      {
        question: 'Was ist ein Cron-Ausdruck?',
        answer:
          'Ein Cron-Ausdruck ist eine Zeichenkette aus fünf Feldern, die festlegt, wann ein wiederkehrender Job läuft: Minute, Stunde, Tag im Monat, Monat und Wochentag.',
      },
      {
        question: 'Was bedeuten die 5 Felder in einem Cron-Ausdruck?',
        answer:
          'Die Felder sind: Minute (0–59), Stunde (0–23), Tag im Monat (1–31), Monat (1–12) und Wochentag (0–6, wobei 0 und 7 Sonntag sind).',
      },
      {
        question: 'Wie führe ich einen Cron-Job alle 5 Minuten aus?',
        answer:
          'Nutzen Sie */5 * * * *: Der Schritt */5 im Minutenfeld lässt den Job alle 5 Minuten laufen.',
      },
      {
        question: 'Wie plane ich einen Cron-Job um 9 Uhr an Werktagen?',
        answer:
          'Nutzen Sie 0 9 * * 1-5: um 09:00 Uhr, Montag bis Freitag.',
      },
      {
        question: 'Was bedeutet */15 in einem Cron-Ausdruck?',
        answer:
          '*/15 bedeutet „alle 15 Einheiten“: Im Minutenfeld läuft der Job alle 15 Minuten, im Stundenfeld alle 15 Stunden.',
      },
      {
        question: 'Was ist der Unterschied zwischen 0 und 7 für Sonntag in Cron?',
        answer:
          'Beide stehen für Sonntag; 0 und 7 sind in Cron gleichwertig, und der Parser akzeptiert beide.',
      },
      {
        question: 'Kann ich diesen Cron-Ausdruck-Parser für GitHub-Actions-Zeitpläne nutzen?',
        answer:
          'Ja. GitHub Actions nutzt 5-Felder-Cron-Ausdrücke; beachten Sie, dass GitHub-Actions-Zeitpläne in UTC laufen, nicht in Ihrer lokalen Zeitzone.',
      },
      {
        question: 'Berücksichtigt der Cron-Ausdruck-Parser meine Zeitzone?',
        answer:
          'Ja, die Vorschau der nächsten 8 Laufzeiten wird in Ihrer lokalen Zeitzone angezeigt; beachten Sie aber, dass viele Planer wie GitHub Actions in UTC laufen.',
      },
      {
        question: 'Was passiert, wenn ich einen ungültigen Cron-Ausdruck eingebe?',
        answer:
          'Der Parser meldet sofort, welches Feld ungültig ist, zum Beispiel einen Wert außerhalb des Bereichs oder ein fehlendes Feld.',
      },
      {
        question: 'Kann ich einen Cron-Job für den letzten Tag des Monats planen?',
        answer:
          'Mit klassischem 5-Felder-Cron nicht direkt; L und W werden nicht unterstützt. Nutzen Sie einen Job am 28.–31. mit zusätzlicher Prüfung im Skript.',
      },
      {
        question: 'Was bedeuten L und W in einem Cron-Ausdruck?',
        answer:
          'L steht für „letzter Tag“ und W für „nächster Werktag“ in erweiterten Cron-Dialekten; klassisches Unix-Cron und dieser Parser unterstützen sie nicht.',
      },
      {
        question: 'Wie führe ich einen Cron-Job zweimal täglich aus?',
        answer:
          'Nutzen Sie eine Liste im Stundenfeld, zum Beispiel 0 9,17 * * *, um den Job um 09:00 und 17:00 Uhr laufen zu lassen.',
      },
      {
        question: 'Unterstützt der Cron-Ausdruck-Parser Sekunden oder 6-Felder-Ausdrücke?',
        answer:
          'Nein. Sekunden werden nicht unterstützt; der Parser erwartet genau fünf Felder. Klassische Cron-Ausdrücke bestehen aus Minute, Stunde, Tag, Monat und Wochentag, und genau dieses Format wird geprüft.',
      },
      {
        question: 'Kann ich Cron-Läufe für einen bestimmten Datumsbereich in der Vorschau ansehen?',
        answer:
          'Die Vorschau zeigt immer die nächsten 8 Läufe ab jetzt; für einen bestimmten Zeitraum passen Sie den Ausdruck an oder rechnen Sie die Läufe aus der Vorschau weiter.',
      },
      {
        question: 'Warum läuft mein Cron-Job an unerwarteten Tagen?',
        answer:
          'Häufige Ursachen sind die OR-Logik von Tag-im-Monat und Wochentag, eine UTC-Zeitzone statt Ortszeit oder ein falsch verstandenes Wochentagsfeld (0 = Sonntag).',
      },
      {
        question: 'Kann ich Cron-Voreinstellungen für gängige Zeitpläne nutzen?',
        answer:
          'Ja. Der Parser enthält Voreinstellungen per Klick für gängige Intervalle wie stündlich, täglich, wöchentlich und monatlich.',
      },
    ],
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
    instructions: [
      {
        title: 'Farbe wählen oder eingeben',
        description:
          'Wählen Sie eine Farbe mit der Farbauswahl oder geben Sie einen HEX-, RGB- oder HSL-Wert ein.',
      },
      {
        title: 'HEX-, RGB- und HSL-Werte prüfen',
        description:
          'Sehen Sie alle drei Darstellungen Ihrer Farbe gleichzeitig mit einem Live-Farbmuster.',
      },
      {
        title: 'CSS-Farbwerte kopieren',
        description:
          'Kopieren Sie den gewünschten Farbwert mit einem Klick als gültige CSS-Zeichenkette.',
      },
      {
        title: 'Hintergrundfarbe wählen',
        description:
          'Wählen Sie eine zweite Farbe als Hintergrund, um den Kontrast zwischen Vorder- und Hintergrund zu prüfen.',
      },
      {
        title: 'WCAG-Kontrastergebnisse prüfen',
        description:
          'Lesen Sie das Kontrastverhältnis und die Bestehen/Nicht-Bestehen-Ergebnisse für AA Normal (4,5:1), AAA Normal (7:1) und AA Groß (3:1).',
      },
      {
        title: 'Tipp: Dunklere Nuance finden',
        description:
          'Wenn Ihre Markenfarbe auf Weiß den AA-Test nicht besteht, senken Sie im HSL-Modus die Helligkeit (L), bis das Verhältnis 4,5:1 erreicht.',
      },
    ],
    examples: [
      {
        title: 'Barrierefreies Kobaltblau auf Weiß',
        input: 'Vordergrund: #2563EB · Hintergrund: #FFFFFF',
        output: 'RGB: rgb(37, 99, 235) · HSL: hsl(221, 83%, 53%) · Kontrast: 5,17:1 (AA bestanden)',
        explanation:
          'Ein Kontrastverhältnis von 5,17:1 besteht den WCAG-AA-Test für normalen Text.',
      },
      {
        title: 'HEX in RGB und HSL umwandeln',
        input: '#FF5733',
        output: 'RGB: rgb(255, 87, 51) · HSL: hsl(11, 100%, 60%)',
        explanation:
          'Derselbe Farbwert wird in allen drei Notationen gleichzeitig angezeigt.',
      },
    ],
    benefits: [
      'Synchronisiert HEX-, RGB- und HSL-Kanäle bidirektional in Echtzeit',
      'Eingebauter WCAG-2.1-Rechner für relative Luminanz und Kontrast',
      'Prüft AA Normal (4,5:1), AAA Normal (7,0:1) und AA Groß (3,0:1) Schwellenwerte',
      'Kopieren per Klick für gültige CSS-Farbzeichenketten',
    ],
    useCases: [
      'Schaltflächen- und Linktext-Kontrast während der UI-Implementierung verifizieren',
      'Marken-HEX-Paletten in HSL für Tailwind oder CSS-Variablen umwandeln',
      'Helligkeit und Sättigung feinabstimmen, ohne den Browser zu verlassen',
      'Barrierefreiheit-Konformität vor der Designübergabe prüfen',
    ],
    faqs: [
      {
        question: 'Welches Kontrastverhältnis ist für WCAG-2.1-AA-Fließtext erforderlich?',
        answer:
          'Für normalen Text ist ein Kontrastverhältnis von mindestens 4,5:1 erforderlich; für großen Text genügen 3:1.',
      },
      {
        question: 'Kann ich 3-stellige Kurz-HEX-Codes wie #09f eingeben?',
        answer:
          'Ja. Kurzcodes wie #09f werden automatisch zu #0099FF erweitert. Jede Ziffer wird dabei verdoppelt, sodass aus dem Kurzcode der vollständige sechsstellige HEX-Wert entsteht.',
      },
      {
        question: 'Warum macht HSL das Anpassen von Themes einfacher als RGB?',
        answer:
          'Weil HSL Farbton, Sättigung und Helligkeit trennt: Sie können eine Farbe heller oder dunkler machen, indem Sie nur den L-Wert ändern, ohne den Farbton zu berühren.',
      },
      {
        question: 'Ist der Farb-Konverter kostenlos?',
        answer:
          'Ja. Der Farb-Konverter ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig viele Farben zwischen HEX, RGB, HSL und anderen Formaten umrechnen.',
      },
      {
        question: 'Speichert der Farb-Konverter meine Farben?',
        answer:
          'Nein. Ihre Farben bleiben nur in Ihrem Browser-Tab und werden nicht gespeichert oder gesendet.',
      },
      {
        question: 'Wie wandle ich HEX in RGB mit dem Farb-Konverter um?',
        answer:
          'Geben Sie den HEX-Wert ein, und der RGB-Wert wird sofort daneben angezeigt; kopieren Sie ihn mit einem Klick.',
      },
      {
        question: 'Wie wandle ich RGB in HSL um?',
        answer:
          'Geben Sie die RGB-Werte ein, und der HSL-Wert wird automatisch berechnet und angezeigt.',
      },
      {
        question: 'Was ist der Unterschied zwischen HEX, RGB und HSL?',
        answer:
          'HEX ist die kompakte hexadezimale Schreibweise von RGB, RGB beschreibt Farben über Rot-, Grün- und Blauanteile (0–255), und HSL beschreibt sie über Farbton, Sättigung und Helligkeit.',
      },
      {
        question: 'Welches Kontrastverhältnis brauche ich für WCAG AAA?',
        answer:
          'Für AAA sind mindestens 7:1 für normalen Text und 4,5:1 für großen Text erforderlich.',
      },
      {
        question: 'Was zählt als großer Text für den WCAG-Kontrast?',
        answer:
          'Großer Text ist mindestens 18 pt (24 px) oder 14 pt (18,66 px) fett; für ihn gelten die niedrigeren Schwellenwerte 3:1 (AA) und 4,5:1 (AAA).',
      },
      {
        question: 'Kann ich eine Farbe mit Transparenz (Alpha) im Farb-Konverter umwandeln?',
        answer:
          'Der Konverter arbeitet mit deckenden Farben; Alpha-Werte werden in der aktuellen Version nicht unterstützt.',
      },
      {
        question: 'Unterstützt der Farb-Konverter 8-stellige HEX-Codes mit Alpha?',
        answer:
          'Nein. 8-stellige HEX-Codes mit Alpha-Kanal werden nicht unterstützt; geben Sie den 6-stelligen HEX-Wert der deckenden Farbe ein.',
      },
      {
        question: 'Kann ich mit dem Farb-Konverter eine Farbe aus einem Bild wählen?',
        answer:
          'Nein. Der Konverter hat keine Bild-Pipette; wählen Sie Farben über die Farbauswahl oder geben Sie Werte manuell ein.',
      },
      {
        question: 'Wie wird das WCAG-Kontrastverhältnis berechnet?',
        answer:
          'Es wird aus der relativen Luminanz beider Farben berechnet: (L1 + 0,05) / (L2 + 0,05), wobei L1 die hellere und L2 die dunklere Luminanz ist.',
      },
      {
        question: 'Warum besteht meine Markenfarbe den AA-Test auf Weiß nicht?',
        answer:
          'Weil ihr Kontrastverhältnis unter 4,5:1 liegt; helle Markenfarben haben oft zu wenig Kontrast auf Weiß. Dunkeln Sie die Farbe im HSL-Modus ab, bis 4,5:1 erreicht ist.',
      },
      {
        question: 'Kann ich Farben als CSS-Variablen aus dem Farb-Konverter kopieren?',
        answer:
          'Ja. Kopieren Sie den HEX-, RGB- oder HSL-Wert und nutzen Sie ihn in einer CSS-Variablen wie --primary: #2563EB;.',
      },
      {
        question: 'Was ist der Unterschied zwischen HSL und HSV?',
        answer:
          'HSL beschreibt Helligkeit bis Weiß und Schwarz symmetrisch, HSV beschreibt den Wert (Helligkeit) bis Weiß; beide trennen den Farbton, unterscheiden sich aber in der Sättigungs- und Helligkeitsachse.',
      },
      {
        question: 'Kann ich benannte CSS-Farben wie „red“ im Farb-Konverter umwandeln?',
        answer:
          'Nein. Geben Sie den HEX-Wert der Farbe ein, zum Beispiel #FF0000 für „red“.',
      },
      {
        question: 'Wie finde ich eine dunklere Nuance meiner Markenfarbe?',
        answer:
          'Senken Sie im HSL-Modus den Helligkeitswert (L) schrittweise, während Farbton und Sättigung gleich bleiben.',
      },
      {
        question: 'Kann ich den Farb-Konverter auf dem Handy nutzen?',
        answer:
          'Ja. Der Farb-Konverter funktioniert in jedem modernen mobilen Browser. Die Farbauswahl und alle Umrechnungsfelder passen sich dem kleinen Bildschirm an.',
      },
    ],
  },
};
