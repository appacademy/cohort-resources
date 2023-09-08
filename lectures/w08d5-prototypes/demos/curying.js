function boringAddThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

function addThreeNumbers(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        };
    };
}

const addThreeNumbersES6 = (num1) => {
    return (num2) => {
        return (num3) => {
            return num1 + num2 + num3
        }
    }
}

const cleanAddThreeNums = num1 => num2 => num3 => num1 + num2 + num3;

// console.log(boringAddThreeNumbers(1,23,34))
// console.log(cleanAddThreeNums(1)(212)(435))

function continuousAdd(){
    const nums = [];
    function _curriedAdd(num){
        nums.push(num);
        console.log(nums.reduce((acc, el) => {
            return acc + el
        }))
    }
    return _curriedAdd
}

function continuousAdd2(){
    const nums = [];
    return function _curriedAdd(num){
        nums.push(num);
        console.log(nums.reduce((acc, el) => {
            return acc + el
        }))
    }
}


const calculator1 = continuousAdd()
const calculator2 = continuousAdd()

calculator1(2)
calculator1(4)
calculator1(6)
calculator1(8)
calculator1(10)



calculator2(2)
calculator2(4)
calculator2(6)
calculator2(8)
calculator2(10)