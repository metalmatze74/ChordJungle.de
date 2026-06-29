# ChordJungle Static Website

Statische Website für ChordJungle.

## Enthalten

- `index.html` – Startseite
- `impressum.html` – Impressum
- `datenschutz.html` – Datenschutzerklärung
- `styles.css` – Layout und Design
- `script.js` – Jahreszahl im Footer
- `assets/` – App-Icon, Favicons und Open-Graph-Bild
- `manifest.webmanifest`, `robots.txt`, `sitemap.xml`

## Inhaltliche Basis

Die Seite wurde mit dem aktuellen App-Repo abgeglichen. Der Text berücksichtigt:

- Songs erstellen und bearbeiten
- Setlisten erstellen
- Stage Mode
- lokaler Text-, OnSong- und ChordPro-Dateiimport
- Backup und Restore
- Lokale Übertragung zwischen Geräten
- Optionale Nextcloud/WebDAV-Funktionen
- Community-Songbuch über Nextcloud/WebDAV
- Metronom, aktive Setliste, Fußpedal-/Tastatursteuerung, Diagnose und Beta-Feedback
- Zielplattformen Android, iPhone, iPad sowie ausgewählte macOS-, Windows- und Linux-Beta-Builds

## Rechtliches

Impressum und Datenschutzerklärung sind als eigene Seiten enthalten und im Footer verlinkt. Bitte vor Veröffentlichung insbesondere Kontaktdaten, Telefonnummern, Hostingangaben, AVV-Status, Tracking/Cookies und tatsächliche Datenverarbeitung prüfen.


## Kontakt-Maskierung

E-Mail-Adresse und Telefonnummer werden nicht mehr als Klartext-`mailto:`-/`tel:`-Links im HTML ausgeliefert, sondern aus umgedrehten Datenfragmenten per JavaScript zusammengesetzt. Das reduziert einfache Bot-Erkennung, ersetzt aber keinen zuverlässigen Spam-Schutz. Für Besucher ohne JavaScript ist ein menschenlesbarer Fallback enthalten.

`robots.txt` und `sitemap.xml` sind auf `https://chordjungle.de` gesetzt. Falls die Seite unter einer anderen Domain online geht, diese Werte bitte anpassen.
