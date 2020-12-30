# W6D3
### CSS Positioning

---

## Lecture Objectives

* Prepare for CSS Friends Part 1
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

Note:

+ relative:
  + relative to it's normal position(works in tandem with top:, bottom:, etc.)
  + other elements will not fill in the space created by moving a relative element
+ absolute:
  + relative to nearest positioned ancestor
  + uses the document body if no positioned ancestors
+ fixed:
  + relative to the viewport, stays in same place even during scroll
  + still affected by top:, right:, etc.
+ sticky:
  + positioned based on the user's scroll position
  + toggles between relative and fixed depending on scroll position
  + will stay where it is placed until you start scrolling and then it just hangs out in one place
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

* Positions in relation to nearest _non-static_ ancestor
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

Note:
* Dropdowns are important to almost every webpage, but can be tricky to figure out how to implement

---

## CSS Friends

[Live Solution!](http://appacademy.github.io/css-friends/solution/05-cats.html)

---

## Dropdowns Demo

---

## All done!
![css](https://media1.giphy.com/media/ZY3W96Mvat8EFTCclA/giphy.gif?cid=ecf05e47h2kztqcnoa9ezcjgd8ia5i1l7o6gd2d7azvkqqlz&rid=giphy.gif)