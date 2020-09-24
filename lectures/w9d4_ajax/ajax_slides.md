# W9D4
## AJAX & Promises

Note:
* Intro Music - https://www.youtube.com/watch?v=5HI_xFQWiYU
* Ned gave this lecture at one time, and his lecture notes and demo are located here: https://github.com/ruggeri/ajax-lecture

---

## Learning Objectives

* Understand how to make AJAX requests
* Be able to use jQuery $.ajax()
* Understand how to use Promises

Note:
- You've all had a taste of Javascript and I'm sure you've realized it can get complicated with async functions because of the unpredictable nature of when a request finishes
- So today, we're going to talk about how we can make asynchronous requests for data and use it to update our webpage, be able to use jQuery's AJAX method and understand how powerful promises are

---

## Review of Request Cycle

![httpreqvsajax](http://www.dotnetcurry.com/images/jquery/Getting-started-with-.ajaxBack-to-Basics_197B/httpreqvsajax.png)

Note:
- Until now, whenever we've submitted forms to the server in an HTTP request, a successful response typically redirects browser to request another page. The browser fetches this and renders the new content. This is the server side rendering we've been working with so far.
- Imagine if any time you liked an instagram post the whole app reloaded - this is unacceptable! If we make a small change like a like, we don't want the whole page to load nor be redirected to another page.
- Consider a situation where you have several asynchronous calls that are dependent on other asynchronous calls. What would happen if we tried to use forEach for data we requested? You're going to have an issue due to asynchronicity, because that data might not be available yet.
- We need a way to represent the completion of an async operation and it's resulting value.

---

## Where We're Going

* Single page web applications
  - client-side rendering built using *React*
* Sending and rendering data as `json`
* Rails backend becomes a server-side api

Note:
- Yesterday, you've seen how we can manipulate our HTML DOM elements using jQuery.
- We're moving towards our next iteration of our web-application stack - single page web applications using client-side rendering where we use JS when rendering our pages to create dynamic content. Eventually our rails controllers will only serve database information (json) to be used by client-side rendering scripts
- The front-end of our apps (i.e. the views) will be built in Javascript using a library called *React*. 99% of our HTML will be written in these files, which will live in a top-level folder of our Rails projects called `frontend`.
- We will still use the `views` folder inside of `app`, but we will be writing `json` files instead of `html`.
- Rails becomes a back-end API that our React front-end can connect to and acquire the incremental data it needs to render the next view. 
- Today's project you'll still render either views or json. Moving forward we will render exclusively `json`

---

## What is AJAX?
* **A** synchronous **J** avascript **A** nd **X** ML
* An HTTP request that happens in the background
* Allows us to request and receive data after a page has loaded
* Allows us to send data to the server in the background

Note:
- AJAX makes requests and receives responses in the background. It's a type of HTTP request that happens in the background. It stands for Asynchronous JavaScript And XML. XML is a markup language designed to store and transport data.
  + side note: XML used to be the standard data format for AJAX responses, but most people use JSON now. Note that technically the response can be in any format; AJAX requests are just background HTTP requests, and servers can respond to an HTTP request with a document of any format (text, JavaScript, HTML, JSON, pdf, etc).
- Upon completion you will not load a new page but will receive a response with some data and fire a JS callback function and can update our page accordingly
  + This is what allows us to make single page apps. The idea that data can be fetched and updated without having to reload the entire page or redirect to another page is what makes single page web apps possible.

---

## AJAX Process Flow Example

1. An event occurs on a web page (i.e. a button is clicked)
2. An XMLHttpRequest (XHR) object is created and sends a request to the web server
3. Server processes the request
4. Server sends a response back to the browser
5. Proper action is performed by JavaScript (i.e. page update)
![httpreqvsajax](http://www.dotnetcurry.com/images/jquery/Getting-started-with-.ajaxBack-to-Basics_197B/httpreqvsajax.png)

Note:
- Go back to diagram to walk through AJAX request

---

## jQuery $.ajax()

* jQuery `$.ajax` method allows us (among many other tools/libraries) to make AJAX requests
  * Returns a _promise_ (more on that later)
  * You can use any data format
* Other ways to make AJAX requests:
  * Vanilla JavaScript's `XMLHttpRequest` or `fetch`

Note:
- More broadly, AJAX is simply a type of request made in JavaScript in the background
- You can use Vanilla JS to make an AJAX request using the `XMLHttpRequest` object constructor. Note that vanilla js `XMLHttpRequest` is not 'thenable' and must be wrapped in promise.
- You can also make AJAX requests using the `fetch()` method as well as `axios` when you get to MERN
- Focus of this lecture is using the jQuery $.ajax() method to make AJAX requests as this is what you'll be using going forward in the curriculum as well.
- jQuery wraps the browser native XMLHttpRequest Object (XHR) with a superset API and simulates native XHR functionality where possible
- $.ajax() returns a `jqXHR` (XHR === XMLHTTPRequest) object that can be used like a promise, so we don't have to pass a callback to AJAX and can use `.then`

---

## $.ajax() Example

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
  error: err => console.log(err) // failure callback
});
```

Note:
- `$.ajax` accepts an options object
- `url` is the only necessary key for an AJAX call; it is the url your request goes to. 
- `method` Default method is `GET`; for non-get requests, you must specify
- `data` option can contain either a query string of the form key1=value1&key2=value2, or an object of the form {key1: 'value1', key2: 'value2'}. If the latter form is used, the data is converted into a query string using jQuery.param() before it is sent. This processing can be circumvented by setting processData to false. The processing might be undesirable if you wish to send an XML object to the server
- `dataType` refers to the type of data that you're *expecting back from the server- - not the type of data that you are sending. Generally you don't need to specify this as it should be able to figure it out. JSON will yield a JavaScript object. If json is specified, the response is parsed using jQuery.parseJSON before being passed, as an object, to the success handler. The parsed JSON object is made available through the responseJSON property of the jqXHR object.
- `success`is the callback used when the request successfully completes. This event is only called if the request was successful (no errors from the server, no errors with the data)
- `error`is the callback used when the request fails. This event is only called if an error occurred with the request (you can never have both an error and a success callback with a request).


---

## Old Way
```js
function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

