require 'rack'
require "json"
require "byebug"

class RackApplication
    def self.call(env)
        #three requirements to the response of a rack application
        #needs to return an array where the first el is the status code 
        #second el is the headers, 
        # third el is the body
        debugger
        return ["200",{'Content-type' => "text/html"}, ["hey there"]]
    end
end

class SimpleApp
    def self.call(env)
        #req turns the env request into a nice object that we can call methods on 
        req = Rack::Request.new(env)
        #res is an empty response that we're gonna fill
        #res autmatically fills the content-length header with the length of the response body
        res = Rack::Response.new

        #req.params gives you the contents of the query string and the request body
        name = req.params["name"]
        res.write("Hello #{name}")
        #res.finish will turn the res object into the properly formatted array that is required upon a rack response
        #looks something like this ["200",{'Content-type'=> "text/html"}, ["hey there"]]
        res.finish  
    end
end

class CookieApp
    def self.call(env)
        req = Rack::Request.new(env)
        res = Rack::Response.new

        food = req.params["food"]
        if food
            res.set_cookie(
                "_my_cookie_app",
                {path:"/", #path is this / because I want it to be available everywhere on the application
                value:{food:food}.to_json
                }
            )
        else
            debugger
            #req.cookies["_my_cookie_app"] will be a string
            cookie = req.cookies["_my_cookie_app"]
            #JSON.parse(cookie) will turn the string into json
            cookie_val = JSON.parse(cookie)
            #keying into the json object to get the food 
            food = cookie_val['food']
            #printing out the food
            res.write("your favorite food is #{food}")
        end

        res.finish
    end
end

#procs are a nice way to represent an application because they inherently respnd to call method
#when invoked

app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new


end

Rack::Server.start({
    app: RackApplication,
    Port: 3000
})