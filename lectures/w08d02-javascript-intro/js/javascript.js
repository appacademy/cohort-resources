// we need to write return

function doubler(array){
    let doubled = [];
    array.forEach((num)=>{
        doubled.push(num * 2);
    })
    // writing "return" is required
    return doubled;
}



// we must declare variables 
// these all have specefic use cases 
let dog = "remy";
const cat = "jackson";
var bird = "sam";
// global
lizard = "lilly";

// a ";" denotes the end of a statment


// camelCase 
let doesThisLookLikeACamel = "case";


// equality

1 === 1;

// we dont use "=="


// run a file in javascript 
// node javascript.js



// no shoveling!! instead array.push(el)


// no negative indexing!!!

let array = [1,2,3,4,5,6,7]

array[array.length - 1]



// if statements
if(1 === 1){
    // do something;

}else if(2 === 2){
    // do something else;
}else {
//  just do this;
}

// one liner if statements 
if (1 === 1) return "hi";


// interpolation

let puppy = "remy";
// backticks not quotes!!
`${puppy} is the best fetcher in the world`;


// 7 falsey values 
// false 
// null
// undefined 
// NaN
// 0 
// -0
// ""



// 0 == []let hash = {};


// counter object
let newArray = ["a","s","r","a","b","b"];


newArray.forEach((char) =>{
    hash[char] ? hash[char] += 1 : hash[char] = 1
})

// terminal logging 
console.log(newArray,'newArray');

// try to label your console logs!
// ["a","s","r","a","b","b"] 'newArray'


// loops

while (1===1){

}


for(let i = 0; i < array.length; i++){
    // i++ === i+=1 

}


array.forEach((el)=>{
    console.log(el)
    // YOU CANNOT RETURN IN A FOREACH LOOP
})



// javascript does NOT CARE about spaces, it ignores spaces
function double(array){
    let doubled = [];
    array.forEach((num)=>{
        doubled.push(num * 2);
    })
    // writing "return" is required
    return doubled;
}


// make sure to invoke your methods!
double()



// you can have funcitons as the actual values in a object, in javascript
let object = {
    doubler : function(num){
        return num * 2;
    },
    decade : function(num){
        return num * 10;
    }
}

// how to use these methods?
object.doubler(2) // => 4
object["decade"](2) // => 20

// javscript DOES NOT CARE about number of arguments 
object.doubler(2,3,4,5,567,7)



// you can assign functions to variables 
const century = function(num){
    return num * 100;
}

century(3) // => 300



// you can also return functions from other functions 

function dummy (num) {
    if (num === 2){
        return function(){
            console.log("hi im another function")
        }
    }
}


// you can give functions as arguments themselves to other functions
function example (num, dummy){
    return dummy(num)
}



// three types of functions that we have
// named function
function multiplier(){

}

// functional expresion/ variable assignments 

const decade = function(){

}

// fat arrow function (we dont use this when we monkey patch functions)
const centuryTwo = () =>{

}

// centuryTwo()


// constructor functions


// this is how we define it
// we use a capital letter*****
function User(username, age){
    // we need to set up our instance variables 
    // @username = username 
    this.username = username 
    this.age = age

}

// what about instance methods?
// if i want to add abilities to the User class, I need to put those methods into its prototype "ability basket"
User.prototype.greet = function(){
    console.log(this) // => {username: "diego", age: 32}
    return `hi, my name is ${this.username}`;
    // the "this" key word, is NOT optional
}


// this is how we call it
const diego = new User("diego", 32);
diego.greet();


//  FUNCTIONS AS ONE LINERS*****
// arguments and implicit returns

// when we have a one line and a fat arrow and NO {}, we dont have to write "return"
// const doubler = number =>{ return number * 2};  vs   const doubler = number => number * 2; 



// when you have a one liner and only exacty one argument, you dont need ();
// const decades = (num, num2) => number * 10;  vs const decades = () => number * 10;  vs const decades = num => number * 10;

