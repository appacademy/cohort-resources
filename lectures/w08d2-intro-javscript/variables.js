// const 
// we strive to use const 

// 1. it can be declared and assigned ONLY ONCE!!!!
//  (it must be initialed/ assigned at the time of declaration);
// this cannot be done!!! 
// const puppy;
// puppy = "remy";

// 2. it is block scoped

// 3. cannot be reassigned, but it CAN be mutated


// function scopeExample() {
//     // SCOPE A; variables: x
//     const x = "x";
//     // the code block is denoted by { and }
//     // this is what the "block" in "block scoped" refers to
//   console.log(z)
//     if (true) {
//       // SCOPE B; variables: x, y
//       const y = "y";
      
//       // You can also make a code block by just inserting { and }
//       {
//         // SCOPE C; variables: x, y, and z
//         const z = "z";
//         console.log(x);
//       }
//     }
//   }



//   in javascript, each variable is accesible in its direct scope and all scopes nested within

//   scopeExample();

// function something(){
//     const greeting = [1,2,3,4,5];
//     if(true){
//         greeting[1] = "*"
//     }
//     console.log(greeting);
// }

// something();


// What will happen here?
// function howToConst() {
//     const username = 'Harold';
  
//     if (true) {
//       username = "URL"
//       console.log(username);
//     }
  
//     console.log(username);
//   }
  
  
//   howToConst()


// function howToConst2() {
//     const username = 'Harold';
  
//     if (true) {
//       console.log(username);
//     }
  
//     console.log(username);
//   }
  
//   howToConst2()


// function howToConst3() {

//     if (true) {
//       const username = 'Harold';
//       console.log(username);
//     }
//     const username = "taylor swift";
//     console.log(username);
//   }
  
  
  
  
//   howToConst3();







// let
// 1. can be declared only once, but reassignment is allowed, and reassignment can happen later

// let dog;
// dog = "remy";

// 2. it is also block scoped

// function howToLet() {
//     let secret = "I'm secretly a cat.";
  
//     if (true) {
//      secret = "I'm secretly a banana";
//       console.log(secret);
//     }
  
//     console.log(secret);
//   }
  
//   howToLet();



// What about here?
// function howToLet2() {
//     let secret = "I'm secretly a cat.";
  
//     if (true) {
//       secret = "I'm secretly a banana";
//       console.log(secret);
  
//       secret = "Nope, definitely a cat.";
//     }
  
//     console.log(secret);
//   }
  
  
//   howToLet2();



// 1. var is older and not what you should use. 
// 2. Function scoped 
// 3. avoid using this one!!!!


// function howToVar() {
//     var username = 'Harold';
  
//     if (true) {
//       var username = 'Url';
  
//       console.log(username);
//     }
  
//     console.log(username);
//   }

//   at any point we think we are making a new variable but really overwriting an existing one.
  
//   howToVar()

// function howToVar2() {

//     if (true) {
//       const username = 'Url';
  
//       console.log(username);
//     }
//     let username;
//     console.log(username);
//   }

//   howToVar2()



// global vairables
// 1. we avoid using this!!!
// 2. can be accessed anywhere in a Javascript progam including the browser window


// sillyVariable = {
//     creditCardNum: 13584354646365,
//     address: "555 elm ave",
//   };
  
//   sillyVariable = "my social security"



const pojo = {
    funcOne: function(){
        console.log("hi");
    },
    funcTwo: function(){
        console.log("hola");
    }
};

// const singer = "shawn mendes";
// { [singer] = "kajhgefjl"}


// pojo.funcOne();
// pojo.funcTwo()
// pojo["funcOne"]()


