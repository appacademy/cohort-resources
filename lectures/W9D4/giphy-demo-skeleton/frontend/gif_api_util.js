const GifApiUtil = {
  newGifAJAX: function() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G',
    });
  },
  saveGifAJAX: function(gifObject) {
    // { gif: { title: 'something', url: 'a_url.com' } }
    return $.ajax({
      method: 'post',
      url: '/gifs',
      data: {
        gif: gifObject
        
      },
      dataType: 'JSON'

    })
  },
  fetchSavedGifAJAX: function(title) {
    return $.ajax({
      method: 'Get',
      url: `/gifs/${title}`,
      dataType:'JSON'
    })
  }
};

module.exports = GifApiUtil;