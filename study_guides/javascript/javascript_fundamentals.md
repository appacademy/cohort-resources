# const vs let 

## const 
* not able to reassign 
```javascript
const banana = "yellow";
banana = "blue";
ERROR!
```

## let 
* able to reassign 
```javascript
let banana = "yellow";
banana = "blue";
```
* cannot redeclare
```javascript
let mango = "orange";
let mango = "yellow";
ERROR!
```

# block 

* collection of statements within curly braces
* therefore you cannot declare variables of the same name within the same block scope.
* the code below works because we are declaring username within two different scopes.  

```javascript
function howToConst(){
    //function scope
    const username = "Harold"

    if(true){
        //if conditional scope 
        const username = "Suzy";
        console.log(username);
    }
    console.log(username)
}
```

```javascript
function howToConst(){
    const username = "Harold"

    if(true){
        const username = "Suzy";
        console.log(username);
    }
    console.log(username)
}
```

* From the example above we will see that "Suzy" will print first and then "Harold" will print. 

* you can declare a variable of the same name as long as their in different scopes. 

```javascript
function howToConst(){
    const username = "Harold"

    if(true){
        console.log(username);
    }
    console.log(username)
}
```

* in this example if we've removed the const declaration within the if scope.  Now what will be printed? 

* Harold will print twice.  This is a result of lexical scope. In javascript lexical scoping is when you set the scope of a variable so that it may only be called (referenced) from within the block of code in which it is defined. Since the if statement is within the function scope, then username is able to be printed without it being reassigned.

# hoisting 
* This is a term that says that when there is declared variable within the scope the compiliation will hoist the declaration to the top of the block and see that there is some sort of declaration within the block.  var declarations are initiales with undefined but let and const declarations remain unitialized. If a let or const variable gets reassigned before the declaration then it will give an error.  Let's look at the code below: 

```javascript
function howToLet() {
  let secret = "I'm secretly a fish.";

  if (true) {
      secret = "I'm secretly a squirrel";
      console.log(secret);
      let secret = "I'm secretly a squirrel";
  }

  console.log(secret);
}
```
* we will get an error in the code above, but why? 
* All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.
[temporal-dead-zone](https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda)

# var 
* NEVER USE THIS 
* if you declare a global variable, it is available on `window`. This means if we load up our application, any user could see the information in that variable. On top of this, it will overwrite any variables of the same name.

## Primitives
  + Boolean
  + Null
  + Undefined
  + Number
  + String
  + Symbols (ES6)

* datatype that is not an object and has no methods

# objects

* in the code below we declare our own array object

```javascript 
const array = {
  0: 'First',
  1: 'Second',
  2: 'Third',
  length: 3
}
```
* this is how you create objects in javascript. 




