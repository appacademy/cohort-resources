const Animal = require("./animal.js");

function Dog(name, toy) {
  this.name = name;
  this.favoriteToy = toy;
}

function Surrogate() { }
Surrogate.prototype = Animal.prototype;
Dog.prototype = new Surrogate();
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`woof woof`);
};

Dog.prototype.sayName = function () {
  console.log(`my name is ${this.name}`);
};

// let mimi = new Dog(`mimi`, `ball`);

module.exports = Dog;