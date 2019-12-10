// ES5 Syntax
// function Shape(color) {
//     this.color = color;
// }

// Shape.prototype.sayHello = function() {
//     console.log(`Hello, I am ${this.color}`);
// }

// ES6 Syntax
class Shape {
    constructor(color) {
        this.color = color;
    }

    // instance method on Shape.prototype
    sayHello() {
        console.log(`Hello, I am ${this.color}`);   
    }

    // similar to a class method, stored in the Shape.constructor
    static sayGoodbye() {
        console.log('bye');
    }
}

// exporting a single class/object
module.exports = Shape;