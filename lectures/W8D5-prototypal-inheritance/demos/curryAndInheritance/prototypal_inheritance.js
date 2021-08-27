// function Animal (name) {
//   this.name = name;
// };

// Animal.prototype.eat = function () {
//   console.log(this.name + ' is eating.');
// };

// function Cat(name, coatColor) {
//   // this.name = name;
//   Animal.call(this, name);
//   // have Animal set this.name
//   this.coatColor = coatColor;
// };

// Make Cat inherit from Animal here.

// Surrogate pattern, our prefered way. KNOW THIS!!!!!!!!!!!!!
// KNOW THIS!!!!! LEARN IT!!! PLEASE!!!!
// function Surrogate() {};
// Surrogate.prototype = Animal.prototype;
// Cat.prototype = new Surrogate();
// Cat.prototype.constructor = Cat;

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constuctor = Cat;

// Cat.prototype.meow = function () {
//   console.log('Meow!');
// };

class Animal {
  constructor(name) {
    this.name = name;
  };

  eat() {
    console.log(this.name + ' is eating.');
  };
};

class Cat extends Animal {
  constructor(name, coatColor) {
    super(name);
    this.coatColor = coatColor;
  };

  meow() {
    console.log('meow!');
  };
};

const garfield = new Cat('Garfield', 'orange');
// garfield.eat();
// console.log(garfield.coatColor);
// garfield.meow();

const nonCat = new Animal('nonCat');
// nonCat.meow();
