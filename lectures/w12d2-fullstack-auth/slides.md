## W12D2
# Full Stack Authentication

---

## Learning Objectives

+ Describe a session based authentication scheme
+ Build a Rails + React/Redux app, complete with user authentication

---

## Agenda
- Discuss Session Based Authentication
    - The `sessionStorage` object
- Long Demo
    - Setup Backend Configurations
    - Review and build Backend Authentication
    - Setup Frontend to store and verify the session for all HTTP requests
    - Create session actions and reducer

---

## Session Based Authentication

1. You attempt to log in using your credentials.
2. Your login credentials are verified, and the server creates a session with a session ID for you. This session is stored in the database.
3. Your session ID is stored in your browser (client) as a cookie.
4. Upon subsequent requests, your cookie is verified against the session ID stored in the server. If it’s a match, the request is considered valid and processed.
5. If you log out of an application, the session ID is destroyed on both the client and server sides.

---

## The [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) object

- A `Storage` object that can be used to access a browser's current session storage space
	- Each tab has it's own session storage space
- Data in `sessionStorage` expires when a page's session ends
	- i.e. when a tab or browser is closed the correspoinding `sessionStorage` gets cleared
- Basic Usage
	- `sessionStorage.setItem("key", "value")` => save data
	- `sessionStorage.getItem("key")` => retreive data
	- `sessionStorage.removeItem("key")` => remove data
	- `sessionStorage.clear()` => remove all data from `sessionStorage`
		* The browser does this for us when we close the page

---

![session](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-redux/fullstack-auth/session_based_authentication.jpeg)

---

## To Do List

1. Configure backend to:
	+ Manage session cookies
	+ Transform keys in Jbuilder and `params`
	+ Use CSRF protection
	+ Handle authentication errors
1. On the frontend:
	+ Add CSRF headers to all outgoing AJAX requests
 	+ Create session actions and reducer

---

## Let's Build

---

## Demo Part 1: Backend Configuration

---

## Break

---

## Demo Part 2: Backend Auth

---

## Break

---

## Demo Part 3: Frontend Auth

---

## Questions?

---

## Thank you!