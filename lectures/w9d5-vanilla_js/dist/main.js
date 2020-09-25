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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)\nconst groceries = document.querySelector(\".groceries\");\nconst groceryForm = document.querySelector(\".grocery-form\");\nconst recipeList = document.querySelector(\".recipe-list\");\nconst recipes = document.querySelector(\".recipes\");\n//create variables to hold localStorage things\nconst lsItems = JSON.parse(localStorage.getItem(\"items\")) || [];\nconst lsRecipes = JSON.parse(localStorage.getItem(\"recipes\")) || [];\n\n//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//\n//create event handler that adds to our grocery list\nconst addItem = (e) => {\n    //a form wants to send a post request\n    // but we don't want that...\n    // we want to prevent the default behavior of the form\n    e.preventDefault(); // here we are doing what we describe above ^^\n\n    let input = groceryForm.firstElementChild; // this is the first child of our grocery \n                                              //form which is the input \n    let value = input.value; // input.value = \"cheese\" tu dun tsk\n    const item = { value }; // alternative {\"value\": value => cheese} \n    //destructuring will be a lot more familiar in react, dont worry about it too much right now                                           \n    // debugger\n    lsItems.push(item);\n    localStorage.setItem(\"items\",JSON.stringify(lsItems)); //putting info into local storage\n    groceryForm.reset();\n    updateList();\n};\n\n//create action to render grocery list items\nconst updateList = () => {\n  // method 1: using string html element\n  // method 2: using document.createElement\n  // render things form localstorage onto the page\n\n//   groceries.innerHTML = lsItems.map((item) => {\n//     return `\n//         <li> ${item.value} </li>\n//     `\n//   }).join(\"\")\n\n    if (!groceries.hasChildNodes()){ // if it does not have child nodes\n\n        lsItems.map((item) => {\n            let li = document.createElement(\"li\") // hey document, create an li element\n            li.innerText = item.value\n            groceries.appendChild(li) // appending li to our un ordered list (groceries)\n        })\n\n    } else {\n        let li = document.createElement(\"li\") // hey document, create an li element\n        li.innerText = lsItems[lsItems.length - 1].value // grabbing the last items value\n        groceries.appendChild(li)\n    }\n};\n// PHASE II\n//create event handler to cross out list items on click\nconst markAsDone = (e) => {\n    //current target is where even listener is \n    // target is the element that was clicked\n    e.stopPropagation();\n    let clicked = e.target // this is the element that is clicked\n    clicked.classList.toggle(\"done\") // getting the classlist and toggling done\n    //if clicked has the class done it will remove it. if it doesn't have it then it will add it\n};\n\n// PHASE II\n\n//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//\n\n//create event handler that adds to our recipes list\nconst addRecipe = (e) => {\n  let recipeText = e.target.innerText;\n\n  lsRecipes.push({ recipeText });\n  localStorage.setItem(\"recipes\", JSON.stringify(lsRecipes));\n\n  updateWeeklyRecipe();\n};\n\n//create action to render our recipes list\nconst updateWeeklyRecipe = () => {\n  recipes.innerHTML = lsRecipes.map((recipe) => {\n    return `\n            <a href=\"\" class=\"recipeText\">\n                ${recipe.recipeText}\n            </a>\n            `;\n  });\n\n  //ADD AN EVENT LISTENER to set window.location.hash\n  recipes.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    let text = e.target.innerText;\n    window.location.hash = text.trim()\n  })\n};\n\n//---------------------------------------------------------------------//\n\n//add event listener to on submit for form to process add item\ngroceryForm.addEventListener(\"submit\",addItem);\n//add event listener to cross out a list item\n//COMMENT OUT WHEN DEMO-ING EVENT BUBBLING\ngroceries.addEventListener(\"click\", markAsDone)\n//add event listener to to add recipe\nrecipeList.addEventListener(\"click\", addRecipe)\n//call our methods to populate DOM\nupdateList()\nupdateWeeklyRecipe()\n//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//\n\n// COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING\n// let groc = document.querySelectorAll(\".groceries li\") //select the li's\n// groc.forEach((child) => {\n//     child.addEventListener(\"click\", markAsDone);\n// })\n// const boo = (e) => {\n//     // debugger\n//     alert(\"Boo from the groceries ul! You didn't expect this, did you?!\")\n// }\n// const doc = (e) => {\n//     // debugger\n//     alert(\"Boo from the TOP of the document! You didn't expect this, did you?!\")\n// }\n\n// // COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING\n// groceries.addEventListener(\"submit\", boo); //parent\n// document.addEventListener(\"submit\", doc); //parent\n\n//---------------------------------------------------------------------//\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });