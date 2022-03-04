// simple myBind with no args

Function.prototype.myBind = function(ctx){
  const that = this;
  return function(){
    return that.apply(ctx); //return that.call(ctx);
  }

  // return ()=> this.apply(ctx); //not allowed on assessment

}
  
  
// myBind with arguments
Function.prototype.myBind2 = function(ctx, ...bindArgs){

  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
}

  
  
  class Cat {
    constructor(name) {
      this.name = name;
    }
  
    meow() {
      console.log(`${this.name} says meow!`);
    }

    catFriends(...friends){
      let message = `${this.name}'s friends are`
      friends.slice(0, friends.length -1).forEach((friend)=>{
        message += ` ${friend},`
      })
      message += ` and ${friends[friends.length -1]}!`
      console.log(message);
    }

  }
  
const curie = new Cat("Curie");

// curie.meow();
// setTimeout(curie.meow, 1000);
// setTimeout(curie.meow.myBind(curie), 1000);
// setTimeout(()=> curie.meow(), 1000);
const boundFunc = curie.catFriends.myBind2(curie, 'Sam', 'Chris', 'Taylor', 'Paulo')
boundFunc('Spencer', 'Ayce');




