const adder = function() {
    // console.dir(arguments);
    
    let sum = 0;
    let args = Array.from(arguments);
    for (let i = 0; i < args.length; i++) {  
        sum += args[i];      
    }

    return sum;
}

const calc = function(func, ...everythingElse) { 
    // ABOVE: The '...' as a Rest Opperator, aka turns 'everthingElse' into an Array. ^

    console.log("----")
    console.log(everythingElse);
    console.log("----")

    // BELOW: The '...' as a Spread Opperator, aka now everythingElse is NOT an array. 
    let result = func(...everythingElse);

    return result;
};

console.log(calc(adder, 1, 2, 3, 4, 5));