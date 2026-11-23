"use strict";

const root = document.documentElement;
const themeButton = document.getElementById("theme");

function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute("aria-pressed", String(theme === "light"));
  document.querySelector('meta[name="theme-color"]').content =
    theme === "light" ? "#e9f1e7" : "#05130c";
}

try {
  if (localStorage.getItem("seednest-sites-theme") === "light") setTheme("light");
} catch {}

themeButton.addEventListener("click", () => {
  const theme = root.dataset.theme === "light" ? "dark" : "light";
  setTheme(theme);
  try {
    localStorage.setItem("seednest-sites-theme", theme);
  } catch {}
});

const menu = document.getElementById("menu");
const menuPanel = document.getElementById("mobile-menu");

function setMenuOpen(open) {
  menuPanel.hidden = !open;
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
}

menu.addEventListener("click", () => setMenuOpen(menuPanel.hidden));
menuPanel.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menuPanel.contains(event.target)) setMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menuPanel.hidden) {
    setMenuOpen(false);
    menu.focus();
  }
});

const faq = document.getElementById("faq");
const faqDialog = document.createElement("dialog");
faqDialog.setAttribute("aria-labelledby", "faq-title");
faq.before(faqDialog);
faqDialog.append(faq);

let faqTrigger;
document.querySelectorAll("[data-dialog]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    faqTrigger = menuPanel.contains(link) ? menu : link;
    faqDialog.showModal();
  });
});
document.getElementById("faq-close").addEventListener("click", () => faqDialog.close());
faqDialog.addEventListener("close", () => faqTrigger?.focus());

const gallery = document.getElementById("gallery");
const deck = document.getElementById("deck");
const caption = document.getElementById("gallery-caption");
const dots = document.getElementById("dots");
const frames = [...deck.querySelectorAll(".phone")];
const slides = [0, 3, 7, 4, 5, 6, 8, 9, 2, 10, 1].map((index) => frames[index]);
let active = 0;
let touchStart;

const controls = slides.map((slide, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute("aria-label", slide.dataset.name);
  button.addEventListener("click", () => showSlide(index));
  dots.append(button);
  return button;
});

function renderGallery() {
  const spacing = deck.clientWidth < 450 ? .171 : .195;
  const step = Math.min(143, deck.clientWidth * spacing);
  slides.forEach((slide, index) => {
    let offset = (index - active + slides.length) % slides.length;
    if (offset > slides.length / 2) offset -= slides.length;
    const distance = Math.abs(offset);
    slide.hidden = distance > 2;
    slide.classList.toggle("active", distance === 0);
    slide.style.setProperty("--offset", `${offset * step}px`);
    slide.style.setProperty("--scale", [1, .89, .76][distance] ?? .76);
    slide.style.setProperty("--drop", `${distance * -9}px`);
    slide.style.setProperty("--tilt", `${Math.sign(offset) * -19}deg`);
    slide.style.setProperty("--lean", `${Math.sign(offset) * distance * 2.4}deg`);
    slide.style.setProperty("--layer", 5 - distance);
    controls[index].setAttribute("aria-current", String(distance === 0));
  });
  caption.textContent = `${slides[active].dataset.name} · ${active + 1} von ${slides.length} · Originalansicht`;
}

function showSlide(index) {
  active = (index + slides.length) % slides.length;
  renderGallery();
}

document.getElementById("prev").addEventListener("click", () => showSlide(active - 1));
document.getElementById("next").addEventListener("click", () => showSlide(active + 1));
gallery.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  showSlide(active + (event.key === "ArrowLeft" ? -1 : 1));
});

deck.addEventListener("touchstart", (event) => {
  touchStart = event.changedTouches[0]?.clientX;
}, { passive: true });
deck.addEventListener("touchend", (event) => {
  if (touchStart === undefined) return;
  const distance = event.changedTouches[0].clientX - touchStart;
  touchStart = undefined;
  if (Math.abs(distance) >= 35) showSlide(active + (distance < 0 ? 1 : -1));
}, { passive: true });
deck.addEventListener("touchcancel", () => { touchStart = undefined; }, { passive: true });

new ResizeObserver(renderGallery).observe(deck);
renderGallery();
