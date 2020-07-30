
# W1D4
### Intro to HTML

---

## Lecture Objectives

* Prepare for Shakshuka
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
<element an-attribute="a value" a-property></element>
<voidelement an-attribute="a value">

<button id="cool-button" type="submit" disabled>Can't click</button>
<img class="cat-image" src="./cat.jpeg" alt="cat">
```

Note:
* walk through these types of elements, distinguishing between attributes (must be set to a value) and properties (automatically set to true if included)
* normal elements expect content between closing tags
* void elements do not need closing tags, content comes from somewhere else
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

Note:
* Explain what an HTML attribute is - essentially a key-value pair that you can add to the opening tag of an HTML element that will specify some additional information about that tag.
* Different HTML elements will have different HTML attributes that you can specify. For example an `img` tag can have a `src` attribute whereas an `a` tag cannot.
* Explain the 3 tags that are ubiquitous across all HTML elements - `id`, `class`, and `title`. The slides provide brief descriptions - elaborate on them. Focus mostly on explaining that an `id` should be _unique_ to an HTML element whereas a `class` will be _shared_ among HTML elements. We can use these ids and classes later on when we write CSS and JavaScript to _select_ the elements that we would like to apply the CSS or JavaScript to.

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

Note:

* Here are some of the new semantic elements given in HTML5
* These elements may or may not behave the same way, but are named to help organize your html

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

Note:

* These are the default block and inline elements, respectively
* It is hard to tell what these elements are for by their name
* divs are extremely common, though due to their non-semantic nature they are often described by a class

---

## Common HTML Elements

* **`h1` - `h6` tags:** - Used to create headers, `h1` is biggest, `h6` is smallest
* **`a` tag:** Used to create hyperlinks. URL to link to is specified by the `href` attribute
* **`img` tag:** Used to create images. URL of image is specified by the `src` attribute
* **`ul` & `ol` tags:** Used to create lists. `ul` is unordered, `ol` is ordered. Comprised of multiple `li` (list item) elements.

Note:
* A few examples are listed here of common HTML elements. The `a` tag is used to link to another web page, and can even be used to link to a specific section of the current web page. The `a` tag is a hyperlink - the text between the opening and closing tag will be clickable, while the url actually being linked to will not be seen by the user. This url is specified by the `href` attribute. Mention that there is a separate HTML `link` tag, but that is used for including in a stylesheet, and is a common misconception that the `link` tag is a hyperlink. It is not - `a` tags are the hyperlinks of HTML.
* Elaborate on the other HTML elements if you have anything additional to add and feel free to name off a few other common HTML elements.

---

## HTML Forms

* Means by which we can collect user-inputted data
* Opening `form` tag takes two attributes that specify where to send the form data when submitted (via HTTP request)
  * `action` - specifies URL of HTTP request
  * `method` - specifies HTTP Verb of request (almost always `POST`)
* Comprised of text inputs, dropdowns, radio buttons, checkboxes, and other special input fields

Note:
* Talk about HTML forms at a high level. Forms are a means for users to input data, and we can send that data somewhere on the internet where it will get processed.
* Talk very briefly about the `action` and `method` properties. Let them know that when forms get submitted on the internet, something called an **HTTP Request** is made that includes all of the form data - this gets processed by a server somewhere. Let them know they don't need to worry about HTTP at this stage, but to just understand that the form needs to get sent somewhere and that `action` and `method` are the attributes that let us specify _where_ that form is getting sent.

---

## HTML Form Demo

---

## lets do it!
