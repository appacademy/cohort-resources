/* forEach */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


// We want to declare a named function that logs the argument
function logElement(el) {
    // write code here!
    console.log(el);
};

const arr = [1, 2, 3];

// We want logElement to be a callback for the forEach function
// callback means the parameter for a function is of type: function
// logElement is a function
// forEach will call the logElement for us

// how do we call forEach???

// arr.forEach((el) => logElement(el));
// arr.forEach(el => logElement(el)) if args.length === 1. We can skip "()"
                                   //if inside we have a 1 liner, We can skip "{}"





// We can also provide an anonymous function as a callback, in place
// This is VERY common in JS


// arr.forEach(function(el){
//     console.log(el + "!");
// });











// Can we use an arrow function?


// arr.forEach(el => {
//     console.log(el);
// })











const powerOfTwo = function(el) {
    return el * el;
}

const decade = function(el) {
    return el * 10;
}

const century = function(el) {
    return el * 100;
}



/* Writing our own function that has a callback (function) parameter */
function doMathWithNumber(num, method) {
    // write code here!
    return method(num);
}

console.log(doMathWithNumber(5, powerOfTwo));
console.log(doMathWithNumber(5, decade));
console.log(doMathWithNumber(5, century));

