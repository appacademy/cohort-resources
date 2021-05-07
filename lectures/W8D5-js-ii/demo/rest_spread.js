// Rest and Spread Demo

// Spread ...
function minFunc(nums) {
    console.log(Math.min(...nums)); // min(1, 2, 3)
}

minFunc([1, 2, 3]);

function minFunc2() {
    console.log(Math.min(...arguments));
}

minFunc2(9, 2, 3);

function adder(startNum, ...otherNums) {
    console.log(startNum);
    console.dir(otherNums);

    otherNums.forEach((el) => console.log(el));
}

adder(10, 3, 4, 6, 5, 8);

