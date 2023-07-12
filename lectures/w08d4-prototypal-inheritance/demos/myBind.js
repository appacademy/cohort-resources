class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log(`${this.name} says meow!`);
  }
}

const curie = new Cat("Curie");
setTimeout(curie.meow, 1000);





function greet(age, hobby) {
  console.log(`Hi my name is ${this.name}. I am ${age} years old and I like ${hobby}ing.`)
}

