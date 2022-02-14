# W8D2
### Rails Lite

---

## Learning Objectives

+ What is a Server?
+ Describe how information is sent across the internet using HTTP, TCP & IP 
+ Describe what Rack is at a basic level, and how it provides a common interface
between Ruby web servers and web application frameworks
+ Implement a Base Controller and Router for a basic Rack-compliant web framework

---

### What happens when you go to 'google.com' and press 'enter'?

---

### But what is a Server?

---

## Internet Protocol (IP) and Transmission Control Protocol (TCP)

* IP is the principal communications protocol responsible for routing data packets from source to destination
* Provides "best-effort delivery" - cannot guarantee that data is not corrupted
or lost
* TCP is higher-level protocol running on top of IP that ensures information is reliable
* Establishes connection to a specific **port** through **handshake** process 

---

## TCP Handshake (3 steps)
* _Synchronize_ - Computer A sends Computer B message
* _Synchronize-Acknowledgment_ - Computer B sends message back to Computer A, acknowledging that it received it
* _Acknowledgment_ - Computer A send message back to Computer B, acknowledging that it received it

---

## Hypertext Transfer Protocol (HTTP)

* Rules for how actual content of request/response should **look**
* Assumes an underlying and reliable transport layer (i.e. TCP/IP)
* HTTP/1.1 is most common version, but HTTP/2 is growing rapidly
* HTTP/2 is used by 41.1% of the top 10 million websites
  * [Growing rapidly!]( https://w3techs.com/technologies/details/ce-http2/all/all)

---

## HTTP Headers
* Set of key-value pairs that specify various properties of the HTTP request or response
* Request
  * Only one required header (in HTTP/1.1): `Host`
  * Common: `Accept`, `Content-Type`, `Cookie`, `User-Agent`
  * [More options](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields)
* Response
  * No *required* headers
  * Common: `Date`, `Content-Length`, `Content-Type`, `Set-Cookie`
  * [More options](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Response_fields)

---

## Mini-HTTP Request Demo
* curl -v http://www.google.com

---

## AA Open Videos
* W8D1 > Materials > HTTP
* W8D1 > Materials > HTTP Demo

---

## Quick Rails Review

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)

---

## AA Open Videos
* W8D1 > Materials > Rails from the Inside Out

---

## Rack Middleware

* What is middleware? 
  * A piece of software that sits between two other pieces of software/processes and facilitates some type of data transfer between the two.
  * Rack is middleware that sits between the webserver and our Rails application.
* Interface between application server and application framework (e.g. Puma & Rails)
* A "Rack app" is an object that responds to the **call** method
    * Can be a class or a proc
    * Takes a hash as a parameter
    * Returns a response
      * Array with 3 values - status code, headers, and body

---

## AA Open Videos
* W8D1 > Materials > Rack
* W8D1 > Materials > Rack Demo

---

## Rack Environment (env)

* Contains information about the HTTP request:
  * HTTP request method
  * URL information
  * Server info (name, port)
* Contains Rack-specific info:
  * version of Rack currently running
  * URL scheme (http vs https)
  * raw HTTP data

---

## Rack Request && Response

* Use `Rack::Request` to generate a Rack request object
* Takes Rack Environment as an argument
* These `Rack` classes are not required but:
  * provides a cleaner interface than parsing the Environment object directly
  * parsing the string ourselves is error-prone and laborious
* Use `Rack::Response` to generate a Rack response object
* Calling `res.finish` will return required response array
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

* Deeply understand the fundamentals of Rails by way of building it
* Understand general structure of a web application framework
* Don't work on Javascript yet!
  * Understanding this will help you stand out in interviews
    * Aspiring backend engineers, take note!

---

## Rails Lite Tips

* Documentation is your friend!
* Run all server files with `bundle exec`!
* Just do your best to get as far as you can for today 
  * This can be a valuable project to revisit in the future.
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