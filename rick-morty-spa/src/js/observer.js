import { state } from './state.js';
import { fetchCharacters } from './api.js';
import { applyFilters } from './filters.js';

export function initObserver() {
  const target = document.getElementById('observerTarget');

  const observer = new IntersectionObserver(async entries => {
    const entry = entries[0];

    if (entry.isIntersecting && state.currentPage < state.totalPages) {
      state.currentPage++;
      const data = await fetchCharacters(state.currentPage);
      state.characters.push(...data.characters);
      applyFilters();
    }
  }, {
    threshold: 1
  });

  observer.observe(target);
}
