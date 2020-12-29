# Rails Controllers Demo

## Show Request-response lifecycle drawing

Within the first drawing, talk about:

1. Client makes HTTP request with at least a `method` and `path`
2. A website will perform a certain action based on the combination of the
  `path` and HTTP `method`.
  + Rails matches request's `method` + `path` to a controller action
3. Controller action (method) determines response to the client


Now add to the drawing, with these points:

+ Request info
  + method
  + path
  + query string (optional)
  + body (optional)
+ Response
  + status (look up common statuses on Google)
  + body
+ Rails has a `router` that maps the combination of a `path` and `method`
  to a specific `controller`'s `action` method.
+ These actions can perform different actions on our database:
  + Query for information
  + Add new information
  + Update existing information
+ Controller actions always need to render or redirect. Today, we will
  only be rendering. Redirecting will come on friday.

## Routing

Routes will define how our users can interact with our website.

It will do that by defining what `method` and `path` combinations we
are going to allow our site to accept, and map the combination of those
to a specific controller action (or controller method).

### First Route

Let's get on the web! I want to try and get all of our users in Chrome.

#### Quick Postman Overview

Postman in simple terms:

+ Allows us to make requests like a typical browser (Chrome)
+ Gives us more functionality to better customize requests

We can enter a URL, select our HTTP verb, easily build out our query string and body, then dispatch a request to our server.

Without starting the rails server, open up Postman try to submit a `GET` request to `http://localhost:3000/users`.

Explain the error and then start a server: `rails server`

Try to make the same request, with the server now running. Oh no! We have an error. Read the error (click 'Preview' in postman to see the error more nicely) - very descriptive! What's wrong? We need to write some routes!

This can also be abbreviated as `rails s`, similar to the `rails c`.

Let's go ahead and add our first route! (Tell the scribe to add this comment as well)

```ruby
# http_method 'path', to: 'controller#action'
get '/users', to: 'users#index'
```

The conventional controller action name for a list of an entity is `index`.

To see our current routes, we can use the command: `rails routes`

Question: Why don't we use `bundle exec`? A: The `rails` command by default uses the rails version specified in the Gemfile so `bundle exec` is redundant in this case - doesn't hurt if you add it, though!

Woah, what are all these other routes?! Those are `ActiveStorage` routes. We can prevent them from ever rendering (see bottom for how), but it's a bit of a cumbersome process and probably not something to distract students with. Instead what we can do is display the routes only for a certain table using the `-c` flag and specifying the name of a controller. Try this instead: `rails routes -c users`. Much nicer.

Try out the request again.

`Preview` the error that comes back

```txt
uninitialized constant UsersController
```

_**Another**_ Error! That's ok, errors are our friends. 

Great! Now let's build the controller and action to respond to this
request.

### First Controller and Action - Index

First create the controller by hand (make sure to spell the file name right!). Remember you must inherit from the `ApplicationController`. This works in a similar way to our models inheriting from `ApplicationRecord`. It acts as a middle man to allow our controllers to inherit all of rails built in methods + allow us to write our own methods to be shared across all controllers without needing to monkey-patch `ActionController::Base` or `ActiveRecord::Base`:

```rb
# users_controller.rb
class UsersController < ApplicationController
end
```

Now lets re-send our request:

```txt
The action 'index' could not be found for UsersController
```

Great, progress! Onto the next bug!

Now let's add an action method:

```rb
def index

end
```

<!-- This error will only appear if you test in Browser - suggest to test in Postman instead since the focus of today is on controllers and not views, and they haven't learned about templates yet. Avoids confusion. -->

<!-- Try again! Incoming error:

```txt
UsersController#index is missing a template
``` 
-->

Sweet, looks like no more errors (note, if you are testing in browser you will see errors - if in Postman you will not). We're not getting any real response yet (notice the `204: No Content` status), but that's fine - we are successfully routing to the proper controller action! 

