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
  Animal.call(this, name);
}

// Make Cat inherit from Animal here.

Cat.prototype.meow = function () {
  console.log('Meow!');
};

const garfield = new Cat('Garfield');
const noCat = new Animal('noCat');
