# Dataverzameling & Weergave

## 1. Gebruikte API
Voor dit project is de **Rick and Morty API** gebruikt. Dit is een publieke REST API die informatie bevat over alle personages uit de serie.

**Endpoint:** `https://rickandmortyapi.com/api/character`

De API levert data in pagina's van 20 personages, wat ideaal is voor het implementeren van infinite scroll.

## 2. Data ophalen (Fetch & Async/Await)
De data wordt opgehaald in `api.js` met de moderne `fetch()` methode in combinatie met `async/await`. 
- Er wordt gecontroleerd op responsfouten (`res.ok`).
- De JSON-data wordt gestructureerd teruggegeven naar de centrale state van de applicatie.

## 3. Data structureren
De opgehaalde data wordt opgeslagen in een centrale `state` (JavaScript object). Dit zorgt ervoor dat de applicatie altijd weet welke personages geladen zijn, welke filters actief zijn en op welke pagina de gebruiker zich bevindt.

## 4. Visuele weergave (Grid)
De personages worden getoond in een **dynamisch Grid-systeem** (CSS Grid). Elk personage wordt weergegeven in een 'Character Card' die de volgende 6 verplichte eigenschappen toont:
1. Afbeelding (Character Image)
2. Naam (Character Name)
3. Status (Alive, Dead of Unknown)
4. Species (Soort)
5. Gender (Geslacht)
6. Favorieten-status (Interactief icoon)

## 5. Infinite Scroll (Observer API)
In plaats van standaard paginanummers gebruikt deze SPA de **Intersection Observer API**. Zodra de gebruiker de onderkant van de pagina bereikt (het `observerTarget`), wordt automatisch de volgende pagina met data opgehaald en toegevoegd aan de lijst.