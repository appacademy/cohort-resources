function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

// function addThreeNums(num1){
//   return function(num2){
//     return function(num3){
//       return num1 + num2 + num3
//     }
//   }
// }

// function addThreeNums(num1){
//   return (num2) => {
//     return (num3) => {
//       return num1 + num2 + num3
//     }
//   }
// }

// const bestAddThreeNums = num1 => num2 => num3 => num1 + num2 + num3;

// console.log(boringAddThreeNumbers(1,2,3))
// console.log(addThreeNums(1)(2)(3)) 

// let step1 = addThreeNums(1)
// let step2 = step1(2)
// let step3 = step2(3)

// console.log(step3)

function continuosAdd(){
  const args = [];

  return function _curriedAdd(num){
    args.push(num);
    console.log(args.reduce((acc, ele) => {
      return acc + ele;
    }));
    return _curriedAdd; // without, the next time we invoke our curriedAdd, there wont be a return value.
  };
}

// console.log(continuosAdd);
// console.log(calculator1)
// calculator1 = calculator1(2)
// console.log(calculator1)
let calculator1 = continuosAdd();
let calculator2 = continuosAdd();

calculator1(1)
calculator1(2)
calculator1(3)
console.log("Calc 2 starts below")
calculator2(1)
calculator2(2)



// calculator(2)
// calculator(3)
// calculator(20)
// console.log(calculator)
