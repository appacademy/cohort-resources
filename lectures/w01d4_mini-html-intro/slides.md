
# W1D4
### Intro to HTML

---

## Lecture Objectives

* Prepare for Shakshuka Project
* Context of HTML in modern websites

---

## Lecture Outline

* Brief intro to HTML basics
* Common HTML elements
* HTML forms
* HTML form demo

---

Ruby vs. HTML

* Is it coding?

---

## HTML

* **HTML** stands for _Hypertext Markup Language_
* Contains the actual content of the web page, and describes the **structure** of the document (through _tags_)
* An **HTML Element** is an opening & closing tag and all the contents in between. For example:

```html
<div>I am an HTML Element!</div>
```

---

## `<head>` and `<body>`
  
* head has high-level, background information
* body has the content of the webpage
  
---

```html
<!-- Normal Element -->
<button id="cool-button" type="submit" disabled>Can't click</button>

<!-- Void Element -->
<img class="cat-image" src="./cat.jpeg" alt="cat">
```

---

## HTML Attributes

* All HTML Elements can have **attributes** (these vary depending on the tag) that specify additional information about the element
* The 3 attributes that _any_ HTML element can have are as follows:
  * **id** - a unique identifier for an HTML element
  * **class** - a shared identifier for an HTML element (multiple elements may belong to the same class)
  * **title** - the text you would like to display when a user hovers over the element
* ids & classes are commonly used to select specific HTML elements with CSS or JavaScript

```html
<div class="user-info" id="username" title="user's username" >
  aAstudent
</div>
```

---

## Semantic elements

* `<article>`
* `<aside>`
* `<figcaption>`
* `<figure>`
* `<footer>`
* `<header>`
* `<main>`
* `<section>`
* `<form>`

---

## Non-semantic elements

### `<div>`

```html
<div>
 <!-- CONTENT -->
</div>
```

### `<span>`

```html
<span><!-- CONTENT --></span>
```

---

## Common HTML Elements

* **`h1` - `h6` tags:** - Used to create headers, `h1` is biggest, `h6` is smallest
* **`a` tag:** Used to create hyperlinks. URL to link to is specified by the `href` attribute
* **`img` tag:** Used to create images. URL of image is specified by the `src` attribute
* **`ul` & `ol` tags:** Used to create lists. `ul` is unordered, `ol` is ordered. Comprised of multiple `li` (list item) elements.

---

## HTML Forms

* Means by which we can collect user-inputted data
* Opening `form` tag takes two attributes that specify where to send the form data when submitted (via HTTP request)
  * `action` - specifies URL of HTTP request
  * `method` - specifies HTTP Verb of request (almost always `POST`)
* Comprised of text inputs, dropdowns, radio buttons, checkboxes, and other special input fields

---

## HTML Form Demo

---

## Let's do it!
