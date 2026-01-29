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

export function setupFilters() {
  const statusFilter = document.getElementById('statusFilter');
  const speciesFilter = document.getElementById('speciesFilter');
  const genderFilter = document.getElementById('genderFilter');

  // Combineer alle filters in één functie
  function applyFilters() {
    state.filtered = state.characters.filter(char => {
      const statusMatch = statusFilter.value === '' ? true : char.status === statusFilter.value;
      const speciesMatch = speciesFilter.value === '' ? true : char.species === speciesFilter.value;
      const genderMatch = genderFilter.value === '' ? true : char.gender === genderFilter.value;

      return statusMatch && speciesMatch && genderMatch;
    });

    renderCharacters(state.filtered);
  }

  statusFilter.addEventListener('change', applyFilters);
  speciesFilter.addEventListener('change', applyFilters);
  genderFilter.addEventListener('change', applyFilters);
}
export function setupSort() {
  const sortSelect = document.getElementById('sortSelect');

  sortSelect.addEventListener('change', (e) => {
    const value = e.target.value;

    state.filtered.sort((a, b) => {
      switch(value) {
        case 'nameAsc':
          return a.name.localeCompare(b.name);
        case 'nameDesc':
          return b.name.localeCompare(a.name);
        case 'episodesAsc':
          return a.episode.length - b.episode.length;
        case 'episodesDesc':
          return b.episode.length - a.episode.length;
        default:
          return 0;
      }
    });

    renderCharacters(state.filtered);
  });
}

