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
    instructions: [
      {
        title: 'Entwurf einfügen oder tippen',
        description:
          'Geben Sie den Text direkt in den Editor ein oder klicken Sie auf „Beispiel laden“, um zu sehen, wie sich die Zähler aktualisieren.',
      },
      {
        title: 'Live-Zähler im Überblick prüfen',
        description:
          'Prüfen Sie Wörter, Zeichen mit und ohne Leerzeichen, Sätze, Absätze und die geschätzte Lesezeit in der Zusammenfassungsleiste.',
      },
      {
        title: 'Lese- und Sprechzeit prüfen',
        description:
          'Sehen Sie die geschätzte Lesezeit bei 225 Wörtern pro Minute und die Sprechzeit bei 130 Wörtern pro Minute, um Aufsätze, Vorträge und Videoskripte vor der Veröffentlichung zu planen.',
      },
      {
        title: 'Wiederholte Begriffe erkennen',
        description:
          'Schauen Sie sich das Feld der häufigsten Wörter an, um unbeabsichtigte Wiederholungen zu erkennen und Ihre Formulierungen vor dem Abschluss zu straffen.',
      },
      {
        title: 'Text kopieren oder herunterladen',
        description:
          'Nutzen Sie die Kopieren-Schaltfläche oder laden Sie eine .txt-Sicherung Ihres Entwurfs herunter, sobald die Zähler stimmen.',
      },
      {
        title: 'Unerwartete Zähler beheben',
        description:
          'Wenn ein Zähler falsch wirkt, prüfen Sie eingefügte versteckte Zeichen oder zusätzliche Leerzeilen; das Entfernen überflüssiger Zeilenumbrüche korrigiert Absatz- und Satzzahlen meist sofort.',
      },
    ],
    examples: [
      {
        title: 'Längenprüfung einer Blog-Einleitung',
        input: 'Schnelle statische Websites senken die Server-Latenz. Leser bleiben dabei, wenn der Text prägnant ist.',
        output: '18 Wörter · 109 Zeichen · 2 Sätze · 5 s Lesezeit',
        explanation:
          'Ideal, um Tempo von Überschrift und Eröffnungsabsatz vor der Veröffentlichung zu prüfen.',
      },
      {
        title: 'Wortlimit eines Aufsatzes prüfen',
        input: 'Absatz 1 (240 Wörter)\n\nAbsatz 2 (255 Wörter)',
        output: '495 Wörter · 2 Absätze · 2 Min. 12 s Lesezeit',
        explanation:
          'Bestätigt ein Ziel von 500 Wörtern für ein Stipendium oder eine Aufgabe mit etwas Spielraum.',
      },
    ],
    benefits: [
      'Aktualisiert sich bei jedem Tastendruck sofort im Arbeitsspeicher des Browsers',
      'Berechnet Lesezeit (225 Wörter pro Minute) und Sprechzeit (130 Wörter pro Minute)',
      'Zeigt Ihre sechs häufigsten Wörter, um sich wiederholende Formulierungen zu erkennen',
      'Exportiert Klartext-Sicherungen direkt als .txt-Datei',
    ],
    useCases: [
      'Strenge Wortziele bei wissenschaftlichen Aufsätzen und Förderanträgen einhalten',
      'Vorträge, Videoskripte und Podcast-Einleitungen zeitlich planen',
      'Artikelentwürfe und Landingpages auf prägnante Struktur prüfen',
      'Newsletter-Texte vor dem Versand auf Länge prüfen',
    ],
    faqs: [
      {
        question: 'Wie berechnet der Wörterzähler Lese- und Sprechzeit?',
        answer:
          'Die Lesezeit basiert auf einem durchschnittlichen Lesetempo von 225 Wörtern pro Minute, die Sprechzeit auf einem Gesprächs-Vortragstempo von 130 Wörtern pro Minute.',
      },
      {
        question: 'Zählen Wörter mit Bindestrich als ein Wort oder als zwei?',
        answer:
          'Standardmäßig werden durch Leerzeichen getrennte Einheiten als ein Wort gezählt, wie in den meisten Textverarbeitungsprogrammen.',
      },
      {
        question: 'Wird mein Text gespeichert oder irgendwohin gesendet?',
        answer:
          'Nein. Das gesamte Zählen läuft lokal in Ihrem Browser-Tab, und Ihr Text verschwindet, sobald Sie die Seite leeren oder schließen.',
      },
      {
        question: 'Was ist der Unterschied zwischen Wörterzähler und Zeichenzähler?',
        answer:
          'Der Wörterzähler konzentriert sich auf Wortzahlen, Absätze, Sprechdauer und häufigste Wörter, während der Zeichenzähler UTF-8-Bytegrößen und Zeichenlimits für Social Media und SEO aufschlüsselt.',
      },
      {
        question: 'Ist der Wörterzähler kostenlos?',
        answer:
          'Ja. Der Wörterzähler ist vollständig kostenlos, ohne Anmeldung, ohne Wortlimit und ohne Konto.',
      },
      {
        question: 'Funktioniert der Wörterzähler offline?',
        answer:
          'Ja. Sobald die Seite geladen ist, läuft das gesamte Zählen lokal in Ihrem Browser und funktioniert daher auch ohne Internetverbindung.',
      },
      {
        question: 'Wie werden Sätze gezählt?',
        answer:
          'Sätze werden an satzbeendender Zeichensetzung wie Punkt, Ausrufezeichen und Fragezeichen gezählt; Abkürzungen wie „Dr.“ können daher einen zusätzlichen Satz ergeben.',
      },
      {
        question: 'Was zählt als Wort im Wörterzähler?',
        answer:
          'Jede durch Leerzeichen getrennte Zeichenfolge zählt als ein Wort, einschließlich Zahlen, Wörtern mit Bindestrich und Wörtern mit Apostroph.',
      },
      {
        question: 'Kann ich Wörter in einem PDF oder Word-Dokument zählen?',
        answer:
          'Nicht direkt. Kopieren Sie den Text aus Ihrem Dokument und fügen Sie ihn in den Wörterzähler ein, um die Zähler sofort zu sehen.',
      },
      {
        question: 'Zählt der Wörterzähler Zeichen mit Leerzeichen?',
        answer:
          'Ja. Er zeigt Zeichen sowohl mit als auch ohne Leerzeichen an, damit Sie Limits prüfen können, die auf die eine oder andere Weise zählen.',
      },
      {
        question: 'Wie genau ist die Lesezeit-Schätzung?',
        answer:
          'Es handelt sich um eine Schätzung auf Basis eines durchschnittlichen Lesetempos von 225 Wörtern pro Minute; einzelne Leser können schneller oder langsamer sein.',
      },
      {
        question: 'Worauf basiert die Sprechzeit-Schätzung?',
        answer:
          'Die Sprechzeit basiert auf einem Vortragstempo von 130 Wörtern pro Minute, das für Vorträge, Videoskripte und Podcast-Einleitungen geeignet ist.',
      },
      {
        question: 'Funktioniert der Wörterzähler auch in anderen Sprachen?',
        answer:
          'Ja. Er zählt durch Leerzeichen getrennte Wörter in jeder Sprache, auch wenn die Lesezeit-Schätzungen auf englischen Text kalibriert sind.',
      },
      {
        question: 'Kann ich ein Wortlimit für einen Aufsatz oder eine Aufgabe prüfen?',
        answer:
          'Ja. Fügen Sie Ihren Aufsatz ein und vergleichen Sie die Live-Wortzahl mit Ihrem Ziel; die Zusammenfassungsleiste zeigt die genaue Zahl, während Sie bearbeiten.',
      },
      {
        question: 'Zählt der Wörterzähler Zahlen als Wörter?',
        answer:
          'Ja. Alleinstehende Zahlen, die durch Leerzeichen getrennt sind, werden als Wörter gezählt, wie in den meisten Textverarbeitungsprogrammen.',
      },
      {
        question: 'Warum unterscheidet sich meine Zahl von Microsoft Word oder Google Docs?',
        answer:
          'Verschiedene Tools trennen Wörter mit Bindestrich, Gedankenstriche und Zahlen etwas unterschiedlich, daher sind kleine Abweichungen von wenigen Wörtern normal.',
      },
      {
        question: 'Wozu dienen die angezeigten häufigsten Wörter?',
        answer:
          'Das Feld listet Ihre sechs am häufigsten wiederholten Wörter, damit Sie überstrapazierte Begriffe erkennen und Ihren Wortschatz vor der Veröffentlichung variieren können.',
      },
      {
        question: 'Kann ich Wörter nur in einem bestimmten Absatz zählen?',
        answer:
          'Ja. Fügen Sie nur diesen Absatz in den Editor ein, und die Live-Zähler spiegeln nur den eingegebenen Text wider.',
      },
      {
        question: 'Kann ich den Wörterzähler für Social-Media-Bildunterschriften nutzen?',
        answer:
          'Ja. Fügen Sie Ihre Bildunterschrift ein, um Wortzahl und Lesezeit zu prüfen, und nutzen Sie den Zeichenzähler, wenn Sie auch Zeichenlimits prüfen müssen.',
      },
      {
        question: 'Kann ich den Wörterzähler auf dem Handy nutzen?',
        answer:
          'Ja. Er funktioniert in jedem modernen mobilen Browser mit denselben Live-Zählern, derselben Lesezeit und denselben Kopieroptionen.',
      },
    ],
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
    instructions: [
      {
        title: 'Text eingeben oder einfügen',
        description:
          'Tippen Sie einen Meta-Titel, eine Social-Media-Bildunterschrift, eine SMS-Benachrichtigung oder eine Formularfeld-Zeichenkette in das Textfeld.',
      },
      {
        title: 'Zeichen- und Byte-Maße prüfen',
        description:
          'Vergleichen Sie die Gesamtzahl der Zeichen mit Leerzeichen, ohne Leerzeichen, Buchstaben, Ziffern und das UTF-8-Bytegewicht.',
      },
      {
        title: 'Plattform-Schwellenwerte prüfen',
        description:
          'Prüfen Sie die Live-Fortschrittsanzeigen, um zu bestätigen, dass Ihr Text die Limits für SEO, SMS, X, Instagram oder LinkedIn einhält.',
      },
      {
        title: 'Byte-Größe für technische Limits nutzen',
        description:
          'Prüfen Sie die UTF-8-Bytezahl, wenn Sie Datenbankspalten, API-Payloads oder Dateifelder validieren, die nach Bytes statt nach Zeichen begrenzt sind.',
      },
      {
        title: 'Mit und ohne Leerzeichen vergleichen',
        description:
          'Wechseln Sie zwischen der Gesamtzahl mit Leerzeichen und ohne Leerzeichen, wenn ein Formular oder eine Plattform nur Zeichen ohne Leerzeichen zählt.',
      },
      {
        title: 'Falsch wirkenden Zähler beheben',
        description:
          'Wenn ein Zähler falsch wirkt, prüfen Sie unsichtbare Zeichen wie nachgestellte Leerzeichen oder eingefügte Zeilenumbrüche, die in der Gesamtzahl mit Leerzeichen enthalten sind.',
      },
    ],
    examples: [
      {
        title: 'Meta-Titel prüfen',
        input: 'Wörterzähler – Wörter, Sätze & Lesezeit zählen',
        output: '51 / 60 Zeichen (9 übrig)',
        explanation:
          'Passt bequem in das typische 60-Zeichen-Anzeigefenster für Titel in Suchmaschinen.',
      },
      {
        title: 'Byte-Prüfung eines mehrbytigen Emojis',
        input: 'Starttag 🚀',
        output: '12 UTF-16-Codeeinheiten · 14 UTF-8-Bytes',
        explanation:
          'Zeigt die exakten Bytegrößen-Unterschiede, wenn Nicht-ASCII-Zeichen enthalten sind.',
      },
    ],
    benefits: [
      'Verfolgt sowohl Zeichen mit Leerzeichen als auch die Zeichenanzahl ohne Leerzeichen',
      'Misst die exakte UTF-8-Bytelänge für Datenbankspalten- und API-Payload-Limits',
      'Enthält visuelle Limit-Anzeigen für SEO-Tags, SMS, X, Instagram und LinkedIn',
      'Kein Server-Upload und keine Protokollierung von Zeichen',
    ],
    useCases: [
      'Title-Tags und Meta-Beschreibungen für Suchmaschinen ohne Abschneiden schreiben',
      'SMS-Benachrichtigungen innerhalb des 160-Zeichen-Limits eines Abschnitts verfassen',
      'Datenbank-VARCHAR-Feldlänge in UTF-8-Bytes validieren',
      'Prägnante Social-Media-Bildunterschriften vor der Veröffentlichung verfassen',
    ],
    faqs: [
      {
        question: 'Warum sind UTF-8-Bytes manchmal höher als die Zeichenanzahl?',
        answer:
          'Standard-ASCII-Zeichen belegen in UTF-8 jeweils 1 Byte, während Umlaute, nicht-lateinische Schriften und Emojis 2 bis 4 Bytes pro Zeichen benötigen.',
      },
      {
        question: 'Zählt der Zeichenzähler Zeilenumbrüche mit?',
        answer:
          'Ja. Zeilenumbruchzeichen werden in der Kennzahl „Mit Leerzeichen“ gezählt und in der Kennzahl „Ohne Leerzeichen“ ausgeschlossen.',
      },
      {
        question: 'Was passiert, wenn ich einen Plattform-Limitbalken überschreite?',
        answer:
          'Die Fortschrittsanzeige wird rot und zeigt die genaue Anzahl der Zeichen über dem Limit an, damit Sie wissen, wie viel Sie kürzen müssen.',
      },
      {
        question: 'Ist der Zeichenzähler kostenlos?',
        answer:
          'Ja. Der Zeichenzähler ist vollständig kostenlos, ohne Anmeldung, ohne Zeichenlimit und ohne Konto.',
      },
      {
        question: 'Was ist der Unterschied zwischen Zeichen mit und ohne Leerzeichen?',
        answer:
          'Zeichen mit Leerzeichen umfassen jedes Leerzeichen zwischen Wörtern, während Zeichen ohne Leerzeichen sie ausschließen, was zählt, wenn eine Plattform nur sichtbare Zeichen zählt.',
      },
      {
        question: 'Zählt der Zeichenzähler Emojis?',
        answer:
          'Ja. Jedes Emoji zählt als Zeichen, und da die meisten Emojis mehrere UTF-8-Bytes verwenden, ist die Bytezahl höher als die Zeichenanzahl.',
      },
      {
        question: 'Wie viele Zeichen kann ich in den Zeichenzähler einfügen?',
        answer:
          'Es gibt kein festes Limit. Das Zählen läuft vollständig in Ihrem Browser, daher werden auch sehr lange Dokumente sofort gemessen.',
      },
      {
        question: 'Was ist das Zeichenlimit für einen SEO-Meta-Titel?',
        answer:
          'Suchmaschinen zeigen in der Regel etwa 50 bis 60 Zeichen eines Title-Tags an, daher vermeidet man mit dieser Spanne ein Abschneiden in den Ergebnissen.',
      },
      {
        question: 'Was ist das Zeichenlimit für eine Meta-Beschreibung?',
        answer:
          'Suchmaschinen zeigen in der Regel etwa 150 bis 160 Zeichen einer Meta-Beschreibung an, daher verfolgt das Tool Ihren Fortschritt in Richtung dieser Spanne.',
      },
      {
        question: 'Wie viele Zeichen passen in eine einzelne SMS?',
        answer:
          'Ein Standard-SMS-Abschnitt fasst 160 Zeichen mit dem GSM-Basisalphabet; längere Nachrichten werden in mehrere Abschnitte aufgeteilt.',
      },
      {
        question: 'Zählt der Zeichenzähler Tabs und Zeilenumbrüche?',
        answer:
          'Ja. Tabs und Zeilenumbrüche werden in der Gesamtzahl mit Leerzeichen gezählt, daher zeigt eingefügter Text mit zusätzlichen Leerzeilen eine höhere Zahl.',
      },
      {
        question: 'Zählt der Zeichenzähler Satzzeichen mit?',
        answer:
          'Ja. Satzzeichen zählen als Zeichen und sind in beiden Gesamtzahlen enthalten, mit und ohne Leerzeichen.',
      },
      {
        question: 'Welches Zeichenlimit verwendet X (Twitter)?',
        answer:
          'Beiträge auf X sind für die meisten Konten auf 280 Zeichen begrenzt, und die Limitbalken in diesem Tool zeigen Ihren Fortschritt in Richtung dieser Schwelle.',
      },
      {
        question: 'Kann ich die Länge einer Instagram-Bildunterschrift prüfen?',
        answer:
          'Ja. Fügen Sie Ihre Bildunterschrift ein und beobachten Sie die Instagram-Limitanzeige; Bildunterschriften sind auf 2.200 Zeichen begrenzt.',
      },
      {
        question: 'Funktioniert der Zeichenzähler mit nicht-englischem Text?',
        answer:
          'Ja. Er zählt Zeichen in jeder Schrift, und die UTF-8-Bytezahl zeigt die tatsächliche Speichergröße für Umlaute und nicht-lateinische Zeichen.',
      },
      {
        question: 'Kann ich den Zeichenzähler für einen LinkedIn-Beitrag nutzen?',
        answer:
          'Ja. Fügen Sie Ihren Beitrag ein und prüfen Sie die LinkedIn-Limitanzeige, die das Limit von 3.000 Zeichen für Beiträge verfolgt.',
      },
      {
        question: 'Speichert oder sendet der Zeichenzähler meinen Text?',
        answer:
          'Nein. Das gesamte Zählen geschieht lokal in Ihrem Browser, und Ihr Text wird niemals hochgeladen, gespeichert oder geteilt.',
      },
      {
        question: 'Warum unterscheidet sich meine Zahl von Microsoft Word?',
        answer:
          'Verschiedene Tools behandeln Zeilenumbrüche, Tabs und versteckte Formatierungszeichen unterschiedlich, daher sind kleine Abweichungen zwischen Zählern normal.',
      },
      {
        question: 'Was zählt als Buchstabe im Gegensatz zu einer Ziffer?',
        answer:
          'Buchstaben sind alphabetische Zeichen in jeder Schrift, während Ziffern die numerischen Zeichen von 0 bis 9 sind; beide werden als separate Gesamtzahlen angezeigt.',
      },
      {
        question: 'Kann ich die Zeichenanzahl für ein Passwort- oder Benutzernamenfeld prüfen?',
        answer:
          'Ja. Fügen Sie den Wert in das Tool ein, um zu prüfen, ob er eine Mindest- oder Höchstlänge erfüllt, bevor Sie ein Formular absenden.',
      },
    ],
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
    instructions: [
      {
        title: 'Text einfügen oder tippen',
        description:
          'Fügen Sie Titel, Absätze oder Bezeichner-Zeichenketten in den Editor ein.',
      },
      {
        title: 'Schreibweise wählen',
        description:
          'Klicken Sie auf eine Umwandlungs-Schaltfläche – zum Beispiel Titel-Schreibweise, Satzschreibweise, camelCase oder snake_case –, um den Text sofort zu aktualisieren.',
      },
      {
        title: 'Formatiertes Ergebnis kopieren',
        description:
          'Nutzen Sie die Schaltfläche „Ergebnis kopieren“, um den umgewandelten Text in Ihre Zwischenablage zu übertragen.',
      },
      {
        title: 'Text in GROSSBUCHSTABEN mit einem Klick korrigieren',
        description:
          'Fügen Sie den Text ein, der mit aktivierter Feststelltaste getippt wurde, und wählen Sie die Satzschreibweise, um die normale Großschreibung in jedem Satz wiederherzustellen.',
      },
      {
        title: 'Bezeichner für Code umwandeln',
        description:
          'Fügen Sie eine einfache Bezeichnung wie „benutzerkonto abrechnungsstatus“ ein und wählen Sie camelCase, PascalCase, snake_case oder kebab-case, um einen einsatzbereiten Variablennamen zu erhalten.',
      },
      {
        title: 'Seltsame Großschreibung beheben',
        description:
          'Wenn die Titel-Schreibweise ein Wort kleingeschrieben lässt, handelt es sich wahrscheinlich um ein kurzes Wort wie „und“ oder „von“; tippen Sie es neu oder wenden Sie die Großschreibung nur auf dieses Wort an.',
      },
    ],
    examples: [
      {
        title: 'Versehentlich komplett großgeschriebenen Text korrigieren',
        input: 'DIESER BERICHT FASST DIE ERGEBNISSE DES 4. QUARTALS ZUSAMMEN. ALLE MESSWERTE SIND ENDGÜLTIG.',
        output: 'Dieser Bericht fasst die Ergebnisse des 4. Quartals zusammen. Alle Messwerte sind endgültig.',
        explanation:
          'Die Satzschreibweise schreibt alle Buchstaben klein und setzt am Anfang jedes Satzes einen Großbuchstaben.',
      },
      {
        title: 'Code-Bezeichner formatieren',
        input: 'benutzerkonto abrechnungsstatus',
        output: 'benutzerkontoAbrechnungsstatus (camelCase) / benutzerkonto_abrechnungsstatus (snake_case)',
        explanation:
          'Wandelt Bezeichnungen direkt in die Standardkonventionen der Programmierung um.',
      },
    ],
    benefits: [
      'Unterstützt 10 Schreibweisen für Fließtext und Entwicklung an einem Ort',
      'Die intelligente Titel-Schreibweise lässt kurze Präpositionen und Konjunktionen klein',
      'Verarbeitet Absätze mit mehreren Sätzen und Zeilenumbrüche sauber',
      'Läuft lokal in Ihrem Browser mit sofortigem Kopieren per Klick',
    ],
    useCases: [
      'E-Mails, die versehentlich KOMPLETT GROSS geschrieben wurden, in Satzschreibweise zurückwandeln',
      'Blog- und YouTube-Titel einheitlich formatieren',
      'Datenbankspalten, CSS-Klassen oder JavaScript-Variablen umbenennen',
      'Tabellenüberschriften vor dem Import von CSV-Dateien normalisieren',
    ],
    faqs: [
      {
        question: 'Wie behandelt die Titel-Schreibweise kurze Wörter wie „und“ oder „von“?',
        answer:
          'Der Titel-Formatierer schreibt das erste und letzte Wort des Titels groß und lässt gängige kurze Artikel, Konjunktionen und Präpositionen (wie ein, eine, und, von, zu, in) klein.',
      },
      {
        question: 'Kann ich einen vorhandenen snake_case- oder camelCase-Bezeichner in ein anderes Format umwandeln?',
        answer:
          'Ja. Wortgrenzen an Unterstrichen, Bindestrichen und camelCase-Übergängen werden automatisch getrennt, bevor die neue Schreibweise angewendet wird.',
      },
      {
        question: 'Erhält die Satzschreibweise mehrere Absätze?',
        answer:
          'Ja. Die Großschreibung setzt sich am Textanfang, nach satzbeendender Zeichensetzung und am Anfang neuer Zeilen zurück.',
      },
      {
        question: 'Ist der Groß-/Kleinschreibung-Konverter kostenlos?',
        answer:
          'Ja. Der Groß-/Kleinschreibung-Konverter ist vollständig kostenlos, ohne Anmeldung, ohne Textlängenlimit und ohne Konto.',
      },
      {
        question: 'Was ist der Unterschied zwischen Titel-Schreibweise und Satzschreibweise?',
        answer:
          'Die Titel-Schreibweise schreibt die meisten Wörter eines Titels groß, während die Satzschreibweise nur das erste Wort jedes Satzes und Eigennamen großschreibt, wie in einem normalen Satz.',
      },
      {
        question: 'Wozu dient camelCase?',
        answer:
          'camelCase ist der Standard-Namensstil für Variablen und Funktionen in JavaScript und vielen anderen Programmiersprachen, zum Beispiel benutzerkontoStatus.',
      },
      {
        question: 'Wozu dient snake_case?',
        answer:
          'snake_case trennt Wörter mit Unterstrichen und wird häufig für Python-Variablen, Datenbankspalten und Dateinamen verwendet, zum Beispiel benutzerkonto_status.',
      },
      {
        question: 'Wozu dient kebab-case?',
        answer:
          'kebab-case trennt Wörter mit Bindestrichen und wird häufig für URLs, CSS-Klassennamen und HTML-Attribute verwendet, zum Beispiel benutzerkonto-status.',
      },
      {
        question: 'Wozu dient PascalCase?',
        answer:
          'PascalCase schreibt jedes Wort groß ohne Trennzeichen und wird häufig für Klassen- und Komponentennamen verwendet, zum Beispiel BenutzerkontoStatus.',
      },
      {
        question: 'Kann der Konverter Text korrigieren, der KOMPLETT GROSS getippt wurde?',
        answer:
          'Ja. Fügen Sie den großgeschriebenen Text ein und wählen Sie die Satzschreibweise oder Kleinbuchstaben, um die normale Großschreibung mit einem Klick wiederherzustellen.',
      },
      {
        question: 'Funktioniert der Konverter mit Zahlen und Symbolen?',
        answer:
          'Ja. Zahlen, Satzzeichen und Symbole bleiben unverändert; nur Buchstaben werden umgewandelt. Das ist praktisch, wenn Ihr Text etwa Jahreszahlen, Preise oder Sonderzeichen enthält, die beim Wechsel der Schreibweise exakt erhalten bleiben sollen.',
      },
      {
        question: 'Kann ich einen ganzen Absatz auf einmal umwandeln?',
        answer:
          'Ja. Fügen Sie den gesamten Absatz ein, und der Konverter wendet die gewählte Schreibweise auf alle Sätze und Zeilenumbrüche an.',
      },
      {
        question: 'Schreibt die Titel-Schreibweise Wörter nach einem Doppelpunkt groß?',
        answer:
          'Wörter nach einem Doppelpunkt werden wie andere Wörter des Titels behandelt: Hauptwörter werden großgeschrieben, kurze Wörter bleiben klein.',
      },
      {
        question: 'Funktioniert der Konverter in anderen Sprachen?',
        answer:
          'Ja. Er wandelt Buchstaben in jeder Sprache um, die Groß- und Kleinbuchstaben verwendet, auch wenn die Regeln für kurze Wörter in der Titel-Schreibweise auf Englisch basieren.',
      },
      {
        question: 'Kann ich snake_case zurück in normale Wörter umwandeln?',
        answer:
          'Ja. Fügen Sie den Bezeichner ein und wählen Sie Satzschreibweise oder Titel-Schreibweise; Unterstriche werden als Worttrennzeichen behandelt und durch Leerzeichen ersetzt.',
      },
      {
        question: 'Was passiert mit Zeilenumbrüchen bei der Umwandlung?',
        answer:
          'Zeilenumbrüche bleiben exakt erhalten, daher behält ein mehrzeiliger Text seine Struktur nach der Umwandlung.',
      },
      {
        question: 'Speichert oder sendet der Konverter meinen Text?',
        answer:
          'Nein. Die Umwandlung erfolgt lokal in Ihrem Browser, und Ihr Text wird niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Kann ich Text mit bereits gemischter Schreibweise umwandeln?',
        answer:
          'Ja. Der Konverter trennt Wörter zuerst an Unterstrichen, Bindestrichen und Schreibweisen-Übergängen, daher lässt sich eine Eingabe mit gemischter Schreibweise sauber umwandeln.',
      },
      {
        question: 'Kann ich den Konverter für YouTube-Titel nutzen?',
        answer:
          'Ja. Fügen Sie Ihren Videotitel ein und wenden Sie die Titel-Schreibweise an, um einen einheitlichen, professionellen Titelstil zu erhalten.',
      },
      {
        question: 'Funktioniert der Konverter auf dem Handy?',
        answer:
          'Ja. Er funktioniert in jedem modernen mobilen Browser mit denselben Umwandlungen per Klick und derselben Kopieren-Schaltfläche.',
      },
    ],
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
    instructions: [
      {
        title: 'Liste mit einer Zeile pro Eintrag einfügen',
        description:
          'Fügen Sie eine beliebige Liste mit einem Element pro Zeile in das Feld „Originalzeilen“ ein.',
      },
      {
        title: 'Abgleichregeln festlegen',
        description:
          'Aktivieren Sie „Groß-/Kleinschreibung beachten“, „Leerzeichen trimmen“, „Leerzeilen entfernen“ oder „Alphabetisch sortieren“, je nachdem, wie streng der Abgleich sein soll.',
      },
      {
        title: 'Eindeutige Zeilen kopieren',
        description:
          'Prüfen Sie, wie viele Duplikate in der Zusammenfassungszeile entfernt wurden, und klicken Sie auf „Kopieren“, um die bereinigte Liste zu erhalten.',
      },
      {
        title: 'Bereinigte Liste alphabetisch sortieren',
        description:
          'Aktivieren Sie „Alphabetisch sortieren“, wenn die eindeutigen Zeilen von A bis Z geordnet werden sollen, statt ihre Reihenfolge des ersten Auftretens zu behalten.',
      },
      {
        title: 'Zähler in der Zusammenfassung prüfen',
        description:
          'Prüfen Sie die Anzahl der Originalzeilen, der eindeutigen Zeilen und der entfernten Duplikate in der Zusammenfassungszeile, um zu bestätigen, dass die Bereinigung wie erwartet funktioniert hat.',
      },
      {
        title: 'Zeilen beheben, die nicht dedupliziert wurden',
        description:
          'Wenn zwei identisch aussehende Zeilen bestehen bleiben, prüfen Sie versteckte nachgestellte Leerzeichen oder Unterschiede in der Großschreibung, aktivieren Sie dann „Leerzeichen trimmen“ oder deaktivieren Sie „Groß-/Kleinschreibung beachten“ und starten Sie das Tool erneut.',
      },
    ],
    examples: [
      {
        title: 'E-Mail-Liste bereinigen',
        input: 'alex@beispiel.com\nsam@beispiel.com\nAlex@beispiel.com\n  sam@beispiel.com  ',
        output: 'alex@beispiel.com\nsam@beispiel.com',
        explanation:
          'Mit aktiviertem Leerzeichen-Trimmen und deaktivierter Groß-/Kleinschreibung werden nachgestellte Leerzeichen und Großschreibungs-Varianten sauber zusammengeführt.',
      },
      {
        title: 'Schlüsselwortliste bereinigen',
        input: 'laufschuhe\njogging schuhe\nlaufschuhe\nsneaker',
        output: 'laufschuhe\njogging schuhe\nsneaker',
        explanation:
          'Wiederholte Schlüsselwörter werden entfernt, während die Reihenfolge des ersten Auftretens in der Liste erhalten bleibt.',
      },
    ],
    benefits: [
      'Behält standardmäßig die Reihenfolge des ersten Auftretens oder sortiert auf Wunsch alphabetisch',
      'Zeigt die genaue Anzahl der Originalzeilen, eindeutigen Zeilen und entfernten Duplikate',
      'Verarbeitet große Listen mit mehreren tausend Zeilen mühelos im Client-Arbeitsspeicher',
      'Hält private Listen und Kundenexporte von Servern Dritter fern',
    ],
    useCases: [
      'Such-Schlüsselwortexporte und URL-Listen deduplizieren',
      'E-Mail-Abonnentenlisten vor dem Import in ein CRM bereinigen',
      'Wiederholte Stack-Traces oder IP-Einträge aus Protokolldateien entfernen',
      'Eindeutige Tag- oder SKU-Listen für Tabellen vorbereiten',
    ],
    faqs: [
      {
        question: 'Behält das Tool zum Entfernen doppelter Zeilen meine ursprüngliche Reihenfolge?',
        answer:
          'Ja. Standardmäßig behält es das erste Auftreten jeder eindeutigen Zeile in der ursprünglichen Reihenfolge. Sie können „Alphabetisch sortieren“ aktivieren, wenn Sie zusätzlich eine Ordnung von A bis Z möchten.',
      },
      {
        question: 'Wie beeinflusst das Leerzeichen-Trimmen die Duplikaterkennung?',
        answer:
          'Wenn „Leerzeichen trimmen“ aktiviert ist, werden Leerzeichen am Anfang und Ende vor der Eindeutigkeitsprüfung entfernt, damit Elemente wie „Apfel“ und „Apfel“ nicht als verschieden behandelt werden.',
      },
      {
        question: 'Was muss ich tun, wenn ich Großschreibungs-Varianten wie „USA“ und „usa“ behalten möchte?',
        answer:
          'Aktivieren Sie das Kästchen „Groß-/Kleinschreibung beachten“, damit Zeilen mit unterschiedlicher Großschreibung separate Einträge bleiben.',
      },
      {
        question: 'Ist das Tool zum Entfernen doppelter Zeilen kostenlos?',
        answer:
          'Ja. Das Tool ist vollständig kostenlos, ohne Anmeldung, ohne Zeilenlimit und ohne Konto.',
      },
      {
        question: 'Was zählt als doppelte Zeile?',
        answer:
          'Zwei Zeilen sind Duplikate, wenn ihr Text gemäß Ihren aktuellen Einstellungen exakt übereinstimmt, einschließlich der gewählten Optionen für Groß-/Kleinschreibung und Leerzeichen-Trimmen.',
      },
      {
        question: 'Funktioniert es mit Listen, die durch Kommas getrennt sind?',
        answer:
          'Nicht direkt. Das Tool vergleicht ganze Zeilen, daher teilen Sie eine kommagetrennte Liste zuerst in ein Element pro Zeile auf und fügen Sie sie dann ein.',
      },
      {
        question: 'Kann ich doppelte Zeilen aus einer CSV-Datei entfernen?',
        answer:
          'Ja. Kopieren Sie die Spalte oder Zeilen aus Ihrer CSV-Datei, fügen Sie sie als Zeilen ein, deduplizieren Sie sie und fügen Sie die bereinigte Liste wieder in Ihre Tabelle ein.',
      },
      {
        question: 'Was passiert mit Leerzeilen?',
        answer:
          'Leerzeilen werden wie jede andere Zeile behandelt, daher entfernt die Aktivierung von „Leerzeilen entfernen“ sie zusammen mit den Duplikaten aus der Ausgabe.',
      },
      {
        question: 'Kann ich doppelte Einträge aus einer URL-Liste entfernen?',
        answer:
          'Ja. Fügen Sie eine URL pro Zeile ein, und das Tool entfernt wiederholte URLs, was zum Bereinigen von Schlüsselwortexporten und Sitemap-Listen nützlich ist.',
      },
      {
        question: 'Wie viele Zeilen kann ich auf einmal deduplizieren?',
        answer:
          'Es gibt kein festes Limit. Die Deduplizierung erfolgt vollständig in Ihrem Browser, daher werden Listen mit mehreren tausend Zeilen mühelos im Client-Arbeitsspeicher verarbeitet.',
      },
      {
        question: 'Behält das Tool das erste oder das letzte Auftreten eines Duplikats?',
        answer:
          'Es behält das erste Auftreten jeder eindeutigen Zeile und entfernt spätere Wiederholungen, wodurch Ihre ursprüngliche Reihenfolge erhalten bleibt.',
      },
      {
        question: 'Kann ich doppelte E-Mail-Adressen aus einer Liste entfernen?',
        answer:
          'Ja. Fügen Sie eine Adresse pro Zeile ein, mit deaktivierter Groß-/Kleinschreibung und aktiviertem Leerzeichen-Trimmen, und doppelte Adressen werden zu einem einzigen Eintrag zusammengeführt.',
      },
      {
        question: 'Verändert das Sortieren die behaltenen Zeilen?',
        answer:
          'Nein. Das Sortieren ordnet die eindeutigen Zeilen nach der Deduplizierung nur alphabetisch neu; es ändert nicht, welche Zeilen als Duplikate gelten.',
      },
      {
        question: 'Entfernt das Tool doppelte Wörter innerhalb einer einzigen Zeile?',
        answer:
          'Nein. Es vergleicht ganze Zeilen, daher werden Duplikate innerhalb einer Zeile nicht berührt; nutzen Sie das Suchen-und-Ersetzen-Tool für eine Bereinigung auf Wortebene.',
      },
      {
        question: 'Funktioniert das Tool mit Zahlen oder IP-Adressen?',
        answer:
          'Ja. Jeder Zeileninhalt funktioniert, einschließlich Zahlen, IP-Adressen, SKUs und Codes, solange jedes Element in einer eigenen Zeile steht.',
      },
      {
        question: 'Kann ich doppelte Zeilen aus Serverprotokollen entfernen?',
        answer:
          'Ja. Fügen Sie die Protokollzeilen ein und deduplizieren Sie sie, um eindeutige Fehler oder wiederholte IP-Einträge zu isolieren und schneller Fehler zu beheben.',
      },
      {
        question: 'Speichert oder sendet das Tool zum Entfernen doppelter Zeilen meine Liste?',
        answer:
          'Nein. Die Deduplizierung erfolgt lokal in Ihrem Browser, und Ihre Liste wird niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Was mache ich, wenn meine Liste Semikolons statt Zeilenumbrüche verwendet?',
        answer:
          'Das Tool behandelt jede Zeile als ein Element, daher ersetzen Sie zuerst die Semikolons durch Zeilenumbrüche und fügen Sie die Liste dann zum Deduplizieren ein.',
      },
      {
        question: 'Kann ich Duplikate entfernen und dabei Leerzeilen behalten?',
        answer:
          'Ja. Lassen Sie „Leerzeilen entfernen“ deaktiviert, und Leerzeilen bleiben zusammen mit den deduplizierten Elementen in der Ausgabe erhalten.',
      },
      {
        question: 'Funktioniert das Tool auf dem Handy?',
        answer:
          'Ja. Es funktioniert in jedem modernen mobilen Browser mit denselben Deduplizierungsoptionen und derselben Kopieren-Schaltfläche.',
      },
    ],
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
    instructions: [
      {
        title: 'Beide Versionen einfügen',
        description:
          'Geben Sie die Referenzkopie in „Originaltext“ und die überarbeitete Version in „Geänderter Text“ ein.',
      },
      {
        title: 'Vergleichsoptionen anpassen',
        description:
          'Aktivieren Sie „Leerzeichen ignorieren“ oder „Groß-/Kleinschreibung ignorieren“, wenn Sie nur Formatierungsänderungen überspringen möchten.',
      },
      {
        title: 'Hervorgehobene Änderungen prüfen',
        description:
          'Durchsuchen Sie das Feld „Zeilenvergleich“ mit den Markierungen + hinzugefügt, − gelöscht und den Zeilennummern.',
      },
      {
        title: 'Änderungszusammenfassung lesen',
        description:
          'Lesen Sie die Zähler für hinzugefügte, gelöschte und unveränderte Zeilen, um schnell zu sehen, wie umfangreich die Änderungen zwischen den beiden Versionen sind.',
      },
      {
        title: 'Nur einen bestimmten Abschnitt vergleichen',
        description:
          'Fügen Sie nur den Abschnitt, der Sie interessiert, in beide Felder ein, um einen einzelnen Absatz oder Konfigurationsblock ohne den Rest des Dokuments zu vergleichen.',
      },
      {
        title: 'Falsch wirkenden Diff beheben',
        description:
          'Wenn fast jede Zeile als geändert erscheint, verwenden die beiden Texte möglicherweise unterschiedliche Zeilenenden oder Einrückungen; aktivieren Sie „Leerzeichen ignorieren“ und prüfen Sie, ob beide Einfügungen in derselben Zeile beginnen.',
      },
    ],
    examples: [
      {
        title: 'Prüfung einer Konfigurationsänderung',
        input: 'Original: Cache-TTL: 600\nGeändert: Cache-TTL: 1800',
        output: '- Cache-TTL: 600\n+ Cache-TTL: 1800',
        explanation:
          'Isoliert die geänderte Zeile klar mit alten und neuen Zeilennummern.',
      },
      {
        title: 'Überarbeitung eines Artikelabsatzes',
        input: 'Original: Der Start erfolgt im März.\nGeändert: Der Start erfolgt im April.',
        output: '- Der Start erfolgt im März.\n+ Der Start erfolgt im April.',
        explanation:
          'Zeigt genau, welcher Satz sich zwischen den beiden Entwurfsversionen geändert hat.',
      },
    ],
    benefits: [
      'Verwendet LCS-Ausrichtung (längste gemeinsame Teilfolge) statt einfacher Indexübereinstimmung',
      'Kombiniert Farbhervorhebung mit + / −-Symbolen für Farbenblindheit-Zugänglichkeit',
      'Verfolgt Original- und geänderte Zeilennummern nebeneinander',
      'Hält vertrauliche Entwürfe und Konfigurationsdateien strikt im lokalen Browser-Arbeitsspeicher',
    ],
    useCases: [
      'Änderungen zwischen zwei Überarbeitungen eines Artikels oder Vertrags prüfen',
      'Änderungen in .env-, JSON- oder YAML-Konfigurationsausschnitten untersuchen',
      'Übersetzungsaktualisierungen oder Überarbeitungen rechtlicher Richtlinien prüfen',
      'Entwurfsüberarbeitungen von Studierenden oder Teams schnell kontrollieren',
    ],
    faqs: [
      {
        question: 'Wie behandelt der Diff-Algorithmus Zeilen, die in der Mitte einer Datei eingefügt werden?',
        answer:
          'Da er einen zeilenweisen Diff-Algorithmus auf Basis der längsten gemeinsamen Teilfolge (LCS) verwendet, verschiebt das Einfügen von Zeilen die folgenden Zeilennummern, ohne den Rest der Datei als geändert zu markieren.',
      },
      {
        question: 'Was bewirkt „Leerzeichen ignorieren“?',
        answer:
          'Diese Option entfernt Leerzeichen am Anfang und Ende und fasst mehrere aufeinanderfolgende Leerzeichen zusammen, bevor Zeilen verglichen werden, was hilft, sich auf Inhaltsänderungen statt auf Einrückungskorrekturen zu konzentrieren.',
      },
      {
        question: 'Gibt es ein Zeichenlimit für den Textvergleich?',
        answer:
          'Der Vergleich erfolgt direkt in Ihrem Browser ohne Serverlimits; typische Dokumente mit mehreren tausend Zeilen werden fast sofort verglichen.',
      },
      {
        question: 'Ist der Textvergleich kostenlos?',
        answer:
          'Ja. Der Textvergleich ist vollständig kostenlos, ohne Anmeldung, ohne Vergleichslimit und ohne Konto.',
      },
      {
        question: 'Was ist der Unterschied zwischen hinzugefügten und gelöschten Zeilen?',
        answer:
          'Hinzugefügte Zeilen erscheinen nur im geänderten Text und sind mit einem +-Symbol markiert, während gelöschte Zeilen nur im Originaltext erscheinen und mit einem −-Symbol markiert sind.',
      },
      {
        question: 'Kann ich zwei Dateien statt eingefügten Text vergleichen?',
        answer:
          'Nicht direkt. Kopieren Sie den Inhalt jeder Datei und fügen Sie ihn in die Felder „Originaltext“ und „Geänderter Text“ ein, um sie zu vergleichen.',
      },
      {
        question: 'Funktioniert der Textvergleich mit Code?',
        answer:
          'Ja. Er vergleicht jeden zeilenbasierten Text, einschließlich Quellcode, sodass Sie geänderte Zeilen zwischen zwei Versionen eines Skripts oder Stylesheets erkennen können.',
      },
      {
        question: 'Kann ich JSON- oder YAML-Konfigurationsdateien vergleichen?',
        answer:
          'Ja. Fügen Sie jede Version in die beiden Felder ein, und der Diff hebt geänderte Schlüssel, Werte und Zeilen Ihrer Konfiguration hervor.',
      },
      {
        question: 'Was bewirkt „Groß-/Kleinschreibung ignorieren“?',
        answer:
          'Diese Option behandelt Groß- und Kleinbuchstaben beim Vergleich als gleich, sodass eine Zeile, bei der sich nur die Großschreibung geändert hat, nicht als unterschiedlich markiert wird.',
      },
      {
        question: 'Kann ich Texte in verschiedenen Sprachen vergleichen?',
        answer:
          'Ja. Der Vergleich funktioniert mit jedem Text, auch wenn Zeilen in verschiedenen Sprachen natürlich als geändert erscheinen, weil sich ihr Inhalt unterscheidet.',
      },
      {
        question: 'Zeigt der Textvergleich Änderungen auf Zeichenebene?',
        answer:
          'Nein. Der Vergleich arbeitet Zeile für Zeile, daher markiert ein geändertes Wort die gesamte Zeile als geändert; für mehr Detail vergleichen Sie die beiden Zeilen separat.',
      },
      {
        question: 'Kann ich ein Dokument mit seiner alten Version vergleichen?',
        answer:
          'Ja. Fügen Sie die alte Version als „Originaltext“ und die neue Version als „Geänderter Text“ ein, um jede Hinzufügung und Löschung zu sehen.',
      },
      {
        question: 'Wie werden Zeilennummern im Vergleich angezeigt?',
        answer:
          'Jede Zeile behält ihre eigene Nummer aus ihrem Ursprungstext, damit Sie eine geänderte Zeile an ihrer genauen Position in der einen oder anderen Version wiederfinden.',
      },
      {
        question: 'Speichert oder sendet der Textvergleich meinen Text?',
        answer:
          'Nein. Der Vergleich erfolgt lokal in Ihrem Browser, und Ihre Texte werden niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Kann ich juristische Verträge mit dem Textvergleich vergleichen?',
        answer:
          'Ja. Fügen Sie beide Vertragsversionen ein, um geänderte Klauseln zu erkennen, auch wenn Sie wichtige rechtliche Änderungen immer von einem Anwalt prüfen lassen sollten.',
      },
      {
        question: 'Was passiert, wenn ich denselben Text in beide Felder einfüge?',
        answer:
          'Der Vergleich zeigt null hinzugefügte und null gelöschte Zeilen an und bestätigt damit, dass beide Texte identisch sind.',
      },
      {
        question: 'Kann ich Text mit unterschiedlichen Zeilenenden vergleichen?',
        answer:
          'Ja. Wenn sich die Zeilenenden unterscheiden, kann der Diff Zeilen als geändert markieren; das Aktivieren von „Leerzeichen ignorieren“ beseitigt in der Regel diese reinen Formatierungsunterschiede.',
      },
      {
        question: 'Funktioniert der Textvergleich mit großen Dokumenten?',
        answer:
          'Ja. Dokumente mit mehreren tausend Zeilen werden fast sofort im Browser verglichen, ohne jeglichen Server-Upload.',
      },
      {
        question: 'Kann ich den Textvergleich für Übersetzungsüberarbeitungen nutzen?',
        answer:
          'Ja. Fügen Sie die Originalübersetzung und die überarbeitete Übersetzung ein, um jede geänderte Zeile nebeneinander zu prüfen.',
      },
      {
        question: 'Funktioniert der Textvergleich auf dem Handy?',
        answer:
          'Ja. Er funktioniert in jedem modernen mobilen Browser mit demselben Nebeneinander-Vergleich und derselben Hervorhebung.',
      },
    ],
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
    instructions: [
      {
        title: 'Unformatierten Text einfügen',
        description:
          'Fügen Sie Text mit doppelten Leerzeichen, störenden Tabs oder defekten Zeilenumbrüchen in das Feld „Eingabetext“ ein.',
      },
      {
        title: 'Wählen, wie Leerzeichen und Tabs behandelt werden',
        description:
          'Fassen Sie Folgen mehrerer Leerzeichen zu einem einzigen zusammen, wandeln Sie Tabs in einfache Leerzeichen um und trimmen Sie Leerzeichen am Anfang und Ende jeder Zeile.',
      },
      {
        title: 'Zeilenumbruch-Option wählen',
        description:
          'Behalten Sie Absatzumbrüche, entfernen Sie nur Leerzeilen, ersetzen Sie Zeilenumbrüche durch Leerzeichen, um abgeschnittene Sätze zu verbinden, oder entfernen Sie alle Umbrüche für eine einzige durchgehende Zeile.',
      },
      {
        title: 'Bereinigtes Ergebnis prüfen',
        description:
          'Prüfen Sie das Ergebnis im Ausgabefeld und den Zeichenzähler, der genau zeigt, wie viele Zeichen bei der Bereinigung entfernt wurden.',
      },
      {
        title: 'Bereinigten Text kopieren',
        description:
          'Nutzen Sie die Kopieren-Schaltfläche, um das normalisierte Ergebnis zu kopieren und in Ihr Dokument, Formular oder CMS-Feld einzufügen.',
      },
      {
        title: 'Zusammenklebende Sätze korrigieren',
        description:
          'Wenn Wörter aus getrennten Zeilen ohne Leerzeichen zusammenkleben, wechseln Sie zu „Durch Leerzeichen ersetzen“. Wenn Absätze zu einem einzigen Block verschmolzen sind, kehren Sie stattdessen zu „Leerzeilen entfernen“ zurück.',
      },
    ],
    examples: [
      {
        title: 'PDF-Kopieren-und-Einfügen bereinigen',
        input: '   Erste   Zeile mit   überflüssigen Leerzeichen.\n\n\nZweite   Zeile   hier.   ',
        output: 'Erste Zeile mit überflüssigen Leerzeichen.\nZweite Zeile hier.',
        explanation:
          'Fasst doppelte Leerzeichen zusammen, trimmt Ränder und entfernt Abstand-Leerzeilen.',
      },
      {
        title: 'Mehrzeilige Adresse in eine Zeile umwandeln',
        input: 'Musterstraße 12\n10115 Berlin\nDeutschland',
        output: 'Musterstraße 12 10115 Berlin Deutschland',
        explanation:
          'Ersetzt Zeilenumbrüche durch Leerzeichen, um die Adresse in ein einziges Formularfeld einzufügen.',
      },
    ],
    benefits: [
      'Korrigiert defekte Zeilenumbrüche aus PDF-Dokumenten mit einem Klick',
      'Zählt die genaue Anzahl der bei der Bereinigung entfernten Zeichen',
      'Ermöglicht es, Absätze zu behalten und nur überschüssigen Abstand zu entfernen',
      'Verarbeitet alles lokal im Browser',
    ],
    useCases: [
      'Defekten Text reparieren, der aus mehrspaltigen PDFs kopiert wurde',
      'Nachgestellte Leerzeichen vor dem Einfügen in CMS-Felder entfernen',
      'Mehrzeilige Adressen oder Ausschnitte in eine einzige Zeile abflachen',
      'Tab-eingerückte Notizen in sauberen Text mit einfachem Abstand normalisieren',
    ],
    faqs: [
      {
        question: 'Welche Zeilenumbruch-Option sollte ich für Text wählen, der aus einem PDF kopiert wurde?',
        answer:
          'Wählen Sie „Durch Leerzeichen ersetzen“, wenn erzwungene Zeilenumbrüche Sätze mitten im Satz abgeschnitten haben, oder „Leerzeilen entfernen“, wenn jede Zeile bereits ein eigener Absatz oder Listeneintrag ist.',
      },
      {
        question: 'Beeinflusst das Zusammenfassen von Leerzeichen einfache Leerzeichen zwischen Wörtern?',
        answer:
          'Nein. Nur Folgen von zwei oder mehr aufeinanderfolgenden Leerzeichen werden zu einem einzigen Leerzeichen zusammengefasst.',
      },
      {
        question: 'Entfernt das Tool auch Tabs?',
        answer:
          'Ja, wenn „Tabs in Leerzeichen umwandeln“ aktiviert ist, werden Tabulatorzeichen in einfache Leerzeichen umgewandelt und mit benachbarten Leerzeichen zusammengeführt.',
      },
      {
        question: 'Ist der Leerzeichen-Entferner kostenlos?',
        answer:
          'Ja. Er ist vollständig kostenlos, ohne Anmeldung, ohne Konto und ohne Limit für die Anzahl der Bereinigungen.',
      },
      {
        question: 'Verlässt mein Text den Browser, wenn ich den Leerzeichen-Entferner nutze?',
        answer:
          'Nein. Die gesamte Bereinigung erfolgt lokal in Ihrem Browser, daher wird Ihr Text niemals an einen Server gesendet.',
      },
      {
        question: 'Was bewirkt die Option „Leerzeilen entfernen“?',
        answer:
          'Sie entfernt Leerzeilen aus Ihrem Text, behält aber jede Zeile mit Inhalt, sodass Absätze und Listeneinträge in der Reihenfolge bleiben.',
      },
      {
        question: 'Kann ich Absatzumbrüche behalten und trotzdem überflüssige Leerzeichen entfernen?',
        answer:
          'Ja. Wählen Sie die Option, die Zeilenumbrüche beibehält und nur überflüssige Leerzeichen zusammenfasst, damit Ihre Absätze getrennt bleiben, während der Abstand innerhalb korrigiert wird.',
      },
      {
        question: 'Was ist der Unterschied zwischen „Durch Leerzeichen ersetzen“ und dem Entfernen aller Zeilenumbrüche?',
        answer:
          '„Durch Leerzeichen ersetzen“ verbindet Zeilen mit einem einzigen Leerzeichen, damit abgeschnittene Sätze korrekt lesbar sind, während das Entfernen aller Umbrüche Zeilen direkt ohne Leerzeichen dazwischen verbindet.',
      },
      {
        question: 'Entfernt der Leerzeichen-Entferner nachgestellte Leerzeichen am Zeilenende?',
        answer:
          'Ja. Leerzeichen und Tabs am Ende jeder Zeile werden getrimmt, was vor dem Einfügen von Text in Formulare oder Codefelder nützlich ist.',
      },
      {
        question: 'Entfernt er führende Leerzeichen und Einrückungen am Zeilenanfang?',
        answer:
          'Ja. Leerzeichen am Anfang jeder Zeile werden getrimmt, sodass eingerückter oder falsch ausgerichteter eingefügter Text sauber ausgerichtet wird.',
      },
      {
        question: 'Kann ich mit dem Leerzeichen-Entferner Text bereinigen, der aus einer Tabelle kopiert wurde?',
        answer:
          'Ja. Tabs zwischen Tabellenzellen werden in einfache Leerzeichen umgewandelt, und zusätzliche Leerzeilen aus kopierten Bereichen werden entfernt.',
      },
      {
        question: 'Wie wandle ich mehrzeiligen Text in eine einzige Zeile um?',
        answer:
          'Fügen Sie Ihren Text ein, wählen Sie dann die Option, die Zeilenumbrüche durch Leerzeichen ersetzt oder alle Umbrüche entfernt, und kopieren Sie die erhaltene einzeilige Ausgabe.',
      },
      {
        question: 'Verändert der Leerzeichen-Entferner Satzzeichen, Buchstaben oder Zahlen?',
        answer:
          'Nein. Er ändert nur Leerzeichen wie Spaces, Tabs und Zeilenumbrüche; Ihre Wörter, Satzzeichen und Zahlen bleiben exakt wie sie sind.',
      },
      {
        question: 'Kann ich den Leerzeichen-Entferner nutzen, um Text vor dem Einfügen in ein Formular zu bereinigen?',
        answer:
          'Ja. Er eignet sich ideal, um nachgestellte Leerzeichen und störende Zeilenumbrüche aus Adressen, Namen oder Beschreibungen zu entfernen, bevor Sie sie in ein Webformular oder CMS-Feld eingeben.',
      },
      {
        question: 'Was bedeutet der Zeichenzähler, der nach der Bereinigung angezeigt wird?',
        answer:
          'Er zeigt, wie viele Zeichen bei der Bereinigung entfernt wurden, damit Sie genau sehen, wie viele überflüssige Leerzeichen das Tool aus Ihrem Text entfernt hat.',
      },
      {
        question: 'Funktioniert der Leerzeichen-Entferner bei sehr langen Dokumenten?',
        answer:
          'Ja. Da er lokal in Ihrem Browser arbeitet, können Sie lange Dokumente einfügen, auch wenn extrem große Textblöcke einen Moment zur Verarbeitung brauchen können.',
      },
      {
        question: 'Kann ich eine Bereinigung rückgängig machen, wenn ich die falsche Option wähle?',
        answer:
          'Ihr Originaltext bleibt im Eingabefeld, daher können Sie einfach eine andere Option wählen, und die Ausgabe aktualisiert sich, ohne dass Ihr eingefügter Text verloren geht.',
      },
      {
        question: 'Entfernt der Leerzeichen-Entferner Leerzeichen innerhalb von Wörtern?',
        answer:
          'Nein. Leerzeichen innerhalb von Wörtern sind einfache Leerzeichen, daher werden sie nicht berührt; nur Folgen von zwei oder mehr Leerzeichen werden zusammengefasst.',
      },
      {
        question: 'Welche Arten von Leerzeichen bereinigt das Tool?',
        answer:
          'Es bereinigt normale Leerzeichen, Tabulatorzeichen, nachgestellte und führende Leerzeichen in Zeilen, Leerzeilen und unerwünschte Zeilenumbrüche.',
      },
      {
        question: 'Kann ich den Leerzeichen-Entferner für Code nutzen?',
        answer:
          'Er funktioniert für Fließtext, aber seien Sie vorsichtig bei Code, der auf Einrückung angewiesen ist, wie Python, da das Trimmen führender Leerzeichen das Verhalten des Codes ändern kann.',
      },
    ],
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
    instructions: [
      {
        title: 'Ein Element pro Zeile eingeben',
        description:
          'Fügen Sie Ihre Liste in das Feld „Eingabezeilen“ ein, mit jedem Element in einer eigenen Zeile.',
      },
      {
        title: 'Sortierreihenfolge wählen',
        description:
          'Wählen Sie A → Z, Z → A, Natürlich (1, 2, 10), Kürzeste / Längste zuerst, Reihenfolge umkehren oder Mischen.',
      },
      {
        title: 'Groß-/Kleinschreibung festlegen',
        description:
          'Aktivieren Sie den groß-/kleinschreibungsempfindlichen Vergleich, wenn Groß- und Kleinbuchstaben separat sortiert werden sollen; sonst werden „Apfel“ und „apfel“ gleich behandelt.',
      },
      {
        title: 'Bereinigungsoptionen aktivieren',
        description:
          'Entfernen Sie optional Leerzeilen oder Duplikate im selben Durchgang, damit Ihre sortierte Liste sauber herauskommt.',
      },
      {
        title: 'Sortierte Liste prüfen und kopieren',
        description:
          'Prüfen Sie die sortierte Ausgabe in der Reihenfolge und kopieren Sie sie mit einem Klick, um sie in Ihr Dokument, Ihre Tabelle oder Codedatei einzufügen.',
      },
      {
        title: 'Falsch sortierte nummerierte Elemente korrigieren',
        description:
          'Wenn „Element 10“ vor „Element 2“ erscheint, wechseln Sie von A → Z zur natürlichen Sortierung, die Zahlen innerhalb jeder Zeile numerisch vergleicht.',
      },
    ],
    examples: [
      {
        title: 'Natürliche Zahlensortierung vs. Standard-Textsortierung',
        input: 'Element 10\nElement 2\nElement 1',
        output: 'Element 1\nElement 2\nElement 10',
        explanation:
          'Der natürliche Modus vergleicht eingebettete Zahlen numerisch, daher steht Element 2 vor Element 10.',
      },
      {
        title: 'Einfache alphabetische Sortierung einer Liste',
        input: 'Banane\nApfel\nKirsche',
        output: 'Apfel\nBanane\nKirsche',
        explanation:
          'Die Sortierung A → Z ordnet Elemente alphabetisch, wobei Umlaute vom sprachsensitiven Vergleicher behandelt werden.',
      },
    ],
    benefits: [
      'Enthält einen sprachsensitiven Vergleicher und natürliche Zahlensortierung',
      'Kombiniert Sortieren mit dem Entfernen von Leerzeilen und Deduplizierung',
      'Unterstützt längenbasiertes Sortieren für UI-Tabellen und Textprüfungen',
      'Sofortiges Kopieren des sortierten Ergebnisses mit einem Klick',
    ],
    useCases: [
      'Bibliografien, Glossare und Referenzlisten alphabetisch ordnen',
      'Nummerierte Dateien oder Testfälle natürlich ordnen (Element 1, 2, 10)',
      'CSS-Eigenschaften, Imports oder Umgebungsvariablen sortieren',
      'Gewinnspiel-Teilnahmen oder Quizfragen mit „Mischen“ randomisieren',
    ],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen A → Z und natürlicher Sortierung?',
        answer:
          'Die alphabetische Standardsortierung setzt „Element 10“ vor „Element 2“, weil „1“ vor „2“ kommt. Die natürliche Sortierung analysiert Zahlen in Zeichenketten, daher steht „Element 2“ vor „Element 10“.',
      },
      {
        question: 'Kann ich beim Sortieren doppelte Einträge entfernen?',
        answer:
          'Ja. Aktivieren Sie die Option „Duplikate entfernen“, um Ihre Liste gleichzeitig zu deduplizieren und zu sortieren.',
      },
      {
        question: 'Wie unterscheidet sich „Reihenfolge umkehren“ von Z → A?',
        answer:
          'Z → A sortiert in absteigender alphabetischer Reihenfolge, während „Reihenfolge umkehren“ Ihre bestehende Zeilenfolge von unten nach oben dreht, ohne alphabetisch zu ordnen.',
      },
      {
        question: 'Ist das Tool zum Sortieren von Zeilen kostenlos?',
        answer:
          'Ja. Es ist vollständig kostenlos, ohne Anmeldung, ohne Konto und ohne Limit für die Anzahl der Listen, die Sie sortieren.',
      },
      {
        question: 'Verlässt meine Liste den Browser, wenn ich sie sortiere?',
        answer:
          'Nein. Das Sortieren erfolgt lokal in Ihrem Browser, daher wird Ihre Liste niemals an einen Server gesendet.',
      },
      {
        question: 'Was ist natürliche Sortierung und wann sollte ich sie nutzen?',
        answer:
          'Die natürliche Sortierung vergleicht Zahlen innerhalb von Text numerisch, daher nutzen Sie sie für nummerierte Elemente wie „Kapitel 2“ und „Kapitel 10“, um sie in der echten Zahlenreihenfolge zu halten.',
      },
      {
        question: 'Kann ich eine Liste von Z bis A sortieren?',
        answer:
          'Ja. Wählen Sie die Option Z → A, um Ihre Zeilen in umgekehrter alphabetischer Reihenfolge zu sortieren.',
      },
      {
        question: 'Kann ich Zeilen nach Länge statt alphabetisch sortieren?',
        answer:
          'Ja. Wählen Sie „Kürzeste zuerst“ oder „Längste zuerst“, um Zeilen nach Zeichenlänge zu ordnen, was praktisch ist, um UI-Tabellen zu prüfen oder Text auszurichten.',
      },
      {
        question: 'Was bewirkt die Option „Mischen“ im Tool zum Sortieren von Zeilen?',
        answer:
          '„Mischen“ randomisiert die Reihenfolge Ihrer Zeilen, was für Gewinnspiel-Teilnahmen, Quizfragen oder jede Liste nützlich ist, die Sie in zufälliger Reihenfolge haben möchten.',
      },
      {
        question: 'Entfernt das Tool zum Sortieren von Zeilen Leerzeilen?',
        answer:
          'Ja, wenn Sie die Leerzeilen-Option aktivieren. Sonst bleiben Leerzeilen in der Ausgabe erhalten.',
      },
      {
        question: 'Kann ich mit dem Tool zum Sortieren von Zeilen groß-/kleinschreibungsempfindlich sortieren?',
        answer:
          'Ja. Aktivieren Sie den groß-/kleinschreibungsempfindlichen Vergleich, um Groß- und Kleinbuchstaben separat zu sortieren; bei deaktivierter Option werden „Apfel“ und „apfel“ gleich behandelt.',
      },
      {
        question: 'Funktioniert das Tool zum Sortieren von Zeilen mit Zahlen und Daten?',
        answer:
          'Ja. Die natürliche Sortierung ordnet eingebettete Zahlen korrekt, und Daten sortieren sich korrekt, wenn sie im Format JJJJ-MM-TT geschrieben sind; andere Datumsformate sortieren sich wie reiner Text.',
      },
      {
        question: 'Kann ich Spalten innerhalb einer Zeile sortieren, wie CSV-Werte?',
        answer:
          'Nein. Das Tool sortiert ganze Zeilen, daher bewegt sich jede Zeile als Einheit; es ordnet durch Kommas getrennte Werte innerhalb einer einzigen Zeile nicht neu.',
      },
      {
        question: 'Was passiert mit doppelten Zeilen beim Sortieren?',
        answer:
          'Duplikate bleiben in der Liste, es sei denn, Sie aktivieren „Duplikate entfernen“, das vor dem Sortieren nur das erste Auftreten jeder Zeile behält.',
      },
      {
        question: 'Kann ich eine Liste umkehren, ohne sie alphabetisch zu sortieren?',
        answer:
          'Ja. Nutzen Sie „Reihenfolge umkehren“, um Ihre Liste von unten nach oben zu drehen, während der Text innerhalb jeder Zeile unverändert bleibt.',
      },
      {
        question: 'Behandelt das Tool zum Sortieren von Zeilen Umlaute und andere Sprachen?',
        answer:
          'Ja. Es verwendet einen sprachsensitiven Vergleicher, daher werden Umlaute und nicht-englische Buchstaben in einer logischen Reihenfolge statt nach rohen Zeichencodes sortiert.',
      },
      {
        question: 'Kann ich eine nummerierte Liste wie „1. Apfel, 2. Banane, 10. Kirsche“ sortieren?',
        answer:
          'Ja. Die natürliche Sortierung liest Zahlen am Anfang jeder Zeile, daher steht „2. Banane“ korrekt vor „10. Kirsche“.',
      },
      {
        question: 'Wie groß kann eine Liste sein, die das Tool zum Sortieren von Zeilen verarbeitet?',
        answer:
          'Es arbeitet lokal in Ihrem Browser und verarbeitet lange Listen problemlos, auch wenn extrem große Einfügungen mit zehntausenden Zeilen einen Moment brauchen können.',
      },
      {
        question: 'Verändert das Sortieren den Text innerhalb jeder Zeile?',
        answer:
          'Nein. Das Sortieren ändert nur die Reihenfolge der Zeilen; Wörter, Zahlen und Satzzeichen innerhalb jeder Zeile bleiben exakt gleich.',
      },
      {
        question: 'Kann ich eine Sortierung rückgängig machen, wenn ich die falsche Reihenfolge wähle?',
        answer:
          'Ihre Originalliste bleibt im Eingabefeld, daher können Sie eine andere Sortierreihenfolge wählen, und die Ausgabe aktualisiert sich, ohne dass Ihre eingefügte Liste verloren geht.',
      },
    ],
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
    instructions: [
      {
        title: 'Suchen- und Ersetzen-Begriffe eingeben',
        description:
          'Geben Sie den zu suchenden Text oder das Muster in „Suchen“ und die Zielzeichenkette in „Ersetzen durch“ ein.',
      },
      {
        title: 'Abgleich-Flags festlegen',
        description:
          'Aktivieren Sie „Groß-/Kleinschreibung beachten“, „Nur ganzes Wort“ oder „Regulären Ausdruck (RegExp) verwenden“ für den Musterabgleich.',
      },
      {
        title: 'Zu bearbeitenden Text einfügen',
        description:
          'Fügen Sie das vollständige Dokument, den CSV-Ausschnitt oder den Codeblock in das Quelltextfeld ein, damit jedes Vorkommen in einem Durchgang abgedeckt wird.',
      },
      {
        title: 'Live-Trefferzähler prüfen',
        description:
          'Prüfen Sie den Live-Zähler der ersetzten Vorkommen, um zu bestätigen, dass der Abgleich genau die erwarteten Stellen trifft, bevor Sie kopieren.',
      },
      {
        title: 'Ausgabe prüfen und kopieren',
        description:
          'Durchsuchen Sie den aktualisierten Text nach unbeabsichtigten Änderungen und kopieren Sie ihn dann mit einem Klick, um ihn wieder in Ihr Dokument oder Ihren Editor einzufügen.',
      },
      {
        title: 'Abgleich korrigieren, der nichts ersetzt',
        description:
          'Wenn der Zähler bei null steht, prüfen Sie die Groß-/Kleinschreibung, deaktivieren Sie „Nur ganzes Wort“ oder escapen Sie Sonderzeichen wie . und ( im RegExp-Modus; ungültige Muster zeigen eine Syntaxfehler-Meldung.',
      },
    ],
    examples: [
      {
        title: 'Neuformatierung mit Regex-Capture-Gruppe',
        input: 'Suchen: Bestellung Nr. (\\d+)  |  Ersetzen: Ref-$1\nQuelle: Bestellung Nr. 1042 versendet.',
        output: 'Ref-1042 versendet.',
        explanation:
          'Verwendet eine RegExp-Capture-Gruppe ($1), um die numerische Bestellnummer zu erhalten und dabei das Präfix zu ändern.',
      },
      {
        title: 'Markennamen in einem Dokument ersetzen',
        input: 'Suchen: AlteMarke  |  Ersetzen: NeueMarke\nQuelle: Willkommen bei AlteMarke, Ihrem AlteMarke-Partner.',
        output: 'Willkommen bei NeueMarke, Ihrem NeueMarke-Partner.',
        explanation:
          'Ersetzt jedes Vorkommen des Markennamens im gesamten Dokument in einem Durchgang.',
      },
    ],
    benefits: [
      'Zeigt Live-Trefferzähler und klare Syntaxfehler-Rückmeldung bei ungültigen RegExp-Mustern',
      'Die Ganzwort-Option verhindert versehentliche Teiltreffer innerhalb längerer Wörter',
      'Unterstützt RegExp-Capture-Gruppen ($1, $2) für strukturierte Textumschreibungen',
      'Läuft lokal, sodass private Ausschnitte und Zugangsdaten auf Ihrem Gerät bleiben',
    ],
    useCases: [
      'Markennamen, URLs oder Daten in langen Dokumenten austauschen',
      'IDs oder Daten mit Capture-Gruppen regulärer Ausdrücke neu formatieren',
      'Trennzeichen oder Platzhaltervariablen in Vorlagen aktualisieren',
      'Wiederholte Tippfehler vor der Veröffentlichung bereinigen',
    ],
    faqs: [
      {
        question: 'Kann ich Capture-Gruppen wie $1 im RegExp-Modus nutzen?',
        answer:
          'Ja. Im RegExp-Modus können Sie Gruppen in Klammern erfassen und sie in der Ersetzung als $1, $2 usw. referenzieren, um Teile des Treffers zu erhalten oder neu anzuordnen.',
      },
      {
        question: 'Warum ist „Nur ganzes Wort“ im RegExp-Modus deaktiviert?',
        answer:
          'Im RegExp-Modus steuern Sie Wortgrenzen selbst mit \\b im Muster, daher ist die separate Ganzwort-Option dort nicht nötig und wird deaktiviert.',
      },
      {
        question: 'Löscht ein leeres „Ersetzen durch“-Feld den gefundenen Text?',
        answer:
          'Ja. Wenn das Ersetzen-Feld leer bleibt, werden alle Treffer entfernt, was nützlich ist, um unerwünschte Wörter oder Zeichen aus einem Text zu löschen.',
      },
      {
        question: 'Ist das Suchen-und-Ersetzen-Tool kostenlos?',
        answer:
          'Ja. Das Suchen-und-Ersetzen-Tool ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig viele Ersetzungen in beliebig langen Texten durchführen, direkt im Browser und ohne versteckte Limits.',
      },
      {
        question: 'Verlässt mein Text den Browser, wenn ich Suchen und Ersetzen nutze?',
        answer:
          'Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, und Ihr Text wird niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Was zeigt der Live-Trefferzähler?',
        answer:
          'Er zeigt, wie viele Vorkommen des Suchbegriffs im Text gefunden und ersetzt wurden, damit Sie vor dem Kopieren prüfen können, ob der Abgleich stimmt.',
      },
      {
        question: 'Kann ich nur ganze Wörter ersetzen und nicht Teile längerer Wörter?',
        answer:
          'Ja. Aktivieren Sie „Nur ganzes Wort“, damit zum Beispiel „Katze“ nicht innerhalb von „Katzenfutter“ ersetzt wird.',
      },
      {
        question: 'Ist Suchen und Ersetzen groß-/kleinschreibungsempfindlich?',
        answer:
          'Nur wenn Sie „Groß-/Kleinschreibung beachten“ aktivieren. Standardmäßig ignoriert der Abgleich die Großschreibung, sodass „Apfel“ auch „apfel“ findet.',
      },
      {
        question: 'Kann ich Text über mehrere Zeilen hinweg ersetzen?',
        answer:
          'Ja. Der Abgleich funktioniert im gesamten eingefügten Text, einschließlich Zeilenumbrüchen; im RegExp-Modus können Sie mit \\n explizit Zeilenumbrüche abgleichen.',
      },
      {
        question: 'Was passiert, wenn mein regulärer Ausdruck ungültig ist?',
        answer:
          'Das Tool zeigt eine klare Syntaxfehler-Meldung an, statt abzustürzen, und die Ausgabe bleibt unverändert, bis Sie das Muster korrigieren.',
      },
      {
        question: 'Kann ich Sonderzeichen wie Zeilenumbrüche oder Tabs in Suchen und Ersetzen abgleichen?',
        answer:
          'Ja. Im RegExp-Modus können Sie \\n für Zeilenumbrüche und \\t für Tabs verwenden, um Steuerzeichen gezielt zu finden und zu ersetzen.',
      },
      {
        question: 'Kann ich mit Capture-Gruppen zwei Wörter vertauschen?',
        answer:
          'Ja. Erfassen Sie beide Wörter in Gruppen, zum Beispiel (\\w+) (\\w+), und ersetzen Sie sie mit $2 $1, um ihre Reihenfolge zu tauschen.',
      },
      {
        question: 'Kann ich den gesamten gefundenen Text in die Ersetzung einfügen?',
        answer:
          'Ja. Im RegExp-Modus steht $& für den gesamten Treffer, sodass Sie ihn zum Beispiel mit Präfix oder Suffix umgeben können.',
      },
      {
        question: 'Kann ich URLs oder Daten in einem ganzen Dokument ersetzen?',
        answer:
          'Ja. Fügen Sie das gesamte Dokument ein, und alle Vorkommen der URL oder des Datums werden in einem Durchgang ersetzt.',
      },
      {
        question: 'Ändert Suchen und Ersetzen nur das erste Vorkommen oder alle?',
        answer:
          'Es ersetzt alle Vorkommen im Text, nicht nur das erste, und der Live-Zähler zeigt, wie viele ersetzt wurden.',
      },
      {
        question: 'Funktioniert Suchen und Ersetzen bei Code?',
        answer:
          'Ja. Sie können Bezeichner, Zeichenketten oder Muster in Codeblöcken ersetzen; seien Sie bei der Groß-/Kleinschreibung vorsichtig, damit keine unbeabsichtigten Stellen geändert werden.',
      },
      {
        question: 'Kann ich einen wiederholten Tippfehler mit Suchen und Ersetzen korrigieren?',
        answer:
          'Ja. Geben Sie den falsch geschriebenen Begriff in „Suchen“ und die korrekte Schreibweise in „Ersetzen durch“ ein, um alle Vorkommen auf einmal zu korrigieren.',
      },
      {
        question: 'Welchen Dialekt regulärer Ausdrücke verwendet das Tool?',
        answer:
          'Es verwendet den JavaScript-RegExp-Dialekt (ECMAScript), denselben Motor, der in Browsern und Node.js läuft.',
      },
      {
        question: 'Kann ich eine Ersetzung rückgängig machen, wenn ich einen Fehler mache?',
        answer:
          'Ihr Originaltext bleibt im Eingabefeld, daher können Sie die Suchen- oder Ersetzen-Begriffe korrigieren, und die Ausgabe aktualisiert sich, ohne dass Ihr Text verloren geht.',
      },
      {
        question: 'Gibt es ein Limit, wie viel Text ich mit Suchen und Ersetzen verarbeiten kann?',
        answer:
          'Es gibt kein festes Limit. Die Verarbeitung läuft vollständig in Ihrem Browser, daher werden auch sehr lange Dokumente in einem Durchgang bearbeitet.',
      },
    ],
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
    instructions: [
      {
        title: 'Umkehrmodus wählen',
        description:
          'Wählen Sie zwischen „Zeichen umkehren“, „Wortreihenfolge umkehren“, „Jedes Wort umkehren“ oder „Zeilen umkehren“.',
      },
      {
        title: 'Text eingeben',
        description:
          'Tippen oder fügen Sie den Text ein, den Sie umkehren möchten, in das Eingabefeld.',
      },
      {
        title: 'Live-Vorschau prüfen',
        description:
          'Sehen Sie das umgekehrte Ergebnis sofort, während Sie tippen, ohne eine Schaltfläche drücken zu müssen.',
      },
      {
        title: 'Modi nebeneinander vergleichen',
        description:
          'Wechseln Sie zwischen den vier Modi, um zu sehen, wie sich derselbe Text in jedem Modus verhält, bevor Sie das Ergebnis kopieren.',
      },
      {
        title: 'Ausgabe kopieren',
        description:
          'Kopieren Sie das umgekehrte Ergebnis mit einem Klick in Ihre Zwischenablage.',
      },
      {
        title: 'Tipp: Palindrome prüfen',
        description:
          'Um zu prüfen, ob ein Wort ein Palindrom ist, kehren Sie es um und vergleichen Sie es mit dem Original – bei einem Palindrom sind beide identisch.',
      },
    ],
    examples: [
      {
        title: 'Umkehrmodi vergleichen',
        input: 'Hallo Welt',
        output: 'Zeichen: tleW ollaH · Wortreihenfolge: Welt Hallo · Jedes Wort: ollaH tleW',
        explanation:
          'Zeigt, wie derselbe Text in den drei Zeichen- und Wortmodi aussieht.',
      },
      {
        title: 'Zeilenliste umkehren',
        input: 'Erste Zeile\nZweite Zeile\nDritte Zeile',
        output: 'Dritte Zeile\nZweite Zeile\nErste Zeile',
        explanation:
          'Der Zeilenmodus dreht nur die Reihenfolge der Zeilen um, ohne die Wörter darin zu verändern.',
      },
    ],
    benefits: [
      'Unicode-sichere Zeichentrennung erhält Emojis und Ersatzpaare',
      'Vier verschiedene Modi decken sowohl Zeichenumdrehung als auch Listeninversion ab',
      'Live-Vorschau ohne Klick beim Tippen',
      'Leichtgewichtige Ausführung im Browser',
    ],
    useCases: [
      'Chronologische Protokolle oder Listen von älteste-zuerst zu neueste-zuerst invertieren',
      'Palindrom-Zeichenketten und Rechts-nach-links-Zeichenrandfälle testen',
      '„Vorname Nachname“-Namenslisten oder Wortfolgen umkehren',
      'Rätsel, Chiffren und Wortspiele erstellen',
    ],
    faqs: [
      {
        question: 'Beschädigt „Zeichen umkehren“ Emojis oder Umlaute?',
        answer:
          'Nein. Das Tool trennt Zeichen Unicode-sicher, sodass Emojis, Umlaute und Ersatzpaare beim Umkehren intakt bleiben.',
      },
      {
        question: 'Wie drehe ich eine Zeilenliste um, ohne die Wörter umzukehren?',
        answer:
          'Wählen Sie den Modus „Zeilen umkehren“. Er dreht nur die Reihenfolge der Zeilen von unten nach oben, während der Text innerhalb jeder Zeile unverändert bleibt.',
      },
      {
        question: 'Was ist der Unterschied zwischen „Wortreihenfolge umkehren“ und „Jedes Wort umkehren“?',
        answer:
          '„Wortreihenfolge umkehren“ dreht die Reihenfolge der Wörter im Satz um („Hallo Welt“ wird zu „Welt Hallo“), während „Jedes Wort umkehren“ die Buchstaben innerhalb jedes Wortes spiegelt („Hallo Welt“ wird zu „ollaH tleW“).',
      },
      {
        question: 'Ist der Text-Umkehrer kostenlos?',
        answer:
          'Ja. Der Text-Umkehrer ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Alle Umkehrmodi – Zeichen, Wörter und Zeilen – stehen sofort zur Verfügung, ohne dass Sie sich registrieren müssen.',
      },
      {
        question: 'Verlässt mein Text den Browser, wenn ich den Text-Umkehrer nutze?',
        answer:
          'Nein. Die gesamte Umkehrung erfolgt lokal in Ihrem Browser, und Ihr Text wird niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Was sind die vier Umkehrmodi im Text-Umkehrer?',
        answer:
          'Die vier Modi sind: Zeichen umkehren, Wortreihenfolge umkehren, jedes Wort umkehren und Zeilen umkehren – jeder dreht den Text auf eine andere Weise um.',
      },
      {
        question: 'Kann ich einen ganzen Absatz mit dem Text-Umkehrer umkehren?',
        answer:
          'Ja. Fügen Sie den gesamten Absatz ein, und der gewählte Modus kehrt ihn in einem Durchgang um.',
      },
      {
        question: 'Kann ich mit dem Text-Umkehrer einen Spiegeleffekt erzeugen?',
        answer:
          'Ja. Der Modus „Zeichen umkehren“ erzeugt gespiegelten Text, der wie ein Spiegelbild aussieht und für Rätsel oder Dekoration genutzt werden kann.',
      },
      {
        question: 'Funktioniert der Text-Umkehrer mit Umlauten?',
        answer:
          'Ja. Umlaute wie ä, ö und ü werden als einzelne Zeichen behandelt und bleiben beim Umkehren korrekt erhalten.',
      },
      {
        question: 'Funktioniert der Text-Umkehrer mit Text in anderen Sprachen?',
        answer:
          'Ja. Er kehrt Text in jeder Sprache um, da die Verarbeitung Unicode-sicher ist und keine bestimmte Sprache voraussetzt.',
      },
      {
        question: 'Was ist ein Palindrom und kann der Text-Umkehrer helfen, eines zu prüfen?',
        answer:
          'Ein Palindrom liest sich vorwärts und rückwärts gleich, zum Beispiel „Anna“ oder „Otto“. Kehren Sie das Wort um: Wenn das Ergebnis mit dem Original übereinstimmt, ist es ein Palindrom.',
      },
      {
        question: 'Kann ich den Text-Umkehrer für Rätsel und Wortspiele nutzen?',
        answer:
          'Ja. Umgekehrter Text eignet sich ideal für Rätsel, Chiffren, Wortspiele und Denkaufgaben.',
      },
      {
        question: 'Fügt das Umkehren von Text Leerzeichen hinzu oder entfernt es sie?',
        answer:
          'Nein. Leerzeichen bleiben an ihren relativen Positionen; das Umkehren ändert nur die Reihenfolge der Zeichen, Wörter oder Zeilen, nicht die Anzahl der Leerzeichen.',
      },
      {
        question: 'Kann ich einen sehr langen Textblock umkehren?',
        answer:
          'Ja. Die Verarbeitung läuft vollständig in Ihrem Browser, daher werden auch lange Texte sofort umgekehrt.',
      },
      {
        question: 'Speichert oder speichert der Text-Umkehrer meinen Text?',
        answer:
          'Nein. Ihr Text wird weder gespeichert noch gesendet; alles geschieht lokal in Ihrem Browser-Tab.',
      },
      {
        question: 'Wie kehre ich „Vorname Nachname“-Namen in „Nachname Vorname“ um?',
        answer:
          'Nutzen Sie den Modus „Wortreihenfolge umkehren“: Aus „Max Mustermann“ wird „Mustermann Max“.',
      },
      {
        question: 'Kann der Text-Umkehrer Zahlen umkehren?',
        answer:
          'Ja. Zahlen werden wie andere Zeichen behandelt, sodass aus „12345“ im Zeichenmodus „54321“ wird.',
      },
      {
        question: 'Was passiert mit Zeilenumbrüchen, wenn ich Zeichen umkehre?',
        answer:
          'Im Zeichenmodus werden Zeilenumbrüche wie andere Zeichen mit umgekehrt; im Zeilenmodus bleiben die Zeilen selbst intakt und nur ihre Reihenfolge dreht sich um.',
      },
      {
        question: 'Kann ich eine Umkehrung rückgängig machen?',
        answer:
          'Ja. Wenden Sie denselben Modus einfach erneut auf das umgekehrte Ergebnis an, um den Originaltext zurückzuerhalten.',
      },
      {
        question: 'Ist umgekehrter Text lesbar?',
        answer:
          'Umgekehrter Text ist absichtlich schwer lesbar; er dient Rätseln, Tests und Dekoration, nicht dem normalen Lesen.',
      },
    ],
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
    instructions: [
      {
        title: 'Einheit und Menge wählen',
        description:
          'Wählen Sie, ob Sie Absätze, Sätze oder eine exakte Wortzahl erzeugen möchten, und geben Sie die gewünschte Menge ein.',
      },
      {
        title: 'Formatierung anpassen',
        description:
          'Aktivieren Sie optional das Einbetten in <p>-Tags und entscheiden Sie, ob der Text mit dem klassischen Satz „Lorem ipsum dolor sit amet …“ beginnen soll.',
      },
      {
        title: 'Platzhaltertext erzeugen',
        description:
          'Klicken Sie auf „Erzeugen“, um den Blindtext mit Ihren Einstellungen zu erstellen.',
      },
      {
        title: 'Wort- und Zeichenzahl prüfen',
        description:
          'Prüfen Sie den Live-Zähler für Wörter und Zeichen, um zu bestätigen, dass der Text in Ihr Layout passt, bevor Sie ihn einfügen.',
      },
      {
        title: 'Neu erzeugen oder kopieren',
        description:
          'Klicken Sie auf „Neu erzeugen“, um eine andere Variante zu erhalten, oder kopieren Sie den Text mit einem Klick in Ihre Zwischenablage.',
      },
      {
        title: 'Tipp: Textkürzung testen',
        description:
          'Erzeugen Sie einen langen Absatz, um zu prüfen, wie Ihre Komponente Text abschneidet oder umbrechen lässt, bevor echte Inhalte vorliegen.',
      },
    ],
    examples: [
      {
        title: 'HTML-Mockup-Ausschnitt',
        input: 'Einheit: Absätze · Menge: 1 · In <p>-Tags einbetten: Aktiviert',
        output: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>',
        explanation:
          'Erzeugt sofort einsetzbaren HTML-Platzhaltertext für Front-End-Prototypen.',
      },
      {
        title: 'Exakte Wortzahl für ein Layout',
        input: 'Einheit: Wörter · Menge: 100',
        output: 'Lorem ipsum dolor sit amet ... (genau 100 Wörter)',
        explanation:
          'Erzeugt exakt die gewünschte Wortzahl, um Kartenhöhen und Zeilenumbrüche zu testen.',
      },
    ],
    benefits: [
      'Erzeugt exakte Wort-, Satz- oder Absatzzahlen auf Abruf',
      'Optionales Einbetten in <p>-Tags spart Zeit bei Front-End-Prototypen',
      'Live-Wort- und Zeichenzähler prüft die Layout-Passung vor dem Einfügen',
      'Sofortige Neuerzeugung ohne externe Netzwerkanfragen',
    ],
    useCases: [
      'Kartenhöhen und Zeilenumbrüche in responsiven UI-Layouts stresstesten',
      'Schriftpaarungen, Zeilenhöhen und Satzbreiten in der Vorschau prüfen',
      'Wireframe-Vorlagen und redaktionelle Seiten-Mockups befüllen',
      'Textkürzung und Überlaufverhalten in CSS-Komponenten testen',
    ],
    faqs: [
      {
        question: 'Kann ich eine exakte Wortzahl statt Absätzen erzeugen?',
        answer:
          'Ja. Wählen Sie die Einheit „Wörter“ und geben Sie die gewünschte Anzahl ein, zum Beispiel genau 100 Wörter.',
      },
      {
        question: 'Warum Lorem Ipsum statt eines sich wiederholenden Satzes nutzen?',
        answer:
          'Lorem Ipsum sieht aus wie echter Fließtext mit natürlicher Wortlänge und Satzstruktur, sodass sich Betrachter auf das Design statt auf den Inhalt konzentrieren.',
      },
      {
        question: 'Funktioniert die <p>-Tag-Option auch in den Modi „Sätze“ und „Wörter“?',
        answer:
          'Ja. Die Option bettet die erzeugte Ausgabe unabhängig von der gewählten Einheit in <p>-Tags ein.',
      },
      {
        question: 'Ist der Lorem-Ipsum-Generator kostenlos?',
        answer:
          'Ja. Der Lorem-Ipsum-Generator ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können so viele Absätze, Sätze oder Wörter erzeugen, wie Sie für Ihre Mockups brauchen, ohne jede Begrenzung.',
      },
      {
        question: 'Brauche ich ein Konto oder eine Internetverbindung, um Lorem Ipsum zu erzeugen?',
        answer:
          'Nein. Sobald die Seite geladen ist, läuft die Erzeugung vollständig lokal in Ihrem Browser.',
      },
      {
        question: 'Was ist Lorem Ipsum?',
        answer:
          'Lorem Ipsum ist ein Blindtext, der seit den 1960er-Jahren in der Druck- und Designbranche verwendet wird, um Layouts zu befüllen, bevor echte Inhalte vorliegen.',
      },
      {
        question: 'Kann ich einen einzigen Satz Lorem Ipsum erzeugen?',
        answer:
          'Ja. Wählen Sie die Einheit „Sätze“ und die Menge 1, um genau einen Platzhaltersatz zu erhalten.',
      },
      {
        question: 'Kann ich meinen Text mit dem klassischen Satz „Lorem ipsum dolor sit amet …“ beginnen lassen?',
        answer:
          'Ja. Aktivieren Sie die Option für den klassischen Anfangssatz, und der erzeugte Text beginnt mit „Lorem ipsum dolor sit amet, consectetur adipiscing elit …“.',
      },
      {
        question: 'Kann ich den erzeugten Text direkt in HTML einfügen?',
        answer:
          'Ja. Aktivieren Sie die <p>-Tag-Option, und die Ausgabe ist sofort einsetzbares HTML für Ihre Mockups.',
      },
      {
        question: 'Kann ich genau 100 Wörter Lorem Ipsum erzeugen?',
        answer:
          'Ja. Wählen Sie die Einheit „Wörter“, geben Sie 100 ein, und das Tool erzeugt exakt 100 Wörter.',
      },
      {
        question: 'Ist der erzeugte Lorem-Ipsum-Text immer derselbe?',
        answer:
          'Nein. Jede Erzeugung mischt Sätze aus einem Pool klassischer Lorem-Ipsum-Sätze neu, sodass Sie bei jedem Klick eine andere Variante erhalten.',
      },
      {
        question: 'Ist Lorem Ipsum echtes Latein?',
        answer:
          'Nein. Es ist ein verstümmelter Text, der auf einem Werk von Cicero basiert, aber keine sinnvolle lateinische Bedeutung hat.',
      },
      {
        question: 'Kann ich Lorem Ipsum auf einer veröffentlichten Website nutzen?',
        answer:
          'Sie können es, aber Sie sollten es nicht: Platzhaltertext auf einer Live-Website wirkt unfertig und schadet der Glaubwürdigkeit und dem SEO.',
      },
      {
        question: 'Wozu wird Lorem Ipsum verwendet?',
        answer:
          'Es dient als Platzhalter in Design-Mockups, Wireframes und Layout-Prototypen, damit Designer Typografie und Abstände prüfen können, bevor echte Inhalte vorliegen.',
      },
      {
        question: 'Kann ich die Länge einzelner Sätze steuern?',
        answer:
          'Nicht direkt. Sie steuern die Gesamtzahl der Sätze, Absätze oder Wörter; die einzelnen Sätze stammen aus einem Pool mit unterschiedlichen Längen.',
      },
      {
        question: 'Funktioniert der Lorem-Ipsum-Generator auch für Printdesign?',
        answer:
          'Ja. Der erzeugte Text lässt sich in jede Druck- oder Layout-Anwendung kopieren, um Seitenlayouts zu testen.',
      },
      {
        question: 'Wie teste ich Textkürzung mit Lorem Ipsum?',
        answer:
          'Erzeugen Sie einen langen Absatz und fügen Sie ihn in Ihre Komponente ein, um zu sehen, wo der Text abgeschnitten oder mit Auslassungspunkten gekürzt wird.',
      },
      {
        question: 'Kann ich Lorem Ipsum in einer anderen Sprache erzeugen?',
        answer:
          'Nein. Dieses Tool erzeugt den klassischen lateinischen Blindtext; für Platzhalter in anderen Sprachen nutzen Sie einen sprachspezifischen Generator.',
      },
      {
        question: 'Speichert der Lorem-Ipsum-Generator meinen erzeugten Text?',
        answer:
          'Nein. Der Text wird nur in Ihrem Browser erzeugt und angezeigt; nichts wird gespeichert oder gesendet.',
      },
      {
        question: 'Warum hilft Platzhaltertext Kunden, sich auf das Design zu konzentrieren?',
        answer:
          'Weil Blindtext keine Bedeutung transportiert, diskutieren Kunden das Layout, die Typografie und die Farben statt über Formulierungen des Inhalts.',
      },
    ],
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
    instructions: [
      {
        title: 'Artikel oder Passage einfügen',
        description:
          'Fügen Sie Ihren Text in das Eingabefeld ein; längere Texte liefern zuverlässigere Werte.',
      },
      {
        title: 'Vier Wertekarten prüfen',
        description:
          'Lesen Sie die Karten für Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog und SMOG mit ihren Interpretationen.',
      },
      {
        title: 'Satz- und Silbenaufschlüsselung lesen',
        description:
          'Prüfen Sie die durchschnittliche Wortzahl pro Satz und die Silben pro Wort, um zu verstehen, was Ihren Wert treibt.',
      },
      {
        title: 'Komplexe Wörter finden',
        description:
          'Schauen Sie sich die Liste der Wörter mit drei oder mehr Silben an, die den Text schwerer machen.',
      },
      {
        title: 'Lange Sätze kürzen und erneut prüfen',
        description:
          'Kürzen Sie lange Sätze und ersetzen Sie komplexe Wörter durch einfachere, und fügen Sie den Text erneut ein, um die Verbesserung zu sehen.',
      },
      {
        title: 'Tipp: Zielwert für Webartikel',
        description:
          'Für Webartikel gilt ein Flesch Reading Ease von 60 bis 70 als gut verständlich; darunter sollten Sie Sätze kürzen und Fachbegriffe erklären.',
      },
    ],
    examples: [
      {
        title: 'Leitfaden in einfacher Sprache',
        input: 'Kurze Sätze halten Anleitungen klar. Nutzen Sie einfache Wörter, wenn Sie Schritte erklären.',
        output: 'Flesch Ease ~78 (recht leicht) · Stufe ~5,2',
        explanation:
          'Kurze Sätze und einfache Wörter ergeben einen hohen Lesbarkeitswert.',
      },
      {
        title: 'Schwer verständlicher Fachtext',
        input: 'Die Implementierung der Konfigurationsparameter erfordert eine umfassende Validierung der Abhängigkeiten.',
        output: 'Flesch Ease ~20 (sehr schwer) · Stufe ~16',
        explanation:
          'Lange Wörter mit vielen Silben senken den Lesbarkeitswert deutlich.',
      },
    ],
    benefits: [
      'Berechnet vier weit verbreitete Lesbarkeitsindizes gleichzeitig',
      'Listet beispielhaft gefundene Wörter mit 3+ Silben in Ihrer Passage',
      'Zeigt die exakte durchschnittliche Wortzahl pro Satz und Silben pro Wort',
      'Läuft vollständig offline im Browser-Arbeitsspeicher für unveröffentlichte Entwürfe',
    ],
    useCases: [
      'Dokumentation, UX-Texte und Hilfecenter-Artikel auf Klarheit bearbeiten',
      'Lernmaterialien gegen Zielstufen für Schüler prüfen',
      'Rechtliche, gesundheitliche oder finanzielle Kundenkommunikation vereinfachen',
      'Überfliegbarkeit von Blogbeiträgen und Landingpages verbessern',
    ],
    faqs: [
      {
        question: 'Was ist ein guter Flesch-Reading-Ease-Wert für Webartikel?',
        answer:
          'Für Webartikel gilt ein Wert von 60 bis 70 als gut verständlich für ein breites Publikum; Werte über 80 sind sehr leicht, Werte unter 50 sind schwer zu lesen.',
      },
      {
        question: 'Wie kann ich einen niedrigen Lesbarkeitswert verbessern?',
        answer:
          'Kürzen Sie lange Sätze, ersetzen Sie Wörter mit drei oder mehr Silben durch einfachere Begriffe und teilen Sie lange Absätze in kürzere Abschnitte auf.',
      },
      {
        question: 'Warum erwähnt das Tool die Satzzahl beim SMOG-Index?',
        answer:
          'Der SMOG-Index basiert auf der Anzahl komplexer Wörter in einer Stichprobe von 30 Sätzen; bei kürzeren Texten wird der Wert daher aus den vorhandenen Sätzen hochgerechnet und ist weniger zuverlässig.',
      },
      {
        question: 'Wozu wird die Lesbarkeitsprüfung verwendet?',
        answer:
          'Sie bewertet, wie leicht ein Text zu verstehen ist, und hilft Autoren, Redakteuren und Lehrkräften, Texte an die Zielgruppe anzupassen.',
      },
      {
        question: 'Ist die Lesbarkeitsprüfung kostenlos?',
        answer:
          'Ja. Die Lesbarkeitsprüfung ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig viele Texte prüfen und erhalten jedes Mal sofort die Flesch-Kincaid-Werte und eine verständliche Einordnung.',
      },
      {
        question: 'Was ist das Flesch-Kincaid Grade Level?',
        answer:
          'Es gibt an, für welche US-Schulstufe ein Text geeignet ist: Stufe 8 bedeutet, dass ein Schüler der 8. Klasse den Text verstehen sollte.',
      },
      {
        question: 'Was misst der Gunning-Fog-Index?',
        answer:
          'Er schätzt die Jahre formaler Bildung, die zum Verständnis eines Textes nötig sind, auf Basis von Satzlänge und Anteil komplexer Wörter.',
      },
      {
        question: 'Was ist der SMOG-Index?',
        answer:
          'Der SMOG-Index schätzt ebenfalls die benötigte Schulstufe, basiert aber auf der Anzahl von Wörtern mit drei oder mehr Silben in einer Stichprobe von 30 Sätzen.',
      },
      {
        question: 'Welchen Flesch-Reading-Ease-Wert sollte ich anstreben?',
        answer:
          'Für allgemeine Webinhalte sind 60 bis 70 ein guter Zielbereich; für ein breites Publikum sind 70 bis 80 noch besser.',
      },
      {
        question: 'Wie viele Wörter brauche ich für genaue Lesbarkeitswerte?',
        answer:
          'Mindestens 100 Wörter liefern brauchbare Werte; ab 200 bis 300 Wörtern werden die Indizes deutlich zuverlässiger.',
      },
      {
        question: 'Speichert oder sendet die Lesbarkeitsprüfung meinen Text?',
        answer:
          'Nein. Die gesamte Berechnung erfolgt lokal in Ihrem Browser, und Ihr Text wird niemals hochgeladen, gespeichert oder geteilt.',
      },
      {
        question: 'Warum widersprechen sich die vier Werte?',
        answer:
          'Jede Formel gewichtet Satzlänge und Silbenzahl anders und wurde für unterschiedliche Textarten kalibriert, daher liefern sie unterschiedliche, aber jeweils sinnvolle Einschätzungen.',
      },
      {
        question: 'Wie werden Silben in der Lesbarkeitsprüfung gezählt?',
        answer:
          'Silben werden nach Vokalgruppen im Wort geschätzt; diese Heuristik ist für englischen Text kalibriert und kann bei anderen Sprachen oder Eigennamen ungenau sein.',
      },
      {
        question: 'Kann ich die Lesbarkeit für nicht-englischen Text prüfen?',
        answer:
          'Die Formeln sind für Englisch entwickelt; für deutsche Texte liefern sie nur grobe Anhaltspunkte, da deutsche Wörter im Schnitt mehr Silben haben.',
      },
      {
        question: 'Was zählt als komplexes Wort?',
        answer:
          'Als komplex gilt ein Wort mit drei oder mehr Silben, wobei Eigennamen, zusammengesetzte Wörter und gängige Endungen je nach Formel unterschiedlich behandelt werden.',
      },
      {
        question: 'Beeinflusst Zeichensetzung meinen Lesbarkeitswert?',
        answer:
          'Indirekt: Satzzeichen wie Punkte bestimmen, wo Sätze enden, und damit die durchschnittliche Satzlänge, die in alle Formeln einfließt.',
      },
      {
        question: 'Kann die Lesbarkeitsprüfung beim SEO helfen?',
        answer:
          'Ja. Leicht verständliche Texte halten Leser länger auf der Seite und verbessern das Nutzererlebnis, was sich positiv auf Rankings auswirken kann.',
      },
      {
        question: 'Ist ein höherer Flesch-Reading-Ease-Wert immer besser?',
        answer:
          'Nicht unbedingt. Fachtexte für Experten dürfen komplexer sein; entscheidend ist, dass der Wert zur Zielgruppe und zum Thema passt.',
      },
      {
        question: 'Warum ändert sich mein Wert, wenn ich eine Überschrift hinzufüge?',
        answer:
          'Überschriften werden als kurze Sätze gezählt und senken die durchschnittliche Satzlänge, was den Lesbarkeitswert verbessert.',
      },
      {
        question: 'Kann ich die Lesbarkeitsprüfung für Schüleraufsätze nutzen?',
        answer:
          'Ja. Fügen Sie den Aufsatz ein, um zu prüfen, ob Satzlänge und Wortschatz zur Zielstufe passen.',
      },
    ],
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
    instructions: [
      {
        title: 'Inhalt einfügen',
        description:
          'Fügen Sie Ihren Artikel, Ihre Landingpage oder Ihr Transkript in das Eingabefeld ein.',
      },
      {
        title: '1-Wort-, 2-Wort- oder 3-Wort-Phrasen wählen',
        description:
          'Wählen Sie, ob einzelne Wörter oder Zwei- und Drei-Wort-Phrasen (N-Gramme) analysiert werden sollen.',
      },
      {
        title: 'Stoppwörter filtern und Mindestlänge festlegen',
        description:
          'Aktivieren Sie den Stoppwort-Filter, um Füllwörter wie „der“ und „und“ auszublenden, und legen Sie eine Mindestwortlänge fest.',
      },
      {
        title: 'Zähler und Dichteprozente prüfen',
        description:
          'Lesen Sie die Häufigkeitstabelle mit absoluten Zahlen und Dichteprozenten für jede Phrase.',
      },
      {
        title: 'Übernutzung oder Keyword-Stuffing erkennen',
        description:
          'Prüfen Sie, ob ein Schlüsselwort ungewöhnlich oft vorkommt, und gleichen Sie den Text aus, bevor Sie veröffentlichen.',
      },
      {
        title: 'Ergebnisse als CSV exportieren',
        description:
          'Laden Sie die Häufigkeitstabelle als CSV-Datei herunter, um sie in Excel oder Google Sheets weiter zu analysieren.',
      },
    ],
    examples: [
      {
        title: 'Phrasendichte prüfen',
        input: 'Schnelle Seiten verbessern die Nutzerbindung und die Seitengeschwindigkeit.',
        output: 'Seite: 2 · Seitengeschwindigkeit: 1 · Nutzerbindung: 1',
        explanation:
          'Zeigt, wie oft einzelne Wörter und Phrasen im Text vorkommen.',
      },
      {
        title: 'Keyword-Stuffing erkennen',
        input: 'Unser günstiger Schuh ist der günstigste Schuh. Kaufen Sie günstige Schuhe bei uns.',
        output: 'günstig: 3 (23 %) · Schuh: 3 (23 %) – Übernutzung!',
        explanation:
          'Eine sehr hohe Dichte desselben Schlüsselworts signalisiert Keyword-Stuffing.',
      },
    ],
    benefits: [
      'Unterstützt 1-Wort-, 2-Wort- und 3-Wort-N-Gramm-Analyse',
      'Optionaler Stoppwort-Filter entfernt Füllwörter wie „der“ und „und“',
      'Einstellbare Mindestwortlänge als Schwellenwert',
      'Exportiert saubere CSV-Tabellen für Tabellenkalkulationen',
    ],
    useCases: [
      'Artikelentwürfe prüfen, um unbeabsichtigtes Keyword-Stuffing zu vermeiden',
      'Sich wiederholende sprachliche Ticks in Reden oder Transkripten erkennen',
      'Wiederkehrende Themen in Kundenfeedback oder Umfrageantworten identifizieren',
      'Mehrwort-Phrasen-Balance über Landingpage-Texte hinweg vergleichen',
    ],
    faqs: [
      {
        question: 'Wie wird der Keyword-Dichte-Prozentsatz berechnet?',
        answer:
          'Die Dichte ist die Anzahl der Vorkommen eines Worts oder einer Phrase geteilt durch die Gesamtzahl der Wörter im Text, multipliziert mit 100.',
      },
      {
        question: 'Was sind Stoppwörter?',
        answer:
          'Stoppwörter sind häufige Füllwörter wie „der“, „die“, „und“ oder „ist“, die in der Analyse meist ausgeblendet werden, weil sie wenig über das Thema aussagen.',
      },
      {
        question: 'Kann ich die Häufigkeitsergebnisse nach Excel oder Google Sheets exportieren?',
        answer:
          'Ja. Laden Sie die Tabelle als CSV-Datei herunter und öffnen Sie sie direkt in Excel oder Google Sheets.',
      },
      {
        question: 'Wozu wird ein Worthäufigkeitszähler verwendet?',
        answer:
          'Er zeigt, welche Wörter und Phrasen in einem Text am häufigsten vorkommen, um Keyword-Balance, Wiederholungen und Themen zu prüfen.',
      },
      {
        question: 'Ist der Worthäufigkeitszähler kostenlos?',
        answer:
          'Ja. Der Worthäufigkeitszähler ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig viele Texte analysieren, Worthäufigkeiten und Keyword-Dichte prüfen und die Ergebnisse als CSV exportieren.',
      },
      {
        question: 'Was ist Keyword-Dichte und warum ist sie wichtig?',
        answer:
          'Die Keyword-Dichte ist der Anteil eines Schlüsselworts an allen Wörtern eines Textes. Sie hilft, Überoptimierung zu vermeiden und die thematische Balance zu prüfen.',
      },
      {
        question: 'Was ist ein guter Keyword-Dichte-Prozentsatz?',
        answer:
          'Als Faustregel gilt 1 bis 2 Prozent für ein Haupt-Keyword; deutlich höhere Werte wirken unnatürlich und können als Keyword-Stuffing wahrgenommen werden.',
      },
      {
        question: 'Was sind N-Gramme im Worthäufigkeitszähler?',
        answer:
          'N-Gramme sind Folgen von N Wörtern: 1-Gramme sind einzelne Wörter, 2-Gramme sind Wortpaare und 3-Gramme sind Drei-Wort-Phrasen.',
      },
      {
        question: 'Warum sollte ich 2-Wort- und 3-Wort-Phrasen analysieren?',
        answer:
          'Weil Phrasen wie „schnelle Seiten“ mehr über das Thema aussagen als einzelne Wörter und sich wiederholende Formulierungen erst auf Phrasenebene sichtbar werden.',
      },
      {
        question: 'Wie funktioniert der Stoppwort-Filter?',
        answer:
          'Der Filter blendet eine Liste häufiger Füllwörter aus der Häufigkeitstabelle aus, damit nur inhaltstragende Wörter übrig bleiben.',
      },
      {
        question: 'Kann ich ändern, welche Wörter als Stoppwörter gelten?',
        answer:
          'Das Tool nutzt eine feste Stoppwortliste; Sie können die Mindestwortlänge anpassen, um zusätzlich sehr kurze Wörter auszublenden.',
      },
      {
        question: 'Was bewirkt die Mindestwortlängen-Einstellung?',
        answer:
          'Sie blendet alle Wörter aus, die kürzer als die eingestellte Länge sind, sodass zum Beispiel einstellige Wörter oder kurze Artikel nicht in der Tabelle erscheinen.',
      },
      {
        question: 'Lädt der Worthäufigkeitszähler meinen Text hoch?',
        answer:
          'Nein. Die gesamte Analyse erfolgt lokal in Ihrem Browser, und Ihr Text wird niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Kann ich die Worthäufigkeit in einem langen Dokument zählen?',
        answer:
          'Ja. Die Analyse läuft vollständig im Browser, daher werden auch lange Dokumente sofort ausgewertet.',
      },
      {
        question: 'Wie wird der Dichteprozentsatz für Phrasen berechnet?',
        answer:
          'Wie bei einzelnen Wörtern: Die Anzahl der Vorkommen der Phrase wird durch die Gesamtzahl der Phrasen derselben Länge geteilt und mit 100 multipliziert.',
      },
      {
        question: 'Kann der Worthäufigkeitszähler wiederholte Phrasen in einem Transkript finden?',
        answer:
          'Ja. Die 2-Wort- und 3-Wort-Analyse zeigt wiederkehrende Formulierungen in Reden, Interviews und Transkripten.',
      },
      {
        question: 'Beeinflusst Satzzeichen die Wortzählung?',
        answer:
          'Nein. Satzzeichen werden vor der Zählung entfernt, sodass „Seite“ und „Seite.“ als dasselbe Wort gezählt werden.',
      },
      {
        question: 'Werden Groß- und Kleinbuchstaben zusammengezählt?',
        answer:
          'Ja. Wörter werden vor der Zählung kleingeschrieben, sodass „Seite“ und „seite“ als ein Wort zählen.',
      },
      {
        question: 'Kann ich die Häufigkeitstabelle nach Excel exportieren?',
        answer:
          'Ja. Der CSV-Export lässt sich direkt in Excel oder Google Sheets öffnen.',
      },
      {
        question: 'Wie kann ich Worthäufigkeit nutzen, um mein Schreiben zu verbessern?',
        answer:
          'Erkennen Sie überstrapazierte Wörter und ersetzen Sie sie durch Abwechslung; prüfen Sie zugleich, ob Ihr Haupt-Keyword oft genug, aber nicht zu oft vorkommt.',
      },
    ],
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
    instructions: [
      {
        title: 'Einen oder mehrere Titel eingeben',
        description:
          'Geben Sie einen Titel ein oder fügen Sie mehrere Titel zeilenweise ein, um sie im Stapelmodus umzuwandeln.',
      },
      {
        title: 'Trennzeichen wählen',
        description:
          'Wählen Sie Bindestrich (-) oder Unterstrich (_) als Trennzeichen zwischen den Wörtern im Slug.',
      },
      {
        title: 'Kleinschreibung und Stoppwörter anpassen',
        description:
          'Aktivieren Sie die Kleinschreibung und optional die Entfernung von Stoppwörtern wie „und“ oder „der“ für kürzere URLs.',
      },
      {
        title: 'Erzeugte Slugs prüfen',
        description:
          'Prüfen Sie die erzeugten Slugs in der Ausgabe und achten Sie auf doppelte Bindestriche oder abgeschnittene Wörter.',
      },
      {
        title: 'Slugs in Ihr CMS oder Ihren Code kopieren',
        description:
          'Kopieren Sie die Slugs mit einem Klick und fügen Sie sie in Ihr CMS, Ihre Routen oder Ihre Datenbank ein.',
      },
      {
        title: 'Tipp: Slugs kurz und lesbar halten',
        description:
          'Entfernen Sie Füllwörter und beschränken Sie sich auf 3 bis 5 aussagekräftige Wörter, damit URLs kurz, lesbar und SEO-freundlich bleiben.',
      },
    ],
    examples: [
      {
        title: 'Normalisierung eines Titels mit Umlauten',
        input: 'Café & Crème: Leitfaden für 2026!',
        output: 'cafe-and-creme-leitfaden-fuer-2026',
        explanation:
          'Umlaute werden transliteriert, „&“ wird zu „and“ und Satzzeichen werden entfernt.',
      },
      {
        title: 'Stapelmodus für mehrere Titel',
        input: 'Erste Schritte\nPreise & Pläne\nHäufige Fragen',
        output: 'erste-schritte\npreise-und-plaene\nhaeufige-fragen',
        explanation:
          'Mehrere Titel werden in einem Durchgang zeilenweise in Slugs umgewandelt.',
      },
    ],
    benefits: [
      'Normalisiert Umlaute (ä, ö, ü, é, ñ) in saubere ASCII-Entsprechungen',
      'Unterstützt Stapel-Umwandlung mehrerer Zeilen in einem Durchgang',
      'Bietet optionales Entfernen von Stoppwörtern für kürzere URLs',
      'Ersetzt „&“ sauber durch „and“, statt die Bedeutung zu verlieren',
    ],
    useCases: [
      'Lesbare Blogbeitrags- und Dokumentations-URLs erzeugen',
      'Einheitliche Dateinamen für herunterladbare Assets und Bilder erstellen',
      'Routen-Slugs für statische Websites und E-Commerce-Kataloge stapelweise vorbereiten',
      'Kategorie- oder Tag-Bezeichner in Datenbanken standardisieren',
    ],
    faqs: [
      {
        question: 'Sollte ich Bindestriche oder Unterstriche in URL-Slugs verwenden?',
        answer:
          'Bindestriche sind die bessere Wahl: Suchmaschinen behandeln sie als Worttrennzeichen, während Unterstriche Wörter zu einem einzigen Begriff verbinden.',
      },
      {
        question: 'Wie behandelt das Tool Umlaute wie „café“?',
        answer:
          'Umlaute und Akzente werden in ihre ASCII-Entsprechungen transliteriert, zum Beispiel wird „café“ zu „cafe“ und „ü“ zu „ue“.',
      },
      {
        question: 'Kann ich 50 Titel auf einmal umwandeln?',
        answer:
          'Ja. Fügen Sie bis zu 50 oder mehr Titel zeilenweise ein, und der Stapelmodus wandelt sie alle in einem Durchgang um.',
      },
      {
        question: 'Was ist ein Text-zu-Slug-Konverter?',
        answer:
          'Er wandelt Titel und Überschriften in kurze, URL-sichere Zeichenketten (Slugs) um, die als Teil einer Webadresse verwendet werden.',
      },
      {
        question: 'Ist der Text-zu-Slug-Konverter kostenlos?',
        answer:
          'Ja. Der Text-zu-Slug-Konverter ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Auch der Stapelmodus für viele Titel auf einmal ist ohne jede Begrenzung nutzbar.',
      },
      {
        question: 'Was macht einen Slug SEO-freundlich?',
        answer:
          'Ein SEO-freundlicher Slug ist kurz, kleingeschrieben, enthält das Haupt-Keyword, nutzt Bindestriche als Trennzeichen und verzichtet auf Füllwörter und Sonderzeichen.',
      },
      {
        question: 'Wie lang sollte ein URL-Slug sein?',
        answer:
          'Idealerweise 3 bis 5 Wörter; längere Slugs werden in Suchergebnissen abgeschnitten und sind schwerer zu merken.',
      },
      {
        question: 'Warum sind Slugs kleingeschrieben?',
        answer:
          'Weil URLs groß-/kleinschreibungsempfindlich sind; Kleinschreibung verhindert doppelte URLs und Verwechslungen. Einheitlich kleingeschriebene Slugs sind außerdem leichter zu tippen, zu teilen und in Suchergebnissen zu lesen.',
      },
      {
        question: 'Was passiert mit Zahlen in einem Slug?',
        answer:
          'Zahlen bleiben erhalten, zum Beispiel wird „Leitfaden für 2026“ zu „leitfaden-fuer-2026“. Umlaute werden dabei transliteriert, also ä zu ae, damit der Slug in jeder URL sicher funktioniert.',
      },
      {
        question: 'Wie werden Sonderzeichen in Slugs behandelt?',
        answer:
          'Sonderzeichen und Satzzeichen werden entfernt oder durch Bindestriche ersetzt; „&“ wird zu „and“, damit keine Bedeutung verloren geht.',
      },
      {
        question: 'Kann der Text-zu-Slug-Konverter nicht-englische Titel verarbeiten?',
        answer:
          'Ja. Umlaute und Akzente werden transliteriert; Zeichen anderer Schriften, die kein ASCII-Äquivalent haben, werden entfernt.',
      },
      {
        question: 'Was sind Stoppwörter in einem Slug?',
        answer:
          'Stoppwörter sind häufige Füllwörter wie „und“, „der“, „für“ oder „mit“, die für das Verständnis der URL nicht nötig sind und entfernt werden können.',
      },
      {
        question: 'Sollte ich Stoppwörter aus jedem Slug entfernen?',
        answer:
          'Meist ja, weil kürzere Slugs besser lesbar sind; behalten Sie sie aber, wenn sie für die Bedeutung des Titels wichtig sind.',
      },
      {
        question: 'Kann ich viele Titel auf einmal umwandeln?',
        answer:
          'Ja. Der Stapelmodus verarbeitet mehrere Titel zeilenweise in einem Durchgang. Geben Sie einfach einen Titel pro Zeile ein und erhalten Sie für jede Zeile sofort den passenden Slug.',
      },
      {
        question: 'Lädt der Text-zu-Slug-Konverter meine Titel hoch?',
        answer:
          'Nein. Die gesamte Umwandlung erfolgt lokal in Ihrem Browser, und Ihre Titel werden niemals gesendet, gespeichert oder geteilt.',
      },
      {
        question: 'Warum haben meine Slugs doppelte Bindestriche?',
        answer:
          'Doppelte Bindestriche entstehen, wenn Sonderzeichen oder mehrere Leerzeichen nebeneinander stehen; das Tool fasst sie in der Regel automatisch zu einem Bindestrich zusammen.',
      },
      {
        question: 'Kann ich Slugs auch für Dateinamen nutzen?',
        answer:
          'Ja. Slugs eignen sich hervorragend als saubere, URL- und dateisystemsichere Dateinamen. Sie enthalten nur Kleinbuchstaben, Ziffern und Bindestriche, also keine Zeichen, die Dateisysteme oder URLs stören.',
      },
      {
        question: 'Was ist der Unterschied zwischen einem Slug und einer URL?',
        answer:
          'Der Slug ist nur der lesbare Teil am Ende einer URL, zum Beispiel „erste-schritte“ in https://beispiel.de/blog/erste-schritte.',
      },
      {
        question: 'Beeinflussen Slugs das Suchranking?',
        answer:
          'Ja, in geringem Maß: Ein Slug mit dem Haupt-Keyword hilft Suchmaschinen, das Thema der Seite zu verstehen, und erhöht die Klickrate in den Ergebnissen.',
      },
      {
        question: 'Kann ich einen Slug nach der Veröffentlichung ändern?',
        answer:
          'Ja, aber leiten Sie die alte URL per 301-Weiterleitung auf die neue um, damit bestehende Links und Rankings nicht verloren gehen.',
      },
    ],
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
    instructions: [
      {
        title: 'Markdown schreiben oder einfügen',
        description:
          'Schreiben oder fügen Sie Markdown in den linken Editor ein – Überschriften, Listen, Links und Codeblöcke werden unterstützt.',
      },
      {
        title: 'Live-Vorschau beobachten',
        description:
          'Sehen Sie rechts, wie Ihr Markdown sofort als formatiertes Dokument gerendert wird.',
      },
      {
        title: 'Zum Roh-HTML-Tab wechseln',
        description:
          'Wechseln Sie zum Tab „Roh-HTML“, um den kompilierten HTML-Quellcode Ihres Dokuments zu prüfen.',
      },
      {
        title: 'Codeblöcke und Links prüfen',
        description:
          'Kontrollieren Sie, ob Codeblöcke korrekt gerendert werden und Links auf die richtigen Ziele zeigen.',
      },
      {
        title: 'HTML kopieren oder Datei exportieren',
        description:
          'Kopieren Sie das HTML-Fragment oder exportieren Sie ein vollständiges, eigenständiges .html-Dokument per Klick.',
      },
      {
        title: 'Tipp: README vor dem Commit prüfen',
        description:
          'Fügen Sie Ihre README.md vor dem Commit ein, um Tabellen, Codeblöcke und Links so zu sehen, wie GitHub sie rendern wird.',
      },
    ],
    examples: [
      {
        title: 'Umwandlung von Überschrift und Liste',
        input: '## Checkliste\n- **Links prüfen**\n- Entwurf veröffentlichen',
        output: '<h2>Checkliste</h2><ul><li><strong>Links prüfen</strong></li><li>Entwurf veröffentlichen</li></ul>',
        explanation:
          'Markdown-Überschriften und Listen werden in sauberes, semantisches HTML umgewandelt.',
      },
      {
        title: 'Codeblock mit Sprachangabe',
        input: '```js\nconst x = 1;\n```',
        output: '<pre><code class="language-js">const x = 1;\n</code></pre>',
        explanation:
          'Umzäunte Codeblöcke mit Sprach-Tag werden als <pre><code>-Blöcke mit Sprachklasse exportiert.',
      },
    ],
    benefits: [
      'Escapet rohes HTML und bereinigt Link-Schemata, um unsicheres Vorschau-Markup zu verhindern',
      'Unterstützt Überschriften, Fett/Kursiv, Durchstreichen, Blockzitate, Listen, Links und Codeblöcke',
      'Wechselt mühelos zwischen visueller Vorschau und Roh-HTML-Quellcode',
      'Lädt eine vollständige eigenständige .html-Datei mit einem Klick herunter',
    ],
    useCases: [
      'GitHub-README.md-Dateien vor dem Commit in der Vorschau prüfen',
      'Markdown-Notizen in sauberes HTML für E-Mails oder CMS-Blöcke umwandeln',
      'Technische Tutorials und Release-Notizen offline entwerfen',
      'Link- und Code-Fence-Formatierung schnell prüfen',
    ],
    faqs: [
      {
        question: 'Führt die Markdown-Vorschau eingebettetes JavaScript aus?',
        answer:
          'Nein. Rohes HTML wird escapet und unsichere Link-Schemata werden bereinigt, sodass kein JavaScript aus Ihrer Eingabe ausgeführt wird.',
      },
      {
        question: 'Kann ich nur das kompilierte HTML-Fragment ohne <html>-Grundgerüst kopieren?',
        answer:
          'Ja. „HTML kopieren“ kopiert nur das Fragment; „HTML exportieren“ lädt dagegen ein vollständiges eigenständiges Dokument herunter.',
      },
      {
        question: 'Werden umzäunte Codeblöcke unterstützt?',
        answer:
          'Ja. Codeblöcke mit drei Backticks werden unterstützt, auch mit Sprachangabe wie ```js oder ```python.',
      },
      {
        question: 'Was ist eine Markdown-Vorschau?',
        answer:
          'Sie zeigt, wie Markdown-Text als formatiertes Dokument aussieht, und wandelt ihn bei Bedarf in HTML um.',
      },
      {
        question: 'Ist die Markdown-Vorschau kostenlos?',
        answer:
          'Ja. Die Markdown-Vorschau ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig lange Markdown-Dokumente schreiben und live in der Vorschau prüfen, ohne dass etwas gespeichert wird.',
      },
      {
        question: 'Welche Markdown-Syntax unterstützt die Vorschau?',
        answer:
          'Überschriften, Fett- und Kursivschrift, Durchstreichen, Blockzitate, geordnete und ungeordnete Listen, Links, Bilder, Tabellen und Codeblöcke.',
      },
      {
        question: 'Kann ich mit diesem Tool eine GitHub-README in der Vorschau ansehen?',
        answer:
          'Ja. Fügen Sie den Inhalt Ihrer README.md ein, um zu sehen, wie GitHub sie rendern wird.',
      },
      {
        question: 'Unterstützt die Markdown-Vorschau Tabellen?',
        answer:
          'Ja. Tabellen im GitHub-Flavored-Markdown-Stil mit | und --- werden als HTML-Tabellen gerendert.',
      },
      {
        question: 'Was ist der Unterschied zwischen „HTML kopieren“ und „HTML exportieren“?',
        answer:
          '„HTML kopieren“ legt nur das Fragment in die Zwischenablage, während „HTML exportieren“ ein vollständiges eigenständiges .html-Dokument mit Grundgerüst herunterlädt.',
      },
      {
        question: 'Ist das exportierte HTML eine vollständige Webseite?',
        answer:
          'Ja. Der Export erzeugt ein eigenständiges .html-Dokument, das sich direkt im Browser öffnen lässt.',
      },
      {
        question: 'Führt die Markdown-Vorschau JavaScript aus meiner Eingabe aus?',
        answer:
          'Nein. Eingebettete Skripte werden escapet und nicht ausgeführt; die Vorschau ist sicher.',
      },
      {
        question: 'Kann ich die Markdown-Vorschau offline nutzen?',
        answer:
          'Ja. Sobald die Seite geladen ist, läuft das Rendern vollständig lokal in Ihrem Browser.',
      },
      {
        question: 'Speichert die Markdown-Vorschau meine Arbeit?',
        answer:
          'Nein. Ihr Text bleibt nur in Ihrem Browser-Tab und wird nicht gespeichert oder gesendet.',
      },
      {
        question: 'Wie füge ich ein Bild in Markdown ein?',
        answer:
          'Nutzen Sie die Syntax ![Alt-Text](bild-url), zum Beispiel ![Logo](https://beispiel.de/logo.png). Der Text in den eckigen Klammern wird zum Alt-Text des Bildes, die URL in den runden Klammern zeigt auf die Bilddatei.',
      },
      {
        question: 'Warum wird mein Codeblock nicht gerendert?',
        answer:
          'Prüfen Sie, ob der Block mit drei Backticks geöffnet und geschlossen wird und ob vor und nach dem Block jeweils eine Leerzeile steht.',
      },
      {
        question: 'Kann ich Markdown für eine E-Mail in HTML umwandeln?',
        answer:
          'Ja. Kopieren Sie das kompilierte HTML-Fragment und fügen Sie es in Ihren E-Mail- oder CMS-Editor ein.',
      },
      {
        question: 'Kann ich Codeblöcke mit einem Sprach-Tag schreiben?',
        answer:
          'Ja. Schreiben Sie zum Beispiel ```js nach den öffnenden Backticks, um die Sprache anzugeben.',
      },
      {
        question: 'Kann ich Markdown einfügen, das aus einem anderen Editor kopiert wurde?',
        answer:
          'Ja. Fügen Sie Markdown aus einem beliebigen Editor ein; die Vorschau rendert es sofort.',
      },
      {
        question: 'Was passiert mit Links in der Vorschau?',
        answer:
          'Links werden als anklickbare <a>-Tags gerendert; unsichere Schemata wie javascript: werden bereinigt.',
      },
      {
        question: 'Kann ich die gerenderte Vorschau drucken?',
        answer:
          'Ja. Nutzen Sie die Druckfunktion Ihres Browsers, um die gerenderte Vorschau auszudrucken.',
      },
    ],
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
    instructions: [
      {
        title: 'Präfix und Suffix festlegen',
        description:
          'Geben Sie den Text ein, der vor jede Zeile gestellt werden soll, und den Text, der an jede Zeile angehängt werden soll.',
      },
      {
        title: 'Zeilennummern bei Bedarf aktivieren',
        description:
          'Schalten Sie Zeilennummern ein, wählen Sie eine Startnummer und optional eine Null-Auffüllung sowie ein Trennzeichen wie „: “.',
      },
      {
        title: 'Zeilen einfügen',
        description:
          'Fügen Sie Ihre Liste mit einem Element pro Zeile in das Eingabefeld ein.',
      },
      {
        title: 'Umgang mit Leerzeilen wählen',
        description:
          'Entscheiden Sie, ob Leerzeilen übersprungen oder mitnummeriert werden sollen, damit die Zähler korrekt bleiben.',
      },
      {
        title: 'Formatierte Ausgabe prüfen',
        description:
          'Prüfen Sie die Ausgabe und kopieren Sie sie mit einem Klick in Ihre Zwischenablage.',
      },
      {
        title: 'Tipp: SQL-IN-Klausel erstellen',
        description:
          'Setzen Sie als Präfix ein einfaches Anführungszeichen und als Suffix ein Anführungszeichen plus Komma, um IDs für eine SQL-IN-Klausel zu formatieren.',
      },
    ],
    examples: [
      {
        title: 'Nullaufgefüllte nummerierte Schritte',
        input: 'Zeilennummern: Ein · Nullen auffüllen: Ein · Trennzeichen: ": "',
        output: '01: Schritt eins\n02: Schritt zwei',
        explanation:
          'Nummeriert Zeilen fortlaufend mit Null-Auffüllung für eine saubere Ausrichtung.',
      },
      {
        title: 'IDs für eine SQL-IN-Klausel in Anführungszeichen setzen',
        input: 'Präfix: \' · Suffix: \',\n101\n202\n303',
        output: '\'101\',\n\'202\',\n\'303\',',
        explanation:
          'Umgibt jede ID mit Anführungszeichen und Komma für eine SQL-IN-Klausel.',
      },
    ],
    benefits: [
      'Kombiniert Präfix, Suffix und fortlaufende Zeilennummerierung in einem Tool',
      'Optionale Null-Auffüllung hält mehrstellige Listen optisch ausgerichtet',
      'Überspringt Leerzeilen automatisch, wenn aktiviert, damit Zähler korrekt bleiben',
      'Keine Server-Uploads für sensible IDs oder Abfragewerte',
    ],
    useCases: [
      'Tabellen-IDs in Anführungszeichen und Kommas für SQL-IN-(...)-Abfragen setzen',
      'Reinen Text in Markdown-Aufzählungen oder HTML-<li>-Tags umwandeln',
      'Fortlaufende Schrittnummern zu Checklisten und Gliederungen hinzufügen',
      'String-Arrays für JavaScript, Python oder JSON erstellen',
    ],
    faqs: [
      {
        question: 'Kann ich nur Zeilennummern ohne Präfix oder Suffix hinzufügen?',
        answer:
          'Ja. Lassen Sie Präfix und Suffix leer und aktivieren Sie nur die Zeilennummern.',
      },
      {
        question: 'Wie überspringe ich die Nummerierung von Leerzeilen als Abstand?',
        answer:
          'Aktivieren Sie die Option „Leerzeilen überspringen“, damit leere Zeilen weder nummeriert noch mit Präfix oder Suffix versehen werden.',
      },
      {
        question: 'Kann ich die Nummerierung bei 0 oder einer beliebigen Zahl beginnen?',
        answer:
          'Ja. Stellen Sie die Startnummer frei ein, zum Beispiel 0 für nullbasierte Listen oder 10 für eine Fortsetzung.',
      },
      {
        question: 'Was ist das Tool zum Hinzufügen von Zeilennummern & Präfix/Suffix?',
        answer:
          'Es stellt jeder Zeile eines Textes ein Präfix, ein Suffix oder eine fortlaufende Nummer voran bzw. hängt sie an – nützlich für Listen, SQL und Code.',
      },
      {
        question: 'Ist das Tool für Zeilenpräfix und -suffix kostenlos?',
        answer:
          'Ja. Das Tool ist vollständig kostenlos, ohne Anmeldung und ohne Konto. Sie können beliebig viele Zeilen mit Präfixen, Suffixen oder Zeilennummern versehen, ohne sich zu registrieren.',
      },
      {
        question: 'Kann ich ein Präfix ohne Suffix hinzufügen?',
        answer:
          'Ja. Präfix und Suffix sind unabhängig voneinander; lassen Sie einfach das Feld leer, das Sie nicht brauchen.',
      },
      {
        question: 'Wie setze ich Zeilen für eine SQL-IN-Klausel in Anführungszeichen?',
        answer:
          'Setzen Sie als Präfix ein einfaches Anführungszeichen und als Suffix ein Anführungszeichen plus Komma – jede Zeile wird dann zu \'Wert\',.',
      },
      {
        question: 'Kann ich an jede Zeile ein Komma anhängen?',
        answer:
          'Ja. Geben Sie ein Komma als Suffix ein, und jede Zeile erhält am Ende ein Komma.',
      },
      {
        question: 'Wie funktioniert die Null-Auffüllung bei Zeilennummern?',
        answer:
          'Die Null-Auffüllung ergänzt einstellige Nummern mit führenden Nullen, zum Beispiel 01, 02, 03, damit mehrstellige Listen optisch ausgerichtet bleiben.',
      },
      {
        question: 'Welches Trennzeichen sollte ich für nummerierte Zeilen verwenden?',
        answer:
          'Gängig sind „: “ (Doppelpunkt plus Leerzeichen), „. “ (Punkt plus Leerzeichen) oder „ – “; wählen Sie, was zu Ihrem Dokument passt.',
      },
      {
        question: 'Kann ich Zeilen ab einer anderen Zahl als 1 nummerieren?',
        answer:
          'Ja. Stellen Sie die Startnummer auf einen beliebigen Wert ein, zum Beispiel 0 oder 42.',
      },
      {
        question: 'Was passiert mit Leerzeilen in meiner Liste?',
        answer:
          'Standardmäßig erhalten auch Leerzeilen Präfix und Suffix; mit der Option „Leerzeilen überspringen“ werden sie ausgelassen und nicht nummeriert.',
      },
      {
        question: 'Kann ich mit dem Tool eine Markdown-Aufzählungsliste erstellen?',
        answer:
          'Ja. Setzen Sie als Präfix „- “ (Bindestrich plus Leerzeichen), und jede Zeile wird zu einem Markdown-Aufzählungspunkt.',
      },
      {
        question: 'Kann ich Zeilen in HTML-Listenelemente umwandeln?',
        answer:
          'Ja. Setzen Sie als Präfix „<li>“ und als Suffix „</li>“, um jede Zeile in ein HTML-Listenelement zu verwandeln.',
      },
      {
        question: 'Lädt das Tool meinen Text auf einen Server hoch?',
        answer:
          'Nein. Die gesamte Formatierung erfolgt lokal in Ihrem Browser, und Ihr Text wird niemals gesendet oder gespeichert.',
      },
      {
        question: 'Kann ich Zeilen für ein JavaScript- oder Python-Array formatieren?',
        answer:
          'Ja. Setzen Sie Anführungszeichen als Präfix und Anführungszeichen plus Komma als Suffix, um jede Zeile in ein Array-Element zu verwandeln.',
      },
      {
        question: 'Gibt es ein Limit, wie viele Zeilen ich formatieren kann?',
        answer:
          'Es gibt kein festes Limit. Die Formatierung läuft vollständig in Ihrem Browser, daher werden auch lange Listen sofort verarbeitet.',
      },
      {
        question: 'Warum erhalten manche Zeilen keine Nummer?',
        answer:
          'Wahrscheinlich sind es Leerzeilen und die Option „Leerzeilen überspringen“ ist aktiviert; deaktivieren Sie sie, um auch leere Zeilen zu nummerieren.',
      },
      {
        question: 'Kann ich verschiedenen Zeilen unterschiedliche Präfixe hinzufügen?',
        answer:
          'Nein. Das Tool wendet dasselbe Präfix und Suffix auf alle Zeilen an; für unterschiedliche Präfixe bearbeiten Sie die Zeilen in mehreren Durchgängen.',
      },
      {
        question: 'Wie entferne ich ein Präfix, das ich versehentlich hinzugefügt habe?',
        answer:
          'Ihr Originaltext bleibt im Eingabefeld; leeren Sie einfach das Präfix-Feld, und die Ausgabe aktualisiert sich ohne das Präfix.',
      },
    ],
  },
};
