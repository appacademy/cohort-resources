// Named Function


function square(num) {
  return num * num;
};

// console.log(square(3));

// Variable Assigned Anonymous Function

const squareMe = function (num) {
  return num * num;
};

//  ES6 syntax
const squareMe2 = (num) => {
  return num * num; // explicit
};

// or one line implicit return
const squareMe3 = (num) => num * num;

console.log(squareMe3(4));


// Constructor functions

function User(username, age) {
  // 'this' is like 'self' in ruby
  this.username = username;
  this.age = age;
};

// adding a function to the User prototype
User.prototype.sayHello = function () {           // no semi colon here
  console.log(`${this.username} says hello :O`);  // yes semi colon here
};

let mermike = new User("Mermike", 5000);