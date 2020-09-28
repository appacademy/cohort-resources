function callback(el) {
  console.log(el + '!');
}

const arr = [1, 2, 3];

// ES5
// arr.forEach(function(el) {
//   console.log(el + '?')
// });

//ES6
arr.forEach(el => console.log(el + '$'));


function add2(num) {
  return num + 2;
}

function doMathWithNumbers(number, func) {
  return func(number);
}

// console.log(doMathWithNumbers(9, add2));