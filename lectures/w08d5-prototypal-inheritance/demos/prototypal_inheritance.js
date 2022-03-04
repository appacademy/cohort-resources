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

//Naive Solution 1:

// Cat.prototype = Animal.prototype;

// Inefficient working Solution 2:
// Cat.prototype = new Animal();

//Solution 3:

// function Surrogate() {} //dummy constructor called Surrogate
// Surrogate.prototype = Animal.prototype; // now our dummy constructor has access to Animal's prototype obj
// Cat.prototype = new Surrogate();
// Cat.prototype.constructor = Cat; //point back to Cat constructor


//Solution 4:
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;



// Cat.prototype.meow = function () {
//   console.log('Meow!');
// };



//ES6 Solution

class Animal {

  constructor(name){
    this.name = name;
  }

  eat(){
    console.log(this.name + ' is eating.');
  }
}

class Cat extends Animal {
  constructor(name, coatColor){
    super(name);
    this.coatColor = coatColor;
  }

  meow() {
    console.log("Meow!")
  }

}






const garfield = new Cat('Garfield');
garfield.eat();
garfield.meow();

const noCat = new Animal('noCat');
noCat.meow();