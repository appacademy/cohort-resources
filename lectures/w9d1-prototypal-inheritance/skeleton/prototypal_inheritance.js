// function Animal (name) {
//   this.name = name;
// };

// Animal.prototype.eat = function () {
//   console.log(this.name + ' is eating.');
// };

// function Cat(name) {
//   this.name = name;
// }

// Make Cat inherit from Animal here.
// First attempt
// Cat.prototype = Animal.prototype;  
// Any function assigned to the Cat's prototype is also added to the Animal's prototype 
// Second attempt
// Cat.prototype = new Animal; 
// Has drawbacks of having to run the Animal(Parent) constructor function

// Surrogate Pattern - This is the way
// function Surrogate(){} // this is an empty function
// Surrogate.prototype = Animal.prototype; // set the Surrogate's prototype to the ParentClass' prototype
// Cat.prototype = new Surrogate(); // set the Cat's prototype to a new instance of the Surrogate (be sure to invoke)
// Cat.prototype.constructor = Cat; // reassign the Cat's constructor to the Cat (Child)

// Object.create style
// Cat.prototype = Object.create(Animal.prototype);
// // Does the same thing as the first 3 lines of the Surrogate Pattern (cannot use on assessment)
// Cat.prototype.constructor = Cat;
// Cat.prototype.meow = function () {
//   console.log('Meow!');
// };

// Animal.prototype.sleep = function () {
//   console.log("So tired . . . zzzzzz");
// }

// ES6 Class Syntax

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + ' is eating.');
  }
}

// extends sets up the ES6 style inheritance
class Cat extends Animal {
  constructor(name) {
    super(name); //calls the parents constructor method with the arguments
    // this.name = name;
  } 

  meow () {
    console.log('Meow!');
  }
}


const felix = new Cat('Felix');
// felix.eat();
// felix.meow();

const boris = new Animal('Boris');
// noCat.meow();
