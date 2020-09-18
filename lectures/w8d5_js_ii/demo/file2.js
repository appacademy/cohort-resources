console.log('this is the top of file 2!');

const Mochachino = require('./file1.js').Mochachino;
const mochaJ = require('./file1.js').mochaJ;
const JambaJuice = require('./file1.js').JambaJuice;

console.log('this is after the importing!');

const mochaLiz = new Mochachino("salty");
mochaLiz.func();

const jambaJ = new JambaJuice(500);
console.log(jambaJ);

mochaJ.func();
console.log('this is the end of file TWO!')
