// method for grabbing a csrf token, AND a logged in user
// load up our cookie
export const restoreSession = async () => {
  let res = await fetch('/api/session'); // fetch to session show route
  let token = res.headers.get('X-CSRF-Token'); // grab from headers (was set in app_controller)
  sessionStorage.setItem('X-CSRF-Token', token); // save to the browser
  let data = await res.json(); // data -> {user: {id: ..., username: ..., createdAt: ...}}
  sessionStorage.setItem('currentUser', JSON.stringify(data.user)) // get a string of the user info
}

// will use in place of fetch, for non-get requests
export const csrfFetch = async (url, options={}) => {
  options.method ||= 'GET';
  options.headers ||= {};

  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
  };

  const res = await fetch(url, options);
  return res;
}