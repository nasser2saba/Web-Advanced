import { state } from './state.js';
import { renderCharacters } from './ui.js';

export function applyFilters() {
  let result = [...state.characters];

  if (state.filters.search) {
    result = result.filter(char =>
      char.name.toLowerCase().includes(state.filters.search)
    );
  }

  if (state.filters.status) {
    result = result.filter(char => char.status === state.filters.status);
  }

  if (state.filters.species) {
    result = result.filter(char => char.species === state.filters.species);
  }

  if (state.filters.gender) {
    result = result.filter(char => char.gender === state.filters.gender);
  }

  switch (state.filters.sort) {
    case 'nameAsc':
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'nameDesc':
      result.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'episodesAsc':
      result.sort((a, b) => a.episode.length - b.episode.length);
      break;
    case 'episodesDesc':
      result.sort((a, b) => b.episode.length - a.episode.length);
      break;
  }

  state.filtered = result;
  renderCharacters(state.filtered);
}


export function setupEvents() {
  document.getElementById('searchInput').addEventListener('input', e => {
    state.filters.search = e.target.value.toLowerCase();
    applyFilters();
  });

  document.getElementById('statusFilter').addEventListener('change', e => {
    state.filters.status = e.target.value;
    applyFilters();
  });

  document.getElementById('speciesFilter').addEventListener('change', e => {
    state.filters.species = e.target.value;
    applyFilters();
  });

  document.getElementById('genderFilter').addEventListener('change', e => {
    state.filters.gender = e.target.value;
    applyFilters();
  });

  document.getElementById('sortSelect').addEventListener('change', e => {
    state.filters.sort = e.target.value;
    applyFilters();
  });
}
