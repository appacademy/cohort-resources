const url = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=g&tag=salmon';

// const fetchNewGif = () => {
//   return fetch(url, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json'
//     }
//   }).then(res => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw res;
//     }
//   }).then(gifData => {
//     console.log(gifData.data.images.fixed_height.url);
//   }).catch(err => {
//     throw err.json();
//   }).catch(err => {
//     console.error(err)
//   })
// }

const fetchNewGif = async () => {
  try {
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });
    let gifData;
    if (res.ok) {
      gifData = await res.json();
    } else {
      throw res;
    }
  
    console.log(gifData.data.images.fixed_height.url);
  } catch (err) {
    console.error(err);
  }
}