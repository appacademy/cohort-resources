// function Rectangle(color, width, height) {
//     Shape.call(this, color);
//     this.width = width;
//     this.height = height;
// };

// inherits(Rectangle, Shape);

// Rectangle.prototype.area = function() {
//     console.log(this.width * this.height);
// };
// const Shape = require('./shape.js');

const Shape = require('./shape.js');

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    area() {
        console.log(this.width * this.height);
    }
}

class FancyRectangle extends Rectangle {
    constructor(color, width, height) {
        super(color, width, height);
    }

    sayHello() {
        console.log('I am fancy');
    }
}

module.exports = {
    Rectangle: Rectangle,
    FancyRectangle: FancyRectangle
};