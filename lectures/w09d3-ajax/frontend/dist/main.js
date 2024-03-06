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

eval("console.log('webpack is working');\n\nconst giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=g&tag=cat';\nlet currentGif = null;\n\n// querySelectors\nconst fetchNewGifForm = document.querySelector('#new-gif-form');\nconst saveGifForm = document.querySelector('#save-gif-form');\nconst loadGifForm = document.querySelector('#load-gif-form');\nconst gifDisplay = document.querySelector('.gif-display');\nconst clearButton = document.querySelector('.clear');\n\n// fetchNewGif\n\n// function fetchNewGif() {\n//   return fetch(giphyUrl)\n//     .then(res => {\n//       if (res.ok) {\n//         return res.json();\n//       } else {\n//         throw res;\n//       }\n//     })\n//     .then(gifInfo => {\n//       const newGif = document.createElement('img');\n//       newGif.src = gifInfo.data.images.original.url;\n//       gifDisplay.appendChild(newGif);\n//     })\n//     .catch(err => console.error(err));\n// };\n\nasync function fetchNewGif() {\n  try {\n    const res = await fetch(giphyUrl);\n    if (res.ok) {\n      const gifInfo = await res.json();\n      renderNewGif(gifInfo.data.images.original.url);\n    } else {\n      throw res;\n    }\n  } catch (err) {\n    console.error(err);\n  }\n};\n\n// clearGif\n\nfunction clearGif() {\n  currentGif = null;\n  for (let child of gifDisplay.children) {\n    child.remove();\n  }\n};\n\n// renderNewGif\n\nfunction renderNewGif(url) {\n  const newGif = document.createElement('img');\n  newGif.src = url;\n  clearGif();\n  currentGif = url;\n  gifDisplay.appendChild(newGif);\n};\n\n// saveGif\n\nfunction postGif(gifObject) { // gifObject is something like { title: ???, url: ??? }\n  return fetch('http://localhost:3000/api/gifs', {\n    method: 'POST',\n    body: JSON.stringify(gifObject),\n    headers: {\n      \"Content-Type\": \"application/json\",\n      \"Accept\": \"application/json\"\n    }\n  }).then(res => {\n    if (res.ok) {\n      alert('GIF successfully saved');\n    } else {\n      console.error('something went wrong');\n    }\n  });\n};\n\nwindow.postGif = postGif;\n\n// eventListeners\nfetchNewGifForm.addEventListener('submit', e => {\n  e.preventDefault();\n  fetchNewGif();\n});\n\nclearButton.addEventListener('click', clearGif);\n\n//# sourceURL=webpack://frontend/./src/index.js?");

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