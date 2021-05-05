/* Function Demo */


/* Named functions */

// console.log(square(7));

function square(number) {
    // debugger;
    return number * number;
}

// Any defined named function will be hoisted to when/where it is used in the file.





/* Function expresions */
// (Variable assigned functions / anonymous functions)

// console.log(feedMe("grapes"));

const feedMe = function (food) {
    return "thanks for the " + food + "!";
};

// Variable assigned functions are not hoisted. You must use the variable 
// function after assignment





/* Es6 Arrow function expression */

const feedMeAgain = (food) => {
    return `Thanks for the ${food}!`;
};

// console.log(feedMeAgain("blueberries"));



/* Constructor functions */

// Always name constructor functions starting with a capital letter
// This is a convention that makes things much easier!

function User(username, age) {
    // debugger;
    this.username = username;
    this.age = age;

    // this.greet = () => "Hello there!"; This works but is not efficient.
}

User.prototype.greet = function () {
    // debugger;
    return `Hello there! My name is ${this.username}`;
};

// When adding a function on the prototype you need to use the function keyword.

const ryan = new User('Ryan', 35);

// "This" is similar to ruby's self
// "This" is the object that calls the function (its receiver)


















