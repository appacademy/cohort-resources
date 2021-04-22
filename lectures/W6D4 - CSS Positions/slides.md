# W6D4

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
* Not affected by the top, bottom, left, and right properties.
* Static elements flow around each other in block layout
* Static elements take up space

---

### Position: Relative

* _Relative_ to where the element would normally render on the page
* Document flow remains the unchanged
* Affected by top, bottom, left, right properties

---

### Position: Absolute

* Positions an element relative to nearest _non-static_ ancestor
* Positions an element relative to the html docuement if all page elements are static
* No longer takes up space in page: following elemnts maintain normal documnet flow
* Also affected by top, bottom, left, right properties

---

### Position: Fixed

* Similar behavior as absolute but relative to the viewport
* Also affected by top, bottom, left, right properties
* Good for navbars

---

### Position: Sticky

* Positions an element according to normal document flow
  * Offset relative to nearest scrolling ancestor and parent block
* Also affected by top, bottom, left, right properties

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