// ... === * (ruby)

function minFunc(nums) {
  console.log(Math.min(...nums));
}

// function minFunc() {
//   console.log(Math.min(...arguments));
// }

function adder2(startingNum, ...additionalNums) {
  debugger
  additionalNums.forEach((num) => {
    startingNum += num;
  })

  return startingNum;
}

// ...[[1,2,3], [4,5,6]] === [1,2,3], [4,5,6]