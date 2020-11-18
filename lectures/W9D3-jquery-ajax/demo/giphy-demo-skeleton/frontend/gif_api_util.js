const GifApiUtil = {
  newGifAJAX: function() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G&tag=mike',
    });
  },
  saveGifAJAX: function(gifArg) {
    // gifArg === {
      // title: 'text',
      // url: 'more text'
    // };
    return $.ajax({
      method: 'POST',
      url: '/gifs', // cant use ruby code in js file
      data: { gif: gifArg }, // structured in a way to work with strong params in controller (gif_params)
      dataType: 'JSON'
    });
  },
  fetchSavedGifAJAX: function(titleArg) {

    return $.ajax({
      method: 'GET',
      url: `/gifs/${titleArg}`,
      dataType: 'JSON'
    });
  }
};

module.exports = GifApiUtil;