/* const */

// 1. can be declared and assigned ONLY once
//      (reasignment prohibited, mutations allowed)
//      (it must be initialized at time of declaration)
// 2. it is block scoped
// 3. use const when possible

function scopeExample() {
  // scope A: x
  const x = "x";

  if (true) {
    // scope B: x y 
    const y = "y";

    {
      // scope C: x y and z
      const z = "z";
    }
    // x y 
  }
  // x
}

// In JavaScript, "each variable is accessible in it's 
// direct scope and all scopes nested within that scope"

// What will happen here?
function howToConst() {
  const username = 'Harold';

  if (true) {
    const username = 'Url';

    console.log(username); // Url
  }

  console.log(username); // Harold
}

// What about here?
function howToConst2() {
  const username = 'Harold';

  if (true) {
    console.log(username); // Harold
  }

  console.log(username); // Harold
}

// What about here?
function howToConst3() {
  if (true) {
    const username = 'Harold';
    console.log(username); // Harold
  }

  console.log(username); // Error - variable not defined
}

/* let */
// 1. Can be declared only once (in node) but reassignment
//      is allowed
// 2. Block scoped

// What will happen here?
function howToLet() {
  let secret = "I'm secretly a cat.";
  // let secret = "something else" // bad
  // secret = "something else" // good
  
  if (true) {
    secret = "I'm secretly a banana";
    console.log(secret); // banana
  }

  console.log(secret); // banana
}

// What about here?
function howToLet2() {
  let secret = "I'm secretly a cat.";

  if (true) {
    secret = "I'm secretly a banana";
    console.log(secret); // banana

    let secret = "Nope, definitely a cat.";
  }

  console.log(secret); // cat
}

/* var */
// 1. Function-scoped
// 2. AVOID USING THIS, use let and const

// What happens here?
function howToVar() {
  var username = 'Harold';

  if (true) {
    username = 'Url';

    console.log(username); // Url
  }

  console.log(username); // Url
}

// What about here?
function howToVar2() {

  if (true) {
    var username = 'Url';

    console.log(username); // Url
  }

  console.log(username); // Url
}


