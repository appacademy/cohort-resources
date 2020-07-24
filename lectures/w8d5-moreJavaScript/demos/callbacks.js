function adder() {
    let sum = 0;
    let args = Array.from(arguments);
    // console.log(arguments);
    // console.log(args);
    args.forEach((arg) => { sum += arg });
    return sum;
}

function minFunc() {
    return Math.min(...arguments);
}

//expecting comma separated values coming in
function calc(cb, ...otherArgs) { // using rest operator here, otherArgs is an array
    const result = cb(...otherArgs); // using spread operator, spreading out the otherArgs array to comma separated
    console.log("result: ", result);
}