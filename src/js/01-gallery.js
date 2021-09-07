// Add imports above this line
import { galleryItems } from './gallery-items';
import _default from '../../node_modules/simplelightbox/dist/simple-lightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const qs = (selector) => document.querySelector(selector);
const galleryGrid = qs(".gallery")
const prev = galleryItems.map(prev=>prev.preview);
const oryg = galleryItems.map(org=>org.original);
const desc = galleryItems.map(des=>des.description);
let galleryMarkup = "";
for (let i = 0; i<prev.length; i++){
galleryMarkup+=`<a class="gallery__item" href="${oryg[i]}">
<img class="gallery__image" src="${prev[i]}" alt="${desc[i]}"  />
</a>`
}
galleryGrid.insertAdjacentHTML("beforeend", galleryMarkup);
let gallery = new SimpleLightbox('.gallery a',{captionsData:"alt", captionDelay:"250"});
gallery.on('show.simplelightbox', function () {
	preventDefault()
});
galleryGrid.addEventListener("click", preventDefault())
console.log(galleryItems);
