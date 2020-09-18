// Rest and Spread Demo

function minFunc(nums) {
    // Math.min takes in comma separated args
    console.log(nums)
    return Math.min(...nums) // spreading nums 
}

// console.log(minFunc([1,2,555]))

function minFunc2(arg1,...nums) { // rest: collects all the passed args and puts them in nums
    console.log(nums)
    return Math.min(...nums)
}

console.log(minFunc2(5,44,6,777))

