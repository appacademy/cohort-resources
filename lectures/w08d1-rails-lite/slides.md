# W8D1
## Rails Lite

---

## Essential Questions

+ What is a server?
+ How is information sent across the internet?
+ What is Rack?
+ How can we build our own Rack-compliant web framework?

---

### What is a server?

---

### What happens when I type something into the address bar and hit `Enter`?

---

## How is information sent across the internet?

+ Agreed-upon set of protocols (IP, TCP, and HTTP)

---

## Rack Middleware

+ What is middleware? 
+ Interface between application server and application framework
+ A "Rack app" is an object that responds to the **call** method
    + Can be a class or a proc
    + Takes the environment hash as a parameter
    + Returns a response
      + Array with 3 values - status code, headers, and body
+ Rails is just a Rack app!

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