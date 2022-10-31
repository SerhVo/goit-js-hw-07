import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(createGalleryMarkup(galleryItems));

const galleryElem = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
  </a>
</li>`
    )
    .join("");
}

galleryElem.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
