// Ways to call a function:
//   ???

function addNums(num1,num2){
  return num1 + num2;
}



function Cat(name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  console.log(`${this.name} says 'meow'`);
};

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(`${this.name} says 'woof'.`);
};

Dog.prototype.sniff = function (otherThing) {
  debugger
  console.log(`${this.name} sniffs ${otherThing.name}`);
};

Dog.prototype.barkAt = function (person) {
  console.log(`${this.name} says 'woof' to ${person}.`);
};


//call & apply invoke the function immediately
//call -> comma separated
//apply -> array
//we pass in an argument to call & apply to make it the context
// change the value of this, prevent "this" becoming the global/window

Dog.prototype.delayedBark = function (){

  //preserve the context
  let that = this;
  setTimeout(function(){
    console.log(`${that.name} says 'woof'.`);
  }, 2500)
  

  // Bound Func (would not work with apply/call because it cannot be invoked just yet)
  setTimeout(this.bark.bind(this), 2500);

  // Arrow Func will inherit surrounding context
  setTimeout(()=>{
    console.log(`${this.name} says 'woof'.`);
  }, 2500);

}
















// function timesDo(num, cb) {
//   for (let i = 0; i < num; i++) {
//     cb();
//   }
// }

// Cat.prototype.makeNamePrinter() {
//   // Return a function that, when invoked, will print the cat's name
// }
