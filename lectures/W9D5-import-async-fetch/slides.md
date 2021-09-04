## W9D5 - JavaScript Project Technical Info

---

## Learning Goals

- Gain stronger understanding of a few commonly used pieces of ES6 syntax and their differences from ES5
- Declare an asynchoronous function using the `async` keyword
- Await the result of an asynchronous function using the `await` keyword
- Use the `Fetch API` to make Promise-based API calls using `fetch()`
- Get prepared to start the JavaScript Project!!!

---

## Today we will cover:

1. ES6 Syntax
2. `async` & `await`
3. What is Fetch?
4. How to use `fetch()`
5. Project Setup Walkthrough

---

## Reviewing ES6 Syntax

Note: these are all optional, you don't NEED them but they may help build projects

---

## Class Syntax

---

## The ES5 Way - Creating a Class

```js
function MyClass(attr1, attr2) {
    this.attr1 = attr1;
    this.attr2 = attr2;
}

MyClass.prototype.instanceMethod = function (){
    // ...do something
}
```

---

## The ES5 Way - Inheritance

```js
function Surrogate(){}
Surrogate.prototype = ParentClass.prototype
ChildClass.prototype = new Surrogate()
ChildClass.prototype.constructor = ChildClass
```

---

## The ES6 Way - Classes and Inheritance

- Cleaner Syntax more similar to class-based languages like Ruby
- Just syntactic sugar

```js
class MyClass extends ParentClass {
    constructor(attr){
        this.attr = attr
    }
    instanceMethod(){
        // ...do something specific to an instance
    }
    static classMethod(){
        // ...logic not specific to an instance
    }
}
```

Note: [Class Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)

---

## Arrow Functions

- One of the ways we can define a function in JavaScript
- Has a few behaviors that are different than normal function declaration:
    - Context binding
    - Optional parentheses...sometimes
    - Implicit returns...sometimes

---

![WaysToCallQuiz](./assets/waysToCallQuiz.png)

---

![WaysToCall](./assets/waysToCall.png)

---

## Arrow Functions and Context

- Arrow functions bind context (`this`) to the context in which the function was defined
- Arrow function context binding will even override calling `.bind` on the function

```js
const arrow = () => { console.log(this) }
arrow(); // Console logs Window
const bound = arrow.bind({ name: "Example" });
bound(); // Console logs Window
```

---

## Implicit Returns

- Arrow functions can *sometimes* be the exception to "no implicit returns in JavaScript"
- Implicit returns work by ommiting curly braces (`{}`) in the function declaration
- If returning an object, you can wrap it in parentheses to still leverage implicit returns
- Only works for performing one action or direct chain of actions
    - Cannot perform separate actions or define variables
    - Errors occur while defining the function

---

## Implicit Returns Examples

```js
// Return the value
const add = (num1, num2) => num1 + num2
// Return an object
const makeObj = (name, color) => ({
    myName: name,
    myColor: color 
})
// Multiple related & chained actions
const concatFirst3 = (arr1, arr2) => (
    arr1.slice(0, 3).concat(arr2.slice(0,3))
)

// Does not work! Will throw an error!
const error = (arr) => (
    const arr2 = arr.concat([1,2])
    arr2.map(e => e * 2)
)
```

---

## Omitting Parentheses

- Can omit parentheses when there is **exactly** one argument
- Cannot use with destructuring/rest operator/etc
- Commonly seen in things like for `forEach` or `map` callbacks

```js
// Can omit parentheses
ex => { /*do something*/ } 

// Cannot omit parentheses
() => { /*do something*/ }
(arg1, arg2) => { /*do something*/ }
(...args) => { /*do something*/ }
({ name }) => { /*do something*/ }

[1,2,3].map(el => el * 2) // returns [2,4,6]
```

---

## Importing and Exporting

---

## The ES5 Way - Exporting with `module.exports`

- Exports a single object
- If you want to export multiple things, add them as key/value pairs to the object you are exporting

---

## `module.exports`

```js
// export1.js
module.exports = function(){ console.log("I'm in export1") }
```
```js
// export2.js
module.exports = {
    ExampleClass: function ExampleClass(){},
    fn1: function(){ console.log("I'm in export2") }
}
```
```js
// export3.js
function fn1(){ console.log("I'm in export3") }
const valueToReference = 10 
module.exports = { fn1, valueToReference }
```

---

## The ES5 Way - Importing with `require`

- Set a variable to the imported object
- Can use object destructuring to pull out particular keys as independent variables
- Import the exported module by invoking `require` with the file path

---

## `require`

```js
// importing.js
const ex1 = require("./export1.js")
const { fn1, ExampleClass } = require("./export2.js")
const ex3 = require("./export3.js")

ex1(); // logs "I'm in export1"
fn1(); // logs "I'm in export2"
new ExampleClass()
ex3.fn1(); // logs "I'm in export3"
```

---

## Destructuring Imported Objects

```js
// export.js
module.exports = {
    ExampleClass: function ExampleClass(){},
    fn1: function(){ console.log("I'm in export!") }
}
```
```js
// import.js
const { fn1, ExampleClass } = require("./export.js")
fn1(); // logs "I'm in export!"
new ExampleClass()
```

