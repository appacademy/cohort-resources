function Shape(color) {
    this.color = color;
    let arr = new Array(1000000);
    arr.forEach(ele => console.log(ele))
}

Shape.prototype.sayHello = function() {
    console.log(`Hello, I am a ${this.color} shape.`)
}

function Rectangle(color, width, length) {
    // this.color = color;
    Shape.call(this, color);
    // Shape.apply(this, [color]);
    this.width = width;
    this.length = length;
}

function Circle(color, radius) {
    // this.color = color;
    Shape.call(this, color);
    this.radius = radius;
}

// Naive solution 1
// dont do this, it can potentially slow down your code
// Rectangle.prototype.__proto__ = Shape.prototype;

// Naive solution 2
// dont do this, it makes it so any methods defined on Child.prototype will now also be on Parent.prototype
// which means that circles will have access to all of rectangle's methods, and the other way around
// Rectangle.prototype = Shape.prototype;
// Circle.prototype = Shape.prototype;

// Naive solution 3
// dont do this, because the constructor function of the Parent class can be computationally expensive
// Rectangle.prototype = new Shape();
// Circle.prototype = new Shape();


// Correct solution 1
// Surrogate pattern
function inherits(childClass, parentClass) {
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
}

// inherits(Rectangle, Shape);
// inherits(Circle, Shape);

// Correct solution 2
// Object.create
// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

Rectangle.prototype.area = function() {
    return this.width * this.length;
}

const redRectangle = new Rectangle('red', 10, 15);
const pinkCircle = new Circle('pink', 5);

// const blueShape = new Shape('blue');