// const Shape = require('./shape');

// function Circle(color, radius){
//   this.color = color;
//   this.radius = radius;
// };

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.calcCircumference = function(){
//   console.log(`My circumference is ${2 * Math.PI * this.radius} because my radius is ${this.radius}`);
// }

// module.exports = Circle;

//ES 6

import Shape from './shape';

class Circle extends Shape {
  constructor(color, radius){ // def initialize 
    super();
    this.color = color; 
    this.radius = radius;
  }

  calcCircumference(){
    console.log(`My circumference is ${2 * Math.PI * this.radius} because my radius is ${this.radius}`);
  }
}

export default Circle;
// const greenCircle = new Circle('green', 10);