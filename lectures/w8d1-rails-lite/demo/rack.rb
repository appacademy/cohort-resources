require 'rack'
require 'byebug'
require_relative './my_controller.rb'

most_basic_app = Proc.new do |env|
  req = Rack::Request.new(env)
  ['200', {'Content-Type' => 'text/html'}, ['<h1>yay for rack</h1>']]
end

fancy_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res.write("hello world")
  res['Content-Type'] = 'text/html'
  res.finish
end

super_fancy_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  MyController.new(req, res).execute
  res['Content-Type'] = 'text/html'
  res.finish
end

Rack::Server.start({
  app: super_fancy_app, #most_basic_app.call(req_info)
  Port: 3001
})