# Documentatie 4 – Eindafwerking, UI-optimalisatie & Architectuur

## 1. Overzicht

In deze laatste fase werd de applicatie technisch afgewerkt, visueel geoptimaliseerd en robuuster gemaakt voor fouten.

De focus lag op:

* **Gebruikerservaring (UX):** Persistentie van de laatst bezochte pagina
* **Foutafhandeling:** Beveiliging tegen API rate-limits
* **Visuele verfijning:** Home-slideshow en mobiele optimalisatie
* **Architectuur:** Consistente modulaire opbouw en state-management

---

## 2. State Persistentie (Paginabehoud)

Een veelvoorkomend probleem bij SPA's is dat een refresh de gebruiker terugstuurt naar de homepagina. Dit werd opgelost door de actieve pagina op te slaan in `localStorage`.

### 2.1 Implementatie in `navigation.js`

De router is uitgebreid met een helper-functie `navigateTo()` die de status opslaat:

```javascript
export function navigateTo(targetPage) {
  // Opslaan in localStorage voor persistentie na refresh
  localStorage.setItem('lastPage', targetPage);

  // UI bijwerken (classes switchen)
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(targetPage).classList.add('active');
  // ... navBtn activatie logica
}
```

### 2.2 Initialisatie in `main.js`

Bij het opstarten van de app wordt gecontroleerd wat de laatst bezochte pagina was:

```javascript
async function init() {
  const lastPage = localStorage.getItem('lastPage') || 'home';
  navigateTo(lastPage);
  // ... rest van de initialisatie
}
```

---

## 3. API Beveiliging & Rate Limiting

Tijdens het snel scrollen met Infinite Scroll konden er te veel API-verzoeken tegelijk worden verzonden, wat leidde tot **429-fouten (Too Many Requests)**. Dit werd opgelost met een *Fetching Lock* en een visuele waarschuwing.

### 3.1 De Fetching Lock in `observer.js`

Door een `isFetching` variabele te gebruiken, worden meerdere gelijktijdige calls voorkomen:

```javascript
let isFetching = false;

if (entry.isIntersecting && !isFetching) {
  isFetching = true; // Vergrendel nieuwe verzoeken
  try {
    const data = await fetchCharacters(state.currentPage + 1);
    // ... data verwerken
  } catch (error) {
    showApiPopup(); // Toon waarschuwing bij fout
  } finally {
    isFetching = false; // Ontgrendel pas na voltooiing
  }
}
```

### 3.2 Gebruikersfeedback (API Popup)

Als de API-limiet wordt bereikt, verschijnt er een subtiele rode popup onderaan het scherm.

```css
#apiPopup {
  position: fixed;
  bottom: 20px;
  background: #ff4d4d;
  transition: opacity 0.3s;
}
```

---

## 4. Definitieve Card-Only Layout & Mobiele Focus

Er is definitief gekozen voor een card-layout die op mobiel optimaal presteert.

### 4.1 Responsieve Grid

```css
#characterGrid {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Desktop */
  gap: 1.5rem;
}

@media (max-width: 768px) {
  #characterGrid {
    grid-template-columns: repeat(2, 1fr); /* Mobiel: Altijd 2 kaarten */
  }
}
```

---

## 5. Home Slideshow

De homepagina bevat een automatische slideshow met een vloeiend fade-effect om de app visueel te versterken.

* Gebruikt `setInterval` (3 seconden)
* CSS-transities op `opacity` voor een professionele look

---

## 6. Finale Architectuur

De applicatie volgt een strikt modulaire opbouw via Vite:

| Bestand         | Verantwoordelijkheid                          |
| --------------- | --------------------------------------------- |
| `api.js`        | Fetching met error handling                   |
| `filters.js`    | Filters, sorteren, zoek functie en favorieten |
| `form.js`       | Feedback validatie en opslag                  |
| `main.js`       | Coördinatie van alle modules en initialisatie |
| `navigation.js` | SPA-routing met localStorage persistentie     |
| `observer.js`   | Infinite scroll met fetching-lock             |
| `preferences.js`| Ophalen van geprefereerde thema               |
| `slideshow.js`  | Gewoon de slideshow :)                        |
| `state.js`      | Centrale state (filters, page, characters)    |
| `storage.js`    | Beheer van favorieten en thema-voorkeuren     |
| `ui.js`         | Card rendering & event listeners              |

---

## 7. UX & Performance Verbeteringen

De finale versie bevat deze geavanceerde verbeteringen:

* **Persistentie:** De gebruiker blijft op de pagina waar hij gebleven was na een refresh
* **API Safety:** Voorkomt crash door te veel verzoeken tijdens het scrollen
* **Mobiel design:** 2-koloms grid en touch-vriendelijke knoppen (scale effect)
* **Thema-switcher:** Volledig persistente Pink/Blue/Dark modi
* **Infinite Scroll:** Naadloze overgang tussen pagina's data

---

## 8. Eindconclusie

De applicatie is getransformeerd van een simpele data-lijst naar een robuuste, gebruiksvriendelijke Single Page Application.

Door de implementatie van state-persistentie en API-lockmechanismen voldoet de app aan professionele standaarden voor moderne web-apps. Het eindresultaat is een snelle, visueel aantrekkelijke **Rick & Morty explorer** die consistent presteert op zowel desktop als mobiele apparaten.
