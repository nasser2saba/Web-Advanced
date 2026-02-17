# Interactiviteit

## Overzicht

Om de applicatie gebruiksvriendelijk en interactief te maken, zijn verschillende interactieve functies geïmplementeerd:

* Zoekfunctie
* Filterfunctionaliteit
* Sorteermogelijkheden

Deze functies werken samen op dezelfde dataset, zodat de gebruiker dynamisch resultaten kan aanpassen zonder nieuwe API-calls.

## 1. Dynamisch Zoeken
De zoekfunctie in `main.js` luistert naar het `input`-event op het zoekveld. De lijst met personages wordt in real-time gefilterd op basis van de ingevoerde naam. Hierbij wordt `toLowerCase()` gebruikt om de zoekopdracht hoofdletterongevoelig te maken.

Stap-voor-stap:

1. Een inputveld wordt geplaatst in de UI
2. Er wordt geluisterd naar het `input`-event
3. De ingevoerde tekst wordt vergeleken met de `name`-property van elk personage
4. Alleen overeenkomende resultaten worden weergegeven

## 2. Filterfunctionaliteit
Er zijn drie dropdown-menu's (selectboxen) toegepast waarmee de gebruiker de dataset kan verfijnen:
- **Status:** Filteren op Alive, Dead of Unknown.
- **Species:** Filteren op Human of Alien.
- **Gender:** Filteren op geslacht.

De functie `applyFilters()` in `filters.js` zorgt ervoor dat deze filters gecombineerd kunnen worden met de zoekopdracht.

### Werking

1. De gebruiker kiest een optie uit een dropdown
2. De originele dataset wordt gefilterd
3. Alleen items die voldoen aan de geselecteerde criteria blijven over

Filters kunnen gecombineerd worden met de zoekfunctie.

## 3. Sorteren
De applicatie biedt de mogelijkheid om de personages alfabetisch te sorteren (A-Z en Z-A). Dit wordt direct op de gefilterde array toegepast met de `.sort()` methode voordat de UI opnieuw wordt gerenderd.

### Beschikbare sorteringen

* Alfabetisch (A–Z)
* Alfabetisch (Z–A)


## 4. Navigatie (SPA Router)
Omdat dit een **Single Page Application (SPA)** is, vindt er geen paginarefresh plaats. De `initRouter` functie in `navigation.js` vangt kliks op de navigatieknoppen op en wisselt tussen de secties (Home, Characters, Feedback) door de CSS-class `active` te manipuleren.

## 5. Feedback Formulier & Validatie
Op de feedbackpagina kan de gebruiker een formulier invullen. 
- **Validatie:** Het script controleert of een naam is ingevuld en of er een beoordeling is gekozen.
- **Feedback:** Na verzending krijgt de gebruiker een succesmelding in de UI te zien en wordt het formulier leeggemaakt.


## 6. Gebruikerservaring

* Resultaten worden realtime geüpdatet
* Geen pagina-refresh nodig (SPA-principe)
* Duidelijke UI-elementen (inputvelden en dropdowns)

Dit verhoogt de gebruiksvriendelijkheid en maakt het werken met grote datasets overzichtelijk.

## 7. Conclusie

Door het combineren van zoeken, filteren en sorteren ontstaat een interactieve applicatie waarin gebruikers snel en efficiënt specifieke data kunnen vinden. Deze aanpak sluit goed aan bij moderne webapplicaties en de vereisten van het project.



