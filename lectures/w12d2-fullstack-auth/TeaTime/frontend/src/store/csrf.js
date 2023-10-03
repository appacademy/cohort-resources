// gets called on initial page load, and refresh
export const restoreSession = async () => {
  const res = await fetch('/api/session'); // dont forget leading slash
  const token = res.headers.get('X-CSRF-Token'); // from attach_authenticity_token
  sessionStorage.setItem('X-CSRF-Token', token); // save to browser temp storage
  const data = await res.json();
  sessionStorage.setItem('currentUser', JSON.stringify(data)); 
  // ^ put user from 'api/users/show' jbuilder in browser storage ^
  return data; // return if you want
}

// helper method, adds our csrf token to any non-GET requests
export const csrfFetch = async(url, options = {}) => {
  options.method ||= 'GET';
  options.headers ||= {};

  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
  };

  const res = await fetch(url, options);
  return res;
};

