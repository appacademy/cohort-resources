// transpiling. turn ES6 to ES5/ES4 so browsers can read it

// ES5 examples

// named function
// function pirateYell(argument) {
//     console.log(`${argument} MATEY!`); // backticks for interpolation
// }

// pirateYell('YARG');

// // method style
// const pirate = {
//     username: 'Yaarlker',
//     yell: function (arg) {
//         console.log(`${arg} MATEY!`);
//     }
// };

// pirate.walk = function () {
//     // context is the pirate object (this)
//     console.log('WALK THE PLANK MATEY');
// };

// pirate.yell('AHOY');
// pirate.walk();

// Constructor style
// function Pirate(username) {
//     this.username = username;
// }

// Pirate.prototype.yell = function(arg) {
//     console.log(`${arg} MATEY!`);
// };

// const yaarlker = new Pirate('Yaarlker');
// yaarlker.yell('BLARG');

// ES6!!!!! Class Syntax
// this is just syntactic sugar, looks good tho

class Pirate {
    constructor(username) {
        this.username = username;
    }

    yell(arg) {
        console.log(`${this.username} says ${arg} MATEY!`);
    }

    walk() {
        console.log('WALK THE PLANK MATEY');
    }

    // this is a class function essentially
    static numLegs() {
        console.log('I be having a peg leg');
    }
}

// const walker = new Pirate('walker');
// walker.walk();
// Pirate.numLegs(); // how to invoke the class function

class Dog {
    constructor(username) {
        this.username = username;
    }
}

const pup = new Dog('Ellie');

// CALL AND APPLY

// walker.yell.call(pup, 'woof'); comma separated args 
// walker.yell.apply(pup, ['woof']); array of args


// ARGUMENTS

// function adder() {
//     // debugger;
//     // convert arguments into an Array
//     debugger
//     const args = Array.from(arguments);
//     return args.reduce((acc = 0, ele) => {
//         // debugger
//         return acc += ele;
//     }); 
// }

// REST and SPREAD operator
// ... === rest or spread


// function adder(...numbers) { // rest
//     debugger;
    
//     return _helper(...numbers); // spread
// }

// _ indicates a helper method not intended for public use
function _helper(arg1, arg2, arg3, ...otherArgs) {
    debugger
    return arg1 + arg2 + arg3;
    // let args = [...arguments]; // spread
    // debugger
    // return args.reduce((acc = 0, ele) => {
    //     return acc += ele;
    // }); 
}


// CALLBACKS

function adder() {
    let sum = 0;
    let args = Array.from(arguments);

    args.forEach(el => sum = el + sum)
    return sum;
}

function calc(func, ...otherArgs) {
    let result = func(...otherArgs);
    console.log("result:", result);
}


