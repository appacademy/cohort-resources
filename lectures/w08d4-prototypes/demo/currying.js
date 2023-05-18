function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
};

boringAddThreeNumbers(1,2,3);


function curriedAddThreeNumber(num1){
  return function(num2){
    return function(num3){
      return num1 + num2 + num3;
    }
  }
}
curriedAddThreeNumber(1)(2)(3);

let curriedAddThreeNumber = num1 => num2 => num3 => num1 + num2 + num3;


function continuousAdd(numArgs){
  const args = [];
  return function _curry(num){
    args.push(num);
    if(numArgs === args.length){
      return args.reduce((acc, el) => acc + el )
    } else {
      return _curry;
    }
  }
}
console.log(continuousAdd(4)(1)(2)(3)(5))