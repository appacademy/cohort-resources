# W7D2

## Flash & CSRF

---

## Learning Objectives

+ Render errors on the front-end through `flash`
+ Protect against CSRF using form authenticity tokens

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

Note:

- Example if someone made a form that said `Win $1M!`, and had a hidden input that made a request to like app academy on facebook; try to hijack existing session and trick you into doing something you don't expect
- We need to make sure a request is coming from the good site and not some other site
- `default_protect_from_forgery` to false is great for development and testing in postman, but no more!
- `form_authenticity_token` is another helper method
- returns token rails uses to verify requests
- required for all forms

---

## CODE DEMO 2

## CSRF
