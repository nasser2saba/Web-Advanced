export function initRouter() {
  const pages = document.querySelectorAll('.page');

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-page]');
    if (!btn) return;

    const targetPage = btn.dataset.page;
    
    // Save to local storage 
    localStorage.setItem('lastPage', targetPage);
    
    navigateTo(targetPage);
  });
}

// Move the logic to a helper function so we can use it on load too
export function navigateTo(targetPage) {
  const pages = document.querySelectorAll('.page');
  const targetSection = document.getElementById(targetPage);
  if (!targetSection) return;

  pages.forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.navBtn').forEach(b => b.classList.remove('active'));

  targetSection.classList.add('active');
  const navBtn = document.querySelector(`.navBtn[data-page="${targetPage}"]`);
  navBtn?.classList.add('active');
}