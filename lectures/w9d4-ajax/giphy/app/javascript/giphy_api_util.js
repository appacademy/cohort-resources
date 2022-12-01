const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=G&tag=cats';

const fetchNewGif = async () => {
  try {
    const res = await fetch(giphyUrl);
    // debugger;
    if (res.ok) {
      let data = await res.json();
      return data;
    } else {
      let data = await res.json();
      throw data.meta.msg;
    }
  } catch (error) {
    console.warn(error)
  }


  // return fetch(giphyUrl)
  //   .then(res => {
  //     // console.log(res);
  //     if (res.ok) {
  //       return res;
  //     } else {
  //       throw res;
  //     }
  //   })
  //   .then(res => res.json(), res => res.json())
  //   // .then(gif => gif)
  //   .catch(error => console.log(error))
};

export const saveGif = gif => {

};

export const fetchSavedGif = title => {

};

export default fetchNewGif;