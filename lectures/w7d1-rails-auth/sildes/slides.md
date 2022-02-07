# W7D1

## Rails User Auth

Note: **N.B. This README contains enough info to do this lecture in one day, 
however you might consider splitting it over 2 days, with the first day relating 
strictly to auth, and the second day being a mini-lecture on using `flash` to 
display errors on the frontend, and implementing CSRF protection**



Note: This used to be a one day lecture, but the ammount of content we are going to cover is extense. Therefore, we are going to split it in two days. That way, we will be able to get the most out of each part.

---

## So Far in Rails

You have learned:

* Wk 5
  * Migrations
  * Models
* Wk 6
  * Routes
  * Controllers
  * Views
  
---
## Our daily projects since rails:
![rails-atm](https://media.giphy.com/media/Np57GYvAYga5y/giphy.gif)

---

## Rails works...

![rails-magic](https://media.giphy.com/media/Ri7d8I18cto2jufOKc/giphy.gif)

---

![no-magic](https://media.giphy.com/media/42eRzcJbTBLgY/giphy.gif)

Note:

- Like all unexplained phenomenon, it seems like magic
- Rails does some cool things, but you can (and will!) do them yourself
- We'll do our best to pull back the curtain
- Some of the things from today that can seem "magical" are `session`, `params`, and `flash` - we will get a better understanding of how these things are actually created

---

## Learning Objectives

+ Explain how user passwords are securely stored in a database using hashing + salting
+ Explain how we can keep users logged in across requests/page visits? (session)
+ Securely store passwords in DB using BCrypt
+ Implement sign up, login, and log out functionality using `session` and `params`
+ Render errors on the front-end through `flash`
+ Protect against CSRF using form authenticity tokens

---

## Lecture Outline

+ What is Auth?
+ Code Demo - Setup and Sign Up (Part 1)
+ Code Demo - Sign In (Part 2)
+ Code Demo - Sign Out (Part 3)
+ Code Demo - Frontend Errors (Part 4)
+ Code Demo - CSRF Protection (Part Last)
+ FAQ

Note:

---


![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)

Note: Review request-response cycle now that they've been exposed to all parts of it.

---

## Securely Storing Passwords in DB

1. Why can't we store plaintext passwords in the DB?
2. Why can't we store encoded/encrypted passwords in the DB?
3. What is the solution then?

Note:
* Obviously can't store plaintext passwords in the DB. 
* Encoding/encrypting doesn't work because if the encryption scheme is known 
then it can be decrypted. Even if our code isn't open source for the world to 
see our encryption scheme, a malicious employee that has access to it could 
expose passwords in the DB. NOBODY should be able to figure out these passwords.
* Hashing is the solution (well, almost - we'll get to salting)

---

## Four Key Principles of Hashing

* **One-way** - given an input, we can easily produce the output but not vice versa
* **Deterministic** - same input produces same output every time
* **Uniform** - reduce the amount of possible **hash collisions**
  * Pigeon-hole problem
* **Sensitive** - a small change to the input results in an entirely different hash

So are we good?

Note:
* Discuss at a high level what a hashing algorithm is and the four key principles
outlined in the slides. 
* Emphasize that because hashing functions are one-way a hacker can not easily 
reverse engineer the password given its hashed value. 
* Because hashing functions are deterministic every time the user supplies their
password we can run it through the hashing algorithm, get the same output and 
verify that their password is correct.
* Discuss the [pigeon-hole problem](https://en.wikipedia.org/wiki/Pigeonhole_principle)
- because hashes have a fixed size, and we can put anything through this hashing
function, it is guaranteed that some different inputs will generate the same 
hashed output. However, this is very rare and highly unlikely - even if two 
things happen to hash to the same value this isn't a huge deal as long as it is
not easy to artificially generate a certain hash - if hackers could do this, then
even if they can't figure out a user's password they could easily figure out 
something else that hashes to the same value and use that instead.
* Finally hashing functions are sensitive, this plays into the earlier point as
it makes it more difficult to force a hashed output if the output is highly 
sensitive to the smallest changes in input.

---

## Rainbow Table Attack!!

![rainbow-table-md5](https://2.bp.blogspot.com/-zYUkRa4hQ6s/WjzytsTZzeI/AAAAAAAAAkA/GAq8hcC67qwiB0mehMDSpQIs71jZzRvYQCLcBGAs/s640/rainbow_table_attack.PNG)

---

## Salting

* Adds entropy to common passwords by pairing them with a random string (i.e. 
the **salt**) and generating the hash from that
* Makes it computationally unfeasible to brute force hashed password, or use a
rainbow table, even for the most common passwords
* Need to store the salt along with the hash in the DB

Note:
* If we store the salt, can't the hacker just use that to figure out what their
password is? Not quite - all that's stored is the salt and the hash. Given the 
salt it is still computationally unfeasible to figure out the hash - you have to
try it with every imaginable password. The hacker loses the ability to have a
pre-generated hash for the most common passwords and check against them since
these passwords could be paired with any possible salt.

---

## BCrypt

+ One-way hashing function
+ Incorporates a `salt` to prevent hash/rainbow table attacks
+ Slower relative to other hashing algorithms like MD5, SHA-1, SHA-2 (this is good)
+ Adaptive, scales with computational power, resistant to brute-force
+ Verifies if two hashes were created from the same input without needing to reveal them
+ Not exclusive to Ruby or Rails – many languages have implementations
+ Include the `bcrypt` gem in `Gemfile` to use in Ruby project

Note:
+ [Check Out the Docs!](https://github.com/codahale/bcrypt-ruby)

---

## User Schema

column name       | data type | details
------------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`username`        | string    | not null, indexed, unique
`password_digest` | string    | not null
`session_token`   | string    | not null, indexed, unique

Note:
- In order to accomplish sign up and eventually sign in, we need to add some new columns to our DB (`session_token`, `password_digest`)

- Why don't we need a password and instead user `password_digest`? We NEVER save a plain text password in our DB for security reasons.

- Instead, we use a complex hashing function, which Haseeb talked about in detail in your videos last night, and we store a string that is the result of that hashing function. We use something called BCrypt (uses Blowfish) to accomplish this hashing.

- Reminder, there should v rarely, if ever, be any collision between passwords and the hashing function b/c it uses a unique salt - even if two people have same password, `password_digest` should be different.

- `session_token` is for login stuff and I will talk more about it later. For now, just know we need to have it as a not null col in our DB.

---

## 3 Key Auth Functionalities

- Sign up new users
- Sign in existing users
- Sign out existing users

---

## Relevant Routes

- Sign up
  + `get '/users/new', to: 'users#new'`
  + `post '/users', to: 'users#create'`
- Log In
  + `get '/session/new', to: 'session#new'`
  + `post '/session', to: 'session#create'`
- Log Out
  + `delete '/session', to: 'session#destroy'`

---

## Generating Auth Routes

```rb
#config/routes.rb
resources :users, only: [:new, :create]
# note - singular resource
resource :session, only: [:new, :create, :destroy] 
```

---

## New Gems

- `better_errors`
  + Different (nicer looking) error page
  + Full stack trace
  + Source line in editor
- `binding_of_caller`
  + Enables extra features in `better_errors`
  + REPL on error page
  + Local and Instance Variable inspection
  + We won't use this on its own (only with `better_errors`) 

---

## How do we 'Sign Up' a user?

1. Pass params (`username`, `password`) through a form
2. Create a new instance of a user with these params
3. Try to save the user in the database
4. Login, redirect, show errors, etc.

---

## CODE DEMO 1

## Let's sign up a user

---

## Questions?

---

## That was a lot!

## Let's break for 5 minutes!

---

## How do we 'Sign In' a user?

- Database does not know anything about who is logged in
- The 'logged in' status depends on `cookies`
- The controller modifies our `cookies` using the `session`
- A user is logged in if

```ruby
user.session_token == session[:session_token]
```

Note:
- DB does not know anything about who is logged in and on the flip side all of our HTTP requests are stateless, which means they do not know who you are
- We must create a state (aka - info telling our application who is logged in), and the solution to this is via `cookies` which are little pieces of data sent to the client from a website and stored on the browser
- Cookies are sent in the headers of HTTP requests
- In Rails we use something called a `session_token` to tell us who is logged in
- Since `cookies` persist across request-response cycles (browser stores them and sends them up every request) we can use them to figure out which user (if any) is signed in

---

## What the heck is the `session` thing?

- Hash-like object that we can add key-value pairs to, allowing for a nice interface to manage cookies on our site and allow data to persist across request-response cycles (remember _HTTP is stateless_)
- Created under the hood by `ActionController::Base` for every request that comes in (note that it is *lazily loaded*)
- Sends cookies back down to the browser with each response (browser sends them back up with each request)
- Only available in controllers and views

Note:
- think of it as a hash that persists across request-response cycles
- we use this to store our user's `session_token`
- if the session[:session_token] matches the users[:session_token]
- explain that *lazily loaded* means it will only actually be created if you use it in the controller action invoked for that request-response cycle

---

## CODE DEMO 2

## Let's sign in a user

---

## Questions?

---


## Let's take 5 minutes!

---

## How do we 'Sign Out' a user?

---

## CODE DEMO 3

## Let's sign out a user

---

## LETS STOP RIGHT HERE. 
### Tomorrow we will continue with error handling and CSRF attacks!
Note: 

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

## Thanks! You are all rockstars!

![sloth-star](https://media.giphy.com/media/SqGzDP3l5NNQY/giphy.gif)

