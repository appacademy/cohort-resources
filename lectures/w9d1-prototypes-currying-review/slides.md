# W9D1 
## Prototypal Inheritance and Currying Review

---

## Agenda
1. Currying
2. Prototypal inheritance

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

* Currying is useful when the arguments used by a function aren't all available at the same point in time (or in the same scope)

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
            console.log("meow"); 
        } 
    } 
    ```

---

## The `new` Keyword

```js
new Cat("Garfield", "lazy");
```

"Constructor-style" invocation with the `new` keyword:

1. Constructs a new object
2. Assigns the `__proto__` of the new object to `Constructor.prototype`
3. Makes `this` point to the newly created object
4. Calls the constructor function in the context of that new object
5. Automatically returns the newly created object

---

## When a constructor is invoked with the `new` keyword...

![prototypes1](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/cat_prototypes_1.png)

---

**The `prototype` is a property on a constructor function that sets what will become the `__proto__` property on the constructed object.**

---

## Prototypes

+ Every object is associated with a prototype object
    - The only exception to this is `Object.prototype` because it is at the top of the prototype chain
    - Access through `__proto__`, but `Object.getPrototypeOf(obj)` preferred
+ If an object doesn't have a property, JS looks at its prototype through `__proto__`
    - Keeps looking up its prototype chain

---

## The prototype chain

![prototypes2](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/cat_prototypes_2.png)

---

## Property access and the prototype chain

![prototypes3](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/javascript/prototypes/cat_prototypes_3.png)

---

* Because `garfield` inherits from `Cat`, which inherits from `Animal`, which inherits from `Object`, `garfield` has access to all methods defined in all prototypes in the chain. `garfield` can `meow`, `eat`, and have `toString` called on it.

---

## Surrogates (i.e. the old solution)

```JS
function Surrogate () {}
Surrogate.prototype = Parent.prototype;
Child.prototype = new Surrogate();
Child.prototype.constructor = Child;
```

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
  + You may encounter any of these in a code base and you will need to know what's going on.
  + Also, they are all valid so you could be asked to do a specific one in an interview.

---