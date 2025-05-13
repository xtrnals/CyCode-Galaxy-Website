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

// Twinkling static stars background
const canvas = document.getElementById('stars-bg');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', () => {
  resizeCanvas();
  createStars(120);
});

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      alphaChange: (Math.random() - 0.5) * 0.02
    });
  }
}
createStars(120);

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    ctx.save();
    ctx.globalAlpha = Math.max(0.2, Math.min(1, star.alpha));
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "#5ab9ff";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();

    // Twinkle effect
    star.alpha += star.alphaChange;
    if (star.alpha <= 0.2 || star.alpha >= 1) {
      star.alphaChange *= -1;
    }
  }
  requestAnimationFrame(animateStars);
}
animateStars();