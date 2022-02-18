function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

function addThreeNumbers(num1) {
  return function(num2){
    return function(num3){
      return num1 + num2 + num3;
    }
  }
}

const addThreeNumbersAgain = num1 =>{
  return num2 => {
    return num3 =>{
      return num1 + num2 + num3;
    }
  }
}

const addThreeNums = num1 => num2 => num3 => num1 + num2 + num3;


function continuousAdd(){
  const args = [];

  return function _curriedAdd(num){
    args.push(num);
    console.log(args.reduce((acc, el)=> acc + el));
    return _curriedAdd;
  }


}