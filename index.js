const header = document.querySelector(".header");
const hero = document.querySelector(".hero-section");
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];

    header.classList.toggle("sticky", !entry.isIntersecting);
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(hero);
