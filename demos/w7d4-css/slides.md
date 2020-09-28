# W7D4

## CSS

---

![peter](https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif)

---

## Learning Objections

Understanding:

* Selectors and Specificity
* Display
* Position

---

## Agenda

* HTML Refresher
* CSS re-Intro
* Selectors
* Box Model
* Display
	* Flex
* Position
* Making Dropdowns 

---

## HTML

* Hypertext Markup Language
* Structure

Notes:

* This is like the bones of your webpage
---

```html
<element an-attribute="a value" a-property></element>
<voidelement an-attribute="a value">

<button id="cool-button" type="submit" disabled>Can't click</button>
<img class="cat-image" src="./cat.jpeg" alt="cat">
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
* `<nav>`
* `<section>`

Note:

* Some of the new semantic elements in HTML5
* Note there are other semantic elements, like `<table>` and `<form>`

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

---

## CSS Reset Demo

---

## CSS

* Cascading Style Sheets
* Design

## Notes

* This is like a person's clothes

---
##  Cascading Style Sheets
  * Cascading allows several style sheets to influence the presentation of a document.
  * CSS defines a priority scheme that resolves conflicts (specificity).
* Allows us to separate _content_ from _presentation_

---

### Structure of CSS

```css
selectors {
	property: value;
}
```

---
### Selectors

* Patterns used to select the elements you want to style

---

### Basic Selectors

* Type: `p`
* Class: `.some-class-name`
* ID: `#some-id`

```html
<p>A paragraph</p>
<p class="some-class-name">Classy</p>
<p id="some-id">What's the big idea?</p>
```

---

### Common Selectors

* Descendant: `a b`
* Selects all `b` inside of `a`

```css
div p {
	background-color: blue;
}
```
```html
<div>
  <p>Will be blue</p>
  <section>
    <p>Will also be blue<p>
  </section>
</div>
```

---

### Common Selectors

* Child: `a > b`
* Selects all `b` that are a direct child of `a`

```css
div > p {
	background-color: red;
}
```
```html
<div>
  <p>Will be red</p>
  <section>
    <p>Will not be red<p>
  </section>
</div>
```
---

### Other Common Selectors

* Comma-separated: `a, h1, p`
* Adjacent Sibling: `a + b`
* General Sibling: `a ~ b`
* First Child: `p:first-child`
* Last Child: `p:last-child`
* Nth-Child: `p:nth-child(2)`
* `:hover`, `:active`
* Attributes: `input[type="text"]`

Note:
Adjacent selects the b that directly follows a. a and b are known as siblings, at the same level or depth

General Sibling is similar instead it selects all the b that follow a. In other words, adjacent selects one (the first one that follows), whereas this selects all b that follow a.

---

### Distinction

* `p.highlight` vs `p .highlight`
* `h1#title` vs `h1 #title`

These are _different_ selector patterns.

---

