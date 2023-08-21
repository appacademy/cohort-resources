# W5D3

## CSS Display

---

## Learning Objectives

Prepare for Shakshuka Part 2

* CSS Reset Review
* Display
  + `block`, `inline`, `inline-block`
  + `flex` 🤩
* Float intro

---

## Lecture Outline

* CSS Reset Review
* Display Property
  * Display Demo
* Float
  * Float Demo
* Flex
  * Flex Demo
* Kahoot!

---

### CSS Reset Review
+ What does it do?
+ How do we do it?

---


### Display

+ Types of boxes
  + `block`
  + `inline`
  + `inline-block`
+ Flex

Note:

+ block: a box that's stacked upon other boxes, content before and after the box appears on a separate line
  + the whole box model as described above applies to block boxes
+ inline: opposite of block, flows with the document's text, appearing on the same line as surrounding text and other inline elements
+ inline-block: mix of the other two, flows with surrounding text/inline elements, can still be sized using width and height, wont be broken across paragraph lines,
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

* Allows other elements to sit to its left and right
* Respects width/height, and margin/padding (including top/bottom)

---

### Display Demo

---

### Float

* Useful for making a print design layout (Like in a newspaper!)
* left, right, none
* clear: left, right, none, both
* Removed from normal flow of page, but things "float" around it (still in flow)

Note:
* float is property that could have values of left, right, or none
* Use the clear property on elements to specify whether the element will flow on along floated elements on that side
* You could make a point of saying that float is less widely used now due to the popularity and versatility of display: flex, but you can still find it in some code bases.

---

### Clearfix

* If a floating element is "floating" outside of it's container, this is a clearfix:

```css
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

Note: 
* The clear fix has a long history, and many different iterations existed over the years.
* The main idea is that floating elements can sometimes overlap the container they are supposed to be in.
* To fix it, you use an empty pseudo element after the clearfix container (:after, content: ""), that clears anything to it's left and right (clear: both). display doesn't have to be table, it would work with block.
* If it looks confusing, that's because it is. It is a hacky fix for an old way of doing things, and if you run into it in the wild, this is what it does.

---

### Float Resources
* [CSS Tricks: All About Floats](https://css-tricks.com/all-about-floats/)

---

### Float Demo

---

### Flex

+ If there is one css skill to master - THIS IS IT!
+ goes on the container to affect the layout of the children
+ main idea is to give the container the ability to alter it's childen's placement and order to best fill the available space
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

### Flex Demo

---

#### A note on CSS projects - Finish them.

---

# Kahoot!

Note: https://play.kahoot.it/v2/?quizId=c961b428-9cf2-47c0-9438-07849243193b