import { state } from './state.js';
import { saveFavorites } from './storage.js';

/**
 * Main render entry point
 * Called every time filters / view / favorites change
 */
export function renderCharacters(characters) {
  const grid = document.getElementById('characterGrid');
  grid.innerHTML = '';

  if (state.view === 'list') {
    renderList(characters);
  } else {
    renderCards(characters);
  }
}

/* =====================
   CARD VIEW
===================== */
function renderCards(characters) {
  const grid = document.getElementById('characterGrid');

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

      <button 
        class="favBtn ${isFav ? 'active' : ''}" 
        data-id="${char.id}"
        aria-label="Toggle favorite"
      >
        ${isFav ? '❤️' : '🤍'}
      </button>
    `;

    grid.appendChild(card);
  });

  setupFavoriteListeners();
}

/* =====================
   LIST VIEW
===================== */
function renderList(characters) {
  const grid = document.getElementById('characterGrid');

  const table = document.createElement('table');
  table.className = 'characterTable';

  table.innerHTML = `
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Species</th>
        <th>Gender</th>
        <th>Episodes</th>
        <th>Fav</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector('tbody');

  characters.forEach(char => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${char.name}</td>
      <td>${char.status}</td>
      <td>${char.species}</td>
      <td>${char.gender}</td>
      <td>${char.episode.length}</td>
      <td>${state.favorites.includes(char.id) ? '❤️' : ''}</td>
    `;

    tbody.appendChild(row);
  });

  grid.appendChild(table);
}

/* =====================
   FAVORITES LOGIC
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

      // Re-render to update heart instantly
      renderCharacters(state.filtered);
    });
  });
}
