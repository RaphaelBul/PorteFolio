const typedRoles = [
  'Développeur web en formation',
  'Étudiant en BTS [VOTRE SPÉCIALITÉ]',
  'Passionné de technologie',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeEffect() {
  const current = typedRoles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 50 : 80;

  if (!isDeleting && charIndex === current.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % typedRoles.length;
    delay = 400;
  }

  setTimeout(typeEffect, delay);
}

setTimeout(typeEffect, 800);