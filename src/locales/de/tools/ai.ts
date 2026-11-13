import type { ToolLocaleOverride } from '../../types';

/**
 * German overrides — AI tools (3 tools: ai-writing-assistant,
 * ai-text-summarizer, ai-tool-finder). Same shape as the batch files;
 * include apiNotice where the English tool carries one.
 * Source: src/registry/aiTools.ts and src/locales/fr/tools/ai.ts.
 * Note: the AI workbench components send text to Groq; do not claim the AI
 * tools run locally in the browser.
 * Fixed German slugs (src/locales/config.ts STATIC_PATHS):
 * ki-schreibassistent, ki-text-zusammenfasser, ki-tool-finder.
 */
export const DE_AI_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'ai-writing-assistant': {
    slug: 'ki-schreibassistent',
    name: 'KI-Schreibassistent',
    shortDescription:
      'Korrigiere Grammatik, schreibe Sätze um, passe den Ton an, paraphrasiere, erweitere Ideen und entwirf klare E-Mails – kostenlos, ohne Anmeldung.',
    keywords: [
      'ki schreibassistent',
      'kostenlose grammatikprüfung',
      'sätze umschreiben',
      'text paraphrasieren',
      'tonfall ändern',
      'e-mail schreibassistent',
      'rechtschreibkorrektur',
      'sätze vereinfachen',
      'ki text korrigieren',
    ],
    seo: {
      title: 'KI-Schreibassistent – Grammatik & Tonfall | UtilityFlow',
      description:
        'Korrigiere Grammatik, schreibe Sätze um, passe den Ton an, vereinfache oder erweitere Absätze und schreibe klare E-Mails und Texte – kostenlos, ohne Anmeldung.',
      primaryKeyword: 'ki schreibassistent',
      secondaryKeywords: [
        'kostenlose grammatikprüfung ki',
        'ki sätze umschreiben',
        'ki text paraphrasieren',
        'ki e-mail schreibassistent',
      ],
      longTailKeywords: [
        'kostenloser ki schreibassistent ohne anmeldung',
        'text professioneller machen mit ki tool',
        'absatz umschreiben und bedeutung erhalten kostenlos',
        'grammatik und rechtschreibung online kostenlos korrigieren',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100 % kostenlos, ohne Login, Abo oder Credits. Kostenloses Kontingent: bis zu 5 Schreibanfragen pro Tag und Besucher (maximal 12.000 Zeichen), betrieben mit kostenloser Groq-Inferenz, ohne deinen Text zu speichern.',
    intro:
      'Verfeinere deine Entwürfe in Sekunden sauber, ohne ein Konto zu erstellen. Wähle aus 10 Schreibaufgaben – darunter Grammatikkorrektur, Paraphrasieren, Tonwechsel, Satzvereinfachung und E-Mail-Entwurf – und bewahre dabei strikt deine ursprüngliche Bedeutung und deine Fakten.',
    instructions: [
      {
        title: 'Text einfügen oder schreiben',
        description:
          'Gib bis zu 12.000 Zeichen in den Editor ein. Nutze die Live-Wort- und Zeichenzähler, um die Entwurflänge vor dem Erstellen zu prüfen.',
      },
      {
        title: 'Schreibaufgabe, Ton und Sprache wählen',
        description:
          'Wähle eine von 10 Schreibaufgaben (etwa Grammatik korrigieren, Professioneller machen, Paraphrasieren oder E-Mail schreiben), passe einen Ton von Professionell bis Einfach an und wähle deine Ziel-Ausgabesprache.',
      },
      {
        title: 'Auf „Erstellen“ klicken, um deine Anfrage zu verarbeiten',
        description:
          'Drücke auf „Erstellen“ und warte einige Sekunden, während die Anfrage zur Inferenz an Groq gesendet wird. Eine Fortschrittsanzeige zeigt, während dein verbesserter Text erstellt wird.',
      },
      {
        title: 'Original- und verbesserten Text prüfen und vergleichen',
        description:
          'Sieh dir die Nebeneinander-Ansicht oder die Wort-für-Wort-Änderungshervorhebungen an, um genau zu sehen, was sich geändert hat, und bestätige, dass Namen, Zahlen und Daten intakt geblieben sind.',
      },
      {
        title: 'Ergebnis kopieren oder herunterladen',
        description:
          'Nutze den Kopieren-Button, um den verbesserten Text in deine Zwischenablage zu verschieben, oder lade ihn als TXT-Datei für dein Dokument oder deinen E-Mail-Client herunter.',
      },
      {
        title: 'Bei Bedarf eine andere Aufgabe oder einen anderen Ton versuchen',
        description:
          'Wenn das Ergebnis nicht ganz richtig ist, wechsle die Aufgabe oder den Ton und erstelle erneut – versuche zum Beispiel „Einfacher machen“ nach „Professioneller machen“ – und behalte das tägliche kostenlose Anfragenlimit im Blick.',
      },
    ],
    examples: [
      {
        title: 'Grammatik- & Rechtschreibbereinigung',
        input:
          'Hallo Team, ich wollte mich wegen dem gestrigen Meeting melden und den aktualisierten Zeitplan für den Q4-Launch teilen.',
        output:
          'Hallo Team, ich wollte mich wegen des gestrigen Meetings melden und den aktualisierten Zeitplan für den Q4-Launch teilen.',
        explanation:
          'Aufgabe: Grammatik korrigieren · Ton: Professionell. Korrigiert Kasus und Rechtschreibung und behält dabei deinen exakten Stil.',
      },
      {
        title: 'Rohe Notizen in eine versandfertige E-Mail verwandeln',
        input:
          'kundin sarah fragen ob donnerstag 14 uhr passt für design review call, erwähnen dass mockup v2 fertig ist und link angehängt',
        output:
          'Betreff: Design-Review-Call & Mockup v2\n\nHallo Sarah,\n\nich wollte dich wissen lassen, dass Mockup v2 fertig ist und zur Prüfung angehängt wurde. Würde dir Donnerstag um 14:00 Uhr für einen kurzen Design-Review-Call passen?\n\nViele Grüße,',
        explanation:
          'Aufgabe: E-Mail schreiben · Ton: Freundlich. Strukturiert Stichpunktnotizen in eine höfliche, sachliche E-Mail, ohne Details zu erfinden.',
      },
    ],
    benefits: [
      '100 % kostenloser Zugang ohne Anmeldung, Login oder Abo-Hürden',
      '10 spezialisierte Schreibmodi plus 7 Ton-Voreinstellungen und mehrsprachige Ausgabe',
      'Bewahrt Namen, Zahlen, Daten und Bedeutung, ohne Fakten zu erfinden',
      'Nebeneinander-Vergleich und hervorgehobene Wort-für-Wort-Änderungsverfolgung',
    ],
    useCases: [
      'Kunden-E-Mails, Angebote und Status-Updates vor dem Versenden polieren',
      'Grammatik-, Zeichensetzungs- und Rechtschreibfehler in Aufsätzen oder Berichten korrigieren',
      'Dichte technische Absätze für breitere Zielgruppen vereinfachen',
      'Lockere Chat-Entwürfe in formelle Arbeitsplatzkommunikation umwandeln',
    ],
    faqs: [
      {
        question: 'Ist der KI-Schreibassistent komplett kostenlos ohne Anmeldung?',
        answer:
          'Ja. Du musst kein Konto erstellen, keine E-Mail-Adresse eingeben und keine Zahlungskarte hinzufügen. Besucher erhalten bis zu 5 kostenlose Schreibanfragen pro UTC-Tag.',
      },
      {
        question: 'Erfindet die KI neue Fakten, wenn sie Text umschreibt oder erweitert?',
        answer:
          'Nein. Unsere Systemanweisung weist das Modell an, alle ursprünglichen Fakten, Namen, Daten und Zahlen strikt zu bewahren und keine Statistiken oder Behauptungen zu erfinden.',
      },
      {
        question: 'Speichert oder protokolliert UtilityFlow meine Texte?',
        answer:
          'UtilityFlow speichert, protokolliert oder verkauft deinen Text nicht. Anfragen werden sicher über unser Backend an Groq zur Inferenz gesendet, und die Besucherkontingent-Verfolgung nutzt nur einen täglichen gesalzenen SHA-256-Hash.',
      },
      {
        question: 'Was passiert, wenn ich das tägliche kostenlose Anfragenlimit erreiche?',
        answer:
          'Tägliche Limits werden automatisch um UTC-Mitternacht zurückgesetzt. In der Zwischenzeit funktionieren alle 85+ lokalen Browser-Utilities – darunter Wortzähler, Lesbarkeitsprüfer und Text-Diff-Prüfer – ohne Begrenzung.',
      },
      {
        question: 'Welche Schreibaufgaben kann der KI-Schreibassistent bewältigen?',
        answer:
          'Er bietet 10 Aufgaben, darunter Grammatik korrigieren, Professioneller machen, Paraphrasieren, Vereinfachen, Erweitern, Zusammenfassen, E-Mail schreiben, Klarheit verbessern, Ton ändern und Rechtschreibung korrigieren.',
      },
      {
        question: 'Wie lang kann mein Text im KI-Schreibassistenten sein?',
        answer:
          'Jede Anfrage akzeptiert bis zu 12.000 Zeichen. Teile längere Dokumente in Abschnitte und verarbeite sie einzeln.',
      },
      {
        question: 'Welche Töne kann ich für meinen umgeschriebenen Text wählen?',
        answer:
          'Du kannst aus 7 Ton-Voreinstellungen wählen, darunter Professionell, Freundlich, Formell, Locker, Einfach, Selbstbewusst und Prägnant – je nach Zielgruppe.',
      },
      {
        question: 'Sendet der KI-Schreibassistent meinen Text an einen externen Dienst?',
        answer:
          'Ja. Dein Text wird sicher zur KI-Inferenz an Groq über unseren Backend-Worker gesendet, weil die Schreibaufgaben ein Sprachmodell brauchen. Er wird von UtilityFlow nicht gespeichert oder protokolliert.',
      },
      {
        question: 'Kann der KI-Schreibassistent eine vollständige E-Mail aus rohen Notizen schreiben?',
        answer:
          'Ja. Wähle die Aufgabe „E-Mail schreiben“, füge deine Stichpunkte oder rohen Notizen ein, und er strukturiert sie in eine höfliche E-Mail mit Betreffzeile und Anrede.',
      },
      {
        question: 'Verändert der KI-Schreibassistent die Bedeutung meines Textes?',
        answer:
          'Er ist angewiesen, deine ursprüngliche Bedeutung, Fakten, Namen, Daten und Zahlen zu bewahren. Prüfe immer den Nebeneinander-Vergleich, bevor du das Ergebnis nutzt.',
      },
      {
        question: 'Kann ich den KI-Schreibassistenten für akademische Aufsätze nutzen?',
        answer:
          'Ja, er kann Grammatik korrigieren und die Klarheit von Aufsätzen und Berichten verbessern. Prüfe zuerst die Regeln deiner Einrichtung, da manche Schulen KI-gestütztes Schreiben einschränken.',
      },
      {
        question: 'Funktioniert der KI-Schreibassistent in anderen Sprachen als Englisch?',
        answer:
          'Ja. Du kannst eine Ziel-Ausgabesprache wählen, und das Tool erstellt den verbesserten Text in dieser Sprache, während deine Fakten unverändert bleiben.',
      },
      {
        question: 'Wie sehe ich genau, was die KI in meinem Text geändert hat?',
        answer:
          'Die Ergebnisansicht hebt Wort-für-Wort-Änderungen hervor und zeigt deinen Original- und verbesserten Text nebeneinander, sodass du jede Änderung vor dem Kopieren gedanklich akzeptieren oder ablehnen kannst.',
      },
      {
        question: 'Kann der KI-Schreibassistent Text paraphrasieren, um Wiederholungen zu vermeiden?',
        answer:
          'Ja. Die Aufgabe „Paraphrasieren“ schreibt Sätze mit anderer Wortwahl um und behält dabei dieselbe Bedeutung – nützlich für abwechslungsreiche Entwürfe und Zusammenfassungen.',
      },
      {
        question: 'Was sollte ich tun, wenn der erstellte Text einen Fehler enthält?',
        answer:
          'Bearbeite das Ergebnis direkt oder führe den Text erneut mit einer anderen Aufgabe oder einem anderen Ton aus. KI-Ausgaben können Fehler enthalten – lies wichtige Texte also vor dem Versenden Korrektur.',
      },
      {
        question: 'Gibt es ein Wortlimit pro Anfrage im KI-Schreibassistenten?',
        answer:
          'Das Limit beträgt 12.000 Zeichen pro Anfrage, was etwa 1.800 bis 2.000 englischen Wörtern entspricht. Kürzere Texte erzeugen meist schnellere und genauere Ergebnisse.',
      },
      {
        question: 'Wie unterscheidet sich der KI-Schreibassistent vom Wortzähler?',
        answer:
          'Der Wortzähler misst nur Wörter, Zeichen und Lesezeit lokal, während der KI-Schreibassistent deinen Text mit dem Groq-Sprachmodell umschreibt und verbessert.',
      },
      {
        question: 'Kann der KI-Schreibassistent meinen Text kürzer oder länger machen?',
        answer:
          'Ja. Nutze die Aufgabe „Vereinfachen“, um dichte Absätze zu kürzen, oder „Erweitern“, um Details und Erklärungen hinzuzufügen, während deine ursprünglichen Fakten intakt bleiben.',
      },
      {
        question: 'Kann ich meinen verbesserten Text als Datei herunterladen?',
        answer:
          'Ja. Klicke nach dem Erstellen auf die Download-Option, um den verbesserten Text als TXT-Datei auf deinem Gerät zu speichern.',
      },
      {
        question: 'Was passiert, wenn meine Anfrage fehlschlägt oder ein Timeout auftritt?',
        answer:
          'Prüfe deine Internetverbindung und versuche es erneut. Wenn das tägliche kostenlose Limit erreicht ist, sagt dir das Tool Bescheid, und das Limit wird um UTC-Mitternacht zurückgesetzt.',
      },
    ],
  },
  'ai-text-summarizer': {
    slug: 'ki-text-zusammenfasser',
    name: 'KI-Text-Zusammenfasser',
    shortDescription:
      'Fasse Artikel, Berichte und Notizen in kurze, mittlere oder lange Zusammenfassungen mit Stichpunkten und Kernaussagen zusammen – kostenlos.',
    keywords: [
      'ki text zusammenfasser',
      'kostenloser artikel zusammenfasser',
      'zusammenfassung mit stichpunkten',
      'kernaussagen extraktor',
      'absatz zusammenfasser',
      'zusammenfassung in einfacher sprache',
      'lesezeit rechner',
      'langen text online zusammenfassen',
      'ki zusammenfassung generator kostenlos',
    ],
    seo: {
      title: 'KI-Text-Zusammenfasser – Texte kürzen | UtilityFlow',
      description:
        'Fasse lange Artikel, Forschungsnotizen und Berichte in kurze Absätze, Stichpunkte oder Kernaussagen zusammen – kostenlos, schnell und online, ohne Anmeldung.',
      primaryKeyword: 'ki text zusammenfasser',
      secondaryKeywords: [
        'kostenloser artikel zusammenfasser',
        'text zusammenfasser mit stichpunkten',
        'kernaussagen mit ki extrahieren',
        'absatz zusammenfassung generator',
      ],
      longTailKeywords: [
        'ki text zusammenfasser kostenlos ohne anmeldung',
        'langen artikel zusammenfassen und zahlen und fakten erhalten',
        'kurzer mittlerer und langer text zusammenfasser online',
        'forschungspapier in stichpunkte zusammenfassen',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100 % kostenlos, ohne Login, Abo oder Credits. Kostenloses Kontingent: bis zu 5 Zusammenfassungen pro Tag und Besucher (bis zu 25.000 Zeichen pro Anfrage), betrieben mit kostenloser Groq-Inferenz, ohne deinen Text zu speichern.',
    intro:
      'Destilliere lange Artikel, Berichte, Aufsätze und Meeting-Transkripte in prägnante Zusammenfassungen, ohne ein Konto zu erstellen. Wähle kurze (10–20 %), mittlere (30–40 %) oder lange (50–60 %) Längen in Absatz-, Stichpunkt-, Kernaussagen- und Einfache-Sprache-Formaten und bewahre dabei Namen, Zahlen und Daten.',
    instructions: [
      {
        title: 'Quelltext einfügen oder schreiben',
        description:
          'Gib mindestens 25 Wörter (120+ Zeichen) bis zu 25.000 Zeichen ein. Prüfe die Live-Wortanzahl und die geschätzte Lesezeit unter dem Editor.',
      },
      {
        title: 'Zusammenfassungslänge, Format und Sprache wählen',
        description:
          'Wähle die Komprimierung Kurz, Mittel oder Lang (Detailliert), wähle das Format Absatz, Stichpunkte, Kernaussagen oder Einfache Sprache und wähle eine Ausgabesprache.',
      },
      {
        title: 'Auf „Zusammenfassen“ klicken, um die Zusammenfassung zu erstellen',
        description:
          'Drücke auf „Text zusammenfassen“ und warte einige Sekunden, während dein Text zur KI-Inferenz an Groq gesendet wird. Eine Fortschrittsanzeige zeigt, während die Zusammenfassung erstellt wird.',
      },
      {
        title: 'Lesezeit vergleichen und Ergebnis prüfen',
        description:
          'Prüfe die eingesparte Lesezeit, vergleiche die Zusammenfassung mit dem Originaltext und vergewissere dich, dass wichtige Namen, Zahlen und Daten weiterhin korrekt sind.',
      },
      {
        title: 'Zusammenfassung kopieren oder herunterladen',
        description:
          'Nutze den Kopieren-Button, um die Zusammenfassung in deine Zwischenablage zu verschieben, oder lade sie als TXT-Datei für deine Notizen, deinen Bericht oder dein Lernmaterial herunter.',
      },
      {
        title: 'Bei Bedarf eine andere Länge oder ein anderes Format versuchen',
        description:
          'Wenn die Zusammenfassung zu kurz oder zu detailliert ist, wechsle Länge oder Format und fasse erneut zusammen – versuche zum Beispiel Stichpunkte nach einer Absatz-Zusammenfassung.',
      },
    ],
    examples: [
      {
        title: 'Stichpunkt-Zusammenfassung für Führungskräfte',
        input:
          'Eine 160-Wörter-Ingenieurstudie, die zweimal wöchentliche schriftliche Updates mit täglichen Meetings unter 140 Ingenieuren vergleicht.',
        output:
          '- Studie mit 140 Ingenieuren in London, Berlin und Toronto über sechs Monate.\n- Der Ersatz von drei wöchentlichen Syncs durch zweimal wöchentliche Digests senkte die Kalenderfragmentierung um 28 % und steigerte die Sprint-Lieferung um 14 %.\n- Der Erfolg hing von frühzeitigen Blockern, PR-Links und exakten Daten ab.',
        explanation:
          'Länge: Kurz · Format: Zusammenfassung mit Stichpunkten. Bewahrt Stichprobengröße, Orte und exakte Prozentzahlen.',
      },
      {
        title: 'Lange Zusammenfassung eines Forschungsberichts',
        input:
          '3.000-Wörter-Forschungsbericht über Lerngewohnheiten und akademischen Erfolg.',
        output:
          'Lange Zusammenfassung (50–60 %) in Absätzen, die Methodik, Haupterkenntnisse und Schlüsselzahlen bewahrt.',
        explanation:
          'Länge: Lang · Format: Absatz. Bewahrt Methodikdetails und Erkenntnisse für eine vollständige Wiederholung.',
      },
    ],
    benefits: [
      'Kostenloser anonymer Zugang ohne Konten, Abos oder Credits',
      'Kontrollen für kurze (10–20 %), mittlere (30–40 %) und lange (50–60 %) Zusammenfassungen',
      'Modi Absatz, Stichpunkte, Kernaussagen-Extraktion und Einfache Sprache',
      'Bewahrt Namen, Statistiken, Daten und Fakten, ohne Details zu erfinden',
    ],
    useCases: [
      'Lange Artikel oder Forschungsberichte in schnelle Notizen mit Stichpunkten umwandeln',
      'Meeting-Transkripte zusammenfassen und nummerierte Aktionspunkte extrahieren',
      'Mehrteilige Dokumente übersetzen und zu klaren Kernaussagen verdichten',
      'Lesezeitersparnis schätzen, bevor Führungszusammenfassungen geteilt werden',
    ],
    faqs: [
      {
        question: 'Warum verlangt der KI-Text-Zusammenfasser mindestens 25 Wörter?',
        answer:
          'Texte unter 25 Wörtern oder 120 Zeichen sind zu kurz, um sie sinnvoll zu komprimieren, ohne wesentlichen Kontext zu verlieren – das Tool bittet dich daher, zuerst mehr Quelltext hinzuzufügen.',
      },
      {
        question: 'Verändert der Zusammenfasser Namen, Zahlen oder Daten?',
        answer:
          'Nein. Unsere Zusammenfassungsanweisungen verlangen strikt, ursprüngliche Zahlen, Daten, Namen und sachliche Zusammenhänge intakt zu lassen, ohne externe Behauptungen hinzuzufügen.',
      },
      {
        question: 'Wie wird die geschätzte Lesezeit berechnet?',
        answer:
          'Die geschätzte Lesezeit nutzt eine durchschnittliche stille Lesegeschwindigkeit von 200 Wörtern pro Minute sowohl für deinen Originaltext als auch für die erstellte Zusammenfassung, damit du die eingesparte Zeit auf einen Blick siehst.',
      },
      {
        question: 'Gibt es ein Limit oder Kosten für die Nutzung des KI-Text-Zusammenfassers?',
        answer:
          'Das Tool ist komplett kostenlos ohne Abrechnung oder Anmeldung. Besucher erhalten bis zu 5 kostenlose Zusammenfassungen pro UTC-Tag, und alle 85 lokalen Browser-Tools bleiben unbegrenzt.',
      },
      {
        question: 'Welche Zusammenfassungslängen bietet der KI-Text-Zusammenfasser?',
        answer:
          'Du kannst kurze (10–20 % des Originals), mittlere (30–40 %) oder lange (50–60 %) Zusammenfassungen wählen, je nachdem, wie viel Detail du behalten willst.',
      },
      {
        question: 'Welche Zusammenfassungsformate kann ich wählen?',
        answer:
          'Das Tool bietet die Formate Absatz, Stichpunkte, Kernaussagen-Extraktion und Einfache Sprache, damit du die Zusammenfassung an Notizen, Berichte oder Lernmaterial anpassen kannst.',
      },
      {
        question: 'Wie lang kann der Text sein, den ich zusammenfasse?',
        answer:
          'Jede Anfrage akzeptiert zwischen 25 Wörtern und 25.000 Zeichen. Teile längere Dokumente in Abschnitte und fasse jeden Teil separat zusammen.',
      },
      {
        question: 'Sendet der KI-Text-Zusammenfasser meinen Text an einen externen Dienst?',
        answer:
          'Ja. Dein Text wird sicher zur KI-Inferenz an Groq über unseren Backend-Worker gesendet, weil Zusammenfassen ein Sprachmodell braucht. Er wird von UtilityFlow nicht gespeichert oder protokolliert.',
      },
      {
        question: 'Kann der KI-Text-Zusammenfasser Meeting-Transkripte zusammenfassen?',
        answer:
          'Ja. Füge das Transkript ein und wähle das Format Kernaussagen oder Stichpunkte, um Entscheidungen, Aktionspunkte und Hauptdiskussionspunkte schnell zu extrahieren.',
      },
      {
        question: 'Behält die Zusammenfassung die ursprünglichen Fakten und Zahlen?',
        answer:
          'Der Zusammenfasser ist angewiesen, Namen, Statistiken, Daten und sachliche Zusammenhänge zu bewahren. Prüfe die Zusammenfassung dennoch bei wichtigen Dokumenten mit dem Original.',
      },
      {
        question: 'Kann ich Forschungsarbeiten mit dem KI-Text-Zusammenfasser zusammenfassen?',
        answer:
          'Ja. Füge die Zusammenfassung oder den vollständigen Text ein und nutze das lange Format, um Methodikdetails und Erkenntnisse zu behalten, oder das kurze Format für einen schnellen Überblick.',
      },
      {
        question: 'Funktioniert der KI-Text-Zusammenfasser in anderen Sprachen als Englisch?',
        answer:
          'Ja. Du kannst eine Ausgabesprache wählen, und die Zusammenfassung wird in dieser Sprache erstellt, während die ursprünglichen Fakten unverändert bleiben.',
      },
      {
        question: 'Wie wird die eingesparte Lesezeit im KI-Text-Zusammenfasser berechnet?',
        answer:
          'Das Tool vergleicht die geschätzte Lesezeit deines Originaltexts mit der der Zusammenfassung – mit einer durchschnittlichen stillen Lesegeschwindigkeit von 200 Wörtern pro Minute.',
      },
      {
        question: 'Kann der KI-Text-Zusammenfasser eine Version in einfacher Sprache erstellen?',
        answer:
          'Ja. Wähle das Format Einfache Sprache, um eine einfache, leicht lesbare Version komplexer oder technischer Texte zu erhalten – nützlich für Studierende und Nicht-Experten.',
      },
      {
        question: 'Was sollte ich tun, wenn die Zusammenfassung einen wichtigen Punkt auslässt?',
        answer:
          'Versuche das lange Format oder das Kernaussagen-Format, die mehr Details behalten. Du kannst den Text auch aufteilen und den ausgelassenen Abschnitt separat zusammenfassen.',
      },
      {
        question: 'Ist der KI-Text-Zusammenfasser gut zum Lernen und zur Prüfungsvorbereitung?',
        answer:
          'Ja. Fasse Kapitel oder Vorlesungsnotizen in Stichpunkte und Kernaussagen zusammen und lies dann die Kurzversion vor Prüfungen, um die Hauptideen aufzufrischen.',
      },
      {
        question: 'Wie unterscheidet sich der KI-Text-Zusammenfasser vom KI-Schreibassistenten?',
        answer:
          'Der Zusammenfasser verdichtet langen Text zu kürzeren Versionen, während der Schreibassistent Grammatik korrigiert, Sätze umschreibt und den Ton ändert, ohne den Text zu kürzen.',
      },
      {
        question: 'Was passiert, wenn ich das tägliche Zusammenfassungslimit erreiche?',
        answer:
          'Das Limit wird automatisch um UTC-Mitternacht zurückgesetzt. Bis dahin kannst du die lokalen Browser-Tools wie Wortzähler und Keyword-Dichte-Prüfer ohne Limits nutzen.',
      },
      {
        question: 'Kann der KI-Text-Zusammenfasser PDFs oder Webseiten direkt verarbeiten?',
        answer:
          'Nein. Füge den Text selbst in den Editor ein. Nutze für PDFs zuerst den PDF-Text-Extraktor, um den Text zu kopieren, und füge ihn dann in den Zusammenfasser ein.',
      },
      {
        question: 'Fügt der KI-Text-Zusammenfasser meiner Zusammenfassung neue Informationen hinzu?',
        answer:
          'Nein. Er ist angewiesen, nur zusammenzufassen, was in deinem Text steht, und keine externen Behauptungen hinzuzufügen – du solltest das Ergebnis dennoch auf Richtigkeit prüfen.',
      },
    ],
  },
  'ai-tool-finder': {
    slug: 'ki-tool-finder',
    name: 'Intelligenter KI-Tool-Finder',
    shortDescription:
      'Beschreibe deine Aufgabe in einfacher Sprache – mit Tippfehlern oder natürlicher Formulierung –, um sofort das am besten passende UtilityFlow-Tool zu finden.',
    keywords: [
      'ki tool finder',
      'intelligente tool suche',
      'utility tool finden',
      'online tool empfehlen',
      'tool suche in natürlicher sprache',
      'kostenloses tool online finden',
      'utility tool empfehlung',
      'tools nach aufgabe suchen',
      'ki tool suche online',
    ],
    seo: {
      title: 'KI-Tool-Finder – Das passende Tool finden | UtilityFlow',
      description:
        'Beschreibe, was du brauchst, in einfacher Sprache, um das passende Tool unter den 88 von UtilityFlow zu entdecken – schnell, kostenlos und ohne erfundene Links.',
      primaryKeyword: 'ki tool finder',
      secondaryKeywords: [
        'online tool finder',
        'passendes utility tool finden',
        'ki tool empfehlung',
        'utilityflow tool suche',
      ],
      longTailKeywords: [
        'kostenloses online tool für meine aufgabe finden',
        'utility tools nach problem in einfacher sprache suchen',
        'ki tool entdeckung ohne anmeldung',
        'welches online tool brauche ich für pdf',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100 % kostenlos, ohne Login, Abo oder Credits. Durchsucht unser verifiziertes Inventar von 85 Browser-Tools + 2 KI-Tools (bis zu 10 KI-Suchen pro Tag + unbegrenzte sofortige Keyword-Suche).',
    intro:
      'Du weißt nicht, welches Tool deine Aufgabe löst? Beschreibe dein Ziel in einfacher Sprache – auch mit Rechtschreibfehlern oder informeller Formulierung –, und unser hybrider Keyword- + Groq-KI-Abgleich empfiehlt verifizierte Tools aus dem Live-Katalog von UtilityFlow mit klaren Begründungen.',
    instructions: [
      {
        title: 'Aufgabe beschreiben oder eine Schnellvorlage wählen',
        description:
          'Schreibe eine Anfrage in einfacher Sprache wie „Ich will meine Bildgröße auf 100 KB verringern“ oder „PDF in PNG umwandeln“, oder klicke auf eine beliebige Schnellaufgaben-Vorlage.',
      },
      {
        title: 'Bei Bedarf nach Kategorie filtern',
        description:
          'Grenze Empfehlungen auf Text- & Schreib-, Entwickler-, Rechner-, Social-Media-, PDF-, SEO- oder Bild- & Datei-Tools ein – oder suche in allen 87 Tools gleichzeitig.',
      },
      {
        title: 'Suche starten und Treffer prüfen',
        description:
          'Reiche deine Anfrage ein, um sofortige Keyword-Treffer zu erhalten, oder nutze eine KI-gestützte Suche für semantischen Abgleich. Die Ergebnisse sind nach Relevanz für deine Aufgabe sortiert.',
      },
      {
        title: 'Begründungen und Alternativen inspizieren',
        description:
          'Lies die Ein-Satz-Begründung jeder Empfehlung und prüfe die Alternativenliste, um ähnliche Tools vor der Auswahl zu vergleichen.',
      },
      {
        title: 'Verifiziertes Tool öffnen',
        description:
          'Klicke auf „Tool öffnen“, um das empfohlene Tool sofort zu starten. Jeder Link wird anhand des Live-Registers verifiziert und öffnet daher immer ein echtes Tool.',
      },
      {
        title: 'Bei fehlendem Treffer eine andere Formulierung versuchen',
        description:
          'Wenn der Finder meldet, dass es keinen exakten Treffer gibt, formuliere deine Aufgabe mit einfacheren Wörtern oder einem anderen Kategoriefilter neu und prüfe den ehrlichen Kein-Treffer-Hinweis auf die nächstliegende Option.',
      },
    ],
    examples: [
      {
        title: 'Ein Bild auf 100 KB komprimieren',
        input: 'Ich will meine Bildgröße auf 100 KB verringern.',
        output: 'Empfohlen: Bild-Kompressor (/de/bild-kompressor/)',
        explanation:
          'Passt zum clientseitigen Bild-Kompressor und schlägt Bildgrößen-Anpasser & Zuschneider oder Bildformat-Konverter als Alternativen vor.',
      },
      {
        title: 'Ehrlicher Umgang mit fehlendem Treffer',
        input: 'Ich muss ein PDF in Word umwandeln.',
        output: 'Kein exakter PDF-zu-DOCX-Konverter verfügbar; der PDF-Text-Extraktor wird für Rohtext vorgeschlagen.',
        explanation:
          'Erfindet niemals fehlende Tools und behauptet niemals, dass ein Tool Formate unterstützt, die es nicht unterstützt.',
      },
    ],
    benefits: [
      'Kostenlose Suche in natürlicher Sprache in allen 85 Browser-Tools und 2 KI-Tools',
      'Sofortiger lokaler, tippfehlertoleranter Keyword-Abgleich plus semantisches Groq-KI-Ranking',
      'Strenge Inventarverifizierung garantiert keine erfundenen Tools oder defekten Links',
      'Zeigt eine klare Ein-Satz-Begründung und bis zu 3 Alternativen',
    ],
    useCases: [
      'Das passende PDF-, Bild- oder Text-Utility finden, ohne jede Kategorie zu durchsuchen',
      'Ziele in einfacher Sprache mit exakten Browser-Tools und unterstützten Formaten verknüpfen',
      'Ehrlich prüfen, ob UtilityFlow derzeit ein spezielles Dateiformat unterstützt',
      'Mehrere ähnliche Tools vergleichen, bevor du entscheidest, welches du für eine Aufgabe nutzt',
    ],
    faqs: [
      {
        question: 'Empfiehlt der intelligente KI-Tool-Finder jemals Tools, die nicht existieren?',
        answer:
          'Nein. Jede von der KI zurückgegebene Empfehlung wird vor der Anzeige strikt anhand unseres Live-Tool-Registers geprüft. Wenn kein passendes Tool existiert, sagt dir der Finder das ehrlich.',
      },
      {
        question: 'Was passiert, wenn ich Rechtschreibfehler in meiner Suche mache?',
        answer:
          'Unser lokaler Keyword-Ranker enthält Tippfehlertoleranz per Editierdistanz und Aufgabensynonyme, und der Groq-KI-Ranker interpretiert natürliche Formulierungen und Rechtschreibfehler automatisch.',
      },
      {
        question: 'Wie viele Suchen kann ich kostenlos durchführen?',
        answer:
          'Der sofortige lokale Keyword-Abgleich ist unbegrenzt, und Besucher erhalten bis zu 10 kostenlose KI-gestützte Suchen pro UTC-Tag – ohne Anmeldung oder Zahlung.',
      },
      {
        question: 'Wie versteht der intelligente KI-Tool-Finder meine Anfrage?',
        answer:
          'Er kombiniert sofortigen lokalen Keyword-Abgleich mit semantischem Groq-KI-Ranking und versteht daher Ziele in einfacher Sprache, Synonyme und natürliche Formulierungen – nicht nur exakte Toolnamen.',
      },
      {
        question: 'Welche Tools kann der intelligente KI-Tool-Finder empfehlen?',
        answer:
          'Er durchsucht den vollständigen UtilityFlow-Katalog mit 88 Tools: 85 Browser-Tools in den Kategorien Text, Entwickler, Rechner, Social Media, PDF, SEO und Bild sowie den KI-Schreibassistenten und den KI-Text-Zusammenfasser.',
      },
      {
        question: 'Sendet der intelligente KI-Tool-Finder meine Suche an einen externen Dienst?',
        answer:
          'KI-gestützte Suchen senden deinen Anfragentext zur semantischen Zuordnung an Groq über unseren Backend-Worker. Der sofortige Keyword-Abgleich läuft lokal in deinem Browser und sendet nichts.',
      },
      {
        question: 'Kann ich nach einem Tool über ein Dateiformat wie PDF oder PNG suchen?',
        answer:
          'Ja. Erwähne das Format in deiner Anfrage, zum Beispiel „PDF in PNG umwandeln“, und der Finder empfiehlt Tools, die dieses Format unterstützen, etwa PDF zu Bildern.',
      },
      {
        question: 'Was tut der intelligente KI-Tool-Finder, wenn kein Tool zu meiner Aufgabe passt?',
        answer:
          'Er sagt dir ehrlich, dass kein exakter Treffer existiert, und schlägt das nächstliegende verfügbare Tool vor, statt ein Tool oder einen defekten Link zu erfinden.',
      },
      {
        question: 'Kann ich Tool-Empfehlungen nach Kategorie filtern?',
        answer:
          'Ja. Nutze den Kategoriefilter, um Ergebnisse vor der Suche auf Text- & Schreib-, Entwickler-, Rechner-, Social-Media-, PDF-, SEO- oder Bild- & Datei-Tools zu begrenzen.',
      },
      {
        question: 'Wie funktionieren die Schnellaufgaben-Vorschläge im intelligenten KI-Tool-Finder?',
        answer:
          'Schnellvorschläge sind Ein-Klick-Beispielanfragen, etwa ein Bild auf 100 KB zu verkleinern, die zeigen, wie man eine Aufgabe formuliert, und sofort das passende Tool zurückgeben.',
      },
      {
        question: 'Warum enthält jede Empfehlung eine Begründung?',
        answer:
          'Jedes Ergebnis zeigt eine Ein-Satz-Erklärung, warum das Tool zu deinem Ziel passt, inklusive unterstützter Formate, damit du die Eignung beurteilen kannst, bevor du es öffnest.',
      },
      {
        question: 'Kann der intelligente KI-Tool-Finder auch KI-Tools empfehlen?',
        answer:
          'Ja. Er kann den KI-Schreibassistenten für Grammatik und Umschreiben und den KI-Text-Zusammenfasser zum Verdichten langer Texte empfehlen, wenn deine Aufgabe zu diesen Tools passt.',
      },
      {
        question: 'Ist der intelligente KI-Tool-Finder kostenlos?',
        answer:
          'Ja. Der Keyword-Abgleich ist unbegrenzt und kostenlos, und KI-gestützte Suchen sind bis zu 10 pro Tag und Besucher kostenlos – ohne Konto, Login oder Zahlung.',
      },
      {
        question: 'Was sollte ich tun, wenn die Top-Empfehlung nicht ganz richtig ist?',
        answer:
          'Prüfe die Alternativenliste unter dem Top-Ergebnis oder formuliere deine Anfrage mit mehr Details neu – nenne zum Beispiel das Dateiformat oder die exakte Ausgabe, die du brauchst.',
      },
      {
        question: 'Kann ich den intelligenten KI-Tool-Finder nutzen, um einen Rechner zu finden?',
        answer:
          'Ja. Beschreibe die Berechnung in einfachen Worten, etwa „monatliche Kreditrate berechnen“, und er empfiehlt den Kredit-EMI-Rechner oder einen verwandten Rechner.',
      },
      {
        question: 'Wie unterscheidet sich der intelligente KI-Tool-Finder von der Tool-Verzeichnisseite?',
        answer:
          'Das Tool-Verzeichnis listet alle 88 Tools nach Kategorie zum Stöbern auf, während der Tool-Finder deine Aufgabe in einfacher Sprache mit dem besten Tool verknüpft und erklärt, warum es passt.',
      },
      {
        question: 'Kann der intelligente KI-Tool-Finder bei SEO-Aufgaben helfen?',
        answer:
          'Ja. Frage nach Dingen wie „Meta-Description-Länge prüfen“ oder „Sitemap erstellen“, und er verweist dich auf den Meta-Tag-Generator, den XML-Sitemap-Generator oder den On-Page-SEO-Prüfer.',
      },
      {
        question: 'Was passiert, wenn ich das tägliche KI-Suchlimit erreiche?',
        answer:
          'Das KI-Suchlimit wird um UTC-Mitternacht zurückgesetzt. Bis dahin funktioniert der sofortige Keyword-Abgleich weiterhin ohne Limits, sodass du Tools weiterhin per Keywords finden kannst.',
      },
      {
        question: 'Kann der intelligente KI-Tool-Finder Tools zur Bildbearbeitung empfehlen?',
        answer:
          'Ja. Beschreibe deine Bildaufgabe, etwa „dieses Foto komprimieren“ oder „Bildgröße ändern“, und er empfiehlt den Bild-Kompressor, den Bildgrößen-Anpasser oder den Bildformat-Konverter.',
      },
      {
        question: 'Funktionieren die Links des intelligenten KI-Tool-Finders immer?',
        answer:
          'Ja. Jede Empfehlung wird vor der Anzeige anhand des Live-Tool-Registers geprüft, sodass Links immer eine echte, funktionierende UtilityFlow-Toolseite öffnen.',
      },
    ],
  },
};
