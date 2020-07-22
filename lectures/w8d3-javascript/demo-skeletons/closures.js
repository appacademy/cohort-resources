
let feed = function () {
  // foodItems is known as a free variable
  // closures "close over" (capture, hang onto) free variables
  const foodItems = ['Grits'];

  // We are going to write a closure (function) right here
  function _toBeEaten(item) {
    foodItems.push(item);
    console.log(`I have eaten ${foodItems.join(' and ')}!`)
  }

  return _toBeEaten;

};

const foodItems = ['Grits'];
function basicFeed(item) {
  foodItems.push(item);
  console.log(`I have eaten ${foodItems.join(' and ')}!`)
}

// How do we use this feed function???

const eaten = feed();
