// util files typically export more than one thing, so we don't want to export default

// example of a named export 
export const fetchDogGif = () => {
  // always be returning 
  return $.ajax({
    method: 'get',
    url: 'http://api.giphy.com/v1/gifs/random?api_key=4X3Pk8YMCh7iqyxS8XhWtWwJOSeu5kPb&tag=funny+dog&rating=g'
  });
};

// when we import this file, we're basically importing a plain javascript object.
// that JS object's keys will be the functions, objects, etc. that we exported.
//api: erase rating g at the end of api