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

// // TODO: Refactor to ES6 class syntax 









// class Cat {
//   constructor(name, owner){
//     this.name = name;
//     this.owner = owner
//   }

//   cuteStatement(){
//     return `${this.owner} loves ${this.name}`
//   }
// }

class Cat {
  constructor(name, owner){
    this.name = name;
    this.owner = owner
  }

  cuteStatement(){
    console.log(this, "this")
    return `${this.owner} loves ${this.name}`
  }

}


let olivia = new Cat("olivia", "Taylor Swift")
console.log(olivia.cuteStatement())





























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
