// src/js/ui.js
import { state } from './state.js';
import { saveFavorites } from './storage.js';

export function renderCharacters(characters) {
  const grid = document.getElementById('characterGrid');
  grid.innerHTML = ''; // clear grid

  characters.forEach(char => {
    const card = document.createElement('div');
    card.className = 'characterCard';
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <h2>${char.name}</h2>
      <p>Status: ${char.status}</p>
      <p>Species: ${char.species}</p>
      <p>Gender: ${char.gender}</p>
      <p>Location: ${char.location.name}</p>
      <p>Episodes: ${char.episode.length}</p>
      <button data-id="${char.id}" class="favoriteBtn">${state.favorites.includes(char.id) ? '★' : '☆'}</button>
    `;

    // Favorieten knop functionaliteit
    const favBtn = card.querySelector('.favoriteBtn');
    favBtn.addEventListener('click', () => {
      if (state.favorites.includes(char.id)) {
        state.favorites = state.favorites.filter(id => id !== char.id);
      } else {
        state.favorites.push(char.id);
      }
      saveFavorites();
      renderCharacters(state.filtered); // update UI
    });

    grid.appendChild(card);
  });
}
