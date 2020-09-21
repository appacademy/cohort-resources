// function Circle(color,radius){
//   Shape.call(this,color)
//   this.radius = radius
// }

// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle

// Circle.prototype.calcCircumference = function() {
//   console.log(`My circumference is ${2 * Math.PI * this.radius} because my radius is ${this.radius}.`)
// }

const Shape = require("./shape.js");

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  calcCircumference() {
    console.log(
      `My circumference is ${2 * Math.PI * this.radius} because my radius is ${
        this.radius
      }.`
    );
  }
}

module.exports = Circle;
