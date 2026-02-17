# Documentatie 3 – Personalisatie & Data-opslag

---

## 1. Overzicht

In deze fase werd de applicatie uitgebreid met personalisatiefunctionaliteiten.

Gebruikers kunnen:

* Favoriete personages opslaan
* Hun voorkeuren (zoals thema) bewaren
* Data behouden tussen sessies via `localStorage`

Hierdoor wordt de applicatie persoonlijker en gebruiksvriendelijker.

---

## 2. Favorietenfunctionaliteit

### 2.1 Doel

Gebruikers kunnen personages markeren als favoriet.
Deze favorieten kunnen later afzonderlijk gefilterd worden.

---

## 2.2 Opslag in State

Favorieten worden bijgehouden in de centrale `state`:

```javascript
export const state = {
  ...
  favorites: []
};
```

In plaats van volledige objecten op te slaan, worden enkel de `id`'s opgeslagen.

### Waarom enkel ID’s?

* Minder geheugenverbruik
* Geen duplicatie van API-data
* Snellere vergelijkingen
* Data blijft gekoppeld aan originele character objecten

---

## 2.3 Toevoegen en Verwijderen van Favorieten

Bij het klikken op het hart-icoon wordt gecontroleerd of het personage al favoriet is.

```javascript
function toggleFavorite(characterId) {
  if (state.favorites.includes(characterId)) {
    state.favorites = state.favorites.filter(id => id !== characterId);
  } else {
    state.favorites.push(characterId);
  }

  saveFavorites();
  applyFilters();
}
```

### Wat gebeurt hier?

* Bestaat ID al → verwijderen
* Bestaat ID niet → toevoegen
* Daarna:

  * Opslaan in localStorage
  * UI opnieuw renderen

---

## 2.4 Filteren op Enkel Favorieten

In `filters.js`:

```javascript
if (state.filters.favoritesOnly) {
  result = result.filter(character =>
    state.favorites.includes(character.id)
  );
}
```

Hierdoor kan de gebruiker:

* Enkel favoriete personages bekijken
* Filters combineren met favorieten

---

## 3. Data Bewaren tussen Sessies (localStorage)

Om te voorkomen dat favorieten verdwijnen bij het sluiten van de browser, wordt gebruikgemaakt van `localStorage`.

---

### 3.1 Favorieten Opslaan

In `storage.js`:

```javascript
export function saveFavorites() {
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
}
```

---

### 3.2 Favorieten Laden bij Start

```javascript
export function loadFavorites() {
  const stored = JSON.parse(localStorage.getItem('favorites')) || [];
  state.favorites = stored;
}
```

Bij initialisatie van de applicatie wordt deze functie uitgevoerd.

Hierdoor:

* Blijven favorieten behouden
* Worden ze automatisch hersteld bij nieuwe sessies

---

## 4. Thema-switcher (Gebruikersvoorkeuren)

Naast favorieten kan de gebruiker ook een thema kiezen (licht/donker).

---

## 4.1 Opslag van Thema

In `state`:

```javascript
preferences: {
  theme: 'light'
}
```

---

## 4.2 Toepassen van Thema

```javascript
export function applyTheme() {
  document.body.dataset.theme = state.preferences.theme;
}
```

CSS gebruikt variabelen gebaseerd op het `data-theme` attribuut:

```css
body[data-theme="dark"] {
  --bg: #2a2735;
  --text-color: #ffffff;
}
```

Hierdoor:

* Wordt slechts één attribuut aangepast
* Worden alle kleuren automatisch bijgewerkt
* Blijft styling centraal beheerd via CSS-variabelen

---

## 4.3 Thema Opslaan

```javascript
export function savePreferences() {
  localStorage.setItem('preferences',
    JSON.stringify(state.preferences));
}
```

Bij herladen van de pagina:

```javascript
export function loadPreferences() {
  const stored =
    JSON.parse(localStorage.getItem('preferences')) || {};
  
  state.preferences = {
    ...state.preferences,
    ...stored
  };
}
```

---

## 5. Feedback Opslag (Extra Personalisatie)

Gebruikersfeedback wordt eveneens bewaard in `localStorage`.

```javascript
const stored =
  JSON.parse(localStorage.getItem('feedback')) || [];

stored.push({ name, rating, comment });

localStorage.setItem('feedback', JSON.stringify(stored));
```

Hierdoor:

* Blijft feedback bewaard
* Wordt de applicatie interactiever
* Wordt gebruikersinput persistent

---

## 6. Modulaire Structuur voor Opslag

Opslagfunctionaliteiten zijn ondergebracht in een aparte module:

* `storage.js` → favorieten en voorkeuren
* `preferences.js` → toepassen van thema
* `form.js` → feedback-opslag

Deze structuur zorgt voor:

* Duidelijke scheiding van verantwoordelijkheden
* Betere onderhoudbaarheid
* Herbruikbare opslagfuncties

---

## 7. UI / UX Voordelen

Door personalisatie toe te voegen:

* Krijgt de gebruiker controle over de ervaring
* Blijven voorkeuren behouden tussen sessies
* Ontstaat een gevoel van continuïteit
* Wordt de applicatie aantrekkelijker om opnieuw te gebruiken

De favorietenfilter en themaswitcher zorgen voor directe visuele feedback, wat de gebruiksvriendelijkheid verhoogt.

---

## 8. Conclusie

In deze fase werd de applicatie uitgebreid met persoonlijke functionaliteiten die verder gaan dan louter datavisualisatie.

Belangrijkste realisaties:

* Favorieten systeem met toggle-mechanisme
* Persistente opslag via `localStorage`
* Thema-switcher met CSS-variabelen
* Opslag van gebruikersfeedback
* Herstel van voorkeuren bij nieuwe sessies

Hierdoor evolueerde de applicatie naar een gepersonaliseerde webapplicatie met blijvende gebruikersinstellingen en interactieve data.
