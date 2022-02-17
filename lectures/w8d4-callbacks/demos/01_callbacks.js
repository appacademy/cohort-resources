// - Callbacks are functions which are passed UNINVOKED as an argument to 
//   another function.
// - "callback" refers to how we USE a function, 
// - not how it behaves or how it's defined


// Here are some calculator functions 

function add(x, y) {
    // debugger
    return x + y;
}

// subtract
function subtract(x, y) {
    return x - y;
}

// multiply
function multiply(x, y) {
    return x * y;
}

// sqrt
function sqrt(x) {
    return Math.sqrt(x);
}

// --------------------------------------------------------------------------

// Now lets make a calculator that can take in any of the above functions 
// and two numbers

// calculator
function calculator(operationalCallback, num1, num2) {
    // debugger
    return operationalCallback(num1, num2);
}

// sumTwoOperations:

function sumTwoOperations(cb1, cb2, num1, num2) {
    let a1 = cb1(num1, num2);
    let a2 = cb2(num1, num2);

    return a1 + a2
}
