// Sticky nav + back-to-top
const nav = document.getElementById("nav");
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  nav.classList.toggle("sticky", y > 20);
  toTop.style.display = y > 400 ? "grid" : "none";
});

// Mobile menu
const menu = document.getElementById("menu");
const burger = document.getElementById("burger");
burger.addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => menu.classList.remove("open"))
);

// Typing effect
const words = ["AWS Cloud Engineer", "Microservices Developer", "Spring Boot Developer"];
const typedEl = document.getElementById("typed");
let w = 0, c = 0, deleting = false;
function type() {
  const word = words[w];
  typedEl.textContent = word.substring(0, c);
  if (!deleting && c < word.length) { c++; setTimeout(type, 90); }
  else if (!deleting) { deleting = true; setTimeout(type, 1500); }
  else if (c > 0) { c--; setTimeout(type, 45); }
  else { deleting = false; w = (w + 1) % words.length; setTimeout(type, 300); }
}
type();

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".menu a");
const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => spy.observe(s));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
