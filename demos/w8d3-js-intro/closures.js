const feed = function () {
  const foodItems = ['Avocado'];

  return function (newItem) {
    foodItems.push(newItem);
    return `I have eaten ${foodItems.join(' and ')}!`
  }
}

const closure = feed();

// console.log(closure('Apples'));
// console.log(closure('Lobster'));

// const counter = () => {
//   let currentCount = 0;

//   return () => {
//     currentCount += 1
//     return `Currently at ${currentCount}`
//   };
// }

// const myCounter = counter();


const counter = () => {
  let count = 0;

  return {
    inc: () => count += 1,
    dec: () => count -= 1,
    reset: () => count = 0
  };
};

const myCounter = counter();


// {inc: () => count += 1, dec: () => count -= 1}