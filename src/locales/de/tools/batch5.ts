import type { ToolLocaleOverride } from '../../types';

/**
 * German overrides — Batch 5: SEO (10) + Image & File (10) tools (20 tools).
 * Source: src/registry/batches/batch6/ + batch7/ (English definitions).
 * Filled by Phase 3 translation. See fr/tools/batch5.ts for the required shape.
 */
export const DE_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'meta-tag-ersteller',
    name: 'Meta-Tag- & Open-Graph-Generator',
    shortDescription:
      'Erstelle HTML-Titel, Meta-Description, Canonical-, Robots-, Open-Graph- und Twitter/X-Card-Tags mit Live-Vorschau der Social-Media-Karte.',
    keywords: [
      'meta tag generator',
      'open graph generator',
      'twitter card generator',
      'html seo head tags',
      'open graph meta tags',
      'meta tags erstellen',
      'meta description generator',
      'html meta tags erstellen',
      'social media meta tags',
    ],
    seo: {
      title: 'Meta-Tag-Generator – Open Graph & Twitter | UtilityFlow',
      description:
        'Erstelle saubere Titel-, Description-, Canonical-, Open-Graph- und Twitter-Card-Tags mit Live-Längenkontrolle und Social-Card-Vorschau – kostenlos im Browser.',
      primaryKeyword: 'meta tag generator',
      secondaryKeywords: [
        'open graph tag generator',
        'meta tags für social media',
        'html head seo erstellen',
        'twitter card meta generator',
      ],
      longTailKeywords: [
        'open graph und twitter card html meta tags kostenlos erstellen',
        'meta titel und description länge mit social vorschau prüfen',
        'fertige seo meta head tags als html herunterladen',
        'meta tags für website mit open graph vorschau erstellen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Erstelle standardkonforme HTML-<head>-Metadaten – <title>, <meta name="description">, Canonical-URL, Indexierungsanweisungen, Open-Graph-Tags (og:*) und Twitter/X-Card-Markup – mit Attribut-Escaping und Live-Vorschau der Social-Media-Karte.',
    instructions: [
      {
        title: 'Seitentitel und Meta-Description eingeben',
        description:
          'Trage den Seitentitel ein (Ziel: 30–60 Zeichen) und die Meta-Description (120–160 Zeichen) und beobachte dabei die Live-Längenanzeigen.',
      },
      {
        title: 'Canonical-URL und Indexierungsanweisungen festlegen',
        description:
          'Gib die vollständige Canonical-URL der Seite ein und wähle, ob Crawler sie indexieren und ihren Links folgen sollen.',
      },
      {
        title: 'Open-Graph-Tags hinzufügen',
        description:
          'Fülle Titel, Description, Typ und Bild-URL für Open Graph aus (1200×630 Pixel empfohlen), damit geteilte Links gut aussehen.',
      },
      {
        title: 'Twitter/X-Card konfigurieren',
        description:
          'Wähle summary oder summary_large_image und prüfe Titel, Description und Bild, die X anzeigen wird.',
      },
      {
        title: 'Live-Vorschau der Social-Media-Karte prüfen',
        description:
          'Sieh dir im Vorschaufenster genau an, wie der Link in einem Social-Media-Feed erscheint, und korrigiere Kürzungen oder fehlende Bilder vor der Veröffentlichung.',
      },
      {
        title: 'HTML-Snippet kopieren oder herunterladen',
        description:
          'Kopiere das escapte HTML in den <head> deiner Seite oder lade meta-tags.html herunter und verwende den Block in deinen Templates wieder.',
      },
    ],
    examples: [
      {
        title: 'Standard-Block mit Open Graph und Canonical für eine Website',
        input: 'Titel: UtilityFlow · Typ: website · Karte: summary_large_image',
        output: '<title>...</title>, <meta name="description" ...>, <link rel="canonical" ...>, og:* und twitter:*',
        explanation: 'Escapet Anführungszeichen und &-Zeichen in Attributwerten korrekt.',
      },
      {
        title: 'Meta-Tags für einen Blogartikel',
        input: 'Titel: SEO-Leitfaden 2026 · Typ: article · Bild: 1200×630',
        output: 'Vollständiger <head>-Block mit og:type article, og:image und twitter:card summary_large_image',
        explanation: 'Der Typ article sagt den Plattformen, dass sie das für Blogbeiträge passende Vorschauformat zeigen sollen.',
      },
    ],
    benefits: [
      'Escapet automatisch die Zeichen &, ", < und > in Tag-Attributen',
      'Fasst SEO-Head-Tags, Open-Graph-Tags und Twitter/X-Cards in einem konsistenten Snippet zusammen',
      'Zeigt vorab, wie geteilte Links in Social-Media-Feeds aussehen',
      'Ermöglicht den Download eines eigenständigen Snippets als meta-tags.html',
    ],
    useCases: [
      'Startseiten, Marketing-Microsites und SaaS-Produktseiten veröffentlichen',
      'Open-Graph-Bildgrößen und Kartentypen über alle Artikel hinweg vereinheitlichen',
      'Index-/Noindex-Anweisungen und Canonical-URLs vor dem Livegang prüfen',
      'Saubere <head>-Templates vom Marketing an Frontend-Entwickler übergeben',
    ],
    faqs: [
      {
        question: 'Brauche ich separate Tags für Open Graph und Twitter/X?',
        answer:
          'X greift bei Bedarf auf Open Graph für Titel und Description zurück, aber ein explizit gesetztes twitter:card (summary_large_image) zusätzlich zu og:* garantiert überall vorhersehbare breite Bildvorschauen.',
      },
      {
        question: 'Wie groß sollte mein og:image sein?',
        answer:
          'Verwende ein Bild mit 1200×630 Pixeln (Seitenverhältnis 1,91:1), das über eine HTTPS-URL erreichbar ist und nicht durch robots.txt blockiert wird.',
      },
      {
        question: 'Hilft <meta name="keywords"> noch beim Google-Ranking?',
        answer:
          'Große Suchmaschinen ignorieren Meta-Keywords wegen früheren Missbrauchs; dieser Generator hält deinen <head> daher sauber – mit wirksamem Titel, Description, Canonical-URL und Social-Tags.',
      },
      {
        question: 'Ist der Meta-Tag-Generator kostenlos?',
        answer:
          'Ja. Er ist komplett kostenlos und läuft vollständig in deinem Browser, sodass Titel, Descriptions und URLs niemals auf einen Server hochgeladen werden.',
      },
      {
        question: 'Muss ich etwas installieren, um den Meta-Tag-Generator zu nutzen?',
        answer:
          'Nein. Er funktioniert in jedem modernen Browser ohne Installation – auf dem Desktop und auf dem Handy.',
      },
      {
        question: 'Wie lang sollte ein Meta-Titel idealerweise sein?',
        answer:
          'Ziele auf 30–60 Zeichen, damit der vollständige Titel in Suchergebnissen und Social-Media-Karten sichtbar bleibt, ohne mit „…“ abgeschnitten zu werden.',
      },
      {
        question: 'Wie lang sollte eine Meta-Description idealerweise sein?',
        answer:
          'Halte sie zwischen 120 und 160 Zeichen, damit die gesamte Zusammenfassung in den Suchergebnissen auf Desktop und Handy sichtbar bleibt.',
      },
      {
        question: 'Wie geht der Meta-Tag-Generator mit Sonderzeichen in Titeln um?',
        answer:
          'Er escapet automatisch &, ", < und > innerhalb von Attributwerten, sodass Anführungszeichen und &-Zeichen dein Seiten-Markup niemals beschädigen.',
      },
      {
        question: 'Was ist eine Canonical-URL und warum fügt der Generator sie hinzu?',
        answer:
          'Eine Canonical-URL sagt Suchmaschinen, welche Version einer Seite das Original ist, wenn ähnliche Seiten existieren – das verhindert Verwirrung durch doppelte Inhalte.',
      },
      {
        question: 'Was ist der Unterschied zwischen Open-Graph- und Twitter-Card-Tags?',
        answer:
          'Open-Graph-Tags steuern die Linkvorschau auf Facebook, LinkedIn und in Messengern, während Twitter-Card-Tags steuern, wie derselbe Link auf X erscheint.',
      },
      {
        question: 'Welchen Twitter-Kartentyp sollte ich im Meta-Tag-Generator wählen?',
        answer:
          'Nutze summary_large_image für bildgeführte Seiten wie Artikel und Produktseiten und summary für reine Textseiten, bei denen ein kleines Vorschaubild reicht.',
      },
      {
        question: 'Kann ich eine Vorschau sehen, wie mein Link beim Teilen aussieht?',
        answer:
          'Ja. Die Live-Vorschau der Social-Media-Karte zeigt Titel, Description und Bild genau so, wie sie in einem Social-Media-Feed erscheinen werden – noch vor der Veröffentlichung.',
      },
      {
        question: 'Lädt der Meta-Tag-Generator meine Seiteninhalte irgendwo hoch?',
        answer:
          'Nein. Alles läuft lokal in deinem Browser, und nichts, was du eingibst, verlässt dein Gerät.',
      },
      {
        question: 'Wie füge ich die erstellten Meta-Tags in meine Website ein?',
        answer:
          'Kopiere das Snippet und füge es in den <head>-Bereich deines Seitentemplates ein oder lade meta-tags.html herunter und verwende den Block auf mehreren Seiten wieder.',
      },
      {
        question: 'Wann sollte ich eine Robots-Noindex-Anweisung mit dem Meta-Tag-Generator verwenden?',
        answer:
          'Nutze noindex nur für Seiten, die niemals in Suchergebnissen erscheinen sollen, etwa Danke-Seiten, interne Suchergebnisse oder Staging-Kopien einer Live-Seite.',
      },
      {
        question: 'Kann ich den Meta-Tag-Generator für einen Blogbeitrag oder eine Produktseite nutzen?',
        answer:
          'Ja. Setze og:type auf article für Blogbeiträge oder product für Shopseiten, damit jede Plattform das passende Vorschauformat anzeigt.',
      },
      {
        question: 'Was passiert, wenn meine og:image-URL falsch ist oder das Bild fehlt?',
        answer:
          'Social-Media-Plattformen zeigen dann kein Bild oder eine defekte Vorschau. Verwende daher immer eine direkte HTTPS-Bild-URL und prüfe die Vorschau vor der Veröffentlichung.',
      },
      {
        question: 'Unterstützt der Meta-Tag-Generator mehrsprachige Seiten?',
        answer:
          'Er erstellt Tags für jeweils eine Seite. Setze og:locale für die Sprache der Seite und erstelle für jede übersetzte Version einen eigenen Tag-Satz.',
      },
      {
        question: 'Kann ich die erstellten Meta-Tags als Datei herunterladen?',
        answer:
          'Ja. Der Download-Button speichert eine eigenständige Datei meta-tags.html mit dem vollständigen escapen Snippet.',
      },
      {
        question: 'Verbessert der Meta-Tag-Generator mein Google-Ranking von allein?',
        answer:
          'Kein Tool garantiert Rankings, aber präzise Titel, Descriptions und Social-Tags verbessern die Klickrate und die Darstellung deiner Seiten.',
      },
    ],
  },
  'serp-snippet-preview': {
    slug: 'suchergebnis-vorschau',
    name: 'SERP-Snippet-Vorschau',
    shortDescription:
      'Simuliere Google-Suchergebnisse für Desktop und Handy mit echter Canvas-Pixelbreitenprüfung des Titels und Hervorhebung passender Keywords.',
    keywords: [
      'serp vorschau tool',
      'google snippet simulator',
      'seo titel pixelbreite prüfen',
      'meta description vorschau',
      'google serp vorschau',
      'suchergebnis vorschau tool',
      'seo snippet checker',
      'google titel prüfen',
      'meta description länge prüfen',
    ],
    seo: {
      title: 'Suchergebnis-Vorschau – Pixelbreite prüfen | UtilityFlow',
      description:
        'Sieh dir dein Google-Suchergebnis-Snippet auf Desktop und Handy an – mit echter Pixelbreitenprüfung des Titels, Keyword-Hervorhebung und Warnung vor Kürzung.',
      primaryKeyword: 'suchergebnis vorschau',
      secondaryKeywords: [
        'google serp simulator',
        'seo titel pixelbreite prüfen',
        'mobile suchergebnis vorschau',
        'desktop serp vorschau tool',
      ],
      longTailKeywords: [
        'google seo titel 580px pixelbreite online prüfen',
        'desktop und mobile suchergebnis kürzung vorschau',
        'keyword hervorhebung in meta description testen',
        'google suchergebnis snippet vor veröffentlichung prüfen',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Prüfe, ob dein SEO-Titel in Googles Anzeigebudget von etwa 580 px passt – mit Live-Berechnung der Schriftmetriken per HTML5 Canvas statt reiner Zeichenzählung – und sieh dir Desktop- und Handy-Suchkarten mit Keyword-Hervorhebung an.',
    instructions: [
      {
        title: 'Titel, Description und URL eingeben',
        description:
          'Gib deinen SEO-Titel, deine Meta-Description, die Seiten-URL sowie optional den Website-Namen oder ein Veröffentlichungsdatum ein.',
      },
      {
        title: 'Pixelbreite messen',
        description:
          'Prüfe die Live-Pixelanzeige neben dem SEO-Titel – breite Buchstaben wie W und M brauchen deutlich mehr horizontale Pixel als l und i.',
      },
      {
        title: 'Desktop-Vorschau prüfen',
        description:
          'Sieh dir die Desktop-Suchkarte an, um Titel, Breadcrumb-URL und Description genau so zu sehen, wie Desktop-Nutzer sie sehen würden.',
      },
      {
        title: 'Zur Handy-Vorschau wechseln',
        description:
          'Wechsle zur Handyansicht, um den kürzeren Kürzungspunkt zu prüfen und sicherzustellen, dass die Kernaussage auch auf kleinen Bildschirmen sichtbar bleibt.',
      },
      {
        title: 'Keyword-Hervorhebung testen',
        description:
          'Gib deine Ziel-Suchanfrage in das Feld für Keywords ein, um zu sehen, welche Wörter Google in deinem Snippet fett hervorheben würde.',
      },
      {
        title: 'Fertige Tags kopieren',
        description:
          'Wenn die Vorschau stimmt, kopiere die einbaufertigen Tags <title> und <meta name="description"> in deine Seite.',
      },
    ],
    examples: [
      {
        title: 'Breite Zeichen führen trotz 60 Zeichen zur Kürzung des Titels',
        input: '60 Zeichen langer Titel voller Großbuchstaben W und M',
        output: 'Warnt bei über 580 px Überlauf auch unter 60 Zeichen, damit du vor dem Ellipsen-Abbruch kürzt.',
        explanation: 'Canvas-Textmetriken nähern die echten Rendering-Breiten von Suchergebnissen an.',
      },
      {
        title: 'Handy-Vorschau zeigt gekürzte Description',
        input: 'Titel: 55 Zeichen · Description: 155 Zeichen · Ansicht: Handy',
        output: 'Handykarte zeigt nur die ersten etwa 120 Zeichen – Kernaussage am Anfang bleibt sichtbar.',
        explanation: 'Die Handyansicht macht sichtbar, warum die wichtigsten Wörter ganz vorne in der Description stehen sollten.',
      },
    ],
    benefits: [
      'Nutzt Canvas-measureText()-Pixelbreiten zusätzlich zur Zeichenzählung',
      'Formatiert Domain und Pfadsegmente automatisch in saubere Breadcrumb-Pfade',
      'Simuliert fette Suchbegriffe in Meta-Descriptions zur Klickraten-Prüfung',
      'Kopiert einbaufertige <title>- und <meta name="description">-Tags mit einem Klick',
    ],
    useCases: [
      'Blogüberschriften und Produkttitel verfeinern, damit sie nicht mitten im Wort mit „…“ abgeschnitten werden',
      'Meta-Descriptions mit höherer Klickrate innerhalb der Handy-Grenze von etwa 120 Zeichen schreiben',
      'Prüfen, wie sich Veröffentlichungsdaten auf die sichtbare Description-Länge auswirken',
      'Landingpage-Snippets bei der redaktionellen Qualitätskontrolle prüfen',
    ],
    faqs: [
      {
        question: 'Warum ist die Pixelbreite wichtiger als eine strikte Zeichenzahl?',
        answer:
          'Suchmaschinen kürzen Titel nach der Container-Pixelbreite (etwa 580–600 px auf dem Desktop), nicht nach einer festen Zeichenzahl. Großbuchstaben und breite Zeichen wie W oder M brauchen fast doppelt so viel Breite wie i oder l.',
      },
      {
        question: 'Kann Google meinen Titel oder meine Meta-Description in Live-Suchergebnissen trotzdem umschreiben?',
        answer:
          'Ja. Google schreibt Snippets manchmal dynamisch um, um sie an bestimmte Suchanfragen oder H1-Überschriften anzupassen – präzise, genaue Titel verringern aber unerwünschte Umschreibungen.',
      },
      {
        question: 'Ruft dieses Tool Live-Rankings von Google ab?',
        answer:
          'Nein. Es ist ein Offline-Simulator für SERP-Snippets, der vollständig in deinem Browser läuft.',
      },
      {
        question: 'Ist die SERP-Snippet-Vorschau kostenlos?',
        answer:
          'Ja. Sie ist komplett kostenlos und läuft vollständig in deinem Browser, sodass nichts, was du eingibst, hochgeladen wird.',
      },
      {
        question: 'Wie lang sollte ein Titel für Google-Suchergebnisse idealerweise sein?',
        answer:
          'Ziele auf unter etwa 580 Pixel auf dem Desktop – das sind je nach Buchstabenbreite meist 50–60 Zeichen.',
      },
      {
        question: 'Wie misst die SERP-Snippet-Vorschau die Pixelbreite?',
        answer:
          'Sie nutzt die Canvas-API measureText() des Browsers, um die echte gerenderte Breite deines Titels in derselben Schriftart zu berechnen, die Suchergebnisse verwenden.',
      },
      {
        question: 'Warum wird mein Titel abgeschnitten, obwohl er unter 60 Zeichen lang ist?',
        answer:
          'Suchmaschinen kürzen nach Pixelbreite, nicht nach Zeichenzahl – breite Buchstaben wie W und M brauchen deutlich mehr Platz als schmale wie i und l.',
      },
      {
        question: 'Wie lang sollte eine Meta-Description für Desktop und Handy idealerweise sein?',
        answer:
          'Der Desktop zeigt etwa 155–160 Zeichen, das Handy bricht bei etwa 120 Zeichen um. Stelle daher die wichtigsten Wörter und Keywords ganz nach vorne.',
      },
      {
        question: 'Kann ich sowohl Desktop- als auch Handy-Suchergebnisse in der Vorschau sehen?',
        answer:
          'Ja. Wechsle zwischen der Desktop- und der Handyansicht, um zu sehen, wie derselbe Titel und dieselbe Description auf jedem Bildschirm aussehen.',
      },
      {
        question: 'Was macht die Keyword-Hervorhebung in der SERP-Snippet-Vorschau?',
        answer:
          'Gib eine Ziel-Suchanfrage ein, und die Vorschau hebt passende Wörter in Titel und Description fett hervor – genau wie Google Suchbegriffe in echten Ergebnissen hervorhebt.',
      },
      {
        question: 'Zeigt die SERP-Snippet-Vorschau mein echtes Google-Ranking?',
        answer:
          'Nein. Es ist ein Offline-Simulator, der zeigt, wie ein Snippet aussehen könnte – keine Live-Rankingdaten von Google.',
      },
      {
        question: 'Lädt die SERP-Snippet-Vorschau meinen Titel oder meine URL irgendwo hoch?',
        answer:
          'Nein. Vorschau und Messung laufen komplett lokal in deinem Browser. Titel, Beschreibung und URL werden nur auf deinem Gerät verarbeitet und niemals an einen Server gesendet.',
      },
      {
        question: 'Wie kopiere ich Titel und Meta-Description nach der Vorschau?',
        answer:
          'Nutze den Kopieren-Button mit einem Klick, um einbaufertige Tags <title> und <meta name="description"> für deine Seite zu erhalten.',
      },
      {
        question: 'Warum schreibt Google meinen Titel in Live-Ergebnissen manchmal um?',
        answer:
          'Google ersetzt den Titel gelegentlich durch deine H1 oder andere Seitentexte, wenn es meint, dass sie besser zu einer Suchanfrage passen – präzise Titel verringern solche Umschreibungen.',
      },
      {
        question: 'Sollte ich meinen Marken- oder Websitenamen in den Titel aufnehmen?',
        answer:
          'Oft ja. Setze ihn nach einem Trennzeichen ans Ende, damit das Hauptkeyword vorne bleibt und die Marke trotzdem in den Ergebnissen erscheint.',
      },
      {
        question: 'Was ist der Unterschied zwischen einem Title-Tag und einer H1-Überschrift?',
        answer:
          'Das Title-Tag erscheint in Suchergebnissen und Browsertabs, während die H1 die sichtbare Überschrift auf der Seite selbst ist.',
      },
      {
        question: 'Kann ich in der SERP-Snippet-Vorschau schnell mehrere Titel testen?',
        answer:
          'Ja. Bearbeite das Titelfeld, und Vorschau, Pixelbreite und Kürzungswarnung aktualisieren sich live beim Tippen.',
      },
      {
        question: 'Berücksichtigt die SERP-Snippet-Vorschau Veröffentlichungsdaten?',
        answer:
          'Ja. Ein hinzugefügtes Datum zeigt, wie es die sichtbare Description verkürzt – wichtig für Nachrichten und Blogbeiträge.',
      },
      {
        question: 'Was soll ich tun, wenn meine Description auf dem Handy abgeschnitten wird?',
        answer:
          'Stelle die Kernaussage und das Zielkeyword ganz an den Anfang der Description, damit auch die gekürzte Handyansicht noch Sinn ergibt.',
      },
      {
        question: 'Ist die Pixelbreitenprüfung in der SERP-Snippet-Vorschau für alle Sprachen genau?',
        answer:
          'Sie nähert das echte Such-Rendering anhand deiner Browser-Schriften an. Am genauesten ist sie für lateinische Schriften; bei anderen Schriftsystemen kann sie abweichen.',
      },
    ],
  },
  'xml-sitemap-generator': {
    slug: 'xml-sitemap-ersteller',
    name: 'XML-Sitemap-Generator',
    shortDescription:
      'Erstelle gültige XML-Dateien nach Sitemaps.org aus URL-Listen – mit Deduplizierung, <lastmod>, <changefreq> und .xml-Download.',
    keywords: [
      'xml sitemap generator',
      'sitemap.xml erstellen',
      'xml sitemap erstellen online',
      'seo sitemap erstellen',
      'sitemap generator kostenlos',
      'xml sitemap creator',
      'sitemap.xml generieren',
      'sitemap builder tool',
      'website sitemap generator',
    ],
    seo: {
      title: 'XML-Sitemap-Generator – Sitemap.xml erstellen | UtilityFlow',
      description:
        'Verwandle eine Liste kanonischer URLs in eine gültige sitemap.xml – mit Deduplizierung, lastmod-Daten, changefreq-Hinweisen und XML-Escaping, im Browser.',
      primaryKeyword: 'xml sitemap generator',
      secondaryKeywords: [
        'sitemap xml erstellen',
        'sitemap.xml kostenlos erstellen',
        'kanonische url sitemap tool',
        'sitemap.xml datei generator',
      ],
      longTailKeywords: [
        'gültige xml sitemap aus url liste offline erstellen',
        'sitemap.xml mit lastmod und changefreq tags erstellen',
        'sonderzeichen in xml sitemap urls escapen',
        'xml sitemap für kleine website kostenlos erstellen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Verwandle jede Liste kanonischer https://-URLs in eine gültige sitemap.xml nach dem Sitemaps-0.9-Schema – mit Filterung ungültiger URLs, automatischer Deduplizierung, XML-Escaping und .xml-Export.',
    instructions: [
      {
        title: 'Kanonische URLs einfügen',
        description:
          'Gib eine vollständige https://- (oder http://-) URL pro Zeile in den Editor ein; fehlerhafte Zeilen werden klar markiert.',
      },
      {
        title: 'Markierte ungültige Zeilen prüfen',
        description:
          'Prüfe die hervorgehobenen Zeilen auf Tippfehler oder fehlende https://-Präfixe und korrigiere sie vor dem Erstellen, da ungültige URLs aus dem XML ausgeschlossen werden.',
      },
      {
        title: 'Optionale Tags konfigurieren',
        description:
          'Lege optional ein <lastmod>-Datum, einen <changefreq>-Hinweis und eine <priority> fest (oder lasse optionale Tags für sauberere Dateien weg).',
      },
      {
        title: 'Deduplizierung prüfen',
        description:
          'Prüfe die angezeigte Duplikatanzahl, damit die fertige Sitemap jede kanonische URL genau einmal enthält.',
      },
      {
        title: 'Erstelltes XML in der Vorschau prüfen',
        description:
          'Sieh dir die XML-Ausgabe an, um zu bestätigen, dass urlset, <loc>-Einträge und optionale <lastmod>-Werte korrekt aussehen.',
      },
      {
        title: 'sitemap.xml kopieren oder herunterladen',
        description:
          'Klicke auf „XML kopieren“ oder „.xml herunterladen“, um die Datei direkt in den Stammordner /public/ deiner Website zu legen.',
      },
    ],
    examples: [
      {
        title: 'Sitemap für eine statische Website auf Cloudflare Pages erstellen',
        input: '5 kanonische URLs · lastmod: 2026-11-12 · Deduplizierung: ein',
        output: 'Gültiges <?xml version="1.0"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">...</urlset>',
        explanation: 'Escapet XML-Entitäten (&, <, >, Anführungszeichen) sauber in jedem <loc>-Element.',
      },
      {
        title: 'Duplikate aus einer exportierten URL-Liste entfernen',
        input: '12 URLs aus einem CMS-Export, darunter 3 doppelte Einträge',
        output: 'Saubere sitemap.xml mit 9 eindeutigen URLs – Duplikate automatisch entfernt.',
        explanation: 'Die Deduplizierung sorgt dafür, dass jede kanonische URL nur einmal in der Sitemap steht.',
      },
    ],
    benefits: [
      'Prüft jede Zeile mit nativer Browser-URL-Analyse, bevor XML erzeugt wird',
      'Escapet & und Sonderzeichen in Query-Strings automatisch innerhalb von <loc>-URLs',
      'Entfernt doppelte URLs automatisch, damit Sitemaps nicht aufgebläht werden',
      'Erlaubt es, <priority> und <changefreq> sauber wegzulassen, wenn gewünscht (Google ignoriert beide)',
    ],
    useCases: [
      'Erste Sitemaps für statische Landingpages oder Dokumentations-Microsites erstellen',
      'Saubere URL-Übergabedateien nach Website-Migrationen vorbereiten',
      'Zusätzliche bild- und nachrichtenfreie Sitemaps für kleine Unternehmenswebsites erstellen',
      'Formatiertes XML direkt für den Einsatz neben robots.txt exportieren',
    ],
    faqs: [
      {
        question: 'Sollte ich nicht-kanonische, weitergeleitete oder Noindex-URLs in eine Sitemap aufnehmen?',
        answer:
          'Nein. Sitemaps sollten nur kanonische URLs enthalten, die HTTP 200 zurückgeben und die Suchmaschinen indexieren sollen.',
      },
      {
        question: 'Nutzt Google <priority> und <changefreq> noch?',
        answer:
          'Google ignoriert die Tags <priority> und <changefreq> und achtet vor allem auf <loc> und genaue <lastmod>-Daten, wenn sie sinnvoll aktualisiert wurden.',
      },
      {
        question: 'Crawlt dieser Generator meine Live-Website automatisch?',
        answer:
          'Nein. Clientseitige Seiten können wegen der CORS-Sicherheit des Browsers keine fremden Websites crawlen; füge deine exportierte Routenliste hier ein, um sofort gültiges XML zu erhalten.',
      },
      {
        question: 'Ist der XML-Sitemap-Generator kostenlos?',
        answer:
          'Ja. Er ist komplett kostenlos und läuft vollständig in deinem Browser, sodass deine URL-Liste niemals auf einen Server hochgeladen wird.',
      },
      {
        question: 'Wie viele URLs kann ich in eine Sitemap aufnehmen?',
        answer:
          'Das Sitemaps-Protokoll erlaubt bis zu 50.000 URLs oder 50 MB unkomprimiert pro Datei. Größere Websites sollten in mehrere Sitemaps oder einen Sitemap-Index aufteilen.',
      },
      {
        question: 'Was ist der Unterschied zwischen einer Sitemap und robots.txt?',
        answer:
          'Eine Sitemap listet die URLs auf, die Suchmaschinen entdecken sollen, während robots.txt Crawler-Regeln enthält, welche Pfade sie besuchen dürfen und welche nicht.',
      },
      {
        question: 'Wohin lade ich die Datei sitemap.xml hoch?',
        answer:
          'Lege sie in den Stammordner deiner Website, zum Beispiel https://example.com/sitemap.xml, damit Crawler sie am Standardort finden.',
      },
      {
        question: 'Muss ich meine Sitemap bei Google einreichen?',
        answer:
          'Es wird empfohlen. Reiche sie in der Google Search Console ein und verweise zusätzlich mit einer Sitemap:-Zeile in robots.txt darauf, damit auch andere Crawler sie finden.',
      },
      {
        question: 'Welche URL-Formate akzeptiert der XML-Sitemap-Generator?',
        answer:
          'Gib eine vollständige https://- oder http://-URL pro Zeile ein, inklusive Domain. Das Tool markiert jede Zeile, die keine gültige URL ist.',
      },
      {
        question: 'Was passiert mit doppelten URLs in meiner Sitemap?',
        answer:
          'Duplikate werden automatisch entfernt, sodass die fertige Sitemap jede kanonische URL genau einmal enthält.',
      },
      {
        question: 'Was passiert mit ungültigen oder fehlerhaften URLs im XML-Sitemap-Generator?',
        answer:
          'Ungültige Zeilen werden klar markiert und aus dem XML ausgeschlossen, sodass ein Tippfehler in einer Zeile niemals die ganze Datei beschädigt.',
      },
      {
        question: 'Wie geht der XML-Sitemap-Generator mit Sonderzeichen in URLs um?',
        answer:
          'Er escapet & und andere Sonderzeichen innerhalb von <loc>-Elementen als XML, damit Query-Strings und kodierte Pfade gültig bleiben.',
      },
      {
        question: 'Sollte ich Bild- oder Video-URLs in eine normale Sitemap aufnehmen?',
        answer:
          'Eine Standard-Sitemap listet nur Seiten-URLs. Bild- und Video-URLs brauchen eigene Sitemap-Erweiterungen, wenn sie separat indexiert werden sollen.',
      },
      {
        question: 'Sollte ich paginierte oder gefilterte URLs in meiner Sitemap aufführen?',
        answer:
          'Nein. Führe nur kanonische, indexierbare Seiten auf und lasse Paginierung, Sortierparameter und interne Suchergebnisseiten weg.',
      },
      {
        question: 'Was ist <lastmod> und sollte ich es in meiner Sitemap setzen?',
        answer:
          'Es gibt das Datum an, an dem eine Seite zuletzt geändert wurde. Setze es nur, wenn das Datum korrekt ist, denn Google nutzt es, um die Aktualität einer Seite zu beurteilen.',
      },
      {
        question: 'Funktioniert der XML-Sitemap-Generator offline?',
        answer:
          'Ja. Er läuft vollständig in deinem Browser ohne Upload, sodass du Sitemaps auch ohne Internetverbindung erstellen kannst, sobald die Seite geladen ist.',
      },
      {
        question: 'Kann ich meine Sitemap nach dem Hinzufügen neuer Seiten neu erstellen?',
        answer:
          'Ja. Füge die aktualisierte URL-Liste ein, lade eine frische sitemap.xml herunter und lade sie erneut in den Stammordner deiner Website hoch.',
      },
      {
        question: 'Was ist eine Sitemap-Indexdatei?',
        answer:
          'Es ist eine Datei, die mehrere Sitemap-Dateien auflistet. Große Websites nutzen sie, um Tausende von URLs über Bereiche oder Sprachen hinweg zu organisieren.',
      },
      {
        question: 'Garantiert eine Sitemap, dass Google meine Seiten indexiert?',
        answer:
          'Nein. Eine Sitemap hilft Suchmaschinen beim Entdecken von URLs, aber die Indexierung hängt weiterhin von Seitenqualität, Links und Crawl-Budget ab.',
      },
      {
        question: 'Kann ich den XML-Sitemap-Generator für eine WordPress- oder Shopify-Website nutzen?',
        answer:
          'Ja. Exportiere oder kopiere deine kanonische URL-Liste von einer beliebigen Plattform, füge sie hier ein, und das Tool erstellt eine Standard-sitemap.xml.',
      },
    ],
  },
  'robots-txt-generator': {
    slug: 'robots-txt-ersteller',
    name: 'Robots.txt-Generator',
    shortDescription:
      'Erstelle gültige robots.txt-Crawler-Regeln, gruppiert nach User-Agent – mit Allow-/Disallow-Pfaden, Crawl-Delay und Sitemap-Anweisungen.',
    keywords: [
      'robots.txt generator',
      'robots txt erstellen',
      'crawler allow disallow erstellen',
      'sitemap anweisung generator',
      'robots txt creator online',
      'robots.txt datei generator',
      'such crawler blockieren',
      'allow disallow robots txt',
      'robots.txt checker erstellen',
    ],
    seo: {
      title: 'Robots.txt-Generator – Regeln für Crawler | UtilityFlow',
      description:
        'Erstelle eine gültige robots.txt mit User-Agent-Gruppen, Allow- und Disallow-Regeln, Crawl-Delay und Sitemap-Links – mit Starter-Vorlagen, kostenlos im Browser.',
      primaryKeyword: 'robots.txt generator',
      secondaryKeywords: [
        'robots txt creator',
        'crawler pfade disallow',
        'wordpress und spa robots.txt',
        'robots.txt datei erstellen',
      ],
      longTailKeywords: [
        'saubere robots.txt für react vite und cloudflare pages erstellen',
        'mehrere sitemap anweisungen zur robots.txt hinzufügen',
        'staging umgebung mit robots.txt vor such crawlern blockieren',
        'robots.txt erstellen um ki crawler zu blockieren',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Erstelle saubere, gruppierte robots.txt-Anweisungen mit Starter-Vorlagen für offene Websites, SaaS-Web-Apps, WordPress oder Staging-Sperrung – mit benutzerdefinierten User-Agent-Zeilen, Allow/Disallow, Crawl-Delay und Sitemap:-Angaben.',
    instructions: [
      {
        title: 'Starter-Vorlage wählen oder Regeln bearbeiten',
        description:
          'Klicke auf „Alles erlauben“, „Standard-Web-App / SaaS“, „WordPress sauber“ oder „Staging (alles blockieren)“, um gängige Regeln zu laden.',
      },
      {
        title: 'User-Agents und Pfade anpassen',
        description:
          'Füge Allow- oder Disallow-Pfade für * oder bestimmte Crawler wie Googlebot, Bingbot oder GPTBot hinzu.',
      },
      {
        title: 'Crawl-Delay festlegen, wo nötig',
        description:
          'Füge einen Crawl-Delay-Wert für Crawler hinzu, die ihn respektieren, etwa Bingbot, um Anfragen auf einem kleinen oder geteilten Server zu verlangsamen.',
      },
      {
        title: 'Sitemap-URLs anhängen',
        description:
          'Gib die vollständige URL deiner XML-Sitemap ein, damit Crawler sie über robots.txt entdecken – füge bei mehreren Sitemaps weitere Zeilen hinzu.',
      },
      {
        title: 'Gruppierte Ausgabe prüfen',
        description:
          'Prüfe, ob jeder User-Agent-Block korrekt gruppiert ist und keine Disallow-Regel versehentlich CSS, JavaScript oder öffentliche Seiten blockiert.',
      },
      {
        title: 'Kopieren, herunterladen und testen',
        description:
          'Kopiere die robots.txt oder lade sie herunter, lege sie in den Stammordner deiner Domain und prüfe sie mit dem robots.txt-Tester in der Google Search Console.',
      },
    ],
    examples: [
      {
        title: 'SaaS-Web-App, die /api/ und /admin/ blockiert',
        input: 'User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/',
        output: 'Gruppierte robots.txt-Datei mit abschließendem Sitemap: https://example.com/sitemap.xml',
        explanation: 'Gruppiert passende User-Agents sauber in einzelnen Blöcken.',
      },
      {
        title: 'Staging-Umgebung komplett vor Crawlern sperren',
        input: 'Vorlage: Staging (alles blockieren) · Sitemap: keine',
        output: 'User-agent: * · Disallow: / – blockiert das Crawlen der gesamten Staging-Domain.',
        explanation: 'Die Staging-Vorlage verhindert, dass unfertige Seiten vor dem Launch indexiert werden.',
      },
    ],
    benefits: [
      'Gruppiert Regeln automatisch nach passenden User-Agent-Blöcken gemäß RFC-9309-Best-Practices',
      'Enthält geprüfte Starter-Vorlagen, damit CSS-/JS-Dateien nicht versehentlich blockiert werden',
      'Unterstützt mehrere Sitemap:-Angaben für Sitemap-Indizes oder lokalisierte Dateien',
      'Der Ein-Klick-Download erzeugt eine sofort einsetzbare robots.txt-Datei',
    ],
    useCases: [
      'Verhindern, dass Crawler Budget für /api/, /admin/ oder interne Such-URLs verschwenden',
      'XML-Sitemap-Standorte im Domain-Stammverzeichnis bekannt machen',
      'Spezielle Regeln für bestimmte Bots wie AdsBot oder KI-Scraper hinzufügen',
      'Staging-Umgebungen vor dem DNS-Launch konfigurieren',
    ],
    faqs: [
      {
        question: 'Hält Disallow: /admin/ in robots.txt eine Seite aus der Google-Suche fern oder schützt sie Geheimnisse?',
        answer:
          'Wichtiger Unterschied: robots.txt stoppt das Crawlen, nicht unbedingt die Indexierung, wenn andere Websites direkt auf die URL verlinken – und robots.txt ist öffentlich lesbar. Nutze Authentifizierung für sensible Routen und <meta name="robots" content="noindex">, um die Indexierung zu verhindern.',
      },
      {
        question: 'Wo muss robots.txt gehostet werden?',
        answer:
          'Sie muss genau im Stammverzeichnis deines Hosts liegen (https://deinedomain.de/robots.txt) und HTTP 200 zurückgeben.',
      },
      {
        question: 'Respektiert Google Crawl-Delay?',
        answer:
          'Googlebot ignoriert Crawl-Delay (nutze bei Bedarf die Einstellungen der Search Console), während Bing und andere Crawler numerische Crawl-Delay-Intervalle weiterhin respektieren.',
      },
      {
        question: 'Ist der Robots.txt-Generator kostenlos?',
        answer:
          'Ja. Er ist komplett kostenlos und läuft vollständig in deinem Browser, sodass deine Website-Regeln nirgendwo hochgeladen werden.',
      },
      {
        question: 'Was ist der Unterschied zwischen robots.txt und einem Meta-Robots-Noindex-Tag?',
        answer:
          'Robots.txt sagt Crawlern, einen Pfad nicht zu besuchen, während ein Noindex-Tag Suchmaschinen sagt, eine gecrawlte Seite nicht in Ergebnissen zu zeigen. Sie lösen unterschiedliche Probleme.',
      },
      {
        question: 'Kann robots.txt KI-Crawler wie GPTBot blockieren?',
        answer:
          'Ja. Füge eine Gruppe User-agent: GPTBot mit Disallow: / hinzu, um diesen Crawler fernzuhalten, und wiederhole das Muster für weitere KI-Bots, die du blockieren willst.',
      },
      {
        question: 'Was bedeutet „User-agent: *“ in robots.txt?',
        answer:
          'Es bedeutet, dass die Regeln dieser Gruppe für jeden Crawler gelten, der deine Website besucht – es sei denn, eine spezifischere User-Agent-Gruppe überschreibt sie.',
      },
      {
        question: 'Was ist der Unterschied zwischen Allow und Disallow in robots.txt?',
        answer:
          'Allow erlaubt das Crawlen eines Pfads, Disallow blockiert ihn. Bei sich überschneidenden Regeln gewinnt die spezifischste passende Regel.',
      },
      {
        question: 'Kann ich mit dem Robots.txt-Generator eine einzelne Seite oder einen Ordner blockieren?',
        answer:
          'Ja. Füge Disallow: /seite/ für eine einzelne Seite oder Disallow: /ordner/ hinzu, um ein ganzes Verzeichnis inklusive aller Inhalte zu blockieren.',
      },
      {
        question: 'Sollte ich meine CSS- und JavaScript-Dateien in robots.txt blockieren?',
        answer:
          'Nein. Suchmaschinen brauchen dein CSS und JavaScript, um Seiten korrekt zu rendern, und eine Blockierung kann Rankings schaden.',
      },
      {
        question: 'Welche Starter-Vorlagen enthält der Robots.txt-Generator?',
        answer:
          'Er enthält „Alles erlauben“, „Standard-Web-App / SaaS“, „WordPress sauber“ und „Staging (alles blockieren)“, sodass du mit einer bewährten Vorlage statt mit einer leeren Datei startest.',
      },
      {
        question: 'Wie füge ich meine Sitemap zu robots.txt hinzu?',
        answer:
          'Füge am Ende der Datei eine Zeile wie Sitemap: https://example.com/sitemap.xml hinzu, damit Crawler deine Sitemap vom Stammverzeichnis aus finden.',
      },
      {
        question: 'Kann ich mehrere Sitemap-Zeilen in einer robots.txt-Datei haben?',
        answer:
          'Ja. Du kannst mehrere Sitemap-URLs auflisten – nützlich für Sitemap-Indizes oder separate Sitemaps pro Sprache oder Bereich.',
      },
      {
        question: 'Lädt der Robots.txt-Generator meine Regeln irgendwo hoch?',
        answer:
          'Nein. Alles läuft lokal in deinem Browser, und die Datei wird auf deinem Gerät erstellt.',
      },
      {
        question: 'Wie teste ich meine robots.txt nach der Veröffentlichung?',
        answer:
          'Lade sie in den Stammordner deiner Domain hoch und prüfe sie dann mit dem robots.txt-Tester in der Google Search Console oder indem du sie als Googlebot abrufst.',
      },
      {
        question: 'Was passiert, wenn ich versehentlich meine gesamte Website in robots.txt blockiere?',
        answer:
          'Suchmaschinen hören auf, deine Seiten zu crawlen. Entferne die Zeile Disallow: /, lade die Datei erneut hoch und bitte in der Search Console um ein erneutes Crawlen.',
      },
      {
        question: 'Verbirgt robots.txt meine Admin-Seiten vor Hackern?',
        answer:
          'Nein. Robots.txt ist öffentlich lesbar, sodass jeder sehen kann, welche Pfade du blockiert hast. Schütze sensible Seiten mit Passwörtern oder Authentifizierung.',
      },
      {
        question: 'Was ist Crawl-Delay und sollte ich es in robots.txt verwenden?',
        answer:
          'Crawl-Delay bittet Crawler, eine bestimmte Anzahl Sekunden zwischen Anfragen zu warten. Googlebot ignoriert ihn, aber Bing und einige andere Crawler respektieren ihn.',
      },
      {
        question: 'Kann ich unterschiedliche robots.txt-Regeln für Googlebot und Bingbot schreiben?',
        answer:
          'Ja. Erstelle für jeden Crawler eine eigene User-Agent-Gruppe mit eigenen Allow- und Disallow-Zeilen.',
      },
      {
        question: 'Wohin lade ich robots.txt bei Cloudflare Pages oder einer statischen Website hoch?',
        answer:
          'Lege die Datei in den Ordner public/ oder in den Stammordner deines Build-Outputs, damit sie unter https://deinedomain.de/robots.txt ausgeliefert wird.',
      },
    ],
  },
  'schema-markup-generator': {
    slug: 'schema-markup-ersteller',
    name: 'Schema-Markup-(JSON-LD)-Generator',
    shortDescription:
      'Erstelle gültige Schema.org-JSON-LD-Skripte für Article, FAQPage, Product, Organization und BreadcrumbList.',
    keywords: [
      'schema markup generator',
      'json ld generator',
      'faq schema generator',
      'structured data erstellen',
      'structured data generator',
      'schema.org json-ld tool',
      'rich snippet schema generator',
      'faqpage schema generator',
      'product schema markup',
    ],
    seo: {
      title: 'Schema-Markup-Generator – JSON-LD für SEO | UtilityFlow',
      description:
        'Erstelle gültiges Schema.org-JSON-LD für Article, FAQPage, Product, Organization und BreadcrumbList – mit HTML-Escaping, Skript-Kopie und .jsonld-Export.',
      primaryKeyword: 'schema markup generator',
      secondaryKeywords: [
        'json-ld generator online',
        'faqpage structured data tool',
        'product schema erstellen',
        'structured data markup tool',
      ],
      longTailKeywords: [
        'gültiges schema.org json-ld script tag kostenlos erstellen',
        'dynamische faqpage und breadcrumb structured data erstellen',
        'json-ld sicher für html script tags escapen',
        'json-ld schema markup für artikel und produktseiten erstellen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Erstelle saubere Schema.org-JSON-LD-Blöcke für Article, FAQPage, Product, Organization und BreadcrumbList – mit dynamischen Zeilen-Editoren, HTML-sicherem Escaping von < innerhalb von Script-Tags und .jsonld-Export.',
    instructions: [
      {
        title: 'Schema.org-Typ wählen',
        description:
          'Wähle Article, FAQPage, Product, Organization oder BreadcrumbList im Umschalter oben.',
      },
      {
        title: 'Entitätseigenschaften ausfüllen',
        description:
          'Gib Überschriften, Frage-Antwort-Paare, Preisangebote, Organisationsdetails oder Breadcrumb-Pfade ein.',
      },
      {
        title: 'Zusätzliche Zeilen für Listen hinzufügen',
        description:
          'Füge weitere Frage-Antwort-Paare für FAQPage oder weitere Pfadelemente für BreadcrumbList hinzu und entferne Zeilen, die du nicht brauchst.',
      },
      {
        title: 'Erstelltes JSON-LD prüfen',
        description:
          'Prüfe die Live-JSON-Ausgabe auf korrekte Feldnamen und Werte und bestätige, dass leere optionale Eigenschaften automatisch weggelassen werden.',
      },
      {
        title: '<script>-Tag kopieren oder .jsonld exportieren',
        description:
          'Kopiere den vollständigen Block <script type="application/ld+json"> in den <head> deiner Seite oder lade die .jsonld-Datei herunter.',
      },
      {
        title: 'Vor der Veröffentlichung validieren',
        description:
          'Füge die Ausgabe in den Rich-Results-Test oder den Schema-Validator ein, um Syntaxfehler zu finden – ungültiges JSON-LD wird von Suchmaschinen ignoriert.',
      },
    ],
    examples: [
      {
        title: 'Dynamische FAQPage-Structured-Data erstellen',
        input: '2 Frage-Antwort-Paare unter dem FAQPage-Schema',
        output: 'Gültiger @context https://schema.org FAQPage-JSON-LD-Script-Block',
        explanation: 'Nutzt sichere JSON-Serialisierung mit \\u003c-Escaping, um ein vorzeitiges </script>-Ende zu verhindern.',
      },
      {
        title: 'Product-Schema mit Preis und Verfügbarkeit',
        input: 'Produktname, Preis: 49,99 €, Währung: EUR, Verfügbarkeit: auf Lager',
        output: 'Gültiger Product-JSON-LD-Block mit offers, price und availability',
        explanation: 'Preis-, Währungs- und Verfügbarkeitsfelder sind die Kernfelder für Shopping-Ergebnisse.',
      },
    ],
    benefits: [
      'Unterstützt 5 der wirkungsvollsten Schema.org-Structured-Data-Typen',
      'Escapet „<“-Zeichen sauber innerhalb von JSON-LD, um HTML-Script-Brüche zu vermeiden',
      'Lässt leere optionale Eigenschaften automatisch weg – für saubere Syntax',
      'Passt gut zum JSON-Formatter & Validator für eigene Erweiterungen',
    ],
    useCases: [
      'Autoren- und Veröffentlichungsmetadaten von Artikeln zu redaktionellen Blog-Templates hinzufügen',
      'Produktpreis, Währung und Lagerverfügbarkeit für Händler-Feeds strukturieren',
      'Websiteweite Markenidentität und Logo-URL per Organization deklarieren',
      'BreadcrumbList-Hierarchien auf Kategorie- und Toolseiten einbetten',
    ],
    faqs: [
      {
        question: 'Wo sollte ich JSON-LD-Structured-Data auf einer Webseite platzieren?',
        answer:
          'Du kannst <script type="application/ld+json"> entweder in <head> oder in <body> platzieren; die saubere Platzierung in <head> ist Standardpraxis.',
      },
      {
        question: 'Warum escapet der Generator „<“ als „\\u003c“ in der JSON-Ausgabe?',
        answer:
          'Wenn die Antwort einer FAQ jemals „</script>“ enthält, beenden Browser den HTML-Script-Block vorzeitig, sofern „<“ nicht als „\\u003c“ escapet wird – was weiterhin zu 100 % gültiges JSON bleibt.',
      },
      {
        question: 'Garantiert Schema-Markup Rich Snippets bei Google?',
        answer:
          'Nein. Gültige Structured Data machen Seiten für erweiterte Suchfunktionen berechtigt, während Suchmaschinen die Anzeigeberechtigung nach Gesamtqualität der Seite und Richtlinien entscheiden.',
      },
      {
        question: 'Ist der Schema-Markup-Generator kostenlos?',
        answer:
          'Ja. Er ist komplett kostenlos und läuft vollständig in deinem Browser, sodass deine Inhalte niemals auf einen Server hochgeladen werden.',
      },
      {
        question: 'Welche Schema.org-Typen unterstützt der Schema-Markup-Generator?',
        answer:
          'Er unterstützt Article, FAQPage, Product, Organization und BreadcrumbList – die häufigsten Anwendungsfälle für Rich Results.',
      },
      {
        question: 'Was ist der Unterschied zwischen JSON-LD und Microdata?',
        answer:
          'JSON-LD ist ein separater <script>-Block, den du in deine Seite einfügst, während Microdata Attribute direkt an deine sichtbaren HTML-Elemente hängt.',
      },
      {
        question: 'Wie füge ich das erstellte JSON-LD in meine Website ein?',
        answer:
          'Kopiere den vollständigen Block <script type="application/ld+json"> und füge ihn in den <head> der passenden Seite ein.',
      },
      {
        question: 'Wie teste ich mein Schema-Markup nach dem Erstellen?',
        answer:
          'Füge die Seiten-URL oder den Code in den Rich-Results-Test oder den Schema.org-Validator ein, um Fehler zu prüfen und berechtigte Erweiterungen zu sehen.',
      },
      {
        question: 'Kann ich mehrere Schema-Typen auf einer Seite kombinieren?',
        answer:
          'Ja. Eine einzelne Seite kann Article-, BreadcrumbList- und FAQPage-Markup zusammen als separate JSON-LD-Blöcke tragen.',
      },
      {
        question: 'Was ist FAQPage-Schema und wann sollte ich es verwenden?',
        answer:
          'Nutze es auf Seiten, die eine sichtbare Liste von Fragen und Antworten zeigen, etwa Hilfeseiten, damit Suchmaschinen sie als ausklappbare Ergebnisse anzeigen können.',
      },
      {
        question: 'Welche Product-Schema-Felder unterstützt der Generator?',
        answer:
          'Er deckt Produktname, Preis, Währung und Verfügbarkeit ab – die Kernfelder, die Suchmaschinen für Shopping-Ergebnisse nutzen.',
      },
      {
        question: 'Wofür wird BreadcrumbList-Schema verwendet?',
        answer:
          'Es beschreibt die Navigationshierarchie einer Seite, etwa Startseite > Anleitungen > Thema, damit Suchmaschinen Breadcrumb-Pfade in Ergebnissen zeigen können.',
      },
      {
        question: 'Wofür wird Organization-Schema verwendet?',
        answer:
          'Es deklariert deine Markenidentität inklusive Name, Logo und offizieller Website, damit Suchmaschinen ein konsistentes Knowledge Panel zeigen können.',
      },
      {
        question: 'Lädt der Schema-Markup-Generator meine Inhalte irgendwo hoch?',
        answer:
          'Nein. Sämtliches Markup wird lokal in deinem Browser erstellt, und nichts, was du eingibst, verlässt dein Gerät.',
      },
      {
        question: 'Kann ich das Schema als .jsonld-Datei exportieren?',
        answer:
          'Ja. Der Export-Button lädt eine eigenständige .jsonld-Datei herunter, die du speichern, versionieren oder einem Entwickler übergeben kannst.',
      },
      {
        question: 'Was passiert, wenn mein JSON-LD einen Syntaxfehler hat?',
        answer:
          'Der gesamte Block kann von Suchmaschinen ignoriert werden. Validiere die Ausgabe daher immer vor der Veröffentlichung mit dem Rich-Results-Test.',
      },
      {
        question: 'Kann ich den Schema-Markup-Generator für eine Rezept- oder Veranstaltungsseite nutzen?',
        answer:
          'Der Generator deckt nur fünf Typen ab. Rezept- und Veranstaltungsseiten brauchen handgeschriebenes JSON-LD, das du mit denselben Tools validieren kannst.',
      },
      {
        question: 'Sollten FAQ-Antworten im Schema mit dem sichtbaren Seitentext übereinstimmen?',
        answer:
          'Ja. Google verlangt, dass die Structured Data mit Inhalten übereinstimmen, die Nutzer auf der Seite tatsächlich sehen können, sonst wird das Markup möglicherweise ignoriert.',
      },
      {
        question: 'Kann ich das erstellte JSON-LD von Hand bearbeiten?',
        answer:
          'Ja. Es ist Standard-JSON, sodass du Felder in einem beliebigen Editor hinzufügen oder ändern und das Ergebnis vor der Veröffentlichung erneut validieren kannst.',
      },
      {
        question: 'Funktioniert der Schema-Markup-Generator offline?',
        answer:
          'Ja. Er läuft vollständig in deinem Browser ohne Upload, sodass du Schema-Markup auch ohne Internetverbindung erstellen kannst, sobald die Seite geladen ist.',
      },
    ],
  },
  'url-slug-generator': {
    slug: 'url-slug-ersteller',
    name: 'URL-Slug- & SEO-Pfad-Optimierer',
    shortDescription:
      'Verwandle Artikeltitel in saubere, akzenttransliterierte SEO-URL-Slugs im Stapel – mit Stoppwort-Filterung.',
    keywords: [
      'url slug generator',
      'seo slug erstellen',
      'sauberen permalink erstellen',
      'slug konverter stapel',
      'seo freundliche url erstellen',
      'blog titel zu slug',
      'permalink slug erstellen',
      'stoppwörter aus urls entfernen',
      'akzente zu ascii slug',
    ],
    seo: {
      title: 'URL-Slug-Generator – SEO-Permalinks erstellen | UtilityFlow',
      description:
        'Verwandle Artikeltitel stapelweise in kleingeschriebene SEO-Slugs – mit Akzent-Transliteration, Stoppwort-Entfernung und Kürzung an Wortgrenzen, im Browser.',
      primaryKeyword: 'url slug generator',
      secondaryKeywords: [
        'seo freundliche url erstellen',
        'titel zu slug stapelweise',
        'slug mit stoppwörtern bereinigen',
        'permalink slug erstellen',
      ],
      longTailKeywords: [
        'blogtitel stapelweise in saubere seo url slugs umwandeln',
        'akzentzeichen in ascii url slugs transliterieren',
        'lange url slugs an sauberen wortgrenzen kürzen',
        'blogtitel zu seo freundlichen url slugs umwandeln',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Standardisiere lesbare Permalinks mit Bindestrichen für einzelne Beiträge oder ganze Redaktionskalender. Transliteriert Umlaute und Akzente sauber (Café → cafe), entfernt optional Füll-Stoppwörter, erzwingt eine saubere Maximallänge ohne Worttrennung mitten im Wort und zeigt vollständige URLs in der Vorschau.',
    instructions: [
      {
        title: 'Überschriften oder Seitennamen eingeben',
        description:
          'Füge einen oder mehrere Titel (einen pro Zeile) in das Textfeld „Seitenüberschriften“ ein.',
      },
      {
        title: 'Slug-Formatierungsregeln konfigurieren',
        description:
          'Gib deine Basis-Domain ein, wähle Bindestrich (-) oder Unterstrich (_), lege die maximale Slug-Länge fest und schalte Stoppwort- oder Trailing-Slash-Optionen um.',
      },
      {
        title: 'Erstellte Slugs in der Vorschau prüfen',
        description:
          'Prüfe in der Ergebnistabelle Akzent-Transliteration, Stoppwort-Entfernung und die Stellen, an denen lange Slugs an Wortgrenzen gekürzt wurden.',
      },
      {
        title: 'Länge oder Stoppwort-Einstellungen anpassen',
        description:
          'Wenn ein Slug seine Bedeutung verliert oder unglücklich gekürzt wird, erhöhe die maximale Slug-Länge oder schalte die Stoppwort-Entfernung aus und erstelle ihn neu.',
      },
      {
        title: 'Einzelne Slugs oder Stapel-Listen kopieren',
        description:
          'Kopiere einzelne Slugs aus der Tabelle oder exportiere alle Slugs oder vollständigen URLs mit einem Klick.',
      },
      {
        title: 'Einen Live-Slug niemals ohne Weiterleitung umbenennen',
        description:
          'Wenn du den Slug einer bereits indexierten Seite änderst, füge eine 301-Weiterleitung von der alten URL hinzu, damit Backlinks und Rankings auf die neue URL übertragen werden.',
      },
    ],
    examples: [
      {
        title: 'Stoppwörter und Akzente aus einer Überschrift entfernen',
        input: '10 beste Café- & Produktivitätstools im Jahr 2026',
        output: '10-beste-cafe-und-produktivitaetstools-2026',
        explanation: 'Transliteriert é → e, erweitert & → und, entfernt „im“ und verbindet kleingeschriebene Tokens mit Bindestrichen.',
      },
      {
        title: 'Redaktionskalender mit 20 Titeln stapelweise umwandeln',
        input: '20 Blogtitel, einer pro Zeile · Maximale Länge: 60 Zeichen',
        output: 'Tabelle mit 20 sauberen Slugs – jeder an Wortgrenzen gekürzt, ohne mitten im Wort zu trennen.',
        explanation: 'Die Stapelverarbeitung slugt einen ganzen Redaktionskalender in einem Durchgang.',
      },
    ],
    benefits: [
      'Verarbeitet Dutzende Titel eines Redaktionskalenders gleichzeitig im Stapel',
      'Kürzt zu lange Slugs an Bindestrich-/Wortgrenzen statt mitten im Wort',
      'Bewahrt die Kernaussage, indem kurze Slugs auch bei aktivierter Stoppwort-Entfernung intakt bleiben',
      'Folgt den Google-Empfehlungen für URL-Strukturen (UTF-8-ASCII-Bindestrich statt Unterstrich)',
    ],
    useCases: [
      'Saubere URL-Strukturen vor dem Launch von Blogkategorien oder CMS-Sammlungen planen',
      'Akzentuierte internationale Produkttitel in ASCII-sichere Slugs bereinigen',
      'Übermäßig lange CMS-Permalinks auf prägnante Pfade mit 4–6 Wörtern kürzen',
      'Kanonische Ziellisten für den XML-Sitemap-Generator vorbereiten',
    ],
    faqs: [
      {
        question: 'Sollten SEO-URL-Slugs Bindestriche (-) oder Unterstriche (_) verwenden?',
        answer:
          'Google empfiehlt Bindestriche (-) als Worttrennzeichen in URLs, weil Suchparser Bindestriche als Leerzeichen behandeln, während Unterstriche benachbarte Wörter miteinander verbinden.',
      },
      {
        question: 'Schadet das Entfernen von Stoppwörtern der Lesbarkeit?',
        answer:
          'Das Entfernen kurzer Füllwörter wie „a“, „the“ oder „of“ macht sehr lange Blog-Slugs prägnanter. Behalte Stoppwörter, wenn ihre Entfernung die Kernaussage verändert (z. B. bei „how to“).',
      },
      {
        question: 'Sollte ich Slugs bereits indexierter Live-URLs ändern?',
        answer:
          'Nur wenn du permanente 301-Weiterleitungen vom alten Slug zum neuen Slug einrichtest (mit unserem Canonical- & 301-Weiterleitungs-Generator), damit Backlinks und Rankings sauber übertragen werden.',
      },
      {
        question: 'Ist der URL-Slug-Generator kostenlos?',
        answer:
          'Ja. Er ist komplett kostenlos, ohne Anmeldung und ohne Begrenzung, wie viele Überschriften du in einer Sitzung umwandelst.',
      },
      {
        question: 'Kann ich Slugs für viele Überschriften auf einmal erstellen?',
        answer:
          'Ja. Füge eine Überschrift pro Zeile ein, und das Tool wandelt den ganzen Stapel in einer einzigen Tabelle um – so slugst du einen kompletten Redaktionskalender auf einmal.',
      },
      {
        question: 'Wie werden akzentuierte Zeichen in Slugs behandelt?',
        answer:
          'Akzente werden in einfaches ASCII transliteriert – é wird zu e, ü zu u, ñ zu n –, sodass URLs lesbar und in Browsern und auf Servern sicher bleiben.',
      },
      {
        question: 'Was passiert mit Symbolen wie & und @ in einem Slug?',
        answer:
          'Das &-Zeichen wird zu „and“ erweitert, die meisten anderen Satzzeichen werden entfernt, weil Symbole in URLs Links beschädigen oder beim Teilen unordentlich aussehen können.',
      },
      {
        question: 'Was sind Stoppwörter und warum sollte ich sie entfernen?',
        answer:
          'Stoppwörter sind kurze Füllwörter wie „a“, „the“, „of“ und „in“. Ihre Entfernung verkürzt lange Blog-Slugs, ohne die Kernaussage zu verändern.',
      },
      {
        question: 'Kann ich Stoppwörter in meinen Slugs behalten?',
        answer:
          'Ja. Schalte den Schalter für die Stoppwort-Entfernung aus, und der Generator behält jedes Wort aus deiner Überschrift, einschließlich kurzer Füllwörter.',
      },
      {
        question: 'Wie lang sollte ein SEO-Slug idealerweise sein?',
        answer:
          'Ziele auf 3 bis 6 bedeutungsvolle Wörter. Nutze die Einstellung für die maximale Slug-Länge, um Slugs kurz zu halten – das Tool kürzt an Wortgrenzen, sodass Wörter niemals mitten im Wort getrennt werden.',
      },
      {
        question: 'Sollten URL-Slugs kleingeschrieben sein?',
        answer:
          'Ja. Kleingeschriebene Slugs vermeiden Probleme mit doppelten Inhalten, weil manche Server /Blog-Post und /blog-post als unterschiedliche Seiten behandeln.',
      },
      {
        question: 'Kann ich statt Bindestrichen Unterstriche in Slugs verwenden?',
        answer:
          'Du kannst in den Einstellungen Unterstriche wählen, aber Bindestriche werden empfohlen, weil Suchmaschinen Bindestriche als Worttrennzeichen und Unterstriche als Verbinder behandeln.',
      },
      {
        question: 'Werden meine Überschriften irgendwo hochgeladen?',
        answer:
          'Nein. Der URL-Slug-Generator läuft vollständig in deinem Browser, sodass deine Überschriften dein Gerät niemals verlassen.',
      },
      {
        question: 'Wie sehe ich die vollständige URL mit meiner Domain in der Vorschau?',
        answer:
          'Gib deine Domain im Feld „Basis-Domain“ ein, und die Ergebnistabelle zeigt jeden Slug als vollständige URL, die du kopieren kannst.',
      },
      {
        question: 'Sollten meine Slugs mit einem abschließenden Schrägstrich enden?',
        answer:
          'Das ist optional, aber bleibe konsistent: Nutze den Trailing-Slash-Schalter, um den URL-Stil deiner Website zu übernehmen, damit du keine doppelten Versionen erzeugst.',
      },
      {
        question: 'Kann ich dieses Tool für Produkt- und Kategorieseiten nutzen?',
        answer:
          'Ja. Es funktioniert für jeden Seitennamen – Produkttitel, Kategorienamen, Landingpages und Dokumentationsüberschriften werden alle gleich umgewandelt.',
      },
      {
        question: 'Warum wurde mein Slug kürzer als die von mir gesetzte Maximallänge?',
        answer:
          'Das Tool kürzt am nächsten Bindestrich vor dem Limit, statt mitten im Wort zu trennen, sodass ein Slug einige Zeichen kürzer als das Maximum enden kann.',
      },
      {
        question: 'Was passiert mit Überschriften in nicht-lateinischen Schriften?',
        answer:
          'Nur lateinische Akzente werden transliteriert; Zeichen anderer Schriften werden entfernt, sodass eine Überschrift in einer anderen Schrift einen sehr kurzen Slug ergeben kann. Füge für das beste Ergebnis eine lateinische Version der Schlüsselwörter hinzu.',
      },
      {
        question: 'Kann ich alle meine Slugs auf einmal exportieren?',
        answer:
          'Ja. Nutze die Stapel-Kopieren-Buttons, um jeden Slug oder jede vollständige URL mit einem Klick zu kopieren, statt sie einzeln zu kopieren.',
      },
      {
        question: 'Was ist der Unterschied zwischen einem Slug und einem Permalink?',
        answer:
          'Der Slug ist der lesbare letzte Teil einer URL, etwa „beste-cafe-tools“, während der Permalink die vollständige URL inklusive Domain und Ordner ist.',
      },
    ],
  },
  'keyword-density-checker': {
    slug: 'keyword-dichte-pruefer',
    name: 'Keyword-Dichte- & Content-Analysator',
    shortDescription:
      'Prüfe Wortanzahl, Ziel-Keyword-Dichte, Lesezeit und die Häufigkeit der wichtigsten 1-, 2- und 3-Wort-Phrasen lokal.',
    keywords: [
      'keyword dichte prüfen',
      'seo content analysator',
      'n-gramm häufigkeit analysator',
      'phrasen wiederholung audit',
      'keyword dichte online prüfen',
      'content keyword häufigkeit tool',
      'seo text analysator kostenlos',
      'ziel keyword dichte rechner',
      'bigramm trigramm analysator',
    ],
    seo: {
      title: 'Keyword-Dichte-Prüfer – Content-Audit online | UtilityFlow',
      description:
        'Füge einen Artikeltentwurf oder HTML ein, um Wortanzahl, Lesezeit, Ziel-Keyword-Dichte und die häufigsten 1-, 2- und 3-Wort-Phrasen zu prüfen – im Browser.',
      primaryKeyword: 'keyword dichte prüfen',
      secondaryKeywords: [
        'seo text häufigkeit analysator',
        '2 wort 3 wort n-gramm zähler',
        'keyword wiederholung online prüfen',
        'ziel keyword dichte rechner',
      ],
      longTailKeywords: [
        'eingefügten html content auf keyword dichte analysieren ohne upload',
        'übermäßig genutzte 2 wort und 3 wort phrasen im blogentwurf finden',
        'ziel keyword häufigkeit sauber im browser prüfen',
        'keyword dichte eines blogentwurfs online prüfen',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Untersuche Content-Entwürfe oder eingefügtes HTML auf Wortschatztiefe, Lesezeit, exakte Treffer der Zielphrase und die häufigsten 1-Wort-, 2-Wort- und 3-Wort-N-Gramme – entwickelt, um versehentliche Überwiederholung zu erkennen, statt veraltete Keyword-Quoten zu jagen.',
    instructions: [
      {
        title: 'Artikeltentwurf oder HTML einfügen',
        description:
          'Füge reinen Text oder rohes HTML ein (lasse „HTML-Tags entfernen“ aktiviert, um Markup-Tags und Script-/Style-Blöcke zu ignorieren).',
      },
      {
        title: 'Zielphrase und N-Gramm-Größe eingeben',
        description:
          'Gib optional eine Ziel-Keyword/-Phrase an und wechsle zwischen 1-Wort-, 2-Wort- und 3-Wort-Phrasenanalyse.',
      },
      {
        title: 'Häufigkeitstabelle prüfen',
        description:
          'Scanne die häufigsten Begriffe und ihre Anteile (%), um den thematischen Fokus zu bestätigen und unnatürliche Phrasenwiederholung zu kürzen.',
      },
      {
        title: 'Wortanzahl, Lesezeit und Wortschatz prüfen',
        description:
          'Nutze Gesamtwörter, Anteil einzigartiger Wörter und Lesezeit, um zu beurteilen, ob der Entwurf zu dünn, zu lang oder zu repetitiv ist.',
      },
      {
        title: 'Übermäßig genutzte Phrasen natürlich umschreiben',
        description:
          'Wenn dieselbe 2- oder 3-Wort-Phrase die Tabelle dominiert, variiere sie mit Synonymen und Pronomen, statt dein Themenkeyword ganz zu entfernen.',
      },
      {
        title: 'Ungewöhnliche Zählungen vor dem Vertrauen korrigieren',
        description:
          'Wenn die Zahlen falsch wirken, stelle sicher, dass „HTML-Tags entfernen“ aktiviert ist und Navigationsmenüs, Codeblöcke oder Fußzeilen nicht mit dem Text eingefügt wurden.',
      },
    ],
    examples: [
      {
        title: 'Unbeabsichtigte Phrasenwiederholung in einem 500-Wörter-Entwurf erkennen',
        input: 'Artikeltentwurf + Ziel: „technisches SEO“ + 2-Wort-Phrasen',
        output: 'Rangliste der Top-Bigramme („technisches SEO“, „Meta-Descriptions“, „Canonical-Tags“) mit Anteil in %.',
        explanation: 'Hebt sowohl die Ausrichtung auf das Hauptthema als auch repetitive Formulierungen hervor, die du natürlich variieren kannst.',
      },
      {
        title: 'Lesezeit und Wortschatzvielfalt eines langen Leitfadens prüfen',
        input: 'Leitfaden mit 2.400 Wörtern, eingefügt als reiner Text',
        output: 'Wortanzahl, geschätzte Lesezeit und Anteil einzigartiger Wörter – plus Top-3-Wort-Phrasen.',
        explanation: 'Zeigt auf einen Blick, ob ein Text zu dünn, zu lang oder zu repetitiv für seine Zielgruppe ist.',
      },
    ],
    benefits: [
      'Analysiert Mehrwort-Phrasen (Bigramme und Trigramme), nicht nur einzelne Wörter',
      'Entfernt sicher <script>-, <style>- und HTML-Tags vor der Zählung',
      'Enthält ehrliche Hinweise, die vor mechanischem Keyword-Stuffing warnen',
      'Hält unveröffentlichte Entwürfe und Kundenbriefings strikt im Browser-Speicher',
    ],
    useCases: [
      'Langform-Leitfäden bearbeiten, damit Hauptthemen klar erscheinen, ohne unnatürliches Stuffing',
      'Entwürfe auf thematische Wortschatzbalance prüfen – ohne Konkurrenzdaten',
      'Landingpage-Texte prüfen, die sauber aus exportiertem HTML herausgelöst wurden',
      'Durchschnittliche Lesezeit gemeinsam mit Wortzähler und Lesbarkeitsprüfer checken',
    ],
    faqs: [
      {
        question: 'Gibt es einen idealen Keyword-Dichte-Prozentsatz für Google?',
        answer:
          'Nein. Google erklärt ausdrücklich, dass es keinen festen Keyword-Dichte-Schwellenwert gibt. Schreibe natürlich für Leser und nutze Dichte-Audits nur, um Themenabdeckung zu prüfen und unnatürliche Wiederholung zu vermeiden.',
      },
      {
        question: 'Wie geht „HTML-Tags entfernen“ mit <script>- und <style>-Elementen um?',
        answer:
          'Es entfernt ganze <script>- und <style>-Blöcke, bevor es die übrigen HTML-Tags streift, sodass JavaScript- oder CSS-Tokens die Wortstatistiken niemals verfälschen.',
      },
      {
        question: 'Kann ich hier eine Live-Konkurrenz-URL analysieren, indem ich eine Domain eintippe?',
        answer:
          'Nein. Füge den Text oder den HTML-Quelltext direkt ein – Browser-Apps können wegen fehlender Server-Proxys keine Websites Dritter über Origins hinweg scrapen.',
      },
      {
        question: 'Ist der Keyword-Dichte-Prüfer kostenlos?',
        answer:
          'Ja. Er ist komplett kostenlos, ohne Anmeldung, und du kannst so viele Entwürfe analysieren, wie du willst.',
      },
      {
        question: 'Was genau ist Keyword-Dichte?',
        answer:
          'Keyword-Dichte ist, wie oft ein Wort oder eine Phrase als Prozentsatz der Gesamtwörter in einem Text vorkommt. Eine Phrase, die in 500 Wörtern 5-mal vorkommt, hat eine Dichte von 1 %.',
      },
      {
        question: 'Was gilt als Keyword-Stuffing?',
        answer:
          'Keyword-Stuffing ist das unnatürlich häufige Wiederholen einer Phrase nur für ein besseres Ranking. Es liest sich schlecht für Besucher und kann Rankings schaden – nutze dieses Tool also, um Wiederholung zu erkennen, nicht um eine Zielzahl zu treffen.',
      },
      {
        question: 'Was sind N-Gramme und warum sollte ich 2- und 3-Wort-Phrasen prüfen?',
        answer:
          'N-Gramme sind Folgen von n Wörtern – Bigramme sind 2-Wort-Phrasen, Trigramme 3-Wort-Phrasen. Ihre Prüfung zeigt wiederholte Phrasen, die reine Einzelwortzählungen komplett übersehen.',
      },
      {
        question: 'Wie viele Wörter brauche ich für eine aussagekräftige Dichteprüfung?',
        answer:
          'Kurze Texte erzeugen verrauschte Prozentsätze. Ziele auf mindestens 300 Wörter für stabile Ergebnisse. Sehr kurze Ausschnitte können noch Rohzählungen zeigen, aber behandle die Prozentsätze mit Vorsicht.',
      },
      {
        question: 'Zählt das Tool Wörter in Überschriften und Listen?',
        answer:
          'Ja. Der gesamte sichtbare Text, den du einfügst, wird gezählt, einschließlich Überschriften, Aufzählungslisten und Bildunterschriften, weil Suchmaschinen diese Inhalte ebenfalls sehen.',
      },
      {
        question: 'Warum zeigt meine Zielphrase 0 % an?',
        answer:
          'Prüfe die genaue Schreibweise und Wortstellung – Plural, Bindestrich und Wortreihenfolge müssen übereinstimmen. Stelle außerdem sicher, dass „HTML-Tags entfernen“ aktiviert ist, wenn du HTML eingefügt hast.',
      },
      {
        question: 'Kann ich die Dichte für mehrere Keywords gleichzeitig prüfen?',
        answer:
          'Jeder Durchlauf verfolgt eine Zielphrase. Um ein weiteres Keyword zu prüfen, ändere die Zielphrase und führe die Analyse mit demselben Text erneut aus.',
      },
      {
        question: 'Zählt der Prüfer Stoppwörter wie „the“ und „and“?',
        answer:
          'Ja, sie erscheinen in der 1-Wort-Häufigkeitstabelle. Konzentriere dich aber auf thematische Wörter und Phrasen – Stoppwörter sind in jedem Text natürlicherweise häufig und sagen wenig über SEO aus.',
      },
      {
        question: 'Wird mein Entwurf irgendwo hochgeladen?',
        answer:
          'Nein. Der Keyword-Dichte-Prüfer läuft vollständig in deinem Browser, sodass unveröffentlichte Entwürfe und Kundentexte dein Gerät niemals verlassen.',
      },
      {
        question: 'Was ist eine gute Lesezeit für einen Blogbeitrag?',
        answer:
          'Das hängt vom Thema ab, aber das Tool zeigt die Lesezeit, damit du beurteilen kannst, ob ein Beitrag den Lesererwartungen entspricht – ein kurzer Leitfaden kann 3 Minuten dauern, ein ausführliches Tutorial 10 oder mehr.',
      },
      {
        question: 'Kann ich HTML aus meinem CMS einfügen?',
        answer:
          'Ja. Füge das rohe HTML ein und lasse „HTML-Tags entfernen“ aktiviert, damit Tags, Skripte und Styles vor der Wortzählung entfernt werden.',
      },
      {
        question: 'Funktioniert der Prüfer mit nicht-englischem Text?',
        answer:
          'Ja. Die Wortzählung funktioniert für jede Sprache, die Wörter mit Leerzeichen trennt, und die N-Gramm-Tabellen listen die häufigsten Phrasen dieser Sprache auf.',
      },
      {
        question: 'Wie senke ich die Dichte, ohne mein Thema zu entfernen?',
        answer:
          'Nutze Synonyme, Pronomen und abwechslungsreiche Formulierungen, statt das exakte Keyword ständig zu wiederholen. Das Thema bleibt klar, während der Text natürlich liest.',
      },
      {
        question: 'Was bedeutet Wortschatzvielfalt?',
        answer:
          'Es ist der Anteil einzigartiger Wörter im Vergleich zu den Gesamtwörtern. Ein höherer Anteil bedeutet meist reichhaltigeres, abwechslungsreicheres Schreiben; ein sehr niedriger Anteil kann auf repetitiven Text hindeuten.',
      },
      {
        question: 'Kann ich ein PDF- oder Word-Dokument analysieren?',
        answer:
          'Das Tool akzeptiert eingefügten Text. Kopiere also den Text aus deiner PDF- oder Word-Datei heraus und füge ihn ein – Formatierung ist für eine Dichteprüfung nicht nötig.',
      },
      {
        question: 'Warum ändern sich Prozentsätze, wenn ich die N-Gramm-Größe wechsle?',
        answer:
          'Jede N-Gramm-Größe hat ihre eigene Gesamtzahl: Ein 500-Wörter-Text hat 500 Einzelwörter, aber nur 499 Zwei-Wort-Phrasen, sodass dieselbe Phrasenzahl einen leicht anderen Prozentsatz ergibt.',
      },
    ],
  },
  'canonical-hreflang-generator': {
    slug: 'canonical-hreflang-ersteller',
    name: 'Canonical-, Hreflang- & 301-Weiterleitungs-Generator',
    shortDescription:
      'Erstelle HTML-/XML-Hreflang- & Canonical-Tags oder 301-Weiterleitungen für Cloudflare Pages _redirects, Apache und Nginx.',
    keywords: [
      'hreflang generator',
      'canonical tag erstellen',
      '301 weiterleitung generator',
      'cloudflare _redirects erstellen',
      'canonical url generator',
      'hreflang tag generator',
      'mehrsprachige seo tags',
      '301 redirect regeln generator',
      'apache htaccess weiterleitung',
    ],
    seo: {
      title: 'Canonical & Hreflang – 301-Weiterleitungen | UtilityFlow',
      description:
        'Erstelle Hreflang- und Canonical-Tags für mehrsprachige Seiten plus 301-Weiterleitungsregeln für Cloudflare Pages, Apache und Nginx – kopierfertig zum Einsatz.',
      primaryKeyword: 'canonical hreflang',
      secondaryKeywords: [
        'canonical link tag generator',
        '301 weiterleitung config erstellen',
        'cloudflare pages redirects generator',
        'canonical url generator',
      ],
      longTailKeywords: [
        'hreflang html tags und xml sitemap xhtml links erstellen',
        'alte url liste in cloudflare pages _redirects 301 regeln umwandeln',
        'apache htaccess und nginx 301 weiterleitungen online erstellen',
        'x-default hreflang tag für internationale seiten erstellen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Erledige zwei wichtige technische SEO-Migrationen an einem Ort: Erstelle mehrregionale Hreflang- + Canonical-Annotationen (sowohl für HTML-<head> als auch für XML-Sitemaps) oder wandle URL-Mapping-Listen in sofort einsetzbare 301-Weiterleitungs-Configs für Cloudflare Pages, Apache und Nginx um.',
    instructions: [
      {
        title: 'Hreflang oder 301-Weiterleitungen wählen',
        description:
          'Wähle „Canonical- & Hreflang-Tags“ für internationales SEO oder „301-Weiterleitungs-Regel-Generator“ für URL-Migrationen.',
      },
      {
        title: 'Sprachregionen oder URL-Migrationspaare eingeben',
        description:
          'Füge ISO-Sprach-Regionscodes (en-US, en-GB, x-default) und URLs hinzu oder füge Alt-zu-Neu-Pfadpaare ein.',
      },
      {
        title: 'Erstellte Tags oder Regeln prüfen',
        description:
          'Prüfe jeden Sprachcode, jede URL und jedes Weiterleitungspaar auf Tippfehler, bevor du kopierst – ein falscher Code kann den ganzen Hreflang-Satz beschädigen.',
      },
      {
        title: 'x-default und selbstreferenzierende Canonicals hinzufügen',
        description:
          'Füge eine x-default-Fallback-Sprachversion hinzu und stelle sicher, dass jede Seite sich selbst als eigenes Canonical angibt.',
      },
      {
        title: 'Plattformfertige Config kopieren',
        description:
          'Kopiere die HTML-<link>-Tags, <xhtml:link>-XML-Zeilen oder _redirects- / .htaccess- / nginx-Regeln direkt.',
      },
      {
        title: 'Nach dem Deployment validieren',
        description:
          'Prüfe nach dem Livegang den Seitenquelltext oder nutze einen Hreflang-Validator, um zu bestätigen, dass die Tags vorhanden, wechselseitig und auf die richtigen URLs zeigen.',
      },
    ],
    examples: [
      {
        title: 'Cloudflare-Pages-301-Migrationsregel',
        input: '/alter-blogbeitrag, /blog/neuer-beitrag/',
        output: '/alter-blogbeitrag /blog/neuer-beitrag/ 301',
        explanation: 'Gibt die exakte Cloudflare-Pages-_redirects-Syntax mit explizitem Status 301 permanent aus.',
      },
      {
        title: 'Hreflang-Satz für englische und deutsche Seitenversionen',
        input: 'en: /guide/ · de: /de/anleitung/ · x-default: /guide/',
        output: '<link rel="alternate" hreflang="en" href="...">, hreflang="de", hreflang="x-default" plus selbstreferenzierende Canonicals',
        explanation: 'Jede Version verweist auf sich selbst und auf alle anderen Versionen – wechselseitig und vollständig.',
      },
    ],
    benefits: [
      'Gibt HTML-<link rel="alternate">- und XML-<xhtml:link>-Formate konsistent aus',
      'Unterstützt Cloudflare-Pages-_redirects-, Apache-.htaccess- und Nginx-Server-Syntax',
      'Fördert selbstreferenzierende Canonicals und x-default-Fallback-Sprachversionen',
      'Normalisiert führende Schrägstriche bei Quell-Weiterleitungspfaden automatisch',
    ],
    useCases: [
      'Lokalisierte englisch-/spanisch-/französische Regionalseiten sauber starten – ohne Duplicate-Penalties',
      'Backlink-Wert beim Umbenennen von Slugs während eines Redesigns erhalten',
      'Cloudflare-Pages-/public/_redirects-Dateien in Sekunden erstellen',
      'Wechselseitige Hreflang-Sätze vor dem Einreichen internationaler Sitemaps prüfen',
    ],
    faqs: [
      {
        question: 'Müssen Hreflang-Tags bidirektional / wechselseitig sein?',
        answer:
          'Ja. Wenn Seite A mit hreflang="es" auf Seite B verweist, muss Seite B mit hreflang="en" (und auf sich selbst) zurück auf Seite A verweisen, sonst ignorieren Suchmaschinen die Annotation.',
      },
      {
        question: 'Wann sollte ich x-default in Hreflang verwenden?',
        answer:
          'Nutze hreflang="x-default", um deine Fallback-Seite für Besucher zu bestimmen, deren Browser-Sprache/-Region zu keiner bestimmten Alternative passt.',
      },
      {
        question: 'Sollten Canonical-URLs sprachübergreifend zeigen (zum Beispiel es → en)?',
        answer:
          'Nein. Jede übersetzte Sprachversion sollte ein selbstreferenzierendes Canonical angeben, das auf sich selbst zeigt, während Hreflang die lokalisierten Entsprechungen verbindet.',
      },
      {
        question: 'Ist der Hreflang-Generator kostenlos?',
        answer:
          'Ja. Er ist komplett kostenlos, ohne Anmeldung, und du kannst so viele Hreflang-Sätze und Weiterleitungsregeln erstellen, wie du brauchst.',
      },
      {
        question: 'Was ist Hreflang und warum ist es wichtig?',
        answer:
          'Hreflang ist eine HTML- oder XML-Annotation, die Suchmaschinen sagt, welche Sprach- und Regionsversion einer Seite sie jedem Besucher zeigen sollen – englische Nutzer sehen die englische Seite, spanische Nutzer die spanische.',
      },
      {
        question: 'Welches Format sollten Sprach-Regionscodes haben?',
        answer:
          'Nutze ISO-Sprachcodes mit optionaler ISO-Region, etwa en, es, fr-CA oder en-GB. Die Sprache steht zuerst, dann ein Bindestrich, dann die Region in Großbuchstaben.',
      },
      {
        question: 'Brauche ich Hreflang, wenn meine Website nur eine Sprache hat?',
        answer:
          'Nein. Hreflang ist nur nützlich, wenn derselbe Inhalt in mehr als einer Sprache oder Regionsversion existiert.',
      },
      {
        question: 'Kann ich Hreflang statt in HTML in meine XML-Sitemap schreiben?',
        answer:
          'Ja. Das Tool gibt beide Formate aus: HTML-Link-Tags für den Seiten-Head und xhtml:link-Blöcke für deine XML-Sitemap. Wähle einen Ort und bleibe konsistent.',
      },
      {
        question: 'Was ist ein selbstreferenzierendes Canonical?',
        answer:
          'Es ist ein Canonical-Tag auf einer Seite, das auf die Seite selbst zeigt. Jede Version einer Seite sollte eines enthalten, einschließlich jeder übersetzten Version.',
      },
      {
        question: 'Wann sollte ich eine 301-Weiterleitung statt eines Canonical-Tags verwenden?',
        answer:
          'Nutze eine 301-Weiterleitung, wenn eine Seite dauerhaft auf eine neue URL umgezogen ist. Nutze ein Canonical-Tag, wenn zwei ähnliche Seiten beide live bleiben müssen und Suchmaschinen eine davon bevorzugen sollen.',
      },
      {
        question: 'Was ist der Unterschied zwischen einer 301- und einer 302-Weiterleitung?',
        answer:
          'Eine 301 ist permanent und überträgt die meisten Rankingsignale auf die neue URL; eine 302 ist temporär und sagt Suchmaschinen, dass die alte URL zurückkommen könnte – also die falsche Wahl für einen dauerhaften Umzug.',
      },
      {
        question: 'Wie funktionieren Cloudflare-Pages-_redirects?',
        answer:
          'Du legst eine Datei _redirects in den public-Ordner deiner Website – eine Regel pro Zeile mit altem Pfad, neuem Pfad und Statuscode – und Cloudflare wendet die Weiterleitungen beim Deployment an.',
      },
      {
        question: 'Kann ich einen ganzen Ordner mit einer Regel weiterleiten?',
        answer:
          'Das Tool gibt eine Regel pro URL-Paar aus. Für einen ordnerweiten Umzug nutze eine Wildcard- oder Splat-Regel in Cloudflare Pages oder Apache oder erstelle hier die vollständige Paarliste.',
      },
      {
        question: 'Geben 301-Weiterleitungen Rankingsignale an die neue Seite weiter?',
        answer:
          'Ja. Eine 301-Weiterleitung überträgt den größten Teil der alten Rankingsignale und des Linkwerts auf die neue URL – deshalb ist sie die Standardwahl für dauerhafte Umzüge.',
      },
      {
        question: 'Sollte die alte URL nach einer 301-Weiterleitung in meiner Sitemap bleiben?',
        answer:
          'Nein. Entferne weitergeleitete URLs aus deiner Sitemap und liste nur die neuen Ziel-URLs, damit Suchmaschinen die aktuellen Seiten crawlen.',
      },
      {
        question: 'Wie lange sollte ich eine 301-Weiterleitung live lassen?',
        answer:
          'Behalte sie mindestens ein Jahr, idealerweise dauerhaft. Ein zu frühes Entfernen kann alte Backlinks und Lesezeichen brechen, die noch auf die alte URL zeigen.',
      },
      {
        question: 'Kann Hreflang Probleme mit doppelten Inhalten beheben?',
        answer:
          'Nicht allein. Hreflang sagt Suchmaschinen, welche Version sie jeder Zielgruppe zeigen sollen, aber wirklich doppelte Seiten in derselben Sprache brauchen weiterhin Canonical-Tags oder eine Konsolidierung.',
      },
      {
        question: 'Was passiert, wenn ich einen falschen Sprachcode verwende?',
        answer:
          'Suchmaschinen ignorieren ungültige Codes. Ein Tippfehler wie en-UK statt en-GB bricht diese Sprachversion lautlos. Prüfe jeden Code vor dem Deployment doppelt.',
      },
      {
        question: 'Wird meine URL-Liste irgendwo hochgeladen?',
        answer:
          'Nein. Der Canonical-, Hreflang- & 301-Weiterleitungs-Generator läuft vollständig in deinem Browser, sodass deine URLs und Migrationspläne dein Gerät niemals verlassen.',
      },
      {
        question: 'Kann ich Hreflang-Tags für mehr als zwei Sprachen erstellen?',
        answer:
          'Ja. Füge so viele Sprachzeilen hinzu, wie deine Website unterstützt – das Tool erstellt einen vollständigen wechselseitigen Satz, der jede eingegebene Sprachversion abdeckt.',
      },
    ],
  },
  'on-page-seo-checker': {
    slug: 'on-page-seo-pruefer',
    name: 'HTML-On-Page-SEO-Audit-Prüfer',
    shortDescription:
      'Prüfe eingefügten HTML-Quelltext lokal mit DOMParser auf Titellänge, Meta-Description, H1–H4-Hierarchie, Alt-Texte und JSON-LD.',
    keywords: [
      'on page seo checker',
      'html seo analysator',
      'überschriften hierarchie prüfen',
      'bild alt audit tool',
      'seo audit tool kostenlos',
      'meta description länge prüfen',
      'title tag länge prüfen',
      'html seo tag prüfen',
      'json-ld prüfen',
    ],
    seo: {
      title: 'On-Page-SEO-Prüfer – HTML-Audit-Tool | UtilityFlow',
      description:
        'Füge beliebigen Seiten-HTML-Quelltext ein, um Titel, Meta-Description, Überschriften, Canonical, Bild-Alt-Texte, Links und JSON-LD zu prüfen – kostenlos.',
      primaryKeyword: 'on page seo prüfer',
      secondaryKeywords: [
        'html quelltext seo audit',
        'h1 h2 überschriften struktur prüfen',
        'fehlende bild alt attribute prüfen',
        'meta description länge prüfen',
      ],
      longTailKeywords: [
        'eingefügten html quelltext auf on page seo tags offline prüfen',
        'überschriften h1 bis h4 und canonical link in html prüfen',
        'clientseitiger seo dom inspector ohne externes crawling',
        'html quelltext einfügen titel meta description überschriften prüfen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Führe eine sofortige technische & On-Page-SEO-Prüfung auf DOM-Ebene für jeden eingefügten HTML-Quelltext („Seitenquelltext anzeigen“) direkt in deinem Browser durch – mit Prüfung von <title>, Meta-Description, Canonicals, H1–H4-Überschriftenhierarchie, fehlenden Bild-Alt-Texten, internen/externen Links, Open Graph und JSON-LD.',
    instructions: [
      {
        title: 'HTML-Quelltext deiner Seite kopieren',
        description:
          'Öffne „Seitenquelltext anzeigen“ (oder inspiziere die gebaute Datei dist/index.html) und füge das HTML in das Quelltextfeld ein.',
      },
      {
        title: 'DOM-Audit-Score & Checklisten prüfen',
        description:
          'Prüfe Bestehen-/Warnungsanzeigen für Titel, Meta-Description, einzelne H1, Canonical-Link, Alt-Texte und Structured Data.',
      },
      {
        title: 'Überschriften-Gliederung & Links verifizieren',
        description:
          'Scrolle durch den extrahierten H1–H4-Baum und die Zählung interner/externer Links, um übersprungene Ebenen oder fehlende Tags zu beheben.',
      },
      {
        title: 'Warnungen in Prioritätsreihenfolge beheben',
        description:
          'Beginne mit einem fehlenden oder zu langen Titel und einer fehlenden Meta-Description, dann mit doppelten H1-Tags, dann mit fehlenden Bild-Alt-Texten.',
      },
      {
        title: 'Nach Korrekturen erneut einfügen und prüfen',
        description:
          'Füge das aktualisierte HTML ein und führe den Audit erneut aus, um zu bestätigen, dass der Score sich verbessert hat und keine neuen Warnungen aufgetaucht sind.',
      },
      {
        title: 'JavaScript-gerenderte Seiten richtig prüfen',
        description:
          'Wenn Meta-Tags im rohen Seitenquelltext einer React- oder SPA-Seite fehlen, kopiere stattdessen das live outerHTML aus dem Elemente-Panel der Browser-DevTools.',
      },
    ],
    examples: [
      {
        title: 'Gerenderten statischen HTML-Export prüfen',
        input: 'Vollständiges <html>-Dokument mit <title>, <meta description>, H1/H2 und JSON-LD',
        output: '6/6 Prüfungen bestanden · H1–H4-Gliederung + Aufschlüsselung interner/externer Links',
        explanation: 'Nutzt den nativen Browser-DOMParser sauber, ohne nicht vertrauenswürdige Skripte auszuführen.',
      },
      {
        title: 'Doppelte H1 und fehlende Alt-Texte in einem CMS-Template finden',
        input: 'WordPress-Seitenquelltext mit zwei H1-Tags und drei Bildern ohne alt-Attribut',
        output: 'Warnungen: doppelte H1 gefunden · 3 Bilder ohne Alt-Text aufgelistet.',
        explanation: 'Die Checkliste zeigt genau, welche Überschriften und Bilder zuerst korrigiert werden müssen.',
      },
    ],
    benefits: [
      'Nutzt nativen DOMParser (führt niemals eingefügte <script>-Tags oder externe Payloads aus)',
      'Ist ehrlich bei Browser-CORS-Grenzen – gibt niemals vor, blockierte Remote-URLs zu scrapen',
      'Extrahiert die vollständige H1–H4-Dokumentgliederung sauber',
      'Prüft Open Graph und JSON-LD zusätzlich zu klassischen SEO-Tags',
    ],
    useCases: [
      'QA vor dem Deployment auf Staging-Builds und statischen HTML-Exports',
      'CMS-Blog-Templates auf versehentlich doppelte <h1>-Tags oder leere Alt-Attribute prüfen',
      'Verifizieren, dass serverseitig gerenderte Seiten Canonical- und Meta-Tags sauber ausgeben',
      'HTML-Seiten mit Login oder auf localhost prüfen, die Cloud-Crawler nicht erreichen',
    ],
    faqs: [
      {
        question: 'Warum bittet dieses Tool mich, HTML-Quelltext einzufügen, statt eine Website-URL einzugeben?',
        answer:
          'Browser erzwingen CORS-Richtlinien (Cross-Origin Resource Sharing), die clientseitiges JavaScript daran hindern, beliebige externe Websites zu lesen, und localhost-/private Staging-URLs sind von öffentlichen Servern unerreichbar. Das Einfügen von „Seitenquelltext anzeigen“ macht lokale Audits zu 100 % zuverlässig und privat.',
      },
      {
        question: 'Können JavaScript-gerenderte SPAs mit rohem Seitenquelltext korrekt geprüft werden?',
        answer:
          'Bei clientseitig gerenderten SPAs, bei denen React Meta-Tags erst zur Laufzeit einfügt, kopiere stattdessen das live outerHTML aus dem Elemente-Panel der Chrome-/Firefox-DevTools.',
      },
      {
        question: 'Führt DOMParser Skripte innerhalb eingefügten HTMLs aus?',
        answer:
          'Nein. DOMParser.parseFromString(..., "text/html") erstellt einen inaktiven DOM-Baum strikt zur Inspektion, ohne JavaScript auszuführen oder externe Bilder zu laden.',
      },
      {
        question: 'Ist der On-Page-SEO-Prüfer kostenlos?',
        answer:
          'Ja. Er ist komplett kostenlos, ohne Anmeldung, und du kannst so viele Seiten prüfen, wie du willst.',
      },
      {
        question: 'Wie lang sollte ein Title-Tag idealerweise sein?',
        answer:
          'Ziele auf 50 bis 60 Zeichen. Längere Titel werden in Suchergebnissen abgeschnitten, während sehr kurze Titel die Chance verschenken, die Seite klar zu beschreiben.',
      },
      {
        question: 'Wie lang sollte eine Meta-Description idealerweise sein?',
        answer:
          'Ziele auf 150 bis 160 Zeichen. Diese Länge wird in Suchergebnissen meist vollständig angezeigt, ohne abgeschnitten zu werden.',
      },
      {
        question: 'Wie viele H1-Tags sollte eine Seite haben?',
        answer:
          'Einen. Eine einzige H1 nennt das Hauptthema der Seite; Unterthemen gehören in H2- und H3-Überschriften darunter.',
      },
      {
        question: 'Kann ich Überschriftenebenen überspringen, zum Beispiel H1 und dann H3?',
        answer:
          'Vermeide es. Halte die Hierarchie in Reihenfolge – H1, dann H2, dann H3 –, damit Suchmaschinen und Screenreader der Seitenstruktur folgen können.',
      },
      {
        question: 'Was passiert, wenn meine Seite kein Canonical-Tag hat?',
        answer:
          'Suchmaschinen wählen dann selbst eine kanonische URL, die möglicherweise nicht die von dir bevorzugte Version ist. Ein explizit gesetztes Canonical-Tag beseitigt das Rätselraten.',
      },
      {
        question: 'Warum ist Bild-Alt-Text für SEO wichtig?',
        answer:
          'Alt-Text beschreibt Bilder für Suchmaschinen und Screenreader, hilft Bildern beim Ranking in der Bildersuche und hält die Seite nutzbar, wenn ein Bild nicht lädt.',
      },
      {
        question: 'Was ist JSON-LD und warum sollte ich es prüfen?',
        answer:
          'JSON-LD ist ein Block strukturierter Daten, der Suchmaschinen deine Seiteninhalte beschreibt und Rich Results wie Bewertungen, FAQs und Breadcrumbs ermöglicht. Der Prüfer bestätigt, dass es vorhanden ist.',
      },
      {
        question: 'Prüft der Checker auch Open-Graph-Tags?',
        answer:
          'Ja. Er meldet, ob Open-Graph-Tags wie og:title und og:image vorhanden sind, damit deine Seite beim Teilen in sozialen Medien korrekt in der Vorschau erscheint.',
      },
      {
        question: 'Kann ich eine Seite prüfen, die einen Login braucht?',
        answer:
          'Ja. Da du das HTML selbst einfügst, kannst du private, Staging- und localhost-Seiten prüfen, die öffentliche Crawler nicht erreichen können.',
      },
      {
        question: 'Wird mein HTML irgendwo hochgeladen?',
        answer:
          'Nein. Der On-Page-SEO-Prüfer läuft vollständig in deinem Browser, sodass dein Seitenquelltext dein Gerät niemals verlässt.',
      },
      {
        question: 'Mein Audit-Score ist niedrig – was sollte ich zuerst beheben?',
        answer:
          'Behebe Probleme in dieser Reihenfolge: fehlender oder zu langer Titel, fehlende Meta-Description, doppelte H1-Tags, dann fehlende Bild-Alt-Texte.',
      },
      {
        question: 'Zählt der Prüfer interne und externe Links?',
        answer:
          'Ja. Er zählt interne und externe Links getrennt, sodass du siehst, ob eine Seite genug nach außen verlinkt und ob interne Navigation vorhanden ist.',
      },
      {
        question: 'Kann ich meine Startseite und Blogbeiträge mit demselben Tool prüfen?',
        answer:
          'Ja. Füge den HTML-Quelltext jeder Seite separat ein und prüfe sie eine nach der anderen – jede Seite erhält ihren eigenen Score und ihre eigene Checkliste.',
      },
      {
        question: 'Warum zeigen manche Prüfungen Warnungen statt Fehler an?',
        answer:
          'Warnungen markieren Best-Practice-Probleme, die sich zu beheben lohnen, aber keine kritischen Fehler sind – etwa ein etwas zu langer Titel oder eine übersprungene Überschriftenebene.',
      },
      {
        question: 'Funktioniert es für WordPress-Seiten?',
        answer:
          'Ja. Öffne „Seitenquelltext anzeigen“ auf einer beliebigen WordPress-Seite, kopiere das HTML und füge es ein – der Prüfer funktioniert mit der Ausgabe jedes CMS.',
      },
      {
        question: 'Wie oft sollte ich einen On-Page-SEO-Audit durchführen?',
        answer:
          'Führe einen durch, sobald du ein Template änderst, einen neuen Seitentyp veröffentlichst oder nach einem Redesign – und prüfe nach Korrekturen erneut, um zu bestätigen, dass der Score sich verbessert hat.',
      },
    ],
  },
  'robots-meta-tag-generator': {
    slug: 'robots-meta-tag-ersteller',
    name: 'Robots-Meta-Tag- & X-Robots-Tag-Generator',
    shortDescription:
      'Erstelle feingranulare Noindex-, Nofollow-, Noarchive-, Max-Snippet-, Max-Image-Preview- und Cloudflare-_headers-Regeln.',
    keywords: [
      'robots meta tag generator',
      'x-robots-tag erstellen',
      'noindex nofollow meta tag',
      'max-image-preview large tag',
      'noindex tag generator',
      'meta robots tag erstellen',
      'robots header generator',
      'cloudflare _headers generator',
      'nosnippet meta tag',
    ],
    seo: {
      title: 'Robots-Meta-Tag-Generator – Noindex & Co. | UtilityFlow',
      description:
        'Erstelle HTML-Robots-Meta-Tags und X-Robots-Tag-Header mit Noindex, Nofollow, Max-Snippet und Max-Image-Preview – plus Cloudflare-_headers für jeden Pfad.',
      primaryKeyword: 'robots meta tag generator',
      secondaryKeywords: [
        'x-robots-tag header generator',
        'noindex meta tag erstellen',
        'google max-image-preview large',
        'noindex tag generator',
      ],
      longTailKeywords: [
        'x-robots-tag noindex header für pdf dateien auf cloudflare pages erstellen',
        'meta robots tag mit max-snippet und max-image-preview large erstellen',
        'unterschied zwischen robots.txt und meta robots noindex',
        'robots meta tag mit noindex nofollow und max-snippet erstellen',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Erstelle präzise Crawler-Anweisungen auf Seitenebene – inklusive index/noindex, follow/nofollow, noarchive, nosnippet, max-snippet und max-image-preview:large – gleichzeitig als HTML-<meta name="robots">-Tags, HTTP-X-Robots-Tag-Header und Cloudflare-Pages-_headers-Blöcke.',
    instructions: [
      {
        title: 'Indexierungs- & Link-Anweisungen wählen',
        description:
          'Lege index/noindex, follow/nofollow und optionale Einschränkungen wie noarchive, nosnippet oder noimageindex fest.',
      },
      {
        title: 'Snippet- & Vorschau-Limits feinjustieren',
        description:
          'Konfiguriere max-snippet (-1 für unbegrenzt), max-image-preview (large für Google Discover) und max-video-preview.',
      },
      {
        title: 'HTML-Tag oder HTTP-Header kopieren',
        description:
          'Nutze das HTML-Meta-Tag innerhalb von <head> oder setze den X-Robots-Tag-Header-Block für PDFs und Nicht-HTML-Downloads ein.',
      },
      {
        title: 'Das richtige Ausgabeformat wählen',
        description:
          'Nutze das HTML-Meta-Tag für normale Seiten, X-Robots-Tag für PDFs und andere Nicht-HTML-Dateien und den _headers-Block für Cloudflare-Pfadregeln.',
      },
      {
        title: 'Die Ausgabe an der richtigen Stelle platzieren',
        description:
          'Setze das Meta-Tag in den <head> deiner Seite oder füge die Header-Regeln in deine Server-Config oder Cloudflare-_headers-Datei ein und deploye dann.',
      },
      {
        title: 'Seite erscheint immer noch in der Suche?',
        description:
          'Noindex wirkt erst, nachdem Suchmaschinen die Seite erneut gecrawlt haben – das kann Tage dauern. Prüfe, dass robots.txt das Crawlen nicht blockiert, und bestätige es dann in der Search Console.',
      },
    ],
    examples: [
      {
        title: 'Private PDF-Downloads per Cloudflare-Pages-_headers ausschließen',
        input: 'noindex, nofollow · Pfad: /private/*',
        output: '/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1',
        explanation: 'HTTP-X-Robots-Tag funktioniert für PDFs, Bilder und Nicht-HTML-Dateien ohne <head>-Element.',
      },
      {
        title: 'Danke-Seite mit Noindex und Noarchive versehen',
        input: 'noindex, nofollow, noarchive · Ausgabe: HTML-Meta-Tag',
        output: '<meta name="robots" content="noindex, nofollow, noarchive"> für den <head> der Danke-Seite.',
        explanation: 'Danke-Seiten sollen live bleiben, aber nicht in Suchergebnissen erscheinen und keine gecachte Kopie anbieten.',
      },
    ],
    benefits: [
      'Gibt HTML-<meta>-, generische HTTP-X-Robots-Tag- und Cloudflare-Pages-_headers-Ausgaben gleichzeitig aus',
      'Enthält die von Google Discover empfohlenen max-image-preview:large-Standards',
      'Verhindert widersprüchliche Kombinationen automatisch (deaktiviert Snippet-/Bild-Slider, wenn nosnippet/noimageindex aktiv sind)',
      'Macht die De-Indexierung von Nicht-HTML-PDF-/Asset-Dateien per HTTP-Header unkompliziert',
    ],
    useCases: [
      'Verhindern, dass Danke-Seiten, interne Suchergebnisse oder Mitgliederbereiche in den Google-Index gelangen',
      'Gehostete PDF-Broschüren oder Whitepaper-Assets per X-Robots-Tag-Header de-indexieren',
      'max-image-preview:large für redaktionelle Artikel mit Google-Discover-Ziel aktivieren',
      'Strikte noarchive- oder Snippet-Längenlimits für Bezahl- oder sensible Dokumentation setzen',
    ],
    faqs: [
      {
        question: 'Wann sollte ich X-Robots-Tag statt <meta name="robots"> verwenden?',
        answer:
          'Nutze X-Robots-Tag-HTTP-Header für Nicht-HTML-Dateien (etwa PDFs, Tabellen oder Bilder) oder wenn du Indexierungsregeln über einen ganzen Ordnerpfad per CDN-Regeln anwenden willst.',
      },
      {
        question: 'Sollte ich robots.txt-Disallow mit <meta name="robots" content="noindex"> kombinieren?',
        answer:
          'Nein! Wenn eine URL in robots.txt blockiert ist, können Suchbots die Seite nicht crawlen, um das HTML-Tag <meta name="robots" content="noindex"> darin zu lesen. Erlaube das Crawlen, wenn du dich auf Meta-Noindex verlässt.',
      },
      {
        question: 'Was bedeutet max-snippet:-1?',
        answer:
          'Ein Wert von -1 lässt Suchmaschinen jede Snippet-Länge wählen, die sie für hilfreich halten, während 0 Text-Snippets verhindert und positive ganze Zahlen (wie 160) die Snippet-Zeichenlänge begrenzen.',
      },
      {
        question: 'Ist der Robots-Meta-Tag-Generator kostenlos?',
        answer:
          'Ja. Er ist komplett kostenlos, ohne Anmeldung, und du kannst so viele Tags und Header-Regeln erstellen, wie du brauchst.',
      },
      {
        question: 'Was bewirkt noindex?',
        answer:
          'Noindex sagt Suchmaschinen, eine Seite nicht in Suchergebnisse aufzunehmen. Die Seite bleibt live und besuchbar, erscheint aber nicht bei Google oder Bing.',
      },
      {
        question: 'Was bewirkt nofollow?',
        answer:
          'Nofollow sagt Suchmaschinen, den Links auf einer Seite nicht zu folgen oder Rankingsignale durch sie weiterzugeben. Es ist nützlich für Seiten mit nicht vertrauenswürdigen oder bezahlten Links.',
      },
      {
        question: 'Was ist der Unterschied zwischen robots.txt und einem Robots-Meta-Tag?',
        answer:
          'Robots.txt blockiert das Crawlen einer URL, während ein Robots-Meta-Tag steuert, ob eine gecrawlte Seite indexiert wird. Sie lösen unterschiedliche Probleme und dürfen nicht unbedacht kombiniert werden.',
      },
      {
        question: 'Wie lange dauert es, bis noindex wirkt?',
        answer:
          'Es wirkt erst, nachdem Suchmaschinen die Seite erneut gecrawlt haben – das kann je nach Besuchshäufigkeit der Seite Tage oder Wochen dauern.',
      },
      {
        question: 'Was ist max-image-preview:large?',
        answer:
          'Es erlaubt Suchmaschinen, große Bildvorschauen für deine Seite zu zeigen, was Google für Seiten mit Google-Discover-Ziel empfiehlt.',
      },
      {
        question: 'Was bewirkt nosnippet?',
        answer:
          'Nosnippet verhindert, dass Suchmaschinen ein Text-Snippet für die Seite in Suchergebnissen zeigen, sodass nur Titel und URL erscheinen.',
      },
      {
        question: 'Was bewirkt noarchive?',
        answer:
          'Noarchive verhindert, dass Suchmaschinen eine gecachte Kopie deiner Seite anbieten – nützlich für zeitkritische oder sich häufig ändernde Inhalte.',
      },
      {
        question: 'Was bewirkt noimageindex?',
        answer:
          'Noimageindex sagt Suchmaschinen, die Bilder einer Seite nicht zu indexieren, während die Seite selbst weiterhin in normalen Suchergebnissen erscheinen kann.',
      },
      {
        question: 'Kann ich eine PDF-Datei mit noindex versehen?',
        answer:
          'Ja. PDFs haben keinen HTML-Head, also nutze stattdessen den X-Robots-Tag-HTTP-Header – das Tool erstellt den exakten Header-Block für dich.',
      },
      {
        question: 'Sollte ich Danke- und Checkout-Seiten mit noindex versehen?',
        answer:
          'Ja. Danke-Seiten, Checkout-Schritte, interne Suchergebnisse und Mitgliederbereiche bieten meist keinen Suchwert und werden üblicherweise auf noindex gesetzt.',
      },
      {
        question: 'Kann ich noindex und nofollow auf derselben Seite kombinieren?',
        answer:
          'Ja. Sie steuern unterschiedliche Dinge – Indexierung und Linkverfolgung – und werden auf privaten oder Utility-Seiten oft zusammen verwendet.',
      },
      {
        question: 'Was ist eine Cloudflare-_headers-Datei?',
        answer:
          'Es ist eine Datei im public-Ordner deiner Website, die URL-Pfade HTTP-Antwort-Headern zuordnet. Das Tool gibt einen sofort einsetzbaren Block für jeden von dir gewählten Pfad aus.',
      },
      {
        question: 'Funktionieren Robots-Meta-Tags auch bei Bing und anderen Suchmaschinen?',
        answer:
          'Ja. Die meisten großen Suchmaschinen respektieren Standard-Robots-Anweisungen, auch wenn einige nur eine Teilmenge unterstützen – bleibe für die breiteste Abdeckung bei gängigen Anweisungen.',
      },
      {
        question: 'Wird meine Konfiguration irgendwo hochgeladen?',
        answer:
          'Nein. Der Robots-Meta-Tag-Generator läuft vollständig in deinem Browser, sodass deine Einstellungen dein Gerät niemals verlassen.',
      },
      {
        question: 'Was passiert, wenn ich widersprüchliche Anweisungen wähle?',
        answer:
          'Das Tool verhindert widersprüchliche Kombinationen automatisch – es deaktiviert zum Beispiel die Snippet- und Bildvorschau-Slider, wenn nosnippet oder noimageindex aktiv ist.',
      },
      {
        question: 'Sollte ich noindex verwenden oder die Seite einfach löschen?',
        answer:
          'Wenn eine Seite für immer weg sein soll, lösche sie und lasse sie einen 404- oder 410-Status zurückgeben. Nutze noindex, wenn die Seite live bleiben muss, aber nicht in Suchergebnissen erscheinen soll.',
      },
    ],
  },
  'image-compressor': {
    slug: 'bild-kompressor',
    name: 'Bild-Kompressor',
    shortDescription:
      'Komprimiere PNG-, JPG- und WebP-Bilder lokal per HTML5 Canvas – mit eigenen Qualitätsreglern, maximaler Breite und sofortiger Byte-Ersparnis.',
    keywords: [
      'bild komprimieren',
      'bild online komprimieren',
      'bilddateigröße verringern',
      'webp bild optimierer',
      'png komprimieren kleinere größe',
      'jpg dateigröße online verringern',
      'bildgröße verkleinern kostenlos',
      'bilder für web optimieren',
      'foto dateigröße verkleinern',
    ],
    seo: {
      title: 'Bild-Kompressor – PNG, JPG & WebP verkleinern | UtilityFlow',
      description:
        'Komprimiere Bilder in deinem Browser mit dem Bild-Kompressor. Stelle Qualität ein, begrenze die Breite, vergleiche Vorher-Nachher-Größen und lade herunter.',
      primaryKeyword: 'bild kompressor',
      secondaryKeywords: [
        'png jpg webp online komprimieren',
        'foto dateigröße kostenlos verringern',
        'clientseitiger bild optimierer',
        'bildgröße für website verkleinern',
      ],
      longTailKeywords: [
        'große bilder für web core vitals ohne server upload komprimieren',
        'jpg foto in leichtes webp format umwandeln und verkleinern',
        'maximale breite begrenzen und bildqualität offline optimieren',
        'bilddateigröße vor e-mail anhang verringern',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Verkleinere schwere PNG-, JPG- und WebP-Dateien für schnellere Ladezeiten und kleinere E-Mail-Anhänge direkt in deinem Browser – passe die verlustbehaftete Kompressionsqualität an, wende optionale Breitenlimits an und vergleiche die exakte Byte-Ersparnis ohne einen einzigen Remote-Datei-Upload.',
    instructions: [
      {
        title: 'Quellbild auswählen',
        description:
          'Wähle ein beliebiges PNG-, JPG-, WebP- oder GIF-Bild von deinem Gerät, um Abmessungen und ursprüngliche Byte-Größe zu lesen.',
      },
      {
        title: 'Zielformat, Breitenlimit und Qualität wählen',
        description:
          'Wähle WebP oder JPG für dramatische Byte-Ersparnis, wende optional ein maximales Breitenlimit an (etwa 1920 px oder 1280 px) und stelle den Qualitätsregler von 10 % bis 100 % ein.',
      },
      {
        title: 'Komprimierung starten',
        description:
          'Klicke auf „Komprimieren“, um das Bild lokal in deinem Browser neu zu kodieren und die neue Byte-Größe sofort zu sehen.',
      },
      {
        title: 'Vorher und nachher vergleichen',
        description:
          'Prüfe die Nebeneinander-Vorschau und die exakte Byte- und Prozent-Ersparnis, um sicherzustellen, dass die Qualität weiterhin gut aussieht.',
      },
      {
        title: 'Komprimierte Datei herunterladen',
        description:
          'Klicke auf „Herunterladen“, um das optimierte Bild auf deinem Gerät zu speichern, und wiederhole den Vorgang bei Bedarf für eine weitere Datei.',
      },
      {
        title: 'Tipp: Ausgabe größer als die Eingabe?',
        description:
          'Wenn ein kleines PNG nach der Komprimierung wächst, wechsle das Ausgabeformat zu WebP oder JPG oder senke den Qualitätsregler leicht und komprimiere erneut.',
      },
    ],
    examples: [
      {
        title: 'Ein 2,4-MB-Hero-Foto für einen Blogartikel optimieren',
        input: '3840×2160 JPG · Ausgabe: WebP · Max. Breite: 1280 px · Qualität: 80 %',
        output: '1280×720 WebP typischerweise ~85–140 KB (Payload-Reduktion um -94 %)',
        explanation: 'Die Kombination aus Breitenbegrenzung und moderner WebP-Komprimierung beschleunigt Largest Contentful Paint dramatisch.',
      },
      {
        title: 'Screenshot für einen E-Mail-Anhang verkleinern',
        input: '1920×1080 PNG, 3,1 MB · Ausgabe: JPG · Qualität: 80 %',
        output: 'Deutlich kleinere JPG-Datei, die problemlos in einen E-Mail-Anhang passt.',
        explanation: 'JPG ist für Fotos und Screenshots ohne Transparenz meist die kleinste Wahl.',
      },
    ],
    benefits: [
      'Keine Server-Uploads – unveröffentlichte Produktgrafiken und private Fotos bleiben komplett lokal',
      'Unterstützt WebP-, JPEG- (mit automatischer weißer Alpha-Matte-Füllung) und PNG-Neukodierung',
      'Zeigt echte Vorher-Nachher-Byte-Größen und prozentuale Ersparnis sofort an',
      'Optionale Maximalbreiten verkleinern übergroße Kamerafotos in einem Durchgang',
    ],
    useCases: [
      'Hero-Banner und Screenshots verkleinern, um Core Web Vitals und LCP zu verbessern',
      'Leichtere Anhänge für E-Mails, Portale und CMS-Uploads vorbereiten',
      'Schwere Roh-Screenshots in leichte WebP-Web-Assets umwandeln',
      'Schnell den optimalen Kompromiss zwischen Qualität und Dateigröße prüfen',
    ],
    faqs: [
      {
        question: 'Warum wird ein kleines PNG beim Komprimieren in PNG manchmal größer?',
        answer:
          'Browser-Canvas kodiert PNGs mit Standard-DEFLATE-Streams ohne spezialisierte Paletten-Quantisierungstools wie pngquant neu. Ein Wechsel des Ausgabeformats zu WebP oder JPG schneidet die Dateigröße meist dramatisch.',
      },
      {
        question: 'Werden meine Fotos auf einen externen Komprimierungsserver hochgeladen?',
        answer:
          'Nein. Sämtliches Dekodieren, Skalieren und Neukodieren per Canvas läuft strikt im Speicher deines Browsers.',
      },
      {
        question: 'Was passiert mit transparenten Hintergründen, wenn ich JPG wähle?',
        answer:
          'Da JPEG keine Alpha-Transparenz unterstützt, werden transparente Bereiche vor dem Kodieren sauber mit Vollweiß (#ffffff) gefüllt.',
      },
      {
        question: 'Ist der Bild-Kompressor kostenlos?',
        answer:
          'Ja, er ist komplett kostenlos – ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung, wie viele Bilder du komprimierst.',
      },
      {
        question: 'Welche Bildformate kann ich komprimieren?',
        answer:
          'Du kannst PNG-, JPG-, WebP- und GIF-Bilder komprimieren und das Ergebnis als WebP, JPG oder PNG herunterladen.',
      },
      {
        question: 'Wie stark kann der Bild-Kompressor mein Foto verkleinern?',
        answer:
          'Die Ersparnis hängt vom Ursprungsformat und der Qualitätseinstellung ab, aber Fotos, die bei 80 % Qualität in WebP umgewandelt werden, schrumpfen oft um 50–90 %.',
      },
      {
        question: 'Verringert das Komprimieren meines Bildes seine Qualität?',
        answer:
          'Verlustbehaftete Formate wie WebP und JPG tauschen ein wenig Detail gegen deutlich kleinere Dateien. Nutze den Qualitätsregler und die Vorschau, um die Balance zu finden, die dir gefällt, oder behalte PNG für verlustfreie Ergebnisse.',
      },
      {
        question: 'Ändert der Bild-Kompressor die Abmessungen meines Bildes?',
        answer:
          'Nur wenn du ein maximales Breitenlimit setzt. Sonst bleiben die Pixelabmessungen gleich, und nur die Dateigröße ändert sich.',
      },
      {
        question: 'Kann ich Bilder für E-Mail-Anhänge komprimieren?',
        answer:
          'Ja, erst komprimieren macht große Fotos klein genug, um in E-Mail-Anhanglimits zu passen, ohne sie auf mehrere Nachrichten aufzuteilen.',
      },
      {
        question: 'Welche Qualitätseinstellung sollte ich für Website-Bilder wählen?',
        answer:
          'Eine Qualität von 75–85 % in WebP sieht meist fast identisch zum Original aus und hält Dateien klein genug für schnelle Ladezeiten.',
      },
      {
        question: 'Warum sollte ich JPG beim Komprimieren in WebP umwandeln?',
        answer:
          'WebP nutzt effizientere Komprimierung als JPG, sodass dasselbe Foto bei gleicher visueller Qualität meist deutlich kleiner ist.',
      },
      {
        question: 'Kann ich mehrere Bilder auf einmal komprimieren?',
        answer:
          'Der Kompressor verarbeitet ein Bild nach dem anderen, damit du Qualität, Breite und Format für jedes Foto fein abstimmen kannst, bevor du es herunterlädst.',
      },
      {
        question: 'Funktioniert die Komprimierung offline?',
        answer:
          'Ja, sobald die Seite geladen ist, läuft die gesamte Komprimierung lokal in deinem Browser und funktioniert ohne Internetverbindung.',
      },
      {
        question: 'Erhält mein komprimiertes Bild ein Wasserzeichen?',
        answer:
          'Nein, heruntergeladene Bilder enthalten niemals Wasserzeichen oder Branding. Der Bild-Kompressor verändert nur Dateigröße und Qualität, fügt aber keine sichtbaren Markierungen hinzu.',
      },
      {
        question: 'Was ist das beste Format zum Komprimieren von Screenshots?',
        answer:
          'WebP liefert für Screenshots meist die kleinsten Dateien. Nutze PNG nur, wenn du pixelgenaue verlustfreie Qualität brauchst.',
      },
      {
        question: 'Kann ich ein Bild komprimieren, ohne seine Abmessungen zu ändern?',
        answer:
          'Ja, lasse das maximale Breitenlimit deaktiviert, und das Tool behält die ursprüngliche Breite und Höhe, während es nur die Dateigröße verringert.',
      },
      {
        question: 'Behält der Bild-Kompressor Bild-Metadaten?',
        answer:
          'Die Neukodierung per Browser-Canvas entfernt in der Regel EXIF-Metadaten wie Kameraeinstellungen und Standort – was die Datei zusätzlich verkleinert.',
      },
      {
        question: 'Kann ich den Bild-Kompressor auf meinem Handy nutzen?',
        answer:
          'Ja, er funktioniert in jedem modernen Handy-Browser. Wähle ein Bild aus deiner Fotobibliothek und lade das komprimierte Ergebnis genauso herunter.',
      },
      {
        question: 'Wie groß darf ein Bild sein, das ich komprimieren kann?',
        answer:
          'Es gibt kein festes Serverlimit, weil nichts hochgeladen wird. Sehr große Bilder sind nur durch den Speicher deines Geräts und die Canvas-Größe des Browsers begrenzt.',
      },
      {
        question: 'Wie komprimiere ich ein Bild auf unter 100 KB?',
        answer:
          'Wähle WebP-Ausgabe, setze eine maximale Breite wie 1280 px und senke den Qualitätsregler Schritt für Schritt, bis die angezeigte Dateigröße unter 100 KB fällt.',
      },
    ],
  },
  'image-resizer': {
    slug: 'bild-groesse-anpassen',
    name: 'Bildgrößen-Anpasser & Zuschneider',
    shortDescription:
      'Skaliere Bilder auf exakte Pixelmaße oder Social-/OG-Vorlagen – mit Seitenverhältnis-Sperre, intelligentem Center-Cover-Zuschnitt und PNG-/JPG-/WebP-Export.',
    keywords: [
      'bild größe ändern',
      'bild pixelgröße ändern',
      'bild zuschneiden online',
      'og bild 1200x630 erstellen',
      'bild online verkleinern kostenlos',
      'bild abmessungen ändern',
      'bild für instagram größe ändern',
      'bild auf größe zuschneiden',
      'bild auf 1200x630 ändern',
    ],
    seo: {
      title: 'Bildgröße anpassen – Exakte Pixel, Zuschnitt | UtilityFlow',
      description:
        'Passe Fotos mit dem Bildgrößen-Anpasser auf exakte Pixel an. Sperre das Seitenverhältnis, schneide per Cover-Zuschnitt zu und exportiere PNG, JPG oder WebP.',
      primaryKeyword: 'bildgröße anpassen',
      secondaryKeywords: [
        'foto auf exakte pixel skalieren',
        'seitenverhältnis cover zuschnitt tool',
        'social media bildgröße vorlage',
        'bild für social media größe ändern',
      ],
      longTailKeywords: [
        'bild auf 1200x630 open graph maße skalieren ohne verzerrung',
        'foto mittig auf quadrat 1080x1080 zuschneiden lokal',
        'bild pixelbreite und höhe im browser kostenlos ändern',
        'hochformat foto auf 1080x1080 quadrat für instagram skalieren',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Skaliere Grafiken und Fotos auf exakte Pixelmaße – oder klicke integrierte Vorlagen für Open Graph (1200×630), YouTube HD (1280×720), Quadrat (1080×1080) und Avatar (512×512) – mit hochwertigem Canvas-Resampling und optionalem Center-Cover-Zuschnitt, um Verzerrungen zu vermeiden.',
    instructions: [
      {
        title: 'Bild laden',
        description:
          'Lade ein beliebiges PNG-, JPG-, WebP- oder GIF-Bild hoch, um seine ursprüngliche Pixelbreite und -höhe zu lesen.',
      },
      {
        title: 'Breite, Höhe und Anpassungsmodus festlegen',
        description:
          'Gib eigene Pixel ein (optional mit gesperrtem Seitenverhältnis) oder wähle eine Social-Vorlage und dann Center-Cover-Zuschnitt oder exakte Streckung/Skalierung.',
      },
      {
        title: 'Ausgabeformat wählen',
        description:
          'Wähle PNG für Transparenz, JPG für Fotos oder WebP für die kleinste Datei vor dem Rendern.',
      },
      {
        title: 'Skaliertes Bild rendern',
        description:
          'Klicke auf „Skaliertes Bild rendern“, um die neue Version in deinen exakten Pixelmaßen zu erstellen.',
      },
      {
        title: 'Ergebnis prüfen und herunterladen',
        description:
          'Prüfe die Vorschau auf Schärfe und Zuschnitt, sieh dir die Dateigröße an und klicke dann auf „Herunterladen“, um sie zu speichern.',
      },
      {
        title: 'Tipp: Bild wirkt gestreckt oder unscharf?',
        description:
          'Aktiviere die Seitenverhältnis-Sperre oder wechsle zu Center-Cover-Zuschnitt, um Verzerrungen zu vermeiden, und vermeide starkes Hochskalieren über die Originalgröße hinaus.',
      },
    ],
    examples: [
      {
        title: 'Hohen Screenshot in eine 1200×630-Open-Graph-Karte zuschneiden',
        input: '1440×1600 Screenshot · Vorlage: OG-Teilen (1200×630) · Modus: Center-Cover-Zuschnitt',
        output: 'Scharfe 1200×630-Karte, vertikal zentriert, ohne Quetschen oder Verzerrung.',
        explanation: 'Cover-Zuschnitt skaliert proportional, bis der Zielrahmen gefüllt ist, und schneidet überschüssige Ränder gleichmäßig ab.',
      },
      {
        title: 'Profilbild als 512×512-Avatar vorbereiten',
        input: 'Hochformat-Porträtfoto · Vorlage: Avatar (512×512) · Modus: Center-Cover-Zuschnitt',
        output: 'Perfekt quadratisches 512×512-Profilbild mit zentriertem Gesicht.',
        explanation: 'Der Center-Zuschnitt behält die Bildmitte und schneidet nur die Ränder ab.',
      },
    ],
    benefits: [
      'Ein-Klick-Pixelvorlagen für Open Graph, YouTube HD, Quadrat und Avatar',
      'Center-Cover-Zuschnitt verhindert unschönes Strecken beim Ändern des Seitenverhältnisses',
      'Hochwertige Canvas-Bildglättung (imageSmoothingQuality) erhält scharfe Typografie und Linien',
      'Exportiert direkt nach PNG, JPG oder WebP mit echter Dateigrößenanzeige',
    ],
    useCases: [
      '1200×630-og:image-Karten für Blogbeiträge und Landingpages erstellen',
      '1080×1080-Produktfotos und 512×512-Profil-Avatare vorbereiten',
      'High-DPI-Screenshots vor dem Einfügen in Dokumentationen herunterskalieren',
      'Exakte Hero-Abmessungen erzeugen, die zu CMS-Template-Vorgaben passen',
    ],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen Center-Cover-Zuschnitt und Strecken / exakter Skalierung?',
        answer:
          'Center-Cover-Zuschnitt bewahrt natürliche Proportionen und schneidet überstehende Ränder symmetrisch ab, wenn das neue Seitenverhältnis abweicht. Exakte Skalierung zwingt das gesamte Originalbild in die Zielbreite und -höhe.',
      },
      {
        question: 'Kann ich ein kleines Foto sauber auf 4K hochskalieren?',
        answer:
          'Canvas-Interpolation kann größere Pixelraster exportieren, aber Hochskalieren über die native Auflösung hinaus kann keine fehlenden feinen Details erfinden.',
      },
      {
        question: 'Was ist die maximal unterstützte Ausgabegröße?',
        answer:
          'Eingaben sind auf bis zu 8000 px pro Achse begrenzt, um sicher innerhalb der Browser-Canvas-Speicherlimits zu bleiben.',
      },
      {
        question: 'Ist der Bildgrößen-Anpasser kostenlos?',
        answer:
          'Ja, er ist kostenlos – ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung, wie viele Bilder du skalierst.',
      },
      {
        question: 'Was ist der Unterschied zwischen Skalieren und Zuschneiden eines Bildes?',
        answer:
          'Skalieren ändert die gesamten Pixelabmessungen des Bildes, während Zuschneiden einen Teil des Bildes abschneidet. Dieses Tool kann beides, einschließlich Center-Cover-Zuschnitt.',
      },
      {
        question: 'Kann der Bildgrößen-Anpasser ein Bild auf 1200x630 für Social Sharing bringen?',
        answer:
          'Ja, wähle die Open-Graph-Vorlage (1200×630), und das Tool bringt dein Bild exakt auf die Größe für Linkvorschauen auf Social-Media-Plattformen.',
      },
      {
        question: 'Wie skaliere ich ein Bild, ohne es zu strecken?',
        answer:
          'Lasse die Seitenverhältnis-Sperre aktiviert oder nutze Center-Cover-Zuschnitt, damit das Tool proportional skaliert, statt das Bild zu quetschen.',
      },
      {
        question: 'Kann ich ein Bild auf ein Quadrat von 1080x1080 skalieren?',
        answer:
          'Ja, wähle die Quadrat-Vorlage oder gib 1080 für Breite und Höhe ein, jeweils mit aktiviertem Center-Cover-Zuschnitt.',
      },
      {
        question: 'Verringert das Skalieren eines Bildes seine Dateigröße?',
        answer:
          'Meistens ja, weil weniger Pixel weniger Daten bedeuten – besonders wenn du zusätzlich als WebP oder JPG exportierst.',
      },
      {
        question: 'Welche Bildformate kann ich skalieren?',
        answer:
          'Du kannst PNG-, JPG-, WebP- und GIF-Bilder skalieren und sie als PNG, JPG oder WebP exportieren.',
      },
      {
        question: 'Wird mein Bild durch Skalieren unscharf?',
        answer:
          'Herunterskalieren bleibt dank hochwertiger Canvas-Glättung meist scharf. Hochskalieren über die Originalgröße hinaus kann feine Details weicher machen.',
      },
      {
        question: 'Kann ich ein Bild für ein Profilfoto skalieren?',
        answer:
          'Ja, nutze die Avatar-Vorlage (512×512) mit Center-Cover-Zuschnitt, um ein perfekt quadratisches Profilfoto zu erhalten.',
      },
      {
        question: 'Was ist Center-Cover-Zuschnitt im Bildgrößen-Anpasser?',
        answer:
          'Er skaliert das Bild, bis es den Zielrahmen füllt, und schneidet dann die überstehenden Ränder gleichmäßig von der Mitte aus ab, sodass nichts gestreckt aussieht.',
      },
      {
        question: 'Lädt der Bildgrößen-Anpasser meine Fotos irgendwo hoch?',
        answer:
          'Nein, das gesamte Skalieren passiert lokal in deinem Browser, und deine Bilder verlassen dein Gerät niemals.',
      },
      {
        question: 'Kann ich ein Bild auf meinem Handy skalieren?',
        answer:
          'Ja, es funktioniert in Handy-Browsern. Lade ein Foto hoch, gib die neuen Abmessungen ein und lade das Ergebnis herunter.',
      },
      {
        question: 'Was passiert mit Transparenz, wenn ich ein PNG skaliere?',
        answer:
          'Transparenz bleibt erhalten, solange du als PNG oder WebP exportierst. Der Export als JPG füllt transparente Bereiche mit Weiß.',
      },
      {
        question: 'Kann ich mehrere Bilder auf dieselbe Größe skalieren?',
        answer:
          'Das Tool skaliert ein Bild nach dem anderen. Wiederhole dieselbe Vorlage oder dieselben Abmessungen für jedes Bild, um sie konsistent zu halten.',
      },
      {
        question: 'Was ist das größte Bild, das der Bildgrößen-Anpasser verarbeiten kann?',
        answer:
          'Eingaben sind auf 8000 px pro Seite begrenzt, um innerhalb der Browser-Canvas-Speicherlimits zu bleiben.',
      },
      {
        question: 'Wie skaliere ich ein Bild für YouTube-Thumbnails?',
        answer:
          'Wähle die YouTube-HD-Vorlage (1280×720), damit dein Thumbnail der empfohlenen 16:9-Größe entspricht. Die Vorlage stellt Breite, Höhe und Seitenverhältnis automatisch ein, sodass du nur noch exportieren musst.',
      },
      {
        question: 'Warum ist meine skalierte Bilddatei immer noch groß?',
        answer:
          'Die Pixelgröße ist nur ein Teil der Geschichte. Exportiere als WebP oder JPG statt PNG oder nutze danach den Bild-Kompressor, um die Datei weiter zu verkleinern.',
      },
    ],
  },
  'image-format-converter': {
    slug: 'bildformat-konverter',
    name: 'Bildformat-Konverter (PNG / JPG / WebP)',
    shortDescription:
      'Wandle PNG-, JPG-, WebP-, GIF- und SVG-Bilder stapelweise in PNG, JPG oder WebP um – lokal, mit Qualitätskontrolle und eigener JPEG-Hintergrundfüllung.',
    keywords: [
      'bildformat konverter',
      'png zu webp konverter',
      'webp zu png konverter',
      'svg zu png browser konverter',
      'jpg zu png umwandeln',
      'png zu jpg umwandeln',
      'bild konverter stapel',
      'webp zu jpg konverter',
      'bild konverter online kostenlos',
    ],
    seo: {
      title: 'Bildformat-Konverter – PNG, JPG & WebP | UtilityFlow',
      description:
        'Wandle Bilder mit dem Bildformat-Konverter zwischen PNG, JPG und WebP um. Wandle stapelweise um, stelle die Qualität ein und fülle transparente Hintergründe.',
      primaryKeyword: 'bildformat konverter',
      secondaryKeywords: [
        'webp zu jpg oder png umwandeln',
        'png zu webp stapel konverter',
        'transparentes png zu jpg hintergrundfüllung',
        'jpg zu png kostenlos umwandeln',
      ],
      longTailKeywords: [
        'mehrere png und jpg bilder stapelweise zu webp offline umwandeln',
        'webp screenshot zu standard png ohne upload umwandeln',
        'transparenten png hintergrund bei jpg umwandlung farbig füllen',
        'bildformat von png zu jpg im browser ändern',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Wandle PNG-, JPG-, WebP-, GIF- und SVG-Dateien stapelweise in webtaugliches WebP, universelles JPG oder verlustfreies transparentes PNG um – komplett in deinem Browser, mit eigener Hintergrund-Matte-Füllung beim Abflachen von Transparenz zu JPEG.',
    instructions: [
      {
        title: 'Zielformat und Optionen wählen',
        description:
          'Wähle PNG-, JPG- oder WebP-Ausgabe, stelle bei Bedarf die verlustbehaftete Qualität ein und wähle eine Hintergrund-Matte-Farbe, wenn du transparente Bilder in JPG umwandelst.',
      },
      {
        title: 'Ein oder mehrere Bilder auswählen',
        description:
          'Lade eine einzelne Datei oder einen Mehrdatei-Stapel, um jedes Bild sauber in voller nativer Auflösung zu rendern.',
      },
      {
        title: 'Vorschau jeder Datei prüfen',
        description:
          'Prüfe Abmessungen und geschätzte Größe jedes umgewandelten Bildes, bevor du etwas herunterlädst.',
      },
      {
        title: 'Stapel umwandeln',
        description:
          'Das Tool rendert jedes Bild in voller nativer Auflösung in deinem gewählten Format – direkt in deinem Browser.',
      },
      {
        title: 'Umgewandelte Assets herunterladen',
        description:
          'Vergleiche Abmessungen und neue Byte-Größe jeder Datei und lade deine umgewandelten Bilder einzeln herunter.',
      },
      {
        title: 'Tipp: Transparente Bereiche wurden schwarz?',
        description:
          'Wenn ein PNG, das in JPG umgewandelt wurde, dort schwarz zeigt, wo es transparent war, wandle es erneut um – mit einer Matte-Füllfarbe wie Weiß oder deiner Markenfarbe.',
      },
    ],
    examples: [
      {
        title: 'Transparentes SVG-/PNG-Logo auf Marken-Navy für JPG abflachen',
        input: 'Transparentes logo.png · Ziel: JPG (90 %) · Füllung: #FFFFFF',
        output: 'logo.jpg mit sauberem weißem Hintergrund und ohne schwarze Transparenz-Artefakte',
        explanation: 'Das explizite Füllen der Canvas-Matte vor dem Zeichnen verhindert schwarze Ränder beim Umwandeln von Alpha-PNGs in JPEG.',
      },
      {
        title: 'Heruntergeladene WebP-Dateien stapelweise in PNG umwandeln',
        input: '8 WebP-Screenshots · Ziel: PNG',
        output: '8 PNG-Dateien in voller Auflösung, bereit für ältere Programme und Upload-Formulare.',
        explanation: 'Die Stapelverarbeitung wandelt alle Dateien in einem Durchgang in dasselbe Zielformat um.',
      },
    ],
    benefits: [
      'Verarbeitet Stapel mehrerer Bilder in voller Auflösung ohne Server-Warteschlangen',
      'Konfigurierbare JPEG-Hintergrundfüllfarbe vermeidet hässliche schwarze Transparenzfüllungen',
      'Wandelt WebP-Downloads zurück in universell akzeptierte PNG- oder JPG-Dateien um',
      'Rendert Vektor-SVG-Dateien direkt in scharfe Raster-PNG- oder WebP-Bilder',
    ],
    useCases: [
      'Heruntergeladene .webp-Dateien in .png oder .jpg für ältere Software umwandeln',
      'Moderne .webp-Assets stapelweise für statische Websites und CDNs erstellen',
      'Scharfe PNGs aus SVG-Markenicons für Folien oder Social-Media-Posts exportieren',
      'Formatgrößenunterschiede von PNG, JPG und WebP nebeneinander prüfen',
    ],
    faqs: [
      {
        question: 'Kann dieses Tool Apple-HEIC-Fotos umwandeln?',
        answer:
          'Die HEIC-Dekodierung hängt von der Browser-Unterstützung ab (Safari unterstützt HEIC nativ, während Chrome/Firefox typischerweise PNG-, JPG-, WebP-, SVG- oder GIF-Eingaben brauchen).',
      },
      {
        question: 'Verbessert das Umwandeln von JPG in PNG verlorene Fotodetails?',
        answer:
          'Nein. Das Umwandeln eines bereits komprimierten JPG in PNG bewahrt es ab dann verlustfrei, kann aber frühere JPEG-Komprimierungsartefakte nicht wiederherstellen.',
      },
      {
        question: 'Werden Dateilimits erzwungen?',
        answer:
          'Es gilt nur der Arbeitsspeicher deines Geräts; die gesamte Kodierung erfolgt lokal ohne Server-Dateigrößenlimits.',
      },
      {
        question: 'Ist der Bildformat-Konverter kostenlos?',
        answer:
          'Ja, er ist kostenlos – ohne Konto, ohne Wasserzeichen und ohne Begrenzung der Anzahl an Umwandlungen.',
      },
      {
        question: 'Welche Formate kann ich von und zu umwandeln?',
        answer:
          'Du kannst PNG-, JPG-, WebP-, GIF- und SVG-Dateien in PNG-, JPG- oder WebP-Ausgabe umwandeln.',
      },
      {
        question: 'Warum PNG in WebP umwandeln?',
        answer:
          'WebP-Dateien sind bei ähnlicher visueller Qualität meist deutlich kleiner als PNG, was Webseiten schneller laden lässt.',
      },
      {
        question: 'Warum WebP in JPG oder PNG umwandeln?',
        answer:
          'Manche älteren Apps, Drucker und Upload-Formulare akzeptieren kein WebP, sodass das Zurückwandeln in JPG oder PNG die universelle Kompatibilität wiederherstellt.',
      },
      {
        question: 'Kann ich mehrere Bilder auf einmal umwandeln?',
        answer:
          'Ja, du kannst einen Stapel Bilder laden und sie alle in einem Durchgang in dasselbe Zielformat umwandeln.',
      },
      {
        question: 'Entfernt das Umwandeln in JPG Transparenz?',
        answer:
          'Ja, JPG hat keinen Alpha-Kanal, sodass transparente Bereiche mit der von dir gewählten Matte-Farbe gefüllt werden, etwa Weiß.',
      },
      {
        question: 'Welche Matte-Farbe sollte ich nutzen, wenn ich ein transparentes PNG in JPG umwandle?',
        answer:
          'Weiß ist die sicherste Voreinstellung. Passe die Hintergrundfarbe deiner Website oder Folie an, um einen nahtlosen Look zu erhalten.',
      },
      {
        question: 'Kann ich ein Foto in WebP umwandeln und seine Qualität behalten?',
        answer:
          'Ja, WebP bei 85–90 % Qualität sieht meist identisch zum Original-JPG aus und erzeugt eine merklich kleinere Datei.',
      },
      {
        question: 'Kann ich ein SVG-Logo in PNG umwandeln?',
        answer:
          'Ja, das Tool rasterisiert SVG-Dateien in scharfe PNG- oder WebP-Bilder in ihren nativen Abmessungen.',
      },
      {
        question: 'Lädt der Bildformat-Konverter meine Bilder hoch?',
        answer:
          'Nein, jede Umwandlung läuft lokal in deinem Browser, und deine Dateien verlassen dein Gerät niemals.',
      },
      {
        question: 'Welche Qualität sollte ich beim Umwandeln in JPG nutzen?',
        answer:
          'Eine Qualität von 85–90 % hält Fotos sauber aussehend und bleibt deutlich kleiner als PNG. Senke sie für kleinere Dateien.',
      },
      {
        question: 'Kann ich animierte GIFs mit diesem Tool umwandeln?',
        answer:
          'GIF-Dateien können geladen werden, aber die Umwandlung rendert ein einzelnes Standbild, statt die Animation zu erhalten.',
      },
      {
        question: 'Warum ist mein umgewandeltes PNG größer als das Original-JPG?',
        answer:
          'PNG ist verlustfrei, sodass ein Foto, das von komprimiertem JPG in PNG umgewandelt wird, jedes Pixel ohne Komprimierung speichert und meist größer wird.',
      },
      {
        question: 'Behält der Konverter die ursprünglichen Bildabmessungen?',
        answer:
          'Ja, umgewandelte Bilder behalten ihre volle native Auflösung, sofern du sie nicht separat mit dem Bildgrößen-Anpasser skalierst.',
      },
      {
        question: 'Kann ich den Bildformat-Konverter auf meinem Handy nutzen?',
        answer:
          'Ja, er funktioniert in Handy-Browsern. Wähle Bilder von deinem Gerät aus und lade die umgewandelten Dateien herunter.',
      },
      {
        question: 'Was ist das beste Format für Website-Bilder?',
        answer:
          'WebP ist für Fotos und Grafiken im Web meist am besten, während PNG besser ist, wenn du Transparenz oder verlustfreie Qualität brauchst.',
      },
      {
        question: 'Enthalten umgewandelte Bilder Wasserzeichen?',
        answer:
          'Nein, umgewandelte Dateien sind saubere Kopien ohne hinzugefügte Wasserzeichen oder Branding. Der Format-Konverter ändert nur das Dateiformat; Ihr Bild selbst bleibt unverändert.',
      },
    ],
  },
  'image-rotate-flip': {
    slug: 'bild-drehen-spiegeln',
    name: 'Bild drehen, spiegeln & filtern',
    shortDescription:
      'Drehe Bilder um 90°/180°/270°, spiegle sie horizontal oder vertikal und wende Graustufen-, Helligkeits- und Kontrastfilter live in deinem Browser an.',
    keywords: [
      'bild online drehen',
      'bild horizontal spiegeln',
      'graustufen bild filter',
      'bild helligkeit kontrast anpassen',
      'foto 90 grad drehen',
      'foto online spiegeln',
      'bild spiegeln online',
      'bild gerade ausrichten online',
      'foto filter editor online',
    ],
    seo: {
      title: 'Bild drehen & spiegeln – Filter online | UtilityFlow',
      description:
        'Drehe Bilder online um 90, 180 oder 270 Grad, spiegle Fotos horizontal oder vertikal und passe Helligkeit, Kontrast und Graustufen an – kostenlos im Browser.',
      primaryKeyword: 'bild online drehen',
      secondaryKeywords: [
        'bild horizontal vertikal spiegeln',
        'foto zu graustufen online umwandeln',
        'helligkeit und kontrast im browser anpassen',
        'foto 90 grad online drehen',
      ],
      longTailKeywords: [
        'seitliches foto 90 grad offline im browser drehen',
        'selfie bild horizontal spiegeln ohne photoshop',
        'schwarz weiß graustufen filter anwenden und png exportieren',
        'gescanntes dokument bild in richtige ausrichtung drehen',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Korrigiere seitliche Ausrichtung, spiegle Selfies horizontal oder vertikal, wandle Fotos in Schwarz-Weiß-Graustufen um und feinjustiere Helligkeit und Kontrast in Echtzeit mit lokalen HTML5-Canvas-2D-Transformationen.',
    instructions: [
      {
        title: 'Bild hochladen',
        description:
          'Wähle ein beliebiges PNG-, JPG-, WebP- oder GIF-Bild, um es in die interaktive Canvas-Vorschau zu laden.',
      },
      {
        title: 'Drehen, spiegeln oder Filter anwenden',
        description:
          'Nutze die Buttons „Links drehen“/„Rechts drehen“, die Schalter „Horizontal spiegeln“/„Vertikal spiegeln“, den Graustufen-Schalter und die Helligkeits-/Kontrastregler.',
      },
      {
        title: 'Ergebnis live in der Vorschau prüfen',
        description:
          'Prüfe die Canvas-Vorschau nach jeder Änderung, um zu bestätigen, dass Ausrichtung und Filterstärke richtig aussehen.',
      },
      {
        title: 'Bei Bedarf zurücksetzen',
        description:
          'Nutze den Zurücksetzen-Button, um alle Drehungen, Spiegelungen und Filteränderungen rückgängig zu machen und vom Original neu zu starten.',
      },
      {
        title: 'Ausgabeformat wählen',
        description:
          'Wähle PNG, um Transparenz zu behalten, JPG für Fotos oder WebP für kleinere Dateien vor dem Export.',
      },
      {
        title: 'Bearbeitetes Bild exportieren',
        description:
          'Klicke auf „Herunterladen“, um dein gedrehtes, gespiegeltes oder gefiltertes Bild auf deinem Gerät zu speichern.',
      },
    ],
    examples: [
      {
        title: 'Seitliches Smartphone-Foto korrigieren und Helligkeit erhöhen',
        input: '3024×4032 Foto, 90° im Uhrzeigersinn gedreht · Helligkeit: 110 % · Kontrast: 105 %',
        output: '4032×3024 aufrechtes Bild, sauber exportiert, EXIF-Ausrichtung in Pixel gebacken.',
        explanation: 'Canvas tauscht Breite und Höhe bei 90°- und 270°-Drehungen automatisch.',
      },
      {
        title: 'Gespiegeltes Selfie horizontal korrigieren',
        input: 'Selfie mit spiegelverkehrtem Text im Hintergrund · Horizontal spiegeln: ein',
        output: 'Korrekt lesbarer Text, Bild in normaler Ausrichtung.',
        explanation: 'Horizontales Spiegeln kehrt die linke und rechte Seite um wie eine Reflexion im Spiegel.',
      },
    ],
    benefits: [
      'Live-Pixelvorschau aktualisiert sich sofort ohne Upload-Verzögerung',
      'Backt die Ausrichtung sauber in echte Pixelkoordinaten statt in fragile EXIF-Flags',
      'Kombiniert Drehen, Spiegeln und Farb-/Ton-Anpassungen in einem sauberen Arbeitsbereich',
      'Der nicht-destruktive Zurücksetzen-Button stellt jederzeit die Standards wieder her',
    ],
    useCases: [
      'Gescannte Dokumente oder Belege gerade ausrichten, die seitlich aufgenommen wurden',
      'Rückwärts aufgenommene Webcam-Bilder oder gespiegelte Screenshots ent-spiegeln',
      'Kontrastreiche Graustufen-Grafiken für Druck oder Dokumentation erstellen',
      'Unterbelichtete Produktfotos vor dem Einstellen schnell aufhellen',
    ],
    faqs: [
      {
        question: 'Kodiert das Drehen eines Bildes die Pixel neu?',
        answer:
          'Ja. Das Zeichnen auf HTML5 Canvas backt die neue Ausrichtung und Filteranpassungen dauerhaft in jedes Pixel, sodass alle Apps es richtig herum anzeigen.',
      },
      {
        question: 'Kann ich transparente Hintergründe beim Drehen oder Spiegeln erhalten?',
        answer:
          'Ja – lasse das Ausgabeformat auf PNG oder WebP eingestellt, um volle Alpha-Transparenz bei gedrehten/gespiegelten Grafiken zu behalten.',
      },
      {
        question: 'Werden Bearbeitungen auf euren Servern gespeichert?',
        answer:
          'Nein. Alles läuft in deinem eigenen Browser-Tab und wird verworfen, wenn du die Seite schließt.',
      },
      {
        question: 'Ist das Bild-Drehen-Tool kostenlos?',
        answer:
          'Ja, es ist komplett kostenlos – ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung.',
      },
      {
        question: 'Wie drehe ich ein Bild um 90 Grad?',
        answer:
          'Lade dein Bild hoch und klicke auf „Rechts drehen“ oder „Links drehen“. Jeder Klick dreht das Bild um 90 Grad.',
      },
      {
        question: 'Kann ich ein Bild um 180 Grad drehen?',
        answer:
          'Ja, klicke zweimal in dieselbe Richtung auf „Drehen“, um das Bild auf den Kopf zu stellen.',
      },
      {
        question: 'Wie spiegle ich ein Bild horizontal?',
        answer:
          'Nutze den Schalter „Horizontal spiegeln“, um das Bild von links nach rechts zu spiegeln – nützlich, um gespiegelte Selfies zu korrigieren.',
      },
      {
        question: 'Was ist der Unterschied zwischen Spiegeln und Drehen eines Bildes?',
        answer:
          'Drehen dreht das Bild um seinen Mittelpunkt, während Spiegeln es wie eine Reflexion im Spiegel umkehrt.',
      },
      {
        question: 'Kann ich ein Foto drehen, ohne Qualität zu verlieren?',
        answer:
          'Das Tool kodiert das Bild per Canvas neu. Der Export als PNG bleibt verlustfrei. Der JPG-Export wendet leichte Komprimierung an.',
      },
      {
        question: 'Ändert das Drehen eines Bildes seine Abmessungen?',
        answer:
          'Eine 90- oder 270-Grad-Drehung tauscht Breite und Höhe. Eine 180-Grad-Drehung behält dieselben Abmessungen.',
      },
      {
        question: 'Kann ich ein Foto schwarz-weiß machen?',
        answer:
          'Ja, schalte den Graustufen-Schalter ein, um dein Foto sofort in Schwarz-Weiß umzuwandeln.',
      },
      {
        question: 'Wie helle ich ein dunkles Foto auf?',
        answer:
          'Bewege den Helligkeitsregler über 100 % und füge etwas Kontrast hinzu, damit das Bild nicht ausgewaschen wirkt.',
      },
      {
        question: 'Kann ich ein PNG drehen und seine Transparenz behalten?',
        answer:
          'Ja, exportiere als PNG oder WebP, um transparente Bereiche nach dem Drehen oder Spiegeln zu erhalten.',
      },
      {
        question: 'Werden meine bearbeiteten Fotos auf einen Server hochgeladen?',
        answer:
          'Nein, das gesamte Drehen, Spiegeln und Filtern läuft lokal in deinem Browser, und nichts wird hochgeladen.',
      },
      {
        question: 'Kann ich ein Bild auf meinem Handy drehen?',
        answer:
          'Ja, es funktioniert in Handy-Browsern. Lade ein seitliches Foto hoch, drehe es aufrecht und lade die korrigierte Version herunter.',
      },
      {
        question: 'Warum ist mein Foto nach dem Hochladen seitlich?',
        answer:
          'Manche Handys speichern die Ausrichtung als EXIF-Flag, das nicht jede App liest. Dieses Tool backt die korrekte Ausrichtung in die Pixel, sodass es überall aufrecht angezeigt wird.',
      },
      {
        question: 'Kann ich eine Drehung oder einen Filter rückgängig machen?',
        answer:
          'Ja, der Zurücksetzen-Button stellt jederzeit das Originalbild und die Standard-Filtereinstellungen wieder her.',
      },
      {
        question: 'Korrigiert das Tool schiefe oder geneigte Fotos?',
        answer:
          'Es dreht in 90-Grad-Schritten, korrigiert also seitliche oder auf dem Kopf stehende Fotos. Kleine Neigungskorrekturen werden nicht unterstützt.',
      },
      {
        question: 'Welche Bildformate kann ich drehen und spiegeln?',
        answer:
          'Du kannst PNG-, JPG-, WebP- und GIF-Bilder bearbeiten und sie als PNG, JPG oder WebP exportieren.',
      },
      {
        question: 'Kann ich ein Bild in einem Durchgang drehen und spiegeln?',
        answer:
          'Ja, du kannst Drehungen, horizontale oder vertikale Spiegelungen und Filter kombinieren, bevor du ein einziges fertiges Bild exportierst.',
      },
    ],
  },
  'image-to-base64': {
    slug: 'bild-zu-base64-konverter',
    name: 'Bild-zu-Base64- & Data-URI-Konverter',
    shortDescription:
      'Kodiere PNG-, JPG-, WebP-, SVG- und ICO-Bilder in Base64-Data-URIs, HTML-<img>-Tags und CSS-Regeln – oder dekodiere Base64-Strings zurück in Vorschauen.',
    keywords: [
      'bild zu base64',
      'base64 bild decoder',
      'data uri generator',
      'css hintergrund base64 bild',
      'bild zu data uri umwandeln',
      'base64 encoder bild',
      'bild zu base64 online kostenlos',
      'png zu base64 kodieren',
      'base64 zu bild konverter',
    ],
    seo: {
      title: 'Bild zu Base64 – Data-URI-Konverter online | UtilityFlow',
      description:
        'Erstelle mit dem Bild-zu-Base64-Konverter kostenlos Data-URIs, HTML-img-Tags und CSS-Hintergrund-Snippets – oder dekodiere Base64 zurück in eine Bildvorschau.',
      primaryKeyword: 'bild zu base64',
      secondaryKeywords: [
        'data uri bild encoder',
        'base64 zu bild vorschau',
        'svg oder png inline in css',
        'bild zu base64 online kostenlos',
      ],
      longTailKeywords: [
        'png icon zu css background-image data uri offline umwandeln',
        'rohen base64 string in herunterladbare bildvorschau dekodieren',
        'bild binärgröße mit base64 string größe vergleichen',
        'kleines logo bild zu base64 für html e-mail kodieren',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Verwandle kleine Icons, Logos und E-Mail-Grafiken in eigenständige data:image/...;base64,...-URIs, kopierfertige HTML-<img>-Tags und CSS-background-image-Deklarationen – oder wechsle den Modus, um rohe Base64-Bild-Payloads zu inspizieren und herunterzuladen.',
    instructions: [
      {
        title: 'Kodieren- oder Dekodieren-Modus wählen',
        description:
          'Nutze „Bild → Base64-Data-URI“, um eine Datei zu kodieren, oder „Base64 → Bildvorschau“, um eingefügte Base64-Payloads zu rendern.',
      },
      {
        title: 'Bild laden oder Base64-Text einfügen',
        description:
          'Wähle ein beliebiges PNG-, JPG-, WebP-, SVG-, GIF- oder ICO-Asset (oder füge entweder einen vollständigen data:image/...-String oder rohen Base64-Text ein).',
      },
      {
        title: 'Größenvergleich prüfen',
        description:
          'Vergleiche die ursprüngliche Dateigröße mit der Base64-Stringgröße, um den Overhead von etwa 33 % zu sehen, bevor du sie einbettest.',
      },
      {
        title: 'Benötigtes Ausgabeformat wählen',
        description:
          'Wähle die vollständige Data-URI, den rohen Base64-String, das HTML-<img>-Tag oder das CSS-background-image-Snippet.',
      },
      {
        title: 'Snippet kopieren oder Vorschau herunterladen',
        description:
          'Kopiere die Data-URI, das rohe Base64, das HTML-<img>-Tag oder das CSS-Hintergrund-Snippet – oder lade ein dekodiertes Vorschaubild herunter.',
      },
      {
        title: 'Tipp: Eingefügtes Base64 funktioniert nicht?',
        description:
          'Stelle sicher, dass du den vollständigen String ohne Zeilenumbrüche eingefügt hast, und prüfe, ob der Decoder das korrekte data:image/...-Präfix für dein Format hinzugefügt hat.',
      },
    ],
    examples: [
      {
        title: 'Ein 2-KB-SVG-Häkchen inline in CSS einfügen',
        input: 'check.svg (2.048 Bytes)',
        output: 'data:image/svg+xml;base64,... (~2,7 KB) + sofort einsetzbare CSS-background-image-Regel',
        explanation: 'Spart einen zusätzlichen HTTP-Round-Trip für winzige UI-Icons und Offline-Einzeldatei-HTML-E-Mails.',
      },
      {
        title: 'Base64-Payload aus einer API-Antwort dekodieren',
        input: 'Roher Base64-String aus einer JSON-API-Antwort, ohne data:-Präfix',
        output: 'Bildvorschau im Browser plus Download-Option als reguläre Bilddatei.',
        explanation: 'Der Decoder ergänzt automatisch das Standard-PNG-Data-URI-Präfix, wenn eines fehlt.',
      },
    ],
    benefits: [
      'Sofortiger Vergleich von Binärdateigröße und ~33 % Base64-String-Overhead',
      'Erstellt Data-URI, rohes Base64, HTML-<img>- und CSS-Hintergrund-Snippets gleichzeitig',
      'Fügt automatisch ein PNG-Data-URI-Präfix hinzu, wenn du rohes Base64 ohne Header einfügst',
      'Hält proprietäre Assets und API-Antwort-Blobs offline in deinem Browser',
    ],
    useCases: [
      'Winzige Icons in CSS-Bundles oder eigenständige HTML-Berichte einbetten',
      'Bild-Data-URIs aus JSON-APIs oder Webhooks debuggen',
      'Kleine Marken-Badges in transaktionale HTML-E-Mail-Templates einbetten',
      'Kodierte Bild-Payloads aus Browser-DevTools inspizieren',
    ],
    faqs: [
      {
        question: 'Wann sollte ich Base64-Bilder statt normaler Bild-URLs verwenden?',
        answer:
          'Nutze Base64-Data-URIs sparsam für sehr kleine Icons (typischerweise unter 5–10 KB) oder Einzeldatei-HTML-Exporte. Base64 vergrößert Daten um ~33 % und kann nicht wie normale URLs seitenübergreifend separat gecacht werden.',
      },
      {
        question: 'Kann der Decoder rohe Base64-Strings ohne das Präfix „data:image/png;base64,“ in der Vorschau zeigen?',
        answer:
          'Ja! Der Wechsel zu „Base64 → Bildvorschau“ entfernt automatisch Leerzeichen und fügt ein Standard-PNG-Data-URI-Präfix hinzu, wenn eines fehlt.',
      },
      {
        question: 'Funktioniert es mit Vektor-SVGs?',
        answer:
          'Ja. Das Hochladen einer .svg-Datei erzeugt eine gültige data:image/svg+xml;base64,...-URI zusammen mit HTML- und CSS-Snippets.',
      },
      {
        question: 'Ist der Bild-zu-Base64-Konverter kostenlos?',
        answer:
          'Ja, er ist kostenlos – ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung, wie viele Bilder du kodierst oder dekodierst.',
      },
      {
        question: 'Was ist eine Base64-Data-URI?',
        answer:
          'Eine Data-URI bettet ein Bild direkt in eine Webseite, ein Stylesheet oder eine E-Mail als Text ein – beginnend mit data:image/...;base64, gefolgt von den kodierten Daten.',
      },
      {
        question: 'Warum ist der Base64-String größer als mein Bild?',
        answer:
          'Base64-Kodierung stellt Binärdaten mit Textzeichen dar, was etwa 33 % Overhead zur ursprünglichen Dateigröße hinzufügt.',
      },
      {
        question: 'Welche Bildgröße eignet sich am besten für Base64-Kodierung?',
        answer:
          'Halte Base64-Bilder klein, typischerweise unter 5–10 KB, etwa Icons und Logos. Größere Bilder blähen dein HTML oder CSS auf und können nicht separat gecacht werden.',
      },
      {
        question: 'Kann ich ein JPG in Base64 umwandeln?',
        answer:
          'Ja, JPG-, PNG-, WebP-, SVG-, GIF- und ICO-Dateien können alle in Base64-Data-URIs kodiert werden.',
      },
      {
        question: 'Wie nutze ich ein Base64-Bild in HTML?',
        answer:
          'Kopiere das erstellte HTML-<img>-Tag und füge es in deine Seite ein. Das src-Attribut enthält bereits die vollständige Data-URI.',
      },
      {
        question: 'Wie nutze ich ein Base64-Bild in CSS?',
        answer:
          'Kopiere das CSS-background-image-Snippet und füge es in dein Stylesheet ein, um das Bild ohne separate Dateianfrage anzuzeigen.',
      },
      {
        question: 'Kann ich einen Base64-String zurück in ein Bild dekodieren?',
        answer:
          'Ja, wechsle zu „Base64 → Bildvorschau“, füge den String ein, und das Tool rendert das Bild, damit du es in der Vorschau sehen oder herunterladen kannst.',
      },
      {
        question: 'Brauche ich beim Dekodieren das Präfix data:image/png;base64,?',
        answer:
          'Nein, wenn du rohes Base64 ohne Header einfügst, fügt das Tool automatisch ein Standard-PNG-Data-URI-Präfix hinzu.',
      },
      {
        question: 'Lädt das Bild-zu-Base64-Tool meine Dateien hoch?',
        answer:
          'Nein, Kodierung und Dekodierung laufen vollständig in deinem Browser, und deine Bilder verlassen dein Gerät niemals.',
      },
      {
        question: 'Kann ich ein SVG in Base64 kodieren?',
        answer:
          'Ja, SVG-Dateien erzeugen eine gültige data:image/svg+xml;base64,...-URI zusammen mit passenden HTML- und CSS-Snippets.',
      },
      {
        question: 'Was ist der Unterschied zwischen rohem Base64 und einer Data-URI?',
        answer:
          'Rohes Base64 ist nur der kodierte Text, während eine Data-URI den Header data:image/...;base64, hinzufügt, damit Browser den Bildtyp kennen.',
      },
      {
        question: 'Kann ich Base64-Bilder in E-Mails nutzen?',
        answer:
          'Ja, kleine Base64-Bilder funktionieren gut in eigenständigen HTML-E-Mails, auch wenn manche E-Mail-Clients Data-URI-Unterstützung einschränken – teste also vor dem Versenden.',
      },
      {
        question: 'Gibt es ein Dateigrößenlimit für die Kodierung?',
        answer:
          'Es gibt kein Serverlimit, weil nichts hochgeladen wird. Sehr große Bilder sind nur durch deinen Browser-Speicher begrenzt, und riesige Base64-Strings sind unpraktisch einzufügen.',
      },
      {
        question: 'Kann ich ein Base64-Bild in eine herunterladbare Datei umwandeln?',
        answer:
          'Ja, dekodiere den String im Modus „Base64 → Bildvorschau“ und nutze die Download-Option, um ihn als reguläre Bilddatei zu speichern.',
      },
      {
        question: 'Verändert Base64-Kodierung die Bildqualität?',
        answer:
          'Nein, Base64 ist eine verlustfreie Textdarstellung exakt derselben Bytes, sodass das dekodierte Bild mit dem Original identisch ist.',
      },
      {
        question: 'Kann ich den Bild-zu-Base64-Konverter auf meinem Handy nutzen?',
        answer:
          'Ja, er funktioniert in Handy-Browsern. Kodiere ein Bild aus deiner Fotobibliothek oder füge einen Base64-String zur Vorschau ein.',
      },
    ],
  },
  'color-contrast-checker': {
    slug: 'farbkontrast-pruefer',
    name: 'Farbkontrast-Prüfer & Paletten-Extraktor',
    shortDescription:
      'Teste WCAG-2.1-AA-/AAA-Farbkontrastverhältnisse, wandle HEX-/RGB-/HSL-Werte um und extrahiere dominante Farbpaletten aus hochgeladenen Bildern.',
    keywords: [
      'wcag farbkontrast prüfen',
      'barrierefreiheit kontrastverhältnis',
      'bild farbpalette extrahieren',
      'hex rgb hsl farbwähler',
      'wcag aa kontrastverhältnis rechner',
      'aaa kontrast prüfen online',
      'barrierefreie farbkombinationen',
      'text hintergrund kontrast test',
      'design barrierefreiheit prüfen',
    ],
    seo: {
      title: 'Farbkontrast-Prüfer – WCAG 2.1 AA/AAA | UtilityFlow',
      description:
        'Prüfe WCAG-2.1-AA- und AAA-Kontrastverhältnisse für Text- und Hintergrund-Farbpaare, wandle HEX, RGB und HSL um und extrahiere Paletten aus Bildern – kostenlos.',
      primaryKeyword: 'farbkontrast prüfer',
      secondaryKeywords: [
        'wcag aa aaa kontrastverhältnis rechner',
        'farbpalette aus bild extrahieren',
        'barrierefreier text hintergrund farb prüfer',
        'wcag kontrastverhältnis normaler und großer text',
      ],
      longTailKeywords: [
        'wcag 2.1 kontrastverhältnis normaler und großer text online testen',
        'dominante hex farbfelder aus screenshot in kontrast prüfer ziehen',
        'dark mode ui vordergrund hintergrund farb barrierefreiheit prüfen',
        'welches kontrastverhältnis besteht wcag aa für fließtext',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Validiere UI-Farbpaarungen anhand offizieller WCAG-2.1-Schwellenwerte für relative Luminanz und Kontrast (AA 4,5:1, AA Groß 3,0:1, AAA 7,0:1), bearbeite synchronisierte HEX-/RGB-/HSL-Werte und lade Screenshots oder Logos hoch, um dominante HEX-Farbfelder direkt in deinen Vordergrund- oder Hintergrund-Slot zu ziehen.',
    instructions: [
      {
        title: 'Vordergrund- und Hintergrundfarben wählen',
        description:
          'Nutze die Farbwähler, HEX-Eingaben oder einzelne R/G/B-Eingaben – oder starte mit barrierefreien Vorlagen und tausche Farben mit einem Klick.',
      },
      {
        title: 'Farbtöne anpassen, bis das Verhältnis besteht',
        description:
          'Verändere die Helligkeit oder einzelne RGB-Kanäle und beobachte, wie sich das Verhältnis live aktualisiert, bis deine Paarung den benötigten AA- oder AAA-Schwellenwert erreicht.',
      },
      {
        title: 'WCAG-2.1-Scorecard prüfen',
        description:
          'Prüfe das exakte Kontrastverhältnis (z. B. 12,63 : 1) und den sofortigen BESTANDEN-/NICHT-BESTANDEN-Status für AA Normal, AA Groß/UI, AAA Normal und AAA Groß.',
      },
      {
        title: 'Paarung in echtem UI-Text in der Vorschau sehen',
        description:
          'Lies die Live-Typografie- und Rahmen-UI-Steuerelement-Karten-Vorschauen, um zu sehen, wie deine Farben als Fließtext, Überschriften und Buttons tatsächlich aussehen.',
      },
      {
        title: 'Farbfelder aus einem Bild extrahieren (optional)',
        description:
          'Lade unten einen beliebigen Screenshot oder ein Markenlogo hoch, um bis zu 8 verschiedene dominante Farben zu extrahieren und sie direkt auf Vordergrund oder Hintergrund anzuwenden.',
      },
      {
        title: 'Farben kopieren und fehlschlagende Paare korrigieren',
        description:
          'Kopiere die synchronisierten HEX-, RGB- oder HSL-Werte in dein CSS. Wenn ein Paar fehlschlägt, verdunkle den Text oder helle den Hintergrund auf, bis die Scorecard grün wird.',
      },
    ],
    examples: [
      {
        title: 'Lesbarkeit eines primären CTA-Buttons prüfen',
        input: 'Vordergrund: #FFFFFF · Hintergrund: #4F46E5',
        output: 'Kontrastverhältnis 6,29 : 1 — Besteht WCAG AA Normal, AA Groß und AAA Groß',
        explanation: 'Nutzt die offizielle sRGB-Gamma-linearisierte relative Luminanz (0,2126R + 0,7152G + 0,0722B).',
      },
      {
        title: 'Markenfarben aus einem Kundenlogo extrahieren',
        input: 'Hochgeladenes Logo (PNG mit transparentem Hintergrund)',
        output: 'Bis zu 8 dominante HEX-Farbfelder, die direkt in Vordergrund oder Hintergrund übernommen werden können.',
        explanation: 'Der Canvas-Farbquantisierer ignoriert transparente Pixel und gruppiert ähnliche Farbtöne.',
      },
    ],
    benefits: [
      'Exakte WCAG-2.1-sRGB-Formel für relative Luminanz – ohne Näherungen',
      'Live-Typografie- und Rahmen-UI-Steuerelement-Karten-Vorschau der aktiven Paarung',
      'Eingebauter Canvas-Bildfarbquantisierer zieht Markenfarbfelder ohne zusätzliche Tools',
      'Zeigt synchronisierte HEX-, RGB- und HSL-Strings, bereit zum Einfügen in CSS',
    ],
    useCases: [
      'Designsysteme, SaaS-Dashboards und Dark-Mode-Themes auf WCAG-AA-/AAA-Konformität prüfen',
      'Dominante Markenfarben aus Kundenlogos direkt in barrierefreie UI-Paletten ziehen',
      'Kontrastarme Badge-, Platzhalter- oder Button-Label-Paarungen vor dem Launch korrigieren',
      'Barrierefreie visuelle Hierarchie mit Live-Vorschauen für großen vs. normalen Text vermitteln',
    ],
    faqs: [
      {
        question: 'Welches Kontrastverhältnis ist für WCAG-Level AA vs. Level AAA erforderlich?',
        answer:
          'WCAG 2.1 Level AA erfordert mindestens 4,5:1 für normalen Fließtext und 3,0:1 für großen Text (18 pt+ oder fett 14 pt+) und UI-Komponenten. Level AAA erhöht diese Schwellenwerte auf 7,0:1 für normalen Text und 4,5:1 für großen Text.',
      },
      {
        question: 'Wie funktioniert der Bild-Paletten-Extraktor?',
        answer:
          'Er zeichnet dein hochgeladenes Bild auf ein Offscreen-HTML5-Canvas, ignoriert transparente Pixel, gruppiert nahe RGB-Buckets und zeigt bis zu 8 visuell verschiedene dominante Farbfelder nach Flächenabdeckung.',
      },
      {
        question: 'Wandelt der Farbkontrast-Prüfer auch zwischen HEX, RGB und HSL um?',
        answer:
          'Ja. Das Aktualisieren eines Farbwählers, einer HEX-Eingabe oder eines R/G/B-Felds berechnet HEX-, rgb()- und hsl()-Darstellungen automatisch neu.',
      },
      {
        question: 'Was zählt als großer Text nach den WCAG-Kontrastregeln?',
        answer:
          'Großer Text ist 18 pt (24 px) oder größer, oder 14 pt (18,66 px) fett oder größer. Großer Text braucht nur ein Verhältnis von 3,0:1 für AA und 4,5:1 für AAA, während normaler Text 4,5:1 für AA und 7,0:1 für AAA braucht.',
      },
      {
        question: 'Ist der Farbkontrast-Prüfer kostenlos?',
        answer:
          'Ja, er ist komplett kostenlos ohne Anmeldung. Alle Prüfungen laufen lokal in deinem Browser, sodass du so viele Farbpaare testen kannst, wie du willst.',
      },
      {
        question: 'Verlassen meine hochgeladenen Bilder mein Gerät?',
        answer:
          'Nein. Die Palettenextraktion passiert vollständig in deinem Browser mit einem Offscreen-Canvas, und deine Bilder werden niemals auf einen Server hochgeladen.',
      },
      {
        question: 'Wie wird das Kontrastverhältnis berechnet?',
        answer:
          'Es nutzt die offizielle WCAG-2.1-Formel: Die relative Luminanz jeder Farbe wird aus Gamma-linearisierten sRGB-Werten berechnet, und das Verhältnis ist (L1 + 0,05) / (L2 + 0,05), wobei L1 die hellere Farbe ist.',
      },
      {
        question: 'Kann ich Kontraste für Dark-Mode-Designs prüfen?',
        answer:
          'Ja. Gib deine dunkle Hintergrund- und helle Textfarbe genauso ein, und die Scorecard zeigt, ob die Paarung AA und AAA für normalen und großen Text besteht.',
      },
      {
        question: 'Warum besteht mein Farbpaar AA nicht, obwohl es für mich lesbar aussieht?',
        answer:
          'Wahrgenommene Lesbarkeit und gemessener Luminanzkontrast sind verschiedene Dinge. Farben, die für dich unterscheidbar wirken, können in der Luminanz trotzdem nah beieinander liegen – besonders Mitteltöne. Vertraue dem Verhältnis und passe die Helligkeit an, bis es besteht.',
      },
      {
        question: 'Was sollte ich tun, wenn meine Markenfarbe den Kontrasttest nicht besteht?',
        answer:
          'Behalte die Markenfarbe für große Überschriften oder dekorative Elemente und nutze einen dunkleren Farbton davon für Fließtext. Du kannst auch den Hintergrund aufhellen oder eine halbtransparente Überlagerung hinter den Text legen.',
      },
      {
        question: 'Funktioniert der Prüfer für UI-Komponenten wie Buttons und Icons?',
        answer:
          'Ja. WCAG 2.1 erfordert ein Verhältnis von 3,0:1 für Nicht-Text-UI-Komponenten wie Button-Rahmen, Eingabe-Umrisse und bedeutungsvolle Icons, und die Spalte AA Groß/UI der Scorecard deckt genau das ab.',
      },
      {
        question: 'Kann ich Platzhaltertext und deaktivierte Zustände mit diesem Tool testen?',
        answer:
          'Ja, gib die Platzhalter- oder Deaktiviert-Farbe als Vordergrund ein. Beachte, dass deaktivierte Steuerelemente von WCAG-Kontrastanforderungen ausgenommen sind, Platzhaltertext mit Informationsgehalt aber nicht.',
      },
      {
        question: 'Wie viele Farben kann der Paletten-Extraktor aus einem Bild ziehen?',
        answer:
          'Bis zu 8 verschiedene dominante Farben. Ähnliche Farbtöne werden gruppiert, sodass die Farbfelder die visuell prominentesten Farben im Bild repräsentieren statt jeden vorhandenen Farbton.',
      },
      {
        question: 'Kann ich ein extrahiertes Farbfeld direkt als Vorder- oder Hintergrund anwenden?',
        answer:
          'Ja. Jedes extrahierte Farbfeld hat einen Button, um es direkt in den Vordergrund- oder Hintergrund-Slot zu senden, sodass du es sofort gegen deine andere Farbe testen kannst.',
      },
      {
        question: 'Welche Bildformate funktionieren mit dem Paletten-Extraktor?',
        answer:
          'Jedes Bild, das dein Browser anzeigen kann, einschließlich PNG-, JPG-, WebP- und SVG-Screenshots oder Logos. Transparente Pixel werden beim Gruppieren von Farben ignoriert.',
      },
      {
        question: 'Testet der Farbkontrast-Prüfer Farbenblindheit?',
        answer:
          'Nein, er misst nur den Luminanzkontrast. Kontrast ist ein Teil der Barrierefreiheit; für Farbenblindheit-Sicherheit solltest du dich außerdem nicht allein auf Farbe verlassen, um Bedeutung zu vermitteln, und deine Palette mit einem Farbenblindheit-Simulator prüfen.',
      },
      {
        question: 'Kann ich die HEX-, RGB- und HSL-Werte in meinem CSS nutzen?',
        answer:
          'Ja. Alle drei Formate bleiben beim Bearbeiten synchron, und du kannst jedes davon direkt in dein Stylesheet, deine Design-Tokens oder deine Tailwind-Config kopieren.',
      },
      {
        question: 'Was ist der Unterschied zwischen AA und AAA in der Praxis?',
        answer:
          'AA ist der rechtliche und praktische Standard, den die meisten Websites anstreben, während AAA strenger ist und für Fließtext in Markenfarben oft schwer zu erreichen. Ziele auf AAA, wo du kannst, aber liefere niemals unter AA für Text aus.',
      },
      {
        question: 'Speichert das Tool meine Farbauswahl oder Bilder?',
        answer:
          'Nein. Alles läuft lokal in deinem Browser-Tab, nichts wird hochgeladen, und deine Farben und Bilder verschwinden, wenn du die Seite schließt oder aktualisierst.',
      },
      {
        question: 'Kann ich mehr als ein Farbpaar gleichzeitig prüfen?',
        answer:
          'Der Prüfer testet ein Vordergrund-/Hintergrund-Paar nach dem anderen, aber du kannst Farben mit einem einzigen Klick tauschen und so viele Paare in Sekunden erneut testen, wie du brauchst.',
      },
    ],
  },
  'qr-code-scanner': {
    slug: 'qr-code-leser',
    name: 'QR-Code-Leser & vCard-QR-Studio',
    shortDescription:
      'Dekodiere QR-Codes aus hochgeladenen Bildern oder deiner Gerätekamera privat im Browser oder erstelle herunterladbare PNG-/SVG-vCard-Kontakt-QR-Codes.',
    keywords: [
      'qr code scanner online',
      'qr code aus bild dekodieren',
      'vcard qr code generator',
      'kamera qr leser browser',
      'qr code aus screenshot scannen',
      'qr code leser ohne app',
      'qr code png jpg dekodieren',
      'wifi qr code scanner',
      'qr code payload leser',
    ],
    seo: {
      title: 'QR-Code-Leser – QR-Bilder & vCards dekodieren | UtilityFlow',
      description:
        'Scanne und dekodiere QR-Codes aus Screenshots, Fotos oder deiner Webcam im Browser oder erstelle einen herunterladbaren vCard-Kontakt-QR-Code als PNG und SVG.',
      primaryKeyword: 'qr code leser',
      secondaryKeywords: [
        'qr code bild leser online',
        'qr aus screenshot kostenlos scannen',
        'vcard kontakt qr code erstellen',
        'webcam qr code leser browser',
      ],
      longTailKeywords: [
        'qr code aus hochgeladenem png oder jpg screenshot offline dekodieren',
        'qr code mit laptop webcam ohne app installation scannen',
        'herunterladbaren vcard 3.0 kontakt qr code svg und png erstellen',
        'invertierten dark mode qr code aus screenshot lesen',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Lies QR-Code-Inhalte aus Screenshots, Fotos oder einem optionalen Live-Kamerastream direkt in deinem Browser – mit automatischer Payload-Klassifizierung (URL, WLAN, vCard, Text) – plus einem begleitenden vCard-Kontakt-QR-Builder, der scharfe PNG- und SVG-Kontaktkarten exportiert.',
    instructions: [
      {
        title: 'QR-Bild hochladen oder Kamera-Scan aktivieren',
        description:
          'Lege einen beliebigen PNG-, JPG-, WebP- oder SVG-QR-Screenshot ab oder wähle ihn aus – oder klicke auf „Kamera-Scanner starten“, wenn du einen gedruckten QR-Code live lesen willst.',
      },
      {
        title: 'Scanner den Code dekodieren lassen',
        description:
          'Das Tool führt mehrstufige, inversionsbewusste Dekodierung lokal in deinem Browser aus, sodass auch Dark-Mode- oder invertierte QR-Codes gelesen werden, ohne etwas hochzuladen.',
      },
      {
        title: 'Dekodierten Text inspizieren und kopieren',
        description:
          'Prüfe die dekodierte Payload, die erkannte Payload-Kategorie und die sichere Linkvorschau (nur http/https-URLs werden klickbare Links) und kopiere sie mit einem Klick.',
      },
      {
        title: 'Payload-Typ vor dem Handeln prüfen',
        description:
          'Sieh, ob der QR eine URL, WLAN-Zugangsdaten, einen vCard-Kontakt oder reinen Text enthält, und vergewissere dich, dass das Ziel richtig aussieht, bevor du es besuchst oder dich verbindest.',
      },
      {
        title: 'Zum vCard-Kontakt-QR-Builder wechseln (optional)',
        description:
          'Erstelle einen scannbaren VCF-3.0-Visitenkarten-QR-Code mit Name, Organisation, Telefon, E-Mail und Website und lade ihn als PNG oder SVG herunter.',
      },
      {
        title: 'Herunterladen, drucken oder fehlgeschlagenen Scan beheben',
        description:
          'Lade deinen vCard-QR herunter oder lade einen schärferen, gut beleuchteten Screenshot erneut hoch, wenn die Dekodierung fehlschlägt – beschnittene, unscharfe oder winzige QR-Codes sind die häufigste Ursache.',
      },
    ],
    examples: [
      {
        title: 'Gedruckten Marketing-Flyer-Screenshot vor dem Druckauftrag verifizieren',
        input: 'Flyer-QR.png hochladen (600×600 PNG)',
        output: 'Dekodierte Payload · Website-URL: https://example.com/?utm_source=print',
        explanation: 'Führt mehrstufige inversionsbewusste Dekodierung lokal aus, sodass auch invertierte Dark-Mode-QR-Codes zuverlässig dekodiert werden.',
      },
      {
        title: 'vCard-QR-Code für eine Visitenkarte erstellen',
        input: 'Name, Organisation, Telefon und E-Mail im vCard-Builder ausfüllen',
        output: 'Herunterladbarer vCard-3.0-QR-Code als PNG und SVG, der auf iPhone und Android direkt einen Kontakt speichert.',
        explanation: 'Standard-VCF-3.0-Format wird von beiden Plattformen erkannt und bietet das Speichern des Kontakts an.',
      },
    ],
    benefits: [
      'Dekodiert normale und farbinvertierte QR-Screenshots sauber ohne Handy-Apps',
      'Optionaler Kamerastream stoppt sofort nach der Dekodierung oder beim Verlassen des Tabs',
      'Klassifiziert dekodierte Payloads sauber, ohne automatisch weiterzuleiten',
      'Enthält vollständige vCard-3.0-PNG- & SVG-QR-Erstellung für digitale Visitenkarten',
    ],
    useCases: [
      'UTM-Ziel-URLs in QR-Assets vor dem Drucken von Postern doppelt prüfen',
      'WLAN-Strings oder Text-Token aus Desktop-Screenshots extrahieren',
      'Physische QR-Codes auf einem Laptop mit der eingebauten Webcam scannen',
      'Scannbare vCard-Kontakt-QR-Codes für Lebensläufe, Badges und Präsentationen erstellen',
    ],
    faqs: [
      {
        question: 'Was, wenn mein Gerät keine Kamera hat oder die Kameraerlaubnis verweigert?',
        answer:
          'Du brauchst niemals eine Kamera, um dieses Tool zu nutzen – mache einfach einen Screenshot oder ein Foto und lade ihn per „QR-Code-Bild hochladen“ hoch, was ohne Kameraerlaubnis identisch funktioniert.',
      },
      {
        question: 'Öffnet das Scannen eines QR-Codes automatisch bösartige Websites?',
        answer:
          'Nein. Dekodierter Text wird zuerst sicher in einem schreibgeschützten Textfeld angezeigt, sodass du jede URL inspizieren kannst, bevor du entscheidest, ob du sie besuchst.',
      },
      {
        question: 'Brauche ich stattdessen einen URL-, WLAN- oder benutzerdefinierten Farb-QR-Generator?',
        answer:
          'Probiere unser dediziertes QR-Code-Generator-Tool in den Social-Media-Tools für benutzerdefinierte Vordergrund-/Hintergrundfarben, Fehlerkorrekturlevel und URL-/Text-QR-Codes.',
      },
      {
        question: 'Ist der QR-Code-Leser kostenlos?',
        answer:
          'Ja, er ist komplett kostenlos ohne Anmeldung, und sowohl Scannen als auch vCard-QR-Erstellung laufen lokal in deinem Browser.',
      },
      {
        question: 'Werden meine hochgeladenen QR-Bilder an einen Server gesendet?',
        answer:
          'Nein. Die Dekodierung passiert vollständig in deinem Browser mit jsQR, sodass deine Screenshots und Fotos dein Gerät niemals verlassen.',
      },
      {
        question: 'Welche Bildformate kann der QR-Code-Leser lesen?',
        answer:
          'PNG-, JPG-, WebP- und SVG-Bilder funktionieren alle. Screenshots, die auf einem Handy oder Computer gemacht wurden, sind der häufigste Weg, einen QR-Code zu übergeben.',
      },
      {
        question: 'Warum ist mein QR-Code beim Scannen fehlgeschlagen?',
        answer:
          'Die üblichen Ursachen sind ein unscharfes oder niedrig aufgelöstes Bild, ein zu eng beschnittener QR-Code, Blendung auf einem gedruckten Code oder ein Code, der im Bild einfach zu klein ist. Lade eine schärfere, größere, gut beleuchtete Aufnahme erneut hoch.',
      },
      {
        question: 'Kann der Scanner invertierte oder Dark-Mode-QR-Codes lesen?',
        answer:
          'Ja. Der Decoder ist inversionsbewusst, sodass QR-Codes mit hellen Modulen auf dunklem Hintergrund genauso zuverlässig dekodiert werden wie Standard-Schwarz-auf-Weiß-Codes.',
      },
      {
        question: 'Welche Arten von QR-Payloads kann er erkennen?',
        answer:
          'Er klassifiziert dekodierte Inhalte automatisch, einschließlich Website-URLs, WLAN-Zugangsdaten, vCard-Kontakten und reinem Text, sodass du weißt, was ein Code tut, bevor du darauf reagierst.',
      },
      {
        question: 'Ist es sicher, einen QR-Code zu scannen, den ich in der Öffentlichkeit gefunden habe?',
        answer:
          'Das Scannen ist hier sicher, weil nichts automatisch geöffnet wird – du siehst zuerst den dekodierten Text. Lies die URL immer sorgfältig und vermeide es, Passwörter oder Zahlungsdaten auf Seiten einzugeben, zu denen ein zufälliger QR-Code führt.',
      },
      {
        question: 'Kann ich einen QR-Code mit meiner Laptop-Webcam scannen?',
        answer:
          'Ja. Klicke auf „Kamera-Scanner starten“, erlaube den Kamerazugriff, wenn dein Browser fragt, und halte den gedruckten Code vor die Kamera. Der Stream stoppt automatisch, sobald der Code dekodiert ist oder wenn du den Tab verlässt.',
      },
      {
        question: 'Nimmt die Kamera nach einem Scan weiter auf?',
        answer:
          'Nein. Der Kamerastream stoppt sofort nach einer erfolgreichen Dekodierung und auch, wenn du Tabs wechselst oder den Scanner schließt.',
      },
      {
        question: 'Was ist ein vCard-QR-Code?',
        answer:
          'Ein vCard-QR-Code speichert Kontaktdaten – Name, Organisation, Telefon, E-Mail und Website – im Standard-VCF-3.0-Format, sodass das Scannen mit einem Handy direkt anbietet, den Kontakt zu speichern.',
      },
      {
        question: 'Kann ich meinen vCard-QR-Code als PNG und SVG herunterladen?',
        answer:
          'Ja. Der vCard-Builder exportiert beide Formate: PNG für Dokumente und Präsentationen und SVG für scharfes Drucken in jeder Größe.',
      },
      {
        question: 'Funktioniert der vCard-QR-Code sowohl auf iPhone als auch auf Android?',
        answer:
          'Ja. Beide Plattformen erkennen Standard-VCF-3.0-vCard-QR-Codes und bieten an, den Kontakt hinzuzufügen, wenn er mit der eingebauten Kamera gescannt wird.',
      },
      {
        question: 'Kann ich einen QR-Code aus einem Video oder einer Bildschirmaufnahme scannen?',
        answer:
          'Nicht direkt, aber du kannst das Video pausieren, einen Screenshot des Frames mit dem QR-Code machen und diesen Screenshot in den Scanner hochladen.',
      },
      {
        question: 'Funktioniert der QR-Code-Leser offline?',
        answer:
          'Sobald die Seite geladen ist, läuft die Dekodierung vollständig in deinem Browser ohne Netzwerkanfragen, sodass du hochgeladene Bilder auch ohne Internetverbindung scannen kannst.',
      },
      {
        question: 'Kann ich mehrere QR-Codes in einem Bild scannen?',
        answer:
          'Der Scanner dekodiert einen QR-Code nach dem anderen. Wenn ein Bild mehrere Codes enthält, schneide das Bild zu, sodass jeder Code separat hochgeladen wird.',
      },
      {
        question: 'Was sollte ich prüfen, bevor ich einen QR-Code auf einen Flyer drucke?',
        answer:
          'Lade einen Screenshot des fertigen Designs hoch und scanne ihn hier, um zu bestätigen, dass Ziel-URL, UTM-Parameter und Payload exakt richtig sind, bevor du Drucke bestellst.',
      },
      {
        question: 'Speichert das Tool meine gescannten QR-Codes oder Kamerabilder?',
        answer:
          'Nein. Nichts wird hochgeladen, protokolliert oder gespeichert. Dekodierte Ergebnisse existieren nur in deinem aktuellen Browser-Tab und verschwinden, wenn du ihn schließt.',
      },
    ],
  },
  'password-generator': {
    slug: 'passwort-generator',
    name: 'Kryptografischer Passwort- & Passphrasen-Generator',
    shortDescription:
      'Erstelle unverzerrte Zufallspasswörter und Diceware-Passphrasen mit crypto.getRandomValues-Rejection-Sampling und exakter Entropieberechnung.',
    keywords: [
      'kryptografischer passwort generator',
      'sicheres zufallspasswort generator',
      'diceware passphrasen generator',
      'crypto getrandomvalues passwort',
      'starkes passwort erstellen online',
      'zufälliger passphrasen generator',
      'passwort entropie prüfen',
      'sicheres passwort kostenlos erstellen',
      'unverzerrtes zufallspasswort tool',
    ],
    seo: {
      title: 'Passwort-Generator – Sichere Passwörter | UtilityFlow',
      description:
        'Erstelle Zufallspasswörter und Diceware-Passphrasen lokal in deinem Browser mit Web Crypto, exakter Entropiebewertung und ohne Speicherung oder Uploads.',
      primaryKeyword: 'passwort generator',
      secondaryKeywords: [
        'kryptografisch sicheres passwort erstellen',
        'merkbare passphrasen generator online',
        'passwort entropie rechner',
        'zufallspasswort mit symbolen erstellen',
      ],
      longTailKeywords: [
        'zufallspasswort mit crypto getrandomvalues ohne modulo bias erstellen',
        '5 wort diceware passphrasen lokal offline erstellen',
        'mehrdeutige zeichen 0 o 1 l i passwort generator ausschließen',
        'wie viele entropie bits hat ein 18 zeichen passwort',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Erstelle Passwörter mit hoher Entropie und merkbare mehrwortige Passphrasen zu 100 % lokal mit dem hardwaregestützten CSPRNG deines Browsers (window.crypto.getRandomValues) – mit Rejection-Sampling zur Beseitigung von Modulo-Bias und Fisher-Yates-Shuffling, um vorhersehbare Zeichenpositionen zu verhindern.',
    instructions: [
      {
        title: 'Zufallspasswort oder Diceware-Passphrase wählen',
        description:
          'Nutze „Zufallspasswort“ für maximale Zeichensatzdichte oder „Diceware-Passphrase“ für leichteres menschliches Tippen bei starker Mehrwort-Entropie.',
      },
      {
        title: 'Länge, Zeichensätze und Stapelanzahl anpassen',
        description:
          'Passe die Länge an (8–64 Zeichen), schalte Groß-/Kleinbuchstaben/Ziffern/Symbole um, schließe optional ähnliche Zeichen aus (0/O/1/l/I) oder wähle 3–8 Diceware-Wörter.',
      },
      {
        title: 'Passwort oder Passphrase erstellen',
        description:
          'Klicke auf „Erstellen“, um eine frische Ausgabe mit dem hardwaregestützten CSPRNG deines Browsers und Rejection-Sampling zu erzeugen, sodass jedes Zeichen exakt gleiche Wahrscheinlichkeit hat.',
      },
      {
        title: 'Entropie-Score prüfen',
        description:
          'Prüfe die exakten Shannon-Entropie-Bits (~72–118+ Bits empfohlen), um zu sehen, wie viel Rateaufwand das Ergebnis darstellt, bevor du es nutzt.',
      },
      {
        title: 'Neu erstellen und sicher kopieren',
        description:
          'Nicht zufrieden mit einem Ergebnis? Erstelle ein frisches neu und kopiere dann ein einzelnes Passwort oder den ganzen Stapel mit einem Klick.',
      },
      {
        title: 'In einem Passwort-Manager speichern und per Aktualisieren löschen',
        description:
          'Füge das Ergebnis sofort in deinen Passwort-Manager ein. Das Aktualisieren der Seite löscht die erstellten Passwörter aus dem Speicher – verlasse dich also niemals darauf, dass der Tab sie behält.',
      },
    ],
    examples: [
      {
        title: '18-Zeichen-Passwort mit vollem Zeichenpool',
        input: 'Länge: 18 · Groß + Klein + Ziffern + Symbole (Pool: 88 Zeichen)',
        output: '~116,3 Bits kryptografische Entropie · Garantiert >= 1 Zeichen aus jeder aktivierten Klasse',
        explanation: 'Nutzt Rejection-Sampling (verwirft uint32-Samples >= floor(2^32 / Pool) * Pool) für strikte Gleichverteilung.',
      },
      {
        title: 'Merkbare 6-Wort-Diceware-Passphrase für einen WLAN-Schlüssel',
        input: 'Modus: Diceware-Passphrase · Wörter: 6 · Trennzeichen: Bindestrich',
        output: 'Sechs zufällige Wörter mit Bindestrichen, leicht zu tippen und mit starker Mehrwort-Entropie.',
        explanation: 'Sechs zufällige Wörter aus einer festen Wortliste sind deutlich leichter zu merken und zu tippen als Zufallszeichen.',
      },
    ],
    benefits: [
      'Vermeidet strikt unsicheres Math.random() – nutzt hardwaregestütztes window.crypto.getRandomValues',
      'Beseitigt Modulo-Bias per echtem Rejection-Sampling und unverzerrtem Fisher-Yates-Shuffle',
      'Garantiert mindestens ein Zeichen aus jeder gewählten Zeichenklasse ohne feste Positionen',
      'Nichts wird protokolliert, gespeichert oder über das Netzwerk übertragen',
    ],
    useCases: [
      'Cloud-Konten, SSH-Schlüssel, Datenbank-Zugangsdaten und Passwort-Manager-Master-Tresore sichern',
      'Menschlich tippbare Diceware-Passphrasen für Festplattenverschlüsselung oder WLAN-Gästeschlüssel erstellen',
      'Temporäre Onboarding-Zugangsdaten stapelweise bereitstellen (bis zu 10 pro Klick)',
      'Bit-Entropie-Auswirkung von 12 vs. 18 vs. 24 Zeichen vergleichen',
    ],
    faqs: [
      {
        question: 'Warum ist Rejection-Sampling mit crypto.getRandomValues wichtig?',
        answer:
          'Einfaches Berechnen von randomUint32 % poolSize bevorzugt leicht Zeichen mit niedrigerem Index, wenn 2^32 nicht gleichmäßig durch poolSize teilbar ist (Modulo-Bias). Rejection-Sampling verwirft außerhalb liegende Ziehungen, sodass jedes Zeichen im Pool exakt gleiche mathematische Wahrscheinlichkeit hat.',
      },
      {
        question: 'Sollte ich ein Zufallspasswort oder eine Passphrase nutzen?',
        answer:
          'Beides ist ausgezeichnet, wenn es lang genug ist: 16+ gemischte Zeichen funktionieren überall in Passwort-Managern, während eine 5- bis 6-Wort-Passphrase deutlich leichter manuell auf TVs, Handys oder bei Festplatten-Entschlüsselungsabfragen zu tippen ist.',
      },
      {
        question: 'Werden erstellte Passwörter irgendwo gespeichert?',
        answer:
          'Niemals. Passwörter leben ausschließlich im flüchtigen React-Speicher deines Tabs und verschwinden beim Aktualisieren.',
      },
      {
        question: 'Ist der Passwort-Generator kostenlos?',
        answer:
          'Ja, er ist komplett kostenlos ohne Anmeldung. Du kannst so viele Passwörter und Passphrasen erstellen, wie du brauchst – direkt in deinem Browser.',
      },
      {
        question: 'Wie werden Passwörter hier erstellt?',
        answer:
          'Sie werden lokal in deinem Browser mit window.crypto.getRandomValues erstellt – dem hardwaregestützten kryptografisch sicheren Zufallszahlengenerator deines Browsers – mit Rejection-Sampling zur Entfernung von Modulo-Bias.',
      },
      {
        question: 'Werden meine erstellten Passwörter an einen Server gesendet?',
        answer:
          'Nein. Die Erstellung passiert vollständig auf deinem Gerät, und nichts wird gespeichert, protokolliert oder über das Netzwerk übertragen.',
      },
      {
        question: 'Wie lang sollte mein Passwort sein?',
        answer:
          'Nutze für wichtige Konten mindestens 16 Zeichen mit gemischten Zeichenklassen – das ergibt etwa 100+ Bits Entropie. Kürzere Passwörter sind nur für Konten mit geringem Wert in Ordnung, und Länge ist wichtiger als Komplexität.',
      },
      {
        question: 'Was ist Passwort-Entropie und wie viele Bits brauche ich?',
        answer:
          'Entropie misst, wie viel Rateaufwand ein Passwort darstellt. Etwa 70–80 Bits sind stark für die meisten Konten, während 100+ Bits für Master-Passwörter, Verschlüsselungsschlüssel und hochwertige Konten empfohlen werden.',
      },
      {
        question: 'Was ist eine Diceware-Passphrase?',
        answer:
          'Eine Diceware-Passphrase besteht aus mehreren Zufallswörtern, die aus einer festen Wortliste gewählt werden, etwa „correct horse battery staple“. Fünf oder sechs Zufallswörter ergeben starke Entropie und bleiben deutlich leichter zu tippen und zu merken als Zufallszeichen.',
      },
      {
        question: 'Sollte ich mehrdeutige Zeichen wie 0, O, 1, l und I ausschließen?',
        answer:
          'Ja, wenn du das Passwort von Hand tippen oder vorlesen wirst. Das Ausschließen ähnlicher Zeichen verhindert falsch getippte Logins, und bei einem ausreichend langen Passwort ist der kleine Entropieverlust vernachlässigbar.',
      },
      {
        question: 'Kann ich mehrere Passwörter auf einmal erstellen?',
        answer:
          'Ja. Du kannst mit einem Klick einen Stapel von bis zu 10 Passwörtern erstellen – praktisch beim Bereitstellen von Konten oder beim Onboarding neuer Teammitglieder.',
      },
      {
        question: 'Garantiert der Generator mindestens ein Zeichen aus jeder gewählten Klasse?',
        answer:
          'Ja. Jedes erstellte Passwort enthält mindestens ein Zeichen aus jeder von dir aktivierten Zeichenklasse, ohne diese Zeichen an festen, vorhersehbaren Positionen zu platzieren.',
      },
      {
        question: 'Kann ich diese Passwörter für mein Passwort-Manager-Master-Passwort nutzen?',
        answer:
          'Eine lange Passphrase eignet sich gut als Master-Passwort, weil du sie aus dem Gedächtnis tippen musst. Erstelle eine 6-Wort-Diceware-Passphrase, merke sie dir und speichere deine anderen Passwörter im Manager.',
      },
      {
        question: 'Warum nicht Math.random() für Passwörter nutzen?',
        answer:
          'Math.random() ist nicht kryptografisch sicher: Seine Ausgabe kann vorhergesagt werden, wenn ein Angreifer seinen internen Zustand kennt. Dieses Tool nutzt nur window.crypto.getRandomValues, das für sicherheitskritische Zufälligkeit entwickelt wurde.',
      },
      {
        question: 'Funktioniert ein erstelltes Passwort auf jeder Website?',
        answer:
          'Fast immer. Wenn eine Website Symbole ablehnt oder die Länge begrenzt, verringere die Länge oder deaktiviere die Symbolklasse und erstelle neu, bis die Website es akzeptiert.',
      },
      {
        question: 'Kann ich ein erstelltes Passwort auf mehreren Websites wiederverwenden?',
        answer:
          'Das solltest du nicht. Die Wiederverwendung eines Passworts bedeutet, dass ein Datenleck jedes Konto bloßstellt, das es teilt. Erstelle also für jede Website ein einzigartiges Passwort und speichere sie in einem Passwort-Manager.',
      },
      {
        question: 'Was passiert mit meinen Passwörtern, wenn ich die Seite aktualisiere?',
        answer:
          'Sie sind weg. Erstellte Passwörter existieren nur im temporären Speicher des Tabs. Kopiere oder speichere sie also in einem Passwort-Manager, bevor du die Seite aktualisierst oder schließt.',
      },
      {
        question: 'Funktioniert der Passwort-Generator offline?',
        answer:
          'Ja. Sobald die Seite geladen ist, läuft die Erstellung vollständig in deinem Browser ohne Netzwerkanfragen und funktioniert offline.',
      },
      {
        question: 'Wie wähle ich zwischen Passwort und Passphrase für WLAN?',
        answer:
          'Nutze eine Passphrase für WLAN-Schlüssel, die du auf vielen Geräten tippst, da Wörter leichter korrekt einzugeben sind, und ein Zufallszeichen-Passwort, wenn ein Passwort-Manager es für dich ausfüllt.',
      },
      {
        question: 'Ist ein erstelltes Passwort garantiert unknackbar?',
        answer:
          'Kein Passwort kann als garantiert unknackbar gelten – eine Website kann trotzdem gehackt oder per Phishing ausgetrickst werden. Ein langes, einzigartiges, zufällig erstelltes Passwort, das in einem Passwort-Manager gespeichert wird, ist jedoch eine der stärksten praktischen Verteidigungen, die du nutzen kannst.',
      },
    ],
  },
  'file-hash-verifier': {
    slug: 'datei-hash-pruefer',
    name: 'Datei-Hash- & Checksummen-Prüfer',
    shortDescription:
      'Berechne lokale SHA-256-, SHA-512-, SHA-384- und SHA-1-Checksummen von Binärdateien per Web Crypto SubtleCrypto und verifiziere Downloads anhand veröffentlichter Hashes.',
    keywords: [
      'datei hash prüfen',
      'sha256 datei checksumme prüfen',
      'heruntergeladene datei hash online verifizieren',
      'sha512 datei hash generator',
      'sha256 checksumme rechner',
      'datei integrität online prüfen',
      'datei checksumme vergleichen',
      'sha384 sha1 hash prüfen',
      'iso checksumme im browser verifizieren',
    ],
    seo: {
      title: 'Datei-Hash-Prüfer – SHA-256-Checksummen | UtilityFlow',
      description:
        'Berechne SHA-256-, SHA-512-, SHA-384- und SHA-1-Digests für jede lokale Datei in deinem Browser und vergleiche sie mit Checksummen – ohne Uploads, kostenlos.',
      primaryKeyword: 'datei hash prüfer',
      secondaryKeywords: [
        'sha256 checksumme rechner datei',
        'sha256sum datei online verifizieren',
        'browser subtlecrypto datei digest',
        'sha512 checksumme verifizierer',
      ],
      longTailKeywords: [
        'sha-256 hash heruntergeladenen installers ohne terminal prüfen',
        'datei binär checksumme mit erwartetem sha256sum string vergleichen',
        'sha256 und sha512 lokal ohne datei upload berechnen',
        'linux iso sha256 checksumme im browser verifizieren',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Verifiziere Integrität und Authentizität von Software-Installern, Archiven, Datensätzen und Dokumenten lokal – mit Berechnung von SHA-256-, SHA-512-, SHA-384- und SHA-1-Digests per hardwarebeschleunigtem Web-Crypto-subtle.digest und sofortigem Vergleich mit erwarteten Checksummen.',
    instructions: [
      {
        title: 'Datei von deinem Gerät auswählen',
        description:
          'Wähle ein Archiv, einen Installer, ein PDF oder ein Binär-Asset. Die Datei wird strikt in den lokalen Browser-Speicher gelesen (empfohlen unter 500 MB) und niemals hochgeladen.',
      },
      {
        title: 'Warten, bis die Digests berechnet sind',
        description:
          'Der Browser berechnet SHA-256, SHA-512, SHA-384 und SHA-1 parallel mit hardwarebeschleunigtem Web Crypto. Größere Dateien brauchen einige Sekunden.',
      },
      {
        title: 'Berechnete kryptografische Digests inspizieren',
        description:
          'Prüfe SHA-256-, SHA-512-, SHA-384- und Legacy-SHA-1-Hexadezimal-Hashes zusammen mit Dateimetadaten und lade bei Bedarf eine Standard-.sha256-Textdatei herunter.',
      },
      {
        title: 'Mit einer veröffentlichten Checksumme verifizieren',
        description:
          'Füge den erwarteten SHA-256/512/384/1-String ein – oder eine ganze „<hash>  dateiname“-Zeile aus einer .sha256sum-Datei –, um eine exakte Übereinstimmung zu bestätigen oder Korruption/Manipulation zu erkennen.',
      },
      {
        title: 'Hash kopieren oder exportieren',
        description:
          'Kopiere jeden Digest mit einem Klick oder lade die Standard-.sha256-Textdatei herunter, um sie einem Release beizulegen oder als Verifizierungsnachweis zu behalten.',
      },
      {
        title: 'Bei Nichtübereinstimmung oder großer Datei handeln',
        description:
          'Wenn die Hashes nicht übereinstimmen, lösche die Datei und lade sie erneut von der offiziellen Quelle herunter. Für Dateien über ~500 MB nutze stattdessen shasum -a 256 oder certutil, da der Browser die ganze Datei in den Speicher lädt.',
      },
    ],
    examples: [
      {
        title: 'Heruntergeladenes Release-Binary anhand einer Hersteller-.sha256sum verifizieren',
        input: 'Datei: app-v2.tar.gz · Erwartet: „e3b0c442...  app-v2.tar.gz“',
        output: 'Checksumme verifiziert! Stimmt sauber mit dem berechneten SHA-256-Digest überein.',
        explanation: 'Extrahiert automatisch das führende Hash-Token, ignoriert Groß-/Kleinschreibung und vergleicht mit allen 4 berechneten Algorithmen.',
      },
      {
        title: '.sha256-Datei für das eigene Release exportieren',
        input: 'Datei: mein-tool-v1.zip · Nach Berechnung: .sha256 herunterladen',
        output: 'Standard-Textdatei mein-tool-v1.zip.sha256 mit Hash und Dateiname zum Veröffentlichen neben dem Download.',
        explanation: 'Nutzer können damit dein Release mit demselben Prüfer verifizieren.',
      },
    ],
    benefits: [
      'Nutzt natives C++/hardwarebeschleunigtes Browser-Web-Crypto-SubtleCrypto',
      'Unterstützt das Einfügen vollständiger „<hash>  dateiname“-Zeilen aus .sha256sum-Release-Manifesten',
      'Exportiert Standard-Dateiname.sha256-Verifizierungsdateien mit einem Klick',
      'Keine Datei-Uploads halten vertrauliche Builds und Verträge privat',
    ],
    useCases: [
      'Linux-ISOs, CLI-Binaries oder Open-Source-Tarballs verifizieren, ohne ein Terminal zu öffnen',
      'Exakte Byte-für-Byte-Lieferung von Rechts- oder Finanzarchiven bestätigen',
      '.sha256-Release-Manifeste für kleine Kundenlieferungen erstellen',
      'Abgeschnittene oder beschädigte Downloads vor dem Entpacken erkennen',
    ],
    faqs: [
      {
        question: 'Gibt es ein maximales Dateigrößenlimit?',
        answer:
          'Da browser File.arrayBuffer() die ganze Datei auf einmal in den Client-RAM lädt, funktionieren Dateien bis ~300–500 MB reibungslos, während Multi-Gigabyte-ISOs Browser-Speicherquoten überschreiten können – für Multi-GB-Dateien werden native CLI-Tools (shasum -a 256 oder certutil) empfohlen.',
      },
      {
        question: 'Warum wird SHA-1 nur als Legacy-Kompatibilität gekennzeichnet?',
        answer:
          'SHA-1 hat bekannte praktische Kollisionsschwächen und sollte für sicherheitskritische Garantien nicht vertraut werden; bevorzuge SHA-256 oder SHA-512, wann immer möglich.',
      },
      {
        question: 'Möchtest du stattdessen rohe Text-Strings hashen?',
        answer:
          'Sieh dir unser Hash-Generator-Tool in den Entwickler-Tools für sofortiges UTF-8-Text-Hashing an. Dort können Sie beliebige Texte direkt hashen, während der Datei-Hash-Prüfer für lokale Dateien gedacht ist.',
      },
      {
        question: 'Ist der Datei-Hash-Prüfer kostenlos?',
        answer:
          'Ja, er ist komplett kostenlos ohne Anmeldung, und du kannst so viele Dateien verifizieren, wie du willst.',
      },
      {
        question: 'Werden meine Dateien irgendwo hochgeladen, wenn ich sie verifiziere?',
        answer:
          'Nein. Das Hashing passiert vollständig in deinem Browser mit der Web-Crypto-API, sodass deine Dateien dein Gerät niemals verlassen – genau deshalb ist es sicher für vertrauliche Builds und Verträge.',
      },
      {
        question: 'Was ist ein Datei-Hash und warum sollte ich ihn prüfen?',
        answer:
          'Ein Hash ist ein Fingerabdruck fester Länge, der aus den exakten Bytes einer Datei berechnet wird. Wenn sich auch nur ein Byte ändert, ändert sich der Hash vollständig – der Vergleich von Hashes beweist also, dass ein Download intakt und unverändert angekommen ist.',
      },
      {
        question: 'Welchen Hash-Algorithmus sollte ich nutzen: SHA-256, SHA-512 oder SHA-1?',
        answer:
          'Nutze SHA-256 für allgemeine Verifizierung – es ist der Standard, den Publisher bereitstellen. SHA-512 ist ebenso stark und auf 64-Bit-Systemen schneller, während SHA-1 nur Legacy ist und für Sicherheit nicht vertraut werden sollte.',
      },
      {
        question: 'Wo finde ich die offizielle Checksumme zum Vergleich?',
        answer:
          'Publisher listen sie meist auf der Download-Seite oder in einer .sha256-/.sha256sum-Datei neben dem Download auf. Kopiere sie immer von der Website des Herstellers selbst, niemals von einem Mirror oder Forenbeitrag.',
      },
      {
        question: 'Was sollte ich tun, wenn die Hashes nicht übereinstimmen?',
        answer:
          'Führe die Datei nicht aus und entpacke sie nicht. Lösche sie und lade sie erneut von der offiziellen Quelle herunter; eine Nichtübereinstimmung bedeutet, dass der Download beschädigt, abgeschnitten oder möglicherweise manipuliert wurde.',
      },
      {
        question: 'Kann ich eine ganze .sha256sum-Zeile statt nur des Hashs einfügen?',
        answer:
          'Ja. Der Prüfer akzeptiert eine vollständige „<hash>  dateiname“-Zeile aus einem Release-Manifest – er extrahiert das führende Hash-Token automatisch, ignoriert Groß-/Kleinschreibung und vergleicht es mit allen vier berechneten Algorithmen.',
      },
      {
        question: 'Hängt der Hash vom Dateinamen ab?',
        answer:
          'Nein. Der Digest wird nur aus dem Inhalt der Datei berechnet, sodass das Umbenennen einer Datei ihren Hash niemals ändert. Zwei Dateien mit denselben Bytes erzeugen immer denselben Hash.',
      },
      {
        question: 'Kann ich ein Linux-ISO oder einen großen Installer mit diesem Tool verifizieren?',
        answer:
          'Ja, bis etwa 300–500 MB. Für Multi-Gigabyte-ISOs nutze ein natives Tool wie shasum -a 256 auf macOS/Linux oder certutil -hashfile auf Windows, da Browser die ganze Datei in den Speicher laden.',
      },
      {
        question: 'Was ist der Unterschied zwischen SHA-256 und SHA-512?',
        answer:
          'Beide sind sichere Mitglieder der SHA-2-Familie; SHA-256 erzeugt einen 64-stelligen Hex-Digest und SHA-512 einen 128-stelligen. SHA-512 ist etwas stärker und auf 64-Bit-Hardware schneller, aber SHA-256 ist die weiter verbreitete veröffentlichte Checksumme.',
      },
      {
        question: 'Kann dieses Tool einen Virus oder Malware in einer Datei erkennen?',
        answer:
          'Nein. Ein passender Hash beweist nur, dass die Datei mit der vom Publisher veröffentlichten identisch ist. Wenn die Datei des Publishers selbst bösartig wäre, würde der Hash trotzdem passen. Verifiziere also nur Downloads aus Quellen, denen du vertraust.',
      },
      {
        question: 'Wie lade ich eine .sha256-Datei für mein eigenes Release herunter?',
        answer:
          'Hashe deine Release-Datei hier, lade dann die vom Tool erstellte Standard-Textdatei dateiname.sha256 herunter und veröffentliche sie neben deinem Download, damit Nutzer ihn verifizieren können.',
      },
      {
        question: 'Warum dauert das Hashing bei großen Dateien einige Sekunden?',
        answer:
          'Der Browser muss jedes Byte der Datei lesen und verarbeiten. Größere Dateien brauchen einfach länger, und die Zeit wächst mit der Dateigröße statt mit dem gewählten Algorithmus.',
      },
      {
        question: 'Funktioniert der Datei-Hash-Prüfer offline?',
        answer:
          'Ja. Sobald die Seite geladen ist, läuft das gesamte Hashing lokal in deinem Browser ohne Netzwerkanfragen, sodass du Dateien ohne Internetverbindung verifizieren kannst.',
      },
      {
        question: 'Kann ich mehrere Dateien auf einmal verifizieren?',
        answer:
          'Das Tool verifiziert eine Datei nach der anderen. Hashe jede Datei separat und vergleiche sie mit ihrer eigenen veröffentlichten Checksumme.',
      },
      {
        question: 'Ist ein passender Hash ein Beweis, dass die Datei authentisch ist?',
        answer:
          'Er beweist, dass die Datei Byte für Byte identisch mit der ist, die der Publisher gehasht hat. Er beweist nicht, dass der Publisher der ist, für den er sich ausgibt. Hole dir den erwarteten Hash also aus dem offiziellen Kanal des Publishers.',
      },
      {
        question: 'Speichert das Tool meine Dateien oder ihre Hashes?',
        answer:
          'Nein. Nichts wird hochgeladen oder gespeichert, und die berechneten Hashes existieren nur in deinem aktuellen Browser-Tab, bis du ihn schließt oder aktualisierst.',
      },
    ],
  },
  'favicon-generator': {
    slug: 'favicon-ersteller',
    name: 'Favicon- & App-Icon-Generator (.ico & PNG)',
    shortDescription:
      'Erstelle scharfe Multi-Size-PNG-Icons (16×16 bis 512×512) und ein echtes Multi-Frame-Binary-favicon.ico aus einem eigenen Monogramm-Badge oder hochgeladenen Logo.',
    keywords: [
      'favicon generator',
      'favicon.ico online erstellen',
      'apple touch icon generator',
      'text zu favicon monogramm',
      'favicon ico maker kostenlos',
      'pwa icon generator 192 512',
      'website favicon maker',
      'png zu favicon konverter',
      'app icon generator online',
    ],
    seo: {
      title: 'Favicon-Generator – .ico & PNG-App-Icons | UtilityFlow',
      description:
        'Erstelle ein echtes Multi-Frame-favicon.ico plus 16–512px-PNG-, Apple-Touch- und PWA-Icons aus deinem Logo oder einem Monogramm-Badge – kostenlos im Browser.',
      primaryKeyword: 'favicon generator',
      secondaryKeywords: [
        'png zu multi size ico konverter',
        'monogramm favicon erstellen',
        'pwa und apple touch icon generator',
        'favicon ico maker online kostenlos',
      ],
      longTailKeywords: [
        'echtes binary favicon.ico mit 16x16 32x32 48x48 frames kostenlos erstellen',
        'website favicon und html link tags aus text initialen erstellen',
        'quadratisches logo zu rundem apple touch icon 180x180 zuschneiden',
        '192x192 und 512x512 pwa icons für web manifest erstellen',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Designe in Sekunden ein sauberes Monogramm-Icon – oder lade dein bestehendes Markenlogo hoch –, um pixelscharfe 16×16-, 32×32-, 48×48-, 180×180-Apple-Touch- und 192×192-/512×512-PWA-PNG-Assets plus ein standardkonformes Multi-Image-Binary-favicon.ico und einbaufertiges HTML-<link>-Markup zu rendern.',
    instructions: [
      {
        title: 'Monogramm-Badge wählen oder Logo hochladen',
        description:
          'Gib 1–3 Markeninitialen mit eigenen Hintergrund-/Textfarben ein oder wechsle zu „Logo hochladen“, um ein bestehendes PNG-/SVG-/JPG-Markenzeichen zentriert zuzuschneiden.',
      },
      {
        title: 'Icon gestalten',
        description:
          'Wähle deine Monogramm-Buchstaben und Farben oder passe den Zuschnitt des hochgeladenen Logos an, damit das Markenzeichen auf jeder Seite zentriert mit gleichmäßigem Abstand sitzt.',
      },
      {
        title: 'Eckenform wählen',
        description:
          'Wähle die Rahmung „Abgerundetes Quadrat“ (iOS-/macOS-Stil), „Kreis“ oder „Scharfes Quadrat“.',
      },
      {
        title: 'Jede Größe in der Vorschau prüfen',
        description:
          'Prüfe die 16×16- und 32×32-Vorschauen sorgfältig – ein Markenzeichen, das groß gut aussieht, kann in Tab-Größe verschwommen wirken. Vereinfache also bei Bedarf Buchstaben oder Details.',
      },
      {
        title: 'favicon.ico, PNGs und HTML-Snippet herunterladen',
        description:
          'Lade das Multi-Frame-favicon.ico-Bundle zusammen mit einzelnen PNG-Größen herunter und kopiere die <head>-Link-Tags in dein Projekt.',
      },
      {
        title: 'Icons installieren und Cache leeren',
        description:
          'Lege die Dateien in deinen /public/-Ordner, füge die Link-Tags in index.html ein und aktualisiere dann hart oder leere deinen Browser-Cache – Browser cachen Favicons aggressiv, sodass ein veraltetes Icon meist ein gecachtes ist.',
      },
    ],
    examples: [
      {
        title: 'Icons für eine neue React- oder Cloudflare-Pages-App bootstrappen',
        input: 'Monogramm „UH“ · Hintergrund #4F46E5 · Form: Abgerundetes Quadrat',
        output: 'Binäres favicon.ico (16+32+48-px-PNG-Frames) + 6 PNG-Größen + HTML-<link>-Snippet',
        explanation: 'Konstruiert gültige ICONDIR- und ICONDIRENTRY-Binary-Header direkt in Uint8Array-Puffern.',
      },
      {
        title: 'Monogramm-Favicon aus Markeninitialen ohne Logo erstellen',
        input: 'Initialen „UF“ · Hintergrund #111827 · Text #FFFFFF · Form: Kreis',
        output: 'Sauberes rundes Monogramm-Badge als favicon.ico und PNGs von 16×16 bis 512×512.',
        explanation: 'Der Monogramm-Modus braucht keine Designsoftware für Nebenprojekte und MVPs.',
      },
    ],
    benefits: [
      'Erstellt eine echte Multi-Frame-Binary-.ico-Datei (16×16, 32×32 und 48×48), kein umbenanntes PNG',
      'Deckt Desktop-Tabs, Apple Touch (180×180) und Web-Manifest-Icons (192/512 px) ab',
      'Der Sofort-Monogramm-Modus braucht keine Designsoftware für Nebenprojekte und MVPs',
      'Erstellt sauberes HTML5-<link rel="icon">-Boilerplate, bereit zum Einfügen in index.html',
    ],
    useCases: [
      'Fehlende Favicons und Apple-Touch-Icons vor SaaS- oder Microsite-Launches ausliefern',
      'Kontrastreiche Tab-Icons für Staging- vs. Produktions-Dashboards erstellen',
      'Quadratische Marken-SVG-/PNG-Zeichen in vollständige PWA-Icon-Sets verwandeln',
      'Scharfe 16×16- und 32×32-Vorschauen erstellen, um Lesbarkeit bei kleiner Größe zu prüfen',
    ],
    faqs: [
      {
        question: 'Ist das heruntergeladene favicon.ico eine echte ICO-Binary-Datei?',
        answer:
          'Ja. Sie schreibt Standard-Windows-ICO-ICONDIR-Header und Verzeichniseinträge mit drei scharfen PNG-kodierten Frames (16×16, 32×32 und 48×48), die von allen modernen Browsern und Betriebssystemen unterstützt werden.',
      },
      {
        question: 'Welche Icon-Größen brauchen moderne Websites tatsächlich?',
        answer:
          'Ein favicon.ico plus ein 32×32-PNG, ein 180×180-Apple-Touch-Icon und 192×192-/512×512-Web-Manifest-PNGs decken praktisch jeden Desktop-, Mobile-iOS- und Android-Browser ab.',
      },
      {
        question: 'Wohin sollte ich diese Dateien in einem React- + Vite-Projekt legen?',
        answer:
          'Lege favicon.ico und die PNG-Icons in den /public/-Ordner deines Projekts und füge die HTML-<link>-Tags in den <head> von index.html ein.',
      },
      {
        question: 'Ist der Favicon-Generator kostenlos?',
        answer:
          'Ja, er ist komplett kostenlos ohne Anmeldung, und alle Icons werden lokal in deinem Browser erstellt.',
      },
      {
        question: 'Werden meine hochgeladenen Logos an einen Server gesendet?',
        answer:
          'Nein. Dein Logo wird vollständig in deinem Browser verarbeitet und niemals hochgeladen, sodass deine Marken-Assets privat bleiben.',
      },
      {
        question: 'Was ist der Unterschied zwischen einem favicon.ico und einem PNG-Favicon?',
        answer:
          'Ein favicon.ico ist ein Container, der mehrere Icon-Größen in einer Binary-Datei enthält, die Browser seit Jahrzehnten unterstützen. Ein PNG-Favicon ist ein Einzelgrößen-Bild; moderne Browser akzeptieren beides, aber .ico bleibt die sicherste Voreinstellung.',
      },
      {
        question: 'Was ist ein Apple-Touch-Icon?',
        answer:
          'Es ist das 180×180-PNG-Icon, das iOS nutzt, wenn jemand deine Website zum Home-Bildschirm hinzufügt. Ohne eines macht iOS stattdessen einen Screenshot deiner Seite, der meist schlecht aussieht.',
      },
      {
        question: 'Wofür sind 192×192- und 512×512-PWA-Icons?',
        answer:
          'Es sind die Icons, die in deinem Web-App-Manifest für installierbare Progressive Web Apps gelistet sind. Android und Chrome nutzen sie für Home-Bildschirm-Icon, Splash-Screen und App-Launcher.',
      },
      {
        question: 'Kann ich ein Favicon aus Text ohne Logo erstellen?',
        answer:
          'Ja. Der Monogramm-Modus verwandelt 1–3 Buchstaben, etwa deine Markeninitialen, in ein sauberes Badge mit deiner Wahl an Hintergrundfarbe, Textfarbe und Eckenform – ohne Designsoftware.',
      },
      {
        question: 'Welche Logodatei sollte ich für das beste Ergebnis hochladen?',
        answer:
          'Lade ein quadratisches PNG oder SVG mit transparentem Hintergrund in 512×512 oder größer hoch. Quadratische Quellbilder lassen sich sauber zuschneiden; breite oder hohe Logos werden mittig beschnitten, was Ränder abschneiden kann.',
      },
      {
        question: 'Warum erscheint mein neues Favicon nach dem Deployment nicht?',
        answer:
          'Browser cachen Favicons sehr aggressiv. Aktualisiere hart mit Strg+Umschalt+R (oder Cmd+Umschalt+R auf dem Mac), leere den Website-Cache oder teste in einem privaten Fenster, um das neue Icon zu sehen.',
      },
      {
        question: 'Sollte das Favicon exakt zu meinem Logo passen?',
        answer:
          'Bei großen Größen ja, aber bei 16×16 verschwinden feine Details. Vereinfache das Markenzeichen für die kleinsten Größen – fette Initialen oder eine einzelne fette Form lesen sich deutlich besser als ein detailliertes Logo.',
      },
      {
        question: 'Welche Eckenform sollte ich wählen?',
        answer:
          'Abgerundetes Quadrat passt zum iOS- und macOS-App-Icon-Styling, Kreis eignet sich für Avatare und Social-Stil-Marken, und Scharfes Quadrat ist am besten für geometrische oder technische Markenzeichen.',
      },
      {
        question: 'Muss ich HTML-Link-Tags für die Icons hinzufügen?',
        answer:
          'Ja, für zuverlässige Ergebnisse. Browser suchen standardmäßig nach /favicon.ico, aber Apple-Touch- und PWA-Icons laden nur, wenn du sie mit <link>-Tags im <head> deiner Seite deklarierst, die dieses Tool für dich erstellt.',
      },
      {
        question: 'Kann ich die erstellten Icons auch für eine Handy-App nutzen?',
        answer:
          'Die 192×192- und 512×512-PNGs funktionieren für PWA-Installationen, aber native iOS- und Android-Apps brauchen eigene Icon-Sets mit bestimmten Größen und Formaten, die dieses webfokussierte Tool nicht erstellt.',
      },
      {
        question: 'Funktioniert der Favicon-Generator offline?',
        answer:
          'Ja. Sobald die Seite geladen ist, läuft die Icon-Erstellung vollständig in deinem Browser ohne Netzwerkanfragen.',
      },
      {
        question: 'Welche Hintergrundfarbe funktioniert am besten für ein Monogramm-Favicon?',
        answer:
          'Eine einfarbige, kontrastreiche Markenfarbe mit weißen oder fast weißen Buchstaben funktioniert am besten, da sie bei 16×16 lesbar bleibt. Vermeide hellen Text auf hellem Hintergrund und unruhige Verläufe.',
      },
      {
        question: 'Kann ich Icons neu erstellen, nachdem ich meine Markenfarben geändert habe?',
        answer:
          'Ja. Aktualisiere einfach die Farben oder lade das neue Logo hoch und lade einen frischen Satz herunter – das Tool behält nichts aus deiner vorherigen Sitzung, sodass jeder Durchlauf sauber startet.',
      },
      {
        question: 'Funktioniert das Favicon in Dark-Mode-Browser-Tabs?',
        answer:
          'Ein Favicon mit einfarbiger Hintergrundfarbe zeigt sich in hellen und dunklen Tabs gleich. Wenn dein Markenzeichen dunkel auf transparent ist, füge einen hellen Hintergrund oder eine Kontur hinzu, damit es auf dunklem Browser-Chrome sichtbar bleibt.',
      },
      {
        question: 'Speichert das Tool meine Logos oder erstellten Icons?',
        answer:
          'Nein. Alles läuft lokal in deinem Browser-Tab, nichts wird hochgeladen oder gespeichert, und deine Dateien verschwinden, wenn du die Seite schließt oder aktualisierst.',
      },
    ],
  },
};
