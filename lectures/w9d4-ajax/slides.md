# W9D4
## AJAX & Promises

---

## Learning Objectives

* Understand how to make AJAX requests
* Be able to use jQuery $.ajax()
* Understand how to use Promises

---

## Review of Request Cycle

![httpreqvsajax](http://www.dotnetcurry.com/images/jquery/Getting-started-with-.ajaxBack-to-Basics_197B/httpreqvsajax.png)

---

## Where We're Going

* Single page web applications
  - client-side rendering built using *React*
* Sending and rendering data as `json`
* Rails backend becomes a server-side api

---

## What is AJAX?
* **A** synchronous **J** avascript **A** nd **X** ML
* An HTTP request that happens in the background
* Allows us to request and receive data after a page has loaded
* Allows us to send data to the server in the background

---

## AJAX Process Flow Example

1. An event occurs on a web page (i.e. a button is clicked)
2. An XMLHttpRequest (XHR) object is created and sends a request to the web server
3. Server processes the request
4. Server sends a response back to the browser
5. Proper action is performed by JavaScript (i.e. page update)
![httpreqvsajax](http://www.dotnetcurry.com/images/jquery/Getting-started-with-.ajaxBack-to-Basics_197B/httpreqvsajax.png)

---

## jQuery $.ajax()

* jQuery `$.ajax` method allows us (among many other tools/libraries) to make AJAX requests
  * Returns a _promise_ (more on that later)
  * You can use any data format
* Other ways to make AJAX requests:
  * Vanilla JavaScript's `XMLHttpRequest` or `fetch`

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

---

## Fancy New Way
```js
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

---

## Promises

* Promises represent the eventual completion (or failure) of an asynchronous operation, and its resulting value.
* A promise is an object that wraps an **action**, which is the task (typically asynchronous) it is supposed to perform before it either fails or succeeds based on some **constraint**.
* Allows complex asynchronous code to be more readable

---

## States of a Promise

* **Pending** - The promise's *action* is ongoing (hasn't fulfilled or rejected yet)
* **Settled** - The promise's *action* has finished (is either fulfilled or rejected)
  * **Fulfilled** - The promise's *action* succeeded
    * Success callback in `then` will run
  * **Rejected** - The promise's *action* failed
    * Failure callback in `then` or `catch` will run

---

## Promise API

* `then` is the most important Promise method
	* takes a success callback and (optionally) a failure callback as args
  * returns a new promise
  * can therefore chain `then` as many times as you want
* A promise chain stops if there's an exception and looks for failure callback in next `then` or, if there is none, down the chain for a `catch`.
* `catch` takes a failure callback and is used for error handling; also returns a promise

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

---

## 10 Minute Break

---

## Web API (server-side)

* A server-side **web API** is a programmatic interface consisting of one or more publicly exposed **endpoints** to a defined **request–response message system**, typically expressed in JSON or XML, which is exposed via the web—most commonly by means of an HTTP-based web server.
* Number of Web APIs up from 105 in 2005 to over 9000 in 2013
![over9000](https://media.giphy.com/media/MvedbKot538WY/giphy.gif)

---

Cool Web APIs:
* [Spotify](https://developer.spotify.com/)
* [Star Wars](https://swapi.dev/)
* [Pokemon](https://pokeapi.co/)
* [Brewery DB](http://www.brewerydb.com)
* [Cat API](https://docs.thecatapi.com/)

Note: 
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
