
document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('banana');
  canvas.width = 600;
  canvas.height = 600;
  const ctx = canvas.getContext('2d')


  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 500, 500);

  ctx.beginPath();
  ctx.arc(250, 250, 80, 0, Math.PI * 2, true);
  ctx.fillStyle = 'blue';
  ctx.fill();
})

// dont write code out here