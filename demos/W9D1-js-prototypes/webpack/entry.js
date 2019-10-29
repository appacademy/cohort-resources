const Cat = require('./cat.js'); 
const Dog = require('./dog.js'); 

const mimi = new Dog('mimi', 'ball'); 
const pinky = new Cat('pinky'); 

window.mimi = mimi; 
window.pinky = pinky; 