// ES5 Syntax
// function Rectangle(color, width, height) {
//     Shape.call(this, color);
//     this.width = width;
//     this.height = height;
// }

// inherits(Shape, Rectangle);

// Rectangle.prototype.calculateArea = function() {
//     const area = this.width * this.height;
//     console.log(`total area is ${area}, from width of ${this.width} and height of ${this.height}`)
// }

// importing Shape as it is used when extending Rectangle
const Shape = require('./shape.js');

// ES6 Syntax
// using extends is ES6 syntactic sugar for setting up prototypal inheritance
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    // instance method located in the Rectangle.prototype
    calculateArea() {
        const area = this.width * this.height;
        console.log(`total area is ${area}, from width of ${this.width} and height of ${this.height}`);
    }
}

module.exports = Rectangle;