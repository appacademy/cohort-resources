function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

// curried add 3 numbers
function addThreeNumbers(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
};

const addThreeNumsAgain = num1 => {
  return num2 => {
    return num3 => {
      return num1 + num2 + num3;
    }
  }
}

const addThreeNumsYetAgain = num1 => num2 => num3 => num1 + num2 + num3;

// KNOW THIS TOO!!! UNDERSTAND IT!!!


function continuousAdd() {
  // we need to keep all elements that we collect, so let's make an array
  const args = [];
  // now let's write an inner function that is going to close over that args array 
  // and accept a new with each invocation
  return function _curiedAdd(num) {
    // we add the number to our args array that we closed over
    args.push(num);
    // show what our current total is
    // console.log(args);
    console.log(args.reduce((acc, el) => acc + el));
    // for convience we always return this inner function
    return _curiedAdd; // is this recursion? we're not calling, we're returing
  };
};
