# Overview

While much of this lecture involves covering new concepts via slides, the demos will be completed in 2 different environments

+ For simple concepts, like demoing `==` vs. `===`, or different types of variable declarations, the chrome console should suffice

+ For more complicated concepts, such as various function declarations, what `this` is, and constructors, make a simple folder with `index.html` and `demo.js` files. Require the `demo.js` file in an html `<script>` tag, and open the webpage in Chrome.

# `==` VS. `===` Demo

In the Chrome console, quickly demonstrate the difference between these two operators. Show some different examples of `==`. Don't press enter immediately - let the class take a guess at the answer first. Some entertaining examples:

**All of the following are only true with `==`**

+ `0 == false`
+ `'0' == false`
+ `1 == '1'`
+ `[] == 0`
+ `null == undefined`
+ `"[object Object]" == {}`

The takeaway? `==` is dangerous, and we should always default to using `===`. You can see the algo for strict equality checking [here](http://ecma-international.org/ecma-262/5.1/#sec-11.9.6)

The reason for this is because of typecasting. JavaScript will always try to cast objects to make operations work. (Javascript attempts to cast objects to primitives, using `toString` or `valueOf`; see [MDN Loose Equality Checking](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using))

---

# Variable Declaration Demo

Give a brief overview of what variable declaration _is_. One cool thing to touch on is that variable **declaration** and variable **assignment** are two different things (i.e. we can _declare_ a variable with `let` without assigning it).

* Declaration: "Hey, here's a variable called Toby"
* Initialization: "Hey, let's give this variable a starting value of 'Good Boy'". This is its 1st assignment.
* Reassignment: "Let's change the value of this variable. Toby jumped on the bed, so his value is now 'Naughty Boy'"

In JS, _technically_ all declarations are also initializations (because they are initialized to undefined, but this is not a meaningful value) and in fact with `const` you *must* initialize it at time of declaration.

You can write the following functions in Console, and ask the class what they think the output will be.

#### `const` demo

- `const` can only be _*declared*_ and _*assigned*_ once.
- It is block scoped

First, do a simple demo to show that you can't redeclare or reassign const.

```js
const fruit = "banana";
const fruit = "mango";
// Uncaught SyntaxError: Identifier 'fruit' has already been declared
```

- Notice the error doesn't say anything about us trying to reassign a constant. _*That's not the error*_.
- The error is that we are trying to re _*declare*_ a variable that can only be declared once.
- We are trying to create a brand new place in memory for a brand new variable, which we can't do with `const` (or `let`)

Now try this:

```js
const fruit = "banana";
fruit = "apple";
// Uncaught TypeError: Assignment to constant variable.
```

- Before we got a `SyntaxError`, now we get a `TypeError`. This is a whole new error, because we are trying to do something to the type `const` which we are not allowed to do.

Ok, now lets do a quick demo that shows how const is scoped (block scope):

```js
function howToConst() {
  const username = 'Toby';

  if (true) {
    const username = 'Url';

    console.log(username);
  }

  console.log(username);
}
```
- This works, why? Two different scopes.
- Demo what happens if you remove the `const username` on line 5 of the function.
  - It still works! This is because you have access to variables defined in an outer scope
- Remove the first const username
  - It then errors out, because you are now referencing the variable declared in the inner-/////// scope.

#### `let` demo

- let is also block scoped
- let can be _declared_ only once, but reassigned as many times as you want.

Once again, quickly demo basic rules. Show how we can only declare once, but now we do not error out during reassignment.

```js
let doggo = "Toby";
let doggo = "Leo";
Uncaught SyntaxError: Identifier 'cat' has already been declared
doggo = "Leo";
// no error
```

And then, demo `let` scoping with a similar function.

```js
function howToLet() {
  let secret = "I'm secretly a snake.";

  if (true) {
      secret = "I'm secretly a spider";
      console.log(secret);
  }

  console.log(secret);
}
```
> **What's going on here? With `let`, we can declare variables without assigning them. We can then reassign them as many times as we want. Remember, though, we can still only declare it once in the same scope. Change around the function to demo this.**

_But_, what would happen if we did this?

```js
function howToLet() {
  let secret = "I'm secretly a snake.";

  if (true) {
      secret = "I'm secretly a spider";
      console.log(secret);

      let secret = "Nope, definitely a snake.";
  }

  console.log(secret);
}
```

- The above is an example of the _temporal dead zone_, which happens for let (and const, but less common). This means you are trying to evaluate (use) the variable _before_ it's been initialized _in the same scope_. `let secret = "Nope..."` is defined in the `if` block, but `secret = I'm secretly a spider` is in that _same_ scope, causing the issue. This has to do with hoisting; in JS, let and const declarations are hoisted, *but not initialized* meaning they have no value.

#### `var` demo

Proceed with caution. Tell the students to **never** use `var`. We only go over it in the first place because `let` and `const` are still relatively new, so you might see it in the wild.

```js
function howToVar() {
  var username = 'Toby';

  if (true) {
    var username = 'Url';

    console.log(username);
  }

  console.log(username);
}
```

> **This is dangerous. At any point in a `function` scope, we could think we are declaring a new variable, but are in fact overwriting some variable somewhere else in our code.**

#### `global` demo

Once again, we should never use this. Briefly demonstrate how, if you declare a global variable, it is available on `window`. This means if we load up our application, any user could see the information in that variable. On top of this, it will overwrite any variables of the same name.

```
sillyVariable = "Should I use these?"

function globalsSuck() {
  sillyVariable = "Do NOT use these";
}

globalsSuck();
console.log(sillyVariable);
```

#### common question:
What is "block scoped"? A block is any expression that is enclosed in `{` and `}`. If this question arises, you can show the student that blocks don't only exist in `for` loops, `while` loops, and `if` statements. You can actually create a new block scope by putting `{` and `}` anywhere in an execution context. i.e:
```
function scoped() {
    let i = 5;
    {
      let i = 7;
      console.log(i);
    }
    console.log(i);
 }
```
---

# Objects Demo

When talking about objects, it's helpful to look at an array in the console. Declare an array, and click down the return value in Chrome Console. Notice how it's just a bunch of key-value pairs? The indices are keys, as are properties such as `length`. We can even declare our own array-like object.

```js
const array = {
  0: 'First',
  1: 'Second',
  2: 'Third',
  length: 3
}
```

If we call `array[0]` or `array.length`, this functions just like a real JS array!

Also demo how to index into the end of an array `arr[arr.length - 1]`

---

# Function Demo

> **The remaining demos should take place in your demo.js file. Simply refresh the index.html file when you write new code, and work in the console.**

### Three primary types of function

#### Named functions

```js
function square(num) {
  return num * num;
}
```
Notice how we can call this above where we declare it in our demos.js file. These are hoisted.

#### Function expressions (Variable Assigned Functions / Anonymous functions)

```js
const feedMe = function(food) {
  return 'Thanks for the' + food + '!';
}
```

This is also a good time to introduce ES6 syntax!

```js
const feedMe = (food) => {
  return 'Thanks for the' + food + '!';
}
```
You can also (optionally) show them when/why we don't need returns

```js
const feedMe = (food) => 'Thanks for the' + food + '!';
```

These are just normal variables, assigned to an anonymous function. Notice how we can't hoist these!

#### Constructor functions

Ok, this is a big one. It's one way of creating classes in JS. Start with a simple `User` class demo. Assign a name and an age that are passed in.

> Use `username` (or any other alternative) instead of `name`. `name` is actually something that's already defined on `window`, so when we talk about `this` it might get confusing.

```js
function User(username, age) {
  this.username = username;
  this.age = age;
}
```

Give a **very brief** overview of `this` (`this` is similar to ruby's `self`. Refers to context or subject), but mention that you will go over what `this` is in more detail shortly.

What if we want to declare an instance method on the user? We _could_ do something like this:

```js
function User(username, age) {
  this.username = moniker;
  this.age = age;
  this.greet = () => "Hello there!"
}
```

This works fine, but we also know that every single user is going to have this function. With our current code, _**Every single user will have a new copy of this function**_. We can do better.

```js
User.prototype.greet = function() {
  return "Hello there!";
}
```
> Be sure to define this one ES5 style. If it's a fat arrow function, it will be bound to the anonymous context, and when you change it to include the name later `this` will be the window. It's not worth going into binding during the Intro JS lecture.

# Function Invocation / `this` demo

## How do we invoke functions / What is `this`

Go through each invocation type, and discuss what `this` is. Put a debugger in the function for each example (brag about how awesome the chrome debugger is), and look at `this`.

#### constructor style invocation

+ Revisit the constructor function for user. What is this inside of the constructor function? We can see that this is initialized to an empty object, and then attributes are put on it.

#### method style invocation

+ What if we changed `User.prototype.greet` to include the user's name?

```js
User.prototype.greet = function() {
  debugger
  return `Hello there! My name is ${this.moniker}`;
}
```

`this` refers to the object that we called it on.

#### function style

```js
function square(num) {
  debugger
  return num * num;
}
```

`this` is the window.

---

# Callbacks Demo

It's helpful to start with a built-in JS example here. In Ruby, `each` takes a block, and there will be a different side-effect based on the logic in that block. Similarly, `forEach` in JS takes a callback (remind them that this just means `a normal function that is passed in as a parameter`).

Show an example of `forEach`, first defining the callback explicitly. It might be worth renaming `callback` to something like `logElement` after to show everyone that the name doesn't matter.

```js
function callback(el) {
  console.log(el + '!');
}

const arr = [1, 2, 3];

arr.forEach(callback);
```

Alternatively, we can just define an anonymous function on the fly

```js
arr.forEach(function(el) {
  console.log(el + '!');
})
```

We also like ES6 syntax for this

```js
arr.forEach(el => console.log(el))
```

Now, let's define a function that takes a callback as an argument. What would that look like?

```js
function doMathWithNumber(number, callback) {
  return callback(number);
}

// Then we invoke it with an anonymous function

doMathWithNumber(5, (num) => {
  return num * num
});
```
We can give it a separate callback to add them, subtract them, or really do anything!

Callback is just a term we use. _**it is an arbitrary parameter name and doesn't determine functionality**_. Worth showing it with a different param name (i.e. `func`)

---

# Closures

A simple closure example that demonstrates how A) Functions are just objects, and _can_ be returned from a function just like any other object, B) We can get a sense of privacy in javascript (since we don't have `private` keywords like ruby).

```js
const feed = function() {
  const foodItems = ['Grits'];

  return function(newItem) {
    foodItems.push(newItem);
    return `I have eaten ${foodItems.join(' and ')}`;
  }
}

const closure = feed();

closure('Apples');
// I have eaten Grits and Apples
closure('Lobster');
// I have eaten Grits and Apples and Lobster
```

Emphasize how the function still has access to the array, even though it's definition doesn't live anywhere in the code. It _closed over_ this array variable.

Another example:

```js
const counter = () => {
  let currentCount = 0; // need to increment (reassign) this later, use 'let'

  return () => {
    currentCount += 1;
    return "currently at " + currentCount;
  };
};

const myCounter = counter();

```

Show above with currentCount as a parameter.


We don't always have to return functions

```js
const counter = () => {
    let count = 0;

    return {
        inc: () => count += 1,
        dec: () => count -= 1,
        reset: () => count = 0
    }
}

const myCounter = counter();

myCounter.inc();
// 1
myCounter.inc();
// 2
myCounter.dec();
// 1
myCounter.reset();
// 0
```
