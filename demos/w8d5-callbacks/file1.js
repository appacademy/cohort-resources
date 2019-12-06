console.log("this is written at the top of file 1");
// this line will get run when I load file2.js because of how JS is exporting files

function Mochachino(flavor) {
    this.flavor = flavor;
    this.size = "large";
}

Mochachino.prototype.func = function () {
    console.log("here I am!");
    const jambaJ = new JambaJuice(3);
    console.log(jambaJ);
};

function JambaJuice(calories) {
    this.calories = calories;
}

const mochaJ = new Mochachino("sweet");

module.exports = {
    mochaJ,
    Mochachino,
    JambaJuice
};

// even this will get run when loading file2.js
