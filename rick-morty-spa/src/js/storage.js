import { state } from './state.js';

/* FAVORIETEN */
export function saveFavorites() {
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
}

export function loadFavorites() {
  const stored = localStorage.getItem('favorites');
  if (stored) state.favorites = JSON.parse(stored);
}

/* VOORKEUREN */
export function savePreferences() {
  localStorage.setItem('preferences', JSON.stringify(state.preferences));
}

export function loadPreferences() {
  const stored = localStorage.getItem('preferences');
  if (stored) state.preferences = JSON.parse(stored);
}
