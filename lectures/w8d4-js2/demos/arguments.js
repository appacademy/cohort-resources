// Arguments Demo

// this is the working adder function
function adder() {
  let sum = 0;

  // arguments keyword - arraylike
  let args = Array.from(arguments);
  console.log(arguments[1]);
  console.log(arguments.length);
  console.log(arguments);
  console.log(args);
  args.forEach((el) => sum = el + sum);

  return sum;
}

let sum = adder(1,2,3,4);
console.log(sum);






























// let args = Array.from(arguments);
  // let args = Array.prototype.slice.apply(arguments);
  // let args = [].slice.apply(arguments);
  // let args = [...arguments] (super secret bonus option) wont go into this until explain spread and rest;