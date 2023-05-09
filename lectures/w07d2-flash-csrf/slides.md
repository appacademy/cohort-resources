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

- We NEVER save a password in our database for safety reasons
- We use a hashing function (bcrypt) so we don't have to save the password
- We use `password` from our params to set the `password_digest` and for validations
- Our validation requires an `@password` instance variable and an `attr_reader`

---

## [2/8] What is the difference between encryption and hashing?

- Encryption uses a `secret key` to encrypt some information. If that key is known then the encryption can be reversed. Hashing outputs cannot be reversed. 

---

## [3/8] Why is it important that `session_token` be unique? Indexed?

- This is how we determine whether a person is logged in
- Can't have two users with the same token or else could access other persons stuff
- Indexed b/c we use it to look up a user - if we had millions of users it would take forever without being indexed!

---

## [4/8] Does `password_digest` need to be unique? Why or why not? Should it also be indexed?

- `password_digest` does NOT need to be unique in the same way that passwords dont need to be unique. There is no benefit.
- Even so, there should very rarely, if ever, be any collision between passwords and the hashing function b/c it uses a unique salt - even if two people have same password, `password_digest` should be different.
- We never look up a user based on their `password_digest` so it does NOT need to be indexed - no benefit to this

---

## [5/8] Why do we need to add `allow_nil: true` to `password` validation?

- Everytime we `save` a user to the database, all validations are run on that user - other than the time we sign up the user (or change their password if we add that functionality) the `password` param will not exist, and fail our validation unless we `allow_nil`.  The most common place this occurs is when we update the user on login/logout through `reset_session_token!` 

---

## [6/8] Why do we call `self.save!` in `reset_session_token!`? What would happen if we didn't?

- Hard to debug if we don't use it!
- Followup - we call `save` in the controller so that it is a soft fail and we can hit the else in the method and render errors rather than quitting application

---

## [7/8] Why do we reset the user's session token in the DB instead of setting it to nil on logout?

- We have a `null: false` constraint on session token in the DB
- If we removed this constraint it would allow multiple users to have `nil` as
their `session_token` value in the DB. This would mean our current user method
would match a null session token against the first user to return `nil` for 
`session_token` and be very problematic as all 'logged out' users would actually
be 'logged in' as this user.

---

## [8/8] Why do we only have one session (single resource)?

- Because each browser can only hold one session (since it has one set of cookies).
- This means that inherently session do not have ids - instead they are a product of the cookies sent up from the browser that tell the session who the user is.
- If we wanted to, we could support logging in users from multiple devices with a singular session, since each of those devices can hold separate cookies. Instead of storing `session_token` as a column on the user table, though, we would need a separate `sessions` table altogether.
- We would need multiple session ids if we were to allow for multiple devices
- Instead, we are only allowing a user to be logged in on one device for simplicity

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

# ty