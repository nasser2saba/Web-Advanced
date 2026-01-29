// src/js/main.js
import '../css/style.css';
import { fetchCharacters } from './api.js';
import { state } from './state.js';
import { renderCharacters } from './ui.js';
import { setupSearch, setupFilters, setupSort } from './events.js';
import { loadFavorites } from './storage.js';

async function init() {
  // Data ophalen van API
  state.characters = await fetchCharacters();
  state.filtered = [...state.characters];

  // Favorieten laden
  loadFavorites();

  // Render characters
  renderCharacters(state.filtered);

  // Setup interactiviteit
  setupSearch();
  setupFilters();
  setupSort();
}

// Start de app
init();
