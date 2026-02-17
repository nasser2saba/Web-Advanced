
# 🛸 Rick & Morty SPA

## Navigatie

- [🛸 Rick \& Morty SPA](#-rick--morty-spa)
  - [Navigatie](#navigatie)
  - [Projectbeschrijving](#projectbeschrijving)
  - [Functionaliteiten](#functionaliteiten)
    - [API-integratie](#api-integratie)
    - [Zoeken \& Filteren](#zoeken--filteren)
    - [Sorteren](#sorteren)
    - [Infinite Scroll](#infinite-scroll)
    - [Favorieten Systeem](#favorieten-systeem)
    - [Thema Wisselaar](#thema-wisselaar)
    - [Home Slideshow](#home-slideshow)
    - [Feedbackformulier](#feedbackformulier)
  - [Architectuur](#architectuur)
    - [Waarom deze structuur?](#waarom-deze-structuur)
  - [Gebruikte Technologieën](#gebruikte-technologieën)
  - [Technische Vereisten \& Implementatie](#technische-vereisten--implementatie)
    - [1. DOM-manipulatie](#1-dom-manipulatie)
    - [2. Moderne JavaScript](#2-moderne-javascript)
    - [3. Data \& API](#3-data--api)
    - [4. Opslag \& Validatie](#4-opslag--validatie)
    - [5. Styling \& Layout](#5-styling--layout)
  - [Resultaat](#resultaat)
  - [Screenshots](#screenshots)
    - [De verschillende thema’s](#de-verschillende-themas)
    - [De verschillende pagina’s](#de-verschillende-paginas)
    - [Mobiele weergave (iPhone 12 Pro)](#mobiele-weergave-iphone-12-pro)
  - [Auteur](#auteur)

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

### Zoeken & Filteren

Gebruikers kunnen:

* Karakters zoeken op naam (realtime)
* Filteren op:

  * Status
  * Soort (species)
  * Gender
  * Alleen favorieten
* Filters combineren
* Resultaten onmiddellijk zien updaten

---

### Sorteren

Karakters kunnen gesorteerd worden op:

* Naam (A → Z)
* Naam (Z → A)

De sortering wordt toegepast na filtering om consistente resultaten te garanderen.

---

### Infinite Scroll

Geïmplementeerd met `IntersectionObserver`.

* Laadt automatisch de volgende pagina
* Geen paginatieknoppen nodig
* Vlotte gebruikerservaring
* Geoptimaliseerde prestaties

---

### Favorieten Systeem

Gebruikers kunnen:

* Karakters toevoegen aan favorieten
* Karakters verwijderen uit favorieten
* Filteren op alleen favorieten
* Favorieten bewaren tussen sessies

Favorieten worden opgeslagen via:

```js
localStorage.setItem('favorites', JSON.stringify(state.favorites));
```

---

### Thema Wisselaar

De applicatie ondersteunt light- en darkmode.

* Gebruikt CSS-variabelen
* Thema wordt opgeslagen in localStorage
* Automatisch toegepast bij het herladen van de pagina

```js
document.body.dataset.theme = state.preferences.theme;
```

---

### Home Slideshow

De homepagina bevat:

* Een automatische afbeeldingsslideshow
* Fade-animatie
* Wissel om de 3 seconden

Dit verhoogt de visuele aantrekkelijkheid van de applicatie.

---

### Feedbackformulier

Gebruikers kunnen:

* Hun naam invullen
* Een rating geven
* Een commentaar schrijven

Inclusief:

* Basisvalidatie
* Opslag in localStorage

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

* **Ternary Operator:**
  Gebruikt voor het wisselen van favoriet-iconen:
  `${isFav ? '❤️' : '🤍'}` in `ui.js`

* **Promises / Async & Await:**
  Geïmplementeerd in `api.js` voor het ophalen van data via de API

* **Observer API:**
  Gebruikt in `observer.js` voor de implementatie van infinite scrolling

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

