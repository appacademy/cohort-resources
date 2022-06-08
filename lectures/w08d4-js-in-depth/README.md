## Lecture Agenda
0. Solutions / JS Questions (9:05 - 9:20)
    - myMap walkthrough (9:20 - 9:30)
1. Callbacks Recap (9:30 - 9:45)
* **BREAK (5 mins)**
2. ES6 Classes (9:50 - 10:05)
3. Context (10:05 - 11:00)
    - part 1: styles of function invocation, call, apply (10:05 - 10:30)
* **BREAK (5 mins)**
    - part 2: bind (10:35 - 11:00)
4. Async (11:00 - 11:30)
* **BREAK (5 mins)**
5. Readline (11:35 - 11:55)
6. IF TIME: Kahoot (11:55 - 12:00)



## 0) Yesterday's Solutions (9:05 - 9:30)

**Expect questions on:** (9:05 - 9:20)
+ Putting function in prototype vs. putting function in instances.
  + Recreating `meow` function in constructor would put a new `meow` function in every cat! Takes up lots of memory
  + Every cat has a different `meow`. Can't change `meow` easily for every cat.

**Point out:** (9:20 - 9:30)
+ Good idea to break down one of the enumerables, like myMap, so you can go over callbacks. Make a multi-liner!



## 1) Callbacks Recap (9:30 - 9:45)
+ Callback: a function that is passed to another function and intended to be called at a later time
+ Examples: timers (`setTimeout` and `setInterval`), network requests (fetching data), event registration
  - these all take in a callback, return instantly, and will trigger the callback later
+ Reiterate (because this is a common mistake that students make when first learning JS): 
  - a callback is passed UNINVOKED as an argument to another function
+ Code demo:
  - First: briefly walk through the four functions at the top (`add`, `subtract`, `multiply`, `sqrt`)
  - Next, walk through the two higher-order functions (`calculator`, `sum_two_operations`)
    * Higher-order function: a function that can take another function as an argument or return another function as a result. This is a really cool feature of JavaScript!
    * `calculator` demo:
      + The calculator is a higher-order function that takes in an `operationCallback` and uses that callback to process two numbers, finally returning the result of that operation.
      + First, show the wrong ways to pass a callback to `calculator`, and use debuggers to explain why it's incorrect. 
        ```js
        calculator(add(1, 2)) // can't invoke callback when passing it in! get TypeError: "operationCallback is not a function"
        calculator(add(1, 2), 3, 4) // equivalent to passing (3, 3, 4) and trying to invoke 3(3, 4)
        ```
      + Next, show the right way to pass a callback to `calculator`
        ```js
        calculator(add, 3, 4) // pass the callback in uninvoked
        ```
      + Finally, show the power of callbacks and higher-order functions: our calculator is flexible and can perform different operations on the same set of data (by taking in different callbacks)
        ```js
        calculator(subtract, 3, 4)
        calculator(multiply, 3, 4)
        calculator(sqrt, 3, 4)
        ```
    * `sumTwoOperations` demo:
      + This shows how a higher-order function can combine the results of two or more callbacks.
      + No need to spend a lot of time on this demo; consider having a student volunteer to pick two of the callbacks and then dictate how to pass them into `sumTwoOperations`. (Correct them if they try to invoke the callbacks)


**BREAK (5 mins)**


## 2) ES6 classes (9:50 - 10:05)
+ Emphasize: This is syntactic sugar!
+ Even though our focus for today is on how to write ES6 classes, we start the demo with a very quick overview of the ES5 syntax.
  - Go over the reasons why we teach ES5 syntax for classes:
    1. A lot of code bases will still have ES5 syntax, so you should understand how to read and write it.
    2. The newer class syntax hides how classes actually work in JS, and ES5 lets us develop a deeper understanding of how classes 
  - Walk through the `Cat` constructor and the instance methods defined on `Cat.prototype`
  - Create a cat instance in the console and show the cat's properties and instance methods
    ```js
    const garfield = new Cat("cat", "student");
    garfield.meow();

    // show in console: garfield's properties
    garfield
    garfield.name
    garfield.owner
    garfield.meow // (though not listed as an "own" property, it appears in the property dropdown when you tack on a dot, e.g., `garfield.`)
    garfield.cuteStatement

    // show in console: instance methods defined on the Cat.prototype
    Cat.prototype.meow
    Cat.prototype.cuteStatement
    ```
  - Do NOT spend a lot of time on ES5 syntax; assure students that we are going to see a lot more ES5 syntax and learn more in-depth about how prototypal inheritance works in a later lecture
