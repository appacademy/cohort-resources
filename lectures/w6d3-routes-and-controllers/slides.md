# W6D3

## Rails Routes & Controllers

---

## Learning Objectives
+ Explain the basics of an HTTP request-response cycle
+ Explain how the request-response cycle works with respect to Rails & MVC
+ Explain what a RESTful API is
+ Build Rails Routes, Controllers & Actions corresponding to the 7 RESTful routes

---

## Lecture Agenda
+ MVC Overview
+ HTTP Request-Response Cycle
+ Routes
+ Controllers

---

## MVC Overview

+ We've covered models
+ Next up: Routes and Controllers

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)

---

## What happens when you go to `google.com` and hit `Enter`?

+ Take 30 seconds to think of some ideas.

---

## The HTTP Request-Response Cycle

+ When you type `www.google.com` in your url bar and hit `Enter`:
    1. Our computer (the client) sends an HTTP request to a server. (GET www.google.com page)
    2. The server handles request and formulates an appropriate response.
    3. The HTTP response is sent back to the client.

+ HTTP:
    - protocol for communication over the internet
    - clients and servers communicate via messages (requests and responses)
    - HTTP requests and responses are just strings
    - HTTP defines how request and response messages are formatted and transmitted

---

## Components of an HTTP Request
  * **Method (HTTP Verb)** (e.g. `GET`, `POST`) - describes what action to perform
  * **Path** (e.g. `/users`) - a string that specifies the resource being requested
  * **Query String** (e.g. `?loc=new+york` - _optional_) - may further specify the resource requested
  * **Body** (e.g. `username=janedoe` - _optional_) - additional data from the client

---

## Anatomy a URL

The **path** and **query string** are part of the URL

* The `path` in an http request is simply the path that is relative to the domain. 
* We won't worry about the domain for now. We'll focus on the `path` for our discussion of HTTP requests and Rails routes and controllers.

---
# 5 minute break
---

## Components of an HTTP Request
  * **Method (HTTP Verb)** (e.g. `GET`, `POST`) - describes what action to perform
  * **Path** (e.g. `/users`) - a string that specifies the resource being requested
  * **Query String** (e.g. `?loc=new+york` - _optional_) - may further specify the resource requested
  * **Body** (e.g. `username=janedoe` - _optional_) - additional data from the client

* _Note: the path, the query string, and the request body represent the three main ways to send information in an HTTP request_

---

## HTTP Methods

* `GET` (get something from the database)
* `POST` (insert something into the DB)
* `PATCH`/`PUT` (change something in the DB)
* `DELETE` (remove something from the DB)

---

## Components of an HTTP Response
  * **Status** (e.g. 200, 302, 404)
    - indicates the type of response (whether successful or not)
    - [Common Response Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
  * **Body** (e.g. actual HTML document, or data formatted as JSON)
    - the actual data/content the server responded with

---

## Lecture Agenda
+ MVC Overview
+ HTTP Request-Response Cycle
+ Rails Router and RESTful Routes <---
+ Controllers

---
### 5 minute break
---

## Rails Router

#### Takes in HTTP Requests, decides where to _send_ them

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)

* The Router instantiates an **instance of a controller** and invokes an action on that controller

---

## REST: Representational State Transfer

#### REST is a standardized way to interpret an http request and extrapolate the desired response from the server

#### A convention that maps HTTP verbs onto CRUD actions

* `POST` -------------> **C**reate (insert record into DB)
* `GET` --------------> **R**ead (retrieve record(s) from DB)
* `PATCH` / `PUT` ----> **U**pdate (update record in DB)
* `DELETE` ----------> **D**estroy (remove record from DB)

A RESTful API defines a predictable way for us to access and manipulate resources in our application.
- Reminder: API = Application Programming Interface. (The public-facing portion of our Rails application.)

---

## RESTful Routes
>>>demo


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

* Rails Guide on Routing: https://edgeguides.rubyonrails.org/routing.html

---

## Example requests to RESTful API
  * `GET /users` query all users
  * `GET /users/1` query for user with ID 1
  * `POST /users` create a new user
  * `PATCH /users/1` update user with ID 1
  * `DELETE /users/1` delete user with ID 1
  
Note: 
* Here's an example of some requests that would hit our RESTful routes. Note that we've replaced the wildcard `:id` with actual ids.
    + `GET /users` gets the users. `GET /users/1` gets the user with id 1.
* What is the controller action associated with each request? 
* For requests with the wildcard, how we will access the `1` inside of our controller action?

---

## Can these two routes co-exist?

* `GET /users/:id`
* `GET /users/:username`

Vote with a reaction: ✅ or ❌


---
### 5 minute break
---

## Lecture Agenda
+ MVC Overview
+ HTTP Request-Response Cycle
+ Rails Router and RESTful Routes
+ Controllers <---

---

## Controllers

#### Takes in HTTP Requests, decides what to _do_ with them & how to respond

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)

* Controllers work with models and views to populate a response to be sent back to the client.

---

## Params

Three ways to pass params in an HTTP request as follows:

* Using _wildcards_ inside a route (e.g. `/users/:id`)
* Via the _query string_ (e.g. `/path?param1=value1&param2=value2`)
* Inside the _request body_ (usually built using a form, basically a bunch of key value pairs)
  * Should avoid for `GET` requests

Note:
+ These are three ways you can pass up data with an HTTP request. The body is usually used to pass up data for a `POST` or `PATCH` request, that we want to add or update in our DB. We'll see examples of using each in the demo. 

---

## Setting up Controllers

>>> controllers demo

Note:

+ Write the controllers by hand (avoid using generators)

---

## [Kahoot! - Quiz 2](https://play.kahoot.it/v2/?quizId=ebd33304-5eda-4b98-aca5-ccd4bddf677c)

---

## Additional tips, good habits for learning Rails

* Read your server log often!
    - You can confirm each request that was made to the server and see the response status
    - Any request parameters will be visible in the log
    - If you have a 500-level server error, check your server log for helpful error messages
    - Debuggers will appear in the log
* Use debuggers in your controller actions. Check the information inside of `params`.
* Use Chrome Dev Tools' Network panel to gain additional information about a request/response
* Add a JSON extension to make reading JSON responses easier e.g. JSON Formatter
* Commit to learning Rails' naming conventions early! (e.g., Controller names are pluralized, Model names are singular)

---

Thank you! 