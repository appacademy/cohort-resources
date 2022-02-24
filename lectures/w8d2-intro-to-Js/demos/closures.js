/* Closures */

// "A closure is a function AND the connection to variables at its birth place"


const singers = function () {
  const popStars = ['The Weekend'];
  // popStars is known as a free variable
  // closures "close over" (capture, hang onto) free variables

  // We are going to write a closure (function) right here
  return function(newStar){
    // console.log(popStars)
    popStars.push(newStar);
    // console.log(popStars)
    return `I have listened to ${popStars.join(' and ')} `;
  }

};


// How do we use this function???

// singers()("Bad Bunny")
// console.log(singers()("Bad Bunny"));


// We can also write this function like so:
const singers2 = function(artistArray) {
  // artist is a free variable (a parameter this time)
  // closure here
  return function(newStar) {
    artistArray.push(newStar);
    return `I have listened to ${artistArray.join(' and ')} `
  }
};


const closure2 = singers2(["Bazzi"]);
// console.log(closure2())
console.log(closure2("selena gomez"))
























/* EX 2: Building a counter function */

const counter = () => {
  let currentCount = 0; // need to incremenet (reassign) this later, use 'let'

  // closure here

};

// console.log(counter()());




























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

const superCounter = fancyCounter();
// const superCC = fancyCounter();