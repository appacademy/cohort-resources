/* Closures */

// "A closure is a function AND the connection to variables at its birth place"


const feed = function () {
  // foodItems is known as a free variable
  // closures "close over" (capture, hang onto) free variables
  const foodItems = ['Grits'];

  // We are going to write a closure (function) right here
  const addTofoods = (food) => {
    foodItems.push(food)
  }
  addTofoods("bread")
  addTofoods("rice")
  addTofoods("chicken")
  console.log(foodItems)
};
// feed()
// How do we use this feed function???



function singers(){
  const popStars = ["Taylor Swift"] // is a free variable
  return function(newStar){
    popStars.push(newStar)
    return `I have listened to ${popStars.join(' and ')}`
  }
}

// console.log(singers()("Bob Marley"))
// let collection1 = singers()
// collection1("Bob Marley")
// collection1("Britney Spears")

// let collection2 = singers()
// collection2("Queen")
// collection2("Prince")
// collection2("Beyonce")


// console.log(collection1("Omar Apollo"))
// console.log(collection2("XXX"))



















/* EX 2: Building a counter function */

const counter = () => {
  let currentCount = 0; // need to incremenet (reassign) this later, use 'let'

  // closure here
  return () => {
    currentCount += 1
    return currentCount
  }
};

// console.log(counter()())

let counter1 = counter()
let counter2 = counter()

counter1()
counter1()
counter1()
counter1()
counter1()
// console.log(counter1())
// console.log(counter2())








/* We don't need to return a function for closures to work: */
const fancyCounter = () => {
  let count = 0;

  // inc, dec, and reset are all methods that are closures
  return {
    inc: () => ++count,
    dec: () => --count,
    reset: () => (count = 0),
    read: () => (console.log("the current count is:",count))
  };
};

const superCounter = fancyCounter()
superCounter.read()
superCounter.inc()
superCounter.inc()
superCounter.inc()
superCounter.read()
superCounter.dec()
superCounter.dec()
superCounter.dec()
superCounter.dec()
superCounter.dec()
superCounter.dec()
superCounter.dec()
superCounter.read()
superCounter.reset()
superCounter.read()

