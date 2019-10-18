function adder() {
    let sum = 0; 
    // console.log(typeof arguments); 
    // arguments is a keyword (is array-like)
    console.log(Array.isArray(arguments)); 

    // converting arguments to a true array 
    const args = Array.from(arguments); 

    console.log(Array.isArray(args)); 
    // console.log(arguments); 
    // console.log(Array.from(arguments)); 
    // debugger; 
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
        // equivalent to: sum = sum + args[i];  
    }
    return sum; 
}
// even though arguments is array-like (and not a true array), 
// it still has properties like length and indexing
// but you cannot use other array-like properties (e.g. slice, pop(), push())

// console.log(adder(1, 2, 3, 4, 5)); 

function doMath(cb, ...everythingElse) {
    let result = cb(...everythingElse); 
    return result; 
}

console.log(doMath(adder, 1, 2, 3, 4, 5)); 