Remember that naming conventions in Rails are very important. A lot of this might seem like magic but Rails is making a lot of educated guesses about where to look for information based on our naming conventions. Show them what happens when you misspell `UsersController` as `UserController` - note how it looks in the `users_controller.rb` file and is trying to find `UsersController` but can't. Then show what happens when you misspell `users_controller.rb` as `user_controller.rb` - now it can't even find the right file!

Due to Rails' sensitivity to naming conventions oftentimes we don't manually create these files, and instead rely on the Rails CLI to make them for us.

Lets go back to terminal, and use some of that rails magic to create our controller:

```bash
rails generate controller users
```

This command creates a whole range of useful files for us, especially as we move into creating views and tests later in the course. But for today, pay attention to it creating our `users_controller.rb` file in the `controllers` folder of our `app`.

At this point, I would also like to point out that we can use this same trick to generate our models.

Lets generate a test model just to show how it works:

```bash
rails g model test
```

generate can be shortened to g, because coders are lazy.

We can see that not only do we generate our test model with the class and inheritance already defined, but also our first migration file too, awesome!

We can now roll back this model using the following command:

```bash
rails destroy model test
```

We encourage you to write it out manually at least a few times, so you truly internalize the naming conventions, and understand what's goingon. However, as you become more experienced you should definitely use these shortcuts.

Now let's actually send information back to the user based on our RESTful
routes conventions. `GET /users` should return a list of users, so let's
just return all of them.

The two most common forms of response on the web are HTML and JSON. We'll
learn how to integrate HTML with Rails on friday, so today, we'll just use
JSON.

+ Very similar to Ruby's Hash Notation
+ A lightweight way to store information in an organized, easy-to-access manner
+ Why is it important?
  + a lot of public API's will respond with and to JSON
  + today, we will solely be responding with data and, therefore, JSON

```rb
def index
  users = User.all

  render json: users
end
```

Try it out in Chrome. Sweet, that's it!

---
# HOW ARE WE FOR TIME?? IF OVER AN HOUR, BACK TO SLIDES
---

### Route and Controller - Show

Now let's build a route to get a single user.

To do this, we're going to need to tell rails we want to accept anything
after the second `/`. To do that, we preface the value with a `:`.

Whatever we put after the `:` will be the name of the wildcard. This will
be useful in the next step.

```rb
get '/users/:id', to: 'users#show'
```

The conventional controller action name for a single entity is `show`.

Check out `rails routes -c users`.

Now let's make the controller action.

Make a `show` method and throw a debugger inside.

```rb
class UsersController < ApplicationController

  def index
    users = User.all

    render json: users
  end

  def show
    debugger
  end
end
```

Make a `GET`request to `/users/1` in Postman. Rails gives a hash-like object to 
all controllers called `params`. Let's check it out.

```rb
params
params[:id]
```

As discussed in the slides, these `params` come from three different places:

+ Wildcards in the URL
+ Query string in the URL
+ The body of the HTTP request (we will use this in POST and PATCH)

We have access to `params` in all of our controllers (not the models, we
have to pass down the information to them).

<!-- Rather than testing in chrome, lets use a new tool called Postman. You will be using this tool in today's project. -->

Lets dispatch a `GET` request to our server using the path `/users/1`, adding the key value pair of 'andy': 'is awesome' to the query string, and let's also add in 'mike': 'suxxx' to our body. Remind them that we normally shouldn't use the body in `GET` requests but we are doing this as an example.

Now let's see what we have in our params.

Pretty cool right?

We can use our params to grab the correct user.

```rb
User.find(params[:id])
```

Continue through the debugger.

Now let's use that in the controller:

```rb
  def show
    user = User.find(params[:id])

    render json: user
  end
```

Check in postman. Success!

---

# IF NO BREAK YET, BACK TO SLIDES FOR A BREAK!

Play Drake's Controlla during break - 
---

### Route & Controller - Create

Now let's add something to our database.

The RESTful route for creating is `POST /users`. The conventional
controller action name is `create`.

Let's add that:

```rb
post '/users', to: 'users#create'
```

Check `rails routes`.

Now, before we write the controller method, let's see how we're going to
even get the data inside of the request.

