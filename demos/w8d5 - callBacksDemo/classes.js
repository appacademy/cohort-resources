// Example 1 - ES5


// function Person() {
//   this.age = 0;

// //   this.birthday = function() {
// //     this.age++;
// //   };
// }

// function Person() {};

// Person.prototype.age = 0;

// Person.prototype.birthday = function() {
//   this.age++;
// };


// Example 2 - ES6

class Person {
    constructor(age = 0) {
        this.age = age;
    }

    birthday() {
        this.age++;
    }
    
    // def self.random_age is the ruby version
    static randomAge() {
        return Math.floor(Math.random()*100);
    }
}


