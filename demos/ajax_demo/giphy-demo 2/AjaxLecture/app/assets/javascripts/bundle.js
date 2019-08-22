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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GifApiUtil = __webpack_require__(1);

var setEventHandlers = function setEventHandlers() {
  $('.clear').on('click', function () {
    // Clear out GIF display
    var $gifDisplay = $('.gif-display');
    $gifDisplay.empty();
  });

  $('#new-gif-form').on('submit', function (e) {
    e.preventDefault();
    // Fetch a new GIF
    fetchNewGif();
  });

  $('#save-gif-form').on('submit', function (e) {
    e.preventDefault();
    saveGif();
    // Save GIF
  });

  $('#old-gif-form').on('submit', function (e) {
    e.preventDefault();
    fetchSavedGif();
    // Fetch saved GIF
  });
};

$(setEventHandlers);

// setEventHandlers will run after the dom is fully loaded
// it adds all of our event handlers after we're sure the elements are on the page

// ------------- GIF ACTIONS - fetchNew, save, and fetchSaved ---------------

var fetchNewGif = function fetchNewGif() {
  // Initiate AJAX call to GIPHY API, take response and put on the DOM
  GifApiUtil.newGifAJAX() //this returns a promise like object
  .then(function (res) {
    // debugger;
    var url = res.data.image_url;
    appendGif(url);
  }); //res will be the data we get back
};

var saveGif = function saveGif(e) {
  var $input = $('#save-gif-title'); //grabbing a node from html 
  var title = $input.val(); //grabbing the title from node
  $input.val('');

  var gif = {
    title: title,
    url: $(".gif-display").data("url")
  };

  var $messages = $(".messages");

  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful

  var success = function success(response) {
    $messages.text("good job! :) ");
    setTimeout(function () {
      return $messages.empty();
    }, 5000);
  };

  var failure = function failure(errors) {
    $messages.text(errors.responseJSON[0]);
    setTimeout(function () {
      return $messages.empty();
    }, 5000);
  };

  GifApiUtil.saveGifAJAX(gif).then(success, failure);
};

var fetchSavedGif = function fetchSavedGif() {
  var $input = $('#old-gif-query');
  var title = $input.val();
  $input.val('');

  GifApiUtil.fetchSavedGifAJAX(title).then(function (response) {
    appendGif(response.url);
  }, function (errors) {
    console.log("gif not found! :(");
  });

  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful
};

var appendGif = function appendGif(newGifURL) {
  // Add gif to the display and keep track of its url
  var $gifDisplay = $('.gif-display');
  $gifDisplay.empty();

  var $newImage = $('<img class="gif" src="' + newGifURL + '">');
  $gifDisplay.data("url", newGifURL);
  $gifDisplay.append($newImage);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GifApiUtil = {
  newGifAJAX: function newGifAJAX() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    // go to the url ad GET some random gif
    return $.ajax({
      method: 'GET',
      url: "https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&tag=disney"
    });
  },
  saveGifAJAX: function saveGifAJAX(gifArg) {
    return $.ajax({
      method: "POST",
      url: "/gifs",
      data: {
        gif: gifArg
      },
      dataType: "JSON"
    });
  },
  fetchSavedGifAJAX: function fetchSavedGifAJAX(titleArg) {
    return $.ajax({
      method: "GET",
      url: "/gifs/" + titleArg,
      dataType: "JSON"
    });
  }
};

module.exports = GifApiUtil;

//pretty much like the one from asteroids

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map