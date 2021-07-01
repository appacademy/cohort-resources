// Class Syntax Demo

// look back at ES5 "constructor style" from earlier for comparison


// ES6 Class Syntax

class Pirate {

  //much like ruby's initialize
  constructor (name, numTats) {
    this.name = name;
    this.numTats = numTats;

    // this will always reference the pirate object, even when called asynchronously
    // this._yarr = this._yarr.bind(this);
  }

  // implicitly defined on prototype // syntactic sugar
  yell() {
    console.log(`Yar me name is ${this.name} and these are me ${this.numTats} tats lol!`);
  }

  // similar to class methods in ruby
  static revolt(otherPirate) {
    console.log(`Yarrr you need at least ${otherPirate.numTats} you scrub`);
  }

  _yarr() {
    console.log(`yarr my name is ${this.name}`);
    console.log(this);
  }

  chant() {
    // chant is a pirate method
    // let that = this; // this is the walker object at this point
    setInterval(this._yarr, 1000); // saving 'this' to equal the walker object when called later
    // this._yarr();
  }
  
}

const walker = new Pirate("Walker", 13);
const mike = new Pirate("Mike", 99);

// walker.yell(); // dont forget to invoke!
// Pirate.revolt(mike);

walker.chant(); // chant called on walker object