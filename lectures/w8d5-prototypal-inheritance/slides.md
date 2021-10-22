# W8D5
## Prototypal Inheritance

---

## Learning Goals

+ Gain a deeper understanding of context in Javascript and how it changes when functions are passed as callbacks
+ Understand the concepts that support binding and currying
+ Learn how to _properly_ set up inheritance hierarchies in Javascript (in 3 different ways!)

---

## Agenda
1. Review context and myBind
2. The `arguments` object
2. Currying
3. Prototypal inheritance
4. Kahoot!

---

![functions](http://www.quickmeme.com/img/a2/a259c0fd97091dcfb96399f54c4bde40e99a88bd071232715033a8d7d1b45fcc.jpg)

---

## Context in JavaScript

In JS, the context of unbound functions is dependent on _______.

Note: the style of invocation
---

## Function Invocation and Context

![waysToCall](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/javascript/w9d1-prototypal-inheritance/assets/waysToCall.png?token=AQCB66IIZWUXS5PFFVU3Q5LBOL33Q)

---

## *Callbacks* are always invoked ________-style

So the context within a callback will be set to the `window` (or a global object if you're in Node).

If we use the `this` keyword inside the callback, we need to `bind` our context.
+ See `myBind.js` and `clock.js`

---

## Bind

+ Sometimes, we will run into problems when our function is called in context other than the one it should be
+ This usually happens when we pass a method-style function as a callback
+ Binding permanantely sets `this` (the context) of a function so that it will always be called correctly, no matter where it is or how it is invoked

---

## Bind Demo - Clock Exercise & myBind Review

Note: To run demos, show them how to quickly create an index.html and add a script tag with the script. Now we can test our code in the browser, which is better than testing in Node because 1) we have access to the debugger and 2) it actually simulates how the code will act!

---

## The `arguments` Object

+ `arguments` is an array-like object (`[]`, `length`)
+ Holds all arguments passed in whether they are named or not
+ Common to turn `arguments` into a *real* array
  + `Array.from(arguments)`
+ More common to use the 'rest' operator (`...args`) in ES6
  + analagous to splat (`*`) operator in Ruby

---

## Arguments Demo

---

## 3 Min Break

---

## What is Currying?

* a functional programming technique
* translates the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument

---

## An example of currying

```js
function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

// curried version:
function addThreeNumbers(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}
```
---

## An example of currying

```js
boringAddThreeNumbers(3,5,2) // => 10

addThreeNumbers(3)(5)(2) // => 10
```
* Currying is useful when the arguments used by a function aren't all available at the same point in time.

---

## Demo - curriedList

---

## 5 Min Break

---

## Inheritance Intro

+ One object gets access to the properties and functions defined on another object
  + Conceptually the same as Ruby (think pieces from chess)
+ Ruby uses classical inheritance; JavaScript uses **prototypal inheritance**
+ Key concepts in prototypal inheritance:
    - constructor functions, the `new` keyword, prototypes, the `__proto__` property, property lookup
+ Three ways to implement inheritance in JS: Surrogate, Object.create, ES6 class syntax

---

## Two key players in JS inheritance:

- The Constructor
- The `prototype` property

---

## The Constructor

+ Special type of function meant to create an object
+ Made to be used with the `new` keyword
+ Accepts arguments to set the new object’s properties
+ Paired with a `prototype` object
+ Similar a `class` in Ruby (except the class itself is the `intialize` method)

```js
    function Cat(name, personality) {
        this.name = name
        this.personality = personality
    }
``` 

Note:
    + By convention, we write them with a capital letter to help clarify our intention (much like a class name in Ruby)
    + All functions can _technically_ be used as a constructor function so they don't _need_ to be capitalized, again, we do this for convention. They only need to be a function in order to be used as a constructor function
+ Each constructor function has a `prototype` which is an object containing all of the properties and functions defined on that constructor function itself

---

## The Prototype

+ Every constructor function has a `prototype` property
+ the `prototype` is an object which defines shared behavior and properties for all instances of the constructor's class
    ```js
    // Cat.prototype
    {
        meow: function() {
            console.log("meow");
        }
    }
    ```
---

## The `new` Keyword

```js
garfield = new Cat("Garfield", "lazy");
```

1. Makes a new object
1. Assigns the `__proto__` and `constructor` properties of the new object to `Constructor.prototype` and `Constructor`, respectively 
1. Makes `this` point to the newly created object
1. Calls the constructor function in the context of that new object
1. Automatically returns the newly created object

---

## The `new` Keyword

Assigns the `__proto__` and `constructor` properties of the new object to `Constructor.prototype` and `Constructor`, respectively 

```js
  	garfield.__proto__ = Cat.prototype
    garfield.constructor = Cat
```
---

![prototypes1](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/javascript/w9d1-prototypal-inheritance/assets/cat_prototypes_1.png?token=AQCB66PIOP5JOLNYDPADYKTBOMWYE)


---

## Prototypes

+ Every object is associated with a prototype object
    - The only exception to this is `Object.prototype` because it is at the top of the prototype chain (`Object.prototype.__proto__` returns `null`)
    - Access through `__proto__`, but `Object.getPrototypeOf(obj)` preferred
+ If an object doesn't have a property, JS looks at its prototype through `__proto__`
    - Keeps looking up its prototype chain

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

## The prototype chain

![prototypes2](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/javascript/w9d1-prototypal-inheritance/assets/cat_prototypes_2.png?token=AQCB66OAQLG4OQQYCQYBGM3BOMXCG)

---

## Property access and the prototype chain

![prototypes3](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/javascript/w9d1-prototypal-inheritance/assets/cat_prototypes_3.png?token=AQCB66LLYS4E2247SLB2ZBTBOMXEC)

Note: Because `garfield` inherits from `Cat`, which inherits from `Animal`, which inherits from `Object`, `garfield` has access to all methods defined in all prototypes in the chain. `garfield` can `meow`, `eat`, and have `toString` called on it.

---

## Prototypal Inheritance Example & Code Demo

+ Want to make a `Cat` that inherits from `Animal`
+ `Cat` needs `Animal`'s prototype functions
+ `Cat` also needs its *own* `prototype` functions

---

## Surrogates (i.e. the old solution)

```JS
function Surrogate () {}
Surrogate.prototype = Parent.prototype;
Child.prototype = new Surrogate();
Child.prototype.constructor = Child;
```

Note:

+ The first way is what we call the `Surrogate` way
+ Copy this down before we move on to diagram this

---

## `Object.create` (ES5) - Released December 2009

```JS
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```

Note:

+ Object.create(existingObj) creates a new object, and points the `__proto__` to the object that we passed in
  + Therefore, we no longer need to create the dummy surrogate object, `Object.create` is taking care of this for us
+ Copy this down before we move on to diagram this

---

## Class Syntax (ES6!) - Released June 2015

+ ES6 Class syntax is just syntactic sugar for prototypal inheritance!
```
   class Cat {
      constructor(name){
         this.name = name;
      }
      meow(){
         console.log("meow");
      }
   }
```

Note:

+ You might ask, why do we need to know all of these ways if we have class syntax?
  + You may encounter any of these in a code base and you will need to know what's going on.
  + Also, they are all valid so you could be asked to do a specific one in an interview.

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=2c962356-57ef-48b5-b008-84fed9160373)

---


![thanks](https://media0.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif)
