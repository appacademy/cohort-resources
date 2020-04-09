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

// Ready style function: Waits for DOM to load before running callback
// Same thing as document.addEventListener('DOMContentLoaded', cb)
$(setEventHandlers);

// setEventHandlers will run after the dom is fully loaded
// it adds all of our event handlers after we're sure the elements are on the page

// ------------- GIF ACTIONS - fetchNew, save, and fetchSaved ---------------

const fetchNewGif = () => {
  // Initiate AJAX call to GIPHY API, take response and put on the DOM
  GifApiUtil.newGifAJAX() // this function returns a promise
    .then(res => {
      const url = res.data.image_url;
      appendGif(url);
    });
};

const saveGif = e => {
  // get title of gif
  const $input = $('#save-gif-title');
  const title = $input.val();
  $input.val('');

  // get url of gif
  const $gifDisplay = $('.gif-display');
  const url = $gifDisplay.data('url');

  // make gif obj
  // const gif = {
  //   title: title,
  //   url: url
  // };
  const gif = { title, url }; // same as lines 57-60

  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful
  GifApiUtil.saveGifAJAX(gif)
    .then(res => {
      let $messages = $('.messages');
      $messages.text('WE DID IT');
      setTimeout(() => {
        $messages.text('')
      }, 3000)
    })
};

const fetchSavedGif = () => {
  const $input = $('#old-gif-query');
  const title = $input.val();
  $input.val('');

  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful
  GifApiUtil.fetchSavedGifAJAX(title)
    .then(res => appendGif(res.url), err => {
      const errors = err.responseJSON;
      let $messages = $('.messages');
      errors.forEach(message => {
        $messages.append(message);
      })
      setTimeout(() => {
        $messages.text('')
      }, 3000)
    })
    // .fail(err => {
    //   const errors = err.responseJSON;
    //   let $messages = $('.messages');
    //   errors.forEach(message => {
    //     $messages.append(message);
    //   })
    //   setTimeout(() => {
    //     $messages.text('')
    //   }, 3000)
    // })
};

const clearGif = () => {
  const $gifDisplay = $('.gif-display');
  $gifDisplay.empty();
  return $gifDisplay;
}

const appendGif = newGifURL => {
  // Add gif to the display and keep track of its url
  let $gifDisplay = clearGif();

  const $newImage = $(`<img class="gif" src="${newGifURL}">`);
  $gifDisplay.data("url", newGifURL); //set data attr on gif display
  $gifDisplay.append($newImage);
};