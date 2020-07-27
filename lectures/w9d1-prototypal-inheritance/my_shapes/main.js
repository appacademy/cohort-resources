const rectangles = require('./rectangle.js');
const Circle = require('./circle.js');
// debugger;

const yellowRectangle = new rectangles.Rectangle('yellow', 5, 6);
const redCircle = new Circle('red', 5);

window.yellowRectangle = yellowRectangle;
window.redCircle = redCircle;