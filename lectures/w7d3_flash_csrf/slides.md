# W7D3
## Auth Continued
---
## Errors with `flash` and `flash.now`

- Similar to `session` in that it is a hash-like object we can add key-value pairs to, but is meant for temporary cookies to flash notices to the user
  - We will mostly be using it to manage *errors* we need to display to the user, but it can be used for any sort of one-time message you want to display to the user
- `flash` lasts through the __next__ request/response cycle (use with `redirect_to`)
- `flash.now` only lasts through the __current__ request/response cycle (use with `render`)
- `flash` includes everything in both `flash` AND `flash.now`


---

## CODE DEMO 4

## Errors on the frontend

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

## Almost there! 

## Let's take 5 minutes!

---

## CODE DEMO 5

## Add CSRF protection

---

## Now let's answer some important questions...

---

## [1/9] Why don't we need to include `password` in the schema if it is one of our params?

Note:

- We NEVER save a password in our database for safety reasons
- We use a hashing function (bcrypt) so we don't have to save the password
- We use `password` from our params to set the `password_digest` and for validations
- Our validation requires an `@password` instance variable and an `attr_reader`

---

## [2/9] What is the difference between encryption and hashing?

---

## [3/9] Why is it important that `session_token` be unique? Indexed?

Note:

- This is how we determine whether a person is logged in
- Can't have two users with the same token or else could access other persons stuff
- Indexed b/c we use it to look up a user - if we had millions of users it would take forever without being indexed!

---

## [4/9] Does `password_digest` need to be unique? Why or why not? Should it also be indexed?

Note:

- `password_digest` does NOT need to be unique because multiple people can have the same password
- We never look up a user based on their `password_digest` so it does NOT need to be indexed - no benefit to this

---

## [5/9] Why do we need to add `allow_nil: true` to `password` validation?

Note:

- Everytime we `save` a user to the database, all validations are run on that user - other than the time we sign up the user (or change their password if we add that functionality) the `password` param will not exist, and fail our validation unless we `allow_nil`.  The msot common place this occus is when we update the user on login/logout through `reset_session_token!` 

---

## [6/9] Why do we call `self.save!` in `reset_session_token!`? What would happen if we didn't?

Note:

- Hard to debug if we don't use it!
- Followup - we call `save` in the controller so that it is a soft fail and we can hit the else in the method and render errors rather than quitting application

---

## [7/9] Why do we reset the user's session token in the DB instead of setting it to nil on logout?

Note:

- We have a `null: false` constraing on session token in the DB
- If we removed this constraint it would allow multiple users to have `nil` as
their `session_token` value in the DB. This would mean our current user method
would match a null session token against the first user to return `nil` for 
`session_token` and be very problematic as all 'logged out' users would actually
be 'logged in' as this user.

---

## [8/9] What other cool `before_action`s could we implement?

Note:

- `before_action :show` in the user model so that we don't show a user's 'profile' if they are not logged in

---

## [9/9] Why do we only have one session (single resource)?

Note:

- Because each browser can only hold one session (since it has one set of cookies).
- This means that inherently session do not have ids - instead they are a product of the cookies sent up from the browser that tell the session who the user is.
- We can still support logging in users from multiple devices with a singular session, since each of those devices can hold separate cookies. Instead of storing `session_token` as a column on the user table, though, we would need a separate `sessions` table altogether.
- We are only allowing a user to be logged in on one device
- We would need multiple sessions if we were to allow for multiple devices

---

## Thanks!

Note:

* Additional Auth resources are available on Cohort Resources!!