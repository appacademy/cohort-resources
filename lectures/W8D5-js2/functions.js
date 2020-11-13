//? Ways to Call a Function in JS

// Function Style

// function pirateYell(arg) {
//   console.log(`${arg}, matey`);
// }

// pirateYell('Yar');


// Function Style - ES6

// const pirateYell = (arg) => {
//   console.log(`${arg}, matey`);
// };

// pirateYell('Ahoy');

// Method Style

// const pirate = {
//   name: 'Mike',
//   numTats: 9,
//   yell: function(arg) {
//     console.log(`${arg}, matey`);
//   },
//   myName: function() {
//     console.log(`${this.name} be me name!`);
//   }
// };

// pirate.yell('Yabadabadoo');
// pirate.myName();


// Constructor Style

// function Pirate(name, numTats) {
//   this.name = name;
//   this.numTats = numTats;
// }

Pirate.prototype.yell = function (arg) {
  console.log(this);
  console.log(`${arg}, matey`);
};

const ryan = new Pirate("Ryan", 12);
// console.log(ryan);
ryan.yell('Bally Ho');