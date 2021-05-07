// Functions Demo

// Function Style
// function pirateYell(arg) {
//     console.log(`${arg} matey`);
// }

// pirateYell('Arrrg');

// Function Style - ES6
// const pirateYell = (arg) => { // constant variable "pirateYell" equals a funciton
//     console.log(`${arg} matey`);
// };

// pirateYell("Arrrrrg");

// Method Style
// const pirate = {
//     name: 'Erik',
//     numTatts: 9,
//     yell: function(arg) {
//         console.log(`${arg} matey`);
//     }
// };

// pirate.yell('lol arrrg');

// Constructor Style
function Pirate(name, numTatts) {
    this.name = name;
    this.numTatts = numTatts;

}

Pirate.prototype.yell = function(arg) {
    console.log(`${arg} matey`);
};

const erik = new Pirate('Erik', 9);

