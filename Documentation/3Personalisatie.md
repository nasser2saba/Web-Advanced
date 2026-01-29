# Personalisatie

## 1. Overzicht

Om de applicatie gebruiksvriendelijker en persoonlijker te maken, is een **favorietenfunctionaliteit** toegevoegd. Gebruikers kunnen favoriete personages of locaties opslaan zodat deze later eenvoudig terug te vinden zijn. Daarnaast blijven deze gegevens bewaard tussen sessies.

---

## 2. Opslaan van favorieten

### Werking

1. Naast elk personage is een **favorieten-knop** toegevoegd (bijvoorbeeld een hart-icoon)
2. Klikken op deze knop voegt het item toe aan een **favorietenlijst** of verwijdert het als het al favoriet is
3. De favorietenlijst wordt dynamisch bijgewerkt in de UI

### Technische aanpak

* Favorieten worden opgeslagen in een **JavaScript array**
* Elk object bevat de minimale gegevens om het item te identificeren (`id`, `name`, `image`)
* De array wordt gebruikt voor het renderen van een speciale favorieten-sectie in de UI

---

## 3. Data bewaren tussen sessies

Om te voorkomen dat favorieten verdwijnen wanneer de gebruiker de pagina verlaat, wordt gebruik gemaakt van **localStorage**.

### Stappen

1. Bij het toevoegen/verwijderen van een favoriet:

```javascript
localStorage.setItem('favorites', JSON.stringify(favoritesArray));
```

2. Bij het laden van de applicatie:

```javascript
const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
```

3. Hierdoor worden favorieten automatisch hersteld bij een nieuwe sessie

---

## 4. Gebruikersvoorkeuren uitbreiden

Naast favorieten kan het systeem eenvoudig andere voorkeuren opslaan:

* Geolocatie (om locaties te tonen)
* Taalkeuze (bijv. Engels/Nederlands)
* Thema (licht/donker modus)
* Gecachte API-data om laadtijd te verkorten

Deze structuur maakt het mogelijk om de applicatie verder te personaliseren zonder grote wijzigingen aan de code.

---

## 5. UI / UX voordelen

* Favorieten worden direct zichtbaar in een apart overzicht
* Sessie-onafhankelijk: gebruikers hoeven niets opnieuw te selecteren
* Intuïtieve interactie met visuele feedback (hartje verandert van kleur)

---

## 6. Conclusie

Door het opslaan van favorieten en gebruikersvoorkeuren ontstaat een **persoonlijke ervaring** die gebruikers laat terugkomen naar de applicatie. Het gebruik van `localStorage` maakt dit eenvoudig te implementeren zonder server-side data.
