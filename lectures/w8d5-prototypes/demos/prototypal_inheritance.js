// Animal constructor
function Animal (name) {
  this.name = name;
};

// function defined on Animal.prototype
Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

// Cat constructor
function Cat(name, color) {
  Animal.call(this); // ES5 version of super(name)
  this.color = color;
}

function Kitten(name) {
  this.name = name;
}

// Make Cat inherit from Animal here.
// Cat.prototype = Animal.prototype; // naive - bad - animal and cat shouldnt be the same

// Cat.prototype = new Animal (); // sets up inheritance chain correctly
//  but we can suffer performance hits at the whim of a slow constructor

// Surrogate Pattern

// function Surrogate() {} // dummy class / constructor
// Surrogate.prototype = Animal.prototype; // surrogate and animal prototype are the same
// Cat.prototype = new Surrogate (); // surrogate instance __proto__ points to animal prototype, can be used as the new Cat prototype

Cat.prototype = Object.create(Animal.prototype); // does the same thing as the surrogate pattern
Cat.prototype.constructor = Cat; // Good to have a reference to constructor

Cat.prototype.meow = function () {
  console.log('Meow!');
};

function Surrogate() {} // dummy class / constructor
Surrogate.prototype = Cat.prototype; // set the prototype = animal prototype
Kitten.prototype = new Surrogate (); // surrogate instance __proto__ points to animal prototype
Kitten.prototype.constructor = Kitten; // Good to have a reference to constructor

Kitten.prototype.squeak = function() {
  console.log('EEEP');
}

const garfield = new Cat('Garfield');
garfield.eat();
garfield.meow();

const noCat = new Animal('noCat');
noCat.meow();

/// ES6 looks same as class syntax but its syntactic sugar, still prototypal

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + ' is eating');
  }
}


class Cat extends Animal {
  constructor(name) {
    super(name)
  }

  meow() {
    console.log('meow!');
  }
}