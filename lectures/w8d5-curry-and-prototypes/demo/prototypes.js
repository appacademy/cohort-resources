// function Animal (name) {
//     this.name = name;
//   };
  
// Animal.prototype.eat = function () {
// console.log(this.name + ' is eating.');
// };
  
// function Cat(name) {
// this.name = name;
// }
  
// Make Cat inherit from Animal here.
// Cat.prototype.__proto__ = Animal.prototype; BAD DO NOT DO THIS
// Cat.prototype = Animal.prototype;
// Cat.prototype = new Animal(); not ideal - requires running Animal constructor for every child class

// Preferred Solution #1: Surrogate
// function Surrogate() {}; // dummy constructor
// Surrogate.prototype = Animal.prototype; // set dummy prototype to parent prototype
// Cat.prototype = new Surrogate();
// Cat.prototype.constructor = Cat;

// Preferred Solution #2: Object.create
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// Preferred Solution #3: Class syntax
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + ' is eating!');
    }
}

class Cat extends Animal {
    constructor(name, coatColor) {
        super(name);
        this.coatCOlor = coatColor;
    }

    meow() {
        console.log('Meow!');
    }
}

// Cat.prototype.meow = function () {
// console.log('Meow!');
// };

Cat.prototype.purr = function () {
    console.log("Purr!!!");
}

const garfield = new Cat('Garfield');
garfield.eat();
garfield.meow();
garfield.purr();
garfield.walk();

Animal.prototype.walk = function() {
    console.log(this.name + ' is walking');
}

const noCat = new Animal('noCat');
noCat.eat();
noCat.walk();
// noCat.meow();
// noCat.purr();