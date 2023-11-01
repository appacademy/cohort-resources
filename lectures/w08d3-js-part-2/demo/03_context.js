// function testingContext() {
//   console.log(this);
// }

// testingContext()

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   testContext() {
//     console.log(this);
//   }
// }

function Cat(name) {
  this.myName = name;
  // this.myInterval = setInterval(this.makeNoise.bind(this), 2000);
  // this.myInterval = setInterval(() => this.makeNoise(), 2000);
  let that = this;
  setInterval(function() { that.makeNoise()}, 2000)
  
};

function Dog(name) {
  this.myName = name;
};

function makeNoise(sound='meow', num=1) {
  console.log(this);
  console.log(`${this.myName} ${sound}s ${num} times`)
};

Cat.prototype.makeNoise = makeNoise;

// let testCat = new Cat('test');
// let testDog = new Dog('fido');
// let anothertestCat = new Cat('another test');

