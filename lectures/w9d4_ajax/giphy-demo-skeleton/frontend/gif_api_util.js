const GifApiUtil = {
  newGifAJAX: function() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      // optional but recommend to keep it
      url: 'https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G',
    });
  },
  saveGifAJAX: function(gifArg) {
    // required to return
    return $.ajax({
      method: 'POST',
      url: '/gifs',
      // data takes an object
      data: {
        // gifArg is obj holding title and URL 
        gif: gifArg
      },
      // We want the response to be of type JSON
      dataType: 'JSON'
    })
    
  
  },
  fetchSavedGifAJAX: function(titleArg) {
    return $.ajax({
      method: 'GET',
      // :title => titleArg
      url: `/gifs/${titleArg}`,
      dataType: 'JSON'
      // no body for get request.therefore no data key
    })
  }
};

module.exports = GifApiUtil;