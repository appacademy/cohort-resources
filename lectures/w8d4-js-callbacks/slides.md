# W8D4
## Callbacks and the Event Loop

---

## Learning Goals

- Learn ES6 syntax for creating classes in JavaScript
- Gain deeper understanding of context (`this`) in JavaScript
- Be able to set context in function calls
- Learn what asynchronicity in JavaScript means and how callbacks can help ensure the proper order of events

---

## Agenda

- Callbacks Recap
- ES6 Class Syntax
- Context
- Asynchronicity
- Readline Library

---

### What is a callback?

---

## Callbacks

- A callback is a function passed to another function as an argument and intended to be invoked at a later time
- Callbacks are passed in *uninvoked* 
- Ex: timers (`setTimeout`/`setInterval`), requests to fetch data, etc, *take in* callbacks that they'll invoke at a specific point

---

## Callback Demo

---

## ES6 Class Syntax

- Looks more like Ruby and other object-oriented languages
- **Just syntactic sugar** (still works the same under the hood)
- The 'class' is still a constructor function, with a prototype on which we add methods
- Don't worry about inheritance yet - we'll learn it later!

---

## ES5 syntax

```js
    function SomeClass() { 
        // ...Constructor functionality
    }
    SomeClass.prototype.someFunction = function () { 
        // 'Instance method' functionality
    }
```

---

## ES6 syntax

```js
    class SomeClass {
        constructor(){
            // ...Constructor functionality
        }
        someFunction(){
            // 'Instance method' functionality
        }
    }
```

---

## Class Syntax Demo

---

## Context

- Context in JavaScript refers to what `this` is inside the body of a function
 * similar to `self` in ruby, although some major differences
- Varies depending on how a function is invoked

---

```js
func()
```
- This function is invoked ____ style
- Context inside `func` is ______

---

```js
func()
```
- This function is invoked _function_ style
- Context inside `func` is _global/window_

---

```js
object.func()
```
- This function is invoked ____ style
- Context inside `func` is ______

---

```js
object.func()
```
- This function is invoked _method_ style
- Context inside `func` is _the receiver (object)_

---

```js
new func()
```
- This function is invoked ____ style
- Context inside `func` is ______

---

```js
new func()
```
- This function is invoked _constructor_ style
- Context inside `func` is _the object being created_

---

## Actively Changing `this` - Call & Apply

- `call` and `apply` are functions we invoke *on* a function (defined on `Function.prototype`)
    * used to change `context` (aka value of _this_)
- Pass in desired context and relevant arguments
- Receiver function is immediately invoked with the passed in context
- Apply vs Call (A: Array, C: 'comma separated')
    - `func.call(context, arg1, arg2)`
    - `func.apply(context, [arg1, arg2])`

---

![waysToCall](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/javascript/w8d4-callbacks/assets/waysToCall.png?token=AP34ZYX5K35PLZ7DCAAXN6TBPHB6C)

---

### REMEMBER: Context in a function is determined by the way the function is invoked!

---

## A Problem:

- Callbacks are **always** invoked function-style
- Context is lost on function-style invocation
- What if we want to use `this` in a callback?

---

## The Solution?
- Can we use either call/apply?
- Callback needs to be passed _uninvoked_...
- call/apply immediately invoke the function...
- So, no!

---

## Bind

- `bind` returns a new function with the context permanently bound
- Unlike `call`/`apply`, **DOES NOT** immediately invoke the function
- This bound function will *always* have the context set, so we can invoke it function-style without a problem!
- `bind` is a function we invoke on a function
    * Invoke by passing in desired context (and sometimes arguments we'll bind)

NOTE: Bind is not a way to *invoke* a function! It's not invoked until later!

---

## Context Demo

---

## Asynchronicity

- Unlike Ruby, JavaScript has the concept of some tasks occuring "asynchronously"
 * Code does not always execute in the order it is written in! (not always line by line)
- Asynchronous callbacks will wait for all synchronous code to complete before being invoked 
- Asynchronous code is non-blocking (this is why we can interact with a webpage while data is being fetched)

---

![stepOne](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/javascript/w8d4-callbacks/assets/order_of_execution_1.gif?token=AP34ZYVM3YZ37SFP6UDYTYDBPISCA)

---

![stepTwo](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/javascript/w8d4-callbacks/assets/order_of_execution_2.gif?token=AP34ZYVAU5HCYXYUZFUF7G3BPISDK)

---

![stepThree](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/javascript/w8d4-callbacks/assets/order_of_execution_3.gif?token=AP34ZYTMLFAR5XDA5BVN4TTBPISEU)

---

![stepFour](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/javascript/w8d4-callbacks/assets/order_of_execution_4.gif?token=AP34ZYVOHWZ4PSXSHFM667LBPISF6)

---

![stepFive](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/javascript/w8d4-callbacks/assets/order_of_execution_5.gif?token=AP34ZYVE4C4Q5UAROVKCZJ3BPISHI)

---

## Asynchronicity Demo

---

## Readline Demo

---

## Arguments

* Functions happily accept more or fewer arguments than expected
* omitted arguments are set to `undefined` (if they have no default)
* Accessing extra arguments:
  * ES5: array-like `arguments` variable
  * ES6: rest/spread operator: `...`
    * turns list of args into array (rest), turns array into list of args (spread)

Note:
* JavaScript is a very permissive language. It favors passing `undefined` over throwing an error.
* `...`
  * called "rest operator" when it takes the _rest_ of the arguments
  * called "spread operator" when it spreads out an array
* ES5 - had to use `Function.prototype.apply()` to do what spread now does

---

### Some different ways to convert `arguments` into an Array:

+ ES6: `arr = Array.from(arguments)`
+ 😮 ES6: `arr = [...arguments]`
+ ES5: `arr = Array.prototype.slice.apply(arguments)` (we don't use this anymore)
+ Lazy ES5: `arr = [].slice.apply(arguments)` (...or this)

---

## Brief Arguments Demo

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=17b3ba70-76a6-4d4f-9e50-b7c5a11e504c)