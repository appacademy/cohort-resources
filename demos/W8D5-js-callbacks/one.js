console.log('This is the top of one.js!'); 

class Drink {
    constructor(type, size) {
        this.type = type; 
        this.size = size; 
    }
}

const coffee = new Drink('mocha', 'large'); 
const smoothie = new Drink('fruit', 'medium'); 
const tea = new Drink('english breakfast', 'small'); 

console.log('this is before my exports'); 
module.exports = {
    coffee, 
    smoothie, 
    tea, 
    Drink 
}
console.log('this is the bottom of one.js'); 
