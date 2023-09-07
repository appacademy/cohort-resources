
function Cat(name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  // debugger
  console.log(`${this.name} says 'meow'`);
};

function callMultipleTimes(cb, number) {
  for (let i = 0; i < number; i++) {
    cb();
  }
}

const biscuit = new Cat('biscuit');
biscuit.meow() // works normal

callMultipleTimes(biscuit.meow, 5); // no name is meowed - this.name is returning '', 
// other scenarios this could error out
// biscuit.meow is not being called, cb only has access to function definition:
// function () {
//   console.log(`${this.name} says 'meow'`);
// };

// it is invoked function style and therefor biscuit is lost

//solution

callMultipleTimes(biscuit.meow.bind(biscuit), 5);
// new function is passed in with biscuit bound to the value of this in the function
// this is still window from inside callMultipleTimes

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  // debugger
  console.log(`${this.name} says 'woof'.`);
};

Dog.prototype.sniffMultipleTimes = function (number) {
  // debugger
  console.log(`${this.name} sniffs ${number} times`);
};

// bind with args

const greg = new Dog('greg');

const biscuitSniffsThreeTimes = greg.sniff.bind(biscuit, 3);

biscuitSniffsThreeTimes();
