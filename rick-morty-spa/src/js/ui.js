import { state } from './state.js';
import { saveFavorites } from './storage.js';
import { applyFilters } from './filters.js';

/**
 * Main render function
 * Decides between card view & list view
 */
export function renderCharacters(characters) {
  const grid = document.getElementById('characterGrid');
  grid.innerHTML = '';
  
  /* =====================
     CARD VIEW
  ===================== */
  grid.className = '';

  characters.forEach(char => {
    const isFav = state.favorites.includes(char.id);

    const card = document.createElement('div');
    card.className = 'characterCard';

    card.innerHTML = `
      <button 
        class="favBtn ${isFav ? 'active' : ''}" 
        data-id="${char.id}"
        aria-label="Toggle favorite"
      >
        ${isFav ? '❤️' : '🤍'}
      </button>

      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>Status: ${char.status}</p>
      <p>Species: ${char.species}</p>
      <p>Gender: ${char.gender}</p> 
    `;

    grid.appendChild(card);
  });

  setupFavoriteListeners();
}

/* =====================
   FAVORITES
===================== */
function setupFavoriteListeners() {
  document.querySelectorAll('.favBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);

      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(f => f !== id);
      } else {
        state.favorites.push(id);
      }

      saveFavorites();
      applyFilters();
    });
  });
}
