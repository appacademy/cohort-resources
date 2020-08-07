
## CSS

### Cascading Style Sheets

---

## Learning Objectives

Understanding:

* The different ways of selecting elements
* How specificity affects styling
* What is the box model

---

## Lecture Outline

* Selectors
* Specificity
* Box Model
* CSS reset
* First Kahoot!

---

## HTML Refresher

* Hypertext Markup Language
* Structure

Note:
* This is like the bones of your webpage
* It would be a little boring if we couldn't style this

---

### How to think about LEARNING CSS

Note:
* This lecture goes through lots of demo, but you learn CSS by doing it!
* It takes time.

---

## CSS

- Cascading Style Sheets
- Design

Note:
* If HTML is bones, this is like the skeleton's clothes (Javascript is what makes a webpage come alive)
* CSS _is_ important
* The only way to get good is to practice and experiment

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

Note:
* elements are selected normally, class selected using a `.`, id selected using `#`
Can take a moment to mention that elements can have multiple classes
If they ask about specificity rules overwritten by both classes, the class written after the other class will overwrite the other.

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
* `:hover`, `:active`, `:focus`
* Attributes: `input[type="text"]`

Note:
Adjacent selects the b that directly follows a. a and b are known as siblings, at the same level or depth

General Sibling is similar instead it selects all the b that follow a. In other words, adjacent selects one (the first one that follows), whereas this selects all b that follow a.

:active is the time while an element is being clicked, between mousedown and mouseup
:focus is after an element has been clicked, until another element is clicked
:hover is while mouse is hovering over the element

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
h1, div, ::after
```

Have a score of `(0,0,0,1)`

Note:
* Can use ::after selector and then the `content` property to put content after some element
* ::before is a thing too

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

### Specificity (Again!)

Least Specific

* Universal
* Elements/Psuedo-elements
* Classes/Attributes/Pseudo-classes
* IDs
* Inline
* Important

Most Specific

---

### Selectors Demo

---

### Box Model

![box-model](http://codewithme.us/portland/main-curriculum/images/box-model.png)


Note:

+ foundation for layout of the web
+ width and height affect the **content box** by default
+ **padding** can sometimes be thought of as the inner margin of the content box (padding is part of the background)
+ **border** defaults to 0 making it invisible, but goes around the element between margin and padding
+ **margin** is the outer-most layer in the box model, the margins of elements is what is touching

---

### Dev Tools AKA UNLIMITED POWER

---

### CSS Reset

+ A good practice!
+ DEMO

---

### For today's project use [Ultimate CSS Help Desk](https://www.google.com/)

---

### CSS Resources

+ [MDN CSS documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
+ [W3C CSS Specifications](https://www.w3.org/Style/CSS/specs.en.html)

---

# Kahoot
