// document.addEventListener("DOMContentLoaded", () => {
//   const canvasEl = document.getElementById('game-canvas');
//   canvasEl.width = 500;
//   canvasEl.height = 500;
//   // rest our code happens in here
// })

// //no code happens out here

// old way ^^^^

import Game from './game';

const canvasEl = document.getElementById('game-canvas');
canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

const ctx = canvasEl.getContext('2d');
ctx.fillStyle = 'salmon';
ctx.fillRect(0, 0, canvasEl.width,canvasEl.height);

ctx.beginPath(); // prepares to draw some shape
ctx.arc(500, 500, 100, 0, 2 * Math.PI, false);
ctx.strokeStyle = "cyan";
ctx.lineWidth = 25;
ctx.stroke();
ctx.fillStyle = "limegreen";
ctx.fill();

const game = new Game();
window.game = game;