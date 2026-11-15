// Detail content for DE tools — split out of
// src/locales/de/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'meta-tag-generator': {
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
};
