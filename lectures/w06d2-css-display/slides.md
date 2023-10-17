No file chosenSync editor position
1
​
2
​
3
## CSS Display
4
​
5
---
6
​
7
## Learning Objectives
8
​
9
Prepare for Shakshuka Part 2
10
​
11
* CSS Reset Review
12
* Display
13
  + `block`, `inline`, `inline-block`
14
  + `grid`
15
  + `flex` 🤩
16
​
17
​
18
---
19
​
20
## Lecture Outline
21
​
22
* CSS Reset Review
23
* Display Property
24
  * Display Demo
25
* Grid
26
  * Grid Demo
27
* Flex
28
  * Flex Demo
29
* Kahoot!
30
​
31
---
32
​
33
### CSS Reset Review
34
+ What does it do?
35
+ How do we do it?
36
​
37
---
38
​
39
​
40
### Display
41
​
42
+ Types of boxes
43
  + `block`
44
  + `inline`
45
  + `inline-block`
46
+ Flex
47
​
48
Note:
49
​
50
+ block: a box that's stacked upon other boxes, content before and after the box appears on a separate line
51
  + the whole box model as described above applies to block boxes
52
+ inline: opposite of block, flows with the document's text, appearing on the same line as surrounding text and other inline elements
53
+ inline-block: mix of the other two, flows with surrounding text/inline elements, can still be sized using width and height, wont be broken across paragraph lines,
54
  + will fit where it's width and height allow, but outside of that other elements can kinda do their thing
55
​
56
---
57
​
58
### Block
CSS Display
Learning Objectives
Prepare for Shakshuka Part 2

CSS Reset Review
Display
block, inline, inline-block
grid
flex 🤩
Lecture Outline
CSS Reset Review
Display Property
Display Demo
Grid
Grid Demo
Flex
Flex Demo
Kahoot!
CSS Reset Review
What does it do?
How do we do it?
Display
Types of boxes
block
inline
inline-block
Flex
Block
<div>

Tries to be as wide as possible
Content before and after box appears on separate line
Can have any other element as a child
Inline
<span>

Allows other elements to sit to its left and right
Cannot have a width and height set
Doesn't respect top/bottom margin/padding
Inline-block
Allows other elements to sit to its left and right
Respects width/height, and margin/padding (including top/bottom)
Display Demo
Grid
CSS Grid is a versatile and powerful tool for creating responsive and complex web layouts.

CSS Grid is a layout system used to create grid layouts in web design. It operates within a grid container, which can be any HTML element (e.g., <div>)

display: grid;

Grid v.s. Flex
Grid is a 2 dimensional layout model where Flex is one dimensional

Both Css Grid and Flex are properties placed on the parent container.

CSS Grid: Supports both row-based and column-based layouts simultaneously. You can create grids that have rows and columns in any arrangement.

CSS Flexbox: Primarily used for laying out items along a single axis, either horizontally or vertically.

Flex
If there is one css skill to master - THIS IS IT!
goes on the container to affect the layout of the children
main idea is to give the container the ability to alter it's childen's placement and order to best fill the available space
intended to be a more flexible way of managing the content position and size on a site
Flex Basics
Add display: flex to a parent element
Specify what main axis will be using flex-direction; either row or column)
Main axis determines how justify-content and align-items work
Flex Resources
Flex Box Froggy
CSS Tricks: Guide to Flexbox
Flex Demo
A note on CSS projects - Finish them.
