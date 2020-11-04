# W7D1

## Rails User Auth

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


---

## Once upon a time in Rails land...

- Migrations, Models
- Routes, Controllers
- Views

![rails-atm](https://media.giphy.com/media/Np57GYvAYga5y/giphy.gif)

---

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)


---

## Rails works...

![rails-magic](https://camo.githubusercontent.com/2806a2c928ae189536e050be16a41c691f0313de/687474703a2f2f7777772e717569636b6d656d652e636f6d2f696d672f64662f646632303731653130383463323733666539313038363366316232636664653836663933386331363132353964393565386664306565356438393362306336662e6a7067)

---

![no-magic](https://camo.githubusercontent.com/166c80de937c55a681be5863e3570d1d496a62f7/687474703a2f2f7777772e717569636b6d656d652e636f6d2f696d672f61392f613931306331303534326336373663346430623661623035326236323866636539653362383863346666366265366530386338373936623164656561313365312e6a7067)


---

## Securely Storing Passwords in DB

1. Why can't we store plaintext passwords in the DB?
2. Why can't we store encoded/encrypted passwords in the DB?
3. What is the solution then?


---

## Four Key Principles of Hashing

* **One-way** - given an input, we can easily produce the output but not vice versa
* **Deterministic** - same input produces same output every time
* **Uniform** - reduce the amount of possible **hash collisions**
  * Pigeon-hole problem
* **Sensitive** - a small change to the input results in an entirely different hash

So are we good?

* Discuss the [pigeon-hole problem](https://en.wikipedia.org/wiki/Pigeonhole_principle)


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


---

## BCrypt

+ One-way hashing function
+ Incorporates a `salt` to prevent hash/rainbow table attacks
+ Slower relative to other hashing algorithms like MD5, SHA-1, SHA-2 (this is good)
+ Adaptive, scales with computational power, resistant to brute-force
+ Verifies if two hashes were created from the same input without needing to reveal them
+ Not exclusive to Ruby or Rails – many languages have implementations
+ Include the `bcrypt` gem in `Gemfile` to use in Ruby project


---

## User Schema

column name       | data type | details
------------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`username`        | string    | not null, indexed, unique
`password_digest` | string    | not null
`session_token`   | string    | not null, indexed, unique


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


---

## What the heck is the `session` thing?

- Hash-like object that we can add key-value pairs to, allowing for a nice interface to manage cookies on our site and allow data to persist across request-response cycles (remember _HTTP is stateless_)
- Created under the hood by `ActionController::Base` for every request that comes in (note that it is *lazily loaded*)
- Sends cookies back down to the browser with each response (browser sends them back up with each request)
- Only available in controllers and views


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

---

## [2/9] What is the difference between encryption and hashing?

---

## [3/9] Why is it important that `session_token` be unique? Indexed?

---

## [4/9] Does `password_digest` need to be unique? Why or why not? Should it also be indexed?


---

## [5/9] Why do we need to add `allow_nil: true` to `password` validation?

---

## [6/9] Why do we call `self.save!` in `reset_session_token!`? What would happen if we didn't?

---

## [7/9] Why do we reset the user's session token in the DB instead of setting it to nil on logout?


---

## [8/9] What other cool `before_action`s could we implement?


---

## [9/9] Why do we only have one session (single resource)?


---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=0aa59f22-2534-4568-8eb2-2e368d959d91)

---

## Thanks! You are all rockstars!

![sloth-star](https://media.giphy.com/media/SqGzDP3l5NNQY/giphy.gif)
