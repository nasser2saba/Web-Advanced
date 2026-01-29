import '../css/style.css';
import { fetchCharacters } from './api.js';
import { state } from './state.js';
import { setupEvents, applyFilters } from './events.js';

async function loadCharacters() {
  const data = await fetchCharacters(state.currentPage);

  state.totalPages = data.info.pages;
  state.characters.push(...data.results);

  // 🔥 HERPAS FILTERS i.p.v reset
  applyFilters();

  if (state.currentPage >= state.totalPages) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}

document.getElementById('loadMoreBtn').addEventListener('click', async () => {
  state.currentPage++;
  await loadCharacters();
});

setupEvents();
loadCharacters();
