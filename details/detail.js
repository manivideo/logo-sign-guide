'use strict';
const viewer = document.getElementById('viewer');
const viewerImage = document.getElementById('viewer-img');
const viewerCaption = document.getElementById('viewer-cap');
document.querySelectorAll('.shot').forEach(button => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    viewerImage.src = image.currentSrc || image.src;
    viewerImage.alt = image.alt;
    viewerCaption.textContent = image.alt;
    viewer.showModal();
  });
});
document.getElementById('viewer-close').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  if (event.target !== viewer) return;
  const bounds = viewer.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
});
