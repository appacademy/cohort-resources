// Ways to call a function:
//   ???

// **Style**: Function
// **How to Invoke**: func()
// **this**: window/global, loses context  

// **Style**: Method
// **How to Invoke**: object.func()
// **this**: object

// **Style**: Constructor
// **How to Invoke**: new func()
// **this**: object being created


























class Cat {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
    console.log(this)
    console.log(`^from constructor^`)
  }

  cuteStatement() {
    console.log(this)
    console.log(`^from cuteStatement^`)
    return `${this.name} loves ${this.owner}. :3`;
    // cannot console.log after a return
  }

  meow() {
    // debugger
    console.log(this)
    console.log(`^from meow^`)
    return `${this.name} says meow`;
  }

}
const kingLouie = new Cat("king louie", "mia")
// console.log(kingLouie.cuteStatement())
// console.log(kingLouie.meow())

function timesDo(num, callback) {
  // debugger
  for (let i = 0; i < num; i++) {
    console.log(callback()) // callbacks are always called function style
  }
}

// let detachedMeow = kingLouie.meow // callbacks are not invoked when passed into a higher order function, HOF will invoke for us 
// console.log(timesDo(3, detachedMeow))

// function betterDetachedMeow() {
//   return kingLouie.meow(); // meow is being invoked method style within the callback
// }

// console.log(timesDo(3, betterDetachedMeow));

// bind method
// const boundMeow = detachedMeow.bind(kingLouie)
// console.log(timesDo(7, boundMeow))


// Cat.prototype.sayHi = function () {
//   let that = this;
//   console.log(this); // {name: 'king louie', owner: 'mia'}
//   console.log(`from the sayHi method`)
//  return function() {
//   timesDo(3, that.meow.bind(that)) // timesDo is taking a cb, 
//  }

// }

// console.log(kingLouie.sayHi()());


Cat.prototype.sayHi = function() {

  return () => {
    timesDo(3, this.meow.bind(this))
  }
}

console.log(kingLouie.sayHi()());















