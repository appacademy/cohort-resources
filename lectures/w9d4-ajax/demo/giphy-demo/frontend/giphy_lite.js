const GifApiUtil = require('./gif_api_util');

// Install event listeners
const setEventListeners = () => {
  $('#new-gif-form').on('submit', e => {
    e.preventDefault();
    // Fetch a new GIF
    fetchNewGif()
  });

  $('#save-gif-form').on('submit', e => {
    e.preventDefault();
    // Save GIF
    saveGif()
  });

  $('#old-gif-form').on('submit', e => {
    e.preventDefault();
    // Fetch saved GIF
    fetchSavedGif();
  });

  $(".clear").on("click", () => {
    // Clear out GIF display

  });
};

$(setEventListeners);
// setEventListeners will run after the dom is fully loaded
// it adds all of our event listeners after we're sure the elements are on the page


// ------------- GIF event handlers - fetchNew, save, fetchSaved, and clear ---------------

const fetchNewGif = () => {
  // Initiate AJAX call to GIPHY API, take response and put on the DOM
  debugger
  GifApiUtil.newGifAJAX()
    .then( res => {
      const url = res.data.image_url;
      appendGif(url);
    })
};

const saveGif = e => {
  const $input = $('#save-gif-title');
  const title = $input.val();
  $input.val('');
  debugger
  const gif = {
    title: title,
    url: $('.gif-display').data('url')
  };

  const $messages = $('.messages');
  const success = (response) => {
    debugger
    $messages.text('YAYYYYYYY!!¡');
    setTimeout(() => $messages.empty(), 5000);
  };
  const failure = errors => {
    debugger
    $messages.text(errors.responseJSON[0]);
    setTimeout(() => $messages.empty(), 5000);
  };
  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful
  GifApiUtil.saveGifAJAX(gif)
    .then(success)
    .fail(failure)
};

const fetchSavedGif = () => {
  const $input = $('#old-gif-query');
  const title = $input.val();
  $input.val('');

  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful
  GifApiUtil.fetchSavedGifAJAX(title)
    .then( response => {
      debugger
      appendGif(response.url);
    })
    .fail( errors => console.log('Gif Not Found, Friend'))
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
