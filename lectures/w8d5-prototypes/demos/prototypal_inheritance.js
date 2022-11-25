// // ES6 syntax
// class Cat {
//   constructor(name, breed) {
//     super(name)
//     this.name = name;
//     this.breed = breed;
//   }

//   meow() {
//     console.log(`${this.name} meows`);
//   }
// }

// // ES 5
// // constructor function
// function Cat(name, breed) {
//   this.name = name;
//   this.breed = breed;
// }

// // shared behavior
// Cat.prototype.meow = function() {
//   console.log(`${this.name} meows`);
// }

function Animal(name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

function Cat(name, breed) {
  // this.name = name;
  Animal.call(this, name);
  this.breed = breed;
};

// Implementation #1
// Cat.prototype = Animal.prototype;

// Implementation #2
// not allowed to directly alter __proto__
// Cat.prototype.__proto__ = Animal.prototype;

// Implementation #3
// Cat.prototype = new Animal();
// Cat.prototype.constructor = Cat;

// Implementation #4 (surrogate pattern)
// function Surrogate() {};
// Surrogate.prototype = Animal.prototype;
// Cat.prototype = new Surrogate();
// Cat.prototype.constructor = Cat;

// Implementation #5 (ES6)
// Object.create takes in an object and creates a brand new object whose __proto__ points to argument
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function() {
  console.log(`${this.name} meows.`);
};

// const garfield = new Cat('garfield', 'tabby');