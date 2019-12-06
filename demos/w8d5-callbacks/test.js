// JS functions go here!!

const tameImpala = {
    info: 'The best thing to come out of Australia, Tame Impala',
    voiceRank: "Best",
    readStats: function readStats() {
        console.log(this.info);
        console.log(this.voiceRank);
    },
    makeSongs: function makeSongs(song1, song2) {
        console.log(`${this.info} is so awesome. They sing ${song1} and ${song2}`);
    },
    anotherObj: {
        info: 'Whatever',
        someStuff: function() {
            tameImpala.readStats.bind(this);
        }
    }
}

const andy = {
    info: 'Andy, a regular Australian bloke',
    voiceRank: 'Not too good',
    someObj: {
        someFunct: function() {
            console.log(this); // 'this' is now the someFunct object
            console.log(this.info); // this will return undefined
            // if we want to reference the parent object,
            // we can reference it as below
            console.log(s.info);
        }
    }
}

tameImpala.readStats();

tameImpala.readStats.call(andy); // applies 'andy' as the context for .readStats()

const boundSongMaker = tameImpala.readStats.bind(andy);


function adder() { // rest operator captures remaining arguments in an Array
    // let sum = startingNum;
    // console.log(arguments[2]);
    // arguments.forEach( el => console.log(el));
    // console.dir(arguments);
    // console.dir([1,2,3,4]);
    let sum = 0;
    let args = Array.from(arguments);

    // console.log(...otherNums); // spread operator spreads array into separate args

    args.forEach( el => sum = el + sum );

    return sum;
}

function calc(func, ...otherArgs) {
    let result = func(...otherArgs);

    console.log(result);
};




// ES5 Constructor syntax
function AAPodES5(name, numStudents) {
    this.name = name;
    this.numStudents = numStudents;
    this.getJobs = function() {
        console.log(`Mike is so cool. He got ${this.numStudents} jobs for everyone in ${this.name}`);
    }
}

let pod = new AAPodES5('Fishermans Wharf', 34);



// ES6 Class syntax
class AAPod {
    constructor(name, numStudents) {
        this.name = name;
        this.numStudents = numStudents;

        // permanently binds the AAPod instance to this._delay
        this._delay = this._delay.bind(this);
    }

    // instance methods
    getJobs() {
        console.log(`Mike is so cool. He got ${this.numStudents} jobs for everyone in ${this.name}`);
    }

    podPride() {
        // setInterval is a window method, without binding this._delay will lose 
        // its context to AAPod
        setInterval(this._delay, 3000);
    }

    // using _ to start a function name is simply naming convention for 
    // helper methods and callbacks
    _delay() {
        console.log(`We are ${this.name}. Hear us ROOOAAARRR!!!?`);
    }


    // class methods
    static revolt(otherPod) {
        console.log(`That guy Mike is the worst. He better get at least ${otherPod.numStudents} more jobs`);
        console.dir(this);
    }
}

const fishWharf = new AAPod('Fishermans Wharf', 34);
const landsEnd = new AAPod('Lands End', 41);




