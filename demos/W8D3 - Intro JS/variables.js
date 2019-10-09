/* const */

// 1. can be declared and assigned ONLY once
//      aka it must be initialized at time of declaration
// 2. it is block scoped (scope?)

// Scope: "The scope of a variable is the region of a program where it can be accessed."

function scopeExample() {
  // SCOPE A; variables: x
  const x = "x";

  // the code block is denoted by { and }
  // this is what the "block" in "block scoped" refers to
  if (true) {
    // SCOPE B; variables: x, y
    const y = "y";

    // You can also make a code block by just inserting { and }
    {
      // SCOPE C; variables: x, y, and z
      const z = "z";
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
  const username = 'Harold';

  if (true) {
    const username = 'Url'; // known as shadowing

    console.log(username); // 'Url'
  }

  console.log(username); // 'Harold'
}



















// What about here?
function howToConst2() {
  const username = 'Harold';

  if (true) {
    console.log(username); // 'Harold'
  }

  console.log(username); // 'Harold'
}











// What about here?
function howToConst3() {
  // scope A
  if (true) {
    // scope B
    const username = 'Harold';
    console.log(username);
  }

  console.log(username); // error out here b/c username is not in scope A
}











/* let */
// 1. Can be declared only once, but reassignment is allowed
// 2. Block scoped

// What will happen here?
function howToLet() {
  let secret = "I'm secretly a cat.";

  if (true) {
    let secret = "I'm secretly a banana"; // did not reassign secret; shadowing
    console.log(secret);
  }

  console.log(secret);
}




// What about here?
function howToLet2() {
  let secret = "I'm secretly a cat.";

  if (true) {
    // in a local scope, if you want to access a local variable, 
    // make sure to declare before using
    console.log(secret); // "I'm secretly a banana"
    
    let secret = "Nope, definitely a cat."; // temporal dead zone
    secret = "I'm secretly a banana";
  }

  console.log(secret); // "I'm secretly a banana"
}




























/* var */
// 1. Function-scoped
// 2. AVOID USING THIS, use let and const

// What happens here?
function howToVar() {
  var username = 'Harold';

  if (true) {
    var username = 'Url';

    console.log(username);
  }

  console.log(username);
}















// What about here?
function howToVar2() {
  
  if (true) {
    var username = 'Url';

    console.log(username);
  }

  console.log(username);
}


// global variable (avoid this)
function global() {
  banana = 10;
}