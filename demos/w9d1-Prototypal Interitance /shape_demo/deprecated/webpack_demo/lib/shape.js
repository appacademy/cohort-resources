class Shape {
  constructor(color) {
    this.color = color; 
  }

  sayHello() {
    console.log(`Hello, I am ${this.color}`);
  }
}

module.exports = Shape;