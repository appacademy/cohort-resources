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
![Loose Equality](https://user-images.githubusercontent.com/51456702/92780168-95412400-f357-11ea-9ff8-ce9752d0a53b.png)

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using)

[Other Source](https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons)

---

## The Falsy-7

***Be careful when checking for truthiness!***

- `null`
- `undefined`
- `0`, `-0`
- `NaN`
- `''`
- `false`

Note:

- Can check with `!!` or `Boolean(value)`
- Ask - what are the falsey values in Ruby? (false and nil)

---

## Variables

![IMG_0006](https://user-images.githubusercontent.com/51456702/93012402-f6821680-f554-11ea-9c52-edfe9ae90f19.jpg)




Note:
* Declaration: "Hey, here's a variable called banana"
* Initialization: "Hey, let's give this variable a starting value" aka 1st assignment.
* Assignment: "Let's change the value of this variable"
* In JS, _technically_ all declarations are also initializations (because they are initialized to undefined, but this is not a meaningful value).
* Temporal dead zones: Cannot access 'foo' before initialization if you try to use a let or const before initialization happens
* JS hoists let/const declarations BUT NOT initialize).
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
  + BigInt
  + Symbols (ES6)

Note:
- Primitives are immutable - cannot be changed in memory!
- they point directly to somewhere in your computer's memory

---

## This will not mutate your string!

```js

  let word = "dog";
  let newWord = word.toUpperCase();
  console.log(word); //"dog"
  console.log(newWord); //"DOG"
```

Note:
- The original string is not changed even when we call a function on that string
- word points to the string "dog" in memory whereas newWord points to string "DOG" in memory - it does not hold the actual value but a pointer to that value

- calling this function is successful because when we invoke a function on a primitive it temporarily turns it into an object.


---

## Objects

* Different than a ruby object!
* Essentially, just a big hash-map
* Often called **Plain Old Javascript Objects** or **POJOs**
* Can have functions as values (called methods)
* Can access object attributes (properties) with `[]` or `.` notations


Note:
*CHROME DEMO: Objects*
***Summary: Reference types carry the value in each variable whereas primitive types directly point to somewhere in your computer memory.***

---

## Objects Demo

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

  
Note:
It means that function actually inherits from Object. So that you can pass it around and work with it like with any other object.
**2** meaning we can have a function that if invoked will return another function

---

## The 3 Types of Functions

+ Named function
+ Variable assignment / anonymous functions
	+ aka Function Expression
+ Constructor function

Note:
The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. 


## Also The 3 Types of Functions 
### (according to internets)

+ Named functions
+ Anonymous functions
+ Immediately Invoked Functional Expressions (IIFE)

---

## Constructor functions

* used to create new objects
* similar to class definitions in Ruby
* instance methods are added to the prototype of an object



---

## How do we invoke functions?
### _and what the heck is `this`?!_

---

## 3 ways to invoke a function

**function style**

	findSquareRoot(36);

**method style**

	car.drive();

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
* value of `this` is a function's  
**Context** or **Receiver**

---

# Functions Demo

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

***An inner "function" that uses or/and changes variables in an outer funtion***

1. A function that captures free variables and  
"closes" over them

Note:
* In JS, functions will have access to its own parameters and variables, as well as _any_ variables in the scope in which the funciton was defined (it's surrounding scope).
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
