# Canvas 
## getContext("2d") Apis
* fillStyle = "color"
    * sets the "fill style" or color of the shape you will draw
* fillRect(xdirec,ydirec,width,height)
    * creates a rectangle with the specified arguments
* beginPath()
    * starting point for the shape you will make
* moveTo(x,y)
    * move to any point on the canvas 
* lineTo(x,y)
    * creates a line to any point on the canvas
* closePath()
    * will create a line from the last point you ended at to the start of your path
* fill()
    * fills the current drawing (path)
* strokeStyle()
    * color of the line that you draw
* lineWidth()
    * width of the line that you draw
* stroke()
    * actually draws the path that you have defined 

## Intro 
* html has a ```<canvas>``` element that is available for use. ```<canvas width="100" height="200"></canvas>``` this is an example of a canvas with a width of 100px and a height of 200px.
* The canvas element is simply a "canvas" that allows you make a drawing within the bounds of its size. In order to actually create figures we have to make an "instance" of getContext("2d") by doing ```canvasElement.getContext("2d")```. We save ```canvasElement.getContext("2d")``` to a variable that allows us to call different functions that allow us to draw. 
* I like to think of it as summoning a writing utensil that allows us to create figures on the canvas. 
```javascript
//in index.html
<canvas width="100" height="200" id=canvas></canvas>

// in index.js 
window.addEventListener("DOMContentLoaded",()=>{
    canvasElement = document.getElementById("canvas")
    ctx = canvasElement.getContext("2d")
})
```
* after creating the ctx variable you can use any of the methods listed above.
* Rectangle is the only shape inheritantely supported by canvas. Therefore in order to make any other shapes we have to use paths.

## Paths 
```javascript
//creating a circle with path
var ctx = c.getContext("2d");
ctx.beginPath(); // necessary to begin drawing this path
ctx.arc(100, 75, 25, 0, 2 * Math.PI);
// (circleCenterX, circleCenterY, radius, startAngle, endAngle, counterclockwise(optional))
ctx.strokeStyle = "red"; // optionally sets color of path
ctx.stroke(); // draws path (default color is black)
ctx.closePath(); // optional when drawing a circle
ctx.fillStyle = "blue"; // sets color to be filled inside of the path
ctx.fill(); // fills the interior of the circle (does not work without fillStyle being set)
```