
# 🛸 Rick & Morty SPA

## Navigatie

- [🛸 Rick \& Morty SPA](#-rick--morty-spa)
  - [Navigatie](#navigatie)
  - [Setup \& Installatie](#setup--installatie)
    - [1️. Repository downloaden](#1️-repository-downloaden)
    - [2️. Navigeer naar de juiste projectmap (ZEER BELANGRIJK ⚠️)](#2️-navigeer-naar-de-juiste-projectmap-zeer-belangrijk-️)
    - [3️. Dependencies installeren](#3️-dependencies-installeren)
    - [4️. Development server starten](#4️-development-server-starten)
  - [Projectbeschrijving](#projectbeschrijving)
  - [Functionaliteiten](#functionaliteiten)
    - [API-integratie](#api-integratie)
    - [State Persistentie (SPA Refresh Gedrag)](#state-persistentie-spa-refresh-gedrag)
    - [API Rate-Limit Beveiliging](#api-rate-limit-beveiliging)
  - [Architectuur](#architectuur)
    - [Waarom deze structuur?](#waarom-deze-structuur)
  - [Gebruikte Technologieën](#gebruikte-technologieën)
  - [Technische Vereisten \& Implementatie](#technische-vereisten--implementatie)
    - [1. DOM-manipulatie](#1-dom-manipulatie)
    - [2. Moderne JavaScript](#2-moderne-javascript)
    - [3. Data \& API](#3-data--api)
    - [4. Opslag \& Validatie](#4-opslag--validatie)
    - [5. Styling \& Layout](#5-styling--layout)
    - [6. Tooling \& structuur:](#6-tooling--structuur)
  - [Resultaat](#resultaat)
  - [Screenshots](#screenshots)
    - [De verschillende thema’s](#de-verschillende-themas)
    - [De verschillende pagina’s](#de-verschillende-paginas)
    - [Mobiele weergave (iPhone 12 Pro)](#mobiele-weergave-iphone-12-pro)
  - [Auteur](#auteur)

---

## Setup & Installatie

Volg deze stappen om het project correct op te starten:

### 1️. Repository downloaden

Clone de repository via Git:

```bash
git clone <repository-url>
```

Of download de ZIP en pak deze uit.

---

### 2️. Navigeer naar de juiste projectmap (ZEER BELANGRIJK ⚠️)

Het project bevindt zich **NIET** in de bovenliggende map `web advanced`.

Je moet eerst navigeren naar de juiste map:

```bash
cd web-advanced
cd rick-morty-spa
```

OF rechtstreeks:

```bash
cd rick-morty-spa
```

**Belangrijk:**
Je moet `npm run dev` uitvoeren binnen de map `rick-morty-spa`, omdat daar de Vite-configuratie en het project zich bevinden.

---

### 3️. Dependencies installeren

Installeer de nodige packages:

```bash
npm install
```

---

### 4️. Development server starten

Start de applicatie met:

```bash
npm run dev
```

De applicatie zal lokaal draaien op een Vite development server (meestal `http://localhost:5173`).

---


## Projectbeschrijving

Dit project is een **Interactive Single Page Application (SPA)** ontwikkeld voor het vak **Web Advanced**. De applicatie maakt gebruik van de **Rick and Morty API** en laat gebruikers toe om personages uit de Rick & Morty-wereld te verkennen, te zoeken, te filteren, te sorteren en op te slaan als favorieten.

Het doel van dit project is om alle aangeleerde **moderne JavaScript-concepten**, **API-integratie**, **DOM-manipulatie** en **localStorage** samen te brengen in één coherente en gebruiksvriendelijke webapplicatie met echte data.

De applicatie focust op:

* API-integratie
* Infinite scrolling
* Filteren & sorteren
* Personalisatie (favorieten & thema)
* Modulaire architectuur
* Persistente opslag met localStorage
* State-persistentie bij refresh (pagina blijft behouden)
* API-rate limit beveiliging met gebruikersfeedback

---

## Functionaliteiten

### API-integratie

* Haalt karakterdata op via:

  ```
  https://rickandmortyapi.com/api/character
  ```

* Gebruikt `async/await`

* Ondersteunt paginatie

* Toont 20 karakters per pagina

* Laadt automatisch extra karakters via infinite scroll

---

### State Persistentie (SPA Refresh Gedrag)

In een standaard Single Page Application wordt bij een refresh meestal automatisch teruggekeerd naar de homepagina.

In deze applicatie werd dit verbeterd:

* De laatst bezochte pagina wordt opgeslagen in `localStorage`
* Bij het herladen van de pagina blijft de gebruiker op de pagina waar hij/zij zich bevond
* Dit zorgt voor een professionelere en gebruiksvriendelijkere ervaring

---

### API Rate-Limit Beveiliging

Tijdens intensief scrollen kunnen er te veel verzoeken naar de API worden gestuurd.
Wanneer de API tijdelijk blokkeert (bijvoorbeeld bij een 429-fout), gebeurt het volgende:

* Extra verzoeken worden tijdelijk geblokkeerd via een fetching-lock mechanisme
* Er verschijnt een subtiele popup onderaan het scherm
* De popup meldt dat de API momenteel bezet is
* De gebruiker krijgt de melding om het binnen enkele seconden opnieuw te proberen

Dit voorkomt crashes en zorgt voor duidelijke gebruikersfeedback.

---

## Architectuur

* Project opgezet met **Vite**
* Gestructureerde mappenindeling:

```
src/
├─ css/
├─ js/
├─ assets/
index.html
```

* Gescheiden HTML, CSS en JavaScript
* Meerdere betekenisvolle commits op GitHub
* Modulaire structuur:

```
js/
│
├── api.js           → API-communicatie
├── state.js         → Centrale state management
├── filters.js       → Filter- en sorteermodule
├── observer.js      → Infinite scroll logica
├── ui.js            → Renderfuncties
├── storage.js       → localStorage beheer
├── preferences.js   → Themabeheer
├── slideshow.js     → Home slideshow
├── navigation.js    → SPA-routing
├── form.js          → Feedbackverwerking
├── main.js          → Initialisatie van de app
```

### Waarom deze structuur?

* Duidelijke scheiding van verantwoordelijkheden
* Eenvoudiger debuggen
* Schaalbare opbouw
* Professionele projectorganisatie

---

## Gebruikte Technologieën

* HTML5
* CSS3 (Grid, variabelen, transities)
* Vanilla JavaScript (ES6 Modules)
* IntersectionObserver API
* localStorage
* Fetch API

Er werden geen frameworks of externe libraries gebruikt.

---

## Technische Vereisten & Implementatie

### 1. DOM-manipulatie

* **Selectie:**
  Gebruik van `document.getElementById()` en `querySelectorAll()` in `ui.js` en `main.js`

* **Manipulatie:**
  Dynamische aanmaak van karakterkaarten via `grid.appendChild(card)` in `ui.js`

* **Events:**
  Toevoegen van event listeners voor filters, zoekfunctie en navigatie (bijvoorbeeld `initRouter` in `navigation.js`)

---

### 2. Moderne JavaScript

* **Constanten & Arrow Functions:**
  Gebruikt in alle `.js`-bestanden (bijvoorbeeld `export const state`, `entries => {}`)

* **Template Literals:**
  Gebruikt voor het genereren van HTML-structuur van karakterkaarten in `ui.js`

* **Array-methodes:**
  Gebruik van `.filter()`, `.forEach()`, `.includes()` en `.sort()` in `filters.js` en `ui.js`

* **Arrow functions**
  Gebruikt arrow functions (=>) consequent door het hele project voor een kortere en modernere schrijfwijze van functies.
  - In vrijwel elk bestand, bijvoorbeeld in main.js bij de event listeners:
  `document.getElementById('searchInput').addEventListener('input', e => { ... });`
  In ui.js is er bij de loop door de characters:
  `characters.forEach(char => { ... });`

* **Conditional (Ternary) Operator:**
  Gebruikt voor het wisselen van favoriet-iconen:
  `${isFav ? '❤️' : '🤍'}` in `ui.js`

* **Call back function**
  In main.js en ui.js. De anonieme functies die je meegeeft aan addEventListener zijn callbacks:
  `btn.addEventListener('click', () => { ... }); // De () => { ... }` is de callback
  De functie binnen de IntersectionObserver in observer.js is ook een callback die wordt uitgevoerd zodra het doel-element in beeld komt.

* **Promises / Async & Await:**
  **Asynch & Await**
  Geïmplementeerd in `api.js` voor het ophalen van data via de API.
  In main.js bij de init() functie en in observer.js bij de infinite scroll.
  **Promise**
  De fetch() methode geeft standaard een Promise terug.
  ```js
  export async function fetchCharacters(page = 1) {
    const res = await fetch(...);
    const data = await res.json();
  }
  ```


* **Observer API:**
  Gebruikt in `observer.js` voor de implementatie van infinite scrolling
  ```js
  const observer = new IntersectionObserver(async entries => {
    // Logica voor infinite scroll
  }, { threshold: 0.1 });
  ```

---

### 3. Data & API

* **Fetch API:**
  Geïmplementeerd in `api.js` om karakterdata op te halen

* **JSON-verwerking:**
  Verwerking van API-responses en localStorage-data in `api.js` en `storage.js`

---

### 4. Opslag & Validatie

* **Formuliervalidatie:**
  Geïmplementeerd in `form.js` met gebruik van `trim()` en controle op geselecteerde radio-buttons vóór verzending

* **LocalStorage:**
  Gebruikt in `storage.js` voor het opslaan van favorieten en themavoorkeuren

---

### 5. Styling & Layout

* **CSS Grid:**
  Gebruikt voor de hoofdgalerij van karakters

* **Flexbox:**
  Toegepast voor navigatie, filtercontroles en formulieruitlijning

* **Gebruiksvriendelijke elementen:**
  Toevoeging van harticonen voor favorieten en een responsieve slideshow op de homepagina

---

### 6. Tooling & structuur: 

* Project is opgezet met Vite ✅
* Een correcte folderstructuur wordt aangehouden (gescheiden html, css en js files, src folder, dist folder, ...) ✅


## Resultaat

Het eindresultaat is een volledig functionele interactieve webapplicatie die:

* Dynamisch API-data ophaalt en weergeeft
* Geavanceerde zoek- en filtermogelijkheden biedt
* Personalisatie ondersteunt
* Gegevens bewaart tussen sessies
* Een moderne en vlotte gebruikerservaring levert

---

## Screenshots

### De verschillende thema’s

![Pink Theme](/rick-morty-spa/src/assets/screenshots/PinkTheme.png)
![Blue Theme](/rick-morty-spa/src/assets/screenshots/BlueTheme.png)
![Dark Theme](/rick-morty-spa/src/assets/screenshots/DarkTheme.png)

### De verschillende pagina’s

![Home Page](/rick-morty-spa/src/assets/screenshots/HomePage.png)
![Feedback Page](/rick-morty-spa/src/assets/screenshots/FeedbackPage.png)

### Mobiele weergave (iPhone 12 Pro)

![Mobile Home](/rick-morty-spa/src/assets/screenshots/Mobile-Home.png)
![Mobile Characters](/rick-morty-spa/src/assets/screenshots/Mobile-Characters.png)
![Mobile Feedback](/rick-morty-spa/src/assets/screenshots/Mobile-Feedback.png)

---

## Auteur

**Saba Le Nassr**
Bachelor in de Toegepaste Informatica
Erasmushogeschool Brussel
Vak: Web Advanced

