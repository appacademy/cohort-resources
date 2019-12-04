/* Function Demo */


/* Named functions */

console.log(square(10)); // can we access this function?

function square(num) {
  // debugger; 
  return num * num;
}

























// feedMe is not initialized when we use a function expression
// console.log(feedMe('cookies yum yum'))
/* Function expresions */
// (Variable assigned functions / anonymous functions)
const feedMe = function(food) {
  // debugger; 
  return 'Thanks for the ' + food + ' !';
};

console.log(feedMe('cookies yum yum'))

/* Es6 Arrow function expression */
const feedMe2 = (food) => {
  return 'Thanks for the ' + food + ' !';
};

// Functionally same as above
// If numArgs === 1, no parens needed
// If function body === 1 line, no curlies, and implicit return
// no "return" necessary
const feedMe3 = food => 'Thanks for the ' + food + ' !';
// let feedMe3 = ... is also okay (but const is safer)

const arrow = (arrowArg1, arrowArg2) => {
  // function body
};















/* Constructor functions */

// Always name constructor functions starting with a capital letter
// This is a convention that makes things much easier!
function User(username, age) {
  // these are like @ (instance vars) in Ruby
  // these are properties for the user object we are creating
  // what is this?
  // this is kind of like Ruby's self
  // when we create a new user instance, "this" refers to
  // the instance
  // debugger; 
  this.username = username;
  this.age = age;
  // Every single user instance will create a new function
  // this is very memory intensive  
  // this.greeting = function() {
  //   return "G'day mate!"
  // }
}

// What about "instance" methods?
User.prototype.greeting = function() {
  // debugger; 
  return `G'day mate! - says ${this.username}`; 
}

User.prototype.updateName = function(name) {
  this.username = name; 
}