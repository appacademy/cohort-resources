// // ES5 syntax

// function Cat(name, owner) {
//   this.name = name;
//   this.owner = owner;
//   console.log(`hello from the cat's "constructor"`)
//   console.log(this)
// }


// // method style
// Cat.prototype.cuteStatement = function () {
//   console.log(this)
//   return `${this.owner} loves ${this.name}. :3`;
// };

// Cat.prototype.meow = function () {
//   console.log(this)
//   return 'meow';
// };

// // how are new instances initialized?
// // constructor style
// const nemo = new Cat("Captain Nemo", "Spencer");
// const squish = new Cat("Squish", "Andrea");

// // how are instance methods invoked?
// // method style
// console.log(nemo.meow());
// console.log(squish.cuteStatement());

// TODO: Refactor to ES6 class syntax 

class Cat {

  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
    console.log(this) // object being created
  }

  // Cat.prototype.cuteStatement = function() {} //ES5
  cuteStatement() {
    console.log(this)
    return `${this.owner} loves ${this.name}. :3`;
  }

  meow() {
    console.log(this)
    return 'meow';
  }
}

class Dog {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }

  bark(action) {
    return `${this.name} says woof and ${action}`
  }
}

let amor = new Dog("Amor", "Jhon's mom")
console.log(amor.bark("don't leave meh or else bombastic side-eye"));
































// class Cat {

//   constructor(name, owner) {
//     this.name = name;
//     this.owner = owner;
//   }

//   cuteStatement() {
//     return `${this.name} loves ${this.owner}. :3`;
//   }

//   meow() {
//     return 'meow';
//   }

// }
