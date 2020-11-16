function boringAddThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

// a curried version
function addThreeNumbers(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        };
    };
}

// fancy ES6 way 
let funAddThreeNumbers = num1 => num2 => num3 => num1 + num2 + num3;


// more dynamic curry
function continuousAdd() {
    // purpose of this array is to hold all of our continuous arguments
    let args = [];

    return function _curriedAdd(num) {
        args.push(num);
        let currentSum = args.reduce((acc, ele) => acc + ele);
        console.log(args.length);
        // return currentSum;
        return _curriedAdd;
    };
}