Let's prepare a `POST` request. We can add information to the body of the
request by going to the `body` tab.

*x-www-form-urlencoded* is the default. It is for text/ASCII data.

*form-data* is for non-ASCII or large binary data.

Put in the information for a user.

Make the `create` controller action and put a debugger in it. Try it.

When submitted, will get a `ActionController::InvalidAuthenticityToken`
error.

Mention that for non-GET requests (i.e. state-changing operations) Rails will
protect us against something called a CSRF attack. We'll get more into what that
means next week, but for now, know that when we are testing in Postman we'll have
to temporarily disable CSRF protection.

Rails 5.2 no longer includes `protect_from_forgery` inside
`ApplicationController`. You'll have to add the following to
`config/initializers/content_security_policy.rb`:

```rb
Rails.application.config.action_controller.default_protect_from_forgery = false
```

OR, inside of `ApplicationController` add the following:

```rb
skip_before_action :verify_authenticity_token
```

Ask for a volunteer from the class to explain how we might go about writing this
controller action, where we would like to a) Create the user and save them to 
our database, and b) return a JSON representation of the user as a response

Show that it is annoying to have to pick out all the exact params we want.
Let's first nest all of these attributes under a `user` key in our hash.

Add `user[key]` to each.

Enter back into the debugger and see.

We could just key into `user` and get the relevant info (show that). But
we want to let the user know if they submitted bad information (there is
no `params[:user]`).

For that, we can use some of the functionality that `params` gives us.
Let's use the `require` method. `require` will throw an error if the given
key isn't found within params. If it is, it'll return whatever the value
of that key is.

Try it in debugger.

```rb
params.require(:users) # errors
params.require(:user) # get info back
```

Note that in the second one, there is a `permitted: false` in there.

This is because we haven't told params which keys we want to use. What if
we had a column like `is_admin` in our table and we wanted to manage that
internally?

A user could submit that to us in the params so we want to make sure only
the key-value pairs we want are getting through.

For that, we can use the `permit` function. This function will _allow_
any of the given keys to be in the final `params` hash, but it won't throw
any errors if it doesn't find them. It will also ignore any additional
params that are included. Let's use it:

```rb
params.require(:user).permit(:username, :email, :age)
```

This is called `whitelisting params`. Rails will actually require you to
do this before you can create or update a model.

See that permitted is now true! Let's build the controller action now:

```rb
  def create
    user = User.new(params.require(:user).permit(:username, :email, :age))

    if user.save
      render json: user
    end
  end
```

Try it out! Open `rails c` and see that it is `User.last`.

Well, what about if it doesn't work?

Put an `else` with a `debugger` inside and submit the same info again.
Remember that there are uniqueness constraints.

On submit, you should hit the debugger. Try out

```rb
user.valid?
```

Then try

```rb
user.errors.full_messages
```

Nice! Let's just render those back to the user.

```rb
  def create
    user = User.new(params.require(:user).permit(:username, :email, :age))

    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end
```

The default status when we render something is `200`. We want to make sure
the user knows they did something wrong, so we send them back a `422`,
which means `unprocessible entity`.

How could we modify the code if our user saves successfully, to produce the same 
result? In other words what could we do instead of running `render json: user`.
We could redirect! In our case it's simple enough to simply render the json of 
the user directly in here, but if there was more work that went into properly
displaying a user we wouldn't want to duplicate that logic here if we already
have it elsewhere. Since the `create` action's job is to create the user it is
common that it's response would be a `redirect` rather than a direct `render`, 
so it can delegate to another controller action, whose primary responsibility
is to render some information. 

Show how we can change the line to `redirect_to "/users/#{user.id}"` and achieve
the same effect. Later we'll come back and change this when we switch to using 
`resources` to setup our routes and get the handy rails helper methods. 

Alright, create is complete - now let's do update! I want you all to help me out
with this one - how should we start off? (Call on someone). That's right, we 
need to first create a route! Let's do that.

```rb
patch '/users/:id', to: 'users#update'
```

