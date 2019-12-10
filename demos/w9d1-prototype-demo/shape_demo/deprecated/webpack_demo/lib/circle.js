const Shape = require('./shape');

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  findCircumference() {
    console.log(`My circumference is ${2 * 3.14 * this.radius}`);
  }
}

module.exports = Circle;