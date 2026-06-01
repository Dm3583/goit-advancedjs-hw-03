import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function showLoader() {
  const main = document.querySelector('main');
  const loader = document.createElement('div');
  loader.classList.add('loader');
  main.appendChild(loader);
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}
