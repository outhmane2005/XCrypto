document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('displayYear');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const opened = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(opened));
      toggle.textContent = opened ? '×' : '☰';
    });
  }
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    if (link.dataset.page === current) link.classList.add('active');
  });
  const loginForm = document.getElementById('login-form');
  if (loginForm) loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const status = document.getElementById('form-status');
    if (status) status.textContent = 'Demo only: sign-in is unavailable until a secure authentication backend is configured.';
    loginForm.reset();
  });
});