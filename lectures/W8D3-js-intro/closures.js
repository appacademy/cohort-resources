/* Closures */

// "A closure is a function AND the connection to variables at its birth place"

const feed = function () {
    const foodItems = ['grits']; 
    
    return function (newFoodItem) {
        foodItems.push(newFoodItem);
        return `I have eaten ${foodItems.join(' and ')}`;
    } 
};

const closure = feed();
// console.log(closure('apples'));
// console.log(closure('lobster'));

const newClosure = feed();
// console.log(newClosure('shrimp'));




/* EX 2: Building a counter function */

const counter = () => {
    let count = 0;

    return () => {
        count ++; // ++ => += 1, -- => -= 1
        return `Currently at ${count}`;
    };

};

const myCounter = counter(); // myCounter equals the return value of counter 
// that return value is a function that can be invoked.





/* We don't need to return a function for closures to work: */

const counterObject = function () {
    let count = 0;

    return {
        inc: () => count += 1,
        dec: () => count -= 1,
        reset: () => count = 0
    };
};

// The counterObject funciton returns an object who's keys point to functinos.
// These functions close over the count variable declared in counterObject.

const objectCounter = counterObject();

// *** The single line fat arrow is the one exception for implicit returns in JavaScript; for now...