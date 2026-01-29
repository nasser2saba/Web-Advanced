import { state } from './state.js';
import { saveFavorites } from './storage.js';
import { applyFilters } from './filters.js';

export function renderCharacters(characters) {
  const grid = document.getElementById('characterGrid');
  grid.innerHTML = '';

  characters.forEach(char => {
    const isFav = state.favorites.includes(char.id);
    const card = document.createElement('div');
    card.className = 'characterCard';
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>Status: ${char.status}</p>
      <p>Species: ${char.species}</p>
      <p>Gender: ${char.gender}</p>
      <button class="favBtn ${isFav ? 'active' : ''}" data-id="${char.id}">
        ${isFav ? '❤️' : '🤍'}
      </button>
    `;
    grid.appendChild(card);
  });

  setupFavoriteListeners();
}

function setupFavoriteListeners() {
  document.querySelectorAll('.favBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(fav => fav !== id);
      } else {
        state.favorites.push(id);
      }
      saveFavorites();
      applyFilters(); // re-render so heart updates
    });
  });
}
