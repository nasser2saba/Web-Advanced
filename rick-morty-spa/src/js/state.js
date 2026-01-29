export const state = {
  characters: [],     // alle geladen characters
  filtered: [],       // resultaat van search/filter/sort
  currentPage: 1,
  totalPages: 1,
  filters: {
    search: '',
    status: '',
    species: '',
    gender: '',
    sort: ''
  }
};
