# W8D5
## Prototypal Inheritance
---
## Learning Goals
* Gain a deeper understanding of context in Javascript and how it changes when functions are passed as callbacks
* Learn how to properly set up inheritance hierarchies in Javascript (in 3 different ways!)
---
## Agenda
1. Review context and myBind
2. Currying
3. Prototypal inheritance
---
## Context in JavaScript
In JS, the context of unbound functions is dependent on _______.
---
## Function Invocation and Context
![waysToCall](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/waysToCallQuiz.png)
---
## Callbacks are always invoked ________-style
So the context within a callback will be set to the `window`, or the global object.
If we use the `this` keyword inside the callback, we need to `bind` context.
+ See `myBind.js`
---
## Currying
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
* Currying is useful when the arguments used by a function aren’t all available at the same point in time.
---
## Prototypes
---
## Inheritance Intro
+ One object gets access to the properties and functions defined on another object
+ JavaScript uses **prototypal inheritance**; Ruby uses classical inheritance
+ Key concepts in prototypal inheritance:
    - constructor functions, the `new` keyword, prototypes, the `__proto__` property, property lookup
+ Three ways to implement in JS: Surrogate, Object.create, ES6 class syntax
---
## Two key players in JS inheritance
+ **constructor**: function, handles initialization logic (setting properties)
    ```js
    function Cat(name, personality) {
        this.name = name
        this.personality = personality
    }
    ```
+ **prototype**: object, defines shared behavior and properties for all instances of a class
    ```js
    {
        meow: function() {
            console.log(“meow”);
        }
    }
    ```
---
## Constructor Functions
+ Special type of function meant to create an object
+ Made to be used with the `new` keyword
+ Accepts arguments to set the new object’s properties
+ Paired with a `prototype` object via `prototype` property
+ Conventionally written with a capital letter
```js
    function Cat(name, personality) {
        this.name = name
        this.personality = personality
    }
```
---
## The `new` Keyword
```js
new Cat(“Garfield”, “lazy”);
```
“Constructor-style” invocation with the `new` keyword:
1. Constructs a new object
2. Assigns the `__proto__` of the new object to `Constructor.prototype`
3. Makes `this` point to the newly created object
4. Calls the constructor function in the context of that new object
5. Automatically returns the newly created object
---
## When a constructor is invoked with the `new` keyword...
![prototypes1](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/cat_prototypes_1.png)
**The `prototype` is a property on a constructor function that sets what will become the `__proto__` property on the constructed object.**
---
## Prototypes
+ Every object is associated with a prototype object
    - The only exception to this is `Object.prototype` because it is at the top of the prototype chain
    - Access through `__proto__`, but `Object.getPrototypeOf(obj)` preferred
+ If an object doesn’t have a property, JS looks at its prototype through `__proto__`
    - Keeps looking up its prototype chain
---
## The prototype chain
![prototypes2](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/cat_prototypes_2.png)
---
## Property access and the prototype chain
![prototypes3](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/cat_prototypes_3.png)
* Because `garfield` inherits from `Cat`, which inherits from `Animal`, which inherits from `Object`, `garfield` has access to all methods defined in all prototypes in the chain. `garfield` can `meow`, `eat`, and have `toString` called on it.
---
## Prototypal Inheritance Example & Code Demo
+ Want to make a `Cat` that inherits from `Animal`
+ `Cat` needs `Animal`’s prototype functions
+ `Cat` also needs its *own* `prototype` functions
---
## Surrogates (i.e. the old solution)
```JS
function Surrogate () {}
Surrogate.prototype = Parent.prototype;
Child.prototype = new Surrogate();
Child.prototype.constructor = Child;
```
---
## Step by Step Diagram
---
![step1](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/prototype-inheritance-steps/step1.png)
1. Create Surrogate Class.
---
![step2](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/prototype-inheritance-steps/step2.png)
2. Connect the Surrogate class' prototype to Parent Class prorotype
---
![step3](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/prototype-inheritance-steps/step3.png)
3. Connect the Child class' prototype to an instance of the Surrogate class
#### This instance of Surrogate will serve as a prototype object for Cat.
---
![step4](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/prototype-inheritance-steps/step4.png)
4. Connect the Child class' prototype.constructor to the class itself.
---
![step5](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/prototype-inheritance-steps/step5.png)

---

## `Object.create` (ES5) - Released December 2009
```JS
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```
Note:
+ Object.create(existingObj) creates a new object, and points the `__proto__` to the object that we passed in
  + Therefore, we no longer need to create the dummy surrogate object, `Object.create` is taking care of this for us
---
## Class Syntax (ES6!) - Released June 2015
+ ES6 Class syntax is just syntactic sugar for prototypal inheritance!
Note:
+ You might ask, why do we need to know all of these ways if we have class syntax?
  + You may encounter any of these in a code base and you will need to know what’s going on.
  + Also, they are all valid so you could be asked to do a specific one in an interview.
---
## [Kahoot!](https://play.kahoot.it/v2/?quizId=2c962356-57ef-48b5-b008-84fed9160373)
---
![thanks](https://media0.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif)