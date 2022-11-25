function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

// curried version:
function addThreeNumbers(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}

const cleanAddThreeNumbers = num1 => num2 => num3 => num1 + num2 + num3;

function neverendingAddition() {
  const args = [];
  const _curriedAdd = num => {
    args.push(num);
    console.log(args.reduce((acc, el) => acc + el));
    return _curriedAdd;
  }
  return _curriedAdd;
}