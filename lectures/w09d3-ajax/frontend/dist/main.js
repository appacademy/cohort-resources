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

eval("console.log('webpack is working');\n\nconst giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=g&tag=spongebob';\n\nconst gifDisplay = document.querySelector('.gif-display');\nconst newGifForm = document.querySelector('#new-gif-form');\nconst saveGifForm = document.querySelector('#save-gif-form');\nconst gifTitle = document.querySelector('#save-gif-title');\nconst clearGifButton = document.querySelector('.clear');\n\nlet currentGif = null;\n\nasync function fetchNewGif() {\n  try {\n    const res = await fetch(giphyUrl);\n    if (res.ok) {\n      const body = await res.json();\n      const url = body.data.images.fixed_height.url;\n      currentGif = url;\n      renderNewGif(currentGif);\n    } else {\n      throw res;\n    }\n  } catch(err) {\n    console.log(err);\n  }\n}\n\nasync function saveGif(gif) {\n  // gif should be an object with `title` and `url` attributes\n  const res = await fetch('http://localhost:5000/api/gifs', {\n    method: 'POST',\n    body: JSON.stringify(gif),\n    headers: {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json'\n    }\n  })\n}\n\nfunction renderNewGif(url) {\n  const newGif = document.createElement('img');\n  newGif.src = url;\n  clearGif();\n  gifDisplay.appendChild(newGif);\n}\n\nfunction clearGif() {\n  for (child of gifDisplay.children) {\n    currentGif = null;\n    child.remove();\n  }\n}\n\nnewGifForm.addEventListener('submit', e => {\n  e.preventDefault();\n  fetchNewGif();\n});\n\nclearGifButton.addEventListener('click', e => {\n  e.preventDefault();\n  clearGif();\n});\n\nsaveGifForm.addEventListener('submit', e => {\n  e.preventDefault();\n  saveGif({ title: gifTitle.value, url: currentGif });\n  gifTitle.value = '';\n})\n\n//# sourceURL=webpack://frontend/./src/index.js?");

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