/* ================ Toggle icon navbar =============== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

/* ================ Scroll section active link =============== */
let sections = document.querySelectorAll("section"); // pastikan ada
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let scrollPosition = window.scrollY;

  sections.forEach((sec) => {
    let sectionTop = sec.offsetTop - 150;
    let sectionHeight = sec.offsetHeight;
    let sectionId = sec.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));
      let activeLink = document.querySelector(`header nav a[href="#${sectionId}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });

  // Toggle sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", scrollPosition > 100);

  // Remove navbar active & icon toggle on scroll
  menuIcon.classList.remove("fa-times");
  navbar.classList.remove("active");
};

/* ================ Dark mode toggle =============== */
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("fa-sun"); // toggle icon
  document.body.classList.toggle("dark-mode");

  // Optional: save to localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
};

// On page load, check localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeIcon.classList.add("fa-sun");
}

/* ================ ScrollReveal animations =============== */
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* ================ Typed.js =============== */
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Designer", "Gamer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/* ================ Smooth scroll to top (optional) =============== */
let scrollTopBtn = document.querySelector(".footer-iconTop a");
scrollTopBtn.onclick = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};
