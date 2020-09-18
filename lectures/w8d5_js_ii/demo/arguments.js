// Arguments Demo

// this is the working adder function
function adder(arg1) {
  console.log(arg1)
  console.log(arguments)
  let sum = 0;
  let args = Array.from(arguments);
  // let args = Array.prototype.slice.apply(arguments);
  // let args = [].slice.apply(arguments);
  // let args = [...arguments] (super secret bonus option) wont go into this until explain spread and rest;
  args.forEach((el) => sum = el + sum);

  return sum;
}

adder(1,2,3,4)