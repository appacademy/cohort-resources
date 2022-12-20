## W12D2
# Full Stack Authentication

---

## Learning Objectives

+ Describe a session based authentication scheme
+ Build a Rails + React/Redux app, complete with user authentication

---

## Session Based Authentication

1. You attempt to log in using your credentials.
1. Your login credentials are verified, and the server creates a session with a session ID for you. This session is stored in the database.
1. Your session ID is stored in your browser (client) as a cookie.
1. Upon subsequent requests, your cookie is verified against the session ID stored in the server. If it’s a match, the request is considered valid and processed.
1. If you log out of an application, the session ID is destroyed on both the client and server sides.

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

## Thank you!