const GifApiUtil = {
  newGifAJAX: () => {
    return $.ajax({
      method: "GET",
      url: "https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G"
    })
  },
  saveGifAJAX: gifArg => {
    return $.ajax({
      method: "POST",
      url: "/gifs",
      data: {gif: gifArg},
      dataType: "json"
    });
  },
  fetchSavedGifAJAX: titleArg => {
    return $.ajax({
      method: "GET",
      url: `/gifs/${titleArg}`,
      dataType: "json"
    })
  }
};

module.exports = GifApiUtil;