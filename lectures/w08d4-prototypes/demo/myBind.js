// simple myBind with no args
Function.prototype.myBind = function (ctx) {
  // return a new function that is a slightly modified version
  // let that = this;
  // return function(...args) {
  //   return that.apply(ctx, [...args]);
  // };
  return (...args) => this.call(ctx, ...args);
};

// myBind with arguments
Function.prototype.myBind = function (ctx, ...bindArgs) {
  let that = this;
  return function(...args) {
    return that.call(ctx, ...bindArgs, ...args);
  }
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log(`${this.name} says meow!`);
  }
}

const curie = new Cat("Curie");
// setTimeout(curie.meow.myBind(curie), 1000);


function greet(age, hobby) {
  console.log(`Hi my name is ${this.name}. I am ${age} years old and I like ${hobby}ing.`)
}