Now how could we write this controller action? (Work through it with whoever
volunteers, and eventually guide the code to this state):

```rb
  def update
    user = User.find(params[:id])

    if user.update(params.require(:user).permit(:username, :email, :age))
      redirect_to "/users/#{user.id}"
    else
      render json: user.errors.full_messages, status: 422
    end
  end
```

This is pretty good, but there's something a little not-DRY about our code. How
could we make this better? That's right our param requirements for `create` and
`update` are exactly the same - let's abstract out the whitelisting of these
parameters to its own method and use that instead.

```rb
  private

  def user_params
    params.require(:user).permit(:username, :email, :age)
  end
```

Update the `update` method to look like this (do something similar for `create`
as well)

```rb
  def update
    user = User.find(params[:id])

    if user.update(user_params)
      redirect_to "/users/#{user.id}"
    else
      render json: user.errors.full_messages, status: 422
    end
  end
```

Test it out.

### Delete / destroy

```rb
delete '/users/:id', to: 'users#destroy'
```

```rb
  def destroy
    user = User.find(params[:id])

    user.destroy

    render json: user
  end
```

### Resources

Now, the routes file is looking pretty repetitive. And it is, which is
why rails gives us a handy method `resources`. Let's give it a try!

```rb
resources :users
```

Test out `rails routes -c users`.

We can see that there are two new routes that got added, `new` and `edit`.
We'll be using those on friday. We can specify only particular routes
with an options hash and the `only` or `except` key. Let's do that so our
app routes match the controller actions we're writing.

```rb
resources :users, except: [:new, :edit]
```

`rails routes -c users`

Let's go back and refactor our redirects to be more semantic and declarative.
Rails gives us a bunch of handy helper methods we can use to redirect to our 
routes. Take a look at rails routes again and explain how the 'prefix' column
works. Then change the code to:

`redirect_to user_url(user.id)` 

explain how this is easier to debug if errors arise (undefined method vs. some 
weird URI error), and is more semantic to someone reading our code. Finally 
show off some more Rails magic and remove the call to `.id`, changing it to the 
following:

`redirect_to user_url(user)`.


---

## 5 minute break!

---

### Nested Resources

Go into `chirps` and nest the `index` under `users` first.

```rb
  resources :users, except: [:new, :edit] do
    resources :chirps, only: [:index]
  end
```

Run `rails routes -c chirps`

Create a `ChirpsController` and `index` action.

```rb
class ChirpsController < ApplicationController
  def index
    chirps = Chirp.where(author_id: params[:user_id])

    render json: chirps
  end
end
```

Try it out in Chrome!

Let's add one last route - a `show` for `chirps`. Should this route be nested or not?

Discuss how this route does not need to be nested in the context of user. It's 
superfluous since we only need to know the chirp's ID to access the resource. 
The user's id is irrelevant. Nested routes mostly only make sense for index 
routes, though we will see some examples of nested create routes as well in the 
coming weeks.

```rb
  resources :chirps, only: [:show]
```

`rails routes`

Add `show` action

```rb
  def show
    chirp = Chirp.find(params[:id])

    render json: chirp
  end
```







### Removing the `ActiveStorage` Routes

In Rails 5.2, there are a set of `active_storage` default routes.
To remove these, change your `config/application.rb`. Only way I
could find to do this right now is to not require `all` and
manually require everything else :(

```rb
# require 'rails/all'

require "rails"

# Include each railties manually, excluding `active_storage/engine`
%w(
  active_record/railtie
  action_controller/railtie
  action_view/railtie
  action_mailer/railtie
  active_job/railtie
  action_cable/engine
  rails/test_unit/railtie
  sprockets/railtie
).each do |railtie|
  begin
    require railtie
  rescue LoadError
  end
end
```

Then, in your `development.rb`, comment out the following line:

```rb
config.active_storage.service = :local
```

If you are pushing to production and testing, be sure to do this for
`production.rb` and `test.rb` as well.

Finally, remove the following line from `application.js`:

```js
//= require activestorage
```
