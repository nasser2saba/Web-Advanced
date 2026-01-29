# Interactiviteit

## 1. Overzicht

Om de applicatie gebruiksvriendelijk en interactief te maken, zijn verschillende interactieve functies geïmplementeerd:

* Zoekfunctie
* Filterfunctionaliteit
* Sorteermogelijkheden

Deze functies werken samen op dezelfde dataset, zodat de gebruiker dynamisch resultaten kan aanpassen zonder nieuwe API-calls.

---

## 2. Zoekfunctie

### Werking

De zoekfunctie laat de gebruiker personages zoeken op **naam**.

Stap-voor-stap:

1. Een inputveld wordt geplaatst in de UI
2. Er wordt geluisterd naar het `input`-event
3. De ingevoerde tekst wordt vergeleken met de `name`-property van elk personage
4. Alleen overeenkomende resultaten worden weergegeven

### Technische aanpak

* `toLowerCase()` wordt gebruikt om hoofdlettergevoeligheid te vermijden
* `includes()` controleert of de zoekterm voorkomt in de naam

Dit zorgt voor directe feedback tijdens het typen.

---

## 3. Filterfunctionaliteit

### Gebruikte filters

Er is filterfunctionaliteit toegevoegd op basis van:

* Status (Alive / Dead / Unknown)
* Gender
* Species

### Werking

1. De gebruiker kiest een optie uit een dropdown
2. De originele dataset wordt gefilterd
3. Alleen items die voldoen aan de geselecteerde criteria blijven over

Filters kunnen gecombineerd worden met de zoekfunctie.

---

## 4. Sorteermogelijkheden

### Beschikbare sorteringen

* Alfabetisch (A–Z)
* Alfabetisch (Z–A)

### Implementatie

* De JavaScript `sort()`-methode wordt gebruikt
* Er wordt gesorteerd op de `name`-property
* De sortering wordt toegepast op de gefilterde dataset

Zo blijft de sorteerfunctie consistent met actieve filters en zoekopdrachten.

---

## 5. Samenwerking tussen functies

De volgorde van verwerking:

1. Originele dataset
2. Filter toepassen
3. Zoekopdracht toepassen
4. Sortering toepassen
5. Resultaat renderen in de UI

Door deze volgorde blijven de resultaten voorspelbaar en logisch voor de gebruiker.

---

## 6. Gebruikerservaring

* Resultaten worden realtime geüpdatet
* Geen pagina-refresh nodig (SPA-principe)
* Duidelijke UI-elementen (inputvelden en dropdowns)

Dit verhoogt de gebruiksvriendelijkheid en maakt het werken met grote datasets overzichtelijk.

---

## 7. Conclusie

Door het combineren van zoeken, filteren en sorteren ontstaat een interactieve applicatie waarin gebruikers snel en efficiënt specifieke data kunnen vinden. Deze aanpak sluit goed aan bij moderne webapplicaties en de vereisten van het project.
