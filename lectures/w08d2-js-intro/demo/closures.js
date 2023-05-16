/* Closures */

// "A closure is a function AND the connection to variables at its birth place"


const feed = function () {
  // foodItems is known as a free variable
  // closures "close over" (capture, hang onto) free variables
  const foodItems = ['Grits'];

  // We are going to write a closure (function) right here

};

// How do we use this feed function???



// We can also write this function like so:
const feed2 = function(foodItems) {
  // foodItems is a free variable (a parameter this time)

  // closure here
};
























/* EX 2: Building a counter function */

const counter = () => {
  let currentCount = 0; // need to incremenet (reassign) this later, use 'let'

  // closure here
};





























/* We don't need to return a function for closures to work: */
const fancyCounter = () => {
  let count = 0;

  // inc, dec, and reset are all methods that are closures
  return {
    inc: () => ++count,
    dec: () => --count,
    reset: () => (count = 0)
  };
};

