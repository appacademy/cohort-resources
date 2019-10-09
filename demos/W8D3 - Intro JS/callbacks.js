/* forEach */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


// We want to declare a named function that logs the argument
function logElement(el) {
  console.log(el);
};

const arr = [1, 2, 3];

// logElement is a callback for the forEach function
// callback means the parameter for a function is of type: function
// aka is logElement is a function
// forEach will call the logElement for us

// how do we call forEach???

arr.forEach(logElement);























// We can also provide an anonymous function as a callback, in place
// This is VERY common in JS
arr.forEach(function(el) {
  console.log(el + '!');
});

// Can we use an arrow function?

arr.forEach((el) => {
  console.log(el);
});



/* Writing our own function that has a callback (function) parameter */
function doMathWithNumber(num, func) {
  return func(num);
}
const square = (num) => {
  return num * num;
};

const ans1 = doMathWithNumber(4, square);

const ans2 = doMathWithNumber(4, (banana) => {
  return banana / banana;
});

console.log(ans1);
console.log(ans2);
