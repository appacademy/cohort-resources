// named function
function square(num) {
  debugger
  return num * num
}

// console.log(square(6));


// function expression || variable assigned function
// ES5
// const feedMe = function(food) {
//   return `Thanks for the ${food}!`
// }


// ES6 
// const feedMe = (food) => {
//   return `Thanks for the ${food}!`
// }

// const feedMe = (food) => `Thanks for the ${food}!`

// console.log(feedMe('Banana'));


function User(username, age) {
    this.username = username;
    this.age = age;
    // this.greet = () => 'Hello There!'
    // this.greet = 'banana';
}

User.prototype.greet = function() {
  debugger
  return `Hello There! My name is ${this.username}`
}

// let joe = new User('Joe', 100)



