const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function fetchCharacters(page = 1) {
  try {
    const res = await fetch(`${BASE_URL}?page=${page}`);
    if (!res.ok) throw new Error('API fout');
    const data = await res.json();
    return {
      characters: data.results,
      totalPages: data.info.pages
    };
  } catch (error) {
    console.error('Fout bij ophalen characters:', error);
    return { characters: [], totalPages: 1 };
  }
}
