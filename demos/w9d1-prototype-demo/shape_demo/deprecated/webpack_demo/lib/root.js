// Sometimes call app.js, index.js, aka your starting point

const Shape = require('./shape');
const Rectangle = require('./rectangle');
const Circle = require('./circle');

window.blueShape = new Shape("blue");
window.yellowRectangle = new Rectangle("yellow", 6, 3);
window.greenCircle = new Circle("green", 25);
window.aj = "Aj is really cool";