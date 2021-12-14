// semi-colons to denote end of a statement;

function doubler(array) {
    let newArray = [];
    // You CAN NOT return inside a forEach loop
    array.forEach((num) => {
        newArray.push(num * 2);
    });
    return newArray;
}




// Declare Variables
let popStars = "Taylor Swift";
const popStars = "Taylor Swift";

// global variable , dont wannt use this
popStars = "Taylor Swift";
// Function scoped, we try not use this.
var popStars = "Taylor Swift";


// in Js we use camelCase
let bestSongWriter = "Taylor Swift";


// how to compare in JS

// dont user double equal sign
13 == 13
// instead use
13 === 13 



// No neg indexing in Js 

let array = [1, 2, 3, 4, 5];

// getting last element of array
array[array.length - 1]


// FALSEY VALUES
null
undefined
0, -0
NaN
""
false

// __________________________________ Variable Declaration______________________
// ___________________________________CONST_____________________________________
// with const, we can only declare and assing once, meaning we cannot reassign;
// block scoped

const bestPopStar;
bestPopStar = "taylor Swift";
bestPopStar = "bad Bunny"// cannot ressaign like this with a const 

// ________________________________________LET_________________________________
// with let, you totally can reassign; 
// block scoped 
let bestWriter;
bestWriter = "Tay Tay";
bestWriter = "Max Martin";


// ______________________________Global_________________________________
// can be accessed anywhere in code, and becomes avaibale on the browser 
// we avoid these, also these will override any other variable by the same name;
singer = "taylor swift";

// ________________________________VAR____________________________
// this is function scoped; 
var grammyWinner = "taylor swift";





// _______________________  Functions_______________



let hash = {
  doubler: function (num) {
    return num * 2;
  },
  decade: function (num) {
    return num * 10;
  },
  popStar: "taylor swift"
}

// hash.doubler();




// named function, declarative 
function doubler(num) {

}

// Es6 syntax, anon function/ function expression 
const doubler = (arg) => {
  arg * 2 
}

// constructor function 

function User(username, age) {
  this.username = username;
  this.age = age;

  this.greet = () => {
    return "hello"
  }
}

User.prototype.greet = function () {
  return "hello";
}


// const user1 = User.new("tay", 32);

// user1.greet();

// ___________________________________ if statements _____________________

function doubler(array) {
  array.forEach((el) => {
    if (el % 2 === 0) {
      console.log("this is even")
    } else if (el === 2) {
      console.log(el)
    } else {
      // do stuff here
    }
  })
}



