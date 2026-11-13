import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the de locale.
 * GENERATED — assembled from .restructure-work fragments (group1/group2 JSON
 * + group2-ts TypeScript for function-valued entries). Do not hand-edit;
 * the source of truth is the per-component STRINGS_EN tables plus these
 * per-language fragments. Loaded only when the de locale is selected.
 */
export const deComponentStrings: Record<string, ComponentLocaleData> = {
"case-converter": {
    "strings": {
      "textToConvert": "Text zur Umwandlung der Groß-/Kleinschreibung",
      "placeholder": "Text eingeben oder einfügen und dann unten auf eine Umwandlungsschaltfläche klicken...",
      "copyResult": "Ergebnis kopieren"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "Schreiben Sie klare, prägnante Texte, die die Zeichenlimits der Plattformen einhalten, ohne dass sie in Suchergebnissen oder sozialen Feeds ungünstig abgeschnitten werden.",
      "withSpaces": "Mit Leerzeichen",
      "withoutSpaces": "Ohne Leerzeichen",
      "words": "Wörter",
      "letters": "Buchstaben",
      "digits": "Ziffern",
      "utf8Bytes": "UTF-8-Bytes",
      "copyText": "Text kopieren",
      "textToMeasure": "Text zur Messung der Zeichenlänge",
      "placeholder": "Text eingeben oder einfügen, um exakte Zeichenzahlen, Bytegröße und Plattformlimits zu prüfen...",
      "whitespaceChars": "Leerzeichen",
      "lines": "Zeilen",
      "platformLimitsTitle": "Zeichenlimits für Plattformen und SEO",
      "over": "darüber",
      "left": "übrig",
      "platformLimits": [
        {
          "name": "SEO-Meta-Titel",
          "note": "Empfohlene Länge des Google-Titels in den Suchergebnissen"
        },
        {
          "name": "SEO-Meta-Beschreibung",
          "note": "Standard-Schwellenwert für Snippets auf dem Desktop"
        },
        {
          "name": "SMS-Segment",
          "note": "Eine einzelne GSM-7-SMS-Nachricht"
        },
        {
          "name": "X-/Twitter-Beitrag",
          "note": "Standardlänge eines Beitrags"
        },
        {
          "name": "Instagram-Bildunterschrift (Vorschau)",
          "note": "Sichtbar vor dem Kürzen mit „Mehr“"
        },
        {
          "name": "LinkedIn-Beitrag",
          "note": "Maximale Standard-Feed-Aktualisierung"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "Suchen",
      "replaceWith": "Ersetzen durch",
      "findPlaceholder": "Zu suchender Text...",
      "replacePlaceholder": "Ersatztext...",
      "caseSensitive": "Groß-/Kleinschreibung beachten",
      "wholeWordOnly": "Nur ganze Wörter",
      "useRegex": "Regulären Ausdruck (RegExp) verwenden",
      "regexError": "Regex-Fehler:",
      "invalidRegex": "Ungültiger regulärer Ausdruck.",
      "sourceText": "Quelltext",
      "updatedOutput": "Aktualisierte Ausgabe",
      "match": "Treffer",
      "matches": "Treffer",
      "replaced": "ersetzt",
      "sourcePlaceholder": "Text zum Suchen und Ersetzen einfügen...",
      "outputPlaceholder": "Vorschau des ersetzten Texts erscheint hier...",
      "copyResult": "Ergebnis kopieren"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "Zeilenpräfix",
      "lineSuffix": "Zeilensuffix",
      "startNumber": "Startnummer",
      "numberSeparator": "Zahlentrennzeichen",
      "addLineNumbers": "Zeilennummern hinzufügen",
      "zeroPad": "Zahlen mit Nullen auffüllen (01, 02)",
      "skipEmptyLines": "Leere Zeilen überspringen",
      "inputLines": "Eingabezeilen",
      "formattedLines": "Formatierte Zeilen",
      "copyResult": "Ergebnis kopieren",
      "inputPlaceholder": "Einen Wert oder eine Zeile pro Reihe einfügen...",
      "outputPlaceholder": "Nummerierte oder umschlossene Zeilen erscheinen hier..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "Anzahl",
      "unit": "Einheit",
      "unitLabels": {
        "paragraphs": "Absätze",
        "sentences": "Sätze",
        "words": "Wörter"
      },
      "startClassic": "Mit „Lorem ipsum“ beginnen",
      "wrapHtml": "In <p>-Tags einschließen",
      "words": "Wörter",
      "characters": "Zeichen",
      "regenerate": "Neu erzeugen",
      "copyPlaceholder": "Platzhaltertext kopieren",
      "generatedText": "Erzeugter Platzhaltertext"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# UtilityFlow Versionshinweise\n\nWillkommen beim **Markdown Previewer**, einem schnellen clientseitigen Editor mit Live-*HTML*-Export.\n\n## Hauptfunktionen\n\n- Sofortige Formatierung für Überschriften, Listen und Links\n- Sicheres HTML-Escaping ohne Remote-Uploads\n- HTML-Rohdaten mit einem Klick kopieren und herunterladen\n\n> Halten Sie die Dokumentation nah an der Arbeit und prüfen Sie die Struktur vor der Veröffentlichung.\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\nMehr erfahren unter [UtilityFlow](/tools/).",
      "renderedPreview": "Gerenderte Vorschau",
      "rawHtml": "Rohes HTML",
      "exportHtml": "HTML exportieren",
      "copyHtml": "HTML kopieren",
      "markdownSource": "Markdown-Quelle",
      "livePreview": "Live-Vorschau",
      "compiledHtml": "Kompiliertes HTML",
      "compiledHtmlAria": "Kompilierte HTML-Quelle",
      "inputPlaceholder": "Markdown schreiben (# Überschrift, **fett**, - Liste, [Link](https://...))...",
      "emptyPreview": "Die Vorschau erscheint, während Sie Markdown eingeben..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "Klare technische Texte respektieren die Zeit der Leser. Verwenden Sie konkrete Substantive und aktive Verben, wann immer möglich, damit komplexe Anleitungen leicht zu befolgen bleiben.\n\nLange Sätze mit verschachtelten Nebensätzen zwingen Leser dazu, Absätze erneut zu lesen. Dichte Erklärungen in kürzere Schritte zu zerlegen, macht Dokumentation schneller überfliegbar und einfacher anzuwenden.",
      "level": "Niveau:",
      "textToCheck": "Text zur Prüfung der Lesbarkeit",
      "placeholder": "Artikel, Aufsatz oder Landingpage-Text einfügen, um Flesch-Lesbarkeitsindex und Klassenstufen zu berechnen...",
      "fleschEase": "Flesch-Lesbarkeitsindex",
      "fleschKincaid": "Flesch-Kincaid-Klassenstufe",
      "usGrade": "US-Schulklassenstufe",
      "gunningFog": "Gunning-Fog-Index",
      "yearsEducation": "Bildungsjahre",
      "smog": "SMOG-Index",
      "polysyllable": "Mehrsilbige Komplexität",
      "structuralBreakdown": "Strukturelle Aufschlüsselung",
      "wordsSentences": "Wörter / Sätze",
      "avgSentenceLength": "Ø Satzlänge",
      "words": "Wörter",
      "avgSyllablesPerWord": "Ø Silben pro Wort",
      "complexWords": "Komplexe Wörter (3+ Silben)",
      "longWordsDetected": "Erkannte lange Wörter (3+ Silben)",
      "noLongWords": "Keine Wörter mit 3+ Silben in diesem Abschnitt gefunden.",
      "emptyState": "Geben Sie oben mindestens einen Satz ein, um Lesbarkeitsformeln und strukturelle Verhältnisse zu sehen.",
      "levels": [
        {
          "level": "Sehr leicht",
          "audience": "5. Klasse (10–11 Jahre)"
        },
        {
          "level": "Leicht",
          "audience": "6. Klasse (11–12 Jahre)"
        },
        {
          "level": "Ziemlich leicht",
          "audience": "7. Klasse (12–13 Jahre)"
        },
        {
          "level": "Standard",
          "audience": "8.–9. Klasse (13–15 Jahre)"
        },
        {
          "level": "Ziemlich schwierig",
          "audience": "10.–12. Klasse"
        },
        {
          "level": "Schwierig",
          "audience": "Hochschulniveau"
        },
        {
          "level": "Sehr schwierig",
          "audience": "Hochschulabschluss / Fachniveau"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "Groß-/Kleinschreibung beachten",
      "trimWhitespace": "Leerzeichen entfernen",
      "removeEmptyLines": "Leere Zeilen entfernen",
      "sortAlphabetically": "Alphabetisch sortieren",
      "originalLines": "Ursprüngliche Zeilen",
      "lines": "Zeilen",
      "uniqueLines": "Einzigartige Zeilen",
      "unique": "einzigartig",
      "removed": "entfernt",
      "inputPlaceholder": "Liste mit einem Element pro Zeile einfügen...",
      "outputPlaceholder": "Deduplizierte Ausgabe erscheint hier..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "Groß-/Kleinschreibung beachten",
      "ignoreBlankLines": "Leere Zeilen ignorieren",
      "removeDuplicates": "Duplikate entfernen",
      "inputLines": "Eingabezeilen",
      "sortedLines": "Sortierte Zeilen",
      "copySorted": "Sortierte kopieren",
      "inputPlaceholder": "Ein Element pro Zeile eingeben...",
      "outputPlaceholder": "Sortierte Ausgabe erscheint hier...",
      "sortOptions": [
        {
          "id": "alpha-asc",
          "label": "A → Z"
        },
        {
          "id": "alpha-desc",
          "label": "Z → A"
        },
        {
          "id": "natural",
          "label": "Natürlich (1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "Kürzeste zuerst"
        },
        {
          "id": "length-desc",
          "label": "Längste zuerst"
        },
        {
          "id": "reverse-order",
          "label": "Umgekehrte Reihenfolge"
        },
        {
          "id": "shuffle",
          "label": "Mischen"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "Leerzeichen ignorieren",
      "ignoreCase": "Groß-/Kleinschreibung ignorieren",
      "originalText": "Originaltext",
      "modifiedText": "Geänderter Text",
      "originalPlaceholder": "Originaltext einfügen...",
      "modifiedPlaceholder": "Aktualisierten Text einfügen...",
      "lineComparison": "Zeilenvergleich",
      "added": "hinzugefügt",
      "removed": "entfernt",
      "unchanged": "unverändert",
      "emptyState": "Text in beide Felder oben eingeben, um hinzugefügte und entfernte Zeilen zu vergleichen."
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "Erste Textzeile\nZweite Textzeile\nDritte Textzeile",
      "originalText": "Originaltext",
      "reversedOutput": "Umgekehrte Ausgabe",
      "inputPlaceholder": "Text oder Zeilen zum Umkehren eingeben...",
      "outputPlaceholder": "Umgekehrter Text erscheint hier...",
      "modes": [
        {
          "id": "characters",
          "label": "Zeichen umkehren"
        },
        {
          "id": "words",
          "label": "Wortreihenfolge umkehren"
        },
        {
          "id": "each-word",
          "label": "Jedes Wort umkehren"
        },
        {
          "id": "lines",
          "label": "Zeilenreihenfolge umkehren"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "10 beste Wege, JSON online zu formatieren!\nCafé & Crème: Leitfaden für 2026\nSo erstellen Sie eine schnelle statische Website mit Cloudflare Pages",
      "hyphen": "Bindestrich (-)",
      "underscore": "Unterstrich (_)",
      "forceLowercase": "Kleinbuchstaben erzwingen",
      "stripStopWords": "Gängige Stoppwörter entfernen",
      "titlesLabel": "Titel oder Phrasen (einer pro Zeile für den Stapelmodus)",
      "inputPlaceholder": "Blogtitel, Produktname oder Liste von Überschriften eingeben...",
      "generatedSlugs": "Erzeugte URL-Slugs",
      "copySlugs": "Slugs kopieren",
      "outputPlaceholder": "saubere-url-slugs-erscheinen-hier"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   Erste   Zeile mit   extra   Leerzeichen.   \n\n   Zweite Zeile   mit   Tabs\tund   Lücken.\n\n\nDritte   Zeile hier.   ",
      "collapseSpaces": "Mehrere Leerzeichen zusammenfassen",
      "trimEdges": "Zeilenränder trimmen",
      "tabsToSpaces": "Tabs in Leerzeichen umwandeln",
      "lineBreaks": "Zeilenumbrüche:",
      "keepBreaks": "Zeilenumbrüche beibehalten",
      "removeBlankLines": "Leere Zeilen entfernen",
      "replaceWithSpaces": "Durch Leerzeichen ersetzen",
      "removeAllBreaks": "Alle Umbrüche entfernen",
      "inputText": "Eingabetext",
      "chars": "Zeichen",
      "cleanedText": "Bereinigter Text",
      "removed": "entfernt",
      "inputPlaceholder": "Unordentlichen Text mit zusätzlichen Leerzeichen, Tabs oder Leerzeilen einfügen...",
      "outputPlaceholder": "Bereinigte Ausgabe erscheint automatisch..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow verarbeitet jede Textberechnung direkt in Ihrem Browser. Ob Sie einen Blogartikel entwerfen, eine Produktankündigung straffen oder einen akademischen Aufsatz anhand eines strengen Wortlimits prüfen – sofortige Zählungen helfen Ihnen, Ihre Botschaft klar zu gliedern.\n\nKurze Sätze verbessern die Lesbarkeit. Unterschiedliche Satzlängen halten längere Anleitungen für Leser auf Desktop- und Mobilbildschirmen ansprechend.",
      "words": "Wörter",
      "characters": "Zeichen",
      "noSpaces": "Ohne Leerzeichen",
      "sentences": "Sätze",
      "paragraphs": "Absätze",
      "readingTime": "Lesezeit",
      "downloadTxt": ".txt herunterladen",
      "copyText": "Text kopieren",
      "textToCount": "Zu zählender Text",
      "placeholder": "Text hier einfügen oder eingeben, um Wörter, Zeichen, Sätze und Lesezeit zu zählen...",
      "deliveryTimingLines": "Sprechzeit und Zeilen",
      "speakingTime": "Sprechzeit (130 WpM)",
      "totalLines": "Zeilen insgesamt",
      "avgWordLength": "Durchschnittliche Wortlänge",
      "chars": "Zeichen",
      "mostFrequentWords": "Häufigste Wörter",
      "emptyKeywords": "Text oben eingeben, um die häufigsten wiederholten Wörter zu sehen."
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "Technische SEO-Audits prüfen Crawlbarkeit, interne Verlinkung und Ladegeschwindigkeit. Schnelle Seiten verbessern Nutzerbindung und Ladegeschwindigkeitssignale in der mobilen Suche. Interne Verlinkung verbindet verwandte Anleitungen und stärkt die technische SEO-Struktur.",
      "ngramLabels": {
        "1": "1 Wort",
        "2": "2-Wort-Phrasen",
        "3": "3-Wort-Phrasen"
      },
      "excludeStopWords": "Gängige Stoppwörter ausschließen",
      "minLength": "Mindestlänge:",
      "textForAnalysis": "Text für die Häufigkeitsanalyse",
      "placeholder": "Artikeltexte, Produktbeschreibungen oder Notizen einfügen, um wiederholte Begriffe und Keyword-Dichte zu zählen...",
      "totalWords": "Wörter insgesamt:",
      "uniqueTerms": "Einzigartige Begriffe:",
      "exportCsv": "CSV exportieren",
      "copyCsv": "CSV kopieren",
      "rank": "#",
      "termPhrase": "Begriff / Phrase",
      "count": "Anzahl",
      "density": "Dichte",
      "emptyState": "Text oben eingeben, um Wortzahlen und Keyword-Dichte-Prozentsätze zu sehen."
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "Bitte geben Sie gültige Kalenderdaten ein.",
      "errorDobAfterTarget": "Das Geburtsdatum darf nicht nach dem Zieldatum liegen.",
      "dobLabel": "Geburtsdatum",
      "targetLabel": "Alter am Datum",
      "exactAge": "Exaktes chronologisches Alter",
      "yearsWord": "Jahre",
      "monthsWord": "Monate",
      "daysWord": "Tage",
      "nextBirthday": "Nächster Geburtstag",
      "turning": "wird",
      "inWord": "in",
      "totalMonths": "Monate insgesamt",
      "totalWeeks": "Wochen insgesamt",
      "totalDays": "Tage insgesamt",
      "totalHours": "Stunden insgesamt (ca.)",
      "monthsAbbr": "Mon.",
      "weeksAbbr": "Wo.",
      "daysAbbr": "T",
      "hoursAbbr": "Std."
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "Untergewicht",
      "normalWeight": "Normalgewicht",
      "overweight": "Übergewicht",
      "obesity": "Adipositas",
      "errorHeightMetric": "Geben Sie eine Größe zwischen 50 cm und 280 cm ein.",
      "errorWeightMetric": "Geben Sie ein Gewicht zwischen 15 kg und 500 kg ein.",
      "errorHeightImperial": "Geben Sie eine gültige Größe zwischen 2 ft und 9 ft ein.",
      "errorWeightImperial": "Geben Sie ein Gewicht zwischen 30 lbs und 1100 lbs ein.",
      "metricTab": "Metrisch (cm / kg)",
      "imperialTab": "Imperial (ft, in / lbs)",
      "heightCmLabel": "Größe (cm)",
      "weightKgLabel": "Gewicht (kg)",
      "heightFtLabel": "Größe (ft)",
      "heightInLabel": "Größe (in)",
      "weightLbsLabel": "Gewicht (lbs)",
      "bmiLabel": "Body-Mass-Index (BMI)",
      "whoCategory": "WHO-Kategorie",
      "healthyRange": "Gesunder Gewichtsbereich nach BMI (18.5–24.9)",
      "disclaimer": "Der BMI ist ein allgemeiner Screening-Wert und unterscheidet nicht zwischen Muskelmasse und Körperfett."
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "Geben Sie ein Alter zwischen 15 und 100 Jahren ein.",
      "errorHeightMetric": "Geben Sie eine Größe zwischen 100 cm und 250 cm ein.",
      "errorWeightMetric": "Geben Sie ein Gewicht zwischen 30 kg und 350 kg ein.",
      "errorHeightImperial": "Geben Sie eine Größe zwischen 3 ft 4 in und 8 ft 2 in ein.",
      "errorWeightImperial": "Geben Sie ein Gewicht zwischen 66 lbs und 770 lbs ein.",
      "metricTab": "Metrisch (cm / kg)",
      "imperialTab": "Imperial (ft, in / lbs)",
      "maleTab": "Männlich",
      "femaleTab": "Weiblich",
      "ageLabel": "Alter (Jahre)",
      "heightCmLabel": "Größe (cm)",
      "weightKgLabel": "Gewicht (kg)",
      "heightFtLabel": "Größe (ft)",
      "heightInLabel": "Größe (in)",
      "weightLbsLabel": "Gewicht (lbs)",
      "activityLabel": "Aktivitätslevel",
      "activitySedentary": "Sitzend (1.2×)",
      "activitySedentaryDetail": "Bürojob, wenig oder keine Bewegung",
      "activityLight": "Leicht aktiv (1.375×)",
      "activityLightDetail": "Leichte Bewegung 1–3 Tage/Woche",
      "activityModerate": "Mäßig aktiv (1.55×)",
      "activityModerateDetail": "Mäßige Bewegung 3–5 Tage/Woche",
      "activityVery": "Sehr aktiv (1.725×)",
      "activityVeryDetail": "Intensive Bewegung 6–7 Tage/Woche",
      "activityExtra": "Extrem aktiv (1.9×)",
      "activityExtraDetail": "Körperliche Arbeit oder zweimal tägliches Training",
      "maintenance": "Erhaltungskalorien (TDEE)",
      "mildLoss": "Moderate Gewichtsabnahme (-0.25 kg/Woche)",
      "mildLossNote": "~250 kcal Defizit pro Tag",
      "weightLoss": "Gewichtsabnahme (-0.5 kg/Woche)",
      "weightLossNote": "~500 kcal Defizit pro Tag",
      "leanGain": "Magere Gewichtszunahme",
      "leanGainNote": "+250 kcal Überschuss pro Tag",
      "macroHeading": "Referenz-Makroverteilung für den Erhalt (30% Protein · 40% Kohlenhydrate · 30% Fett)",
      "protein": "Protein",
      "carbs": "Kohlenhydrate",
      "fat": "Fett",
      "gramsPerDay": "g/Tag",
      "disclaimer": "Berechnet mit der Mifflin-St-Jeor-Formel für den Grundumsatz. Der individuelle Energiebedarf hängt von Körperzusammensetzung und medizinischem Kontext ab; konsultieren Sie vor restriktiven Diäten eine qualifizierte medizinische Fachkraft."
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "Die Ersteinzahlung darf nicht negativ sein.",
      "errorMonthly": "Der monatliche Beitrag darf nicht negativ sein.",
      "errorRate": "Die jährliche Rendite muss zwischen 0% und 100% liegen.",
      "errorYears": "Der Anlagezeitraum muss zwischen 1 und 100 Jahren liegen.",
      "initialLabel": "Anfangskapital ($)",
      "monthlyLabel": "Monatliche Einzahlung ($)",
      "rateLabel": "Jährliche Rendite (%)",
      "yearsLabel": "Jahre",
      "compoundingLabel": "Zinseszins-Intervall",
      "dailyOption": "Täglich (365/Jahr)",
      "monthlyOption": "Monatlich (12/Jahr)",
      "quarterlyOption": "Vierteljährlich (4/Jahr)",
      "annualOption": "Jährlich (1/Jahr)",
      "futureBalance": "Zukünftiger Kontostand",
      "totalContributed": "Gesamtkapital + Einzahlungen",
      "totalInterest": "Gesamte Zinseszinsen",
      "yearHeader": "Jahr",
      "totalContributedHeader": "Insgesamt eingezahlt",
      "cumulativeInterestHeader": "Kumulierte Zinsen",
      "endingBalanceHeader": "Endstand",
      "yearPrefix": "Jahr"
    }
  },
  "currency-calculator": {
    "strings": {
      "errorAmount": "Geben Sie einen Betrag von 0 oder mehr ein.",
      "errorRate": "Geben Sie einen positiven Wechselkurs größer als 0 ein.",
      "errorFee": "Geben Sie eine Umrechnungsgebühr zwischen 0% und 50% ein.",
      "fetchErrorWithMessage": "Externer Kurs konnte nicht abgerufen werden ({message}). Geben Sie Ihren Wechselkurs oben manuell ein.",
      "fetchErrorGeneric": "Die externe Kurs-API war nicht erreichbar. Geben Sie Ihren Wechselkurs oben manuell ein.",
      "fetchErrorNoPair": "Das ausgewählte Währungspaar wurde von der Referenz-API nicht zurückgegeben.",
      "currencyNames": {
        "USD": "US-Dollar",
        "EUR": "Euro",
        "GBP": "Britisches Pfund",
        "JPY": "Japanischer Yen",
        "CAD": "Kanadischer Dollar",
        "AUD": "Australischer Dollar",
        "CHF": "Schweizer Franken",
        "INR": "Indische Rupie",
        "SGD": "Singapur-Dollar",
        "NZD": "Neuseeland-Dollar",
        "MXN": "Mexikanischer Peso",
        "CNY": "Chinesischer Yuan"
      },
      "rateSourceManualDefault": "Manuell eingegebener Kurs (Offline-Standard)",
      "rateSourceManual": "Manuell eingegebener Kurs",
      "rateSourceIdentity": "Identitätskurs (1.0000) bei gleichen Währungen",
      "rateSourceEcb": "Externer EZB-Referenzkurs über Frankfurter API (Datum: {date})",
      "rateSourceInverted": "Aus dem vorherigen Kurs invertiert",
      "disclosureTitle": "Angabe zur Kursquelle:",
      "disclosureBody": "Aktuelle Marktkurse werden offline nie erfunden. Geben Sie Ihren genauen notierten Wechselkurs manuell ein oder klicken Sie auf",
      "disclosureBodyAfter": ", um einen Referenzkurs von der externen Frankfurter API anzufordern.",
      "activeRateSource": "Aktive Kursquelle:",
      "amountLabel": "Betrag",
      "fromLabel": "Von Währung",
      "toLabel": "Zu Währung",
      "swapAria": "Währungen tauschen",
      "swapTitle": "Währungen tauschen und Kurs invertieren",
      "rateLabel": "Wechselkurs",
      "feeLabel": "Bank-/Kartengebühr (%)",
      "fetchButton": "EZB-Referenzkurs abrufen",
      "fetchingButton": "EZB-Kurs wird abgerufen...",
      "netConverted": "Netto-Umrechnungsbetrag",
      "grossBeforeFee": "Brutto vor Gebühr",
      "feeLabelShort": "Gebühr",
      "inverseRate": "Inverser Wechselkurs",
      "perOne": "pro 1",
      "amountHeaderSuffix": "Betrag",
      "netHeaderPrefix": "Netto",
      "netHeaderSuffix": "(zum eingegebenen Kurs & Gebühr)"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "Bitte wählen Sie gültige Start- und Enddaten.",
      "errorInvalidBase": "Bitte geben Sie ein gültiges Startdatum ein.",
      "errorNonNegative": "Geben Sie nicht-negative ganze Zahlen für Jahre, Monate und Tage ein.",
      "differenceTab": "Differenz zwischen Daten",
      "addSubtractTab": "Zeit addieren / subtrahieren",
      "startLabel": "Startdatum",
      "endLabel": "Enddatum",
      "swapTitle": "Daten tauschen",
      "swapAria": "Start- und Enddatum tauschen",
      "includeEnd": "Enddatum mitzählen (+1 Kalendertag)",
      "calendarDuration": "Kalenderdauer",
      "reversedRange": "(Umgekehrter Zeitraum)",
      "totalSpan": "Gesamtspanne:",
      "calendarDays": "Kalendertage",
      "weeksDays": "Wochen & Tage",
      "weekdays": "Wochentage (Mo–Fr)",
      "weekendDays": "Wochenendtage (Sa–So)",
      "totalHours": "Stunden insgesamt",
      "yearsWord": "Jahre",
      "monthsWord": "Monate",
      "daysWord": "Tage",
      "weeksAbbr": "Wo.",
      "daysAbbr": "T",
      "hoursAbbr": "Std.",
      "referenceLabel": "Referenzdatum",
      "operationLabel": "Operation",
      "addOption": "Addieren (+)",
      "subtractOption": "Subtrahieren (-)",
      "yearsLabel": "Jahre",
      "monthsLabel": "Monate",
      "daysLabel": "Tage",
      "resultingDate": "Resultierendes Kalenderdatum",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "Der Originalpreis darf nicht negativ sein.",
      "errorDiscount": "Der Rabatt muss zwischen 0% und 100% liegen.",
      "errorTax": "Die Umsatzsteuer muss zwischen 0% und 100% liegen.",
      "errorCost": "Die Kosten dürfen nicht negativ sein.",
      "errorSelling": "Der Verkaufspreis muss größer als 0 sein.",
      "discountTab": "Aktionsrabatt",
      "marginTab": "Gewinnspanne & Aufschlag",
      "originalPriceLabel": "Originalpreis ($)",
      "discountLabel": "Rabatt (%)",
      "salesTaxLabel": "Umsatzsteuer (%)",
      "costLabel": "Stückkosten ($)",
      "sellingLabel": "Verkaufspreis ($)",
      "finalPrice": "Endpreis",
      "beforeTax": "Vor Steuern:",
      "youSave": "Sie sparen",
      "taxAdded": "Steuer hinzugefügt",
      "grossProfit": "Bruttogewinn",
      "profitMargin": "Gewinnmarge",
      "profitDivSelling": "(Gewinn ÷ Verkaufspreis)",
      "markup": "Aufschlag",
      "profitDivCost": "(Gewinn ÷ Kosten)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "Geben Sie einen Darlehensbetrag größer als 0 ein.",
      "errorRate": "Geben Sie einen Jahreszinssatz zwischen 0% und 100% ein.",
      "errorDuration": "Die Darlehenslaufzeit muss zwischen 1 und 600 Monaten liegen.",
      "principalLabel": "Darlehensbetrag ($)",
      "rateLabel": "Jahreszins (% effektiv)",
      "termLabel": "Darlehenslaufzeit",
      "termUnitAria": "Einheit der Darlehenslaufzeit",
      "yearsOption": "Jahre",
      "monthsOption": "Monate",
      "monthlyPayment": "Monatliche Rate (EMI)",
      "forPrefix": "für",
      "monthlyPayments": "Monatsraten",
      "totalInterest": "Zinsen insgesamt",
      "ofTotalCost": "der Gesamtkosten",
      "totalRepayment": "Gesamtrückzahlung",
      "principalWord": "Kapital",
      "principalLabelShort": "Kapital",
      "interestLabelShort": "Zinsen",
      "showSchedule": "Tilgungsplan anzeigen",
      "hideSchedule": "Tilgungsplan ausblenden",
      "monthHeader": "Monat",
      "paymentHeader": "Rate",
      "principalHeader": "Kapital",
      "interestHeader": "Zinsen",
      "balanceHeader": "Restschuld"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "Der Kaufpreis muss größer als 0 sein.",
      "errorDownPayment": "Die Anzahlung muss zwischen 0% und 99.9% liegen.",
      "errorRate": "Der Zinssatz muss zwischen 0% und 50% liegen.",
      "errorTerm": "Die Darlehenslaufzeit muss zwischen 1 und 50 Jahren liegen.",
      "homePriceLabel": "Kaufpreis ($)",
      "downPaymentLabel": "Anzahlung (%)",
      "rateLabel": "Zinssatz (% effektiv)",
      "termLabel": "Darlehenslaufzeit (Jahre)",
      "yearsWord": "Jahre",
      "taxLabel": "Grundsteuer ($ / Jahr)",
      "insuranceLabel": "Wohngebäudeversicherung ($ / Jahr)",
      "hoaLabel": "HOA-Gebühren ($ / Monat)",
      "estimatedMonthly": "Geschätzte monatliche Rate",
      "loanAmount": "Darlehensbetrag",
      "downPayment": "Anzahlung",
      "lifetimeInterest": "Zinsen über die Laufzeit",
      "breakdownHeading": "Aufschlüsselung der monatlichen Rate",
      "principalInterest": "Kapital & Zinsen (P&I)",
      "propertyTaxes": "Grundsteuern",
      "homeownersInsurance": "Wohngebäudeversicherung",
      "hoaDues": "HOA-Gebühren",
      "pmiLabel": "Geschätzte PMI (0.5%/Jahr bei Anzahlung < 20%)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "Geben Sie gültige Zahlen ein.",
      "errorTotalZero": "Der Gesamtwert (Y) darf nicht 0 sein.",
      "errorStartZero": "Der Startwert darf nicht 0 sein.",
      "heading1": "1. Prozentwert einer Zahl",
      "heading2": "2. Anteil als Prozentsatz des Ganzen",
      "heading3": "3. Prozentuale Zu- oder Abnahme",
      "whatIs": "Wie viel sind",
      "percentOf": "% von",
      "isWhatPercentOf": "sind wie viel % von",
      "fromWord": "Von",
      "toWord": "auf",
      "result": "Ergebnis:",
      "change": "Änderung:",
      "formula": "Formel",
      "difference": "Differenz",
      "ariaPctX": "Prozentsatz X",
      "ariaBaseY": "Basiszahl Y",
      "ariaPartX": "Teilwert X",
      "ariaWholeY": "Gesamtwert Y",
      "ariaInitialA": "Anfangswert A",
      "ariaFinalB": "Endwert B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "Der Vergütungsbetrag darf nicht negativ sein.",
      "errorHours": "Die Wochenstunden müssen zwischen 1 und 168 liegen.",
      "errorWeeks": "Die Wochen pro Jahr müssen zwischen 1 und 52 liegen.",
      "errorTax": "Der effektive Steuersatz muss zwischen 0% und 99% liegen.",
      "amountLabel": "Vergütungsbetrag ($)",
      "frequencyLabel": "Häufigkeit",
      "hourlyOption": "Stündlich",
      "dailyOption": "Täglich",
      "weeklyOption": "Wöchentlich",
      "biweeklyOption": "Zweiwöchentlich",
      "monthlyOption": "Monatlich",
      "annualOption": "Jährlich",
      "hoursLabel": "Stunden / Woche",
      "weeksLabel": "Wochen / Jahr",
      "taxLabel": "Geschätzter Steuersatz (%)",
      "rowHourly": "Stündlich",
      "rowDaily": "Täglich (5-Tage-Woche)",
      "rowWeekly": "Wöchentlich",
      "rowBiweekly": "Zweiwöchentlich",
      "rowMonthly": "Monatlich",
      "rowAnnual": "Jährlich",
      "payPeriodHeader": "Abrechnungszeitraum",
      "grossPayHeader": "Bruttolohn",
      "estNetPay": "Geschätzter Nettolohn",
      "taxWord": "Steuern"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "Geben Sie gültige Start- und Endzeiten ein.",
      "errorBreakRange": "Geben Sie eine Pausenzeit zwischen 0 und 1.440 Minuten ein.",
      "errorEndEarlier": "Die Endzeit liegt vor der Startzeit. Aktivieren Sie den Nachtschicht-Übertrag, wenn der Zeitraum über Mitternacht geht.",
      "errorBreakExceeds": "Die Pausenzeit überschreitet die gesamte verstrichene Zeit.",
      "errorSumFields": "Alle Dauerfelder müssen nicht-negative Zahlen sein.",
      "betweenTab": "Verstrichene Zeit zwischen Uhrzeiten",
      "sumTab": "Stundenzettel-Zeiten addieren",
      "startLabel": "Startzeit",
      "endLabel": "Endzeit",
      "breakLabel": "Unbezahlte Pause (Min.)",
      "overnightLabel": "Endzeit vor der Startzeit als nächsten Tag behandeln (Nachtschicht)",
      "netDuration": "Nettodauer",
      "overnightTag": "(Nachtschicht)",
      "decimalHours": "Dezimalstunden",
      "totalMinutes": "Minuten insgesamt",
      "totalSeconds": "Sekunden insgesamt",
      "hoursAbbr": "Std.",
      "minutesAbbr": "Min.",
      "secondsAbbr": "Sek.",
      "labelHeader": "Bezeichnung",
      "hoursHeader": "Stunden",
      "minutesHeader": "Minuten",
      "secondsHeader": "Sekunden",
      "removeButton": "Entfernen",
      "removeAria": "Entfernen",
      "addRowButton": "Dauerzeile hinzufügen",
      "morningSession": "Vormittagssitzung",
      "afternoonSession": "Nachmittagssitzung",
      "segmentPrefix": "Abschnitt",
      "combinedTime": "Gesamtzeit (HH:MM:SS)",
      "dayEquivalent": "24-Stunden-Tage",
      "daysAbbr": "T"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "Der Rechnungsbetrag darf nicht negativ sein.",
      "errorTip": "Der Trinkgeldsatz muss zwischen 0% und 200% liegen.",
      "errorPeople": "Die Personenzahl muss zwischen 1 und 100 liegen.",
      "billLabel": "Rechnungsbetrag ($)",
      "tipLabel": "Trinkgeldsatz (%)",
      "peopleLabel": "Aufteilen auf (Personen)",
      "presetsLabel": "Trinkgeld-Vorgaben:",
      "roundingLabel": "Rundung:",
      "exactOption": "Exakte Cents",
      "totalUpOption": "Gesamtbetrag aufrunden ($)",
      "perPersonUpOption": "Betrag pro Person aufrunden ($)",
      "perPersonTotal": "Gesamtbetrag pro Person",
      "includes": "Enthält",
      "tipEach": "Trinkgeld pro Person",
      "totalTip": "Trinkgeld insgesamt",
      "effectiveRate": "Effektiver Satz:",
      "totalBill": "Gesamtrechnung"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "Geben Sie einen gültigen Zahlenwert zur Umrechnung ein.",
      "errorAbsoluteZero": "Die Temperatur kann nicht unter dem absoluten Nullpunkt liegen (-273.15 °C / 0 K).",
      "categoryNames": {
        "length": "Länge",
        "weight": "Gewicht & Masse",
        "temperature": "Temperatur",
        "area": "Fläche",
        "volume": "Volumen",
        "speed": "Geschwindigkeit",
        "storage": "Digitaler Speicher"
      },
      "unitLabels": {
        "mm": "Millimeter",
        "cm": "Zentimeter",
        "m": "Meter",
        "km": "Kilometer",
        "in": "Zoll",
        "ft": "Fuß",
        "yd": "Yard",
        "mi": "Meile",
        "mg": "Milligramm",
        "g": "Gramm",
        "kg": "Kilogramm",
        "t": "Tonne",
        "oz": "Unze",
        "lb": "Pfund",
        "st": "Stone",
        "C": "Celsius",
        "F": "Fahrenheit",
        "K": "Kelvin",
        "cm2": "Quadratzentimeter",
        "m2": "Quadratmeter",
        "ha": "Hektar",
        "km2": "Quadratkilometer",
        "ft2": "Quadratfuß",
        "yd2": "Quadratyard",
        "acre": "Acre",
        "mi2": "Quadratmeile",
        "mL": "Milliliter",
        "L": "Liter",
        "m3": "Kubikmeter",
        "floz": "Flüssigunze (US)",
        "cup": "Tasse (US)",
        "pt": "Pint (US)",
        "qt": "Quart (US)",
        "gal": "Gallone (US)",
        "ms": "Meter / Sekunde",
        "kmh": "Kilometer / Stunde",
        "mph": "Meilen / Stunde",
        "knot": "Knoten",
        "fts": "Fuß / Sekunde",
        "B": "Byte",
        "KB": "Kilobyte (10³)",
        "MB": "Megabyte (10⁶)",
        "GB": "Gigabyte (10⁹)",
        "TB": "Terabyte (10¹²)",
        "KiB": "Kibibyte (2¹⁰)",
        "MiB": "Mebibyte (2²⁰)",
        "GiB": "Gibibyte (2³⁰)"
      },
      "valueLabel": "Wert",
      "fromLabel": "Von Einheit",
      "toLabel": "Zu Einheit",
      "swapAria": "Einheiten tauschen",
      "swapTitle": "Einheiten tauschen",
      "toWord": "in",
      "copyResult": "Ergebnis kopieren",
      "unitHeader": "Einheit",
      "symbolHeader": "Symbol",
      "equivalentHeader": "Entsprechender Wert"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "Der Betrag darf nicht negativ sein.",
      "errorRate": "Der Steuersatz muss zwischen 0% und 100% liegen.",
      "addTab": "Steuer hinzufügen (Netto → Brutto)",
      "removeTab": "Steuer herausrechnen (Brutto → Netto)",
      "commonRates": "Gängige Sätze:",
      "netAmountLabel": "Nettobetrag (ohne Steuer) ($)",
      "grossAmountLabel": "Bruttobetrag (inkl. Steuer) ($)",
      "rateLabel": "MwSt.- / Umsatzsteuersatz (%)",
      "netPrice": "Nettopreis (ohne Steuer)",
      "taxAmount": "Steuerbetrag",
      "grossPrice": "Bruttopreis (inkl. Steuer)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "In Base64 kodieren",
      "decodeTab": "Base64 dekodieren",
      "urlSafe": "URL-sicher (- und _)",
      "omitPadding": "Abschließendes =-Padding weglassen",
      "swap": "Tauschen",
      "decodeError": "Dekodierungsfehler:",
      "inputLabelEncode": "Klartext (UTF-8)",
      "inputLabelDecode": "Base64-Zeichenkette",
      "inputPlaceholderEncode": "Text oder JSON zum Kodieren eingeben...",
      "inputPlaceholderDecode": "Standard- oder URL-sichere Base64-Zeichenkette einfügen...",
      "outputLabelEncode": "Base64-Ausgabe",
      "outputLabelDecode": "Dekodierter Text",
      "outputPlaceholder": "Die konvertierte Ausgabe erscheint hier...",
      "copyOutput": "Ausgabe kopieren",
      "invalidLength": "Ungültige Länge der Base64-Zeichenkette.",
      "invalidInput": "Ungültige Base64-Eingabe oder fehlerhafte UTF-8-Bytesequenz."
    },
    "tables": {
      "samplePlain": "UtilityFlow: UTF-8-sichere Base64-Kodierung ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "Farbe wählen",
      "colorPickerAria": "Farbauswahl",
      "copyHex": "HEX kopieren",
      "copyRgb": "RGB kopieren",
      "copyHsl": "HSL kopieren",
      "contrastTitle": "WCAG-2.1-Kontrastprüfung",
      "contrastDesc": "Vorschau des Vordergrunds ({color}) auf einer beliebigen Hintergrundfarbe.",
      "backgroundLabel": "Hintergrund:",
      "bgAria": "Hintergrundfarbe für den Kontrast",
      "sampleTitle": "Beispiel für Fließtext und UI-Text",
      "sampleSentence": "Der schnelle braune Fuchs springt über den faulen Hund.",
      "aaNormal": "AA Normaltext (≥ 4,5:1)",
      "aaaNormal": "AAA Normaltext (≥ 7,0:1)",
      "aaLarge": "AA Großtext (≥ 3,0:1)",
      "pass": "Bestanden",
      "fail": "Nicht bestanden"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "Cron-Ausdruck mit 5 Feldern",
      "copyCron": "Cron kopieren",
      "humanTitle": "Zeitplan in verständlicher Sprache",
      "breakdownTitle": "Aufschlüsselung nach Feldern",
      "fieldMinute": "Minute (0–59)",
      "fieldHour": "Stunde (0–23)",
      "fieldDom": "Tag des Monats (1–31)",
      "fieldMonth": "Monat (1–12)",
      "fieldDow": "Wochentag (0–6)",
      "nextRuns": "Nächste {count} geplante Ausführungen (Ortszeit)",
      "noRuns": "Keine passende Ausführung in den nächsten 366 Tagen gefunden.",
      "fieldsError": "Standard-Cron erwartet 5 Felder (Minute Stunde Tag-des-Monats Monat Wochentag). Gefunden: {count}.",
      "emptySegment": "Leeres Segment in „{token}“",
      "invalidStep": "Ungültiger Schritt „{step}“ in „{token}“",
      "outOfRange": "Wert außerhalb des Bereichs ({min}–{max}) in „{token}“",
      "invalidCron": "Ungültiger Cron-Ausdruck.",
      "everyMinutes": "Alle {n} Minuten",
      "minuteZeroHour": "Zur Minute 0 jeder Stunde",
      "atTime": "Um {time}",
      "atFields": "Um {a}, {b}",
      "dayEveryDay": "jeden Tag",
      "dayWeekdays": "werktags (Montag–Freitag)",
      "dayOfMonth": "am {day}. Tag des Monats",
      "dayDow": "am {dow}",
      "dayBoth": "am {day}. oder {dow}",
      "monthIn": " im {months}"
    },
    "tables": {
      "presets": [
        {
          "label": "Alle 5 Minuten",
          "expr": "*/5 * * * *"
        },
        {
          "label": "Jede Stunde",
          "expr": "0 * * * *"
        },
        {
          "label": "Täglich um Mitternacht",
          "expr": "0 0 * * *"
        },
        {
          "label": "Werktags um 9:00 Uhr",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "Am 1. des Monats um 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
      ],
      "monthLabels": [
        "",
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
      ],
      "unitWords": {
        "minute": "Minute",
        "hour": "Stunde",
        "day": "Tag",
        "month": "Monat",
        "weekday": "Wochentag"
      },
      "unitPlurals": {
        "minute": "Minuten",
        "hour": "Stunden",
        "day": "Tage",
        "month": "Monate",
        "weekday": "Wochentage"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "CSS minimieren",
      "beautifyTab": "CSS formatieren",
      "inputLabel": "Eingabe-CSS",
      "bytesLabel": "Bytes",
      "inputPlaceholder": "CSS-Regeln oder Stylesheets hier einfügen...",
      "outputLabelMinify": "Minimiertes CSS",
      "outputLabelBeautify": "Formatiertes CSS",
      "outputPlaceholder": "Verarbeitetes CSS erscheint hier...",
      "copyCss": "CSS kopieren"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "Texteingabe",
      "fileTab": "Lokale Datei-Prüfsumme",
      "uppercaseHex": "Hexadezimal in Großbuchstaben",
      "inputLabel": "Eingabezeichenkette (UTF-8)",
      "inputPlaceholder": "Text eingeben, um SHA-1-, SHA-256-, SHA-384- und SHA-512-Hashes zu berechnen...",
      "chooseFileLabel": "Lokale Datei zum Hashen auswählen",
      "fileNoteDefault": "Die Datei wird lokal im Browser-Speicher gelesen und niemals hochgeladen.",
      "bytesLabel": "Bytes",
      "cryptoUnavailable": "Web-Crypto-Hashing ist nicht verfügbar.",
      "sampleText": "Hallo, UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "Entitäten kodieren",
      "decodeTab": "Entitäten dekodieren",
      "encodeNonAscii": "Nicht-ASCII-Zeichen kodieren (&#...;)",
      "swap": "Tauschen",
      "inputLabelEncode": "Rohes HTML / Text",
      "inputLabelDecode": "HTML-kodierte Zeichenkette",
      "inputPlaceholderEncode": "<p>HTML-Tags oder Sonderzeichen hier eingeben...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;Kodierte Entitäten hier einfügen...&lt;/p&gt;",
      "outputLabelEncode": "Kodierte Entitäten",
      "outputLabelDecode": "Dekodierter Text",
      "outputPlaceholder": "Konvertierte Entitäten erscheinen hier..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "JS minimieren",
      "beautifyTab": "JS formatieren",
      "indentLabel": "Einrückung:",
      "indent2": "2 Leerzeichen",
      "indent4": "4 Leerzeichen",
      "inputLabel": "JavaScript-/TypeScript-Eingabe",
      "bytesLabel": "Bytes",
      "inputPlaceholder": "JavaScript- oder TypeScript-Snippet einfügen...",
      "outputLabelMinify": "Minimierte Ausgabe",
      "outputLabelBeautify": "Formatierte Ausgabe",
      "outputPlaceholder": "Formatiertes JavaScript erscheint hier...",
      "copyCode": "Code kopieren"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "Trennzeichen:",
      "commaOpt": "Komma (,)",
      "semicolonOpt": "Semikolon (;)",
      "tabOpt": "Tab (TSV)",
      "conversionError": "Konvertierungsfehler:",
      "inputLabelJson": "JSON-Eingabe",
      "inputLabelCsv": "CSV-Eingabe",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Beispiel\"}]",
      "inputPlaceholderCsv": "id,name\n1,Beispiel",
      "outputLabelCsv": "CSV-Ausgabe",
      "outputLabelJson": "JSON-Ausgabe",
      "outputPlaceholder": "Konvertierte Daten erscheinen hier...",
      "parseFallback": "Eingabeformat konnte nicht geparst werden."
    }
  },
  "json-formatter": {
    "strings": {
      "indent2": "2 Leerzeichen",
      "indent4": "4 Leerzeichen",
      "indentTab": "Tab",
      "indentMinify": "Minimieren",
      "sortKeys": "Schlüssel A–Z sortieren",
      "validJson": "Gültiges JSON",
      "keysLabel": "Schlüssel",
      "depthLabel": "Tiefe",
      "bytesLabel": "Bytes",
      "invalidJson": "Ungültiges JSON:",
      "invalidJsonSyntax": "Ungültige JSON-Syntax",
      "lineCol": "Zeile {line}, Spalte {col}",
      "inputLabel": "Roh-JSON-Eingabe",
      "inputPlaceholder": "{\"hello\": \"world\", \"items\": [1, 2, 3]}",
      "outputLabel": "Formatierte Ausgabe",
      "outputPlaceholder": "Formatiertes und geprüftes JSON erscheint hier...",
      "copyJson": "JSON kopieren"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "Dekodiert Base64Url-Header und -Payload lokal im Browser-Speicher. Verifiziert keine kryptografischen Signaturen.",
      "loadSampleJwt": "Beispiel-JWT laden",
      "inputLabel": "Kodiertes JWT-Token",
      "inputPlaceholder": "JWT-Token einfügen (eyJhbGciOi...), um Header und Claims zu prüfen...",
      "invalidJwt": "Ungültiges JWT:",
      "headerLabel": "Header (Algorithmus und Typ)",
      "payloadLabel": "Payload (Claims)",
      "copyHeader": "Header kopieren",
      "copyPayload": "Payload kopieren",
      "timestampTitle": "Zeitstempel-Claims",
      "iatLabel": "Ausgestellt am (iat)",
      "nbfLabel": "Gültig ab (nbf)",
      "expLabel": "Läuft ab am (exp)",
      "expired": "Abgelaufen",
      "active": "Aktiv (noch nicht abgelaufen)",
      "signatureLabel": "Signatursegment (Base64Url)",
      "invalidB64Url": "Ungültige Länge des Base64Url-Segments.",
      "segmentCount": "3 durch Punkte getrennte JWT-Segmente (Header.Payload.Signatur) erwartet, {count} gefunden.",
      "parseFallback": "JWT-Base64Url-JSON-Segmente konnten nicht geparst werden."
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "Muster für regulären Ausdruck",
      "patternPlaceholder": "Regex-Muster eingeben...",
      "flagsLabel": "Flags:",
      "syntaxError": "Syntaxfehler:",
      "testStringLabel": "Testzeichenkette",
      "testPlaceholder": "Beispieltext zum Testen des Musters hier einfügen...",
      "highlightedMatches": "Hervorgehobene Treffer",
      "matchSingular": "Treffer",
      "matchPlural": "Treffer",
      "highlightEmpty": "Treffer werden hier in Echtzeit hervorgehoben...",
      "capturedTitle": "Erfasste Treffer",
      "matchLabel": "Treffer",
      "indexLabel": "Index",
      "groupsLabel": "Gruppen:",
      "noMatches": "Keine Treffer gefunden.",
      "replaceLabel": "Vorschau der Ersetzungsvorlage",
      "replacePlaceholder": "z. B. $1 [at] $2",
      "invalidRegex": "Ungültiger regulärer Ausdruck."
    },
    "tables": {
      "sampleText": "Hauptkontakt: support@utilityflow.online\nAbrechnungsteam: billing@example.org\nUngültige E-Mail: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (global)"
        },
        {
          "flag": "i",
          "label": "i (Groß-/Kleinschreibung ignorieren)"
        },
        {
          "flag": "m",
          "label": "m (mehrzeilig)"
        },
        {
          "flag": "s",
          "label": "s (dotAll)"
        }
      ]
    }
  },
  "sql-formatter": {
    "strings": {
      "beautify": "Formatieren",
      "minify": "Minimieren",
      "uppercaseKw": "Schlüsselwörter in GROSSBUCHSTABEN",
      "lowercaseKw": "Kleinbuchstaben",
      "indentLabel": "Einrückung:",
      "indent2": "2 Leerzeichen",
      "indent4": "4 Leerzeichen",
      "inputLabel": "Rohe SQL-Abfrage",
      "inputPlaceholder": "SQL-Abfrage einfügen (SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "Formatiertes SQL",
      "outputPlaceholder": "Formatiertes SQL erscheint hier...",
      "copySql": "SQL kopieren"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "Aktueller Unix-Zeitstempel (Sekunden)",
      "useCurrent": "Aktuelle Zeit verwenden",
      "copyEpoch": "Epoch kopieren",
      "converter1Label": "Unix-Zeitstempel → lesbares Datum",
      "epochPlaceholder": "z. B. 1794544800",
      "unitAuto": "automatisch",
      "unitSeconds": "Sekunden",
      "unitMilliseconds": "Millisekunden",
      "errorNotNumeric": "Bitte einen gültigen numerischen Unix-Zeitstempel eingeben.",
      "errorOutOfRange": "Der Zeitstempel liegt außerhalb des gültigen JavaScript-Date-Bereichs.",
      "isoLabel": "ISO 8601 (UTC)",
      "localLabel": "Ortszeit",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "Relativ",
      "converter2Label": "Lokales Datum und Uhrzeit → Unix-Zeitstempel",
      "secondsLabel": "Sekunden",
      "millisecondsLabel": "Millisekunden",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "Kodieren",
      "decode": "Dekodieren",
      "encodeUriPreserve": "encodeURI (://?& erhalten)",
      "swap": "Tauschen",
      "urlError": "URL-Fehler:",
      "inputLabel": "Eingabezeichenkette oder URL",
      "inputPlaceholder": "URL, Query-String oder Parameterwert einfügen...",
      "outputLabelEncode": "Kodierte Ausgabe",
      "outputLabelDecode": "Dekodierte Ausgabe",
      "outputPlaceholder": "Kodierte oder dekodierte URL erscheint hier...",
      "parsedTitle": "Aufschlüsselung der geparsten URL",
      "protocol": "Protokoll",
      "host": "Host",
      "pathname": "Pfad",
      "hash": "Hash",
      "noneValue": "(keine)",
      "queryParam": "Query-Parameter",
      "decodedValue": "Dekodierter Wert",
      "malformed": "Fehlerhafte Prozentkodierung."
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "UUID-Version",
      "v4": "v4 (zufällig)",
      "v7": "v7 (zeitgeordnet)",
      "quantity": "Anzahl (1–100)",
      "generate": "UUIDs erzeugen",
      "uppercase": "Großbuchstaben",
      "includeHyphens": "Bindestriche einfügen",
      "wrapBraces": "In {geschweifte Klammern} setzen",
      "generatedLabel": "Erzeugte UUIDs",
      "copyAll": "Alle kopieren"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "Indigo auf Weiß",
      "presetSlate": "Schiefer-Tinte",
      "presetEmerald": "Smaragd-Badge",
      "presetDark": "Dunkelmodus",
      "swapColors": "Farben tauschen",
      "fgTitle": "Vordergrund- / Textfarbe",
      "bgTitle": "Hintergrundfarbe",
      "copyHex": "HEX kopieren",
      "pickerSuffix": "Farbauswahl",
      "hexInputSuffix": "HEX-Eingabe",
      "contrastRatioLabel": "WCAG-2.1-Kontrastverhältnis",
      "checkAaNormal": "WCAG AA Normaltext",
      "checkAaLarge": "WCAG AA großer Text / UI",
      "checkAaaNormal": "WCAG AAA Normaltext",
      "checkAaaLarge": "WCAG AAA großer Text",
      "pass": "BESTANDEN",
      "fail": "NICHT BESTANDEN",
      "livePreviewLabel": "Live-Vorschau Barrierefreiheit",
      "previewHeading": "Klare Typografie bleibt bei jeder Bildschirmgröße mühelos lesbar.",
      "previewBody": "Normaler Fließtext (14–16 px) benötigt für WCAG-Stufe AA mindestens ein Kontrastverhältnis von 4,5:1 und für Stufe AAA 7,0:1. Große Überschriften (ab 18 pt oder fett ab 14 pt) benötigen mindestens 3,0:1.",
      "outlinedControl": "Umrandetes UI-Element",
      "hexOnHex": "{fg} auf {bg}",
      "extractTitle": "Farbpalette aus einem Bild extrahieren",
      "extractBody": "Laden Sie einen Screenshot, ein Logo oder ein Foto hoch, um dominante HEX-Farbfelder direkt in Ihre Kontrastprüfung zu übernehmen.",
      "appliesToLabel": "Klick auf Farbfeld gilt für:",
      "foregroundBtn": "Vordergrund",
      "backgroundBtn": "Hintergrund",
      "selectImage": "Bild zum Extrahieren von Farbfeldern auswählen",
      "loadedReplace": "Geladen: {name} (weiteres hochladen)",
      "selectImageError": "Bitte wählen Sie ein PNG-, JPG-, WebP- oder GIF-Bild aus.",
      "unableToRead": "\"{name}\" konnte nicht gelesen werden.",
      "canvasUnavailable": "Canvas-2D-Kontext nicht verfügbar.",
      "transparentImage": "Das Bild scheint vollständig transparent zu sein.",
      "unableToExtract": "Palette konnte nicht extrahiert werden.",
      "areaPercent": "~{n} % Fläche"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 Browser-Tab",
        "taskbar": "32×32 Taskleiste / HiDPI",
        "desktopShortcut": "48×48 Desktop-Verknüpfung",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 PWA-Splash"
      },
      "monogramMode": "Monogramm-Badge-Builder",
      "imageMode": "Logo-Bild hochladen",
      "lettersLabel": "Text / Initialen (1–3 Zeichen)",
      "cornerShapeLabel": "Eckenform",
      "roundedSquare": "Abgerundetes Quadrat",
      "circle": "Kreis",
      "sharpSquare": "Scharfes Quadrat",
      "square": "Quadrat",
      "bgColorLabel": "Hintergrundfarbe",
      "textColorLabel": "Textfarbe",
      "chooseLogo": "PNG-, JPG-, WebP- oder SVG-Logo auswählen",
      "loadedReplace": "Geladen: {name} (zum Ersetzen klicken)",
      "cropMaskLabel": "Zuschnittmaske",
      "unableToRead": "\"{name}\" konnte nicht gelesen werden.",
      "canvasUnavailable": "Canvas-2D-Kontext nicht verfügbar.",
      "failedEncode": "Favicon-PNG konnte nicht codiert werden.",
      "unableToGenerate": "Favicons konnten nicht erstellt werden.",
      "icoBundleTitle": "Multi-Size-favicon.ico-Paket (16 px + 32 px + 48 px)",
      "icoBundleBody": "Standardkonforme binäre .ico-Datei, bereit für den Stammordner /public/ Ihrer Website",
      "downloadIco": "favicon.ico herunterladen",
      "faviconPreviewAlt": "Favicon-Vorschau 32×32",
      "iconAlt": "Symbol {size}×{size}",
      "htmlTagsLabel": "HTML-<head>-Link-Tags",
      "copyHtml": "HTML kopieren"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "Beliebige Datei zum Berechnen kryptografischer Prüfsummen auswählen",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Lokal gehasht via Web-Crypto-API · Kein Datei-Upload (empfohlen unter 500 MB)",
      "cryptoUnavailable": "Die Web-Crypto-SubtleCrypto-API ist in diesem Browserkontext nicht verfügbar.",
      "hashFailed": "Datei konnte im Browser-Arbeitsspeicher nicht gehasht werden (Dateien über mehrere hundert MB können die RAM-Grenzen überschreiten).",
      "computing": "SHA-1-, SHA-256-, SHA-384- und SHA-512-Prüfsummen werden lokal berechnet...",
      "fileLabel": "Datei:",
      "sizeLabel": "Größe:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "Geändert:",
      "bytesSuffix": "{n} Byte",
      "downloadSha256": ".sha256 herunterladen",
      "sha256Label": "SHA-256 (empfohlen)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (nur Legacy-Kompatibilität)",
      "verifyLabel": "Mit erwarteter Prüfsumme abgleichen",
      "expectedPlaceholder": "Veröffentlichte SHA-256-, SHA-512-, SHA-384- oder SHA-1-Prüfsumme einfügen (oder .sha256sum-Zeile)...",
      "verified": "Prüfsumme verifiziert! Die Datei stimmt exakt mit dem erwarteten {algorithm}-Digest überein.",
      "mismatch": "Prüfsummen stimmen nicht überein! Keiner der berechneten Digests entspricht Ihrem erwarteten Wert."
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "Bild zum Komprimieren auswählen (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "Lokal verarbeitet via HTML5-Canvas · Niemals auf entfernte Server hochgeladen",
      "uploadImageError": "Bitte laden Sie eine PNG-, JPG-, WebP- oder GIF-Bilddatei hoch.",
      "unableToDecode": "\"{name}\" konnte nicht decodiert werden.",
      "canvasUnavailable": "Canvas-2D-Kontext nicht verfügbar.",
      "compressionFailed": "Komprimierung im Browser-Canvas fehlgeschlagen.",
      "unableToCompress": "Bild konnte nicht komprimiert werden.",
      "unableToRead": "\"{name}\" konnte nicht gelesen werden.",
      "invalidImage": "Ungültige Bilddatei.",
      "outputFormatLabel": "Ausgabeformat",
      "webpOption": "WebP (kleinste moderne Webgröße)",
      "jpgOption": "JPG (breiteste Kompatibilität)",
      "pngOption": "PNG (verlustfreie Transparenz)",
      "maxWidthLabel": "Maximale Breite",
      "keepOriginalWidth": "Originalbreite behalten",
      "max1920": "Max. 1920 px (Full HD)",
      "max1280": "Max. 1280 px (Blog / Hero)",
      "max800": "Max. 800 px (Miniaturansichten)",
      "qualityLabel": "Qualität: ",
      "losslessPng": "Verlustfreies PNG",
      "originalLabel": "Original",
      "compressedLabel": "Komprimiert",
      "changeLabel": "Änderung",
      "outputSummary": "Ausgabe: {w} × {h} px · {ext}",
      "compressing": "Wird komprimiert...",
      "downloadExt": ".{ext} herunterladen",
      "previewAlt": "Vorschau des komprimierten Bildes"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "Ein oder mehrere Bilder zum Konvertieren auswählen",
      "imagesLoaded": "{n} Bild(er) geladen — Klicken zum Hinzufügen oder Ersetzen",
      "batchNote": "PNG, JPG, WebP, SVG oder GIF lokal im Stapel in PNG, JPG oder WebP umwandeln",
      "convertToLabel": "Zielformat",
      "pngOption": "PNG (.png — behält Transparenz)",
      "qualityLabel": "Qualität (verlustbehaftet): ",
      "lossless": "Verlustfrei",
      "alphaFillLabel": "Alpha-Füllung",
      "converting": "Wird umgewandelt...",
      "reconvert": "Erneut umwandeln",
      "selectFilesError": "Wählen Sie eine oder mehrere Bilddateien aus (PNG, JPG, WebP, SVG, GIF).",
      "couldNotDecode": "\"{name}\" konnte nicht decodiert werden.",
      "canvasUnavailable": "Canvas 2D nicht verfügbar.",
      "conversionFailed": "Umwandlung von \"{name}\" fehlgeschlagen.",
      "batchFailed": "Stapel-Umwandlung der Bilder fehlgeschlagen.",
      "downloadExt": ".{ext} herunterladen"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "Bild zum Ändern der Größe oder Zuschneiden auf voreingestellte Maße auswählen",
      "fileWithDims": "{name} (Original: {w} × {h} px)",
      "supportsNote": "Unterstützt Pixelgrößenänderung, Sperren des Seitenverhältnisses und zentriert zugeschnittene Social-Media-Vorgaben",
      "selectImageError": "Wählen Sie ein PNG-, JPG-, WebP- oder GIF-Bild aus.",
      "unableToDecode": "\"{name}\" konnte nicht decodiert werden.",
      "unableToRead": "Bild konnte nicht gelesen werden.",
      "failedLoading": "Bild konnte für die Größenänderung nicht geladen werden.",
      "canvasUnavailable": "Canvas 2D nicht verfügbar.",
      "failedGenerating": "Größenändertes Bild konnte nicht erzeugt werden.",
      "resizeFailed": "Größenänderung fehlgeschlagen.",
      "quickPresets": "Schnellvorgaben:",
      "presetOg": "OG-Share (1200×630)",
      "presetYoutube": "YouTube HD (1280×720)",
      "presetSquare": "Quadrat (1080×1080)",
      "presetAvatar": "Avatar (512×512)",
      "widthLabel": "Breite (px)",
      "heightLabel": "Höhe (px)",
      "fitModeLabel": "Anpassungsmodus",
      "coverCropOption": "Zentrierter Cover-Zuschnitt (ohne Verzerrung)",
      "exactOption": "Exakte Maße skalieren",
      "outputFormatLabel": "Ausgabeformat",
      "lockAspect": "Originales Seitenverhältnis beim Eingeben der Maße sperren",
      "resizeButton": "Auf {w} × {h} px ändern",
      "readySummary": "Fertig: {w} × {h} px ({ext})",
      "downloadResized": "Bild mit geänderter Größe (.{ext}) herunterladen",
      "previewAlt": "Ausgabe des größenveränderten Bildes"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "Bild zum Drehen, Spiegeln oder Filtern auswählen",
      "loadedReplace": "{name} (zum Ersetzen klicken)",
      "previewNote": "Echtzeit-HTML5-Canvas-Vorschau & Pixel-Export",
      "selectImageError": "Bitte wählen Sie ein PNG-, JPG-, WebP- oder GIF-Bild aus.",
      "failedLoading": "\"{name}\" konnte nicht geladen werden.",
      "rotateLeft": "90° nach links drehen",
      "rotateRight": "90° nach rechts drehen",
      "flipHorizontal": "Horizontal spiegeln",
      "flipVertical": "Vertikal spiegeln",
      "brightnessLabel": "Helligkeit: ",
      "contrastLabel": "Kontrast: ",
      "grayscaleLabel": "Schwarz-Weiß (Graustufen)",
      "resetAll": "Alles zurücksetzen",
      "exportFormatLabel": "Exportformat",
      "livePreview": "Live-Canvas-Vorschau"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "Bild → Base64-Data-URI",
      "decodeMode": "Base64 → Bildvorschau",
      "selectImageError": "Wählen Sie eine Bilddatei aus (PNG, JPG, WebP, SVG, GIF, ICO).",
      "unableToRead": "\"{name}\" konnte nicht gelesen werden.",
      "chooseImage": "Bilddatei zum Codieren auswählen",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Erzeugt Data-URI, rohes Base64, HTML-<img>- und CSS-Hintergrund-Snippets",
      "binarySizeLabel": "Binäre Dateigröße",
      "base64SizeLabel": "Base64-URI-Größe (~33 % größer)",
      "fullDataUriLabel": "Vollständige Data-URI",
      "copyDataUri": "Data-URI kopieren",
      "copyRawBase64": "Rohes Base64 kopieren",
      "copyImg": "<img> kopieren",
      "copyCss": "CSS kopieren",
      "encodedAria": "Codierte Base64-Data-URI",
      "encodedAlt": "Codierte Vorschau",
      "pasteLabel": "Base64-Bildzeichenkette oder Data-URI einfügen",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... oder rohe Base64-Zeichenkette",
      "invalidPayload": "Der eingefügte Base64-Text ist keine gültige codierte Bild-Nutzlast.",
      "decodedAlt": "Decodierte Base64-Vorschau",
      "downloadExt": ".{ext} herunterladen"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "Sehr stark",
        "strong": "Stark",
        "moderate": "Mittel",
        "weak": "Schwach"
      },
      "randomPasswordMode": "Zufälliges Passwort",
      "passphraseMode": "Diceware-Passphrase",
      "regenerate": "Neu generieren",
      "passwordLengthLabel": "Passwortlänge: ",
      "charsSuffix": " Zeichen",
      "batchCountLabel": "Stapelanzahl: ",
      "uppercaseLabel": "Großbuchstaben (A–Z)",
      "lowercaseLabel": "Kleinbuchstaben (a–z)",
      "numbersLabel": "Zahlen (0–9)",
      "symbolsLabel": "Symbole (!@#$%...)",
      "excludeAmbiguousLabel": "Mehrdeutige Zeichen ausschließen (0, O, 1, l, I)",
      "wordCountLabel": "Wortanzahl: ",
      "wordSeparatorLabel": "Worttrennzeichen",
      "hyphenOption": "Bindestrich (-)",
      "underscoreOption": "Unterstrich (_)",
      "periodOption": "Punkt (.)",
      "spaceOption": "Leerzeichen ( )",
      "capitalizeWordsLabel": "Wörter großschreiben",
      "appendDigitLabel": "2-stellige Zahl anhängen",
      "selectGroupWarning": "Wählen Sie mindestens eine Zeichengruppe aus, um Passwörter zu generieren.",
      "entropyBits": "~{n} Bit Entropie",
      "poolSizeSuffix": " · Zeichenvorrat {n}",
      "wordListSuffix": " · Wortliste mit {n} Wörtern",
      "copyAll": "Alle kopieren"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "Website-URL",
        "text": "Text",
        "wifi": "WLAN-Konfiguration",
        "vcard": "vCard-Kontakt",
        "email": "E-Mail-Adresse",
        "phone": "Telefonnummer",
        "plainText": "Klartext"
      },
      "liveCameraCapture": "Live-Kameraaufnahme",
      "scanMode": "QR-Bild scannen / decodieren",
      "vcardMode": "vCard-Kontakt-QR-Builder",
      "uploadQr": "QR-Code-Bild hochladen",
      "uploadQrNote": "PNG-, JPG-, WebP- oder SVG-Screenshot · 100 % clientseitig",
      "liveCameraTitle": "Live-Scan mit Gerätekamera",
      "liveCameraNote": "Verwendet den lokalen Kamerafeed nur bei erteilter Berechtigung",
      "startCamera": "Kamera-Scanner starten",
      "stopCamera": "Kamera stoppen",
      "cameraHint": "Richten Sie Ihre Kamera auf einen QR-Code – die Aufnahme stoppt automatisch, sobald er decodiert wurde.",
      "uploadImageError": "Bitte laden Sie ein PNG-, JPG-, WebP- oder SVG-Bild mit einem QR-Code hoch.",
      "unableToLoad": "\"{name}\" konnte nicht geladen werden.",
      "noQrDetected": "In diesem Bild konnte kein QR-Code erkannt werden. Achten Sie auf scharfen Fokus, klare Ruhezonen-Ränder und hohen Kontrast.",
      "unableToScan": "Bild konnte nicht gescannt werden.",
      "cameraUnsupported": "Kamera-Scanning wird in dieser Browserumgebung nicht unterstützt.",
      "cameraDenied": "Die Kameraberechtigung wurde verweigert oder es ist kein Kameragerät verfügbar. Laden Sie stattdessen ein QR-Code-Bild hoch.",
      "decodedPayload": "Decodierte Nutzlast · {kind}",
      "sourceLabel": "Quelle: ",
      "copyPayload": "Nutzlast kopieren",
      "decodedAria": "Decodierter QR-Text",
      "detectedLink": "Erkannter Weblink: ",
      "uploadedPreviewAlt": "Vorschau des hochgeladenen QR-Codes",
      "firstNameLabel": "Vorname",
      "lastNameLabel": "Nachname",
      "orgLabel": "Organisation",
      "jobTitleLabel": "Berufsbezeichnung",
      "defaultJobTitle": "Produktdesigner",
      "phoneLabel": "Telefonnummer",
      "emailLabel": "E-Mail-Adresse",
      "websiteLabel": "Website-URL",
      "rawVcardLabel": "Rohe vCard-3.0-Nutzlast",
      "copyVcard": "vCard kopieren",
      "vcardQrAlt": "Generierter vCard-QR-Code",
      "downloadPng": "PNG herunterladen",
      "downloadSvg": "SVG herunterladen"
    }
  },
  "ai-text-summarizer": {
    "strings": {
      "lengthOptions": {
        "short": {
          "label": "Kurz",
          "ratio": "~10–20% Länge"
        },
        "medium": {
          "label": "Mittel",
          "ratio": "~30–40% Länge"
        },
        "detailed": {
          "label": "Lang (detailliert)",
          "ratio": "~50–60% Länge"
        }
      },
      "loadingLengthLabels": {
        "short": "Kurze",
        "medium": "Mittlere",
        "detailed": "Lange"
      },
      "formatOptions": {
        "paragraph": {
          "label": "Absatz-Zusammenfassung",
          "hint": "Flüssiger, zusammenhängender Text"
        },
        "bullets": {
          "label": "Zusammenfassung in Stichpunkten",
          "hint": "Übersichtliche Stichpunkte"
        },
        "key-points": {
          "label": "Kernpunkte extrahieren",
          "hint": "Nummerierte Erkenntnisse"
        },
        "simple": {
          "label": "Einfache Sprache",
          "hint": "Alltägliche, einfache Worte"
        }
      },
      "loadingFormatLabels": {
        "paragraph": "Absatz",
        "bullets": "Stichpunkt",
        "key-points": "Kernpunkte",
        "simple": "einfacher Sprache"
      },
      "languageLabels": {
        "Same as original language": "Wie in der Originalsprache",
        "English (US)": "Englisch (USA)",
        "English (UK)": "Englisch (UK)",
        "Spanish": "Spanisch",
        "French": "Französisch",
        "German": "Deutsch",
        "Portuguese": "Portugiesisch",
        "Italian": "Italienisch",
        "Dutch": "Niederländisch",
        "Arabic": "Arabisch",
        "Hindi": "Hindi",
        "Urdu": "Urdu",
        "Turkish": "Türkisch",
        "Japanese": "Japanisch",
        "Korean": "Koreanisch",
        "Chinese (Simplified)": "Chinesisch (vereinfacht)"
      },
      "sampleArticle": "Im Jahr 2026 setzen verteilte Produktentwicklungsteams zunehmend auf asynchrone schriftliche Updates statt auf tägliche Statusmeetings, um Zeit für konzentrierte Entwicklungsarbeit zu schützen. In einer sechsmonatigen internen Studie mit 140 Ingenieurinnen und Ingenieuren in London, Berlin und Toronto berichteten Teams, die drei wöchentliche Sync-Calls durch strukturierte schriftliche Zusammenfassungen am Dienstag und Donnerstag ersetzten, von einer 28%igen Reduzierung der Kalenderfragmentierung und lieferten Sprint-Meilensteine 14% schneller. Entscheidend war, dass schriftliche Updates nur dann funktionierten, wenn die Ingenieure drei konsistente Regeln befolgten: konkrete Blocker ganz oben nennen, direkt auf Pull Requests oder Issue-IDs verlinken und genaue Zieldaten statt vager Formulierungen wie „bald“ notieren. Die Manager behielten weiterhin eine einzige 25-minütige wöchentliche Live-Sitzung, die ausschließlich offenen Architektur-Abwägungen und Team-Check-ins gewidmet war, und bewahrten so den persönlichen Austausch, ohne die Coding-Blöcke zu unterbrechen.",
      "secUnit": "Sek.",
      "minUnit": "Min.",
      "title": "Kostenloser KI-Text-Zusammenfasser",
      "noAccount": "Kein Konto, keine Credits, keine Anmeldung nötig",
      "allowanceBefore": "Tägliches kostenloses Kontingent:",
      "allowanceAfter": "heute übrig",
      "allowanceFallback": "Bis zu 5 kostenlose Zusammenfassungen / Tag",
      "backendTitle": "Der KI-Backend-Schlüssel ist in dieser Umgebung noch nicht aktiv.",
      "backendEnsureBefore": "Stellen Sie sicher, dass",
      "backendEnsureAfter": "konfiguriert ist, um Live-KI-Zusammenfassungen auszuführen.",
      "stepLength": "1. Länge der Zusammenfassung",
      "stepFormat": "2. Format der Zusammenfassung",
      "stepLanguage": "3. Ausgabesprache",
      "stepText": "4. Quelltext zum Zusammenfassen",
      "lengthAria": "Länge der Zusammenfassung",
      "paste": "Einfügen",
      "clipboardUnavailable": "Das Lesen der Browser-Zwischenablage ist hier nicht verfügbar – verwenden Sie Strg/Cmd + V im Editor.",
      "clipboardEmpty": "Ihre Zwischenablage enthält gerade keinen Text.",
      "clipboardBlocked": "Die Berechtigung für die Zwischenablage wurde blockiert – fügen Sie den Text direkt mit Strg/Cmd + V ein.",
      "placeholder": "Fügen Sie hier einen Artikel, Forschungsnotizen, ein Meeting-Protokoll oder einen Aufsatz ein (mindestens 25 Wörter / 120 Zeichen, bis zu 25.000 Zeichen)...",
      "word": "Wort",
      "words": "Wörter",
      "chars": "Zeichen",
      "estRead": "Geschätzte Lesezeit: ",
      "stop": "Stopp",
      "summarizing": "Wird zusammengefasst...",
      "summarizeButton": "Text zusammenfassen",
      "addMoreBefore": "Fügen Sie mindestens ",
      "addMoreMiddle": " weitere Wörter hinzu (mindestens ",
      "addMoreAnd": " Wörter und ",
      "addMoreAfter": " Zeichen), damit die KI eine aussagekräftige Zusammenfassung erstellen kann.",
      "generatingSummary": "{length} Zusammenfassung im {format}-Format wird erstellt...",
      "errorDailyLimit": "Tägliches kostenloses Zusammenfassungs-Limit erreicht",
      "errorRateLimited": "Bitte etwas langsamer",
      "errorGlobal": "Tägliche Plattformkapazität erreicht",
      "errorGeneric": "Zusammenfassung gerade nicht möglich",
      "retry": "Erneut versuchen",
      "emptyError": "Bitte fügen Sie vor dem Zusammenfassen einen Artikel, Bericht oder Notizen ein oder tippen Sie sie ein.",
      "tooShortErrorBefore": "Ihr Text ist zu kurz für eine aussagekräftige Zusammenfassung (",
      "tooShortErrorMiddle": " Wörter). Bitte geben Sie mindestens ",
      "tooShortErrorAnd": " Wörter und ",
      "tooShortErrorAfter": " Zeichen ein.",
      "overLimitBefore": "Die Eingabe überschreitet das Limit von ",
      "overLimitMiddle": " Zeichen. Kürzen Sie Ihren Text um ",
      "overLimitAfter": " Zeichen und versuchen Sie es erneut.",
      "connectionError": "Vorübergehendes Verbindungsproblem beim Zusammenfassen. Bitte versuchen Sie es erneut.",
      "resultTitle": "Zusammenfassungsergebnis",
      "shorterSuffix": "% kürzer",
      "copySummary": "Zusammenfassung kopieren",
      "downloadTxt": "TXT herunterladen",
      "originalRead": "Lesezeit Original",
      "summaryRead": "Lesezeit Zusammenfassung",
      "compressionSaved": "Komprimierung & gesparte Zeit",
      "savesPrefix": "spart ca. ",
      "tabCompare": "Original vs. Zusammenfassung",
      "tabSummary": "Nur Zusammenfassung",
      "resultAria": "Generierte Zusammenfassung und Vergleich",
      "originalText": "Originaltext",
      "summaryOutput": "Zusammenfassungsausgabe",
      "summarizedWith": "Zusammengefasst mit kostenlosem Groq-Modell",
      "fallbackNote": " (automatischer Modell-Fallback)",
      "preservedNote": ". Wichtige Namen, Daten und Zahlen werden strikt aus Ihrer Eingabe übernommen."
    }
  },
  "ai-tool-finder": {
    "strings": {
      "quickTasks": [
        {
          "label": "Bild unter 100 KB verkleinern",
          "query": "Ich möchte meine Bildgröße auf 100 KB reduzieren.",
          "categoryId": "image-file"
        },
        {
          "label": "PDF in Bilder umwandeln",
          "query": "Ich muss ein PDF in Bilder umwandeln.",
          "categoryId": "pdf"
        },
        {
          "label": "Wörter im Essay zählen",
          "query": "Ich möchte die Wörter in meinem Essay zählen.",
          "categoryId": "text-writing"
        },
        {
          "label": "QR-Code generieren",
          "query": "Ich muss einen QR-Code generieren.",
          "categoryId": "social-media"
        },
        {
          "label": "Bildabmessungen ändern",
          "query": "Ich möchte die Abmessungen eines Bildes ändern.",
          "categoryId": "image-file"
        },
        {
          "label": "Grammatik korrigieren & E-Mail umschreiben",
          "query": "Ich möchte, dass die KI Grammatikfehler korrigiert und eine E-Mail professionell umschreibt.",
          "categoryId": "text-writing"
        },
        {
          "label": "Langen Artikel zusammenfassen",
          "query": "Ich muss einen langen Artikel in Stichpunkten zusammenfassen.",
          "categoryId": "text-writing"
        },
        {
          "label": "PDF-zu-Word-Prüfung",
          "query": "Ich muss ein PDF in Word umwandeln.",
          "categoryId": "all"
        }
      ],
      "title": "KI-gestützter Tool-Finder",
      "searchesLine": "Durchsucht {count} echte UtilityFlow-Tools (85 Browser- + 2 KI-Tools)",
      "aiSearchesToday": "KI-Suchen heute:",
      "leftUnlimited": "übrig · Sofortige lokale Suche unbegrenzt",
      "quotaFallback": "Bis zu 10 kostenlose KI-Suchen / Tag · Unbegrenzte lokale Suche",
      "backendBefore": "KI-semantisches Ranking erfordert ",
      "backendAfter": " auf dem Server, während die sofortige lokale Stichwortsuche über alle {count} Tools direkt funktioniert.",
      "queryLabel": "Beschreiben Sie, was Sie tun möchten (Umgangssprache oder Stichwörter)",
      "queryPlaceholder": "z. B. „Ich möchte meine Bildgröße auf 100 KB reduzieren“ oder „PDF in PNG umwandeln“",
      "categoryLabel": "Optionale Aufgabenkategorie",
      "allCategories": "Alle Kategorien ({count} Tools)",
      "characters": "Zeichen",
      "findButton": "Passendes Tool finden",
      "findingButton": "Bestes Tool wird gesucht...",
      "tryTask": "Probieren Sie eine echte Aufgabe aus oder wählen Sie eine häufige Frage",
      "loadingLine": "Ihre Anfrage wird mit den {count} verifizierten Tools von UtilityFlow abgeglichen...",
      "errorTitle": "KI-semantisches Ranking nicht verfügbar",
      "retryAi": "KI erneut versuchen",
      "describeError": "Bitte beschreiben Sie die Aufgabe oder das Problem, das Sie lösen möchten (mindestens 2 Zeichen).",
      "queryTooLongBefore": "Die Anfrage überschreitet ",
      "queryTooLongAfter": " Zeichen. Bitte halten Sie Ihre Beschreibung kurz.",
      "unexpectedFormat": "Die KI hat ein unerwartetes Format zurückgegeben. Unten werden schnelle Stichworttreffer aus unserem echten Bestand angezeigt.",
      "contactError": "Vorübergehendes Problem bei der Kontaktaufnahme mit dem KI-Ranking. Die Stichwortsuchergebnisse bleiben unten aktiv.",
      "bestTool": "Bestes empfohlenes Tool",
      "noExact": "Derzeit kein exakt passendes Tool verfügbar",
      "noMatchFallback": "UtilityFlow enthält derzeit kein spezielles Tool, das „{query}“ direkt ausführt. Wir erfinden niemals Fake-Tools oder Links.",
      "relevantAlt": "Relevante Alternativen",
      "relatedTools": "Verwandte vorhandene Tools (nur Teil-Workflows)",
      "supportedPrefix": "Unterstützt: ",
      "openName": "{name} öffnen",
      "matchedWith": "Abgeglichen mit verifiziertem UtilityFlow-Bestand über kostenloses Groq-Modell",
      "fallbackNote": " (automatischer Fallback)",
      "instantMatches": "Sofortige Stichworttreffer ({count})",
      "matchedLocally": "Lokal abgeglichen aus {count} Tools",
      "matchedPrefix": "Abgeglichen: ",
      "suggestionsTitle": "Intelligente Vorschläge",
      "suggestionsAll": "Über beliebte Aufgaben",
      "suggestionsCategory": "in der ausgewählten Kategorie",
      "clickOpen": "Klicken Sie auf ein Tool, um es direkt zu öffnen",
      "openToolArrow": "Tool öffnen →",
      "recommendationsAria": "KI-Tool-Empfehlungen",
      "instantAria": "Sofortige Stichworttreffer",
      "suggestionsAria": "Intelligente vorgeschlagene Tools beim Laden der Seite"
    }
  },
  "ai-writing-assistant": {
    "strings": {
      "tasks": {
        "fix-grammar": {
          "label": "Grammatik korrigieren",
          "hint": "Grammatik & Zeichensetzung korrigieren"
        },
        "rewrite-text": {
          "label": "Text umschreiben",
          "hint": "Flüssiger Ablauf & natürliche Formulierung"
        },
        "improve-writing": {
          "label": "Schreibstil verbessern",
          "hint": "Klarheit & Wortwahl polieren"
        },
        "make-professional": {
          "label": "Professionell formulieren",
          "hint": "Klarheit für Beruf & Führungsebene"
        },
        "make-casual": {
          "label": "Locker formulieren",
          "hint": "Entspannte Alltagssprache"
        },
        "simplify-text": {
          "label": "Text vereinfachen",
          "hint": "Klare, leicht lesbare Sätze"
        },
        "expand-text": {
          "label": "Text erweitern",
          "hint": "Hilfreiche Details aus der Eingabe ergänzen"
        },
        "paraphrase": {
          "label": "Paraphrasieren",
          "hint": "Neue Formulierung, gleiche Bedeutung"
        },
        "fix-spelling": {
          "label": "Rechtschreibung korrigieren",
          "hint": "Nur Tippfehler & Großschreibung korrigieren"
        },
        "write-email": {
          "label": "E-Mail schreiben",
          "hint": "Strukturierte E-Mail mit Betreffzeile"
        }
      },
      "tones": {
        "professional": "Professionell",
        "friendly": "Freundlich",
        "formal": "Formell",
        "casual": "Locker",
        "academic": "Wissenschaftlich",
        "persuasive": "Überzeugend",
        "simple": "Einfach"
      },
      "languageLabels": {
        "English (US)": "Englisch (USA)",
        "English (UK)": "Englisch (UK)",
        "Spanish": "Spanisch",
        "French": "Französisch",
        "German": "Deutsch",
        "Portuguese": "Portugiesisch",
        "Italian": "Italienisch",
        "Dutch": "Niederländisch",
        "Arabic": "Arabisch",
        "Hindi": "Hindi",
        "Urdu": "Urdu",
        "Turkish": "Türkisch",
        "Japanese": "Japanisch",
        "Korean": "Koreanisch",
        "Chinese (Simplified)": "Chinesisch (vereinfacht)",
        "Same as original language": "Wie in der Originalsprache"
      },
      "samples": {
        "default": "Hallo Team, ich wollte mich wegen dem gestrigen Meeting melden und den Zeitplan für unser Q4 Produktlaunch teilen. Es gibt noch zwei Punkte die wir vor Freitag prüfen müssen, also sagt mir bitte bescheid falls Blocker auftauchen.",
        "write-email": "muss den Kunden Daniel über den Mobile-App-Launch updaten. Tests heute fertig, noch 2 kleine UI-Bugs morgen früh zu fixen, bereit für die App-Store-Einreichung am Freitagnachmittag. Fragen, ob Montag 10 Uhr für den Übergabe-Call passt.",
        "fix-spelling": "Wir freuen uns sehr bekantzugeben, dass das vierteljährliche Wartungsfenster reibunglos verlaufen ist, ohne ungeplante Ausfallzeiten auf allen Servern.",
        "expand-text": "Remote asynchrone Standups sparen Engineering-Zeit und lassen globale Teammitglieder sich tief konzentrieren, ohne ständige Kalenderunterbrechungen."
      },
      "title": "Kostenloser KI-Schreibassistent",
      "noLogin": "Keine Anmeldung oder Karte erforderlich",
      "allowanceBefore": "Tägliches kostenloses Kontingent:",
      "allowanceAfter": "heute übrig",
      "allowanceFallback": "Bis zu 5 kostenlose Anfragen / Tag",
      "backendTitle": "Der KI-Backend-Schlüssel ist in dieser Umgebung noch nicht aktiv.",
      "backendSet": "Legen Sie",
      "backendRest": "auf dem Server oder Worker fest, um Live-KI-Textgenerierung zu aktivieren.",
      "stepTask": "1. Schreibaufgabe wählen (10 Modi)",
      "stepTone": "2. Ton",
      "stepLanguage": "3. Ausgabesprache",
      "stepText": "4. Ihr Originaltext",
      "taskSelectorAria": "Auswahl der Schreibaufgabe",
      "placeholder": "Tippen oder fügen Sie hier Ihren Absatz, Ihre Nachricht, Notizen oder Ihren E-Mail-Entwurf ein (bis zu 12.000 Zeichen)...",
      "word": "Wort",
      "words": "Wörter",
      "characters": "Zeichen",
      "chars": "Zeichen",
      "tip": "Tipp: Strg + Eingabetaste drücken, um zu generieren",
      "stop": "Stopp",
      "generating": "Wird generiert...",
      "applying": "Anwenden:",
      "tonePhrase": "{tone}-Ton",
      "applyingIn": "auf",
      "errorDailyLimit": "Tägliches kostenloses Limit erreicht",
      "errorRateLimited": "Bitte etwas langsamer",
      "errorGlobal": "Tägliche Plattformkapazität erreicht",
      "errorGeneric": "Schreibanfrage konnte nicht abgeschlossen werden",
      "retry": "Erneut versuchen",
      "emptyError": "Bitte geben Sie vor dem Generieren einen Text ein oder fügen Sie ihn ein.",
      "overLimitBefore": "Die Eingabe überschreitet das Limit von ",
      "overLimitMiddle": " Zeichen. Kürzen Sie Ihren Entwurf um ",
      "overLimitAfter": " Zeichen und versuchen Sie es erneut.",
      "connectionError": "Vorübergehendes Verbindungsproblem beim Generieren. Bitte versuchen Sie es erneut.",
      "resultTitle": "Verbesserte Ausgabe",
      "copyResult": "Ergebnis kopieren",
      "downloadTxt": "TXT herunterladen",
      "editOutput": "Ausgabe weiter bearbeiten",
      "tabCompare": "Original vs. verbessert",
      "tabDiff": "Änderungen hervorheben",
      "tabResult": "Nur Ergebnis",
      "resultAria": "Verbessertes Schreibergebnis und Vergleich",
      "originalText": "Originaltext",
      "improvedText": "Verbesserter Text",
      "removed": "Entfernt",
      "added": "Hinzugefügt / aktualisiert",
      "processedWith": "Verarbeitet mit kostenlosem Groq-Modell",
      "fallbackNote": " (automatischer Modell-Fallback)",
      "reviewNote": ". Prüfen Sie den finalen Text immer vor dem Absenden."
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Canonical- & Hreflang-Tags",
      "redirectsMode": "301-Weiterleitungsregel-Generator",
      "canonicalLabel": "Selbstreferenzierende Canonical-URL",
      "alternatesLabel": "Sprach- & Regionsalternativen",
      "addLocale": "Sprachversion hinzufügen",
      "langCodeAria": "Sprachcode",
      "alternateUrlAria": "Alternative URL",
      "removeLocaleAria": "Sprachversionszeile entfernen",
      "htmlTagsLabel": "HTML-<head>-Link-Tags",
      "copyHtml": "HTML kopieren",
      "xmlSnippetLabel": "XML-Sitemap-<xhtml:link>-Snippet",
      "copyXml": "XML kopieren",
      "cloudflareFormat": "Cloudflare Pages (_redirects)",
      "htaccessFormat": "Apache (.htaccess)",
      "nginxFormat": "Nginx (Server-Block)",
      "copyRules": "{n} Regeln kopieren",
      "pairsLabel": "Quell- → Ziel-Paare (durch Komma, Tab oder „ -> \" getrennt)",
      "generatedConfigLabel": "Generierte 301-Weiterleitungskonfiguration",
      "skippedInvalid": "{n} Zeile(n) ohne Ziel übersprungen."
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "Technisches SEO beginnt mit sauberen, crawlbaren URLs, korrekten Canonical-Tags und strukturierten XML-Sitemaps. Wenn Publisher hilfreiche Inhalte schreiben, die sich auf die Suchintention der Nutzer konzentrieren statt auf Keyword-Stuffing, verstehen Suchmaschinen die inhaltliche Tiefe ganz von selbst. Prüfen Sie regelmäßig Ihre Überschriften, Meta-Beschreibungen und internen Links.",
      "defaultTargetKeyword": "technisches seo",
      "guidanceTitle": "Redaktionelle Hinweise:",
      "guidanceBody": "Moderne Suchmaschinen belohnen keine feste Keyword-Dichte. Nutzen Sie diese Verteilungsanalyse, um versehentliche Wiederholungen zu erkennen oder zu bestätigen, dass zentrale Begriffe in Ihrem Text klar vorkommen.",
      "targetLabel": "Ziel-Keyword / Wortgruppe (optional)",
      "targetPlaceholder": "z. B. technisches seo",
      "phraseLengthLabel": "Phrasenlänge",
      "oneWord": "1 Wort",
      "twoWord": "2-Wort-Phrasen",
      "threeWord": "3-Wort-Phrasen",
      "stripHtml": "HTML-Tags entfernen",
      "ignoreStopWords": "Stoppwörter ignorieren",
      "textLabel": "Artikelentwurf oder eingefügter HTML-Text",
      "totalWords": "Wörter gesamt",
      "uniqueVocabulary": "Einzigartige Wörter",
      "readingTime": "Geschätzte Lesezeit",
      "targetPrefix": "Ziel: ",
      "hits": "{n} Treffer ({d} %)",
      "rankHeader": "Rang",
      "termHeader": "Begriff / N-Gramm",
      "occurrencesHeader": "Vorkommen",
      "shareHeader": "Anteil (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – Schnelle browserbasierte Online-Utility-Tools",
      "defaultDescription": "Entdecken Sie 85 schnelle, datenschutzfreundliche Browser-Tools für Textbearbeitung, Entwickler-Codierung, Finanzrechner, PDF-Workflows und SEO.",
      "pageTitleLabel": "Seitentitel (<title> / og:title)",
      "titleChars": "{n} Zeichen (ideal 30–60)",
      "metaDescriptionLabel": "Meta-Beschreibung",
      "descChars": "{n} Zeichen (ideal 120–160)",
      "canonicalUrlLabel": "Canonical-URL",
      "ogImageLabel": "Open-Graph-Bild-URL (1200×630 empfohlen)",
      "siteNameLabel": "Website-Name (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Twitter-Card",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Robots-Follow-Anweisung",
      "includeViewportLabel": "Charset- & Viewport-Tags einfügen",
      "generatedTagsLabel": "Generierte HTML-<head>-Tags",
      "copyHtml": "HTML kopieren",
      "downloadHtml": ".html herunterladen",
      "socialPreviewLabel": "Vorschau der Social-Sharing-Karte",
      "socialPreviewFallback": "Social-Sharing-Vorschau",
      "untitledPage": "Seite ohne Titel",
      "metaSnippetFallback": "Hier erscheint der Meta-Beschreibungs-Ausschnitt."
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "Clientseitige HTML-Quelltext-Prüfung:",
      "auditBody": "Browser blockieren das Cross-Origin-Scraping (CORS) beliebiger Websites Dritter und haben keinen Zugriff auf private Suchanalysen. Fügen Sie unten den HTML-Quelltext Ihrer Seite ein („Seitenquelltext anzeigen\"), um DOM-Tags lokal zu prüfen.",
      "pastedHtmlLabel": "Eingefügter HTML-Quelltext",
      "loadSampleHtml": "Beispiel-HTML laden",
      "htmlPlaceholder": "Rohes <html>...</html>-Quelltext hier einfügen...",
      "scoreLabel": "DOM-Prüfergebnis",
      "checksPassed": "{passed} / {total} Prüfungen bestanden",
      "linksSummary": "Links: {total} ({internal} intern / {external} extern)",
      "robotsMetaLabel": "Robots-Meta: ",
      "robotsDefault": "Standard (index, follow)",
      "headingOutline": "Überschriftenstruktur (H1–H4)",
      "emptyState": "Fügen Sie links den HTML-Quelltext ein, um Titel, Beschreibung, Überschriften, Canonicals und Alt-Tags zu prüfen.",
      "checkTitle": "Title-Tag (<title>)",
      "checkMetaDesc": "Meta-Beschreibung",
      "checkH1": "Genau eine <h1>-Überschrift",
      "checkCanonical": "Canonical-URL (<link rel=\"canonical\">)",
      "checkAlt": "Bild-Alt-Attribute",
      "checkOgJsonLd": "Open Graph & strukturierte JSON-LD-Daten",
      "titleDetail": "{n} Zeichen: „{title}\"",
      "titleMissing": "<title>-Tag in <head> fehlt.",
      "descDetail": "{n} Zeichen (Ziel 120–160).",
      "descMissing": "<meta name=\"description\"> fehlt.",
      "h1Detail": "{n} <h1>-Element(e) gefunden.",
      "canonicalMissing": "Kein Canonical-Tag angegeben.",
      "noImages": "Keine <img>-Elemente im Markup.",
      "altDetail": "{with}/{total} Bilder enthalten beschreibenden Alt-Text.",
      "ogDetail": "og:title {presence} · {n} JSON-LD-Block/Blöcke.",
      "present": "vorhanden",
      "missing": "fehlt"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "Indexierungsanweisung",
      "indexOption": "index (Suchindexierung erlauben)",
      "noindexOption": "noindex (aus SERPs ausschließen)",
      "linkCrawlingLabel": "Link-Crawling",
      "followOption": "follow (Linksignale weitergeben)",
      "nofollowOption": "nofollow (Links nicht folgen)",
      "largeOption": "large (Entdeckung zulässig)",
      "htmlTagLabel": "HTML-<head>-Meta-Tag",
      "copyHtmlTag": "HTML-Tag kopieren",
      "httpHeaderLabel": "HTTP-Antwortheader (PDF / Nicht-HTML)",
      "copyHeader": "Header kopieren",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Cloudflare-_headers-Pfadmuster",
      "copyBlock": "Block kopieren"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "Startvorlagen:",
      "allowAll": "Alle Crawler erlauben",
      "standardWebApp": "Standard-Web-App / SaaS",
      "wordpressClean": "WordPress (sauber)",
      "stagingBlockAll": "Staging (alle blockieren)",
      "crawlerRules": "Crawler-Pfadregeln",
      "addRule": "Regel hinzufügen",
      "directiveAria": "Anweisung",
      "pathAria": "Pfad",
      "deleteRuleAria": "Regel löschen",
      "crawlDelayLabel": "Crawl-Delay (Sekunden, optional)",
      "crawlDelayPlaceholder": "Keiner",
      "sitemapUrlsLabel": "Sitemap-URLs (eine pro Zeile)",
      "generatedLabel": "Generierte robots.txt"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "So baut man schnelle Browser-Utilities",
      "defaultFaqQ1": "Führt UtilityFlow Tools lokal im Browser aus?",
      "defaultFaqA1": "Ja. Fast alle Utilities laufen direkt im Arbeitsspeicher des Browsers, ohne Eingaben an externe Server zu senden.",
      "defaultFaqQ2": "Ist strukturiertes JSON-LD hilfreich für SEO?",
      "defaultFaqA2": "Ja. Gültiges Schema.org-JSON-LD verdeutlicht Such-Crawlern den Entitätskontext und die Eignung für Rich Results.",
      "defaultProductName": "Profi-ergonomische mechanische Tastatur",
      "defaultProductDesc": "Flache kabellose Tastatur, entwickelt für Softwareentwickler.",
      "defaultCrumbHome": "Startseite",
      "defaultCrumbSeo": "SEO-Tools",
      "defaultCrumbSchema": "Schema-Markup-Generator",
      "headlineLabel": "Überschrift",
      "authorNameLabel": "Autorenname",
      "publisherNameLabel": "Name des Herausgebers",
      "datePublishedLabel": "Veröffentlichungsdatum",
      "articleUrlLabel": "Artikel-URL",
      "featuredImageLabel": "Beitragsbild-URL",
      "questionLabel": "Frage Nr. {n}",
      "removeQuestionAria": "Frage {n} entfernen",
      "questionPlaceholder": "Frage",
      "acceptedAnswerPlaceholder": "Akzeptierte Antwort",
      "addFaqRow": "FAQ-Zeile hinzufügen",
      "productNameLabel": "Produktname",
      "descriptionLabel": "Beschreibung",
      "priceLabel": "Preis",
      "currencyLabel": "Währung",
      "availabilityLabel": "Verfügbarkeit",
      "orgNameLabel": "Name der Organisation",
      "websiteUrlLabel": "Website-URL",
      "logoUrlLabel": "Logo-URL",
      "breadcrumbLabelAria": "Breadcrumb-{n}-Bezeichnung",
      "breadcrumbUrlAria": "Breadcrumb-{n}-URL",
      "labelPlaceholder": "Bezeichnung",
      "addLevel": "Ebene hinzufügen",
      "jsonLdOutputLabel": "JSON-LD-<script>-Ausgabe",
      "copyScriptTag": "Script-Tag kopieren"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "JSON-Formatter & Validator – Schön drucken & minimieren | UtilityFlow",
      "defaultDescription": "Formatieren, validieren, minimieren und sortieren Sie Schlüssel in JSON-Payloads sofort in Ihrem Browser – mit Syntaxfehlerdetails nach Zeile und Spalte.",
      "desktopSerp": "Desktop-SERP (Titel ~580 px)",
      "mobileSerp": "Mobile-SERP (Beschr. ~120 Zeichen)",
      "copyTitleMeta": "Titel & Meta kopieren",
      "seoTitleLabel": "SEO-Titel",
      "titleMetrics": "{chars} Zeichen · ~{px} px / max. 580 px",
      "metaDescriptionLabel": "Meta-Beschreibung",
      "descMetrics": "{chars} Zeichen · ~{px} px",
      "pageUrlLabel": "Seiten-URL (für Breadcrumb-Vorschau)",
      "siteNameLabel": "Website-Name",
      "boldKeywordLabel": "Fettes Schlüsselwort",
      "optionalPlaceholder": "Optional",
      "datePrefixLabel": "Datumspräfix",
      "datePlaceholder": "z. B. 12. Nov. 2025",
      "desktopSimulation": "Desktop-Suchergebnis-Simulation",
      "mobileSimulation": "Mobile-Suchergebnis-Simulation",
      "titleFallback": "Ihr SEO-Titel erscheint hier",
      "descFallback": "Hier erscheint die Vorschau Ihrer Meta-Beschreibung."
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "So erstellt man einen sauberen URL-Slug für technisches SEO!\n10 beste Café- & Produktivitätstools 2026\nXML-Sitemap- & Robots.txt-Komplettcheckliste",
      "domainLabel": "Basis-Domain / Unterordner (für vollständige URL-Vorschau)",
      "separatorLabel": "Worttrennzeichen",
      "hyphenOption": "Bindestrich (-) — von Google empfohlen",
      "underscoreOption": "Unterstrich (_)",
      "maxLengthLabel": "Max. Slug-Länge ({n} Zeichen)",
      "stripStopWords": "Optionale englische Stoppwörter entfernen (a, the, and, of, in, to)",
      "trailingSlash": "Schrägstrich am Ende einfügen (/)",
      "titlesLabel": "Seitenüberschriften / Titel (einer pro Zeile für Stapelverarbeitung)",
      "generatedLabel": "Generierte SEO-Slugs ({n})",
      "copyAllSlugs": "Alle Slugs kopieren",
      "copyAllUrls": "Alle vollständigen URLs kopieren",
      "originalTitleHeader": "Originaltitel",
      "slugUrlHeader": "SEO-Slug & vollständige URL",
      "copyHeader": "Kopieren"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "<lastmod>-Datum (optional)",
      "changefreqLabel": "<changefreq>-Hinweis",
      "priorityLabel": "Standard-<priority>",
      "omitTag": "Tag weglassen",
      "deduplicateLabel": "Exakte URLs deduplizieren",
      "urlsLabel": "Canonical-URLs (eine vollständige https://-URL pro Zeile)",
      "skippedInvalid": "{n} ungültige URL-Zeile(n) übersprungen: ",
      "generatedLabel": "Generierte sitemap.xml ({n} URLs)",
      "copyXml": "XML kopieren",
      "downloadXml": ".xml herunterladen",
      "generatedAria": "Generierte XML-Sitemap"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "Wir entwickeln schnelle Browser-Tools für Maker & Teams.   \n\nJeden Dienstag gibt es neue Workflow-Tipps.\n\nProbieren Sie unsere kostenlosen Utilities über den Link unten aus!",
      "modeBraille": "Unsichtbarer Abstandhalter (⠀ U+2800)",
      "modeDot": "Minimaler Punkt-Abstandhalter (.)",
      "modeClean": "Nur saubere Leerzeichen am Zeilenende",
      "collapse": "Versehentliche doppelte Leerzeichen zusammenführen",
      "labelRaw": "Entwurf für Caption oder Bio",
      "phRaw": "Schreiben Sie Ihre Caption mit Leerzeilen, wo Absatzumbrüche sein sollen...",
      "tip": "Tipp: Social-Apps lassen leere Absätze oft verschwinden, wenn am Ende der Zeile darüber Leerzeichen stehen.",
      "labelOut": "Einfügefertige Ausgabe",
      "copyFormatted": "Formatierte Caption kopieren",
      "charsLabel": "Zeichen:",
      "linesLabel": "Zeilen:",
      "blankLabel": "Erhaltene Leerzeilen:",
      "fitsBio": "Passt in die Instagram-Bio (150 Zeichen)",
      "captionLength": "Caption-Länge (über dem Bio-Limit von 150)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "Problem → Agitieren → Lösung (PAS)",
        "tutorial": "Umsetzbare Aufschlüsselung in 3 Schritten",
        "bab": "Vorher → Nachher → Brücke",
        "checklist": "Launch-/Audit-Checkliste",
        "myth": "Gängiger Mythos vs. praktische Realität"
      },
      "frameworkDescriptions": {
        "pas": "Hebt einen konkreten Schmerzpunkt hervor, bevor der Workflow-Fix kommt.",
        "tutorial": "Nummerierte How-to-Struktur, ideal für LinkedIn-Carousels und gespeicherte Beiträge.",
        "bab": "Stellt alte Reibungspunkte dem optimierten Ergebnis gegenüber.",
        "checklist": "Klare Prüfliste, die Creator sich merken können.",
        "myth": "Hinterfragt veraltete Ratschläge mit direkten, prägnanten Alternativen."
      },
      "frameworkLabels": {
        "fixesHeading": "Was wirklich hilft:",
        "beforeLabel": "Vorher: ",
        "afterLabel": "Nachher: ",
        "bridgeHeading": "Die Brücke:",
        "mythLabel": "Gängiger Mythos: ",
        "worksHeading": "Was in der Praxis funktioniert:"
      },
      "sampleHook": "Hören Sie auf, Stunden mit dem manuellen Formatieren von Kampagnen-Links zu verlieren.",
      "sampleContext": "Inkonsistente UTM-Parameter und fehlerhafte Bio-Abstände verfälschen leise Ihre Analytics-Berichte.",
      "samplePoints": "UTM-Tags utm_source und utm_medium in Kleinbuchstaben standardisieren\nZeilenumbrüche vor dem Veröffentlichen prüfen\nSaubere Absatzumbrüche ohne Leerzeichen am Zeilenende verwenden",
      "sampleCta": "Speichern Sie diese Checkliste für Ihren nächsten Produktlaunch.",
      "infoTitle": "Deterministische Template-Erstellung:",
      "infoBody": "Dieses Tool nutzt strukturierte Copywriting-Frameworks direkt in Ihrem Browser – es wird kein KI-Modell und keine externe API verwendet oder suggeriert.",
      "labelHook": "Eröffnungshook (erste 1–2 Zeilen)",
      "labelContext": "Kontext / Problemstellung",
      "labelPoints": "Wichtigste Erkenntnisse (ein Punkt pro Zeile)",
      "labelCta": "Handlungsaufforderung (CTA)",
      "labelTags": "Hashtags",
      "previewTitle": "Formatierte Caption-Vorschau",
      "copyCaption": "Caption kopieren",
      "charsLabel": "Zeichen:",
      "wordsLabel": "Wörter:",
      "fits": "Passt",
      "threadNeeded": "Thread nötig",
      "tooLong": "Zu lang"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "Formatierung & Groß-/Kleinschreibung für Barrierefreiheit",
      "optCamel": "PascalCase (#CamelCase — screenreaderfreundlich)",
      "optLower": "alles klein (#kleinbuchstaben)",
      "optPreserve": "Originale Groß-/Kleinschreibung beibehalten",
      "outLabel": "Ausgabe-Layout",
      "optInline": "Eine Zeile (durch Leerzeichen getrennt)",
      "optNewline": "Ein Hashtag pro Zeile",
      "optDots": "Caption-Trennzeichen (.\n.\n.)",
      "dedupe": "Doppelte Hashtags entfernen",
      "labelRaw": "Keywords oder unordentliche Hashtags (durch Komma, Leerzeichen oder Zeile getrennt)",
      "labelResult": "Saubere Hashtag-Gruppe",
      "copyHashtags": "Hashtags kopieren",
      "statClean": "Saubere Hashtags",
      "statDupes": "Duplikate entfernt",
      "statIgMax": "Instagram-Maximum (30)",
      "statWithin": "Innerhalb des IG-Limits von 30",
      "statExceeds": "Übersteigt das Limit von 30 Tags",
      "statChars": "Zeichen der Ausgabe"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 Zeichen · Buchstaben, Zahlen, Unterstriche",
        "instagram": "1–30 Zeichen · Buchstaben, Zahlen, Punkte, Unterstriche",
        "tiktok": "2–24 Zeichen · Buchstaben, Zahlen, Unterstriche, Punkte",
        "youtube": "3–30 Zeichen · Buchstaben, Zahlen, _, -, .",
        "threads": "1–30 Zeichen · gemeinsamer Instagram-Namensraum",
        "github": "1–39 Zeichen · alphanumerisch und einzelne Bindestriche"
      },
      "infoTitle": "Regelprüfer & direkte Prüflinks:",
      "infoBodyBefore": "Prüft Handle-Syntax und Zeichenlimits offline, ohne die Verfügbarkeit zu raten. Klicken Sie auf den",
      "infoEm": "Profil-URL öffnen",
      "infoBodyAfter": "-Link einer Plattform, um den Live-Status direkt zu prüfen.",
      "labelBrand": "Marken-, Projekt- oder Creator-Name",
      "phBrand": "z. B. Utility Hub",
      "labelActive": "Aktiver Handle zur Prüfung",
      "copyAt": "@ kopieren",
      "variationsTitle": "Einheitliche Handle-Varianten:",
      "thPlatform": "Plattform",
      "thRules": "Formatregeln",
      "thStatus": "Syntax-Status",
      "thCheck": "Manuelle Prüfung",
      "valid": "Gültiges Format",
      "invalid": "Ungültige Syntax/Länge",
      "checkUrl": "URL prüfen"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "Fett (serifenlos)",
        "sans-italic": "Kursiv (serifenlos)",
        "sans-bold-italic": "Fett kursiv (serifenlos)",
        "serif-bold": "Fett (Serif)",
        "monospace": "Monospace",
        "double-struck": "Doppelt gestrichen (Blackboard)",
        "script-bold": "Script fett",
        "fraktur-bold": "Fraktur fett",
        "small-caps": "Kapitälchen",
        "fullwidth": "Volle Breite (ästhetisch)"
      },
      "styleNotes": {
        "sans-bold": "Hohe Lesbarkeit für Bio-Überschriften & Post-Hooks",
        "sans-italic": "Subtile Betonung in Captions",
        "sans-bold-italic": "Starke Callouts & Abschnittstrenner",
        "serif-bold": "Betonung im Editorial-Stil",
        "monospace": "Code-Handles, Daten & technische Tags",
        "double-struck": "Display-Akzente",
        "script-bold": "Dekorative Bio-Signaturen",
        "fraktur-bold": "Gotische Display-Schrift",
        "small-caps": "Saubere Profil-Labels in Großbuchstaben-Optik",
        "fullwidth": "Breit gesetzte Retro-Social-Überschriften"
      },
      "sampleText": "Neues Creator-Toolkit 2025",
      "accessibilityTitle": "Hinweis zur Barrierefreiheit:",
      "accessibilityBody": "Stilisierte Unicode-Zeichen gehören zu mathematischen Symbolblöcken, daher lesen Screenreader sie möglicherweise Buchstabe für Buchstabe vor oder überspringen sie, und manche Suchindizes ignorieren sie. Sparsam für kurze Highlights verwenden, nicht für ganze Absätze.",
      "labelInput": "Zu stilisierender Text",
      "placeholder": "Tippen Sie eine kurze Überschrift, Bio-Zeile oder CTA...",
      "previewEmpty": "Vorschau"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Instagram-Bio",
        "linkedinPost": "LinkedIn-Beitrag",
        "newsletter": "Newsletter",
        "youtubeDescription": "YouTube-Beschreibung"
      },
      "presetsLabel": "Schnelle Kanal-Vorgaben:",
      "errorEmpty": "Geben Sie eine Ziel-Website-URL ein.",
      "errorInvalid": "Geben Sie eine gültige Ziel-URL ein (zum Beispiel https://example.com/landing).",
      "labelUrl": "Website-Ziel-URL *",
      "labelSource": "Kampagnenquelle (utm_source) *",
      "phSource": "z. B. instagram, newsletter, google",
      "labelMedium": "Kampagnenmedium (utm_medium) *",
      "phMedium": "z. B. social, cpc, email, video",
      "labelCampaign": "Kampagnenname (utm_campaign)",
      "phCampaign": "z. B. spring_launch",
      "labelContent": "Kampagneninhalt (utm_content)",
      "phContent": "z. B. hero_banner, bio_button",
      "labelTerm": "Kampagnenbegriff (utm_term)",
      "phTerm": "Optionales bezahltes Keyword oder Audience-Tag",
      "normalizeLabel": "Kleinbuchstaben erzwingen & Leerzeichen in Unterstriche (`_`) umwandeln",
      "generatedTitle": "Generierte Kampagnen-URL",
      "copyUtm": "UTM-URL kopieren",
      "thParam": "Abfrageparameter",
      "thValue": "Normalisierter Wert"
    }
  },
'add-pdf-page-numbers': {
    strings: {
      errStart: 'Die Startseitenzahl muss eine ganze Zahl ab 1 sein.',
      stampedSuccess: (n: number, size: string) => `Seitenzahlen auf ${n} Seite(n) gestempelt (${size}).`,
      pageOfLabel: (cur: number, total: number) => `Seite ${cur} von ${total}`,
      dropTitleEmpty: 'PDF-Datei zum Hinzufügen von Seitenzahlen auswählen',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} Seiten)`,
      dropSub: 'Fügt gestochen scharfe Vektor-Seitenlabels in Berichte, Verträge und Unterlagen ein',
      labelPos: 'Position',
      optBottomCenter: 'Unten mittig',
      optBottomRight: 'Unten rechts',
      optBottomLeft: 'Unten links',
      optTopRight: 'Oben rechts',
      labelFmt: 'Label-Format',
      optPageOf: 'Seite 1 von N',
      optSlash: '1 / N',
      optNumberOnly: '1, 2, 3...',
      labelStart: 'Startnummer',
      labelSize: 'Schriftgröße (pt)',
      opt9: '9 pt (dezent)',
      opt11: '11 pt (Standard)',
      opt14: '14 pt (groß)',
      skipCover: 'Deckblatt überspringen (Nummerierung ab Seite 2)',
      numbering: 'Seiten werden nummeriert...',
      addBtn: 'Seitenzahlen hinzufügen & herunterladen',
    },
  },
  'images-to-pdf': {
    strings: {
      errDecode: (name: string) => `Das Bild "${name}" konnte nicht decodiert werden.`,
      errCanvas: 'Canvas-2D-Kontext nicht verfügbar.',
      errConvert: (name: string) => `Das Bild "${name}" konnte nicht in PNG umgewandelt werden.`,
      errNotImage: (name: string) => `"${name}" ist keine unterstützte Bilddatei (PNG, JPG, WebP).`,
      errRead: (name: string) => `"${name}" konnte nicht gelesen werden.`,
      errLoad: 'Bild konnte nicht geladen werden.',
      errEmpty: 'Fügen Sie zuerst mindestens ein Bild hinzu.',
      errBuild: 'Die Bilder konnten nicht in ein PDF umgewandelt werden.',
      createdSuccess: (n: number, size: string) => `PDF mit ${n} Seiten erfolgreich erstellt (${size}).`,
      dropTitle: 'PNG-, JPG- oder WebP-Bilder auswählen',
      dropSub: 'Screenshots, Scans oder Fotos lokal in ein einziges PDF umwandeln',
      labelSize: 'PDF-Seitengröße',
      optA4: 'A4 Hochformat (210 × 297 mm)',
      optLetter: 'US Letter (8,5 × 11 Zoll)',
      optFit: 'Exakte Bildmaße',
      labelMargin: 'Seitenrand',
      optMargin0: 'Kein Rand (0 pt)',
      optMargin24: 'Standardrand (24 pt)',
      optMargin48: 'Breiter Rand (48 pt)',
      labelOut: 'Dateiname der Ausgabe',
      moveUp: (name: string) => `${name} nach oben verschieben`,
      moveDown: (name: string) => `${name} nach unten verschieben`,
      removeFile: (name: string) => `${name} entfernen`,
      building: 'PDF wird erstellt...',
      convertBtn: (n: number) => `${n} Bilder in PDF umwandeln`,
    },
  },
  'merge-pdf': {
    strings: {
      errRead: 'Die ausgewählten PDF-Dateien konnten nicht gelesen werden.',
      errMin2: 'Fügen Sie zum Zusammenführen mindestens zwei PDF-Dateien hinzu.',
      mergedSuccess: (n: number, pages: number, size: string) =>
        `${n} PDFs zusammengeführt (${pages} Seiten, ${size}).`,
      dropValidating: 'PDF-Dateien werden geprüft...',
      dropTitle: 'Mehrere PDF-Dateien auswählen oder ablegen',
      dropSub: '100 % browserbasiertes Zusammenführen mit pdf-lib · Nur unverschlüsselte PDFs · Kein Upload',
      filesQueued: 'Dateien in der Warteschlange',
      totalPagesLabel: 'Seiten gesamt',
      combinedSize: 'Gesamtgröße der Eingaben',
      clearQueue: 'Warteschlange leeren',
      pageSingular: 'Seite',
      pagePlural: 'Seiten',
      moveUp: (name: string) => `${name} nach oben verschieben`,
      moveDown: (name: string) => `${name} nach unten verschieben`,
      removeFile: (name: string) => `${name} entfernen`,
      outName: 'Dateiname der Ausgabe',
      merging: 'PDFs werden zusammengeführt...',
      mergeBtn: (n: number) => `${n} PDFs zusammenführen & herunterladen`,
    },
  },
  'pdf-metadata-editor': {
    strings: {
      clearedMsg: 'Bearbeitbare Metadatenfelder wurden geleert. Klicken Sie auf „Metadaten speichern & PDF herunterladen", um die Änderung zu übernehmen.',
      savedSuccess: (size: string) => `Aktualisierte PDF-Metadaten gespeichert (${size}).`,
      dropTitleEmpty: 'PDF-Datei zum Prüfen oder Bearbeiten von Metadaten auswählen',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} Seiten · ${size})`,
      dropSub: 'Dokumenteigenschaften prüfen, Autoren- und Software-Angaben bereinigen oder saubere SEO-Titel setzen',
      labelTitle: 'Dokumenttitel',
      labelAuthor: 'Autor',
      labelSubject: 'Betreff / Zusammenfassung',
      labelKeywords: 'Schlüsselwörter (durch Komma getrennt)',
      labelCreator: 'Ersteller-Anwendung',
      labelProducer: 'PDF-Ersteller',
      saving: 'PDF wird gespeichert...',
      saveBtn: 'Metadaten speichern & PDF herunterladen',
      stripBtn: 'Alle Metadatenfelder entfernen',
    },
  },
  'pdf-page-rotator': {
    strings: {
      errNoMatch: 'Keine passenden Seiten zum Drehen gefunden.',
      rotatedSuccess: (a: number, b: number, deg: number, size: string) =>
        `${a} von ${b} Seiten um ${deg}° im Uhrzeigersinn gedreht (${size}).`,
      dropTitleEmpty: 'PDF-Datei zum Drehen von Seiten auswählen',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} Seiten)`,
      dropSub: 'Alle Seiten oder bestimmte Seitenbereiche lokal drehen – ohne Server-Upload',
      labelAngle: 'Drehwinkel',
      opt90: '90° im Uhrzeigersinn (rechts)',
      opt270: '90° gegen den Uhrzeigersinn (links / 270°)',
      opt180: '180° auf dem Kopf',
      labelScope: 'Anwenden auf',
      optAll: (n: number) => `Alle Seiten (${n})`,
      optRange: 'Bestimmte Seitenbereiche',
      optOdd: 'Nur ungerade Seiten',
      optEven: 'Nur gerade Seiten',
      labelRangeInput: (n: number) => `Seitennummern / Bereiche (1–${n})`,
      phRange: 'z. B. 1, 3-5',
      rotating: 'Seiten werden gedreht...',
      rotateBtn: 'Drehung anwenden & PDF herunterladen',
    },
  },
  'pdf-text-extractor': {
    strings: {
      pageMarker: (n: number) => `--- Seite ${n} ---`,
      dropExtracting: 'PDF-Textebene wird extrahiert...',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} Seiten)`,
      dropTitleEmpty: 'Textbasierte PDF-Datei zum Extrahieren von Text auswählen',
      dropSub: 'Extrahiert eingebetteten Unicode-Text lokal mit PDF.js · Kein Server-Upload',
      noTextTitle: 'Keine auswählbare Textebene gefunden:',
      noTextBody:
        'Diese PDF scheint gescannte Bilder oder umgewandelte Vektorpfade statt einer eingebetteten Textebene zu enthalten. Eine clientseitige optische Zeichenerkennung (OCR) wird offline nicht durchgeführt.',
      markersLabelBefore: 'Seitenkopf-Markierungen einfügen (',
      markersCode: '--- Seite N ---',
      markersLabelAfter: ')',
      copyText: 'Text kopieren',
      downloadTxt: '.txt herunterladen',
      outputAria: 'Extrahierter PDF-Text (Ausgabe)',
      pagesScanned: 'Gescannte Seiten:',
      wordsExtracted: 'Extrahierte Wörter:',
      textSize: 'Textgröße:',
    },
  },
  'pdf-to-images': {
    strings: {
      errBatch: 'Rendern Sie maximal 20 Seiten pro Durchgang, damit der Browser-Canvas-Speicher schnell und reaktionsschnell bleibt.',
      errCanvas: 'Canvas-2D-Kontext nicht verfügbar.',
      dropTitleEmpty: 'PDF-Datei zum Rendern als Bilder auswählen',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} Seiten · ${size})`,
      dropSub: 'Lokal gerendert mit PDF.js-Canvas · Ausgabe als PNG oder JPG',
      labelRange: 'Seiten („alle" oder Bereich wie 1-4, 6)',
      labelFormat: 'Bildformat',
      optPng: 'PNG (verlustfrei / scharfer Text)',
      optJpg: 'JPG (kompakt / fotofreundlich)',
      labelScale: 'Render-Auflösung',
      optScale1: '1,0× (72 DPI schnelle Vorschau)',
      optScale15: '1,5× (108 DPI Standard)',
      optScale2: '2,0× (144 DPI scharf)',
      rendering: 'PDF-Seiten werden gerendert...',
      renderBtn: 'PDF-Seiten als Bilder rendern',
      pageAlt: (n: number) => `Vorschau von Seite ${n}`,
      pageLabel: (n: number, w: number, h: number) => `Seite ${n} · ${w}×${h}`,
    },
  },
  'pdf-watermark': {
    strings: {
      colorLabels: {
        slate: 'Neutrales Grau',
        indigo: 'Marken-Indigo',
        red: 'Stempelrot',
      },
      defaultWatermark: 'CONFIDENTIAL',
      errEmpty: 'Geben Sie zuerst einen Wasserzeichen-Text ein, bevor Sie das PDF erstellen.',
      appliedSuccess: (text: string, n: number, size: string) =>
        `Wasserzeichen "${text}" auf ${n} Seite(n) angewendet (${size}).`,
      dropTitleEmpty: 'PDF-Datei zum Hinzufügen eines Wasserzeichens auswählen',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} Seiten)`,
      dropSub: 'Bettet gestochen scharfe Vektor-Textstempel lokal mit pdf-lib ein',
      labelText: 'Wasserzeichen-Text',
      phText: 'VERTRAULICH / ENTWURF / NUR INTERN',
      labelColor: 'Stempelfarbe',
      firstPageOnly: 'Nur erste Seite',
      labelSize: 'Schriftgröße:',
      ptSuffix: (n: number) => `${n} pt`,
      labelOpacity: 'Deckkraft:',
      labelAngle: 'Drehung:',
      applying: 'Wasserzeichen wird hinzugefügt...',
      applyBtn: 'Wasserzeichen anwenden & herunterladen',
    },
  },
  'reorder-delete-pdf-pages': {
    strings: {
      errMin1: 'Ein PDF muss mindestens 1 Seite behalten.',
      savedSuccess: (n: number, size: string) => `Aktualisiertes PDF mit ${n} Seiten gespeichert (${size}).`,
      loading: 'PDF-Seiten & Vorschauen werden geladen...',
      dropTitleFile: (name: string, n: number) => `${name} (${n} Seiten aktiv)`,
      dropTitleEmpty: 'PDF-Datei zum Neuordnen oder Löschen von Seiten auswählen',
      dropSub: 'Seiten lokal verschieben, duplizieren oder unerwünschte Seiten entfernen',
      outCount: 'Seitenzahl der Ausgabe:',
      saving: 'PDF wird gespeichert...',
      saveBtn: 'Neu geordnetes PDF speichern',
      thumbAlt: (n: number) => `Originalseite ${n}`,
      thumbFallback: (n: number) => `Orig. S. ${n}`,
      posLabel: (n: number) => `Pos. #${n}`,
      origLabel: (n: number) => `(Orig. ${n})`,
      moveEarlierTitle: 'Früher verschieben',
      moveEarlierAria: (n: number) => `Position ${n} früher verschieben`,
      moveLaterTitle: 'Später verschieben',
      moveLaterAria: (n: number) => `Position ${n} später verschieben`,
      dupTitle: 'Seite duplizieren',
      dupAria: (n: number) => `Seite an Position ${n} duplizieren`,
      delTitle: 'Seite löschen',
      delAria: (n: number) => `Seite an Position ${n} löschen`,
    },
  },
  'split-pdf': {
    strings: {
      errBurst: (n: number) =>
        `Beim Aufteilen in Einzelseiten wird eine Datei pro Seite heruntergeladen. Bei Dokumenten mit mehr als 25 Seiten (${n} Seiten hier) extrahieren Sie stattdessen Bereiche, damit Ihr Browser keine Massendownloads blockiert.`,
      exportedAll: (n: number) => `${n} einseitige PDF-Dateien exportiert.`,
      errNoMatch: 'Keine Seiten passen zu dieser Auswahl (z. B. erfordert „Gerade Seiten" mindestens 2 Seiten).',
      extractedSuccess: (a: number, b: number, size: string) =>
        `${a} von ${b} Seiten extrahiert (${size}).`,
      dropTitleEmpty: 'PDF-Datei zum Teilen oder Extrahieren auswählen',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} Seiten · ${size})`,
      dropSub: 'Lokal im Speicher verarbeitet · Klicken zum Ersetzen des Dokuments',
      modeRange: 'Seitenbereiche extrahieren',
      modeOdd: 'Nur ungerade Seiten',
      modeEven: 'Nur gerade Seiten',
      modeBurst: 'Alle Einzelseiten extrahieren',
      labelRange: (n: number) => `Zu extrahierende Seiten (1–${n})`,
      phRange: 'z. B. 1-3, 5, 8-10',
      rangeHintBefore: 'Verwenden Sie Kommas und Bindestriche (zum Beispiel ',
      rangeHintAfter: ').',
      extracting: 'PDF wird extrahiert...',
      splitBtn: 'Teilen & PDF herunterladen',
    },
  },
  'qr-code-generator': {
    strings: {
      tabUrl: 'Website-URL',
      tabText: 'Reiner Text',
      tabWifi: 'WLAN-Netzwerk',
      tabEmail: 'E-Mail-Link',
      tabPhone: 'Telefonnummer',
      labelUrl: 'Ziel-URL',
      labelText: 'Textinhalt',
      labelSsid: 'Netzwerkname (SSID)',
      labelSecurity: 'Sicherheitstyp',
      optWpa: 'WPA / WPA2 / WPA3',
      optWep: 'WEP',
      optOpen: 'Offen (kein Passwort)',
      labelWifiPass: 'WLAN-Passwort',
      hiddenSsid: 'Verstecktes SSID-Netzwerk',
      labelEmailTo: 'Empfänger-E-Mail',
      labelEmailSubject: 'Betreff (optional)',
      labelPhone: 'Telefonnummer (Format E.164 empfohlen)',
      sizeLabel: (size: number) => `Größe (${size}px)`,
      labelEc: 'Fehlerkorrektur',
      labelFg: 'Vordergrund',
      labelBg: 'Hintergrund',
      quietZone: 'Rand der Ruhezone:',
      modulesLabel: (margin: number) => `${margin} Module`,
      encodedPayload: 'Kodierte Payload-Zeichenkette',
      copyPayload: 'Payload kopieren',
      emptyError: 'Geben Sie oben Inhalte ein, um einen scannbaren QR-Code zu erzeugen.',
      encodeError: 'QR-Payload konnte nicht kodiert werden.',
      qrAlt: 'Generierter scannbarer QR-Code',
      downloadPng: 'PNG herunterladen',
      downloadSvg: 'SVG herunterladen',
      copySvg: 'SVG kopieren',
      sampleText: 'Willkommen bei UtilityFlow!',
    },
  },
  'social-character-limit-checker': {
    strings: {
      surfaces: {
        standardPost: 'Standardbeitrag',
        profileBio: 'Profil-Bio',
        caption: 'Caption',
        feedPost: 'Feed-Beitrag',
        videoCaption: 'Video-Caption',
        post: 'Beitrag',
        videoTitle: 'Videotitel',
        description: 'Beschreibung',
      },
      sampleText:
        'Schneller zu liefern beginnt mit kleinen täglichen Verbesserungen.\n\nProbieren Sie unsere browserbasierten Creator-Utilities unter https://utilityflow.online/tools/ aus — keine Anmeldung erforderlich.\n\n#CreatorTools #Workflow',
      labelInput: 'Social-Post / Bio-Entwurf',
      copyDraft: 'Entwurf kopieren',
      placeholder: 'Schreiben oder fügen Sie Ihre Social-Caption, Ihren Post, Ihre Bio oder Ihren YouTube-Titel ein...',
      charsLabel: 'Zeichen:',
      wordsLabel: 'Wörter:',
      hashtagsLabel: 'Hashtags:',
      mentionsLabel: 'Erwähnungen:',
      urlsLabel: 'Erkannte URLs:',
      urlsWeighted: '(gewichtet 23 Zeichen auf X)',
      overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)} über dem Limit`,
      left: (n: number, loc: string) => `${n.toLocaleString(loc)} übrig`,
      foldLabel: (n: number) => `Umbruch ~${n} Z.`,
      foldTitle: 'Vorschau auf Feed-Kürzung / „Mehr anzeigen“-Umbruch',
      foldDesc: (limit: number, platform: string, surface: string) =>
        `Vorschau, was Leser sehen, bevor sie auf „Mehr anzeigen“ tippen (${limit} Zeichen für ${platform} ${surface}).`,
      selectAria: 'Plattform für die Kürzungsvorschau wählen',
      previewEmpty: 'Die Vorschau erscheint hier...',
    },
  },
  'social-thumbnail-previewer': {
    strings: {
      sampleTitle: 'Wie wir 85 schnelle Browser-Utilities ohne Tracking gebaut haben',
      sampleChannel: 'UtilityFlow Studio',
      sampleViews: '24.000 Aufrufe · vor 2 Tagen',
      errNotImage: 'Bitte wählen Sie eine PNG-, JPG- oder WebP-Bilddatei.',
      errDecode: 'Diese Bilddatei konnte im Browser nicht dekodiert werden.',
      previewEyebrow: '1280 × 720 VORSCHAU',
      emptyThumb: 'Laden Sie Ihr Thumbnail-Bild hoch, um die Lesbarkeit im Feed zu prüfen',
      thumbAlt: 'Hochgeladene Thumbnail-Vorschau',
      safeZoneTitle: 'Überlappungszone des Zeitstempel-Badges',
      chooseThumb: 'Lokales Thumbnail wählen (PNG / JPG / WebP)',
      replaceThumb: (name: string) => `Ersetzen: ${name}`,
      recommended: 'Empfohlen 1280×720 (16:9), unter 2 MB · Wird nie hochgeladen',
      diagTitle: 'Bildspezifikations-Diagnose',
      dimLabel: 'Abmessungen',
      dimHdOk: '(HD OK)',
      dimUnder: '(<1280px)',
      aspectLabel: 'Seitenverhältnis',
      aspectMatch: '16:9 passt',
      aspectNo: 'Kein 16:9 (kann beschnitten/letterboxed werden)',
      sizeLabel: 'Dateigröße',
      sizeOk: '(<2 MB OK)',
      sizeOver: '(>2 MB Limit)',
      titleLabel: (len: number) => `Videotitel (${len}/100 Zeichen · ~60 auf Mobilgeräten sichtbar)`,
      channelLabel: 'Kanalname',
      durationLabel: 'Dauer',
      darkMode: 'Feed-Vorschau im Dark Mode',
      safeZone: 'Zeitstempel-Eckzone hervorheben',
      desktopCard: 'Desktop-Startseiten-Feed-Karte',
      sidebar: 'Desktop-Watch-Seitenleiste (kompakte Empfehlung)',
      untitled: 'Video ohne Titel',
    },
  },
  'youtube-timestamp-generator': {
    strings: {
      sampleChapters: [
        { id: 1, time: '00:00', title: 'Einführung & Überblick' },
        { id: 2, time: '01:15', title: 'Kernarchitektur einrichten' },
        { id: 3, time: '04:40', title: 'Live-Demo & häufige Fallstricke' },
        { id: 4, time: '08:20', title: 'Zusammenfassung & nächste Schritte' },
      ],
      newChapter: (n: number) => `Kapitel ${n}`,
      defaultChapterTitle: 'Kapitel',
      warnInvalid: 'Ein oder mehrere Zeitstempel haben ein ungültiges Format (MM:SS oder HH:MM:SS verwenden).',
      warnMin3: 'YouTube benötigt mindestens 3 Zeitstempel in aufsteigender Reihenfolge, um Videokapitel zu aktivieren.',
      warnFirst: 'Das erste Kapitel muss bei 00:00 beginnen, damit YouTube Kapitel erkennt.',
      warnOrder: 'Die Kapitel sind nicht in chronologischer Reihenfolge (auf „Chronologisch sortieren“ klicken).',
      warnShort: (title: string) =>
        `Kapitel „${title}“ liegt unter 10 Sekunden nach dem vorherigen Kapitel (YouTube-Minimum sind 10 s).`,
      labelUrl: 'YouTube-Video-URL oder Video-ID (für direkte `?t=`-Deep-Links)',
      heading: 'Videokapitel',
      sortBtn: 'Chronologisch sortieren',
      addBtn: 'Kapitel hinzufügen',
      tsAria: (n: number) => `Zeitstempel von Kapitel ${n}`,
      titleAria: (n: number) => `Titel von Kapitel ${n}`,
      phTitle: 'Kapiteltitel',
      removeAria: (n: number) => `Kapitel ${n} entfernen`,
      specTitle: 'YouTube-Kapitel-Spezifikationsprüfung:',
      descBlock: 'Beschreibungs-Kapitelblock',
      copyChapters: 'Kapitel kopieren',
      emptyChapters: 'Fügen Sie oben Kapitel hinzu, um Ihren Beschreibungsblock zu erzeugen.',
      shareTitle: 'Share-Links mit Zeitstempel',
      videoIdLabel: (id: string) => `(Video-ID: ${id})`,
      noVideoId: '(Gültige YouTube-URL oben eingeben)',
      noVideoHint: 'Fügen Sie eine gültige youtube.com- oder youtu.be-URL ein, um klickbare `?t=`-Sprunglinks für jedes Kapitel zu erstellen.',
    },
  },
  'pdf-utils': {
    strings: {
      noFile: 'Es wurde keine Datei ausgewählt.',
      notPdf: (name: string) => `"${name}" scheint keine PDF-Datei zu sein.`,
      empty: (name: string) => `"${name}" ist leer oder unvollständig.`,
      noHeader: (name: string) =>
        `"${name}" fehlt ein gültiger %PDF-Header und kann nicht verarbeitet werden.`,
      enterRanges: 'Geben Sie Seitennummern oder Bereiche ein, z. B. „1-3, 5".',
      rangeOutside: (token: string, total: number) =>
        `Bereich „${token}" liegt außerhalb der Seitengrenzen des Dokuments (1–${total}).`,
      rangeReversed: (token: string) =>
        `Bereich „${token}": Die Startseite ist größer als die Endseite.`,
      pageMissing: (page: number, total: number) =>
        `Seite ${page} existiert nicht (das Dokument hat ${total} Seiten).`,
      invalidSyntax: (token: string) =>
        `Ungültige Seitensyntax „${token}". Verwenden Sie Zahlen und Bereiche wie „1-3, 5".`,
      encrypted:
        'Diese PDF ist verschlüsselt oder passwortgeschützt. Entsperren Sie sie, bevor Sie sie lokal verarbeiten.',
      unable: 'PDF-Datei konnte nicht verarbeitet werden.',
      allKeywords: ['all', 'alle'],
    },
  },
};
