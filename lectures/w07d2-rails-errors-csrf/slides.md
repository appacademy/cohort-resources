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

Note:
+ First off, we NEVER save a password in our database for safety reasons. Our databases are not 100% secure, so any information stored there can be compromised. 
+ We also use a hashing function (`bcrypt`) so we don't have to save the `password`, instead opting for a hashed `password_digest`.
+ We use the `password` from our params to set the `password_digest` and for validations.
+ Worth noting: in order for those validations to work, we DO need to store our plaintext password in a `@password` instance variable and provide it an `attr_reader`.

---

## [2/8] What is the difference between encryption and hashing?

Note:
+ Encryption uses a `secret key` to encrypt some information. If that key is known then the encryption can be reversed. Think of Caesar Cipher in which we take in an input string and encrypt it using some kind of integer key. As long as we know that key, then we can decrypt it pretty easily.
+ Hashing, on the other hand, cannot be reversed. Our hashing algorithms are one-way, which is why they're more preferable.

---

## [3/8] Why is it important that `session_token` be unique? Indexed?

Note:
+ First off, our `session_token` is how we determine whether a person is logged in.
+ So in terms of uniqueness, we don't want to have two users with the same token or else one could access the other person's session and any session-connected information.
+ In terms of indexing, we index our `session_token` because we use it to look up a user. Remember, indexing helps with lookup purposes. If we had millions of users it would take forever to search for one by their `session_token` without it being indexed!

---

## [4/8] Does `password_digest` need to be unique? Why or why not? Should it also be indexed?

Note:
+ `password_digest` does NOT need to be unique.
+ Why? There should very rarely, if ever, be any hash collisions between two passwords and their hashed output. There might (this is where our pigeon-hole problem comes into play), but it's incredibly unlikely.
+ However, because our hashing algorithm uses a unique salt for each input, even if two people have same password, their respective `password_digest`s should be different. The salt introduces increased entropy.
  
+ `password_digest` does NOT need to be indexed.
+ Why? We never look up a user based on their `password_digest`, so there is no benefit to this.

---

## [5/8] Why do we need to add `allow_nil: true` to `password` validation?

Note:
+ Upon our inital creation and persisting of our User to our database, we'll run our password length validation. Our User will either have a valid password or a password of insufficient length. If they input nothing, then an empty string will still be read as not long enough.
+ Otherwise, every time we log in or log out our a User (and therefore save them to the database), all of our validations are run on that User. During these saves, the password param will not exist and fail our validation unless we `allow_nil`. The most common place this occurs is when we update the user on login/logout through `reset_session_token`! Remember, that method will save the User after resetting their `session_token`.

---

## [6/8] Why do we call `self.save!` in `reset_session_token!`? What would happen if we didn't?

Note:
+ `save!` in contrast to `save` will throw a very loud error in case anything goes wrong. So, for our purposes, it would be very hard to debug a `session_token` issue if we didn't use it!

+ Followup: between the `save!` and `save`, which do we call in our controllers and why?
+ We call `save` in the controller so that it is a soft fail and we can hit the else in our actions and render errors rather than halting code execution. In this case, we control the logic flow.

---

## [7/8] Why do we reset the user's session token in the DB instead of setting it to nil on logout?

Note:
+ First off, we have a `null: false` constraint on our `session_token` in the database, so this would conflict with setting our `session_token` to `nil`.
+ Second, if we removed this constraint it would allow multiple users to have `nil` as their `session_token` value in the database.
+ This would mean our `current_user` method would match a null `session_token` against the first user to return nil for `session_token` and be very problematic as all 'logged out' users would actually be 'logged in' as this user.

---

## [8/8] Why do we only have one session (single resource)?

Note:
+ Because each browser can only hold one session (since it has one set of cookies). 
+ This means that sessions do not have ids inherently - instead the concept of a session is a product of the cookies sent up from the browser that tell the session cookie who the current user is.

+ Followup: we could still support logging in users from multiple devices with a singular session, since each of those devices can hold separate cookies. Instead of storing `session_token` as a column on the user table, though, we would need a separate `sessions` table altogether.
+ Currently, we are only allowing a user to be logged in on one device. We would need multiple sessions (belonging to a user) if we were to allow for multiple devices.

---

## Flash

---

## Errors with `flash` and `flash.now`

- Similar to `session` in that it is a hash-like object we can add key-value pairs to, but is meant for temporary cookies to flash notices to the user
  - We will mostly be using it to manage *errors* we need to display to the user, but it can be used for any sort of one-time message you want to display to the user
- `flash` lasts through the __next__ request/response cycle (use with `redirect_to`)
- `flash.now` only lasts through the __current__ request/response cycle (use with `render`)
- `flash` includes everything in both `flash` AND `flash.now`

---

## CODE DEMO

## Displaying errors on the frontend

---

## CSRF

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


## CSRF

---

## Thank You!