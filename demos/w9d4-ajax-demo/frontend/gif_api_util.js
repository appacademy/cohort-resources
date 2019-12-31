const GifApiUtil = {
  newGifAJAX: function() {
    // it is recommended to explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      url: `https://api.giphy.com/v1/gifs/random?&tag=patrick&api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
    });
  },
  saveGifAJAX: function(gifObj) {
    return $.ajax({
      method: 'post',
      data: {gif: gifObj}, //gifObj will have title, url
      url: '/gifs', //routes in our backend
      dataType: 'json'
    })
  },
  fetchSavedGifAJAX: function(title) {
    return $.ajax({
      method: 'get',
      url: `/gifs/${title}`,
      dataType: 'json'
    })
  }
};

module.exports = GifApiUtil;