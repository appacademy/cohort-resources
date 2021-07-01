// Functions Demo

// Function Style

function pirateYell(arg) {
  console.log(`${arg} matey >:D`);
}

pirateYell('arg');

// Function Style - ES6
// arrow function passes context down (only difference)

const pirateYell2 = (arg) => {
  console.log(`${arg} matey >:D`);
}

pirateYell2('ahoy');

// Method Style

const pirate = {
  name: "Walker",
  numTats: 7,
  yell: function (arg) {
    console.log(`${arg} matey >:D`);
  }
}

pirate.yell('arrrrg');

// Constructor Style

function Pirate(name, numTats) {
  this.name = name;
  this.numTats = numTats;
}

const walker = new Pirate("Walker", 7);

Pirate.prototype.yell = function (arg) {
  console.log(`${arg} matey >:D`);
}

walker.yell('ahooooooy');
