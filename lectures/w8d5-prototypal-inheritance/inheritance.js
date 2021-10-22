function Animal (name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

function Cat(name) {
  Animal.call(this, name);
}

// Make Cat inherit from Animal here.
// Cat.prototype = Animal.prototype; // can't do this bc Animal will be mutated when we change Cat
// Cat.prototype.__proto__ = Animal.prototype; // can't do this bc docs say so! (it slows down performance drastically)
// Cat.prototype = new Animal(); // works, but a bad idea bc we don't know what side effects calling `new Animal()` could trigger

function Surrogate() {}
Surrogate.prototype = Animal.prototype; 
Cat.prototype = new Surrogate(); // we just need something that looks like this! { __proto__: Animal.prototype }
Cat.prototype.constructor = Cat;


Cat.prototype.meow = function () {
  console.log('Meow!');
};

const garfield = new Cat('Garfield');
const notaCat = new Animal('Not A. Cat');