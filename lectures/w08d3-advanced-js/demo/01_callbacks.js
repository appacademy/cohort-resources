const add = (x, y) => x + y;
// console.log('add:', add(3,4));

const subtract = function(x, y) {
  return x - y;
};
// console.log('subtract:', subtract(3, 4));

function multiply() {
  return function(x, y) {
    return x*y;
  }
};
// console.log('multiply:', multiply(3, 4));

const sqrt = x => Math.sqrt(x);
// console.log('sqrt:', sqrt(4));

const calculator = (operation, num1, num2) => {
  // debugger;
  return operation(num1, num2);
};

console.log(calculator(multiply(), 7, 3));