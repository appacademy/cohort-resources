/* forEach */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


// We want to declare a named function that logs the argument
function logElement(el) {
  // write code here!
  console.log(el + '!')
};

const arr = [1, 2, 3];

// logElement is a callback for the forEach function
// callback means the parameter for a function is of type: function
// logElement is a function
// forEach will call the logElement for us

// how do we call forEach???

// arr.forEach(logElement)

// arr.forEach((ele) => {
//   console.log(ele + '!')
// })

// arr.forEach(function(ele){
//   console.log(ele + '!')
// })

// arr.each {|ele| puts ele + '!'} RUBY WAY



















// We can also provide an anonymous function as a callback, in place
// This is VERY common in JS

// arr.forEach(function(el) {
//   console.log(el + '!');
// });









// Can we use an arrow function?

// arr.forEach((el) => {
//   console.log(el + '!!!');
// });














const callback = function(el) {
  console.log(this)
  // console.log(el * el)
}

/* Writing our own function that has a callback (function) parameter */
function doMathWithNumber(num, callback) {
  // write code here!
  return callback(num)
}

doMathWithNumber(5, callback);

