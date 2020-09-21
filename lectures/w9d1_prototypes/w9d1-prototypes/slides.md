# W9D1
## Prototypal Inheritance

---

## Learning Goals

+ Gain a deeper understanding of context in Javascript and how it changes when functions are passed as callbacks
+ Learn how to _properly_ set up inheritance hierarchies in Javascript (in 3 different ways!)
+ Learn the basics of module bundling and how to do it with **Webpack**

---

![functions](http://www.quickmeme.com/img/a2/a259c0fd97091dcfb96399f54c4bde40e99a88bd071232715033a8d7d1b45fcc.jpg)

Note: 

In JS there is a concept of *first-class functions* - simply put, this means that functions can be passed as arguments to other functions, and returned from other functions. This can be confusing, and by now you've probably realized some of the struggles that come with this. When you hand a function as an argument to another function, you lose control over it's *execution context* -> transition to next slide and discuss the ticking clock exercise from the previous Friday.

---

## Bind

```JS
setInterval(this._tick.bind(this), 1000);
```

Note:

+ On Friday, one of the most important topics that we learned was how to use bind
+ We will likely need to bind if we are going to need to use `this` _inside_ the function we are calling back to
+ If we don't bind, then `this` will likely be the window and try to call the function in that scope
  + Thus, if we are referring to an instance variable or function, it will be undefined on the window
+ If we remember back to the project on Friday, one of the first major places that we needed to use `bind` that probably threw us off was inside the Clock constructor
  + This is the example I have listed here
  + Our goal is to set this interval and have the clock tick every second (aka the setInterval will invoke `_tick` every 1000 ms)
  + Well, setInterval will still be able to invoke `_tick` *BUT* if we don't bind then when the `_tick` function is invoked the context (and thus our `this` inside `_tick`) will actually be the window
    + Therefore, we will be inside the function and we won't be able to reference other properties or functions as we expect because we will be calling them on the window, which will throw an error

---

# Binding Example on google chrome snippets

---

## Arguments

+ `arguments` is an array-like object
  + `[]`
  + `length`
+ Holds all arguments passed in whether they are named or not
+ Common to turn `arguments` into a *real* array
  + `Array.prototype.slice.call(arguments)`
  + `Array.from(arguments)`
+ More common to use the 'rest' operator (`...args`) in ES6
    + analagous to splat operator in Ruby

Note:

+ Thursday you read about `arguments`, an array-like object that we have access to inside any function, which contains all the arguments passed into that function whether they were named or not
+ Remember that it's only _array-like_ and that we typically only key into it, check the length of it, or turn it into an array
+ Reference the last two main bullets to explain the most common ways to convert to an array
+ You can hop into Chrome and show them how we are able to call the `Array.prototype.slice` method on the `arguments` object, and what it truly means that it is _array-like enough_. 
    + Define an `Array.prototype.mySlice` method that uses a for loop to iterate over `this`, pushing in each element at `this[i]` to an array that is ultimately returned from the method. Point out that the only things `this` needs to work properly in this function is a `length` property and the ability to index in, both of which the `arguments` object can do. Write a method as follows and step through the debugger, showing them how it's working:
    ```js
    Array.prototype.mySlice = function() {
      const sliced = [];

      for (let i = 0; i < this.length; i++) {
        sliced.push(this[i]);
      }

      return sliced;
    }
    
    function doSomething() {
        debugger
        const args = Array.prototype.mySlice.call(arguments);
        args.forEach((arg) => console.log(arg));
    }

    doSomething('banana', 2, ['hello', 'goodbye']);
    ```
* Next, show them how we can use the rest/spread operator, by writing the following function:

```js
// use rest operator here to collect all arguments into an array
function doSomethingElse(...args) {
  // pause at this debugger and show that `args` is an Array.
  debugger
  // using spread operator here to spread args back out. Pass null as first arg
  // since this method doesn't care about context
  doSomethingElse.call(null, ...args)
}

doSomethingElse('banana', 2, ['hello', 'goodbye']);
```
---

# Arguments Demo

---

# Break!

---

## Inheritance Intro

+ One object gets access to the properties and functions defined on another object
  + Same idea as Ruby (think pieces from chess)

Note:

+ Remember in Ruby often times we would want a class to inherit another class
  + For example in Chess we want all the specific pieces to inherit from the piece class because they all had a lot of properties in common that were defined on the piece class
+ Although the idea is similar, setting up inheritance is not as straightforward as Ruby and there are several ways that we are able to setup inheritance and we need to know them all
+ To understand inheritance in JavaScript, first we must understand how constructor functions really work and what a Prototype really is.

---

## Constructor Functions

+ Special type of function meant to create an object
+ Made to be used with the `new` keyword
+ Accepts arguments to set the new object’s properties
+ Paired with a `prototype` object

Note:

+ A constructor functions is a special type of function that is meant to create an object
  + They are made to be used with the `new` keyword which will create an object
  + We can accept arguments that can then be used to set the new object's properties
  + Therefore, constructor functions act very similarly to classes in Ruby
    + So, by convention, we write them with a capital letter to help clarify our intention (much like a class in Ruby)
    + All functions can _technically_ be used as a constructor function so they don't _need_ to be capitalized, again, we do this for convention. They only need to be a function in order to be used as a constructor function
+ Each constructor function has a `prototype` which is an object containing all of the properties and functions defined on that constructor function itself

---

## The `new` Keyword

1. Make a new object
1. Assign the `__proto__` to `Constructor.prototype`
1. Make `this` point to the newly created object
1. Call the constructor function in the context of that new object
1. Automatically returns the newly created object

Note:

+ Walk through the bullets

---
# Go Over Creating an Object Diagram
---

## Prototypes

+ Every object is associated with a prototype object
  + Access through `__proto__`, but `Object.getPrototypeOf(obj)` preferred
+ If an object doesn't have a property it looks at its prototype through `__proto__`
  + Keeps looking up its prototype chain

**The `prototype` is a property on a constructor function that sets what will become the `__proto__` property on the constructed object.**

Note:

+ Every object is associated with a prototype object, which it gets from the constructor function that created it
  + The only exception to this is `Object.prototype` because it is at the top of the prototype chain
+ We access this object through `__proto__` which is simply pointing to the associated prototype object
  + It's technically preferred to use `Object.getPrototypeOf(obj)` but for the sake of readability and to avoid confusion we are going to stick with `__proto__` for the demo
  + There's a reading linked on this slide that you're free to check out if you'd like to see why `Object.getPrototypeOf(obj)` is preferred
+ If an object doesn't have a property / function it looks at its prototype through `__proto__` to see if it is defined there
  + If not, it will then look at its `__proto__` until it gets all the way up the chain (hitting `null`, the `__proto__` of the Object.prototype)

Why avoid `__proto__`:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
* https://gist.github.com/WebReflection/5282385

---

## Constructor/Prototype Diagram & Google Snippets Demo

---

# Break!

---

## Prototypal Inheritance Example

+ Want to make a `Rectangle` and a `Circle` that both inherit from `Shape`
+ Both `Rectangle` and `Circle` need `Shape`'s prototype functions
+ Both `Rectangle` and `Circle` need their *own* `prototype` functions

Note:

+ So, now that we better understand constructor functions, how to make objects, and what a prototype is, what if we want to make a `Rectangle` and `Circle` that both inherit from `Shape`?
+ In order to do this, we need to: --> summarize the last two bullets
  + Now the question becomes, how do we properly do this?
    + There are a variety of ways to do this and we are going to walk through each of them

---

## Surrogates (i.e. the old solution)

```JS
function Surrogate () {}
Surrogate.prototype = Parent.prototype;
Child.prototype = new Surrogate();
Child.prototype.constructor = Child;
```

+ Diagram
+ Demo

Note:

+ The first way is what we call the `Surrogate` way
+ Copy this down before we move on to diagram this

---

## `Object.create` (ES5) - Released December 2009

```JS
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```

+ Diagram
+ Demo

Note:

+ Object.create(existingObj) creates a new object, and points the `__proto__` to the object that we passed in
  + Therefore, we no longer need to create the dummy surrogate object, `Object.create` is taking care of this for us
+ Copy this down before we move on to diagram this
+ Cannot use this on A05

---

## Class Syntax (ES6!) - Released June 2015

+ Demo

```js
class Shape {
  constructor(color) {
    this.color = color;
  }

  sayHello() {
    console.log(`Hello, I am ${this.color}`);
  }
}

export default Shape;
```

Note:

+ You might ask, why do we need to know all of these ways if we have class syntax?
  + You may encounter any of these in a code base and you will need to know what's going on.
  + Also, they are all valid so you could be asked to do a specific one in an interview.
+ Don't need a diagram for this because it is just syntactic sugar for Object.create(), thus the diagram is the same, we just use this syntax instead.
+ Let's jump to the demo

---
# Demo
---

## Webpack

+ Module (i.e. file) bundler
+ Recursively builds a dependency graph that includes every module your app needs
+ Packages the modules into a single 'bundle' file which is sent to the client and loaded by the browser
+ Motivations:
  + Can't use `require`/`module.exports` in browser
  + Listing every file in the script tags is unwieldy

[Abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree)

---

## How to use Webpack
Run `webpack root.js -o bundle.js --watch --mode=development`
+ Main command: `webpack root.js`
    * Tells webpack to build dependency graph starting from `root.js`
    * Your file may _not_ be called `root.js` - replace this with whatever your **entry-point file** is called.
* Flags:
    * `-o bundle.js` - tells webpack to _output_ bundled JS files to a file called `bundle.js` (`-o` is short for `--output`)
    * `--watch` - re-runs webpack everytime you save a JS file (can also use `-w`)
    * `--mode=development` - runs webpack in development mode, allowing for debugging

---

## Webpack Demo

---

## [Kahoot!](https://create.kahoot.it/details/e42e7ca2-0005-4ec2-a12f-87739925677a)

---

![thanks](https://media0.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif)
