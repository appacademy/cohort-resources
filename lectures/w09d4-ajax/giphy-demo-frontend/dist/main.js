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

eval("// Query Document\nconst newGifForm = document.querySelector('#new-gif-form');\nconst gifDisplay = document.querySelector('.gif-display');\nconst clearGifButton = document.querySelector('.clear');\nconst saveGifForm = document.querySelector('#save-gif-form');\nconst saveGifTitle = document.querySelector('#save-gif-title');\n\nlet currentGif;\n\nconst clearGif = () => {\n  gifDisplay.childNodes.forEach(child => child.remove());\n  currentGif = null;\n};\n\nconst renderNewGif = url => {\n  clearGif();\n  currentGif = url;\n  const newGif = document.createElement('img');\n  newGif.src = url;\n  gifDisplay.appendChild(newGif);\n};\n\nconst fetchNewGif = async () => {\n  const url = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=g&tag=salmon';\n  try {\n    const res = await fetch(url, {\n      headers: {\n        'Accept': 'application/json'\n      }\n    });\n    let gifData;\n    if (res.ok) {\n      gifData = await res.json();\n      renderNewGif(gifData.data.images.fixed_height.url);\n    } else {\n      throw res;\n    }\n  } catch (err) {\n    console.error(err);\n  }\n}\n\n// gif parameter should be { title: '', url: '' }\nconst saveNewGif = () => {\n  const gif = { title: saveGifTitle.value, url: currentGif };\n\n  return fetch('http://localhost:3000/api/gifs', {\n    method: 'POST',\n    body: JSON.stringify(gif),\n    headers: {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json'\n    }\n  })\n};\n\n// Add Event Listeners\nnewGifForm.addEventListener('submit', e => {\n  e.preventDefault();\n  fetchNewGif();\n});\n\nclearGifButton.addEventListener('click', clearGif);\n\nsaveGifForm.addEventListener('submit', e => {\n  e.preventDefault();\n  saveNewGif();\n});\n\n//# sourceURL=webpack://giphy-demo-frontend/./src/index.js?");

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