// Arguments Demo

// this is the working adder function
function adder() {
  let sum = 0;
  // debugger;
  // let args = Array.from(arguments); // this is ES6 syntax
  // let args = Array.prototype.slice.apply(arguments); // this is ES5 syntax
  // let args = [].slice.apply(arguments); // this is ES5 syntax
  let args = [...arguments] // (super secret bonus option) wont go into this until explain spread and rest;
  args.forEach((el) => sum = el + sum);

  return sum;
}