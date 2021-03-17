# W9D3
### jQuery

---
### HTML to Browser diagram
![DOMIntro](https://user-images.githubusercontent.com/51456702/74045475-ac630200-4981-11ea-8c27-6dbc34879033.png)

---

### Lecture Agenda

+ DOM introduction
+ The 4 ways to use jQuery
+ Some common jQuery methods
+ Kahoot

---

### Learning Objectives

+ Get familiarized with some DOM methods
+ Understand the practicality of jQuery

---

### Layers of the Frontend

![Frontend Layers](https://user-images.githubusercontent.com/51456702/74088928-5f019600-4a50-11ea-8403-168bc1e545be.png)

---

### Document Object Model (DOM)

![dom-tree](https://www.w3schools.com/js/pic_htmltree.gif)

To change what we see on the page, we can manipulate the DOM using JavaScript. 

---

### Brief Overview of jQuery

+ JavaScript wrapper-library used for low-level DOM manipulation
+ around since January 2006 
+ universally supported by all browsers
  + consistent API for programmers to interact with, regardless of browser
  + "Write less, do more" - jQuery
+ Everything you do with jQuery can be done with plain JavaScript
 
 + [jQuery vs. React on Google Trends](https://trends.google.com/trends/explore?date=all&q=%2Fm%2F0268gyp,%2Fm%2F012l1vxv)

---

### Ways to Use jQuery

+ Wrapper-style
+ Selector-style
+ HTML-style
+ Ready-style

---

### Wrapper-style

+ input: unwrapped HTML Element or array of several elements
+ output: jQuery object wrapping those elements, giving you access to jQuery methods
+ example: `$(someHTMLVariable)`

---

### Selector-style

+ input: CSS selector as a string
+ output: jQuery object (array-like) containing all elements that match the selector
+ example: `$('li.someClass')`

---

### HTML-style

+ input: HTML code as a string
+ output: jQuery object containing the top-level elements you built
+ example: `$('<li class="someClass"></li>')`

---


### Ready-style

+ input: function to run when DOM is fully loaded
+ example `$(() => alert('DOM is fully loaded'))`


---

### Questions

---

## Demo

---

### More jQuery Methods (Refer to jQuery API docs):

+ `hide` & `show`
+ `text`
+ `addClass`
+ `attr` & `data`
+ `val` 
+ `append`
+ `on(event, handler)`

---

### Questions 
    
---

## Demo 

---

### Brief Introduction to Events

+ events: describes most interactions users can have with an app (clicking, submitting, typing)
	+ an object containing information about the action that just happened. 
+ to respond to events, we must install `event listeners` on HTML elements (`on`)
+ `currentTarget` vs `target`
  + currentTarget === element where the event listener is attached to
  + target === element that event occurred on

---

### Questions

---

### Demo

---

### [$Kahoot](https://create.kahoot.it/details/w9d3-jquery/d3f4966d-b642-4ad7-8221-a320777b7054)

---


### Thank you!
