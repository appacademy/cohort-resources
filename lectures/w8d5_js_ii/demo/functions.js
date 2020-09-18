// Functions Demo

// Function Style

// function pirateYell (arg) {
//     console.log(`${arg} matey`)
// }

// pirateYell('argggggggg')

// Function Style - ES6

// const pirateYell = (arg) => {
//     console.log(`${arg} matey`)

// }

// pirateYell('argggggggg')

// Method Style

// not easy to recreate another object with the same attributes
const pirate = {
    name: 'Ryan',
    numTats: 9,
    yell: function (arg) {
        console.log(`${arg} matey`);
    }
}

pirate.walk = function () {
    console.log('walked the plank');
}
// pirate is an object and we can invoke the method yell on the pirate obj
pirate.yell('heyo');
pirate.walk();

// Constructor Style

function Pirate (name,numTats) {
    this.name = name;
    this.numTats = numTats;
}
// how to create a class method in ES5
Pirate.revolt = function(instance) {
    console.dir(this)
    console.dir(instance)
    console.log(`You need at least ${instance.numTats} more tats`)
}
// //
Pirate.prototype.yell = function (arg) {
    console.log(`${arg} matey`);
}

const ryan = new Pirate('ryan',9)
ryan.yell('ryan')