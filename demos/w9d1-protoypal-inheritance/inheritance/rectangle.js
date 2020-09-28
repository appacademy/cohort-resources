// const Shape = require('./shape');
// const inherits = require('./surrogate');

// function Rectangle(color, width, height){
//   this.color = color;
//   this.width = width;
//   this.height = height;
//   // this.perimeter = (2 * width) + (2 *  height);
// };

// inherits(Shape, Rectangle);

// Rectangle.prototype.perimeter = function(){
//   const perimeter = (2 * this.width) + (2 * this.height)
//   console.log(`My perimiter is ${perimeter}`);
// }

// module.exports = Rectangle;

//ES6 

import Shape from './shape';
class Rectangle extends Shape {
  constructor(color, width, height){
    super(); //will need to call super super()
    this.color = color;
    this.width = width;
    this.height = height;
    //this.perimeter 
  }

  perimeter(){
    const perimeter = (2 * this.width) + (2 * this.height)
    console.log(`My perimiter is ${perimeter}`);
  }
}

export default Rectangle;
// const yellowRect = new Rectangle('yellow', 6, 3)