# W8D4
## Javascript Part II
### ES6 Class Structure, Context, Callbacks & The Event Loop

---

## Learning Goals

- Learn ES6 syntax for creating classes in JavaScript
- Gain deeper understanding of context (`this`) in JavaScript
- Be able to set context in function calls
- Learn what asynchronicity in JavaScript means and how callbacks can help ensure the proper order of events

---

## Agenda

- Debugging Recap
- ES6 Class Syntax
- Context & `arguments`
- Callbacks Recap
- Asynchronicity & The Event Loop
- Readline Library

---

## ES6 Class Syntax

- Looks more like Ruby and other object-oriented languages
- **Just syntactic sugar** (still works the same under the hood)
- The 'class' is still a constructor function, with a prototype on which we add methods
- Don't worry about inheritance yet - we'll learn it tomorrow!

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

- Context in JavaScript refers to what `this` is in a function
- Varies depending on how a function is invoked

---

```js
func()
```
- This function is invoked ____ style
- Context inside `func` is ______

---

```js
object.func()
```
- This function is invoked ____ style
- Context inside `func` is ______

---

```js
new func()
```
- This function is invoked ____ style
- Context inside `func` is ______

---

## Two more ways - Call & Apply

- `call` and `apply` are functions we invoke *on* a function (defined on `Function.prototype`)
- Pass in desired context and relevant arguments
- Receiver function is immediately invoked with the passed in context
- `func.call(context, arg1, arg2)`
- Apply is the same as call, but takes in additional arguments as an array
- `func.apply(context, [arg1, arg2])`

---

![waysToCall](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/w8d4-callbacks/javascript/w8d4-callbacks/assets/waysToCall.png?token=AIS3A4JFC4CLWXNGXRJSAY3BFZ4LM)

---

### REMEMBER: Context in a function is determined by the way the function is invoked!

---

## Context Demo Part 1

---

## Arguments

- Functions happily accept more or fewer arguments than expected
- Omitted arguments are set to undefined (if they have no default)
- Accessing extra arguments
    - ES5: array-like `arguments` variable
    - ES6: rest/spread operator `...`
        - called "rest" operator when takes the "rest" of arguments
        - called "spread" operator when it spreads out an array

---

## Converting `arguments` to an array

- ES6: Array.from(arguments)
- ES5: Array.prototype.slice.apply(arguments)

---

## Context Demo Part 2

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

## The Problem:

- Callbacks are **always** invoked function-style
- Context is lost on function-style invocation
- What if we want to use `this` in a callback?

---
## Bind

- `bind` is a function we invoke on a function
- Pass in desired context (and sometimes arguments we'll bind)
- `bind` returns a new function with the context permanently bound
- Unlike `call`/`apply`, **DOES NOT** immediately invoke the function
- This bound function will *always* have the context set, so we can invoke it function-style without a problem!

NOTE: Bind is not a way to *invoke* a function! It's not invoked until later!

---

## Context Demo Part 3

---

## Asynchronicity

- Unlike Ruby, JavaScript has the concept of some tasks occuring "asynchronously"
- Asynchronous callbacks will wait for all synchronous code to complete before being invoked 
- Asynchronous code is non-blocking (ex: we can interact with a webpage while data is being fetched)

---

![stepOne](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/w8d4-callbacks/javascript/w8d4-callbacks/assets/order_of_execution_1.gif?token=AIS3A4JBENHJGEXISEVR4XDBFZ4OG)

---

![stepTwo](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/w8d4-callbacks/javascript/w8d4-callbacks/assets/order_of_execution_2.gif?token=AIS3A4KERYR4BCPR34WFFKLBFZ4QE)

---

![stepThree](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/w8d4-callbacks/javascript/w8d4-callbacks/assets/order_of_execution_3.gif?token=AIS3A4NXAFV35NVSKJFBYMDBFZ4RW)

---

![stepFour](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/w8d4-callbacks/javascript/w8d4-callbacks/assets/order_of_execution_4.gif?token=AIS3A4KVAEROHQBS5IHHGOLBFZ4TG)

---

![stepFive](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/w8d4-callbacks/javascript/w8d4-callbacks/assets/order_of_execution_5.gif?token=AIS3A4IMQ37SEOX4L5IWETDBFZ4WA)

---

## Asynchronicity Demo

---

## Readline Demo

---

## Review
#### Debugging and Class Syntax

- Utilize HTML to debug your javascript code in the chrome console
- ES6 Class Syntax looks like Object Oriented Programming, in reality it's just syntactic sugar

---

## Review
#### Context

- Context is determined by the way we call a function: 
    - method style
    - constructor style
    - function style
- Context can be forced using call or apply (which invoke the function) or bind (which returns a new function)
    - bind does NOT invoke the function
- Fat arrow functions preserve context

---

## Review
#### Callbacks

- Callbacks are functions passed to another function as an argument
- Always passed *uninvoked*

---

## Review
#### Asynchronicity

- Javascript Event Loop
    - Call Stack
    - Web APIs
    - Callback Queue
- ALL synchronous functions complete before any async functions run
- Asynchronous functions are nonblocking

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=17b3ba70-76a6-4d4f-9e50-b7c5a11e504c)