# W6D3

## Rails Routes & Controllers

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

![http](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w6d3-rails-controllers/assets/basic-http-request.png?token=ALXC6V2QABXVCOJLJNHM7GDAH6ZVS)


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

![url-parts](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w6d3-rails-controllers/assets/url-parts.png?token=ALXC6VYLKH6PEAI3LJUGSATAH62GE)


---

## RESTful Routes

![restful-routes](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w6d3-rails-controllers/assets/restful-routes.png?token=ALXC6VZ7ZHIZG6RZC24NJIDAH62IK)


---

## Website vs. Web Service (API)

* **Website** is meant for a human to interface with - needs content that can be rendered (HTML, CSS, Javascript, images, etc.)
* **Web Service** is meant for machine to interface with - needs data that can be used/manipulated (JSON, XML, YAML, etc.)



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

## Code Demo pt2:

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=93714b6e-51bf-46cb-a461-6064d1afd3ed)

---

Thank you! 