asynchFunction(successCallback, failureCallback);
```

Note:
- In the above example, we call `doSomething` with 2 callbacks - one for success and one for failure
- You can imagine the `doSomething` function to return a jQuery $.ajax() call and uses the `successCallback` and `failureCallback` as the callbacks for the success and error keys respectively.
- With 2 callbacks, it seems manageable, BUT....

---

## ...inevitably leads to

* Pyramid/Christmas Tree of Doom

```js
asynchFunction(function(result) {
  anotherAsynchFunction(result, function(newResult) {
    thirdAsynchThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Note:
- But what happens when we have multiple callbacks that all rely on each other?
- As in the name, AJAX calls are asynchronous, and sometimes we want to chain several async functions together.

---

## Fancy New Way
```js
asynchFunction()
.then(result => anotherSynchFunction(result))
.then(newResult => thirdAsynchThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

Note:
- Wouldn't it be nice if we could do something like this? This is more readable.

---

## Promises

* Promises represent the eventual completion (or failure) of an asynchronous operation, and its resulting value.
* A promise is an object that wraps an **action**, which is the task (typically asynchronous) it is supposed to perform before it either fails or succeeds based on some **constraint**.
* Allows complex asynchronous code to be more readable

Note:
- Promises allow us to do just that. Promises are a tool for simplifying callbacks to asynchronous functions. It allows us to chain on additional callbacks using the results from the previous call.
- Promises are an awesome solution to asynchronicity in JS. And we will primarily use them for async fetches for data. This will allow us to wait for our data fetch to return with our results and then run a callback that does something with the data. Without promises, JS asychronocity makes it difficult to know when results will come back since that depends on a number of other factors like network latency.
- In AJAX the constraint is typically the status code returned by the server - if it is a 200 level status code, `resolve` will be invoked and the success callback will run, while anything else will result in the error callback running.

---

## States of a Promise

* **Pending** - The promise's *action* is ongoing (hasn't fulfilled or rejected yet)
* **Settled** - The promise's *action* has finished (is either fulfilled or rejected)
  * **Fulfilled** - The promise's *action* succeeded
    * Success callback in `then` will run
  * **Rejected** - The promise's *action* failed
    * Failure callback in `then` or `catch` will run
  
Note:
- I usually take this time to open up the [Promise MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and go through some basic examples.

---

## Promise API

* `then` is the most important Promise method
	* takes a success callback and (optionally) a failure callback as args
  * returns a new promise
  * can therefore chain `then` as many times as you want
* A promise chain stops if there's an exception and looks for failure callback in next `then` or, if there is none, down the chain for a `catch`.
* `catch` takes a failure callback and is used for error handling; also returns a promise.


Note:
- From inside a `then` calback, you can return 3 things: return another Promise, return a synchronous value(or undefined) or throw an error
- `.catch` is same as passing in null as the success callback to `.then`
- Using promises with `.then` and `.catch` make our code cleaner and more readable

---

## Promises Diagram

![promises_diagram](https://www.sencha.com/wp-content/uploads/2016/03/asynch-javascript-promises-img3.png)

---

## $.ajax() with Promises

* jQuery's `$.ajax` method technically returns a _promise-like_ object (`jqXHR` object - uses `fail` instead of `catch` for error callback)

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

Note:
- Similar to the way that jQuery allows us to wrap HTML elements so that we now have jQuery objects we can perform more convenient methods on, Promises wrap asynchronous functions, so that we can use `.then` to chain them and make our lives easier and our code more readable.
- The jqXHR objects returned by $.ajax() implement the Promise interface, giving them all the properties, methods, and behavior of a Promise. These methods take one or more function arguments that are called when the $.ajax() request terminates. This allows you to assign multiple callbacks on a single request, and even to assign callbacks after the request may have completed. (If the request is already complete, the callback is fired immediately.) 
- Available Promise methods of the jqXHR object include:
  + jqXHR.done(function( data, textStatus, jqXHR ) {}) - An alternative construct to the success callback option
  + jqXHR.fail(function( jqXHR, textStatus, errorThrown ) {})
  + jqXHR.always(function( data|jqXHR, textStatus, jqXHR|errorThrown ) { })
  + jqXHR.then(function( data, textStatus, jqXHR ) {}, function( jqXHR, textStatus, errorThrown ) {});
    + Incorporates the functionality of the .done() and .fail() methods, allowing the underlying Promise to be manipulated. 
- notice we use a `.fail` here instead of `.catch`

---

## 10 Minute Break

---

## Web API (server-side)

* A server-side **web API** is a programmatic interface consisting of one or more publicly exposed **endpoints** to a defined **request–response message system**, typically expressed in JSON or XML, which is exposed via the web—most commonly by means of an HTTP-based web server.
* Number of Web APIs up from 105 in 2005 to over 9000 in 2013
![over9000](https://media.giphy.com/media/MvedbKot538WY/giphy.gif)

Note:
- This refers to *server-side* web APIs -> the lecturer tomorrow will focus more on *client-side* web APIs (functions implemented by the browser that you can use like `fetch` or `setTimeout` (in the `WindowAndWorkerGlobalScope` web API))
- Before going into the details on Promises & AJAX, tell them why they should care about this stuff. There is a plethora of information available out there for free that we can use to build our apps and that's something they should be really excited about. Explain what a Web API is, and show them some cool ones (a few linked below). Show them how to navigate a Web API and: 
  - Look at the status code charts to see the various types of responses they can expect to receive (so they can handle appropriately in their apps)
  - Read through the docs to find the endpoints they want to use.
  - See sample responses

---

Cool Web APIs:
* [Spotify](https://developer.spotify.com/)
* [Star Wars](https://swapi.dev/)
* [Pokemon](https://pokeapi.co/)
* [Brewery DB](http://www.brewerydb.com)
* [Cat API](https://docs.thecatapi.com/)

Note:

---

![Web Api Chart](https://www.programmableweb.com/sites/default/files/API%20Growth%20Since%202005%20ProgrammableWeb.png)

---

## Code Demo - Giphy Web API
![demo](https://media3.giphy.com/media/Lkw7HdK4UlouHMJMZg/giphy.gif)

Note:
- We have a rails app, but we decide we need it to be more reactive.
- We decide to use AJAX requests to update our page in real time.
- Instead of using a template for every controller action, we have one view!
- Why? Because as I mentioned earlier, instead of responding with HTML, we are going to be responding with JSON.

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=6f29decf-a97d-467e-aba0-eb0de1871e76)

---

## Thank you!
