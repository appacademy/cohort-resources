// Rest and Spread Demo

function minFunc(nums) {
  // spread array as an argument
  // [1,2,3,4] becomes 1,2,3,4
  console.log(Math.min(...nums));
}

// minFunc([4,9,2,0,-5,22]);

function minFunc2() {
  // arguments is iterable - can use spread
  console.log(Math.min(...arguments));
}

// minFunc2(3,6,9);
// minFunc2(7,9,8,1,7,3,45,0);

// takes the 'rest' of the arguments - turns into array
function adder(startNum, ...otherNums) {
  console.log('rest paramaters: ', otherNums);
  console.log(`${startNum} is my starting sum`);
  otherNums.forEach(num => {
    console.log(num);
    startNum += num;
    console.log('new sum: ', startNum);
  })
  return startNum;
}

let sum = adder(1,2,3,4,5);
