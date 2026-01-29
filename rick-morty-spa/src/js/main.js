import '../css/style.css';
import { fetchCharacters } from './api.js';
import { state } from './state.js';
import { renderCharacters } from './ui.js';

async function loadCharacters() {
  const data = await fetchCharacters(state.currentPage);

  state.totalPages = data.info.pages;
  state.characters.push(...data.results);

  renderCharacters(data.results);

  if (state.currentPage >= state.totalPages) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}

document.getElementById('loadMoreBtn').addEventListener('click', () => {
  state.currentPage++;
  loadCharacters();
});

loadCharacters();
