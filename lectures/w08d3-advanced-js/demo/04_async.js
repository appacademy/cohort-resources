// // initial egg state
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

// initial egg state
let eggState = "raw";

// steps of our recipe
function putEggInBoilingWater() {
    console.log(`1. Putting ${eggState} egg in boiling water`);
    setTimeout(() => {
        eggState = "cooked";
        console.log(`2. Egg is ${eggState}!`);
        takeEggOutOfPot();
    }, 2000);
}

function takeEggOutOfPot() {
    setTimeout(() => {
      console.log(`3. Taking ${eggState} egg out of pot`);
      eatEgg();
    }, 1000);
}

function eatEgg() {
    if (eggState === "raw") {
        console.log(`4. Eating RAW egg. What a mess! 🤢`);
    } else {
        console.log(`4. Eating COOKED egg. Yum! 😋`);
    }
    
    // showImage(eggState);
}

function setTable() {
  console.log('Setting the table');
}

// now try to perform the steps in the right order
putEggInBoilingWater();
setTable();
// while (true) {
//   if (eggState === 'cooked') {
//     break
//   }
// }
// takeEggOutOfPot();
// eatEgg();






























function showImage(className) {
  document.querySelector(`.${className}`).classList.add("revealed");
}