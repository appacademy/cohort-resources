function boringAddThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

function addThreeNums(num1){
    return function(num2){
        return function(num3){
            return num1 + num2 + num3
        }
    }
}

const addThreeNumsES6 = (num1) => {
    return (num2) => {
        return (num3) => {
            return num1, + num2 + num3
        }
    }
}

const fancyAddThreeNums = (num1) => (num2) => (num3) => (num1 + num2 + num3);

const fancyAddThreeNums2 = num1 => num2 => num3 => num1 + num2 + num3;

// console.log(fancyAddThreeNums2(1)(2)(3))
// console.log(fancyAddThreeNums2(1))
// let step1 = fancyAddThreeNums2(1)
// let step2 = step1(2)
// let step3 = step2(3)
// console.log(step3)

function continuousAdd(cb){
    const args = [];
    return function _curriedAdd(num){
        args.push(num);
        console.log(args.reduce((acc,el)=>{
            return acc + el
        }))
        return _curriedAdd;
    }
}


// console.log(continuousAdd()(2))
const calculator = continuousAdd()
const calculator2 = continuousAdd()
calculator(1)
calculator(2)
calculator(3)
calculator2(100)

