// using arguments keyword
function adder() {
    let sum = 0;
    let args = Array.from(arguments);
    // console.log(arguments);
    // console.log(args);
    args.forEach((arg) => { sum += arg });
    return sum;
}

// ... as the rest operator, creating an array called otherTasks from your comma separated arguments passed in
function multiTasker(task1, ...otherTasks) {
    console.log(`${task1} is my first task`);
    otherTasks.forEach((task) => { console.log(`${task}`) });
}

// ... as the spread operator, it separates an array into comma separated values
// nums is an array
function minFunc(nums) {
    console.log(Math.min(...nums));
}

// using arguments keyword, when invoking function, pass your arguments in comma separated
function minFunc2() {
    console.log(Math.min(...arguments));
}

