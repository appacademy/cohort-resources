// function Cat(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Cat.prototype.meow = function() {
//   console.log(`${this.name} says meow`);
// }

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  meow() {
    debugger;
    console.log(this);
    console.log(`${this.name} says meow`);
  }
};

let bruce = new Cat('bruce', 14);
let meow = bruce.meow;
meow();