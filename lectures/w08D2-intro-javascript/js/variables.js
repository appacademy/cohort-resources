
// scope: "the scope of a variable is region of a program where the variable can be accessed"


// function scopeExample() {
    //   // SCOPE A; variables: x
    //   const x = "x";
    
    //   // the code block is denoted by { and }
    //   // this is what the "block" in "block scoped" refers to
    //   if (true) {
        //     // SCOPE B; variables: x, y
        //     const y = "y";
        
        //     // You can also make a code block by just inserting { and }
        //     {
            //       // SCOPE C; variables: x, y, and z
            //       const z = "z";
            //     }
            //   }
            // }
            
            
// const 
// 1. can be declared and asigned ONLY once 
     // meaning it must be initialized at the time of declaration 
 // 2. it is block scoped!

//  const bestDogEver = "fluffy";
//  bestDogEver = "remy";


// What will happen here?
// function howToConst() {
//   const username = 'Harold';

//   if (true) {
//     const username = 'Url';

//     console.log(username);
//   }

//   console.log(username);
// }

// howToConst()


// What about here?
// function howToConst2() {
//   const username = 'Harold';

//   if (true) {
//     console.log(username);
    
//   }

//   console.log(username);
// }

// howToConst2();


// What about here?
// function howToConst3() {
//   if (true) {
//     const username = 'Harold';
//     console.log(username);
//   }

//   console.log(username);
// }

// howToConst3();


// let 
// 1. can be declared only once, be reassignment is allowed either when declaration is happening or you can do it later 
// 2. block scoped 

// What will happen here?
// function howToLet() {
//   let secret = "I'm secretly a cat.";

//   if (true) {
//     secret = "I'm secretly a banana";
//     console.log(secret);
//   }

//   console.log(secret);
// }

// howToLet();



// What about here?
// function howToLet2() {
//   let secret = "I'm secretly a cat.";

//   if (true) {
//       secret = "I'm secretly a banana";
//       console.log(secret);
//       let secret = "Nope, definitely a cat.";
    
//   }

//   console.log(secret);
// }

// howToLet2();


// var (DO NOT USE THIS ONE)
// 1. its NOT BLOCKED SCOPED, instead its FUNCTION SCOPED!!


// What happens here?
// function howToVar() {
//   var username = 'Harold';
//   console.log(username)
//   if (true) {
//     var username = 'Url';

//     console.log(username);
//   }

//   console.log(username);
// }

// howToVar();


// What about here?
// function howToVar2() {

//   if (true) {
//     var username = 'Url';

//     console.log(username);
//   }

//   console.log(username);
// }

// howToVar2();



// global (avoid global variables);
// we ommit key words like...
// let
// const 
// var

sillyVariable = "credit Card number"