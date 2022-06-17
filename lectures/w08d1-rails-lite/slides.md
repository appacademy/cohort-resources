# W8D1
## Servers / Rails Lite

---

## Learning Objectives

+ Describe how information is sent across the internet using TCP/IP and HTTP 

+ Understand how Rack simplifies the creation of varying web frameworks

+ Implement a basic Rack-compliant web framework

---

## What happens when you type 'google.com' into the address bar and hit `Enter`?

![thinking](http://media.giphy.com/media/lKXEBR8m1jWso/giphy.gif)

---

## What is a server?

Strickly speaking, a **server** is a computer program or device that provides a service to another computer program and its user, also known as the client.

More generally:

1. A computer sitting in somebody's basement or in a huge server farm.
2. The actual program running on a physical server
3. Any software that handles HTTP requests/responses during transit

---

## Internet Protocol Suite

![tcp-ip](https://cdn.kastatic.org/ka-perseus-images/6a0cd3a5b7e709c2f637c959ba98705ad21e4e3c.svg)

---

The key protocols that we'll discuss today are (from low to high):
- **Internet Protocol (IP)**:
	- routes data packets from source to destination
  - provides "best-effort delivery"
- **Transmission Control Protocol (TCP)**
	- establishes client-server connection via handshake process
  - breaks up and streams data via packets
  - adds a level of reliability
- **HyperText Transfer Protocol (HTTP)**
	- standardizes the content of requests/responses

---

## HTTP Headers

When making a `request`:
  * Common: `Accept`, `Content-Type`, `Cookie`, `User-Agent`
  * [More options](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields)
  
When making a `response`:
  * Common: `Date`, `Content-Length`, `Content-Type`, `Set-Cookie`
  * [More options](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Response_fields)

---

## Mini-HTTP Request Demo

---

## Quick Rails Review

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)

---

## Rack Middleware

* **Middleware** is a piece of software that sits between two other pieces of software
* **Rack** is middleware that sits between the webserver and our Rails application.
* A **Rack App** can be any object with a `#call` method
    * Can be a class or a proc
    * Takes the environment hash as a parameter
    * Returns a response (an array with 3 values - status code, headers, and body)

---

## Rack

![rack-diagram](https://miro.medium.com/max/1400/1*nOlFt4IW7S44jKJiLckHwg.png)

---

When invoking an app, Rack will pass in an `env` variable that contains:
* Information about the HTTP request:
  * HTTP request method
  * URL information
  * Server info (name, port)
* Rack-specific information:
  * version of Rack currently running
  * URL scheme (http vs https)
  * raw HTTP data

---

## Rack Request & Response

* Use `Rack::Request.new` to generate a Rack request object
* Use `Rack::Response.new` to generate a Rack response object
* When constructing a response, calling `res.finish` will return the required response array
  * [`STATUS_CODE`, `HASH_OF_HEADERS`, `BODY`]
  * e.g. `['200', {'Content-Type' => 'text/html'}, ['yay for rack!']]`

---

# Demo
* Build simple Rack App 
* Get server running
* Router functionality
* Build controller methods

---

## Rails Lite Learning Goals

* Understand general structure of a web application framework
* Deeply understand the fundamentals of Rails

---

## Rails Lite Tips

* Documentation is your friend!
* Classes we will write:
  * `ControllerBase`
  * `Session`
  * `Router` & `Route`
  * `Flash`

---

### Important Rack methods to get started

* **Rack::Request Methods**
  * `path`, `params`, `cookies`
* **Rack::Response Methods**
  * `write`, `finish`, `status=`, `[]=`, `set_cookie`, `location`

---

## Thank you!

---