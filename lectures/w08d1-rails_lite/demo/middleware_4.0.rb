require 'rack'
require './my_controller_4.0'

basic_rack_app_PROC = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    MyController.new.execute(req, res)
    res.finish    
end

hash = {
    app: basic_rack_app_PROC, 
    Port: 3000
}

Rack::Server.start(hash)