const Shape = require("./shape.js");

function Circle(color, radius){
    this.color = color; 
    this.radius = radius;
};

Circle.prototype = Object.create(Shape.prototype); //ES5 syntax 
Circle.prototype.constructor = Circle; 

Circle.prototype.calcCircumference = function(){
    console.log(`My circumference is ${2 * this.radius * Math.PI}, 
    because my radius is ${this.radius}`);
};

module.exports = Circle;
