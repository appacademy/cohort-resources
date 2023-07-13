//simple bind with no additional args

Function.prototype.myBind = function(ctx){
  //return a bound version of the original function
  // const func = this;
  // return function(){
  //   return func.apply(ctx)
  // }

  //can't use arrow function in myBind on assessment
  return ()=> {
    return this.apply(ctx)
  }
}

//bind with args - args at bindtime and at calltime


Function.prototype.myBind2 = function(ctx, ...bindArgs){ //bindtime
  const func = this;

  return function(...callArgs){ //calltime
    // return func.apply(ctx, bindArgs.concat(callArgs)) //arrayed args
    return func.call(ctx, ...bindArgs, ...callArgs) //comma separated args
  }
}






function greet(age, hobby) {
  console.log(`Hi my name is ${this.name}. I am ${age} years old and I like ${hobby}ing.`)
}


// greet.myBind2({name: 'Taylor'}, 25)('ski')

setTimeout(greet.myBind2({name: 'Taylor'}, 25, 'ski'), 1000)




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









