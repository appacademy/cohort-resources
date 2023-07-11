
// named function
// hoisted to the top of scope. You can invoke them before theyre declared
something()
function something(){
    console.log("hi hi hi")
}


// functional expression
// somethingElse()
const somethingElse = function(){
    console.log("hello hola")
}


// fat arrow function have a special power we will learn later this week
const somethingDifferent = ()=>{

}

// this is where we can have an implicit return, one liners
// also paranthesis in this case are optional IF**** you have only 1 arg
const somthingEvenMoreDifferent = value => `thank you ${value}`;

// constructor 


// Always name constructor functions staring with a capital letter!!!! 
// this makes is easier to determine that it is in fact a constructor function/ is convention
function User(username, age){

    // these are like @ in ruby
    // creating instance variables
  this.username = username;
  this.age = age;
//   console.log(this);

}



User.prototype.tackle = function(){
    console.log("hahah I took you down!!")
}

User.prototype.fireBreat = function(){
    console.log(this.username);
    console.log("fireeeeeeeee blast!!");
}


const diego = new User("DRC", 31);

// diego.tackle();
diego.fireBreat()

// monkey match
// Array.prototype.doubler = function(){

// }


// newer syntax
// class User {
//     constructor(username, age){
    // this.username = username;
    // this.age = age;

//     }



//     tackle(){

//     }
// }



