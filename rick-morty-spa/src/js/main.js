import '../css/style.css';
import { state } from './state.js';
import { fetchCharacters } from './api.js';
import { loadFavorites, loadPreferences, savePreferences } from './storage.js';
import { applyPreferences } from './preferences.js';
import { applyFilters } from './filters.js';
import { initObserver } from './observer.js';
import { initFormValidation } from './form.js';
import { initRouter } from './navigation.js';
import { initSlideshow } from './slideshow.js';
import { navigateTo } from './navigation.js';

initFormValidation();
initObserver();
initRouter();
initSlideshow();


async function init() {
  loadFavorites();
  loadPreferences();
  applyPreferences();
  
  // Check last saved page
  const lastPage = localStorage.getItem('lastPage') || 'home';
  navigateTo(lastPage);

  const data = await fetchCharacters(state.currentPage);
  state.characters = data.characters;
  state.totalPages = data.totalPages;

  applyFilters();
}

// Event Listeners for Filters
document.getElementById('searchInput').addEventListener('input', e => {
  state.filters.search = e.target.value;
  applyFilters();
});

document.querySelectorAll('#statusFilter, #speciesFilter, #genderFilter, #sortSelect').forEach(el => {
  el.addEventListener('change', e => {
    const filterKey = e.target.id.replace('Filter', '').replace('Select', '').toLowerCase();
    state.filters[filterKey] = e.target.value;
    applyFilters();
  });
});

document.getElementById('themeSelect').addEventListener('change', e => {
  state.preferences.theme = e.target.value;
  savePreferences();
  applyPreferences();
});

document.getElementById('favoritesFilter').addEventListener('change', e => {
  state.filters.favoritesOnly = e.target.checked;
  applyFilters();
});

init();