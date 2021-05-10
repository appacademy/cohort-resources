function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

function addThreeNumbers(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}

const addThreeNumbersAgain = num1 => {
  return num2 => {
    return num3 => {
      return num1 + num2 + num3;
    };
  };
};

const addThreeNumbersYetAgain = num1 => num2 => num3 => {
  return num1 + num2 + num3;
}; 


function continuousAdd() {
  const args = [];
  return function _curriedAdd(num) {
    // debugger;
    args.push(num);
    let currentSum = args.reduce((acc, ele) => acc + ele);
    // console.log(currentSum);
    // return _curriedAdd;
    return currentSum;
  };
}