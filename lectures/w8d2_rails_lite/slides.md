# W8D2
### Rails Lite

---

## Learning Objectives

+ Describe how information is sent across the internet using HTTP, TCP & IP 
+ Describe what Rack is at a basic level, and how it provides a common interface
between Ruby web servers and web application frameworks
+ Implement a Base Controller and Router for a basic Rack-compliant web framework

---

## Agenda

* HTTP, TCP, IP 
* Mini Rails Review
* Rack Middleware
* Today's Project (Rails Lite)

---

### What happens when you go to 'maps.google.com' and press 'enter'?

Note: 
VERY detailed analysis: https://github.com/alex/what-happens-when

less detailed but very useful: https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a

---

## Internet Protocol (IP)

* Principal communications protocol for sending **packets** of information
across the Internet
* Sent from a _source_ host to a _destination_ host based on their **IP 
Addresses**
  * What's the difference between a domain and an IP Address?
* Primary responsibility is to route data packet from source to destination
  * Typically many intermediaries (known as **hops**) that packet is routed through
* Provides "best-effort delivery" - cannot guarantee that data is not corrupted
or lost


Note:
* In the OSI model, IP is the _network_ layer
* A packet is a formatted unit of data consisting of a header, which states the
source & destination IP Addresses, and a payload, which contains the actual data
of the request. 
* A domain is simply a name, whereas an IP address is the physical location of
a machine. A domain name can be queried against the DNS to figure out a physical
IP to send the packet to.
*  IP is the primary way in which network connections are made, and it establishes the basis of the Internet. IP does not handle packet ordering or error checking.

---

## Transmission Control Protocol (TCP)

* Higher-level protocol running on top of IP that ensures information is reliable,
ordered and error-checked, despite inherent unreliability of IP
* Establishes connection to a specific **port** through **handshake** process
* Labels packets so they may be received in any order and continually sends 
packets until their receipt has been acknowledged

Note:
* In the OSI model, TCP is the _transport_ layer
+ The TCP/IP relationship is similar to sending someone a message written on a puzzle through the mail. The message is written down and the puzzle is broken into pieces. Each piece then can travel through a different postal route, some of which take longer than others. When the puzzle pieces arrive after traversing their different paths, the pieces may be out of order. The Internet Protocol makes sure the pieces arrive at their destination address. The TCP protocol can be thought of as the puzzle assembler on the other side who puts the pieces together in the right order, asks for missing pieces to be resent, and lets the sender know the puzzle has been received. TCP maintains the connection with the sender from before the first puzzle piece is sent to after the final piece is sent.

---

## TCP Handshake (3 steps)

* _Synchronize_ - Computer A sends Computer B message
* _Synchronize-Acknowledgment_ - Computer B sends message back to Computer A, acknowledging that it received it
* _Acknowledgment_ - Computer A send message back to Computer B, acknowledging that it received it


---

