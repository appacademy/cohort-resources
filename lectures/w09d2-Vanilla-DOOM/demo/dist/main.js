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

eval("// grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)\nconst groceries = document.querySelector('.groceries')\nconst groceryForm = document.querySelector('.grocery-form')\nconst recipeList = document.querySelector(\".recipe-list\")\nconst recipes = document.querySelector(\".recipes\")\n\n// store and grab items in local storage \nconst lsItems = JSON.parse(localStorage.getItem(\"items\")) || [];\nconst lsRecipes = JSON.parse(localStorage.getItem(\"recipes\")) || [];\n\n\n//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//\n//create event handler that adds to our grocery list\nconst addItem = (e) => {\n    e.preventDefault()\n\n    \n    let input = document.querySelector(\"input[name='add-grocery']\");\n    let value = input.value;\n\n    // let item = document.createElement(\"li\");\n    // item.innerText = value;\n    // groceries.appendChild(item);\n\n    // input.value = \"\"\n\n    const item = { value: value } // { value: lettuce }\n\n    // store in localStorage\n    lsItems.push(item);\n    localStorage.setItem(\"items\", JSON.stringify(lsItems));\n\n    // create a function to add grocery item\n    updateList();\n\n    // clear input of the user\n    groceryForm.reset()\n\n}\n\nconst updateList = () => {\n\n    // method 1: using string html element\n    // groceries.innerHTML = lsItems.map(item => {\n    //     return `<li>${item.value}</li>`\n    // });\n\n    // method 2: using document.createElement\n    if (!groceries.hasChildNodes()) {\n        lsItems.map((item) => {\n            let li = document.createElement('li'); // <li> </li>\n            li.innerText = item.value; // <li> lettuce </li>\n            groceries.appendChild(li) // \n        })\n    } else { // <li> lettuce </li> <li> milk </li>\n        let li = document.createElement('li'); \n        li.innerText = lsItems[lsItems.length - 1].value;\n        groceries.appendChild(li)\n    }\n}\n\n//create event handler to cross out list items on click\nconst markAsDone = (e) => {\n    e.preventDefault();\n    e.stopPropagation();\n    let grocery = e.target // the li that i clicked on\n    grocery.classList.toggle(\"done\");\n}\n\n//---------------------------------------------------------------------//\n\n//add event listener to on submit for form to process add item\n// groceryForm.addEventListener(\"submit\", addItem);\n//add event listener to cross out a list item\n// groceries.addEventListener(\"click\", markAsDone);\n//add event listener to to add recipe\n\n// updateList();\n\n\nlet groc = document.querySelectorAll('.groceries li');\n\ngroc.forEach((child) => {\n    child.addEventListener(\"click\", markAsDone)\n});\n\nconst boo = () => {\n    alert('Boo from the groceries ul');\n};\n\ngroceries.addEventListener(\"click\", boo);\n\n// map methods to the window to test \n// const hello = () => {\n//     alert(\"hello\")\n// }\n\n// window.hello;\n\n\n// PART 2 - ANCHOR, LOCATION, HISTORY\n\n// const addRecipe = (e) => {\n//     e.preventDefault();\n//     let recipeText = e.target.innerText;\n\n//     lsRecipes.push( {recipeText} );\n//     localStorage.setItem(\"recipes\", JSON.stringify(lsRecipes));\n\n//     updateWeeklyRecipe()\n// }\n\n// const updateWeeklyRecipe = () => {\n//    lsRecipes.map((recipe) => {\n//     return `<a href=\"\" class=\"recipeText\">\n//     ${recipe.recipeText}\n//     </a>`\n//    })\n//    recipes.addEventListener('click', (e) => {\n//        let text = e.target.innerText;\n//        window.location.hash = text.trim();\n//    });\n// };\n\n\n\n// recipeList.addEventListener(\"click\", addRecipe);\n\n// updateList();\n// updateWeeklyRecipe();\n\n\n//create event handler that adds to our recipes list\nconst addRecipe = (e) => {\n\n    let recipeText = e.target.innerText;\n\n    lsRecipes.push({ recipeText });\n    localStorage.setItem(\"recipes\", JSON.stringify(lsRecipes))\n\n    updateWeeklyRecipe();\n}\n\n//create action to render our recipes list\nconst updateWeeklyRecipe = () => {\n\n    recipes.innerHTML = lsRecipes.map((recipe) => {\n        return `\n            <a href=\"\" class=\"recipeText\">\n                ${recipe.recipeText}\n            </a>\n            `\n    });\n        \n//ADD AN EVENT LISTENER to set window.location.hash\n    recipes.addEventListener('click', (e) => {\n        e.preventDefault();\n        \n        let text = e.target.innerText;\n        window.location.hash = text.trim() // trim remove empty spaces from either side of the text\n    })\n}\n\n//---------------------------------------------------------------------//\n\n//add event listener to on submit for form to process add item\ngroceryForm.addEventListener(\"submit\", addItem)\n//add event listener to cross out a list item\ngroceries.addEventListener(\"click\", markAsDone);\n//add event listener to to add recipe\nrecipeList.addEventListener(\"click\", addRecipe);\n\n//call our methods to populate DOM\nupdateList();\nupdateWeeklyRecipe();\n\n//# sourceURL=webpack://vanilla-dom-skeleton-copy/./src/index.js?");

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