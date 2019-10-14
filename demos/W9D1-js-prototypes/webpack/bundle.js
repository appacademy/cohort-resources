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
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./animal.js":
/*!*******************!*\
  !*** ./animal.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Animal(name) {\n  this.name = name;\n}\n\nAnimal.prototype.eat = function() {\n  console.log(`nom nom nom`);\n};\n\nmodule.exports = Animal;\n\n//# sourceURL=webpack:///./animal.js?");

/***/ }),

/***/ "./cat.js":
/*!****************!*\
  !*** ./cat.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Animal = __webpack_require__(/*! ./animal.js */ \"./animal.js\");\n\nfunction Cat(name) {\n  this.name = name;\n}\n\nfunction Surrogate() { }\nSurrogate.prototype = Animal.prototype;\nCat.prototype = new Surrogate();\nCat.prototype.constructor = Cat;\n\nCat.prototype.meow = function () {\n  console.log(`meow`);\n};\n\n// let pinky = new Cat(`pinky`);\n\nmodule.exports = Cat;\n\n//# sourceURL=webpack:///./cat.js?");

/***/ }),

/***/ "./dog.js":
/*!****************!*\
  !*** ./dog.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Animal = __webpack_require__(/*! ./animal.js */ \"./animal.js\");\n\nfunction Dog(name, toy) {\n  this.name = name;\n  this.favoriteToy = toy;\n}\n\nfunction Surrogate() { }\nSurrogate.prototype = Animal.prototype;\nDog.prototype = new Surrogate();\nDog.prototype.constructor = Dog;\n\nDog.prototype.bark = function () {\n  console.log(`woof woof`);\n};\n\nDog.prototype.sayName = function () {\n  console.log(`my name is ${this.name}`);\n};\n\n// let mimi = new Dog(`mimi`, `ball`);\n\nmodule.exports = Dog;\n\n//# sourceURL=webpack:///./dog.js?");

/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Cat = __webpack_require__(/*! ./cat.js */ \"./cat.js\"); \nconst Dog = __webpack_require__(/*! ./dog.js */ \"./dog.js\"); \n\nconst mimi = new Dog('mimi', 'ball'); \nconst pinky = new Cat('pinky'); \n\nwindow.mimi = mimi; \nwindow.pinky = pinky; \n\n//# sourceURL=webpack:///./entry.js?");

/***/ })

/******/ });