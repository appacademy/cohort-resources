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


const defaultCallback = (num1, num2) => {
    if (num1 < num2) {
      return -1;
    } else if (num1 === num2) {
      return 0;
    } else {
      return 1;
    }
  };
  
  Array.prototype.bubbleSort = function (callback) { //cb = defaultCallback
    // if (typeof callback !== "function") {
    //   callback = defaultCallback;
    //   //don't invoke functions if assigning it to a variable
    // }
    callback ||= defaultCallback;

    let arr = this.slice(); //creating a copy 
   
    let sorted = false;
    while (!sorted) {
      sorted = true;
      // let n = this.length;
      for (let i = 1, n = arr.length; i < n; i++) {
        if (callback(arr[i - 1], arr[i]) === 1) {
          sorted = false;
          [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        }
      }
    }
    return arr;
  };

  // console.log([3, 1, 2, 5, 4].bubbleSort());
  

// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]

function titleize(str){
  //this === window 
    const littleWords = ['a', 'and', 'of', 'over', 'the'];
  
    const words = str.split(' ');
    const titleizedWords = words.map( (word, idx) => {
      if (idx !== 0 && littleWords.indexOf(word) >= 0) {
        return word.toLowerCase();
      } else {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
      }
    });
  
    return titleizedWords.join(' ');
  }


// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

Array.prototype.myEach = function (func) {
    for (let i = 0; i <= this.length; i ++ ) {
      func(this[i]);
    }
  };


// Write an `Array.prototype.myFilter(callback)` that takes a callback and 
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach` 
// methods.
Array.prototype.myFilter = function (callback) {
    const result = [];
  
    this.myEach((el) => {
      if (callback(el)) result.push(el)
    });
    
    return result;
  };


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

Function.prototype.inherits = function(ParentClass){
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate ();
    this.prototype.constructor = this;
}

//child.inherits(Parent); 
//if takes in childClass => parent.inherits(child);

// function inherits(childClass, parentClass){
//   function Surrogate(){};
//   Surrogate.prototype = parentClass.prototype;
//   childClass.prototype = new Surrogate();
//   childClass.prototype.constructor = childClass;
// }

// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.


Function.prototype.myCurry = function(numArgs, context){
    let numbers = [];
    //this === the function calling myCurry
    // let that = this;
    // function curriedSum(number) {
    //   //this === window 
    //     numbers.push(number);
    //     if (numbers.length == numArgs){
    //         return that.apply(context, numbers) //that.apply(null, numbers) 
    //         //that.apply("bananannananana", numbers)
    //     }else{
    //        return curriedSum(number);
    //     }
    // }
    const curriedSum = (number) => {
      //this === the function calling myCurry. came from outer scope 
      numbers.push(number);
      if (numbers.length === numArgs) { //== is RUBY. WHO DAT?
        // return this.apply(context, numbers); //this.apply(null, numbers)
        //this.apply("bananannananana", numbers)
        // return this.call(context, ...numbers);
        return this(...numbers); //context doesnt matter 

      } else {
        return curriedSum; //return a function and not the returned value of the invoked function
      }
    }
    return curriedSum;
}


// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.
Function.prototype.myBind = function(context){
    let bindArgs = Array.from(arguments);
    let that = this; 
    return function(){
        let callArgs = Array.from(arguments);
        // bindArgs =  //concat doesnt save/mutate
        let banana = bindArgs.concat(callArgs).slice(1);
        return that.apply(context, banana);
    }
}
//ES5 ONLY
//Array.prototype.newFunc = () => {} THIS IS THE WINDOW. DONT DO THIS

//base converter, caesar cipher, permutations, pig latinfy, prime factorization, subsets => bonus 
//slice => copy
//concat doesn't modify 
//[ this[i], this[i + 1] ] = [ this[i + 1], this[i] ] => makes a swap 
//[] !== []  {} !== {} don't compare 
// === 
//DEBUGGER FOR LIFE
// }
// } => syntax errors will change all specs from green to red. CHECK CHROME CONSOLE 

