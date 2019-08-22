const GifApiUtil = require('./gif_api_util');

const setEventHandlers = () => {
  $('.clear').on('click', () => {
    // Clear out GIF display
  });

  $('#new-gif-form').on('submit', e => {
    e.preventDefault();
    // Fetch a new GIF
    fetchNewGif();
  });

  $('#save-gif-form').on('submit', e => {
    e.preventDefault();
    // Save GIF
  });

  $('#old-gif-form').on('submit', e => {
    e.preventDefault();
    // Fetch saved GIF
  });
};

$(setEventHandlers);

// setEventHandlers will run after the dom is fully loaded
// it adds all of our event handlers after we're sure the elements are on the page

// ------------- GIF ACTIONS - fetchNew, save, and fetchSaved ---------------

const fetchNewGif = () => {
  // Initiate AJAX call to GIPHY API, take response and put on the DOM
  GifApiUtil.newGifAJAX()
    .then(res => {
      // debugger;
      const url = res.data.image_url;
      appendGif(url);
    });
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

const appendGif = newGifURL => {
  // Add gif to the display and keep track of its url
  const $gifDisplay = $('.gif-display');
  $gifDisplay.empty();

  const $newImage = $(`<img class="gif" src="${newGifURL}">`);
  $gifDisplay.data("url", newGifURL);
  $gifDisplay.append($newImage);
};