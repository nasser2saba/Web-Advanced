export function initRouter() {
  const buttons = document.querySelectorAll('[data-page]');
  const pages = document.querySelectorAll('.page');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.page;

      pages.forEach(page => page.classList.remove('active'));

      const targetPage = document.getElementById(target);
      if (targetPage) {
        targetPage.classList.add('active');
      }
    });
  });
}
