class Cat {
  constructor(name) {
    this.name = name;
  }

  meows() {
    console.log(`${this.name} says meow!`);
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

// this is the exact same thing as lines 6-8!
Cat.prototype.meows = function () {
  console.log(`${this.name} says meow!`);
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");