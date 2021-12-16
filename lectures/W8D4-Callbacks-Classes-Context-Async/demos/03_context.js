// ------------ Here's our ES6 Cat class from the previous demo ------------

class Cat {

    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
    }

    cuteStatement() {
        return `${this.name} loves ${this.owner}. :3`;
    }

    meow() {
        return `${this.name} says meow`;
    }

}

// --------- loss of context, then preservation/binding of context ---------

// First create a times function that will invoke a callback num times
function times(num, callback) {
    for (let i = 0; i < num; i++) {
        console.log(callback())
    }
}

// detachedMeow
nemo = new Cat('Captain Nemo', "Let's be real, he owns me and I")
let detachedMeow = nemo.meow
// times(3, detachedMeow)

// betterDetachedMeow
function betterDetachedMeow() {
    return nemo.meow()
}

// boundMeow
boundMeow = detachedMeow.bind(nemo)

// ---------------------------- context matters ----------------------------

// Since the detachedMeow example is a bit isolated, let's see why context 
// matters as we attempt to call instance methods inside other instance methods

// Create a Cat.prototype.sayHi is going to call meow 3 times.

Cat.prototype.sayHi = function() {
    let that = this

    return function() {
        times(3, that.meow.bind(that))
    }

    // ES6 lets this through into the inner fucntion being defined
    // return () => {
    //     times(3, this.meow.bind(this))
    // }

}