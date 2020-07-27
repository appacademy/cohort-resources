// function Shape(color) {
//     this.color = color;
// }

// Shape.prototype.sayHello = function() {
//     console.log(`Hello, I am ${this.color}.`);
// };

class Shape {
    constructor(color) {
        this.color = color;
    }

    sayHello() {
        console.log(`Hello, I am ${this.color}.`);
    }
}

module.exports = Shape;