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
- Don't worry about inheritance yet - we'll learn it next week!

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

![waysToCall](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/js-in-depth/waysToCall.png)

---

### REMEMBER: Context in a function is determined by the way the function is invoked!

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

## Context Demo

---

## Asynchronicity

- Unlike Ruby, JavaScript has the concept of some tasks occuring "asynchronously"
- Asynchronous callbacks will wait for all synchronous code to complete before being invoked 
- Asynchronous code is non-blocking (ex: we can interact with a webpage while data is being fetched)

---

![stepOne](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/js-in-depth/order_of_execution_1.gif)

---

![stepTwo](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/js-in-depth/order_of_execution_2.gif)

---

![stepThree](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/js-in-depth/order_of_execution_3.gif)

---

![stepFour](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/js-in-depth/order_of_execution_4.gif)

---

![stepFive](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/js-in-depth/order_of_execution_5.gif)

---

## Asynchronicity Demo

---

## Readline Demo

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=17b3ba70-76a6-4d4f-9e50-b7c5a11e504c)