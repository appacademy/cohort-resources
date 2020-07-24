console.log("this is the top of file2"); //1

const Drink = require("./file1").Drink;

const Stuff = require("./file1");

console.log("this is after importing"); //5

const cocktail = new Drink("long island", "tall");
const wine = new Stuff.Drink("white", "glass");

console.log(cocktail.type); //6
console.log(Stuff.tea.size); //6
console.log(Stuff.coffee.type); //6
console.log(Stuff.smoothie.type); //6
console.log(wine.type); //6


console.log("this is the bottom of file2"); //7

