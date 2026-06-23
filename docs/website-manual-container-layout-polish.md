# Website Manual Container Layout Polish

## Behobene Ausrichtung

Der Hero hatte bisher eine eigene, zentrierte Maximalbreite, waehrend Schnellstart, Inhaltsnavigation und Kapitel mit einem breiteren Raster starteten. Dadurch lag der Hero auf Desktop sichtbar weiter rechts und der Schnellstart blieb durch eine allgemeine Listenbreite zu schmal.

## Container und Raster

`manual-container` ist nun die gemeinsame, ausschliesslich auf das Handbuch bezogene Aussenkante. Die Breite betraegt maximal 1120 Pixel und nutzt auf kleineren Bildschirmen konsistente seitliche Abstaende. Hero, Schnellstart, Inhaltsnavigation und alle Kapitel verwenden diese Klasse.

Die Schnellstart-Liste setzt die schmale Textbreite gezielt ausser Kraft und verwendet `repeat(auto-fit, minmax(170px, 1fr))`. Dadurch verteilen sich die fuenf Karten auf breiten Bildschirmen gleichmaessig im gemeinsamen Container und brechen auf kleineren Breiten sinnvoll um.

## QA

Die CSS-Regeln wurden statisch gegen die geforderten Breakpoints geprueft: Die gemeinsame Containerbreite betraegt auf Desktop maximal 1120 Pixel, bei kleineren Breiten bleiben 24 Pixel Seitenabstand und unter 560 Pixeln 11 Pixel. Der Schnellstart verwendet ein responsives `auto-fit`-Raster und wird auf Mobilgeraeten einspaltig; die Inhaltsnavigation wird dort ebenfalls einspaltig. Screenshots bleiben auf 840 Pixel begrenzt, zentriert und auf Mobilbreite responsiv.

Ein visueller Browser-Check war in dieser Umgebung nicht moeglich: Die geforderte Adresse auf Port 8080 lieferte im In-App-Browser `ERR_EMPTY_RESPONSE`. Ein isolierter Server auf Port 8081 lieferte aus dem Workspace erfolgreich `200 OK`, doch der anschliessende Browser-Aufruf wurde nach dem ersten Fehler von der Browser-URL-Policy blockiert. Deshalb wurden Desktop (1440 Pixel), Tablet (1024 Pixel), Mobil (390 Pixel), Anchor-Interaktion und die 50-Prozent-Uebersicht nicht als visuell bestaetigt.

## Restpunkte

Vor dem Deployment sollte die Seite in einem normalen lokalen Browser bei 1440, 1024 und 390 Pixeln kontrolliert werden. Dabei insbesondere die linke gemeinsame Containerkante, den Kartenumbruch und die Screenshot-Groesse pruefen. Inhalt und Screenshot-Assets wurden nicht veraendert.
