// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll reveal animations
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  for (const el of revealElements) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('active');
    }
  }
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
