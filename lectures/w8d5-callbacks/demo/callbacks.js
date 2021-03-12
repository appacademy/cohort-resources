// Callbacks Demo
// const Pirate = require('./class_syntax');

// let's take our working adder function from earlier and use it as our callback function
function adder() {
  let sum = 0;
  const args = Array.from(arguments);
  args.forEach((num) => sum += num);

  return sum;
}

function calc(callback, ...args) {
  let result = callback(...args);
  console.log(callback);
  return result;
}

calc((...args) => {
  let result = 1;
  args.forEach((num) => result = result * num)
  return result;
}, 1, 2, 3, 4)

class Pirate {
  constructor(name, numTats) {
    this.name = name;
    this.numTats = numTats;

    this._yell = this._yell.bind(this);
  }

  _yell() {
    // console.log("YARRRRRR");
    // console.log(this);
    console.log(`YARRRRG mateeeeys! My name is ${this.name}`);
  }

  chant() {
    console.log(this);
    setInterval(() => this._yell(), 1000);
    // setInterval(this._yell.bind(this), 1000);
    // setInterval(this._yell, 1000);
  }

  static makeMike() {
    console.log(this);
    const mike = new Pirate('Mike', 100);
    return mike;
  }
}

const walker = new Pirate('Walker', 10);