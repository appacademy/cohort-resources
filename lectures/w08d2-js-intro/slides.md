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
* [Sneeze the Dragon](https://codepen.io/Yakudoo/full/yNjRRL)

---

## Style & Syntax JS vs. Ruby

+ Explicit returns
+ You have to "declare" your variables
+ Use semicolons
+ `camelCase` instead of `snake_case`
+ [`==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using) and `===` (use the latter _almost_ always!)
+ No negative indexing
+ 7 Falsey values

---

## == VS. === Demo

---

## The Falsy-7

***Be careful when checking for truthiness!***

- `null`
- `undefined`
- `0`, `-0`
- `NaN`
- `''`
- `false`

---

## Variable Declaration

`const`, `let`, `var`, and (😈) **global**

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

---

## This will not mutate your string!

```js

  "Javascript rocks!".toUpperCase();

  // expected return: "JAVASCRIPT ROCKS!"
```

---

## Try this in console:
```new String('Hello') === new String('Hello')```  
#### vs
```"Hello" === "Hello"```

---

## 5 minute break!

![rugrats](https://media.giphy.com/media/w2fAwQbuxajoA/giphy.gif)

---

## Objects

* Different than a ruby object!
* Essentially, just a big hash-map
* Often called **Plain Old Javascript Objects** or **POJOs**
* Can have functions as values (called methods)
* Can access object attributes (properties) with `[]` or `.` notations

---

## Objects Demo

Consider your old friend, the Array...

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

## Also The 3 Types of Functions 
### (according to internets)

+ Named functions
+ Anonymous functions
+ Immediately Invoked Functional Expressions (IIFE)

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
* value of `this` is a function's  
**Context** or **Receiver**

---

## Function Invocation & `this` Demo

---

## 5 minute break!

![doug](https://media.giphy.com/media/xT1R9YurWVROIxWcgM/giphy.gif)

---

## Callbacks

* Just a function that is passed as an argument  
to another function
* can be as simple as passing a function to `forEach`

---

## Callbacks Demo

---

## Closures

***A function which accesses variables that were neither***  
***passed in nor defined inside that function.***

1. A function that captures free variables and  
"closes" over them
1. Can be used to create "private state"

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

### [Kahoot!](https://play.kahoot.it/v2/?quizId=677a8192-fcf0-4730-9f90-f83b10a6d48b)

![recess](https://media.giphy.com/media/ko1JDzZGEfXDq/giphy.gif)

---

And now for you viewing pleasure...

#### [WAT](https://www.destroyallsoftware.com/talks/wat)

---

# THANK YOU :)

![rocket](https://media.giphy.com/media/lDSRkDxewI4GA/giphy.gif)
