function Cat (name) {
  this.name = name;
}

function Dog (name) {
  // debugger;
  this.name = name;
}

Dog.prototype.bark = function () {
  // debugger;
  console.log(`${this.name} says woof!`);
}

Dog.prototype.protectiveBark = function () {
  debugger;
  // const dog = this;
  return () => {
    debugger; 
    console.log(`${this.name} says bark woof ruff grr`);
  }
}

function makeNoise (noise) {
  // debugger;
  console.log(`${this.name} says ${noise}`);
}

function times (numTimes, callback) {
  for (let i = 0; i < numTimes; i++) {
    callback();
  }
}











