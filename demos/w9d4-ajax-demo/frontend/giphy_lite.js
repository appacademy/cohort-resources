const GifApiUtil = require('./gif_api_util');

const setEventHandlers = () => {
  $('.clear').on('click', () => {
    // Clear out GIF display
    const $gifDisplay = $('.gif-display');
    $gifDisplay.empty();
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

$(setEventHandlers);

// setEventHandlers will run after the dom is fully loaded
// it adds all of our event handlers after we're sure the elements are on the page

// ------------- GIF ACTIONS - fetchNew, save, and fetchSaved ---------------

const fetchNewGif = () => {
  // Initiate AJAX call to GIPHY API, take response and put on the DOM
  GifApiUtil.newGifAJAX()
    .then(res => {
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
  const gif = {
    title: title,
    url: $('.gif-display').data('url')
  };

  const $messages = $('.messages');

  const success = () => {
    $messages.text('you go gurl');
    setTimeout(() => $messages.empty(), 4000)
  };

  const failure = (errors) => {
    // debugger
    $messages.text(errors.responseJSON);
    setTimeout(() => $messages.empty(), 4000);
  };

  GifApiUtil.saveGifAJAX(gif)
    .then(success, failure)
};

const fetchSavedGif = () => {
  const $input = $('#old-gif-query');
  const title = $input.val();
  $input.val('');

  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful
  const success = (response) => {
    appendGif(response.url);
  }

  const $messages = $('.messages');

  const failure = (errors) => {
    $messages.text(errors.responseJSON);
    setTimeout(() => $messages.empty(), 4000);
  }

  GifApiUtil.fetchSavedGifAJAX(title)
    .then(success, failure);
};

const appendGif = newGifURL => {
  // Add gif to the display and keep track of its url
  const $gifDisplay = $('.gif-display');
  $gifDisplay.empty();

  const $newImage = $(`<img class="gif" src="${newGifURL}">`);
  $gifDisplay.data("url", newGifURL);
  $gifDisplay.append($newImage);
};