const GifApiUtil = require('./gif_api_util');

// Install event listeners
const setEventListeners = () => {
  $('#new-gif-form').on('submit', e => {
    e.preventDefault();
    // Fetch a new GIF
    fetchNewGif();
  });

  $('#save-gif-form').on('submit', e => {
    e.preventDefault();
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
    clearGif()
  });
};

$(setEventListeners);
// setEventListeners will run after the dom is fully loaded
// it adds all of our event listeners after we're sure the elements are on the page


// ------------- GIF event handlers - fetchNew, save, fetchSaved, and clear ---------------

const fetchNewGif = () => {
  // Initiate AJAX call to GIPHY API, take response and put on the DOM
  GifApiUtil.newGifAJAX()
  .then(res => {
    console.log(res);
    appendGif(res.data.images.fixed_height_downsampled.url);
  })
};

const saveGif = e => {
  const $input = $('#save-gif-title');
  const title = $input.val();
  $input.val('');

  const url = $('.gif-display').data('url') // we set this inside appendGif function

  const gifArg = {
    title: title,
    url: url
  }

  const $messages = $('.messages');
  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful

  const success = (res) => {
    $messages.text('you did it')
    console.log("saved gif, good job")
    setTimeout(() => $messages.empty(), 5000);
  }
  
  const failure = (err) => {
    $messages.text(err.responseJSON[0])
    console.log("did not save, bad job >:(")
    setTimeout(() => $messages.empty(), 5000);

  }
  
  GifApiUtil.saveGifAJAX(gifArg)
  .then(success, failure);
};

const fetchSavedGif = () => {
  const $input = $('#old-gif-query');
  const title = $input.val();
  $input.val('');

  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful
  GifApiUtil.fetchSavedGifAJAX(title)
  .then( res => {
    appendGif(res.url);
  }, errors => {
    console.log('gif not found :(');
  })
};

const clearGif = () => {
  const $gifDisplay = $(".gif-display");
  $gifDisplay.empty();
  return $gifDisplay;
};


// ------------- Other helper functions ---------------

const appendGif = newGifURL => {
  // Add gif to the display and keep track of its url
  const $gifDisplay = $('.gif-display');
  $gifDisplay.empty();

  const $newImage = $(`<img class="gif" src="${newGifURL}">`);
  $gifDisplay.data("url", newGifURL);
  $gifDisplay.append($newImage);
};
