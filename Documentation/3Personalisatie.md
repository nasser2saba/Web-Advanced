# Personalisatie

## 1. Overzicht

Om de applicatie gebruiksvriendelijker en persoonlijker te maken, is een **favorietenfunctionaliteit** toegevoegd. Gebruikers kunnen favoriete personages of locaties opslaan zodat deze later eenvoudig terug te vinden zijn. Daarnaast  tussen sessies.

## 1. Favorieten Systeem
Gebruikers kunnen hun favoriete personages markeren door op het hart-icoontje te klikken op de Character Card. 
- De favorieten worden opgeslagen in een array in de centrale state.
- Een speciale 'Show Favorites' checkbox stelt de gebruiker in staat om alleen hun gekozen favorieten te bekijken.

## 2. Thema Voorkeuren
De applicatie bevat een thema-switcher met drie verschillende modi:
- **Pink Theme** (Standaard)
- **Blue Theme**
- **Dark Theme**
Het gekozen thema wordt toegepast op de `<body>` via een `data-theme` attribuut, waardoor de CSS variabelen in de root worden aangepast.

## 3. Gebruik van LocalStorage
Om de gebruikerservaring te verbeteren, worden zowel de **favorieten** als het **gekozen thema** opgeslagen in de `localStorage`. 
- Wanneer de gebruiker de browser sluit en later terugkeert, worden de voorkeuren automatisch ingeladen via `storage.js`.
- De feedback die een gebruiker achterlaat, wordt eveneens lokaal opgeslagen.

## 4. UI/UX Elementen
- **Responsiviteit:** De layout past zich aan van 6 kolommen op desktop naar 2 kolommen op mobiel voor optimale leesbaarheid.
- **Interactieve States:** Knoppen hebben hover-effecten op desktop en actieve 'tap' effecten op mobiele apparaten (schalen naar 0.95) voor directe visuele feedback.
- **Slideshow:** De homepagina bevat een automatische slideshow die de gebruiker direct introduceert aan de wereld van Rick & Morty.
