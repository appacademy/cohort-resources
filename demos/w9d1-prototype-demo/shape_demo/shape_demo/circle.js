// ES5 Syntax
// function Circle(color, radius) {
//     Shape.call(this, color);
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.calcCircumference = function() {
//     console.log(`My circumference is ${2 * this.radius * Math.PI} because my radius is ${this.radius}`);
// }

// importing Shape for inheritance
const Shape = require('./shape.js');

// using extends is ES6 syntactic sugar for setting up prototypal inheritance
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    
    // instance method on the Circle.prototype
    calcCircumference() {
        console.log(`My circumference is ${2 * this.radius * Math.PI} because my radius is ${this.radius}`);
    }
}

module.exports = Circle;