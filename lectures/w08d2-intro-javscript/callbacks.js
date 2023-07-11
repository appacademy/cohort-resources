const age = function(number, funcToBeUsedLater){
    return funcToBeUsedLater(number);
}


const double = function(num){
    return num * 2;
}

const decade = function(num){
    return num * 10;
}

const century = function(num){
    return num * 100;
}

// console.log(age(12,century))


const array = [1,2,3,4,5];

array.forEach(ele => {
    console.log(ele * 80)
})

array.forEach(function(num){
    console.log(num * 80)
})


function doMathWithNumbers(number, callback){
    return callback(number);
}

console.log(doMathWithNumbers(12, function(num){
    return num * num
}))