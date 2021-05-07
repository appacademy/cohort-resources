console.log("this is written at the top of file 1");

function Mochachino(flavor) {
  this.flavor = flavor;
  this.size = "large";
}

Mochachino.prototype.func = function() {
  console.log("here I am!");
  const jambaMamba = new JambaJuice(3);
  console.log(jambaMamba);
};

function JambaJuice(calories) {
  this.calories = calories;
}

const mochaJ = new Mochachino("sweet");

module.exports = { mochaJ,
                  Mochachino,
                  JambaJuice
                };

console.log("this is written at the bottom of file 1");
