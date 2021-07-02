function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
};

function addThreeNumbers(num1) {
  return function(num2) {
    return function (num3) {
      return num1 + num2 + num3;
    }
  }
}

const addThreeNumsAgain = num1 => (
  num2 => {
    return num3 => {
      return num1 + num2 + num3;
    }
  }
)

const addThreeNumsAgain2 = num1 => num2 => num3 => num1 + num2 + num3;

function continuousAdd() {
  // collect args
  const args = [];
  // return a function that will close over the array, and accept a number
  // each time its invoked
  return function _curriedAdd(num) {
    args.push(num);
    let result = args.reduce((acc, el) => acc + el);
    console.log(result);
    return _curriedAdd; // very important NOT to invoke here
  }
}