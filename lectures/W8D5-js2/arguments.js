//? Arguments Demo

function adder() {
  let sum = 0;
  console.log(arguments);
  let args = Array.from(arguments);
  // console.log(args);
  args.forEach((num) => {
    sum = sum + num;
  })

  return sum;
}

console.log(adder());