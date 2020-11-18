# W9D3
### Intro to the DOM, jQuery, and AJAX

---

### Reminder on Questions

Note:
* This is a lot of information packed into one lecture, some of the material is conceptually more difficult, and other material (jQuery in particular) just takes referencing the docs. So in the interest of time I'm going to focus on taking questions from raised hands rather than reading chat.

---

### Lecture Agenda

+ DOM introduction
+ Common jQuery methods
+ AJAX
+ Kahoot

---

### Learning Objectives

+ Get familiarized with the DOM
+ Understand the practicality of jQuery
* Understand how and why we should use AJAX requests

Note:
High level overview:
- Understanding the DOM and AJAX conceptually are the main focuses of this lecture.
- jQuery is just a library. It doesn't really give us any additional tools, it just makes some things easier.
- AJAX is what will tie our frontend and backend together going forward, so it is very important

---

### Layers of the Front-end

![Frontend Layers](https://user-images.githubusercontent.com/51456702/74088928-5f019600-4a50-11ea-8403-168bc1e545be.png)

---

### Document Object Model (DOM)

![dom-tree](https://www.w3schools.com/js/pic_htmltree.gif)

Note:
* The DOM is a programming interface that represents an HTML page.
* Elements, attributes, classes, ids, etc... all are be represented by Objects
* Javascript will allow us to manipulate objects in the DOM, thus giving us full control over the behavior of our webpages.

---

# Questions

---

### Brief Overview of jQuery

+ JavaScript wrapper-library used for low-level DOM manipulation
+ around since January 2006 
+ used by 76% of top 10,000,000 sites
+ universally supported by all browsers
  + consistent API for programmers to interact with, regardless of browser
  + "Write less, do more" - jQuery
 
 + [jQuery vs. React on Google Trends](https://trends.google.com/trends/explore?date=all&q=%2Fm%2F0268gyp,%2Fm%2F012l1vxv)

---

### How to use jQuery
```html
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
```

---

### Ways to use jQuery

+ Ready-style
+ Selector-style
+ Wrapper-style
+ HTML-style

---

### Ready-style

+ input: function to run when DOM is fully loaded
+ example `$(() => alert('DOM is fully loaded'))`

---

### Selector-style

+ input: CSS selector as a string
+ output: jQuery object (array-like) containing all elements that match the selector
+ example: `$('li.someClass')`


---

### Wrapper-style

+ input: unwrapped HTML Element or array of several elements
+ output: jQuery object wrapping those elements, giving you access to jQuery methods
+ example: `$(someHTMLVariable)`

---

### HTML-style

+ input: HTML code as a string
+ output: jQuery object containing the top-level elements you built
+ example: `$('<li class="someClass"></li>')`

---

### More jQuery Methods (Refer to jQuery API docs):

+ `hide` & `show`
+ `addClass`
+ `css`
+ `attr` & `data`
+ `.val()` 
+ `.find(someSelector)` 
+ `on(event, handler)`
    
---


### Brief Introduction to Events

+ events: describes most interactions users can have with an app (clicking, submitting, typing)
	+ an object containing information about the action that just happened. 
+ to respond to events, we must install `event listeners` on HTML elements (`on`)
+ `currentTarget` vs `target`
  + currentTarget === element where the event listener is attached to
  + target === element that event occurred on

---

###### Questions

---

## AJAX & Promises

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
- So far you've seen how we can manipulate our HTML DOM elements using jQuery.
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
});
```

Note:
- `$.ajax` accepts an options object
- `url` is the only necessary key for an AJAX call; it is the url your request goes to. 
- `method` Default method is `GET`; for non-get requests, you must specify
- `data` option can contain either a query string of the form key1=value1&key2=value2, or an object of the form {key1: 'value1', key2: 'value2'}. If the latter form is used, the data is converted into a query string using jQuery.param() before it is sent. This processing can be circumvented by setting processData to false. The processing might be undesirable if you wish to send an XML object to the server
- `dataType` refers to the type of data that you're *expecting back from the server- - not the type of data that you are sending. Generally you don't need to specify this as it should be able to figure it out. JSON will yield a JavaScript object. If json is specified, the response is parsed using jQuery.parseJSON before being passed, as an object, to the success handler. The parsed JSON object is made available through the responseJSON property of the jqXHR object.


---

## Old Way
```js
function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

exampleAsyncRequest(successCallback, failureCallback);
```

Note:
- In the above example, we call `exampleAsyncRequest` with 2 callbacks - one for success and one for failure
- You can imagine the `exampleAsyncRequest` function to return a jQuery $.ajax() call and uses the `successCallback` and `failureCallback` as the callbacks for the success and error keys respectively.
- With 2 callbacks, it seems manageable, BUT....

---

## ...inevitably leads to

* Pyramid/Christmas Tree of Doom

```js
asyncRequest(function(result) {
  otherAsyncRequest(result, function(newResult) {
    thirdAysncRequest(newResult, function(finalResult) {
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
exampleAsyncRequest()
.then(result => otherRequest(result))
.then(newResult => thirdRequest(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

Note:
- Wouldn't it be nice if we could do something like this? This is more readable.

---

## Promises

* A promise is an object that wraps an **action**, which is the task (typically asynchronous) it is supposed to perform before it either fails or succeeds based on some **constraint**.
* Allows complex asynchronous code to be more readable

Note:
- Promises allow us to do just that. Promises are a tool for simplifying callbacks to asynchronous functions. It allows us to chain on additional callbacks using the results from the previous call.
- Promises are an awesome solution to asynchronicity in JS. And we will primarily use them for async fetches for data. This will allow us to wait for our data fetch to return with our results and then run a callback that does something with the data. Without promises, JS asychronocity makes it difficult to know when results will come back since that depends on a number of other factors like network latency.
- In AJAX the constraint is typically the status code returned by the server - if it is a 200 level status code, `resolve` will be invoked and the success callback will run, while anything else will result in the error callback running.

---

## Promise API

* `then` is the most important Promise method
	* takes a success callback and (optionally) a failure callback as args
  * returns a new promise
  * can therefore chain `then` as many times as you want
* A promise chain stops if there's an exception and looks for failure callback in next `then` or, if there is none, down the chain for a `catch`.
* `catch` takes a failure callback and is used for error handling; also returns a promise


Note:
- From inside a `then` calback, you can return 3 things: return another Promise, return a synchronous value(or undefined) or throw an error
- `.catch` is same as passing in null as the success callback to `.then`
- Using promises with `.then` and `.catch` make our code cleaner and more readable

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

## Code Demo - Giphy Web API
![demo](https://media3.giphy.com/media/Lkw7HdK4UlouHMJMZg/giphy.gif)

Note:
- We have a rails app, but we decide we need it to be more reactive.
- We decide to use AJAX requests to update our page in real time.
- Instead of using a template for every controller action, we have one view!
- Why? Because as I mentioned earlier, instead of responding with HTML, we are going to be responding with JSON.

---

## [Kahoot!]()

---

## Thank you!
