// simple myBind with no args
  
  
// myBind with arguments

  
  
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
      console.log(message)
    }

  }
  
const curie = new Cat("Curie");
// const drogo = new Cat("Drogo");
// curie.meow(); //function called "method style"
// setTimeout(curie.meow, 1000); //unbound callback returns 'undefined' for this and has lost original ctx
// setTimeout(curie.meow.myBind(curie), 1000); //bound callback keeps ctx intact
// setTimeout(()=> curie.meow(), 1000); //arrow function binds ctx
// curie.catFriends.myBind2(curie, 'Sam', 'Chris', 'Taylor', 'Paulo')('Spencer', 'Ayce');
// curie.catFriends.myBind2(drogo, 'Sam', 'Chris', 'Taylor', 'Paulo')('Spencer', 'Ayce');



