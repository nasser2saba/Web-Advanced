# Documentatie 2 – Interactiviteit & Dynamische Functionaliteiten

---

## 1. Overzicht

In deze fase werd de applicatie uitgebreid met interactieve functionaliteiten die de gebruikerservaring aanzienlijk verbeteren.

De focus lag op:

* Zoekfunctionaliteit
* Dynamische filtering
* Sortering
* SPA-navigatie
* Formulierverwerking met validatie
* Realtime her-rendering van data

Alle interacties werken op basis van de centrale `state`, waardoor de applicatie consistent en uitbreidbaar blijft.

---

## 2. Zoekfunctionaliteit

Gebruikers kunnen personages op naam zoeken via een zoekveld in de interface.

### Event Listener (main.js)

```javascript
document.getElementById('searchInput')
  .addEventListener('input', (e) => {
    state.filters.search = e.target.value;
    applyFilters();
});
```

### Filtering Logica (filters.js)

```javascript
if (state.filters.search) {
  result = result.filter(character =>
    character.name
      .toLowerCase()
      .includes(state.filters.search.toLowerCase())
  );
}
```

### Kenmerken

* Case-insensitive vergelijking
* Realtime filtering tijdens het typen
* Geen extra API-calls nodig
* Filtering gebeurt op reeds opgehaalde data

Dit zorgt voor snelle en vloeiende interactie.

---

## 3. Dynamische Filters

Naast zoeken kunnen gebruikers filteren op:

* Status (Alive, Dead, Unknown)
* Species
* Gender
* Enkel favorieten

### Voorbeeld: Status filter

```javascript
if (state.filters.status) {
  result = result.filter(character =>
    character.status === state.filters.status
  );
}
```

### Voorbeeld: Favorieten filter

```javascript
if (state.filters.favoritesOnly) {
  result = result.filter(character =>
    state.favorites.includes(character.id)
  );
}
```

### Belangrijk principe

Alle filters worden gecombineerd toegepast binnen één functie:

```javascript
export function applyFilters() {
  let result = [...state.characters];

  // filters toegepast hier

  state.filtered = result;
  renderCharacters(state.filtered);
}
```

Dit zorgt ervoor dat:

* Filters samen kunnen werken
* De logica gecentraliseerd blijft
* De UI altijd synchroon loopt met de state

---

## 4. Sortering

De applicatie ondersteunt sortering op naam.

### Implementatie

```javascript
if (state.filters.sort === 'nameAsc') {
  result.sort((a, b) => a.name.localeCompare(b.name));
}

if (state.filters.sort === 'nameDesc') {
  result.sort((a, b) => b.name.localeCompare(a.name));
}
```

### Waarom `localeCompare()`?

* Correcte alfabetische vergelijking
* Ondersteunt speciale tekens
* Betrouwbaarder dan eenvoudige stringvergelijking

Sortering wordt toegepast:

1. Na filtering
2. Voor rendering
3. Direct op de gekopieerde array

---

## 5. Single Page Application (SPA) Navigatie

De applicatie werkt als een SPA.
Er wordt geen volledige pagina herladen bij navigatie.

### Navigatie-logica (navigation.js)

```javascript
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(link.dataset.page)
      .classList.add('active');
  });
});
```

### CSS

```css
.page {
  display: none;
}

.page.active {
  display: block;
}
```

### Resultaat

* Snelle navigatie
* Geen refresh
* State blijft behouden
* Betere gebruikerservaring

---

## 6. Dynamische Her-rendering

Elke keer wanneer:

* Een filter verandert
* Een sorteeroptie gekozen wordt
* Nieuwe data wordt geladen
* Een favoriet wordt aangepast

Wordt `applyFilters()` opnieuw uitgevoerd.

```javascript
state.filtered = result;
renderCharacters(state.filtered);
```

Hierdoor:

* Blijft de UI altijd up-to-date
* Is er geen handmatige DOM-manipulatie nodig buiten de renderfunctie
* Wordt code duplicatie vermeden

---

## 7. Feedbackformulier met Validatie

De applicatie bevat een feedbackformulier waar gebruikers een beoordeling kunnen geven.

### Validatie

```javascript
if (!name || !rating) {
  message.textContent = 'Please fill in all fields.';
  return;
}
```

### Opslag in localStorage

```javascript
const stored = JSON.parse(localStorage.getItem('feedback')) || [];
stored.push({ name, rating, comment });

localStorage.setItem('feedback', JSON.stringify(stored));
```

### Functionaliteit

* Controle op verplichte velden
* Feedback wordt opgeslagen tussen sessies
* Gebruiker krijgt visuele bevestiging

---

## 8. Architectuur van Interactie

De interactielogica is opgesplitst in modules:

* `filters.js` → filtering en sortering
* `navigation.js` → SPA-routing
* `form.js` → formulierverwerking
* `main.js` → event listeners
* `ui.js` → rendering

Deze modulaire aanpak zorgt voor:

* Betere leesbaarheid
* Makkelijk debuggen
* Eenvoudige uitbreiding
* Duidelijke scheiding van verantwoordelijkheden

---

## 9. Conclusie

In deze fase werd de applicatie omgevormd van een statische dataweergave naar een interactieve webapplicatie.

Belangrijkste realisaties:

* Realtime zoekfunctionaliteit
* Gecombineerde filtering
* Alfabetische sortering
* SPA-navigatie zonder refresh
* Dynamische her-rendering
* Feedbackformulier met validatie

Hierdoor ontstond een responsieve en gebruiksvriendelijke applicatie waarin gebruikers actief kunnen interageren met de data.



