// Class Syntax Demo

// look back at ES5 "constructor style" from earlier for comparison

// ES5

// function Pirate (name,numTats) {
//     this.name = name;
//     this.numTats = numTats;
// }

// Pirate.prototype.yell = function (arg) {
//     console.log(`${arg} matey`);
// }

// ES6 Class Syntax

class Pirate {
    constructor(name,numTats) {
        this.name = name;
        this.numTats = numTats;
        console.dir(this)
        console.log(this)

        this._yar = this._yar.bind(this)
    }
    
    yell() {
        console.log(`yar, my name is ${this.name}`)
        // return undefined because we didn't return anything
    }

    static revolt(banana) {
        console.dir(this)
        console.dir(banana)
        console.log(`You need at least ${banana.numTats} more tats`)
    }

    chant() {
        setInterval(this._yar,1000) // accepts a callback and milliseconds
    }

    _yar() {
        console.log(`yarrrrrrr, ${this.name}.`)
    }

}
 
const jen = new Pirate('Jen',12)
jen.chant()
// const ryan = new Pirate('Ryan',9)

// ryan.yell()
// Pirate.revolt(ryan)