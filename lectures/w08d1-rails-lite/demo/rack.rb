require 'rack'
require 'byebug'

require_relative './my_controller.rb'

simplest_possible_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  # ['200', {'Content-Type' => 'text/html'}, ['<h1>this is a body</h1>']]
  # res.write('<h1>Hello world</h1>')
  # res['Content-Type'] = 'text/html'
  # res['Set-Cookie'] = 'testing: \'whoa\''
  # res.finish
  # ['302', {'Location' => 'http://www.google.com'},[]]
  # res.status = 302
  # res.location = 'http://www.google.com'
  # res['Location'] = 'http://www.google.com'
  # res.finish

  # Routes
  p req.fullpath
  p req.request_method

  # instantiates new controller instance and invokes proper action/method based on above
  MyController.new(req, res).execute
  res.finish
end

Rack::Server.start({
  app: simplest_possible_app, # simplest_possible_app.call(env)
  Port: 3000
})