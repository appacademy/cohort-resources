// Bad ES5
// Each time you instantiate a new person, you recreate birthday function 

// function Person() {
//     this.age = 0; 

//     this.birthday = function() {
//         this.age++; 
//     }
// }

// Good ES5

// performance increase by setting birthday function directly on the prototype 
// function Person() {};
// Person.prototype.age = 0; 
// Person.prototype.birthday = function() {
//     this.age++; 
// }

// ES6
class Person {
    constructor(age = 0) {
        this.age = age; 
    }

    birthday() {
        this.age++; 
    }

    static randomAge() {
        return Math.floor(Math.random()*100); 
    }
}



let p = new Person(); 
p.birthday(); 
p.birthday(); 
console.log(p.age); 

let p2 = new Person(); 
p2.birthday(); 
p2.birthday(); 
p2.birthday(); 
console.log(`p2's age is ${p2.age}`);
console.log(`Person random age ${Person.randomAge()}`)