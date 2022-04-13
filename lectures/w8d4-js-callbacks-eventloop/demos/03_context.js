// Ways to call a function:
//   ???




class Cat {

  constructor(name, owner) {
      this.name = name;
      this.owner = owner;
      // debugger
  }

  cuteStatement() {
      return `${this.name} loves ${this.owner}. :3`;
  }

  meow() {
      // debugger
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
  garfield = new Cat('Garfield', 'Taylor')
  detachedMeow = garfield.meow
  // times(3, detachedMeow)

// betterDetachedMeow
  function betterDetachedMeow() {
    return garfield.meow()
  }

// boundMeow
  let boundMeow = detachedMeow.bind(garfield)
// ---------------------------- context matters ----------------------------

// Since the detachedMeow example is a bit isolated, let's see why context 
// matters as we attempt to call instance methods inside other instance methods

// Create a Cat.prototype.sayHi is going to call meow 3 times.

Cat.prototype.sayHi = function() {
  // const that = this

  // return function() {
  //     times(3, that.meow.bind(that))
  // }

  return () => {
      times(3, ()=>this.meow())
  }
}

class Dog {
  constructor(name, owner) {
      this.name = name;
      this.owner = owner;
  }

  bark(action) {
      return `${this.name} says woof! and ${action}`
  }
}