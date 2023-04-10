// /* const */

// // 1. can be declared and assigned ONLY once
// //      aka it must be initialized at time of declaration
// // 2. it is block scoped (scope?)

// // Scope: "The scope of a variable is the region of a program where it can be accessed."


// // let y = "hola"; 
// // const x = ["a","b","c"]; 
// //  if(true ){
// //   x[1] = "T"
// //  }

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

// // // In JavaScript, "each variable is accessible in it's direct scope and all scopes nested within that scope"














/* const */

// 1. can be declared and assigned ONLY once
//      (reasignment prohibited, mutations allowed)
//      (it must be initialized at time of declaration)
// 2. it is block scoped (scope?)
// 3. use const when possible

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




// // const firstName = "Diego";

// // firstName = "Michael"

















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











/* let */
// 1. Can be declared only once, but reassignment is allowed
// 2. Block scoped



// let something = "something"

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
//     secret = "I'm secretly a banana";
//     console.log(secret);
//     let secret = "Nope, definitely a cat.";
    
//   }

//   console.log(secret);
// }

// howToLet2();



























/* var */
// 1. Function-scoped
// 2. AVOID USING THIS, use let and const

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


sillyVariable = "creditCardNumber"








// // if(0 === 0){
// //   // do stuff
// // }else if (0 === 1){
// // // do this instead
// // }else {
// //   // do something else 
// // }

// // if(0 === 0) return true;


// let array = [1,2,3,4]

// for(let i = 0; i < array.length; i++ ){
//   // we can return
// }

// array.forEach((number)=>{
//   // we cannot return here
// })

// function doubler(array){
//  return array.map((number)=>{
//    return number * 2
//  })
// }



// let hashOfFuncs = {
//   doubler: function(array, modifier){
//     return array.map(number => {
//       console.log(modifier, "modifier")
//       return number * modifier
//     })
//   },
//   century: function(array){
//    return array.map(number => number * 100)
//   }
// };

// console.log(hashOfFuncs.doubler([1,2,3,4]))