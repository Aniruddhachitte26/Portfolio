document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar-toggle");
    const navLinks = document.querySelector(".nav-links");


    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });


    navLinks.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        navLinks.classList.remove("show");
      }
    });
  });