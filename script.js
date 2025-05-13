const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  document.body.classList.toggle('sidebar-open');
});
// close sidebar when clicking a link
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.classList.remove('sidebar-open');
  });
});