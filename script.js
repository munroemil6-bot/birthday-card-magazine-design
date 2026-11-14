// Edit this list to change photo files, descriptions, or captions.
// Put picture files in the images folder and keep paths in sync.
const birthdayPhotos = [
  { file: "images/01-closeup.jpeg", alt: "A close-up portrait of LianaBriele", caption: "A sweet little moment" },
  { file: "images/02-adventure.jpeg", alt: "LianaBriele smiling in her cap and jacket", caption: "Ready for adventure" },
  { file: "images/03-cap-pose.jpeg", alt: "LianaBriele posing in her favorite cap", caption: "A little bit of sparkle" },
  { file: "images/04-park.jpeg", alt: "LianaBriele enjoying a green park", caption: "Out in the sunshine" },
  { file: "images/05-forest-pose.jpeg", alt: "LianaBriele striking a playful pose outdoors", caption: "Full of personality" },
  { file: "images/06-forest-smile.jpeg", alt: "LianaBriele smiling among the trees", caption: "A smile to remember" },
  { file: "images/07-forest-portrait.jpeg", alt: "LianaBriele smiling in the forest", caption: "Simply wonderful" },
  { file: "images/08-cap-portrait.jpeg", alt: "LianaBriele in her cap and football shirt", caption: "Always shining" },
];
const featuredImage = document.getElementById("featured-image");
const gallery = document.getElementById("photo-gallery");
const wishButton = document.getElementById("wish-button");
const wish = document.getElementById("birthday-wish");
birthdayPhotos.forEach((photo, index) => {
  const button = document.createElement("button"); button.type = "button";
  button.className = `birthday-photo-tile${index === 6 ? " is-featured" : ""}`;
  button.setAttribute("aria-label", `Feature photo: ${photo.caption}`);
  button.setAttribute("aria-pressed", String(index === 6));
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
