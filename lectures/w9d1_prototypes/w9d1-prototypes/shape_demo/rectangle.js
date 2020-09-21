// function Rectangle(color,width,height){
//   Shape.call(this,color)
//   this.width = width 
//   this.height = height
// }

// inherits(Shape,Rectangle)

// Rectangle.prototype.calculateArea = function() {
//   debugger
//   const area = this.width * this.height
//   console.log(`Total area is ${area}, from width of ${this.width}, and height of ${this.height}.`)
// }

const Shape = require("./shape.js")

class Rectangle extends Shape {
  constructor(color,width,height){
    super(color)
    this.width = width
    this.height = height
  }

  calculateArea(){
      const area = this.width * this.height
      console.log(`Total area is ${area}, from width of ${this.width}, and height of ${this.height}.`)
  }
}

module.exports = Rectangle;