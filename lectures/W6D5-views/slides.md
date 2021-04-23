# W6D5
# Rails Views

---

![move](https://media.giphy.com/media/SW3PNayoSGXao/giphy.gif)

Note:

* I know you might be feeling a little bit like this, but that's okay!
* It's supposed to feel that way, because it really did happen fast!
* After this week we will have covered everything that we need to to understand Rails for the way in which we are going to use it!

---

## Lecture Format

* Looong code demo
  * We're going to code out views for each of our controller actions.
  * Take lots of notes!
  * There will be a lot of refactoring!

---

## Learning Objectives

1. Explain what the views are responsible for in the MVC framework
2. Why do we need hidden input types?
3. Given a show controller action for users, how would you render the user's name and email?
4. When you type into the browser `google.com`, what happens?

Note:

* Our goal today is to finish the MVC framework that we've been harping on the past week
* Today we are going to talk about the V in MVC which will finally put everything all together
* Doing so will allow us to complete our first web app!!
* I think that deserves a round of applause!

---

![MVC](https://i.giphy.com/media/5PVHPYJAoMjRu/giphy.webp)

Note:

* In summary, after today you're going to be the real MVC
  * Get it... Instead of MVP...

---

## Quick Recap

* Controllers / Server
* RESTful routes
  * A mapping between HTTP verb + path and an action/response  
  * `resources :users, only: [:new, :create, :index, :show, :edit, :update, :destroy]`

Note:

* Before we dive too deep into what the V is in MVC, let's do a short review
* Remember, the user will make a request from the browser, and then it will go through our router and send a response back to the user. Yesterday we sent JSON back to the users (aka the browser), today we want to send HTML (an actual webpage)
* REST is a standardized convention to faciliate CRUD

---

![restful-routes](https://cdn.lynda.com/video/159165-107-635293993475267315_338x600_thumb.jpg)

---

## View

* The client-facing portion of Rails
* Comprises the multiple types of responses from the controller
  * e.g. webpage vs web service
* Web Page or `Template` Composition
  * HTML
  * CSS
  * JavaScript

Note:

* Alright, on to the new material!
* As I mentioned earlier, today we are going to be focusing on the V in the MVC framework, which stands for Views
* We often refer to this as the **client-facing portion of Rails**
* When we mention the view, we are talking about the response that the controller gives
  * This could be something like we did yesterday rendering JSON as data back to the browser or it could be a literal webpage made up of HTML
* When we do render a webpage, it is typically comprised of HTML, CSS, and JavaScript
  * The HTML is the skeleton/bones of the page, the CSS is the design of the page, and the JavaScript helps bring our page to life
    * We are going to see some cool things we can do with JavaScript in a few weeks but for now we are going to focus on how to get the basics down for rendering views in Rails
* If anyone asks a webpage refers to an HTML page received from a response that is usable by a human on a browser, whereas a web service refers to a response to be used by another computer program or machine typically in the form of JSON, XML, etc. The way our app is currently set up is more as a web service (specifically a Web API) than as a webpage

---

![Rails](http://media.tumblr.com/f145fa01dd8cadd28537194de00cda59/tumblr_inline_mptqzmW6Bj1qz4rgp.png)

Note:

* Recap what they currently know in the MVC framework:
  * First we know that a user is going to submit a request via the browser
  * That request will then go through our router and it will determine which controller and which method should be called
  * In this case the user made a `get request` to `/users` thus our router is sending us to the `Users#index` controller method
  * Inside our method, we will then access the data in our DB via the User model
  * Yesterday, we simply rendered this resulting data back as JSON
    * This is totally fine and something we will often do, but we are going to learn an additional way to respond as well
  * Rather than simply sending JSON we are now going to render HTML back to the browser via a template
  * Our controller chooses which template to render back to the user

---

## Controller Rendering

* Rendering
  * Views - JSON, HTML
  * Syntax: `render <template>`
  * Example: `render :show`
    * Rails knows to look here: "/app/views/users/show.html.erb"

Note:

* Before we were rendering :json and now we are rendering a template
* Explain that rails knows where to find this template by a convention.

---

## When Rendering Views

* Renders the specified template within `application.html.erb`
  * Specifically at `yield`

```ruby
render :edit
render template: "books/edit"
render template: "books/edit.html.erb"
```

Note:

* There are tons of other ways to write this, but they really only need the simple render :name...

---

## Embedded Ruby (ERB)

* HTML templates augmented with Ruby Code
  * `<% Ruby code here %>` - execute Ruby code without a return value 
  * `<%= Ruby code here %>` - executes Ruby code with a return value to be embedded into the template
* File name example: `show.html.erb`

---

## Things to remember about ERB code

* ERB code is **NOT** visible to the client / browser
* Don't try to run `puts` or `print`
* Comment out by also inserting a # immediately after first %

---

## Debugging

* Good ol' byebug
  * Keep in mind, you don't have to require gems manually anymore, just bundle install
* Stack trace
* `binding_of_caller` and `better_errors` gem

Note: 
* These gems give us a full stack trace and the live shell (REPL) on every stack frame.

---


## Blue Bird Demo - First ERB!

---

## The `new` and `edit` routes

* HTML/ERB template to create or update an instance of data
* They simply render templates that contain forms!
* All they do is render a form!

---

## Form Anatomy!

1. action (aka path/rails helper)
2. HTTP method (ex: POST)
3. inputs with labels (optional)
4. submit button
 
Note:

* `new` and `edit` are `get` requests to get the form itself. With those forms we can then gather and `post` data.
* It will send a request with the corresponding action and method as well as the inputs in the body of the request
* Our router and then controller will then decide how to respond

---

## Controller Redirecting

* Redirecting
  * Ends current request / response cycle and initializes a second
  * Syntax: `redirect_to <Rails URL Helper>`
  * Example: `redirect_to user_url(@user)`
  * Use the prefixes provided to you by `rails routes`

Note:

* Redirect: Ends current request (sends back a 302 with a url the user should go to)
  * The browser then gets to determine if it wants to redirect (which generally it would automatically)
  * Thus, a new request is made to the url that the redirect specified and is treated just like a normal get request to our server
  * Our server determines how to respond and then responds
* Motivation: Separation of concerns, not duplicating logic, easy to change it later


---

## Blue Bird Demo

---

## Review Time!

---

## Partials

* Primary method of refactoring / DRYing up HTML code
* Example File: `_form.html.erb`
* Syntax: `render <Partial Filename>, options_hash`
  * Omit the `_` character when inserting the partial's filename
  * Options hash can contain data to be passed into partial
* Example: `<%= render 'user', user: @user %>`
* Rails will automagically look for a file of the specified name in the folder under `Views` that matches the corresponding model name


---

## Some things to remember!

* returning ERB tags vs. non-returning
* instance variables are needed to supply data to your views
* no instance variables in partials!
* hidden inputs are great for passing along information to params that doesn't need to be specified by the user.

Note:
* `button_to` and `link_to` are mentioned in the readings but they are Rails-specific methods and so it's better to get practice using an anchor tag ( `<a href=""></a>`) and the input type submit for a button on their forms as those are HTML elements, which will come up in the future with React/Redux.

---
## [Kahoot!](https://play.kahoot.it/v2/?quizId=a57d345d-f4a4-4c24-bfc0-ed9ebaea1b4f)
---

![shiba](https://i.imgflip.com/1uiu16.jpg)

Note:
* Rails does a lot for us, but don't forget it's all just ruby code in the background! (helper methods, supplying instance variables...)
---


## Go forth and make full web apps with Rails!

---