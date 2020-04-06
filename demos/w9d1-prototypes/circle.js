
// function Circle(color, radius) {
//     Shape.call(this, color); 

//     // this.color = color; 
//     this.radius = radius; 
// }

// inherits(Shape, Circle); 

// should do the same thing as our inherits function 
// Circle.prototype = Object.create(Shape.prototype); 
// Circle.prototype.constructor = Circle; 

// Circle.prototype.calcArea = function() {
//     return Math.PI*this.radius**2; 
// }

// ES6 approach 

const Shape = require('./shape.js'); 

class Circle extends Shape {
    constructor(color, radius) {
        super(color); 
        this.radius = radius; 
    }

    calcArea() {
        return Math.PI*this.radius**2; 
    }
}

module.exports = Circle; 

// let greenCircle = new Circle("green", 4); 
// console.log(greenCircle); 

