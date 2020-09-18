# W8D5

### JavaScript II

![JavaScript-shade](https://i.redd.it/h7nt4keyd7oy.jpg)

Note:
+ lol
+ "JavaScript: The Good Parts" was a popular intro to the most useful features of ES5. ES5 really did deserve this joke. All the new features in ES6+ are "good parts" though. :D

---
## Before we get started
---

## Today's Topics

+ Ruby vs ES5 vs ES6
+ Debugger & Linter
+ Class Syntax
+ `call`, `apply`, `bind`
+ `arguments` object
+ Module Pattern
+ Callbacks
+ Event Loop

---


## [Ruby & JavaScript comparison chart](https://appacademy.github.io/curriculum/language_comparison/index.html)
#### _look back at it_

Note:
+ "ES" = ECMA Script
+ JS was made in a little over a week, and since then has seen update after update fill in the gaps to make it more dynamic, more semantic and keep it relevant. These updates are released as to push forward the standard of JS developing, but as you all can imagine they take some time to become fully supported and integrated
+ We will expose you all to ES5 syntax which is universally supported as well as ES6, despite there already being an ES7 and ES8 release.
+ And if that weren't already confusing, ES6 actually refers to the update released in 2015 otherwise known as ECMAScript2015

---

## Debugger

* Practice debugging every day!
* We'll demo using debugger for today's projects
![elmer-fudd-get-rid-of-bugs](https://i.dailymail.co.uk/i/pix/2015/08/25/16/2BA72DA100000578-3210389-image-a-27_1440516318230.jpg)

---

## Linters

* Find errors _before_ you run your code.
* Teach & enforce best practices.
* Enforce style conventions.

![lint-roller](https://fthmb.tqn.com/7FrkhIuQFKyGdcDfsNxY0eE3Mas=/960x0/filters:no_upscale()/GettyImages-sb10066479g-001-589364fb5f9b5874eee2b5fd.jpg)

Note:

Get those little bits of highly-flammable lint off your code!

---

### ESLint

* Highly configurable (read: not opinionated)
* List of [errors/configurations](https://eslint.org/docs/rules/)
* [Pre-made config file](https://raw.githubusercontent.com/appacademy/dotfiles/master/dot/eslintrc) just for you! (store at `~/.eslintrc`)
* Install the [NPM package](https://www.npmjs.com/package/eslint) and the [VS Code extension](https://marketplace.visualstudio.com/itemdetails?itemName=dbaeumer.vscode-eslint).

Note:
We designed this config file to highlight best practices without being too persnickety about style.

---

## Back to the topic at hand...

![JavaScript](https://i.ytimg.com/vi/sZDjqTnfiGA/maxresdefault.jpg)

---

## Ways to call a function

* Function Style: `fun(arg1, arg2)`
* Method Style: `obj.method(arg1, arg2)`
* Constructor Style: `new`

---
# Quick Demo - Functions
---

## Class Syntax

* JavaScript uses prototypal inheritance
* class definition in ES5:
  * any function can be a class constructor
  * explicitly set keys on `prototype`
  * syntax is very different from Ruby
* class definition in ES6: syntactic sugar
  * creates same prototype structure as ES5
  * a more familiar, user-friendly syntax
  * adds [extra features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) that are beyond our scope today

---

# Demo - Class Syntax

![class-demo](http://wwonline.net/wp-content/uploads/2015/04/Mobile-Technology-In-The-Classroom.png)

Note:

Let's play around with our new, high-tech class syntax!

* reimplement Counter and Eater from yesterday as classes.
* make mistakes
  * forget how to make a constructor
  * use arrow functions as methods
* translate ES5 syntax to ES6
	* add a static method to Eater
* Switch them back to ES5.
	* We'll use them in the next section.
  * students will use ES5 class syntax for Monday.

---

## Ways to call a function

* Function Style: `fun(arg1, arg2)`
* Method Style: `obj.method(arg1, arg2)`
* Constructor Style: `new`
##### NEW!
* Apply: `func.apply(newContext, [args])`
* Call: `func.call(newContext, arg1, arg2)`
* Bind: `obj1.func.bind(newContext)(arg1,arg2)` 
	* Notice the second invocation!

Note:
* they've seen the top 3 before, but we didn't talk about them.

---
## Binding

* ensure our context is what we want it to be
* `bind()` returns a **function**
* Note: different from `call` and `apply` which **invoke** the function

---
# Demo - Call, Apply, and Bind
![call styles joke](https://66.media.tumblr.com/bd889e9ab3bb01c2c465f22aff49c9fb/tumblr_mpnqbjIxwk1sqlkr5o1_1280.jpg)

Note:

* Time for a **_code demo_** on `call`, `apply`, and `bind`.
* (Someone in Jon's cohort drew this back in 2013...)
* Check out the [console methods](https://developer.mozilla.org/en-US/docs/Web/API/Console).
* steps (using Eater object)
	* show what `this` is in every call context
	* show how args differ between call and apply

---

## Arguments

* Functions happily accept more or fewer arguments than expected
* omitted arguments are set to `undefined` (if they have no default)
* Accessing extra arguments:
  * ES5: array-like `arguments` variable
  * ES6: rest/spread operator: `...`

Note:
* JavaScript is a very permissive language. It favors passing `undefined` over throwing an error.
* `...`
  * called "rest operator" when it takes the _rest_ of the arguments
  * called "spread operator" when it spreads out an array
* ES5 - had to use `Function.prototype.apply()` to do what spread now does

---

### Some different ways to convert `arguments` into an Array:

+ ES6: `Array.from(arguments)`
+ ES5: `Array.prototype.slice.apply(arguments)`
+ Lazy ES5: `[].slice.apply(arguments)`
+ 😮 ES6: `[...arguments]`

Note:
ARGUMENTS DEMO

---

## Arguments Clinic

![monty-python-argument-clinic](https://multimedia-english.com/recursos/contenidos/5b332af4cb618cc94c765a42085f1422.jpg)

Note:

* Demo arguments
* If you haven't seen [Monty Python's Argument Clinic sketch](](https://www.youtube.com/watch?v=ohDB5gbtaEQ)), it's worth a watch.

---

# Pop Quiz!
## [*Kahoooooot*](https://create.kahoot.it/details/w5d5-callbacks-quiz-1/580fb3b6-2570-44d1-8ea5-79f791b68bfb)

---

![hangin-on](https://media.giphy.com/media/eBCnpuRGBhQGY/giphy.gif)

---

## Module Pattern

* allows us to split our code into multiple files
  * like ruby's `require` and `require_relative`
* Two steps: exporting & importing

---

### Modules Demo

![space-station-module](http://www.21stcentech.com/wp-content/uploads/2013/11/Zarya-module.jpg)

Note: send some drinks to my mom demo

don't forget to export!

---

## Quick Break!

---

## Let's Talk about Callbacks!

![thatd-be-great-callback](https://media.makeameme.org/created/if-you-could-phpoic.jpg)

---

## Callbacks

* Functions that are passed to other functions as arguments
* Allow us to build in asynchronicity into our programs

![customer-callback-system](https://www.infosearchbpo.com/bpo-news/wp-content/uploads/call-back-system.jpeg)

Note:

Remember that functions are first class objects and so can be stored and passed around like any other object.

---

### Demo Time!

![cute-puppy-callback](https://memegenerator.net/img/instances/58926517/just-waiting-for-you-to-call-me-back.jpg)


---

## Event Loop

* Asynchronous functions schedule work to be done in the background
  * i.e. timers, AJAX requests, events
* Callbacks are invoked when action ready to occur & stack is empty
* [Event Loop Visualization](http://latentflip.com/loupe)

Note: draw event loop diagram on board

**read the demo**

---

## Pop Quiz!

#### [hoot hoot](https://create.kahoot.it/details/w5d5-callbacks-quiz-2/aae9c829-64e6-4e43-a68f-efd8ef52167c)

---

![the-light](https://media.giphy.com/media/xlGYf1RUbYYes/giphy.gif)

---

# Thanks!

![JavaScript](https://stackify.com/wp-content/uploads/2017/08/Javascript-vs-Typescript-793x397.jpg)
