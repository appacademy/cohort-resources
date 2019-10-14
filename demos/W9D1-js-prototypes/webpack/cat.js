const Animal = require("./animal.js");

function Cat(name) {
  this.name = name;
}

function Surrogate() { }
Surrogate.prototype = Animal.prototype;
Cat.prototype = new Surrogate();
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  console.log(`meow`);
};

// let pinky = new Cat(`pinky`);

module.exports = Cat;