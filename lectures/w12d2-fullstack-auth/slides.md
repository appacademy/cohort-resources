## W12D2
# Full Stack Authentication

---

## Learning Objectives

+ Describe a session based authentication scheme
+ Build a Rails + React/Redux app, complete with user auth

---

## Agenda
- Overview of session based authentication
    - The `sessionStorage` object
- Demo
    - Backend setup
    - Backend authentication
    - Frontend `sessionStorage`
    - Store session information in Redux state

---

## Session Based Authentication

1. You attempt to log in using your credentials.
2. After verifying, the server creates a session.
	+ The session info is attached to your user and stored in the db.
3. Session info is also stored in the browser as a cookie.
4. Subsequent requests from the browser will include the session cookie; it will be verified against the server session info in order to validate the incoming request.
5. Upon logging out, the session is destroyed on client and server.

---

## [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

- A `Storage` object that can be used to access a browser's current session storage space
	- Each tab has it's own session storage space
- Data in `sessionStorage` expires when a page's session ends
	- i.e. when a tab or browser is closed the correspoinding `sessionStorage` gets cleared

---

### Basic Usage

-	`sessionStorage.setItem("key", "value")` => save data
- `sessionStorage.getItem("key")` => retreive data
- `sessionStorage.removeItem("key")` => remove data
- `sessionStorage.clear()` => remove all data
	* The browser does this for us when we close the page

---

![session](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-redux/fullstack-auth/session_based_authentication.jpeg)

---

## To Do List (Part 1)

1. Backend setup
	+ Update Gemfile
	+ Enable cookies
	+ Transform keys
	+ Enable CSRF protection
1. Backend authentication

---

## To Do List (Part 2)
3. Frontend `sessionStorage`
	+ `restoreSession`
	+ `csrfFetch`
1. Redux state
	+ `usersReducer` and actions
	+ `sessionsReducer` and actions
1. React components
	+ `LoginForm`
	+ `SignupForm`
  
---

## Let's Build

---

## Questions?

---

## Thank you!