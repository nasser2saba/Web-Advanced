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

### 🔍 Interactiviteit

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



---

## Auteur

Saba Le Nassr
Opleiding: Bachelor in de Toegepaste Informatica
Hogeschool: ErasmusHogeSchool Brussel
Vak: Web Advanced 



