# Dataverzameling & Weergave

## 1. Gebruikte API

Voor dit project is de **Rick and Morty API** gebruikt. Dit is een publieke REST API die informatie bevat over personages, locaties en afleveringen uit de Rick and Morty-serie.

**Gebruikt endpoint:**

```
https://rickandmortyapi.com/api/character
```

Dit endpoint retourneert standaard 20 personages per pagina, wat voldoet aan de vereiste van minstens 20 objecten.

---

## 2. Data ophalen (fetch)

De data wordt opgehaald met de JavaScript `fetch()`-methode. Bij het laden van de applicatie wordt een API-call uitgevoerd om de personages op te halen.

Belangrijke stappen:

1. Een `async` functie aanmaken om data op te halen
2. De response omzetten naar JSON
3. De resultaten opslaan in een variabele voor verdere verwerking

Voorbeeldstructuur:

* `results`: array met personage-objecten
* Elk object bevat o.a. `name`, `status`, `species`, `gender`, `origin`, `location`, `image`

---

## 3. Data structureren

Na het ophalen van de data wordt deze opgeslagen in een array. Deze array wordt gebruikt als basis voor:

* Weergave van de lijst
* Filteren
* Zoeken
* Sorteren

Er wordt gewerkt met een **centrale state** (JavaScript array) zodat alle interacties dezelfde dataset gebruiken.

---

## 4. Visuele weergave

De personages worden weergegeven in een **lijstweergave (tabel)** met duidelijke kolommen. Elke rij stelt één personage voor.

### Getoonde kolommen (minstens 6):

1. Afbeelding (character image)
2. Naam
3. Status (Alive / Dead / Unknown)
4. Species
5. Gender
6. Locatie (laatst bekende locatie)

Deze weergave zorgt voor een duidelijk overzicht en maakt vergelijken eenvoudig.

---

## 5. Extra visuele elementen

* Afbeeldingen van personages zorgen voor herkenbaarheid
* CSS wordt gebruikt voor spacing, uitlijning en leesbaarheid
* De layout is responsive zodat de lijst ook op kleinere schermen bruikbaar blijft

---

## 6. Detailweergave

Naast de lijst bevat elk item voldoende informatie om snel inzicht te krijgen in het personage. De combinatie van tekst en beeld zorgt voor een gebruiksvriendelijke presentatie.

---

## 7. Conclusie

Door het gebruik van een externe API, gestructureerde data-opslag en een duidelijke visuele lijstweergave voldoet dit onderdeel aan de vereisten voor dataverzameling en -weergave binnen een Single Page Application.
