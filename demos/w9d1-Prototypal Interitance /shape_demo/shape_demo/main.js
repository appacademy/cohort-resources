const Shape = require("./shape.js");
const Rectangle = require("./rectangle.js");
const Circle = require("./circle.js");

//import Rectangle from './rectangle.js'; //ES6
import { sayHello, sayBye } from './rectangle.js' //importing specific functions 

const blueShape = new Shape('blue');
const yellowRectangle = new Rectangle('yellow', 10, 20);
const greenCircle = new Circle('green', 5);

window.yellowRectangle = yellowRectangle;
window.blueShape = blueShape;
window.greenCircle = greenCircle; 