// function Animal (name) {
//   this.name = name;
// };

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
     console.log(`${this.name} is eating... emmm, delicious`)
  }
}

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

// function Cat(name) {
//   this.name = name;
// }

class Cat extends Animal {
  constructor(name, coatColor) {
    // Animal.call(this);
    super(name);
    // debugger;
    // this.name = name;
    this.coatColor = coatColor;
  }

  meow() {
    console.log("meow");
  }
}


// Make Cat inherit from Animal here.

// Cat.prototype = Animal.prototype;

// Cat.prototype = new Animal();

// function Surrogate() {  } // declaring a new constructor fuction
// debugger;
// Surrogate.prototype = Animal.prototype;
// debugger;
// Cat.prototype = new Surrogate();

// Cat.prototype = Object.create(Animal.prototype);
// debugger;
// Cat.prototype.constructor = Cat;
// debugger;



Cat.prototype.meow = function () {
  console.log('Meow!');
};

const garfield = new Cat('Garfield');
garfield.eat();
garfield.meow();

const noCat = new Animal('noCat');
noCat.meow();
