const Circle = require('./circle.js'); 
const Rectangle = require('./rectangle.js'); 
const Shape = require('./shape.js'); 

// need to put these on the window to access them in 
// Chrome's console

window.blueShape = new Shape('blue');
console.log(window.blueShape); 

window.greenCircle = new Circle("green", 4);
console.log(window.greenCircle); 

window.redRectangle = new Rectangle('red', 5, 10);
console.log(window.redRectangle); 


