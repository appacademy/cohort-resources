console.log('ARGuments . . . . Shiver me timbers')

function adder() {
  // console.log(arguments);
  // let args = Array.from(arguments);
  let args = [...arguments];
  let sum = 0;

  args.forEach((num) => {
    sum += num;
  })

  return sum;
}

function multiplier() {
  // let args = Array.from(arguments);
  let total = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    total *= arguments[i];
  }

  return total
}


function calc(cb, ...everythingElse) {
  console.log(arguments)
  let result = cb(...everythingElse);

  return result;
}
