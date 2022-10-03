const obj = require('./asteroid');

function Game() {
  this.asteroid = new obj.Asteroid(5);
}

// for testing
window.game = new Game()

console.log('game')

console.log(obj.banana)

console.log('new change')
