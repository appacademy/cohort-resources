
function Cat(name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  console.log(`${this.name} says 'meow'`);
};


function timesDo(num, cb) {
  for (let i = 0; i < num; i++) {
    cb();
  }
}



function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(`${this.name} says 'woof'.`);
};

Dog.prototype.sniff = function (otherThing) {
  console.log(`${this.name} sniffs ${otherThing.name}`);
};












// class Example {
//   constructor(){
//       console.log("Constructor", this)
//       setTimeout(() => { console.log("Arrow", this) }, 0)
//       setTimeout(function(){ console.log("Function declaration", this) }, 0)
//   }
// }
