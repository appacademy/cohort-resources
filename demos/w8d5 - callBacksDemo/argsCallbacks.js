function adder() {
    // arguments is a collection of all the arguments
    // it's array-like, not an actual array!
    // let args = [arguments];  
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

function calc(func, ...everythingElse) {
    // everythingElse right here is an array
    let result = func(...everythingElse);
    return result;
}

