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

eval("\n\n//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)\nlet groceries = document.querySelector(\".groceries\") //UL in the middle\nlet recipeList = document.querySelector(\".recipe-list\") // UL at the bottom\nlet groceryForm = document.querySelector(\".grocery-form\") // FORM\nlet recipes = document.querySelector(\".recipes\") // H3 on top\n\n// const exmapleArray = [\"val1\", \"val2\"]\n// localStorage.setItem(\"keyName\", valueDesire) how to set localStorage key\n// localStorage.setItem(\"storageArray\", exmapleArray)\n\n//create variables to hold localStorage things\nconst lsItems = JSON.parse(localStorage.getItem('items')) || [];\nconst lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];\n\n//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//\n//create event handler that adds to our grocery list\n\nconst addItem = (e) => {\n    e.preventDefault()\n    let input = document.querySelector(\"input[name='add-grocery']\")\n    let value = input.value\n\n    const item = {value: value} // item = {value: \"potato\"}\n    lsItems.push(item)\n    localStorage.setItem(\"item\", JSON.stringify(lsItems))\n\n    updateList();\n    groceryForm.reset()\n}   \n\n//create event handler to cross out list items on click\nconst markAsDone = (e) => {\n    e.preventDefault()\n    e.stopPropagation()\n    let ele = e.target\n    console.log(\"HIT\")\n    ele.classList.toggle('done')\n}\n\n//create action to render grocery list items\nconst updateList = () => {\n\n    // method 1: using string html element\n    // groceries.innerHTML = lsItems.map(item => {\n    //     return `<li>${item.value}</li>`\n    // }) \n\n    // method 2: using document.createElement\n    if(!groceries.hasChildNodes()){\n        lsItems.map(item => {\n            let li = document.createElement(\"li\")\n            li.innerHTML = item.value\n            groceries.appendChild(li)\n        })\n    } else {\n        let li = document.createElement(\"li\")\n        li.innerHTML = lsItems[lsItems.length - 1].value\n        groceries.appendChild(li)\n    }\n\n\n}\n\n// document.addEventListener(\"DOMContentLoaded\", updateList)\n\n\n\n\n\n\n//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//\n\n//create event handler that adds to our recipes list\n// const addRecipe = (e) => {\n\n//     let recipeText = e.target.innerText;\n\n//     lsRecipes.push({ recipeText });\n//     localStorage.setItem(\"recipes\", JSON.stringify(lsRecipes))\n\n//     updateWeeklyRecipe();\n// }\n\n//create action to render our recipes list\nconst updateWeeklyRecipe = () => {\n\n    recipes.innerHTML = lsRecipes.map((recipe) => {\n        return `\n            <a href=\"\" class=\"recipeText\">\n                ${recipe.recipeText}\n            </a>\n            `\n    });\n        \n//ADD AN EVENT LISTENER to set window.location.hash\n\n}\n\n//---------------------------------------------------------------------//\n\nupdateList()\n//add event listener to on submit for form to process add item\ngroceryForm.addEventListener(\"submit\", addItem)\n\ngroceries.addEventListener(\"click\", markAsDone)\n\n//add event listener to cross out a list item\n// let groc = document.querySelectorAll(\".groceries li\")\n// groc.forEach(child => {\n//     child.addEventListener(\"click\", markAsDone)\n// })\n\n// QUERYSELECTORALL SUCKS\n\n\n\n\n\n\n//add event listener to to add recipe\n\n//call our methods to populate DOM\n\n\n\n//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//\n\n// let groc = document.querySelectorAll(\".groceries li\") //select the li's\n// groc.forEach((child) => {\n//     child.addEventListener(\"click\", markAsDone);\n// })\nconst boo = (e) => {\n    alert(\"Boo from the groceries ul! You didn't expect this, did you?!\")\n}\n\n\nlet parent = document.querySelector(\".grocery-container\")\nparent.addEventListener(\"click\", boo); //parent\n\n//---------------------------------------------------------------------//\n\n\n// localStorage.clear()\n\n//# sourceURL=webpack://vanilla-dom-skeleton/./src/index.js?");

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