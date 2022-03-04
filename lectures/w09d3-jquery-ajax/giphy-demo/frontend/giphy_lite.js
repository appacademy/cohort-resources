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
    clearGif();
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
      const url = res.data.images.preview_gif.url
      appendGif(url)
    })
};

const saveGif = e => {
  const $input = $('#save-gif-title');
  const title = $input.val();
  $input.val('');

  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful

  // Create Gif arg to be passed through
  const gif = {
    title: title,
    url: $('.gif-display').data('url')
  }

  // Grabbing h2 on root.html.erb
  const $messages = $('.messages')

  // Create success callback
  const success = (response) => {
    $messages.text('Gif was saved!')
    setTimeout(() => $messages.empty(), 5000)
  }

  // Create failure callback
  const failure = (errors) => {
    $messages.text(errors.responseJSON[0])
    setTimeout(() => $messages.empty(), 5000)
  }

  // Make API request
  GifApiUtil.saveGifAJAX(gif)
    .then(success, failure)
};

const fetchSavedGif = () => {
  const $input = $('#old-gif-query');
  const title = $input.val();
  $input.val('');
  // Banana Shooter
  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful

  GifApiUtil.fetchSavedGifAJAX(title)
    .then(
      (response) => {
        appendGif(response.url)
      },
      (errors) => {
        console.log('Gif Not Found!')
      }
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
  const $gifDisplay = $('.gif-display');
  $gifDisplay.empty();

  const $newImage = $(`<img class="gif" src="${newGifURL}">`);
  $gifDisplay.data("url", newGifURL);
  $gifDisplay.append($newImage);
};
