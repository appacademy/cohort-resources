class Cat{
  constructor(name){
    this.name = name;
    // this.meow = this.meow.bind(this)
  }

  meow(){
    // debugger
    console.log(`${this.name} says 'meow'`);
  }

}


class Dog{
  constructor(name){
    this.name = name;
  }

  bark(gibberish){
    console.log(`${this.name} says 'woof' and "${gibberish}"`)
  }

}

let kitty = new Cat("kitty");
let puppy = new Dog("puppy");

// setTimeout(kitty.meow, 3000);


Function.prototype.myBind = function(ctx){
  const that = this;
  return function(){
    return that.apply(ctx)
  }
}

Function.prototype.myBind2 = function(ctx){
  return ()=>{
    return this.apply(ctx)
  }
}


