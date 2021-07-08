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
    // console.log(res);
    const url = res.data.image_url;
    appendGif(url);
  })
};

const saveGif = e => {
  const $input = $('#save-gif-title'); // gets input element
  const title = $input.val(); // gets the value of the input
  $input.val(''); // clears the input

  const url = $('.gif-display').data('url')
  const gif = {
    title: title,
    url: url
  }

  const $messages = $('h2.messages');

  // const success = 

  const failure = (errors) => {
    $messages.text(errors.responseJSON[0]); // appending errors into the h2
    
    setTimeout(() => $messages.empty(), 5000); // empty h2 after 5 seconds

    console.log('errors: ',errors);
  }

  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful
  GifApiUtil.saveGifAJAX(gif)
  .then(success, failure)

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
  })
  .fail( errors => {
    console.log("gif not found");
  })

};

const clearGif = () => {
  const $gifDisplay = $(".gif-display");
  $gifDisplay.empty();
  // return $gifDisplay;
};


// ------------- Other helper functions ---------------

const appendGif = newGifURL => {
  // Add gif to the display and keep track of its url
  const $gifDisplay = $('.gif-display');
  $gifDisplay.empty(); // jQuery function to clear out child elements / text

  // create jquery object with the image tag with the gif url
  const $newImage = $(`<img class="gif" src="${newGifURL}">`); 
  $gifDisplay.data("url", newGifURL); // attaches url to data key in the div element
  $gifDisplay.append($newImage); // appends image element (gif) to div
};
