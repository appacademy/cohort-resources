//ES5 constructor
function Animal(name) {
  this.name = name;

};

//ES5 method definition
Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};


function Cat(name) {
  Animal.call(this, name);
}





//works but not supposed to do
//Cat.prototype.__proto__ = Animal.prototype;

//sort of worked but mutated the Animal prototype with any Cat methods that we define later, and Cat doesn't have a distinct prototype object
// Cat.prototype = Animal.prototype;

// Cat.prototype = new Animal();
// Cat.prototype.constructor = Cat;


//this is what is wanted on the assessment
// function Surrogate(){} //simple constructor function.  It has no constructor logic.
// Surrogate.prototype = Animal.prototype; //surrogate's prototype obj is Animal's prototype obj
// Cat.prototype = new Surrogate(); //we are using the Surrogate instance obj as Cat's prototype obj.
// Cat.prototype.constructor = Cat; //add in the missing property of constructor.

//Object.create takes in an object, create a new empty object and sets its __proto__ to point to the argument
//ES5 syntax
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat;

Cat.prototype.meow = function(){
  console.log('Meow!')
}

let curie = new Cat('curie')
let noCat = new Animal('not a cat');


//ES6 syntax

class Dog extends Animal {

  constructor(name, breed){
    super(name);
    this.breed = breed;
  }

  bark(){
    console.log(`${this.name} barks`)
  }
}








