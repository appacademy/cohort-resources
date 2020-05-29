console.log('Classes are cool!');

//ES5

// function Person() {
//   this.age = 0;
// }

// Person.prototype.birthday = function () {
//   this.age++
// }

// Person.randomAge = function () {

// }

//ES6

class Person {

  constructor(age = 0) {
    this.age = age;
  }

  static randomAge()  {
    return Math.floor(Math.random() * 100)
  }

  birthday() {
    this.age++;
  }
  
}