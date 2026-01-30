export function initRouter() {
  const pages = document.querySelectorAll('.page');

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-page]');
    if (!btn) return;

    const targetPage = btn.dataset.page;
    const targetSection = document.getElementById(targetPage);

    if (!targetSection) return;

    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));

    // Remove active state from nav buttons only
    document.querySelectorAll('.navBtn').forEach(b =>
      b.classList.remove('active')
    );

    // Show target page
    targetSection.classList.add('active');

    // Activate nav button if it exists
    const navBtn = document.querySelector(
      `.navBtn[data-page="${targetPage}"]`
    );
    navBtn?.classList.add('active');
  });
}
