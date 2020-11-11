# W8D3 - JavaScript!

#### ![javascript](https://www.javatpoint.com/images/javascript/javascript_logo.png)

---

## Lecture Objectives

+ Wow JavaScript is cool!
+ Discuss differences between JavaScript and Ruby
+ Baseline understanding of a JS Object (POJO)
+ Intro to functions, callbacks, closures (...aka functions)
+ Wat is `this`

---

## Lecture Outline

1. Ruby vs JavaScript 🤯
	+ style and syntax 💅🏼
	+ variable declaration 👾
	+ data types 😎
1. Objects (POJOs) 🍌
1. Functions - callbacks and closures ☎️
1. KAHOOT 🐥
1. WAT 🌈

---

## Exciting things to come!

* [Archaea](https://kayandrewj.github.io/Archaea/index.html)
* [Nyan-Rainbow](http://paperjs.org/examples/nyan-rainbow/)
* [Retro 3D](https://codepen.io/dallashall/full/RxZvZK/)
* [LandslideJS](https://landslidejs.herokuapp.com/)
* [Wat](https://samwalker191.github.io/wat/)

---

## Style & Syntax JS vs. Ruby

+ Explicit returns
+ You have to "declare" your variables
+ Use semicolons
+ `camelCase` instead of `snake_case`
+ [`==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using) and `===` (use the latter _almost_ always!)
+ No negative indexing
+ 7 Falsey values

Note:
+ There is one implicit return -> one liner arrow functions
+ You can have undeclared variables (they are simply global variables)
+ https://exploringjs.com/impatient-js/ch_syntax.html#semicolons Semicolons go after every statement (or instruction), except they don't go after a code block
+ Don't rely on ASI (automatic semicolon insertion). Semicolons should go after most statements, except closing blocks (`}`).
*CHROME DEMO: ==*
---

## == VS. === Demo

---

## The Falsy-7

***Be careful when checking for truthiness!***

- `null`
- `undefined`
- `0`
- `-0`
- `NaN`
- `''`
- `false`

Note:

- Can check with `!!` or `Boolean(value)`
- Ask - what are the falsey values in Ruby? (false and nil)

---

## Variable Declaration

`const`, `let`, `var`, and (😈) **global**
* Declaration
* Initialization
* Reassignment

Note:
* Declaration: "Hey, here's a variable called banana"
* Initialization: "Hey, let's give this variable a starting value" aka 1st assignment.
* Assignment: "Let's change the value of this variable"
* In JS, _technically_ all declarations are also initializations (because they are initialized to undefined, but this is not a meaningful value) and in fact with `const` you *must* initialize it at time of declaration.
* Temporal dead zones: Cannot access 'foo' before initialization if you try to use a let or const before initialization happens
* JS hoists let/const declarations BUT NOT initialze).
* JS hoists var declaration (initialized to undefined)
*Scribe DEMO: variables*
---

## Variable Declaration Demo

---

## JS Data Types

`primitives` and `objects`

---

## Primitives
  + Boolean
  + Null
  + Undefined
  + Number
  + String
  + Symbols (ES6)

Note:
- Primitives are immutable!
- Data type that is not an object and has no methods
- BigInt: ints > 2^53. As of June 2019, there is an additional primitive that is Stage 3 of ECMAScript specification (BigInt); When it makes it to stage 4 of the draft, which is the final specification, BigInt will become the second built-in numeric type in JavaScript https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt.
- (If asked) Symbol's are unique, and can be used as unique identifiers for object properties
---

## This will not mutate your string!

```js

  "Javascript rocks!".toUpperCase();

  // expected return: "JAVASCRIPT ROCKS!"
```

Note:
- calling this function is successful because when we invoke a function on a primitive it temporarily turns it into an object.
- Declaring objects is slower AND can cause issues (e.g. new String('Hello') === new String('Hello') returns false because objects cannot be compared.
*QUICK DEMO: Above example*

---

## Objects

* Different than a ruby object
* Essentially, just a big hash-map
* Often called **Plain Old Javascript Objects** or **POJOs**
* Can have functions as values (called methods)
* Can access object attributes (properties) with `[]` or `.` notations


Note:
*CHROME DEMO: Objects*

---

## Objects Demo

Consider your old friend, the Array...

---

## 10 minute break!

![rugrats](https://media.giphy.com/media/w2fAwQbuxajoA/giphy.gif)

---

## Functions

+ Are a type of Object
+ First-class object in JS:
  + Pass them around (as arguments)
  + Return them from other functions
  + Assign them to variables
+ We can: 
  + Store them in data structures
  + Give them as many or few arguments as we want

---

## The 3 Types of Functions

+ Named function
+ Variable assignment / anonymous functions
	+ aka Function Expression
+ Constructor function

---

## Constructor functions

* used to create new objects
* similar to class definitions in Ruby
* instance methods are added to the
prototype of an object

---

## Functions Demo

---

## How do we invoke functions?
### _and what the heck is `this`?!_

---

## 3 ways to invoke a function

**method style**

	car.drive();

**function style**

	findSquareRoot(36);

**constructor style**

```
  const restaurant = new Restaurant(
      'Nobu', "Malibu", "$$$"
    );
```


---

## `this`

* like Ruby's `self`
* never implicit
* value of `this` is a function's  **Context** or **Receiver**

Note:
*SCRIBE DEMO this*

---

## Scope vs Context
* **Scope**: Refers to the availability of variables while running a function
* **Context**: Refers to the object that owns the execution of the code. (`this`)

---

## `this` Demo

---

## Callbacks

* Just a function that is passed as an argument  
to another function
* can be as simple as passing a function to `forEach`

Note:
*SCRIBE DEMO: callbacks*
---

## Callbacks Demo

---

## 10 minute break!

![doug](https://media.giphy.com/media/xT1R9YurWVROIxWcgM/giphy.gif)

---

## Closures

***A function which accesses variables that were neither***  
***passed in nor defined inside that function.***

1. A function that captures free variables and  
"closes" over them
1. Can be used to create "private state"

Note:
* In JS, functions will have access to its own parameters and variables, as well as _any_ variables in the scope in which the function was defined (it's surrounding scope).
*SCRIBE DEMO: closure*

---

## Closures Demo

---

## Debugging

***Be able to answer the following questions when debugging:***

  1. Have I declared variables properly?
  1. Do I have access to variables in a particular scope?
  1. What does `this` reference?
  1. Am I returning values?
  1. Do I have semicolons in the right places?
  1. Am I invoking this function correctly? Do I need to be invoking it?

---

### Kahoot!

![recess](https://media.giphy.com/media/ko1JDzZGEfXDq/giphy.gif)

---

And now for you viewing pleasure...

#### [WAT](https://www.destroyallsoftware.com/talks/wat)

---

# THANK YOU :)

![rocket](https://media.giphy.com/media/lDSRkDxewI4GA/giphy.gif)
