const GifApiUtil = {
  newGifAJAX: function() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({ // need to explicitly return to chain .then
      method: 'GET', // default method
      url: `https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`
    });
  },
  saveGifAJAX: function(gifArg) {
    // gifArg is an object that represents a gif

    return $.ajax({
      method: 'POST', 
      url: '/gifs', // cant use rails helper methods
      data: { gif: gifArg }
    });
  },
  fetchSavedGifAJAX: function(titleArg) {

    return $.ajax({
      method: 'GET',
      url: `/gifs/${titleArg}`
    })
  }
};

module.exports = GifApiUtil;