![tcp-joke](https://pbs.twimg.com/media/DTwhKGHU8AAjDh-?format=jpg&name=small)

Note:
Take note of how each response back re-iterates the message - this is part of 
the acknowledgment. It's not enough to say "I got the message" - need to repeat
it back so sender can verify they got the _correct_ message

---

## TCP/IP Model

![tcp-ip-model](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/rails/w8d2-rails-lite/assets/tcp-ip-model.png?token=AMIDLIB4ZI64V4Q6OD5KA5K7NEHTO)

Note: NAL - Ethernet/physical
IL - IP adressing routing
TL - TCP (host-to-host layer)
HTTP - client-server architecure comes in play/ applications

---

## Hypertext Transfer Protocol (HTTP)

* Rules for how actual content of request/response should **look**
* Assumes an underlying and reliable transport layer (i.e. TCP/IP)
* HTTP request consists of **request line**, **headers**, and **body** (unless `GET`)
* HTTP response consists of **response line**, **headers**, and **body**
* HTTP/1.1 is most common version, but HTTP/2 is growing rapidly
* HTTP/2 is used by 41.1% of the top 10 million websites
  * [Growing rapidly!]( https://w3techs.com/technologies/details/ce-http2/all/all)
  
Note: 
* In the OSI model, HTTP is the _application layer_
* Talk about what _hypertext_ means - text that leads to other text. Note how
HTML is Hypertext Markup Language - it structures hypertext. HTTP is the 
protocol for how this hypertext should be structured in a request to be sent
over a network
* Link on the differences between HTTP/1.1 and HTTP/2: https://www.pacwebhosting.co.uk/insight/News/NewsItem/View/31/http11-vs-http2-whats-the-difference
  * In short: "Loading a web page is resource intensive, as HTTP/1.1 only allows one outstanding request per TCP connection. With HTTP/2, multiplexing was introduced, allowing multiple requests at the same time, and therefore speeding up the process of delivering web pages and content.
  * The technology also means that only one connection to the server is used when loading a website, which remains open as long as the website is open. This reduces the amount of round trips that are required to set up multiple TCP connections."
* I don't love this analogy but you can use it if you find it helpful:
  * HTTP assumes an underlying and reliable transport layer protocol (TCP/IP)
    * Freeways/lights: TCP
    * Addresses: IP
    * Cars/Trucks/Trains: HTTP

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

## Status Codes

* 1xx (informational)
* 2xx (success)
* 3xx (redirection)
* 4xx (client error)
* 5xx (server error)

Note:
[List of status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

---

## Mini-HTTP Request Demo

Note: Run `curl -v http://www.google.com` in terminal - explain the various parts
of the HTTP request/response (potentially acknowledge how the TCP connection is
established up top before the request is actually sent).

---

## Quick Rails Review

* Router
* Controller
* Model
* View

---

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)

Note: When going over this image, emphasize that we've already done the parts on the right during ActiveRecord Lite day (ORM and database), so the focus today will be on the router and controllers (views are just html, you don't need to do anything with them except read from a file).

---

## Rack

![rack-diagram](https://i2.wp.com/www.rubyguides.com/wp-content/uploads/2018/09/rack-stack-1.png?resize=417%2C384&ssl=1)

---

## Rack Middleware

* Interface between application server and application framework (e.g. Puma & Rails)
* A "Rack app" is an object that responds to the call method
    * Can be a class or a proc
    * Takes the environment hash as a parameter
    * Returns a response
      * Array with 3 values - status code, headers, and body
* Rails is just a Rack app!

Note: 
* [Documentation](http://www.rubydoc.info/github/rack/rack/master/file/SPEC)

---

## Rack Environment (env)

* Contains information on the HTTP request:
  * HTTP request method
  * URL information
  * Server info (name, port)
* Contains Rack-specific info:
  * version of Rack currently running
  * URL scheme (http vs https)
  * raw HTTP data

Note:
* [Documentation](http://www.rubydoc.info/github/rack/rack/master/Rack/Request/Env)
* [Example](https://stackoverflow.com/questions/17396611/what-is-the-env-variable-in-rack-middleware)

---

## Rack Request

* Use `Rack::Request` to generate a Rack request object
* Takes Rack Environment as an argument
* Not required but:
  * provides a cleaner interface than parsing the Environment object directly
  * parsing the string ourselves is error-prone and laborious

Note:
* [Documentation](http://www.rubydoc.info/github/rack/rack/master/Rack/Request)

---

## Rack Response
* Use `Rack::Response` to generate a Rack response object
* Not required to use
* Calling `res.finish` will return required response array
  * [`STATUS_CODE`, `HASH_OF_HEADERS`, `BODY`]
  * e.g. `['200', {'Content-Type' => 'text/html'}, ['yay for rack!']]`

Note:
* [Documentation](http://www.rubydoc.info/github/rack/rack/master/Rack/Response)

---

# 5 min break!



---

# Demo
* Build simple Rack App 
* Get server running
* Router functionality
* Build controller methods

---

## Rails Lite Learning Goals

* Deeply understand the fundamentals of Rails by building it
* Understand general structure of a web application framework
* Don't work on Javascript yet!
  * Understanding this will help you stand out in interviews
    * Aspiring backend engineers, take note!

Note: For backend engineers, this is really the fundamentals of what you'll want to know. Anyone interested in backend positions should take today very seriously!

---

### Important Rack methods to get started

* **Rack::Request Methods**
  * `path`, `params`, `cookies`
* **Rack::Response Methods**
  * `write`, `finish`, `status=`, `[]=`, `set_cookie`, `location`

---

## Rails Lite Tips

* Documentation is your friend!
* Run all spec files with `bundle exec`!
* Just do your best to get as far as you can for today 
  * This can be a valuable project to revisit in the future.
* Classes we will write:
  * `ControllerBase`
  * `Session`
  * `Router` & `Route`
  * `Flash`

---

![baby-octo](https://media2.giphy.com/media/5zunlU97tg6J4YqSj0/giphy.gif)
## Thanks!

