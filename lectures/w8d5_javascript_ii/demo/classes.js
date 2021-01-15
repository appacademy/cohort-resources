// 1. DECLARING CLASSES ES5 

// function Pirate(name, numTats){
//     this.name = name;
//     this.numTats = numTats;
// }

// Pirate.prototype.yell = function (arg){
//     console.log(`${arg} matey!`)
// }

// Pirate.revolt = function(){
//     console.log("I am revolting!")
// }

// const ryan = new Pirate("Ryan", 9)
// // console.log(ryan)
// ryan.yell("Zack");
// Pirate.revolt();

// 2.DECLARING CLASSES ES6 WAY

class Pirate{
    constructor(name, numTats){
        this.name = name;
        this.numTats = numTats;
    }

    yell(arg){
        console.log(`${arg} matey!`)
    }
    
    static revolt(){
        // console.log(this)
        console.log("I am revolting!")
    }
}


module.exports = Pirate;
// const ryan = new Pirate("Ryan", 9)
// console.log(ryan)
// ryan.yell("Zack");
// Pirate.revolt();