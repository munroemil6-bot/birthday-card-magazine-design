const birthdayPhotos = [
  { file: "images/WhatsApp Image 2026-11-17 at 7.42.02 PM (1).jpeg", alt: "Tundo in his graduation cap as a child", caption: "Look how far you’ve come" },
  { file: "images/WhatsApp Image 2026-11-17 at 7.42.02 PM.jpeg", alt: "A childhood photo of Tundo in a Santa hat", caption: "A little holiday smile" },
  { file: "images/WhatsApp Image 2026-11-17 at 7.42.03 PM (1).jpeg", alt: "Tundo standing among lush green plants", caption: "Looking sharp in the sunshine" },
  { file: "images/WhatsApp Image 2026-11-17 at 7.42.03 PM (2).jpeg", alt: "Tundo posing outdoors with his bag", caption: "Out and about" },
  { file: "images/WhatsApp Image 2026-11-17 at 7.42.03 PM (3).jpeg", alt: "Tundo and Hope smiling together outdoors", caption: "My favorite smile beside mine" },
  { file: "images/WhatsApp Image 2026-11-17 at 7.42.03 PM.jpeg", alt: "Tundo and Hope making a playful face for the camera", caption: "A little bit of mischief" },
  { file: "images/WhatsApp Image 2026-11-17 at 7.42.04 PM (1).jpeg", alt: "Tundo and Hope sharing a playful kiss for the camera", caption: "Just us two" },
  { file: "images/WhatsApp Image 2026-11-17 at 7.42.04 PM.jpeg", alt: "Tundo taking a night-time selfie", caption: "A night to remember" },
  { file: "images/WhatsApp Image 2026-11-17 at 7.42.16 PM.jpeg", alt: "Tundo smiling in the evening", caption: "Your handsome smile" },
  { file: "images/WhatsApp Image 2026-11-17 at 7.42.17 PM (1).jpeg", alt: "Tundo taking a selfie with a little one", caption: "A sweet family moment" },
  { file: "images/WhatsApp Image 2026-11-17 at 7.42.17 PM.jpeg", alt: "Tundo wearing a beanie and smiling for the camera", caption: "Always one of a kind" },
];
const featuredPhotoIndex = 4;
const featuredImage = document.getElementById("featured-image");
const gallery = document.getElementById("photo-gallery");
const wishButton = document.getElementById("wish-button");
const wish = document.getElementById("birthday-wish");
birthdayPhotos.forEach((photo, index) => {
  const button = document.createElement("button"); button.type = "button";
  button.className = `birthday-photo-tile${index === featuredPhotoIndex ? " is-featured" : ""}`;
  button.setAttribute("aria-label", `Feature photo: ${photo.caption}`);
  button.setAttribute("aria-pressed", String(index === featuredPhotoIndex));
  const image = document.createElement("img"); image.src = photo.file; image.alt = photo.alt; image.loading = "lazy";
  const caption = document.createElement("span"); caption.textContent = photo.caption;
  button.append(image, caption);
  button.addEventListener("click", () => {
    featuredImage.src = photo.file; featuredImage.alt = photo.alt;
    gallery.querySelectorAll(".birthday-photo-tile").forEach((tile) => { tile.classList.remove("is-featured"); tile.setAttribute("aria-pressed", "false"); });
    button.classList.add("is-featured"); button.setAttribute("aria-pressed", "true");
  });
  gallery.append(button);
});
wishButton.addEventListener("click", () => {
  const open = wishButton.getAttribute("aria-expanded") === "true";
  wishButton.setAttribute("aria-expanded", String(!open)); wish.hidden = open;
  wishButton.innerHTML = `<span aria-hidden="true">♡</span> ${open ? "Open your birthday wish" : "Close your birthday wish"}`;
});
