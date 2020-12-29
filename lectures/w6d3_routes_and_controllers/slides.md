# W6D3

## Rails Routes & Controllers

---

![Peace-of-Mind](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w6d3-rails-controllers/assets/peace_mind.jpeg?token=AHKLMADIYI3X5XFYQXAYC4K76OCBI)
  
---

## Learning Objectives
+ Explain the basics of an HTTP request-response cycle
+ Explain how the request-response cycle works with respect to Rails & MVC
+ Explain what a RESTful API is
+ Build Rails Routes, Controllers & Actions corresponding to the 7 RESTful routes

---

## What is a server?

Note:
+ The term 'server' is used to refer to both software and hardware. 
+ Speaking in terms of software, the server is what runs all the code of your application. Most often, servers follow a request-response pattern where it is constantly 'listening' for requests, and then uses the application code to create or _serve_ a response to the _client_ (machine that made the request). The client and server communicate via a _network_, but we don't need to get to into that - for now the internet will still be a black box that is magically able to make machines in remote locations communicate with each other.
+ As mentioned, the term 'server' is also oftentimes used to refer to the actual machine running the application code. I think the software definition is more important to think about since it gets to the heart of what a server really is (code that can serve the end user what it is requesting) and since machines are often used to run multiple processes (they usually aren't _dedicated servers_ whose only job is to run the server software).
* Keep this definition in mind later when we talk about the **Rails Server**.

---

## What happens when you go to `google.com` and hit `Enter`?

Note: 

+ This is one of the most classic interview questions in the web development industry.  (The real answer includes `DNS`s, `Load Balancers`, etc.)
+ Here's the basic process:
  + Browser checks local cache for a matching DNS record to get an IP address
  + If address not in local cache, checks OS, then dispatches a DNS query if still not found
  + The Browser then initiates TCP connection with server using this IP address
  + The Browser sends HTTP request to server (GET www.google.com page)
  + The Server handles request and sends back response w/ status code

---

![http](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w6d3-rails-controllers/assets/basic-http-request.png?token=AHKLMAGE2JX6NBP3GRMBLMK76OCD6)

Note:

+ When we make our request this `http` gets added to the front of the URL - does anyone know what HTTP is?
+ HyperText Transfer Protocol
+ Underlying protocol used by the World Wide Web that defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.
+ We could talk about HTTP for a long time. In short, HTTP involves a Request and Response between a Client (aka your Macbook) and a server (aka your Rails App)
+ Client makes some request, and the server either creates a side-effect, or gives you a resource back (commonly HTML, but **it doesn't have to be**)

---

# HTTP Request Basics
  * Comprised of:
    * **Request Line**
      * **Method (HTTP Verb)** (e.g. `GET`, `POST`)
      * **Path** (e.g. `/users`)
      * **Query String** (e.g. `?loc=san+francisco` - _optional_)
    * **Headers** (e.g. `Host: www.google.com`)
    * **Body** (e.g. `username=johndoe` - _optional_)

Note: 

- Note that these are the only portions we are focused on today, we'll get more into HTTP when we do Rails Lite.
- The **method**, or **HTTP Verb** defines what type of action is being performed. They're pretty self-explanatory, and we'll talk about them more in a second. 
- The path defines what resource we are looking for. 
- The body and query string provide any extra information we may need.

---

# HTTP Methods (CRUD)

* `POST` (**C**reate)
* `GET` (**R**ead)
* `PATCH` (**U**pdate, also `PUT`)
* `DELETE` (**D**elete)

Note:

+ When we think about the core actions we need to be able to perform on an application resource, it's really only these 4 things. We need to be able to read information from the DB so we can display it, add new things to the DB, update existing things, and delete things. That's it - that's what CRUD is.
+ Common question: "What's the difference between `PATCH` and `PUT`?" A: The answer is only mildly interesting, so I encourage you to google that on your own time :)  

---

# REST

---

## Parts of a URL

![url-parts](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w6d3-rails-controllers/assets/url-parts.png?token=AHKLMADRYIRJE6PGVSIETNC76OCFS)

Note:
+ Discuss how we make an HTTP request to a _domain_ and that everything that comes after the domain is what we call the _path_. Often, students are confused the difference between a URL and a path. Explain how the routes we write in our app are simply paths that are relative to the domain. Let them know that we aren't putting our apps on the internet yet so we'll be using `localhost` which is a domain for our own machine's IP (which is always `127.0.0.1`).

---

## RESTful Routes

![restful-routes](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w6d3-rails-controllers/assets/restful-routes.png?token=AHKLMAFBK5PY6KEFT6AFJEK76OCHI)

Note: 
+ REST is a set of design principles for making network communication more scalable and flexible.
+ Explain the RESTful routes and how they work. REST is a way of mapping HTTP verbs (`GET`, `POST`, `PATCH`, `DELETE`) and CRUD actions (create, read, update, delete) together in a semantic way. Explain what the wildcard `:id` is and why we need it on certain routes, and not on others. Explain that these routes are URI patterns combined with HTTP verbs, and that the controller action hit is based on the pattern matched. Anything with a wildcard has infinitely many URIs that could match it - if we made a `GET /photos/7` or `GET /photos/9` request they would both hit the `photos#show` action but for two different photos. It would match the `GET photos/:id` route, and the request would have parameters containing a key value pair of `id: 7` or `id: 9`, respectively.
+ Note that we won't be using the `#new` or `#edit` actions today - explain that these actions are specifically used to get a form to create a new resource or update an existing resource, but since we don't know HTML yet and can't make forms we wont' be doing that. You should hit home on the point that `new` corresponds to `create` in the same way `edit` corresponds to `update` in that `new` and `edit` are both responsible for getting forms that will trigger either `create` or `update`, respectively, upon submission.
+ Bonus question, what does REST stand for?
  + REST - Representational State Transfer

---

## Website vs. Web Service (API)

* **Website** is meant for a human to interface with - needs content that can be rendered (HTML, CSS, Javascript, images, etc.)
* **Web Service** is meant for machine to interface with - needs data that can be used/manipulated (JSON, XML, YAML, etc.)

Note:
+ Websites are meant for human interaction, whereas web services are meant for machine interaction
+ We haven't gotten to the View layer yet (the **V** in **MVC**) so we will use Rails as a web service for now and instead just return response in the form of data. JSON is the most common data-interchange format and we'll be working a lot with it later, so we'll use that for now but don't worry too much about what it is at this stage.

---

## Example requests to RESTful API
  * `GET /users` query all users
  * `GET /users/1` query for user with ID 1
  * `POST /users` create a new user
  * `PATCH /users/1` update user with ID 1
  * `DELETE /users/1` delete user with ID 1
  
Note: 
* Here's an example of some requests that would hit our RESTful routes. Note that we've replaced the wildcard `:id` with actual ids. Explain how this would playout again (even if you just explained on the previous slide, doesn't hurt to quickly re-iterate with an example in front of their face)
+ `GET /users` gets the users. `GET /users/1` gets the user with id 1.

---

## Can these two routes co-exist?

* `GET /users/:id`
* `GET /users/:username`

Note: The URI pattern is the same, with two different wildcards. These routes
essentially collide with each other as both will match the same pattern (e.g. 
`GET /users/1` and `GET /users/gerald` would each be matched by both routes - 
there's no way for us to know whether the thing after the second slash is an id
or a username immediately)

---

# HTTP Response
  * Components
    * **Status** (e.g. 200, 302, 404)
    * **Headers** (e.g. `Content-Type: text/html`)
    * **Body** (e.g. actual HTML document)
  * [Common Response Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
  
Note: 
+ So we have dispatched our request, its been interpreted by our router, and now its time for our server to send back its response.
+ A response has 3 key components - status, headers and body.
  + Status indicates whether the request was successful or not
  + Headers include _metadata_ about the response like what the format of the response is
  + The body contains the actual data/content the server responded with. This could be the HTML for our website, or maybe a JSON object containing data. 
+ There is also a link here to describe all status codes. Some of the more common are 200 for OK, or 404 for not found. Take some time during today's project to take a read through this. Status 418 is a favorite.

---

## `GET /users` in Rails App

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)

Note: 

- Last week we discussed the Model. As we know, the model is what handles all of our database logic 
  - In otherwords, our CRUD logic (how we create, read, update, and destroy items inside of our database)
- But, we know that isn’t enough for a website. In the end, we want a user to click ‘Sign Up’, and then somehow through some sort of witchcraft, that user gets inserted in our database with `ActiveRecord`. Eventually, I want to click “Like” on a chirp, and I want that like to somehow be recorded. 
- That is all done through something called the Request Response cycle, and that’s what today’s lecture is all about. 
- Router takes HTTP requests and decides where to send it
- Controller takes in HTTP Requests, decides what to _do_ with them & how to respond 

---

## Router:
#### Takes in HTTP Requests, decides where to _send_ them

## Controllers:
#### Take in HTTP Requests, decides what to _do_ with them & how to respond 

---

## Params
Hash-like Ruby Object which contains information about the HTTP request

Three ways to pass params in an HTTP request as follows:

* Using _wildcards_ inside a route (e.g. `/users/:id`)
* Via the _query string_ (e.g. `/path?param1=value1&param2=value2`)
* Inside the _request body_ (usually built using a form, basically a bunch of key value pairs)
  * Should avoid for `GET` requests

Note:
+ Explain that these are three ways you can pass up data with an HTTP request. The body is usually used to pass up data for a `POST` or `PATCH` request, that we want to add or update in our DB. We'll see examples of using each in the demo. 

---

## Code Demo

---

## Setting up Routes

* Generate 7 standard RESTful routes for a resource:
  ```rb
  resources :users
  ```
* Can add `only` or `except` option to include/exclude certain actions
  ```rb
  resources :users, only: [:create, :destroy]
  ```
  ```rb
  resources :users, except: [:create, :destroy]
  ```
* Create a custom route in `routes.rb`:
  ```rb
  get '/users', to: 'users#index'
  ```

Note:

+ Explain the various ways we can create routes in Rails. 
+ Explain the difference between `only` and `except`, in the example above `only` will give us the 2 routes specified, and `except` will give us the 5 routes _not_ specified

---

## Setting up Controllers

* Generate a controller in terminal :
  * `rails g controller users`
* If created manually, be sure to define your class as below:
  ```rb
  class UsersController < ApplicationController
  end
  ```
---

## Additional tips

* Generate a model in terminal :
  * `rails g model user`
* Roll back a generated controller or model, in terminal :
  * `rails d model <model_name>`
  * `rails d controller <model_name>`
* Add a JSON extension to make reading JSON responses easier e.g. JSON Formatter
  

---


![router?](https://media2.giphy.com/media/rDroB384ydCvK/giphy.gif?cid=1521963e5a323e69347a35782e164fe2)

### Pop Quiz: 
### Does the gif represent a `router` or a `controller`?

# Code Demo Part 2

___

Thank you! 