+ Now we're going to show how to implement classes using a newer (ES6) syntax.
  - ES6 class syntax is JUST syntactic sugar for ES5 syntax
  - under the hood, it's still behaving in the same way and using the same prototypal mechanism as the older syntax; it just looks different
  - Refactor the Cat class to use ES6 class syntax
    * to save time, only refactor constructor and one instance method, then scroll to bottom to show the full code
  - Go through the same demo in the console: create a cat instance, show the cat's properties and instance methods.
    * The point to drive home is that even though the ES6 syntax looks different, it is still using the prototypal mechanism under the hood. 
      + A class is still a constructor function, and it still has a prototype
      + When we define instance methods inside a class definition, really what we're doing is monkey-patching (adding those methods as properties to) the class' prototype



## 3) Context: (10:05 - 11:00)
**Context Part 1: Ways of calling a function** (10:05 - 10:30)
+ Review the 3 original Ways and context
  + Method, Function, Constructor
  + Suggestion: have some sample code up, and ask students to find an example and state the value of `this` for each of the three ways.
+ Two more ways!
  + Call. Make a `detachedMeow`. Use it to make a cat meow. Then make a cat bark.
  + Apply. A for array! Lets you pass in an array or arguments. This was more useful in ES5, in the days before the rest operator.
  + [Chart](./waysToCall.png)
  + The context inside a function is solely determined by how a function is invoked!

**BREAK (5 mins)**

**Context Part 2: Bind** (10:35 - 11:00)
Note: Bind is tricky. Be prepared to use the debugger A LOT. Put a debuggers in between the #bind actually invoking a function to emphasize that bind does NOT invoke the function.

+ Problem: invoking things function style is hard. The context is always lost!
+ Example:
  + write times function: example of invoking callback FUNCTION STYLE.
  + `const detachedMeow = sennacy.meow;`
  + times(3, detachedMeow) => doesn't work
+ Callbacks are ALWAYS invoked function style
+ Solutions:
  ```js
    const betterDetachedMeow = function () { sennacy.meow() }
    const boundMeow = detachedMeow.bind(sennacy)
  ```
  + Both solutions work in `times`
  + `bind` is a method on the Function prototype which returns a new, bound function. IMPORTANT: calling `bind` on detachedMeow DOES NOT invoke detachedMeow!

**Context matters!**
+ Since the detachedMeow example is a bit isolated, show that context matters in another instance method
  + Suggestion: `Cat.prototype.sayHi` which calls `meow` three `times`
  + Solutions to context problem:
    + `const cat = this`; (or `that = this`) with anonymous function
    + `bind`
    + Big reveal: fat arrow! Not need for `that = this`. You can use `this` in fat arrow callback because the context inside a fat arrow is the same as the context outside the fat arrow.
  + In today's exercises, practice using `bind` instead if fat arrows. It's super important and tricky. You'll appreciate fat arrows so much more later if you struggle with `bind` first.




## 4) Aynchronicity (11:00 - 11:30)
+ The Async demo is broken up into four parts to introduce the key concepts bit by bit. The demo uses a recipe analogy to illustrate that asynchronicity lets us do certain tasks in the background, and to teach students how to enforce the correct order of operations between asynchronous and synchronous actions.
  - As you go through each part of the demo, make sure all other code is commented out (except for the `showImage` helper function at the very bottom of the demo file)
