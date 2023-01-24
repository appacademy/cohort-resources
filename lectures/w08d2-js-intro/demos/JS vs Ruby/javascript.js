function century(array) {
    let centuryArray = [];
    array.forEach(element => {
        centuryArray.push(element * 100); 
    });
    return centuryArray;
}

// console.log(century([1, 2, 3, 4, 5]));


function variables() {
    let dogName = "Remy";
    return `${dogName} is the best`;
}


// console.log(variables())



// let came1Case = "camel case "

// if statements
if (true) {
    return "puppies";
} else if (false) {
    return "cats";
} else {
    return "birds";
}



function comparison(input) {
    if (input === 3) {
        return true;
    }
    return false;
}

// console.log(comparison("3"))




function negIndexing(array) {
    let lastIndex = array.length - 1;
    return array[lastIndex];
}

// console.log(negIndexing([1, 2, 3, 4, 5]));


function truthyFalsey(value) {
    if (value) {
        return "this is a truthy value";
    }
    return "this is a falsey value";
}

// console.log(truthyFalsey(0));


// function sayHi(){
// 	console.log("hi")
// }

// setInterval(sayHi, 1000)
