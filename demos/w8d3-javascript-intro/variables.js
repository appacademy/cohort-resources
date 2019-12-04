/* const */

// 1. can be declared and assigned ONLY once
//      aka it must be initialized at time of declaration
// 2. it is block scoped (scope?)

// Scope: "The scope of a variable is the region of a program where it can be accessed."

// var is function scoped (ES5)
// let and const are block scoped (ES6)
function scopeExample() {
  // SCOPE A; variables: x, w
  const x = "x";

  // the code block is denoted by { and }
  // this is what the "block" in "block scoped" refers to
  if (true) {
    // SCOPE B; variables: x, y, w
    const y = "y";

    // You can also make a code block by just inserting { and }
    {
      // SCOPE C; variables: x, y, and z and w
      const z = "z";
      var w = "w"; 
    }
  }
}

// In JavaScript, "each variable is accessible in it's direct scope and all scopes nested within that scope"














/* const */

// 1. can be declared and assigned ONLY once
//      (reasignment prohibited, mutations allowed)
//      (it must be initialized at time of declaration)
// 2. it is block scoped (scope?)
// 3. use const when possible

// What will happen here?
function howToConst() {
  const username = 'Toby';

  if (true) {
    // this username variable is different from the one declared earlier
    // because it's in a different scope 
    const username = 'Url';
    console.log(username);
  }

  console.log(username);
}



















// What about here?
function howToConst2() {
  const username = 'Toby';

  // it's a pointless if statement (will always run)
  // this is just for illustrative purposes (to show scope)
  if (true) {
    // if it can't find username in this scope, it will look 
    // in the surrounding scope
    console.log(username);
  }

  console.log(username);
}











// What about here?
function howToConst3() {
  if (true) {
    const username = 'Toby';
    console.log(username);
  }

  // we never declared this username 
  // if we declared username, we would get "undefined"
  console.log(username);
}











/* let */
// 1. Can be declared only once, but reassignment is allowed
// 2. Block scoped

// What will happen here?
function howToLet() {
  let secret = "I'm secretly a spider.";

  if (true) {
    secret = "I'm secretly a snake";
    console.log(secret);
  }

  console.log(secret); // secret = snake
}




// What about here?
function howToLet2() {
  let secret = "I'm secretly a spider.";

  if (true) {
    // adding a declaration like this will work too  
    let secret;  // equivalent to let secret = undefined 
    secret = "I'm secretly a snake";
    console.log(secret);

    // commenting this out, this will work 
    // let secret = "Nope, definitely a spider.";
  }

  console.log(secret);
}




























/* var */
// 1. Function-scoped
// 2. AVOID USING THIS, use let and const

// What happens here?
function howToVar() {
  var username = 'Toby';

  if (true) {
    var username = 'Url';

    console.log(username);
  }

  console.log(username);
}















// What about here?
function howToVar2() {
  // declaration is hoisted so username exists 
  // but username's value is set to undefined 
  console.log(username);
  username = 'something'; 
  console.log(username); 
  if (true) {
    var username = 'Url';
    console.log(username);
  }
  // let username = 'something else'; 

}


