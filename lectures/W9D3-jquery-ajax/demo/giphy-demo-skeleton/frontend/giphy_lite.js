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
  // Initiate AJAX call to GIPHY API, 
  // take response and put on the DOM
  GifApiUtil.newGifAJAX()
    .then(res => {
      // console.log(res);
      const url = res.data.image_url;
      appendGif(url);
    })
};

const saveGif = e => {
  const $input = $('#save-gif-title');
  const title = $input.val();
  $input.val('');

  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful
  const success = res => {
    $('.messages').empty();
    $('.messages').text('You did it!');
  };

  const failure = err => {
    // you should look at the err object to see what you have in it
    $('.messages').empty();
    $('.messages').text(err.responseJSON[0]);
  };

  GifApiUtil.saveGifAJAX({
    title: title,
    url: $('.gif-display').data('url') // access data stored on the gif display
  })
    .then(success, failure) // runs success callback on response status code 200
    // runs fail callback on response status code not 200 (usually some 400)
};

const fetchSavedGif = () => {
  const $input = $('#old-gif-query');
  const title = $input.val();
  $input.val('');

  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful
  GifApiUtil.fetchSavedGifAJAX(title)
    .then(
      res => appendGif(res.url), // success
      err => console.log("Gif not found") // failure
    );
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
  // store 'data' on the object
  $gifDisplay.data("url", newGifURL);
  $gifDisplay.append($newImage);
};
