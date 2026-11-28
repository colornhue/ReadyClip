const menu = document.querySelector(".mobile-menu");
menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) menu.open = false;
});
document.addEventListener("click", (event) => {
  if (menu.open && !menu.contains(event.target)) menu.open = false;
});
menu.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menu.open = false;
    menu.querySelector("summary").focus();
  }
});

const dialog = document.querySelector("#player");
const player = dialog.querySelector("video");
let opener;
for (const link of document.querySelectorAll("[data-film]")) {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== "function") return;
    event.preventDefault();
    opener = link;
    document.querySelector("#player-heading").textContent = link.dataset.title;
    player.setAttribute("aria-label", link.dataset.title);
    player.poster = link.dataset.poster;
    if (link.dataset.captions) {
      const captions = document.createElement("track");
      captions.kind = "captions";
      captions.label = "English";
      captions.srclang = "en";
      captions.src = link.dataset.captions;
      player.append(captions);
    }
    player.src = link.href;
    dialog.showModal();
    player.play().catch(() => {}); // Native controls also work when autoplay is restricted.
  });
}
document.querySelector("#close-player").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener("close", () => {
  if (dialog.open) return;
  player.pause();
  player.removeAttribute("src");
  player.querySelector("track")?.remove();
  player.load();
  opener?.focus({preventScroll:true});
});

const skinImage = document.querySelector("#skin-image");
const skinName = document.querySelector("#active-skin");
function displaySkin(input) {
  const name = input.closest("label").textContent.trim();
  skinImage.src = "media/skin-" + input.value + ".webp";
  skinImage.alt = "ReadyClip desktop import and reel settings in " + name + ".";
  skinName.textContent = name;
}
document.querySelector(".swatches").addEventListener("change", (event) => displaySkin(event.target));
window.addEventListener("pageshow", () => displaySkin(document.querySelector('input[name="skin"]:checked')));
