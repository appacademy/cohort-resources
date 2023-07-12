function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
};

function curriedAddThreeNumbers(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    }
  }
};

curriedAddThreeNumbers(1)(2)(3)

// const curriedAddThreeNumbers = num1 => num2 => num3 => num1 + num2 + num3;

Function.prototype.myCurry = function(numArgs) {
  //the inner functions will close over numArgs and args variables
  let args = [];
  const that = this;
  return function curriedFunction(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      // invoke original function with args array now that we have all needed arguments
      return that.apply(null, args)
    } else {
      // recursively return curriedFunction(uninvoked)
      return curriedFunction;
    }
  }
};

const sumFunc = (...args)=>{
  return args.reduce((acc, num) => acc + num)
}

// console.log(sumFunc.myCurry(3)(1)(2)(3))