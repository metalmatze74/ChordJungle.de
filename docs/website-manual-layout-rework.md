# Website Manual Layout Rework

## Umsetzung

Die Website-Anleitung in `httpdocs/handbuch.html` wurde als ruhigere, besser scannbare Produkthilfe verfeinert. Der bestehende Inhalt und alle geprüften Screenshots bleiben erhalten. Kapitel sind nun durch dezente Trennlinien klarer gegliedert; Schnellstart und Kapitelübersicht nutzen kompakte, gleichartige Raster.

## Komponenten

Die bestehende `manual-screenshot`-Komponente ist die einheitliche Bildhülle:

- zentrierte Darstellung mit `max-width: 840px`
- natürliche Bildbreite bei einer Desktop-Höhenbegrenzung von `min(70vh, 620px)`
- dunkler Rahmen, dezenter Schatten und Bildunterschrift
- auf kleinen Bildschirmen volle verfügbare Breite ohne Höhenbegrenzung

Zusätzlich markieren `manual-chapter` die elf Kapitel und geben ihnen einen Anker-Abstand für die fixe Kopfzeile. `manual-steps`, `manual-card-grid`, `manual-callout`, `manual-faq` und `manual-feedback-template` folgen derselben kompakten Rahmen- und Abstandslogik.

## Betroffene Screenshots

Weiter verwendet werden Songübersicht, Rohtext-Editor, Dateiimport, Setlistenübersicht, Setlisten-Einträge, Stage Mode, Metronom-Einstellungen sowie Backup & Wiederherstellung aus `httpdocs/assets/img/manual/`.

## Browser-QA

Lokal geprüft mit dem In-App-Browser bei 1440 × 960, 1024 × 900 und 390 × 844 Pixeln. Bildbegrenzung, Anker-Abstände, Textumbruch, horizontales Overflow und die Kopierfunktion der Feedback-Vorlage waren in der Prüfung unauffällig.

## Offene Punkte

Es gibt weiterhin keine geprüften Screenshots für aktive Setliste, lokale Übertragung, detaillierte Sync-Dialoge, Diagnose/Zurücksetzen sowie Smartphone- oder Desktop-Ansichten. Dafür wurden bewusst keine Ersatzbilder ergänzt.
