document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }
});
