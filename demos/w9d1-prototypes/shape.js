// ES5 approach 

// function Shape(color) {
//     this.color = color; 
// }

// Shape.prototype.sayHello = function() {
//     console.log("Hello!!"); 
// }


// ES6 approach 

class Shape {
    constructor(color) {
        this.color = color; 
    }

    sayHello() {
        console.log("Hello!"); 
    }
}

module.exports = Shape; 

// const blueShape = new Shape('blue'); 

// console.log(blueShape); 


