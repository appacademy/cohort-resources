# Preparing for JS Intro lecture

## Topics Covered in Readings/Materials
Given the size of the A04 exam, many students may come into lecture underprepared. Before coming into lecture, well-prepared students will have been exposed to the following topics:
* Basic syntax
* Data types
* Variable declaration in JS
* Functions
* Closures/Scope
* `this`
* Arrow functions

## Topics Practiced in HomeWork
* Very basic scoping with `let`, `const`, and `var`
* String interpolation
* Basic iteration (fizzBuzz, isPrime, sumOfNPrimes)
* Tiny exercise with callbacks
* Constructors
* Closures (many students do not finish this)

## Topics Covered in Today's Projects
* Basic Enumerables (some will take callbacks)
* Monkey-patching onto the prototype
* Iteration
* Recursion
* Classes and Instance Methods
  * ES5 and ES6

## Preparing to Lecture
You will want a tight grasp on:
* Overall JS syntax
* [Where do semicolons go?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) also [here](https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion)
* Primitives vs Objects
* 7 falsey values
* Return values for both standard functions and fat-arrow-functions (when do we explicitly return vs implicitly)
* [What happens when we use the `new` keyword to create an instance of a class?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
* [What is scope?](https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping_vs._dynamic_scoping)
* The differences between `const`, `let`, and `var`; specifically, you will want to know the difference between function-scoped variables, globally-scoped variables, and block-scoped variables.
* How do we know what `this` is referencing?
* [What is a closure?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

## Lecture Notes

The README provides notes in conjunction with the slides to help you keep track of where you are
in the lecture. Feel free to expand on them as you see fit. 

## Discussion points on today's topics

### Server Side JS
* lives in the browser, browsers have their own engines
* stand alone, server side js is a new concept
* node allows us to run js code here, it's actually pretty fast
* debugging using chrome is wicked easy

### Object Oriented JS
* functional: functions are first class objects, like any other var
* JS objects - "pojos", plain old javascript objects like hashes but can set and
  access properties using `.`.
* objects can also have functions set as properties
* `this` like self in ruby, set whenever a function is called
* must use `this` to access 'instance variables'
* function style: `func()`, this not set, method style: `thing.meth()`,
  this set to calling object.
* instead of classes, we have a constructor function, this takes args and sets
  attributes on `this`.
* `new Cat()`, creates a new `POJO` and calls function, this is new `POJO`
* functions have prototypes, so the constructor has a prototype.
* when an object is created by a constructor, it's `__proto__` property is set
  to its constructor's `prototype`.
* instance methods are defined on constructor's `prototype`
* so when we call methods on an instance, it looks in it's own attributes, then
  in `__proto__`'s attributes.
* very normal to pass functions as arguments, callbacks!

### Closures and Scope
* variables available when function was defined are available FOREVER
* just like in ruby blocks
* functions defined inside closures not part of a public object are effectively
  private.


### History
* designed in 10 days in 1995 for netscape 2, originally called mocha
* 1997 taken to Ecma to standardize language. Officially ECMAscript,
  javascript most popular implementation
* European computer manufacturers association
* supposed to be little brother to Java, which could run in browser
  applets
* intended to add little animations and flourishes for amateurs
* No classes because it was supposed to be a simple little easy
  language, heavy lifting was for java
* For non-professional programmers, supposed to be easy
* no integers, other weird shit
* ajax came around in mid 2000s starting with IE, JS also got the power
* web devs started making rich client applications and higher performing
  javascript became mandatory
* 2011: node allows us to write JS in the server
* fast, supported, omnipresent, can manipulate the DOM and send requests
* ECMAscript adopted in 1997 as a standard of compatibility for JScript
  and Javascript
* Now on 5.1 revision, 6 coming soon with new features.

### Style Differences
* explicit return or undefined
* parentheses for `if` `loop` `function(){}`
* curly braces too
* `camelCase` for variables
* many things falsey, not just false and nil, undefined, 0, "", NaN all false
* `===` won't coerce things into comparable formats
* semicolons are mandatory

### Common Mistakes
* not calling functions by forgetting `()`
* passing the result of functions as callbacks
* not explicitly returning
* accidental global vars

## During Lecture
* answer rails lite questions
* brief history of Javascript and Ecmascript
* Show Wat video (typically at end of lecture but up to your discretion)
* talk about style differences
* write quick sort
* write class: emphasize constructor function, prototype chain

## Solutions prep

**1) Javascript**
+ GO QUICKLY OVER THIS. They have done tons of hw.
+ Essential for frontend, now possible to do backend with Node
+ Set up script so you can use chrome! Excellent debugger
+ Differences with Ruby! See what they remember from the reading!
  + Falsey values (0, false, '', NaN, undefined, null, -0)
  + Explicit return
  + == vs ===
  + camelCase vs snake_case
  + semicolons (just use a linter)
    + Needed when you return a value! Like in assignment
    ```js
    const x = function (num) { return 3 * num }

    (10 + 5) > 20 ? console.log('big') : console.log('small');
    ```
    x will not be a function :(
  + Doesn't enforce arguments
  + Functions: all important! objects! Must be invoked with parentheses! Can be passed around as arguments (i.e. CALLBACK) and invoked later.
  + etc...

**2) Variable/Function declaration**
  + Variables
    + Danger of polluting global scope: show how making a global variable in Chrome puts the variable on the `window`.
    + default to `const`, fine for mutations, but not for reassigning
      + OK to reassign in for loops!
      ```js
        for (let i = 0, i < 5, i++) {
          const myNum = i + 1;
          console.log(myNum);
        }
      ```
    + only use `let` for things you know you need to reassign
    + `var` is old fashioned, function-scoped instead of block-scoped
    + variables are 'hoisted' (but not their assigned values). If you declare a variable in a scope, it IS the variable for that scope! i.e. below in the if block, if you `let favFood`, then you cannot access the first favFood within the block at all.
    ```js
      let favFood = "Taco";
      if (true) {
        console.log(favFood);
        favFood = "Pizza"; // Without 'let', this is Taco, Pizza, Pizza. WITH 'let', this is ERROR(must be commented out), Pizza, Taco.
        console.log(favFood);
      }
      console.log(favFood);
    ```
  + Functions
    + Named functions
      + hoisted to top of scope. You can invoke them before they're declared!
    + Functions stored in variable
      + hoisted like other variables
      + Optional explanation: the variable is hoisted but the assigned value isn't. With `var`, hoisted variables point to `undefined` before you declare them. With `let` and `const`, hoisted variables throw reference errors before they're declared.


**3) Ways to call a function**
+ Show `this` in each case with the debugger. First time they see chrome debugger!
+ function style
  + when the function is standalone.
  + `this` is global object or undefined (in ES6 classes)
    + either way, `this` in NOT helpful.
