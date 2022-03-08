/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/gif_api_util.js":
/*!**********************************!*\
  !*** ./frontend/gif_api_util.js ***!
  \**********************************/
/***/ ((module) => {



var GifApiUtil = {
  newGifAJAX: function newGifAJAX() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=G&tag=banana'
    });
  },
  saveGifAJAX: function saveGifAJAX(gifArg) {
    //expect gifArg to have keys of title and url
    return $.ajax({
      url: "/gifs", //Matching our rails routes
      method: "POST",
      data: {
        gif: gifArg
      },
      dataType: 'JSON'
    });
  },
  fetchSavedGifAJAX: function fetchSavedGifAJAX(titleArg) {
    return $.ajax({
      url: '/gifs/' + titleArg, //Matching our custom rails route
      method: 'GET',
      dataType: 'JSON'
    });
  }
};

module.exports = GifApiUtil;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./frontend/giphy_lite.js ***!
  \********************************/


var GifApiUtil = __webpack_require__(/*! ./gif_api_util */ "./frontend/gif_api_util.js");

// Install event listeners
var setEventListeners = function setEventListeners() {
  $('#new-gif-form').on('submit', function (e) {
    e.preventDefault();
    // Fetch a new GIF
    fetchNewGif();
  });

  $('#save-gif-form').on('submit', function (e) {
    e.preventDefault();
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

$(setEventListeners);
// setEventListeners will run after the dom is fully loaded
// it adds all of our event listeners after we're sure the elements are on the page


// ------------- GIF event handlers - fetchNew, save, fetchSaved, and clear ---------------

var fetchNewGif = function fetchNewGif() {
  // Initiate AJAX call to GIPHY API, take response and put on the DOM
  GifApiUtil.newGifAJAX().then(function (res) {
    var url = res.data.images.preview_gif.url;
    appendGif(url);
  });
};

var saveGif = function saveGif(e) {
  var $input = $('#save-gif-title');
  var title = $input.val();
  $input.val('');

  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful

  // Create Gif arg to be passed through
  var gif = {
    title: title,
    url: $('.gif-display').data('url')

    // Grabbing h2 on root.html.erb
  };var $messages = $('.messages');

  // Create success callback
  var success = function success(response) {
    $messages.text('Gif was saved!');
    setTimeout(function () {
      return $messages.empty();
    }, 5000);
  };

  // Create failure callback
  var failure = function failure(errors) {
    $messages.text(errors.responseJSON[0]);
    setTimeout(function () {
      return $messages.empty();
    }, 5000);
  };

  // Make API request
  GifApiUtil.saveGifAJAX(gif).then(success, failure);
};

var fetchSavedGif = function fetchSavedGif() {
  var $input = $('#old-gif-query');
  var title = $input.val();
  $input.val('');
  // Banana Shooter
  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful

  GifApiUtil.fetchSavedGifAJAX(title).then(function (response) {
    appendGif(response.url);
  }, function (errors) {
    console.log('Gif Not Found!');
  });
};

var clearGif = function clearGif() {
  var $gifDisplay = $(".gif-display");
  $gifDisplay.empty();
  return $gifDisplay;
};

// ------------- Other helper functions ---------------

var appendGif = function appendGif(newGifURL) {
  // Add gif to the display and keep track of its url
  var $gifDisplay = $('.gif-display');
  $gifDisplay.empty();

  var $newImage = $('<img class="gif" src="' + newGifURL + '">');
  $gifDisplay.data("url", newGifURL);
  $gifDisplay.append($newImage);
};
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map