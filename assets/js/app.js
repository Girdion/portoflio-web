const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "designer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "freelancer";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-menu a");
const navMenu = document.querySelector(".nav-menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
  nav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("open");
    navMenu.classList.remove("active");
  });
});

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 1000 } },
    color: { value: "#b9ff00" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 1.5, random: true },
    move: { speed: 0.6, direction: "none", random: true, out_mode: "out" },
    line_linked: {
      enable: true,
      distance: 160,
      color: "#b9ff00",
      opacity: 0.5,
      width: 0.8,
    },
  },
});
