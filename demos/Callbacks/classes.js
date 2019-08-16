// Bad es5
// function Person() {
//     this.age = 0;

//     this.birthday = function() {
//         this.age++;
//     }
// }

// Good es5
// function Person(){};
// Person.prototype.age = 0;
// Person.prototype.birthday = function() { 
//     this.age++; 
// };



// es 6
class Person { // no parens

    constructor(age = 0) {
        this.age = age;
    }

    growUp() {
        this.age++;
    }

    static randomNumber() {
        return Math.random() * 10; // returns val from 0 - 1 w/ no arg
    }
    
};

let dean = new Person();
dean.growUp();
dean.growUp(); 
console.log("Dean: " + dean.age); 

let sally = new Person();
sally.growUp();
sally.growUp();
sally.growUp();
console.log("Sally: " + sally.age);

console.log(Person.randomNumber());