//Write a function, myCurry, that collects a predetermined number of args 
//before invoking the original receiver function with those args.

Function.prototype.myCurry = function(numArgs){
  let fnc = this;
  let arr = [];
  return function _function(...nums){
    arr.push(...nums);
    // debugger
    if(arr.length >= numArgs){
      return fnc(...arr.slice(0, numArgs))
    } else {
      return _function
    }
  }
}



//function to call curry on:

let sum = function(...args){
  // debugger
  let sum = 0; 
  for (let i = 0; i < args.length; i++) {
      sum += args[i]
  }

  return sum;
}

//write a curry function non-monkey patch and takes in context









//person objects

const carlos = {
  name: "carlos",
  age: 24,
  sayName: function(){
      console.log(this.name)
  },
  greet: function(...greetings) {
      const greetingsString = greetings.join(", ");
      return `${greetingsString} my name is ${this.name}`;
  }
}

const sandra = {
  name: "sandra",
  age: 30
}