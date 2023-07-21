import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryItemEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", galleryItemEl);

const lightbox = new SimpleLightbox(".gallery__item a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
