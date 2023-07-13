

function boringAddThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}
boringAddThreeNumbers(1,2,3)
  
  // curried version:
function addThreeNumbers(num1) {
    return function(num2) {
        return function(num3) {
          return num1 + num2 + num3;
        };
    };
}

const addThreeNumbers = (num1) => (num2) => (num3) => num1 + num2 + num3;

addThreeNumbers(1)(2)(3);


Function.prototype.myCurry = function(numArgs){ //numArgs is the number of arguments we want to collect

    let args = []; //array for storing arguments
    const func = this;
    return function _curriedFunction(arg){
        //collect argument
        args.push(arg);
        if(args.length === numArgs){
            //invoke orignal function with args array now we have all the args we need
        } else {
            //recursively return the _curriedFunction uninvoked
        }
    }

}

function sum(...nums){
    return nums.reduce((acc, num) => acc + num);
}

sum.myCurry(3)(1)(2)(3)