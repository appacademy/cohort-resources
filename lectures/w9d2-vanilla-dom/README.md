# Vanilla DOM Manipulation

---

## Roadmap

* Ruby
* SQL -> ORM -> Active Record
* Ruby on Rails
* JS -> Vanilla DOM 🍦
* JQuery
* React/Redux

Note:
- Remind them how far they've come, how much they've learned and should be proud of

---

![corgi-uno](https://camo.githubusercontent.com/8c7e67ac86c74868dc2ce1a5b56cce6da376975c66d546288fb9b01ca5b1af44/687474703a2f2f332e62702e626c6f6773706f742e636f6d2f2d365237555455766e2d38772f5464473831345756664c492f41414141414141414a65772f596f716a42327239756a672f73313630302f62656c696576652e6a7067)

Note: 
- For today's lecture, please do not try to memorize the methods or get everything written down. 
- Vanilla DOM is the perfect day to get comfortable with looking at docs, specifically the MDN; there are so many methods available.

- And also, there are many ways we could go about implementing the same behaviors.

---

## Learning Goals

* DOM Manipulation
* Events
  * Event Handlers/Listeners
    * Bubbling and Delegation
    * `target` vs `currentTarget`
* Web APIs
  * `Document`, `History`, `Location`
* Vanilla DOM Manipulation <> jQuery

Note:

- Our goal today is to learn how to manipulate DOM elements using methods available to us through the DOM API, understand how to listen for events and how events are triggered, as well as looking at other functionality provided to use through the API such as access to history and location.
  
---

## What is the DOM?

* The `Document` is any web page loaded in the browser. This `Document` serves as an entry point into the web page's content, which is represented by the DOM. 

* A reference to the `Document` object exists as a property on the `Window` (i.e. `window.document`)

* DOM (Document Object Model) - A web API available for HTML, SVG, and XML documents
	* It allows programs to change the document structure, style, and content. 
  * The DOM represents the document using nodes and objects to represent the structure of our document (think family tree).

Note:

- With the DOM, we can use programming languages like JavaScript to manipulate the contents of our document.

- The DOM is represented as a tree and each branch of the tree ends in a node and each node represents an object, so in a sense it is an object-oriented way to represent our page.

- The W3C DOM and WHATWG DOM standards are implemented in most modern browsers. Many browsers extend the standard, so care must be exercised when using them on the web where documents may be accessed by various browsers with different DOMs.

- The HTML DOM is a standard object model and programming interface for HTML. It defines:

   * The HTML elements as objects
   * The properties of all HTML elements
   * The methods to access all HTML elements
   * The events for all HTML elements
- In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

- Types of docs:
  - XML was designed to carry data - with focus on what data is
  - HTML was designed to display data - with focus on how data looks
  - XML tags are not predefined like HTML tags are
  - XML simplifies data sharing, transport, availability, and platform changes

---

## DOM Manipulation and JavaScript

* DOM manipulation allows us to use plain JavaScript to perform CRUD operations on the objects on our webpage. Any changes are reflected in the display of the document.

* Different browsers have different implementations of the DOM, with varying degrees of conformance to the W3C DOM standard, but every web browser uses some document object model to make web pages accessible via JavaScript.

Note: 

- By 'Vanilla DOM' we are referring to using plain JavaScript, no frameworks or libraries, to manipulate DOM elements.

- The modern DOM is built using multiple APIs that work together. The core DOM defines the objects that fundamentally describe a document and the objects within it. This is expanded upon as needed by other APIs that add new features and capabilities to the DOM. For example, the HTML DOM API adds support for representing HTML documents to the core DOM.

- All of the properties, methods, and events available for manipulating and creating web pages are organized into objects (for example, the `document` object that represents the document itself, the table object that implements the special HTMLTableElement DOM interface for accessing HTML tables, and so forth).

---

![DOM](https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg)

---

## Data Types 

* `Node` - Every object located within a document is a node of some kind. 

* `Element` - Refers to an element or a node of type element returned by a member of the DOM API.

* `NodeList`- A nodeList is an array-like collection of nodes and can be accessed through indexing.

* `HTMLCollection` - A HTMLCollection is an array-like collection of elements

Note:

- With each of these data types, there are additional interfaces that you can use in conjunction with the standard DOM ones.
- Examples of types of node include element nodes, document nodes, attr nodes, text nodes, etc.

---

## DOM Manipulation Methods 

* `.getElementById(idString)` - Returns the HTML element of given Id

* `.getElementsByClassName(classString)` - Returns Collection of HTMLElements with the given class

* `.querySelector(selector)` - Returns first element of given selector

* `.querySelectorAll(selectors)` - Returns NodeList of matches
	+ selectors can be tags(div), classes(.hidden), ids, and combined(h2#TOP > p)
  
Note:
- The selector methods accept one or more comma-separated selectors to determine what element or elements should be returned.

- The NodeList returned by querySelectorAll() is not live, which means that changes in the DOM are not reflected in the collection. This is different from other DOM querying methods that return live node lists.

- `document.querySelector()` vs `element.querySelector()`;
  - `document.querySelector()` returns the first Element within the document that 	matches the specified selector, or group of selectors. If no matches are found, 	null is returned.
	- `element.querySelector()` of the Element interface returns the first element 	that is a descendant of the element on which it is invoked that matches the 			specified group of selectors.
  
- `document.getElementsByClassName()` => returns an HTMLCollection and is live
- `document.getElementsByTagName()` => returns an HTMLCollection and is live
- `document.getElementsByName()` => returns a NodeList and is live
- `Node.childNodes` => is live, NodeList
- `document.querySelectorAll()` => returns a NodeList and is NOT live

* BETWEEN NodeList and HTMLCollection, can only call forEach on NodeList (both are array-like)

---
## DOM Styling Methods

### Inline
* element.style.property = "value" => inline sets property to given value 				 
    * `div.style.display = "none";`
    * `p.style.fontWeight = "900";`
### Class
* element.classList => return array-like Object of classes for the element

* element.classList.add(class) => adds a class to given element

* element.classList.remove(class) => removes class  

---

## Events and the DOM

* An event can be something the browser does or something a user does.

* Examples:
	* A web page has finished loading
	* An input field was changed
  * A button was clicked
  
* JavaScript code can react to these events via event _handlers_ or _listeners_ installed on DOM elements.

+ [Super quick and painless list of web events](https://developer.mozilla.org/en-US/docs/Web/Events)

---

## Event Listeners

* There are 3 ways to register event handlers for a DOM element.
	* On an event target element using `EventTarget.addEventListener()`*
  * On a HTML attribute `<button onclick="alert('Hello world!')">`
  * DOM element properties `myButton.onclick = function(event){alert('Hello world')}`

Note: 
- The first method is the preferred
- The second method is discouraged because it reduces code readability. Concerns of content/structure and behavior are not well-separated, making bugs harder to find.

---

## When using `.addEventListener` 
* `change`: An HTML element has been changed
* `click`: The user clicks an HTML element
* `mouseover`: The user moves the mouse over an HTML element
* `mouseout`: The user moves the mouse away from an HTML element
* `keydown`: The user pushes a keyboard key
* `load`: An object has been loaded.

---

## Directly on an html element 
* `onchange`: An HTML element has been changed
* `onclick`: The user clicks an HTML element
* `onmouseover`: The user moves the mouse over an HTML element
* `onmouseout`: The user moves the mouse away from an HTML element
* `onkeydown`: The user pushes a keyboard key
* `onload`: An object has been loaded.

---

## DOM Manipulation Demo

Note:

- walk through file structure
- Demo DOM Manipulation
- return to slides

- NodeList(query) and HTMLCollection(byClassName) forEach only on NodeList
- ById and ByClassName faster (15mil/sec | 7mil/sec) and better supported

---

## Problem

* Let's say that we have a parent element with several child elements
* Let's also say that something needs to happen when each child element is clicked
* You could add a separate event listener to each individual child element, but what if the child elements are frequently added and removed?
* Adding and removing event listeners would be a _nightmare_

* Additionally, event handlers can potentially cause memory leaks and performance degradation — the more you have, the greater the risk.

---

## Solution: Bubbling and Event Delegation

* Avoid adding event listeners to specific nodes

* Instead, the event listener is added to a common parent.

* Bubbling Principle: after an event triggers on the deepest
possible element, it then triggers on its parents in nesting order.

* The event listener analyzes bubbled events to find a match on child elements.

Note:
- "It is best to think of event delegation as responsible parents and negligent children." 
[Above Quote](https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983)

- Whenever a user makes a click it ripples up all the way up to the top of the DOM and triggers clicks events on all the parent elements of the element you clicked. You don’t always see these clicks, because you aren’t always listening (with an event listener) for a click on these elements, but this bubbling up does happen.

- Because of event bubbling you can place an event listener on a single parent HTML element that lives above a HTML child, and that event listener will get executed whenever an event occurs on any of its child nodes — even if these node children are added to the page after the initial load!

---

![delegation1](https://camo.githubusercontent.com/ef44aa0598f0b02aecc24d5ac2427f07f1f8e283ceb13af26d649ccfef9fd297/687474703a2f2f7777772e6a61766132732e636f6d2f426f6f6b2f4a617661536372697074496d616765732f6576656e74427562626c652e706e67)

---

![delegation2](https://camo.githubusercontent.com/2f3a74cd395c2e27fe9882dce68c422ef6cb9395c4b6313bca7ac4c1004f588c/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f33376173736574732f73766e2f3834352d627562626c696e672e706e67)

---

### Target vs currentTarget

1. `Event.target`: A reference to the _specific_ object where the event occured. This object "dispatched" the event.


1. `Event.currentTarget`: A reference to the element on which the event handler has been attached. as opposed to `event.target` which identifies the element on which the event occurred.

---

## Event Delegation Demo

Note: 
- Demo event bubbling
- return to slides

---

## Web APIs

* Web APIs are APIs for either a web server or a web browser.

* Web APIs are typically only accessible from the application's client-side.

* [MDN's List of WEB APIs](https://developer.mozilla.org/en-US/docs/Web/API)

Note:

- The Window interface is a good example of a web API suitable place since it provides an interface to include methods, properties, that need to be globally available

- In a tabbed browser, each tab is represented by its own Window object; the global window seen by JavaScript code running within a given tab always represents the tab in which the code is running.

---

## History

* The `window.history` read-only property returns a reference to the `History` object

* The `History` object provides an interface for the browser session history (pages visited in the tab that the current page is loaded in).

* There is no way to clear the session history or to disable the back/forward navigation from your code.

---

## History methods

* Moving backward and forward through the user's history is done using the `window.history.back()` and `window.history.forward()`.

* You can also use the `window.history.go()` method to load a page identified by its relative position to the current page (with the current page being relative index 0).

  * (i.e. `history.go(-4)` goes back 4 pages.)

* You can determine the number of pages in the history stack via `window.history.length`:

Note: 

window.history.back()
window.history.forward()
window.history.go(-2)
window.history.length

---

## Location

* The `window.location` property returns a reference to the `Location` object.

* The `Location` object contains information about the current URL.

---

## Navigating with Location

* To go to a page all of these are equivalent
	* `window.location.assign(url);`
	* `window.location = url;`
	* `window.location.href = url;`
  * `window.document.URL` (READ ONLY)
* ex: `window.location.replace("https://google.com")`

Note:
Be sure to do "http://
window.location.assign("https://google.com")
window.location = "https://google.com"
window.location.href = "https://google.com"
window.location.replace("https://www.google.com")
window.document.URL (READ ONLY)

* `window.location.replace(url)` replaces the current item of the session history with the provided URL.

---
## Anchor 

* "#" comes at the end of the url
* it looks for ids with whatever string comes after the "#"
* if it doesn't find any then nothing happens

* if it does then it takes the page and anchors it to that html element

* [ActiveRecord docs](https://guides.rubyonrails.org/active_record_basics.html)

Note: 

- ActiveRecord docs are an example of anchoring.

---

## Location, History and Anchor Demo!

+ [Location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
+ [History](https://developer.mozilla.org/en-US/docs/Web/API/Window/history)

Note:
* window.alert
* window.print
* window.document.title
* play around with the location and history api examples that you have above
* explain how anchoring works

---

## jQuery?

* **A JS library that abstracts much of the DOM manipulation for us**
  * Low-level => fast
  * Rapid Development
    * concise: "write less, do more"
    * Simplifies "complicated" AJAX calls and DOM manipulation
  * Multi-browser cross compatible
  * Most popular JavaScript library...for now

* **A solid understanding of Vanilla JS and Dom Manipulation means JQuery may not be necessary. Always ask yourself, ["Do I need JQuery?](https://blog.garstasio.com/you-dont-need-jquery/why-not/) or is Vanilla JS better for this application?"**

---

## Closing thoughts - Single Page App (SPA)

* A web app that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.

* The appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.

* [When to use Vanilla JavaScript vs jQuery](https://www.geeksforgeeks.org/when-to-use-vanilla-javascript-vs-jquery/)

---

# Questions

* [Cohort Resources](https://github.com/appacademy/cohort-resources/blob/master/study_guides/javascript/vanilla_javascript_cheatsheet.md)
    * This should help with the project!!

---

# [Kahoot!](https://play.kahoot.it/v2/?quizId=6fb216da-a02d-482d-9b6b-32ef6dd0cedb)


