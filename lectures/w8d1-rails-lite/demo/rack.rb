require 'rack'
require 'byebug'

require_relative './my_controller.rb'

# a rack compliant app
# responds to #call(env)
# returns a basic response array [status, header_hash, body]

most_basic_rack_app = Proc.new do |env|
  debugger
  ['200',{},['I\'m basic']]
end

fancier_basic_rack_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  res.write('<h1>I\'m basic</h1>')
  res.finish
end

fancy_rack_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  MyController.new(req, res).execute()
  res.finish
end

Rack::Server.start({
  app: fancy_rack_app,
  Port: 3000
})