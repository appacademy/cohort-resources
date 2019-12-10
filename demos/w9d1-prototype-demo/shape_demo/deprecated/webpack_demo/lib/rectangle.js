const Shape = require('./shape');

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  numSides() {
    console.log(`I have 4 sides! My width is ${this.width} and my height is ${this.height}`);
  }
}

module.exports = Rectangle;