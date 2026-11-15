import type { CategoryLocaleOverride } from '../types';

/**
 * German overrides for the 7 categories, keyed by category id.
 * Every category: slug (matches CATEGORY_LOCALE_SLUGS.de in
 * src/locales/config.ts), name, shortName, description, longDescription,
 * seo, sampleToolNames (5).
 */
export const DE_CATEGORY_OVERRIDES: Record<string, CategoryLocaleOverride> = {
  'text-writing': {
    slug: 'text-und-schreibwerkzeuge',
    name: 'Text- & Schreibwerkzeuge',
    shortName: 'Text & Schreiben',
    description:
      'Analysieren Sie Wortzahlen, formatieren Sie Texte, bereinigen Sie Leerzeichen, wandeln Sie Groß- und Kleinschreibung um und prüfen Sie die Lesbarkeit direkt in Ihrem Browser.',
    longDescription:
      'Präzise Schreib- und String-Utilities für Autoren, Redakteure, Content-Teams und Studierende. Jede Textoperation läuft sofort auf Ihrem Gerät, ohne Entwürfe auf Remote-Server hochzuladen.',
    intro:
      'Wählen Sie unten ein Tool aus, fügen Sie Ihren Text ein oder tippen Sie ihn, und das Ergebnis erscheint sofort. Es gibt nichts zu installieren und nichts hochzuladen — Ihre Entwürfe bleiben auf Ihrem Gerät, denn jedes Tool läuft vollständig in Ihrem Browser.',
    faqs: [
      {
        question: 'Sind die Text- und Schreibwerkzeuge kostenlos?',
        answer: 'Ja, alle sind kostenlos nutzbar, ohne Anmeldung und ohne Konto.',
      },
      {
        question: 'Verlässt mein Text meinen Browser?',
        answer: 'Nein. Jedes Tool läuft zu 100 % in Ihrem Browser, sodass der Text, den Sie einfügen oder tippen, niemals auf einen Server hochgeladen oder irgendwo gespeichert wird.',
      },
      {
        question: 'Muss ich ein Konto erstellen?',
        answer: 'Nein. Sie können jedes Tool öffnen und sofort loslegen — kein Konto, keine E-Mail und keine Installation.',
      },
      {
        question: 'Welches Tool soll ich verwenden, um die Wörter in meinem Text zu zählen?',
        answer: 'Verwenden Sie den Wörterzähler. Fügen Sie Ihren Text dort ein, und er zeigt sofort die Wort- und Zeichenzahl an.',
      },
    ],
    seo: {
      title: 'Text- & Schreibwerkzeuge – Online-Tools | UtilityFlow',
      description:
        'Entdecken Sie browserbasierte Text- und Schreibwerkzeuge: Wortzähler, Zeichenzähler, Groß-/Kleinschreibung-Konverter, Zeilensortierer und Textbereinigung.',
      keywords: [
        'Text-Tools',
        'Schreib-Utilities',
        'Wortzähler',
        'Zeichenzähler',
        'Groß-/Kleinschreibung-Konverter',
      ],
    },
    sampleToolNames: [
      'Wörterzähler',
      'Zeichenzähler',
      'Groß-/Kleinschreibung-Konverter',
      'Doppelte Zeilen entfernen',
      'Textvergleich',
    ],
  },
  developer: {
    slug: 'entwicklerwerkzeuge',
    name: 'Entwicklerwerkzeuge',
    shortName: 'Entwickler',
    description:
      'Formatieren Sie JSON, kodieren Sie Base64, testen Sie reguläre Ausdrücke, dekodieren Sie JWTs und erzeugen Sie Hashes – ganz ohne Server-Roundtrips.',
    longDescription:
      'Alltägliche Engineering-Utilities für schnelles Debugging und saubere Datentransformation. Fügen Sie Payloads ein, prüfen Sie strukturierte Formate und validieren Sie Syntax lokal, damit sensible Tokens und Konfigurations-Snippets Ihr Gerät nie verlassen.',
    intro:
      'Wählen Sie das Tool, das Sie brauchen, fügen Sie Ihren Code oder Ihre Daten ein und prüfen Sie das Ergebnis sofort. Alles wird auf Ihrem eigenen Gerät verarbeitet, sodass Tokens, Payloads und Konfigurations-Snippets Ihr Gerät nie verlassen.',
    faqs: [
      {
        question: 'Sind die Entwicklerwerkzeuge kostenlos?',
        answer: 'Ja, alle sind kostenlos nutzbar, ohne Anmeldung und ohne Konto.',
      },
      {
        question: 'Kann ich ein Token oder einen API-Schlüssel sicher in diese Tools einfügen?',
        answer: 'Ja. Tools wie der JWT-Dekodierer und der Base64-Kodierer laufen vollständig in Ihrem Browser, sodass der Text, den Sie einfügen, niemals an einen Server gesendet wird.',
      },
      {
        question: 'Muss ich ein Konto erstellen?',
        answer: 'Nein. Sie können jedes Tool öffnen und sofort loslegen — kein Konto, keine E-Mail und keine Installation.',
      },
      {
        question: 'Welches Tool soll ich verwenden, um zu prüfen, ob mein JSON gültig ist?',
        answer: 'Verwenden Sie den JSON-Formatierer & Validator. Fügen Sie Ihr JSON dort ein, und er formatiert den Code und zeigt etwaige Fehler an.',
      },
    ],
    seo: {
      title: 'Entwicklerwerkzeuge – JSON, Regex & Hash-Tools | UtilityFlow',
      description:
        'Entwickler-Tools für die lokale Arbeit direkt im Browser: JSON formatieren, Regex testen, Base64 und URLs kodieren, JWTs prüfen und UUIDs sicher erzeugen.',
      keywords: [
        'Entwickler-Tools',
        'JSON-Formatierer',
        'Base64-Kodierer',
        'Regex-Tester',
        'JWT-Dekodierer',
      ],
    },
    sampleToolNames: [
      'JSON-Formatierer & Validator',
      'Base64-Kodierer / Dekodierer',
      'URL-Kodierer / Dekodierer',
      'UUID-Generator (v4 und v7)',
      'Regex-Tester',
    ],
  },
  calculators: {
    slug: 'rechner',
    name: 'Rechner',
    shortName: 'Rechner',
    description:
      'Berechnen Sie Alter, Prozente, Kreditpläne, BMI, Einheitenumrechnungen und Geschäftsmargen mit deterministischer Präzision.',
    longDescription:
      'Genaue Finanz-, Datums-, Gesundheits- und Mathematik-Rechner, entwickelt für Übersichtlichkeit. Sehen Sie schrittweise Aufschlüsselungen, saubere tabellarische Ausgaben und sofortige Neuberechnungen, sobald Sie Eingaben anpassen.',
    intro:
      'Wählen Sie einen Rechner aus, geben Sie Ihre Zahlen ein, und das Ergebnis aktualisiert sich sofort, sobald Sie die Eingaben ändern. Eine Anmeldung ist nicht nötig, und nichts, was Sie eingeben, wird irgendwohin gesendet — jede Berechnung erfolgt in Ihrem Browser.',
    faqs: [
      {
        question: 'Sind die Rechner kostenlos?',
        answer: 'Ja, alle sind kostenlos nutzbar, ohne Anmeldung und ohne Konto.',
      },
      {
        question: 'Verlassen die Daten, die ich eingebe, meinen Browser?',
        answer: 'Nein. Jede Berechnung läuft zu 100 % in Ihrem Browser, sodass die Zahlen, die Sie eingeben, niemals auf einen Server hochgeladen oder irgendwo gespeichert werden.',
      },
      {
        question: 'Funktionieren die Rechner auf dem Handy?',
        answer: 'Ja. Sie funktionieren in jedem modernen Browser, sodass Sie sie auf Ihrem Handy, Tablet oder Computer nutzen können.',
      },
      {
        question: 'Welchen Rechner soll ich für eine monatliche Kreditrate verwenden?',
        answer: 'Verwenden Sie den Kredit- & EMI-Rechner. Geben Sie Kreditbetrag, Zinssatz und Laufzeit ein, um die monatliche Rate und einen vollständigen Tilgungsplan zu sehen.',
      },
    ],
    seo: {
      title: 'Online-Rechner – Finanzen & Einheiten | UtilityFlow',
      description:
        'Nutzen Sie schnelle, transparente kostenlose Online-Rechner für Alter, Prozent, Kreditraten, Margen und Einheitenumrechnung – mit sofortigen Ergebnissen.',
      keywords: [
        'Online-Rechner',
        'Altersrechner',
        'Prozentrechner',
        'Kreditrechner',
        'Einheitenumrechner',
      ],
    },
    sampleToolNames: [
      'Altersrechner',
      'Prozentrechner',
      'Kredit- & EMI-Rechner',
      'Rabatt- & Margenrechner',
      'Datumsdifferenz-Rechner',
    ],
  },
  'social-media': {
    slug: 'social-media-werkzeuge',
    name: 'Social-Media-Tools',
    shortName: 'Social Media',
    description:
      'Erstellen Sie UTM-Tracking-Links, prüfen Sie Beitragslängen, generieren Sie QR-Codes und formatieren Sie Bildunterschriften für moderne Social-Media-Kanäle.',
    longDescription:
      'Praktische Marketing- und Veröffentlichungshelfer für Creator, Growth-Teams und Community-Manager. Standardisieren Sie Kampagnen-Tracking-Parameter, prüfen Sie Zeichenlimits der Plattformen und generieren Sie scanbare QR-Codes bei Bedarf.',
    intro:
      'Öffnen Sie unten ein Tool, geben Sie Ihren Link oder Text ein und kopieren Sie das Ergebnis direkt in Ihren Beitrag oder Ihre Kampagne. Alles läuft in Ihrem Browser, sodass Ihre Links und Bildunterschriften niemals auf einen Server hochgeladen werden.',
    faqs: [
      {
        question: 'Sind die Social-Media-Tools kostenlos?',
        answer: 'Ja, alle sind kostenlos nutzbar, ohne Anmeldung und ohne Konto.',
      },
      {
        question: 'Wird etwas, das ich eingebe, auf einen Server hochgeladen?',
        answer: 'Nein. Jedes Tool läuft zu 100 % in Ihrem Browser, sodass Ihre Links, Bildunterschriften und Texte Ihr Gerät nie verlassen.',
      },
      {
        question: 'Muss ich ein Konto erstellen?',
        answer: 'Nein. Sie können jedes Tool öffnen und sofort loslegen — kein Konto, keine E-Mail und keine Installation.',
      },
      {
        question: 'Welches Tool erstellt einen QR-Code für meinen Link?',
        answer: 'Verwenden Sie den QR-Code-Generator. Geben Sie Ihren Link ein, und er erstellt einen scanbaren QR-Code, den Sie herunterladen und teilen können.',
      },
    ],
    seo: {
      title: 'Social-Media-Tools – QR-Codes, UTM & Hashtags | UtilityFlow',
      description:
        'Erstellen Sie UTM-Links, generieren Sie QR-Codes, prüfen Sie Social-Media-Zeichenlimits und formatieren Sie Hashtags und Bios mit sauberen Browser-Tools.',
      keywords: [
        'Social-Media-Tools',
        'QR-Code-Generator',
        'UTM-Builder',
        'Hashtag-Formatierer',
        'Bildunterschriften-Zähler',
      ],
    },
    sampleToolNames: [
      'QR-Code-Generator',
      'UTM-Link-Builder',
      'Social-Media-Zeichenlimit-Prüfer',
      'Unicode-Schrift-Generator',
      'Bio-Zeilenumbruch-Formatierer',
    ],
  },
  pdf: {
    slug: 'pdf-werkzeuge',
    name: 'PDF-Tools',
    shortName: 'PDF-Tools',
    description:
      'Führen Sie PDF-Dokumente zusammen, teilen Sie sie, ordnen Sie sie neu, versehen Sie sie mit Wasserzeichen und konvertieren Sie sie in Ihrem Browser – ohne private Dateien hochzuladen.',
    longDescription:
      'Dokumenten-Workflows, die auf Vertraulichkeit ausgelegt sind. Verarbeiten Sie Verträge, Rechnungen und Lernunterlagen direkt im Client-Speicher mit WebAssembly und Browser-Canvas-APIs statt auf Remote-Dateiservern.',
    intro:
      'Wählen Sie ein Tool aus, wählen Sie Ihre PDF-Datei aus, und das Ergebnis ist innerhalb weniger Augenblicke in Ihrem Browser bereit. Ihre Dokumente verlassen Ihr Gerät nie — sie werden lokal verarbeitet, nicht auf einen Server hochgeladen.',
    faqs: [
      {
        question: 'Sind die PDF-Tools kostenlos?',
        answer: 'Ja, alle sind kostenlos nutzbar, ohne Anmeldung und ohne Konto.',
      },
      {
        question: 'Werden meine PDF-Dateien irgendwo hochgeladen?',
        answer: 'Nein. Ihre Dateien werden direkt in Ihrem Browser verarbeitet, sodass sie Ihr Gerät nie verlassen und niemals auf einem Server gespeichert werden.',
      },
      {
        question: 'Funktionieren die PDF-Tools auf dem Handy?',
        answer: 'Ja. Sie funktionieren in jedem modernen Browser, sodass Sie sie auf Ihrem Handy, Tablet oder Computer nutzen können.',
      },
      {
        question: 'Welches Tool führt mehrere PDF-Dateien zu einer zusammen?',
        answer: 'Verwenden Sie „PDF zusammenfügen“. Wählen Sie die Dateien aus, die Sie zusammenführen möchten, und es fügt sie zu einem einzigen PDF-Dokument zusammen.',
      },
    ],
    seo: {
      title: 'PDF-Tools – Private PDF-Tools im Browser | UtilityFlow',
      description:
        'PDF-Dateien lokal im Browser kostenlos zusammenführen, teilen, drehen und konvertieren – ohne vertrauliche Dokumente auf Server von Drittanbietern hochzuladen.',
      keywords: [
        'PDF-Tools',
        'PDF zusammenführen',
        'PDF teilen',
        'Bilder in PDF',
        'Browser-PDF-Editor',
      ],
    },
    sampleToolNames: [
      'PDF zusammenfügen',
      'PDF aufteilen',
      'Bilder zu PDF',
      'PDF-Seiten drehen',
      'PDF-Metadaten-Editor',
    ],
  },
  seo: {
    slug: 'seo-werkzeuge',
    name: 'SEO-Tools',
    shortName: 'SEO-Tools',
    description:
      'Zeigen Sie SERP-Snippets in der Vorschau an, generieren Sie OpenGraph-Tags, erstellen Sie robots.txt und XML-Sitemaps und prüfen Sie die Keyword-Dichte.',
    longDescription:
      'Technische und On-Page-Utilities zur Suchmaschinenoptimierung für Publisher, Indie-Gründer und SEO-Spezialisten. Validieren Sie Titellängen, verfassen Sie strukturierte Metadaten und erstellen Sie saubere URL-Slugs in Sekunden.',
    intro:
      'Wählen Sie ein Tool aus, geben Sie Ihren Seitentitel, Ihre URL oder Ihren Inhalt ein und prüfen Sie das Ergebnis sofort. Alle Prüfungen laufen in Ihrem Browser, sodass Ihre unveröffentlichten Seiten und Entwürfe privat bleiben.',
    faqs: [
      {
        question: 'Sind die SEO-Tools kostenlos?',
        answer: 'Ja, alle sind kostenlos nutzbar, ohne Anmeldung und ohne Konto.',
      },
      {
        question: 'Verlässt mein Inhalt meinen Browser?',
        answer: 'Nein. Jedes Tool läuft zu 100 % in Ihrem Browser, sodass die Titel, URLs und Inhalte, die Sie eingeben, niemals auf einen Server hochgeladen oder irgendwo gespeichert werden.',
      },
      {
        question: 'Muss ich ein Konto erstellen?',
        answer: 'Nein. Sie können jedes Tool öffnen und sofort loslegen — kein Konto, keine E-Mail und keine Installation.',
      },
      {
        question: 'Welches Tool zeigt eine Vorschau, wie meine Seite in den Suchergebnissen aussehen wird?',
        answer: 'Verwenden Sie die SERP-Snippet-Vorschau. Geben Sie Ihren Titel und Ihre Beschreibung ein, um zu sehen, wie Ihre Seite in den Google-Suchergebnissen erscheinen könnte.',
      },
    ],
    seo: {
      title: 'SEO-Tools – SERP-Vorschau, Meta-Tags & Slugs | UtilityFlow',
      description:
        'Optimieren Sie Seiten mit kostenlosen SEO-Tools: SERP-Vorschau, Meta-Tag-Generatoren, robots.txt-Builder und Keyword-Dichte-Prüfung – direkt im Browser.',
      keywords: [
        'SEO-Tools',
        'Meta-Tag-Generator',
        'SERP-Vorschau',
        'robots.txt-Generator',
        'Slug-Generator',
      ],
    },
    sampleToolNames: [
      'Meta-Tag- & Open-Graph-Generator',
      'SERP-Snippet-Vorschau',
      'URL-Slug- & SEO-Pfad-Optimierer',
      'Robots.txt-Generator',
      'Schema-Markup-(JSON-LD)-Generator',
    ],
  },
  'image-file': {
    slug: 'bild-und-dateiwerkzeuge',
    name: 'Bild- & Datei-Tools',
    shortName: 'Bild & Datei',
    description:
      'Komprimieren Sie Bilder, ändern Sie Abmessungen, konvertieren Sie PNG/JPG/WebP, testen Sie WCAG-Kontraste, scannen Sie QR-Codes, hashen Sie Dateien und erstellen Sie Favicons lokal.',
    longDescription:
      'Schnelle Medien-, Kryptografie- und Datei-Utilities auf Basis von HTML5 Canvas, Web Crypto API und clientseitigen File-APIs. Optimieren Sie Web-Assets für Core Web Vitals, verifizieren Sie Datei-SHA-256-Prüfsummen, extrahieren Sie Bildpaletten und generieren Sie Favicons – ohne Dateien hochzuladen.',
    intro:
      'Wählen Sie unten ein Tool aus, wählen Sie Ihre Datei aus und erhalten Sie Ihr Ergebnis sofort. Ihre Bilder und Dateien verlassen Ihr Gerät nie — alles wird lokal in Ihrem Browser verarbeitet.',
    faqs: [
      {
        question: 'Sind die Bild- und Datei-Tools kostenlos?',
        answer: 'Ja, alle sind kostenlos nutzbar, ohne Anmeldung und ohne Konto.',
      },
      {
        question: 'Werden meine Bilder auf einen Server hochgeladen?',
        answer: 'Nein. Ihre Dateien werden direkt in Ihrem Browser verarbeitet, sodass sie Ihr Gerät nie verlassen und niemals auf einem Server gespeichert werden.',
      },
      {
        question: 'Funktionieren die Tools auf dem Handy?',
        answer: 'Ja. Sie funktionieren in jedem modernen Browser, sodass Sie sie auf Ihrem Handy, Tablet oder Computer nutzen können.',
      },
      {
        question: 'Welches Tool soll ich verwenden, um eine Bilddatei kleiner zu machen?',
        answer: 'Verwenden Sie den Bild-Kompressor. Wählen Sie Ihr Bild aus, und er reduziert die Dateigröße, während das Bild für das Web bereit bleibt.',
      },
    ],
    seo: {
      title: 'Bild- & Datei-Tools – Komprimieren & QR | UtilityFlow',
      description:
        'Bilder lokal komprimieren, skalieren, drehen und zwischen PNG, JPG und WebP konvertieren, Datei-Prüfsummen prüfen, QR-Codes scannen und Favicons erstellen.',
      keywords: [
        'Bild-Tools',
        'Bildkompressor',
        'Bildgrößenänderer',
        'WebP-Konverter',
        'Farbkontrast-Prüfer',
      ],
    },
    sampleToolNames: [
      'Bild-Kompressor',
      'Bildgrößen-Anpasser & Zuschneider',
      'Bildformat-Konverter (PNG / JPG / WebP)',
      'Farbkontrast-Prüfer & Paletten-Extraktor',
      'Kryptografischer Passwort- & Passphrasen-Generator',
    ],
  },
};
