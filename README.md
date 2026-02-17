# Rick & Morty Interactive Single Page Application

## Projectbeschrijving

Dit project is een **Interactive Single Page Application (SPA)** ontwikkeld voor het vak **Advanced Web**. De applicatie maakt gebruik van de **Rick and Morty API** en laat gebruikers toe om personages uit de Rick & Morty-wereld te verkennen, te zoeken, te filteren, te sorteren en op te slaan als favorieten.

Het doel van dit project is om alle aangeleerde **moderne JavaScript-concepten**, **API-integratie**, **DOM-manipulatie** en **localStorage** samen te brengen in één coherente, gebruiksvriendelijke webapplicatie met echte data.

---

## Functionaliteiten

### Dataverzameling & Weergave

* Data wordt opgehaald via de **Rick and Morty API**
* Gebruik van het `character` endpoint (meer dan 20 objecten per request)
* Personages worden weergegeven in een **visuele lijst / grid**
* Elk personage toont minstens de volgende gegevens:

  * Afbeelding
  * Naam
  * Status (Alive / Dead / Unknown)
  * Species
  * Gender
  * Laatste bekende locatie
  * Aantal afleveringen

---

### Interactiviteit

* **Zoekfunctie** op naam van personages
* **Filtermogelijkheden**:

  * Status
  * Species
  * Gender
* **Sorteermogelijkheden**:

  * Alfabetisch (A–Z / Z–A)
  * Status
  * Aantal afleveringen

---

### Personalisatie

* Gebruikers kunnen personages toevoegen aan **favorieten**
* Favorieten worden opgeslagen in **LocalStorage**
* Data blijft bewaard tussen sessies
* Gebruikersvoorkeuren:

  * Dark / Light mode
  * Laatst gebruikte filters

---

### Gebruikerservaring

* Responsive design (desktop & mobiel)
* Gebruiksvriendelijke interface
* Duidelijke navigatie en interactieve elementen
* Visueel aantrekkelijke kaarten met iconen

---

## Technische Vereisten & Implementatie

### 1.DOM Manipulation:
- **Selection:** Used document.getElementById and querySelectorAll in ui.js and main.js.
- **Manipulation:** Dynamic card creation using grid.appendChild(card) in ui.js.
- **Events:** Added listeners for filters, search, and navigation (e.g., initRouter in navigation.js).
### 2.Modern JavaScript:
- **Constants/Arrow Functions:** Used throughout all .js files (e.g., export const state, entries => {}).
- **Template Literals:** Used for generating character card HTML in ui.js.
- **Array Methods:** Used .filter(), .forEach(), .includes(), and .sort() in filters.js and ui.js.
- **Ternary Operator:** Used for toggling heart icons: ${isFav ? '❤️' : '🤍'} in ui.js.
- **Promises / Async & Await:** Implemented in api.js to fetch data from the Rick & Morty API.
- **Observer API:** Used in observer.js to implement infinite scrolling.
### 3.Data & API:
- **Fetch:** Implemented in api.js to retrieve character data.
- **JSON:** Processed API responses and local storage data in api.js and storage.js.
### 4.Storage & Validation:
- **Form Validation:** Implemented in form.js using trim() and checking for radio button selection before submission.
- **LocalStorage:** Used in storage.js to persist favorites and theme preferences.
### 5.Styling & Layout:
- **CSS Grid:** Used for the main character gallery.
- **Flexbox:** Used for navigation, controls, and form alignment.
- **User-Friendly Elements:** Added heart icons for favorites and a responsive slideshow.
### 6.Tooling:
- Project structured for Vite with a clear separation of src/js, src/css, and src/assets

### DOM Manipulatie

* Selecteren van DOM-elementen (`querySelector`, `getElementById`)
* Dynamisch renderen van content (`createElement`, `innerHTML`)
* Event listeners voor:

  * Zoekveld
  * Filters
  * Sorteerknoppen
  * Favorieten

---

### Modern JavaScript

* Gebruik van `const` en `let`
* Template literals
* Array iteraties (`map`, `filter`, `sort`, `find`)
* Arrow functions
* Conditional (ternary) operator
* Callback functions (events)
* Promises
* `async / await`
* **Observer API** (IntersectionObserver voor infinite scroll)

---

### Data & API

* Data ophalen met `fetch()`
* JSON-data verwerken en weergeven
* Pagination van API-data
* Foutafhandeling bij API-calls

---

### Opslag & Validatie

* Favorieten opslaan in **LocalStorage**
* Gebruikersvoorkeuren opslaan
* Basis formulier validatie (zoekveld)

---

### Styling & Layout

* HTML-structuur met **Flexbox / CSS Grid**
* Custom CSS styling
* Gebruik van iconen en interactieve knoppen
* Responsive layout

---

### Tooling & Structuur

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

---

## Gebruikte API & Bronnen

* **Rick and Morty API**
  [https://rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)
* **Bronnen**
* Rick and Morty API Documentatie
* MDN Web Docs
* Cursusmateriaal Advanced Web


---

## Screenshots

**De verschillende Themas:**

![alt text](/rick-morty-spa/src/assets/screenshots/PinkTheme.png)
![alt text](/rick-morty-spa/src/assets/screenshots/BlueTheme.png)
![alt text](/rick-morty-spa/src/assets/screenshots/DarkTheme.png)

**De verschillende Pagina's:**
![alt text](/rick-morty-spa/src/assets/screenshots/HomePage.png)
![alt text](/rick-morty-spa/src/assets/screenshots/FeedbackPage.png)

**Mobile View (Iphone 12 pro):**
![alt text](/rick-morty-spa/src/assets/screenshots/Mobile-Home.png)
![alt text](/rick-morty-spa/src/assets/screenshots/Mobile-Characters.png)
![alt text](/rick-morty-spa/src/assets/screenshots/Mobile-Feedback.png)

## Auteur

Saba Le Nassr
Opleiding: Bachelor in de Toegepaste Informatica
Hogeschool: ErasmusHogeSchool Brussel
Vak: Web Advanced 


