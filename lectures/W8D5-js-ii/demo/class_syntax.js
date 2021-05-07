// Class Syntax Demo

// look back at ES5 "constructor style" from earlier for comparison


// ES6 Class Syntax

class Pirate {
    constructor(name, numTatts) {
        this.name = name;
        this.numTatts = numTatts;
        console.log('Constructor this: ', this);
        this.yell = this.yell.bind(this)
    }

    yell() {
        console.log(`Yarr, me name is ${this.name} and all ${this.numTatts} of these tatts are for me mum.`);
    }

    static revolt(otherPirate) {
        console.log(`Arrg, you need at least ${otherPirate.numTatts} more tatts.`);
        console.dir(this);
    }

    chant() {
        setInterval(this.yell, 1000); // time in miliseconds
    }

    _yarr() {
        console.log("Yarr");
    }

}

const erik = new Pirate('Erik', 9);
const mike = new Pirate('Mike', 99);

erik.chant();
// Pirate.revolt(mike);