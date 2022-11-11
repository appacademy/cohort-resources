/* forEach */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


// We want to declare a named function that logs the argument
function logElement(el) {
  console.log(el * 2)
};



const arr = [1, 2, 3];

// logElement is a callback for the forEach function
// callback means the parameter for a function is of type: function
// logElement is a function
// forEach will call the logElement for us

// how do we call forEach???

function doubler(el) {
  el * 2
}

function decade(el) {
  el * 10;
}


function century(el) {
  el * 100;
}
arr.forEach((el) => doubler(el))



//  const fn =  (el)=> { logElement(el)}

// ES6 syntax

arr.forEach((el)=> console.log(el))


arr.forEach(function (el) {
  console.log(el * 10);
})














// We can also provide an anonymous function as a callback, in place
// This is VERY common in JS

// arr.forEach(function(el) {
//   console.log(el + '!');
// });









// Can we use an arrow function?

// arr.forEach(function(el) {
//   console.log(el + '!!!');
// });










// demo

