const GifApiUtil = {
  newGifAJAX: function() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G', // family friendly
    });
  },
  saveGifAJAX: function(gifArg) {
    // gifArg === a gif object
    // { title: 'something', url: 'a_url.com' }
    // data looks like this
    // { gif: { title: 'something', url: 'a_url.com' } }
    // matches your strong params from controller

    return $.ajax({
      method: 'POST', // dont need caps
      url: '/gifs',
      dataType: 'json',
      data: {
        gif: gifArg
      }
    });
  },
  fetchSavedGifAJAX: function(titleArg) {
    return $.ajax({
      method: 'GET',
      url: `/gifs/${titleArg}`,
      dataType: 'json'
    });
  }
};

module.exports = GifApiUtil;