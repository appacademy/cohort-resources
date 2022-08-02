/* Function Demo */


/* Named functions */

// console.log(square(10)); // ?

function square(num) {
  // console.log("this", this);
  return num * num;
}

// console.log(square(2))




/* Function expresions */
// (Variable assigned functions / anonymous functions)
const feedMe = function(food) {
  return 'Thanks for the ' + food + '!';
};

// console.log(feedMe("banana"))




/* Es6 Arrow function expression */
const feedMe2 = (food) => {
  return 'Thanks for the ' + food + '!';
};

// Functionally same as above
// If numArgs === 1, no parens needed
// If function body === 1 line, no curlies, and implicit return
const feedMe3 = food => 'Thanks for the ' + food + '!'

const arrow = (arrowArg1, arrowArg2) => {
  // function body
};















/* Constructor functions */

// Always name constructor functions starting with a capital letter, PascalCase
// This is a convention that makes things much easier!
function User(username, age) {
  // these are like @ (instance vars) in Ruby
  // these are properties for the user object we are creating
  // what is this?
  this.username = username;
  this.age = age;
  console.log('this', this)
}

// What about "instance" methods?

User.prototype.greeting = function(){
    console.log("this", this);
    return `Hello, my name is ${this.username}!`
}

//can't use arrow function bc will have global context for this

// functionUser.prototype.greeting = () => {
//   console.log("this", this);
//   return `Hello, my name is ${this.username}!`
// }

// user = new User("Taylor", 34);