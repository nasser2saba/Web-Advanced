import { state } from './state.js';
import { fetchCharacters } from './api.js';
import { applyFilters } from './filters.js';

let isFetching = false; // The "Lock"

export function initObserver() {
  const target = document.getElementById('observerTarget');
  const popup = document.getElementById('apiPopup');

  const observer = new IntersectionObserver(async entries => {
    const entry = entries[0];

    // Only fetch if we aren't already fetching
    if (entry.isIntersecting && state.currentPage < state.totalPages && !isFetching) {
      try {
        isFetching = true; 
        
        const data = await fetchCharacters(state.currentPage + 1);
        
        if (data.characters.length === 0) {
           throw new Error("Rate limit");
        }

        state.currentPage++;
        state.characters.push(...data.characters);
        applyFilters();
        
        isFetching = false;
      } catch (error) {
        // Show Popup
        popup.classList.add('api-popup-show');
        
        // Hide popup after 3 seconds and unlock
        setTimeout(() => {
          popup.classList.remove('api-popup-show');
          isFetching = false;
        }, 3000);
      }
    }
  }, { threshold: 0.1 });

  observer.observe(target);
}