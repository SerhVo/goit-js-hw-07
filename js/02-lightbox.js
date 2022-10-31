import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(createGalleryMarkup(galleryItems));

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
const galleryElem = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
<a class="gallery__link" href=${original}>
    <img class="gallery__image"
    src=${preview} 
    data-source=${original}
    alt=${description}/>
</a>
</li>`
    )
    .join("");
}

galleryElem.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
