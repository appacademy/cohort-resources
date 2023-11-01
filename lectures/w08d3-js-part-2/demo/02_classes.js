// ES5
// function Cat(name, breed) {
//   this.name = name;
//   this.breed = breed;
// };

// Cat.prototype.meow = function(num) {
//   for (let i = 0; i < num; i++) {
//     console.log(`${this.name} meows`);
//   }
// };

// ES6
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  meow(num = 1) {
    for (let i = 0; i < num; i++) {
      console.log(`${this.name} meows`);
    }
  }
}

let socks = new Cat('Socks', 'tabby');
