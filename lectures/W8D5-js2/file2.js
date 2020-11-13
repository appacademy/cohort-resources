console.log('this is the top of file 2!');

const Mochachino = require('./file1.js').Mochachino;
const mochaJ = require('./file1.js').mochaJ;
const JambaJuice = require('./file1.js').JambaJuice;
const stuff = require('./file1.js');

console.log(stuff);

console.log('this is after the importing!');

const mochaLiz = new Mochachino("salty");
mochaLiz.func();

const jambaJ = new JambaJuice(500);
console.log(jambaJ);

mochaJ.func();
console.log('this is the end of file TWO!');

// this is file 1
// this is file 2

// this is file 2
// this is file 1
// this is after inporting
// func consoles
// end of file2 
