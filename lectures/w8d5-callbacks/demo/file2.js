console.log('this is the top of file 2!');

console.log(require('./file1.js'));

const Tea = require('./file1.js').Tea;
const breakfastTea = require('./file1.js').breakfastTea;
const Smoothie = require('./file1.js').Smoothie;

console.log('this is after the importing!');

const greenTea = new Tea("Green");
greenTea.func();

const bigSmoothie = new Smoothie(1000);
console.log(bigSmoothie);

breakfastTea.func();
console.log('this is the end of file TWO!')