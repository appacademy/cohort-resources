function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
};

// function curriedAddThreeNumbers(num1) {
//   return function(num2) {
//     return function(num3) {
//       return num1 + num2 + num3;
//     }
//   }
// };

const curriedAddThreeNumbers = num1 => num2 => num3 => num1 + num2 + num3;

Function.prototype.myCurry = function(numArgs) {
  let args = [];
  let curriedFunction = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      // invoke original function with args array
    } else {
      // recursively return curriedFunction
    }
  }
};