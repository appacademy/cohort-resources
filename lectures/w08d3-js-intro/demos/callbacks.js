/* forEach */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


// We want to declare a named function that logs the argument
function logElement(el) {
  console.log(el)
};

const arr = [1, 2, 3];

// arr.forEach(ele => {
//   console.log(ele)
// })

// arr.forEach(logElement)

// logElement is a callback for the forEach function
// callback means the parameter for a function is of type: function
// logElement is a function
// forEach will call the logElement for us

// how do we call forEach???



















// We can also provide an anonymous function as a callback, in place
// This is VERY common in JS

// arr.forEach(function(el) {
//   console.log(el + '!');
// });









// Can we use an arrow function?

// arr.forEach(function(el) {
//   console.log(el + '!!!');
// });














const timesTwo = function(el) {
    console.log(el * 2)
}

/* Writing our own function that has a timesTwo (function) parameter */
function doMathWithNumber(num, banana) {
    banana(num)
}

doMathWithNumber(5, timesTwo);