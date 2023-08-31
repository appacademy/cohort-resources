# W7D4

### CSS Positioning

---

## Lecture Objectives

* Understand position property
* Make a dropdown menu

---

## Lecture Outline

* Position property
* Position demo
* Dropdown demo

---

### Position

+ Position Property
  + Static
  + Relative
  + Absolute
  + Fixed
  + Sticky

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

* Hover effect on an element displays a "dropdown" list of elements
* In reality, elements are merely hidden until the hover effect changes `display: none` to `display: block`
* The list of elements appears on top of the rest of the page due to `position: absolute`

---

## CSS Friends

[Live Solution!](http://appacademy.github.io/css-friends/solution/05-cats.html)

---

## Dropdowns Demo

---

## All done!