// entry file

// ES5
// const ImportObject = require('./ball.js');
//

// ES6 
import Bullet from './ball';

console.log('hello world');
let newBall = new Bullet();
console.log(newBall);

// document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  console.log(canvas);
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(75, 75, 25, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fillStyle = 'blue';
  ctx.fill();
  window.ctx = ctx;
// });