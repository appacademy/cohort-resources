function doubler(array){
    let doubled = [];
    array.for(el =>{
        doubled.push(el * 2);
    });
    // writing the word return is required.
    return doubled;
}


// variables 
let dog = "remy";
const cat = "fluffy";
var snake = "scaley";
// global
fox = "hunter";

// camelCase 
remyIsTheBestDog = true; 


// when checking for equality
1 === 1;

// type coersion
// we DO NOT use double ==
1 == 1



// when running file 
// node nameOfFile.js


// NO NEG indexing
// let array = [1,2,3,4,5,6,7]
// get last element of array
// array[array.length - 1]

// if statement in javacript 

if(1 === 1 ){
    console.log("hi");
}else if (2 === 2){
    console.log("hello");
}else {
    console.log("bye");
}


// interpolation

let name = "diego";

`hello my name is ${name}`

// 7 falsely values 

// 1. false 
// 2. null
// 3. undefined 
// 4. NaN 
// 5. 0
// 6. -0 
// 7. ""

let hash = {};

let array = ["a","s","r","a","b","b"];


array.forEach((char) =>{
    hash[char] ? hash[char] += 1 : hash[char] = 1
})

console.log(hash)



// if statement one liner 
if(0 === 0) return "hi";

// for loop

for(let i = 0; i < array.length; i++ ){
    // we can return stuff

    // array[i]
}

array.forEach((ele)=>{
    // some side effect like pushing, or adding.
    // WE CANNOT RETURN INSIDE A FOREACH LOOP
    if(ele === 2) return true
})


function doubler(array){
    return array.map((ele)=>{
        return ele * 2
    })
}




