/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)\n// webpack --watch --mode=development\n\nconst groceries = document.querySelector(\".groceries\");\nconst groceryForm = document.querySelector(\".grocery-form\");\nconst recipeList = document.querySelector(\".recipe-list\");\nconst recipes = document.querySelector(\".recipes\");\n\n// STEP 1\n//create variables to hold localStorage things\n\n\nconst lsItems = JSON.parse(localStorage.getItem('items')) || [];\nconst lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];\n\nconsole.log(localStorage)\n\n//localStorage => storage in the web browser that can hold data for you\n\n\n//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//\n//create event handler that adds to our grocery list\nconst addItem = (e) => {\n    e.preventDefault();\n    let input = document.querySelector(\"input[name='add-grocery']\");\n    let value = input.value;\n    const item = { value: value };\n    lsItems.push(item);\n    localStorage.setItem(\"items\", JSON.stringify(lsItems));\n\n    updateList();\n\n    groceryForm.reset();\n}\n\n//create action to render grocery list items\nconst updateList = () => {\n\n    // method 1: using string html element\n    groceries.innerHTML = lsItems.map((item) => {\n        return `<li>${item.value}</li>` \n    })\n    // JS interpolation -> `${}`\n\n    // method 2: using document.createElement\n\n}\n\nupdateList();\n\ngroceryForm.addEventListener(\"submit\", addItem)\n\n// updateList()\n\n//create event handler to cross out list items on click\nconst markAsDone = (e) => {\n    // e.preventDefault();\n    e.stopPropagation();\n\n    let ele = e.target;\n    console.log(e)\n\n\n    ele.classList.toggle('done');\n\n}\n\n// groceries.addEventListener(\"click\", markAsDone)\n\n//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//\n\nlet groc = document.querySelectorAll(\".groceries li\");\ngroc.forEach(child => child.addEventListener(\"click\", markAsDone));\n\nconst boo = (e) => {\n    alert(\"Boo from the groceries ul! You didn't expect this, did you?!\");\n}\n\ngroceries.addEventListener(\"click\", boo); //parent\n\n//---------------------------------------------------------------------//\n\n\n\n\n\n\n//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//\n\n//create event handler that adds to our recipes list\nconst addRecipe = (e) => {\n\n    let recipeText = e.target.innerText;\n\n    lsRecipes.push({ recipeText });\n    localStorage.setItem(\"recipes\", JSON.stringify(lsRecipes))\n\n    updateWeeklyRecipe();\n}\n\n//create action to render our recipes list\nconst updateWeeklyRecipe = () => {\n\n    recipes.innerHTML = lsRecipes.map((recipe) => {\n        return `\n            <a href=\"\" class=\"recipeText\">\n                ${recipe.recipeText}\n            </a>\n            `\n    });\n        \n//ADD AN EVENT LISTENER to set window.location.hash\n\n    recipes.addEventListener(\"click\", (e)=>{\n        let text = e.target.innerText;\n        window.location.hash = text.trim();\n    })\n}\n\nrecipeList.addEventListener(\"click\", addRecipe)\n\n//---------------------------------------------------------------------//\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;