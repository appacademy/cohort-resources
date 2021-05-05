/* forEach */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


/* We want to declare a named function that logs the argument */

function logElement(ele) {
    console.log(ele + '!');
}

const array = [1, 2, 3];

// array.forEach(logElement);


/* We can also provide an anonymous function as a callback, in place */
// This is VERY common in JS

// forEach takes a funciton (not the invocation of a function) as a argument
// do not invoke a function inside forEach

// array.forEach(function (el) {
//     console.log(el);
// });


/*  Can we use an arrow function?  */


// array.forEach(el => console.log(el));


/* Writing our own function that has a callback (function) parameter */

function doMathWithNumber(num, func) {
    return func(num);
}

console.log(doMathWithNumber(12, num => {
    return num * num * num;
}));

console.log(doMathWithNumber(12, function (num) {
    return num - 3;
}));