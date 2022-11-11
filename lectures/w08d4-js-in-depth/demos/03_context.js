// REVIEW:
// Ways to call a function:
//   ???

// function style
// method style
// constructor style



function Cat(name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  console.log(`${this.name} says 'meow'`);
};

function Dog(name) {
  // debugger
  this.name = name;
}

Dog.prototype.bark = function () {
  // debugger
  console.log(`${this.name} says 'woof'.`);
};

Dog.prototype.sniff = function (otherThing) {
  // debugger
  console.log(`${this.name} sniffs ${otherThing.name}`);
};

let garfield = new Cat("Garfield");

const detachedMeow = garfield.meow;

function betterDetachedMeow() {
  return garfield.meow();
}

const boundMeow = detachedMeow.bind(garfield);


Cat.prototype.sayHi = function() {
  const that = this;
  // console.log("outside the inner function", this);

  // option 1:

  return function() {
  // console.log("inside the inner function", this);
  timesDo(3, that.meow.bind(that));
  }

  // option 2:

  // return () => {
  //   timesDo(3, this.meow.bind(this));
  // }

  // option 3:

  // return () => {
  //   timesDo(3, () => this.meow());
  // }

}

function timesDo(num, cb) {
  for (let i = 0; i < num; i++) {
    cb();
  }
}
















