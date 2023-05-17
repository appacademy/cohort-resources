// function Cat(name, owner) {
//   this.name = name;
//   this.owner = owner;
// }

// Cat.prototype.cuteStatement = function () {
//   return `${this.owner} loves ${this.name}. :3`;
// };

// Cat.prototype.meow = function () {
//   return 'meow';
// };


class Cat {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }

  cuteStatement() {
    debugger
    return `${this.owner} loves ${this.name}. :3`;
  }

  meow() {
    return 'meow';
  }
}
