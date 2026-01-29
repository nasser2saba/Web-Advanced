const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function fetchCharacters(page = 1) {
  const response = await fetch(`${BASE_URL}?page=${page}`);
  if (!response.ok) throw new Error('API fout');
  return await response.json();
}
