// function Rectangle(color, width, height) {
//     this.color = color; 
//     this.width = width; 
//     this.height = height; 
// }


// we need to define instance methods AFTER
// we set up inheritance
// inherits(Shape, Rectangle); 

// Rectangle.prototype.calcArea = function () {
//     return this.width * this.height;
// }

// ES6 approach
// does Object.create() under the hood 
// you will see this ES6 pattern a lot in React 

const Shape = require('./shape.js'); 

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color); 
        this.width = width; 
        this.height = height; 
    }

    calcArea() {
        return this.width*this.height; 
    }
}

module.exports = Rectangle; 

// let redRectangle = new Rectangle('red', 5, 10);
// console.log(redRectangle); 




