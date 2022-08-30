1. Backend setup
  + Gemfile
  + Configure middleware support for session cookies (application.rb)
  + Transform keys in params (application_controller) and jbuilder (environment.rb)
  + Enable CSRF protection (application_controller)
  + Return authenticity token with each response (application_controller)

2. Update user table and model
  + Password_digest and session_token
  + Has_secure_password
  + Validations
  + Ensure_session_token
  + Generate_unique_session_token

3. User auth methods
  + Find_by_credentials
  + Reset_session_token!

4. Update seeds

5. Session auth methods
  + Current_user
  + Logged_in?
  + login!(user)
  + Logout!
  + Require_logged_in

6. User and session routes
  + Users only :create
  + Session only :show, :create, :destroy

7. Users controller
  + Create
  + Nest incoming params inside user object: 
    + wrap_parameters include: User.attribute_names + ['password']

8. Sessions controller
  + Show
  + Create
  + Destroy

9. Jbuilder views
  + User show

10. Demo CSRF
  + response = await fetch('/api/session')
  + token = response.headers.get('X-CSRF-Token')

11. Add appropriate headers to all frontend AJAX requests
  + Csrf.js --> csrfFetch (export default)

  async function csrfFetch(url, options = {}) {
    // set options.method to 'GET' if there is no method
    options.method = options.method || 'GET';
    // set options.headers to an empty object if there are no headers
    options.headers = options.headers || {};

    // if the options.method is not 'GET', then set the "Content-Type" header to
    // "application/json" and the "X-CSRF-Token" header to the value of the 
    // "X-CSRF-Token" cookie
    if (options.method.toUpperCase() !== 'GET') {
      options.headers['Content-Type'] =
        options.headers['Content-Type'] || 'application/json';
      options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    }

    // call fetch with the url and the updated options hash
    const res = await fetch(url, options);

    // if the response status code is 400 or above, then throw an error with the
    // error being the response
    if (res.status >= 400) throw res;

    // if the response status code is under 400, then return the response to the
    // next promise chain
    return res;
  }

12. Session reducer and actions
  + receiveCurrentUser
  + removeCurrentUser
  + loginUser
  + logoutUser

14. Restore session info
  + Add restoreSession thunk action creator to session.js
    + Call GET /api/session
    + storeCSRFToken
    + storeCurrentUSER
    + receiveCurrentUser

13. Navbar component with login/logout form

14. Restore session user
  + restoreSession

  const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
  }

  const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
  }

  export const login = ({ credential, password }) => async dispatch => {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ credential, password })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
  };

  export const restoreSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
  };

  // ...

  const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
  };