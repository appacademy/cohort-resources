const GifApiUtil = {
  newGifAJAX: function() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G&tag=banana',
    })
  },
  saveGifAJAX: function(gifArg) { //expect gifArg to have keys of title and url
    return $.ajax({
      method: 'POST',
      url: '/gifs',
      data: {
        gif: gifArg
        // gif: {
        //   url: gifArg.url,
        //   title: gifArg.title
        // }
      }
    })
  },
  fetchSavedGifAJAX: function(titleArg) {
    return $.ajax({
      method: 'GET',
      url: `/gifs/${titleArg}`,
    })
  }
};

// GifApiUtil.newGifAJAX().then(res => )

module.exports = GifApiUtil;
