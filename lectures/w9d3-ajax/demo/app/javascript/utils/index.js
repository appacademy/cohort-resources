// Darn CSRF errors...
const token = document.querySelector('meta[name="csrf-token"]').content

export const fetchNewGif =  async () => {
  const url = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=G&tag=unicorn';
  // return fetch(url)
  //   .then(res => {
  //     if (res.ok) {
  //       return res;
  //     } else {
  //       throw "hello";
  //     }
  //   })
  //   .then(data => data.json())
  //   .catch(err => console.error(err))
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    const err = await res.json();
    throw err.message;
  }
};

export const saveGif = async gif => {
  // expect gif arg to be object with keys of `title` and `url`
  // return fetch('/gifs', {
  //   method: 'POST',
  //   body: gif,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //     'X-CSRF-Token': token
  //   }
  // })
  //   .then(res => {
  //     if (res.ok) {
  //       return res;
  //     } else {
  //       throw "hello";
  //     }
  //   })
  //   .then(data => data.json())

  const res = await fetch('/gifs', {
    method: 'POST',
    body: JSON.stringify(gif),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-Token': token
    }
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    const err = await res.json();
    throw err.message;
  }
};

export const fetchSavedGif = async title => {
  // expect title art to be title string
  // return fetch(`/gifs/${title}`)
  //   .then(res => {
  //     if (res.ok) {
  //       return res;
  //     } else {
  //       throw "hello";
  //     }
  //   })
  //   .then(data => data.json())

  const res = await fetch(`/gifs/${title}`, {
    headers: {
      'Accept': 'application/json'
    }
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    const err = await res.json();
    throw err.message;
  }
};