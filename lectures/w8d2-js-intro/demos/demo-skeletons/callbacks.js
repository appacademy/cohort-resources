/* forEach */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


// We want to declare a named function that logs the argument
function logElement(el) {
  // write code here!
  return el * 3
};

const arr = [1, 2, 3];

// logElement is a callback for the forEach function
// callback means the parameter for a function is of type: function
// logElement is a function
// forEach will call the logElement for us

// how do we call forEach???

// console.log(arr.map((num)=>logElement(num)))





















// We can also provide an anonymous function as a callback, in place
// This is VERY common in JS

// arr.forEach(function(el) {
//   console.log(el + '!');
// });









// Can we use an arrow function?

// arr.forEach(function(el) {
//   console.log(el + '!!!');
// });














// const callback = function(el) {
  

// }

// /* Writing our own function that has a callback (function) parameter */
// function doMathWithNumber(num, callback) {
//   // write code here!

//   return num * num
// }

// doMathWithNumber(5,callback);

// function mathArray(array, func){
//   let newArray = [];
//   array.forEach((number)=>{
//     let callbackResult = func(number);
//     newArray.push(callbackResult);

//   })
//   return newArray


// }

//   console.log(mathArray([1,2,3,4,5], (number)=>{
//     return number * 3
//   }))






function mathArray (array, func){
  let newArray = [];
  array.forEach((num)=>{
    let result = func(num);
    newArray.push(result);
  })
  return newArray;

}










function doubler(num){
  return num * 2;
}


function decade(num){
  return num * 10;
}


function century(num){
  return num * 100;
}
let arrTwo = [1,2,3]


console.log(mathArray(arrTwo, (num) =>decade(num)))




















// let array = [1,2,3];


// ()=>{}

// array.forEach((number)=>{
//   number * 3;
// })

// array.forEach(function(number){
//   number * 3
// })

function stuff(array){
  
  function otherStuff(){
    array[0] = "s"
  }
}