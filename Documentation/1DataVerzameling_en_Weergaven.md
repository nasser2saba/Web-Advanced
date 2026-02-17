# Documentatie 1 – Dataverzameling & Weergave

---

## 1. Overzicht

In deze fase van het project werd de basis gelegd voor het ophalen, verwerken en weergeven van data uit een externe API.

De applicatie maakt gebruik van de publieke **Rick and Morty API** om personagegegevens dynamisch op te halen en weer te geven in een interactieve Single Page Application (SPA).

De focus lag op:

* API-integratie
* Asynchroon dataverkeer
* State management
* Dynamische rendering in een card-layout
* Infinite scroll via IntersectionObserver

---

## 2. API-integratie

### 2.1 Gebruikte Endpoint

De applicatie haalt data op via:

```
https://rickandmortyapi.com/api/character
```

Deze endpoint retourneert:

* Een array van 20 personages per pagina
* Metadata (`info`) met:

  * totaal aantal pagina’s
  * navigatielinks

Voorbeeld van relevante API-structuur:

```json
{
  "info": {
    "pages": 42
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "image": "..."
    }
  ]
}
```

---

## 3. Data ophalen met Async/Await

De API-logica bevindt zich in `api.js`.

### Implementatie:

```javascript
const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function fetchCharacters(page = 1) {
  const response = await fetch(`${BASE_URL}?page=${page}`);

  if (!response.ok) {
    throw new Error('API fout bij het ophalen van data');
  }

  const data = await response.json();

  return {
    characters: data.results,
    totalPages: data.info.pages
  };
}
```

### Technische uitleg

* `fetch()` voert een HTTP GET-request uit
* `await` pauzeert de functie tot de response binnen is
* `response.json()` converteert JSON naar een JavaScript object
* Enkel de noodzakelijke data wordt teruggegeven aan de applicatie

Voordelen van async/await:

* Leesbare code
* Betere foutafhandeling
* Geen callback nesting

---

## 4. Centrale State Management

Om data consistent te beheren wordt gebruikgemaakt van een centrale `state` in `state.js`.

```javascript
export const state = {
  characters: [],
  filtered: [],
  favorites: [],
  currentPage: 1,
  totalPages: 1,
  filters: {
    search: '',
    status: '',
    species: '',
    gender: '',
    sort: '',
    favoritesOnly: false
  },
  preferences: {
    theme: 'pink'
  }
};
```

### Waarom state management?

* Eén centrale bron van waarheid
* Filters kunnen gecombineerd worden
* Geen dubbele data-opslag
* Eenvoudig uitbreidbaar

Alle functionaliteiten werken op basis van deze state.

---

## 5. Dynamische Rendering

De personages worden weergegeven in een card-layout via DOM-manipulatie.

### CSS Grid Layout

```css
#characterGrid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
}
```

Hierdoor ontstaat:

* Een responsieve grid
* Visueel overzichtelijke presentatie
* Consistente spacing

---

### Card Rendering (voorbeeldstructuur)

```javascript
function createCharacterCard(character) {
  return `
    <div class="characterCard">
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
      <p>Gender: ${character.gender}</p>
    </div>
  `;
}
```

Rendering gebeurt telkens wanneer:

* Nieuwe data wordt geladen
* Filters worden aangepast
* Sortering verandert

---

## 6. Infinite Scroll (IntersectionObserver)

Om een betere gebruikerservaring te creëren werd gekozen voor infinite scrolling in plaats van paginaknoppen.

De implementatie bevindt zich in `observer.js`.

```javascript
const observer = new IntersectionObserver(async entries => {
  const entry = entries[0];

  if (entry.isIntersecting && state.currentPage < state.totalPages) {
    state.currentPage++;

    const data = await fetchCharacters(state.currentPage);

    state.characters.push(...data.characters);

    applyFilters();
  }
});
```

### Werking

1. De observer bewaakt een sentinel-element onderaan de pagina
2. Wanneer dit element zichtbaar wordt:

   * Wordt de volgende pagina opgehaald
   * Worden nieuwe personages toegevoegd aan `state.characters`
   * Wordt de UI opnieuw gerenderd

### Voordelen

* Geen handmatige paginatie nodig
* Vloeiende gebruikerservaring
* Efficiënt datagebruik
* Automatische uitbreiding van content

---

## 7. Foutafhandeling

Bij een mislukte API-call:

```javascript
if (!response.ok) {
  throw new Error('API fout');
}
```

Hierdoor:

* Crasht de applicatie niet onverwacht
* Kan foutmelding opgevangen worden
* Wordt robuustheid verhoogd

---

## 8. Technische Architectuur

De applicatie is modulair opgebouwd:

* `api.js` → API-communicatie
* `state.js` → centrale data-opslag
* `filters.js` → filtering en sortering
* `observer.js` → infinite scroll
* `ui.js` → rendering
* `main.js` → initialisatie

Deze scheiding van verantwoordelijkheden zorgt voor:

* Overzichtelijke code
* Makkelijk onderhoud
* Schaalbaarheid
* Herbruikbaarheid van functies

---

## 9. Conclusie

In deze fase werd een stabiele basis gelegd voor de applicatie:

* Externe API succesvol geïntegreerd
* Asynchrone data-ophaling correct geïmplementeerd
* Centrale state structuur opgezet
* Dynamische card-weergave gebouwd
* Infinite scroll toegevoegd voor optimale UX

Hiermee beschikt de applicatie over een solide technische fundering waarop verdere interactiviteit en personalisatie gebouwd kon worden.

