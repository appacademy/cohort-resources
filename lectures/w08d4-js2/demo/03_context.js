
function Cat(name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  console.log(`${this.name} says 'meow'`);
};

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  debugger
  console.log(`${this.name} says 'woof'.`);
};

Dog.prototype.sniff = function (otherThing) {
  debugger
  console.log(`${this.name} sniffs ${otherThing.name}`);
};

