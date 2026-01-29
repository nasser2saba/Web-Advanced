import { state } from './state.js';

export function applyPreferences() {
  document.body.dataset.theme = state.preferences.theme;

  const themeSelect = document.getElementById('themeSelect');
  if (!themeSelect) return;

  themeSelect.value = state.preferences.theme;

  themeSelect.addEventListener('change', (e) => {
    state.preferences.theme = e.target.value; // dark, pink, blue
    localStorage.setItem('preferences', JSON.stringify(state.preferences));
    document.body.dataset.theme = state.preferences.theme;
  });
}
