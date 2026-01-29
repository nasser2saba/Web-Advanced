export const state = {
  characters: [],     // alle geladen characters
  filtered: [],       // resultaat van search/filter/sort
  favorites: [],
  currentPage: 1,
  totalPages: 1,
  filters: {
    search: '',
    status: '',
    species: '',
    gender: '',
    sort: '',
    favoritesOnly: false
  },
  preferences: {
    theme: 'light',
    language: 'eng'
  }
};
