import Game from "./game"

document.addEventListener("DOMContentLoaded", ()=>{
    const game = new Game();
    console.log(game)
    // window.game = game;
    
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 800, 580);
    
    ctx.fillStyle = "white"
    ctx.fillRect(50, 50, 50, 50);

    ctx.arc(300, 300, 50, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 20;
    ctx.fillStyle = "blue";
    ctx.stroke();
    ctx.fill();

    // ctx.clearRect(0, 0, 800, 580) // how to clear our canvas
})