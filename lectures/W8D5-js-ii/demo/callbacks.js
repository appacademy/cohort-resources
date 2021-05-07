// Callbacks Demo

// let's take our working adder function from earlier and use it as our callback function
function adder() {
  let sum = 0;
  let args = Array.from(arguments);
  args.forEach((el) => sum = el + sum);

  return sum;
}

function calc(func, ...otherArgs) { // calc(adder, [1, 2, 3, 4, 5])
  let result = func(...otherArgs); // adder(1, 2, 3, 4, 5)
  console.log(result);
}

// calc(adder, 1, 2, 3, 4, 5);


