
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


// class Example {
//   constructor(){
//       console.log("Constructor", this)
//       setTimeout(() => { console.log("Arrow", this) }, 0)
//       setTimeout(function(){ console.log("Function declaration", this) }, 0)
//   }
// }
