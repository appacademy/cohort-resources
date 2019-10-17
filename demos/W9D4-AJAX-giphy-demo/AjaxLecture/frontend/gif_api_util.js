const GifApiUtil = {

  newGifAJAX: function() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      url: `https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
    });
  },

  saveGifAJAX: function (gifArg) { 
    return $.ajax({         // make sure to return 
      method: 'POST',
      url: '/gifs',
      data: { gif: gifArg } // make sure to structure arg the way congroller expects
    })
  },

  fetchSavedGifAJAX: function(titleArg) {
    // TODO
    return $.ajax({
      url: `/gifs/${titleArg}`,
      method: 'GET'
    })
  }
};

module.exports = GifApiUtil;