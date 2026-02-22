export const state = {
  characters: [],    
  filtered: [],       
  favorites: [],
  view: 'cards',
  currentPage: 1,
  totalPages: 1,
  activePage: 'home', 
  filters: {
    search: '',
    status: '',
    species: '',
    gender: '',
    sort: '',
    favoritesOnly: false
  },
  preferences: {
    theme: 'pink',
  }
};

