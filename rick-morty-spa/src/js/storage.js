// src/js/storage.js
import { state } from './state.js';

// Favorieten opslaan in localStorage
export function saveFavorites() {
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
}

// Favorieten laden bij start
export function loadFavorites() {
  const stored = localStorage.getItem('favorites');
  if (stored) {
    state.favorites = JSON.parse(stored);
  }
}
