No file chosenSync editor position
1
# W7D1
2
​
3
## Rails User Auth
4
​
5
---
6
​
7
## Learning Objectives
8
​
9
+ Be able to explain how user passwords are securely stored in a database using hashing + salting
10
+ Be able to explain how we can keep users logged in across requests/page visits? (session)
11
+ Understand how to securely store passwords in DB using BCrypt
12
+ Implement sign up, login, and log out functionality using `session` and `params`
13
​
14
---
15
​
16
## Lecture Outline
17
​
18
+ What is Auth?
19
+ Code Demo - Setup and Sign Up (Part 1)
20
+ Code Demo - Login (Part 2)
21
+ Code Demo - Logout (Part 3)
22
+ FAQ
23
​
24
---
25
​
26
## Once upon a time in Rails land...
27
​
28
- Migrations, Models
29
- Routes, Controllers
30
- Views
31
​
32
---
33
​
34
![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)
35
​
36
​
37
---
38
​
39
## Rails Magic
40
​
41
---
W7D1
Rails User Auth
Learning Objectives
Be able to explain how user passwords are securely stored in a database using hashing + salting
Be able to explain how we can keep users logged in across requests/page visits? (session)
Understand how to securely store passwords in DB using BCrypt
Implement sign up, login, and log out functionality using session and params
Lecture Outline
What is Auth?
Code Demo - Setup and Sign Up (Part 1)
Code Demo - Login (Part 2)
Code Demo - Logout (Part 3)
FAQ
Once upon a time in Rails land...
Migrations, Models
Routes, Controllers
Views
mvc

Rails Magic
Securely Storing Passwords in DB
Why can't we store plaintext passwords in the DB?
Why can't we store encoded/encrypted passwords in the DB?
What is the solution then?
Four Key Principles of Hashing
One-way - given an input, we can easily produce the output but not vice versa
Deterministic - same input produces same output every time
Uniform - reduce the amount of possible hash collisions
Pigeon-hole problem
Sensitive - a small change to the input results in an entirely different hash
So are we good?

Rainbow Table Attack!!
rainbow-table-md5

Salting
Adds entropy to common passwords by pairing them with a random string (i.e. the salt) and generating the hash from that
Makes it computationally unfeasible to brute force hashed password, or use a rainbow table, even for the most common passwords
Need to store the salt along with the hash in the DB
BCrypt
One-way hashing function
Incorporates a salt to prevent hash/rainbow table attacks
Slower relative to other hashing algorithms like MD5, SHA-1, SHA-2 (this is good)
Adaptive, scales with computational power, resistant to brute-force
Verifies if two hashes were created from the same input without needing to reveal them
Not exclusive to Ruby or Rails – many languages have implementations
Include the bcrypt gem in Gemfile to use in Ruby project
User Schema
column name	data type	details
id	integer	not null, primary key
username	string	not null, indexed, unique
password_digest	string	not null
session_token	string	not null, indexed, unique
New Gems
bcrypt

better_errors

Different (nicer looking) error page
Full stack trace
Source line in editor
binding_of_caller

Enables extra features in better_errors
REPL on error page
Local and Instance Variable inspection
We won't use this on its own (only with better_errors)
3 Key Auth Functionalities
Sign up new users
Login existing users
Logout existing users
Sign Up
Relevant Routes for Sign Up
Sign up
get '/users/new', to: 'users#new'
post '/users', to: 'users#create'
#config/routes.rb
resources :users, only: [:new, :create]
How do we 'Sign Up' a user?
Pass params (username, password) through a form
Create a new instance of a user with these params
Try to save the user in the database
User needs password_digest and session_token attributes
Login, redirect, show errors, etc.
5 minute break
CODE DEMO 1
Let's sign up a user
Questions?
That was a lot!
Let's break for 5 minutes!
Login
Relevant Routes for Login
Login
get '/session/new', to: 'session#new'
post '/session', to: 'session#create'
#config/routes.rb
# note - singular resource
resource :session, only: [:new, :create] 
How do we 'Login' a user?
Database does not know anything about who is logged in
The 'logged in' status depends on cookies
The controller modifies our cookies using the session
A user is logged in if
user.session_token == session[:session_token]
What the heck is the session thing?
Hash-like object that we can add key-value pairs to, allowing for a nice interface to manage cookies on our site and allow data to persist across request-response cycles (remember HTTP is stateless)
Created under the hood by ActionController::Base for every request that comes in (note that it is lazily loaded)
Sends cookies back down to the browser with each response (browser sends them back up with each request)
Only available in controllers and views
CODE DEMO 2
Let's login a user
Questions?
Take a 5 minute break!
Logout
Relevant Routes for Logout
Logout
delete '/session', to: 'session#destroy'
#config/routes.rb
# note - singular resource
resource :session, only: [:destroy] 
How do we 'Logout' a user?
Remember, a user is logged in if:

    user.session_token == session[:session_token]
Therefore, we need to:

reset the user's session token
nilify session's session token
CODE DEMO 3
Let's logout a user
Now let's ponder some important questions...
[1/8] Why don't we need to include password in the schema if it is one of our params?
[2/8] What is the difference between encryption and hashing?
[3/8] Why is it important that session_token be unique? Indexed?
[4/8] Does password_digest need to be unique? Why or why not? Should it also be indexed?
[5/8] Why do we need to add allow_nil: true to password validation?
[6/8] Why do we call self.save! in reset_session_token!? What would happen if we didn't?
[7/8] Why do we reset the user's session token in the DB instead of setting it to nil on logout?
[8/8] Why do we only have one session (single resource)?
Kahoot!
Thanks! You are all rockstars!
