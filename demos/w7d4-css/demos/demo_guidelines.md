# Demos

## Reset Demo
Show what the reset file does to the default browser specific styling. 

Emphasize that different browsers have different styling and that resetting this and doing the styling yourself makes for a better UI.

## Specificity Demo
selectors.html
selectors.css

Not much to type out here, just to illustrate some stuff (descendant selectors). After showing briefly, we revisit to show the difference between `p.highlight` and `p .highlight`. (Need to comment this in).

## Box Model Demo
box-model.html
box-model.css

This demo will be a good time to introduce students to the Chrome dev tools. Take the time to poke around and show them the tabs they will be working with.

Make sure to highlight the differences of margin and padding. After that, show the difference between the default `box-sizing: content-box` and `box-sizing: border-box`. (Make sure to comment out the code in the html file).

## Display Demo
This one has all the html you need, just needs to be commented in as we go through it.

### Block

We will start with block, and talk about how it doesn't show up if it has no height. Also talk about how width is as big as can be unless you say otherwise. You can change the width, and the colored area will shrink, but note that because it's a block, it will be on it's own line (it takes up the full width of it's parent). 

With block elements, you can center horizontally using `margin: 0 auto`; 

Also, show how vertical margins collapse. Use the dev tools to inspect the page, and show how the pink and teal boxes' margins do NOT combine, but rather the larger one wins. 

There is a cool attribute selector we can comment in to give all block same width and height.

### Inline

Comment in the html code, and show how it looks different from block. Note that even if we try to give it a width and height, it is ignored.

Additionally, there is another attribute selector (commented out) that gives the font a bigger size and adds some margin and padding. Note that we cannot change the vertical margin/padding (it has no effect)

### Inline-block

No need to touch css for this one. Comment out the html. Show how inline block is like block elements (can be given a width height, and vertical margin/padding) AND renders left to right (like inline). We can experiement with giving it different dimensions.


### Flex

No need to touch css for this one. Comment out flex html code. We will be experimenting and showing how the flex-direction determines the meaning of justify-content / align-items


## Position

### (If using new demo)

The gray box is the cool box, that can change it's position in real time. The boxes represent `top`, `left`, `bottom`, and `right` properties.

#### Static

Nothing to show here, static does not respect the `top`, `left`, `bottom`, or `right` properties. Static means show up on the page where it is supposed to be. 


#### Relative 

Relative is like static, but it will respect the four properties. Note that the gray box _physically_ takes up it's original position, but you can move it _visually_. 

#### Absolute 

Absolute will break the element out of the normal flow (and the red box will shift up because there is nothing sitting there now). Absolute requires a frame of reference so it can know where it should be. Absolute elements will look at its parents; as soon as it finds a parent that is _not static position_, it will use that as a frame of reference. Frame of reference means: when you say `top: 10px`, the absolute element will be 10px from the top of it's frame of reference element. 

#### Fixed 

Fixed breaks element out of normal flow, and it will always use the viewport as it's frame of reference. 
               
#### Sticky 

Sticky is like a static element (it will sit in it's original location) _until_ the viewport comes in range of its `top`, `left`, `right`, or `bottom` properties, then it will move with the viewport (almost like fixed)


### (old demo)

#### Static

Nothing to code/comment out here, just explain what is going on

#### Relative

Need to comment in some html code. Looks very similar to static.

We will be playing in dev tools to show how we can move the squares into the blank square without the rest of the page moving around. (Answer: need to go 187px down, then mess around with going from right).

#### Fixed

Make a quick comment about how we want the title of our page to always be at the top. And how this behaves pretty much like absolute (frame of refernce is the viewport). There is some commented css code, and we will have to add more to push it down a bit.

#### Absolute

This has html to be commented out. And we have some styling already there to make it look like a popup. We can discuss the flex styling.

Our goal is to get the X to be in the top right corner of the popup. We will code out how to do that using absolute positioning (the X has a class of 'x'). Note after adding top to the x, it will jump (which is good, it's a common css bug).

`.abs-container` we will have to add position relative at some point otherwise it will jump to the top of the page (we will show this happening).


Last: Let's add sticky to it to make it extra annoying (don't forget to add top: 0 to it).

### Float

We don't need to spend too much time here. Basically, we can comment in the html, and show how floating the image behaves. We can float the element left (it will go to the left of the page, and other elements will flow around it) and same with right. 

Clear is for sibiling elements. It allows the sibling to "go past" or "clear" the float. In other words, if we float the image right, the p tags will flow to the left. If we want the text below the floated element, we can add a `clear: right` to the first p tag, which says "Hey, don't flow next to elements that are float right; instead, clear past float right elements". Show this with `clear: left` and `clear: both`.

We can also show what a clearfix does -- if we delete all of the p tags exept the first one, the text should fit next to the floated image, but note that the pink box will only contain the text; the image will overflow it. To fix this (this happens with floats), we need a clearfix. A clearfix says "Hey surrounding box (aka the pink box), you should "clear" the float elements". In other words, the pink box should contain the image with a clearfix. 

To add a clearfix, we are going to write a selector pattern that generalizes this behavior, so we can then add it to any element. We want to add this class `.clearfix` to the parent element that is not containing the float (in this case, it is `.float-container`). Then you need to write the following selector: 

```css
.clearfix::after {
  display: table;
  content: "";
  clear: both;
 }
 ```
 
 This adds a pseudo-element, `::after` which appears after the `float-container` element. You can inspect the page and see this. The `content` property is needed for the `::after` psuedoelement so that it shows up on the page; without this content property set, the after pseudo-element will not show up. We can set it to `""` and it will be happy. `clear: both` says this psuedo-element should clear both left and right floats, or go below. 


