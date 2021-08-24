/* const */

// 1. can be declared and assigned ONLY once
//      aka it must be initialized/assigned at time of declaration
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
      console.log(x);
    }
  }
}
// In JavaScript, "each variable is accessible in it's direct scope and all scopes nested within that scope"

// scopeExample();













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
    username = "URL"
    console.log(username);
  }

  console.log(username);
}


// howToConst()


function mutateConst() {
  const array = [1, 2, 3, 4, 5]
  if (true) {
    array[0] = "a"
  }
  console.log(array)
}


// mutateConst()










// What about here?
function howToConst2() {
  const username = 'Harold';

  if (true) {
    console.log(username);
  }

  console.log(username);
}

// howToConst2()









// What about here?
function howToConst3() {

  if (true) {
    const username = 'Harold';
    console.log(username);
  }
  const username = "taylor swift";
  console.log(username);
}




// howToConst3();






/* let */
// 1. Can be declared only once, but reassignment is allowed
// 2. Block scoped

// What will happen here?
function howToLet() {
  let secret = "I'm secretly a cat.";

  if (true) {
   secret = "I'm secretly a banana";
    console.log(secret);
  }

  console.log(secret);
}

// howToLet();


// What about here?
function howToLet2() {
  let secret = "I'm secretly a cat.";

  if (true) {
    secret = "I'm secretly a banana";
    console.log(secret);

    secret = "Nope, definitely a cat.";
  }

  console.log(secret);
}


// howToLet2();


function butWhy(input) {
  let favColor;
  if (input === "primary") {
    favColor = "Red";
  } else if (input === "secondary") {
    favColor = "Green";
  }
  console.log(`my favorite color is ${favColor}`);
}

// butWhy("secondary");
// butWhy("primary");



























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

howToVar()


// This is dangerous. At any point in a `function` scope, we could think we are declaring a new variable, but are in fact overwriting some variable somewhere else in our code.**












// What about here?
function howToVar2() {

  if (true) {
    var username = 'Url';

    console.log(username);
  }

  console.log(username);
}

// howToVar2()


// global variables 
//        Once again, we should never use this
//        globaly scoped (can be accessed anywhere in a Javascript program)
// it is available on `window`. This means if we load up our application, any user could see the information in that variable. On top of this, it will overwrite any variables of the same name

sillyVariable = {
  creditCardNum: 13584354646365,
  address: "555 elm ave",
};

sillyVariable = "my social security"

