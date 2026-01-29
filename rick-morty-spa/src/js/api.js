// src/js/api.js
const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function fetchCharacters(page = 1) {
  try {
    const response = await fetch(`${BASE_URL}?page=${page}`);
    if (!response.ok) throw new Error('API fout');
    const data = await response.json();
    return data.results; // array van characters
  } catch (error) {
    console.error('Fout bij ophalen characters:', error);
    return [];
  }
}
