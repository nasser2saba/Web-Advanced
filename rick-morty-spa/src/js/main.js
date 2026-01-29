import '../css/style.css';
import { state } from './state.js';
import { fetchCharacters } from './api.js';
import { loadFavorites, loadPreferences, savePreferences } from './storage.js';
import { applyPreferences } from './preferences.js';
import { applyFilters } from './filters.js';

/* APP START */
async function init() {
  loadFavorites();
  loadPreferences();
  applyPreferences();

  const data = await fetchCharacters(state.currentPage);
  state.characters = data.characters;
  state.totalPages = data.totalPages;

  applyFilters();
}

/* SEARCH & FILTERS & SORT */
document.getElementById('searchInput').addEventListener('input', e => {
  state.filters.search = e.target.value;
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

/* THEMA EVENT */
document.getElementById('themeSelect').addEventListener('change', e => {
  state.preferences.theme = e.target.value;
  savePreferences();
  applyPreferences();
});

document.getElementById('favoritesFilter').addEventListener('change', e => {
  state.filters.favoritesOnly = e.target.checked;
  applyFilters();
});

/* LOAD MORE */
document.getElementById('loadMoreBtn').addEventListener('click', async () => {
  state.currentPage++;
  const data = await fetchCharacters(state.currentPage);
  state.characters.push(...data.characters);
  applyFilters();
});

init();
