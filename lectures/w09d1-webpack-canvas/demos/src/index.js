//logic for our game

const Asteroid = require("./asteroid")
const Game = require("./game")


// the dom has to load before we grab the canvas html element
document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas")
    canvasEl.width = 500;
    canvasEl.height = 700;
    const ctx = canvasEl.getContext("2d")
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 700)

    ctx.fillStyle = "pink"
    ctx.fillRect(50, 50, 80, 80)

    ctx.beginPath();
    ctx.strokeStyle = "white"
    ctx.arc(200, 75, 50, 0, 2 * Math.PI, true);
    ctx.stroke();

    Game()
    Asteroid()

    window.greet = "Hello World"
    window.asteroid = Asteroid;
})
