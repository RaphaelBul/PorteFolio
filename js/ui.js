// Accordion sous-projets
function toggleSubProject(header) {
  const subProject = header.closest('.sub-project');
  subProject.classList.toggle('open');
}

// Burger menu mobile
const burger = document.getElementById('nav-burger');
const mobileMenu = document.getElementById('nav-mobile');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}