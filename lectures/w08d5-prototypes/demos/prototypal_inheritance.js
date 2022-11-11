function Animal (name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

function Cat(name) {
  this.name = name;
  // Animal.call(this, name); 
              //Pass down the context of this (in Animal) to be 'this' cat with the argument of name
}

// Make Cat inherit from Animal here.
Cat.prototype = Animal.prototype // it is not a good idea because Animal instances should not have Cat's functions
// Cat.prototype = new Animal() // it works but we would be running potentially A LOT in the Animal's constructor


//Inheritance ES5 Surrogate Patern. (Learn this :) )
function Surrogate(){};
Surrogate.prototype = Animal.prototype;
Cat.prototype = new Surrogate();
Cat.prototype.constructor = Cat

// function Surrogate(){};
// Surrogate.prototype = ParentClass.prototype;
// ChildClass.prototype = new Surrogate();
// ChildClass.prototype.constructor = ChildClass

Cat.prototype.meow = function () {
  console.log('Meow!');
};


const garfield = new Cat('Garfield');
// garfield.eat();
// garfield.meow();
const noCat = new Animal('noCat');
// noCat.meow(); // We should not be able to run this   >:|


// Inheritance with Object.create (ES5 2009 and later) 
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat


//Inheritance ES6 (class syntactic sugar)
class Animal {
  constructor(name){
    this.name = name
  }

  eat(){
    console.log(`${this.name} eats all of the food`)
  }
}

class Cat extends Animal {
  constructor(name){
    // this.name = name
    super(name)
  }

  meow(){
    console.log("Meow")
  }
}
