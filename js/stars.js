const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.5,
      alpha: Math.random(),
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1
    });
  }
}
createStars(120);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 221, 187, ${star.alpha})`;
    ctx.fill();

    // move star
    star.x += star.dx;
    star.y += star.dy;

    // wrap around edges
    if (star.x > canvas.width) star.x = 0;
    if (star.x < 0) star.x = canvas.width;
    if (star.y > canvas.height) star.y = 0;
    if (star.y < 0) star.y = canvas.height;

    // twinkle
    star.alpha += (Math.random() - 0.5) * 0.02;
    if (star.alpha < 0.2) star.alpha = 0.2;
    if (star.alpha > 1) star.alpha = 1;
  });
  requestAnimationFrame(animate);
}
animate();
