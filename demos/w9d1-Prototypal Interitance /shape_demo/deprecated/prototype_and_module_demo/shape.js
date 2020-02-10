class Shape {
  constructor(color) {
    this.x = 0;
    this.y = 0;
    this.color = color;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }
}

module.exports = Shape;