
function Cat(name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  console.log(`${this.name} says 'meow'`);
};


function timesDo(num, cb) {
  for (let i = 0; i < num; i++) {
    cb();
  }
}

// example

const biscuit = new Cat("biscuit")
timesDo(5, biscuit.meow)
// logs " says 'meow'" 5 times
// the timesDo function reads biscuit.meow as:
// function () {
//   console.log(`${this.name} says 'meow'`);
// }
// it invokes it function style and `this` ends up being the window

// need to bind the biscuit context into the callback
timesDo(5, biscuit.meow.bind(biscuit))
// logs "biscuit says 'meow'" 5 times


function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(`${this.name} says 'woof'.`);
};

Dog.prototype.sniff = function (otherThing) {
  console.log(`${this.name} sniffs ${otherThing.name}`);
};

// example of arrow functions automatically binding context compared to regular function

// class Example {
//   constructor(){
//       console.log("Constructor", this)
//       setTimeout(() => { console.log("Arrow", this) }, 0)
//       setTimeout(function(){ console.log("Function declaration", this) }, 0)
//   }
// }
