# W8D5

### More JavaScript

![JavaScript-shade](https://i.redd.it/h7nt4keyd7oy.jpg)


---

## Today's Topics

+ Ruby vs ES5 vs ES6
+ Class Syntax
+ `call`, `apply`, `bind`
+ `arguments` object
+ Module Pattern
+ Callbacks
+ Event Loop

---


## [Ruby & JavaScript comparison chart](https://appacademy.github.io/curriculum/language_comparison/index.html)


---

![buh-bye](https://media.giphy.com/media/UQaRUOLveyjNC/giphy.gif)
#### bye bye ruby

---

## Back to the topic at hand...

![JavaScript](https://i.ytimg.com/vi/sZDjqTnfiGA/maxresdefault.jpg)

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


---

### Class Demo

![class-demo](http://wwonline.net/wp-content/uploads/2015/04/Mobile-Technology-In-The-Classroom.png)


---

## Ways to call a function

* Function Style: `fun(arg1, arg2)`
* Method Style: `obj.method(arg1, arg2)`
* Constructor Style: `new`
* `call(thisArg, arg1, arg2, ...)`
* `apply(thisArg, [argsArray])`


---
## Binding

* ensure our context is what we want it to be
* `bind()` returns a **function**
* Note: different from `call` and `apply` which **invoke** the function

---

### Call Apply Bind Demo

---

## Arguments

* Functions happily accept more or fewer arguments than expected
* omitted arguments are set to `undefined` (if they have no default)
* Accessing extra arguments:
  * ES5: array-like `arguments` variable
  * ES6: rest/spread operator: `...`

---

### Some different ways to convert `arguments` into an Array:

+ ES6: `Array.from(arguments)`
+ ES5: `Array.prototype.slice.apply(arguments)`
+ Lazy ES5: `[].slice.apply(arguments)`
+ 😮 ES6: `[...arguments]`


---

## Arguments Clinic

![monty-python-argument-clinic](https://multimedia-english.com/recursos/contenidos/5b332af4cb618cc94c765a42085f1422.jpg)

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


---

## Let's Talk about Callbacks!

![thatd-be-great-callback](https://media.makeameme.org/created/if-you-could-phpoic.jpg)

---

### No, not that kind of callback.

![not-that-kind](https://www.executiveconnexions.com/wp-content/uploads/2014/10/Why-dont-recruiters-call-me-back35-e1458726356329.jpg)

### Not yet...

---

## Callbacks

* Functions that are passed to other functions as arguments
* Allow us to build in asynchronicity into our programs

![customer-callback-system](https://www.infosearchbpo.com/bpo-news/wp-content/uploads/call-back-system.jpeg)


---

### Demo Time!

![cute-puppy-callback](https://memegenerator.net/img/instances/58926517/just-waiting-for-you-to-call-me-back.jpg)


---

## Event Loop

* Asynchronous functions schedule work to be done in the background
  * i.e. timers, AJAX requests, events
* Callbacks are invoked when action ready to occur & stack is empty
* [Event Loop Visualization](http://latentflip.com/loupe)


---
```js
function loadPage() {
	console.log('Let us begin');
	$.getNavBar(loadNavBar);
 	console.log('Hello');
 	setTimeout(function later(){console.log('Out of timeout')}, 10);
 	$.getFeed(loadFeed);
 	console.log('Almost there');
}
```

---

## Pop Quiz!

#### [hoot hoot](https://create.kahoot.it/details/w5d5-callbacks-quiz-2/aae9c829-64e6-4e43-a68f-efd8ef52167c)

---

![not-an-argument](https://i1.wp.com/www.utahpoliticohub.com/wp-content/uploads/2015/11/argument-clinic.gif?fit=474%2C342&ssl=1)

---

![the-light](https://media.giphy.com/media/xlGYf1RUbYYes/giphy.gif)

---

# Thanks!

![JavaScript](https://stackify.com/wp-content/uploads/2017/08/Javascript-vs-Typescript-793x397.jpg)
