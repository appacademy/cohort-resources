/* Function Demo */


/* Named functions */

//function declarations are hoisted- name and content 
console.log(square(10)) //?

function square(num) {
  // debugger
  //this is the window/global context  
  return num * num;
}

//def square(num)
//end


/* Function expresions */
// (Variable assigned functions / anonymous functions)
const feedMe = function (food) {
  return 'Thanks for the ' + food + ' !';
};
//feedMe('chocolate')
//function is anonymous

const feedMe2 = (food) => {
  return 'Thanks for the' + food + '!';
};

//ES6 FAT ARROW FUNCTION
//Still saving to variable
//=> replaces function keyword 
//feedMe2('tomato')


/* Es6 Arrow function expression */
// If numArgs === 1, no parens needed
// If function body === 1 line, no curlies, and implicit return
const feedMe3 = food => 'Thanks for the ' + food + ' !';

//interpolation `${food}`


/* Constructor functions */


function User(username, age) {
  this.username = username;
  this.age = age;

  // this.greet = () => 'hello there';
  //function saved to greet
}

// User.prototype.greet = () => 'hello there'; 
//more optimal 

User.prototype.greet = function() {
  // return this.username + 'says hello'
  return `${this.username} says hello`
  //this points to instance of user 
};

//this is kind of like self 
//the receiver 

//don't use ES6 Fat arrow to monkey patch: this will change

