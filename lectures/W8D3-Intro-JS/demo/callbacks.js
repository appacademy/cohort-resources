// forEach expects a callback as its first argument,
// that callback should take in an element as its first argument

// RUBY
// [1,2,3].each do |ele|
    // puts ele + '!'
// end

const logger = function(ele, idx) {
    console.log(ele + '!');
    console.log(idx);
    // console.log(arr);
}

const arr = ['a','b','c'];
// arr.forEach(logger);


// defining a callback in line
// ES5
// arr.forEach(function(ele) {
//     console.log(ele.toUpperCase());
// })

// ES6
// arr.forEach(ele => console.log(ele.toUpperCase()))


// define a function that takes in a callback
function doMathWithNumber(num, cb1, cb2, cb3) {
    debugger;
    console.log(cb1(num));
    console.log(cb2(num));
    console.log(cb3(num));
}

// doMathWithNumber(
//     5,
//     num => num + 100,
//     num => num * num,
//     num => num - 100
// );