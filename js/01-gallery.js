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
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", galleryItemEl);

galleryEl.addEventListener("click", onGalleryModalOpenClick);

function onGalleryModalOpenClick(event) {
  event.preventDefault();
  if (event.target.className !== "gallery__image") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
