// Callbacks are functions which are passed UNINVOKED 
// as an argument to another function.
// "callback" refers to how we USE a function, 
// not how it behaves or how it's defined

const { default: test } = require("node:test");

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function sqrt(x) {
    return Math.sqrt(x);
}

function calculator(operationCallback, num1, num2) {
    return operationCallback(num1, num2);
}

function sumTwoOperations(cb1, cb2, num1, num2) {
    let result1 = cb1(num1, num2); // 17
    let result2 = cb2(num1, num2);
    return result1 + result2;
}

// console.log(calculator(add(1, 2)));



// How to test 1
// - open index.html
// - open dev tools
// - test

calculator(add, 1, 2)
calculator(subtract, 1, 2)
calculator(sqrt, 1, 2)
calculator(multiply, 1, 2)

// How to test 2
// open VS code terminal
// make sure you're in the correct directory
// node <filename>

console.log(sumTwoOperations(add, subtract, 7, 10))