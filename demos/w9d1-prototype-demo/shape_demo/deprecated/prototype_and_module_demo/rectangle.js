const Shape = require('./shape');

class Rectangle extends Shape {
  constructor(color, height, width) {
    super(color);
    this.height = height;
    this.width = width;
  }

  sayLengths() {
    console.log(`Lengths: [${this.height}, ${this.width}]`);
  }
}

module.exports = Rectangle;