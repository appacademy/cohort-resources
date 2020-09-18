// Callbacks Demo

// let's take our working adder function from earlier and use it as our callback function
function adder() {
  let sum = 0;
  let args = Array.from(arguments);
  args.forEach((el) => sum = el + sum);

  return sum;
}

function calcin(banana,...otherArgs) {
  let res = banana(...otherArgs)
  console.log(res)
  return res
}

console.log(calcin(adder,3,4,5,6,7))

console.log(calcin((...nums) => {
  let sum = 1
  nums.forEach(num => sum *= num)
  return sum
},3,4,5,6))