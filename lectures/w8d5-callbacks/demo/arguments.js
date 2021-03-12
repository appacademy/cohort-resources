// Arguments Demo

function adder() {
  let sum = 0;
  // debugger
  // const args = Array.prototype.slice.apply(arguments)
  // const args = [].slice.apply(arguments);
  // const args = Array.from(arguments);
  const args = [...arguments]; 
  args.forEach(num => {
    sum += num;
  });

  return sum;
};