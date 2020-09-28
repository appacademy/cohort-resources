# W6D3
## Rails Routes & Controllers
---
![Peace of Mind](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w6d3-rails-controllers/assets/peace_mind.jpeg?token=AMIDLIBFG4UAE4GISQTQ75S6YQKQ6)
---
## Learning Objectives
+ Explain the basics of an HTTP request-response cycle
+ Explain how the request-response cycle works with respect to Rails & MVC
+ Explain what a RESTful API is
+ Build Rails Routes, Controllers & Actions corresponding to the 7 RESTful routes
---
## What is a server?
---
## What happens when you go to `google.com` and hit `Enter`?
---
![http](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w6d3-rails-controllers/assets/basic-http-request.png?token=AMIDLIHTK4WSAT2YV3UCFW26YMAP6)
---
# HTTP Request Basics
  * Comprised of:
    * **Request Line**
      * **Method (HTTP Verb)** (e.g. `GET`, `POST`)
      * **Path** (e.g. `/users`)
      * **Query String** (e.g. `?loc=san+francisco` - _optional_)
    * **Headers** (e.g. `Host: www.google.com`)
    * **Body** (e.g. `username=johndoe` - _optional_)
---
# HTTP Methods (CRUD)
* `POST` (**C**reate)
* `GET` (**R**ead)
* `PATCH` (**U**pdate, also `PUT`)
* `DELETE` (**D**elete)
---
# REST
---
## Parts of a URL
![url-parts](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w6d3-rails-controllers/assets/url-parts.png?token=AMIDLIHASNHJFKCBKRYAE4C6YMAVU)
---
## RESTful Routes
![restful-routes](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w6d3-rails-controllers/assets/restful-routes.png?token=AMIDLIHUTDAP5FUA335XVWC6YMAZO)
---
## Website vs. Web Service (API)
* **Website** is meant for a human to interface with - needs content that can be rendered (HTML, CSS, Javascript, images, etc.)
* **Web Service** is meant for a machine to interface with - needs data that can be used/manipulated (JSON, XML, YAML, etc.)
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
---
## Why can these two routes not co-exist?
* `GET /users/:id`
* `GET /users/:username`
---
# HTTP Response
  * Components
    * **Status** (e.g. 200, 302, 404)
    * **Headers** (e.g. `Content-Type: text/html`)
    * **Body** (e.g. actual HTML document)
  * [Common Response Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
---
## `GET /users` in Rails App
![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)
---
## Router:
#### Takes in HTTP Requests, decides where to _send_ them
## Controllers:
#### Take in HTTP Requests, decides what to _do_ with them & how to respond
---
## Params
Three ways to pass params in an HTTP request as follows:
* Using _wildcards_ inside a route (e.g. `/users/:id`)
* Via the _query string_ (e.g. `/path?param1=value1&param2=value2`)
* Inside the _request body_ (usually built using a form, basically a bunch of key value pairs)
  * Should avoid for `GET` requests
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
  * `rails d controller <controller_name>`
* Add a JSON extension to make reading JSON responses easier e.g. JSON Formatter
---
## 5 min break!
## [Timer](https://www.google.com/search?q=google+timer+10+minutes&oq=google+timer+10+min&aqs=chrome.0.0j69i57j0l4.3676j0j7&sourceid=chrome&ie=UTF-8)
---
![router?](https://media2.giphy.com/media/rDroB384ydCvK/giphy.gif?cid=1521963e5a323e69347a35782e164fe2)
### Pop Quiz:
### Does the gif represent a `router` or a `controller`?
---
## [Kahoot!](https://play.kahoot.it/v2/?quizId=93714b6e-51bf-46cb-a461-6064d1afd3ed)
---