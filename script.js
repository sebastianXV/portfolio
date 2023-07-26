// Navbar Scroll //
window.addEventListener('scroll', function () {

  let navbar = document.getElementById('navbar');
  let scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
});

// Links Active //
const navLinks = document.querySelectorAll('nav a');
function setActiveLink() {

  const scrollY = window.scrollY;
  navLinks.forEach(link => {

    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);

    if (
      section.offsetTop <= scrollY + 150 &&
      section.offsetTop + section.offsetHeight > scrollY + 150
    ) {

      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

setActiveLink();

window.addEventListener('scroll', setActiveLink);


//Night theme
function toggleDarkMode() {
  let tema = document.getElementById("body");
  let icon = document.getElementById("dark-mode-toggle");
  let burger = document.getElementById("burger");

  tema.classList.toggle("night-theme");
  icon.classList.toggle("button__after");
  burger.classList.toggle("button__after");

  const isDarkMode = tema.classList.contains("night-theme");

  localStorage.setItem("darkMode", isDarkMode);
}


window.onload = function () {
  const storedDarkMode = localStorage.getItem("darkMode");
  if (storedDarkMode === "true") {
    toggleDarkMode();
  }
};



//Nav responsive

function burgerAfter() {
  const menu = document.getElementById("lista");

  menu.classList.toggle("after");
}


function clikItem() {
  const menu = document.getElementById("lista");

  menu.classList.toggle("after");
}
