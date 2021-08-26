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
    console.log(`4. Eating ${eggState} egg`);
}


// now try to perform the steps in the right order
putEggInBoilingWater();








































































/* helper function for adding images to demo: */
// function showImage(className) {
//     document.querySelector(`.${className}`).classList.add("revealed");
// }
