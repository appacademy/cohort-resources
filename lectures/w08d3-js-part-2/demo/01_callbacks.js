function add() {
  return function(x,y) {
    return x + y;
  }
};

const subtract = function(x,y) {
  return x - y;
};

const multiply = () => (x,y) => {
  return x*y;
};

const sqrt = x => Math.sqrt(x);

function calculator(operation, num1, num2) {
  return operation(num1, num2);
};

