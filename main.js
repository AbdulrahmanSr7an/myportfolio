// Function for Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "#0a192f";
    nav.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
  } else {
    nav.style.background = "rgba(10, 25, 47, 0.9)";
    nav.style.boxShadow = "none";
  }
});
