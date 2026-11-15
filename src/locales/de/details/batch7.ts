// Detail content for DE tools — split out of
// src/locales/de/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'image-compressor': {
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
