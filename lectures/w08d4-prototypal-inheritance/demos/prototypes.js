//ES5 constructor

function Animal(name) {
  this.name = name;

};

//ES6 class definition and contructor
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// };

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};


function Cat(name) {
  Animal.call(this, name); //ES5's way of doing super
}

// Make Cat inherit from Animal here.

//bad solution 1
//Cat.prototype.__proto__ = Animal.prototype; //works but is bad practice

//Cat.prototype = Animal.prototype //doesn't work b/c Cat and Animal prototypes become the same obj

//bad solution 2
//Cat.prototype = new Animal(); //have to do all of the Animal constructor logic to create Animal instance and that could be expensive
//Cat.prototype.constructor = Cat;

//Good method 1:
function Surrogate(){} // dummy constructor
Surrogate.prototype = Animal.prototype; //makes Surrogate and Animal have same prototype obj
Cat.prototype = new Surrogate(); //no expensive constructor function being ran
Cat.prototype.constructor = Cat; //add that constructor property

//Good method 2:
Cat.prototype = Object.create(Animal.prototype); //creates a new empty obj with a __proto__ that points to argument
Cat.prototype.constructor = Cat;


Cat.prototype.meow = function () {
  console.log('Meow!');
};

const garfield = new Cat('Garfield');
const noCat = new Animal('noCat');

garfield.meow()
garfield.eat()
noCat.meow() //needs to error



//Good method 3:

class Dog extends Animal{
  constructor(name, breed){
    super(name);
    this.breed = breed;
  }

  bark(){
    console.log(`${this.name} barks`)
  }
}
