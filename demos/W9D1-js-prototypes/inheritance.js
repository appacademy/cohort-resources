function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`nom nom nom`);
};

function Dog(name, toy) {
  // this.name = name;
  Animal.call(this, name); 
  this.favoriteToy = toy;
}

// bad!
// Dog.prototype = Animal.prototype; 
// Dog.prototype = new Animal(); 

// good! (pre-ES5, Surrogate pattern)
// function Surrogate(){}; 
// Surrogate.prototype = Animal.prototype; 
// Dog.prototype = new Surrogate(); 
// Dog.prototype.constructor = Dog; 

// ES5
// Dog.prototype = Object.create(Animal.prototype); 
// Dog.prototype.constructor = Dog; 

Dog.prototype.bark = function() {
  console.log(`woof woof`);
};

Dog.prototype.sayName = function() {
  console.log(`my name is ${this.name}`);
};

function Cat(name) {
  // this.name = name;
  Animal.call(this, name); 
}

// bad!
// Cat.prototype = Animal.prototype; 
// Cat.prototype = new Animal(); 

// good (pre-ES5)
// Cat.prototype = new Surrogate(); 
// Cat.prototype.constructor = Cat; 

Cat.prototype = Object.create(Animal.prototype); 
Cat.prototype.constructor = Cat; 

Cat.prototype.meow = function() {
  console.log(`meow`);
};

let mimi = new Dog(`Mimi`, `ball`);
let pinky = new Cat(`pinky`);




