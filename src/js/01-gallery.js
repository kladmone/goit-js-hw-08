import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';

const imagesList = document.querySelector('.gallery');
const imgMarkup = createImgListMarkup(galleryItems);
imagesList.insertAdjacentHTML('beforeend', imgMarkup);

imagesList.addEventListener('click', handleImageClick);

function createImgListMarkup(img) {
  return img
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join(' ');
}
function handleImageClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
}
const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(simpleLightbox);
console.log(galleryItems);
