# W6D5
## Rails Views

---

![move](https://media.giphy.com/media/SW3PNayoSGXao/giphy.gif)

---

## Lecture Format

* Looong code demo
  * We're going to code out views for each of our controller actions.
  * Take lots of notes!
  * There will be a lot of refactoring!

---

## Learning Objectives

1. Explain what the views are responsible for in the MVC framework
2. How to utilize embedded ruby in views
3. How to render forms and partials

---

![MVC](https://i.giphy.com/media/5PVHPYJAoMjRu/giphy.webp)

---

## Quick Recap

* Controllers / Server
* RESTful routes
  * A mapping between HTTP verb + URL path and an action/response  
  * `resources :users, only: [:new, :create, :index, :show, :edit, :update, :destroy]`

---

![restful-routes](https://cdn.lynda.com/video/159165-107-635293993475267315_338x600_thumb.jpg)

---

## View

* The client-facing portion of Rails
* Comprises the multiple types of responses from the controller
  * e.g. webpage (HTML) vs web service (JSON, XML, etc.)
* Web Page or `Template` Composition
  * HTML
  * CSS
  * JavaScript

---

![Rails](http://media.tumblr.com/f145fa01dd8cadd28537194de00cda59/tumblr_inline_mptqzmW6Bj1qz4rgp.png)

---

## Controller Rendering

* Rendering
  * Views - JSON, HTML
  * Syntax: `render <template>`
  * Example: `render :show`
    * Rails knows to look here: "/app/views/users/show.html.erb"
```ruby
render :edit
render template: "books/edit"
render template: "books/edit.html.erb"
```

---

## When Rendering Views

* Renders the specified template within `application.html.erb`
  * Specifically at `yield`

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
  * `<%# Ruby code here %>`
* use instance variables from controllers

---

## Debugging

* Good ol' byebug
  * Keep in mind, you don't have to require gems manually anymore, just bundle install
* Stack trace
* `binding_of_caller` and `better_errors` gem

---

## Blue Bird Demo - First ERB and Partial!

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
 
---

## Controller Redirecting

* Redirecting
  * Ends current request / response cycle and initializes a second
  * Syntax: `redirect_to <Rails URL Helper>`
  * Example: `redirect_to user_url(@user)`
  * Use the prefixes provided to you by `rails routes`

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
* no instance variables in partials!

---

## Some things to remember!

* returning ERB tags vs. non-returning
* instance variables are needed to supply data to your views
* use render `<template_name>`in controller action
* `template_name.html.erb`
* hidden inputs are great for passing along information to params that doesn't need to be specified by the user

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=a57d345d-f4a4-4c24-bfc0-ed9ebaea1b4f)

---

![shiba](https://i.imgflip.com/1uiu16.jpg)

---

## Go forth and make full web apps with Rails!

---