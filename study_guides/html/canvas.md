# Canvas 
## getContext("2d") Apis
* fillStyle("color")
    * fills the background of your shape
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
* html has a ```<canvas>``` element that is available for use
* the canvas element is simply a "canvas" that allows you make a drawing within the bounds of its size. for each object that we create we have to make an "instance" of getContext("2d") by doing ```canvasElement.getContext("2d")```. each instance represents a different figure on the canvas.
* Rectangle is the only shape inheritantely supported by canvas. Therefore in order to make any other shapes we have to use paths

##Paths 

