// Ways to call a function:
//   ???



















function Cat(name) {
    this.name = name;
    debugger
  }
  
  Cat.prototype.meow = function () {
    console.log(`${this.name} says 'meow'`);
  };
  
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
    debugger
    console.log(`${this.name} says 'woof'.`);
  };
  
  Dog.prototype.sniff = function (otherThing) {
    debugger
    console.log(`${this.name} sniffs ${otherThing.name}`);
  };
  
  
  Cat.prototype.detachedMeow
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // function timesDo(num, cb) {
  //   for (let i = 0; i < num; i++) {
  //     cb();
  //   }
  // }
  
  // Cat.prototype.makeNamePrinter() {
  //   // Return a function that, when invoked, will print the cat's name
  // }