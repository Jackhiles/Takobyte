// Hamburger menu
(function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) navLinks.classList.remove('open');
    });
  });
})();

// Smooth scroll for in-page anchors
document.querySelectorAll('a.scrollto[href*="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const url = new URL(this.href, window.location.href);
    if (url.pathname !== window.location.pathname) return;
    const id = url.hash.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' });
    }
  });
});

// Back to top button
(function () {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
