// Class Syntax Demo

// look back at ES5 "constructor style" from earlier for comparison
// function Pirate(name, numTats) {
//   this.name = name;
//   this.numTats = numTats;
// }

// Pirate.prototype.yell = function (arg) {
//   console.log(this);
//   console.log(`${arg} mateeeeys! My name is ${this.name}`);
// }

// ES6 Class Syntax
class Pirate {
  constructor(name, numTats) {
    this.name = name;
    this.numTats = numTats;
  }

  yell(arg) {
    console.log(`${arg} mateeeeys! My name is ${this.name}`);
  }

  static makeMike() {
    console.log(this);
    const mike = new Pirate('Mike', 100);
    return mike;
  }
}

Pirate.prototype.walk = function() {
  console.log(`${this.name} walks the plank.`);
}

// Defining class method ES5
// Pirate.makeMike = function() {
//   console.log(this);
//     const mike = new Pirate('Mike', 100);
//     return mike;
// }

const walker = new Pirate('Walker', 10);
const mike = Pirate.makeMike();

module.exports = Pirate;