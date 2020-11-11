// named functions
function square(num) {
    debugger;
    // this === window
    return num * num;
}

// variable assignment / anonymous functions / Function Expression

// ES5
const feedMe = function(food) {
    debugger;
    // this === window
    return `Thanks for the ${food}!`;
}

// ES6
// const feedMe = food => `Thanks for the ${food}!`;

// Constructor Function
function User(username, age) {

    // this refers to an empty object, that will become the 
    // instance the thing you are constructing (class)
    debugger;
    this.username = username;
    this.age = age;
    // this.greet = function() {
    //     return 'Howdy!';
    // }
}

// Correct way to do instance methods
User.prototype.greet = function() {
    debugger;
    // this === the instance (object) that the method was called on
    
    return `${this.username} says Howdy!`;
}


// Monkey Patch!
Array.prototype.myEach = function() {
    // do stuff
}


// class User
    // def initialize(username, age)
    //     @username = username
    //     @age = age
    // end

//     def greet
//         'Howdy!'
//     end

// end

