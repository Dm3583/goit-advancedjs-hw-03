import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { showLoader, hideLoader } from './js/render-functions.js';

function fetchImages() {
  showLoader();
  console.log('Fetching images for query: "nature"');
  setTimeout(() => {
    getImagesByQuery('nature')
      .then(data => {
        console.log('Fetched images:', data.hits);
        if (data.hits.length === 0) {
          iziToast.error({
            title: 'No Results',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        }
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: `Failed to fetch images with the ${error}. Please try again later.`,
          position: 'topRight',
        });
      })
      .finally(() => {
        hideLoader();
      });
  }, 2000);
}

fetchImages();
