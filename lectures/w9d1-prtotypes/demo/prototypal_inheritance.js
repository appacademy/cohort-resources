// function Animal (name) {
//   this.name = name;
// };

// Animal.prototype.eat = function () {
//   console.log(this.name + ' is eating.');
// };

// function Cat(name) {
//   // this.name = name;
//   Animal.call(this, name)
// }

// Make Cat inherit from Animal here.

//  Naieve solution #1
// Cat.prototype = Animal.prototype

// Better solution, but not quite
// Cat.prototype = new Animal();

// Surrogate Pattern Works
// function Surrogate() {}
// Surrogate.prototype = Animal.prototype;
// Cat.prototype = new Surrogate();
// Cat.prototype.constructor = Cat;

// Cat.prototype = Object.create(Animal.prototype)



// Cat.prototype.meow = function () {
//   console.log('Meow!');
// };




// const garfield = new Cat('Garfield');
// garfield.eat();
// garfield.meow();

// const noCat = new Animal('noCat');
// noCat.meow();


// ES6 Syntax 

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating!`)
  }
}

class Cat extends Animal {
  constructor(name, personality) {
    super(name)
    // Animal.call(this, name)
    this.personality = personality;
    // this.name = name;
  }

  meow() {
    console.log(`${this.name} says Meow!`)
  }
}

const garfield = new Cat('Garfield', 'lazy');
garfield.eat();
garfield.meow();

const noCat = new Animal('noCat');
noCat.meow();