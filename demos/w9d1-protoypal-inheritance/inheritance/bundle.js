/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./circle.js":
/*!*******************!*\
  !*** ./circle.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ \"./shape.js\");\n// const Shape = require('./shape');\n\n// function Circle(color, radius){\n//   this.color = color;\n//   this.radius = radius;\n// };\n\n// Circle.prototype = Object.create(Shape.prototype);\n// Circle.prototype.constructor = Circle;\n\n// Circle.prototype.calcCircumference = function(){\n//   console.log(`My circumference is ${2 * Math.PI * this.radius} because my radius is ${this.radius}`);\n// }\n\n// module.exports = Circle;\n\n//ES 6\n\n\n\nclass Circle extends _shape__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(color, radius){ // def initialize \n    super();\n    this.color = color; \n    this.radius = radius;\n  }\n\n  calcCircumference(){\n    console.log(`My circumference is ${2 * Math.PI * this.radius} because my radius is ${this.radius}`);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Circle);\n// const greenCircle = new Circle('green', 10);\n\n//# sourceURL=webpack:///./circle.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ \"./shape.js\");\n/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rectangle */ \"./rectangle.js\");\n/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circle */ \"./circle.js\");\n// const Circle = require(\"./circle\");\n// const Shape = require(\"./shape\");\n// const Rectangle = require(\"./rectangle\");\n\n// const pinkCircle = new Circle('pink', 19);\n\n// window.pinkCircle = pinkCircle;\n\n\n\n\n\nconst pinkCircle = new _circle__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('pink', 19);\n\nwindow.pinkCircle = pinkCircle;\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./rectangle.js":
/*!**********************!*\
  !*** ./rectangle.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ \"./shape.js\");\n// const Shape = require('./shape');\n// const inherits = require('./surrogate');\n\n// function Rectangle(color, width, height){\n//   this.color = color;\n//   this.width = width;\n//   this.height = height;\n//   // this.perimeter = (2 * width) + (2 *  height);\n// };\n\n// inherits(Shape, Rectangle);\n\n// Rectangle.prototype.perimeter = function(){\n//   const perimeter = (2 * this.width) + (2 * this.height)\n//   console.log(`My perimiter is ${perimeter}`);\n// }\n\n// module.exports = Rectangle;\n\n//ES6 \n\n\nclass Rectangle extends _shape__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(color, width, height){\n    super(); //will need to call super super()\n    this.color = color;\n    this.width = width;\n    this.height = height;\n    //this.perimeter \n  }\n\n  perimeter(){\n    const perimeter = (2 * this.width) + (2 * this.height)\n    console.log(`My perimiter is ${perimeter}`);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rectangle);\n// const yellowRect = new Rectangle('yellow', 6, 3)\n\n//# sourceURL=webpack:///./rectangle.js?");

/***/ }),

/***/ "./shape.js":
/*!******************!*\
  !*** ./shape.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// function Shape(color){\n//   this.color = color;\n// };\n\n// Shape.prototype.sayHello = function(){\n//   console.log(`Hello, I am ${this.color}`)\n// }\n\n// module.exports = Shape;\n\n//ES6 \n\nclass Shape {\n  constructor(color){\n    this.color = color;\n  }\n\n  sayHello(){\n    console.log(`Hello, I am ${this.color}`);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shape); \n\n// const blueShape = new Shape('blue');\n\n\n//# sourceURL=webpack:///./shape.js?");

/***/ })

/******/ });