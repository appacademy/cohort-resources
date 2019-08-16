// ====
// es6:
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { coffee, smoothie, tea } from "./file1.js";


// ====
// es6:
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.log("this is the top of file2");

const coffee = require("./file1").coffee;
const smoothie = require("./file1").smoothie;
const tea = require("./file1").tea;
const Drink = require("./file1").Drink;



console.log("this is after my imports");

const cocktail = new Drink("Long Island", "Tall");
console.log(tea.type);
console.log(tea.size);
console.log(smoothie.size);
console.log(smoothie.type);
console.log(coffee.size);
console.log(coffee.type);
console.log(cocktail.type);
console.log(cocktail.size);

console.log("this is the bottom of file2");
