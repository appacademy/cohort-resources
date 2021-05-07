# W8D5
### More JavaScript
![JavaScript-shade](https://i.redd.it/h7nt4keyd7oy.jpg)
Note:
+ lol
+ "JavaScript: The Good Parts" was a popular intro to the most useful features of ES5. ES5 really did deserve this joke. All the new features in ES6+ are "good parts" though. :D
---
## Today's Topics
+ Ruby vs ES5 vs ES6
+ `call`, `apply`, `bind`
+ `arguments` object
+ Class Syntax
+ Module Pattern
+ Callbacks
+ Event Loop
---
## [Ruby & JavaScript comparison chart](https://appacademy.github.io/curriculum/language_comparison/index.html)
Note:
+this image existed at some point
![comparing height](http://www.livescience.com/images/i/000/052/870/iFF/kids-comparing-heights-120816.jpg?1345149076)
Note:
+ "ES" = ECMA Script
+ JS was made in a little over a week, and since then has seen update after update fill in the gaps to make it more dynamic, more semantic and keep it relevant. These updates are released as to push forward the standard of JS developing, but as you all can imagine they take some time to become fully supported and integrated
+ We will expose you all to ES5 syntax which is universally supported as well as ES6, despite there already being an ES7 and ES8 release.
+ And if that weren't already confusing, ES6 actually refers to the update released in 2015 otherwise known as ECMAScript2015
---
![buh-bye](https://media.giphy.com/media/UQaRUOLveyjNC/giphy.gif)
#### bye bye ruby
Note:
Don't worry. When you get back to Ruby, you'll be all grown up...
---
## Ways to call a function
* Function Style: `func(arg1, arg2)`
* Method Style: `obj.method(arg1, arg2)`
* Constructor Style: `new ClassName(arg1, arg2)`
* `func.apply(thisArg, [argsArray])`
* `func.call(thisArg, arg1, arg2, ...)`
Note:
* they've seen the top 3 before, but we didn't talk about them.
* draw on the board
---
![call styles joke](https://66.media.tumblr.com/bd889e9ab3bb01c2c465f22aff49c9fb/tumblr_mpnqbjIxwk1sqlkr5o1_1280.jpg)
Note:
* Time for a **_code demo_**.
* (Someone in Jon's cohort drew this back in 2013...)
* Check out the [console methods](https://developer.mozilla.org/en-US/docs/Web/API/Console).
* steps (using Eater object)
	* show what `this` is in every call context
	* show how args differ between call and apply
  
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
### Class Demo

---
## Call
* calls function with given `this` value
* arguments provided individually
* `func.call(thisArg, arg1, arg2, ...)`
---
## Apply
* calls function with given `this` value
* expects an array of all argument parameters
* `func.apply(thisArg, argsArray)`
---
## Bind 
* returns a new function
* function has its `this` set to provided value
* `const newFunc = oldFunc.bind(thisArg);`
---
## Demo
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
+ ES5: `Array.prototype.slice.apply(arguments)`
+ Lazy ES5: `[].slice.apply(arguments)`
+ ES6: `Array.from(arguments)`
+ also ES6: `[...arguments]` 😎
Note:
ARGUMENTS DEMO
---
## Arguments Demo
---
![hangin-on](https://media.giphy.com/media/eBCnpuRGBhQGY/giphy.gif)
---
### Spread Operator `...`
```js
let foo = ['f', 'o', 'o'];
let bar = ['b', 'a', 'r'];
let baz = [ ...foo, ...bar ];
console.log(baz);
=> ['f', 'o', 'o', 'b', 'a', 'r'];
```
### Rest Operator `...`
```js
const checkTheRest = (first, ...everythingElse) => {
    console.log(first);
    console.log(everythingElse);
}
checkTheRest(1,2,3,4));
=> 1
=> [2,3,4]
```
Note:
* kind of self explanatory, but ask if they want a demo

---
## Module Pattern
* allows us to split our code into multiple files
  * like ruby's `require` and `require_relative`
* Two steps: exporting & importing
---
## Modules Demo
---
## Let's Talk about Callbacks!
---
## Callbacks
* Functions that are passed to other functions as arguments
* Allow us to build in asynchronicity into our programs
Note:
Remember that functions are first class objects and so can be stored and passed around like any other object.
---
### Demo Time!
---
## Event Loop
* Asynchronous functions schedule work to be done in the background
  * i.e. timers, AJAX requests, events
* Callbacks are invoked when action ready to occur & stack is empty
* [Event Loop Visualization](http://latentflip.com/loupe)
Note: 
draw event loop diagram on board
**read the demo**
* I don't feel like doing a kahoot
#### [hoot hoot](https://create.kahoot.it/details/w8d5-callbacks-part-1/87c9189d-b554-43cd-9e35-f83bb070d870)
---
# Thanks!
---