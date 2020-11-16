# W9D1
## Prototypal Inheritance

---

## Learning Goals

+ Gain a deeper understanding of context in Javascript and how it changes when functions are passed as callbacks
+ Learn how to _properly_ set up inheritance hierarchies in Javascript (in 3 different ways!)

---

## Agenda

1. Currying
2. Prototypal Inheritance

---

## Currying

---

## What is Currying?

* a functional programming technique
* translates the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument

---

## Why care about Currying?

1. Implementing currying relies on interesting features of JavaScript (closures)
2. Therefore, currying is a common interview question
3. It is also used in other languages, so it's good to be familiar with

---

## Currying Demo!

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

+ A constructor function is a special type of function that is meant to create an object
  + They are made to be used with the `new` keyword which will create an object
  + We can accept arguments that can then be used to set the new object's properties
  + Therefore, constructor functions act very similarly to classes in Ruby
    + So, by convention, we write them with a capital letter to help clarify our intention (much like a class in Ruby)
    + All functions can _technically_ be used as a constructor function so they don't _need_ to be capitalized, again, we do this for convention. They only need to be a function in order to be used as a constructor function
+ Each constructor function has a `prototype` which is an object containing all of the properties and functions defined on that constructor function itself

---

## The `new` Keyword

1. Make a new object
1. Assign the `__proto__` and `constructor` of the new object to `Constructor.prototype` and `Constructor`, respectively
1. Make `this` point to the newly created object
1. Call the constructor function in the context of that new object
1. Automatically returns the newly created object

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

## Constructor/Prototype Diagram & Demo

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

## Naive solution 1

+ reassign the `__proto__` property of the `Child.prototype` to point directly to the `Parent.prototype`
+ This is bad
+ Removes some of JavaScript's built in optimization

---

## Naive solution 2

+ reassign `Child.prototype` to point directly to the `Parent.prototype`
+ Also bad
+ Any methods defined on `Child.prototype` will now also be on `Parent.prototype`

---

## Naive solution 3

+ reassign `Child.prototype` to point directly to a new instance of `Parent`
+ `Child.prototype = new Parent()`
+ Again, this is bad
+ Requires the creation of a new Parent every time you are setting up inheritance
+ This can be expensive!

---

## Correct Way 1

+ Surrogates

```JS
function Surrogate () {}
Surrogate.prototype = Parent.prototype;
Child.prototype = new Surrogate();
Child.prototype.constructor = Child;
```

+ Diagram
+ Demo

---

## Correct Way 2

+ `Object.create` (ES5) - Released December 2009

```JS
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```

+ `Object.create(argObj)` creates a new object, and points it's `__proto__` to the `argObj` that is passed in

+ Diagram
+ Demo

Note:

+ Object.create(existingObj) creates a new object, and points the `__proto__` to the object that we passed in
  + Therefore, we no longer need to create the dummy surrogate object, `Object.create` is taking care of this for us
+ Copy this down before we move on to diagram this

---

## Correct Way 3

+ Class Syntax (ES6!) - Released June 2015

+ Demo

Note:

+ You might ask, why do we need to know all of these ways if we have class syntax?
  + You may encounter any of these in a code base and you will need to know what's going on.
  + Also, they are all valid so you could be asked to do a specific one in an interview.
+ Don't need a diagram for this because it is just syntactic sugar for Object.create(), thus the diagram is the same, we just use this syntax instead.
+ Let's jump to the demo

---

## [Kahoot!](https://create.kahoot.it/details/2c962356-57ef-48b5-b008-84fed9160373)

---

![thanks](https://media0.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif)
