//? Callbacks Demo

// let's take our working adder function from earlier and use it as our callback function
function adder() {
  let sum = 0;
  let args = Array.from(arguments);
  args.forEach((el) => sum = el + sum);

  return sum;
}

function calc(callback, ...otherArgs) {
  // console.log(callback);
  let result = callback(...otherArgs);
  console.log("result:", result);
}

calc(adder, 10, 20 , 30 , 40);