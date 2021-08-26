// Callbacks are functions which are passed UNINVOKED 
// as an argument to another function.
// "callback" refers to how we USE a function, 
// not how it behaves or how it's defined

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function calculator(operationCallback, num1, num2) {
    debugger;
    return operationCallback(num1, num2);
}


// calculator(add(3,4), 3, 4);

console.log(calculator(add, 3, 4)); // 7
console.log(calculator(subtract, 3, 4)); // -1
console.log(calculator(multiply, 3, 4)); // 12



