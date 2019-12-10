const Rectangle = require('./rectangle');
const Circle = require('./circle');


const c = new Circle("purple", 4);
const r = new Rectangle("blue", 2, 3);

console.log(c.color);
console.log(r.color);
c.move(1, 2);
c.move(5, 2);
c.move(5, -4);

r.move(3, 4);
c.sayRadius();
r.sayLengths();
c.sayLengths(); // Error!
