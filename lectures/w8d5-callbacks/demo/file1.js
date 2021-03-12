console.log("this is written at the top of file 1");

function Tea(flavor) {
  this.flavor = flavor;
  this.size = "large";
}

Tea.prototype.func = function () {
  console.log("here I am!");
  const smoothie = new Smoothie(3);
  console.log(smoothie);
};

function Smoothie(calories) {
  this.calories = calories;
}

const breakfastTea = new Tea("English");

module.exports = {
  breakfastTea, // === breakfastTea: breakfastTea
  Tea, // === Tea: Tea
  Smoothie // === Smoothie: Smoothie
};

console.log("this is written at the bottom of file 1");