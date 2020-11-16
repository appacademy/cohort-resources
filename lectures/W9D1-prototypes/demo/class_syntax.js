// function Shape(color) {
//     this.color = color;
//     let arr = new Array(1000000);
//     arr.forEach(ele => console.log(ele))
// }

// Shape.prototype.sayHello = function () {
//     console.log(`Hello, I am a ${this.color} shape.`)
// }

class Shape {
    constructor(color) {
        this.color = color;
        let arr = new Array(1000000);
        arr.forEach(ele => console.log(ele))
    }

    sayHello() {
        console.log(`Hello, I am a ${this.color} shape.`)
    }
}

// function Rectangle(color, width, length) {
//     // this.color = color;
//     Shape.call(this, color);
//     // Shape.apply(this, [color]);
//     this.width = width;
//     this.length = length;
// }

// Rectangle.prototype.area = function () {
//     return this.width * this.length;
// }

class Rectangle extends Shape {
    constructor(color, width, length) {
        // Shape.call(this, color);
        super(color);
        this.width = width;
        this.length = length;
    }

    area() {
        return this.width * this.length;
    }
}

// function Circle(color, radius) {
//     // this.color = color;
//     Shape.call(this, color);
//     this.radius = radius;
// }

class Circle extends Shape {
    constructor(color, radius) {
        // Shape.call(this, color);
        super(color);
        this.radius = radius;
    }

    sayHello() {
        console.log("Hi, I am a circle.");
    }
}

const redRectangle = new Rectangle('red', 10, 15);
const pinkCircle = new Circle('pink', 5);