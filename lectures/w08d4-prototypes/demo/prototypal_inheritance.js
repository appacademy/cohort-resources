// function Animal(name) {
//   this.name = name;
// };

// Animal.prototype.eat = function () {
//   console.log(this.name + ' is eating.');
// };

// function Cat(name) {
//   this.name = name;
// }


// Cat.prototype = new Animal();
// Cat.prototype.constructor = Cat;

// Surrogate method
// function Surrogate() {};
// Surrogate.prototype = Animal.prototype;
// Cat.prototype = new Surrogate();
// Cat.prototype.constructor = Cat;

// Object.create method
// Cat.prototype = Object.create(Animal);
// Cat.prototype.constructor = Cat;

// Make Cat inherit from Animal here.

// Cat.prototype.meow = function () {
//   console.log('Meow!');
// };

// const garfield = new Cat('Garfield');
// garfield.eat();
// garfield.meow();

// const noCat = new Animal('noCat');
// noCat.meow();

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eats`);
  }
};

class Cat extends Animal {
  constructor(name, coat) {
    super(name);
    this.coat = coat;
  }

  meow() {
    console.log(`${this.name} meows`);
  }
};