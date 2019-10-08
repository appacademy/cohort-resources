require 'rack'
require 'byebug'
require_relative 'controllers/base_controller'

rack_app = Proc.new do |env| 
    rack_req = Rack::Request.new(env)
    rack_res = Rack::Response.new
    # default status is 200
    meeseeks = BaseController.new(rack_req, rack_res)
    meeseeks.execute 
    rack_res.finish
end

Rack::Server.start(
    app: rack_app, 
    Port: 3000
)

# Rack is creating env hash and handing it to the app