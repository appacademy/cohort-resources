class Cat{
  constructor(name){
    this.name = name;
  }

  meow(){
    console.log(`${this.name} says 'meow'`);
  }

}


class Dog{
  constructor(name){
    this.name = name;
  }

  bark(gibberish){
    console.log(this,"this")
    console.log(`${this.name} says 'woof' and "${gibberish}"`)
  }

}

let kitty = new Cat("kitty");
let puppy = new Dog("puppy")
// kitty.meow()
// 

// binding does NOT invoke!!!!!!
// bind(conext)

// puppy.bark.bind(kitty)()
// puppy.bark("quack")
// puppy.bark.bind(kitty)("moo")

// call 
// call accepts comma separated args, and DOES INVOKE 
// puppy.bark.call(kitty,"moo")


// apply 
// invokes and accepts an array of args 
// puppy.bark.apply(kitty, ["moo"])


Function.prototype.myBind = function(cxt){
  return ()=> this.apply(cxt)
}

puppy.bark.myBind(kitty)()

Function.prototype.myBindTwo = function(cxt) {
  const that = this;
  return function(){
    return that.apply(cxt)
  }
}

puppy.bark.myBindTwo(kitty)()