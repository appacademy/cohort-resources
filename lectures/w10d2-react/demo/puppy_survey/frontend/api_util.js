export const fetchDogGif = () => {
  // always be returning 
  return $.ajax({
    method: 'get',
    url: 'http://api.giphy.com/v1/gifs/random?api_key=4X3Pk8YMCh7iqyxS8XhWtWwJOSeu5kPb&tag=funny+dog&rating=g'
  });
};