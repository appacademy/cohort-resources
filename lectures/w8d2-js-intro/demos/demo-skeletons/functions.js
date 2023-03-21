// /* Function Demo */


// /* Named functions */

// // console.log(square(10)); // ?

// // // function square(num) {
// // //   return num * num;
// // // }



// // function square(num){
// //   return num * num;
// // }

























// /* Function expresions */
// // (Variable assigned functions / anonymous functions)
// // const feedMe = function(food) {
// //   return 'Thanks for the ' + food + ' !';
// // };



// // console.log(feedMe("bagels"))
// // const feedMe = function(food){
// //   return `thanks for the ${food}`;
// // }






















// /* Es6 Arrow function expression */
// const feedMe2 = (food) => {
//   return 'Thanks for the ' + food + ' !';
// }


// // this has binding speical powers
// const hungry = (food)=>{
//   // logic
// }




// // Functionally same as above
// // If numArgs === 1, no parens needed
// // If function body === 1 line, no curlies, and implicit return
// const feedMe3 = food => 'Thanks for the ' + food + ' !';






// const arrow = (arrowArg1, arrowArg2) => {
//   // function body
// };















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

User.prototype.greet = function(){
  return this;
}

let userOne = new User("Diego", 30);
let userTwo = new User("Taylor", 33);



console.log(userTwo.greet())




// class User {
//   greet(){

//   }
// }






// when mokneyu patch NO fat arrow 
// Array.prototype.MyForEach = function(){

// }


// What about "instance" methods?
