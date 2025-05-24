// main.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('PRISM site loaded ✅');

  // Highlight active nav item
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

  // Create lightbox container (once)
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  document.body.appendChild(lightbox);

  // Clickable image zoom
  const images = document.querySelectorAll('.features img');
  images.forEach(img => {
    img.style.cursor = 'zoom-in'; // just in case
    img.addEventListener('click', () => {
      lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
      lightbox.classList.add('show');
    });
  });

  // Close lightbox when clicking background
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Existing code...

  const main = document.querySelector('main.container');
  if (main) {
    // Delay slightly to allow layout stabilisation, then fade in
    setTimeout(() => {
      main.classList.add('loaded');
    }, 100);
  }
});
