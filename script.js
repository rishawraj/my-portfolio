const burgerMenu = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const text = document.querySelectorAll(".nav-links li");

burgerMenu.addEventListener("click", () => {
  console.log(navLinks);
  navLinks.classList.toggle("show-toggle");
  //   text.classList.toggle("show-links");
  text.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
});
