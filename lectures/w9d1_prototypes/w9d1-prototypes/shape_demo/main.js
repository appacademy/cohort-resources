const Rectangle = require("./rectangle.js");
const Shape = require("./shape.js");
const Circle = require("./circle.js");

window.Shape = Shape;
window.Rectangle = Rectangle;
window.Circle = Circle;

window.blueRectangle = new Rectangle("blue", 1, 2);
