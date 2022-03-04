// ES5 syntax

// function Cat(name, owner) {
//     this.name = name;
//     this.owner = owner;
// }

// Cat.prototype.cuteStatement = function () {
//     return `${this.owner} loves ${this.name}. :3`;
// };

// Cat.prototype.meow = function () {
//     return `${this.name} says meow`;
// };


// ---------------------------------------------------------------------------

// TODO: Refactor to ES6 class syntax 

class Cat {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
    }

    cuteStatement() {
        return `${this.owner} loves ${this.name}. :3`;
    }

    meow() {
        return `${this.name} says meow`;
    }
}

class Dog {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
    }

    bark(action) {
        return `${this.name} says woof! and ${action}`
    }
}