### Selector References
* [List of Selectors](https://www.w3schools.com/cssref/css_selectors.asp)
* [CSS Diner](https://flukeout.github.io/)
---

### Specificity

* Determined by how specific a selection is
* CSS Specificity scoring
* Determines which rules apply
* General practice: avoid writing overly-specific rules

---

### Specificity

Least Specific

* Universal
* Elements/Psuedo-elements
* Classes/Attributes/Pseudo-classes
* IDs
* Inline
* Important

Most Specific

---

### Universal

```css
*
```

Has a score of `(0,0,0,0)`

---

### Elements/Psuedo-elements

```css
h1, div, :after
```

Have a score of `(0,0,0,1)`

---

### Classes/Attributes/Pseudo-classes

```css
.cats, [type='text'], :hover
```

Have a score of `(0,0,1,0)`

---

### IDs

```css
#cool-cat
```

Have a score of `(0,1,0,0)`

---

### Inline

```html
<h1 style="color: red;">Red</h1>
```

Have a score of `(1,0,0,0)`

---

### `!important`

```css
h1 {
	color: red !important;
}
```

Important Note: avoid this as is _highly_ specific

---

### Selectors Demo


---

### Box Model

+![box-model](http://codewithme.us/portland/main-curriculum/images/box-model.png)

* Quick Demo

Note:

+ foundation for layout of the web
+ width and height affect the **content box** by default
+ **padding** can sometimes be thought of as the inner margin of the content box (padding is part of the background)
+ **border** defaults to 0 making it invisible, but goes around the element between margin and padding
+ **margin** is the outter-most layer in the box model, the margins of elements is what is touching


---
### Display

+ Types of boxes
  + `block`
  + `inline`
  + `inline-block`
+ Flex

Note:

+ a box that's stacked upon other boxes, content before and after the box appears on a separate line
  + the whole box model as described above applies to block boxes
+ opposite of block, flows with the document's text, appearing on the same line as surrounding text and other inline elements
+ mix of the other two, flows with surrounding text/inline elements, can still be sized using width and height, wont be broken across paragraph lines,
  + will fit where it's width and height allow, but outside of that other elements can kinda do their thing

---

### Block

`<div>`
* Tries to be as wide as possible
* Content before and after box appears on separate line
* Can have any other element as a child

---

### Inline

`<span>`
* Allows other elements to sit to its left and right
* Cannot have a width and height set
* Doesn't respect top/bottom margin/padding

---

### Inline-block

* Allows other elements to sit to its left and ritght
* Respects width/height, and margin/padding (including top/bottom)

---

### Flex

+ goes on the container to affect the layout of the children
+ main idea is to give the container the ability to alter its items' width, height, and order to best fill the available space
+ intended to be a more _flexible_ way of managing the content position and size on a site

Note:
+ row or column, shrink or grow elements as needed
+ flex > float/position
  + vertically centering a block inside a parent
  + making all children take up equal width and height
+ sizing
  + can add flex sizing which offers a proportion of an element compared to others at the same level

---

### Flex Basics

* Add `display: flex` to a parent element
* Specify what main axis will be using `flex-direction`; either `row` or `column`)
* Main axis determines how `justify-content` and `align-items` work

---


### Flex Resources
* [Flex Box Froggy](https://flexboxfroggy.com/)
* [CSS Tricks: Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

### Display Demo


---
### Position

+ Position Property
  + Static
  + Relative
  + Absolute
  + Sticky
  + Fixed

Note:

+ relative:
  + relative to it's normal position(works in tandem with top:, bottom:, etc.)
  + other elements will not fill in the space created by moving a relative element
+ absolute:
  + relative to nearest positioned ancestor
  + uses the document body if no positioned ancestors
+ sticky:
  + positioned based on the user's scroll position
  + toggles between relative and fixed depending on scroll position
  + will stay where it is placed until you start scrolling and then it just hangs out in one place
+ fixed:
  + relative to the viewport, stays in same place even during scroll
  + still affected by top:, right:, etc.
---

### Position: Static

* Default positioning and flow of elements
* not affected by the top, bottom, left, and right properties.
* things flow around each other
* things take up space

---

### Position: Relative

* _Relative_ to where it would be
* Think of it as _visually_ moving vs the element _physically_ moving on the page
* Flow remains the same
* Uses top, bottom, left, right properties

---

### Position: Absolute

* Positions relative to nearest _non-static_ ancestor
* Think of it as both _visually_ moving and _physically_ moving out of the page
* No longer takes up space in page
* Uses the document if everything is static
* Also uses top, bottom, left, right properties

---

### Position: Fixed

* Same as absolute, but relative to the viewport
* Good for navbars

---

## Position Demo

---

## Dropdowns

* Make an element to open dropdown content
* Make dropdown content
* Use `position: absolute` to make the dropdown overlap the content underneath, and `display: none` to hide the content
* Wrap the whole thing in a div, have `display: block` on `:hover`

---

# SCSS

* A CSS preprocessors with some fun add-ons to vanilla CSS not supported by browsers
* stands for Sassy CSS, and is the next generation of .sass
* npm install -g sass
* sass input.scss output.css

Note:
only css is supported by browsers which is why scss is referred to as a preprocessor. we can write scss and convert it later to css.
+ Variables
+ Nesting
+ Importing Partials

---

### [Ultimate CSS Help Desk](https://www.google.com/)

---
### CSS Resources

+ [MDN CSS documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
+ [W3C CSS Specifications](https://www.w3.org/Style/CSS/specs.en.html)

---
### Kahoot
---

### CSS Tips
* Practice and Experiment (Use CSS Help Desk)
* Only be specific as you need to be
* Use a CSS reset
* `* { border: 1px solid red; }`
* Explore CSS grid
* Have fun!
