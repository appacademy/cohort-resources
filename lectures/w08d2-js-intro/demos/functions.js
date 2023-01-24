/* Function Demo */


/* Named functions */

console.log(square(10)); // ?

function square(num) {
  return num * num;
}

// function name(args){
//   // do the thing
// }



























/* Function expresions */
// (Variable assigned functions / anonymous functions)
const feedMe = function(food) {
  return 'Thanks for the ' + food + ' !';
};

// feedMe("bread")

// IIFE => Immediately Invoked Function Expression!
// (function(food) {
//   return 'Thanks for the ' + food + ' !';
// })()





















/* Es6 Arrow function expression */
const feedMe2 = food => {
  return 'Thanks for the ' + food + ' !';
};
// const feedMeES5 = function(food){
//   return 'Thanks for the ' + food + ' !';
// };

const feedMe2andAHalf = food => `Thanks for the ${food}`;
// feedMe2andAHalf("bread")

// Functionally same as above
// If numArgs === 1, no parens needed
// If function body === 1 line, no curlies, and implicit return
const feedMe3 = food => 'Thanks for the ' + food + ' !';

// const arrow = (arrowArg1, arrowArg2) => {
//   // function body
// };















/* Constructor functions */

// Always name constructor functions starting with a capital letter
// This is a convention that makes things much easier!
// A contructor function is like a Ruby Class. BUT THERE ARE NOT CLASSES IN JS, IT IS ALL SYNTACTIC SUGAR

function User(username, age) {
  // these are like @ (instance vars) in Ruby
  // these are properties for the user object we are creating
  // what is this?
  this.username = username;
  this.age = age;
}


// const user1 = new User("paulo", 29)
// console.log(user1)
// What about "instance" methods?


User.prototype.changeMe = function(){
  console.log(this.username)
}

// User.prototype.changeMe = () => {
//   console.log(this)
// }

function addNums(num1, num2){
  console.log(this)
  return num1 + num2
}

// addNums(2,3)
