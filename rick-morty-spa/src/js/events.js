// src/js/events.js
import { state } from './state.js';
import { renderCharacters } from './ui.js';
import { saveFavorites, loadFavorites } from './storage.js';

export function setupSearch() {
  const searchInput = document.getElementById('searchInput');

  // Event listener voor live search
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    // Filter characters op naam
    state.filtered = state.characters.filter(char =>
      char.name.toLowerCase().includes(query)
    );

    renderCharacters(state.filtered);
  });
}
