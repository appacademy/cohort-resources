/* ---------------------------------------------------------------------------------
Part 1: A simple recipe to boil an egg; all steps in order
--------------------------------------------------------------------------------- */

// initial egg state
// let eggState = "raw";

// // steps of our recipe
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










/* --------------------------------------------------------------------------------- 
Part 2: Introducing asynchronicity: in reality, some steps take an indefinite 
amount of time to complete
--------------------------------------------------------------------------------- */

// initial egg state
// let eggState = "raw";

// // steps of our recipe
// function putEggInBoilingWater() {
//     console.log(`1. Putting ${eggState} egg in boiling water`);
//     setTimeout(() => {
//         eggState = "cooked";
//         console.log(`2. Egg is ${eggState}!`);
//     }, 2500);
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

// // now try to perform the steps in the right order
// putEggInBoilingWater();
// takeEggOutOfPot();
// eatEgg();










/* ---------------------------------------------------------------------------------
Part 3: Ensuring the correct order of operations between async and sync code
--------------------------------------------------------------------------------- */

// TODO: Modify code from Part 2 so recipe steps run in the right order

// let eggState = "raw";

// // steps of our recipe
// function putEggInBoilingWater() {
//     console.log(`1. Putting ${eggState} egg in boiling water`);
//     setTimeout(() => {
//         eggState = "cooked";
//         console.log(`2. Egg is ${eggState}!`);
//         takeEggOutOfPot();
//         eatEgg();
//     }, 2500);
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

// // now try to perform the steps in the right order
// putEggInBoilingWater();








     








/* ---------------------------------------------------------------------------------
Part 4: Asynchronous code is non-blocking
--------------------------------------------------------------------------------- */

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
    }, 2500);
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

// // now try to perform the steps in the right order
// // if we want to set the table while the egg is cooking, where should we invoke `setTable`???
putEggInBoilingWater();
setTable();

































/* helper function for adding images to demo: */
function showImage(className) {
    document.querySelector(`.${className}`).classList.add("revealed");
}