+ Demo phases
  1. Part 1: A simple recipe to boil an egg; all steps in order
      - Note: all actions are synchronous in this part of the demo
  2. Part 2: Introducing asynchronicity: in reality, some steps of the recipe take an indefinite amount of time to complete (boiling the egg, for example)
      - Takeaway: **Asynchronous callbacks wait for all synchronous code to finish executing before being invoked**
  3. Part 3: Ensuring the correct order of operations between async and sync code
      - Takeaway: **If we want code to wait for asynchronous callbacks to execute, we must put that code inside of an async callback**
      - This is a good opportunity to get students involved; get a volunteer to navigate refactoring the code from part 2 so that the steps happen in the right order (i.e., we should only take the egg out of the pot when it is done boiling)
      - The code should look something like this:
      ```js
      // initial egg state
      let eggState = "raw";

      // steps of our recipe
      function putEggInBoilingWater() {
          console.log(`1. Putting ${eggState} egg in boiling water`);
          setTimeout(() => {
              eggState = "cooked";
              console.log(`2. Egg is ${eggState}!`);
              takeEggOutOfPot();
              eatEgg();
          }, 3000);
      }

      function takeEggOutOfPot() {
          console.log(`3. Taking ${eggState} egg out of pot`);
      }

      function eatEgg() {
          let extraMsg;
          if (eggState === "raw") {
              extraMsg = "What a mess! 🤢";
          } else {
              extraMsg = "Yum! 😋";
          }
          console.log(`4. Eating ${eggState.toUpperCase()} egg. ${extraMsg}`);
          showImage(eggState);
      }

      // now try to perform the steps in the right order
      putEggInBoilingWater();
      ```
  4. Part 4: Asynchronous code is non-blocking; that's the power and beauty of it!
      - Takeaway: it lets us "multi-task" and gives us the behavior we've come to expect from interacting with websites:
        * the ability to continue interacting with the page (clicking buttons, scrolling through the page, etc) while images are loading or data is being fetched from a remote server
      - Make sure to invoke `setTable()` after calling `putEggInBoilingWater();`


**BREAK (5 mins)**


## 5) Readline library (11:35 - 11:55)
+ Note: we'll only use this library today so we can practice asynchronous functions before using JS with the internet. It's a little finicky and you have to run in node, not chrome. Run `node <filename>` instead of opening up node and `require`ing the file, because readline will be buggy and duplicate letters.
+ Syntax for setting up reader: don't need to memorize, just copy from notes.
+ 1) Basic question/answer. Close reader in callback.
  + Show how console.log in bottom of file runs BEFORE console.log in answer callback.
+ 2) Try to loop a question
  + Show naive solution of `while (true) { askQuestion() }`
    + Keeps calling `reader.question` without waiting for the response!
  + Ask students: How can we fix this? Let them try to navigate the better solution.
    + better solution: call `askQuestion` INSIDE the response callback to `reader.question`
    ```js
    rl.question('What do you think of JavaScript? ', response => {
      console.log(`Thank you for your valuable feedback: ${response}`);
      rl.question('What do you really think of JavaScript? ', truth => {
          console.log(`You said: ${truth}. Thank you for your honesty.`);
          rl.close();
      });
    });
    ```


## 6) Kahoot (if time)
+ https://create.kahoot.it/details/w8d5-callbacks-ny/17b3ba70-76a6-4d4f-9e50-b7c5a11e504c


## Previous Lectures
  + [July2020](https://github.com/appacademy/2020-07-06-NYC-Lecture-Notes/tree/master/w8d5)
  + [May2020](https://github.com/appacademy/2020-05-11-NYC-Lecture-Notes/tree/master/w8d5)

## Today's Projects
  + [Callback Exercises](https://github.com/appacademy/curriculum/tree/master/javascript/projects/functions_exercises)
  + [Towers of Hanoi](https://github.com/appacademy/curriculum/tree/master/javascript/projects/hanoi_node)
  + [Tic Tac Toe](https://github.com/appacademy/curriculum/tree/master/javascript/projects/ttt_node)

## Common Student Questions
  + How can you use const in the callback if it is being reassigned every time? New scope every invocation.
  + General confusion about the difference between invoking and referencing a function

## Additional Insights and Notes
  + ...
