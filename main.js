// Smooth Scrolling for links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust for fixed navbar height
        behavior: "smooth",
      });
    }
  });
});

// Scroll Listener for Navbar styling
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.padding = "10px 0";
    nav.style.background = "#0a192f";
  } else {
    nav.style.padding = "15px 0";
    nav.style.background = "rgba(10, 25, 47, 0.95)";
  }
});
