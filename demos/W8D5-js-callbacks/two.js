console.log('This is the top of two.js!');

const Drink = require('./one.js').Drink; 
const randomStuff = require('./one.js'); 
const tea = require('./one.js').tea; 

console.log('this is after importing'); 

const cocktail = new Drink('long island', 'XL');
console.log(tea.size);
console.log(randomStuff.coffee.size);
console.log(randomStuff.smoothie.type);
console.log(randomStuff.smoothie.size);
console.log('this is the bottom of two.js');


