// Functions Demo

// Function Style
// function pirateYell(arg) {
//   console.log(this);
//   console.log(`${arg} mateeeeys!`);
// }


// Function Style - ES6
const pirateYell = (arg) => {
  console.log(this);
  console.log(`${arg} mateeeeys!`);
}

// pirateYell('YARRG');

// Method Style
// obj.method
// POJO -- plain old javascript object
const pirate = {
  name: 'Walker',
  numTats: 10,
  yell(arg) {
    console.log(this);
    console.log(`${arg} mateeeeys! My name is ${this.name}`);
  }
};

pirate.walk = function() {
  console.log(`${this.name} walks the plank.`);
}

// pirate.yell('YARRRG');

// Constructor Style
function Pirate(name, numTats) {
  this.name = name;
  this.numTats = numTats;
}

Pirate.prototype.yell = function(arg) {
  console.log(this);
  console.log(`${arg} mateeeeys! My name is ${this.name}`);
}

const walker = new Pirate('Walker', 10); // ruby === Pirate.new(name, numTats)