//? Class Syntax in JS

// ES5 Syntax

// function Pirate(name, numTats) {
//   this.name = name;
//   this.numTats = numTats;
// }


// ES6 Syntax (fancy)

class Pirate {

  constructor(name, numTats) {
    this.name = name;
    this.numTats = numTats;
    // console.log(this);
  }

  chant() {
    // setInterval(callback, time to repeat callback);
    setInterval(this._yarr.bind(this), 1000);
    // console.log('hey');
  }

  _yarr() {
    // console.log(this);
    console.log(`${this.name} says yarrr!`);
  }

  yell() {
    console.log(`Yarr, me name be ${this.name} and all ${this.numTats} tats are for me mum!`);
  }

  walk() {
    console.log(`${this.name} hobbles on a peg leg!`);
  }

  static revolt(otherPirate) {
    console.log(`You need at least ${otherPirate.numTats} more tats!`)
  }
};

const jen = new Pirate('Salty Dog', 42);
// jen = new Pirate('Bob', 2);
const michelle = new Pirate('Sea Spray', 99);
// michelle.yell();
// Pirate.revolt(jen);
michelle.numTats = 10000000;
// console.log(michelle);

michelle.chant();