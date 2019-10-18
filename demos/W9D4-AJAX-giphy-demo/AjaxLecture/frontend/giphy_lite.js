const GifApiUtil = require('./gif_api_util');

const setEventHandlers = () => {
  $('.clear').on('click', () => {
    // Clear out GIF display
    clearGif();
  });

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
};

$(setEventHandlers);  // ready style jQuery

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
  const title = $input.val();   // "infinity"
  $input.val('');

  const $gifDisplay = $('.gif-display');
  const url = $gifDisplay.data('url');   // getter
  const gif = { title, url };            // our gif object

  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful
  GifApiUtil.saveGifAJAX(gif)
    .then( res => alert("Successfully saved gif!"))
    .fail( res => alert("Failed to saved gif!"))
};

const fetchSavedGif = () => {
  const $input = $('#old-gif-query');
  const title = $input.val();
  $input.val('');

  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful
  GifApiUtil.fetchSavedGifAJAX(title)
    .then( res => {
      const url = res.url;
      appendGif(url);
    })
    .fail( error => alert(error.responseJSON[0]) );
};

const appendGif = newGifURL => {
  // Add gif to the display and keep track of its url
  const $gifDisplay = $('.gif-display');
  $gifDisplay.empty();

  const $newImage = $(`<img class="gif" src="${newGifURL}">`);
  $gifDisplay.data("url", newGifURL);
  $gifDisplay.append($newImage);
};

const clearGif = () => {
  const $gifDisplay = $('.gif-display');
  $gifDisplay.empty();
};