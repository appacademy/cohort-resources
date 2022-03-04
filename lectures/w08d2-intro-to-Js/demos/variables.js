
// if you declare a global variable, it is available on window. This means if we load up our application, any user could see the information in that variable. On top of this, it will overwrite any variables of the same name.

sillyVariable = "Should I use these?";

function globalsSuck() {
  sillyVariable = "Do NOT use these";
}

// globalsSuck();
// console.log(sillyVariable);











/* const */

// 1. can be declared and assigned ONLY once
//      Therefore, it must be initialized at time of declaration
// 2. it is block scoped (scope?)

// Scope: "The scope of a variable is the region of a program where it can be accessed."
// In JavaScript, "each variable is accessible in it's direct scope and all scopes nested within that scope"

function scopeExample() {

  // SCOPE A: x
  const x = "x";
  // let a;
  if (true) {
    // SCOPE B: x, y
    const y = "y";

    {
      // SCOPE C: x , y , z
      const z = "z";
      // a = "pizza"
      console.log(z);
    }

  }
  // console.log(x);
}

// const hash1 = {};













/* const */

// 1. can be declared and assigned ONLY once
//      (reasignment prohibited, mutations allowed)
//      (it must be initialized at time of declaration)
// 2. it is block scoped (scope?)
// 3. use const when possible

// What will happen here?
function howToConst() {
  const username = "Harold"
  if (true){
    const username = "Url"
    console.log(username)
  }
  console.log(username)
}


// howToConst();
















// What about here?
function howToConst2() {
  const username = 'Harold';

  if (true) {
    console.log(username);
  }

  console.log(username);
}

// howToConst2();










// What about here?
function howToConst3() {
  if (true) {
    const username = 'Harold';
    console.log(username);
  }

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


// howToLet()






















/* var */
// 1. Function-scoped
// 2. AVOID USING THIS, use let and const

// What happens here?
function howToVar() {
  var username = 'Harold';

  if (true) {
    username = 'Url';

    console.log(username);
  }

  console.log(username);
}


// how-ToVar();







// What about here?
function howToVar2() {

  if (true) {
    var username = 'Url';

    console.log(username);
  }

  console.log(username);
}


// howToVar2();













