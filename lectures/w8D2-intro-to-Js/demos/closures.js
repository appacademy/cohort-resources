/* Closures */

// "A closure is a function AND the connection to variables at its birth place"



// const grammyNominees = function (nominees) {

//   return function (newNominee) {
//     nominees.push(newNominee)
//     console.log(nominees.join(" "))
//   }
// }

// const returnedFunc = grammyNominees(["bad bunny", "lorde", "bazzi", "drake"]);

// console.log(returnedFunc("beyonce"))




















/* EX 2: Building a counter function */

const counter = () => {
  let currentCount = 0; // need to incremenet (reassign) this later, use 'let'

  // closure here
  return {
    inc: () => currentCount += 1,
    dec: () => currentCount -= 1,
    reset: () => currentCount = 0
  }

 
}

const closure = counter();
closure();



































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

