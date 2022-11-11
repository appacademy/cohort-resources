/* ----------------------------------------------------------------------------
Part 1: A simple recipe to boil an egg; all steps in order

- Note: all actions are synchronous in this part of the demo
----------------------------------------------------------------------------- */

// initial egg state
// let eggState = "raw";

// steps of our recipe
// function putEggInBoilingWater() {
//     console.log(`1. Putting ${eggState} egg in boiling water`);
//     eggState = "cooked";
//     console.log(`2. Egg is ${eggState}!`);
// }

// function takeEggOutOfPot() {
//     console.log(`3. Taking ${eggState} egg out of pot`);
// }

// function eatEgg() {
//     console.log(`4. Eating ${eggState} egg`);
// }

// // now try to perform the steps in the right order

// putEggInBoilingWater();
// takeEggOutOfPot();
// eatEgg();


/* ----------------------------------------------------------------------------
Part 2: Introducing asynchronicity: in reality, some steps take an indefinite
amount of time to complete (boiling and egg, for example)

- Takeaway: Asynchronous callbacks wait for all synchronous code to finish
  executing before being invoked
----------------------------------------------------------------------------- */

// // initial egg state
// let eggState = "raw";

// // steps of our recipe
// function putEggInBoilingWater() {
//     console.log(`1. Putting ${eggState} egg in boiling water`);
//     setTimeout(() => {
//         eggState = "cooked";
//         console.log(`2. Egg is ${eggState}!`);
//     }, 5000);
// }

// function takeEggOutOfPot() {
//     console.log(`3. Taking ${eggState} egg out of pot`);
// }

// function eatEgg() {
//     if (eggState === "raw") {
//         console.log(`4. Eating RAW egg. What a mess! 🤢`);
//     } else {
//         console.log(`4. Eating COOKED egg. Yum! 😋`);
//     }

//     showImage(eggState);
// }

// // // now try to perform the steps in the right order

// putEggInBoilingWater();
// takeEggOutOfPot();
// eatEgg();


/* ----------------------------------------------------------------------------
Part 3: Ensuring the correct order of operations between async and sync code

- Takeaway: If we want code to wait for asynchronous callbacks to execute,
  we must put that code inside of an async callback

- This is a good opportunity to get students involved; get a volunteer to
  navigate refactoring the code from part 2 so that the steps happen in the
  right order (i.e., we should only take the egg out of the pot when it is done
  boiling)
----------------------------------------------------------------------------- */

// TODO: Modify code from Part 2 so recipe steps run in the right order

// let eggState = "raw";

// // steps of our recipe
// function putEggInBoilingWater() {

//   console.log(`1. Putting ${eggState} egg in boiling water`);

//   setTimeout(() => {
//     eggState = "cooked";
//     console.log(`2. Egg is ${eggState}!`);
//     eatEgg();
//     takeEggOutOfPot();
//   }, 5000);

// }

// function takeEggOutOfPot() {
//   console.log(`3. Taking ${eggState} egg out of pot`);
// }

// function eatEgg() {
//   if (eggState === "raw") {
//     console.log(`4. Eating RAW egg. What a mess! 🤢`);
//   } else {
//     console.log(`4. Eating COOKED egg. Yum! 😋`);
//   }

//   showImage(eggState);
// }

// // now try to perform the steps in the right order

// putEggInBoilingWater();
// takeEggOutOfPot();
// eatEgg();



/* ----------------------------------------------------------------------------
Part 4: Asynchronous code is non-blocking

- Takeaway: it lets us "multi-task" and gives us the behavior we've come to
  expect from interacting with websites:
    * the ability to continue interacting with the page (clicking buttons,
      scrolling through the page, etc) while images are loading or data is
      being fetched from a remote server
- Make sure to invoke setTable() after calling putEggInBoilingWater();

----------------------------------------------------------------------------- */

// initial egg state
let eggState = "raw";

// steps of our recipe
function putEggInBoilingWater() {
    console.log(`1. Putting ${eggState} egg in boiling water`);
    setTimeout(() => {
        eggState = "cooked";
        console.log(`2. Egg is ${eggState}!`);
        takeEggOutOfPot();
        eatEgg();
    }, 5000);
}

function takeEggOutOfPot() {
    console.log(`3. Taking ${eggState} egg out of pot`);
}

function eatEgg() {
    if (eggState === "raw") {
        console.log(`4. Eating RAW egg. What a mess! 🤢`);
    } else {
        console.log(`4. Eating COOKED egg. Yum! 😋`);
    }

    showImage("fancy");
}

function setTable() {
    console.log("Setting the table 🍽️");
}

// now try to perform the steps in the right order
//  - if we want to set the table while the egg is cooking, where 
//    should we invoke setTable???

putEggInBoilingWater();
setTable();





























/* helper function for adding images to demo: */
function showImage(className) {
  document.querySelector(`.${className}`).classList.add("revealed");
}