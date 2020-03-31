require 'rack'
require 'byebug'
require_relative 'controllers/base_controller'

# Rack-compliant: responds to the call method 
rack_app = Proc.new do |env|
    req = Rack::Request.new(env)
    # ["200", {"Content-Type" => "text/html"}, ["Hello World!"]]
    res = Rack::Response.new

    # hand off the request and response to the controller instance
    meseeks = BaseController.new(req, res)
    meseeks.execute 

    res.finish
end


Rack::Server.start({
    app: rack_app, 
    Port: 3000
})

