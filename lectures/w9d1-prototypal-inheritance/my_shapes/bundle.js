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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// function Circle(color, radius) {\n//     Shape.call(this, color);\n//     this.radius = radius;\n// }\n\n// // 1\n// Circle.prototype = Object.create(Shape.prototype);\n// // 2\n// Circle.prototype.constructor = Circle;\n\n// Circle.prototype.area = function() {\n//     let area = Math.PI * (this.radius**2);\n//     console.log(area);\n// };\nconst Shape = __webpack_require__(/*! ./shape */ \"./shape.js\");\n\nclass Circle extends Shape {\n    constructor(color, radius) {\n        super(color);\n        this.radius = radius;\n    }\n\n    area() {\n        let area = Math.PI * (this.radius ** 2);\n        console.log(area);\n    }\n}\n\nmodule.exports = Circle;\n\n\n\n\n//# sourceURL=webpack:///./circle.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const rectangles = __webpack_require__(/*! ./rectangle.js */ \"./rectangle.js\");\nconst Circle = __webpack_require__(/*! ./circle.js */ \"./circle.js\");\n// debugger;\n\nconst yellowRectangle = new rectangles.Rectangle('yellow', 5, 6);\nconst redCircle = new Circle('red', 5);\n\nwindow.yellowRectangle = yellowRectangle;\nwindow.redCircle = redCircle;\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./rectangle.js":
/*!**********************!*\
  !*** ./rectangle.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// function Rectangle(color, width, height) {\n//     Shape.call(this, color);\n//     this.width = width;\n//     this.height = height;\n// };\n\n// inherits(Rectangle, Shape);\n\n// Rectangle.prototype.area = function() {\n//     console.log(this.width * this.height);\n// };\n// const Shape = require('./shape.js');\n\nconst Shape = __webpack_require__(/*! ./shape.js */ \"./shape.js\");\n\nclass Rectangle extends Shape {\n    constructor(color, width, height) {\n        super(color);\n        this.width = width;\n        this.height = height;\n    }\n\n    area() {\n        console.log(this.width * this.height);\n    }\n}\n\nclass FancyRectangle extends Rectangle {\n    constructor(color, width, height) {\n        super(color, width, height);\n    }\n\n    sayHello() {\n        console.log('I am fancy');\n    }\n}\n\nmodule.exports = {\n    Rectangle: Rectangle,\n    FancyRectangle: FancyRectangle\n};\n\n//# sourceURL=webpack:///./rectangle.js?");

/***/ }),

/***/ "./shape.js":
/*!******************!*\
  !*** ./shape.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function Shape(color) {\n//     this.color = color;\n// }\n\n// Shape.prototype.sayHello = function() {\n//     console.log(`Hello, I am ${this.color}.`);\n// };\n\nclass Shape {\n    constructor(color) {\n        this.color = color;\n    }\n\n    sayHello() {\n        console.log(`Hello, I am ${this.color}.`);\n    }\n}\n\nmodule.exports = Shape;\n\n//# sourceURL=webpack:///./shape.js?");

/***/ })

/******/ });