---

## The ES6 Way - Exporting

- Files can only have one `export default` per file
- Files can have many named exports (through `export const` or `export class`)

---

## `export`

```js
// export1.js
class ExampleClass{}
export default ExampleClass
```
```js
// export2.js
export const fn1 = () => { console.log("I'm in export2") }
export const fn2 = () => { console.log("Also in export2") }
```
```js
// export3.js
const fn1 = () => { console.log("I'm in export3") }
const valueToReference = 10
export { fn1, valueToReference }
```

Note: [Export Docs](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

---

## The ES6 Way - Importing

- `import` something `from` a particular file
- Can use object destructuring to pull out particular named exports as independent variables
- If an object was exported with `export default`, you can name the import anything
  - Conventionally we will still match the name of what we exported

---

## `import`

```js
import ExampleClass from "./export1.js"
import { fn1, fn2 } from "./export2.js"
import * as export3 from "./export3.js"

new ExampleClass();
fn1(); // logs "I'm in export2"
export3.fn1(); // logs "I'm in export3"
```

Note: [Import Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

---

```js
// es5_export.js
module.exports = {
    ExampleClass: function ExampleClass(){},
    fn: function(){ console.log("I'm ES5!") }
}
// es5_import.js
const exported = require("./export.js")
exported.fn(); // logs "I'm ES5!"
new exported.ExampleClass()
```
```js
// es6_export.js
export class ExampleClass {}
export const fn = () => { console.log("I'm ES6!") }
// es6_import.js
import * as exported from "./export.js"
exported.fn(); // logs "I'm ES6!"
new exported.ExampleClass()
```

---

## `async` and `await`

---

## Promises

- `async` and `fetch` return Promises
- A Promise is a "then-able" object - it gives us `.then`
- `somePromise.then(...)` returns another Promise, allowing us to chain
- `.catch` or a second argument to `.then` will allow us to handle failures

---

## `async`

- Using `async` keyword with `function` will declare an asnychronous function
    - Entire contents of an `async function` will occur asynchronously
- JS will implicitly return a `Promise` from function declared with `async`
    - This means we can manipulate the return value of an async function the same way we would with a Promise

---

## `await`

- Allows us to *await* the resolution of a Promise between synchronous actions
- [From the docs:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- The `await` operator is used to wait for a `Promise`
- It can only be used inside an `async function`

---

## `async`/`await` Demo!

---

## What is Fetch?

- Built-in JavaScript Web API to make HTTP requests
  - Web APIs only work in the browser and we would need packages to achieve functionality in Node
- [From the docs:](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- The Fetch API provides a global `fetch()` method that provides an easy, logical way to fetch resources asynchronously.

---

## Fetch API VS jQuery Ajax

- The Fetch API provides the `fetch()` method on the `window`.
- The Promise returned from `fetch()` *won’t reject on HTTP error status codes* 
  - It will only reject on network failure or if anything prevented the request from completing.
  - `fetch()` returns a Promise rather than a Promise-like object (uses `catch` rather than `fail`)
- `fetch()` won’t send cross-origin cookies unless you set the credentials init option.

---

## How to use `fetch()`

```js
fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json() 
    // response.json() is asynchronous
  })
  .then(data => { 
    // Data is what is returned after response.json() resolves 
    console.log(data));
```

- Here we are fetching a JSON file across the network and printing it to the console. 
- The simplest use of `fetch()` takes one argument — the `path` to the resource you want to fetch — and returns a `Promise` containing the `response` (a Response object).
- This is just an HTTP response, *not the actual JSON*. 
  - To extract the JSON body content from the response, we use the `response.json()` method.
  - For more information on using Fetch, check the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

---

## Checking that the `fetch()` was successful

- Promise returned by `fetch()` doesn't reject on an HTTP error status
  - We have to check if the request was successful when receiving the response
- [From the docs:](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- An accurate check for a successful `fetch()` would include checking that the Promise resolved, then checking that the `response.ok` property has a value of `true` 

---

## Using `fetch()`

```js
fetch('http://example.com/movies.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

---

## `fetch()` Demo

---

## Webpack Setup for JavaScript Project

---

## Webpack Terminology Reminders

- **Entry File** - The file JavaScript file webpack "listens" to. 
    - *All JS files **must** be imported here or in files imported here at some point up the chain*
- **Output / Bundled File** - The resulting file after webpack has been run
    - Gets HUGE as a project grows and can crash VSCode: avoid opening this file!
    - This file is what the `<script>` tag in your HTML file should reference
- **Plugins**/**Modules** - additional libraries integrated with Webpack that are used to resolve certain types of files
- **Babel** - Transpiler that converts JS code to an older specification while webpacking
    - Allows us to use newer syntax/features without browser compatibility issues
- **Watch** - Tells webpack to "listen" to files it's webpacking and rerun if changed
- `mode=development` - Better for...development! (ex: production ignores debuggers)

---

## Project Directory Walkthrough

- [Instructions](https://open.appacademy.io/learn/swe-campus-hybrid/javascript-project/setup)

---

## Good luck!

---