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
* CSS Intro
* Selectors
* Box Model
* Display
* Flex
* Position
* Dropdown

---

## HTML

* Hypertext Markup Language
* Structure

---


```html
<element an-attribute="a value" an-attribute></element>
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

## CSS Reset Demo

---

## CSS

* Cascading Style Sheets
* Design


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


---
### Display

+ Types of boxes
  + `block`
  + `inline`
  + `inline-block`
+ Flex

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


---

### [Ultimate CSS Help Desk](https://www.google.com/)

---
### CSS Resources

+ [MDN CSS documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
+ [W3C CSS Specifications](https://www.w3.org/Style/CSS/specs.en.html)

---

### CSS Tips
* Practice and Experiment
* Only be specific as you need to be
* Use a CSS reset
* `* { border: 1px solid red; }`
* Explore CSS grid
* Have fun!
