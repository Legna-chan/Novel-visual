const waifu = document.getElementById('waifu');
const obstacle = document.getElementById('obstacle');
const scoreEl = document.getElementById('score');
let jumping = false;
let score = 0;

function jump() {
  if (jumping) return;
  jumping = true;
  waifu.style.transition = 'bottom 0.3s';
  waifu.style.bottom = '120px';
  setTimeout(() => {
    waifu.style.bottom = '0';
    setTimeout(() => jumping = false, 300);
  }, 300);
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

function moveObstacle() {
  let pos = window.innerWidth;
  const interval = setInterval(() => {
    if (pos < -50) {
      pos = window.innerWidth;
      score++;
      scoreEl.innerText = 'Puntos: ' + score;
    }
    obstacle.style.right = pos + 'px';

    // Colisión
    const waifuBottom = parseInt(getComputedStyle(waifu).bottom);
    if (pos < 100 && pos > 40 && waifuBottom < 60) {
      alert('¡Game Over! Puntos: ' + score);
      location.reload();
      clearInterval(interval);
    }

    pos -= 10;
  }, 30);
}

moveObstacle();