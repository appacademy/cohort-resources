require 'rack'
require 'byebug'
require_relative './my_controller.rb'

most_basic_app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    MyController.new(req, res).execute
    res.finish
    # ['200',{'Content-Type' => 'text/html'},['This is the most basic rack app.']]
end

Rack::Server.start({
    app: most_basic_app,
    Port: 3000    
})