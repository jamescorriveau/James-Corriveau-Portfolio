function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".menu-links a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      console.log(`${event.target.innerText} link clicked`);
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.remove("open");
      icon.classList.remove("open");
    });
  });
});
