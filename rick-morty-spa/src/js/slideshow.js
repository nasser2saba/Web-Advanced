export function initSlideshow() {
  const images = [
    '/src/assets/images/slide1.jpg',
    '/src/assets/images/slide2.jpg',
    '/src/assets/images/slide3.jpg',
    '/src/assets/images/slide4.jpg',
    '/src/assets/images/slide5.jpg'
  ];

  const imgEl = document.getElementById('slideshowImage');
  if (!imgEl) return;

  let index = 0;
  imgEl.src = images[index];

  setInterval(() => {
    imgEl.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % images.length;
      imgEl.src = images[index];
      imgEl.style.opacity = 1;
    }, 300);
  }, 3000); // 👈 changes every 3 seconds
}
