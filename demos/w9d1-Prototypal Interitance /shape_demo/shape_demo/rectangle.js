const inherits = require("./surrogate_inherits.js");
const Shape = require("./shape.js");

function Rectangle(color, width, height){
    this.color = color;
    this.width = width;
    this.height = height; 
};

inherits(Shape, Rectangle); //using the function that we wrote

Rectangle.prototype.calculateArea = function(){
    const area = this.width * this.height;
    console.log(`Total area is ${area}.`);

};

module.exports = Rectangle;

//class ES6 syntax 
class Rectangle extends Shape{
    constructor(color, width, height){
        this.color = color;
        this.width = width;
        this.height = height; 
    };

    calculateArea(){
        const area = this.width * this.height;
        console.log(`Total area is ${area}.`);
    };
};

export const sayHello = function(){
    console.log('Say Hello');
};

export const sayBye = function(){
    console.log('Say Bye');
};

//export default Rectangle; //exporting one item 
export Rectangle; //multiple items 

