console.log("this is the top of file2");

// const Drink = require("./file1").Drink;

const Stuff = require("./file1");

console.log("this is after importing");

const cocktail = new Stuff.Drink("long island", "tall");


console.log(cocktail.type);
console.log(Stuff.tea.size);
console.log(Stuff.coffee.type);
console.log(Stuff.smoothie.type);


console.log("this is the bottom of file2");