+ constructor style
  + when you call with `new`
  + `this` is a blank object
    + Has a `__proto__` property pointing the function's prototype
    + Note: EVERY function has a prototype. But we only care for constructor functions. We use CapitalizedCamelCase to denote constructor functions.
  + Visual on board:
  ```js
        wampus            sennacy               Cat.prototype
      {                    {                      {       
        title: 'wampus'     title: 'sennacy'        meow: function () {}
        __proto__: ->       __proto__: ->           numLegs: 4
      }                    }                      }
  ```
+ method style
  + when function is a value in an object.
  + calling on an object with a dot!
  + `this` is the object you called on
+ NOTE: this only refers to normal functions. Fat arrow functions, new to ES6, have a different relationship with `this`
  + `this` in fat arrows is whatever `this` was when it was declared.
  + If you declare a fat arrow function in the global namespace, `this` will be the global object!

**4) Closures/Callbacks**
+ Callbacks are functions as arguments
  + Write `giveMeFunc(callback) { callback() }`
+ Closures are functions which use variables defined in a higher scope.
+ Tour your favorite example from HW.
  + You can translate to Ruby to emphasize that they used closures before!
  + Closures are much more prominent in JS bc JS uses functions a lot more than Ruby uses Procs.
  ```ruby
    def breakfast
      order = ["eggs", "slice o' toast"]
      p order

      Proc.new do |food|
        order.push(food)
        p order
      end
    end
    closure = breakfast # it's a Proc
  ```
