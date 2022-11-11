const GifApiUtil = {
  newGifAJAX: function() {
    debugger
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G&tag=banana',
    });
  },

  saveGifAJAX: function(gifArg) { //expect gifArg to have keys of title and url
    debugger
    return $.ajax({
      url: `/gifs`, // we want to hit our create route
      method: 'POST',
      data: {
        gif: gifArg
      },
      dataType: 'JSON'
    })
  },

  fetchSavedGifAJAX: function(titleArg) {
    return $.ajax({
      url: `/gifs/${titleArg}`,
      method: 'GET',
      dataType: 'JSON'
    })
  }
};

module.exports = GifApiUtil;