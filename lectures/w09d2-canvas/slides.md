## W9D1

## Canvas and Webpack

---

## Learning Goals
* Learn the basics of canvas
* Learn how to set up webpack 
* Understand the motivations for using a bundler 
* Learn how to test javascript objects/functions in the browser 

---

## Lecture Agenda
1. Canvas basics
2. Canvas demo
3. Webpack demo
4. Testing on the window 

---

## Canvas basics

* An HTML `<canvas>` element is used to draw graphics on a web page
	* The `<canvas`> element is a blank space where you can draw graphics using JavaScript
* The `<canvas>` element has two attributes: width and height, which determine the size of the canvas
* To draw on the canvas, you need to first get a "drawing context" using the `getContext()` method
	* The drawing context is an object with methods and properties that you can use to draw graphics on the canvas

---
  
## Drawing a rectangle

* To draw a rectangle on the canvas, you can use the fillRect() method on the drawing context
* The fillRect() method takes four parameters: x, y, width, and height. These values determine the position and size of the square
* For example, to draw a square at position (10, 10) with a width and height of 50 pixels, you can use the following code:

```js
ctx.fillRect(10, 10, 50, 50);
```
  
---

## Drawing a circle

* To draw a circle on the canvas, you can use the arc() method on the drawing context
* The arc() method takes six parameters: x, y, radius, start angle, end angle, and anticlockwise
* For example, to draw a circle at position (100, 100) with a radius of 50 pixels, you can use the following code:

```js
ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
```

* You can then use the fill() or stroke() method to draw the circle on the canvas

---

## Color

* Adding color can be done by using the `fillStyle` property
	* This must be done before using a `fill()` method
* ex:
```js
ctx.fillStyle = "blue"
ctx.fill()
```
* The same can be done using `strokeStyle` and `stroke()` to color a line
* You can also use clearRect() to clear a rectangle, or more commonly the entire canvas.

---

## Animating

* To animate a drawing, you can create a function that does the following steps:
	1. clears the previous canvas,
  2. draws your objects,
  3. moves your objects.
* You can use the `setInterval()` function to repeatedly call a function that animates the drawings

```js
setInterval(animate, 50);
```

---

## 	requestAnimationFrame

* `requestAnimationFrame()` is designed for better performance with your browser and to save processing power compared to `setInterval()`
* this function takes a callback and schedules it to be called before the next repaint of the browser

```js
requestAnimationFrame(animate);
```

* Make sure to call requestAnimationFrame() again inside the animate function so the animation keeps going

---

## Canvas demo 

---

## Webpack

* Webpack is a JavaScript module bundler that takes all of your project's js files and other assets, such as images and styles, and turns them into a single bundle that can be included in your HTML pages
* Webpack also provides a development server that can be used to test your application locally without deploying it to a web server.

---

## Webpack demo

---

## Testing on the window 

