/* Function Demo */


/* Named functions */


function square(num) {
  return num * num;
  
}

square(1989);
// when something is invoked function style the context becomes the window
// console.log(square(10)); 



// // named
// function doubler(num){
//   return num * 2
// }



// // functional expresssion 
// const doubler = function (num) {
//   return num * 2;
// }

// // functional expression in Es6 syntax 
// const doubler = (num) => {
//   num * 2
// }

// // constructor function 
// function PopStar(name, albums) {
//   this.name = name;
//   this.albums = albums
// }


















/* Function expresions */
// (Variable assigned functions / anonymous functions)
const feedMe = function(food) {
  return 'Thanks for the ' + food + ' !';
};






















/* Es6 Arrow function expression */
const feedMe2 = (food) => {
  return 'Thanks for the ' + food + ' !';
};

// Functionally same as above
// If numArgs === 1, no parens needed
// If function body === 1 line, no curlies, and implicit return
const feedMe3 = food => 'Thanks for the ' + food + ' !';

const arrow = (arrowArg1, arrowArg2) => {
  // function body
};






// constructor functions







// Always name constructor functions starting with a capital letter
// This is a convention that makes things much easier!
function Car(make, model, year) {
  // these are like @ (instance vars) in Ruby
  // these are properties for the car object we are creating
  // what is this?
  this.make = make;
  this.model = model;
  this.year = year;
  
  console.log(this)
}


// instance method

Car.prototype.isNew = function () {
  if (this.year >= 2020) {
    console.log(this)
    return true
  }
  return false 
}



const car1 = new Car("tesla", "model-3", 2020);
// const car2 = new Car("honda", "civic", 1999);

// What about "instance" methods?

console.log(car1.isNew())
// console.log(car2.isNew())
// console.log(car1.make)
// console.log(Car.prototype)

