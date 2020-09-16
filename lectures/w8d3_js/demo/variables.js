/* const */

function scopeExample() {
  const x = "x";
  debugger
  if (true) {
    const y = "y";
    debugger
    {
      const z = "z";
      debugger
    }
  }
}
//inner scope- access to variables outside of the scope 
//outer scope- will not have access to variables in inner scopes


function howToConst() {
  const username = 'Harold';

  if (true) {
    //new block scope
    const username = 'Url';

    console.log(username);
    //line 46 declaration
  }

  console.log(username);
  //line 42 declaration
}


// What about here?
function howToConst2() {
  const username = 'Harold';

  if (true) {
    //checks within its own scope first for a variable called username
    //if can't find, goes up one scope level aka scope chaining
    console.log(username);
  }

  console.log(username);
}



// What about here?
function howToConst3() {
  if (true) {
    const username = 'Harold';
    console.log(username);
  }

  console.log(username);
  //outer scope does not have access to inner scope const variables 
}


/* let */
//let is also block scoped 

// What will happen here?
function howToLet() {
  let secret = "I'm secretly a cat.";

  if (true) {
      let secret = "I'm secretly a banana";
      console.log(secret);
  }

  console.log(secret);
  //declared from line 163
}

function howToLet2() {
  let secret = "I'm secretly a cat.";

  if (true) {
    secret = "I'm secretly a banana";
    //the same as the secret in 202 and now reassigning
    //can modify outer scope let variables 
    console.log(secret);
  }

  console.log(secret);
  //printing the reassignment; the change persists 
}

// What about here?
function howToLet3() {
  let secret = "I'm secretly a cat.";

  if (true) {
    //let secret;
    // let secret = "Nope, definitely a cat."; will work 
    secret = "I'm secretly a banana";
    console.log(secret);
    let secret = "Nope, definitely a cat.";

  }

  console.log(secret);
}

//Hoisting 
//JS is aware of all variable declarations; moves to top 
//line 248: JS is aware of "secret", waiting for initialization


//DONT USE VAR
//DONT USE VAR
//DONT USE VAR
//DONT USE VAR
//DONT USE VAR



/* var */
// AVOID USING THIS, use let and const

// What happens here?
function howToVar() { //function/local scope
  var username = 'Harold';

  // if (true)=> js must wrap conditionals in ()
  {
    var username = 'Url'; //redeclaration 

    console.log(username);
  }

  console.log(username);
}
//var is function scoped 

//Scopes: Global, function/local, and block



// What about here?
function howToVar2() {

  if (true) {
    var username = 'Url';

    console.log(username);
  }

  console.log(username);
}




































