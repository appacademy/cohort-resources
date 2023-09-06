/* Function Demo */


/* Named functions */

// console.log(square(10)); // ?

function square(num) {
  return num * num;
}



























/* Function expresions */
// (Variable assigned functions / anonymous functions)
const feedMe = function(food) {
  return 'Thanks for the ' + food + ' !';
};























/* Es6 Arrow function expression */
const feedMe2 = (food) => {
  return `Thanks for the ${food}!`;
};



const feedMe99 = (food) => `Thanks for the ${food}!`

// console.log(feedMe99())

// let greet;
// console.log(greet)



// Functionally same as above
// If numArgs === 1, no parens needed
// If function body === 1 line, no curlies, and implicit return
const feedMe3 = food => 'Thanks for the ' + food + ' !';

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
  this.username = username;
  this.age = age;
}

User.prototype.greet = function(name){
  console.log(`${this.username} greets ${name}`)
}


const u1 = new User("paulo", "30");

(function(){
  console.log(1)
}());

let arrObj = {
  1: 2,
  2:99,
  3: 1099
};

// [2]

u1.greet("krikor")

// console.log(u1)

// class ES6User{
//   constructor(username, age){
//     this.username = username;
//     this.age = age;
//   }

//   greet(name){
//     console.log(`${this.username} greets ${name}`)
//   }
// }

// const u2 = new ES6User("bocanegra", "30")
// console.log(u2)

// What about "instance" methods?

