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

eval("//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)\nconst groceries = document.querySelector(\".groceries\");\nconst groceryForm = document.querySelector(\".grocery-form\");\nconst recipeList = document.querySelector(\".recipe-list\");\nconst recipes = document.querySelector(\".recipes\");\n\n//create variables to hold localStorage things\n//NO NEED TO REMOVE PRIOR TO DEMO!!!\nconst lsItems = JSON.parse(localStorage.getItem('items')) || [];\nconst lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];\n\n//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//\n//create action that adds to our grocery list\nconst addItem = (e) => {\n    e.preventDefault();\n\n     // grab input element from input value\n    let input = document.querySelector(\"input[name='add-grocery']\"); \n    // returns first element that matches\n    // DEMO on console properties available on HTMLElement\n    let value = input.value;\n    \n    // create an item object\n    const item = {item: value };\n\n    // add to our list of localStorage items\n    lsItems.push(item);\n    localStorage.setItem(\"items\", JSON.stringify(lsItems));\n    // DEMO on console how our lsItems look like\n\n    // call our method to update grocery list to show new item\n    updateList();\n\n    // reset input field\n    groceryForm.reset();\n    // reset is a method on forms that clears the form\n}\n\n//create functionality to render grocery list items\nconst updateList = () => {\n\n    // method 1: using string html element\n    // map over lsItems, return string interpolated li item\n    // add as list item to our groceries.innerHTML\n    //DEMO how it looks in elements without join(\" \")\n    groceries.innerHTML = lsItems.map((item) => {\n        return `\n            <li>\n                ${item.item}\n            </li>\n            `\n    }).join(\" \"); \n\n   \n    // method 2: using document.createElement\n        // map over lsItems, create li elemtn, add innerText to li, then appendChild\n        // createElement returns an html element\n        // append vs appendChild \n            // -> appendChild returns the appended node object whereas append has no return value\n            // -> you can append multiple items (nodes or strings) with append\n    // if (!groceries.hasChildNodes) {\n    //     lsItems.map((item) => {\n    //         let li = document.createElement(\"li\")\n    //         li.innerText = item.item\n    //         groceries.appendChild(li) //append vs append child\n    //     });\n    // } else {\n    //     let li = document.createElement(\"li\")\n    //     li.innerText = lsItems[lsItems.length - 1].item\n    //     groceries.appendChild(li) //append vs append child\n    // }\n\n}\n\n//create functionality to cross out list items on click\nconst markAsDone = (e) => {\n    e.preventDefault();\n\n    // On click, grab e.target and save into variable NOT currentTarget \n        // bc we want the li that triggered it\n    let ele = e.target\n\n    // use child.classList which returns a collection of class attributes\n    // call .toggle method on it to add and remove class on click\n    ele.classList.toggle('done')\n}\n\n//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//\n\n//NO NEED TO REMOVE PRIOR TO DEMO!!!\n//create action that adds to our recipes list\nconst addRecipe = (e) => {\n    // e.preventDefault();\n\n    // grab the target's innerText that was clicked on \n    let recipeText = e.target.innerText;\n\n    // add to our list of localStorage items\n    // EXPLAIN that in js you can pass in 1 value and will set key and value, compare to above\n    lsRecipes.push({ recipeText });\n    localStorage.setItem(\"recipes\", JSON.stringify(lsRecipes))\n\n    // call our method to update grocery list to show new item\n    updateWeeklyRecipe();\n}\n\n//NO NEED TO REMOVE PRIOR TO DEMO!!!\nconst updateWeeklyRecipe = () => {\n    // map over lsRecipes, create a tags with createElement, set href = \"\", add innerText to li, \n        // add \"recipeText\" class to a tag, then appendChild to recipes\n    recipes.innerHTML = lsRecipes.map((recipe) => {\n        return `\n            <a href=\"\" class=\"recipeText\">\n                ${recipe.recipeText}\n            </a>\n            `\n    });\n        \n        // let aTag = document.createElement(\"a\")\n        // aTag.href = \"\"\n        // aTag.innerText = recipe.recipeText\n        // aTag.classList.add(\"recipeText\")\n        // recipes.appendChild(aTag) //append vs append child\n    // });\n\n//WRITE EVENT LISTENER IN DEMO\n    // also add event listener to recipes for on click, grab text from innerText, then set hash to text\n    recipes.addEventListener(\"click\", (e) => {\n        // DEMO what happens when forget to prevent default\n        e.preventDefault()\n        let text = e.target.innerText\n        window.location.hash = text\n    })\n}\n\n//---------------------------------------------------------------------//\n\n//add event listener to on submit for form to process add item\ngroceryForm.addEventListener(\"submit\", addItem);\n\n//add event listener to cross out a list item\n//we put event handler on parent to utilize event delegation\n//COMMENT OUT WHEN DEMO-ING EVENT BUBBLING\ngroceries.addEventListener(\"click\", markAsDone);\n\n//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//\n\n//NO NEED TO REMOVE PRIOR TO DEMO!!!\n//COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING\n// let groc = document.querySelectorAll(\".groceries\")\n// groc.forEach((child) => {\n//     e.stopPropagation();\n//     child.addEventListener(\"click\", markAsDone);\n// })\n// const boo = (e) => {\n//     alert(\"Boo from the groceries ul! You didn't expect this, did you?!\")\n// }\n\n//COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING\n// groceries.addEventListener(\"click\", boo);\n\n//---------------------------------------------------------------------//\n\n//add event listener to to add recipe\n//we put event handler on parent to utilize event delegation\nrecipeList.addEventListener(\"click\", addRecipe);\n\n//call our methods to populate DOM\nupdateList();\nupdateWeeklyRecipe();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });