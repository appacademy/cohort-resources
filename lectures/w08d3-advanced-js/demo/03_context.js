function Cat(name, age) {
  this.name = name;
  this.age = age;

  console.log(`${this.name} meows`);

  let int = setInterval(function() {
    console.log(`${this.name} meows at ${new Date()}`);
  }.bind(this), 1000);

  window.int = int;
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

function make_noise(sound, num) {
  console.log(`${this.name} says ${sound} ${num} times`);
}

let bruce = new Cat('bruce', 12);
let fido = new Dog('fido', 7);

// make_noise.apply(fido, ['bark', 20])

make_noise.bind(fido)('bark', 10);
make_noise('meow', 4);
