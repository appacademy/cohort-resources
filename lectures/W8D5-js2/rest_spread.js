//? Spread and Rest operator (...)

function minFunc(nums) {
  console.log(Math.min(...nums))
};

// minFunc([1,2,3]);

function minFunc2() {
  console.log(Math.min(...arguments));
};

// minFunc2(25, 4, 8);


function adder(startingNumber, ...otherNums) {
  let sum = startingNumber;
  console.log(`${startingNumber} is my starting number`);
  console.log(otherNums);
  otherNums.forEach((num) => {
    sum = sum + num;
  });

  return sum;
}

console.log(adder(10, 3, 4, 6, 4));