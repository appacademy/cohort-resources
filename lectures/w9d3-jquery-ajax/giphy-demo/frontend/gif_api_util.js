const GifApiUtil = {
  newGifAJAX: function() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=G&tag=banana',
    });
  },
  saveGifAJAX: function(gifArg) { //expect gifArg to have keys of title and url
    return $.ajax({
      url: "/gifs", //Matching our rails routes
      method: "POST",
      data: {
        gif: gifArg
      },
      dataType: 'JSON'
    })
  },
  fetchSavedGifAJAX: function(titleArg) {
    return $.ajax({
      url: `/gifs/${titleArg}`, //Matching our custom rails route
      method: 'GET',
      dataType: 'JSON'
    })
  }
};

module.exports = GifApiUtil;