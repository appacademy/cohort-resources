# Vanilla DOM Manipulation

---


## Learning Goals

* DOM Manipulation
* Events
  * Event Handlers/Listeners
    * Bubbling and Delegation
    * `target` vs `currentTarget`
* Web APIs
  * `Document`, `History`, `Location`
* Vanilla DOM Manipulation
  
---

## What is the DOM?

* The `document` is any web page loaded in the browser. 

* This `document` serves as an entry point into the web page's content. 

* A reference to the `document` object exists as a property on the `Window` (i.e. `window.document`)

* DOM (Document Object Model)
	* Allows programs to change the document structure, style, and content. 
  * The DOM represents a webpage using nodes and objects to represent the structure of our document.

---

![DOM](https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg)

---


## DOM Manipulation and JavaScript

* DOM manipulation allows us to use plain JavaScript to change the objects on our webpage.
* Any changes are reflected in what is displayed on the webpage.
* Technically, the DOM API is a standalone API, separate from javascript (however we will only use javascript)

---

## Data Types 

* `Node` - Every object located within a document is a node of some kind. 

* `Element` - Refers to an element or a node of type element returned by a member of the DOM API.

* `NodeList`- A nodeList is an array-like collection of nodes

* `HTMLCollection` - A HTMLCollection is an array-like collection of elements

---

## DOM Manipulation Methods 

* `.getElementById(idString)` - Returns the HTML element of given Id

* `.getElementsByClassName(classString)` - Returns Collection of HTMLElements with the given class

* `.querySelector(selector)` - Returns first element of given selector

* `.querySelectorAll(selectors)` - Returns NodeList of matches
	+ selectors can be tags(div), classes(.hidden), ids, and combined(h2#TOP > p)

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

quick demo

---

## Events and the DOM

* An event can be something the browser does or something a user does.

* Examples:
	* A web page has finished loading
	* An input field was changed
  * A button was clicked
  
* JavaScript code can react to these events via event _handlers_ and _listeners_ installed on DOM elements.

+ [Super quick and painless list of web events](https://developer.mozilla.org/en-US/docs/Web/Events)

---

## Event Listeners

* There are 3 ways to register event handlers for a DOM element.
	* On an event target element using `EventTarget.addEventListener()`*
  * On a HTML attribute `<button onclick="alert('Hello world!')">`
  * DOM element properties `myButton.onclick = function(event){alert('Hello world')}`

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

---

![delegation1](https://camo.githubusercontent.com/ef44aa0598f0b02aecc24d5ac2427f07f1f8e283ceb13af26d649ccfef9fd297/687474703a2f2f7777772e6a61766132732e636f6d2f426f6f6b2f4a617661536372697074496d616765732f6576656e74427562626c652e706e67)

---

![delegation2](https://camo.githubusercontent.com/2f3a74cd395c2e27fe9882dce68c422ef6cb9395c4b6313bca7ac4c1004f588c/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f33376173736574732f73766e2f3834352d627562626c696e672e706e67)

---

### Target vs currentTarget

1. `Event.target`: A reference to the _specific_ object where the event occured. This object "dispatched" the event.


1. `Event.currentTarget`: A reference to the element on which the event handler/listener has been attached.
---

## Event Delegation Demo

---

## Web APIs

* Web APIs are APIs for either a web server or a web browser.

* Web APIs are typically only accessible from the application's client-side.

* [MDN's List of WEB APIs](https://developer.mozilla.org/en-US/docs/Web/API)

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
  * `window.document.URL` (read only)
* ex: `window.location.replace("https://google.com")`

---
## Anchor 

* "#" comes at the end of the url
* it looks for ids with whatever string comes after the "#"
* if it doesn't find any then nothing happens

* if it does then it takes the page and anchors it to that html element

* [example with ActiveRecord docs](https://guides.rubyonrails.org/active_record_basics.html)

---

## Location, History and Anchor Demo!

+ [Location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
+ [History](https://developer.mozilla.org/en-US/docs/Web/API/Window/history)

---

## jQuery?

* **A JS library that abstracts much of the DOM manipulation for us**
  * Rapid Development
    * Simplifies complicated AJAX calls and DOM manipulation
  * Multi-browser cross compatible

* jQuery is losing popularity to React - your only likely exposure may be in some company's old code base. In that case, what you learn with Vanilla JS will transfer over.
---

## Closing thoughts - Single Page App (SPA)

* A web app that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.

* The appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.

---

# Questions

* [Cohort Resources](https://github.com/appacademy/cohort-resources/blob/master/study_guides/javascript/vanilla_javascript_cheatsheet.md)
    * This should help with the project!!

---
