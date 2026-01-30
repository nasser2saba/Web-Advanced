import { state } from './state.js';
import { renderCharacters } from './ui.js';

export function applyFilters() {
  let result = [...state.characters];

  if (state.filters.search)
    result = result.filter(c => c.name.toLowerCase().includes(state.filters.search.toLowerCase()));

  if (state.filters.status)
    result = result.filter(c => c.status === state.filters.status);

  if (state.filters.species)
    result = result.filter(c => c.species === state.filters.species);

  if (state.filters.gender)
    result = result.filter(c => c.gender === state.filters.gender);

  if (state.filters.sort === 'nameAsc')
    result.sort((a, b) => a.name.localeCompare(b.name));
  if (state.filters.sort === 'nameDesc')
    result.sort((a, b) => b.name.localeCompare(a.name));
  if (state.filters.sort === 'episodesAsc')
    result.sort((a, b) => a.episode.length - b.episode.length);
  if (state.filters.sort === 'episodesDesc')
    result.sort((a, b) => b.episode.length - a.episode.length);

  if (state.filters.favoritesOnly) {
  result = result.filter(c => state.favorites.includes(c.id));
  }

  /*
  if (state.view === 'cards') {
  observer.observe(sentinel);
  } else {
  observer.disconnect();
  }

*/

  state.filtered = result;
  renderCharacters(result);
}
