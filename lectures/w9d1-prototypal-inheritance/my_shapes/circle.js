// function Circle(color, radius) {
//     Shape.call(this, color);
//     this.radius = radius;
// }

// // 1
// Circle.prototype = Object.create(Shape.prototype);
// // 2
// Circle.prototype.constructor = Circle;

// Circle.prototype.area = function() {
//     let area = Math.PI * (this.radius**2);
//     console.log(area);
// };
const Shape = require('./shape');

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    area() {
        let area = Math.PI * (this.radius ** 2);
        console.log(area);
    }
}

module.exports = Circle;


