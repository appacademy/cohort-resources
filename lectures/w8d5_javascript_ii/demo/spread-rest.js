// ...
// ...[1,2,3] => SPREAD OPERATOR => 1, 2, 3
// ...1, 2, 3 => REST OPERATOR => [1, 2, 3]

function minFunction(nums){
    console.log(Math.min(...nums))
}
// minFunction([1, 2, 3]) //=> 1


function adder(...allNums){
    let sum = 0;
    allNums.forEach(el => {
        sum += el;
    })
    console.log(sum)
}

adder(1,6,3,8,0)
adder(2, 19)
adder(2, 19, 5, 4, 2, 1, 7, 3)