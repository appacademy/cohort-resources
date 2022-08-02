function century(array){
    let centuryArray = [];

    array.forEach((num) =>{
        centuryArray.push(num * 100);
    });

    return centuryArray;
}

// console.log(century([1,2,3,4,5]));

function variables(){
    const dogName = "Remy";
    return `${dogName} is the best`;
}

// console.log(variables());


// if(true) {
//     return "puppies";
// } else if (false) {
//     return "cats";
// } else {
//     return "this";
// }

function negIndexing(array){
    // return array[array.length - 1]
    return array.at(-1);
}

// console.log(negIndexing([1,2,3]));

function sayHi(){
    console.log("hi")
}

setInterval(sayHi, 1000)