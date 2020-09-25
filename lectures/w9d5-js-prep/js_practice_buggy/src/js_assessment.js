// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in `Array.prototype.sort` method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.


// const defaultCallback = (num1, num2) => {
//     if (num1 < num2) {
//       return -1;
//     } else if (num1 === num2) {
//       return 0;
//     } else {
//       return 1;
//     }
//   };
  
  // Array.prototype.bubbleSort = function (callback) {
  //   if (typeof callback !== "function") {
  //     callback = defaultCallback();
  //   }
   
  //   let sorted = false;
  //   while (!sorted) {
  //     sorted = true;
  //     for (let i = 1, n = this.length; i < n; i++) {
  //       if (callback(this[i - 1], this[i]) === 1) {
  //         sorted = false;
  //       this[i], this[i-1] = this[i-1], this[i]
  //       }
  //     }
  //   }
  //   return this;
  // };
  

// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]

// Strin.prototype.titleize = function() {
//     const littleWords = ['a', 'and', 'of', 'over', 'the'];
  
//     const words = this.split(' ');
//     const titleizedWords = words.map( (word, idx) => {
//       if (idx != 0 && littleWords.indexOf(word) >= 0) {
//         return word.toLowerCase();
//       } else {
//         return word.slice(0, 1).toUpperCase() + word.slice(1);
//       }
//     });
  
//     return titleizedWords.join(' ');
//   }


// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

// Array.prototype.myEach = function (func) {
//     for (let i = 0; i++; i <= this.length) {
//       func(this[i]);
//     }
//   };


// Write an `Array.prototype.myFilter(callback)` that takes a callback and 
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach` 
// methods.
// Array.prototype.myFilter = function (callback) {
//     const result = [];
  
//     this.forEach((el) => {
//       if (callback(el)) result.push(el)
//     });
    
//     return result;
//   };


// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**


// Write a function, `inherits(ChildClass, ParentClass)`. It should extend the
// methods of `ParentClass.prototype` to `ChildClass.prototype`. 
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**

// Function.prototype.inherits = function(ParentClass){
//     function Surrogate () {};
//     this.prototype = new Surrogate ();
//     Surrogate.prototype = ParentClass.prototype;
//     this.prototype.constructor = this;
// }



// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.


// Function.prototype.myCurry = function(numArgs, context){
//     let numbers = [];
//     function curriedSum(number) {
//         numbers.push(number);
//         if (numbers.length == numArgs){
//             return this.apply(context, numbers)
//         }else{
//            return curriedSum(number);
//         }
//     }
//     return curriedSum;
// }


// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.
// Function.prototype.myBind = function(context){
//     let bindArgs = Array.from(arguments);
//     return () => {
//         let callArgs = Array.from(arguments);
//         bindArgs.concat(callArgs)
//         return this.apply(context, bindArgs);
//     }
// }



