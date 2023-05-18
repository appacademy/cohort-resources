//without args
Function.prototype.myBind = function(ctx){
  const func = this;
  return function(){
    return func.apply(ctx);
  }
}


//arrow not allowed for myBind on assessment
Function.prototype.myBind2 = function(ctx){
  return ()=>{
    return this.apply(ctx)
  }
}

Function.prototype.myBind3 = function(ctx, ...bindArgs){ //bind time arguments
  const func = this;
  // return function(...callArgs){ //call time arguments
  //   return func.apply(ctx, bindArgs.concat(callArgs));
  // }
  return function(...callArgs){ //call time arguments
    return func.call(ctx, ...bindArgs, ...callArgs);
  }
}

// curie.meow.bind(curie)()






class Cat {
  constructor(name) {
    this.name = name;
    // this.meow = this.meow.bind(this)
  }

  meow() {
    // console.log(this)
   console.log(`${this.name} says meow!`);
  }
}



const curie = new Cat("Curie");


// setTimeout(curie.meow.myBind(curie), 1000)



function greet(age, hobby) {
  console.log(`Hi my name is ${this.name}. I am ${age} years old and I like ${hobby}ing.`)
}

// greet.myBind3(curie, 2)('meow')
// greet.myBind3(curie)(2, 'meow')
// greet.myBind3(curie, 2, 'meow')()


// setTimeout(greet.myBind3(curie, 2, 'meow'), 1000)