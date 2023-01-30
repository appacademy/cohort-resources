import Asteroid from "./asteroids"

class Game{
    constructor(){
        this.asteroid = new Asteroid(4)
    }

    start(){
        console.log("the game is starting...")
    }
}


// game = new Game()
// console.log(game)

export default Game;