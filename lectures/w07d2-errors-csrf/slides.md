# W7D2

## Flash & CSRF

---

## Learning Objectives

+ Review some concepts from the auth lecture
+ Render errors on the front-end through `flash`
+ Protect against CSRF using form authenticity tokens

---

## Now let's answer those questions from yesterday!

---

## [1/8] Why don't we need to include `password` in the schema if it is one of our params?

---

## [2/8] What is the difference between encryption and hashing?

---

## [3/8] Why is it important that `session_token` be unique? Indexed?

---

## [4/8] Does `password_digest` need to be unique? Why or why not? Should it also be indexed?

---

## [5/8] Why do we need to add `allow_nil: true` to `password` validation?

---

## [6/8] Why do we call `self.save!` in `reset_session_token!`? What would happen if we didn't?

---

## [7/8] Why do we reset the user's session token in the DB instead of setting it to nil on logout?

---

## [8/8] Why do we only have one session (single resource)?

---

## Errors with `flash` and `flash.now`

- Similar to `session` in that it is a hash-like object we can add key-value pairs to, but is meant for temporary cookies to flash notices to the user
  - We will mostly be using it to manage *errors* we need to display to the user, but it can be used for any sort of one-time message you want to display to the user
- `flash` lasts through the __next__ request/response cycle (use with `redirect_to`)
- `flash.now` only lasts through the __current__ request/response cycle (use with `render`)
- `flash` includes everything in both `flash` AND `flash.now`

---

## CODE DEMO 1

## Displaying errors on the frontend

---

## Cross-Site Request Forgery (CSRF)

- When a request is made to a website other than the one the user is currently on (hence *cross-site*)
- Forces user to execute unwanted actions on this other site (e.g. liking a Facebook page, deleting a post, etc.)
- Get around this by enabling CSRF protection in Rails and adding `form_authenticity_token` to forms
- Rails enables CSRF protection by default
  - add `skip_before_action :verify_authenticity_token` to `application_controller.rb` to turn it off (should only do this temporarily when testing in Postman)

---

## Authenticity Tokens

- We have to include the CSRF token in our forms (POST, PATCH, PUT, DELETE requests) so that our application accepts and processes the requests. If we don't, they will be rejected.

```ruby
  <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
```

---

## CODE DEMO 2

## CSRF

---


