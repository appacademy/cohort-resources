const Shape = require('./shape');

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  sayRadius() {
    console.log(`My radius is ${this.radius}`);
  }
}


module.exports = Circle;