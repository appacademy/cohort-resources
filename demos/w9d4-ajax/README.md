# W9D4
## AJAX & Promises

Note:
* Intro Music - https://www.youtube.com/watch?v=dTQMd2I3drE
* Ned gave this lecture at one time, and his lecture notes and demo are located here: https://github.com/ruggeri/ajax-lecture
* You have all had a taste of Javascript and I'm sure have realized it can get complicated with async functions
* Consider a situation where you have several asynchronous calls that are dependent on other asynchronous calls. What would happen if we tried to use forEach? You're going to have an issue due to asynchronicity.
* We need a way to represent the completion of an async operation and it's resulting value.

---

## Review of Request Cycle

![httpreqvsajax](https://www.dotnetcurry.com/images/jquery/Getting-started-with-.ajaxBack-to-Basics_197B/httpreqvsajax.png)

Note:
* Until now, whenever we've submitted forms to the server in an HTTP request, a successful response typically redirects browser to request another page. The browser fetches this and renders the new content.
* Imagine is any time you liked an instagram post the whole app reloaded - this is unacceptable! This allows us to make single page apps.
* Also, what if instead you just want to change a small thing based on your request and don't want to be redirected?
* AJAX makes requests and receives responses in the background. Upon completion you will not load a new page but will receive a response with some data and fire a JS callback function.
* We are moving to next iteration of our web-application stack - client-side rendering where we supply more JS when rendering our pages to create dynamic content and eventually our rails controllers will only serve database information (json) to be used by client-side rendering scripts

---

## Where We're Going

* The front-end of our apps (i.e. the views) will be built in Javascript using a library called *React*. 99% of our HTML will be written in these files, which will live in a top-level folder of our Rails projects called `frontend`.
* We will still use the `views` folder inside of `app`, but we will be writing `json` files instead of `html`.
* Rails becomes a back-end API that our React front-end can connect to and acquire the incremental data it needs to render the next view. 

---
# Questions?
---

## Web API (server-side)

* A server-side **web API** is a programmatic interface consisting of one or more publicly exposed **endpoints** to a defined **request–response message system**, typically expressed in JSON or XML, which is exposed via the web—most commonly by means of an HTTP-based web server.
* Number of Web APIs up from 105 in 2005 to over 9000 in 2013
![over9000](https://media.giphy.com/media/MvedbKot538WY/giphy.gif)

Note:
* This refers to *server-side* web APIs -> the lecturer tomorrow will focus more on *client-side* web APIs (functions implemented by the browser that you can use like `fetch` or `setTimeout` (in the `WindowAndWorkerGlobalScope` web API))
* Before going into the details on Promises & AJAX, tell them why they should care about this stuff. There is a plethora of information available out there for free that we can use to build our apps and that's something they should be really excited about. Explain what a Web API is, and show them some cool ones (a few linked below). Show them how to navigate a Web API and: 
  * Look at the status code charts to see the various types of responses they can expect to receive (so they can handle appropriately in their apps)
  * Read through the docs to find the endpoints they want to use.
  * See sample responses
* Do the `fetch` [demo](fetch.md) 

Cool Web APIs:
* [Spotify](https://developer.spotify.com/documentation/web-api/)
* [Star Wars](https://swapi.co/)
* [Pokemon](https://pokeapi.co/)
* [Brewery DB](http://www.brewerydb.com)
* [Cat API](https://docs.thecatapi.com/)

---

![Web Api Chart](https://www.programmableweb.com/sites/default/files/API%20Growth%20Since%202005%20ProgrammableWeb.png)

---

## What is AJAX?
* **A** synchronous **J** avascript **A** nd **X** ML
* An HTTP request that happens in the background
* jQuery `$.ajax` method allows us (among many other tools/libraries) to make AJAX requests
  * Returns a _promise_ (more on that later)
  * You can use any data format

Note:
* Instead of receiving a response with an entire page, we receive a response with only some data and can update our page accordingly.
* AJAX returns a `jqXHR` (XHR = XMLHTTPRequest) object that can be used like a promise, so we don't have to pass a callback to AJAX and can use `.then`
* Note that the last bullet refers specifically to jQuery's `$.ajax` method, however AJAX is a broad concept that extends beyond just this method and refers simply to the concpet of a background HTTP request made using Javascript.

---

## AJAX Example

```js
$.ajax({
  url: '/squirrels', // URL of HTTP request
  method: 'POST', // HTTP Verb for request
  data: { // data we send up with the request (HTTP body)
    squirrel: {
      name: 'Munchie',
      species: 'Flying'
    }
  },
  dataType: 'JSON', // data type we want BACK in HTTP response
  success: res => console.log(res), // success callback
  failure: err => console.log(err) // failure callback
});
```

Note:
* `$.ajax` accepts an options object
* `url` is only necessary key for an AJAX call
* note that `dataType` refers to the type of data that you're *expecting back from the server* - not the type of data that you are sending. Generally you don't need to specify this as it should be able to figure it out.
* Like other JS functions, AJAX calls are asynchronous, and sometimes we want to chain several async functions together. Like I said it returns a Promise-like object, so we can use .then to chain them.
* Note that vanilla js `XMLHttpRequest` is not 'thenable' and must be wrapped in promise. Use callback in `onReadyStateChange` to determine whether to `resolve` or `reject` the request. If they ask about `XMLHttpRequest` you can briefly touch on this but mention that it will be gone over in more detail in tomorrow's lecture

---
# Questions?
---

## Old Way
```js
function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

doSomething(successCallback, failureCallback);
```

---

## ...inevitably leads to
* Pyramid/Christmas Tree of Doom
```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Note:
* But what happens when we have multiple callbacks that all rely on each other?

---

## Fancy New Way
```js
doSomething()
.then(result => doSomethingElse(result)) //implicit return
.then(newResult => doThirdThing(newResult)) //implicit return
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.fail(failureCallback);
```

Note:
* Wouldn't it be nice if we could do something like this?

---

# Questions?

---

## Promises

* Promises represent the eventual completion (or failure) of an asynchronous operation, and its resulting value.
* A promise is an object that wraps an **action**, which is the task (typically asynchronous) it is supposed to perform before it either fails or succeeds based on some **constraint**.
* Allows complex asynchronous code to be more readable

Note:
* Promises are an awesome solution to asynchronicity in JS. And we will primarily use them for async fetches for data.
* Promises are a tool for simplifying callbacks to asynchronous functions.
* Similar to the way that jQuery allows us to wrap HTML elements so that we now have jQuery objects we can perform more convenient methods on, Promises wrap asynchronous functions, so that we can use `.then` to chain them and make our lives easier and our code more readable.
* In AJAX the constraint is typically the status code returned by the server - if it is a 200 level status code, `resolve` will be invoked and the success callback will run, while anything else will result in the error callback running.

---

## Promise API

* `then` is the most important Promise method
	* takes a success callback and (optionally) a failure callback as args
  * returns a new promise
  * can therefore chain `then` as many times as you want
* A promise chain stops if there's an exception and looks for failure callback in next `then` or, if there is none, down the chain for a `catch`.
  * jQuery's `$.ajax` method technically returns a _promise-like_ object (`jqXHR` object - uses `fail` instead of `catch` for error callback)

---

## States of a Promise

* **Pending** - The promise's *action* is ongoing (hasn't fulfilled or rejected yet)
* **Settled** - The promise's *action* has finished (is either fulfilled or rejected)
  * **Fulfilled** - The promise's *action* succeeded
    * Success callback in `then` will run
  * **Rejected** - The promise's *action* failed
    * Failure callback in `then` or `catch` will run
  
Note:
* I usually take this time to open up the [Promise MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and go through some basic examples.

---

# Promise Example

---

## AJAX with Promises

```js
$.ajax({
  url: '/squirrels',
  method: 'POST',
  data: {
    squirrel: {
      name: 'Munchie',
      species: 'Flying'
    }
  },
  dataType: 'JSON',
})
.then(res => console.log(res))
.fail(err => console.log(err));
```

---

## 5 Minute Break

---

## Code Demo - Giphy Web API
* We have a rails app, but we decide we need it to be more reactive.
* We decide to use AJAX requests to update our page in real time.
* Instead of using a template for every controller action, we have one view!

Note:
* Why? Because as I mentioned earlier, instead of responding with HTML, we are going to be responding with JSON.

---
# Project today

* make sure that you specify what information you are expecting to receive.
* the backend of the skeleton that you are receiving is acting as an api endpoint
  * you're backend is the chef and is serving you up info that you are requesting
  
---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=6f29decf-a97d-467e-aba0-eb0de1871e76)

---


