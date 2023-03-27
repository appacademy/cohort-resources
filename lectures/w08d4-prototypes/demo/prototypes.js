function Animal(name) {
  this.name = name;
};

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// };

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

function Cat(name) {
  Animal.call(this, name);
}

// Cat.prototype.__proto__ = Animal.prototype;
// not good solution because we access/manipulate __proto__ directly

// Object.create method
// Object.create takes in an object, creates a new empty object
// and sets its __proto__ to point to the argument
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

// Surrogate method
function Surrogate() {};
Surrogate.prototype = Animal.prototype;
Cat.prototype = Surrogate.prototype;
Cat.prototype.constructor = Cat;

// Make Cat inherit from Animal here.

Cat.prototype.meow = function () {
  console.log('Meow!');
};

// const garfield = new Cat('Garfield');
// garfield.eat();
// garfield.meow();

// const noCat = new Animal('noCat');
// noCat.meow();

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks`);
  }
};