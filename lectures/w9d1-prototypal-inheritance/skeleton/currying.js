function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

function addThreeNumbers(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    }
  }
} 

const coolerAddThreeNumbers = num1 => {
  return num2 => {
    return num3 => {
      return num1 + num2 + num3;
    }
  }
}

const superCoolestAddThreeNumbers = num1 => num2 => num3 => num1 + num2 + num3;
// Don't try this in Ruby, folks

function continuousAdd() {
  const args = [];
  return function _curriedAdd(num) {
    args.push(num);
    console.log(args.reduce((acc, el) => acc + el));
    return _curriedAdd;
    // Not recursive because we're returning an uninvoked function
  }
}