// function century(array) {
//     let centuryArray = [];
//     array.forEach(element => {
//         centuryArray.push(element * 100); 
//     });
//     return centuryArray;
// }

// // console.log(century([1, 2, 3, 4, 5]));


// function variables() {
//     let dogName = "Remy";
//     return `${dogName} is the best`;
// }


// // console.log(variables())



// // let came1Case = "camel case "

// // if statements
// if (true) {
//     return "puppies";
// } else if (false) {
//     return "cats";
// } else {
//     return "birds";
// }



// function comparison(input) {
//     if (input === 3) {
//         return true;
//     }
//     return false;
// }

// // console.log(comparison("3"))




// function negIndexing(array) {
//     let lastIndex = array.length - 1;
//     return array[lastIndex];
// }

// // console.log(negIndexing([1, 2, 3, 4, 5]));


// function truthyFalsey(value) {
//     if (value) {
//         return "this is a truthy value";
//     }
//     return "this is a falsey value";
// }

// // console.log(truthyFalsey(0));


// // function sayHi(){
// // 	console.log("hi")
// // }

// // setInterval(sayHi, 1000)


function doubler(array){
    let newArray = [];
    array.forEach((number)=>{
       newArray.push( number * 2);
    })
    return newArray;
}

// let array = [1,2,3,4,5,6];
// let array;
// array = [1,2,3,4,5,6,]

// const array = [1,2,3,4,5,6]


// var array = [1,2,3,4,5,6]
// we discourage from using 

// thisIsWhatCamelCaseLooksLike


let array = ["A","b","c"];

// getting last element in an array
array[array.length -  1];




let hash = {};

let array = ["a","s","r","a","b","b"];


array.forEach((ele)=>{
    hash[ele] ? hash[ele] += 1 : hash[ele] = 1
})

console.log(hash)