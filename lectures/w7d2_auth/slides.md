# W7D1

## Rails User Auth

Note: **N.B. This README contains enough info to do this lecture in one day, 
however you might consider splitting it over 2 days, with the first day relating 
strictly to auth, and the second day being a mini-lecture on using `flash` to 
display errors on the frontend, and implementing CSRF protection**

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

## Once upon a time in Rails land...

- Migrations, Models
- Routes, Controllers
- Views

![rails-atm](https://media.giphy.com/media/Np57GYvAYga5y/giphy.gif)

---

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)

Note: Review request-response cycle now that they've been exposed to all parts of it.

---

## Rails works...

![rails-magic](http://www.quickmeme.com/img/df/df2071e1084c273fe910863f1b2cfde86f938c161259d95e8fd0ee5d893b0c6f.jpg)

---

![no-magic](http://www.quickmeme.com/img/a9/a910c10542c676c4d0b6ab052b628fce9e3b88c4ff6be6e08c8796b1deea13e1.jpg)

Note:

- Like all unexplained phenomenon, it seems like magic
- Rails does some cool things, but you can (and will!) do them yourself
- We'll do our best to pull back the curtain
- Some of the things from today that can seem "magical" are `session`, `params`, and `flash` - we will get a better understanding of how these things are actually created

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

## I'm thirsty!

## Let's take 5 minutes!

---

## How do we 'Sign Out' a user?

---

## CODE DEMO 3

## Let's sign out a user

---