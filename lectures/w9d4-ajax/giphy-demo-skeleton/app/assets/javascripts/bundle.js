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

// Install event listeners
var setEventListeners = function setEventListeners() {
  $('#new-gif-form').on('submit', function (e) {
    e.preventDefault(); // prevents default form submission action
    // Fetch a new GIF
    fetchNewGif();
  });

  $('#save-gif-form').on('submit', function (e) {
    e.preventDefault(); // pretty much always on form submits
    // Save GIF
    saveGif();
  });

  $('#old-gif-form').on('submit', function (e) {
    e.preventDefault();
    // Fetch saved GIF
    fetchSavedGif();
  });

  $(".clear").on("click", function () {
    // Clear out GIF display
    clearGif();
  });
};

// it will be invoked for us when the page loads
$(setEventListeners); // sets event listener on DOMContentLoaded
// document.addEventListener('DOMContentLoaded', setEventListeners);
// setEventListeners will run after the dom is fully loaded
// it adds all of our event listeners after we're sure the elements are on the page


// ------------- GIF event handlers - fetchNew, save, fetchSaved, and clear ---------------

var fetchNewGif = function fetchNewGif() {
  // Initiate AJAX call to GIPHY API, take response and put on the DOM
  GifApiUtil.newGifAJAX().then(function (response) {
    var url = response.data.image_url;
    appendGif(url);
  });
};

var saveGif = function saveGif(e) {
  var $input = $('#save-gif-title'); // select this element
  var title = $input.val(); // extract the input's value 
  $input.val(''); // clear the input

  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful
  var url = $('.gif-display').data('url');
  var gifArg = { title: title, url: url };
  var $messages = $('.messages');

  var successCallback = function successCallback() {
    // show a message telling the user that their save was successful
    $messages.text('THE SAVE WAS SUCCESSFUL. YOU HAVE DONE IT.');
    setTimeout(function () {
      return $messages.empty();
    }, 5000);
  };

  var failureCallback = function failureCallback(err) {
    $messages.text(err.responseJSON[0]);
    setTimeout(function () {
      return $messages.empty();
    }, 5000);
  };

  GifApiUtil.saveGifAJAX(gifArg).then(successCallback).fail(failureCallback); // .catch if not using jQuery $.ajax method
};

var fetchSavedGif = function fetchSavedGif() {
  var $input = $('#old-gif-query');
  var title = $input.val();
  $input.val('');

  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful
  GifApiUtil.fetchSavedGifAJAX(title).then(function (res) {
    return appendGif(res.url);
  }, // success
  function (err) {
    console.log(err.responseJSON[0]);
  } // failure
  );
};

var clearGif = function clearGif() {
  var $gifDisplay = $(".gif-display");
  $gifDisplay.empty();
  return $gifDisplay;
};

// ------------- Other helper functions ---------------

var appendGif = function appendGif(newGifURL) {
  // Add gif to the display and keep track of its url
  var $gifDisplay = $('.gif-display'); // grab this div
  $gifDisplay.empty(); // clear its content

  var $newImage = $('<img class="gif" src="' + newGifURL + '">'); // create a new image element
  $gifDisplay.data("url", newGifURL); // puts the url in the data 
  $gifDisplay.append($newImage); // attach the new image to the display
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GifApiUtil = {
  newGifAJAX: function newGifAJAX() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G' // family friendly
    });
  },
  saveGifAJAX: function saveGifAJAX(gifArg) {
    // gifArg === a gif object
    // { title: 'something', url: 'a_url.com' }
    // data looks like this
    // { gif: { title: 'something', url: 'a_url.com' } }
    // matches your strong params from controller

    return $.ajax({
      method: 'POST', // dont need caps
      url: '/gifs',
      dataType: 'json',
      data: {
        gif: gifArg
      }
    });
  },
  fetchSavedGifAJAX: function fetchSavedGifAJAX(titleArg) {
    return $.ajax({
      method: 'GET',
      url: '/gifs/' + titleArg,
      dataType: 'json'
    });
  }
};

module.exports = GifApiUtil;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map