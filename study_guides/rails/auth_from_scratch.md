# Steps for writing auth from scratch

This is a guide to creating a simple app using the auth pattern we teach. It may not include everything that is possible (no mention of `before_action` in here, but it's purpose is to give you the essentials of the auth pattern.

## Generate your rails app (if you don't have a skelton)

`rails new YourAppName -d=postgresql` if you want to use postgresql.

(`rails new YourAppName --database=postgresql` is the same).

## Create your database

`rails db:create`

(This step can happen later, but it *must* come before you run `rails db:migrate`, otherwise you will get an error).

For Rails Assessment 2, *MAKE SURE YOU READ THE README*. There will be instructions to set up the testing db as well.

## Generate Your users table and model

I recommend: `rails g model user` as this will generate the migration file _and_ the model file.

(Note: you can run this command with addtional arguments to specify the columns you'd like (default datatype is string), aka `rails g model user username password_digest session_token some_foreign_key:integer`)

### Fill out your migration file for users

You'll want to add the following to your users table (in the migration file):

* t.string :session_token, null: false
* t.string :password_digest, null: false
* (any other user specific stuff, like email and/or username)
* add_index :users, :session_token, unique: true

_Note: for Rails Assessment 2, you do not need db constraints  like `null: false` or `unique: true` (on an index) to save on time. It won't hurt to have it for Rails Assessment 2; and outside of Rails Assessment 2, you should use them._

### Migrate!

`rails db:migrate`

For Rails Assessment 2, *MAKE SURE YOU READ THE README*. There will be instructions to set up the testing db as well.

## Time for User model

If you ran `rails g model User`, you should already have a `user.rb` file.

If not, you will need to manually create this file in `/app/models/`. Make sure it looks like this:

```ruby
class User < ApplicationRecord
end
```

### Write your validations

For Rails Assessment 2, this will be spec dependent, but likely it will be something similar to:

```ruby
validates :password_digest, presence: true
validates :session_token, presence: true, uniqueness: true

# This is our plaintext password validation
# We don't have a password column (we don't
# want to store plaintext passwords in our
# database!) We can however validate the
# plaintext password to have a length of 6
# (it can be whatever you want) when creating
# a user as we will say something like:
# User.new(username: "banana",
#          password: "123456")
#
# "allow_nil: true" is important because if
# we don't have this, if we try to resave the
# user in the future (update them), we won't
# have a plaintext password. This prevents the
# validation from being run in this case. 
# Ex: anytime you log in or log out the user, 
# you retrieve the user record from the database
# and receive a new instance of a user (with no
# plaintext password attribute). As part of logging
# in and out, you are updating their session_token 
# and saving them. If you did not have the allow_nil,
# ActiveRecord will not let you save because it's
# trying to validate the plaintext password's length.
validates :password, length: { minimum: 6, allow_nil: true }

# Other validations, like username (these will depend on the specs, but an example might be:)
validates :username, presence: true, uniqueness: true
```
### (The order of the following is up to you, but you will need all of these methods)

### Write the password methods

We want to:

* create a user instance with a password attribute
* create a password digest
* validate the plaintext password (partially done above)
* check if a plaintext password == the password_digest

#### create a user instance with a password attribute / create a password digest

```ruby
def password=(password)
  @password = password
end
```

This allows us to say `User.new(username: "banana", password: "123456"), as a setter will be called for each key in the argument hash here (`:username` and `:password`).

We are storing it in an instance variable so we can validate it later...

##### Password digest

To set the password digest we will want to use our setter on the `password_digest` column that active record gives us, and set it to a BCrypt instance.

```ruby
def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end
```

`BCrypt::Password.create` will take in a *plaintext password* and encrypt it for us. If we say `BCrypt::Password.create("banana")`, we might get something that looks like `"$2a$12$SsSGP0f.uXTAyfyu/qG1h.8yyJnULs1mN4QNVPR1ywbsl7p/qcnbW"`, which looks like a string, but it is a `BCrypt::Password` instance`.

When we save the user, this will be converted to a string to store in our users table.


#### validate the plaintext password

We already wrote our password validation: `validates :password, length: { minimum: 6, allow_nil: true }`

Now we want to give our validation a method to call:

```ruby
attr_reader :password
```

Remember that `@password = password` in our password setter method? This is useful here because we can create a reader so our validation can read the instance variable's value (our plaintext password) to validate its length.

#### check if the password matches the password digest

This method will be used when you want to check if a user's plaintext password is the correct one (does it match that user's password digest).

To do this, we'll want to use `BCrypt::Password.new(password_digest_string)`.

*Important:* `new` takes in a `String` that looks like a password_digest, and will convert it to an instance of a `BCrypt::Password`. When it's an instance of a `BCrypt::Password`, we can call the `BCrypt::Password#is_password?` method, which will check if the provided argument (plaintext password) matches the password digest.

(Compare with *create* which takes in a plaintext password, and encrypts it for us (a `Password::BCrypt` instance)).

```ruby
def is_password?(password)
  BCrypt::Password(self.password_digest).is_password?(password)
end
```

### Session Token Methods

We will want to:
* generate a session token
* ensure the session token is created automatically for us before the user is saved to the db

#### Generate a session_token

This method is optional, but you need the logic for it somewhere (I like to put it in its own method).

```ruby
def self.generate_session_token
  SecureRandom::urlsafe_base64
end
```

`SecureRandom::urlsafe_base64` will create (by default) a 16 byte string using something called base64 encoding. Note that it will be longer than 16 chars.

##### OPTIONAL: Shortish explanation for base64 encoding

*NOTE IF YOU ARE CONFUSED BY THIS, THAT'S OKAY; THIS IS EXTRA INFO THAT ISN'T NECESSARY FOR UNDERSTANDING AUTH*

`SecureRandom::urlsafe_base64(16)` (16 is default arg), will be a 16 byte string, but it will be longer than 16 chars. Why?

Characters are normally encoded as 1 byte (8 bits). So a 16 byte string in normal encoding == 16 characters. (Every byte is occupied by 1 character).

In base64 encoding, characters are encoded as 2/3 byte (6 bits). This allows us to fit more characters in 16 bytes (as each character takes up less than a byte).

In this case, we'll get 16 bytes * 8 (bits/byte) = 128 bits of total space for storing characters.

128 bits / 6 (bits/char) = 21.3 total number of characters we can represent in 128 bits in base 64 encoding. We can't have .3 of a character, so we end up getting 22 total characters.

#### Ensure we have a session token

After writing the logic to generate a session token, we want to make sure have our User instance have a session_token.

```ruby
# This will run automatically after the
# user is initialized .
# You can also use `before_validation`
# which will automatically run before
# the validations are run.
after_initialize: ensure_session_token

# ...

# Store the generated session token in the
# user's session_token attribute
# You SHOULD use lazy assigment here. Without
# it, you might run into some difficult bugs.
def ensure_session_token
  self.session_token ||= User.generate_session_token
end
```

### Add a way to lookup a user by username (or email) and password

We will need a method to search for a user by username/email and verify the right password was given (when attempting to log in as a user).

```ruby
def self.find_by_credentials(username, password)
  # look for the user with username in our db
  user = User.find_by(username: username)

  # if we find a user...
  if user

    # check if their password is correct
    if user.is_password?(password)
      user # this is the right user and password!
    else
      nil # password is wrong
    end

  else # we didn't find the user
    nil
  end
end

# shortened version
def self.find_by_credentials(username, password)
  user = User.find_by(username: username)
  if user
    user.is_password? ? user : nil
  else
    nil
  end
end
```

### Add a method for resetting the session token

For logging users in and out, we will want to update their session_token stored in the db.

```ruby
def reset_session_token!
  self.session_token = User.generate_session_token

  # VERY common bug to forget the following:
  # make sure to save the user! (the bang
  # will throw an error, which we want this
  # to fail loudly and stop execution to make
  # it easier for us to debug)
  self.save!

  # VERY common bug to forget the following:
  # We want to return the user's updated
  # session_token so we can later use it
  # when we are creating a cookie
  self.session_token
end
```

*At this point, the User model should be complete.*

## Controller time!

At this point, our User model should have all validations and methods it needs for user auth to be ready.

We can move on to creating the `UsersController` and `SessionsController`. Note this can vary depending on what you are trying to do, but I will try to write what will likely be consistent.

### UsersController

Generate your controller with `rails g controller users` (*make sure users is plural*).

(Note: you can generate routes and actions with this command, aka `rails g controller user new create destroy`)

For user auth, you'll want _at least_ the following actions in your controller:

* `#new` (sign up form)
* `#create` (processes user data to create them in the db, and log them in)

```ruby
# In your controller file
def new
  render: new
end

def create
  user = User.new(user_params)
  if user.save # do NOT use save! here
    login!(user) # defined in ApplicationController
    redirect_to cats_url # some page you want to go to
  else
    flash.now[:errors] = user.errors.full_messages
    render :new # re-render the sign up form
  end
end

private
def user_params
  # if your user doesn't have a username
  # but has an email, use email instead
  params.require(:user).permit(:username, :password)
end
```

Therefore, the routes you will want (at minimum) are:

```ruby
resources :users, only: [:new, :create]
```

### SessionsController

*Note:* it's _very important_ that the sessions controller be plural. `rails g controller sessions`.

You'll want the following actions:

* `new` (log in form)
* `create` (process log in data, and logs user in)
* `destroy` (logs user out)

```ruby
# In SessionsController
def new
  render :new
end

def create
  user = User.find_by_credentials(params[:user][:username], params[:user][:password])
  if user
    login!(user)
    redirect_to cats_url # or wherever you want to go
  else
    flash.now[:errors] = ["Invalid credentials"]
    render :new
  end
end

def destroy
  logout! # defined in application controller (you could write logic here as well)
  redirect_to new_session_url
end
```

Your routes for session in this case will look like:

```ruby
resource :session, only: [:new, :create, :destroy]
```

Why `resource` and not `resources`? The simple answer is we do not have a sessions table, so for a request we are dealing with at most 1 session at a time.

## ApplicationController

Finally, you'll need some methods defined here so your other controllers can use them, and so your views can use some of them.

```ruby
# In ApplicationController

# helper_method simply gives your VIEWS access to the method(s) supplied
helper_method :current_user

def current_user
  # We are searching in the session_token column
  # of the users table for a session_token that
  # matches the one in our cookie
  #
  # We also are using lazy assingment, which
  # will say for the current request/response
  # cycle, if we already called current_user
  # method, we won't need to search our db again
  current_user ||= User.find_by(session_token: session[:session_token])
end

def login!(user)
  # Remember that we wrote
  # User#reset_session_token!
  # to return the updated session_token stored
  # for that user in the db.
  #
  # session[:session_token] creates a key called
  # 'session_token' in the 'session',
  # which Rails gives us so we can read/write
  # information to a cookie. Rails sends this
  # in the response, and our browser will
  # see the cookie and hang on to it.
  # For every future request to our Rails app,
  # our browser will send the cookie as part
  # of the request.
  #
  #  # https://guides.rubyonrails.org/action_controller_overview.html#session
  #
  # Remember HTTP is stateless. The only way to
  # persist data between requests is by using
  # cookies.
  #
  session[:session_token] = user.reset_session_token!
end

def logout!
  # Find the current user, and change their
  # session token in the db
  current_user.reset_session_token!

  # Next, clear session_token in the cookie
  # The browser will see that `session_token`
  # in the cookie is nil, and delete it from
  # it's cookie jar
  session[:session_token] = nil
end
```

*At this point, user auth should be good to go, minus the views (which would be your next step)*

## The views

This will be highly dependent on what you want to do, but based on the code above, here is a general approach.

### User Views

#### `new.html.erb` aka Sign Up

You'll want to have errors somewhere, which will generally look like:
```html
  <% if flash[:errors] %>
  <ul>
  <% flash[:errors].each do |error| %>
    <li><%= error %></li>
  <% end %>
  </ul>
<% end %>
```

The form will look something like:
```html
<form action="<%= users_url %>" method="POST">
  <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
  <input type="text" name="user[username]">
  <input type="password" name="user[password]">
  <input type="submit" value="Sign Up">
</form>
```

Our action and method for the form will match our api endpoint (or the route). Here we want to hit `POST /users`, so our method is `POST` and our action is `users_url`.

*Make sure to include the form authenticity token on EVERY form* otherwise you will get an error.

### Session views

#### `new.html.erb` aka Log In

The form will look something like:
```html
<form action="<%= session_url %>" method="POST">
  <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
  <input type="text" name="user[username]">
  <input type="password" name="user[password]">
  <input type="submit" value="Log In">
</form>
```

### Other views

Somewhere you will need a logout button, which will be a *form*:

```html
<% if current_user %>
<form action="<%= session_url %>" method="POST">
  <input type="hidden" name="_method" value="DELETE">
  <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
  <input type="submit" value="Log Out">
</form>
<% end %>
```

Note that you _still_ need the authenticity token (it's a form), and you need to override the form's method to be a `DELETE` (`<form>` elements can only have `GET` or `POST` as methods; you have to override it for `PATCH`, `PUT`, `DELETE` using a hidden input with the `name="_method"`).


At this point, you should have a basic functioning app (note that when you log in or sign up, it's currently redirecting to `cats_url` which isn't a defined route so you'll get an error. You might want to test by making an index action for UsersController that you can only see if you are logged in).
