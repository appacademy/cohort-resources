const GifApiUtil = require('./gif_api_util');

// Install event listeners
const setEventListeners = () => {
  $('#new-gif-form').on('submit', e => {
    e.preventDefault(); // prevents default form submission action
    // Fetch a new GIF
    fetchNewGif();
  });

  $('#save-gif-form').on('submit', e => {
    e.preventDefault(); // pretty much always on form submits
    // Save GIF
    saveGif();
  });

  $('#old-gif-form').on('submit', e => {
    e.preventDefault();
    // Fetch saved GIF
    fetchSavedGif(); 
  });

  $(".clear").on("click", () => {
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

const fetchNewGif = () => {
  // Initiate AJAX call to GIPHY API, take response and put on the DOM
  GifApiUtil.newGifAJAX()
    .then((response) => { 
      const url = response.data.image_url;
      appendGif(url);
    })
};

const saveGif = e => {
  const $input = $('#save-gif-title'); // select this element
  const title = $input.val(); // extract the input's value 
  $input.val(''); // clear the input

  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful
  const url = $('.gif-display').data('url'); 
  const gifArg = { title: title, url: url };
  const $messages = $('.messages');

  const successCallback = () => {
    // show a message telling the user that their save was successful
    $messages.text('THE SAVE WAS SUCCESSFUL. YOU HAVE DONE IT.');
    setTimeout(() => $messages.empty(), 5000);
  };

  const failureCallback = (err) => {
    $messages.text(err.responseJSON[0]);
    setTimeout(() => $messages.empty(), 5000);
  }

  GifApiUtil.saveGifAJAX(gifArg)
    .then(successCallback)
    .fail(failureCallback); // .catch if not using jQuery $.ajax method
};

const fetchSavedGif = () => {
  const $input = $('#old-gif-query');
  const title = $input.val();
  $input.val('');

  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful
  GifApiUtil.fetchSavedGifAJAX(title)
    .then(
      (res) => appendGif(res.url), // success
      (err) => { console.log(err.responseJSON[0]) } // failure
    )
};

const clearGif = () => {
  const $gifDisplay = $(".gif-display");
  $gifDisplay.empty();
  return $gifDisplay;
};


// ------------- Other helper functions ---------------

const appendGif = newGifURL => {
  // Add gif to the display and keep track of its url
  const $gifDisplay = $('.gif-display'); // grab this div
  $gifDisplay.empty(); // clear its content

  const $newImage = $(`<img class="gif" src="${newGifURL}">`); // create a new image element
  $gifDisplay.data("url", newGifURL); // puts the url in the data 
  $gifDisplay.append($newImage); // attach the new image to the display
};
