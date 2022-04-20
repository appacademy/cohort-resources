const GifApiUtil = require('./gif_api_util');

// Install event listeners
const setEventListeners = () => {
  $('#new-gif-form').on('submit', e => {
    e.preventDefault();
    // Fetch a new GIF
    GifApiUtil.newGifAJAX()
      .then(res => {
        // debugger;
        const url = res.data.images.original.url;
        appendGif(url);
      })
  });

  $('#save-gif-form').on('submit', e => {
    e.preventDefault();
    // Save GIF
    const $messages = $('.messages');
    const $gif = $('.gif-display');
    const $input = $('#save-gif-title');
    const title = $input.val();
    const gifObject = {
      title: title,
      url: $gif.data('url')
    }
    GifApiUtil.saveGifAJAX(gifObject)
      .then(res => {
        $messages.text('You Did It!');
        setTimeout(() => $messages.empty(), 2000);
      },
      res => {
        $messages.text(res.responseJSON[0]);
        setTimeout(() => $messages.empty(), 2000);
      });

  });

  $('#old-gif-form').on('submit', e => {
    e.preventDefault();
    // Fetch saved GIF
    const $input = $('#old-gif-query');
    const gifTitle = $input.val();
    GifApiUtil.fetchSavedGifAJAX(gifTitle)
      .then(res => {
        $input.val('');
        appendGif(res.url);
      },
      err => {
        console.log(err.responseJSON[0]);
      });
  });

  $(".clear").on("click", () => {
    // Clear out GIF display
    clearGif();
  });
};

$(setEventListeners);
// setEventListeners will run after the dom is fully loaded
// it adds all of our event listeners after we're sure the elements are on the page


// ------------- GIF event handlers - fetchNew, save, fetchSaved, and clear ---------------

const fetchNewGif = () => {
  // Initiate AJAX call to GIPHY API, take response and put on the DOM

};

const saveGif = e => {
  const $input = $('#save-gif-title');
  const title = $input.val();
  $input.val('');

  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful

};

const fetchSavedGif = () => {
  const $input = $('#old-gif-query');
  const title = $input.val();
  $input.val('');

  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful

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
