/* ═══════════════════════════════════════════
   UJJWAL BHUTADA — Java.js
   ═══════════════════════════════════════════ */

// ── Hamburger / Mobile Menu ──────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileClose.addEventListener('click', closeMobile);

function closeMobile() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)) {
    closeMobile();
  }
});

// ── Smooth active nav link on scroll ────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// ── Scroll-reveal ────────────────────────────
const reveals  = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// ── Contact form submit ───────────────────────
function sendMessage(e) {
  e.preventDefault();
  document.getElementById('msgForm').style.display = 'none';
  document.getElementById('msgSuccess').style.display = 'block';
}

// ── Resume download ───────────────────────────
function downloadResume() {
  const link = document.createElement('a');
  link.href     = 'Ujjwal_Bhutada.pdf';
  link.download = 'Ujjwal_Bhutada.pdf';
  link.target   = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ── Navbar shrink on scroll ───────────────────
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 60 ? '0.6rem 5%' : '0.9rem 5%';
});
