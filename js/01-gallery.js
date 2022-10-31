import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(createGalleryMarkup(galleryItems));

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// {
//   /* <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>; */
// }
const galleryElem = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
<a class="gallery__link" 
href=${original}>
  <img class="gallery__image"
  src=${preview}
  data-source=${original}
  alt=${description}/>
</a>
</li>`
    )
    .join("");
}

// 2. Реалізація делегування на div.gallery і отримання url великого зображення;

galleryElem.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));
galleryElem.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
  //  Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
  // Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

  const largeImage = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt=${event.target.alt}>`,
    {
      onShow: (largeImage) =>
        galleryElem.addEventListener("keydown", onEscapeKeyPress),
      onClose: (largeImage) =>
        galleryElem.removeEventListener("keydown", onEscapeKeyPress),
    }
  );
  largeImage.show();

  function onEscapeKeyPress(event) {
    if (event.key === "Escape") {
      largeImage.close();
    }
  }
}
